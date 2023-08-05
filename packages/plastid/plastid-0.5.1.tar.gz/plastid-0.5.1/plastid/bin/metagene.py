#!/usr/bin/env python
"""Performs :term:`metagene` analyses. The workflow is separated into the
following subprograms:

Generate
    A :term:`metagene` profile is a position-wise average over all genes
    in the vicinity of an interesting landmark (e.g. a start codon). Because
    genes can have multiple transcript isoforms that may cover different
    genomic positions, which transcript positions (and therefore which
    genomic positions) to include in the average can be ambiguous when
    the isoforms are not knnow.
    
    To handle this problem, we define for each gene the :term:`maximal spanning window`
    over which every position at a given distance from the landmark of interest
    (e.g. a start or stop codon) maps to the same genomic coordinates in all
    transcript isoforms. The windows are defined by the following algorithm: 
    
     #. Transcripts are grouped by gene.
    
     #. Landmarks are detected on each transcript for each gene. For genes in
        which all transcripts do not share the same genomic coordinate for the
        landmark of interest, no window can be defined, and that gene is
        excluded from further analysis.
    
     #. For each set of transcripts that passes step (2), the maximal spanning
        window is created by aligning the set of transcripts at the landmark, and
        bidirectionally growing the maximal spanning window until either:
        
           - the next nucleotide position added no longer corresponds to 
             the same genomic position in all transcripts
            
           - the window reaches the maximum user-specified size

    **Note**: if annotations are supplied as `BED`_ files, transcripts cannot be
    grouped by gene, because `BED`_ files don't contain this information.
    In this case one ROI is generated per transcript.
    
    
    .. Rubric :: Output files
    
    OUTBASE_rois.txt
        A tab-delimited text file describing the maximal spanning window for
        each gene, with columns as follows:
        
        ================   ==================================================
        **Column**         **Contains**
        ----------------   --------------------------------------------------

        alignment_offset   Offset to align window to all other windows in the
                           file, if the window happens to be shorter on the 5'
                           end than specified in ``--flank_upstream``. Typically
                           this is `0`.

        region_id          ID of region (e.g. gene) from which window was made
        
        region             maximal spanning window, formatted as
                           `chromosome:start-end:(strand)`
        
        window_size        with of window
        
        zero_point         distance from 5' end of window to landmark
        ================   ==================================================
        
    
    OUTBASE_rois.bed
        Maximal spanning windows in `BED`_ format for visualization in
        a :term:`genome browser`. The thickly-rendered portion of a window
        indicates its landmark

    where `OUTBASE` is supplied by the user.
    
    
Count
    This program generates :term:`metagene` profiles from a dataset of
    :term:`counts` or :term:`alignments`, taking the following steps:
    
     1. The **raw counts** at each position in each :term:`maximal spanning window`
        (from the ``generate`` subprogram) fetched as a raw count vector for the
        window.

     2. A **normalized count vector** is created for each window by dividing
        its raw count vector by the total number of counts occurring within a
        user-defined normalization region within the window.
    
     3. A **metagene average** is created by taking aligning all of the
        normalized count vectors, and taking the median normalized counts
        over all vectors at each nucleotide position. Count vectors deriving
        from windows that don't meet a minimum count threshold (set via the
        ``--norm_region`` option) are excluded.
    
    
    .. Rubric :: Output files

    Raw count vectors, normalized count vectors, and metagene profiles are all
    saved as tab-delimited text files, for subsequent plotting, filtering,
    or reanalysis.
    
    OUTBASE_metagene_profile.txt
        Tab-delimited table of metagene profile, containing the following
        columns:

        ================   ==================================================
        **Column**         **Contains**
        ----------------   --------------------------------------------------
        x                  Distance in nucleotides from the landmark
        
        metagene_average   Value of metagene average at that position
        
        regions_counted    Number of maximal spanning windows included at
                           that position in the average. i.e. windows that
                           both met the threshold set by ``--min_counts`` and
                           were not masked at that position by a :term:`mask file`
        ================   ==================================================        
        
    OUTBASE_rawcounts.txt
        Saved if ``--keep`` is specified. Table of raw counts. Each row is a
        maximal spanning window for a gene, and each column a nucleotide position
        in that window. All windows are aligned at the landmark.
    
    OUTBASE_normcounts.txt
        Saved if ``--keep`` is specified. Table of normalized counts, produced
        by dividing each row in the raw count table by the of counts in that
        row within the columns specified by ``--normalize_over``.

    OUTBASE_mask.txt
        Saved if ``--keep`` is specified. Matrix of masks indicating which
        cells in ``normcounts`` were excluded from computations.

    OUTBASE_metagene_overview.[png | svg | pdf | et c...]
        Metagene average plotted above a heatmap of normalized counts,
        in which each row of pixels is a maximal spanning window for a gene,
        and rows are sorted by the column in which they reach their
        max value. To facilitate visualization, colors in the heatmap are scaled
        from 0 to the 95th percentile of non-zero numbers in the normalized counts
        
    `OUTBASE` is supplied by the user.

    
Chart
    One or more metagene profiles generated by the ``count`` subprogram,
    for example, on different datasets, are plotted against each other. 


See command-line help for each subprogram for details on parameters for each 
"""
__author__ = "joshua"

