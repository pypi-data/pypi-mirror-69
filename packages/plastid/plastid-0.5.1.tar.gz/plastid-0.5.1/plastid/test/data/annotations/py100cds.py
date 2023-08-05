from plastid import *
control_cds = [
    Transcript(
        GenomicSegment('chrI', 87285, 87387, '+'),
        GenomicSegment('chrI', 87500, 87752, '+'),
        ID='YAL030W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrII', 45977, 46370, '+'),
        ID='YBL092W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrII', 112800, 113427, '-'),
        ID='YBL057C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrII', 142111, 142749, '-'),
        GenomicSegment('chrII', 142846, 142868, '-'),
        ID='YBL040C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrII', 185997, 186352, '-'),
        GenomicSegment('chrII', 186427, 186474, '-'),
        ID='YBL018C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrII', 259868, 261173, '+'),
        GenomicSegment('chrII', 261174, 265140, '+'),
        ID='YBR012W-B',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrII', 324340, 326059, '-'),
        ID='YBR044C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrII', 406627, 407027, '-'),
        GenomicSegment('chrII', 407122, 407169, '-'),
        ID='YBR082C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrII', 490926, 491070, '+'),
        ID='YBR126W-B_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrII', 513761, 515336, '-'),
        ID='YBR138C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrII', 606269, 606280, '+'),
        GenomicSegment('chrII', 606668, 607140, '+'),
        ID='YBR191W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrII', 668662, 670297, '-'),
        ID='YBR223C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrII', 726617, 726917, '-'),
        GenomicSegment('chrII', 727011, 727074, '-'),
        ID='YBR255C-A_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrIII', 177499, 177906, '-'),
        GenomicSegment('chrIII', 178213, 178220, '-'),
        ID='YCR031C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrIII', 248032, 248815, '-'),
        ID='YCR075C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrIV', 148606, 149086, '-'),
        ID='YDL172C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrIV', 164986, 167254, '-'),
        ID='YDL164C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrIV', 253994, 254974, '-'),
        GenomicSegment('chrIV', 255044, 255126, '-'),
        ID='YDL115C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrIV', 267697, 267725, '+'),
        GenomicSegment('chrIV', 267806, 268699, '+'),
        ID='YDL108W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrIV', 289571, 290081, '-'),
        ID='YDL094C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrIV', 322225, 322282, '+'),
        GenomicSegment('chrIV', 322703, 322988, '+'),
        ID='YDL075W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrIV', 399339, 399361, '+'),
        GenomicSegment('chrIV', 399484, 400638, '+'),
        ID='YDL029W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrIV', 424208, 425732, '+'),
        ID='YDL017W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrIV', 463433, 464996, '+'),
        ID='YDR009W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrIV', 645857, 649820, '-'),
        GenomicSegment('chrIV', 649821, 651126, '-'),
        ID='YDR098C-B',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrIV', 830628, 831513, '-'),
        ID='YDR184C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrIV', 917570, 921647, '+'),
        ID='YDR227W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrIV', 1032435, 1035063, '+'),
        ID='YDR285W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrIV', 1133259, 1135431, '-'),
        ID='YDR333C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrIV', 1238311, 1238630, '-'),
        GenomicSegment('chrIV', 1238824, 1238850, '-'),
        ID='YDR381C-A_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrIX', 47291, 47693, '+'),
        ID='YIL156W-A_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrIX', 155221, 155222, '+'),
        GenomicSegment('chrIX', 155310, 155765, '+'),
        ID='YIL111W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrIX', 335665, 335935, '-'),
        GenomicSegment('chrIX', 335936, 336212, '-'),
        ID='YIL009C-A_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrmt', 36539, 36954, '+'),
        GenomicSegment('chrmt', 37722, 37736, '+'),
        GenomicSegment('chrmt', 39140, 40265, '+'),
        ID='Q0115_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrmt', 36539, 36954, '+'),
        GenomicSegment('chrmt', 37722, 37736, '+'),
        GenomicSegment('chrmt', 39140, 39217, '+'),
        GenomicSegment('chrmt', 40840, 42251, '+'),
        ID='Q0120_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrV', 131771, 131776, '+'),
        GenomicSegment('chrV', 131899, 132551, '+'),
        ID='YEL012W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrV', 184540, 186775, '+'),
        ID='YER015W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrV', 243699, 244029, '+'),
        ID='YER046W-A_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrV', 269422, 269751, '-'),
        GenomicSegment('chrV', 270148, 270185, '-'),
        ID='YER056C-A_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrV', 307652, 307746, '+'),
        GenomicSegment('chrV', 307848, 307956, '+'),
        GenomicSegment('chrV', 308067, 308123, '+'),
        ID='YER074W-A_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrVI', 63015, 63859, '-'),
        GenomicSegment('chrVI', 63973, 63993, '-'),
        ID='YFL034C-B_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrVI', 220506, 221267, '-'),
        GenomicSegment('chrVI', 221414, 221418, '-'),
        ID='YFR031C-A_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrVII', 15158, 16307, '+'),
        ID='YGL256W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrVII', 171414, 173079, '-'),
        ID='YGL176C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrVII', 173284, 174322, '-'),
        ID='YGL175C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrVII', 364334, 364964, '-'),
        GenomicSegment('chrVII', 365432, 365526, '-'),
        GenomicSegment('chrVII', 365985, 365996, '-'),
        ID='YGL076C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrVII', 418824, 419289, '+'),
        ID='YGL041W-A_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrVII', 450196, 452104, '-'),
        ID='YGL023C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrVII', 485422, 485533, '+'),
        ID='YGL006W-A_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrVII', 497132, 497365, '-'),
        GenomicSegment('chrVII', 497458, 497937, '-'),
        GenomicSegment('chrVII', 497999, 498034, '-'),
        ID='YGR001C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrVII', 543552, 543638, '+'),
        GenomicSegment('chrVII', 543721, 544205, '+'),
        ID='YGR029W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrVII', 607562, 609101, '+'),
        ID='YGR059W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrVII', 702666, 703116, '+'),
        ID='YGR107W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrVII', 707609, 708459, '+'),
        GenomicSegment('chrVII', 708460, 712254, '+'),
        ID='YGR109W-B',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrVII', 787311, 787779, '-'),
        ID='YGR148C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrVII', 897501, 899781, '+'),
        ID='YGR199W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrVIII', 129480, 129528, '+'),
        GenomicSegment('chrVIII', 129647, 130448, '+'),
        ID='YHR012W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrVIII', 151216, 151306, '-'),
        ID='YHR022C-A_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrVIII', 187172, 187514, '-'),
        GenomicSegment('chrVIII', 187676, 187679, '-'),
        ID='YHR039C-A_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrVIII', 314873, 315771, '-'),
        GenomicSegment('chrVIII', 315858, 315968, '-'),
        ID='YHR101C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrVIII', 517531, 518713, '+'),
        ID='YHR208W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrX', 85434, 85752, '-'),
        ID='YJL182C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrX', 227326, 227776, '+'),
        ID='YJL104W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrX', 365783, 365784, '+'),
        GenomicSegment('chrX', 365902, 368373, '+'),
        ID='YJL041W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrX', 478343, 479644, '+'),
        GenomicSegment('chrX', 479645, 483612, '+'),
        ID='YJR029W',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrX', 604568, 605651, '-'),
        ID='YJR094C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrX', 608304, 608306, '+'),
        GenomicSegment('chrX', 608581, 608858, '+'),
        ID='YJR094W-A_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrX', 647606, 649142, '+'),
        ID='YJR121W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrX', 703884, 704238, '+'),
        ID='YJR146W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrX', 732439, 734143, '+'),
        ID='YJR158W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXI', 92743, 93298, '-'),
        ID='YKL186C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXI', 277188, 277863, '-'),
        ID='YKL087C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXI', 292837, 293221, '-'),
        ID='YKL076C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXI', 411618, 416913, '-'),
        ID='YKL014C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXII', 281018, 281621, '-'),
        ID='YLR073C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXII', 462521, 462671, '-'),
        ID='YLR154C-G_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXII', 485344, 485689, '+'),
        ID='YLR159W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXII', 522662, 522669, '+'),
        GenomicSegment('chrXII', 523028, 523288, '+'),
        ID='YLR185W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXIII', 335297, 337307, '+'),
        ID='YMR032W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXIII', 373056, 377019, '-'),
        GenomicSegment('chrXIII', 377020, 378325, '-'),
        ID='YMR050C',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXIII', 651144, 651160, '+'),
        GenomicSegment('chrXIII', 651623, 651910, '+'),
        ID='YMR194W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXIII', 677192, 683564, '-'),
        ID='YMR207C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXIII', 886182, 886572, '-'),
        ID='YMR306C-A_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXIV', 63569, 64018, '-'),
        GenomicSegment('chrXIV', 64450, 64562, '-'),
        ID='YNL301C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXIV', 346312, 347542, '+'),
        ID='YNL152W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXIV', 366032, 366035, '+'),
        GenomicSegment('chrXIV', 366157, 366412, '+'),
        ID='YNL138W-A_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXIV', 379557, 380689, '-'),
        GenomicSegment('chrXIV', 380781, 380831, '-'),
        ID='YNL130C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXIV', 462410, 465947, '+'),
        ID='YNL087W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXV', 25272, 26976, '+'),
        ID='YOL156W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXV', 93394, 93843, '-'),
        GenomicSegment('chrXV', 94290, 94402, '-'),
        ID='YOL120C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXV', 200367, 201879, '-'),
        ID='YOL068C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXV', 551797, 552103, '-'),
        ID='YOR121C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXV', 916029, 918291, '+'),
        ID='YOR321W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXV', 1079281, 1079725, '+'),
        ID='YOR392W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXVI', 239349, 241497, '-'),
        ID='YPL164C_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXVI', 305297, 305306, '+'),
        GenomicSegment('chrXVI', 305411, 306137, '+'),
        ID='YPL129W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXVI', 404949, 404956, '+'),
        GenomicSegment('chrXVI', 405457, 406044, '+'),
        ID='YPL081W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXVI', 412253, 412261, '+'),
        GenomicSegment('chrXVI', 413012, 415362, '+'),
        ID='YPL075W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXVI', 792686, 793736, '+'),
        ID='YPR129W_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
    Transcript(
        GenomicSegment('chrXVI', 883238, 883387, '+'),
        GenomicSegment('chrXVI', 883486, 883595, '+'),
        ID='YPR170W-B_mRNA',
        cds_genome_start=None,
        cds_genome_end=None
    ),
]
