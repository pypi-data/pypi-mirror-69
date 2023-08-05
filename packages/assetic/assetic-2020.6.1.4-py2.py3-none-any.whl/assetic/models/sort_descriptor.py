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

##from assetic.models.client_handler_descriptor import ClientHandlerDescriptor  # noqa: F401,E501


class SortDescriptor(object):
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
        'member': 'str',
        'sort_direction': 'str',
        'sort_compare': 'ClientHandlerDescriptor'
    }

    attribute_map = {
        'member': 'Member',
        'sort_direction': 'SortDirection',
        'sort_compare': 'SortCompare'
    }

    def __init__(self, member=None, sort_direction=None, sort_compare=None):  # noqa: E501
        """SortDescriptor - a model defined in Swagger"""  # noqa: E501

        self._member = None
        self._sort_direction = None
        self._sort_compare = None
        self.discriminator = None

        if member is not None:
            self.member = member
        if sort_direction is not None:
            self.sort_direction = sort_direction
        if sort_compare is not None:
            self.sort_compare = sort_compare

    @property
    def member(self):
        """Gets the member of this SortDescriptor.  # noqa: E501


        :return: The member of this SortDescriptor.  # noqa: E501
        :rtype: str
        """
        return self._member

    @member.setter
    def member(self, member):
        """Sets the member of this SortDescriptor.


        :param member: The member of this SortDescriptor.  # noqa: E501
        :type: str
        """

        self._member = member

    @property
    def sort_direction(self):
        """Gets the sort_direction of this SortDescriptor.  # noqa: E501


        :return: The sort_direction of this SortDescriptor.  # noqa: E501
        :rtype: str
        """
        return self._sort_direction

    @sort_direction.setter
    def sort_direction(self, sort_direction):
        """Sets the sort_direction of this SortDescriptor.


        :param sort_direction: The sort_direction of this SortDescriptor.  # noqa: E501
        :type: str
        """
        allowed_values = ["Ascending", "Descending"]  # noqa: E501
        if sort_direction not in allowed_values:
            raise ValueError(
                "Invalid value for `sort_direction` ({0}), must be one of {1}"  # noqa: E501
                .format(sort_direction, allowed_values)
            )

        self._sort_direction = sort_direction

    @property
    def sort_compare(self):
        """Gets the sort_compare of this SortDescriptor.  # noqa: E501


        :return: The sort_compare of this SortDescriptor.  # noqa: E501
        :rtype: ClientHandlerDescriptor
        """
        return self._sort_compare

    @sort_compare.setter
    def sort_compare(self, sort_compare):
        """Sets the sort_compare of this SortDescriptor.


        :param sort_compare: The sort_compare of this SortDescriptor.  # noqa: E501
        :type: ClientHandlerDescriptor
        """

        self._sort_compare = sort_compare

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
        if issubclass(SortDescriptor, dict):
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
        if not isinstance(other, SortDescriptor):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