import gc
import sys
import warnings
import argparse
import inspect
import numpy
import pandas as pd
from plastid.genomics.roitools import SegmentChain, positions_to_segments
from plastid.util.io.filters import NameDateWriter
from plastid.util.io.openers import get_short_name, argsopener, NullWriter
from plastid.util.scriptlib.help_formatters import format_module_docstring
from plastid.util.services.exceptions import (
    ArgumentWarning,
    DataWarning,
    FileFormatWarning,
)
from plastid.util.scriptlib.argparsers import (
    AnnotationParser,
    AlignmentParser,
    PlottingParser,
    MaskParser,
    BaseParser,
)
from plastid.readers.bigbed import BigBedReader

warnings.simplefilter("once", DataWarning)

printer = NameDateWriter(get_short_name(inspect.stack()[-1][1]))

#===============================================================================
# helper functions to generate/handle maximum spanning windows / ROIs
#===============================================================================


def window_landmark(region, flank_upstream=50, flank_downstream=50, ref_delta=0, landmark=0):
    """Define a window surrounding a landmark in a region, if the region has such a landmark,
    (e.g. a start codon in a transcript), accounting for splicing of the region,
    if the region is discontinuous
    
    Parameters
    ----------
    transcript : |SegmentChain| or |Transcript|
        Region on which to generate a window surrounding a landmark
    
    landmark : int
        Position of the landmark within `region`

    flank_upstream : int
        Nucleotides upstream of `landmark` to include in window
    
    flank_downstream : int
        Nucleotides downstream of `landmark` to include in window
    
    ref_delta : int
        Offset from `landmark` to the reference point. If 0, the landmark
        is the reference point. Default: 0
    
    
    Returns
    -------
    |SegmentChain|
        Window of `region` surrounding landmark
    
    int
        alignment offset to the window start, if `region` itself wasn't long
        enough in the 5' direction to include the entire distance specified by
        `flank_upstream`. Use this to align windows generated around similar
        landmarks from different `regions` (e.g. windows surrounding start codons
        in various transcripts).

    (str, int, str)
        Genomic coordinate of reference point as *(chromosome name, coordinate, strand)*
    """
    if landmark + ref_delta >= flank_upstream:
        fiveprime_offset = 0
        my_start = landmark + ref_delta - flank_upstream
    else:
        fiveprime_offset = flank_upstream - landmark
        my_start = 0

    my_end = min(region.length, landmark + ref_delta + flank_downstream)
    roi = region.get_subchain(my_start, my_end)
    span = region.spanning_segment
    chrom = span.chrom
    strand = span.strand

    if landmark + ref_delta == region.length:
        if span.strand == "+":
            ref_point = (chrom, span.end, strand)
        else:
            ref_point = (chrom, span.start - 1, strand)
    else:
        ref_point = region.get_genomic_coordinate(landmark + ref_delta)

    return roi, fiveprime_offset, ref_point


def window_cds_start(transcript, flank_upstream, flank_downstream, ref_delta=0):
    """Returns a window surrounding a start codon.
    
    Parameters
    ----------
    transcript : |Transcript|
        Transcript on which to generate window
    
    flank_upstream : int
        Nucleotide length upstream of start codon to include in window,
        if `transcript` has a start codon
    
    flank_downstream : int
        Nucleotide length downstream of start codon to include in window,
        if `transcript` has a start codon
    
    ref_delta : int, optional
        Offset from  start codon to the reference point. If `0`, the landmark
        is the reference point. (Default: `0`)
    
    Returns
    -------
    |SegmentChain|
        Window surrounding start codon if `transcript` is coding. Otherwise,
        zero-length |SegmentChain| 
    
    int
        Alignment offset to the window start, if `transcript` itself wasn't long
        enough in the 5' direction to include the entire distance specified by
        `flank_upstream`. Use this to align this window to other windows generated
        around start codons in other transcripts. If transcript is not coding,
        returns :obj:`numpy.nan`

    (str, int, str)
        Genomic coordinate of reference point as *(chromosome name, coordinate, strand)*.
        If `transcript` has no start codon, returns :obj:`numpy.nan`
    """
    if transcript.cds_start is None:
        return SegmentChain(), numpy.nan, numpy.nan

    return window_landmark(
        transcript,
        flank_upstream,
        flank_downstream,
        ref_delta=ref_delta,
        landmark=transcript.cds_start
    )


def window_cds_stop(transcript, flank_upstream, flank_downstream, ref_delta=0):
    """Returns a window surrounding a stop codon.

    Parameters
    ----------
    transcript : |Transcript|
        Transcript on which to generate window
    
    flank_upstream : int
        Nucleotide length upstream of stop codon to include in window,
        if `transcript` has a stop codon
    
    flank_downstream : int
        Nucleotide length downstream of stop codon to include in window,
        if `transcript` has a stop codon
    
    ref_delta : int, optional
        Offset from  stop codon to the reference point. If `0`, the landmark
        is the reference point. (Default: `0`)
    
    Returns
    -------
    |SegmentChain|
        Window surrounding stop codon if transcript is coding. Otherwise,
        zero-length |SegmentChain| 
    
    int
        alignment offset to the window start, if `transcript` itself wasn't long
        enough in the 5' direction to include the entire distance specified by
        `flank_upstream`. Use this to align this window to other windows generated
        around stop codons in other transcripts. If transcript is not coding,
        returns :obj:`numpy.nan`

    (str, int, str)
        Genomic coordinate of reference point as *(chromosome name, coordinate, strand)*.
        If `transcript` has no stop codon, returns :obj:`numpy.nan`
    """
    if transcript.cds_start is None:
        return SegmentChain(), numpy.nan, numpy.nan

    return window_landmark(
        transcript,
        flank_upstream,
        flank_downstream,
        ref_delta=ref_delta,
        landmark=transcript.cds_end - 3
    )


