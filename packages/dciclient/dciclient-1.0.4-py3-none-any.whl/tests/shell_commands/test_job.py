# -*- encoding: utf-8 -*-
#
# Copyright 2015-2016 Red Hat, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License"); you may
# not use this file except in compliance with the License. You may obtain
# a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations
# under the License.

from dciclient.v1.api import job

import pytest
import requests
import requests.exceptions


try:
    requests.get("http://google.com")
except requests.exceptions.ConnectionError:
    internet_cnx = False
else:
    internet_cnx = True


def test_list(
    runner, dci_context, dci_context_remoteci, team_user_id, remoteci_id, product_id,
):
    topic = runner.invoke(
        [
            "topic-create",
            "--name",
            "osp",
            "--component_types",
            "type_1",
            "--no-export-control",
            "--product-id",
            product_id,
        ]
    )["topic"]

    runner.invoke(["topic-attach-team", topic["id"], "--team-id", team_user_id])

    runner.invoke(
        [
            "component-create",
            "--name",
            "foo",
            "--type",
            "type_1",
            "--topic-id",
            topic["id"],
        ]
    )["component"]

    job.schedule(dci_context_remoteci, topic["id"])
    l_job = runner.invoke(["job-list"])
    assert len(l_job["jobs"]) == 1
    assert l_job["jobs"][0]["remoteci"]["id"] == remoteci_id
    assert l_job["jobs"][0]["topic"]["id"] == topic["id"]
    output = runner.invoke(["job-list"])
    assert output["jobs"][0]["topic"]["name"] == "osp"
    assert output["jobs"][0]["id"] == l_job["jobs"][0]["id"]

    l_job = runner.invoke(["job-list", "--where", "remoteci_id:" + remoteci_id])
    assert len(l_job["jobs"]) == 1


def test_list_as_remoteci(job, remoteci_id, runner_remoteci):
    l_job = runner_remoteci.invoke(["job-list"])
    assert len(l_job["jobs"]) == 1
    assert l_job["jobs"][0]["remoteci"]["id"] == remoteci_id
    assert l_job["jobs"][0]["topic"]["id"] == job["topic_id"]
    output = runner_remoteci.invoke(["job-list"])
    assert output["jobs"][0]["topic"]["name"] == "foo_topic"
    assert output["jobs"][0]["id"] == job["id"]

    l_job = runner_remoteci.invoke(
        ["job-list", "--where", "remoteci_id:" + remoteci_id]
    )
    assert len(l_job["jobs"]) == 1


def test_list_with_limit(runner, job_factory):
    for _ in range(6):
        job_factory()
    # test --limit XX
    l_job = runner.invoke(["job-list"])
    assert len(l_job["jobs"]) == 6
    l_job = runner.invoke(["job-list", "--limit", "1"])
    assert len(l_job["jobs"]) == 1


def test_delete(runner, job_id):
    l_job = runner.invoke(["job-show", job_id])
    l_job_etag = l_job["job"]["etag"]

    result = runner.invoke_raw(["job-delete", job_id, "--etag", l_job_etag])

    assert result.status_code == 204


def test_results(runner, job_id):
    result = runner.invoke(["job-results", job_id])["results"][0]

    assert result["filename"] == "res_junit.xml"


@pytest.mark.skipif(not internet_cnx, reason="internet connection required")
def test_attach_issue(runner, job_id):
    result = runner.invoke(["job-list-issue", job_id])["_meta"]["count"]
    assert result == 0

    issue = runner.invoke(
        [
            "job-attach-issue",
            job_id,
            "--url",
            "https://github.com/redhat-cip/dci-control-server/issues/2",
        ]
    )
    # NOTE(Goneri): until we fix the consistency issue with this endpoint:
    # https://softwarefactory-project.io/r/6863
    if "issue" in issue:
        issue = issue["issue"]
    else:
        issue["id"] = issue["issue-id"]
    result = runner.invoke(["job-list-issue", job_id])
    assert issue["id"] == result["issues"][0]["id"]


