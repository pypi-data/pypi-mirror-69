# coding: utf-8

"""
    NCBI Datasets API

    NCBI service to query and download biological sequence data across all domains of life from NCBI databases.  # noqa: E501

    The version of the OpenAPI document: v1alpha
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from ncbi.datasets.configuration import Configuration


class V1alpha1Protein(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'accession_version': 'str',
        'isoform_name': 'str',
        'length': 'int',
        'mature_peptides': 'list[V1alpha1MaturePeptide]',
        'name': 'str'
    }

    attribute_map = {
        'accession_version': 'accession_version',
        'isoform_name': 'isoform_name',
        'length': 'length',
        'mature_peptides': 'mature_peptides',
        'name': 'name'
    }

    def __init__(self, accession_version=None, isoform_name=None, length=None, mature_peptides=None, name=None, local_vars_configuration=None):  # noqa: E501
        """V1alpha1Protein - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._accession_version = None
        self._isoform_name = None
        self._length = None
        self._mature_peptides = None
        self._name = None
        self.discriminator = None

        if accession_version is not None:
            self.accession_version = accession_version
        if isoform_name is not None:
            self.isoform_name = isoform_name
        if length is not None:
            self.length = length
        if mature_peptides is not None:
            self.mature_peptides = mature_peptides
        if name is not None:
            self.name = name

    @property
    def accession_version(self):
        """Gets the accession_version of this V1alpha1Protein.  # noqa: E501


        :return: The accession_version of this V1alpha1Protein.  # noqa: E501
        :rtype: str
        """
        return self._accession_version

    @accession_version.setter
    def accession_version(self, accession_version):
        """Sets the accession_version of this V1alpha1Protein.


        :param accession_version: The accession_version of this V1alpha1Protein.  # noqa: E501
        :type: str
        """

        self._accession_version = accession_version

    @property
    def isoform_name(self):
        """Gets the isoform_name of this V1alpha1Protein.  # noqa: E501


        :return: The isoform_name of this V1alpha1Protein.  # noqa: E501
        :rtype: str
        """
        return self._isoform_name

    @isoform_name.setter
    def isoform_name(self, isoform_name):
        """Sets the isoform_name of this V1alpha1Protein.


        :param isoform_name: The isoform_name of this V1alpha1Protein.  # noqa: E501
        :type: str
        """

        self._isoform_name = isoform_name

    @property
    def length(self):
        """Gets the length of this V1alpha1Protein.  # noqa: E501


        :return: The length of this V1alpha1Protein.  # noqa: E501
        :rtype: int
        """
        return self._length

    @length.setter
    def length(self, length):
        """Sets the length of this V1alpha1Protein.


        :param length: The length of this V1alpha1Protein.  # noqa: E501
        :type: int
        """

        self._length = length

    @property
    def mature_peptides(self):
        """Gets the mature_peptides of this V1alpha1Protein.  # noqa: E501


        :return: The mature_peptides of this V1alpha1Protein.  # noqa: E501
        :rtype: list[V1alpha1MaturePeptide]
        """
        return self._mature_peptides

    @mature_peptides.setter
    def mature_peptides(self, mature_peptides):
        """Sets the mature_peptides of this V1alpha1Protein.


        :param mature_peptides: The mature_peptides of this V1alpha1Protein.  # noqa: E501
        :type: list[V1alpha1MaturePeptide]
        """

        self._mature_peptides = mature_peptides

    @property
    def name(self):
        """Gets the name of this V1alpha1Protein.  # noqa: E501


        :return: The name of this V1alpha1Protein.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this V1alpha1Protein.


        :param name: The name of this V1alpha1Protein.  # noqa: E501
        :type: str
        """

        self._name = name

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
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
        if not isinstance(other, V1alpha1Protein):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1alpha1Protein):
            return True

        return self.to_dict() != other.to_dict()
