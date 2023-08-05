# coding: utf-8

"""
    Pulp 3 API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: v3
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest

import pulpcore.client.pulp_ansible
from pulpcore.client.pulp_ansible.api.repositories_ansible_versions_api import RepositoriesAnsibleVersionsApi  # noqa: E501
from pulpcore.client.pulp_ansible.rest import ApiException


class TestRepositoriesAnsibleVersionsApi(unittest.TestCase):
    """RepositoriesAnsibleVersionsApi unit test stubs"""

    def setUp(self):
        self.api = pulpcore.client.pulp_ansible.api.repositories_ansible_versions_api.RepositoriesAnsibleVersionsApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_delete(self):
        """Test case for delete

        Delete a repository version  # noqa: E501
        """
        pass

    def test_list(self):
        """Test case for list

        List repository versions  # noqa: E501
        """
        pass

    def test_read(self):
        """Test case for read

        Inspect a repository version  # noqa: E501
        """
        pass

    def test_repair(self):
        """Test case for repair

        """
        pass


if __name__ == '__main__':
    unittest.main()