def maximal_spanning_window(
        regions,
        mask_hash,
        flank_upstream,
        flank_downstream,
        window_func=window_cds_start,
        name=None,
        printer=NullWriter()
):
    """Create a maximal spanning window over `regions` surrounding a landmark,
    
    The maximal spanning window is created by:
    
     #. Applying `window_func` to each `region` in `regions` to create a sub-window
        of `region` that surrounds a landmark identified by `window_func`, 
        with up to `flank_upstream` bases 5' of the landmark, and `flank_downstream`
        bases 3` of the landmark.

     #. If the landmark in all regions corresponds to the same genomic position,
        a maximal spanning window is created by starting at the landmark,
        and growing the window in the 5' and 3' directions along all regions
        until either:
        
          - the next nucleotide position added no longer corresponds to 
            the same genomic position in all regions 
            
          - the window reaches the maximum size specified by`flank_upstream`
            (in 5' direction) or `flank_downstream` (in 3' direction)
        
    
    Parameters
    ----------
    regions : list
        List of |SegmentChains| or |Transcripts|
    
    mask_hash : |GenomeHash|
        |GenomeHash| containing regions to exclude from analysis
    
    flank_upstream : int
        Number of nucleotides upstream of landmark to include in maximal
        spanning window, if possible

    flank_downstream: int
        Number of nucleotides downstream of landmark to include in maximal
        spanning window, if possible
    
    window_func : func, optional
        Function that defines a landmark in an individual region, and builds
        a window around that landmark over that region.  As examples,
        :func:`window_cds_start` and :func:`window_cds_stop` are provided,
        though any function that meets the following criteria can be used:
        
         1. It must take the same parameters as :func:`window_cds_start`
            
         2. It must return the same types as :func:`window_cds_start`

        Such functions could choose arbitrary features as landmarks, such as
        peaks in ribosome density, nucleic acid sequence features, transcript
        start or end sites, or any property that can be deduced from a
        |Transcript|. (Default: :func:`window_cds_start`)
    
    name : str or None, optional
        Name for maximal spanning window, to which it's `ID` attribute will 
        be set. If `None`, a name will be generated. 
        
    printer : file-like, optional
        filehandle to write logging info to (Default: :func:`NullWriter`)
    
    
    Returns
    -------
    SegmentChain
        Maximal spanning window, if `regions` share the same landmark. Otherwise,
        0-length |SegmentChain|
    
    int or :obj:`numpy.nan`
        Alignment offset to the window start, if the maximal spanning window
        itself is not long enough in the 5' direction to include the entire
        distance specified by `flank_upstream`. Use this to align this window
        to other maximal spanning windows.
        
        If `regions` do not share the same landmark, :obj:`numpy.nan`
    """
    refpoints = []
    window_size = flank_upstream + flank_downstream

    # find common positions
    position_matrix = numpy.tile(numpy.nan, (len(regions), window_size))
    for n, region in enumerate(regions):
        try:
            my_roi, my_offset, genomic_refpoint = window_func(
                region, flank_upstream, flank_downstream
            )
            refpoints.append(genomic_refpoint)

            if genomic_refpoint is not numpy.nan and len(my_roi) > 0:
                pos_list = my_roi.get_position_list()  # ascending list of positions
                my_len = len(pos_list)
                assert my_offset + my_len <= window_size
                if my_roi.spanning_segment.strand == "+":
                    position_matrix[n, my_offset:my_offset + my_len] = pos_list
                else:
                    my_len = len(pos_list)
                    position_matrix[n, my_offset:my_offset + my_len] = pos_list[::-1]

        except IndexError:
            warnings.warn(
                "IndexError finding common positions at region '%s'. Ignoring region: " %
                region.get_name()
            )

    # continue only if refpoints all match
    if len(set(refpoints)) == 1 and numpy.nan not in refpoints:
        new_shared_positions = []
        if len(set(refpoints)) == 1:
            for i in range(0, position_matrix.shape[1]):
                col = position_matrix[:, i]
                if len(set(col)) == 1 and not numpy.isnan(col[0]):
                    new_shared_positions.append(int(col[0]))

        # continue only if there exist positions shared between all regions
        if len(set(new_shared_positions)) > 0:

            # define new ROI covering all positions common to all transcripts
            new_roi = SegmentChain(
                *positions_to_segments(regions[0].chrom, regions[0].strand, new_shared_positions)
            )
            if name is None:
                name = new_roi.get_name()

            new_roi.attr["ID"] = name

            if new_roi.spanning_segment.strand == "+":
                new_roi.attr["thickstart"] = genomic_refpoint[1]
                new_roi.attr["thickend"] = genomic_refpoint[1] + 1
            else:
                new_roi.attr["thickstart"] = genomic_refpoint[1]
                new_roi.attr["thickend"] = genomic_refpoint[1] + 1

            # having made sure that refpoint is same for all transcripts,
            # we use last ROI and last offset to find new offset
            # this fails if ref point is at the 3' end of the roi,
            # due to quirks of half-open coordinate systems
            # so we test it explicitly
            if flank_upstream - my_offset == my_roi.length:
                new_offset = my_offset
            else:
                zero_point_roi = new_roi.get_segmentchain_coordinate(*genomic_refpoint)
                new_offset = flank_upstream - zero_point_roi

            masks = mask_hash.get_overlapping_features(new_roi)
            mask_segs = []
            for mask in masks:
                mask_segs.extend(mask.segments)

            new_roi.add_masks(*mask_segs)

            return new_roi, new_offset

    return SegmentChain(), numpy.nan


