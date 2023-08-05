# coding: utf-8

"""
    Pdf4me

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: v1
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class PdfFont(object):
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
        'name': 'str',
        'font_content': 'str'
    }

    attribute_map = {
        'name': 'name',
        'font_content': 'fontContent'
    }

    def __init__(self, name=None, font_content=None):  # noqa: E501
        """PdfFont - a model defined in Swagger"""  # noqa: E501

        self._name = None
        self._font_content = None
        self.discriminator = None

        if name is not None:
            self.name = name
        if font_content is not None:
            self.font_content = font_content

    @property
    def name(self):
        """Gets the name of this PdfFont.  # noqa: E501


        :return: The name of this PdfFont.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this PdfFont.


        :param name: The name of this PdfFont.  # noqa: E501
        :type: str
        """

        self._name = name

    @property
    def font_content(self):
        """Gets the font_content of this PdfFont.  # noqa: E501


        :return: The font_content of this PdfFont.  # noqa: E501
        :rtype: str
        """
        return self._font_content

    @font_content.setter
    def font_content(self, font_content):
        """Sets the font_content of this PdfFont.


        :param font_content: The font_content of this PdfFont.  # noqa: E501
        :type: str
        """
        if font_content is not None and not re.search(r'^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$', font_content):  # noqa: E501
            raise ValueError(r"Invalid value for `font_content`, must be a follow pattern or equal to `/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/`")  # noqa: E501

        self._font_content = font_content

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
        if issubclass(PdfFont, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, PdfFont):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
