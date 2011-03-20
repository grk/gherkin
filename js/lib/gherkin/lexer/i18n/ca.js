
/* line 1 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */
;(function() {


/* line 107 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */



/* line 11 "js/lib/gherkin/lexer/i18n/ca.js" */
const _lexer_actions = [
	0, 1, 0, 1, 1, 1, 2, 1, 
	3, 1, 4, 1, 5, 1, 6, 1, 
	7, 1, 8, 1, 9, 1, 10, 1, 
	11, 1, 14, 1, 15, 1, 16, 1, 
	17, 1, 18, 1, 19, 1, 20, 1, 
	21, 2, 2, 16, 2, 11, 0, 2, 
	12, 13, 2, 15, 0, 2, 15, 1, 
	2, 15, 14, 2, 15, 17, 2, 16, 
	4, 2, 16, 5, 2, 16, 6, 2, 
	16, 7, 2, 16, 8, 2, 16, 14, 
	2, 18, 19, 2, 20, 0, 2, 20, 
	1, 2, 20, 14, 2, 20, 17, 3, 
	3, 12, 13, 3, 9, 12, 13, 3, 
	10, 12, 13, 3, 11, 12, 13, 3, 
	12, 13, 16, 3, 15, 12, 13, 4, 
	2, 12, 13, 16, 4, 15, 0, 12, 
	13
];

const _lexer_key_offsets = [
	0, 0, 20, 39, 40, 41, 45, 50, 
	55, 60, 65, 69, 73, 75, 76, 77, 
	78, 79, 80, 81, 82, 83, 84, 85, 
	86, 87, 88, 89, 90, 91, 92, 94, 
	99, 106, 111, 114, 115, 116, 117, 118, 
	119, 120, 121, 122, 123, 124, 125, 126, 
	127, 128, 129, 130, 131, 132, 133, 149, 
	151, 153, 155, 157, 159, 161, 163, 165, 
	167, 169, 171, 173, 175, 177, 179, 198, 
	199, 201, 202, 203, 204, 205, 206, 207, 
	208, 209, 210, 211, 212, 213, 214, 215, 
	216, 228, 230, 232, 234, 236, 238, 240, 
	242, 244, 246, 248, 250, 252, 254, 256, 
	258, 260, 262, 264, 266, 268, 270, 272, 
	274, 276, 278, 280, 282, 284, 286, 288, 
	290, 292, 294, 296, 298, 300, 302, 304, 
	306, 309, 312, 314, 316, 318, 320, 322, 
	324, 326, 328, 330, 332, 334, 336, 338, 
	340, 342, 344, 346, 348, 350, 352, 354, 
	356, 358, 360, 362, 364, 366, 368, 370, 
	372, 374, 376, 378, 380, 382, 384, 386, 
	388, 390, 392, 394, 395, 396, 397, 399, 
	400, 402, 404, 405, 406, 407, 408, 409, 
	410, 411, 412, 429, 431, 433, 435, 437, 
	439, 441, 443, 445, 447, 449, 451, 453, 
	455, 457, 459, 463, 465, 467, 469, 471, 
	473, 475, 477, 479, 481, 483, 485, 487, 
	489, 491, 493, 495, 497, 500, 502, 504, 
	506, 508, 511, 513, 515, 517, 519, 521, 
	523, 525, 527, 529, 531, 533, 535, 537, 
	539, 541, 544, 546, 549, 551, 553, 555, 
	557, 559, 561, 563, 565, 567, 569, 571, 
	573, 575, 577, 579, 581, 583, 585, 587, 
	589, 591, 593, 595, 597, 599, 601, 603, 
	605, 607, 609, 611, 613, 615, 617, 619, 
	621, 623, 625, 627, 629, 631, 633, 635, 
	636, 637, 638, 639, 640, 641, 642, 643, 
	644, 645, 646, 647, 648, 649, 650, 651, 
	652, 653, 654, 655, 656, 672, 674, 676, 
	678, 680, 682, 684, 686, 688, 690, 692, 
	694, 696, 698, 700, 702, 705, 707, 709, 
	711, 713, 715, 717, 719, 722, 724, 726, 
	728, 730, 733, 735, 737, 739, 741, 743, 
	745, 747, 749, 751, 753, 755, 757, 759, 
	761, 763, 765, 768, 770, 772, 774, 776, 
	778, 780, 782, 784, 786, 788, 790, 792, 
	794, 796, 798, 800, 802, 804, 806, 808, 
	810, 812, 814, 816, 818, 820, 821, 822, 
	823, 824, 825, 826, 827, 828, 829, 837, 
	839, 841, 843, 845, 847, 849, 851, 853, 
	855, 857, 859, 861, 863, 865, 867, 869, 
	871, 873, 875, 877, 879, 881, 883, 885, 
	887, 889, 891, 892, 893, 894, 895, 896, 
	897, 898, 899, 900, 901, 902, 903, 904, 
	905, 906, 907, 908, 909, 910, 911, 912, 
	913, 914, 915, 916, 920, 926, 929, 931, 
	937, 956, 959, 961, 963, 965, 967, 969, 
	971, 973, 976, 978, 980, 982, 984, 987, 
	989, 991, 993, 995, 997, 999, 1001, 1003, 
	1005, 1007, 1009, 1011, 1013, 1015, 1017, 1019, 
	1022, 1024, 1027, 1029, 1031, 1033, 1035, 1037, 
	1039, 1041, 1043, 1045, 1047, 1049, 1051, 1053, 
	1055, 1057, 1059, 1061, 1063, 1065, 1067, 1069, 
	1071, 1073, 1075, 1077, 1079, 1081, 1083, 1085, 
	1087, 1089, 1091, 1093, 1095, 1097, 1099, 1101, 
	1103, 1104, 1105, 1106, 1107
];

const _lexer_trans_keys = [
	10, 32, 34, 35, 37, 42, 64, 65, 
	67, 68, 69, 70, 73, 80, 81, 82, 
	124, 239, 9, 13, 10, 32, 34, 35, 
	37, 42, 64, 65, 67, 68, 69, 70, 
	73, 80, 81, 82, 124, 9, 13, 34, 
	34, 10, 32, 9, 13, 10, 32, 34, 
	9, 13, 10, 32, 34, 9, 13, 10, 
	32, 34, 9, 13, 10, 32, 34, 9, 
	13, 10, 32, 9, 13, 10, 32, 9, 
	13, 10, 13, 10, 95, 70, 69, 65, 
	84, 85, 82, 69, 95, 69, 78, 68, 
	95, 37, 32, 10, 10, 13, 13, 32, 
	64, 9, 10, 9, 10, 13, 32, 64, 
	11, 12, 10, 32, 64, 9, 13, 108, 
	110, 116, 101, 115, 104, 111, 114, 101, 
	115, 116, 101, 99, 101, 100, 101, 110, 
	116, 115, 58, 10, 10, 10, 32, 35, 
	37, 42, 64, 65, 67, 68, 69, 70, 
	73, 80, 81, 9, 13, 10, 95, 10, 
	70, 10, 69, 10, 65, 10, 84, 10, 
	85, 10, 82, 10, 69, 10, 95, 10, 
	69, 10, 78, 10, 68, 10, 95, 10, 
	37, 10, 32, 10, 32, 34, 35, 37, 
	42, 64, 65, 67, 68, 69, 70, 73, 
	80, 81, 82, 124, 9, 13, 97, 108, 
	114, 97, 99, 116, 101, 114, -61, -83, 
	115, 116, 105, 99, 97, 58, 10, 10, 
	10, 32, 35, 37, 64, 65, 67, 69, 
	70, 82, 9, 13, 10, 95, 10, 70, 
	10, 69, 10, 65, 10, 84, 10, 85, 
	10, 82, 10, 69, 10, 95, 10, 69, 
	10, 78, 10, 68, 10, 95, 10, 37, 
	10, 110, 10, 116, 10, 101, 10, 99, 
	10, 101, 10, 100, 10, 101, 10, 110, 
	10, 116, 10, 115, 10, 58, 10, 97, 
	10, 114, 10, 97, 10, 99, 10, 116, 
	10, 101, 10, 114, -61, 10, -83, 10, 
	10, 115, 10, 116, 10, 105, 10, 99, 
	10, 97, 10, 115, 120, 10, 99, 113, 
	10, 101, 10, 110, 10, 97, 10, 114, 
	10, 105, 10, 117, 10, 101, 10, 109, 
	10, 97, 10, 32, 10, 100, 10, 101, 
	10, 32, 10, 108, 10, 39, 10, 101, 
	10, 115, 10, 99, 10, 101, 10, 109, 
	10, 112, 10, 108, 10, 101, 10, 117, 
	10, 110, 10, 99, 10, 105, 10, 111, 
	10, 110, 10, 97, 10, 108, 10, 105, 
	10, 116, 10, 97, 10, 116, 10, 101, 
	10, 114, 10, 101, 10, 102, 10, 111, 
	10, 110, 111, 110, 97, 100, 116, 97, 
	115, 120, 99, 113, 101, 110, 97, 114, 
	105, 58, 10, 10, 10, 32, 35, 37, 
	42, 64, 65, 67, 68, 69, 70, 73, 
	80, 81, 82, 9, 13, 10, 95, 10, 
	70, 10, 69, 10, 65, 10, 84, 10, 
	85, 10, 82, 10, 69, 10, 95, 10, 
	69, 10, 78, 10, 68, 10, 95, 10, 
	37, 10, 32, 10, 108, 110, 116, 10, 
	101, 10, 115, 10, 104, 10, 111, 10, 
	114, 10, 101, 10, 115, 10, 116, 10, 
	101, 10, 99, 10, 101, 10, 100, 10, 
	101, 10, 110, 10, 116, 10, 115, 10, 
	58, -61, 10, 101, -88, 10, 10, 115, 
	10, 97, 10, 97, 10, 108, 114, 10, 
	97, 10, 99, 10, 116, 10, 101, 10, 
	114, -61, 10, -83, 10, 10, 115, 10, 
	116, 10, 105, 10, 99, 10, 97, 10, 
	111, 10, 110, 10, 97, 10, 100, 116, 
	10, 115, 10, 99, 113, 10, 101, 10, 
	110, 10, 97, 10, 114, 10, 105, 10, 
	117, 10, 101, 10, 109, 10, 97, 10, 
	32, 10, 100, 10, 101, 10, 32, 10, 
	108, 10, 39, 10, 101, 10, 115, 10, 
	99, 10, 117, 10, 110, 10, 99, 10, 
	105, 10, 111, 10, 110, 10, 97, 10, 
	108, 10, 105, 10, 116, 10, 97, 10, 
	116, 10, 101, 10, 114, -61, 10, -78, 
	10, 10, 117, 10, 97, 10, 110, 10, 
	101, 10, 114, 10, 101, 10, 102, 10, 
	111, 10, 110, 117, 101, 109, 97, 32, 
	100, 101, 32, 108, 39, 101, 115, 99, 
	101, 110, 97, 114, 105, 58, 10, 10, 
	10, 32, 35, 37, 42, 64, 65, 67, 
	68, 69, 70, 73, 80, 81, 9, 13, 
	10, 95, 10, 70, 10, 69, 10, 65, 
	10, 84, 10, 85, 10, 82, 10, 69, 
	10, 95, 10, 69, 10, 78, 10, 68, 
	10, 95, 10, 37, 10, 32, 10, 108, 
	116, 10, 101, 10, 115, 10, 104, 10, 
	111, 10, 114, 10, 101, 10, 115, -61, 
	10, 101, -88, 10, 10, 115, 10, 97, 
	10, 97, 10, 108, 114, 10, 97, 10, 
	99, 10, 116, 10, 101, 10, 114, -61, 
	10, -83, 10, 10, 115, 10, 116, 10, 
	105, 10, 99, 10, 97, 10, 58, 10, 
	111, 10, 110, 10, 97, 10, 100, 116, 
	10, 115, 10, 99, 10, 101, 10, 110, 
	10, 97, 10, 114, 10, 105, 10, 117, 
	10, 110, 10, 99, 10, 105, 10, 111, 
	10, 110, 10, 97, 10, 108, 10, 105, 
	10, 116, 10, 97, 10, 116, 10, 101, 
	10, 114, -61, 10, -78, 10, 10, 117, 
	10, 97, 10, 110, 101, 109, 112, 108, 
	101, 115, 58, 10, 10, 10, 32, 35, 
	67, 70, 124, 9, 13, 10, 97, 10, 
	114, 10, 97, 10, 99, 10, 116, 10, 
	101, 10, 114, -61, 10, -83, 10, 10, 
	115, 10, 116, 10, 105, 10, 99, 10, 
	97, 10, 58, 10, 117, 10, 110, 10, 
	99, 10, 105, 10, 111, 10, 110, 10, 
	97, 10, 108, 10, 105, 10, 116, 10, 
	97, 10, 116, 117, 110, 99, 105, 111, 
	110, 97, 108, 105, 116, 97, 116, 101, 
	114, -61, -78, 117, 97, 110, 101, 114, 
	101, 102, 111, 110, 32, 124, 9, 13, 
	10, 32, 92, 124, 9, 13, 10, 92, 
	124, 10, 92, 10, 32, 92, 124, 9, 
	13, 10, 32, 34, 35, 37, 42, 64, 
	65, 67, 68, 69, 70, 73, 80, 81, 
	82, 124, 9, 13, 10, 108, 116, 10, 
	101, 10, 115, 10, 104, 10, 111, 10, 
	114, 10, 101, 10, 115, -61, 10, 101, 
	-88, 10, 10, 115, 10, 97, 10, 97, 
	10, 108, 114, 10, 97, 10, 99, 10, 
	116, 10, 101, 10, 114, -61, 10, -83, 
	10, 10, 115, 10, 116, 10, 105, 10, 
	99, 10, 97, 10, 58, 10, 111, 10, 
	110, 10, 97, 10, 100, 116, 10, 115, 
	10, 99, 113, 10, 101, 10, 110, 10, 
	97, 10, 114, 10, 105, 10, 117, 10, 
	101, 10, 109, 10, 97, 10, 32, 10, 
	100, 10, 101, 10, 32, 10, 108, 10, 
	39, 10, 101, 10, 115, 10, 99, 10, 
	117, 10, 110, 10, 99, 10, 105, 10, 
	111, 10, 110, 10, 97, 10, 108, 10, 
	105, 10, 116, 10, 97, 10, 116, 10, 
	101, 10, 114, -61, 10, -78, 10, 10, 
	117, 10, 97, 10, 110, -61, 101, -88, 
	115, 187, 191, 0
];

const _lexer_single_lengths = [
	0, 18, 17, 1, 1, 2, 3, 3, 
	3, 3, 2, 2, 2, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 2, 3, 
	5, 3, 3, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 14, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 17, 1, 
	2, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	10, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	3, 3, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 1, 1, 1, 2, 1, 
	2, 2, 1, 1, 1, 1, 1, 1, 
	1, 1, 15, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 4, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 3, 2, 2, 2, 
	2, 3, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 3, 2, 3, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 14, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 3, 2, 2, 2, 
	2, 2, 2, 2, 3, 2, 2, 2, 
	2, 3, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 3, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 6, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 2, 4, 3, 2, 4, 
	17, 3, 2, 2, 2, 2, 2, 2, 
	2, 3, 2, 2, 2, 2, 3, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 3, 
	2, 3, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	1, 1, 1, 1, 0
];

const _lexer_range_lengths = [
	0, 1, 1, 0, 0, 1, 1, 1, 
	1, 1, 1, 1, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 1, 
	1, 1, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 1, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 1, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	1, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 1, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 1, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 1, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 1, 1, 0, 0, 1, 
	1, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0
];

const _lexer_index_offsets = [
	0, 0, 20, 39, 41, 43, 47, 52, 
	57, 62, 67, 71, 75, 78, 80, 82, 
	84, 86, 88, 90, 92, 94, 96, 98, 
	100, 102, 104, 106, 108, 110, 112, 115, 
	120, 127, 132, 136, 138, 140, 142, 144, 
	146, 148, 150, 152, 154, 156, 158, 160, 
	162, 164, 166, 168, 170, 172, 174, 190, 
	193, 196, 199, 202, 205, 208, 211, 214, 
	217, 220, 223, 226, 229, 232, 235, 254, 
	256, 259, 261, 263, 265, 267, 269, 271, 
	273, 275, 277, 279, 281, 283, 285, 287, 
	289, 301, 304, 307, 310, 313, 316, 319, 
	322, 325, 328, 331, 334, 337, 340, 343, 
	346, 349, 352, 355, 358, 361, 364, 367, 
	370, 373, 376, 379, 382, 385, 388, 391, 
	394, 397, 400, 403, 406, 409, 412, 415, 
	418, 422, 426, 429, 432, 435, 438, 441, 
	444, 447, 450, 453, 456, 459, 462, 465, 
	468, 471, 474, 477, 480, 483, 486, 489, 
	492, 495, 498, 501, 504, 507, 510, 513, 
	516, 519, 522, 525, 528, 531, 534, 537, 
	540, 543, 546, 549, 551, 553, 555, 558, 
	560, 563, 566, 568, 570, 572, 574, 576, 
	578, 580, 582, 599, 602, 605, 608, 611, 
	614, 617, 620, 623, 626, 629, 632, 635, 
	638, 641, 644, 649, 652, 655, 658, 661, 
	664, 667, 670, 673, 676, 679, 682, 685, 
	688, 691, 694, 697, 700, 704, 707, 710, 
	713, 716, 720, 723, 726, 729, 732, 735, 
	738, 741, 744, 747, 750, 753, 756, 759, 
	762, 765, 769, 772, 776, 779, 782, 785, 
	788, 791, 794, 797, 800, 803, 806, 809, 
	812, 815, 818, 821, 824, 827, 830, 833, 
	836, 839, 842, 845, 848, 851, 854, 857, 
	860, 863, 866, 869, 872, 875, 878, 881, 
	884, 887, 890, 893, 896, 899, 902, 905, 
	907, 909, 911, 913, 915, 917, 919, 921, 
	923, 925, 927, 929, 931, 933, 935, 937, 
	939, 941, 943, 945, 947, 963, 966, 969, 
	972, 975, 978, 981, 984, 987, 990, 993, 
	996, 999, 1002, 1005, 1008, 1012, 1015, 1018, 
	1021, 1024, 1027, 1030, 1033, 1037, 1040, 1043, 
	1046, 1049, 1053, 1056, 1059, 1062, 1065, 1068, 
	1071, 1074, 1077, 1080, 1083, 1086, 1089, 1092, 
	1095, 1098, 1101, 1105, 1108, 1111, 1114, 1117, 
	1120, 1123, 1126, 1129, 1132, 1135, 1138, 1141, 
	1144, 1147, 1150, 1153, 1156, 1159, 1162, 1165, 
	1168, 1171, 1174, 1177, 1180, 1183, 1185, 1187, 
	1189, 1191, 1193, 1195, 1197, 1199, 1201, 1209, 
	1212, 1215, 1218, 1221, 1224, 1227, 1230, 1233, 
	1236, 1239, 1242, 1245, 1248, 1251, 1254, 1257, 
	1260, 1263, 1266, 1269, 1272, 1275, 1278, 1281, 
	1284, 1287, 1290, 1292, 1294, 1296, 1298, 1300, 
	1302, 1304, 1306, 1308, 1310, 1312, 1314, 1316, 
	1318, 1320, 1322, 1324, 1326, 1328, 1330, 1332, 
	1334, 1336, 1338, 1340, 1344, 1350, 1354, 1357, 
	1363, 1382, 1386, 1389, 1392, 1395, 1398, 1401, 
	1404, 1407, 1411, 1414, 1417, 1420, 1423, 1427, 
	1430, 1433, 1436, 1439, 1442, 1445, 1448, 1451, 
	1454, 1457, 1460, 1463, 1466, 1469, 1472, 1475, 
	1479, 1482, 1486, 1489, 1492, 1495, 1498, 1501, 
	1504, 1507, 1510, 1513, 1516, 1519, 1522, 1525, 
	1528, 1531, 1534, 1537, 1540, 1543, 1546, 1549, 
	1552, 1555, 1558, 1561, 1564, 1567, 1570, 1573, 
	1576, 1579, 1582, 1585, 1588, 1591, 1594, 1597, 
	1600, 1602, 1604, 1606, 1608
];

const _lexer_indicies = [
	2, 1, 3, 4, 5, 6, 7, 8, 
	9, 10, 11, 12, 6, 13, 14, 15, 
	16, 17, 1, 0, 2, 1, 3, 4, 
	5, 6, 7, 8, 9, 10, 11, 12, 
	6, 13, 14, 15, 16, 1, 0, 18, 
	0, 19, 0, 20, 19, 19, 0, 23, 
	22, 24, 22, 21, 27, 26, 28, 26, 
	25, 27, 26, 29, 26, 25, 27, 26, 
	30, 26, 25, 32, 31, 31, 0, 2, 
	33, 33, 0, 35, 36, 34, 2, 0, 
	37, 0, 38, 0, 39, 0, 40, 0, 
	41, 0, 42, 0, 43, 0, 44, 0, 
	45, 0, 46, 0, 47, 0, 48, 0, 
	49, 0, 50, 0, 51, 0, 0, 52, 
	54, 55, 53, 0, 0, 0, 0, 56, 
	57, 58, 57, 57, 60, 59, 56, 2, 
	61, 7, 61, 0, 62, 63, 64, 0, 
	65, 0, 66, 0, 67, 0, 68, 0, 
	69, 0, 70, 0, 71, 0, 72, 0, 
	73, 0, 74, 0, 75, 0, 76, 0, 
	77, 0, 78, 0, 79, 0, 80, 0, 
	81, 0, 83, 82, 85, 84, 85, 86, 
	87, 88, 89, 87, 90, 91, 92, 93, 
	94, 89, 95, 96, 86, 84, 85, 97, 
	84, 85, 98, 84, 85, 99, 84, 85, 
	100, 84, 85, 101, 84, 85, 102, 84, 
	85, 103, 84, 85, 104, 84, 85, 105, 
	84, 85, 106, 84, 85, 107, 84, 85, 
	108, 84, 85, 109, 84, 85, 110, 84, 
	85, 111, 84, 113, 112, 114, 115, 116, 
	117, 118, 119, 120, 121, 122, 123, 117, 
	124, 125, 126, 127, 112, 0, 128, 0, 
	71, 129, 0, 130, 0, 131, 0, 132, 
	0, 133, 0, 134, 0, 135, 0, 136, 
	0, 137, 0, 138, 0, 139, 0, 140, 
	0, 141, 0, 142, 0, 144, 143, 146, 
	145, 146, 147, 148, 149, 148, 150, 151, 
	152, 153, 154, 147, 145, 146, 155, 145, 
	146, 156, 145, 146, 157, 145, 146, 158, 
	145, 146, 159, 145, 146, 160, 145, 146, 
	161, 145, 146, 162, 145, 146, 163, 145, 
	146, 164, 145, 146, 165, 145, 146, 166, 
	145, 146, 167, 145, 146, 168, 145, 146, 
	169, 145, 146, 170, 145, 146, 171, 145, 
	146, 172, 145, 146, 173, 145, 146, 174, 
	145, 146, 175, 145, 146, 176, 145, 146, 
	177, 145, 146, 178, 145, 146, 179, 145, 
	146, 180, 145, 146, 181, 145, 146, 182, 
	145, 146, 183, 145, 146, 184, 145, 146, 
	185, 145, 146, 186, 145, 187, 146, 145, 
	188, 146, 145, 146, 189, 145, 146, 190, 
	145, 146, 191, 145, 146, 192, 145, 146, 
	178, 145, 146, 193, 194, 145, 146, 195, 
	196, 145, 146, 197, 145, 146, 198, 145, 
	146, 199, 145, 146, 200, 145, 146, 178, 
	145, 146, 201, 145, 146, 202, 145, 146, 
	203, 145, 146, 204, 145, 146, 205, 145, 
	146, 206, 145, 146, 207, 145, 146, 208, 
	145, 146, 209, 145, 146, 210, 145, 146, 
	211, 145, 146, 212, 145, 146, 195, 145, 
	146, 213, 145, 146, 214, 145, 146, 215, 
	145, 146, 216, 145, 146, 177, 145, 146, 
	217, 145, 146, 218, 145, 146, 219, 145, 
	146, 220, 145, 146, 221, 145, 146, 222, 
	145, 146, 223, 145, 146, 224, 145, 146, 
	225, 145, 146, 226, 145, 146, 227, 145, 
	146, 178, 145, 146, 228, 145, 146, 229, 
	145, 146, 230, 145, 146, 231, 145, 146, 
	232, 145, 146, 177, 145, 233, 0, 234, 
	0, 235, 0, 236, 71, 0, 71, 0, 
	237, 238, 0, 239, 240, 0, 241, 0, 
	242, 0, 243, 0, 244, 0, 245, 0, 
	246, 0, 248, 247, 250, 249, 250, 251, 
	252, 253, 254, 252, 255, 256, 257, 258, 
	259, 254, 260, 261, 262, 251, 249, 250, 
	263, 249, 250, 264, 249, 250, 265, 249, 
	250, 266, 249, 250, 267, 249, 250, 268, 
	249, 250, 269, 249, 250, 270, 249, 250, 
	271, 249, 250, 272, 249, 250, 273, 249, 
	250, 274, 249, 250, 275, 249, 250, 276, 
	249, 250, 277, 249, 250, 278, 279, 280, 
	249, 250, 281, 249, 250, 282, 249, 250, 
	283, 249, 250, 284, 249, 250, 285, 249, 
	250, 286, 249, 250, 287, 249, 250, 288, 
	249, 250, 289, 249, 250, 290, 249, 250, 
	291, 249, 250, 292, 249, 250, 293, 249, 
	250, 294, 249, 250, 295, 249, 250, 296, 
	249, 250, 277, 249, 297, 250, 298, 249, 
	286, 250, 249, 250, 299, 249, 250, 287, 
	249, 250, 300, 249, 250, 287, 301, 249, 
	250, 302, 249, 250, 303, 249, 250, 304, 
	249, 250, 305, 249, 250, 306, 249, 307, 
	250, 249, 308, 250, 249, 250, 309, 249, 
	250, 310, 249, 250, 311, 249, 250, 312, 
	249, 250, 296, 249, 250, 313, 249, 250, 
	314, 249, 250, 315, 249, 250, 299, 287, 
	249, 250, 316, 249, 250, 317, 318, 249, 
	250, 319, 249, 250, 320, 249, 250, 321, 
	249, 250, 322, 249, 250, 296, 249, 250, 
	323, 249, 250, 324, 249, 250, 325, 249, 
	250, 326, 249, 250, 327, 249, 250, 328, 
	249, 250, 329, 249, 250, 330, 249, 250, 
	331, 249, 250, 332, 249, 250, 333, 249, 
	250, 334, 249, 250, 317, 249, 250, 335, 
	249, 250, 336, 249, 250, 337, 249, 250, 
	338, 249, 250, 339, 249, 250, 340, 249, 
	250, 341, 249, 250, 342, 249, 250, 343, 
	249, 250, 344, 249, 250, 345, 249, 250, 
	296, 249, 250, 346, 249, 250, 347, 249, 
	348, 250, 249, 287, 250, 249, 250, 349, 
	249, 250, 350, 249, 250, 287, 249, 250, 
	351, 249, 250, 352, 249, 250, 353, 249, 
	250, 354, 249, 250, 355, 249, 250, 295, 
	249, 356, 0, 357, 0, 358, 0, 359, 
	0, 360, 0, 361, 0, 362, 0, 363, 
	0, 364, 0, 365, 0, 366, 0, 367, 
	0, 368, 0, 369, 0, 370, 0, 371, 
	0, 372, 0, 373, 0, 374, 0, 376, 
	375, 378, 377, 378, 379, 380, 381, 382, 
	380, 383, 384, 385, 386, 387, 382, 388, 
	389, 379, 377, 378, 390, 377, 378, 391, 
	377, 378, 392, 377, 378, 393, 377, 378, 
	394, 377, 378, 395, 377, 378, 396, 377, 
	378, 397, 377, 378, 398, 377, 378, 399, 
	377, 378, 400, 377, 378, 401, 377, 378, 
	402, 377, 378, 403, 377, 378, 404, 377, 
	378, 405, 406, 377, 378, 407, 377, 378, 
	408, 377, 378, 409, 377, 378, 410, 377, 
	378, 411, 377, 378, 412, 377, 378, 413, 
	377, 414, 378, 415, 377, 412, 378, 377, 
	378, 416, 377, 378, 413, 377, 378, 417, 
	377, 378, 413, 418, 377, 378, 419, 377, 
	378, 420, 377, 378, 421, 377, 378, 422, 
	377, 378, 423, 377, 424, 378, 377, 425, 
	378, 377, 378, 426, 377, 378, 427, 377, 
	378, 428, 377, 378, 429, 377, 378, 430, 
	377, 378, 404, 377, 378, 431, 377, 378, 
	432, 377, 378, 433, 377, 378, 416, 413, 
	377, 378, 434, 377, 378, 435, 377, 378, 
	436, 377, 378, 437, 377, 378, 438, 377, 
	378, 439, 377, 378, 430, 377, 378, 440, 
	377, 378, 441, 377, 378, 442, 377, 378, 
	443, 377, 378, 444, 377, 378, 445, 377, 
	378, 446, 377, 378, 447, 377, 378, 448, 
	377, 378, 449, 377, 378, 450, 377, 378, 
	430, 377, 378, 451, 377, 378, 452, 377, 
	453, 378, 377, 413, 378, 377, 378, 454, 
	377, 378, 455, 377, 378, 413, 377, 456, 
	0, 457, 0, 458, 0, 459, 0, 460, 
	0, 461, 0, 462, 0, 464, 463, 466, 
	465, 466, 467, 468, 469, 470, 468, 467, 
	465, 466, 471, 465, 466, 472, 465, 466, 
	473, 465, 466, 474, 465, 466, 475, 465, 
	466, 476, 465, 466, 477, 465, 478, 466, 
	465, 479, 466, 465, 466, 480, 465, 466, 
	481, 465, 466, 482, 465, 466, 483, 465, 
	466, 484, 465, 466, 485, 465, 466, 486, 
	465, 466, 487, 465, 466, 488, 465, 466, 
	489, 465, 466, 490, 465, 466, 491, 465, 
	466, 492, 465, 466, 493, 465, 466, 494, 
	465, 466, 495, 465, 466, 496, 465, 466, 
	484, 465, 497, 0, 498, 0, 499, 0, 
	500, 0, 501, 0, 502, 0, 503, 0, 
	504, 0, 505, 0, 506, 0, 507, 0, 
	141, 0, 508, 0, 509, 0, 510, 0, 
	71, 0, 511, 0, 512, 0, 71, 0, 
	513, 0, 514, 0, 515, 0, 516, 0, 
	517, 0, 79, 0, 518, 519, 518, 0, 
	522, 521, 523, 524, 521, 520, 0, 526, 
	527, 525, 0, 526, 525, 522, 528, 526, 
	527, 528, 525, 522, 529, 530, 531, 532, 
	533, 534, 535, 536, 537, 538, 539, 533, 
	540, 541, 542, 543, 529, 0, 85, 544, 
	545, 84, 85, 546, 84, 85, 547, 84, 
	85, 548, 84, 85, 549, 84, 85, 550, 
	84, 85, 551, 84, 85, 552, 84, 553, 
	85, 554, 84, 551, 85, 84, 85, 555, 
	84, 85, 552, 84, 85, 556, 84, 85, 
	552, 557, 84, 85, 558, 84, 85, 559, 
	84, 85, 560, 84, 85, 561, 84, 85, 
	562, 84, 563, 85, 84, 564, 85, 84, 
	85, 565, 84, 85, 566, 84, 85, 567, 
	84, 85, 568, 84, 85, 569, 84, 85, 
	111, 84, 85, 570, 84, 85, 571, 84, 
	85, 572, 84, 85, 555, 552, 84, 85, 
	573, 84, 85, 574, 575, 84, 85, 576, 
	84, 85, 577, 84, 85, 578, 84, 85, 
	579, 84, 85, 569, 84, 85, 580, 84, 
	85, 581, 84, 85, 582, 84, 85, 583, 
	84, 85, 584, 84, 85, 585, 84, 85, 
	586, 84, 85, 587, 84, 85, 588, 84, 
	85, 589, 84, 85, 590, 84, 85, 591, 
	84, 85, 574, 84, 85, 592, 84, 85, 
	593, 84, 85, 594, 84, 85, 595, 84, 
	85, 596, 84, 85, 597, 84, 85, 598, 
	84, 85, 599, 84, 85, 600, 84, 85, 
	601, 84, 85, 602, 84, 85, 569, 84, 
	85, 603, 84, 85, 604, 84, 605, 85, 
	84, 552, 85, 84, 85, 606, 84, 85, 
	607, 84, 85, 552, 84, 608, 609, 0, 
	70, 0, 236, 0, 610, 0, 1, 0, 
	611, 0
];

const _lexer_trans_targs = [
	0, 2, 2, 3, 12, 14, 28, 31, 
	34, 71, 171, 176, 418, 430, 434, 437, 
	443, 522, 4, 5, 6, 7, 7, 7, 
	8, 7, 7, 7, 8, 9, 10, 11, 
	2, 11, 12, 2, 13, 15, 16, 17, 
	18, 19, 20, 21, 22, 23, 24, 25, 
	26, 27, 524, 29, 30, 30, 2, 13, 
	32, 33, 2, 32, 31, 33, 35, 42, 
	519, 36, 37, 38, 39, 40, 41, 28, 
	43, 44, 45, 46, 47, 48, 49, 50, 
	51, 52, 53, 54, 53, 54, 54, 2, 
	55, 69, 449, 461, 476, 480, 500, 512, 
	516, 56, 57, 58, 59, 60, 61, 62, 
	63, 64, 65, 66, 67, 68, 2, 70, 
	2, 2, 3, 12, 14, 28, 31, 34, 
	71, 171, 176, 418, 430, 434, 437, 443, 
	72, 73, 74, 75, 76, 77, 78, 79, 
	80, 81, 82, 83, 84, 85, 86, 87, 
	88, 87, 88, 88, 2, 89, 103, 114, 
	128, 153, 165, 90, 91, 92, 93, 94, 
	95, 96, 97, 98, 99, 100, 101, 102, 
	2, 104, 105, 106, 107, 108, 109, 110, 
	111, 112, 113, 70, 115, 116, 117, 118, 
	119, 120, 121, 122, 123, 124, 125, 126, 
	127, 129, 148, 130, 135, 131, 132, 133, 
	134, 136, 137, 138, 139, 140, 141, 142, 
	143, 144, 145, 146, 147, 149, 150, 151, 
	152, 154, 155, 156, 157, 158, 159, 160, 
	161, 162, 163, 164, 166, 167, 168, 169, 
	170, 172, 173, 174, 175, 177, 381, 178, 
	287, 179, 180, 181, 182, 183, 184, 185, 
	186, 185, 186, 186, 2, 187, 201, 202, 
	224, 238, 242, 262, 274, 278, 281, 188, 
	189, 190, 191, 192, 193, 194, 195, 196, 
	197, 198, 199, 200, 2, 70, 203, 210, 
	220, 204, 205, 206, 207, 208, 209, 201, 
	211, 212, 213, 214, 215, 216, 217, 218, 
	219, 221, 222, 223, 225, 226, 227, 228, 
	229, 230, 231, 232, 233, 234, 235, 236, 
	237, 239, 240, 241, 243, 244, 249, 245, 
	246, 247, 248, 250, 251, 252, 253, 254, 
	255, 256, 257, 258, 259, 260, 261, 263, 
	264, 265, 266, 267, 268, 269, 270, 271, 
	272, 273, 275, 276, 277, 279, 280, 282, 
	283, 284, 285, 286, 288, 289, 290, 291, 
	292, 293, 294, 295, 296, 297, 298, 299, 
	300, 301, 302, 303, 304, 305, 306, 307, 
	308, 307, 308, 308, 2, 309, 323, 324, 
	336, 351, 355, 362, 374, 378, 310, 311, 
	312, 313, 314, 315, 316, 317, 318, 319, 
	320, 321, 322, 2, 70, 325, 332, 326, 
	327, 328, 329, 330, 331, 323, 333, 334, 
	335, 337, 338, 339, 340, 341, 342, 343, 
	344, 345, 346, 347, 348, 349, 350, 352, 
	353, 354, 356, 357, 358, 359, 360, 361, 
	363, 364, 365, 366, 367, 368, 369, 370, 
	371, 372, 373, 375, 376, 377, 379, 380, 
	382, 383, 384, 385, 386, 387, 388, 389, 
	390, 389, 390, 390, 2, 391, 406, 392, 
	393, 394, 395, 396, 397, 398, 399, 400, 
	401, 402, 403, 404, 405, 70, 407, 408, 
	409, 410, 411, 412, 413, 414, 415, 416, 
	417, 419, 420, 421, 422, 423, 424, 425, 
	426, 427, 428, 429, 431, 432, 433, 435, 
	436, 438, 439, 440, 441, 442, 443, 444, 
	445, 447, 448, 446, 444, 445, 446, 444, 
	447, 448, 3, 12, 14, 28, 31, 34, 
	71, 171, 176, 418, 430, 434, 437, 443, 
	450, 457, 451, 452, 453, 454, 455, 456, 
	69, 458, 459, 460, 462, 463, 464, 465, 
	466, 467, 468, 469, 470, 471, 472, 473, 
	474, 475, 477, 478, 479, 481, 482, 487, 
	483, 484, 485, 486, 488, 489, 490, 491, 
	492, 493, 494, 495, 496, 497, 498, 499, 
	501, 502, 503, 504, 505, 506, 507, 508, 
	509, 510, 511, 513, 514, 515, 517, 518, 
	520, 521, 523, 0
];

const _lexer_trans_actions = [
	39, 0, 47, 3, 1, 0, 25, 1, 
	25, 25, 25, 25, 25, 25, 25, 25, 
	31, 0, 0, 0, 47, 5, 41, 119, 
	41, 0, 29, 111, 29, 29, 0, 7, 
	95, 0, 0, 103, 21, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 50, 0, 99, 19, 
	0, 23, 107, 23, 44, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 50, 124, 0, 47, 0, 65, 
	29, 77, 77, 77, 77, 77, 77, 77, 
	77, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 11, 11, 
	27, 115, 53, 50, 27, 56, 50, 56, 
	56, 56, 56, 56, 56, 56, 56, 59, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 50, 
	124, 0, 47, 0, 62, 29, 77, 77, 
	77, 77, 77, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	9, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 9, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 50, 
	124, 0, 47, 0, 68, 29, 77, 77, 
	77, 77, 77, 77, 77, 77, 77, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 13, 13, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 50, 
	124, 0, 47, 0, 71, 29, 77, 77, 
	77, 77, 77, 77, 77, 77, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 15, 15, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 50, 
	124, 0, 47, 0, 74, 77, 77, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 17, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	33, 33, 47, 33, 80, 0, 0, 35, 
	0, 0, 86, 83, 37, 89, 83, 89, 
	89, 89, 89, 89, 89, 89, 89, 92, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0
];

const _lexer_eof_actions = [
	0, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39
];

const lexer_start = 1;
const lexer_first_final = 524;
const lexer_error = 0;

const lexer_en_main = 1;


/* line 110 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

/* line 111 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

/* line 112 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

var Lexer = function(listeners) {
  // check that we have an 'on' method (for registering event listeners - Node has that)
  // If not, make a trivial implementation that can register one listener. -Enough for testing.
  
  if(!this.on) {
    this._listeners = {};
    
    this.on = function(event, cb) {
      this._listeners[event] = cb;
    };
    
    this.emit = function() {
      var event = arguments[0];
      var args = [];
      for(var i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      var cb = this._listeners[event];
      cb.apply(listeners, args);
    };
  }
  
  var events = ['feature', 'background', 'scenario', 'scenario_outline', 'examples', 'step', 'py_string', 'row', 'end'];
  for(e in events) {
    var event = events[e];
    var listener = listeners[event];
//    if(!listener) {
//      throw "No listener for " + event;
//    }
    this.on(event, listener);
  }

  
/* line 930 "js/lib/gherkin/lexer/i18n/ca.js" */
{
	  this.cs = lexer_start;
} /* JSCodeGen::writeInit */

/* line 146 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */
};

if(typeof require == 'function') {
  require('sys').inherits(Lexer, require('events').EventEmitter);
}

Lexer.prototype.scan = function(data) {
  var p = 0;
  var pe = data.length;
  var eof = 0;

  
/* line 948 "js/lib/gherkin/lexer/i18n/ca.js" */
{
	var _klen, _trans, _keys, _ps, _widec, _acts, _nacts;
	var _goto_level, _resume, _eof_trans, _again, _test_eof;
	var _out;
	_klen = _trans = _keys = _acts = _nacts = null;
	_goto_level = 0;
	_resume = 10;
	_eof_trans = 15;
	_again = 20;
	_test_eof = 30;
	_out = 40;
	while (true) {
	_trigger_goto = false;
	if (_goto_level <= 0) {
	if (p == pe) {
		_goto_level = _test_eof;
		continue;
	}
	if ( this.cs == 0) {
		_goto_level = _out;
		continue;
	}
	}
	if (_goto_level <= _resume) {
	_keys = _lexer_key_offsets[ this.cs];
	_trans = _lexer_index_offsets[ this.cs];
	_klen = _lexer_single_lengths[ this.cs];
	_break_match = false;
	
	do {
	  if (_klen > 0) {
	     _lower = _keys;
	     _upper = _keys + _klen - 1;

	     while (true) {
	        if (_upper < _lower) { break; }
	        _mid = _lower + ( (_upper - _lower) >> 1 );

	        if ( data[p] < _lexer_trans_keys[_mid]) {
	           _upper = _mid - 1;
	        } else if ( data[p] > _lexer_trans_keys[_mid]) {
	           _lower = _mid + 1;
	        } else {
	           _trans += (_mid - _keys);
	           _break_match = true;
	           break;
	        };
	     } /* while */
	     if (_break_match) { break; }
	     _keys += _klen;
	     _trans += _klen;
	  }
	  _klen = _lexer_range_lengths[ this.cs];
	  if (_klen > 0) {
	     _lower = _keys;
	     _upper = _keys + (_klen << 1) - 2;
	     while (true) {
	        if (_upper < _lower) { break; }
	        _mid = _lower + (((_upper-_lower) >> 1) & ~1);
	        if ( data[p] < _lexer_trans_keys[_mid]) {
	          _upper = _mid - 2;
	         } else if ( data[p] > _lexer_trans_keys[_mid+1]) {
	          _lower = _mid + 2;
	        } else {
	          _trans += ((_mid - _keys) >> 1);
	          _break_match = true;
	          break;
	        }
	     } /* while */
	     if (_break_match) { break; }
	     _trans += _klen
	  }
	} while (false);
	_trans = _lexer_indicies[_trans];
	 this.cs = _lexer_trans_targs[_trans];
	if (_lexer_trans_actions[_trans] != 0) {
		_acts = _lexer_trans_actions[_trans];
		_nacts = _lexer_actions[_acts];
		_acts += 1;
		while (_nacts > 0) {
			_nacts -= 1;
			_acts += 1;
			switch (_lexer_actions[_acts - 1]) {
case 0:
/* line 6 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

    this.content_start = p;
    this.current_line = this.line_number;
    this.start_col = p - this.last_newline - (this.keyword+':').length;
  		break;
case 1:
/* line 12 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

    this.current_line = this.line_number;
    this.start_col = p - this.last_newline;
  		break;
case 2:
/* line 17 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

    this.content_start = p;
  		break;
case 3:
/* line 21 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

    var con = this.unindent(
      this.start_col, 
      this.bytesToString(data.slice(this.content_start, this.next_keyword_start-1)).replace(/(\r?\n)?([\t ])*\Z/, '') // TODO .replace(/\"\"\"/mg, '"""')
    );
    this.emit('py_string', con, this.current_line); 
  		break;
case 4:
/* line 29 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

    p = this.store_keyword_content('feature', data, p, eof);
  		break;
case 5:
/* line 33 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

    p = this.store_keyword_content('background', data, p, eof);
  		break;
case 6:
/* line 37 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

    p = this.store_keyword_content('scenario', data, p, eof);
  		break;
case 7:
/* line 41 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

    p = this.store_keyword_content('scenario_outline', data, p, eof);
  		break;
case 8:
/* line 45 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

    p = this.store_keyword_content('examples', data, p, eof);
  		break;
case 9:
/* line 49 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    this.emit('step', this.keyword, con, this.current_line);
  		break;
case 10:
/* line 54 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

    console.log('TODO: store_comment_content');
  		break;
case 11:
/* line 58 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

    console.log('TODO: store_tag_content');
  		break;
case 12:
/* line 62 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

    this.line_number++;
  		break;
case 13:
/* line 66 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

    this.last_newline = p + 1;
  		break;
case 14:
/* line 70 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

    this.keyword_start = this.keyword_start || p;
  		break;
case 15:
/* line 74 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

    this.keyword = this.bytesToString(data.slice(this.keyword_start, p)).replace(/:$/, '');
    this.keyword_start = null;
  		break;
case 16:
/* line 79 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

    this.next_keyword_start = p;
  		break;
case 17:
/* line 83 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

    p = p - 1;
    current_row = [];
    this.current_line = this.line_number;
  		break;
case 18:
/* line 89 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

    this.content_start = p;
  		break;
case 19:
/* line 93 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    current_row.push(con.replace(/\\\|/, "|").replace(/\\n/, "\n").replace(/\\\\/, "\\"));
  		break;
case 20:
/* line 98 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

    this.emit('row', current_row, this.current_line);
  		break;
case 21:
/* line 102 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

    console.log('TODO: end_feature');
  		break;
/* line 1154 "js/lib/gherkin/lexer/i18n/ca.js" */
			} /* action switch */
		}
	}
	if (_trigger_goto) {
		continue;
	}
	}
	if (_goto_level <= _again) {
	if ( this.cs == 0) {
		_goto_level = _out;
		continue;
	}
	p += 1;
	if (p != pe) {
		_goto_level = _resume;
		continue;
	}
	}
	if (_goto_level <= _test_eof) {
	if (p == eof) {
	__acts = _lexer_eof_actions[ this.cs];
	__nacts =  _lexer_actions[__acts];
	__acts += 1;
	while (__nacts > 0) {
		__nacts -= 1;
		__acts += 1;
		switch (_lexer_actions[__acts - 1]) {
case 21:
/* line 102 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */

    console.log('TODO: end_feature');
  		break;
/* line 1187 "js/lib/gherkin/lexer/i18n/ca.js" */
		} /* eof action switch */
	}
	if (_trigger_goto) {
		continue;
	}
}
	}
	if (_goto_level <= _out) {
		break;
	}
	}
	}

/* line 158 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/ca.js.rl" */
};

Lexer.prototype.bytesToString = function(bytes) {
  if(typeof bytes.write == 'function') {
    // Node.js
    return bytes.toString('utf-8');
  } else {
    var result = "";
    for(var b in bytes) {
      result += String.fromCharCode(bytes[b]);
    }
    return result;
  }
}

Lexer.prototype.unindent = function(startcol, text) {
  startcol = startcol || 0;
  return text.replace(new RegExp('^[\t ]{0,' + startcol + '}', 'gm'), ''); 
};

Lexer.prototype.store_keyword_content = function(event, data, p, eof) {
  var end_point = (!this.next_keyword_start || (p == eof)) ? p : this.next_keyword_start;
  var content = this.unindent(this.start_col + 2, this.bytesToString(data.slice(this.content_start, end_point))).trimRight();
  var content_lines = content.split("\n")
  var name = content_lines.shift() || "";
  name = name.trim();
  var description = content_lines.join("\n");
  this.emit(event, this.keyword, name, description, this.current_line);
  var nks = this.next_keyword_start;
  this.next_keyword_start = null;
  return nks ? nks - 1 : p;
};

exports.Lexer = Lexer;

})();