#===============================================================================
# Subprograms
#===============================================================================


def group_regions_make_windows(
        source,
        mask_hash,
        flank_upstream,
        flank_downstream,
        window_func=window_cds_start,
        is_sorted=False,
        group_by="gene_id",
        printer=NullWriter()
):
    """Group regions of interest by a shared attribute, and generate
    maximal spanning windows for them. Results are given in a table
    suitable for use in ``count`` subprogram. Windows are generated by
    the following algorithm:

     1. Transcripts are grouped by `group_by` attribute (default: by gene).
        If all transcripts in a group share the same
        genomic coordinate for the landmark of interest (for example, if all 
        share the same start codon), then the set of transcripts is
        included in the analysis. If not, the set of transcripts and their
        associated gene are excluded from further processing.
    
     2. For each set of transcripts that pass step (1), the maximal spanning
        window is created by aligning the set of transcripts at the landmark, and
        adding nucleotide positions in transcript coordinates to the growing
        window in both 5' and 3' directions until either:
        
          - the next nucleotide position added is no longer corresponds to 
            the same genomic position in all transcripts
            
          - the window reaches the maximum user-specified size
    
    Parameters
    ----------
    source : list or generator
        Source of |SegmentChain| or |Transcript| objects, preferably with `gene_id` and
        `transcript_id` (e.g. transcripts assembled from a `GTF2`_ or `GFF3`_
        file), so that transcripts can be grouped by gene when making maximal
        spanning windows.
    
    mask_hash : |GenomeHash|
        |GenomeHash| containing regions to exclude from analysis
    
    flank_upstream : int
        Number of nucleotides upstream of landmark to include in windows
        (in transcript coordinates)

    flank_downstream: int
        Number of nucleotides downstream of landmark to include in windows
        (in transcript coordinates)
    
    window_func : func, optional
        Function that defines a landmark in an individual transcript, and builds
        a window around that landmark over that region.  As examples,
        :func:`window_cds_start` and :func:`window_cds_stop` are provided,
        though any function that meets the following criteria can be used:
        
          1. It must take the same parameters as :func:`window_cds_start`
            
          2. It must return the same types as :func:`window_cds_start`

        Such functions could choose arbitrary features as landmarks, such as
        peaks in ribosome density, nucleic acid sequence features, transcript
        start or end sites, or any property that can be deduced from a
        |Transcript|. (Default: :func:`window_cds_start`)
    
    group_by : str, optional
        Attribute by which |SegmentChains| or |Transcripts| should be grouped
        before generating maximal spanning windows (Default: `"gene_id"`)

    is_sorted : bool, optional
        Input file is sorted and/or `tabix`_-indexed. If `True`, 
        :func:`group_regions_make_windows` will take advantage of this to save memory.
        (Default: `False`)

    printer : file-like, optional
        filehandle to write logging info to (Default: :func:`NullWriter`)
    
    Returns
    -------
    :class:`pandas.DataFrame`
        A :class:`pandas.DataFrame` containing the following columns describing the
        maximal spanning windows:

            ====================   ==================================================
            *Column*               *Contains*
            --------------------   --------------------------------------------------
    
            alignment_offset       Offset to align window to all other windows in the
                                   file from the 5' end, if the window happens to be
                                   shorter on the 5' end than specified in
                                   `flank_upstream`
    
            region_id              ID of region, given by shared value of `group_by`
                                   parameter (i.e. by default is 'gene_id')
            
            region                 Maximal spanning window, formatted as
                                   `chromosome:start-end:(strand)`

            region_length          Length of maximal spanning window
            
            region_bed             Maximal spanning window, formatted as a `BED`_ line
            
            window_size            Requested length of maximal spanning window.
                                   May be larger than actual window if
                                   `alignment_offset` or `threeprime_offset` is 
                                   nonzero
            
            zero_point             Distance from 5' end of window to landmark,
                                   including `alignment_offset`
            
            threeprime_offset      Offset to align window to all other windows
                                   the file from the 3' end, if the window happens
                                   to be shorter on the 3' end than specified in
                                   `flank_downstream`
            ====================   ==================================================        
    
    list
        List of |SegmentChain| representing each window. These data are also
        represented as strings in the :class:`pandas.DataFrame`
    
    Notes
    -----         
    Not all genes will be included in the output if, for example, there isn't a
    position set common to all transcripts surrounding the landmark
    """
    import itertools
    window_size = flank_upstream + flank_downstream

    dtmp = {
        "region_id"        : [],
        "region"           : [],
        "region_length"    : [],
        "masked"           : [],
        "alignment_offset" : [],
        "window_size"      : [],
        "zero_point"       : [],
        "region_bed"       : [],
        "threeprime_offset": [],
    } # yapf: disable

    transcripts = []
    group_transcript = {}
    last_chrom = None
    do_loop = True
    source = iter(source)
    c = -1

    # to save memory, we process one chromosome at a time if input file is sorted
    # knowing that at that moment all transcript parts are assembled
    while do_loop == True:
        try:
            tx = next(source)
        except StopIteration:
            do_loop = False

        try:
            # end of chromosome or end of file
            if (is_sorted and tx.spanning_segment.chrom != last_chrom) or do_loop == False:
                last_chrom = tx.spanning_segment.chrom
                if do_loop == True:
                    source = itertools.chain([tx], source)

                for tx_chain in transcripts:
                    # if attr is missing, use transcript name, which should be unique
                    attr = tx_chain.attr
                    if group_by == "gene_id":
                        if "gene_id" in attr:
                            group_attr = attr["gene_id"]
                        else:
                            group_attr = tx_chain.get_gene()
                            warnings.warn(
                                "Region '%s' has no gene_id. Inferring gene_id to be '%s'" %
                                (tx_chain.get_name(), group_attr), DataWarning
                            )
                    else:
                        if group_by in attr:
                            group_attr = attr[group_by]
                        else:
                            warnings.warn(
                                "Region '%s' has no attribute '%s', and will not be grouped. Using region name as default group."
                                % (tx_chain.get_name(), group_by), DataWarning
                            )
                            group_attr = tx_chain.get_name()

                    try:
                        group_transcript[group_attr].append(tx_chain)
                    except KeyError:
                        group_transcript[group_attr] = [tx_chain]

                # for each gene, find maximal window in which all points
                # are represented in all transcripts. return window and offset
                for region_id, tx_list in group_transcript.items():
                    c += 1
                    if c % 1000 == 1:
                        printer.write(
                            "Processed %s genes, included %s ..." %
                            (c, len(list(dtmp.values())[0]))
                        )

                    name = region_id  # name regions after gene id
                    max_spanning_window, offset = maximal_spanning_window(
                        tx_list,
                        mask_hash,
                        flank_upstream,
                        flank_downstream,
                        window_func=window_func,
                        name=name,
                        printer=printer
                    )

                    if len(max_spanning_window) > 0:
                        mask_chain = max_spanning_window.get_masks_as_segmentchain()
                        dtmp["region_id"].append(region_id)
                        dtmp["window_size"].append(window_size)

                        # need to cast `region` to string to keep numpy from converting to array
                        dtmp["region"].append(str(max_spanning_window))
                        dtmp["masked"].append(str(mask_chain))
                        dtmp["alignment_offset"].append(offset)
                        dtmp["zero_point"].append(flank_upstream)
                        dtmp["region_bed"].append(max_spanning_window.as_bed())
                        dtmp["region_length"].append(max_spanning_window.length)
                        dtmp["threeprime_offset"
                             ].append(window_size - offset - max_spanning_window.length)

                # clean up
                del transcripts
                del group_transcript
                gc.collect()
                del gc.garbage[:]
                transcripts = []
                group_transcript = {}

            else:
                transcripts.append(tx)

        except UnboundLocalError:
            pass

    df = pd.DataFrame(dtmp)
    df.sort_values(["region_id"], inplace=True)
    printer.write("Processed %s genes total. Included %s." % (c + 1, len(df)))

    # Warn in case of annotation problems
    if (df["alignment_offset"] == flank_upstream).all():
        warnings.warn(
            "All maximal spanning windows lack flanks upstream of reference landmark. This occurs e.g. for start codons when annotation files don't contain UTR data. Please check your annotation file.",
            DataWarning
        )

    # N.b. This warning will only be invoked for zero-length landmarks
    # e.g. won't work for stop codons, which are 3nt wide
    if (df["threeprime_offset"] == flank_downstream).all():
        warnings.warn(
            "All maximal spanning windows lack flanks downstream of reference landmark. This occurs e.g. for stop codons when annotation files don't contain UTR data. Please check your annotation file.",
            DataWarning
        )

    return df


