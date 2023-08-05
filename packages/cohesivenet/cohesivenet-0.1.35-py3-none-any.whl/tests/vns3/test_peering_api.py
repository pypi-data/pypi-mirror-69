# coding: utf-8

"""
    VNS3 Controller API

    Cohesive networks VNS3 API providing complete control of your network's addresses, routes, rules and edge  # noqa: E501

    The version of the OpenAPI document: 4.8
    Contact: solutions@cohesive.net
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import pytest

import cohesivenet
from cohesivenet.api.vns3 import peering_api  # noqa: E501
from cohesivenet.rest import ApiException

from tests.openapi import generate_method_test
from tests.vns3.stub_data import PeeringApiData


class TestPeeringApi(object):
    """PeeringApi unit test stubs"""

    def test_delete_peer(self, rest_mocker, vns3_client, vns3_api_schema: dict):
        """Test case for delete_peer

        """
        generate_method_test(
            vns3_client,
            vns3_api_schema,
            "delete",
            "/peering/peers/{peer_id}",
            rest_mocker,
            mock_request_from_schema=True,
            mock_response=PeeringApiData.PeeringStatus,
        )(peering_api.delete_peer)

    def test_get_peering_status(self, rest_mocker, vns3_client, vns3_api_schema: dict):
        """Test case for get_peering_status

        """
        generate_method_test(
            vns3_client,
            vns3_api_schema,
            "get",
            "/peering",
            rest_mocker,
            mock_request_from_schema=True,
            mock_response=PeeringApiData.PeeringStatus,
        )(peering_api.get_peering_status)

    def test_post_create_peer(self, rest_mocker, vns3_client, vns3_api_schema: dict):
        """Test case for post_create_peer

        """
        generate_method_test(
            vns3_client,
            vns3_api_schema,
            "post",
            "/peering/peers",
            rest_mocker,
            mock_request_from_schema=True,
            mock_response=PeeringApiData.PeeringStatus,
        )(peering_api.post_create_peer)

    def test_put_update_peer(self, rest_mocker, vns3_client, vns3_api_schema: dict):
        """Test case for put_update_peer

        """
        generate_method_test(
            vns3_client,
            vns3_api_schema,
            "put",
            "/peering/peers/{peer_id}",
            rest_mocker,
            mock_request_from_schema=True,
            mock_response=PeeringApiData.PeeringStatus,
        )(peering_api.put_update_peer)

    def test_put_self_peering_id(self, rest_mocker, vns3_client, vns3_api_schema: dict):
        """Test case for put_self_peering_id

        """
        generate_method_test(
            vns3_client,
            vns3_api_schema,
            "put",
            "/peering/self",
            rest_mocker,
            mock_request_from_schema=True,
            mock_response=PeeringApiData.PeeringStatus,
        )(peering_api.put_self_peering_id)
