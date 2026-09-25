var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Soil_Bantul_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Soil_Bantul<br />\
    <img src="styles/legend/Soil_Bantul_1_0.png" /> 0<br />\
    <img src="styles/legend/Soil_Bantul_1_1.png" /> 1<br />\
    <img src="styles/legend/Soil_Bantul_1_2.png" /> 2<br />\
    <img src="styles/legend/Soil_Bantul_1_3.png" /> 3<br />\
    <img src="styles/legend/Soil_Bantul_1_4.png" /> 4<br />\
    <img src="styles/legend/Soil_Bantul_1_5.png" /> 5<br />\
    <img src="styles/legend/Soil_Bantul_1_6.png" /> 6<br />\
    <img src="styles/legend/Soil_Bantul_1_7.png" /> 7<br />\
    <img src="styles/legend/Soil_Bantul_1_8.png" /> 8<br />\
    <img src="styles/legend/Soil_Bantul_1_9.png" /> 9<br />\
    <img src="styles/legend/Soil_Bantul_1_10.png" /> 10<br />\
    <img src="styles/legend/Soil_Bantul_1_11.png" /> 11<br />\
    <img src="styles/legend/Soil_Bantul_1_12.png" /> 12<br />\
    <img src="styles/legend/Soil_Bantul_1_13.png" /> 13<br />\
    <img src="styles/legend/Soil_Bantul_1_14.png" /> 14<br />\
    <img src="styles/legend/Soil_Bantul_1_15.png" /> 15<br />\
    <img src="styles/legend/Soil_Bantul_1_16.png" /> 16<br />\
    <img src="styles/legend/Soil_Bantul_1_17.png" /> 17<br />\
    <img src="styles/legend/Soil_Bantul_1_18.png" /> 18<br />\
    <img src="styles/legend/Soil_Bantul_1_19.png" /> 19<br />\
    <img src="styles/legend/Soil_Bantul_1_20.png" /> 20<br />\
    <img src="styles/legend/Soil_Bantul_1_21.png" /> 21<br />\
    <img src="styles/legend/Soil_Bantul_1_22.png" /> 22<br />\
    <img src="styles/legend/Soil_Bantul_1_23.png" /> 23<br />\
    <img src="styles/legend/Soil_Bantul_1_24.png" /> 24<br />\
    <img src="styles/legend/Soil_Bantul_1_25.png" /> 25<br />\
    <img src="styles/legend/Soil_Bantul_1_26.png" /> 26<br />\
    <img src="styles/legend/Soil_Bantul_1_27.png" /> 27<br />\
    <img src="styles/legend/Soil_Bantul_1_28.png" /> 28<br />\
    <img src="styles/legend/Soil_Bantul_1_29.png" /> 29<br />\
    <img src="styles/legend/Soil_Bantul_1_30.png" /> 30<br />\
    <img src="styles/legend/Soil_Bantul_1_31.png" /> 31<br />\
    <img src="styles/legend/Soil_Bantul_1_32.png" /> 32<br />\
    <img src="styles/legend/Soil_Bantul_1_33.png" /> 33<br />\
    <img src="styles/legend/Soil_Bantul_1_34.png" /> 34<br />\
    <img src="styles/legend/Soil_Bantul_1_35.png" /> 35<br />\
    <img src="styles/legend/Soil_Bantul_1_36.png" /> 36<br />\
    <img src="styles/legend/Soil_Bantul_1_37.png" /> 37<br />\
    <img src="styles/legend/Soil_Bantul_1_38.png" /> 38<br />\
    <img src="styles/legend/Soil_Bantul_1_39.png" /> 39<br />\
    <img src="styles/legend/Soil_Bantul_1_40.png" /> 40<br />\
    <img src="styles/legend/Soil_Bantul_1_41.png" /> 41<br />\
    <img src="styles/legend/Soil_Bantul_1_42.png" /> 42<br />\
    <img src="styles/legend/Soil_Bantul_1_43.png" /> 43<br />\
    <img src="styles/legend/Soil_Bantul_1_44.png" /> 44<br />\
    <img src="styles/legend/Soil_Bantul_1_45.png" /> 45<br />\
    <img src="styles/legend/Soil_Bantul_1_46.png" /> 46<br />\
    <img src="styles/legend/Soil_Bantul_1_47.png" /> 47<br />\
    <img src="styles/legend/Soil_Bantul_1_48.png" /> 48<br />\
    <img src="styles/legend/Soil_Bantul_1_49.png" /> 49<br />\
    <img src="styles/legend/Soil_Bantul_1_50.png" /> 50<br />\
    <img src="styles/legend/Soil_Bantul_1_51.png" /> 51<br />\
    <img src="styles/legend/Soil_Bantul_1_52.png" /> 52<br />\
    <img src="styles/legend/Soil_Bantul_1_53.png" /> 53<br />\
    <img src="styles/legend/Soil_Bantul_1_54.png" /> 54<br />\
    <img src="styles/legend/Soil_Bantul_1_55.png" /> 55<br />\
    <img src="styles/legend/Soil_Bantul_1_56.png" /> 56<br />\
    <img src="styles/legend/Soil_Bantul_1_57.png" /> 57<br />\
    <img src="styles/legend/Soil_Bantul_1_58.png" /> 58<br />\
    <img src="styles/legend/Soil_Bantul_1_59.png" /> 59<br />\
    <img src="styles/legend/Soil_Bantul_1_60.png" /> 60<br />\
    <img src="styles/legend/Soil_Bantul_1_61.png" /> 61<br />\
    <img src="styles/legend/Soil_Bantul_1_62.png" /> 62<br />\
    <img src="styles/legend/Soil_Bantul_1_63.png" /> 63<br />\
    <img src="styles/legend/Soil_Bantul_1_64.png" /> 64<br />\
    <img src="styles/legend/Soil_Bantul_1_65.png" /> 65<br />\
    <img src="styles/legend/Soil_Bantul_1_66.png" /> 66<br />\
    <img src="styles/legend/Soil_Bantul_1_67.png" /> 67<br />\
    <img src="styles/legend/Soil_Bantul_1_68.png" /> 68<br />\
    <img src="styles/legend/Soil_Bantul_1_69.png" /> 69<br />\
    <img src="styles/legend/Soil_Bantul_1_70.png" /> 70<br />\
    <img src="styles/legend/Soil_Bantul_1_71.png" /> 71<br />\
    <img src="styles/legend/Soil_Bantul_1_72.png" /> 72<br />\
    <img src="styles/legend/Soil_Bantul_1_73.png" /> 73<br />\
    <img src="styles/legend/Soil_Bantul_1_74.png" /> 74<br />\
    <img src="styles/legend/Soil_Bantul_1_75.png" /> 75<br />\
    <img src="styles/legend/Soil_Bantul_1_76.png" /> 76<br />\
    <img src="styles/legend/Soil_Bantul_1_77.png" /> 77<br />\
    <img src="styles/legend/Soil_Bantul_1_78.png" /> 78<br />\
    <img src="styles/legend/Soil_Bantul_1_79.png" /> 79<br />\
    <img src="styles/legend/Soil_Bantul_1_80.png" /> 80<br />\
    <img src="styles/legend/Soil_Bantul_1_81.png" /> 81<br />\
    <img src="styles/legend/Soil_Bantul_1_82.png" /> 82<br />\
    <img src="styles/legend/Soil_Bantul_1_83.png" /> 83<br />\
    <img src="styles/legend/Soil_Bantul_1_84.png" /> 84<br />\
    <img src="styles/legend/Soil_Bantul_1_85.png" /> 85<br />\
    <img src="styles/legend/Soil_Bantul_1_86.png" /> 86<br />\
    <img src="styles/legend/Soil_Bantul_1_87.png" /> 87<br />\
    <img src="styles/legend/Soil_Bantul_1_88.png" /> 88<br />\
    <img src="styles/legend/Soil_Bantul_1_89.png" /> 89<br />\
    <img src="styles/legend/Soil_Bantul_1_90.png" /> 90<br />\
    <img src="styles/legend/Soil_Bantul_1_91.png" /> 91<br />\
    <img src="styles/legend/Soil_Bantul_1_92.png" /> 92<br />\
    <img src="styles/legend/Soil_Bantul_1_93.png" /> 93<br />\
    <img src="styles/legend/Soil_Bantul_1_94.png" /> 94<br />\
    <img src="styles/legend/Soil_Bantul_1_95.png" /> 95<br />\
    <img src="styles/legend/Soil_Bantul_1_96.png" /> 96<br />\
    <img src="styles/legend/Soil_Bantul_1_97.png" /> 97<br />\
    <img src="styles/legend/Soil_Bantul_1_98.png" /> 98<br />\
    <img src="styles/legend/Soil_Bantul_1_99.png" /> 99<br />\
    <img src="styles/legend/Soil_Bantul_1_100.png" /> 100<br />\
    <img src="styles/legend/Soil_Bantul_1_101.png" /> 101<br />\
    <img src="styles/legend/Soil_Bantul_1_102.png" /> 102<br />\
    <img src="styles/legend/Soil_Bantul_1_103.png" /> 103<br />\
    <img src="styles/legend/Soil_Bantul_1_104.png" /> 104<br />\
    <img src="styles/legend/Soil_Bantul_1_105.png" /> 105<br />\
    <img src="styles/legend/Soil_Bantul_1_106.png" /> 106<br />\
    <img src="styles/legend/Soil_Bantul_1_107.png" /> 107<br />\
    <img src="styles/legend/Soil_Bantul_1_108.png" /> 108<br />\
    <img src="styles/legend/Soil_Bantul_1_109.png" /> 109<br />\
    <img src="styles/legend/Soil_Bantul_1_110.png" /> 110<br />\
    <img src="styles/legend/Soil_Bantul_1_111.png" /> 111<br />\
    <img src="styles/legend/Soil_Bantul_1_112.png" /> 112<br />\
    <img src="styles/legend/Soil_Bantul_1_113.png" /> 113<br />\
    <img src="styles/legend/Soil_Bantul_1_114.png" /> 114<br />\
    <img src="styles/legend/Soil_Bantul_1_115.png" /> 115<br />\
    <img src="styles/legend/Soil_Bantul_1_116.png" /> 116<br />\
    <img src="styles/legend/Soil_Bantul_1_117.png" /> 117<br />\
    <img src="styles/legend/Soil_Bantul_1_118.png" /> 118<br />\
    <img src="styles/legend/Soil_Bantul_1_119.png" /> 119<br />\
    <img src="styles/legend/Soil_Bantul_1_120.png" /> 120<br />\
    <img src="styles/legend/Soil_Bantul_1_121.png" /> 121<br />\
    <img src="styles/legend/Soil_Bantul_1_122.png" /> 122<br />\
    <img src="styles/legend/Soil_Bantul_1_123.png" /> 123<br />\
    <img src="styles/legend/Soil_Bantul_1_124.png" /> 124<br />\
    <img src="styles/legend/Soil_Bantul_1_125.png" /> 125<br />\
    <img src="styles/legend/Soil_Bantul_1_126.png" /> 126<br />\
    <img src="styles/legend/Soil_Bantul_1_127.png" /> 127<br />\
    <img src="styles/legend/Soil_Bantul_1_128.png" /> 128<br />\
    <img src="styles/legend/Soil_Bantul_1_129.png" /> 129<br />\
    <img src="styles/legend/Soil_Bantul_1_130.png" /> 130<br />\
    <img src="styles/legend/Soil_Bantul_1_131.png" /> 131<br />\
    <img src="styles/legend/Soil_Bantul_1_132.png" /> 132<br />\
    <img src="styles/legend/Soil_Bantul_1_133.png" /> 133<br />\
    <img src="styles/legend/Soil_Bantul_1_134.png" /> 134<br />\
    <img src="styles/legend/Soil_Bantul_1_135.png" /> 135<br />\
    <img src="styles/legend/Soil_Bantul_1_136.png" /> 136<br />\
    <img src="styles/legend/Soil_Bantul_1_137.png" /> 137<br />\
    <img src="styles/legend/Soil_Bantul_1_138.png" /> 138<br />\
    <img src="styles/legend/Soil_Bantul_1_139.png" /> 139<br />\
    <img src="styles/legend/Soil_Bantul_1_140.png" /> 140<br />\
    <img src="styles/legend/Soil_Bantul_1_141.png" /> 141<br />\
    <img src="styles/legend/Soil_Bantul_1_142.png" /> 142<br />\
    <img src="styles/legend/Soil_Bantul_1_143.png" /> 143<br />\
    <img src="styles/legend/Soil_Bantul_1_144.png" /> 144<br />\
    <img src="styles/legend/Soil_Bantul_1_145.png" /> 145<br />\
    <img src="styles/legend/Soil_Bantul_1_146.png" /> 146<br />\
    <img src="styles/legend/Soil_Bantul_1_147.png" /> 147<br />\
    <img src="styles/legend/Soil_Bantul_1_148.png" /> 148<br />\
    <img src="styles/legend/Soil_Bantul_1_149.png" /> 149<br />\
    <img src="styles/legend/Soil_Bantul_1_150.png" /> 150<br />\
    <img src="styles/legend/Soil_Bantul_1_151.png" /> 151<br />\
    <img src="styles/legend/Soil_Bantul_1_152.png" /> 152<br />\
    <img src="styles/legend/Soil_Bantul_1_153.png" /> 153<br />\
    <img src="styles/legend/Soil_Bantul_1_154.png" /> 154<br />\
    <img src="styles/legend/Soil_Bantul_1_155.png" /> 155<br />\
    <img src="styles/legend/Soil_Bantul_1_156.png" /> 156<br />\
    <img src="styles/legend/Soil_Bantul_1_157.png" /> 157<br />\
    <img src="styles/legend/Soil_Bantul_1_158.png" /> 158<br />\
    <img src="styles/legend/Soil_Bantul_1_159.png" /> 159<br />\
    <img src="styles/legend/Soil_Bantul_1_160.png" /> 160<br />\
    <img src="styles/legend/Soil_Bantul_1_161.png" /> 161<br />\
    <img src="styles/legend/Soil_Bantul_1_162.png" /> 162<br />\
    <img src="styles/legend/Soil_Bantul_1_163.png" /> 163<br />\
    <img src="styles/legend/Soil_Bantul_1_164.png" /> 164<br />\
    <img src="styles/legend/Soil_Bantul_1_165.png" /> 165<br />\
    <img src="styles/legend/Soil_Bantul_1_166.png" /> 166<br />\
    <img src="styles/legend/Soil_Bantul_1_167.png" /> 167<br />\
    <img src="styles/legend/Soil_Bantul_1_168.png" /> 168<br />\
    <img src="styles/legend/Soil_Bantul_1_169.png" /> 169<br />\
    <img src="styles/legend/Soil_Bantul_1_170.png" /> 170<br />\
    <img src="styles/legend/Soil_Bantul_1_171.png" /> 171<br />\
    <img src="styles/legend/Soil_Bantul_1_172.png" /> 172<br />\
    <img src="styles/legend/Soil_Bantul_1_173.png" /> 173<br />\
    <img src="styles/legend/Soil_Bantul_1_174.png" /> 174<br />\
    <img src="styles/legend/Soil_Bantul_1_175.png" /> 175<br />\
    <img src="styles/legend/Soil_Bantul_1_176.png" /> 176<br />\
    <img src="styles/legend/Soil_Bantul_1_177.png" /> 177<br />\
    <img src="styles/legend/Soil_Bantul_1_178.png" /> 178<br />\
    <img src="styles/legend/Soil_Bantul_1_179.png" /> 179<br />\
    <img src="styles/legend/Soil_Bantul_1_180.png" /> 180<br />\
    <img src="styles/legend/Soil_Bantul_1_181.png" /> 181<br />\
    <img src="styles/legend/Soil_Bantul_1_182.png" /> 182<br />\
    <img src="styles/legend/Soil_Bantul_1_183.png" /> 183<br />\
    <img src="styles/legend/Soil_Bantul_1_184.png" /> 184<br />\
    <img src="styles/legend/Soil_Bantul_1_185.png" /> 185<br />\
    <img src="styles/legend/Soil_Bantul_1_186.png" /> 186<br />\
    <img src="styles/legend/Soil_Bantul_1_187.png" /> 187<br />\
    <img src="styles/legend/Soil_Bantul_1_188.png" /> 188<br />\
    <img src="styles/legend/Soil_Bantul_1_189.png" /> 189<br />\
    <img src="styles/legend/Soil_Bantul_1_190.png" /> 190<br />\
    <img src="styles/legend/Soil_Bantul_1_191.png" /> 191<br />\
    <img src="styles/legend/Soil_Bantul_1_192.png" /> 192<br />\
    <img src="styles/legend/Soil_Bantul_1_193.png" /> 193<br />\
    <img src="styles/legend/Soil_Bantul_1_194.png" /> 194<br />\
    <img src="styles/legend/Soil_Bantul_1_195.png" /> 195<br />\
    <img src="styles/legend/Soil_Bantul_1_196.png" /> 196<br />\
    <img src="styles/legend/Soil_Bantul_1_197.png" /> 197<br />\
    <img src="styles/legend/Soil_Bantul_1_198.png" /> 198<br />\
    <img src="styles/legend/Soil_Bantul_1_199.png" /> 199<br />\
    <img src="styles/legend/Soil_Bantul_1_200.png" /> 200<br />\
    <img src="styles/legend/Soil_Bantul_1_201.png" /> 201<br />\
    <img src="styles/legend/Soil_Bantul_1_202.png" /> 202<br />\
    <img src="styles/legend/Soil_Bantul_1_203.png" /> 203<br />\
    <img src="styles/legend/Soil_Bantul_1_204.png" /> 204<br />\
    <img src="styles/legend/Soil_Bantul_1_205.png" /> 205<br />\
    <img src="styles/legend/Soil_Bantul_1_206.png" /> 206<br />\
    <img src="styles/legend/Soil_Bantul_1_207.png" /> 207<br />\
    <img src="styles/legend/Soil_Bantul_1_208.png" /> 208<br />\
    <img src="styles/legend/Soil_Bantul_1_209.png" /> 209<br />\
    <img src="styles/legend/Soil_Bantul_1_210.png" /> 210<br />\
    <img src="styles/legend/Soil_Bantul_1_211.png" /> 211<br />\
    <img src="styles/legend/Soil_Bantul_1_212.png" /> 212<br />\
    <img src="styles/legend/Soil_Bantul_1_213.png" /> 213<br />\
    <img src="styles/legend/Soil_Bantul_1_214.png" /> 214<br />\
    <img src="styles/legend/Soil_Bantul_1_215.png" /> 215<br />\
    <img src="styles/legend/Soil_Bantul_1_216.png" /> 216<br />\
    <img src="styles/legend/Soil_Bantul_1_217.png" /> 217<br />\
    <img src="styles/legend/Soil_Bantul_1_218.png" /> 218<br />\
    <img src="styles/legend/Soil_Bantul_1_219.png" /> 219<br />\
    <img src="styles/legend/Soil_Bantul_1_220.png" /> 220<br />\
    <img src="styles/legend/Soil_Bantul_1_221.png" /> 221<br />\
    <img src="styles/legend/Soil_Bantul_1_222.png" /> 222<br />\
    <img src="styles/legend/Soil_Bantul_1_223.png" /> 223<br />\
    <img src="styles/legend/Soil_Bantul_1_224.png" /> 224<br />\
    <img src="styles/legend/Soil_Bantul_1_225.png" /> 225<br />\
    <img src="styles/legend/Soil_Bantul_1_226.png" /> 226<br />\
    <img src="styles/legend/Soil_Bantul_1_227.png" /> 227<br />\
    <img src="styles/legend/Soil_Bantul_1_228.png" /> 228<br />\
    <img src="styles/legend/Soil_Bantul_1_229.png" /> 229<br />\
    <img src="styles/legend/Soil_Bantul_1_230.png" /> 230<br />\
    <img src="styles/legend/Soil_Bantul_1_231.png" /> 231<br />\
    <img src="styles/legend/Soil_Bantul_1_232.png" /> 232<br />\
    <img src="styles/legend/Soil_Bantul_1_233.png" /> 233<br />\
    <img src="styles/legend/Soil_Bantul_1_234.png" /> 234<br />\
    <img src="styles/legend/Soil_Bantul_1_235.png" /> 235<br />\
    <img src="styles/legend/Soil_Bantul_1_236.png" /> 236<br />\
    <img src="styles/legend/Soil_Bantul_1_237.png" /> 237<br />\
    <img src="styles/legend/Soil_Bantul_1_238.png" /> 238<br />\
    <img src="styles/legend/Soil_Bantul_1_239.png" /> 239<br />\
    <img src="styles/legend/Soil_Bantul_1_240.png" /> 240<br />\
    <img src="styles/legend/Soil_Bantul_1_241.png" /> 241<br />\
    <img src="styles/legend/Soil_Bantul_1_242.png" /> 242<br />\
    <img src="styles/legend/Soil_Bantul_1_243.png" /> 243<br />\
    <img src="styles/legend/Soil_Bantul_1_244.png" /> 244<br />\
    <img src="styles/legend/Soil_Bantul_1_245.png" /> 245<br />\
    <img src="styles/legend/Soil_Bantul_1_246.png" /> 246<br />\
    <img src="styles/legend/Soil_Bantul_1_247.png" /> 247<br />\
    <img src="styles/legend/Soil_Bantul_1_248.png" /> 248<br />\
    <img src="styles/legend/Soil_Bantul_1_249.png" /> 249<br />\
    <img src="styles/legend/Soil_Bantul_1_250.png" /> 250<br />\
    <img src="styles/legend/Soil_Bantul_1_251.png" /> 251<br />\
    <img src="styles/legend/Soil_Bantul_1_252.png" /> 252<br />\
    <img src="styles/legend/Soil_Bantul_1_253.png" /> 253<br />\
    <img src="styles/legend/Soil_Bantul_1_254.png" /> 254<br />\
    <img src="styles/legend/Soil_Bantul_1_255.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Soil_Bantul_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12268681.657211, -896624.785103, 12303181.657211, -867336.955181]
        })
    });