_NORM_START_DEFAULT = 20
_NORM_END_DEFAULT = 50


def _get_norm_region(roi_table, args):
    """Helper function to get normalization region from current and deprecated command-line arguments.
    This function will be removed in plastid v0.5, when the deprecated
    command-line arguments will also be removed.
    
    Parameters
    ----------
    roi_table : :class:`pandas.DataFrame`
        DataFrame of output from |metagene| generate subprogram
        
    args : :class:`argparse.NameSpace`
        Command-line arguments to |metagene| or |psite| count subprograms
        
        
    Returns
    -------
    (int, int)
        Start and end of normalization region, with respect to start of window,
        including `alignment_offset`.
    """
    # TODO: remove --norm_region in Plastid v0.5
    flank_upstream = roi_table["zero_point"][0]
    if args.normalize_over is not None:
        norm_start, norm_end = args.normalize_over
        norm_start += flank_upstream
        norm_end += flank_upstream
        if args.norm_region is not None:
            warnings.warn(
                "`--normalize_over` replaces `--norm_region`, which is deprecated. Ignoring `--norm_region` and using `--normalize_over`. See `metagene count --help` for differences.",
                ArgumentWarning
            )
    elif args.norm_region is not None:
        warnings.warn(
            "`--norm_region` is deprecated and will be removed in plastid v0.5. Use `--normalize_over` instead. See `metagene count --help` for differences.",
            ArgumentWarning
        )
        norm_start, norm_end = args.norm_region
    else:
        norm_start = _NORM_START_DEFAULT
        norm_end = _NORM_END_DEFAULT

    return norm_start, norm_end


