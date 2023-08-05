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


class V1alpha1GeneDescriptor(object):
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
        'chromosome': 'str',
        'chromosomes': 'list[str]',
        'common_name': 'str',
        'description': 'str',
        'ensembl_gene_ids': 'list[str]',
        'gene_id': 'str',
        'genomic_ranges': 'list[V1alpha1SeqRangeSet]',
        'nomenclature_authority': 'V1alpha1NomenclatureAuthority',
        'omim_ids': 'list[str]',
        'orientation': 'V1alpha1Orientation',
        'proteins': 'list[V1alpha1Protein]',
        'swiss_prot_accessions': 'list[str]',
        'symbol': 'str',
        'tax_id': 'str',
        'taxname': 'str',
        'transcripts': 'list[V1alpha1Transcript]',
        'type': 'GeneDescriptorGeneType'
    }

    attribute_map = {
        'chromosome': 'chromosome',
        'chromosomes': 'chromosomes',
        'common_name': 'common_name',
        'description': 'description',
        'ensembl_gene_ids': 'ensembl_gene_ids',
        'gene_id': 'gene_id',
        'genomic_ranges': 'genomic_ranges',
        'nomenclature_authority': 'nomenclature_authority',
        'omim_ids': 'omim_ids',
        'orientation': 'orientation',
        'proteins': 'proteins',
        'swiss_prot_accessions': 'swiss_prot_accessions',
        'symbol': 'symbol',
        'tax_id': 'tax_id',
        'taxname': 'taxname',
        'transcripts': 'transcripts',
        'type': 'type'
    }

    def __init__(self, chromosome=None, chromosomes=None, common_name=None, description=None, ensembl_gene_ids=None, gene_id=None, genomic_ranges=None, nomenclature_authority=None, omim_ids=None, orientation=None, proteins=None, swiss_prot_accessions=None, symbol=None, tax_id=None, taxname=None, transcripts=None, type=None, local_vars_configuration=None):  # noqa: E501
        """V1alpha1GeneDescriptor - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._chromosome = None
        self._chromosomes = None
        self._common_name = None
        self._description = None
        self._ensembl_gene_ids = None
        self._gene_id = None
        self._genomic_ranges = None
        self._nomenclature_authority = None
        self._omim_ids = None
        self._orientation = None
        self._proteins = None
        self._swiss_prot_accessions = None
        self._symbol = None
        self._tax_id = None
        self._taxname = None
        self._transcripts = None
        self._type = None
        self.discriminator = None

        if chromosome is not None:
            self.chromosome = chromosome
        if chromosomes is not None:
            self.chromosomes = chromosomes
        if common_name is not None:
            self.common_name = common_name
        if description is not None:
            self.description = description
        if ensembl_gene_ids is not None:
            self.ensembl_gene_ids = ensembl_gene_ids
        if gene_id is not None:
            self.gene_id = gene_id
        if genomic_ranges is not None:
            self.genomic_ranges = genomic_ranges
        if nomenclature_authority is not None:
            self.nomenclature_authority = nomenclature_authority
        if omim_ids is not None:
            self.omim_ids = omim_ids
        if orientation is not None:
            self.orientation = orientation
        if proteins is not None:
            self.proteins = proteins
        if swiss_prot_accessions is not None:
            self.swiss_prot_accessions = swiss_prot_accessions
        if symbol is not None:
            self.symbol = symbol
        if tax_id is not None:
            self.tax_id = tax_id
        if taxname is not None:
            self.taxname = taxname
        if transcripts is not None:
            self.transcripts = transcripts
        if type is not None:
            self.type = type

    @property
    def chromosome(self):
        """Gets the chromosome of this V1alpha1GeneDescriptor.  # noqa: E501


        :return: The chromosome of this V1alpha1GeneDescriptor.  # noqa: E501
        :rtype: str
        """
        return self._chromosome

    @chromosome.setter
    def chromosome(self, chromosome):
        """Sets the chromosome of this V1alpha1GeneDescriptor.


        :param chromosome: The chromosome of this V1alpha1GeneDescriptor.  # noqa: E501
        :type: str
        """

        self._chromosome = chromosome

    @property
    def chromosomes(self):
        """Gets the chromosomes of this V1alpha1GeneDescriptor.  # noqa: E501


        :return: The chromosomes of this V1alpha1GeneDescriptor.  # noqa: E501
        :rtype: list[str]
        """
        return self._chromosomes

    @chromosomes.setter
    def chromosomes(self, chromosomes):
        """Sets the chromosomes of this V1alpha1GeneDescriptor.


        :param chromosomes: The chromosomes of this V1alpha1GeneDescriptor.  # noqa: E501
        :type: list[str]
        """

        self._chromosomes = chromosomes

    @property
    def common_name(self):
        """Gets the common_name of this V1alpha1GeneDescriptor.  # noqa: E501


        :return: The common_name of this V1alpha1GeneDescriptor.  # noqa: E501
        :rtype: str
        """
        return self._common_name

    @common_name.setter
    def common_name(self, common_name):
        """Sets the common_name of this V1alpha1GeneDescriptor.


        :param common_name: The common_name of this V1alpha1GeneDescriptor.  # noqa: E501
        :type: str
        """

        self._common_name = common_name

    @property
    def description(self):
        """Gets the description of this V1alpha1GeneDescriptor.  # noqa: E501


        :return: The description of this V1alpha1GeneDescriptor.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this V1alpha1GeneDescriptor.


        :param description: The description of this V1alpha1GeneDescriptor.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def ensembl_gene_ids(self):
        """Gets the ensembl_gene_ids of this V1alpha1GeneDescriptor.  # noqa: E501


        :return: The ensembl_gene_ids of this V1alpha1GeneDescriptor.  # noqa: E501
        :rtype: list[str]
        """
        return self._ensembl_gene_ids

    @ensembl_gene_ids.setter
    def ensembl_gene_ids(self, ensembl_gene_ids):
        """Sets the ensembl_gene_ids of this V1alpha1GeneDescriptor.


        :param ensembl_gene_ids: The ensembl_gene_ids of this V1alpha1GeneDescriptor.  # noqa: E501
        :type: list[str]
        """

        self._ensembl_gene_ids = ensembl_gene_ids

    @property
    def gene_id(self):
        """Gets the gene_id of this V1alpha1GeneDescriptor.  # noqa: E501


        :return: The gene_id of this V1alpha1GeneDescriptor.  # noqa: E501
        :rtype: str
        """
        return self._gene_id

    @gene_id.setter
    def gene_id(self, gene_id):
        """Sets the gene_id of this V1alpha1GeneDescriptor.


        :param gene_id: The gene_id of this V1alpha1GeneDescriptor.  # noqa: E501
        :type: str
        """

        self._gene_id = gene_id

    @property
    def genomic_ranges(self):
        """Gets the genomic_ranges of this V1alpha1GeneDescriptor.  # noqa: E501


        :return: The genomic_ranges of this V1alpha1GeneDescriptor.  # noqa: E501
        :rtype: list[V1alpha1SeqRangeSet]
        """
        return self._genomic_ranges

    @genomic_ranges.setter
    def genomic_ranges(self, genomic_ranges):
        """Sets the genomic_ranges of this V1alpha1GeneDescriptor.


        :param genomic_ranges: The genomic_ranges of this V1alpha1GeneDescriptor.  # noqa: E501
        :type: list[V1alpha1SeqRangeSet]
        """

        self._genomic_ranges = genomic_ranges

    @property
    def nomenclature_authority(self):
        """Gets the nomenclature_authority of this V1alpha1GeneDescriptor.  # noqa: E501


        :return: The nomenclature_authority of this V1alpha1GeneDescriptor.  # noqa: E501
        :rtype: V1alpha1NomenclatureAuthority
        """
        return self._nomenclature_authority

    @nomenclature_authority.setter
    def nomenclature_authority(self, nomenclature_authority):
        """Sets the nomenclature_authority of this V1alpha1GeneDescriptor.


        :param nomenclature_authority: The nomenclature_authority of this V1alpha1GeneDescriptor.  # noqa: E501
        :type: V1alpha1NomenclatureAuthority
        """

        self._nomenclature_authority = nomenclature_authority

    @property
    def omim_ids(self):
        """Gets the omim_ids of this V1alpha1GeneDescriptor.  # noqa: E501


        :return: The omim_ids of this V1alpha1GeneDescriptor.  # noqa: E501
        :rtype: list[str]
        """
        return self._omim_ids

    @omim_ids.setter
    def omim_ids(self, omim_ids):
        """Sets the omim_ids of this V1alpha1GeneDescriptor.


        :param omim_ids: The omim_ids of this V1alpha1GeneDescriptor.  # noqa: E501
        :type: list[str]
        """

        self._omim_ids = omim_ids

    @property
    def orientation(self):
        """Gets the orientation of this V1alpha1GeneDescriptor.  # noqa: E501


        :return: The orientation of this V1alpha1GeneDescriptor.  # noqa: E501
        :rtype: V1alpha1Orientation
        """
        return self._orientation

    @orientation.setter
    def orientation(self, orientation):
        """Sets the orientation of this V1alpha1GeneDescriptor.


        :param orientation: The orientation of this V1alpha1GeneDescriptor.  # noqa: E501
        :type: V1alpha1Orientation
        """

        self._orientation = orientation

    @property
    def proteins(self):
        """Gets the proteins of this V1alpha1GeneDescriptor.  # noqa: E501


        :return: The proteins of this V1alpha1GeneDescriptor.  # noqa: E501
        :rtype: list[V1alpha1Protein]
        """
        return self._proteins

    @proteins.setter
    def proteins(self, proteins):
        """Sets the proteins of this V1alpha1GeneDescriptor.


        :param proteins: The proteins of this V1alpha1GeneDescriptor.  # noqa: E501
        :type: list[V1alpha1Protein]
        """

        self._proteins = proteins

    @property
    def swiss_prot_accessions(self):
        """Gets the swiss_prot_accessions of this V1alpha1GeneDescriptor.  # noqa: E501


        :return: The swiss_prot_accessions of this V1alpha1GeneDescriptor.  # noqa: E501
        :rtype: list[str]
        """
        return self._swiss_prot_accessions

    @swiss_prot_accessions.setter
    def swiss_prot_accessions(self, swiss_prot_accessions):
        """Sets the swiss_prot_accessions of this V1alpha1GeneDescriptor.


        :param swiss_prot_accessions: The swiss_prot_accessions of this V1alpha1GeneDescriptor.  # noqa: E501
        :type: list[str]
        """

        self._swiss_prot_accessions = swiss_prot_accessions

    @property
    def symbol(self):
        """Gets the symbol of this V1alpha1GeneDescriptor.  # noqa: E501


        :return: The symbol of this V1alpha1GeneDescriptor.  # noqa: E501
        :rtype: str
        """
        return self._symbol

    @symbol.setter
    def symbol(self, symbol):
        """Sets the symbol of this V1alpha1GeneDescriptor.


        :param symbol: The symbol of this V1alpha1GeneDescriptor.  # noqa: E501
        :type: str
        """

        self._symbol = symbol

    @property
    def tax_id(self):
        """Gets the tax_id of this V1alpha1GeneDescriptor.  # noqa: E501


        :return: The tax_id of this V1alpha1GeneDescriptor.  # noqa: E501
        :rtype: str
        """
        return self._tax_id

    @tax_id.setter
    def tax_id(self, tax_id):
        """Sets the tax_id of this V1alpha1GeneDescriptor.


        :param tax_id: The tax_id of this V1alpha1GeneDescriptor.  # noqa: E501
        :type: str
        """

        self._tax_id = tax_id

    @property
    def taxname(self):
        """Gets the taxname of this V1alpha1GeneDescriptor.  # noqa: E501


        :return: The taxname of this V1alpha1GeneDescriptor.  # noqa: E501
        :rtype: str
        """
        return self._taxname

    @taxname.setter
    def taxname(self, taxname):
        """Sets the taxname of this V1alpha1GeneDescriptor.


        :param taxname: The taxname of this V1alpha1GeneDescriptor.  # noqa: E501
        :type: str
        """

        self._taxname = taxname

    @property
    def transcripts(self):
        """Gets the transcripts of this V1alpha1GeneDescriptor.  # noqa: E501


        :return: The transcripts of this V1alpha1GeneDescriptor.  # noqa: E501
        :rtype: list[V1alpha1Transcript]
        """
        return self._transcripts

    @transcripts.setter
    def transcripts(self, transcripts):
        """Sets the transcripts of this V1alpha1GeneDescriptor.


        :param transcripts: The transcripts of this V1alpha1GeneDescriptor.  # noqa: E501
        :type: list[V1alpha1Transcript]
        """

        self._transcripts = transcripts

    @property
    def type(self):
        """Gets the type of this V1alpha1GeneDescriptor.  # noqa: E501


        :return: The type of this V1alpha1GeneDescriptor.  # noqa: E501
        :rtype: GeneDescriptorGeneType
        """
        return self._type

    @type.setter
    def type(self, type):
        """Sets the type of this V1alpha1GeneDescriptor.


        :param type: The type of this V1alpha1GeneDescriptor.  # noqa: E501
        :type: GeneDescriptorGeneType
        """

        self._type = type

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
        if not isinstance(other, V1alpha1GeneDescriptor):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1alpha1GeneDescriptor):
            return True

        return self.to_dict() != other.to_dict()
