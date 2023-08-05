#!/usr/bin/env python
"""Test suite for :py:mod:`plastid.readers.bigbed`

Notes
-----
Several of these tests are tested against |GenomeHash|, and so will fail if 
|GenomeHash| is malfunctioning
"""

import unittest
import copy
import warnings
from random import shuffle
from pkg_resources import resource_filename, cleanup_resources
from nose.plugins.attrib import attr
from nose.tools import assert_almost_equal

from collections import OrderedDict
from plastid.genomics.roitools import SegmentChain, GenomicSegment, Transcript
from plastid.genomics.genome_hash import GenomeHash
from plastid.readers.bed import BED_Reader
from plastid.readers.bigbed import BigBedReader

warnings.simplefilter("ignore", DeprecationWarning)

#===============================================================================
# INDEX: helper functions
#===============================================================================


def tearDownModule():
    """Remove test dataset files after unit tests are complete"""
    cleanup_resources()


def transcript_identical(ivc1, ivc2):
    """Test for identity between positions of two Transcripts"""
    position_test = ivc1.get_position_set() == ivc2.get_position_set()
    strand_test = ivc1.spanning_segment.strand == ivc2.spanning_segment.strand
    chrom_test = ivc1.spanning_segment.chrom == ivc2.spanning_segment.chrom

    start_test = (ivc1.cds_start is None and ivc2.cds_start is None) or\
                 (ivc1.cds_start == ivc2.cds_start)
    end_test   = (ivc1.cds_end is None and ivc2.cds_end is None) or\
                 (ivc1.cds_end == ivc2.cds_end)

    return position_test & strand_test & chrom_test & start_test & end_test


#===============================================================================
# INDEX: test suites
#===============================================================================