def do_count(args, alignment_parser, plot_parser, printer=NullWriter()):
    """Calculate a metagene average over maximal spanning windows specified in `roi_table`, taking the following steps:

     1. The **raw counts** at each position in each :term:`maximal spanning window`
        (from the ``generate`` subprogram) are totaled to create a raw count vector
        for the ROI.

     2. A **normalized count vector** is created fore each window by dividing
        its raw count vector by the total number of counts occurring within a
        user-defined normalization window within the window.
    
     3. A **metagene average** is created by taking aligning all of the
        normalized count vectors, and taking the median normalized counts
        over all vectors at each nucleotide position. Count vectors deriving
        from ROIs that don't meet a minimum count threshold (set via the
        ``--norm_region`` option) are excluded.
            
    Parameters
    ----------
    args : :class:`argparse.Namespace`
        Namespace containing arguments

    printer : file-like, optional
        Anything implementing a ``write()`` method, for logging purposes.

    
        
    Returns
    -------
    :py:class:`numpy.ndarray`
        raw counts at each position (column) in each window (row)
    
    :py:class:`numpy.ndarray`
        counts at each position (column) in each window (row), normalized by
        the total number of counts in that row from `norm_start` to `norm_end`
    
    :class:`pandas.DataFrame`
        Metagene profile of median normalized counts at each position across
        all windows, and the number of windows included in the calculation of each
        median
    """
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    from plastid.plotting.plots import profile_heatmap

    plot_parser.set_style_from_args(args)

    # yapf: disable
    outbase = args.outbase
    count_fn     = "%s_rawcounts.txt.gz" % outbase
    normcount_fn = "%s_normcounts.txt.gz" % outbase
    mask_fn      = "%s_mask.txt.gz" % outbase
    profile_fn   = "%s_metagene_profile.txt" % outbase
    fig_fn       = "%s_metagene_overview.%s" % (outbase,args.figformat)
    # yapf: enable

    printer.write("Opening ROI file %s ..." % args.roi_file)
    with open(args.roi_file) as fh:
        roi_table = pd.read_table(fh, sep="\t", comment="#", index_col=None, header=0)
        fh.close()

    # wrapper to deal with multiple command-line arguments
    norm_start, norm_end = _get_norm_region(roi_table, args)

    #norm_start, norm_end = args.norm_region
    min_counts = args.min_counts

    # open count files
    ga = alignment_parser.get_genome_array_from_args(args, printer=printer)

    # following value are identical for all genes, so 0th val is fine
    window_size = roi_table["window_size"][0]
    upstream_flank = roi_table["zero_point"][0]
    cshape = (len(roi_table), window_size)

    # by default, mask everything
    counts = numpy.ma.MaskedArray(numpy.tile(numpy.nan, cshape), mask=numpy.tile(True, cshape))

    for i, row in roi_table.iterrows():
        if i % 1000 == 1:
            printer.write("Counted %s ROIs ..." % (i))

        roi = SegmentChain.from_str(row["region"])
        mask = SegmentChain.from_str(row["masked"])
        roi.add_masks(*mask)
        offset = int(round((row["alignment_offset"])))
        assert offset + roi.length <= window_size

        # take away from masked array
        mvec = roi.get_masked_counts(ga)
        counts.data[i, offset:offset + roi.length] = mvec.data
        counts.mask[i, offset:offset + roi.length] = mvec.mask
        #counts[i,offset:offset+roi.length] = roi.get_masked_counts(ga)

    printer.write("Counted %s ROIs total." % (i + 1))

    denominator = numpy.nansum(counts[:, norm_start:norm_end], axis=1)
    row_select = denominator >= min_counts

    norm_counts = (counts.T.astype(float) / denominator).T
    norm_counts = numpy.ma.MaskedArray(norm_counts, mask=counts.mask)
    norm_counts.mask[numpy.isnan(norm_counts)] = True
    norm_counts.mask[numpy.isinf(norm_counts)] = True

    if args.keep == True:
        printer.write("Saving counts to %s ..." % count_fn)
        numpy.savetxt(count_fn, counts, delimiter="\t", fmt='%.8f')
        printer.write("Saving normalized counts to %s ..." % normcount_fn)
        numpy.savetxt(normcount_fn, norm_counts, delimiter="\t")
        printer.write("Saving masks used in profile building to %s ..." % mask_fn)
        numpy.savetxt(mask_fn, norm_counts.mask, delimiter="\t")

    try:
        if args.use_mean == True:
            pfunc = numpy.ma.mean
        else:
            pfunc = numpy.ma.median

        profile = pfunc(norm_counts[row_select], axis=0)
    except IndexError:
        profile = numpy.zeros(norm_counts.shape[0])
    except ValueError:
        profile = numpy.zeros(norm_counts.shape[0])

    if profile.sum() == 0:
        printer.write(
            "Metagene profile is zero at all positions. %s ROIs made the minimum count cutoff." %
            row_select.sum()
        )
        printer.write("Consider lowering --min_counts (currently %s)." % min_counts)

    num_genes = ((~norm_counts.mask)[row_select]).sum(0)
    profile_table = pd.DataFrame(
        {
            "metagene_average": profile,
            "regions_counted": num_genes,
            "x": numpy.arange(-upstream_flank, window_size - upstream_flank),
        }
    )

    printer.write("Saving metagene profile to %s ..." % profile_fn)
    with argsopener(profile_fn, args, "w") as profile_out:
        profile_table.to_csv(
            profile_out,
            sep="\t",
            header=True,
            index=False,
            na_rep="nan",
            columns=["x", "metagene_average", "regions_counted"],
        )
        profile_out.close()

    # plot
    printer.write("Plotting to %s ..." % fig_fn)
    rs = norm_counts[row_select, :]
    p95 = numpy.nanpercentile(rs[rs > 0], 95)
    im_args = {
        "interpolation": "none",
        "vmin": 0,
        "vmax": p95,  # limit color space for better plotting
    }
    if args.cmap is not None:
        im_args["cmap"] = args.cmap

    plot_args = {}
    plot_args["color"] = plot_parser.get_colors_from_args(args, 1)[0]

    fig = plot_parser.get_figure_from_args(args)
    ax = plt.gca()
    fig, ax = profile_heatmap(
        norm_counts[row_select],
        profile=profile_table["metagene_average"],
        axes=ax,
        x=profile_table["x"],
        im_args=im_args,
        plot_args=plot_args
    )

    title = args.title if args.title is not None else "Metagene overview for %s" % outbase
    fig.suptitle(title)

    ax["main"].set_ylabel("Normalized ribosome density (au), by gene")
    landmark = args.landmark
    if args.landmark is not None:
        ax["main"].set_xlabel("Distance (nt) from %s" % landmark)

    printer.write("Saving image to %s ..." % fig_fn)
    fig.savefig(fig_fn, dpi=args.dpi, bbox_inches="tight")

    return counts, norm_counts, profile_table