@pytest.mark.skipif(not internet_cnx, reason="internet connection required")
def test_unattach_issue(runner, job_id):
    result = runner.invoke(["job-list-issue", job_id])["_meta"]["count"]
    assert result == 0

    runner.invoke(
        [
            "job-attach-issue",
            job_id,
            "--url",
            "https://github.com/redhat-cip/dci-control-server/issues/2",
        ]
    )
    result = runner.invoke(["job-list-issue", job_id])
    res = result["_meta"]["count"]
    issue_id = result["issues"][0]["id"]
    assert res == 1

    runner.invoke_raw(["job-unattach-issue", job_id, "--issue-id", issue_id])
    result = runner.invoke(["job-list-issue", job_id])
    count = result["_meta"]["count"]
    assert count == 0


def test_job_output(runner, job_id):
    result = runner.invoke_raw(["job-output", job_id])
    assert result[0].startswith("pre-run")


def test_tags(runner, job_id):
    tags = runner.invoke(["job-list-tags", job_id])["tags"]
    assert len(tags) == 0
    tag = runner.invoke(["job-add-tag", job_id, "foo"])["tag"]
    tags = runner.invoke(["job-list-tags", job_id])["tags"]
    assert len(tags) == 1
    assert tags[0]["id"] == tag["id"]
    assert tags[0]["name"] == "foo"
    runner.invoke_raw(["job-delete-tag", job_id, tag["id"]])
    tags = runner.invoke(["job-list-tags", job_id])["tags"]
    assert len(tags) == 0


def test_file_support(runner, tmpdir, job_id):
    td = tmpdir
    p = td.join("hello.txt")
    p.write("content")

    # upload
    new_f = runner.invoke(
        [
            "job-upload-file",
            job_id,
            "--name",
            "test",
            "--mime",
            "application/octet-stream",
            "--path",
            p.strpath,
        ]
    )["file"]
    assert new_f["size"] == 7

    # show
    new_f = runner.invoke(["job-show-file", job_id, "--file-id", new_f["id"]])["file"]
    assert new_f["size"] == 7
    assert new_f["mime"] == "application/octet-stream"

    # download
    runner.invoke_raw(
        [
            "job-download-file",
            job_id,
            "--file-id",
            new_f["id"],
            "--target",
            td.strpath + "/my_file",
        ]
    )
    assert open(td.strpath + "/my_file", "r").read() == "content"

    # list
    my_list = runner.invoke(["job-list-file", job_id])["files"]
    assert len(my_list) == 3
    assert my_list[0]["size"] == 7

    # delete
    runner.invoke_raw(["job-delete-file", job_id, "--file-id", new_f["id"]])
    result = runner.invoke_raw(["job-show-file", job_id, "--file-id", new_f["id"]])
    assert result.status_code == 404


def test_file_support_as_remoteci(runner_remoteci, tmpdir, job_id):
    td = tmpdir
    p = td.join("remoteci.txt")
    content = u"remoteci content".encode("utf-8")
    p.write(content, "wb")

    my_original_list = runner_remoteci.invoke(["job-list-file", job_id])["files"]

    # upload
    new_f = runner_remoteci.invoke(
        ["job-upload-file", job_id, "--name", "testrci", "--path", p.strpath]
    )["file"]
    assert new_f["size"] == len(content)

    # show
    new_f = runner_remoteci.invoke(["job-show-file", job_id, "--file-id", new_f["id"]])[
        "file"
    ]
    assert new_f["size"] == len(content)

    # download
    runner_remoteci.invoke_raw(
        [
            "job-download-file",
            job_id,
            "--file-id",
            new_f["id"],
            "--target",
            td.strpath + "/my_file",
        ]
    )
    assert open(td.strpath + "/my_file", "rb").read() == content

    # list
    my_list = runner_remoteci.invoke(["job-list-file", job_id])["files"]
    assert len(my_list) == len(my_original_list) + 1
    assert my_list[0]["size"] == len(content)

    # delete
    runner_remoteci.invoke_raw(["job-delete-file", job_id, "--file-id", new_f["id"]])
    result = runner_remoteci.invoke_raw(
        ["job-show-file", job_id, "--file-id", new_f["id"]]
    )
    assert result.status_code == 404
