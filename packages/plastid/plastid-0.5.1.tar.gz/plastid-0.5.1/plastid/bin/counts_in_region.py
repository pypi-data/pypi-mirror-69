#!/usr/bin/env python
"""Count the number of :term:`read alignments<alignment>` covering 
regions of interest in the genome, and calculate read densities (in reads
per nucleotide and in :term:`RPKM`) over these regions.

Results are output as a table with the following columns:

    ========================  ==================================================
    **Name**                  **Definition**
    ------------------------  --------------------------------------------------
    `region_name`             Name or ID of region of interest
    
    `region`                  Genomic coordinates of region, formatted as
                              described in
                              :meth:`plastid.genomics.roitools.SegmentChain.from_str`
                              
    `counts`                  Number of reads mapping to region
    
    `counts_per_nucleotide`   Read density, measured in number of reads mapping
                              to region, divided by length of region
                              
    `rpkm`                    Read density, measured in :term:`RPKM`
    
    `length`                  Region length, in nucleotides
    ========================  ==================================================
    
If a :term:`mask annotation file` is supplied, masked portions of regions
will be excluded when tabulating counts, measuring region length, and calculating
`counts_per_nucleotide` and `rpkm`.


See also
--------
:mod:`~plastid.bin.cs` script
    Count the number of :term:`read alignments<alignment>` and calculate
    read densities (in :term:`RPKM`) specifically for genes and sub-regions
    (5\' UTR, CDS, 3\' UTR), excluding positions covered by multiple genes
"""
import argparse
import inspect
import sys
import itertools
import warnings
import numpy

from plastid.genomics.roitools import SegmentChain
from plastid.util.io.filters import NameDateWriter
from plastid.util.io.openers import argsopener, get_short_name
from plastid.util.scriptlib.argparsers import (
    AnnotationParser,
    AlignmentParser,
    MaskParser,
    BaseParser,
)
from plastid.util.scriptlib.help_formatters import format_module_docstring

warnings.simplefilter("once")
printer = NameDateWriter(get_short_name(inspect.stack()[-1][1]))

_DISABLED = ["normalize"]


def main(argv=sys.argv[1:]):
    """Command-line program
    
    Parameters
    ----------
    argv : list, optional
        A list of command-line arguments, which will be processed
        as if the script were called from the command line if
        :func:`main` is called directly.

        Default: `sys.argv[1:]`. The command-line arguments, if the script is
        invoked from the command line
    """
    ap = AnnotationParser()
    annotation_file_parser = ap.get_parser(conflict_handler="resolve")

    al = AlignmentParser(disabled=_DISABLED)
    alignment_file_parser = al.get_parser(conflict_handler="resolve")

    mp = MaskParser()
    mask_file_parser = mp.get_parser()

    bp = BaseParser()
    base_parser = bp.get_parser()

    parser = argparse.ArgumentParser(
        description     = format_module_docstring(__doc__),
        formatter_class = argparse.RawDescriptionHelpFormatter,
        parents = [
            base_parser,
            alignment_file_parser,
            annotation_file_parser,
            mask_file_parser,
        ],
    ) # yapf: disable
    parser.add_argument("outfile", type=str, help="Output filename")

    args = parser.parse_args(argv)
    bp.get_base_ops_from_args(args)

    ga = al.get_genome_array_from_args(args, printer=printer)
    transcripts = ap.get_transcripts_from_args(args, printer=printer, return_type=SegmentChain)
    crossmap = mp.get_genome_hash_from_args(args, printer=printer)

    ga_sum = ga.sum()
    normconst = 1000.0 * 1e6 / ga_sum

    with argsopener(args.outfile, args, "w") as fout:
        fout.write("## total_dataset_counts: %s\n" % ga_sum)
        fout.write("region_name\tregion\tcounts\tcounts_per_nucleotide\trpkm\tlength\n")
        for n, ivc in enumerate(transcripts):
            name = ivc.get_name()
            masks = crossmap.get_overlapping_features(ivc)
            ivc.add_masks(*itertools.chain.from_iterable((X for X in masks)))
            if n % 1000 == 0:
                printer.write("Processed %s regions..." % n)

            counts = numpy.nansum(ivc.get_masked_counts(ga))
            length = ivc.masked_length
            rpnt = numpy.nan if length == 0 else float(counts) / length
            rpkm = numpy.nan if length == 0 else rpnt * normconst
            ltmp = [name, str(ivc), "%.8e" % counts, "%.8e" % rpnt, "%.8e" % rpkm, "%d" % length]
            fout.write("%s\n" % "\t".join(ltmp))

        fout.close()

    printer.write("Processed %s regions total." % n)

    printer.write("Done.")


if __name__ == '__main__':
    main()