def do_chart(args, plot_parser, printer=NullWriter()):
    """Plot metagene profiles against one another
    
    Parameters
    ----------
    args : :class:`argparse.Namespace`
        Namespace containing arguments

    printer : file-like, optional
        Anything implementing a ``write()`` method, for logging purposes.
    
    Returns
    -------
    :py:class:`matplotlib.Figure`
    """
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    if len(args.labels) == len(args.infiles):
        samples = {
            K: pd.read_table(V, sep="\t", comment="#", header=0, index_col=None)
            for K, V in zip(args.labels, args.infiles)
        }
    else:
        if len(args.labels) > 0:
            warnings.warn(
                "Expected %s labels supplied for %s infiles; found only %s. Ignoring labels" %
                (len(args.infiles), len(args.infiles), len(args.labels)), ArgumentWarning
            )
        samples = {
            get_short_name(V): pd.read_table(V, sep="\t", comment="#", header=0, index_col=None)
            for V in args.infiles
        }

    plot_parser.set_style_from_args(args)
    title = args.title
    colors = plot_parser.get_colors_from_args(args, len(args.infiles))

    fig = plot_parser.get_figure_from_args(args)
    ax = plt.gca()
    min_x = numpy.inf
    max_x = -numpy.inf
    for n, (k, v) in enumerate(samples.items()):
        plt.plot(v["x"], v["metagene_average"], label=k, color=colors[n])
        min_x = min(min_x, min(v["x"]))
        max_x = max(max_x, max(v["x"]))

    plt.xlim(min_x, max_x)
    ylim = ax.get_ylim()
    plt.ylim(0, ylim[1])

    plt.xlabel("Distance from %s (nt)" % args.landmark)
    plt.ylabel("Normalized read density (au)")

    if title is not None:
        plt.title(title)

    plt.legend(bbox_to_anchor=(1.02, 1.02), loc="upper left", borderaxespad=0)

    fn = "%s.%s" % (args.outbase, args.figformat)
    printer.write("Saving to %s ..." % fn)
    fig.savefig(fn, dpi=args.dpi, bbox_inches="tight")

    return fig


#===============================================================================
# PROGRAM BODY
#===============================================================================


