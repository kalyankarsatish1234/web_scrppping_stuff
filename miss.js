
//that script check website  plotcount and our file datat plot count.
// Define the objects to compare
const data1 = [
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399010000,
    "VillageName": "अणस्पुरे",
    "PlotTotalCountWebsite": 164
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398820000,
    "VillageName": "अलसुरे",
    "PlotTotalCountWebsite": 650
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398830000,
    "VillageName": "अलसुरे खुर्द",
    "PlotTotalCountWebsite": 12
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399250000,
    "VillageName": "असगणी",
    "PlotTotalCountWebsite": 968
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399260000,
    "VillageName": "असगणी मोहल्ला",
    "PlotTotalCountWebsite": 213
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398450000,
    "VillageName": "अस्तान",
    "PlotTotalCountWebsite": 1350
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397790000,
    "VillageName": "अैनी",
    "PlotTotalCountWebsite": 1078
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399200000,
    "VillageName": "अंजणी",
    "PlotTotalCountWebsite": 247
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398180000,
    "VillageName": "आपेडे",
    "PlotTotalCountWebsite": 1080
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398560000,
    "VillageName": "आबवली",
    "PlotTotalCountWebsite": 2117
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398970000,
    "VillageName": "आमशेत कर्जी",
    "PlotTotalCountWebsite": 5
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399270000,
    "VillageName": "आवाशी",
    "PlotTotalCountWebsite": 105
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399170000,
    "VillageName": "आष्टी",
    "PlotTotalCountWebsite": 223
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399180000,
    "VillageName": "आष्टी बुद्रुक",
    "PlotTotalCountWebsite": 154
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399190000,
    "VillageName": "आष्टी मोहल्ला",
    "PlotTotalCountWebsite": 127
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399500000,
    "VillageName": "आंबडस",
    "PlotTotalCountWebsite": 1163
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397720000,
    "VillageName": "आंबये",
    "PlotTotalCountWebsite": 263
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398160000,
    "VillageName": "उधळे खुर्द",
    "PlotTotalCountWebsite": 546
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398170000,
    "VillageName": "उधळे बुद्रक",
    "PlotTotalCountWebsite": 105
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398600000,
    "VillageName": "एैनवरे",
    "PlotTotalCountWebsite": 79
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398340000,
    "VillageName": "एैनवली",
    "PlotTotalCountWebsite": 1067
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398960000,
    "VillageName": "कर्जी",
    "PlotTotalCountWebsite": 156
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398940000,
    "VillageName": "कर्जी बुद्रुक",
    "PlotTotalCountWebsite": 6
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398270000,
    "VillageName": "कर्टेल",
    "PlotTotalCountWebsite": 1510
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398370000,
    "VillageName": "कलंबणी खुर्द",
    "PlotTotalCountWebsite": 113
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398150000,
    "VillageName": "कळंबणी बुद्रुक",
    "PlotTotalCountWebsite": 190
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397990000,
    "VillageName": "कशेडी",
    "PlotTotalCountWebsite": 161
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398030000,
    "VillageName": "कसबा नातू",
    "PlotTotalCountWebsite": 129
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399720000,
    "VillageName": "काजवे वाडी",
    "PlotTotalCountWebsite": 24
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399730000,
    "VillageName": "काडवली",
    "PlotTotalCountWebsite": 214
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399570000,
    "VillageName": "कावळे",
    "PlotTotalCountWebsite": 106
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399560000,
    "VillageName": "कासई",
    "PlotTotalCountWebsite": 189
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398390000,
    "VillageName": "कांदोशी",
    "PlotTotalCountWebsite": 105
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398400000,
    "VillageName": "किंजळे तर्फ खेड",
    "PlotTotalCountWebsite": 62
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398060000,
    "VillageName": "किंजळे तर्फ नातू",
    "PlotTotalCountWebsite": 79
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398330000,
    "VillageName": "कुडोशी",
    "PlotTotalCountWebsite": 1217
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399840000,
    "VillageName": "कुरवल गावठण",
    "PlotTotalCountWebsite": 26
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399780000,
    "VillageName": "कुरवळ खेड",
    "PlotTotalCountWebsite": 78
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399790000,
    "VillageName": "कुरवळ जावळी",
    "PlotTotalCountWebsite": 113
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398650000,
    "VillageName": "कुळंवंडी",
    "PlotTotalCountWebsite": 187
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399750000,
    "VillageName": "कुंभवली",
    "PlotTotalCountWebsite": 41
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398670000,
    "VillageName": "कुंभाड",
    "PlotTotalCountWebsite": 203
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399710000,
    "VillageName": "केळणे",
    "PlotTotalCountWebsite": 177
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399400000,
    "VillageName": "कोतवली",
    "PlotTotalCountWebsite": 899
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398850000,
    "VillageName": "कोरेगाव",
    "PlotTotalCountWebsite": 1150
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398860000,
    "VillageName": "कोरेगांव खुर्द",
    "PlotTotalCountWebsite": 38
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397710000,
    "VillageName": "कोंडवाडी",
    "PlotTotalCountWebsite": 587
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399090000,
    "VillageName": "कोंडीवली",
    "PlotTotalCountWebsite": 988
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399100000,
    "VillageName": "कोंडीवली खुर्द",
    "PlotTotalCountWebsite": 163
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398020000,
    "VillageName": "खवटी",
    "PlotTotalCountWebsite": 215
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398740000,
    "VillageName": "खारी",
    "PlotTotalCountWebsite": 390
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398520000,
    "VillageName": "खालची हुंबरी",
    "PlotTotalCountWebsite": 1212
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397960000,
    "VillageName": "खेड[भडगांव]",
    "PlotTotalCountWebsite": 219
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399360000,
    "VillageName": "खोपी",
    "PlotTotalCountWebsite": 440
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399350000,
    "VillageName": "खोपी तांबडवाडी",
    "PlotTotalCountWebsite": 32
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399290000,
    "VillageName": "गणवाल",
    "PlotTotalCountWebsite": 65
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399300000,
    "VillageName": "गुणदे",
    "PlotTotalCountWebsite": 267
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399410000,
    "VillageName": "घाणेखुंट",
    "PlotTotalCountWebsite": 141
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397740000,
    "VillageName": "घेरापालगड",
    "PlotTotalCountWebsite": 182
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398480000,
    "VillageName": "घेरा रसाळगड",
    "PlotTotalCountWebsite": 159
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398210000,
    "VillageName": "घेरा सुमारगड",
    "PlotTotalCountWebsite": 31
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398070000,
    "VillageName": "घोगरे",
    "PlotTotalCountWebsite": 102
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397840000,
    "VillageName": "चाकाळे",
    "PlotTotalCountWebsite": 116
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398460000,
    "VillageName": "चाटव",
    "PlotTotalCountWebsite": 49
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399760000,
    "VillageName": "चांदेवाडी",
    "PlotTotalCountWebsite": 250
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399480000,
    "VillageName": "चिरणी",
    "PlotTotalCountWebsite": 199
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399490000,
    "VillageName": "चिरणी वरची वाडी",
    "PlotTotalCountWebsite": 14
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397850000,
    "VillageName": "चिंचघर",
    "PlotTotalCountWebsite": 188
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398130000,
    "VillageName": "चिंचवली",
    "PlotTotalCountWebsite": 1169
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398280000,
    "VillageName": "चिंचवाडी",
    "PlotTotalCountWebsite": 83
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399630000,
    "VillageName": "चोरवणे",
    "PlotTotalCountWebsite": 200
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399640000,
    "VillageName": "चोरवणे उतेकर वाडी",
    "PlotTotalCountWebsite": 15
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399070000,
    "VillageName": "चौगुले मोहल्ल",
    "PlotTotalCountWebsite": 100
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397730000,
    "VillageName": "जामगे",
    "PlotTotalCountWebsite": 148
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398760000,
    "VillageName": "जांबुर्डे",
    "PlotTotalCountWebsite": 545
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398640000,
    "VillageName": "जांभुळगाव",
    "PlotTotalCountWebsite": 52
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398220000,
    "VillageName": "जैतापुर",
    "PlotTotalCountWebsite": 1117
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399740000,
    "VillageName": "झगडेवाडी",
    "PlotTotalCountWebsite": 13
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399280000,
    "VillageName": "ढाकरवाडी",
    "PlotTotalCountWebsite": 37
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398950000,
    "VillageName": "तळघर",
    "PlotTotalCountWebsite": 758
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399610000,
    "VillageName": "तळवट खेड",
    "PlotTotalCountWebsite": 109
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399600000,
    "VillageName": "तळवट जावळी",
    "PlotTotalCountWebsite": 103
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399580000,
    "VillageName": "तळवटपाल",
    "PlotTotalCountWebsite": 120
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398230000,
    "VillageName": "तळे",
    "PlotTotalCountWebsite": 234
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397810000,
    "VillageName": "तिसे",
    "PlotTotalCountWebsite": 190
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397800000,
    "VillageName": "तिसे खुर्द",
    "PlotTotalCountWebsite": 25
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398580000,
    "VillageName": "तिसंगी",
    "PlotTotalCountWebsite": 251
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397980000,
    "VillageName": "तुळशी खुर्द",
    "PlotTotalCountWebsite": 94
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397970000,
    "VillageName": "तुळशी बुद्रुक",
    "PlotTotalCountWebsite": 132
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399060000,
    "VillageName": "तुंबाड",
    "PlotTotalCountWebsite": 1384
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398700000,
    "VillageName": "दयाळ",
    "PlotTotalCountWebsite": 1688
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398080000,
    "VillageName": "दहीवली",
    "PlotTotalCountWebsite": 136
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399230000,
    "VillageName": "दाभीळ",
    "PlotTotalCountWebsite": 784
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398010000,
    "VillageName": "दिवाण खवटी",
    "PlotTotalCountWebsite": 125
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398720000,
    "VillageName": "दिवालेवाडी",
    "PlotTotalCountWebsite": 179
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398510000,
    "VillageName": "देवघर",
    "PlotTotalCountWebsite": 235
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397920000,
    "VillageName": "देवसडे",
    "PlotTotalCountWebsite": 543
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398440000,
    "VillageName": "धवडे",
    "PlotTotalCountWebsite": 953
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397940000,
    "VillageName": "धाकटी सुसेरी",
    "PlotTotalCountWebsite": 58
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399450000,
    "VillageName": "धामण देवी",
    "PlotTotalCountWebsite": 160
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397750000,
    "VillageName": "धामणी",
    "PlotTotalCountWebsite": 1179
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399590000,
    "VillageName": "धामणंद",
    "PlotTotalCountWebsite": 370
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398590000,
    "VillageName": "नवानगर",
    "PlotTotalCountWebsite": 2
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398730000,
    "VillageName": "नांदगाव",
    "PlotTotalCountWebsite": 998
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398710000,
    "VillageName": "नांदगांव मोहल्ला",
    "PlotTotalCountWebsite": 50
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398430000,
    "VillageName": "नांदिवली",
    "PlotTotalCountWebsite": 1469
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399140000,
    "VillageName": "निगडे",
    "PlotTotalCountWebsite": 532
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398240000,
    "VillageName": "निऴवणे",
    "PlotTotalCountWebsite": 796
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398840000,
    "VillageName": "निळीक",
    "PlotTotalCountWebsite": 627
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399620000,
    "VillageName": "निवे",
    "PlotTotalCountWebsite": 78
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399030000,
    "VillageName": "पन्हाळजे",
    "PlotTotalCountWebsite": 140
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399020000,
    "VillageName": "पन्हाळजे खूर्द",
    "PlotTotalCountWebsite": 14
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398000000,
    "VillageName": "पाखरवाडी",
    "PlotTotalCountWebsite": 21
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398110000,
    "VillageName": "पुरे खुर्द",
    "PlotTotalCountWebsite": 43
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398120000,
    "VillageName": "पुरे बुद्रुक",
    "PlotTotalCountWebsite": 71
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397770000,
    "VillageName": "पोयनार",
    "PlotTotalCountWebsite": 256
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397760000,
    "VillageName": "पोयनार खुर्द",
    "PlotTotalCountWebsite": 18
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399670000,
    "VillageName": "पोसरे खुर्द",
    "PlotTotalCountWebsite": 68
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399680000,
    "VillageName": "पोसरे बुद्रुक",
    "PlotTotalCountWebsite": 157
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397830000,
    "VillageName": "प्रभुवाडी",
    "PlotTotalCountWebsite": 36
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397880000,
    "VillageName": "फलसोंडा",
    "PlotTotalCountWebsite": 16
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397890000,
    "VillageName": "फुरुस",
    "PlotTotalCountWebsite": 246
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397870000,
    "VillageName": "फुरुस आमशेत",
    "PlotTotalCountWebsite": 38
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397910000,
    "VillageName": "फुरुस गावठण",
    "PlotTotalCountWebsite": 27
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399080000,
    "VillageName": "बहिरवली",
    "PlotTotalCountWebsite": 2659
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398660000,
    "VillageName": "बिजघर",
    "PlotTotalCountWebsite": 229
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398380000,
    "VillageName": "बीरमणी",
    "PlotTotalCountWebsite": 70
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398140000,
    "VillageName": "बोरघर",
    "PlotTotalCountWebsite": 462
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399130000,
    "VillageName": "बोरज",
    "PlotTotalCountWebsite": 745
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398300000,
    "VillageName": "भरणा नाका",
    "PlotTotalCountWebsite": 91
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398290000,
    "VillageName": "भरणे",
    "PlotTotalCountWebsite": 453
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399530000,
    "VillageName": "भेलसई",
    "PlotTotalCountWebsite": 398
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398800000,
    "VillageName": "भोस्ते",
    "PlotTotalCountWebsite": 377
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398750000,
    "VillageName": "भोस्ते बुद्रुक",
    "PlotTotalCountWebsite": 56
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398790000,
    "VillageName": "भोस्ते मोहल्ला",
    "PlotTotalCountWebsite": 48
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398570000,
    "VillageName": "महालुंगे",
    "PlotTotalCountWebsite": 739
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398630000,
    "VillageName": "माणी",
    "PlotTotalCountWebsite": 991
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398190000,
    "VillageName": "मांडवे",
    "PlotTotalCountWebsite": 205
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399310000,
    "VillageName": "मिर्ले",
    "PlotTotalCountWebsite": 131
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397820000,
    "VillageName": "मुरडे",
    "PlotTotalCountWebsite": 225
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398980000,
    "VillageName": "मुळगांव",
    "PlotTotalCountWebsite": 20
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399770000,
    "VillageName": "मुसाड",
    "PlotTotalCountWebsite": 2380
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398910000,
    "VillageName": "मुंबके",
    "PlotTotalCountWebsite": 1082
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399210000,
    "VillageName": "मेटे",
    "PlotTotalCountWebsite": 138
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398780000,
    "VillageName": "मोरवंडे",
    "PlotTotalCountWebsite": 949
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398770000,
    "VillageName": "मोरवंडे खुर्द",
    "PlotTotalCountWebsite": 60
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398500000,
    "VillageName": "मोहाने",
    "PlotTotalCountWebsite": 474
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398930000,
    "VillageName": "राजवेल",
    "PlotTotalCountWebsite": 935
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399240000,
    "VillageName": "लवेल",
    "PlotTotalCountWebsite": 165
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399470000,
    "VillageName": "लोटे",
    "PlotTotalCountWebsite": 171
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398350000,
    "VillageName": "वडगाव खुर्द",
    "PlotTotalCountWebsite": 101
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398360000,
    "VillageName": "वडगावबुद्रूक",
    "PlotTotalCountWebsite": 99
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398550000,
    "VillageName": "वरवली",
    "PlotTotalCountWebsite": 1184
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398200000,
    "VillageName": "वाडी जैतापूर",
    "PlotTotalCountWebsite": 41
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398470000,
    "VillageName": "वाडीबिड",
    "PlotTotalCountWebsite": 319
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398090000,
    "VillageName": "वाडी बेलदार",
    "PlotTotalCountWebsite": 29
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398420000,
    "VillageName": "वाडी मालदे",
    "PlotTotalCountWebsite": 35
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398260000,
    "VillageName": "वाळंजवाडी",
    "PlotTotalCountWebsite": 54
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399810000,
    "VillageName": "वावे तर्फे खेड",
    "PlotTotalCountWebsite": 111
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398050000,
    "VillageName": "वावे तर्फे नातू",
    "PlotTotalCountWebsite": 244
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398810000,
    "VillageName": "विराची वाडी",
    "PlotTotalCountWebsite": 152
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398410000,
    "VillageName": "विहाळी",
    "PlotTotalCountWebsite": 79
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397950000,
    "VillageName": "वेताळवाडी",
    "PlotTotalCountWebsite": 28
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398310000,
    "VillageName": "वेरळ",
    "PlotTotalCountWebsite": 1083
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399380000,
    "VillageName": "शिरगाव",
    "PlotTotalCountWebsite": 212
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399390000,
    "VillageName": "शिरगाव खुर्द",
    "PlotTotalCountWebsite": 46
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398250000,
    "VillageName": "शिरवली",
    "PlotTotalCountWebsite": 697
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398920000,
    "VillageName": "शिर्शी",
    "PlotTotalCountWebsite": 864
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399150000,
    "VillageName": "शिव खुर्द",
    "PlotTotalCountWebsite": 755
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397700000,
    "VillageName": "शिवतर",
    "PlotTotalCountWebsite": 2284
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399110000,
    "VillageName": "शिव बुद्रूक",
    "PlotTotalCountWebsite": 191
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399120000,
    "VillageName": "शिव मोहल्ला",
    "PlotTotalCountWebsite": 433
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398100000,
    "VillageName": "शिंगरी",
    "PlotTotalCountWebsite": 78
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398690000,
    "VillageName": "शेरवल",
    "PlotTotalCountWebsite": 693
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398680000,
    "VillageName": "शेरवल खुर्द",
    "PlotTotalCountWebsite": 779
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399330000,
    "VillageName": "शेल्डी",
    "PlotTotalCountWebsite": 153
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398540000,
    "VillageName": "सणघर",
    "PlotTotalCountWebsite": 514
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398990000,
    "VillageName": "सवणस",
    "PlotTotalCountWebsite": 214
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399000000,
    "VillageName": "सवणस खुर्द",
    "PlotTotalCountWebsite": 47
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398620000,
    "VillageName": "सवेणी",
    "PlotTotalCountWebsite": 1509
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399660000,
    "VillageName": "साखर",
    "PlotTotalCountWebsite": 149
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397860000,
    "VillageName": "साखरोली",
    "PlotTotalCountWebsite": 1819
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397780000,
    "VillageName": "साखरोली खुर्द",
    "PlotTotalCountWebsite": 242
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399220000,
    "VillageName": "सात्वीणगांव",
    "PlotTotalCountWebsite": 120
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399650000,
    "VillageName": "सार्पिली",
    "PlotTotalCountWebsite": 846
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397900000,
    "VillageName": "सुकदर",
    "PlotTotalCountWebsite": 1167
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398320000,
    "VillageName": "सुकीवली",
    "PlotTotalCountWebsite": 1727
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030397930000,
    "VillageName": "सुसेरी",
    "PlotTotalCountWebsite": 92
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399430000,
    "VillageName": "सोनगांव",
    "PlotTotalCountWebsite": 133
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398490000,
    "VillageName": "सोंडये",
    "PlotTotalCountWebsite": 773
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398890000,
    "VillageName": "संगलट",
    "PlotTotalCountWebsite": 629
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398870000,
    "VillageName": "संगलट बौध्दवाडी",
    "PlotTotalCountWebsite": 102
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398880000,
    "VillageName": "संगलट मराठवाडी",
    "PlotTotalCountWebsite": 156
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398900000,
    "VillageName": "संगलट मोहल्ला",
    "PlotTotalCountWebsite": 178
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398530000,
    "VillageName": "हुंबरी",
    "PlotTotalCountWebsite": 780
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030398610000,
    "VillageName": "हेदली",
    "PlotTotalCountWebsite": 1254
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399050000,
    "VillageName": "होडखाड",
    "PlotTotalCountWebsite": 104
  },
  {
    "District": "Ratnagiri",
    "Taluka": "Khed",
    "Code": 273200030399040000,
    "VillageName": "होडखाड खुर्द",
    "PlotTotalCountWebsite": 7
  }
];
  
  const data2 = {
    '273200030399010000': { villageName: 'अणस्पुरे', plotCount: 164 },
    '273200030398820000': { villageName: 'अलसुरे', plotCount: 650 },  
    '273200030398830000': { villageName: 'अलसुरे', plotCount: 12 },   
    '273200030399250000': { villageName: 'असगणी', plotCount: 968 },   
    '273200030399260000': { villageName: 'असगणी', plotCount: 213 },   
    '273200030398450000': { villageName: 'अस्तान', plotCount: 1350 }, 
    '273200030397790000': { villageName: 'अैनी', plotCount: 1078 },   
    '273200030399200000': { villageName: 'अंजणी', plotCount: 247 },   
    '273200030398180000': { villageName: 'आपेडे', plotCount: 1080 },  
    '273200030398560000': { villageName: 'आबवली', plotCount: 2117 },  
    '273200030398970000': { villageName: 'आमशेत', plotCount: 5 },     
    '273200030399270000': { villageName: 'आवाशी', plotCount: 105 },   
    '273200030399170000': { villageName: 'आष्टी', plotCount: 223 },   
    '273200030399180000': { villageName: 'आष्टी', plotCount: 154 },   
    '273200030399190000': { villageName: 'आष्टी', plotCount: 127 },   
    '273200030399500000': { villageName: 'आंबडस', plotCount: 1163 },  
    '273200030397720000': { villageName: 'आंबये', plotCount: 263 },   
    '273200030398160000': { villageName: 'उधळे', plotCount: 546 },    
    '273200030398170000': { villageName: 'उधळे', plotCount: 105 },    
    '273200030398600000': { villageName: 'एैनवरे', plotCount: 79 },   
    '273200030398340000': { villageName: 'एैनवली', plotCount: 1067 },
    '273200030398960000': { villageName: 'कर्जी', plotCount: 156 },
    '273200030398940000': { villageName: 'कर्जी', plotCount: 6 },
    '273200030398270000': { villageName: 'कर्टेल', plotCount: 1510 },
    '273200030398370000': { villageName: 'कलंबणी', plotCount: 113 },
    '273200030398150000': { villageName: 'कळंबणी', plotCount: 190 },
    '273200030397990000': { villageName: 'कशेडी', plotCount: 161 },
    '273200030398030000': { villageName: 'कसबा', plotCount: 129 },
    '273200030399720000': { villageName: 'काजवे', plotCount: 24 },
    '273200030399730000': { villageName: 'काडवली', plotCount: 214 },
    '273200030399570000': { villageName: 'कावळे', plotCount: 106 },
    '273200030399560000': { villageName: 'कासई', plotCount: 189 },
    '273200030398390000': { villageName: 'कांदोशी', plotCount: 105 },
    '273200030398400000': { villageName: 'किंजळे', plotCount: 62 },
    '273200030398060000': { villageName: 'किंजळे', plotCount: 79 },
    '273200030398330000': { villageName: 'कुडोशी', plotCount: 1217 },
    '273200030399840000': { villageName: 'कुरवल', plotCount: 26 },
    '273200030399780000': { villageName: 'कुरवळ', plotCount: 78 },
    '273200030399790000': { villageName: 'कुरवळ', plotCount: 113 },
    '273200030398650000': { villageName: 'कुळंवंडी', plotCount: 187 },
    '273200030399750000': { villageName: 'कुंभवली', plotCount: 41 },
    '273200030398670000': { villageName: 'कुंभाड', plotCount: 203 },
    '273200030399710000': { villageName: 'केळणे', plotCount: 177 },
    '273200030399400000': { villageName: 'कोतवली', plotCount: 899 },
    '273200030398850000': { villageName: 'कोरेगाव', plotCount: 1150 },
    '273200030398860000': { villageName: 'कोरेगांव', plotCount: 38 },
    '273200030397710000': { villageName: 'कोंडवाडी', plotCount: 587 },
    '273200030399090000': { villageName: 'कोंडीवली', plotCount: 988 },
    '273200030399100000': { villageName: 'कोंडीवली', plotCount: 163 },
    '273200030398020000': { villageName: 'खवटी', plotCount: 215 },
    '273200030398740000': { villageName: 'खारी', plotCount: 390 },
    '273200030398520000': { villageName: 'खालची', plotCount: 1212 },
    '273200030397960000': { villageName: 'खेड[भडगांव]', plotCount: 219 },
    '273200030399360000': { villageName: 'खोपी', plotCount: 440 },
    '273200030399350000': { villageName: 'खोपी', plotCount: 32 },
    '273200030399290000': { villageName: 'गणवाल', plotCount: 65 },
    '273200030399300000': { villageName: 'गुणदे', plotCount: 267 },
    '273200030399410000': { villageName: 'घाणेखुंट', plotCount: 141 },
    '273200030397740000': { villageName: 'घेरापालगड', plotCount: 182 },
    '273200030398480000': { villageName: 'घेरा', plotCount: 159 },
    '273200030398210000': { villageName: 'घेरा', plotCount: 31 },
    '273200030398070000': { villageName: 'घोगरे', plotCount: 102 },
    '273200030397840000': { villageName: 'चाकाळे', plotCount: 116 },
    '273200030398460000': { villageName: 'चाटव', plotCount: 49 },
    '273200030399760000': { villageName: 'चांदेवाडी', plotCount: 250 },
    '273200030399480000': { villageName: 'चिरणी', plotCount: 199 },
    '273200030399490000': { villageName: 'चिरणी', plotCount: 14 },
    '273200030397850000': { villageName: 'चिंचघर', plotCount: 188 },
    '273200030398130000': { villageName: 'चिंचवली', plotCount: 1169 },
    '273200030398280000': { villageName: 'चिंचवाडी', plotCount: 83 },
    '273200030399630000': { villageName: 'चोरवणे', plotCount: 200 },
    '273200030399640000': { villageName: 'चोरवणे', plotCount: 15 },
    '273200030399070000': { villageName: 'चौगुले', plotCount: 100 },
    '273200030397730000': { villageName: 'जामगे', plotCount: 148 },
    '273200030398760000': { villageName: 'जांबुर्डे', plotCount: 545 },
    '273200030398640000': { villageName: 'जांभुळगाव', plotCount: 52 },
    '273200030398220000': { villageName: 'जैतापुर', plotCount: 1117 },
    '273200030399740000': { villageName: 'झगडेवाडी', plotCount: 13 },
    '273200030399280000': { villageName: 'ढाकरवाडी', plotCount: 37 },
    '273200030398950000': { villageName: 'तळघर', plotCount: 758 },
    '273200030399610000': { villageName: 'तळवट', plotCount: 109 },
    '273200030399600000': { villageName: 'तळवट', plotCount: 103 },
    '273200030399580000': { villageName: 'तळवटपाल', plotCount: 120 },
    '273200030398230000': { villageName: 'तळे', plotCount: 234 },
    '273200030397810000': { villageName: 'तिसे', plotCount: 190 },
    '273200030397800000': { villageName: 'तिसे', plotCount: 25 },
    '273200030398580000': { villageName: 'तिसंगी', plotCount: 251 },
    '273200030397980000': { villageName: 'तुळशी', plotCount: 94 },
    '273200030397970000': { villageName: 'तुळशी', plotCount: 132 },
    '273200030399060000': { villageName: 'तुंबाड', plotCount: 1384 },
    '273200030398700000': { villageName: 'दयाळ', plotCount: 1688 },
    '273200030398080000': { villageName: 'दहीवली', plotCount: 136 },
    '273200030399230000': { villageName: 'दाभीळ', plotCount: 784 },
    '273200030398010000': { villageName: 'दिवाण', plotCount: 125 },
    '273200030398720000': { villageName: 'दिवालेवाडी', plotCount: 179 },
    '273200030398510000': { villageName: 'देवघर', plotCount: 235 },
    '273200030397920000': { villageName: 'देवसडे', plotCount: 543 },
    '273200030398440000': { villageName: 'धवडे', plotCount: 953 },
    '273200030397940000': { villageName: 'धाकटी', plotCount: 58 },
    '273200030399450000': { villageName: 'धामण', plotCount: 160 },
    '273200030397750000': { villageName: 'धामणी', plotCount: 1179 },
    '273200030399590000': { villageName: 'धामणंद', plotCount: 370 },
    '273200030398590000': { villageName: 'नवानगर', plotCount: 2 },
    '273200030398730000': { villageName: 'नांदगाव', plotCount: 998 },
    '273200030398710000': { villageName: 'नांदगांव', plotCount: 50 },
    '273200030399080000': { villageName: 'बहिरवली', plotCount: 2087 },
    '273200030399140000': { villageName: 'निगडे', plotCount: 532 },
    '273200030398240000': { villageName: 'निऴवणे', plotCount: 796 },
    '273200030398840000': { villageName: 'निळीक', plotCount: 627 },
    '273200030399620000': { villageName: 'निवे', plotCount: 78 },
    '273200030399030000': { villageName: 'पन्हाळजे', plotCount: 140 },
    '273200030399020000': { villageName: 'पन्हाळजे', plotCount: 14 },
    '273200030398000000': { villageName: 'पाखरवाडी', plotCount: 21 },
    '273200030398110000': { villageName: 'पुरे', plotCount: 43 },
    '273200030398120000': { villageName: 'पुरे', plotCount: 71 },
    '273200030397770000': { villageName: 'पोयनार', plotCount: 256 },
    '273200030397760000': { villageName: 'पोयनार', plotCount: 18 },
    '273200030399670000': { villageName: 'पोसरे', plotCount: 68 },
    '273200030399680000': { villageName: 'पोसरे', plotCount: 157 },
    '273200030397830000': { villageName: 'प्रभुवाडी', plotCount: 36 },
    '273200030397880000': { villageName: 'फलसोंडा', plotCount: 16 },
    '273200030397890000': { villageName: 'फुरुस', plotCount: 246 },
    '273200030397870000': { villageName: 'फुरुस', plotCount: 38 },
    '273200030397910000': { villageName: 'फुरुस', plotCount: 27 },
    '273200030398660000': { villageName: 'बिजघर', plotCount: 229 },
    '273200030398380000': { villageName: 'बीरमणी', plotCount: 70 },
    '273200030398140000': { villageName: 'बोरघर', plotCount: 462 },
    '273200030399130000': { villageName: 'बोरज', plotCount: 745 },
    '273200030398300000': { villageName: 'भरणा', plotCount: 91 },
    '273200030398290000': { villageName: 'भरणे', plotCount: 453 },
    '273200030399530000': { villageName: 'भेलसई', plotCount: 398 },
    '273200030398800000': { villageName: 'भोस्ते', plotCount: 377 },
    '273200030398750000': { villageName: 'भोस्ते', plotCount: 56 },
    '273200030398790000': { villageName: 'भोस्ते', plotCount: 48 },
    '273200030398570000': { villageName: 'महालुंगे', plotCount: 739 },
    '273200030398630000': { villageName: 'माणी', plotCount: 991 },
    '273200030398190000': { villageName: 'मांडवे', plotCount: 205 },
    '273200030399310000': { villageName: 'मिर्ले', plotCount: 131 },
    '273200030397820000': { villageName: 'मुरडे', plotCount: 225 },
    '273200030398980000': { villageName: 'मुळगांव', plotCount: 20 },
    '273200030399770000': { villageName: 'मुसाड', plotCount: 2380 },
    '273200030398910000': { villageName: 'मुंबके', plotCount: 1082 },
    '273200030399210000': { villageName: 'मेटे', plotCount: 138 },
    '273200030398780000': { villageName: 'मोरवंडे', plotCount: 949 },
    '273200030398770000': { villageName: 'मोरवंडे', plotCount: 60 },
    '273200030398500000': { villageName: 'मोहाने', plotCount: 474 },
    '273200030398930000': { villageName: 'राजवेल', plotCount: 935 },
    '273200030399240000': { villageName: 'लवेल', plotCount: 165 },
    '273200030399470000': { villageName: 'लोटे', plotCount: 171 },
    '273200030398350000': { villageName: 'वडगाव', plotCount: 101 },
    '273200030398360000': { villageName: 'वडगावबुद्रूक', plotCount: 99 },
    '273200030398550000': { villageName: 'वरवली', plotCount: 1184 },
    '273200030398200000': { villageName: 'वाडी', plotCount: 41 },
    '273200030398470000': { villageName: 'वाडीबिड', plotCount: 319 },
    '273200030398090000': { villageName: 'वाडी', plotCount: 29 },
    '273200030398420000': { villageName: 'वाडी', plotCount: 35 },
    '273200030398260000': { villageName: 'वाळंजवाडी', plotCount: 54 },
    '273200030399810000': { villageName: 'वावे', plotCount: 111 },
    '273200030398050000': { villageName: 'वावे', plotCount: 244 },
    '273200030398810000': { villageName: 'विराची', plotCount: 152 },
    '273200030398410000': { villageName: 'विहाळी', plotCount: 79 },
    '273200030397950000': { villageName: 'वेताळवाडी', plotCount: 28 },
    '273200030398310000': { villageName: 'वेरळ', plotCount: 1083 },
    '273200030399380000': { villageName: 'शिरगाव', plotCount: 212 },
    '273200030399390000': { villageName: 'शिरगाव', plotCount: 46 },
    '273200030398250000': { villageName: 'शिरवली', plotCount: 697 },
    '273200030398920000': { villageName: 'शिर्शी', plotCount: 864 },
    '273200030399150000': { villageName: 'शिव', plotCount: 755 },
    '273200030397700000': { villageName: 'शिवतर', plotCount: 2284 },
    '273200030399110000': { villageName: 'शिव', plotCount: 191 },
    '273200030399120000': { villageName: 'शिव', plotCount: 433 },
    '273200030398100000': { villageName: 'शिंगरी', plotCount: 78 },
    '273200030398690000': { villageName: 'शेरवल', plotCount: 693 },
    '273200030398680000': { villageName: 'शेरवल', plotCount: 779 },
    '273200030399330000': { villageName: 'शेल्डी', plotCount: 153 },
    '273200030398540000': { villageName: 'सणघर', plotCount: 514 },
    '273200030398990000': { villageName: 'सवणस', plotCount: 214 },
    '273200030399000000': { villageName: 'सवणस', plotCount: 47 },
    '273200030398620000': { villageName: 'सवेणी', plotCount: 1509 },
    '273200030399660000': { villageName: 'साखर', plotCount: 149 },
    '273200030397860000': { villageName: 'साखरोली', plotCount: 1819 },
    '273200030397780000': { villageName: 'साखरोली', plotCount: 242 },
    '273200030399220000': { villageName: 'सात्वीणगांव', plotCount: 120 },
    '273200030399650000': { villageName: 'सार्पिली', plotCount: 846 },
    '273200030397900000': { villageName: 'सुकदर', plotCount: 1167 },
    '273200030398320000': { villageName: 'सुकीवली', plotCount: 1727 },
    '273200030397930000': { villageName: 'सुसेरी', plotCount: 92 },
    '273200030399430000': { villageName: 'सोनगांव', plotCount: 133 },
    '273200030398490000': { villageName: 'सोंडये', plotCount: 773 },
    '273200030398890000': { villageName: 'संगलट', plotCount: 629 },
    '273200030398870000': { villageName: 'संगलट', plotCount: 102 },
    '273200030398880000': { villageName: 'संगलट', plotCount: 156 },
    '273200030398900000': { villageName: 'संगलट', plotCount: 178 },
    '273200030398530000': { villageName: 'हुंबरी', plotCount: 780 },
    '273200030398610000': { villageName: 'हेदली', plotCount: 1254 },
    '273200030399050000': { villageName: 'होडखाड', plotCount: 104 },
    '273200030399040000': { villageName: 'होडखाड', plotCount: 7 }
  };
  // Function to compare PlotTotalCountWebsite and plotCount, and return the result
  function comparePlotCounts() {
    const doneResults = {};
    const missingResults = {};
  
    // Loop through each entry in data1 to compare
    data1.forEach(item => {
      const code = item.Code;
      const plotCountWebsite = item.PlotTotalCountWebsite;
  
      // Check if the code exists in data2
      const data2Entry = data2[code];
  
      // If the code exists in data2, compare the counts
      if (data2Entry) {
        const plotCountData2 = data2Entry.plotCount;
        const status = plotCountWebsite === plotCountData2 ? 'Done' : 'Missing';
  
        if (status === 'Done') {
          doneResults[code] = {
            villageName: data2Entry.villageName,
            plotCount: plotCountData2,
            status: status
          };
        } else {
          missingResults[code] = {
            villageName: data2Entry.villageName,
            plotCount: plotCountData2,
            status: status
          };
        }
      } else {
        // If the code does not exist in data2, show missing status with undefined values
        missingResults[code] = {
          villageName: undefined,
          plotCount: undefined,
          status: 'Missing'
        };
      }
    });
  
    return { doneResults, missingResults };
  }
  
  // Call the function and output the result
  const { doneResults, missingResults } = comparePlotCounts();
  
  console.log('Done Results:');
  console.log(doneResults);
  
  console.log('+++++++++++++++++++++++++++++'); 
  
  console.log('Missing Results:');
  console.log(missingResults);
  
