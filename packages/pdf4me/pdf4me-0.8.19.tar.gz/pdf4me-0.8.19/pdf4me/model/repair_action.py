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


class RepairAction(object):
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
        'analyze_only': 'bool',
        'recover_pages': 'bool',
        'recover_xref': 'bool',
        'rebuild_fonts': 'bool',
        'rebuild_fonts_as_type1': 'bool',
        'rebuild_streams': 'bool',
        'action_id': 'str'
    }

    attribute_map = {
        'analyze_only': 'analyzeOnly',
        'recover_pages': 'recoverPages',
        'recover_xref': 'recoverXREF',
        'rebuild_fonts': 'rebuildFonts',
        'rebuild_fonts_as_type1': 'rebuildFontsAsType1',
        'rebuild_streams': 'rebuildStreams',
        'action_id': 'actionId'
    }

    def __init__(self, analyze_only=None, recover_pages=None, recover_xref=None, rebuild_fonts=None, rebuild_fonts_as_type1=None, rebuild_streams=None, action_id=None):  # noqa: E501
        """RepairAction - a model defined in Swagger"""  # noqa: E501

        self._analyze_only = None
        self._recover_pages = None
        self._recover_xref = None
        self._rebuild_fonts = None
        self._rebuild_fonts_as_type1 = None
        self._rebuild_streams = None
        self._action_id = None
        self.discriminator = None

        if analyze_only is not None:
            self.analyze_only = analyze_only
        if recover_pages is not None:
            self.recover_pages = recover_pages
        if recover_xref is not None:
            self.recover_xref = recover_xref
        if rebuild_fonts is not None:
            self.rebuild_fonts = rebuild_fonts
        if rebuild_fonts_as_type1 is not None:
            self.rebuild_fonts_as_type1 = rebuild_fonts_as_type1
        if rebuild_streams is not None:
            self.rebuild_streams = rebuild_streams
        if action_id is not None:
            self.action_id = action_id

    @property
    def analyze_only(self):
        """Gets the analyze_only of this RepairAction.  # noqa: E501


        :return: The analyze_only of this RepairAction.  # noqa: E501
        :rtype: bool
        """
        return self._analyze_only

    @analyze_only.setter
    def analyze_only(self, analyze_only):
        """Sets the analyze_only of this RepairAction.


        :param analyze_only: The analyze_only of this RepairAction.  # noqa: E501
        :type: bool
        """

        self._analyze_only = analyze_only

    @property
    def recover_pages(self):
        """Gets the recover_pages of this RepairAction.  # noqa: E501


        :return: The recover_pages of this RepairAction.  # noqa: E501
        :rtype: bool
        """
        return self._recover_pages

    @recover_pages.setter
    def recover_pages(self, recover_pages):
        """Sets the recover_pages of this RepairAction.


        :param recover_pages: The recover_pages of this RepairAction.  # noqa: E501
        :type: bool
        """

        self._recover_pages = recover_pages

    @property
    def recover_xref(self):
        """Gets the recover_xref of this RepairAction.  # noqa: E501


        :return: The recover_xref of this RepairAction.  # noqa: E501
        :rtype: bool
        """
        return self._recover_xref

    @recover_xref.setter
    def recover_xref(self, recover_xref):
        """Sets the recover_xref of this RepairAction.


        :param recover_xref: The recover_xref of this RepairAction.  # noqa: E501
        :type: bool
        """

        self._recover_xref = recover_xref

    @property
    def rebuild_fonts(self):
        """Gets the rebuild_fonts of this RepairAction.  # noqa: E501


        :return: The rebuild_fonts of this RepairAction.  # noqa: E501
        :rtype: bool
        """
        return self._rebuild_fonts

    @rebuild_fonts.setter
    def rebuild_fonts(self, rebuild_fonts):
        """Sets the rebuild_fonts of this RepairAction.


        :param rebuild_fonts: The rebuild_fonts of this RepairAction.  # noqa: E501
        :type: bool
        """

        self._rebuild_fonts = rebuild_fonts

    @property
    def rebuild_fonts_as_type1(self):
        """Gets the rebuild_fonts_as_type1 of this RepairAction.  # noqa: E501


        :return: The rebuild_fonts_as_type1 of this RepairAction.  # noqa: E501
        :rtype: bool
        """
        return self._rebuild_fonts_as_type1

    @rebuild_fonts_as_type1.setter
    def rebuild_fonts_as_type1(self, rebuild_fonts_as_type1):
        """Sets the rebuild_fonts_as_type1 of this RepairAction.


        :param rebuild_fonts_as_type1: The rebuild_fonts_as_type1 of this RepairAction.  # noqa: E501
        :type: bool
        """

        self._rebuild_fonts_as_type1 = rebuild_fonts_as_type1

    @property
    def rebuild_streams(self):
        """Gets the rebuild_streams of this RepairAction.  # noqa: E501


        :return: The rebuild_streams of this RepairAction.  # noqa: E501
        :rtype: bool
        """
        return self._rebuild_streams

    @rebuild_streams.setter
    def rebuild_streams(self, rebuild_streams):
        """Sets the rebuild_streams of this RepairAction.


        :param rebuild_streams: The rebuild_streams of this RepairAction.  # noqa: E501
        :type: bool
        """

        self._rebuild_streams = rebuild_streams

    @property
    def action_id(self):
        """Gets the action_id of this RepairAction.  # noqa: E501


        :return: The action_id of this RepairAction.  # noqa: E501
        :rtype: str
        """
        return self._action_id

    @action_id.setter
    def action_id(self, action_id):
        """Sets the action_id of this RepairAction.


        :param action_id: The action_id of this RepairAction.  # noqa: E501
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
        if issubclass(RepairAction, dict):
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
        if not isinstance(other, RepairAction):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
