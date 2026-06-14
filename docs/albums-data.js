// Datos de álbumes fotográficos
// Este archivo es compartido entre galeria.html e index.html
const rawAlbums = [
    {
        folder: "2024-02-24-Arquibuuur-Belenpuuur-Betxí-y-Villafamés-24-de-febrero-de-2024",
        title: "Betxí y Villafamés 24 de febrero de 2024",
        files: ["IMG_7380.jpg", "IMG_7381.jpg", "IMG_7385.jpg", "IMG_7394.jpg", "IMG_7406.jpg", "IMG_7417.jpg", "IMG_7423.jpg", "IMG_7429.jpg", "IMG_7441.jpg", "IMG_7445-2.jpg", "IMG_7449.jpg", "IMG_7462.jpg", "IMG_7466.jpg", "IMG_7468.jpg", "IMG_7474.jpg", "IMG_7484.jpg", "IMG_7489.jpg", "IMG_7490-2.jpg"]
    },
    {
        folder: "2024-02-18-Arquibuuur-Toledo-18-de-febrero-de-2024",
        title: "Toledo 18 de febrero de 2024",
        files: ["IMG_7360.jpg", "IMG_7363.jpg", "IMG_7364.jpg", "IMG_7366.jpg", "IMG_7367.jpg", "IMG_7371.jpg", "IMG_7376.jpg", "IMG_7378.jpg"]
    },
    {
        folder: "2024-02-17-Arquibuuur-Castillo-de-Belmonte-17-de-febrero-de-2024",
        title: "Castillo de Belmonte 17 de febrero de 2024",
        files: ["IMG_7279.jpg", "IMG_7286.jpg", "IMG_7297.jpg", "IMG_7303.jpg", "IMG_7308.jpg", "IMG_7311.jpg", "IMG_7312.jpg", "IMG_7317.jpg", "IMG_7322.jpg", "IMG_7337.jpg", "IMG_7338.jpg", "IMG_7340-2.jpg", "IMG_7347.jpg", "IMG_7355.jpg"]
    },
    {
        folder: "2024-02-11-Celebración-de-cumpleaños-11-de-febrero-de-2024",
        title: "Celebración de cumpleaños 11 de febrero de 2024",
        files: ["_MG_4030.jpg", "_MG_4032.jpg", "_MG_4034.jpg", "_MG_4037-2.jpg"]
    },
    {
        folder: "2024-01-27-Sala-de-Exposiciones-CCCC-El-Carme-27-de-enero-de-2024",
        title: "Sala de Exposiciones CCCC El Carme 27 de enero de 2024",
        files: ["IMG_6963.jpg", "IMG_6972.jpg", "IMG_6979.jpg", "IMG_6981.jpg", "IMG_6985.jpg", "IMG_6997.jpg", "IMG_7000.jpg", "IMG_7011.jpg", "IMG_7015.jpg", "IMG_7024.jpg", "IMG_7032.jpg", "IMG_7051.jpg", "IMG_7056.jpg"]
    },
    {
        folder: "2023-12-29-Viajes-Villamarchante-29-de-diciembre-de-2023",
        title: "Villamarchante 29 de diciembre de 2023",
        files: ["IMG_6864.jpg", "IMG_6865.jpg", "IMG_6867.jpg", "IMG_6877.jpg", "IMG_6888.jpg"]
    },
    {
        folder: "2023-11-11-Belenpuuur-Asociación-Vida-Gatuna-11-de-noviembre-de-2023",
        title: "Asociación Vida Gatuna 11 de noviembre de 2023",
        files: ["IMG_3536.jpg", "IMG_3543.jpg", "IMG_3563.jpg", "IMG_3575.jpg", "IMG_3588.jpg", "IMG_3610.jpg", "IMG_3661.jpg", "IMG_3689.jpg", "IMG_3728.jpg", "IMG_3744.jpg", "IMG_3780.jpg", "IMG_3906.jpg", "IMG_3986.jpg", "IMG_4027.jpg", "IMG_4122.jpg", "IMG_4182.jpg", "IMG_4197.jpg", "IMG_4277.jpg", "IMG_4336.jpg"]
    },
    {
        folder: "2023-11-09-Belenpuuur-Viajes-Hayedo-de-Montejo,-Madrid-9-de-noviembre-de-2023",
        title: "Hayedo de Montejo, Madrid 9 de noviembre de 2023",
        files: ["IMG_3401.jpg", "IMG_3404.jpg", "IMG_3416.jpg", "IMG_3427.jpg", "IMG_3431.jpg", "IMG_3472.jpg", "IMG_3480.jpg", "IMG_3494.jpg", "IMG_3501.jpg"]
    },
    {
        folder: "2023-10-21-Viajes-Belenpuuur-Arquibuuur-Asturias-y-Galicia-21-a-29-de-octubre-de-2023",
        title: "Asturias y Galicia 21 a 29 de octubre de 2023",
        files: ["IMG_2167-2.jpg", "IMG_2181.jpg", "IMG_2199.jpg", "IMG_2216.jpg", "IMG_2247.jpg", "IMG_2258.jpg", "IMG_2283.jpg", "IMG_2335.jpg", "IMG_2343.jpg", "IMG_2402-2.jpg", "IMG_2456.jpg", "IMG_2540.jpg", "IMG_2643.jpg", "IMG_2678.jpg", "IMG_2751.jpg", "IMG_2846.jpg", "IMG_2915-2.jpg", "IMG_2985.jpg", "IMG_3031.jpg", "IMG_3045.jpg", "IMG_3100-2.jpg", "IMG_3111.jpg", "IMG_3150.jpg", "IMG_3196.jpg", "IMG_3213.jpg", "IMG_3233.jpg", "IMG_3235.jpg", "IMG_3260.jpg", "IMG_3287.jpg"]
    },
    {
        folder: "2023-10-12-Belenbruuum-Aviación-en-Torrejón-de-Ardoz-12-de-octubre-de-2023",
        title: "Aviación en Torrejón de Ardoz 12 de octubre de 2023",
        files: ["IMG_0383.jpg", "IMG_0431.jpg", "IMG_0775.jpg", "IMG_0879.jpg", "IMG_0964.jpg", "IMG_1194.jpg", "IMG_1301.jpg", "IMG_1393.jpg", "IMG_1551.jpg", "IMG_1623.jpg"]
    },
    {
        folder: "2023-09-30-Belenbruuum-Campeonato-de-Camiones-Circuito-del-Jarama-30-de-septiembre-de-2023",
        title: "Campeonato de Camiones Circuito del Jarama 30 de septiembre de 2023",
        files: ["IMG_6966.jpg", "IMG_7032.jpg", "IMG_7327.jpg", "IMG_7592.jpg", "IMG_7961.jpg"]
    },
    {
        folder: "2023-09-24-Arquibuuur-Sociópolis,-Valencia-24-de-septiembre-de-2023",
        title: "Sociópolis, Valencia 24 de septiembre de 2023",
        files: ["IMG_6579.jpg", "IMG_6587.jpg", "IMG_6593.jpg", "IMG_6594.jpg", "IMG_6595.jpg"]
    },
    {
        folder: "2023-08-31-Belenpuuur-Medusa-31-de-agosto-de-2023",
        title: "Medusa 31 de agosto de 2023",
        files: ["IMG_6078.jpg", "IMG_6089.jpg", "IMG_6094.jpg", "IMG_6149.jpg", "IMG_6178.jpg", "IMG_6253.jpg", "IMG_6338.jpg"]
    },
    {
        folder: "2023-05-09-Belenpuuur-Peluso-9-de-mayo-de-2023",
        title: "Peluso 9 de mayo de 2023",
        files: ["IMG_4064.jpg", "IMG_4085.jpg", "IMG_4117.jpg", "IMG_4122.jpg", "IMG_4123.jpg"]
    },
    {
        folder: "2023-04-09-Festibuuur-Domingo-de-Resurrección,-Valencia-9-de-abril-de-2023",
        title: "Domingo de Resurrección, Valencia 9 de abril de 2023",
        files: ["IMG_3384.jpg", "IMG_3400.jpg", "IMG_3403.jpg", "IMG_3610-2.jpg", "IMG_3676-2.jpg", "IMG_3678.jpg", "IMG_3685.jpg", "IMG_3709.jpg"]
    },
    {
        folder: "2023-04-01-Viajes-Arquibuuur-Almería-1-de-abril-de-2023",
        title: "Almería 1 de abril de 2023",
        files: ["IMG_2788.jpg", "IMG_2827.jpg", "IMG_2829.jpg", "IMG_2918.jpg", "IMG_3121.jpg", "IMG_3274.jpg", "IMG_3312.jpg", "IMG_3319.jpg"]
    },
    {
        folder: "2023-03-26-Belenbruuum-Ferrari,-Circuito-Ricardo-Tormo-26-de-marzo-de-2023",
        title: "Ferrari, Circuito Ricardo Tormo 26 de marzo de 2023",
        files: ["IMG_1752.jpg", "IMG_1931.jpg", "IMG_1964.jpg", "IMG_2081.jpg", "IMG_2128.jpg", "IMG_2347.jpg", "IMG_2462.jpg", "IMG_2675-2.jpg", "IMG_2700.jpg"]
    },
    {
        folder: "2023-03-16-Festibuuur-Fallas 2023-14-a-19-de-marzo-de-2023",
        title: "Fallas 2023 14 a 19 de marzo de 2023",
        files: ["IMG_1006.jpg", "IMG_1009.jpg", "IMG_1088.jpg", "IMG_1452.jpg", "IMG_1467-2.jpg", "IMG_1486.jpg", "IMG_1666.jpg"]
    },
    {
        folder: "2023-03-12-Belenbruuum-Levante-Albacete-12-de-marzo-de-2023",
        title: "Levante Albacete 12 de marzo de 2023",
        files: ["IMG_0270.jpg", "IMG_0308.jpg", "IMG_0355.jpg", "IMG_0423.jpg", "IMG_0459.jpg", "IMG_0482.jpg", "IMG_0702.jpg", "IMG_0716.jpg", "IMG_0736.jpg"]
    },
    {
        folder: "2023-03-05-Belenbruuum-Endurance-Circuito-del-Jarama-5-de-marzo-de-2023",
        title: "Endurance Circuito del Jarama 5 de marzo de 2023",
        files: ["IMG_0077.jpg", "IMG_0082.jpg", "IMG_0156.jpg", "IMG_0215.jpg", "IMG_8253.jpg", "IMG_8395.jpg", "IMG_8721.jpg", "IMG_8816.jpg", "IMG_9253.jpg", "IMG_9417.jpg", "IMG_9432.jpg", "IMG_9627.jpg", "IMG_9785.jpg"]
    },
    {
        folder: "2023-02-18-Festibuuur-Carnaval-Villar-del-Arzobispo-18-de-febrero-de-2023",
        title: "Carnaval Villar del Arzobispo 18 de febrero de 2023",
        files: ["IMG_7193.jpg", "IMG_7205.jpg", "IMG_7253.jpg", "IMG_7282.jpg", "IMG_7301.jpg", "IMG_7326.jpg", "IMG_7330.jpg", "IMG_7336.jpg", "IMG_7352.jpg"]
    },
    {
        folder: "2023-02-10-Belenpuuur-Viajes-Laguna-de-Gallocanta-10-a-12-de-febrero-de-2023",
        title: "Laguna de Gallocanta 10 a 12 de febrero de 2023",
        files: ["IMG_6386.jpg", "IMG_6434.jpg", "IMG_6457.jpg", "IMG_6566.jpg", "IMG_6576.jpg", "IMG_6579.jpg"]
    },
    {
        folder: "2022-12-08-Viajes-Irún-8-a-11-de-diciembre-de-2022",
        title: "Irún 8 a 11 de diciembre de 2022",
        files: ["IMG_4891.jpg", "IMG_5076.jpg", "IMG_5181.jpg", "IMG_5211.jpg", "IMG_5317.jpg", "IMG_5339.jpg", "IMG_5344.jpg"]
    },
    {
        folder: "2022-12-03-Chinchinbuuur-Ana-y-Jose,-Sesión-Navidad-3-de-diciembre-de-2022",
        title: "Ana y Jose, Sesión Navidad 3 de diciembre de 2022",
        files: ["IMG_3857.jpg", "IMG_3934.jpg", "IMG_4005.jpg", "IMG_4009.jpg", "IMG_4048.jpg", "IMG_4079.jpg", "IMG_4085.jpg", "IMG_4258.jpg", "IMG_4379.jpg", "IMG_4550.jpg"]
    },
    {
        folder: "2022-10-31-Autorretrato-Halloween,-Sesión-Autorretrato-31-de-octubre-de-2022",
        title: "Halloween, Sesión Autorretrato 31 de octubre de 2022",
        files: ["IMG_1315.jpg", "IMG_1343.jpg", "IMG_1652_2.jpg", "IMG_1673.jpg", "IMG_2547.jpg", "IMG_2822.jpg", "IMG_2832.jpg", "IMG_2976.jpg"]
    },
    {
        folder: "2022-10-30-Viajes-La-Solana-30-de-diciembre-de-2022-a-1-de-enero-de-2023",
        title: "La Solana 30 de diciembre de 2022 a 1 de enero de 2023",
        files: ["IMG_5698.jpg", "IMG_5731.jpg", "IMG_5760.jpg", "IMG_5762.jpg", "IMG_5765.jpg", "IMG_5868.jpg", "IMG_5878.jpg", "IMG_5884.jpg"]
    },
    {
        folder: "2022-10-29-Belenpuuur-Asociación-Vida-Gatuna-29-de-octubre-de-2022",
        title: "Asociación Vida Gatuna 29 de octubre de 2022",
        files: ["IMG_3035.jpg", "IMG_3052.jpg", "IMG_3141.jpg", "IMG_3208.jpg", "IMG_3229.jpg", "IMG_3272.jpg", "IMG_3325.jpg", "IMG_3335.jpg"]
    },
    {
        folder: "2022-10-22-Arquibuuur-Open-House-Valencia-22-de-octubre-de-2022",
        title: "Open House Valencia 22 de octubre de 2022",
        files: ["IMG_2665.jpg", "IMG_2703.jpg", "IMG_2739.jpg", "IMG_2745.jpg", "IMG_2757.jpg", "IMG_2767.jpg", "IMG_2784.jpg", "IMG_2812.jpg"]
    },
    {
        folder: "2022-10-02-Belenpuuur-VII-Feria-Animalista-de-Valencia-2-de-octubre-de-2022",
        title: "VII Feria Animalista de Valencia 2 de octubre de 2022",
        files: ["IMG_1365.jpg", "IMG_1374.jpg", "IMG_1378.jpg", "IMG_1475.jpg", "IMG_1502.jpg", "IMG_1533.jpg", "IMG_1623.jpg", "IMG_1633.jpg"]
    },
    {
        folder: "2022-09-24-Arquibuuur-Open-House-Madrid-24-de-septiembre-de-2022",
        title: "Open House Madrid 24 de septiembre de 2022",
        files: ["IMG_1236.jpg", "IMG_1237.jpg", "IMG_1240.jpg", "IMG_1245.jpg", "IMG_1251.jpg", "IMG_1258.jpg", "IMG_1260.jpg"]
    },
    {
        folder: "2022-09-21-Festibuuur-Stand-Up-Comedy-Bernard-Pub.-Alberto-Belenguer-y-Gracia-Hernandis-21-de-septiembre-de-2022",
        title: "Stand Up Comedy Bernard Pub. Alberto Belenguer y Gracia Hernandis 21 de septiembre de 2022",
        files: ["IMG_0963.jpg", "IMG_1001.jpg", "IMG_1094.jpg", "IMG_1171.jpg", "IMG_1216.jpg"]
    },
    {
        folder: "2022-09-17-Arquibuuur-Visita-al-entorno-de-Proyectos-5,-Universidad-17-de-septiembre-de-2022",
        title: "Visita al entorno de Proyectos 5, Universidad 17 de septiembre de 2022",
        files: ["IMG_0723.jpg", "IMG_0725.jpg", "IMG_0733.jpg", "IMG_0736.jpg", "IMG_0740.jpg", "IMG_0764.jpg", "IMG_0783.jpg", "IMG_0814.jpg", "IMG_0847.jpg", "IMG_0854.jpg", "IMG_0859.jpg", "IMG_0861.jpg"]
    },
    {
        folder: "2022-09-16-Belenpuuur-Gatets-del-Cabanyal-16-de-septiembre-de-2022",
        title: "Gatets del Cabanyal 16 de septiembre de 2022",
        files: ["IMG_0628.jpg", "IMG_0634.jpg", "IMG_0640.jpg", "IMG_0641.jpg", "IMG_0654.jpg", "IMG_0678.jpg", "IMG_0691.jpg", "IMG_2620.jpg", "IMG_2621.jpg", "IMG_2642.jpg", "IMG_2659.jpg"]
    },
    {
        folder: "2022-09-13-Belenpuuur-Adopciones-Felinas,-Duende-13-de-septiembre-de-2022",
        title: "Adopciones Felinas, Duende 13 de septiembre de 2022",
        files: ["IMG_0389.jpg", "IMG_0398.jpg", "IMG_0408.jpg", "IMG_0412.jpg", "IMG_0425.jpg", "IMG_0440.jpg", "IMG_0445.jpg", "IMG_0449.jpg", "IMG_0461.jpg", "IMG_0510.jpg", "IMG_0537.jpg", "IMG_0574.jpg", "IMG_0591.jpg", "IMG_0603.jpg", "IMG_0618.jpg"]
    },
    {
        folder: "2022-08-19-Viajes-Arquibuuur-Peñíscola-19-a-21-de-agosto-de-2022",
        title: "Peñíscola 19 a 21 de agosto de 2022",
        files: ["IMG_8385.jpg", "IMG_8401.jpg", "IMG_8492.jpg", "IMG_8533.jpg", "IMG_8544.jpg", "IMG_8567.jpg", "IMG_8768.jpg", "IMG_8800.jpg", "IMG_8841.jpg", "IMG_8865.jpg", "IMG_8893.jpg", "IMG_9023.jpg", "IMG_9104.jpg", "IMG_9173.jpg"]
    },
    {
        folder: "2022-07-26-Autorretrato-Sesión-autorretrato-26-de-julio-de-2022",
        title: "Sesión autorretrato 26 de julio de 2022",
        files: ["IMG_7886.jpg", "IMG_7895.jpg", "IMG_7912.jpg", "IMG_7914.jpg", "IMG_7927.jpg", "IMG_7931.jpg"]
    },
    {
        folder: "2022-07-17-Viajes-Cortes-de-Pallás-17-de-julio-de-2022",
        title: "Cortes de Pallás 17 de julio de 2022",
        files: ["IMG_7538.jpg", "IMG_7542.jpg", "IMG_7555.jpg", "IMG_7594.jpg", "IMG_7606.jpg", "IMG_7621.jpg"]
    },
    {
        folder: "2022-07-16-Viajes-Piscinas-de-Bolbaite-16-de-julio-de-2022",
        title: "Piscinas de Bolbaite 16 de julio de 2022",
        files: ["IMG_7229.jpg", "IMG_7273.jpg", "IMG_7309.jpg", "IMG_7333.jpg", "IMG_7398.jpg", "IMG_7402.jpg", "IMG_7435.jpg", "IMG_7503.jpg", "IMG_7512.jpg", "IMG_7528.jpg", "IMG_7533.jpg"]
    },
    {
        folder: "2022-07-13-Belenpuuur-Cosmito-13-de-julio-de-2022",
        title: "Cosmito 13 de julio de 2022",
        files: ["IMG_7182.jpg", "IMG_7183.jpg", "IMG_7188.jpg", "IMG_7197.jpg", "IMG_7198.jpg", "IMG_7210.jpg"]
    },
    {
        folder: "2022-06-05-Chinchinbuuur-Bautizo-Ana-5-de-junio-de-2022",
        title: "Bautizo Ana 5 de junio de 2022",
        files: ["IMG_6179.jpg", "IMG_6229.jpg", "IMG_6233.jpg", "IMG_6258.jpg", "IMG_6335.jpg", "IMG_6374.jpg", "IMG_6448.jpg", "IMG_6475.jpg", "IMG_6495.jpg", "IMG_6537.jpg", "IMG_6570.jpg", "IMG_6597.jpg", "IMG_6608.jpg", "IMG_6609.jpg", "IMG_6636.jpg", "IMG_6642.jpg", "IMG_6647.jpg", "IMG_6679.jpg", "IMG_6766.jpg", "IMG_6778.jpg", "IMG_6792.jpg", "IMG_6799.jpg", "IMG_6838.jpg", "IMG_6845.jpg", "IMG_6855.jpg", "IMG_6866.jpg", "IMG_6905.jpg", "IMG_6942.jpg", "IMG_7005.jpg", "IMG_7070.jpg"]
    },
    {
        folder: "2022-05-28-Chinchinbuuur-Boda-Nuria-y-Dani-28-de-mayo-de-2022",
        title: "Boda Nuria y Dani 28 de mayo de 2022",
        files: ["IMG_0267.jpg", "IMG_3072.jpg", "IMG_3082.jpg", "IMG_3083.jpg", "IMG_3093.jpg", "IMG_3141.jpg", "IMG_3151.jpg", "IMG_3186.jpg", "IMG_3202.jpg", "IMG_3212.jpg", "IMG_3226.jpg", "IMG_3247.jpg", "IMG_3266.jpg", "IMG_3286.jpg", "IMG_3294.jpg", "IMG_3311.jpg", "IMG_3315.jpg", "IMG_3318.jpg", "IMG_3320.jpg", "IMG_3333.jpg", "IMG_3345.jpg", "IMG_3352.jpg", "IMG_3353.jpg", "IMG_3362.jpg", "IMG_3709.jpg", "IMG_3729.jpg", "IMG_3795.jpg", "IMG_3816.jpg", "IMG_3843.jpg", "IMG_3846.jpg", "IMG_3850.jpg", "IMG_3903.jpg", "IMG_4087.jpg", "IMG_4103.jpg", "IMG_4247.jpg", "IMG_4279.jpg", "IMG_4281.jpg", "IMG_4332.jpg", "IMG_4534.jpg", "IMG_4776.jpg", "IMG_4787.jpg", "IMG_4822.jpg", "IMG_4861.jpg", "IMG_4898.jpg", "IMG_5188.jpg", "IMG_5543.jpg", "IMG_5560.jpg", "IMG_5564.jpg", "IMG_5849.jpg"]
    },
    {
        folder: "2022-05-20-a-22-Belenbruuum-Rally-de-Portugal-20-a-22-de-mayo-de-2022",
        title: "Rally de Portugal 20 a 22 de mayo de 2022",
        files: ["IMG_0904.jpg", "IMG_0923.jpg", "IMG_0932.jpg", "IMG_0943.jpg", "IMG_0944.jpg", "IMG_0955.jpg", "IMG_0958.jpg", "IMG_0966.jpg", "IMG_0984.jpg", "IMG_0995.jpg", "IMG_0997.jpg", "IMG_1006.jpg", "IMG_1014.jpg", "IMG_1028.jpg", "IMG_1063.jpg", "IMG_1098.jpg", "IMG_1233.jpg", "IMG_1271.jpg", "IMG_1307.jpg", "IMG_1550.jpg", "IMG_1678.jpg", "IMG_1697.jpg", "IMG_1711.jpg", "IMG_1720.jpg", "IMG_1770.jpg", "IMG_1784.jpg", "IMG_1866.jpg", "IMG_2342.jpg", "IMG_2357.jpg", "IMG_2391.jpg", "IMG_2424.jpg", "IMG_2452.jpg"]
    },
    {
        folder: "2022-05-19-Viajes-Valladolid-19-de-mayo-de-2022",
        title: "Valladolid 19 de mayo de 2022",
        files: ["IMG_0559.jpg", "IMG_0567.jpg", "IMG_0591.jpg", "IMG_0602.jpg", "IMG_0606.jpg", "IMG_0614.jpg", "IMG_0643.jpg"]
    },
    {
        folder: "2022-04-16-Arquibuuur-San-Juan-de-los-Reyes-y-Sinagoga-de-Santa-María,-Toledo-16-de-abril-de-2022",
        title: "San Juan de los Reyes y Sinagoga de Santa María, Toledo 16 de abril de 2022",
        files: ["IMG_0010.jpg", "IMG_0011.jpg", "IMG_0028.jpg", "IMG_0040.jpg", "IMG_0093.jpg", "IMG_0095.jpg", "IMG_0099.jpg", "IMG_0103.jpg", "IMG_0121.jpg", "IMG_0122.jpg", "IMG_0166.jpg", "IMG_9875.jpg", "IMG_9902.jpg", "IMG_9909.jpg", "IMG_9933.jpg", "IMG_9952.jpg", "IMG_9969.jpg", "IMG_9973.jpg", "IMG_9982.jpg", "IMG_9985.jpg"]
    },
    {
        folder: "2022-04-15-Festibuuur-Viernes-Santo-Tarancón-15-de-abril-de-2022",
        title: "Viernes Santo Tarancón 15 de abril de 2022",
        files: ["IMG_9748.jpg", "IMG_9749.jpg", "IMG_9751.jpg", "IMG_9759.jpg", "IMG_9761.jpg", "IMG_9768.jpg", "IMG_9773.jpg", "IMG_9781.jpg", "IMG_9788.jpg", "IMG_9801.jpg"]
    },
    {
        folder: "2022-04-10-Festibuuur-Domingo-de-Ramos-10-de-abril-de-2022",
        title: "Domingo de Ramos 10 de abril de 2022",
        files: ["IMG_8972.jpg", "IMG_8984.jpg", "IMG_9020.jpg", "IMG_9313.jpg", "IMG_9314.jpg", "IMG_9347.jpg", "IMG_9468.jpg"]
    },
    {
        folder: "2022-04-03-Belenbruuum-Fundación-Infante-de-Orleans-3-de-abril-de-2022",
        title: "Fundación Infante de Orleans 3 de abril de 2022",
        files: ["IMG_8431.jpg", "IMG_8561.jpg", "IMG_8583.jpg", "IMG_8588.jpg", "IMG_8637.jpg", "IMG_8677.jpg", "IMG_8702.jpg", "IMG_8726.jpg", "IMG_8804.jpg", "IMG_8821.jpg"]
    },
    {
        folder: "2022-02-26-Chinchinbuuur-Ana,-Sesión-Embarazo-26-de-febrero-de-2022",
        title: "Ana, Sesión Embarazo 26 de febrero de 2022",
        files: ["_MG_6101-2.jpg", "_MG_6110.jpg", "_MG_6147.jpg", "_MG_6183.jpg", "_MG_6206.jpg", "_MG_6273-2.jpg", "_MG_6307.jpg", "_MG_6334.jpg"]
    },
    {
        folder: "2022-02-11-Festibuuur-Fallas-2022-15-a-19-de-marzo-de-2022",
        title: "Fallas 2022 15 a 19 de marzo de 2022",
        files: ["_MG_6522.jpg", "_MG_6572.jpg", "_MG_6575.jpg", "_MG_6597.jpg", "_MG_6648-2.jpg", "_MG_6717.jpg", "_MG_6941.jpg", "_MG_6988.jpg", "_MG_7186.jpg", "_MG_7236.jpg", "_MG_7248.jpg", "_MG_7259.jpg", "_MG_7380.jpg", "_MG_7440.jpg", "_MG_7487.jpg"]
    },
    {
        folder: "2022-02-05-Arquibuuur-Belenpuuur-Viajes-Játiva-5-de-febrero-de-2022",
        title: "Játiva 5 de febrero de 2022",
        files: ["_MG_5665.jpg", "_MG_5670.jpg", "_MG_5677.jpg", "_MG_5734.jpg", "_MG_5741.jpg", "_MG_5745.jpg", "_MG_5762.jpg", "_MG_5764.jpg", "_MG_5784.jpg", "_MG_5789-2.jpg", "_MG_5802.jpg", "_MG_5823.jpg", "_MG_5845.jpg", "_MG_5847.jpg", "_MG_5863.jpg", "_MG_5874.jpg", "_MG_5918.jpg", "_MG_5960.jpg", "_MG_5979.jpg", "_MG_5987.jpg"]
    },
    {
        folder: "2021-08-29-Belenpuuur-Oceanográfic-Valencia-29-de-agosto-de-2021",
        title: "Oceanográfic Valencia 29 de agosto de 2021",
        files: ["_MG_1584.jpg", "_MG_1594.jpg", "_MG_1602.jpg", "_MG_1603.jpg", "_MG_1612.jpg", "_MG_1634.jpg", "_MG_1635.jpg", "_MG_1636.jpg", "_MG_1643.jpg", "_MG_1647.jpg", "_MG_1667.jpg", "_MG_1670.jpg", "_MG_1689.jpg", "_MG_1730.jpg", "_MG_1738.jpg", "_MG_1782.jpg", "_MG_1793.jpg", "_MG_1815.jpg", "_MG_1830.jpg", "_MG_1854.jpg", "_MG_1912.jpg", "_MG_1944.jpg", "_MG_1983.jpg", "_MG_1990.jpg", "_MG_2013.jpg", "_MG_2067.jpg", "_MG_2150.jpg", "_MG_2208.jpg", "_MG_2242.jpg", "_MG_2320.jpg"]
    },
    {
        folder: "2021-08-14-Viajes-Belenpuuur-Quesa-y-Chella-14-de-agosto-de-2021",
        title: "Quesa y Chella 14 de agosto de 2021",
        files: ["_MG_1224.jpg", "_MG_1225.jpg", "_MG_1249.jpg", "_MG_1307.jpg", "_MG_1338.jpg", "_MG_1360.jpg", "_MG_1379.jpg", "_MG_1402.jpg", "_MG_1415.jpg"]
    },
    {
        folder: "2021-08-06-Viajes-Arquibuuur-Cuenca-6-de-agosto-de-2021",
        title: "Cuenca 6 de agosto de 2021",
        files: ["_MG_0842.jpg", "_MG_0846.jpg", "_MG_0848.jpg", "_MG_0854.jpg", "_MG_0882.jpg", "_MG_0890.jpg", "_MG_0918.jpg", "_MG_0924.jpg", "_MG_0930.jpg"]
    },
    {
        folder: "2021-07-31-Viajes-Galicia-Arquibuuur-31-de-julio-a-2-de-agosto-de-2021",
        title: "Galicia 31 de julio a 2 de agosto de 2021",
        files: ["_MG_0025.jpg", "_MG_0029.jpg", "_MG_0143.jpg", "_MG_0144.jpg", "_MG_0149.jpg", "_MG_0150.jpg", "_MG_0156.jpg", "_MG_0169.jpg", "_MG_0173.jpg", "_MG_0176.jpg", "_MG_0251.jpg", "_MG_0541.jpg", "_MG_0556.jpg", "_MG_0579.jpg", "_MG_0690.jpg", "_MG_0695.jpg", "_MG_0761.jpg", "_MG_0780.jpg", "_MG_0794.jpg", "_MG_0831.jpg", "_MG_9317.jpg", "_MG_9324.jpg", "_MG_9343.jpg", "_MG_9347.jpg", "_MG_9354.jpg", "_MG_9359.jpg", "_MG_9381.jpg", "_MG_9398.jpg", "_MG_9437.jpg", "_MG_9490.jpg", "_MG_9717.jpg", "_MG_9866.jpg", "_MG_9872.jpg", "_MG_9874.jpg", "_MG_9875.jpg", "_MG_9889.jpg", "_MG_9891.jpg", "_MG_9902.jpg", "_MG_9905.jpg", "_MG_9939.jpg", "_MG_9956.jpg", "_MG_9960.jpg"]
    },
    {
        folder: "2021-07-27-Belenpuuur-Gandía-27-de-julio-de-2021",
        title: "Gandía 27 de julio de 2021",
        files: ["_MG_9274.jpg", "_MG_9279.jpg", "_MG_9283.jpg"]
    },
    {
        folder: "2021-07-24-Viajes-Arquibuuur-Embalses-de-Contreras-y-Alarcón-24-de-julio-de-2021",
        title: "Embalses de Contreras y Alarcón 24 de julio de 2021",
        files: ["_MG_8926.jpg", "_MG_8936.jpg", "_MG_8972.jpg", "_MG_8976.jpg", "_MG_8983.jpg", "_MG_9001.jpg"]
    },
    {
        folder: "2021-07-04-Chinchinbuuur-Embarazo-Ángel-4-de-julio-de-2021",
        title: "Embarazo Ángel 4 de julio de 2021",
        files: ["_MG_8327.jpg", "_MG_8328-3.jpg", "_MG_8339.jpg", "_MG_8362.jpg", "_MG_8375.jpg", "_MG_8382.jpg", "_MG_8400.jpg", "_MG_8420-2.jpg", "_MG_8471.jpg", "_MG_8550.jpg", "_MG_8556.jpg", "_MG_8569-2.jpg"]
    },
    {
        folder: "2021-05-22-Chinchinbuuur-Comunión-Irene-22-de-mayo-de-2021",
        title: "Comunión Irene 22 de mayo de 2021",
        files: ["_MG_8011.jpg", "_MG_8031-2.jpg", "_MG_8040.jpg", "_MG_8042.jpg", "_MG_8049.jpg", "_MG_8060.jpg", "_MG_8066.jpg", "_MG_8109.jpg", "_MG_8165.jpg", "_MG_8204.jpg"]
    },
    {
        folder: "2021-05-01-Chinchinbuuur-SesiónExterior-Precomunión-Erik-1-de-mayo-de-2021",
        title: "Precomunión Erik 1 de mayo de 2021",
        files: ["_MG_7531.jpg", "_MG_7554.jpg", "_MG_7567.jpg", "_MG_7570.jpg", "_MG_7597.jpg", "_MG_7624.jpg", "_MG_7679.jpg", "_MG_7697.jpg", "_MG_7712.jpg", "_MG_7880.jpg", "_MG_7898-2.jpg"]
    },
    {
        folder: "2020-11-20-Alimentación-Trastarteando-20-de-noviembre-de-2020",
        title: "Alimentación Trastarteando 20 de noviembre de 2020",
        files: ["_MG_6491.jpg", "_MG_6515.jpg", "_MG_6522.jpg", "_MG_6528.jpg", "_MG_6543.jpg", "_MG_6587.jpg", "_MG_6611.jpg", "_MG_6644.jpg", "_MG_6652.jpg"]
    },
    {
        folder: "2020-11-13-Alimentación-Trastarteando-13-de-noviembre-de-2020",
        title: "Alimentación Trastarteando 13 de noviembre de 2020",
        files: ["_MG_6239.jpg", "_MG_6242.jpg", "_MG_6245.jpg", "_MG_6270.jpg", "_MG_6281.jpg", "_MG_6286.jpg", "_MG_6295.jpg", "_MG_6300.jpg", "_MG_6306.jpg", "_MG_6326.jpg", "_MG_6335.jpg", "_MG_6340.jpg", "_MG_6342.jpg", "_MG_6368.jpg", "_MG_6389.jpg", "_MG_6403.jpg", "_MG_6408.jpg", "_MG_6412.jpg", "_MG_6422.jpg", "_MG_6436.jpg", "_MG_6441.jpg", "_MG_6452.jpg"]
    },
    {
        folder: "2020-10-17-Belenbuuur-Saelices-17-de-octubre-de-2020",
        title: "Saelices 17 de octubre de 2020",
        files: ["_MG_5994.jpg", "_MG_6052.jpg", "_MG_6121.jpg", "_MG_6136.jpg", "_MG_6139.jpg", "_MG_6151.jpg", "_MG_6157.jpg"]
    },
    {
        folder: "2020-09-04-Chinchinbuuur-Boda-Sandra-y-Joan-4-de-septiembre-de-2020",
        title: "Boda Sandra y Joan 4 de septiembre de 2020",
        files: ["_MG_4890.jpg", "_MG_4917.jpg", "_MG_4949.jpg", "_MG_4962.jpg", "_MG_4969.jpg", "_MG_4972.jpg", "_MG_4976.jpg", "_MG_4985.jpg", "_MG_4986.jpg", "_MG_5067.jpg", "_MG_5083.jpg", "_MG_5117.jpg", "_MG_5135.jpg", "_MG_5137.jpg", "_MG_5142-2.jpg", "_MG_5145-2.jpg"]
    },
    {
        folder: "2020-07-25-Viajes-Altea-25-y-26-de-julio-de-2020",
        title: "Viajes Altea 25 y 26 de julio de 2020",
        files: ["_MG_4218.jpg", "_MG_4227.jpg", "_MG_4228.jpg", "_MG_4249.jpg", "_MG_4251.jpg", "_MG_4266.jpg"]
    },
    {
        folder: "2020-07-24-Arquibuuur-IVAM-Valencia-24-de-julio-de-2020",
        title: "IVAM Valencia 24 de julio de 2020",
        files: ["_MG_4188.jpg", "_MG_4199.jpg", "_MG_4211.jpg", "_MG_4214.jpg"]
    },
    {
        folder: "2020-07-14-Arquibuuur-Belenpuuur-Valencia-14-de-julio-de-2020",
        title: "Valencia 14 de julio de 2020",
        files: ["_MG_4093.jpg", "_MG_4097-2.jpg", "_MG_4099.jpg", "_MG_4102.jpg", "_MG_4118.jpg", "_MG_4120.jpg"]
    },
    {
        folder: "2020-01-26-Arquibuuur-Museo-Bombas-Gens-Valencia-26-de-enero-de-2020",
        title: "Museo Bombas Gens Valencia 26 de enero de 2020",
        files: ["_MG_2872.jpg", "_MG_2873.jpg", "_MG_2876.jpg", "_MG_2878.jpg"]
    },
    {
        folder: "2019-12-22-Belenpuuur-Bioparc-Valencia-22-de-diciembre-de-2019",
        title: "Bioparc Valencia 22 de diciembre de 2019",
        files: ["_MG_2538.jpg", "_MG_2541.jpg", "_MG_2556.jpg", "_MG_2559.jpg", "_MG_2570.jpg", "_MG_2572.jpg", "_MG_2573.jpg", "_MG_2576.jpg", "_MG_2587.jpg", "_MG_2594.jpg", "_MG_2599.jpg", "_MG_2655.jpg"]
    },
    {
        folder: "2019-11-22-Viajes-Belenpuuur-Arquibuuur-Ámsterdam-22-a-24-de-noviembre-de-2019",
        title: "Ámsterdam 22 a 24 de noviembre de 2019",
        files: ["_MG_1993.jpg", "_MG_2001.jpg", "_MG_2047.jpg", "_MG_2092.jpg", "_MG_2123.jpg", "_MG_2126.jpg", "_MG_2129.jpg", "_MG_2135.jpg", "_MG_2136.jpg", "_MG_2140.jpg", "_MG_2145.jpg", "_MG_2175.jpg", "_MG_2244.jpg", "_MG_2249.jpg", "_MG_2253.jpg"]
    },
    {
        folder: "2019-10-31-Belenpuuur-Villarrubio-31-de-octubre-de-2019",
        title: "Villarrubio 31 de octubre de 2019",
        files: ["_MG_1873.jpg", "_MG_1874.jpg"]
    },
    {
        folder: "2019-10-25-Viajes-Arquibuuur-Benidorm-y-Alicante-25-y-26-de-abril-de-2019",
        title: "Benidorm y Alicante 25 y 26 de abril de 2019",
        files: ["IMG_1722.jpg", "IMG_1745.jpg", "IMG_1753.jpg", "IMG_1758.jpg", "IMG_1762.jpg", "IMG_1770.jpg", "IMG_1774.jpg", "IMG_1780.jpg", "IMG_1794.jpg", "IMG_1797.jpg", "IMG_1799.jpg", "IMG_1804.jpg", "IMG_1810.jpg", "IMG_1815.jpg", "IMG_1819.jpg", "IMG_1821.jpg", "IMG_1828.jpg", "IMG_1831.jpg", "IMG_1833.jpg", "IMG_1834.jpg", "IMG_1836.jpg", "IMG_1837.jpg"]
    },
    {
        folder: "2019-10-18-Viajes-Arquibuuur-Florencia-18-a-21-de-octubre-de-2019",
        title: " Florencia 18 a 21 de octubre de 2019",
        files: ["IMG_0981.jpg", "IMG_1005.jpg", "IMG_1008.jpg", "IMG_1013.jpg", "IMG_1014.jpg", "IMG_1026.jpg", "IMG_1034.jpg", "IMG_1041.jpg", "IMG_1044.jpg", "IMG_1048.jpg", "IMG_1081.jpg", "IMG_1085.jpg", "IMG_1104.jpg", "IMG_1107.jpg", "IMG_1130.jpg", "IMG_1152.jpg", "IMG_1159.jpg", "IMG_1190.jpg", "IMG_1192.jpg", "IMG_1201.jpg", "IMG_1224.jpg", "IMG_1241.jpg", "IMG_1249.jpg", "IMG_1274.jpg", "IMG_1280.jpg", "IMG_1284.jpg", "IMG_1288.jpg", "IMG_1297.jpg", "IMG_1334.jpg", "IMG_1356.jpg", "IMG_1371.jpg", "IMG_1460.jpg", "IMG_1468.jpg", "IMG_20191018_142522.jpg", "IMG_20191018_230609.jpg", "_13_0193.jpg", "_14_0194.jpg", "__5_0190.jpg"]
    },
    {
        folder: "2019-09-27-Arquibuuur-Complejo-Educativo-de-Cheste-27-de-septiembre-de-2019",
        title: "Complejo Educativo de Cheste 27 de septiembre de 2019",
        files: ["IMG_20190927_163706_573.jpg", "IMG_20190927_164411_617.jpg", "IMG_20190927_165445_907.jpg", "IMG_20190927_165733_931.jpg", "IMG_20190927_165849_704.jpg", "IMG_20190927_171401_396.jpg", "IMG_20190927_171901_849.jpg", "IMG_20190927_175922_739.jpg", "IMG_20190927_180051_260.jpg"]
    },
    {
        folder: "2019-09-09-Viajes-Arquibuuur-Belenpuuur-Rotterdam-Delft-y-La-Haya-9-a-13-de-septiembre-de-2019",
        title: "Rotterdam Delft y La Haya 9 a 13 de septiembre de 2019",
        files: ["IMG_0312.jpg", "IMG_0325.jpg", "IMG_0339.jpg", "IMG_0353.jpg", "IMG_0361.jpg", "IMG_0369.jpg", "IMG_0373.jpg", "IMG_0489.jpg", "IMG_0492.jpg", "IMG_0499.jpg", "IMG_0506.jpg", "IMG_0509.jpg", "IMG_0530.jpg", "IMG_0531.jpg", "IMG_0533.jpg", "IMG_0538.jpg", "IMG_0547.jpg", "IMG_0555.jpg", "IMG_0566.jpg", "IMG_0572.jpg", "IMG_0581.jpg", "IMG_0591.jpg", "IMG_0604.jpg", "IMG_0635.jpg", "IMG_0657.jpg", "IMG_0667.jpg", "IMG_0670.jpg", "IMG_0672.jpg", "IMG_0676.jpg", "IMG_0681.jpg", "IMG_0687.jpg", "IMG_0696.jpg", "IMG_0713.jpg", "IMG_0723.jpg", "IMG_0729.jpg", "IMG_0736.jpg", "IMG_0737.jpg", "IMG_0738.jpg", "IMG_0744.jpg", "IMG_0763.jpg", "IMG_0771.jpg", "IMG_0778.jpg", "IMG_0785.jpg", "IMG_0790.jpg", "IMG_0799.jpg", "IMG_0814.jpg", "IMG_0878.jpg"]
    },
    {
        folder: "2019-08-23-Viajes-Chulilla-23-de-agosto-de-2019",
        title: "Chulilla 23 de agosto de 2019",
        files: ["IMG_0076.jpg", "IMG_0120.jpg", "IMG_0130.jpg", "IMG_0181.jpg"]
    },
    {
        folder: "2019-08-12-Viajes-Sagra-Jávea-y-Denia-12-y-13-de-agosto-de-2019",
        title: "Sagra Jávea y Denia 12 y 13 de agosto de 2019",
        files: ["IMG_9756.jpg", "IMG_9759.jpg", "IMG_9788.jpg", "IMG_9796.jpg", "IMG_9809.jpg", "IMG_9821.jpg", "IMG_9937.jpg", "IMG_9945.jpg", "IMG_9946.jpg", "IMG_9947.jpg", "IMG_9982.jpg"]
    },
    {
        folder: "2019-07-19-Belenpuuur-Bioparc-Valencia-19-de-julio-de-2019",
        title: "Bioparc Valencia 19 de julio de 2019",
        files: ["IMG_9046.jpg", "IMG_9047.jpg", "IMG_9067.jpg", "IMG_9132.jpg", "IMG_9159.jpg", "IMG_9203.jpg", "IMG_9216.jpg", "IMG_9389.jpg", "IMG_9490.jpg", "IMG_9525.jpg"]
    },
    {
        folder: "2019-06-30-Viajes-Arquibuuur-Belenpuuur-Roma-30-de-junio-a-5-de-julio-de-2019",
        title: "Viajes Arquibuuur Belenpuuur Roma 30 de junio a 5 de julio de 2019",
        files: ["IMG_0007.jpg", "IMG_0009.jpg", "IMG_0014.jpg", "IMG_0024.jpg", "IMG_0029.jpg", "IMG_0040.jpg", "IMG_0066.jpg", "IMG_0080.jpg", "IMG_0091.jpg", "IMG_0108.jpg", "IMG_0111.jpg", "IMG_0116.jpg", "IMG_0121.jpg", "IMG_0124.jpg", "IMG_0132.jpg", "IMG_0171.jpg", "IMG_0198.jpg", "IMG_0199.jpg", "IMG_0215.jpg", "IMG_0223.jpg", "IMG_0262.jpg", "IMG_0267.jpg", "IMG_0273.jpg", "IMG_0274.jpg", "IMG_0285.jpg", "IMG_0296.jpg", "IMG_0305.jpg", "IMG_0324.jpg", "IMG_0340.jpg", "IMG_0381.jpg", "IMG_9221.jpg", "IMG_9249.jpg", "IMG_9253.jpg", "IMG_9260.jpg", "IMG_9262.jpg", "IMG_9275.jpg", "IMG_9284.jpg", "IMG_9287.jpg", "IMG_9310.jpg", "IMG_9345.jpg", "IMG_9348.jpg", "IMG_9372.jpg", "IMG_9374.jpg", "IMG_9401.jpg", "IMG_9404.jpg", "IMG_9406.jpg", "IMG_9431.jpg", "IMG_9433.jpg", "IMG_9442.jpg", "IMG_9527.jpg", "IMG_9528.jpg", "IMG_9536.jpg", "IMG_9576.jpg", "IMG_9596.jpg", "IMG_9599.jpg", "IMG_9600.jpg", "IMG_9605.jpg", "IMG_9612.jpg", "IMG_9614.jpg", "IMG_9622.jpg", "IMG_9627.jpg", "IMG_9638.jpg", "IMG_9682.jpg", "IMG_9684.jpg", "IMG_9690.jpg", "IMG_9693.jpg", "IMG_9721.jpg", "IMG_9722.jpg", "IMG_9750.jpg", "IMG_9756.jpg", "IMG_9763.jpg", "IMG_9785.jpg", "IMG_9791.jpg"]
    },
    {
        folder: "2019-05-26-Chinchinbuuur-Comunión-Patri-26-de-mayo-de-2019",
        title: "Comunión Patri 26 de mayo de 2019",
        files: ["IMG_9703.jpg", "IMG_9709.jpg", "IMG_9711.jpg", "IMG_9733.jpg", "IMG_9772.jpg"]
    },
    {
        folder: "2019-03-11-Arquibuuur-Facultad-de-Filosofía-de-Valencia-11-de-marzo-de-2019",
        title: "Facultad de Filosofía de Valencia 11 de marzo de 2019",
        files: ["IMG_8919.jpg", "IMG_8924.jpg", "IMG_8927.jpg", "IMG_8928.jpg", "IMG_8938.jpg", "IMG_8945.jpg", "IMG_8949.jpg", "IMG_8957.jpg", "IMG_8958.jpg", "IMG_8962.jpg", "IMG_8967.jpg", "IMG_8975.jpg", "IMG_8977.jpg", "IMG_8985.jpg"]
    },
    {
        folder: "2019-01-31-Arquibuuur-Cevisama-Valencia-31-de-enero-de-2019",
        title: "Cevisama Valencia 31 de enero de 2019",
        files: ["IMG_8677.jpg", "IMG_8679.jpg", "IMG_8693.jpg", "IMG_8700.jpg", "IMG_8709.jpg"]
    },
    {
        folder: "2018-10-12-Viajes-Arquibuuur-Belenpuuur-Calpe-12-de-octubre-de-2018",
        title: "Calpe 12 de octubre de 2018",
        files: ["IMG_7560.jpg", "IMG_7576.jpg", "IMG_7601.jpg", "IMG_7651.jpg", "IMG_7662.jpg", "IMG_7670.jpg", "IMG_7681.jpg"]
    },
    {
        folder: "2018-09-29-Chinchinbuuur-Boda-Ana-y-Jose-29-de-septiembre-de-2018",
        title: "Boda Ana y Jose 29 de septiembre de 2018",
        files: ["IMG_6015.jpg", "IMG_6025.jpg", "IMG_6178.jpg", "IMG_6247.jpg", "IMG_6253.jpg", "IMG_6309.jpg", "IMG_6506.jpg", "IMG_6510.jpg","IMG_6597.JPG", "IMG_7068.jpg", "IMG_7196.jpg", "IMG_7225.JPG"]
    },
    {
        folder: "2018-06-27-Belenpuuur-El-Passatge-Dels-Gats-Valencia-27-de-junio-de-2018",
        title: "El Passatge Dels Gats Valencia 27 de junio de 2018",
        files: ["IMG_4138.jpg", "IMG_4162.jpg", "IMG_4168.jpg", "IMG_4169.jpg", "IMG_4172.jpg"]
    },
    {
        folder: "2018-06-02-Belenpuuur-Animalitos-2-de-junio-de-2018",
        title: "Animalitos 2 de junio de 2018",
        files: ["IMG_3897.jpg", "IMG_3900.jpg", "IMG_3939.jpg", "IMG_3943.jpg"]
    },
    {
        folder: "2018-04-29-Belenpuuur-Caballos-29-de-abril-de-2018",
        title: "Caballos 29 de abril de 2018",
        files: ["IMG_3564.jpg", "IMG_3577.jpg", "IMG_3583.jpg"]
    },
    {
        folder: "2017-11-04-SesiónExterior-Nico-4-de-noviembre-de-2017",
        title: "Nico 4 de noviembre de 2017",
        files: ["IMG_0066.jpg", "IMG_0112.jpg", "IMG_0144.jpg", "IMG_0146.jpg", "IMG_0172.jpg"]
    },
    {
        folder: "2017-11-04-Belenbruuum-CB-Tarancón-4-de-noviembre-de-2017",
        title: "CB Tarancón 4 de noviembre de 2017",
        files: ["IMG_0189.jpg", "IMG_0246.jpg", "IMG_0249.jpg", "IMG_0342.jpg", "IMG_0400.jpg", "IMG_0424.jpg", "IMG_0430.jpg", "IMG_0465.jpg"]
    },
    {
        folder: "2017-11-01-Arquibuuur-IX-Certamen-Fotográfico-Renfe-1-de-noviembre-de-2017",
        title: "IX Certamen Fotográfico Renfe 1 de noviembre de 2017",
        files: ["IMG_0019.jpg", "IMG_0027.jpg", "IMG_0035.jpg", "IMG_0040.jpg", "IMG_0045.jpg", "IMG_9995.jpg", "IMG_9998.jpg"]
    },
    {
        folder: "2017-10-14-SesiónExterior-Esther-14-de-octubre-de-2017",
        title: "Esther 14 de octubre de 2017",
        files: ["IMG_9855.jpg", "IMG_9877.jpg", "IMG_9883.jpg", "IMG_9887.jpg", "IMG_9906.jpg"]
    },
    {
        folder: "2017-10-07-Bar-La-Valenciana-7-de-octubre-de-2017",
        title: "Bar La Valenciana 7 de octubre de 2017",
        files: ["IMG_9596.jpg", "IMG_9598.jpg", "IMG_9602.jpg", "IMG_9606.jpg"]
    },
    {
        folder: "2017-09-26-Arquibuuur-Museo-Sorolla-26-de-septiembre-de-2017",
        title: "Museo Sorolla 26 de septiembre de 2017",
        files: ["DSC07277.jpg", "DSC07278.jpg", "DSC07280.jpg", "DSC07290.jpg", "DSC07304.jpg"]
    },
    {
        folder: "2017-09-16-Viajes-Arquibuuur-Murcia-16-y-17-de-septiembre-de-2017",
        title: "Murcia 16 y 17 de septiembre de 2017",
        files: ["IMG_9257.jpg", "IMG_9265.jpg", "IMG_9267.jpg", "IMG_9341.jpg", "IMG_9452.JPG", "IMG_9471.JPG"]
    },
    {
        folder: "2017-09-03-Belenbruuum-C.B.-Tarancón-3-de-septiembre-de-2017",
        title: "C.B. Tarancón 3 de septiembre de 2017",
        files: ["IMG_8999.jpg", "IMG_9005.jpg", "IMG_9009.jpg", "IMG_9015.jpg", "IMG_9056.jpg", "IMG_9070.jpg", "IMG_9079.jpg"]
    },
    {
        folder: "2017-08-21-Viajes-Arquibuuur-Belenpuuur-Cantabria-21-a-26-de-agosto-de-2017",
        title: "Cantabria 21 a 26 de agosto de 2017",
        files: ["IMG_7783.jpg", "IMG_7826.jpg", "IMG_7840.jpg", "IMG_7878.jpg", "IMG_7958.jpg", "IMG_7967.jpg", "IMG_7981.jpg", "IMG_8016.jpg", "IMG_8036.jpg", "IMG_8081.jpg", "IMG_8099.jpg", "IMG_8108.jpg", "IMG_8137.jpg", "IMG_8163.jpg", "IMG_8168.jpg", "IMG_8189.jpg", "IMG_8194.jpg", "IMG_8254.jpg", "IMG_8306.jpg", "IMG_8359.jpg", "IMG_8370.jpg", "IMG_8398.jpg", "IMG_8422.jpg"]
    },
    {
        folder: "2017-08-10-SesiónExterior-Pedro-10-de-agosto-de-2017",
        title: "Pedro 10 de agosto de 2017",
        files: ["IMG_7364.jpg", "IMG_7372.jpg", "IMG_7429.jpg", "IMG_7434.jpg", "IMG_7461.jpg"]
    },
    {
        folder: "2017-08-09-SesiónExterior-Isa-9-de-agosto-de-2017",
        title: "Isa 9 de agosto de 2017",
        files: ["IMG_7111.jpg", "IMG_7220.jpg", "IMG_7238.jpg", "IMG_7324.jpg"]
    },
    {
        folder: "2017-06-27-SesionExterior-Mamá-27-de-junio-de-2017",
        title: "Mamá 27 de junio de 2017",
        files: ["IMG_5731.jpg", "IMG_5749.jpg", "IMG_5811.jpg"]
    },
    {
        folder: "2017-06-22-SesiónExterior-Saray-22-de-junio-de-2017",
        title: "Saray 22 de junio de 2017",
        files: ["IMG_5516.jpg", "IMG_5542.jpg", "IMG_5567.jpg"]
    },
    {
        folder: "2017-06-21-SesiónExterior-Noelia-21-de-junio-de-2017",
        title: "Noelia 21 de junio de 2017",
        files: ["IMG_5294.jpg", "IMG_5304.jpg", "IMG_5326.jpg", "IMG_5332.jpg"]
    },
    {
        folder: "2017-06-10-SesiónExterior-Inma-10-de-junio-de-2017",
        title: "Inma 10 de junio de 2017",
        files: ["IMG_5025.jpg", "IMG_5099.jpg", "IMG_5104.jpg", "IMG_5108.jpg"]
    },
    {
        folder: "2017-04-14-Viajes-Irún-y-San-Sebastián-14-a-16-de-abril-de-2017",
        title: "Irún y San Sebastián 14 a 16 de abril de 2017",
        files: ["IMG_3131-2.jpg", "IMG_3149.JPG", "IMG_3163.JPG", "IMG_3177-2.jpg", "IMG_3317.JPG", "IMG_3391-2.jpg", "IMG_3455-2.jpg"]
    },
    {
        folder: "2017-04-06-Arquibuuur-Viajes-Lisboa-6-a-11-de-abril-de-2017",
        title: "Lisboa 6 a 11 de abril de 2017",
        files: ["IMG_1919-2.jpg", "IMG_1922-2.jpg", "IMG_1957-2.jpg", "IMG_2054-2.jpg", "IMG_2061-2.jpg", "IMG_2070-2.jpg", "IMG_2243-2.jpg", "IMG_2511-2.jpg", "IMG_2799.JPG"]
    },
    {
        folder: "2017-02-25-Belenbruuum-Classic-Auto-25-de-febrero-de-2017",
        title: "Classic Auto 25 de febrero de 2017",
        files: ["IMG_0630.JPG", "IMG_0647.JPG", "IMG_0650.JPG", "IMG_0656.JPG"]
    },
    {
        folder: "2016-10-12-Viajes-Arquibuuur-Zaragoza-12-de-octubre-de-2016",
        title: "Zaragoza 12 de octubre de 2016",
        files: ["IMG_6774.JPG", "IMG_6801.JPG", "IMG_6825.JPG", "IMG_6832.JPG", "IMG_6911.JPG", "IMG_6939.JPG"]
    },
    {
        folder: "2016-06-19-Festibuuur-Estampa-Flamenca-19-de-junio-de-2016",
        title: "Estampa Flamenca 19 de junio de 2016",
        files: ["IMG_3341.JPG", "IMG_3436.JPG", "IMG_3471.JPG", "IMG_3499.JPG"]
    }
];