def main(argv=sys.argv[1:]):
    """Command-line program
    
    Parameters
    ----------
    argv : list, optional
        A list of command-line arguments, which will be processed
        as if the script were called from the command line if
        :py:func:`main` is called directly.

        Default: `sys.argv[1:]`. The command-line arguments, if the script is
        invoked from the command line
    """
    al = AlignmentParser(disabled=["normalize"])
    an = AnnotationParser()
    pp = PlottingParser()
    mp = MaskParser()
    bp = BaseParser()

    alignment_file_parser = al.get_parser()
    annotation_file_parser = an.get_parser()
    mask_file_parser = mp.get_parser()
    plotting_parser = pp.get_parser()
    base_parser = bp.get_parser()

    generator_help = "Create ROI file from genome annotation"
    generator_desc = format_module_docstring(group_regions_make_windows.__doc__)

    count_help = "Count reads falling into regions of interest, normalize, and average into a metagene profile"
    count_desc = format_module_docstring(do_count.__doc__)

    chart_help = "Plot metagene profiles"
    chart_desc = format_module_docstring(do_chart.__doc__)

    parser = argparse.ArgumentParser(
        description=format_module_docstring(__doc__),
        formatter_class=argparse.RawDescriptionHelpFormatter
    )
    subparsers = parser.add_subparsers(
        title="subcommands", description="choose one of the following", dest="program"
    )
    gparser = subparsers.add_parser(
        "generate",
        help=generator_help,
        description=generator_desc,
        parents=[base_parser, annotation_file_parser, mask_file_parser],
        formatter_class=argparse.RawDescriptionHelpFormatter
    )
    cparser = subparsers.add_parser(
        "count",
        help=count_help,
        description=count_desc,
        parents=[base_parser, alignment_file_parser, plotting_parser],
        formatter_class=argparse.RawDescriptionHelpFormatter
    )
    pparser = subparsers.add_parser(
        "chart",
        help=chart_help,
        description=chart_desc,
        parents=[base_parser, plotting_parser],
        formatter_class=argparse.RawDescriptionHelpFormatter
    )

    # generate subprogram options
    gparser.add_argument(
        "--landmark",
        type=str,
        choices=("cds_start", "cds_stop"),
        default="cds_start",
        help="Landmark around which to build metagene profile (Default: cds_start)"
    )
    gparser.add_argument(
        "--upstream",
        type=int,
        default=50,
        help="Nucleotides to include upstream of landmark (Default: 50)"
    )
    gparser.add_argument(
        "--downstream",
        type=int,
        default=50,
        help="Nucleotides to include downstream of landmark (Default: 50)"
    )
    gparser.add_argument("--group_by",type=str,default="gene_id",
                         help="Attribute (e.g. in GTF2/GFF3 column 9) by which to group regions "+ \
                              "before generating maximal spanning windows "+ \
                              "(Default: group transcripts by gene using 'gene_id' attribute from GTF2, or 'Parent' attribute in GFF3)")
    gparser.add_argument("outbase", type=str, help="Basename for output files")

    # count subprogram options
    cparser.add_argument(
        "roi_file",
        type=str,
        help="Text file containing maximal spanning windows and offsets, " +
        "generated by the ``generate`` subprogram."
    )
    cparser.add_argument(
        "--min_counts",
        type=int,
        default=10,
        metavar="N",
        help="Minimum counts required in normalization region " +
        "to be included in metagene average (Default: 10)"
    )
    cparser.add_argument(
        "--normalize_over",
        type=int,
        nargs=2,
        metavar="N",
        default=None,
        #default=(20,50),
        help="Portion of each window against which its individual raw count profile" +
        " will be normalized. Specify two integers, in nucleotide" +
        " distance from landmark (negative for upstream, positive for downstream. Surround negative numbers with quotes.). (Default: 20 50)"
    )
    cparser.add_argument(
        "--norm_region",
        type=int,
        nargs=2,
        metavar="N",
        default=None,
        help="Deprecated. Use ``--normalize_over`` instead. " +
        "Formerly, Portion of each window against which its individual raw count profile" +
        " will be normalized. Specify two integers, in nucleotide" +
        " distance, from 5\' end of window. (Default: 70 100)"
    )
    cparser.add_argument(
        "--landmark", type=str, default=None, help="Name of landmark at zero point, optional."
    )
    cparser.add_argument(
        "--use_mean",
        default=False,
        action="store_true",
        help="If supplied, use columnwise mean to generate profile (Default: use median)"
    )
    cparser.add_argument(
        "--keep",
        default=False,
        action="store_true",
        help="Save intermediate count files. Useful for additional computations (Default: False)"
    )
    cparser.add_argument("outbase", type=str, help="Basename for output files")

    # chart subprogram arguments
    pparser.add_argument("outbase", type=str, help="Basename for output file.")
    pparser.add_argument(
        "infiles",
        type=str,
        nargs="+",
        help="One or more metagene profiles, generated by the" +
        " ``count`` subprogram, which will be plotted together."
    )
    pparser.add_argument(
        "--labels",
        type=str,
        nargs="+",
        default=[],
        help="Sample names for each metagene profile (optional)."
    )
    pparser.add_argument(
        "--landmark",
        type=str,
        default=None,
        help="Name of landmark at zero point (e.g. 'CDS start' or 'CDS stop'; optional)"
    )

    args = parser.parse_args(argv)
    bp.get_base_ops_from_args(args)

    # 'generate' subprogram
    if args.program == "generate":
        printer.write("Generating ROI file ...")
        if args.landmark == "cds_start":
            map_function = window_cds_start
        elif args.landmark == "cds_stop":
            map_function = window_cds_stop

        # check sorting
        is_sorted = (args.sorted == True) or \
                    (args.tabix == True) or \
                    (args.annotation_format == "BigBed")

        # open annotations
        printer.write("Opening annotation files: %s ..." % ", ".join(args.annotation_files))

        annotation_message = """`metagene` relies upon relationships between
        transcripts/genes to make maximal spanning windows that cover them. The
        `%s` attribute used to group these is not found in your %s file.
        Consider either (1) using a GTF2 or GFF3 file, (2) creating an extended
        BED file with this additional column, or (3) creating a BigBed file
        containing this extra column.""".replace("        ", "").replace(
            "\n", " "
        ) % (args.group_by, args.annotation_format)

        if args.annotation_format == "BED":
            if not isinstance(args.bed_extra_columns,
                              list) or args.group_by not in args.bed_extra_columns:
                warnings.warn(annotation_message, FileFormatWarning)
        elif args.annotation_format == "BigBed":
            reader = BigBedReader(args.annotation_files[0])
            if args.group_by not in reader.extension_fields:
                warnings.warn(annotation_message, FileFormatWarning)

        transcripts = an.get_transcripts_from_args(args, printer=printer)
        mask_hash = mp.get_genome_hash_from_args(args)

        # get ROIs
        printer.write("Generating regions of interest ...")
        roi_table = group_regions_make_windows(
            transcripts,
            mask_hash,
            args.upstream,
            args.downstream,
            window_func=map_function,
            printer=printer,
            is_sorted=is_sorted,
            group_by=args.group_by
        )

        roi_file = "%s_rois.txt" % args.outbase
        bed_file = "%s_rois.bed" % args.outbase
        printer.write("Saving to ROIs %s ..." % roi_file)
        with argsopener(roi_file, args, "w") as roi_fh:
            roi_table.to_csv(
                roi_fh,
                sep="\t",
                header=True,
                index=False,
                na_rep="nan",
                columns=[
                    "region_id", "window_size", "region", "masked", "alignment_offset", "zero_point"
                ]
            )
            roi_fh.close()

        printer.write("Saving BED output as %s ..." % bed_file)
        with argsopener(bed_file, args, "w") as bed_fh:
            for roi in roi_table["region_bed"]:
                bed_fh.write(roi)

            bed_fh.close()

    # 'count' subprogram
    elif args.program == "count":
        do_count(args, al, pp, printer)

    # 'plot' subprogram
    elif args.program == "chart":
        assert len(args.labels) in (0, len(args.infiles))
        do_chart(args, pp, printer)

    printer.write("Done.")


if __name__ == "__main__":
    main()