var lyr_Slope_Bantul_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Slope_Bantul<br />\
    <img src="styles/legend/Slope_Bantul_2_0.png" /> 0<br />\
    <img src="styles/legend/Slope_Bantul_2_1.png" /> 62.0443<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Slope_Bantul_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12268676.732696, -896658.127780, 12303197.402378, -867329.363968]
        })
    });
var lyr_Rainfall_Bantul_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Rainfall_Bantul<br />\
    <img src="styles/legend/Rainfall_Bantul_3_0.png" /> 1895.59<br />\
    <img src="styles/legend/Rainfall_Bantul_3_1.png" /> 2260.86<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Rainfall_Bantul_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12268632.966214, -896672.512896, 12303155.385647, -867307.267712]
        })
    });
var lyr_Landuse_Bantul_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Landuse_Bantul<br />\
    <img src="styles/legend/Landuse_Bantul_4_0.png" /> 0<br />\
    <img src="styles/legend/Landuse_Bantul_4_1.png" /> 1<br />\
    <img src="styles/legend/Landuse_Bantul_4_2.png" /> 2<br />\
    <img src="styles/legend/Landuse_Bantul_4_3.png" /> 3<br />\
    <img src="styles/legend/Landuse_Bantul_4_4.png" /> 4<br />\
    <img src="styles/legend/Landuse_Bantul_4_5.png" /> 5<br />\
    <img src="styles/legend/Landuse_Bantul_4_6.png" /> 6<br />\
    <img src="styles/legend/Landuse_Bantul_4_7.png" /> 7<br />\
    <img src="styles/legend/Landuse_Bantul_4_8.png" /> 8<br />\
    <img src="styles/legend/Landuse_Bantul_4_9.png" /> 9<br />\
    <img src="styles/legend/Landuse_Bantul_4_10.png" /> 10<br />\
    <img src="styles/legend/Landuse_Bantul_4_11.png" /> 11<br />\
    <img src="styles/legend/Landuse_Bantul_4_12.png" /> 12<br />\
    <img src="styles/legend/Landuse_Bantul_4_13.png" /> 13<br />\
    <img src="styles/legend/Landuse_Bantul_4_14.png" /> 14<br />\
    <img src="styles/legend/Landuse_Bantul_4_15.png" /> 15<br />\
    <img src="styles/legend/Landuse_Bantul_4_16.png" /> 16<br />\
    <img src="styles/legend/Landuse_Bantul_4_17.png" /> 17<br />\
    <img src="styles/legend/Landuse_Bantul_4_18.png" /> 18<br />\
    <img src="styles/legend/Landuse_Bantul_4_19.png" /> 19<br />\
    <img src="styles/legend/Landuse_Bantul_4_20.png" /> 20<br />\
    <img src="styles/legend/Landuse_Bantul_4_21.png" /> 21<br />\
    <img src="styles/legend/Landuse_Bantul_4_22.png" /> 22<br />\
    <img src="styles/legend/Landuse_Bantul_4_23.png" /> 23<br />\
    <img src="styles/legend/Landuse_Bantul_4_24.png" /> 24<br />\
    <img src="styles/legend/Landuse_Bantul_4_25.png" /> 25<br />\
    <img src="styles/legend/Landuse_Bantul_4_26.png" /> 26<br />\
    <img src="styles/legend/Landuse_Bantul_4_27.png" /> 27<br />\
    <img src="styles/legend/Landuse_Bantul_4_28.png" /> 28<br />\
    <img src="styles/legend/Landuse_Bantul_4_29.png" /> 29<br />\
    <img src="styles/legend/Landuse_Bantul_4_30.png" /> 30<br />\
    <img src="styles/legend/Landuse_Bantul_4_31.png" /> 31<br />\
    <img src="styles/legend/Landuse_Bantul_4_32.png" /> 32<br />\
    <img src="styles/legend/Landuse_Bantul_4_33.png" /> 33<br />\
    <img src="styles/legend/Landuse_Bantul_4_34.png" /> 34<br />\
    <img src="styles/legend/Landuse_Bantul_4_35.png" /> 35<br />\
    <img src="styles/legend/Landuse_Bantul_4_36.png" /> 36<br />\
    <img src="styles/legend/Landuse_Bantul_4_37.png" /> 37<br />\
    <img src="styles/legend/Landuse_Bantul_4_38.png" /> 38<br />\
    <img src="styles/legend/Landuse_Bantul_4_39.png" /> 39<br />\
    <img src="styles/legend/Landuse_Bantul_4_40.png" /> 40<br />\
    <img src="styles/legend/Landuse_Bantul_4_41.png" /> 41<br />\
    <img src="styles/legend/Landuse_Bantul_4_42.png" /> 42<br />\
    <img src="styles/legend/Landuse_Bantul_4_43.png" /> 43<br />\
    <img src="styles/legend/Landuse_Bantul_4_44.png" /> 44<br />\
    <img src="styles/legend/Landuse_Bantul_4_45.png" /> 45<br />\
    <img src="styles/legend/Landuse_Bantul_4_46.png" /> 46<br />\
    <img src="styles/legend/Landuse_Bantul_4_47.png" /> 47<br />\
    <img src="styles/legend/Landuse_Bantul_4_48.png" /> 48<br />\
    <img src="styles/legend/Landuse_Bantul_4_49.png" /> 49<br />\
    <img src="styles/legend/Landuse_Bantul_4_50.png" /> 50<br />\
    <img src="styles/legend/Landuse_Bantul_4_51.png" /> 51<br />\
    <img src="styles/legend/Landuse_Bantul_4_52.png" /> 52<br />\
    <img src="styles/legend/Landuse_Bantul_4_53.png" /> 53<br />\
    <img src="styles/legend/Landuse_Bantul_4_54.png" /> 54<br />\
    <img src="styles/legend/Landuse_Bantul_4_55.png" /> 55<br />\
    <img src="styles/legend/Landuse_Bantul_4_56.png" /> 56<br />\
    <img src="styles/legend/Landuse_Bantul_4_57.png" /> 57<br />\
    <img src="styles/legend/Landuse_Bantul_4_58.png" /> 58<br />\
    <img src="styles/legend/Landuse_Bantul_4_59.png" /> 59<br />\
    <img src="styles/legend/Landuse_Bantul_4_60.png" /> 60<br />\
    <img src="styles/legend/Landuse_Bantul_4_61.png" /> 61<br />\
    <img src="styles/legend/Landuse_Bantul_4_62.png" /> 62<br />\
    <img src="styles/legend/Landuse_Bantul_4_63.png" /> 63<br />\
    <img src="styles/legend/Landuse_Bantul_4_64.png" /> 64<br />\
    <img src="styles/legend/Landuse_Bantul_4_65.png" /> 65<br />\
    <img src="styles/legend/Landuse_Bantul_4_66.png" /> 66<br />\
    <img src="styles/legend/Landuse_Bantul_4_67.png" /> 67<br />\
    <img src="styles/legend/Landuse_Bantul_4_68.png" /> 68<br />\
    <img src="styles/legend/Landuse_Bantul_4_69.png" /> 69<br />\
    <img src="styles/legend/Landuse_Bantul_4_70.png" /> 70<br />\
    <img src="styles/legend/Landuse_Bantul_4_71.png" /> 71<br />\
    <img src="styles/legend/Landuse_Bantul_4_72.png" /> 72<br />\
    <img src="styles/legend/Landuse_Bantul_4_73.png" /> 73<br />\
    <img src="styles/legend/Landuse_Bantul_4_74.png" /> 74<br />\
    <img src="styles/legend/Landuse_Bantul_4_75.png" /> 75<br />\
    <img src="styles/legend/Landuse_Bantul_4_76.png" /> 76<br />\
    <img src="styles/legend/Landuse_Bantul_4_77.png" /> 77<br />\
    <img src="styles/legend/Landuse_Bantul_4_78.png" /> 78<br />\
    <img src="styles/legend/Landuse_Bantul_4_79.png" /> 79<br />\
    <img src="styles/legend/Landuse_Bantul_4_80.png" /> 80<br />\
    <img src="styles/legend/Landuse_Bantul_4_81.png" /> 81<br />\
    <img src="styles/legend/Landuse_Bantul_4_82.png" /> 82<br />\
    <img src="styles/legend/Landuse_Bantul_4_83.png" /> 83<br />\
    <img src="styles/legend/Landuse_Bantul_4_84.png" /> 84<br />\
    <img src="styles/legend/Landuse_Bantul_4_85.png" /> 85<br />\
    <img src="styles/legend/Landuse_Bantul_4_86.png" /> 86<br />\
    <img src="styles/legend/Landuse_Bantul_4_87.png" /> 87<br />\
    <img src="styles/legend/Landuse_Bantul_4_88.png" /> 88<br />\
    <img src="styles/legend/Landuse_Bantul_4_89.png" /> 89<br />\
    <img src="styles/legend/Landuse_Bantul_4_90.png" /> 90<br />\
    <img src="styles/legend/Landuse_Bantul_4_91.png" /> 91<br />\
    <img src="styles/legend/Landuse_Bantul_4_92.png" /> 92<br />\
    <img src="styles/legend/Landuse_Bantul_4_93.png" /> 93<br />\
    <img src="styles/legend/Landuse_Bantul_4_94.png" /> 94<br />\
    <img src="styles/legend/Landuse_Bantul_4_95.png" /> 95<br />\
    <img src="styles/legend/Landuse_Bantul_4_96.png" /> 96<br />\
    <img src="styles/legend/Landuse_Bantul_4_97.png" /> 97<br />\
    <img src="styles/legend/Landuse_Bantul_4_98.png" /> 98<br />\
    <img src="styles/legend/Landuse_Bantul_4_99.png" /> 99<br />\
    <img src="styles/legend/Landuse_Bantul_4_100.png" /> 100<br />\
    <img src="styles/legend/Landuse_Bantul_4_101.png" /> 101<br />\
    <img src="styles/legend/Landuse_Bantul_4_102.png" /> 102<br />\
    <img src="styles/legend/Landuse_Bantul_4_103.png" /> 103<br />\
    <img src="styles/legend/Landuse_Bantul_4_104.png" /> 104<br />\
    <img src="styles/legend/Landuse_Bantul_4_105.png" /> 105<br />\
    <img src="styles/legend/Landuse_Bantul_4_106.png" /> 106<br />\
    <img src="styles/legend/Landuse_Bantul_4_107.png" /> 107<br />\
    <img src="styles/legend/Landuse_Bantul_4_108.png" /> 108<br />\
    <img src="styles/legend/Landuse_Bantul_4_109.png" /> 109<br />\
    <img src="styles/legend/Landuse_Bantul_4_110.png" /> 110<br />\
    <img src="styles/legend/Landuse_Bantul_4_111.png" /> 111<br />\
    <img src="styles/legend/Landuse_Bantul_4_112.png" /> 112<br />\
    <img src="styles/legend/Landuse_Bantul_4_113.png" /> 113<br />\
    <img src="styles/legend/Landuse_Bantul_4_114.png" /> 114<br />\
    <img src="styles/legend/Landuse_Bantul_4_115.png" /> 115<br />\
    <img src="styles/legend/Landuse_Bantul_4_116.png" /> 116<br />\
    <img src="styles/legend/Landuse_Bantul_4_117.png" /> 117<br />\
    <img src="styles/legend/Landuse_Bantul_4_118.png" /> 118<br />\
    <img src="styles/legend/Landuse_Bantul_4_119.png" /> 119<br />\
    <img src="styles/legend/Landuse_Bantul_4_120.png" /> 120<br />\
    <img src="styles/legend/Landuse_Bantul_4_121.png" /> 121<br />\
    <img src="styles/legend/Landuse_Bantul_4_122.png" /> 122<br />\
    <img src="styles/legend/Landuse_Bantul_4_123.png" /> 123<br />\
    <img src="styles/legend/Landuse_Bantul_4_124.png" /> 124<br />\
    <img src="styles/legend/Landuse_Bantul_4_125.png" /> 125<br />\
    <img src="styles/legend/Landuse_Bantul_4_126.png" /> 126<br />\
    <img src="styles/legend/Landuse_Bantul_4_127.png" /> 127<br />\
    <img src="styles/legend/Landuse_Bantul_4_128.png" /> 128<br />\
    <img src="styles/legend/Landuse_Bantul_4_129.png" /> 129<br />\
    <img src="styles/legend/Landuse_Bantul_4_130.png" /> 130<br />\
    <img src="styles/legend/Landuse_Bantul_4_131.png" /> 131<br />\
    <img src="styles/legend/Landuse_Bantul_4_132.png" /> 132<br />\
    <img src="styles/legend/Landuse_Bantul_4_133.png" /> 133<br />\
    <img src="styles/legend/Landuse_Bantul_4_134.png" /> 134<br />\
    <img src="styles/legend/Landuse_Bantul_4_135.png" /> 135<br />\
    <img src="styles/legend/Landuse_Bantul_4_136.png" /> 136<br />\
    <img src="styles/legend/Landuse_Bantul_4_137.png" /> 137<br />\
    <img src="styles/legend/Landuse_Bantul_4_138.png" /> 138<br />\
    <img src="styles/legend/Landuse_Bantul_4_139.png" /> 139<br />\
    <img src="styles/legend/Landuse_Bantul_4_140.png" /> 140<br />\
    <img src="styles/legend/Landuse_Bantul_4_141.png" /> 141<br />\
    <img src="styles/legend/Landuse_Bantul_4_142.png" /> 142<br />\
    <img src="styles/legend/Landuse_Bantul_4_143.png" /> 143<br />\
    <img src="styles/legend/Landuse_Bantul_4_144.png" /> 144<br />\
    <img src="styles/legend/Landuse_Bantul_4_145.png" /> 145<br />\
    <img src="styles/legend/Landuse_Bantul_4_146.png" /> 146<br />\
    <img src="styles/legend/Landuse_Bantul_4_147.png" /> 147<br />\
    <img src="styles/legend/Landuse_Bantul_4_148.png" /> 148<br />\
    <img src="styles/legend/Landuse_Bantul_4_149.png" /> 149<br />\
    <img src="styles/legend/Landuse_Bantul_4_150.png" /> 150<br />\
    <img src="styles/legend/Landuse_Bantul_4_151.png" /> 151<br />\
    <img src="styles/legend/Landuse_Bantul_4_152.png" /> 152<br />\
    <img src="styles/legend/Landuse_Bantul_4_153.png" /> 153<br />\
    <img src="styles/legend/Landuse_Bantul_4_154.png" /> 154<br />\
    <img src="styles/legend/Landuse_Bantul_4_155.png" /> 155<br />\
    <img src="styles/legend/Landuse_Bantul_4_156.png" /> 156<br />\
    <img src="styles/legend/Landuse_Bantul_4_157.png" /> 157<br />\
    <img src="styles/legend/Landuse_Bantul_4_158.png" /> 158<br />\
    <img src="styles/legend/Landuse_Bantul_4_159.png" /> 159<br />\
    <img src="styles/legend/Landuse_Bantul_4_160.png" /> 160<br />\
    <img src="styles/legend/Landuse_Bantul_4_161.png" /> 161<br />\
    <img src="styles/legend/Landuse_Bantul_4_162.png" /> 162<br />\
    <img src="styles/legend/Landuse_Bantul_4_163.png" /> 163<br />\
    <img src="styles/legend/Landuse_Bantul_4_164.png" /> 164<br />\
    <img src="styles/legend/Landuse_Bantul_4_165.png" /> 165<br />\
    <img src="styles/legend/Landuse_Bantul_4_166.png" /> 166<br />\
    <img src="styles/legend/Landuse_Bantul_4_167.png" /> 167<br />\
    <img src="styles/legend/Landuse_Bantul_4_168.png" /> 168<br />\
    <img src="styles/legend/Landuse_Bantul_4_169.png" /> 169<br />\
    <img src="styles/legend/Landuse_Bantul_4_170.png" /> 170<br />\
    <img src="styles/legend/Landuse_Bantul_4_171.png" /> 171<br />\
    <img src="styles/legend/Landuse_Bantul_4_172.png" /> 172<br />\
    <img src="styles/legend/Landuse_Bantul_4_173.png" /> 173<br />\
    <img src="styles/legend/Landuse_Bantul_4_174.png" /> 174<br />\
    <img src="styles/legend/Landuse_Bantul_4_175.png" /> 175<br />\
    <img src="styles/legend/Landuse_Bantul_4_176.png" /> 176<br />\
    <img src="styles/legend/Landuse_Bantul_4_177.png" /> 177<br />\
    <img src="styles/legend/Landuse_Bantul_4_178.png" /> 178<br />\
    <img src="styles/legend/Landuse_Bantul_4_179.png" /> 179<br />\
    <img src="styles/legend/Landuse_Bantul_4_180.png" /> 180<br />\
    <img src="styles/legend/Landuse_Bantul_4_181.png" /> 181<br />\
    <img src="styles/legend/Landuse_Bantul_4_182.png" /> 182<br />\
    <img src="styles/legend/Landuse_Bantul_4_183.png" /> 183<br />\
    <img src="styles/legend/Landuse_Bantul_4_184.png" /> 184<br />\
    <img src="styles/legend/Landuse_Bantul_4_185.png" /> 185<br />\
    <img src="styles/legend/Landuse_Bantul_4_186.png" /> 186<br />\
    <img src="styles/legend/Landuse_Bantul_4_187.png" /> 187<br />\
    <img src="styles/legend/Landuse_Bantul_4_188.png" /> 188<br />\
    <img src="styles/legend/Landuse_Bantul_4_189.png" /> 189<br />\
    <img src="styles/legend/Landuse_Bantul_4_190.png" /> 190<br />\
    <img src="styles/legend/Landuse_Bantul_4_191.png" /> 191<br />\
    <img src="styles/legend/Landuse_Bantul_4_192.png" /> 192<br />\
    <img src="styles/legend/Landuse_Bantul_4_193.png" /> 193<br />\
    <img src="styles/legend/Landuse_Bantul_4_194.png" /> 194<br />\
    <img src="styles/legend/Landuse_Bantul_4_195.png" /> 195<br />\
    <img src="styles/legend/Landuse_Bantul_4_196.png" /> 196<br />\
    <img src="styles/legend/Landuse_Bantul_4_197.png" /> 197<br />\
    <img src="styles/legend/Landuse_Bantul_4_198.png" /> 198<br />\
    <img src="styles/legend/Landuse_Bantul_4_199.png" /> 199<br />\
    <img src="styles/legend/Landuse_Bantul_4_200.png" /> 200<br />\
    <img src="styles/legend/Landuse_Bantul_4_201.png" /> 201<br />\
    <img src="styles/legend/Landuse_Bantul_4_202.png" /> 202<br />\
    <img src="styles/legend/Landuse_Bantul_4_203.png" /> 203<br />\
    <img src="styles/legend/Landuse_Bantul_4_204.png" /> 204<br />\
    <img src="styles/legend/Landuse_Bantul_4_205.png" /> 205<br />\
    <img src="styles/legend/Landuse_Bantul_4_206.png" /> 206<br />\
    <img src="styles/legend/Landuse_Bantul_4_207.png" /> 207<br />\
    <img src="styles/legend/Landuse_Bantul_4_208.png" /> 208<br />\
    <img src="styles/legend/Landuse_Bantul_4_209.png" /> 209<br />\
    <img src="styles/legend/Landuse_Bantul_4_210.png" /> 210<br />\
    <img src="styles/legend/Landuse_Bantul_4_211.png" /> 211<br />\
    <img src="styles/legend/Landuse_Bantul_4_212.png" /> 212<br />\
    <img src="styles/legend/Landuse_Bantul_4_213.png" /> 213<br />\
    <img src="styles/legend/Landuse_Bantul_4_214.png" /> 214<br />\
    <img src="styles/legend/Landuse_Bantul_4_215.png" /> 215<br />\
    <img src="styles/legend/Landuse_Bantul_4_216.png" /> 216<br />\
    <img src="styles/legend/Landuse_Bantul_4_217.png" /> 217<br />\
    <img src="styles/legend/Landuse_Bantul_4_218.png" /> 218<br />\
    <img src="styles/legend/Landuse_Bantul_4_219.png" /> 219<br />\
    <img src="styles/legend/Landuse_Bantul_4_220.png" /> 220<br />\
    <img src="styles/legend/Landuse_Bantul_4_221.png" /> 221<br />\
    <img src="styles/legend/Landuse_Bantul_4_222.png" /> 222<br />\
    <img src="styles/legend/Landuse_Bantul_4_223.png" /> 223<br />\
    <img src="styles/legend/Landuse_Bantul_4_224.png" /> 224<br />\
    <img src="styles/legend/Landuse_Bantul_4_225.png" /> 225<br />\
    <img src="styles/legend/Landuse_Bantul_4_226.png" /> 226<br />\
    <img src="styles/legend/Landuse_Bantul_4_227.png" /> 227<br />\
    <img src="styles/legend/Landuse_Bantul_4_228.png" /> 228<br />\
    <img src="styles/legend/Landuse_Bantul_4_229.png" /> 229<br />\
    <img src="styles/legend/Landuse_Bantul_4_230.png" /> 230<br />\
    <img src="styles/legend/Landuse_Bantul_4_231.png" /> 231<br />\
    <img src="styles/legend/Landuse_Bantul_4_232.png" /> 232<br />\
    <img src="styles/legend/Landuse_Bantul_4_233.png" /> 233<br />\
    <img src="styles/legend/Landuse_Bantul_4_234.png" /> 234<br />\
    <img src="styles/legend/Landuse_Bantul_4_235.png" /> 235<br />\
    <img src="styles/legend/Landuse_Bantul_4_236.png" /> 236<br />\
    <img src="styles/legend/Landuse_Bantul_4_237.png" /> 237<br />\
    <img src="styles/legend/Landuse_Bantul_4_238.png" /> 238<br />\
    <img src="styles/legend/Landuse_Bantul_4_239.png" /> 239<br />\
    <img src="styles/legend/Landuse_Bantul_4_240.png" /> 240<br />\
    <img src="styles/legend/Landuse_Bantul_4_241.png" /> 241<br />\
    <img src="styles/legend/Landuse_Bantul_4_242.png" /> 242<br />\
    <img src="styles/legend/Landuse_Bantul_4_243.png" /> 243<br />\
    <img src="styles/legend/Landuse_Bantul_4_244.png" /> 244<br />\
    <img src="styles/legend/Landuse_Bantul_4_245.png" /> 245<br />\
    <img src="styles/legend/Landuse_Bantul_4_246.png" /> 246<br />\
    <img src="styles/legend/Landuse_Bantul_4_247.png" /> 247<br />\
    <img src="styles/legend/Landuse_Bantul_4_248.png" /> 248<br />\
    <img src="styles/legend/Landuse_Bantul_4_249.png" /> 249<br />\
    <img src="styles/legend/Landuse_Bantul_4_250.png" /> 250<br />\
    <img src="styles/legend/Landuse_Bantul_4_251.png" /> 251<br />\
    <img src="styles/legend/Landuse_Bantul_4_252.png" /> 252<br />\
    <img src="styles/legend/Landuse_Bantul_4_253.png" /> 253<br />\
    <img src="styles/legend/Landuse_Bantul_4_254.png" /> 254<br />\
    <img src="styles/legend/Landuse_Bantul_4_255.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Landuse_Bantul_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12268681.657211, -896621.436256, 12303181.657211, -867333.608447]
        })
    });
