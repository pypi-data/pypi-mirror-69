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


class PdfAAction(object):
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
        'fonts_to_subset': 'list[PdfFont]',
        'compliance': 'str',
        'allow_downgrade': 'bool',
        'allow_upgrade': 'bool',
        'output_intent_profile': 'str',
        'linearize': 'bool',
        'action_id': 'str'
    }

    attribute_map = {
        'fonts_to_subset': 'fontsToSubset',
        'compliance': 'compliance',
        'allow_downgrade': 'allowDowngrade',
        'allow_upgrade': 'allowUpgrade',
        'output_intent_profile': 'outputIntentProfile',
        'linearize': 'linearize',
        'action_id': 'actionId'
    }

    def __init__(self, fonts_to_subset=None, compliance=None, allow_downgrade=None, allow_upgrade=None, output_intent_profile=None, linearize=None, action_id=None):  # noqa: E501
        """PdfAAction - a model defined in Swagger"""  # noqa: E501

        self._fonts_to_subset = None
        self._compliance = None
        self._allow_downgrade = None
        self._allow_upgrade = None
        self._output_intent_profile = None
        self._linearize = None
        self._action_id = None
        self.discriminator = None

        if fonts_to_subset is not None:
            self.fonts_to_subset = fonts_to_subset
        if compliance is not None:
            self.compliance = compliance
        if allow_downgrade is not None:
            self.allow_downgrade = allow_downgrade
        if allow_upgrade is not None:
            self.allow_upgrade = allow_upgrade
        if output_intent_profile is not None:
            self.output_intent_profile = output_intent_profile
        if linearize is not None:
            self.linearize = linearize
        if action_id is not None:
            self.action_id = action_id

    @property
    def fonts_to_subset(self):
        """Gets the fonts_to_subset of this PdfAAction.  # noqa: E501

        By default, fonts that are embedded are automatically subset to minimize the file size.   If for any reason, e.g. postprocessing, fonts shall not be subset, set the property   SubsetFonts to false. Whether fonts are subset or not is irrelevant with respect to   the compliance with PDF/A. (Relevant is only that all used glyphs are contained in the font program.)   Additionals Fonts can be given in this FontsToSubset List  # noqa: E501

        :return: The fonts_to_subset of this PdfAAction.  # noqa: E501
        :rtype: list[PdfFont]
        """
        return self._fonts_to_subset

    @fonts_to_subset.setter
    def fonts_to_subset(self, fonts_to_subset):
        """Sets the fonts_to_subset of this PdfAAction.

        By default, fonts that are embedded are automatically subset to minimize the file size.   If for any reason, e.g. postprocessing, fonts shall not be subset, set the property   SubsetFonts to false. Whether fonts are subset or not is irrelevant with respect to   the compliance with PDF/A. (Relevant is only that all used glyphs are contained in the font program.)   Additionals Fonts can be given in this FontsToSubset List  # noqa: E501

        :param fonts_to_subset: The fonts_to_subset of this PdfAAction.  # noqa: E501
        :type: list[PdfFont]
        """

        self._fonts_to_subset = fonts_to_subset

    @property
    def compliance(self):
        """Gets the compliance of this PdfAAction.  # noqa: E501

        Other listed entries (e.g. ePDF10, ePDF11, .. .ePDF17, ePDFUnk) are not supported as output compliance   level.  Some files cannot be converted to the compliance requested. This will be  detected and up- (AllowUpgrade) or downgrade (AllowDowngrade) the compliance automatically.  # noqa: E501

        :return: The compliance of this PdfAAction.  # noqa: E501
        :rtype: str
        """
        return self._compliance

    @compliance.setter
    def compliance(self, compliance):
        """Sets the compliance of this PdfAAction.

        Other listed entries (e.g. ePDF10, ePDF11, .. .ePDF17, ePDFUnk) are not supported as output compliance   level.  Some files cannot be converted to the compliance requested. This will be  detected and up- (AllowUpgrade) or downgrade (AllowDowngrade) the compliance automatically.  # noqa: E501

        :param compliance: The compliance of this PdfAAction.  # noqa: E501
        :type: str
        """
        allowed_values = ["pdfA1b", "pdfA1a", "pdfA2b", "pdfA2u", "pdfA2a", "pdfA3b", "pdfA3u", "pdfA3a"]  # noqa: E501
        if compliance not in allowed_values:
            raise ValueError(
                "Invalid value for `compliance` ({0}), must be one of {1}"  # noqa: E501
                .format(compliance, allowed_values)
            )

        self._compliance = compliance

    @property
    def allow_downgrade(self):
        """Gets the allow_downgrade of this PdfAAction.  # noqa: E501

        If set to True, automatic downgrade of the PDF/A conformance level is allowed, e.g. from PDF/A-1a to PDF/A-1b.  If this property is set to True, the level is downgraded under the following conditions:    - Downgrade to level B: If a file contains text that is not extractable (i.e.missing ToUnicode information).  Example: Downgrade PDF/A-2u to PDF/A-2b.  - Downgrade to level U (PDF/A-2 and PDF/A-3) or B(PDF/A-1): Level A requires logical structure information and  “tagging” information, so if a file contains no such information, its level is downgraded.  <para>  Logical structure information in a PDF defines the structure of content, such as titles, paragraphs, figures, reading order, tables or articles.Logical structure elements can be “tagged” with descriptions or alternative text.  “Tagging” allows the contents of an image to be described to the visually impaired.  It is not possible for Pdf/A converter to add meaningful tagging information. Adding  tagging information without prior knowledge about the input file’s structure and content is neither possible nor  allowed by the PDF/A standard. For that reason, the conformance level is automatically downgraded to level B or U.  Example: Downgrade PDF/A-1a to PDF/A-1b.  </para><para>  If set to False and an input file cannot be converted to the requested standard, e.g.because of missing “tagging”  information, the conversion is aborted and the ErrorCode set to PDF_E_DOWNGRADE.  </para>  # noqa: E501

        :return: The allow_downgrade of this PdfAAction.  # noqa: E501
        :rtype: bool
        """
        return self._allow_downgrade

    @allow_downgrade.setter
    def allow_downgrade(self, allow_downgrade):
        """Sets the allow_downgrade of this PdfAAction.

        If set to True, automatic downgrade of the PDF/A conformance level is allowed, e.g. from PDF/A-1a to PDF/A-1b.  If this property is set to True, the level is downgraded under the following conditions:    - Downgrade to level B: If a file contains text that is not extractable (i.e.missing ToUnicode information).  Example: Downgrade PDF/A-2u to PDF/A-2b.  - Downgrade to level U (PDF/A-2 and PDF/A-3) or B(PDF/A-1): Level A requires logical structure information and  “tagging” information, so if a file contains no such information, its level is downgraded.  <para>  Logical structure information in a PDF defines the structure of content, such as titles, paragraphs, figures, reading order, tables or articles.Logical structure elements can be “tagged” with descriptions or alternative text.  “Tagging” allows the contents of an image to be described to the visually impaired.  It is not possible for Pdf/A converter to add meaningful tagging information. Adding  tagging information without prior knowledge about the input file’s structure and content is neither possible nor  allowed by the PDF/A standard. For that reason, the conformance level is automatically downgraded to level B or U.  Example: Downgrade PDF/A-1a to PDF/A-1b.  </para><para>  If set to False and an input file cannot be converted to the requested standard, e.g.because of missing “tagging”  information, the conversion is aborted and the ErrorCode set to PDF_E_DOWNGRADE.  </para>  # noqa: E501

        :param allow_downgrade: The allow_downgrade of this PdfAAction.  # noqa: E501
        :type: bool
        """

        self._allow_downgrade = allow_downgrade

    @property
    def allow_upgrade(self):
        """Gets the allow_upgrade of this PdfAAction.  # noqa: E501

         If set to True, automatic upgrade of the PDF/A version is allowed. If the target standard is PDF/A-1 and a file  contains elements that cannot be converted to PDF/A-1, the target standard is upgraded to PDF/A-2. This avoids  significant visual differences in the output file.  For example, the following elements may lead to an automatic upgrade:  - Transpanrecy  - Optional content groups(OCG, layers)  - Real values that exceed the implementation limit of PDF/A-1  - Embedded OpenType font files  - Predefined CMap encodings in Type0 fonts     If set to False, the compliance is not upgraded.Depeding on the value of the ConversionErrorMask the  conversion this will fail with a conversion error PDF_E_CONVERSION  # noqa: E501

        :return: The allow_upgrade of this PdfAAction.  # noqa: E501
        :rtype: bool
        """
        return self._allow_upgrade

    @allow_upgrade.setter
    def allow_upgrade(self, allow_upgrade):
        """Sets the allow_upgrade of this PdfAAction.

         If set to True, automatic upgrade of the PDF/A version is allowed. If the target standard is PDF/A-1 and a file  contains elements that cannot be converted to PDF/A-1, the target standard is upgraded to PDF/A-2. This avoids  significant visual differences in the output file.  For example, the following elements may lead to an automatic upgrade:  - Transpanrecy  - Optional content groups(OCG, layers)  - Real values that exceed the implementation limit of PDF/A-1  - Embedded OpenType font files  - Predefined CMap encodings in Type0 fonts     If set to False, the compliance is not upgraded.Depeding on the value of the ConversionErrorMask the  conversion this will fail with a conversion error PDF_E_CONVERSION  # noqa: E501

        :param allow_upgrade: The allow_upgrade of this PdfAAction.  # noqa: E501
        :type: bool
        """

        self._allow_upgrade = allow_upgrade

    @property
    def output_intent_profile(self):
        """Gets the output_intent_profile of this PdfAAction.  # noqa: E501

        <para>              Set or get the path to the ICC profile for the output intent.              </para>  <para>              The given profile is embedded only if the input file does not contain a PDF/A output intent already              </para>  # noqa: E501

        :return: The output_intent_profile of this PdfAAction.  # noqa: E501
        :rtype: str
        """
        return self._output_intent_profile

    @output_intent_profile.setter
    def output_intent_profile(self, output_intent_profile):
        """Sets the output_intent_profile of this PdfAAction.

        <para>              Set or get the path to the ICC profile for the output intent.              </para>  <para>              The given profile is embedded only if the input file does not contain a PDF/A output intent already              </para>  # noqa: E501

        :param output_intent_profile: The output_intent_profile of this PdfAAction.  # noqa: E501
        :type: str
        """
        allowed_values = ["notSet", "sRGBColorSpace"]  # noqa: E501
        if output_intent_profile not in allowed_values:
            raise ValueError(
                "Invalid value for `output_intent_profile` ({0}), must be one of {1}"  # noqa: E501
                .format(output_intent_profile, allowed_values)
            )

        self._output_intent_profile = output_intent_profile

    @property
    def linearize(self):
        """Gets the linearize of this PdfAAction.  # noqa: E501

        <para>              Get or set whether to linearize the PDF output file, i.e. optimize file for fast web access.              A linearized document has a slightly larger file size than a non-linearized file and provides the following main features:              - When a document is opened in a PDF viewer of a web browser, the first page can be viewed without downloading the entire               PDF file.In contrast, a non-linearized PDF file must be downloaded completely before the firstpage can be displayed.              - When another page is requested by the user, that page is displayed as quickly as possible and incrementally as              data arrives, without downloading the entire PDF file.              </para>  <para>              Signed files cannot be linearizes.So this property must be set to False if              a digital signature is applied.              </para>  # noqa: E501

        :return: The linearize of this PdfAAction.  # noqa: E501
        :rtype: bool
        """
        return self._linearize

    @linearize.setter
    def linearize(self, linearize):
        """Sets the linearize of this PdfAAction.

        <para>              Get or set whether to linearize the PDF output file, i.e. optimize file for fast web access.              A linearized document has a slightly larger file size than a non-linearized file and provides the following main features:              - When a document is opened in a PDF viewer of a web browser, the first page can be viewed without downloading the entire               PDF file.In contrast, a non-linearized PDF file must be downloaded completely before the firstpage can be displayed.              - When another page is requested by the user, that page is displayed as quickly as possible and incrementally as              data arrives, without downloading the entire PDF file.              </para>  <para>              Signed files cannot be linearizes.So this property must be set to False if              a digital signature is applied.              </para>  # noqa: E501

        :param linearize: The linearize of this PdfAAction.  # noqa: E501
        :type: bool
        """

        self._linearize = linearize

    @property
    def action_id(self):
        """Gets the action_id of this PdfAAction.  # noqa: E501


        :return: The action_id of this PdfAAction.  # noqa: E501
        :rtype: str
        """
        return self._action_id

    @action_id.setter
    def action_id(self, action_id):
        """Sets the action_id of this PdfAAction.


        :param action_id: The action_id of this PdfAAction.  # noqa: E501
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
        if issubclass(PdfAAction, dict):
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
        if not isinstance(other, PdfAAction):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
