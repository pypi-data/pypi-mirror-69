# coding: utf-8

"""
    Assetic Integration API

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: v2
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

##from assetic.models.embedded_resource import EmbeddedResource  # noqa: F401,E501
##from assetic.models.link import Link  # noqa: F401,E501


class DocumentAsmtRepresentation(object):
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
        'asmt_form_result_id': 'str',
        'links': 'list[Link]',
        'embedded': 'list[EmbeddedResource]'
    }

    attribute_map = {
        'asmt_form_result_id': 'ASMTFormResultId',
        'links': '_links',
        'embedded': '_embedded'
    }

    def __init__(self, asmt_form_result_id=None, links=None, embedded=None):  # noqa: E501
        """DocumentAsmtRepresentation - a model defined in Swagger"""  # noqa: E501

        self._asmt_form_result_id = None
        self._links = None
        self._embedded = None
        self.discriminator = None

        if asmt_form_result_id is not None:
            self.asmt_form_result_id = asmt_form_result_id
        if links is not None:
            self.links = links
        if embedded is not None:
            self.embedded = embedded

    @property
    def asmt_form_result_id(self):
        """Gets the asmt_form_result_id of this DocumentAsmtRepresentation.  # noqa: E501


        :return: The asmt_form_result_id of this DocumentAsmtRepresentation.  # noqa: E501
        :rtype: str
        """
        return self._asmt_form_result_id

    @asmt_form_result_id.setter
    def asmt_form_result_id(self, asmt_form_result_id):
        """Sets the asmt_form_result_id of this DocumentAsmtRepresentation.


        :param asmt_form_result_id: The asmt_form_result_id of this DocumentAsmtRepresentation.  # noqa: E501
        :type: str
        """

        self._asmt_form_result_id = asmt_form_result_id

    @property
    def links(self):
        """Gets the links of this DocumentAsmtRepresentation.  # noqa: E501


        :return: The links of this DocumentAsmtRepresentation.  # noqa: E501
        :rtype: list[Link]
        """
        return self._links

    @links.setter
    def links(self, links):
        """Sets the links of this DocumentAsmtRepresentation.


        :param links: The links of this DocumentAsmtRepresentation.  # noqa: E501
        :type: list[Link]
        """

        self._links = links

    @property
    def embedded(self):
        """Gets the embedded of this DocumentAsmtRepresentation.  # noqa: E501


        :return: The embedded of this DocumentAsmtRepresentation.  # noqa: E501
        :rtype: list[EmbeddedResource]
        """
        return self._embedded

    @embedded.setter
    def embedded(self, embedded):
        """Sets the embedded of this DocumentAsmtRepresentation.


        :param embedded: The embedded of this DocumentAsmtRepresentation.  # noqa: E501
        :type: list[EmbeddedResource]
        """

        self._embedded = embedded

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
        if issubclass(DocumentAsmtRepresentation, dict):
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
        if not isinstance(other, DocumentAsmtRepresentation):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
