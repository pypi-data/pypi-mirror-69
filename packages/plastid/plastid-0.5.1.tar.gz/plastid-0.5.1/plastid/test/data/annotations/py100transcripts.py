from plastid import *
control_transcripts = [
    Transcript(
        GenomicSegment('chrI', 87262, 87387, '+'),
        GenomicSegment('chrI', 87500, 87857, '+'),
        ID='YAL030W_mRNA',
        cds_genome_start=87285,
        cds_genome_end=87752
    ),
    Transcript(
        GenomicSegment('chrII', 45643, 45644, '+'),
        GenomicSegment('chrII', 45977, 46440, '+'),
        ID='YBL092W_mRNA',
        cds_genome_start=45977,
        cds_genome_end=46370
    ),
    Transcript(
        GenomicSegment('chrII', 112749, 113427, '-'),
        GenomicSegment('chrII', 113444, 113450, '-'),
        ID='YBL057C_mRNA',
        cds_genome_start=112800,
        cds_genome_end=113427
    ),
    Transcript(
        GenomicSegment('chrII', 142033, 142749, '-'),
        GenomicSegment('chrII', 142846, 142891, '-'),
        ID='YBL040C_mRNA',
        cds_genome_start=142111,
        cds_genome_end=142868
    ),
    Transcript(
        GenomicSegment('chrII', 185961, 186352, '-'),
        GenomicSegment('chrII', 186427, 186504, '-'),
        ID='YBL018C_mRNA',
        cds_genome_start=185997,
        cds_genome_end=186474
    ),
    Transcript(
        GenomicSegment('chrII', 259868, 261173, '+'),
        GenomicSegment('chrII', 261174, 265140, '+'),
        ID='YBR012W-B',
        cds_genome_start=259868,
        cds_genome_end=265140
    ),
    Transcript(
        GenomicSegment('chrII', 324292, 324336, '-'),
        GenomicSegment('chrII', 324340, 326127, '-'),
        ID='YBR044C_mRNA',
        cds_genome_start=324340,
        cds_genome_end=326059
    ),
    Transcript(
        GenomicSegment('chrII', 406506, 407027, '-'),
        GenomicSegment('chrII', 407122, 407379, '-'),
        ID='YBR082C_mRNA',
        cds_genome_start=406627,
        cds_genome_end=407169
    ),
    Transcript(
        GenomicSegment('chrII', 490824, 491202, '+'),
        ID='YBR126W-B_mRNA',
        cds_genome_start=490926,
        cds_genome_end=491070
    ),
    Transcript(
        GenomicSegment('chrII', 513636, 515391, '-'),
        ID='YBR138C_mRNA',
        cds_genome_start=513761,
        cds_genome_end=515336
    ),
    Transcript(
        GenomicSegment('chrII', 606180, 606280, '+'),
        GenomicSegment('chrII', 606668, 607167, '+'),
        ID='YBR191W_mRNA',
        cds_genome_start=606269,
        cds_genome_end=607140
    ),
    Transcript(
        GenomicSegment('chrII', 668535, 670323, '-'),
        ID='YBR223C_mRNA',
        cds_genome_start=668662,
        cds_genome_end=670297
    ),
    Transcript(
        GenomicSegment('chrII', 726546, 726917, '-'),
        GenomicSegment('chrII', 727011, 727110, '-'),
        ID='YBR255C-A_mRNA',
        cds_genome_start=726617,
        cds_genome_end=727074
    ),
    Transcript(
        GenomicSegment('chrIII', 177421, 177906, '-'),
        GenomicSegment('chrIII', 178213, 178242, '-'),
        ID='YCR031C_mRNA',
        cds_genome_start=177499,
        cds_genome_end=178220
    ),
    Transcript(
        GenomicSegment('chrIII', 247916, 248835, '-'),
        ID='YCR075C_mRNA',
        cds_genome_start=248032,
        cds_genome_end=248815
    ),
    Transcript(
        GenomicSegment('chrIV', 148162, 149197, '-'),
        ID='YDL172C_mRNA',
        cds_genome_start=148606,
        cds_genome_end=149086
    ),
    Transcript(
        GenomicSegment('chrIV', 164854, 167306, '-'),
        ID='YDL164C_mRNA',
        cds_genome_start=164986,
        cds_genome_end=167254
    ),
    Transcript(
        GenomicSegment('chrIV', 253912, 254974, '-'),
        GenomicSegment('chrIV', 255044, 255578, '-'),
        ID='YDL115C_mRNA',
        cds_genome_start=253994,
        cds_genome_end=255126
    ),
    Transcript(
        GenomicSegment('chrIV', 267648, 267725, '+'),
        GenomicSegment('chrIV', 267806, 268775, '+'),
        ID='YDL108W_mRNA',
        cds_genome_start=267697,
        cds_genome_end=268699
    ),
    Transcript(
        GenomicSegment('chrIV', 288378, 290192, '-'),
        ID='YDL094C_mRNA',
        cds_genome_start=289571,
        cds_genome_end=290081
    ),
    Transcript(
        GenomicSegment('chrIV', 322204, 322282, '+'),
        GenomicSegment('chrIV', 322703, 323058, '+'),
        ID='YDL075W_mRNA',
        cds_genome_start=322225,
        cds_genome_end=322988
    ),
    Transcript(
        GenomicSegment('chrIV', 399331, 399361, '+'),
        GenomicSegment('chrIV', 399484, 400767, '+'),
        ID='YDL029W_mRNA',
        cds_genome_start=399339,
        cds_genome_end=400638
    ),
    Transcript(
        GenomicSegment('chrIV', 424128, 426188, '+'),
        ID='YDL017W_mRNA',
        cds_genome_start=424208,
        cds_genome_end=425732
    ),
    Transcript(
        GenomicSegment('chrIV', 463390, 465202, '+'),
        ID='YDR009W_mRNA',
        cds_genome_start=463433,
        cds_genome_end=464996
    ),
    Transcript(
        GenomicSegment('chrIV', 645857, 649820, '-'),
        GenomicSegment('chrIV', 649821, 651126, '-'),
        ID='YDR098C-B',
        cds_genome_start=645857,
        cds_genome_end=651126
    ),
    Transcript(
        GenomicSegment('chrIV', 830407, 831544, '-'),
        ID='YDR184C_mRNA',
        cds_genome_start=830628,
        cds_genome_end=831513
    ),
    Transcript(
        GenomicSegment('chrIV', 917489, 921842, '+'),
        ID='YDR227W_mRNA',
        cds_genome_start=917570,
        cds_genome_end=921647
    ),
    Transcript(
        GenomicSegment('chrIV', 1032435, 1035191, '+'),
        ID='YDR285W_mRNA',
        cds_genome_start=1032435,
        cds_genome_end=1035063
    ),
    Transcript(
        GenomicSegment('chrIV', 1133067, 1135466, '-'),
        ID='YDR333C_mRNA',
        cds_genome_start=1133259,
        cds_genome_end=1135431
    ),
    Transcript(
        GenomicSegment('chrIV', 1238204, 1238630, '-'),
        GenomicSegment('chrIV', 1238824, 1238918, '-'),
        ID='YDR381C-A_mRNA',
        cds_genome_start=1238311,
        cds_genome_end=1238850
    ),
    Transcript(
        GenomicSegment('chrIX', 46790, 47834, '+'),
        ID='YIL156W-A_mRNA',
        cds_genome_start=47291,
        cds_genome_end=47693
    ),
    Transcript(
        GenomicSegment('chrIX', 155199, 155222, '+'),
        GenomicSegment('chrIX', 155310, 155799, '+'),
        ID='YIL111W_mRNA',
        cds_genome_start=155221,
        cds_genome_end=155765
    ),
    Transcript(
        GenomicSegment('chrIX', 335544, 335935, '-'),
        GenomicSegment('chrIX', 335936, 336249, '-'),
        ID='YIL009C-A_mRNA',
        cds_genome_start=335665,
        cds_genome_end=336212
    ),
    Transcript(
        GenomicSegment('chrmt', 36539, 36954, '+'),
        GenomicSegment('chrmt', 37722, 37736, '+'),
        GenomicSegment('chrmt', 39140, 40265, '+'),
        ID='Q0115_mRNA',
        cds_genome_start=36539,
        cds_genome_end=40265
    ),
    Transcript(
        GenomicSegment('chrmt', 36539, 36954, '+'),
        GenomicSegment('chrmt', 37722, 37736, '+'),
        GenomicSegment('chrmt', 39140, 39217, '+'),
        GenomicSegment('chrmt', 40840, 42251, '+'),
        ID='Q0120_mRNA',
        cds_genome_start=36539,
        cds_genome_end=42251
    ),
    Transcript(
        GenomicSegment('chrV', 131677, 131776, '+'),
        GenomicSegment('chrV', 131899, 132658, '+'),
        ID='YEL012W_mRNA',
        cds_genome_start=131771,
        cds_genome_end=132551
    ),
    Transcript(
        GenomicSegment('chrV', 184467, 187028, '+'),
        ID='YER015W_mRNA',
        cds_genome_start=184540,
        cds_genome_end=186775
    ),
    Transcript(
        GenomicSegment('chrV', 243588, 244170, '+'),
        ID='YER046W-A_mRNA',
        cds_genome_start=243699,
        cds_genome_end=244029
    ),
    Transcript(
        GenomicSegment('chrV', 269364, 269751, '-'),
        GenomicSegment('chrV', 270148, 270204, '-'),
        ID='YER056C-A_mRNA',
        cds_genome_start=269422,
        cds_genome_end=270185
    ),
    Transcript(
        GenomicSegment('chrV', 307623, 307746, '+'),
        GenomicSegment('chrV', 307848, 307956, '+'),
        GenomicSegment('chrV', 308067, 308183, '+'),
        ID='YER074W-A_mRNA',
        cds_genome_start=307652,
        cds_genome_end=308123
    ),
    Transcript(
        GenomicSegment('chrVI', 62861, 63859, '-'),
        GenomicSegment('chrVI', 63973, 64038, '-'),
        ID='YFL034C-B_mRNA',
        cds_genome_start=63015,
        cds_genome_end=63993
    ),
    Transcript(
        GenomicSegment('chrVI', 220373, 221267, '-'),
        GenomicSegment('chrVI', 221414, 221444, '-'),
        ID='YFR031C-A_mRNA',
        cds_genome_start=220506,
        cds_genome_end=221418
    ),
    Transcript(
        GenomicSegment('chrVII', 14642, 14909, '+'),
        GenomicSegment('chrVII', 15158, 16482, '+'),
        ID='YGL256W_mRNA',
        cds_genome_start=15158,
        cds_genome_end=16307
    ),
    Transcript(
        GenomicSegment('chrVII', 171319, 173231, '-'),
        ID='YGL176C_mRNA',
        cds_genome_start=171414,
        cds_genome_end=173079
    ),
    Transcript(
        GenomicSegment('chrVII', 173143, 174455, '-'),
        ID='YGL175C_mRNA',
        cds_genome_start=173284,
        cds_genome_end=174322
    ),
    Transcript(
        GenomicSegment('chrVII', 364246, 364964, '-'),
        GenomicSegment('chrVII', 365432, 365526, '-'),
        GenomicSegment('chrVII', 365985, 366020, '-'),
        ID='YGL076C_mRNA',
        cds_genome_start=364334,
        cds_genome_end=365996
    ),
    Transcript(
        GenomicSegment('chrVII', 418667, 419424, '+'),
        ID='YGL041W-A_mRNA',
        cds_genome_start=418824,
        cds_genome_end=419289
    ),
    Transcript(
        GenomicSegment('chrVII', 450090, 452135, '-'),
        ID='YGL023C_mRNA',
        cds_genome_start=450196,
        cds_genome_end=452104
    ),
    Transcript(
        GenomicSegment('chrVII', 485333, 485674, '+'),
        ID='YGL006W-A_mRNA',
        cds_genome_start=485422,
        cds_genome_end=485533
    ),
    Transcript(
        GenomicSegment('chrVII', 497088, 497365, '-'),
        GenomicSegment('chrVII', 497458, 497937, '-'),
        GenomicSegment('chrVII', 497999, 498043, '-'),
        ID='YGR001C_mRNA',
        cds_genome_start=497132,
        cds_genome_end=498034
    ),
    Transcript(
        GenomicSegment('chrVII', 543314, 543638, '+'),
        GenomicSegment('chrVII', 543721, 544301, '+'),
        ID='YGR029W_mRNA',
        cds_genome_start=543552,
        cds_genome_end=544205
    ),
    Transcript(
        GenomicSegment('chrVII', 607451, 609409, '+'),
        ID='YGR059W_mRNA',
        cds_genome_start=607562,
        cds_genome_end=609101
    ),
    Transcript(
        GenomicSegment('chrVII', 702364, 703423, '+'),
        ID='YGR107W_mRNA',
        cds_genome_start=702666,
        cds_genome_end=703116
    ),
    Transcript(
        GenomicSegment('chrVII', 707609, 708459, '+'),
        GenomicSegment('chrVII', 708460, 712254, '+'),
        ID='YGR109W-B',
        cds_genome_start=707609,
        cds_genome_end=712254
    ),
    Transcript(
        GenomicSegment('chrVII', 787176, 787786, '-'),
        GenomicSegment('chrVII', 788178, 788199, '-'),
        ID='YGR148C_mRNA',
        cds_genome_start=787311,
        cds_genome_end=787779
    ),
    Transcript(
        GenomicSegment('chrVII', 897472, 899931, '+'),
        ID='YGR199W_mRNA',
        cds_genome_start=897501,
        cds_genome_end=899781
    ),
    Transcript(
        GenomicSegment('chrVIII', 129325, 129528, '+'),
        GenomicSegment('chrVIII', 129647, 130776, '+'),
        ID='YHR012W_mRNA',
        cds_genome_start=129480,
        cds_genome_end=130448
    ),
    Transcript(
        GenomicSegment('chrVIII', 151075, 151360, '-'),
        ID='YHR022C-A_mRNA',
        cds_genome_start=151216,
        cds_genome_end=151306
    ),
    Transcript(
        GenomicSegment('chrVIII', 187118, 187514, '-'),
        GenomicSegment('chrVIII', 187676, 187695, '-'),
        ID='YHR039C-A_mRNA',
        cds_genome_start=187172,
        cds_genome_end=187679
    ),
    Transcript(
        GenomicSegment('chrVIII', 314166, 315771, '-'),
        GenomicSegment('chrVIII', 315858, 316032, '-'),
        ID='YHR101C_mRNA',
        cds_genome_start=314873,
        cds_genome_end=315968
    ),
    Transcript(
        GenomicSegment('chrVIII', 517508, 518869, '+'),
        ID='YHR208W_mRNA',
        cds_genome_start=517531,
        cds_genome_end=518713
    ),
    Transcript(
        GenomicSegment('chrX', 85293, 85863, '-'),
        ID='YJL182C_mRNA',
        cds_genome_start=85434,
        cds_genome_end=85752
    ),
    Transcript(
        GenomicSegment('chrX', 227296, 227945, '+'),
        ID='YJL104W_mRNA',
        cds_genome_start=227326,
        cds_genome_end=227776
    ),
    Transcript(
        GenomicSegment('chrX', 365725, 365784, '+'),
        GenomicSegment('chrX', 365902, 368503, '+'),
        ID='YJL041W_mRNA',
        cds_genome_start=365783,
        cds_genome_end=368373
    ),
    Transcript(
        GenomicSegment('chrX', 478343, 479644, '+'),
        GenomicSegment('chrX', 479645, 483612, '+'),
        ID='YJR029W',
        cds_genome_start=478343,
        cds_genome_end=483612
    ),
    Transcript(
        GenomicSegment('chrX', 604424, 605716, '-'),
        ID='YJR094C_mRNA',
        cds_genome_start=604568,
        cds_genome_end=605651
    ),
    Transcript(
        GenomicSegment('chrX', 608265, 608306, '+'),
        GenomicSegment('chrX', 608581, 608990, '+'),
        ID='YJR094W-A_mRNA',
        cds_genome_start=608304,
        cds_genome_end=608858
    ),
    Transcript(
        GenomicSegment('chrX', 647495, 649213, '+'),
        ID='YJR121W_mRNA',
        cds_genome_start=647606,
        cds_genome_end=649142
    ),
    Transcript(
        GenomicSegment('chrX', 703395, 704379, '+'),
        ID='YJR146W_mRNA',
        cds_genome_start=703884,
        cds_genome_end=704238
    ),
    Transcript(
        GenomicSegment('chrX', 732328, 734284, '+'),
        ID='YJR158W_mRNA',
        cds_genome_start=732439,
        cds_genome_end=734143
    ),
    Transcript(
        GenomicSegment('chrXI', 92656, 93311, '-'),
        GenomicSegment('chrXI', 93465, 93655, '-'),
        ID='YKL186C_mRNA',
        cds_genome_start=92743,
        cds_genome_end=93298
    ),
    Transcript(
        GenomicSegment('chrXI', 277003, 277952, '-'),
        ID='YKL087C_mRNA',
        cds_genome_start=277188,
        cds_genome_end=277863
    ),
    Transcript(
        GenomicSegment('chrXI', 292690, 293332, '-'),
        ID='YKL076C_mRNA',
        cds_genome_start=292837,
        cds_genome_end=293221
    ),
    Transcript(
        GenomicSegment('chrXI', 411587, 417104, '-'),
        ID='YKL014C_mRNA',
        cds_genome_start=411618,
        cds_genome_end=416913
    ),
    Transcript(
        GenomicSegment('chrXII', 280965, 281678, '-'),
        ID='YLR073C_mRNA',
        cds_genome_start=281018,
        cds_genome_end=281621
    ),
    Transcript(
        GenomicSegment('chrXII', 462084, 463661, '-'),
        ID='YLR154C-G_mRNA',
        cds_genome_start=462521,
        cds_genome_end=462671
    ),
    Transcript(
        GenomicSegment('chrXII', 485233, 485830, '+'),
        ID='YLR159W_mRNA',
        cds_genome_start=485344,
        cds_genome_end=485689
    ),
    Transcript(
        GenomicSegment('chrXII', 522643, 522669, '+'),
        GenomicSegment('chrXII', 523028, 523387, '+'),
        ID='YLR185W_mRNA',
        cds_genome_start=522662,
        cds_genome_end=523288
    ),
    Transcript(
        GenomicSegment('chrXIII', 335135, 337393, '+'),
        ID='YMR032W_mRNA',
        cds_genome_start=335297,
        cds_genome_end=337307
    ),
    Transcript(
        GenomicSegment('chrXIII', 373056, 377019, '-'),
        GenomicSegment('chrXIII', 377020, 378325, '-'),
        ID='YMR050C',
        cds_genome_start=373056,
        cds_genome_end=378325
    ),
    Transcript(
        GenomicSegment('chrXIII', 651120, 651160, '+'),
        GenomicSegment('chrXIII', 651623, 652009, '+'),
        ID='YMR194W_mRNA',
        cds_genome_start=651144,
        cds_genome_end=651910
    ),
    Transcript(
        GenomicSegment('chrXIII', 677169, 683665, '-'),
        ID='YMR207C_mRNA',
        cds_genome_start=677192,
        cds_genome_end=683564
    ),
    Transcript(
        GenomicSegment('chrXIII', 886041, 886683, '-'),
        ID='YMR306C-A_mRNA',
        cds_genome_start=886182,
        cds_genome_end=886572
    ),
    Transcript(
        GenomicSegment('chrXIV', 63435, 64018, '-'),
        GenomicSegment('chrXIV', 64450, 64596, '-'),
        ID='YNL301C_mRNA',
        cds_genome_start=63569,
        cds_genome_end=64562
    ),
    Transcript(
        GenomicSegment('chrXIV', 346294, 348410, '+'),
        ID='YNL152W_mRNA',
        cds_genome_start=346312,
        cds_genome_end=347542
    ),
    Transcript(
        GenomicSegment('chrXIV', 365971, 366035, '+'),
        GenomicSegment('chrXIV', 366157, 366499, '+'),
        ID='YNL138W-A_mRNA',
        cds_genome_start=366032,
        cds_genome_end=366412
    ),
    Transcript(
        GenomicSegment('chrXIV', 379485, 380689, '-'),
        GenomicSegment('chrXIV', 380781, 380867, '-'),
        ID='YNL130C_mRNA',
        cds_genome_start=379557,
        cds_genome_end=380831
    ),
    Transcript(
        GenomicSegment('chrXIV', 462223, 466126, '+'),
        ID='YNL087W_mRNA',
        cds_genome_start=462410,
        cds_genome_end=465947
    ),
    Transcript(
        GenomicSegment('chrXV', 25161, 27117, '+'),
        ID='YOL156W_mRNA',
        cds_genome_start=25272,
        cds_genome_end=26976
    ),
    Transcript(
        GenomicSegment('chrXV', 93323, 93843, '-'),
        GenomicSegment('chrXV', 94290, 94421, '-'),
        ID='YOL120C_mRNA',
        cds_genome_start=93394,
        cds_genome_end=94402
    ),
    Transcript(
        GenomicSegment('chrXV', 200175, 202624, '-'),
        ID='YOL068C_mRNA',
        cds_genome_start=200367,
        cds_genome_end=201879
    ),
    Transcript(
        GenomicSegment('chrXV', 551755, 552214, '-'),
        ID='YOR121C_mRNA',
        cds_genome_start=551797,
        cds_genome_end=552103
    ),
    Transcript(
        GenomicSegment('chrXV', 915985, 918324, '+'),
        ID='YOR321W_mRNA',
        cds_genome_start=916029,
        cds_genome_end=918291
    ),
    Transcript(
        GenomicSegment('chrXV', 1079170, 1079866, '+'),
        ID='YOR392W_mRNA',
        cds_genome_start=1079281,
        cds_genome_end=1079725
    ),
    Transcript(
        GenomicSegment('chrXVI', 239080, 241497, '-'),
        ID='YPL164C_mRNA',
        cds_genome_start=239349,
        cds_genome_end=241497
    ),
    Transcript(
        GenomicSegment('chrXVI', 305244, 305306, '+'),
        GenomicSegment('chrXVI', 305411, 306245, '+'),
        ID='YPL129W_mRNA',
        cds_genome_start=305297,
        cds_genome_end=306137
    ),
    Transcript(
        GenomicSegment('chrXVI', 404893, 404956, '+'),
        GenomicSegment('chrXVI', 405457, 406218, '+'),
        ID='YPL081W_mRNA',
        cds_genome_start=404949,
        cds_genome_end=406044
    ),
    Transcript(
        GenomicSegment('chrXVI', 412233, 412261, '+'),
        GenomicSegment('chrXVI', 413012, 415578, '+'),
        ID='YPL075W_mRNA',
        cds_genome_start=412253,
        cds_genome_end=415362
    ),
    Transcript(
        GenomicSegment('chrXVI', 792655, 793807, '+'),
        ID='YPR129W_mRNA',
        cds_genome_start=792686,
        cds_genome_end=793736
    ),
    Transcript(
        GenomicSegment('chrXVI', 882979, 883387, '+'),
        GenomicSegment('chrXVI', 883486, 883793, '+'),
        ID='YPR170W-B_mRNA',
        cds_genome_start=883238,
        cds_genome_end=883595
    ),
]
