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


class ConvertFromPdfAction(object):
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
        'output_format': 'str',
        'quality_type': 'str',
        'single_page': 'bool',
        'action_id': 'str'
    }

    attribute_map = {
        'output_format': 'outputFormat',
        'quality_type': 'qualityType',
        'single_page': 'singlePage',
        'action_id': 'actionId'
    }

    def __init__(self, output_format=None, quality_type=None, single_page=None, action_id=None):  # noqa: E501
        """ConvertFromPdfAction - a model defined in Swagger"""  # noqa: E501

        self._output_format = None
        self._quality_type = None
        self._single_page = None
        self._action_id = None
        self.discriminator = None

        if output_format is not None:
            self.output_format = output_format
        if quality_type is not None:
            self.quality_type = quality_type
        if single_page is not None:
            self.single_page = single_page
        if action_id is not None:
            self.action_id = action_id

    @property
    def output_format(self):
        """Gets the output_format of this ConvertFromPdfAction.  # noqa: E501


        :return: The output_format of this ConvertFromPdfAction.  # noqa: E501
        :rtype: str
        """
        return self._output_format

    @output_format.setter
    def output_format(self, output_format):
        """Sets the output_format of this ConvertFromPdfAction.


        :param output_format: The output_format of this ConvertFromPdfAction.  # noqa: E501
        :type: str
        """
        allowed_values = ["none", "docX", "excel", "pptx", "pdfOcr", "textOcr", "epub"]  # noqa: E501
        if output_format not in allowed_values:
            raise ValueError(
                "Invalid value for `output_format` ({0}), must be one of {1}"  # noqa: E501
                .format(output_format, allowed_values)
            )

        self._output_format = output_format

    @property
    def quality_type(self):
        """Gets the quality_type of this ConvertFromPdfAction.  # noqa: E501


        :return: The quality_type of this ConvertFromPdfAction.  # noqa: E501
        :rtype: str
        """
        return self._quality_type

    @quality_type.setter
    def quality_type(self, quality_type):
        """Sets the quality_type of this ConvertFromPdfAction.


        :param quality_type: The quality_type of this ConvertFromPdfAction.  # noqa: E501
        :type: str
        """
        allowed_values = ["draft", "high"]  # noqa: E501
        if quality_type not in allowed_values:
            raise ValueError(
                "Invalid value for `quality_type` ({0}), must be one of {1}"  # noqa: E501
                .format(quality_type, allowed_values)
            )

        self._quality_type = quality_type

    @property
    def single_page(self):
        """Gets the single_page of this ConvertFromPdfAction.  # noqa: E501


        :return: The single_page of this ConvertFromPdfAction.  # noqa: E501
        :rtype: bool
        """
        return self._single_page

    @single_page.setter
    def single_page(self, single_page):
        """Sets the single_page of this ConvertFromPdfAction.


        :param single_page: The single_page of this ConvertFromPdfAction.  # noqa: E501
        :type: bool
        """

        self._single_page = single_page

    @property
    def action_id(self):
        """Gets the action_id of this ConvertFromPdfAction.  # noqa: E501


        :return: The action_id of this ConvertFromPdfAction.  # noqa: E501
        :rtype: str
        """
        return self._action_id

    @action_id.setter
    def action_id(self, action_id):
        """Sets the action_id of this ConvertFromPdfAction.


        :param action_id: The action_id of this ConvertFromPdfAction.  # noqa: E501
        :type: str
        """

        self._action_id = action_id

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
        if issubclass(ConvertFromPdfAction, dict):
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
        if not isinstance(other, ConvertFromPdfAction):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