var lyr_DEM_Bantul_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM_Bantul<br />\
    <img src="styles/legend/DEM_Bantul_5_0.png" /> -2<br />\
    <img src="styles/legend/DEM_Bantul_5_1.png" /> 511<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEM_Bantul_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12268676.732696, -896658.127780, 12303197.402378, -867329.363968]
        })
    });
var lyr_curahhujan_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'curah hujan<br />\
    <img src="styles/legend/curahhujan_6_0.png" /> 1<br />\
    <img src="styles/legend/curahhujan_6_1.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/curahhujan_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12268632.966214, -896672.512896, 12303155.385647, -867307.267712]
        })
    });
var lyr_landusebantul_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'landusebantul<br />\
    <img src="styles/legend/landusebantul_7_0.png" /> 0<br />\
    <img src="styles/legend/landusebantul_7_1.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/landusebantul_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12268681.657211, -896621.436256, 12303181.657211, -867333.608447]
        })
    });
var lyr_over_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'over<br />\
    <img src="styles/legend/over_8_0.png" /> 1.35<br />\
    <img src="styles/legend/over_8_1.png" /> 2.97<br />\
    <img src="styles/legend/over_8_2.png" /> 4.60<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/over_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12268681.657211, -896621.436256, 12303181.657211, -867333.608447]
        })
    });
