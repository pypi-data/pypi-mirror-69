#!/usr/bin/env python
"""Tools for reading, writing, analyzing, and manipulating GFF file subtypes
(e.g. `GTF2`_ and `GFF3`_).

.. contents::
   :local:


Summary
-------

Because `GTF2`_/`GFF3`_ files are hierarchically structured -- i.e. a complex
feature can be assembled from several component features; each component
feature having its own record on its own line -- two interfaces for reading
`GTF2`_/`GFF3`_ files are included:

    Assembly of transcripts from exon, CDS, & UTR annotations
        |GTF2_TranscriptAssembler| and |GFF3_TranscriptAssembler| collect
        individual exon and CDS features, and assemble these into |Transcripts|.

        Features are read from `GTF2`_/`GFF3`_ files, grouped by `transcript_id`,
        `Parent`, or `ID` attributes, depending on file type. Assembled
        |Transcripts| are yielded only when their component features have fully
        been collected.

    Low-level parsing of simple features
        |GTF2_Reader| and |GFF3_Reader| read raw features (such as individual
        exons, stop codons, SNPs, et c) from `GTF2`_/`GFF3`_ files. Each line
        is returned as a |SegmentChain|.

Module contents
---------------

.. autosummary::

   GTF2_Reader
   GTF2_TranscriptAssembler
   GFF3_Reader
   GFF3_TranscriptAssembler


Examples
--------

|GTF2_Reader| and |GFF3_Reader| return raw, unmodified features from `GTF2`_ or
`GFF3`_ files -- e.g. exons, coding regions, stop codons -- without assembling
them into transcripts::

    >>> feature_reader = GTF2_Reader("some_file.gtf")
    >>> for feature in reader:
    >>>     print(feature.get_name(),feature.attr["type"],str(feature))
    ('YAL030W_mRNA',  'exon',        'chrI:87262-87387(+)')
    ('YAL030W_mRNA',  'exon',        'chrI:87500-87857(+)')
    ('YAL030W_mRNA',  'CDS',         'chrI:87285-87387(+)')
    ('YAL030W_mRNA',  'CDS',         'chrI:87500-87749(+)')
    ('YAL030W_mRNA',  'start_codon', 'chrI:87285-87288(+)')
    ('YAL030W_mRNA',  'stop_codon',  'chrI:87749-87752(+)')
    ('YBL092W_mRNA',  'exon',        'chrII:45643-45644(+)')
    ('YBL092W_mRNA',  'exon',        'chrII:45977-46440(+)')
    ('YBL092W_mRNA',  'CDS',         'chrII:45977-46367(+)')
    ('YBL092W_mRNA',  'start_codon', 'chrII:45977-45980(+)')
    [rest of output omitted]

In contrast, |GTF2_TranscriptAssembler| and |GFF3_TranscriptAssembler| reconstruct
transcripts from their components, based upon their `transcript_id`, `ID`, or
`Parent` attributes. Note how all features are of type `mRNA`, and how some
contain multiple exons (coordinates separated by `'^'`)::

    >>> transcript_reader = GTF2_TranscriptAssembler("some_file.gtf")
    >>> for transcript in reader:
    >>>     print(transcript.get_name(),transcript.attr["type"],str(transcript))
    ('YAL030W_mRNA',   'mRNA',  'chrI:87262-87387^87500-87857(+)')
    ('YBL092W_mRNA',   'mRNA',  'chrII:45643-45644^45977-46440(+)')
    ('YBL057C_mRNA',   'mRNA',  'chrII:112749-113427^113444-113450(-)')
    ('YBL040C_mRNA',   'mRNA',  'chrII:142033-142749^142846-142891(-)')
    ('YBL018C_mRNA',   'mRNA',  'chrII:185961-186352^186427-186504(-)')
    ('YBR012W-B',      'mRNA',  'chrII:259868-261173^261174-265140(+)')
    ('YBR044C_mRNA',   'mRNA',  'chrII:324292-324336^324340-326127(-)')
    ('YBR082C_mRNA',   'mRNA',  'chrII:406506-407027^407122-407379(-)')
    ('YBR126W-B_mRNA', 'mRNA',  'chrII:490824-491202(+)')
    ('YBR138C_mRNA',   'mRNA',  'chrII:513636-515391(-)')
    [rest of output omitted]


See Also
--------
`GFF3 specification <http://song.sourceforge.net/gff3.shtml>`_
    GFF3 specification by the Sequence Ontology consortium

`GTF2.2 specification <http://mblab.wustl.edu/GTF22.html>`_
    Hosted by the Brent lab

`UCSC file format FAQ <http://genome.ucsc.edu/FAQ/FAQformat.html>`_.
    GFF & GTF descriptions at UCSC
"""
__author__ = "joshua"
__date__ = "$Dec 1, 2010 11:00:55 AM$"
import itertools
import gc
import copy
import sys
from abc import abstractmethod
from plastid.util.io.filters import AbstractReader, SkipBlankReader
from plastid.util.io.openers import NullWriter, multiopen
from plastid.readers.common import get_identical_attributes, \
                                   AssembledFeatureReader
from plastid.genomics.roitools import Transcript, SegmentChain, \
                                      GenomicSegment, add_three_for_stop_codon
from plastid.readers.gff_tokens import parse_GFF3_tokens, parse_GTF2_tokens
from plastid.util.services.exceptions import DataWarning, warn



#===============================================================================
# INDEX: SO v2.5.3 feature types
#   see: http://www.sequenceontology.org/resources/intro.html
#===============================================================================

