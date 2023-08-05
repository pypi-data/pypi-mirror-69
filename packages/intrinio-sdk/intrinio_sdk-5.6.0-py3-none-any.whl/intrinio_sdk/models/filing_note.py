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

from intrinio_sdk.models.filing_note_filing import FilingNoteFiling  # noqa: F401,E501


class FilingNote(object):
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
        'id': 'str',
        'xbrl_tag': 'str',
        'content': 'str',
        'filing': 'FilingNoteFiling'
    }

    attribute_map = {
        'id': 'id',
        'xbrl_tag': 'xbrl_tag',
        'content': 'content',
        'filing': 'filing'
    }

    def __init__(self, id=None, xbrl_tag=None, content=None, filing=None):  # noqa: E501
        """FilingNote - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._xbrl_tag = None
        self._content = None
        self._filing = None
        self.discriminator = None

        if id is not None:
            self.id = id
        if xbrl_tag is not None:
            self.xbrl_tag = xbrl_tag
        if content is not None:
            self.content = content
        if filing is not None:
            self.filing = filing

    @property
    def id(self):
        """Gets the id of this FilingNote.  # noqa: E501

        The Intrinio ID of the note  # noqa: E501

        :return: The id of this FilingNote.  # noqa: E501
        :rtype: str
        """
        return self._id
        
    @property
    def id_dict(self):
        """Gets the id of this FilingNote.  # noqa: E501

        The Intrinio ID of the note as a dictionary. Useful for Panda Dataframes.  # noqa: E501

        :return: The id of this FilingNote.  # noqa: E501
        :rtype: str
        """

        result = None

        value = self.id
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
            result = { 'id': value }

        
        return result
        

    @id.setter
    def id(self, id):
        """Sets the id of this FilingNote.

        The Intrinio ID of the note  # noqa: E501

        :param id: The id of this FilingNote.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def xbrl_tag(self):
        """Gets the xbrl_tag of this FilingNote.  # noqa: E501

        The XBRL Tag used for the note  # noqa: E501

        :return: The xbrl_tag of this FilingNote.  # noqa: E501
        :rtype: str
        """
        return self._xbrl_tag
        
    @property
    def xbrl_tag_dict(self):
        """Gets the xbrl_tag of this FilingNote.  # noqa: E501

        The XBRL Tag used for the note as a dictionary. Useful for Panda Dataframes.  # noqa: E501

        :return: The xbrl_tag of this FilingNote.  # noqa: E501
        :rtype: str
        """

        result = None

        value = self.xbrl_tag
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
            result = { 'xbrl_tag': value }

        
        return result
        

    @xbrl_tag.setter
    def xbrl_tag(self, xbrl_tag):
        """Sets the xbrl_tag of this FilingNote.

        The XBRL Tag used for the note  # noqa: E501

        :param xbrl_tag: The xbrl_tag of this FilingNote.  # noqa: E501
        :type: str
        """

        self._xbrl_tag = xbrl_tag

    @property
    def content(self):
        """Gets the content of this FilingNote.  # noqa: E501

        The plain text (after html has been removed) of the note, or text including html if the content_format parameter has been set to html  # noqa: E501

        :return: The content of this FilingNote.  # noqa: E501
        :rtype: str
        """
        return self._content
        
    @property
    def content_dict(self):
        """Gets the content of this FilingNote.  # noqa: E501

        The plain text (after html has been removed) of the note, or text including html if the content_format parameter has been set to html as a dictionary. Useful for Panda Dataframes.  # noqa: E501

        :return: The content of this FilingNote.  # noqa: E501
        :rtype: str
        """

        result = None

        value = self.content
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
            result = { 'content': value }

        
        return result
        

    @content.setter
    def content(self, content):
        """Sets the content of this FilingNote.

        The plain text (after html has been removed) of the note, or text including html if the content_format parameter has been set to html  # noqa: E501

        :param content: The content of this FilingNote.  # noqa: E501
        :type: str
        """

        self._content = content

    @property
    def filing(self):
        """Gets the filing of this FilingNote.  # noqa: E501


        :return: The filing of this FilingNote.  # noqa: E501
        :rtype: FilingNoteFiling
        """
        return self._filing
        
    @property
    def filing_dict(self):
        """Gets the filing of this FilingNote.  # noqa: E501


        :return: The filing of this FilingNote.  # noqa: E501
        :rtype: FilingNoteFiling
        """

        result = None

        value = self.filing
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
            result = { 'filing': value }

        
        return result
        

    @filing.setter
    def filing(self, filing):
        """Sets the filing of this FilingNote.


        :param filing: The filing of this FilingNote.  # noqa: E501
        :type: FilingNoteFiling
        """

        self._filing = filing

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
        if not isinstance(other, FilingNote):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