var format_KabupatenBantul_9 = new ol.format.GeoJSON();
var features_KabupatenBantul_9 = format_KabupatenBantul_9.readFeatures(json_KabupatenBantul_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabupatenBantul_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabupatenBantul_9.addFeatures(features_KabupatenBantul_9);
var lyr_KabupatenBantul_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabupatenBantul_9, 
                style: style_KabupatenBantul_9,
                popuplayertitle: 'Kabupaten Bantul',
                interactive: true,
                title: '<img src="styles/legend/KabupatenBantul_9.png" /> Kabupaten Bantul'
            });
var lyr_Clippedmask_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Clipped (mask)<br />\
    <img src="styles/legend/Clippedmask_10_0.png" /> 3<br />\
    <img src="styles/legend/Clippedmask_10_1.png" /> 40<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Clippedmask_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12268710.000000, -896608.536472, 12303150.000000, -867381.272438]
        })
    });
var format_Biomas_11 = new ol.format.GeoJSON();
var features_Biomas_11 = format_Biomas_11.readFeatures(json_Biomas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biomas_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Biomas_11.addFeatures(features_Biomas_11);
var lyr_Biomas_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Biomas_11, 
                style: style_Biomas_11,
                popuplayertitle: 'Biomas',
                interactive: true,
    title: 'Biomas<br />\
    <img src="styles/legend/Biomas_11_0.png" /> Formasi Hutan<br />\
    <img src="styles/legend/Biomas_11_1.png" /> Tumbuhan Non-Hutan Lainnya<br />\
    <img src="styles/legend/Biomas_11_2.png" /> Sawah<br />\
    <img src="styles/legend/Biomas_11_3.png" /> Pertanian Lainnya<br />\
    <img src="styles/legend/Biomas_11_4.png" /> Non-Vegetasi Lainnya<br />\
    <img src="styles/legend/Biomas_11_5.png" /> Tambak<br />\
    <img src="styles/legend/Biomas_11_6.png" /> Sungai, Danau, Laut<br />' });