_DEFAULT_GFF3_GENE_TYPES = {
    "gene",
    "candidate_gene",
    "functional_candidate_gene",
    "positional_candidate_gene",
    "cryptic_gene",
    "cryptogene",
    "engineered_gene",
    "engineered_foreign_gene",
    "engineered_foreign_transposable_element_gene",
    "engineered_fusion_gene"
    "epigenetically_modified_gene",
    "allelically_excluded_gene",
    "gene_rearranged_at_DNA_level",
    "maternally_imprinted_gene",
    "paternally_imprinted_gene",
    "foreign_gene",
    "fusion_gene",
    "gene_cassette",
    "gene_with_non_canonical_start_codon",
    "gene_with_start_codon_CUG",
    "gene_with_polycistronic_transcript",
    "gene_with_dicistronic_transcript",
    "gene_with_dicistronic_mRNA",
    "gene_with_dicistronic_primary_transcript",
    "gene_with_trans_spliced_transcript",
    "mt_gene",
    "kinetoplast_gene",
    "maxicircle_gene",
    "minicircle_gene",
    "ncRNA_gene",
    "gRNA_gene",
    "lincRNA_gene",
    "miRNA_gene",
    "piRNA_gene",
    "RNase_MRP_RNA_gene",
    "RNase_P_RNA_gene",
    "rRNA_gene",
    "scRNA_gene",
    "snoRNA_gene",
    "snRNA_gene",
    "SRP_RNA_gene",
    "telomerase_RNA_gene",
    "tmRNA_gene",
    "tRNA_gene",
    "negatively_autoregulated_gene",
    "nuclear_gene",
    "nucleomorph_gene",
    "plasmid_gene",
    "plastid_gene",
    "apicoplast_gene",
    "chromoplast_gene",
    "ct_gene",
    "cyanelle_gene",
    "leucoplast_gene",
    "proplastid_gene",
    "positively_autoregulated_gene",
    "post_translationally_regulated_gene",
    "predicted_gene",
    "protein_coding_gene",
    "gene_with_edited_transcript",
    "gene_with_mRNA_with_frameshift",
    "gene_with_polyadenylated_mRNA",
    "gene_with_recoded_mRNA",
    "gene_with_mRNA_recoded_by_translational_bypass",
    "gene_with_stop_codon_read_through",
    "gene_with_stop_codon_redefined_as_pyrrollysine",
    "gene_with_stop_codon_redefined_as_selenocysteine",
    "gene_with_transcript_with_translational_frameshift", "proviral_gene",
    "endogenous_retroviral_gene", "non_functional_homolog_of_pseudogene",
    "non_processed_pseudogene", "cassette_pseudogene", "duplicated_pseudogene",
    "nuclear_mt_pseudogene", "pseudogene_by_unequal_crossing_over", "unitary_pseudogene",
    "polymorphic_pseudogene", "processed_pseudogene", "transposable_element_pseudogene",
    "recombinatorially_rearranged_gene", "recombinatorially_inverted_gene",
    "recombinatorially_rearranged_vertebrate_immune_system_gene", "rescue_gene",
    "wild_type_rescue_gene", "retrogene", "silenced_gene", "gene_silenced_by_DNA_modification",
    "gene_silenced_by_DNA_methylation", "gene_silenced_by_histone_modification",
    "gene_silenced_by_histone_deacetylation", "gene_silenced_by_histone_methylation",
    "gene_silenced_by_RNA_interference", "transgene", "floxed_gene",
    "translationally_regulated_gene", "transposable_element_gene",
    "engineered_foreign_transposable_element_gene",
}
"""GFF3 gene types as annotated by `SO 2.5.3 <http://www.sequenceontology.org/resources/intro.html>`_"""

_DEFAULT_GFF3_TRANSCRIPT_TYPES = {
    "transcript",
    "mature_transcript",
    "enzymatic_RNA",
    "mRNA",
    "mRNA_with_frameshift",
    "mRNA_with_minus_1_frameshift",
    "mRNA_with_minus_2_frameshift",
    "mRNA_with_plus_1_frameshift",
    "mRNA_with_plus_2_frameshift",
    "polyadenylated_mRNA",
    "polycistronic_mRNA",
    "dicistronic_mRNA",
    "monocistronic_mRNA",
    "recoded_mRNA",
    "mRNA_recoded_by_codon_redefinition",
    "mRNA_recoded_by_translational_bypass",
    "trans_spliced_mRNA",
    "ncRNA",
    "antisense_RNA",
    "MicF_RNA",
    "class_I_RNA",
    "class_II_RNA",
    "enhancerRNA",
    "guide_RNA",
    "lnc_RNA",
    "antisense_lncRNA",
    "intronic_lncRNA",
    "lincRNA",
    "piRNA",
    "priRNA",
    "rasiRNA",
    "RNase_MRP_RNA",
    "RNase_P_RNA",
    "rRNA",
    "large_subunit_rRNA",
    "rRNA_21S",
    "rRNA_23S",
    "rRNA_25S",
    "rRNA_28S",
    "rRNA_5_8S",
    "rRNA_5S",
    "small_subunit_rRNA",
    "rRNA_16S",
    "rRNA_18S",
    "rRNA_cleavage_RNA",
    "scRNA",
    "shRNA",
    "siRNA",
    "small_regulatory_ncRNA",
    "CsrB_RsmB_RNA",
    "DsrA_RNA",
    "GcvB_RNA",
    "IoR",
    "miRNA",
    "moR",
    "OxyS_RNA",
    "RNA_6S",
    "RprA_RNA",
    "RRE_RNA",
    "spot42_RNA",
    "tmRNA",
    "snoRNA",
    "C_D_box_snoRNA",
    "methylation_guide_snoRNA",
    "U14_snoRNA",
    "U3_snoRNA",
    "H_ACA_box_snoRNA",
    "pseudouridylation_guide_snoRNA",
    "snRNA",
    "U11_snRNA",
    "U12_snRNA",
    "U1_snRNA",
    "U2_snRNA",
    "U4_snRNA",
    "U4atac_snRNA",
    "U5_snRNA",
    "U6_snRNA",
    "U6atac_snRNA",
    "SRP_RNA",
    "tasiRNA",
    "telomerase_RNA",
    "telomeric_transcript",
    "anti_ARRET",
    "ARIA",
    "ARRET",
    "TERRA",
    "tRNA",
    "alanyl_tRNA",
    "arginyl_tRNA",
    "asparaginyl_tRNA",
    "aspartyl_tRNA",
    "cysteinyl_tRNA",
    "glutaminyl_tRNA",
    "glutamyl_tRNA",
    "glycyl_tRNA",
    "histidyl_tRNA",
    "isoleucyl_tRNA",
    "leucyl_tRNA",
    "lysyl_tRNA",
    "methionyl_tRNA",
    "phenylalanyl_tRNA",
    "prolyl_tRNA",
    "pyrrollysyl_tRNA",
    "selenocysteinyl_tRNA",
    "seryl_tRNA",
    "threonyl_tRNA",
    "tryptophanyl_tRNA",
    "tyrosyl_tRNA",
    "valyl_tRNA",
    "vault_RNA",
    "Y_RNA",
    "edited_transcript",
    "edited_mRNA",
    "edited_transcript_by_A_to_I_substitution",
    "non_functional_homolog_of_pseudogenic_transcript",
    "pseudogenic_transcript",
}
"""GFF3 mature transcript types as annotated by `SO 2.5.3
<http://www.sequenceontology.org/resources/intro.html>`_"""

_DEFAULT_GFF3_EXON_TYPES = {
    "exon",
    "coding_exon",
    "noncoding_exon",
    "exon_of_single_exon_gene",
    "interior_exon",
    "interior_coding_exon",
    "five_prime_coding_exon",
    "three_prime_coding_exon"
    "five_prime_noncoding_exon",
    "three_prime_noncoding_exon",
    "pseudogenic_exon",
}
"""GFF3 exon feature types as annotated by `SO 2.5.3
<http://www.sequenceontology.org/resources/intro.html>`_"""

_DEFAULT_GFF3_CDS_TYPES = {
    "CDS",
    "CDS_fragment",
    "CDS_indpendently_known",
    "CDS_predicted",
}
"""GFF3 CDS feature types as annotated by `SO 2.5.3
<http://www.sequenceontology.org/resources/intro.html>`_"""

#===============================================================================
# INDEX: Readers for GFF formats
#===============================================================================

