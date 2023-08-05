# coding: utf-8

"""
    VNS3 Controller API

    Cohesive networks VNS3 API providing complete control of your network's addresses, routes, rules and edge  # noqa: E501

    The version of the OpenAPI document: 4.8
    Contact: solutions@cohesive.net
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import datetime
import pytest

import cohesivenet
from cohesivenet.api.vns3 import monitoring_alerting_api  # noqa: E501
from cohesivenet.rest import ApiException

from tests.openapi import generate_method_test
from tests.vns3.stub_data import MonitoringApiData


class TestMonitoringAlertingApi(object):
    """MonitoringAlertingApi unit test stubs"""

    def test_delete_alert(self, rest_mocker, vns3_client, vns3_api_schema: dict):
        """Test case for delete_alert
        """
        generate_method_test(
            vns3_client,
            vns3_api_schema,
            "delete",
            "/alert/{alert_id}",
            rest_mocker,
            mock_request_from_schema=True,
            mock_response=MonitoringApiData.AlertDetail,
        )(monitoring_alerting_api.delete_alert)

    def test_get_alert(self, rest_mocker, vns3_client, vns3_api_schema: dict):
        """Test case for get_alert
        """
        generate_method_test(
            vns3_client,
            vns3_api_schema,
            "get",
            "/alert/{alert_id}",
            rest_mocker,
            mock_request_from_schema=True,
            mock_response=MonitoringApiData.AlertDetail,
        )(monitoring_alerting_api.get_alert)

    def test_get_alerts(self, rest_mocker, vns3_client, vns3_api_schema: dict):
        """Test case for get_alerts

        """
        generate_method_test(
            vns3_client,
            vns3_api_schema,
            "get",
            "/alerts",
            rest_mocker,
            mock_request_from_schema=True,
            mock_response=MonitoringApiData.AlertsListResponse,
        )(monitoring_alerting_api.get_alerts)

    def test_post_create_alert(self, rest_mocker, vns3_client, vns3_api_schema: dict):
        """Test case for post_create_alert

        """
        generate_method_test(
            vns3_client,
            vns3_api_schema,
            "post",
            "/alert",
            rest_mocker,
            mock_request_from_schema=True,
            mock_response=MonitoringApiData.AlertDetail,
        )(monitoring_alerting_api.post_create_alert)

    def test_post_test_alert(self, rest_mocker, vns3_client, vns3_api_schema: dict):
        """Test case for post_test_alert
        """
        generate_method_test(
            vns3_client,
            vns3_api_schema,
            "post",
            "/alert/{alert_id}/test",
            rest_mocker,
            mock_request_from_schema=True,
            mock_response={
                "response": {"status": "success", "code": "200", "message": "OK"}
            },
        )(monitoring_alerting_api.post_test_alert)

    def test_post_toggle_enable_alert(
        self, rest_mocker, vns3_client, vns3_api_schema: dict
    ):
        """Test case for post_toggle_enable_alert

        """
        generate_method_test(
            vns3_client,
            vns3_api_schema,
            "post",
            "/alert/{alert_id}/toggle_enabled",
            rest_mocker,
            mock_request_from_schema=True,
            mock_response=MonitoringApiData.AlertDetail,
        )(monitoring_alerting_api.post_toggle_enable_alert)

    def test_put_update_alert(self, rest_mocker, vns3_client, vns3_api_schema: dict):
        """Test case for put_update_alert

        """
        generate_method_test(
            vns3_client,
            vns3_api_schema,
            "put",
            "/alert/{alert_id}",
            rest_mocker,
            mock_request_from_schema=True,
            mock_response=MonitoringApiData.AlertDetail,
        )(monitoring_alerting_api.put_update_alert)

    def test_delete_webhook(self, rest_mocker, vns3_client, vns3_api_schema: dict):
        """Test case for delete_webhook
        """
        generate_method_test(
            vns3_client,
            vns3_api_schema,
            "delete",
            "/webhook/{webhook_id}",
            rest_mocker,
            mock_request_from_schema=True,
            mock_response=MonitoringApiData.WebhookDetail,
        )(monitoring_alerting_api.delete_webhook)

    def test_get_webhook(self, rest_mocker, vns3_client, vns3_api_schema: dict):
        """Test case for get_webhook
        """
        generate_method_test(
            vns3_client,
            vns3_api_schema,
            "get",
            "/webhook/{webhook_id}",
            rest_mocker,
            mock_request_from_schema=True,
            mock_response=MonitoringApiData.WebhookDetail,
        )(monitoring_alerting_api.get_webhook)

    def test_get_webhooks(self, rest_mocker, vns3_client, vns3_api_schema: dict):
        """Test case for get_webhooks
        """
        generate_method_test(
            vns3_client,
            vns3_api_schema,
            "get",
            "/webhooks",
            rest_mocker,
            mock_request_from_schema=True,
            mock_response=MonitoringApiData.WebhookListResponse,
        )(monitoring_alerting_api.get_webhooks)

    def test_post_create_webhook(self, rest_mocker, vns3_client, vns3_api_schema: dict):
        """Test case for post_create_webhook
        """
        generate_method_test(
            vns3_client,
            vns3_api_schema,
            "post",
            "/webhook",
            rest_mocker,
            mock_request_from_schema=True,
            mock_response=MonitoringApiData.WebhookDetail,
        )(monitoring_alerting_api.post_create_webhook)

    def test_put_update_webhook(self, rest_mocker, vns3_client, vns3_api_schema: dict):
        """Test case for put_update_webhook

        """
        generate_method_test(
            vns3_client,
            vns3_api_schema,
            "put",
            "/webhook/{webhook_id}",
            rest_mocker,
            mock_request_from_schema=True,
            mock_response=MonitoringApiData.WebhookDetail,
        )(monitoring_alerting_api.put_update_webhook)