var format_kerentananBanjir_12 = new ol.format.GeoJSON();
var features_kerentananBanjir_12 = format_kerentananBanjir_12.readFeatures(json_kerentananBanjir_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kerentananBanjir_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kerentananBanjir_12.addFeatures(features_kerentananBanjir_12);
var lyr_kerentananBanjir_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kerentananBanjir_12, 
                style: style_kerentananBanjir_12,
                popuplayertitle: 'kerentananBanjir',
                interactive: true,
                title: '<img src="styles/legend/kerentananBanjir_12.png" /> kerentananBanjir'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Soil_Bantul_1.setVisible(true);lyr_Slope_Bantul_2.setVisible(true);lyr_Rainfall_Bantul_3.setVisible(true);lyr_Landuse_Bantul_4.setVisible(true);lyr_DEM_Bantul_5.setVisible(true);lyr_curahhujan_6.setVisible(true);lyr_landusebantul_7.setVisible(true);lyr_over_8.setVisible(true);lyr_KabupatenBantul_9.setVisible(true);lyr_Clippedmask_10.setVisible(true);lyr_Biomas_11.setVisible(true);lyr_kerentananBanjir_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Soil_Bantul_1,lyr_Slope_Bantul_2,lyr_Rainfall_Bantul_3,lyr_Landuse_Bantul_4,lyr_DEM_Bantul_5,lyr_curahhujan_6,lyr_landusebantul_7,lyr_over_8,lyr_KabupatenBantul_9,lyr_Clippedmask_10,lyr_Biomas_11,lyr_kerentananBanjir_12];