StopFeature = SegmentChain(GenomicSegment("Stop", 0, 1, "."), type="StopFeature", ID="StopFeature")
"""Special |SegmentChain| emitted from GFF readers when:

- the special line ``###`` is encountered
- the special line ``###FASTA`` is encountered
- a GFF file is marked as sorted, and the contig/chromosome changes
- the source stream of features is changed

indicating that all previously returned features may be assembled into full
objects.

.. note::

   Because :obj:`StopFeature` is zero-length, it does not evaluate as equal to
   itself. Use ``x is StopFeature`` or ``x is not StopFeature`` it testing for
   equality.
"""


class AbstractGFF_Reader(AbstractReader):
    """Abstract base class for GFF readers.

    Parses GFF streams line by line into |GenomicSegment|

    Attributes
    ----------
    metadata : dict
        Dictionary of metadata found in file headers
    """

    def __init__(self, *streams, **kwargs):
        """Create an |AbstractGFF_Reader|

        Parameters
        ----------
        *streams : one or more str or file-like
            One or more input streams or filenames pointing to GFF information

        adjust_to_0 : bool, optional
            Boolean, whether or not to adjust feature
            indices to a 0 base. True for `GTF2`_ and `GFF3`_
            files, as these are 1-indexed. (Default: `True`)

        end_included : bool, optional
            Boolean, whether the end coordinate is
            included in the feature (closed or 'end-included' intervals)
            or not (half-open intervals). (Default: `True`)

        return_stopfeatures : bool, optional
            If `True`, will return a special |SegmentChain| called
            :obj:`StopFeature` signifying that all previously emitted GFF
            entries may be assembled into complete entities. These are emitted
            when the line `'###'` is encountered in a GFF. (Default: `True`)

        is_sorted : bool, optional
            If True and `return_stopfeatures` is True, assume the GFF is sorted.
            The reader will return :obj:`StopFeature` when the chromosome name
            of a given feature differs from that of the previous feature.
            (Default: `False`)

        tabix : boolean, optional
            `streams` point to `tabix`_-compressed files or are open
            :class:`~pysam.ctabix.tabix_file_iterator` (Default: `False`)
        """
        stream = itertools.chain.from_iterable(multiopen(streams, fn=open))
        if kwargs.get("tabix", False) == True:
            stream = ("\t".join(X) for X in stream)

        self.chromosomes = {}
        self.metadata = {}
        self.line_queue = []

        self.adjust_to_0 = kwargs.get("adjust_to_0", True)
        self.end_included = kwargs.get("end_included", True)
        self.return_stopfeatures = kwargs.get("return_stopfeatures", True)
        self.is_sorted = kwargs.get("is_sorted", False)

        line = next(stream)
        while line[0:2] == "##":
            self._parse_metatokens(line[2:])
            line = next(stream)

        self.line_queue.append(line)
        self._last_chrom = None

        self.stream = itertools.chain(self.line_queue, SkipBlankReader(stream))
        super(AbstractGFF_Reader, self).__init__(self.stream)

    def _parse_metatokens(self, inp):
        """Parses metadata embedded in a GFF stream, and stores
        these in appropriate attributes.

        Parameters
        ----------
        inp : str
            line of GFF input

        """
        items = inp.rstrip().split()
        if len(items) > 0:
            key = items[0]
            if key == "sequence-region":
                try:
                    self.chromosomes[items[1]] = (items[2], items[3])
                except IndexError:
                    self.chromosomes[items[1]] = tuple(items[1:])

            elif key in self.metadata.keys():
                self.metadata[key] += ";" + " ".join(items[1:])

            else:
                self.metadata[key] = " ".join(items[1:])

    @abstractmethod
    def _parse_tokens(self, attr_string):
        """Placeholder function to parse column 9, which is formatted
        differently in different GFF subtypes. Implement this
        in subclasses

        Parameters
        ----------
        attr_string : str
            Ninth column of GFF

        Returns
        -------
        dict
            Dictionary of parsed tokens from ninth GFF column
        """
        pass

    def _parse_genomic_feature(self, line):
        """Parse GFF lines into |SegmentChain| objects

        Parameters
        ----------
        line : str
            Valid line of a GFF formatted file

        Returns
        -------
        |SegmentChain|
        """
        # yapf: disable
        items = line.rstrip("\n").split("\t")
        chrom        = items[0]
        source       = items[1]
        feature_type = items[2]
        start        = int(items[3]) - int(self.adjust_to_0)
        end          = int(items[4]) - int(self.adjust_to_0) + int(self.end_included)
        score        = items[5]
        strand       = items[6]
        phase        = items[7]
        attr_string  = items[8]

        info_dict = self._parse_tokens(attr_string)
        info_dict["source"] = source
        info_dict["score"]  = score
        info_dict["phase"]  = phase
        info_dict["type"]   = feature_type
        # yapf: enable

        my_iv = GenomicSegment(chrom, start, end, strand)
        my_feature = SegmentChain(my_iv, **info_dict)

        if chrom != self._last_chrom:
            old_chrom = self._last_chrom
            self._last_chrom = chrom
            if old_chrom is not None:
                if self.is_sorted == True and self.return_stopfeatures == True:
                    self.stream = itertools.chain([line], self.stream)
                    return StopFeature

        return my_feature

    def filter(self, line):
        """Parses lines of the GFF stream into |SegmentChain|
        When metadata is found, temporarily delegates processing to
        :meth:`_parse_metatokens`, and then reads the next genomic feature

        Parameters
        ----------
        line
            Next line from GFF stream

        Returns
        -------
        |SegmentChain|
            Next feature in file
        """
        if line.startswith("###"):
            if self.return_stopfeatures == True:
                return StopFeature
            else:
                return next(self)

        elif line.startswith("##FASTA"):
            return StopFeature

        elif line.startswith("##"):
            self._parse_metatokens(line[2:])
            return next(self)

        elif line.startswith("#"):
            return next(self)

        else:
            return self._parse_genomic_feature(line)


