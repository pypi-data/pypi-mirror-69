# coding: utf-8

"""
    Intrinio API

    Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.  # noqa: E501

    OpenAPI spec version: 2.14.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import unittest

import intrinio_sdk
from intrinio_sdk.api.fundamentals_api import FundamentalsApi  # noqa: E501
from intrinio_sdk.rest import ApiException


class TestFundamentalsApi(unittest.TestCase):
    """FundamentalsApi unit test stubs"""

    def setUp(self):
        self.api = intrinio_sdk.api.fundamentals_api.FundamentalsApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_get_fundamental_by_id(self):
        """Test case for get_fundamental_by_id

        Fundamental by ID  # noqa: E501
        """
        pass

    def test_get_fundamental_reported_financials(self):
        """Test case for get_fundamental_reported_financials

        Reported Financials  # noqa: E501
        """
        pass

    def test_get_fundamental_standardized_financials(self):
        """Test case for get_fundamental_standardized_financials

        Standardized Financials  # noqa: E501
        """
        pass

    def test_lookup_fundamental(self):
        """Test case for lookup_fundamental

        Lookup Fundamental  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
