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


class ScanPage(object):
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
        'barcodes': 'list[ScanBarcode]',
        'page_nr': 'int',
        'properties': 'list[KeyValuePairStringObject]'
    }

    attribute_map = {
        'barcodes': 'barcodes',
        'page_nr': 'pageNr',
        'properties': 'properties'
    }

    def __init__(self, barcodes=None, page_nr=None, properties=None):  # noqa: E501
        """ScanPage - a model defined in Swagger"""  # noqa: E501

        self._barcodes = None
        self._page_nr = None
        self._properties = None
        self.discriminator = None

        if barcodes is not None:
            self.barcodes = barcodes
        if page_nr is not None:
            self.page_nr = page_nr
        if properties is not None:
            self.properties = properties

    @property
    def barcodes(self):
        """Gets the barcodes of this ScanPage.  # noqa: E501


        :return: The barcodes of this ScanPage.  # noqa: E501
        :rtype: list[ScanBarcode]
        """
        return self._barcodes

    @barcodes.setter
    def barcodes(self, barcodes):
        """Sets the barcodes of this ScanPage.


        :param barcodes: The barcodes of this ScanPage.  # noqa: E501
        :type: list[ScanBarcode]
        """

        self._barcodes = barcodes

    @property
    def page_nr(self):
        """Gets the page_nr of this ScanPage.  # noqa: E501


        :return: The page_nr of this ScanPage.  # noqa: E501
        :rtype: int
        """
        return self._page_nr

    @page_nr.setter
    def page_nr(self, page_nr):
        """Sets the page_nr of this ScanPage.


        :param page_nr: The page_nr of this ScanPage.  # noqa: E501
        :type: int
        """

        self._page_nr = page_nr

    @property
    def properties(self):
        """Gets the properties of this ScanPage.  # noqa: E501


        :return: The properties of this ScanPage.  # noqa: E501
        :rtype: list[KeyValuePairStringObject]
        """
        return self._properties

    @properties.setter
    def properties(self, properties):
        """Sets the properties of this ScanPage.


        :param properties: The properties of this ScanPage.  # noqa: E501
        :type: list[KeyValuePairStringObject]
        """

        self._properties = properties

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
        if issubclass(ScanPage, dict):
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
        if not isinstance(other, ScanPage):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