class GFF3_Reader(AbstractGFF_Reader):
    """
    GFF3_Reader(*streams, end_included=True, return_stopfeatures=False, is_sorted=False, tabix=False)

    Read raw features in `GFF3`_ files as |SegmentChains|.

    Users who wish to reconstruct |Transcripts| from raw features should instead
    use |GFF3_TranscriptAssembler|, which performs this task automatically.

    Assumes input stream to use 1-indexed coordinates, in compliance with the
    `Sequence Ontology GFF3 specification <http://song.sourceforge.net/gff3.shtml>`_.

    `GFF3`_ attributes (from column 9) for each record are stored in its ``attr``
    dictionary. Names and values of attributes are unescaped. The values for the
    attributes `Parent`, `Alias`, `Dbxref`, `dbxref`, and `Note`, if present, are
    lists rather than strings, because the `GFF3`_ spec enables these to have
    multiple values.


    Parameters
    ----------
    *streams : one or more str or file-like
        One or more input streams or filenames pointing to GFF information

    end_included : bool, optional
        Boolean, whether the end coordinate is included in the feature (closed
        or 'end-included' intervals) or not (half-open intervals). All
        coordinates will be normalized to 0-indexed, half-open (Default: `True`)

    return_stopfeatures : bool, optional
        If `True`, return a special |SegmentChain| called :py:obj:`StopFeature`
        signifying that all previously emitted GFF entries may be assembled
        into complete entities. These are emitted when the line "###"
        is encountered in a `GFF3`_. (Default: `False`)

    is_sorted : bool, optional
        If `True` and `return_stopfeatures` is `True`, assume the `GFF3`_ is
        sorted.  The reader will return :obj:`StopFeature` when the chromosome
        name of a given feature differs from that of the previous feature.
        (Default: `False`)

    tabix : boolean, optional
        `streams` point to `tabix`_-compressed files or are open
        :class:`~pysam.ctabix.tabix_file_iterator` (Default: `False`)


    Attributes
    ----------
    metadata : dict
        Dictionary of metadata found in file headers


    Examples
    --------

    Read raw features from a `GFF3`_ file::

        >>> feature_reader = GFF3_Reader(open("./some_file.gff"))
        >>> for feature in feature_reader:
        >>>     print(feature.get_name(), feature.attr["type"], str(feature))
        ('chrI', 'chromosome', 'chrI:0-230218(.)')
        ('TEL01L-TR', 'telomeric_repeat', 'chrI:0-62(-)')
        ('TEL01L', 'telomere', 'chrI:0-801(-)')
        ('TEL01L-XR', 'X_element_combinatorial_repeat', 'chrI:62-336(-)')
        ('YAL069W', 'gene', 'chrI:334-649(+)')
        ('TEL01L-XC', 'X_element', 'chrI:336-801(-)')
        ('TEL01L-XC_nucleotide_match', 'nucleotide_match', 'chrI:752-763(-)')
        ('TEL01L-XC_binding_site', 'binding_site', 'chrI:531-544(-)')
        ('YAL068W-A', 'gene', 'chrI:537-792(+)')
        ('ARS102', 'ARS', 'chrI:649-1791(.)')
        [rest of output omitted]
    """

    def __init__(self, *streams, **kwargs):
        """
        GFF3_Reader(*streams, end_included=True, return_stopfeatures=False, is_sorted=False, tabix=False)

        Parameters
        ----------
        *streams : one or more str or file-like
            One or more input streams or filenames pointing to GFF information

        end_included : bool, optional
            Boolean, whether the end coordinate is
            included in the feature (closed or 'end-included' intervals)
            or not (half-open intervals). (Default: `True`)

        return_stopfeatures : bool, optional
            If `True`, return a special |SegmentChain| called :py:obj:`StopFeature`
            signifying that all previously emitted GFF entries may be assembled
            into complete entities. These are emitted when the line "###"
            is encountered in a `GFF3`_. (Default: `False`)

        is_sorted : bool, optional
            If `True` and `return_stopfeatures` is `True`, assume the `GFF3`_ is
            sorted.  The reader will return :obj:`StopFeature` when the
            chromosome name of a given feature differs from that of the previous
            feature.  (Default: `False`)

        tabix : boolean, optional
            `streams` point to `tabix`_-compressed files or are open
            :class:`~pysam.ctabix.tabix_file_iterator` (Default: `False`)
         """
        super(GFF3_Reader, self).__init__(*streams, adjust_to_0=True, **kwargs)

    def _parse_tokens(self, inp):
        """Parse column 9 of `GFF3`_ into attribute dictionary

        Parameters
        ----------
        inp : str
            Ninth column of `GFF3`_

        Returns
        -------
        dict
            Dictionary of parsed tokens from ninth `GFF3`_ column
        """
        return parse_GFF3_tokens(inp)


class GTF2_Reader(AbstractGFF_Reader):
    """
    GTF2_Reader(*streams, end_included=True, return_stopfeatures=False, is_sorted=False, tabix=False)

    Read raw features in `GTF2`_ files as |SegmentChains|. To assemble transcripts
    from raw features, use |GTF2_TranscriptAssembler|.

    Assumes input to comply with the
    `GTF2 specification <http://mblab.wustl.edu/GTF22.html>`_. Each element must:

      - use 1-indexed, fully-closed coordinates
      - have defined `gene_id` and `transcript_id` attributes

    All |SegmentChain| objects returned by the reader have 0-indexed,
    half-open coordinates in keeping with Python conventions.


    Parameters
    ----------
    *streams : one or more str or file-like
        One or more input streams or filenames pointing to GFF information

    end_included : bool, optional
        Boolean, whether the end coordinate is included in the feature (closed
        or 'end-included' intervals) or not (half-open intervals).
        (Default: `True`)

    return_stopfeatures : bool, optional
        If `True`, will return a special |SegmentChain| called
        :py:obj:`StopFeature` signifying that all previously emitted
        SegmentChains may be assembled into complete entities. These are emitted
        when the line "###" is encountered in a `GTF2`_. (Default: `False`)

    is_sorted : bool, optional
        If `True` and `return_stopfeatures` is `True`, assume the `GTF2`_ is
        sorted by chromosome. The reader will return :obj:`StopFeature` when the
        chromosome name of a given feature differs from that of the previous
        feature. (Default: `False`)

    tabix : boolean, optional
        `streams` point to `tabix`_-compressed files or are open
        :class:`~pysam.ctabix.tabix_file_iterator` (Default: `False`)

    Examples
    --------
    Read raw features from a `GTF2`_ file::

        >>> feature_reader = GTF2_Reader(open("some_file.gtf"))
        >>> for feature in reader:
        >>>     print(feature.get_name(),feature.attr["type"],str(feature))
        ('YAL030W_mRNA',  'exon',        'chrI:87262-87387(+)')
        ('YAL030W_mRNA',  'exon',        'chrI:87500-87857(+)')
        ('YAL030W_mRNA',  'CDS',         'chrI:87285-87387(+)')
        ('YAL030W_mRNA',  'CDS',         'chrI:87500-87749(+)')
        ('YAL030W_mRNA',  'start_codon', 'chrI:87285-87288(+)')
        ('YAL030W_mRNA',  'stop_codon',  'chrI:87749-87752(+)')
        ('YBL092W_mRNA',  'exon',        'chrII:45643-45644(+)')
        ('YBL092W_mRNA',  'exon',        'chrII:45977-46440(+)')
        ('YBL092W_mRNA',  'CDS',         'chrII:45977-46367(+)')
        ('YBL092W_mRNA',  'start_codon', 'chrII:45977-45980(+)')
        [rest of output omitted]


    Attributes
    ----------
    metadata : dict
        Dictionary of metadata found in file headers
    """

    def __init__(self, *streams, **kwargs):
        """
        GTF2_Reader(*streams, end_included=True, return_stopfeatures=False, is_sorted=False, tabix=False)

        Parameters
        ----------
        *streams : one or more str or file-like
            One or more input streams or filenames pointing to GFF information

        end_included : bool, optional
            Boolean, whether the end coordinate is
            included in the feature (closed or 'end-included' intervals)
            or not (half-open intervals). (Default: `True`)

        return_stopfeatures : bool, optional
            If `True`, will return a special |SegmentChain| called
            :py:obj:`StopFeature` signifying that all previously emitted
            SegmentChains may be assembled into complete entities. These are
            emitted when the line "###" is encountered in a `GTF2`_. (Default:
            `False`)

        is_sorted : bool, optional
            If `True` and `return_stopfeatures` is `True`, assume the `GTF2`_ is
            sorted by chromosome. The reader will return :obj:`StopFeature` when
            the chromosome name of a given feature differs from that of the
            previous feature. (Default: `False`)

        tabix : boolean, optional
            `streams` point to `tabix`_-compressed files or are open
            :class:`~pysam.ctabix.tabix_file_iterator` (Default: `False`)
        """
        super(GTF2_Reader, self).__init__(*streams, adjust_to_0=True, **kwargs)

    def _parse_tokens(self, inp):
        """Parse column 9 of `GTF2`_ into dictionary

        Parameters
        ----------
        inp : str
            Ninth column of `GTF2`_

        Returns
        -------
        dict
            Dictionary of parsed tokens from ninth `GTF2`_ column
        """
        return parse_GTF2_tokens(inp)