@attr(test="unit")
class test_BigBedReader(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.cols = [3, 4, 5, 6, 8, 9, 12]
        cls.bedfiles = {}
        cls.bbfiles = {}
        for col in cls.cols:
            cls.bedfiles[col] = resource_filename(
                "plastid", "test/data/annotations/100transcripts_bed%s.bed" % col
            )
            cls.bbfiles[col] = resource_filename(
                "plastid", "test/data/annotations/100transcripts_bed%s.bb" % col
            )

        cls.chrom_sizes = {}
        with open(resource_filename("plastid", "test/data/annotations/sacCer3.sizes")) as fh:
            for line in fh:
                chrom, size = line.strip().split("\t")
                cls.chrom_sizes[chrom] = int(size)

        cls.bbs = {K: BigBedReader(cls.bbfiles[K], return_type=Transcript) for K in cls.cols}

        # comparisons against genome hash
        cls.binsize = 10000
        with open(cls.bedfiles[12]) as fh:
            transcripts = list(BED_Reader(fh, return_type=Transcript))

        cls.tx_dict = {}
        cls.cds_dict = {}
        cls.as_cds_dict = {}
        for tx in transcripts:
            txid = tx.get_name()
            cls.tx_dict[txid] = tx
            cds_ivc = tx.get_cds()
            cds_ivc.attr["ID"] = txid
            if cds_ivc.length > 0:
                cls.cds_dict[txid] = tx.get_cds()
                cls.as_cds_dict[txid] = tx.get_cds().get_antisense()
                cls.as_cds_dict[txid].attr["ID"] = txid

        cls.tx_hash = GenomeHash(cls.tx_dict, do_copy=False, binsize=cls.binsize)
        cls.cds_hash = GenomeHash(cls.cds_dict, do_copy=False, binsize=cls.binsize)
        cls.as_cds_hash = GenomeHash(cls.as_cds_dict, do_copy=False, binsize=cls.binsize)

        cls.shuffled_indices = list(range(len(transcripts)))
        shuffle(cls.shuffled_indices)

        cls.flybbfile = resource_filename(
            "plastid", "test/data/annotations/dmel-all-no-analysis-r5.54.bb"
        )
        cls.flybedfile = resource_filename(
            "plastid", "test/data/annotations/dmel-all-no-analysis-r5.54.bed"
        )

        # BigBed files with and without extra columns, with and without autoSql descriptions
        cls.bb_bonuscols = {
            "bb4as":
            resource_filename(
                "plastid", "test/data/annotations/100transcripts_bed4plus_bonus_as.bb"
            ),
            "bb12as":
            resource_filename(
                "plastid", "test/data/annotations/100transcripts_bed12plus_bonus_as.bb"
            ),
            "bb4no_as":
            resource_filename(
                "plastid", "test/data/annotations/100transcripts_bed4plus_bonus_no_as.bb"
            ),
            "bb12no_as":
            resource_filename(
                "plastid", "test/data/annotations/100transcripts_bed12plus_bonus_no_as.bb"
            ),
        }
        cls.bonus_col_file = resource_filename(
            "plastid", "test/data/annotations/bonus_bed_columns.txt"
        )

        # BigBed file with indexes
        cls.bb_indexed = resource_filename("plastid", "test/data/annotations/dmel-bonus-cols.bb")

    def test_count_records(self):
        for _, my_reader in self.bbs.items():
            # make sure we have all records
            self.assertEqual(my_reader.num_records, 100)

    def test_num_chroms(self):
        for _, my_reader in self.bbs.items():
            self.assertEqual(my_reader.num_chroms, 17)

    def test_chrom_sizes(self):
        for _, my_reader in self.bbs.items():
            for k, v in self.chrom_sizes.items():
                self.assertEqual(my_reader.chroms[k], v)

    def test_iter_same_as_bed_reader_various_columns(self):
        # implicitly tests iterate_over_chunk over all bed files, too
        # this tests BigBed equality with various ranges of columns
        # and various custom columns
        for col in self.cols:
            bigbed = self.bbs[col]
            with open(self.bedfiles[col]) as fh:
                bed = BED_Reader(fh, return_type=Transcript)

                for n, (tx1, tx2) in enumerate(zip(bed, bigbed)):
                    msg = "Transcript mismatch in BigBed file at record %s. Expected '%s'. Got '%s'." % (
                        n, tx1, tx2
                    )
                    self.assertTrue(transcript_identical(tx1, tx2), msg)

            self.assertEqual(n, 100 - 1)

    def test_iter_same_as_bed_reader_flydata(self):
        # test more complex transcript models
        # we cast them to lists, sadly, because Python's lexical chromosome sorting
        # differs from unix command-line sort; so even though the records are
        # in the same order in both files, they are returned with different sorts
        flybb = BigBedReader(self.flybbfile, return_type=Transcript)
        with open(self.flybedfile) as fh:
            flybed = BED_Reader(fh, return_type=Transcript)
            for n, (tx1, tx2) in enumerate(zip(flybed, flybb)):
                msg = "Transcript mismatch in BigBed file at record %s. Expected '%s'. Got '%s'." % (
                    n, tx1, tx2
                )
                self.assertTrue(transcript_identical(tx1, tx2), msg)

        self.assertEqual(n, 32682 - 1)

    def test_getitem_stranded(self):
        """Test fetching of overlapping features, minding strand
        
        1.  Make sure each feature can fetch its own subregion from its own neighborhood
        
        2.  Make sure each feature cannot fetch its own antisense subregion
        
        3.  Make sure each features fetches exactly the same features as a GenomeHash
        """
        # make sure we can fetch each transcript's own CDS
        bb = self.bbs[12]
        u = 0
        for txid, cds in list(self.cds_dict.items())[:100]:
            gh_ol_features = self.tx_hash.get_overlapping_features(cds, stranded=True)
            bb_ol_features = bb[cds]

            self.assertIn(
                txid, (X.get_name() for X in gh_ol_features),
                msg="%s failed to fetch its own CDS on correct strand" % txid
            )

            # make sure bb fetch matches GenomeHash fetch
            self.assertSetEqual(
                set([str(X) for X in gh_ol_features]), set([str(X) for X in bb_ol_features])
            )

            u += 1

        self.assertGreater(u, 0)

        # make sure we don't fetch each transcript's own antisense CDS
        # on opposite strand
        for txid, cds in list(self.as_cds_dict.items())[:100]:
            gh_ol_features = self.tx_hash.get_overlapping_features(cds, stranded=True)
            bb_ol_features = bb[cds]
            self.assertNotIn(
                txid, (X.get_name() for X in gh_ol_features),
                msg="%s fetched its own name on wrong strand!" % txid
            )
            self.assertSetEqual(
                set([str(X) for X in gh_ol_features]), set([str(X) for X in bb_ol_features])
            )

    def test_get_stranded(self):
        """Test fetching of overlapping features, minding strand
        
        1.  Make sure each feature can fetch its own subregion from its own neighborhood
        
        2.  Make sure each feature cannot fetch its own antisense subregion
        
        3.  Make sure each features fetches exactly the same features as a GenomeHash
        """
        # make sure we can fetch each transcript's own CDS
        bb = self.bbs[12]
        u = 0
        for txid, cds in list(self.cds_dict.items())[:100]:
            gh_ol_features = self.tx_hash.get_overlapping_features(cds, stranded=True)
            bb_ol_features = bb.get(cds, stranded=True)

            self.assertIn(
                txid, (X.get_name() for X in gh_ol_features),
                msg="%s failed to fetch its own CDS on correct strand" % txid
            )

            # make sure bb fetch matches GenomeHash fetch
            self.assertSetEqual(
                set([str(X) for X in gh_ol_features]), set([str(X) for X in bb_ol_features])
            )

            u += 1

        self.assertGreater(u, 0)

        # make sure we don't fetch each transcript's own antisense CDS
        # on opposite strand
        for txid, cds in list(self.as_cds_dict.items())[:100]:
            gh_ol_features = self.tx_hash.get_overlapping_features(cds, stranded=True)
            bb_ol_features = bb[cds]
            self.assertNotIn(
                txid, (X.get_name() for X in gh_ol_features),
                msg="%s fetched its own name on wrong strand!" % txid
            )
            self.assertSetEqual(
                set([str(X) for X in gh_ol_features]), set([str(X) for X in bb_ol_features])
            )

    def test_get_unstranded(self):
        """Test fetching of overlapping features, disregarding strand
        
        1.  Make sure each feature can fetch its own subregion from its own neighborhood
        
        2.  Make sure each feature can fetch its own antisense subregion
        
        3.  Make sure each features fetches exactly the same features as a GenomeHash
        """
        # make sure we can fetch each transcript's from its own CDS on same strand
        bb = self.bbs[12]
        u = 0
        for txid, cds in list(self.cds_dict.items())[:100]:
            gh_ol_features = self.tx_hash.get_overlapping_features(cds, stranded=False)
            bb_ol_features = bb.get(cds, stranded=False)
            self.assertIn(
                txid, (X.get_name() for X in gh_ol_features),
                msg="%s failed to fetch its own CDS on same strand" % txid
            )

            # make sure bb fetch matches GenomeHash fetch
            self.assertSetEqual(
                set([str(X) + X.get_name() for X in gh_ol_features]),
                set([str(X) + X.get_name() for X in bb_ol_features])
            )

            u += 1

        self.assertGreater(u, 0)

        # make sure we can fetch each transcript's from its own antisense CDS
        # on opposite strand
        for txid, cds in list(self.as_cds_dict.items())[:100]:
            gh_ol_features = self.tx_hash.get_overlapping_features(cds, stranded=False)
            bb_ol_features = bb.get(cds, stranded=False)
            self.assertIn(
                txid, (X.get_name() for X in gh_ol_features),
                msg="%s failed to fetched its own name on opposite strand!" % txid
            )
            s1 = set([str(X) + X.get_name() for X in gh_ol_features])
            s2 = set([str(X) + X.get_name() for X in bb_ol_features])
            self.assertSetEqual(
                s1,
                s2,
                msg="%s failure:\n    Only in first set: %s\n    Only in second set: %s" %
                (txid, s1 - s2, s2 - s1)
            )

    def test_return_type(self):
        bb = self.bbs[12]
        i = iter(bb)
        for _ in range(5):
            self.assertTrue(isinstance(next(i), Transcript))
        ivcbb = BigBedReader(self.bbfiles[12], return_type=SegmentChain)
        i = iter(ivcbb)
        for _ in range(5):
            self.assertTrue(isinstance(next(i), SegmentChain))

    def test_get_autosql_str(self):
        for k in (4, 12):
            bbplus_as = BigBedReader(self.bb_bonuscols["bb%sas" % k])
            with open(resource_filename(
                    "plastid", "test/data/annotations/bed%s_bonus_bed_columns.as" % k)) as fh:
                expected_as = fh.read()

            self.assertEqual(bbplus_as._get_autosql_str(), expected_as)

    def test_get_no_autosql_str(self):
        for k in (4, 12):
            bbplus_noas = BigBedReader(self.bb_bonuscols["bb%sno_as" % k])
            self.assertEqual(bbplus_noas._get_autosql_str(), "")

    def test_custom_columns_names_with_autosql(self):
        expected = OrderedDict(
            [
                ("my_floats", "some float values"),
                ("my_sets", "some set options"),
                ("my_ints", "signed integer values"),
                ("my_strs", "str representation of transcripts"),
                ("my_colors", "r,g,b colors"),
            ]
        )
        for k in (4, 12):
            fn = "bb%sas" % k
            bb = BigBedReader(self.bb_bonuscols[fn])
            self.assertEqual(bb.extension_fields, expected)

    def test_custom_columns_names_without_autosql(self):
        expected = OrderedDict(
            [
                ("custom_0", "no description"),
                ("custom_1", "no description"),
                ("custom_2", "no description"),
                ("custom_3", "no description"),
                ("custom_4", "no description"),
            ]
        )
        for k in (4, 12):
            fn = "bb%sno_as" % k
            bb = BigBedReader(self.bb_bonuscols[fn])
            self.assertEqual(bb.extension_fields, expected)

    def test_custom_columns_retval_type_with_autosql(self):
        values = {
            "my_floats": [],
            "my_sets": [],
            "my_ints": [],
            "my_strs": [],
            "my_colors": [],
        }

        with open(self.bonus_col_file) as bfile:
            for line in bfile:
                items = line.strip("\n").split("\t")
                values["my_floats"].append(float(items[0]))
                if items[1] == "":
                    values["my_sets"].append(set())
                else:
                    values["my_sets"].append(set([X.strip() for X in items[1].split(",")]))
                values["my_ints"].append(int(items[2]))
                values["my_strs"].append(items[3])
                values["my_colors"].append(tuple([int(X) for X in items[4].split(",")]))

        for k in (4, 12):
            fn = "bb%sas" % k
            # ignore a Warning caused by trying to turn the BED color field
            # to an int- this has to deal with the fact that BedToBigBed wants
            # field 9 (itemRgb, typically uint[3]) to be `reserved uint;` in
            # autoSql declarations
            with warnings.catch_warnings():
                #warnings.simplefilter("ignore")
                bb = BigBedReader(self.bb_bonuscols[fn])
                for n, item in enumerate(bb):
                    for key in values:
                        expected = values[key][n]
                        found = item.attr[key]
                        msg = "failed test_custom_columns_retval_type_with_autosql at record %s, key %s. Expected '%s'. Got '%s' " % (
                            n, key, expected, found
                        )
                        if isinstance(expected, float):
                            assert_almost_equal(expected, found, msg)
                        else:
                            self.assertEqual(expected, found, msg)

    def test_custom_columns_retval_type_without_autosql(self):
        values = {"custom_%s" % X: copy.deepcopy([]) for X in range(5)}
        with open(self.bonus_col_file) as bfile:
            for line in bfile:
                items = line.strip("\n").split("\t")
                values["custom_0"].append(items[0])
                values["custom_1"].append(items[1])
                values["custom_2"].append(items[2])
                values["custom_3"].append(items[3])
                values["custom_4"].append(items[4])

        for k in (4, 12):
            fn = "bb%sno_as" % k
            bb = BigBedReader(self.bb_bonuscols[fn])
            for n, item in enumerate(bb):
                for key in values:
                    self.assertEqual(values[key][n], item.attr[key])

    def test_indexed_fields(self):
        reader = BigBedReader(self.bb_indexed)
        self.assertEqual(
            sorted(["gene_id", "name", "Name", "Alias"]), sorted(reader.indexed_fields)
        )

    def test_indexed_fields_no_as_no_index(self):
        reader = BigBedReader(self.bb_bonuscols["bb12no_as"])
        self.assertEqual([], reader.indexed_fields)

    def test_indexed_fields_as_no_index(self):
        reader = BigBedReader(self.bb_bonuscols["bb4as"])
        self.assertEqual([], reader.indexed_fields)

    def test_search_fields_invalid_raises_error(self):
        reader = BigBedReader(self.bb_indexed)
        self.assertRaises(KeyError, reader.search, "garbage_field", "garbage_value")

    def test_search_fields_singlevalue(self):
        reader = BigBedReader(self.bb_indexed)
        found = list(reader.search("name", "should_have_no_match"))
        self.assertEqual([], found)

        found = list(reader.search("Name", "Sam-S-RE"))
        expected = [
            SegmentChain(
                GenomicSegment('2L', 106902, 107000, '+'),
                GenomicSegment('2L', 107764, 107838, '+'),
                GenomicSegment('2L', 108587, 108809, '+'),
                GenomicSegment('2L', 110405, 110483, '+'),
                GenomicSegment('2L', 110754, 110877, '+'),
                GenomicSegment('2L', 111906, 112019, '+'),
                GenomicSegment('2L', 112689, 113369, '+'),
                GenomicSegment('2L', 113433, 114432, '+'),
                Alias="'['M(2)21AB-RE', 'CG2674-RE']'",
                ID='FBtr0089437',
                Name='Sam-S-RE',
                color='#000000',
                gene_id='FBgn0005278',
                score='0.0',
                thickend='113542',
                thickstart='108685',
                type='exon'
            ),
        ]
        self.assertEqual(expected, found)

        found = list(reader.search("gene_id", "FBgn0005278"))
        expected = [
            SegmentChain(
                GenomicSegment('2L', 106902, 107000, '+'),
                GenomicSegment('2L', 107764, 107838, '+'),
                GenomicSegment('2L', 108587, 108809, '+'),
                GenomicSegment('2L', 110405, 110483, '+'),
                GenomicSegment('2L', 110754, 110877, '+'),
                GenomicSegment('2L', 111906, 112019, '+'),
                GenomicSegment('2L', 112689, 113369, '+'),
                GenomicSegment('2L', 113433, 114432, '+'),
                Alias="'['M(2)21AB-RE', 'CG2674-RE']'",
                ID='FBtr0089437',
                Name='Sam-S-RE',
                color='#000000',
                gene_id='FBgn0005278',
                score='0.0',
                thickend='113542',
                thickstart='108685',
                type='exon'
            ),
            SegmentChain(
                GenomicSegment('2L', 107760, 107838, '+'),
                GenomicSegment('2L', 108587, 108809, '+'),
                GenomicSegment('2L', 110405, 110483, '+'),
                GenomicSegment('2L', 110754, 111337, '+'),
                Alias='na',
                ID='FBtr0308091',
                Name='Sam-S-RK',
                color='#000000',
                gene_id='FBgn0005278',
                score='0.0',
                thickend='110900',
                thickstart='108685',
                type='exon'
            ),
            SegmentChain(
                GenomicSegment('2L', 107760, 107838, '+'),
                GenomicSegment('2L', 108587, 108809, '+'),
                GenomicSegment('2L', 110405, 110483, '+'),
                GenomicSegment('2L', 110754, 110877, '+'),
                GenomicSegment('2L', 111004, 111117, '+'),
                GenomicSegment('2L', 111906, 112019, '+'),
                GenomicSegment('2L', 112689, 113369, '+'),
                GenomicSegment('2L', 113433, 114210, '+'),
                Alias="'['M(2)21AB-RB', 'CG2674-RB']'",
                ID='FBtr0089428',
                Name='Sam-S-RB',
                color='#000000',
                gene_id='FBgn0005278',
                score='0.0',
                thickend='112741',
                thickstart='108685',
                type='exon'
            ),
            SegmentChain(
                GenomicSegment('2L', 107760, 107838, '+'),
                GenomicSegment('2L', 108587, 108809, '+'),
                GenomicSegment('2L', 110405, 110483, '+'),
                GenomicSegment('2L', 110754, 110877, '+'),
                GenomicSegment('2L', 111906, 112019, '+'),
                GenomicSegment('2L', 112689, 113369, '+'),
                GenomicSegment('2L', 113433, 114432, '+'),
                Alias="'['M(2)21AB-RA', 'CG2674-RA']'",
                ID='FBtr0089429',
                Name='Sam-S-RA',
                color='#000000',
                gene_id='FBgn0005278',
                score='0.0',
                thickend='113542',
                thickstart='108685',
                type='exon'
            ),
            SegmentChain(
                GenomicSegment('2L', 107760, 107956, '+'),
                GenomicSegment('2L', 108587, 108809, '+'),
                GenomicSegment('2L', 110405, 110483, '+'),
                GenomicSegment('2L', 110754, 110877, '+'),
                GenomicSegment('2L', 112689, 113369, '+'),
                GenomicSegment('2L', 113433, 114432, '+'),
                Alias='na',
                ID='FBtr0330656',
                Name='Sam-S-RL',
                color='#000000',
                gene_id='FBgn0005278',
                score='0.0',
                thickend='112781',
                thickstart='108685',
                type='exon'
            ),
            SegmentChain(
                GenomicSegment('2L', 107936, 108226, '+'),
                GenomicSegment('2L', 108587, 108809, '+'),
                GenomicSegment('2L', 110405, 110483, '+'),
                GenomicSegment('2L', 110754, 110877, '+'),
                GenomicSegment('2L', 111906, 112019, '+'),
                GenomicSegment('2L', 112689, 113369, '+'),
                GenomicSegment('2L', 113433, 114210, '+'),
                Alias="'['M(2)21AB-RH', 'CG2674-RH']'",
                ID='FBtr0089432',
                Name='Sam-S-RH',
                color='#000000',
                gene_id='FBgn0005278',
                score='0.0',
                thickend='113542',
                thickstart='108685',
                type='exon'
            ),
            SegmentChain(
                GenomicSegment('2L', 107936, 108101, '+'),
                GenomicSegment('2L', 108587, 108809, '+'),
                GenomicSegment('2L', 110405, 110483, '+'),
                GenomicSegment('2L', 110754, 110877, '+'),
                GenomicSegment('2L', 111906, 112019, '+'),
                GenomicSegment('2L', 112689, 113369, '+'),
                GenomicSegment('2L', 113433, 114432, '+'),
                Alias="'['M(2)21AB-RD', 'CG2674-RD']'",
                ID='FBtr0089430',
                Name='Sam-S-RD',
                color='#000000',
                gene_id='FBgn0005278',
                score='0.0',
                thickend='113542',
                thickstart='108685',
                type='exon'
            ),
            SegmentChain(
                GenomicSegment('2L', 107936, 108101, '+'),
                GenomicSegment('2L', 108587, 108809, '+'),
                GenomicSegment('2L', 110405, 110483, '+'),
                GenomicSegment('2L', 110754, 110877, '+'),
                GenomicSegment('2L', 111004, 111117, '+'),
                GenomicSegment('2L', 112689, 113369, '+'),
                GenomicSegment('2L', 113433, 114432, '+'),
                Alias="'['M(2)21AB-RC', 'CG2674-RC']'",
                ID='FBtr0089431',
                Name='Sam-S-RC',
                color='#000000',
                gene_id='FBgn0005278',
                score='0.0',
                thickend='113542',
                thickstart='108685',
                type='exon'
            ),
            SegmentChain(
                GenomicSegment('2L', 108088, 108226, '+'),
                GenomicSegment('2L', 108587, 108809, '+'),
                GenomicSegment('2L', 110405, 110483, '+'),
                GenomicSegment('2L', 110754, 110877, '+'),
                GenomicSegment('2L', 111906, 112019, '+'),
                GenomicSegment('2L', 112689, 113369, '+'),
                GenomicSegment('2L', 113433, 114432, '+'),
                Alias="'['M(2)21AB-RF', 'CG2674-RF']'",
                ID='FBtr0089433',
                Name='Sam-S-RF',
                color='#000000',
                gene_id='FBgn0005278',
                score='0.0',
                thickend='113542',
                thickstart='108685',
                type='exon'
            ),
            SegmentChain(
                GenomicSegment('2L', 108132, 108346, '+'),
                GenomicSegment('2L', 108587, 108809, '+'),
                GenomicSegment('2L', 110405, 110483, '+'),
                GenomicSegment('2L', 110754, 110877, '+'),
                GenomicSegment('2L', 111906, 112019, '+'),
                GenomicSegment('2L', 112689, 113369, '+'),
                GenomicSegment('2L', 113433, 114432, '+'),
                Alias="'['M(2)21AB-RI', 'CG2674-RI']'",
                ID='FBtr0089434',
                Name='Sam-S-RI',
                color='#000000',
                gene_id='FBgn0005278',
                score='0.0',
                thickend='113542',
                thickstart='108685',
                type='exon'
            ),
            SegmentChain(
                GenomicSegment('2L', 108132, 108226, '+'),
                GenomicSegment('2L', 108587, 108809, '+'),
                GenomicSegment('2L', 110405, 110483, '+'),
                GenomicSegment('2L', 110754, 110877, '+'),
                GenomicSegment('2L', 111004, 111117, '+'),
                GenomicSegment('2L', 112689, 113369, '+'),
                GenomicSegment('2L', 113433, 114432, '+'),
                Alias="'['M(2)21AB-RJ', 'CG2674-RJ']'",
                ID='FBtr0089435',
                Name='Sam-S-RJ',
                color='#000000',
                gene_id='FBgn0005278',
                score='0.0',
                thickend='113542',
                thickstart='108685',
                type='exon'
            ),
            SegmentChain(
                GenomicSegment('2L', 109593, 109793, '+'),
                GenomicSegment('2L', 110405, 110483, '+'),
                GenomicSegment('2L', 110754, 110877, '+'),
                GenomicSegment('2L', 111004, 111117, '+'),
                GenomicSegment('2L', 112689, 113369, '+'),
                GenomicSegment('2L', 113433, 114210, '+'),
                Alias="'['M(2)21AB-RG', 'CG2674-RG']'",
                ID='FBtr0089436',
                Name='Sam-S-RG',
                color='#000000',
                gene_id='FBgn0005278',
                score='0.0',
                thickend='113542',
                thickstart='109750',
                type='exon'
            ),
        ]
        self.assertEqual(sorted(expected), sorted(found))

    def test_search_fields_multivalue(self):
        reader = BigBedReader(self.bb_indexed)
        found = list(reader.search("name", "should_have_no_match", "should_also_have_no_match"))
        self.assertEqual([], found)
        found = list(reader.search("Name", "Sam-S-RE", "Sam-S-RK"))
        expected = [
            SegmentChain(
                GenomicSegment('2L', 106902, 107000, '+'),
                GenomicSegment('2L', 107764, 107838, '+'),
                GenomicSegment('2L', 108587, 108809, '+'),
                GenomicSegment('2L', 110405, 110483, '+'),
                GenomicSegment('2L', 110754, 110877, '+'),
                GenomicSegment('2L', 111906, 112019, '+'),
                GenomicSegment('2L', 112689, 113369, '+'),
                GenomicSegment('2L', 113433, 114432, '+'),
                Alias="'['M(2)21AB-RE', 'CG2674-RE']'",
                ID='FBtr0089437',
                Name='Sam-S-RE',
                color='#000000',
                gene_id='FBgn0005278',
                score='0.0',
                thickend='113542',
                thickstart='108685',
                type='exon'
            ),
            SegmentChain(
                GenomicSegment('2L', 107760, 107838, '+'),
                GenomicSegment('2L', 108587, 108809, '+'),
                GenomicSegment('2L', 110405, 110483, '+'),
                GenomicSegment('2L', 110754, 111337, '+'),
                Alias='na',
                ID='FBtr0308091',
                Name='Sam-S-RK',
                color='#000000',
                gene_id='FBgn0005278',
                score='0.0',
                thickend='110900',
                thickstart='108685',
                type='exon'
            ),
        ]
        self.assertEqual(expected, found)
