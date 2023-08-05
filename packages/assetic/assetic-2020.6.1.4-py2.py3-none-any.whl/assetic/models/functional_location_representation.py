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


class FunctionalLocationRepresentation(object):
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
        'functional_location_id': 'str',
        'functional_location_name': 'str',
        'functional_location_type': 'str',
        'functional_location_type_id': 'str',
        'attributes': 'dict(str, str)',
        'links': 'list[Link]',
        'embedded': 'list[EmbeddedResource]'
    }

    attribute_map = {
        'id': 'Id',
        'functional_location_id': 'FunctionalLocationId',
        'functional_location_name': 'FunctionalLocationName',
        'functional_location_type': 'FunctionalLocationType',
        'functional_location_type_id': 'FunctionalLocationTypeId',
        'attributes': 'Attributes',
        'links': '_links',
        'embedded': '_embedded'
    }

    def __init__(self, id=None, functional_location_id=None, functional_location_name=None, functional_location_type=None, functional_location_type_id=None, attributes=None, links=None, embedded=None):  # noqa: E501
        """FunctionalLocationRepresentation - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._functional_location_id = None
        self._functional_location_name = None
        self._functional_location_type = None
        self._functional_location_type_id = None
        self._attributes = None
        self._links = None
        self._embedded = None
        self.discriminator = None

        if id is not None:
            self.id = id
        if functional_location_id is not None:
            self.functional_location_id = functional_location_id
        if functional_location_name is not None:
            self.functional_location_name = functional_location_name
        if functional_location_type is not None:
            self.functional_location_type = functional_location_type
        if functional_location_type_id is not None:
            self.functional_location_type_id = functional_location_type_id
        if attributes is not None:
            self.attributes = attributes
        if links is not None:
            self.links = links
        if embedded is not None:
            self.embedded = embedded

    @property
    def id(self):
        """Gets the id of this FunctionalLocationRepresentation.  # noqa: E501


        :return: The id of this FunctionalLocationRepresentation.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this FunctionalLocationRepresentation.


        :param id: The id of this FunctionalLocationRepresentation.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def functional_location_id(self):
        """Gets the functional_location_id of this FunctionalLocationRepresentation.  # noqa: E501


        :return: The functional_location_id of this FunctionalLocationRepresentation.  # noqa: E501
        :rtype: str
        """
        return self._functional_location_id

    @functional_location_id.setter
    def functional_location_id(self, functional_location_id):
        """Sets the functional_location_id of this FunctionalLocationRepresentation.


        :param functional_location_id: The functional_location_id of this FunctionalLocationRepresentation.  # noqa: E501
        :type: str
        """

        self._functional_location_id = functional_location_id

    @property
    def functional_location_name(self):
        """Gets the functional_location_name of this FunctionalLocationRepresentation.  # noqa: E501


        :return: The functional_location_name of this FunctionalLocationRepresentation.  # noqa: E501
        :rtype: str
        """
        return self._functional_location_name

    @functional_location_name.setter
    def functional_location_name(self, functional_location_name):
        """Sets the functional_location_name of this FunctionalLocationRepresentation.


        :param functional_location_name: The functional_location_name of this FunctionalLocationRepresentation.  # noqa: E501
        :type: str
        """

        self._functional_location_name = functional_location_name

    @property
    def functional_location_type(self):
        """Gets the functional_location_type of this FunctionalLocationRepresentation.  # noqa: E501


        :return: The functional_location_type of this FunctionalLocationRepresentation.  # noqa: E501
        :rtype: str
        """
        return self._functional_location_type

    @functional_location_type.setter
    def functional_location_type(self, functional_location_type):
        """Sets the functional_location_type of this FunctionalLocationRepresentation.


        :param functional_location_type: The functional_location_type of this FunctionalLocationRepresentation.  # noqa: E501
        :type: str
        """

        self._functional_location_type = functional_location_type

    @property
    def functional_location_type_id(self):
        """Gets the functional_location_type_id of this FunctionalLocationRepresentation.  # noqa: E501


        :return: The functional_location_type_id of this FunctionalLocationRepresentation.  # noqa: E501
        :rtype: str
        """
        return self._functional_location_type_id

    @functional_location_type_id.setter
    def functional_location_type_id(self, functional_location_type_id):
        """Sets the functional_location_type_id of this FunctionalLocationRepresentation.


        :param functional_location_type_id: The functional_location_type_id of this FunctionalLocationRepresentation.  # noqa: E501
        :type: str
        """

        self._functional_location_type_id = functional_location_type_id

    @property
    def attributes(self):
        """Gets the attributes of this FunctionalLocationRepresentation.  # noqa: E501


        :return: The attributes of this FunctionalLocationRepresentation.  # noqa: E501
        :rtype: dict(str, str)
        """
        return self._attributes

    @attributes.setter
    def attributes(self, attributes):
        """Sets the attributes of this FunctionalLocationRepresentation.


        :param attributes: The attributes of this FunctionalLocationRepresentation.  # noqa: E501
        :type: dict(str, str)
        """

        self._attributes = attributes

    @property
    def links(self):
        """Gets the links of this FunctionalLocationRepresentation.  # noqa: E501


        :return: The links of this FunctionalLocationRepresentation.  # noqa: E501
        :rtype: list[Link]
        """
        return self._links

    @links.setter
    def links(self, links):
        """Sets the links of this FunctionalLocationRepresentation.


        :param links: The links of this FunctionalLocationRepresentation.  # noqa: E501
        :type: list[Link]
        """

        self._links = links

    @property
    def embedded(self):
        """Gets the embedded of this FunctionalLocationRepresentation.  # noqa: E501


        :return: The embedded of this FunctionalLocationRepresentation.  # noqa: E501
        :rtype: list[EmbeddedResource]
        """
        return self._embedded

    @embedded.setter
    def embedded(self, embedded):
        """Sets the embedded of this FunctionalLocationRepresentation.


        :param embedded: The embedded of this FunctionalLocationRepresentation.  # noqa: E501
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
        if issubclass(FunctionalLocationRepresentation, dict):
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
        if not isinstance(other, FunctionalLocationRepresentation):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