class AbstractGFF_Assembler(AssembledFeatureReader):
    """Abstract base class for readers that assemble composite features
    -- e.g. |Transcript| objects -- from one or more features in one or
    more streams of `GTF2`_ or `GFF3`_ data.


    Attributes
    ----------
    stream : file-like
        Input stream, usually constructed from or more open filehandles

    metadata : dict
        Various attributes gleaned from the stream, if any

    counter : int
        Cumulative line number counter over all streams

    printer : file-like, optional
        Logger implementing a ``write()`` method.

    rejected : list
        A list of transcript IDs that failed to assemble properly
    """

    def __init__(self, *streams, **kwargs):
        """Create a |AbstractGFF_Assembler|

        Parameters
        ----------
        *streams : one or more str or file-like
            One or more input streams or filenames pointing to GFF information

        is_sorted : bool, optional
            GFF is sorted by chromosome name, allowing some memory savings
            (Default: `False`)

        return_type : |SegmentChain| or subclass, optional
            Type of feature to return from assembled subfeatures (Default:
            |SegmentChain|)

        add_three_for_stop : bool, optional
            Some annotation files exclude the stop codon from CDS annotations.
            If set to `True`, three nucleotides will be added to the threeprime
            end of each CDS annotation. (Default: `False`)

        printer : file-like, optional
            Logger implementing a ``write()`` method. (Default: |NullWriter|)

        reader_class : class
            |GFF3_Reader| or |GTF2_Reader|

        tabix : boolean, optional
            `streams` point to `tabix`_-compressed files or are open
            :class:`~pysam.ctabix.tabix_file_iterator` (Default: `False`)

        **kwargs
            Other keyword arguments used by specific parsers
        """

        tabix = kwargs.get("tabix", False)
        end_included = kwargs.get("end_included", True)
        return_stopfeatures = kwargs.get("return_stopfeatures", True)
        is_sorted = kwargs.get("is_sorted", False)
        reader_class = kwargs.get("reader_class")

        streams = multiopen(streams, open)

        iterables = []
        for stream in streams:
            iterables.append(
                reader_class(
                    stream,
                    end_included=end_included,
                    return_stopfeatures=return_stopfeatures,
                    is_sorted=is_sorted,
                    tabix=tabix
                )
            )
            iterables.append([StopFeature])

        self.stream = itertools.chain.from_iterable(iterables)

        self.printer = kwargs.get("printer", NullWriter())
        self.return_type = kwargs.get("return_type", SegmentChain)
        self.add_three_for_stop = kwargs.get("add_three_for_stop", False)

        self.metadata = {}
        self.rejected = []
        self.counter = 0

        self._transcript_cache = iter([])
        self._feature_cache = {}

    def _finalize(self, tx):
        return tx

    @abstractmethod
    def _collect(self, feature):
        """Collect relevant features of transcripts

        Parameters
        ----------
        feature : |SegmentChain|
            Feature to collect
        """
        pass

    @abstractmethod
    def _assemble_transcripts(self):
        """Assemble |Transcript| objects from collected features

        Returns
        -------
        list
            list of transcripts
        """
        pass

    @abstractmethod
    def _reset(self):
        """Release memory and reset internal hashes"""
        pass

    def _get_transcript_batches(self):
        """Lazily assemble batches of transcripts from components in
        `self.stream`, when signals in `self.stream` indicate it is safe to
        assemble transcripts from previously collected features. This feature is
        called by `self.__iter__`, which returns individual transcripts.

        Signals that can signify safety to assemble previous transcripts
        include:

         - The special line ``###``, which indicates that the preceding
           collection of lines in a GFF3 file are safe to assemble

         - The special line ``###FASTA`` which indicates end of the feature
           section of a GFF3 file

         - A change in reference files (if multiple input files were given)

        When an assembly signal is given, transcripts are assembled an internal
        caches of collected feature are reset to free memory.


        Yields
        ------
        list
            Sorted list of transcripts in current GFF block
        """
        for feature in self.stream:
            self.counter += 1

            # collect features until a stop signal, such as:
            #     - change of contig if GTF2/GFF3 is sorted
            #     - '###FASTA' block, indicating end of features
            #     - switch between source files in `self.stream`
            if feature is not StopFeature:
                self._collect(feature)

            # if stop signal is reached, clear memory, because those features
            # no longer needed
            else:
                self.printer.write("Assembling next batch of transcripts ...")
                transcripts, rejected = self._assemble_transcripts()

                # remove previously assembled transcripts
                # these lines required to free memory in Python 2.7
                # and early versions of Python 3.x
                gc.collect()
                del gc.garbage[:]

                # sort and prep next set of transcripts
                transcripts = sorted(transcripts)
                self.rejected.extend(rejected)
                self._reset()
                yield transcripts

        # assemble any remaining features into transcripts, e.g. if no
        # stop signals present within a single file
        transcripts, rejected = self._assemble_transcripts()
        gc.collect()
        del gc.garbage[:]

        transcripts = sorted(transcripts)
        self.rejected.extend(rejected)
        self._reset()
        yield transcripts

    def __iter__(self):
        """Return next assembled transcript from GFF

        Yields
        ------
        |Transcript|
            Next complex feature in annotation (usually a transcript)
        """
        for my_batch in self._get_transcript_batches():
            for my_tx in my_batch:
                yield self._finalize(my_tx)


