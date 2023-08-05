# coding: utf-8

"""
    Intrinio API

    Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.  # noqa: E501

    OpenAPI spec version: 2.14.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from intrinio_sdk.models.zacks_eps_growth_rate import ZacksEPSGrowthRate  # noqa: F401,E501


class ApiResponseZacksEPSGrowthRates(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'eps_growth_rates': 'list[ZacksEPSGrowthRate]',
        'next_page': 'str'
    }

    attribute_map = {
        'eps_growth_rates': 'eps_growth_rates',
        'next_page': 'next_page'
    }

    def __init__(self, eps_growth_rates=None, next_page=None):  # noqa: E501
        """ApiResponseZacksEPSGrowthRates - a model defined in Swagger"""  # noqa: E501

        self._eps_growth_rates = None
        self._next_page = None
        self.discriminator = None

        if eps_growth_rates is not None:
            self.eps_growth_rates = eps_growth_rates
        if next_page is not None:
            self.next_page = next_page

    @property
    def eps_growth_rates(self):
        """Gets the eps_growth_rates of this ApiResponseZacksEPSGrowthRates.  # noqa: E501

        Zacks EPS growth rate for the latest date  # noqa: E501

        :return: The eps_growth_rates of this ApiResponseZacksEPSGrowthRates.  # noqa: E501
        :rtype: list[ZacksEPSGrowthRate]
        """
        return self._eps_growth_rates
        
    @property
    def eps_growth_rates_dict(self):
        """Gets the eps_growth_rates of this ApiResponseZacksEPSGrowthRates.  # noqa: E501

        Zacks EPS growth rate for the latest date as a dictionary. Useful for Panda Dataframes.  # noqa: E501

        :return: The eps_growth_rates of this ApiResponseZacksEPSGrowthRates.  # noqa: E501
        :rtype: list[ZacksEPSGrowthRate]
        """

        result = None

        value = self.eps_growth_rates
        if isinstance(value, list):
            result = list(map(
                lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                value
            ))
        elif hasattr(value, "to_dict"):
            result = value.to_dict()
        elif isinstance(value, dict):
            result = dict(map(
                lambda item: (item[0], item[1].to_dict())
                if hasattr(item[1], "to_dict") else item,
                value.items()
            ))
        else:
            result = { 'eps_growth_rates': value }

        
        return result
        

    @eps_growth_rates.setter
    def eps_growth_rates(self, eps_growth_rates):
        """Sets the eps_growth_rates of this ApiResponseZacksEPSGrowthRates.

        Zacks EPS growth rate for the latest date  # noqa: E501

        :param eps_growth_rates: The eps_growth_rates of this ApiResponseZacksEPSGrowthRates.  # noqa: E501
        :type: list[ZacksEPSGrowthRate]
        """

        self._eps_growth_rates = eps_growth_rates

    @property
    def next_page(self):
        """Gets the next_page of this ApiResponseZacksEPSGrowthRates.  # noqa: E501

        The token required to request the next page of the data. If null, no further results are available.  # noqa: E501

        :return: The next_page of this ApiResponseZacksEPSGrowthRates.  # noqa: E501
        :rtype: str
        """
        return self._next_page
        
    @property
    def next_page_dict(self):
        """Gets the next_page of this ApiResponseZacksEPSGrowthRates.  # noqa: E501

        The token required to request the next page of the data. If null, no further results are available. as a dictionary. Useful for Panda Dataframes.  # noqa: E501

        :return: The next_page of this ApiResponseZacksEPSGrowthRates.  # noqa: E501
        :rtype: str
        """

        result = None

        value = self.next_page
        if isinstance(value, list):
            result = list(map(
                lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                value
            ))
        elif hasattr(value, "to_dict"):
            result = value.to_dict()
        elif isinstance(value, dict):
            result = dict(map(
                lambda item: (item[0], item[1].to_dict())
                if hasattr(item[1], "to_dict") else item,
                value.items()
            ))
        else:
            result = { 'next_page': value }

        
        return result
        

    @next_page.setter
    def next_page(self, next_page):
        """Sets the next_page of this ApiResponseZacksEPSGrowthRates.

        The token required to request the next page of the data. If null, no further results are available.  # noqa: E501

        :param next_page: The next_page of this ApiResponseZacksEPSGrowthRates.  # noqa: E501
        :type: str
        """

        self._next_page = next_page

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, ApiResponseZacksEPSGrowthRates):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