lyr_KabupatenBantul_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Biomas_11.set('fieldAliases', {'fid': 'fid', 'gridcode': 'gridcode', 'class_id': 'class_id', 'class_en': 'class_en', 'class_id_b': 'class_id_b', 'lv1_en': 'lv1_en', 'lv1_id': 'lv1_id', 'hex_color': 'hex_color', });
lyr_kerentananBanjir_12.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'kategori': 'kategori', });
lyr_KabupatenBantul_9.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_Biomas_11.set('fieldImages', {'fid': 'Range', 'gridcode': 'Range', 'class_id': 'Range', 'class_en': 'TextEdit', 'class_id_b': 'TextEdit', 'lv1_en': 'TextEdit', 'lv1_id': 'TextEdit', 'hex_color': 'TextEdit', });
lyr_kerentananBanjir_12.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'kategori': 'TextEdit', });
lyr_KabupatenBantul_9.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_Biomas_11.set('fieldLabels', {'fid': 'no label', 'gridcode': 'no label', 'class_id': 'header label - visible with data', 'class_en': 'no label', 'class_id_b': 'inline label - visible with data', 'lv1_en': 'no label', 'lv1_id': 'no label', 'hex_color': 'no label', });
lyr_kerentananBanjir_12.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'kategori': 'inline label - visible with data', });
lyr_kerentananBanjir_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});