class GTF2_TranscriptAssembler(AbstractGFF_Assembler):
    """
    GTF2_TranscriptAssembler(*streams, is_sorted=False, return_type=SegmentChain, add_three_for_stop=False, printer=None, tabix=False)

    Assemble |Transcripts| from raw features in `GTF2`_ format.

    Exons and CDS features are grouped by shared ``transcript_id``.
    Attributes that have common values for all exons and CDS within a transcript
    are propagated up to the `attr` dict of the assembled |Transcript|. Other
    attributes from individual CDS or exon components are discarded.

    The assembler functions as an iterator. Within each chromosome, transcripts
    are returned in lexical order.

    For access to raw features, instead use |GTF2_Reader|.


    Parameters
    ----------
    *streams : one or more str or file-like
        One or more input streams or filenames pointing to `GTF2`_ data

    is_sorted : bool, optional
        `GTF2`_ is sorted by chromosome name, allowing some memory savings
        (Default: `False`)

    return_type : |SegmentChain| or subclass, optional
        Type of feature to return from assembled subfeatures (Default:
        |SegmentChain|)

    add_three_for_stop : bool, optional
        Some annotation files exclude the stop codon from CDS annotations. If
        set to `True`, three nucleotides will be added to the threeprime end of
        each CDS annotation, UNLESS the annotated transcript contains explicit
        `stop_codon` feature. (Default: `False`)

    printer : file-like, optional
        Logger implementing a ``write()`` method. Default: |NullWriter|

    tabix : boolean, optional
        `streams` point to `tabix`_-compressed files or are open
        :class:`~pysam.ctabix.tabix_file_iterator` (Default: `False`)


    Examples
    --------
    Assemble transcripts from a `GTF2`_ file::

        >>> transcript_reader = GTF2_TranscriptAssembler(open("some_file.gtf"))
        >>> for transcript in reader:
        >>>     print(transcript.get_name(),transcript.attr["type"],str(transcript)) # do something

        ('YAL030W_mRNA',   'mRNA',  'chrI:87262-87387^87500-87857(+)')
        ('YBL092W_mRNA',   'mRNA',  'chrII:45643-45644^45977-46440(+)')
        ('YBL057C_mRNA',   'mRNA',  'chrII:112749-113427^113444-113450(-)')
        ('YBL040C_mRNA',   'mRNA',  'chrII:142033-142749^142846-142891(-)')
        ('YBL018C_mRNA',   'mRNA',  'chrII:185961-186352^186427-186504(-)')
        ('YBR012W-B',      'mRNA',  'chrII:259868-261173^261174-265140(+)')
        ('YBR044C_mRNA',   'mRNA',  'chrII:324292-324336^324340-326127(-)')
        ('YBR082C_mRNA',   'mRNA',  'chrII:406506-407027^407122-407379(-)')
        ('YBR126W-B_mRNA', 'mRNA',  'chrII:490824-491202(+)')
        ('YBR138C_mRNA',   'mRNA',  'chrII:513636-515391(-)')
        [rest of output omitted]


    Attributes
    ----------
    streams : file-like
        Input streams, usually constructed from one or more open filehandles

    metadata : dict
        Various attributes gleaned from the streams, if any

    counter : int
        Cumulative line number counter over all streams

    printer : file-like, optional
        Logger implementing a ``write()`` method.

    rejected : list
        A list of transcript IDs from transcripts that failed to assemble
        properly
    """
    # transcripts can be represented as collections of exons + cds
    # or cds + UTRs, et c. We consider all UTR and exons as exons
    # and CDS, and start & stop codons as CDS areas
    _feature_map = {
        "exon": ["exon_like"],
        "5UTR": ["exon_like"],
        "3UTR": ["exon_like"],
        "CDS" : ["CDS_like", "exon_like"],
        "start_codon": ["CDS_like", "exon_like"],
        "stop_codon" : ["CDS_like", "exon_like"],
    } # yapf: disable
    dtmp = {"exon_like": {}, "CDS_like": {}}

    def __init__(self, *streams, **kwargs):
        """
        GTF2_TranscriptAssembler(*streams, is_sorted=False, return_type=SegmentChain, add_three_for_stop=False, printer=None, tabix=False)

        Parameters
        ----------
        *streams : one or more str or file-like
            One or more input streams or filenames pointing to `GTF2`_ data

        is_sorted : bool, optional
            `GTF2`_ is sorted by chromosome name, allowing some memory savings
            (Default: `False`)

        return_type : |SegmentChain| or subclass, optional
            Type of feature to return from assembled subfeatures (Default: |SegmentChain|)

        add_three_for_stop : bool, optional
            Some annotation files exclude the stop codon from CDS annotations. If set to
            `True`, three nucleotides will be added to the threeprime end of each
            CDS annotation, UNLESS the annotated transcript contains explicit `stop_codon`
            feature. (Default: `False`)

        printer : file-like, optional
            Logger implementing a ``write()`` method. Default: |NullWriter|

        tabix : boolean, optional
            `streams` point to `tabix`_-compressed files or are open
            :class:`~pysam.ctabix.tabix_file_iterator` (Default: `False`)
        """
        AbstractGFF_Assembler.__init__(self, *streams, reader_class=GTF2_Reader, **kwargs)
        self._feature_cache = {"exon_like": {}, "CDS_like": {}}

    def _collect(self, feature):
        """Collect transcript component CDS and exons objects from
        `self.streams`, and populate `self._feature_cache`

        Parameters
        ----------
        feature : |SegmentChain|
            Feature to collect
        """
        feature_classes = self._feature_map.get(feature.attr["type"], None)
        if feature_classes is not None:
            tname = feature.attr.get("transcript_id")
            for feature_class in feature_classes:
                try:
                    self._feature_cache[feature_class][tname].append(feature)
                except KeyError:
                    self._feature_cache[feature_class][tname] = [feature]
                    sys.exc_traceback = None

    def _assemble_transcripts(self):
        """Assemble |Transcript| objects from `self._feature_cache`,
        mapping transcript IDs to corresponding CDS and exon features.

        Attributes common to all CDS and exons for a given transcript (e.g.
        `gene_id` and `transcript_id`) are propagated up to the |Transcript|.
        Other component attributes are discarded.
        """
        rejected_transcripts = []
        transcripts = []
        for tname in set(self._feature_cache["exon_like"].keys()) \
                | set(self._feature_cache["CDS_like"].keys()):
            exons = self._feature_cache["exon_like"].pop(tname, [])
            cds = self._feature_cache["CDS_like"].pop(tname, [])
            if len(exons) > 0:
                exons = sorted(exons)
                exon_segments = [X.spanning_segment for X in exons]
            elif len(cds) > 0:
                # if cds but no exons, create exons since they are implied
                exons = sorted(cds)
                exon_segments = [X.spanning_segment for X in exons]

            # propagate attributes that are the same in all exons/cds
            # to parent. This should include `gene_id` and `transcript_id`
            attr = get_identical_attributes(exons + cds)
            if len(cds) > 0:
                cds = sorted(cds)
                attr["cds_genome_end"] = cds[-1].spanning_segment.end
                attr["cds_genome_start"] = cds[0].spanning_segment.start

            try:
                my_tx = Transcript(*tuple(exon_segments), **attr)
                if self.add_three_for_stop == True:
                    # only move stop codons if no exon feature is of type "stop_codon"
                    if "stop_codon" not in set([X.attr["type"] for X in exons]):
                        my_tx = add_three_for_stop_codon(my_tx)

                transcripts.append(my_tx)
            except ValueError:
                warn(
                    "Rejecting transcript '%s' because it contains exons on "
                    "multiple chromosomes or strands." % tname, DataWarning
                )
                # transcripts with exons on two strands
                rejected_transcripts.append(tname)
            except KeyError:
                # transcripts where CDS ends outside bounds of transcript
                # there are 25 of these in flybase r5.43
                rejected_transcripts.append(tname)
                warn(
                    "Rejecting transcript '%s' because start or stop codons "
                    "are outside exon boundaries." % tname, DataWarning
                )
        transcripts.sort()
        sys.exc_traceback = None

        return transcripts, rejected_transcripts

    def _reset(self):
        """Release memory and reset internal hashes"""
        del self._feature_cache
        gc.collect()
        del gc.garbage[:]
        self._feature_cache = {"exon_like": {}, "CDS_like": {}}


