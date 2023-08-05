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

from intrinio_sdk.models.security_screen_clause import SecurityScreenClause  # noqa: F401,E501
  # noqa: F401,E501


class SecurityScreenGroup(object):
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
        'operator': 'str',
        'clauses': 'list[SecurityScreenClause]',
        'groups': 'list[SecurityScreenGroup]'
    }

    attribute_map = {
        'operator': 'operator',
        'clauses': 'clauses',
        'groups': 'groups'
    }

    def __init__(self, operator=None, clauses=None, groups=None):  # noqa: E501
        """SecurityScreenGroup - a model defined in Swagger"""  # noqa: E501

        self._operator = None
        self._clauses = None
        self._groups = None
        self.discriminator = None

        if operator is not None:
            self.operator = operator
        if clauses is not None:
            self.clauses = clauses
        if groups is not None:
            self.groups = groups

    @property
    def operator(self):
        """Gets the operator of this SecurityScreenGroup.  # noqa: E501

        The logic operator for the group (AND, OR, NOT)  # noqa: E501

        :return: The operator of this SecurityScreenGroup.  # noqa: E501
        :rtype: str
        """
        return self._operator
        
    @property
    def operator_dict(self):
        """Gets the operator of this SecurityScreenGroup.  # noqa: E501

        The logic operator for the group (AND, OR, NOT) as a dictionary. Useful for Panda Dataframes.  # noqa: E501

        :return: The operator of this SecurityScreenGroup.  # noqa: E501
        :rtype: str
        """

        result = None

        value = self.operator
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
            result = { 'operator': value }

        
        return result
        

    @operator.setter
    def operator(self, operator):
        """Sets the operator of this SecurityScreenGroup.

        The logic operator for the group (AND, OR, NOT)  # noqa: E501

        :param operator: The operator of this SecurityScreenGroup.  # noqa: E501
        :type: str
        """

        self._operator = operator

    @property
    def clauses(self):
        """Gets the clauses of this SecurityScreenGroup.  # noqa: E501

        The logic clauses in the group  # noqa: E501

        :return: The clauses of this SecurityScreenGroup.  # noqa: E501
        :rtype: list[SecurityScreenClause]
        """
        return self._clauses
        
    @property
    def clauses_dict(self):
        """Gets the clauses of this SecurityScreenGroup.  # noqa: E501

        The logic clauses in the group as a dictionary. Useful for Panda Dataframes.  # noqa: E501

        :return: The clauses of this SecurityScreenGroup.  # noqa: E501
        :rtype: list[SecurityScreenClause]
        """

        result = None

        value = self.clauses
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
            result = { 'clauses': value }

        
        return result
        

    @clauses.setter
    def clauses(self, clauses):
        """Sets the clauses of this SecurityScreenGroup.

        The logic clauses in the group  # noqa: E501

        :param clauses: The clauses of this SecurityScreenGroup.  # noqa: E501
        :type: list[SecurityScreenClause]
        """

        self._clauses = clauses

    @property
    def groups(self):
        """Gets the groups of this SecurityScreenGroup.  # noqa: E501

        The nested groups within the group  # noqa: E501

        :return: The groups of this SecurityScreenGroup.  # noqa: E501
        :rtype: list[SecurityScreenGroup]
        """
        return self._groups
        
    @property
    def groups_dict(self):
        """Gets the groups of this SecurityScreenGroup.  # noqa: E501

        The nested groups within the group as a dictionary. Useful for Panda Dataframes.  # noqa: E501

        :return: The groups of this SecurityScreenGroup.  # noqa: E501
        :rtype: list[SecurityScreenGroup]
        """

        result = None

        value = self.groups
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
            result = { 'groups': value }

        
        return result
        

    @groups.setter
    def groups(self, groups):
        """Sets the groups of this SecurityScreenGroup.

        The nested groups within the group  # noqa: E501

        :param groups: The groups of this SecurityScreenGroup.  # noqa: E501
        :type: list[SecurityScreenGroup]
        """

        self._groups = groups

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
        if not isinstance(other, SecurityScreenGroup):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
