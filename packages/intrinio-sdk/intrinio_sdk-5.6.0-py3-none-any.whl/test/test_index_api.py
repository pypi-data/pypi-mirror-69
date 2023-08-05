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
from intrinio_sdk.api.index_api import IndexApi  # noqa: E501
from intrinio_sdk.rest import ApiException


class TestIndexApi(unittest.TestCase):
    """IndexApi unit test stubs"""

    def setUp(self):
        self.api = intrinio_sdk.api.index_api.IndexApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_get_all_economic_indices(self):
        """Test case for get_all_economic_indices

        All Economic Indices  # noqa: E501
        """
        pass

    def test_get_all_sic_indices(self):
        """Test case for get_all_sic_indices

        All SIC Indices  # noqa: E501
        """
        pass

    def test_get_all_stock_market_indices(self):
        """Test case for get_all_stock_market_indices

        All Stock Market Indices  # noqa: E501
        """
        pass

    def test_get_economic_index_by_id(self):
        """Test case for get_economic_index_by_id

        Lookup Economic Index  # noqa: E501
        """
        pass

    def test_get_economic_index_data_point_number(self):
        """Test case for get_economic_index_data_point_number

        Data Point (Number) for an Economic Index  # noqa: E501
        """
        pass

    def test_get_economic_index_data_point_text(self):
        """Test case for get_economic_index_data_point_text

        Data Point (Text) for an Economic Index  # noqa: E501
        """
        pass

    def test_get_economic_index_historical_data(self):
        """Test case for get_economic_index_historical_data

        Historical Data for an Economic Index  # noqa: E501
        """
        pass

    def test_get_sic_index_by_id(self):
        """Test case for get_sic_index_by_id

        Lookup SIC Index  # noqa: E501
        """
        pass

    def test_get_sic_index_data_point_number(self):
        """Test case for get_sic_index_data_point_number

        Data Point (Number) for an SIC Index  # noqa: E501
        """
        pass

    def test_get_sic_index_data_point_text(self):
        """Test case for get_sic_index_data_point_text

        Data Point (Text) for an SIC Index  # noqa: E501
        """
        pass

    def test_get_sic_index_historical_data(self):
        """Test case for get_sic_index_historical_data

        Historical Data for an SIC Index  # noqa: E501
        """
        pass

    def test_get_stock_market_index_by_id(self):
        """Test case for get_stock_market_index_by_id

        Lookup Stock Market Index  # noqa: E501
        """
        pass

    def test_get_stock_market_index_data_point_number(self):
        """Test case for get_stock_market_index_data_point_number

        Data Point (Number) for Stock Market Index  # noqa: E501
        """
        pass

    def test_get_stock_market_index_data_point_text(self):
        """Test case for get_stock_market_index_data_point_text

        Data Point (Text) for Stock Market Index  # noqa: E501
        """
        pass

    def test_get_stock_market_index_historical_data(self):
        """Test case for get_stock_market_index_historical_data

        Historical Data for Stock Market Index  # noqa: E501
        """
        pass

    def test_search_economic_indices(self):
        """Test case for search_economic_indices

        Search Economic Indices  # noqa: E501
        """
        pass

    def test_search_sic_indices(self):
        """Test case for search_sic_indices

        Search SIC Indices  # noqa: E501
        """
        pass

    def test_search_stock_markets_indices(self):
        """Test case for search_stock_markets_indices

        Search Stock Market Indices  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