class GFF3_TranscriptAssembler(AbstractGFF_Assembler):
    """
    GFF3_TranscriptAssembler(*streams, is_sorted=False, return_type=SegmentChain, add_three_for_stop=False, printer=None, tabix=False)

    Assemble |Transcripts| from raw features in `GFF3`_ format.

    Within a chromosome, transcripts are returned in lexical order. Features
    that do not constitute portions of transcripts (e.g.  origins of replication)
    are ignored. For access to those, read raw features using |GFF3_Reader|.


    Parameters
    ----------
    streams : one or more str or file-like
        One or more input streams or filenames pointing to `GFF3`_ data

    is_sorted : bool, optional
        `GFF3`_ is sorted by chromosome name, allowing some memory savings
        (Default: `False`)

    return_type : |SegmentChain| or subclass, optional
        Type of feature to return from assembled subfeatures (Default:
        |SegmentChain|)

    add_three_for_stop : bool, optional
        Some annotation files exclude the stop codon from CDS annotations. If
        set to `True`, three nucleotides will be added to the threeprime end of
        each CDS annotation. (Default: `False`)

    transcript_types : list, optional
        List of `GFF3`_ feature types that should be considered as transcripts
        (Default: as specified in SO 2.5.3 )

    exon_types : list, optional
        List of `GFF3`_ feature types that should be considered as exons or
        contributing to transcript nucleotide positions
        during transcript assembly (Default: as specified in SO 2.5.3 )

    cds_types : list, optional
        List of `GFF3`_ feature types that should be considered as CDS or
        contributing to transcript coding regions during transcript assembly
        (Default: as specified in SO 2.5.3 )

    printer : file-like, optional
        Logger implementing a ``write()`` method. Default: |NullWriter|

    tabix : boolean, optional
        `streams` point to `tabix`_-compressed files or are open
        :class:`~pysam.ctabix.tabix_file_iterator` (Default: `False`)


    Examples
    --------
    Assemble transcripts from a `GFF3`_ file::

        >>> transcript_reader = GFF3_TranscriptAssembler(open("some_file.gff"))
        >>> for transcript in reader:
        >>>     print(transcript.get_name(),transcript.attr["type"],str(transcript)) # do something

        ('YAL030W_mRNA',   'mRNA',  'chrI:87262-87387^87500-87857(+)')
        ('YBL092W_mRNA',   'mRNA',  'chrII:45643-45644^45977-46440(+)')
        ('YBL057C_mRNA',   'mRNA',  'chrII:112749-113427^113444-113450(-)')
        ('YBL040C_mRNA',   'mRNA',  'chrII:142033-142749^142846-142891(-)')
        ('YBL018C_mRNA',   'mRNA',  'chrII:185961-186352^186427-186504(-)')
        ('YBR012W-B',      'mRNA',  'chrII:259868-261173^261174-265140(+)')
        ('YBR044C_mRNA',   'mRNA',  'chrII:324292-324336^324340-326127(-)')
        ('YBR082C_mRNA',   'mRNA',  'chrII:406506-407027^407122-407379(-)')
        ('YBR126W-B_mRNA', 'mRNA',  'chrII:490824-491202(+)')
        ('YBR138C_mRNA',   'mRNA',  'chrII:513636-515391(-)')
        [rest of output omitted]


    Attributes
    ----------
    streams : file-like
        Input stream, usually constructed from or more open filehandles

    metadata : dict
        Various attributes gleaned from the stream, if any

    counter : int
        Cumulative line number counter over all streams

    printer : file-like, optional
        Logger implementing a ``write()`` method.

    rejected : list
        A list of transcript IDs from transcripts that failed to assemble
        properly


    Notes
    -----
   `GFF3`_ schemas vary
       `GFF3`_ files can have many different schemas of hierarchy. We deal with
       that here by allowing users to supply `transcript_types` and
       `exon_types`, to indicate which sorts of features should be included. By
       default, we use a subset of the schema set out in `Seqence Ontology 2.5.3
       <http://www.sequenceontology.org/resources/intro.html>`_

       Briefly:

        1. The GFF3 file is combed for transcripts of the types specified by
        `transcript_types`, exons specified by `exon_types`, and CDS specified
        by types listed in `cds_types`.

        2. Exons and CDS are matched with their parent transcripts by matching
           the `Parent` attributes of CDS and exons to the `ID` of transcripts.
           Transcripts are then constructed from those intervals, and coding
           regions set accordingly.

        3. If exons and/or CDS features point to a `Parent` that is not
           in `transcript_types`, they are grouped into a new transcript,
           whose ID is set to the value of their shared `Parent`. However,
           this value for `Parent` might refer to a gene rather than
           a transcript; unfortunately this cannot be known without other
           information. Attributes that are common to all CDS and exon
           features are bubbled up to the transcript.

        4. If exons and/or CDS features have no `Parent`, but share a common ID,
           they are grouped by ID into a single transcript. Attributes common
           to all CDS and exon features are bubbled up to the transcript.
           The `Parent` attribute is left unset.

        5. If a transcript feature is annotated but has no child CDS or exons,
           the transcript is assumed to be non-coding and is assembled from
           any transcript-type features that share its `ID` attribute.

   Identity relationships between elements vary between `GFF3`_ files
       Different `GFF3`_ files specify discontiguous features differently. For
       example, in `Flybase`_, different exons of a transcript will have unique
       IDs, but will share the same `'Parent'` attribute in column 9 of the GFF.
       In `Wormbase`_, however, different exons of the same transcript will
       share the same ID. Here, we first check for the Flybase style (by
       Parent), then fall back to Wormbase style (by shared ID).

   Transcript assembly
       To save memory, transcripts are assembled lazily as follows:

       #.  If there exist assembled transcripts in `self._transript_cache`,
           return the next transcript. Transcripts in the cache are stored
           lexically.

       #.  Otherwise, collect features from the `GFF3`_ stream until either a
           `'###'` line or EOF is encountered. Then, assemble transcripts and
           store them in `self._transcript_cache`. Delete unused features
           from memory. If the `GFF3`_ is sorted, then a change in chromosome
           name will also trigger assembly of collected features.
    """

    def __init__(self, *streams, **kwargs):
        """
        GFF3_TranscriptAssembler(*streams, is_sorted=False, return_type=SegmentChain, add_three_for_stop=False, printer=None, tabix=False)

        Parameters
        ----------
        *streams : one or more str or file-like
            One or more input streams or filenames pointing to `GFF3`_ data

        is_sorted : bool, optional
            `GFF3`_ is sorted by chromosome name, allowing some memory savings
            (Default: `False`)

        return_type : |SegmentChain| or subclass, optional
            Type of feature to return from assembled subfeatures (Default:
            |SegmentChain|)

        add_three_for_stop : bool, optional
            Some annotation files exclude the stop codon from CDS annotations.
            If set to `True`, three nucleotides will be added to the threeprime
            end of each CDS annotation. (Default: `False`)

        transcript_types : list, optional
            List of `GFF3`_ feature types that should be considered as
            transcripts (Default: as specified in SO 2.5.3 )

        exon_types : list, optional
            List of `GFF3`_ feature types that should be considered as exons or
            contributing to transcript nucleotide positions
            during transcript assembly (Default: as specified in SO 2.5.3 )

        cds_types : list, optional
            List of `GFF3`_ feature types that should be considered as CDS or
            contributing to transcript coding regions during transcript assembly
            (Default: as specified in SO 2.5.3 )

        printer : file-like, optional
            Logger implementing a ``write()`` method. Default: |NullWriter|

        tabix : boolean, optional
            `streams` point to `tabix`_-compressed files or are open
            :class:`~pysam.ctabix.tabix_file_iterator` (Default: `False`)


        Notes
        -----
        Sequence Ontology 2.5.3
            By default, this assembler constructs transcripts following a subset
            of the `GFF3`_ schema from the `SO Consortium
            <http://www.sequenceontology.org/resources/intro.html>`_.  For
            details on assembly see the :class:`class docstring
            <GFF3_TranscriptAssembler>`, above.
        """
        AbstractGFF_Assembler.__init__(self, *streams, reader_class=GFF3_Reader, **kwargs)
        self.transcript_types = set(kwargs.get("transcript_types", _DEFAULT_GFF3_TRANSCRIPT_TYPES))
        self.exon_types = set(kwargs.get("exon_types", _DEFAULT_GFF3_EXON_TYPES))
        self.cds_types  = set(kwargs.get("cds_types", _DEFAULT_GFF3_CDS_TYPES)) # yapf: disable
        self.transcript_components = self.exon_types | self.cds_types
        self._feature_cache = {}
        self._tx_features = {}
        self._reset()

    def _collect(self, feature):
        """Collect CDS and exon components of transcripts from `self.streams`,
        and populate `self._feature_cache`

        Parameters
        ----------
        feature : |SegmentChain|
            Feature to collect
        """
        feature_name = feature.get_name()

        if feature.attr["type"] in self.transcript_types:
            try:
                self._tx_features[feature_name].append(feature)
            except KeyError:
                self._tx_features[feature_name] = [feature]
                sys.exc_traceback = None

        elif feature.attr["type"] in self.transcript_components:
            # assume parent is transcript ID.
            # If no Parent, assume transcript is described as exon or CDS
            # with identical ID attributes

            tnames = feature.attr.get("Parent", [feature.attr.get("ID", [])])

            if len(tnames) == 0:
                warn(
                    "Found %s at %s with no `Parent` or `ID`. Ignoring." %
                    (feature.attr["type"], str(feature.spanning_segment)), DataWarning
                )
            for tname in tnames:
                try:
                    self._feature_cache[feature.attr["type"]][tname].append(feature)
                except KeyError:
                    self._feature_cache[feature.attr["type"]][tname] = [feature]
                    sys.exc_traceback = None

    def _assemble_transcripts(self):
        """Assemble |Transcript| s from components in `self._feature_cache`

        Returns
        -------
        list
            list of transcripts
        """
        rejected = []
        transcripts = []
        tx_features_counted = []

        # names of transcripts in transcript_types
        tnames = set([])

        # find parents of exons & cds that are not present
        # in types from transcript_types
        for type_ in self.exon_types | self.cds_types:
            tnames |= set(self._feature_cache[type_].keys())

        for tname in tnames:
            tx_features_counted.append(tname)

            exons = []
            for type_ in self.exon_types:
                exons.extend(self._feature_cache[type_].get(tname, []))

            cds = []
            for cds_type in self.cds_types:
                cds.extend(self._feature_cache[cds_type].get(tname, []))

            # if transcript is represented, not just implied, use its attributes
            if tname in self._tx_features:

                # use transcript name as gene if no Parent
                gene_id = self._tx_features[tname][0].attr.get("Parent", [tname])

                # gene IDs are now returned as lists from GFF3 parser
                gene_id = ",".join(sorted(gene_id))

                # get attr from transcript object
                attr = self._tx_features[tname][0].attr
                attr["ID"] = tname
                attr["transcript_id"] = tname
                attr["gene_id"] = gene_id

            # if transcript is just implied by presence of CDS and exons
            # TODO: make sure "Parent" will carry over sensibly from lists
            else:
                attr = get_identical_attributes(exons + cds)
                attr["ID"] = tname
                attr["transcript_id"] = tname
                attr["type"] = "mRNA"

            exon_segments = [X.spanning_segment for X in exons]
            cds_segments = [X.spanning_segment for X in cds]

            if len(exon_segments) + len(cds_segments) > 0:
                # transcript with child features
                if len(cds) > 0:
                    cds = sorted(cds)
                    attr["cds_genome_start"] = cds[0].spanning_segment.start
                    attr["cds_genome_end"] = cds[-1].spanning_segment.end

                try:
                    my_tx = Transcript(*tuple(exon_segments + cds_segments), **attr)
                    if self.add_three_for_stop == True:
                        my_tx = add_three_for_stop_codon(my_tx)

                    transcripts.append(my_tx)

                except ValueError:
                    warn(
                        "Rejecting transcript '%s' because it contains exons "
                        " on multiple strands." % tname, DataWarning
                    )
                    # transcripts with exons on two strands
                    rejected.append(tname)
                except KeyError:
                    # transcripts where CDS ends outside bounds of transcript
                    # ideally this would not occur but does in rare cases
                    # e.g. there are 25 of these in flybase r5.43
                    warn(
                        "Rejecting transcript '%s because start or stop codons "
                        "are outside exon boundaries." % tname, DataWarning
                    )
                    rejected.append(tname)
            else:
                # transcript that has multiple subfeatures with shared ID but no children
                attr = self._tx_features[tname][0].attr
                attr["ID"] = tname
                attr["transcript_id"] = tname
                segments = [X.spanning_segment for X in self._tx_features[tname]]
                my_tx = Transcript(*tuple(segments), **attr)
                transcripts.append(my_tx)

            sys.exc_traceback = None

        return transcripts, rejected

    def _reset(self):
        """Release memory and reset internal hashes"""
        del self._feature_cache
        del self._tx_features
        gc.collect()
        del gc.garbage[:]
        self._tx_features = {}
        self._feature_cache = {X: copy.deepcopy({}) for X in self.transcript_components}
