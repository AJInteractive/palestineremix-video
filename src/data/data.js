/*eslint-disable */

// from palestineremix-mobile

const TITLES = {
  E: [
    "Going against the grain",
    "Against the wall",
    "Area C",
    "Beyond the walls",
    "Forbidden Pilgrimage",
    "Gaza left in the dark",
    "Gaza lives on",
    "Gaza we are coming",
    "Inside Shin Bet",
    "Last shepherds of the valley",
    "Lost cities of Palestine",
    "Palestina Amore",
    "The pain inside",
    "Stronger than words",
    "The price of Oslo 1",
    "The price of Oslo 2",
    "Hunger Strike",
    "Al Nakba 1",
    "Al Nakba 2",
    "Al Nakba 3",
    "Al Nakba 4",
    "Deportees",
    "Return to Morocco",
    "Stories from the Intifada p1",
    "Stories from the Intifada p2",
    "Born in 1948",
    "Jerusalem Hitting Home",
    "Palestine Divided"
  ],
  T: ["İSRAİLLİ RADİKAL GİDEON LEVİ","DUVARA KARŞI","C BÖLGESİ","AÇIK CEZAEVİ","YASAKLAR ÜLKESİ İSRAİL","GAZZE'Yİ KARARTMA","GAZZE YENİDEN","BEKLE BİZİ GAZZE","GÖLGE TEŞKİLAT ŞİN BET","DİRENEN TOPRAKLAR","YİTİK ŞEHİRLER","FİLİSTİN AŞKINA","İŞGALİN ASKERLERİ","GAZZE: SAĞIR DÜNYA","OSLO'NUN BEDELİ - 1. BÖLÜM","OSLO'NUN BEDELİ - 2. BÖLÜM","ÖLÜMÜNE DİRENİŞ",
  "BÜYÜK FELAKET - 1. BÖLÜM","BÜYÜK FELAKET - 2. BÖLÜM","BÜYÜK FELAKET - 3. BÖLÜM","BÜYÜK FELAKET - 4. BÖLÜM","SÜRGÜN EDİLENLER","FAS'A DÖNÜŞ","İNTİFADA HİKAYELERİ - 1","İNTİFADA HİKAYELERİ - 2","48'LİLER","KUDÜS: KENDİ EVİNİ YIKMAK","PARÇALANAN FİLİSTİN"],
  B: ["Protiv struje","Borba protiv zida","Zona C ","Izvan zidina","Zabranjeno hodočašće","Gaza ostavljena u mraku","Gaza će i dalje živjeti","Gaza dolazimo!","Shin Bet: Iza kulisa","Posljednji pastiri doline Jordana","Izgubljeni gradovi Palestine","Palestino, ljubavi moja","Unutrašnji bol","Jači od riječi","Cijena Osla: prvi dio","Cijena Osla: drugi dio","Štrajk glađu",
  "Al Nakba: Palestinska katastrofa, Epizoda 1","Al Nakba: Palestinska katastrofa, Epizoda 2","Al Nakba: Palestinska katastrofa, Epizoda 3","Al Nakba: Palestinska katastrofa, Epizoda 4","Deportovani","Povratak u Maroko","Priče Intifade 1","Priče Intifade 2","Rođene '48-e","Jeruzalem: rušenje domova","Podijeljena Palestina"],
  A: ["ضد التيار","قرى تتحدى الجدار","مناطق جيم","خارج الأسوار","الحج المحرم","حياة بالجدول","غزة تعيش","غزة إننا قادمون","الشاباك","الاقتلاع من الغور","اغتيال المدينة","فلسطين في قلوب إيطالية","المستنقع","أقوى من الكلام","ثمن أوسلو الجزء الأول","ثمن أوسلو الجزء الثاني","معركة الأمعاء الخاوية","النكبة الجزء الأول","النكبة الجزء الثاني","النكبة الجزء الثالث","النكبة الجزء الرابع","منسيون خارج الوطن","فسيفساء","حكايات من انتفاضة الحجارة الجزء الأول","حكايات من انتفاضة الحجارة الجزء الثاني","ولدن في النكبة","اهدم بيتك بيدك","مقطع الأوصال"]
};

const VIDEOS = {
	E:
[
"http://www.youtube.com/watch?v=4hRzdAgc8FM,http://player.vimeo.com/external/109585527.mobile.mp4?s=7cc3e82e7500925575fa4a80aa38a380,http://player.vimeo.com/external/109585527.sd.mp4?s=e99f33109ff46499874083681f22910a,http://player.vimeo.com/external/109585527.hd.mp4?s=7bd504c45f373de7f627177e3c3f1bcb",
"http://www.youtube.com/watch?v=HomYG95MO3k,http://player.vimeo.com/external/109585525.mobile.mp4?s=0e9cf2efcd029f38f4ac24adf0e04527,http://player.vimeo.com/external/109585525.sd.mp4?s=b84469ac8b71df005ce2da6ec1568e7f,http://player.vimeo.com/external/109585525.hd.mp4?s=dbcb3c3e779426f92f5ef51f64acbba5",
"http://www.youtube.com/watch?v=TwJHG2KSsG0,http://player.vimeo.com/external/110884059.mobile.mp4?s=51f59906a97efc8cc800238f3890071f,http://player.vimeo.com/external/110884059.sd.mp4?s=44dec8da908f8fe861803178db968db4,http://player.vimeo.com/external/110884059.hd.mp4?s=3eb6e351f73ca929189cbf1e2d74c8c4",
"http://www.youtube.com/watch?v=oy4PWG6LCAs,http://player.vimeo.com/external/109585524.mobile.mp4?s=2a7d529e9ad8e7e965c621a28aa771de,http://player.vimeo.com/external/109585524.sd.mp4?s=a7565459a936ac7d3e616fd2d9dc4df1,http://player.vimeo.com/external/109585524.hd.mp4?s=988c547e4e5d25236d5862976af9e836",
"http://www.youtube.com/watch?v=2JqmcqkIrFE,http://player.vimeo.com/external/110467198.mobile.mp4?s=2368448e7a6a6aa807d1af5e75dad4f7,http://player.vimeo.com/external/110467198.sd.mp4?s=4c5bb5c5d6991eb23992e0175c7909d6,http://player.vimeo.com/external/110467198.hd.mp4?s=2f954a2e824e152bc3bf29a616511b92",
"http://www.youtube.com/watch?v=t657lfeIg4s,http://player.vimeo.com/external/109585526.mobile.mp4?s=5e8942182f3854fad2f86ceee7071d30,http://player.vimeo.com/external/109585526.sd.mp4?s=60efbf26a631aad508d922a50d6d2952,http://player.vimeo.com/external/109585526.hd.mp4?s=1fe0282cf14b8ae2bd82f59f21ad43cb",
"http://www.youtube.com/watch?v=Jp2UcV2Ldaw,http://player.vimeo.com/external/110467201.mobile.mp4?s=43e858a614b39f36250d364d08982262,http://player.vimeo.com/external/110467201.sd.mp4?s=61be96df1d407d817b06cee2f63f6e49,http://player.vimeo.com/external/110467201.hd.mp4?s=53965bd7c092c753d3ab3506273bb5c4",
"http://www.youtube.com/watch?v=a9rGEPGpDis,http://player.vimeo.com/external/110467206.mobile.mp4?s=363243d6fd8e3a2b4831bcee5bfaa329,http://player.vimeo.com/external/110467206.sd.mp4?s=404e9e6b9c502c8b40161c6e9507fd00,http://player.vimeo.com/external/110467206.hd.mp4?s=d529d60db0e6b9374f75301837c6580e",
"http://www.youtube.com/watch?v=3dBBBnxKgeQ,http://player.vimeo.com/external/110888355.mobile.mp4?s=e109a6ee7b9518be2fca986bf6ffc3be,http://player.vimeo.com/external/110888355.sd.mp4?s=50eedb2acda47d10fe34f1912e812072,http://player.vimeo.com/external/110888355.hd.mp4?s=9360b21d5cb36f15bed0353a02b0d044",
"http://www.youtube.com/watch?v=GHcFqNICoJM,http://player.vimeo.com/external/110889321.mobile.mp4?s=373da2d55f91e06bfc1d0d6abff59953,http://player.vimeo.com/external/110889321.sd.mp4?s=11e3a3315488fd0d73f692e193d6f67a,http://player.vimeo.com/external/110889321.hd.mp4?s=05d019878de216dffe78c98e332bcd52",
"http://www.youtube.com/watch?v=sT22bwJ55Sw,http://player.vimeo.com/external/111081054.mobile.mp4?s=ff90091fdfd0036e06e93286aeddb8b9,http://player.vimeo.com/external/111081054.sd.mp4?s=f01c9c1be937d4ba8cf9e3703bcf07e7,http://player.vimeo.com/external/111081054.hd.mp4?s=6aa8d5d30823a9e7bd04cdc1bec455d6",
"http://www.youtube.com/watch?v=sXDngNEqdnA,http://player.vimeo.com/external/111081055.mobile.mp4?s=7a43ccbcbcea35dd9c8aca3f0efb96dd,http://player.vimeo.com/external/111081055.sd.mp4?s=58b07c38865d4a98cb8b311bb5dc9c2b,http://player.vimeo.com/external/111081055.hd.mp4?s=518ee40011cbdbff539bb8e5cfca7165",
"http://www.youtube.com/watch?v=iOoW9-gUCDw,http://player.vimeo.com/external/110697549.mobile.mp4?s=73f098f7e661660e9fa87d1d594a4a50,http://player.vimeo.com/external/110697549.sd.mp4?s=760f42f10760ad4273b7a60b226f2491,http://player.vimeo.com/external/110697549.hd.mp4?s=cee08621e19cb94e50df5997d25620b0",
"http://www.youtube.com/watch?v=NRP-j1eM2Ck,http://player.vimeo.com/external/111081091.mobile.mp4?s=e293bcbc2be7d5e84342371b8c1e2598,http://player.vimeo.com/external/111081091.sd.mp4?s=ead9a0a6f369b24bab6bdeb94a4a23f6,http://player.vimeo.com/external/111081091.hd.mp4?s=fcf751b56cab4dc49e24efb01e8a0ae1",
"http://www.youtube.com/watch?v=ism-ctaSbw0,http://player.vimeo.com/external/110904621.mobile.mp4?s=312e542c7d64534d54f7f9b5e6ab1078,http://player.vimeo.com/external/110904621.sd.mp4?s=e429e308721b41a22ed5cc8acdd32647,http://player.vimeo.com/external/110904621.hd.mp4?s=b5055337d78a967c8e98372a11b57b0a",
"http://www.youtube.com/watch?v=TgFWEVQTeHM,http://player.vimeo.com/external/111081057.mobile.mp4?s=2aa4a2bed0e855ee249e8c620e324c26,http://player.vimeo.com/external/111081057.sd.mp4?s=c65048e4656dfde791f8f78ac87cb6ed,http://player.vimeo.com/external/111081057.hd.mp4?s=98db1b1544a502afcfb92172c7380574",
"http://www.youtube.com/watch?v=u49jwfcLwuE,http://player.vimeo.com/external/110467238.mobile.mp4?s=0690d58aa180bd66e9043975361639de,http://player.vimeo.com/external/110467238.sd.mp4?s=e8a332cbffc1cfa2dcfafe71abe40dc3,http://player.vimeo.com/external/110467238.hd.mp4?s=1d8125fcb86fbc884d8e7ab2d71aa9d5",
"http://www.youtube.com/watch?v=H7FML0wzJ6A,http://player.vimeo.com/external/111081058.mobile.mp4?s=2c9283df2d2132791282fd473d95d413,http://player.vimeo.com/external/111081058.sd.mp4?s=d20ded9a08ad462f6ff44790b40d7693,http://player.vimeo.com/external/111081058.hd.mp4?s=cad76b3823904863171ec927e50bd7a0",
"http://www.youtube.com/watch?v=yI2D5Fsd9lg,http://player.vimeo.com/external/111081059.mobile.mp4?s=9a8cd0a739805a9b847e2a330e3af851,http://player.vimeo.com/external/111081059.sd.mp4?s=6c853d32b8dd2e7167a0f79d4c06033d,http://player.vimeo.com/external/111081059.hd.mp4?s=f08274591b8f2d75919792837dcbb99a",
"http://www.youtube.com/watch?v=5SKECszemmA,http://player.vimeo.com/external/111081089.mobile.mp4?s=2da6e706be1f8852def6bda4d77eb1cf,http://player.vimeo.com/external/111081089.sd.mp4?s=95254f6be7ac51226c4dc37ed5e602c9,http://player.vimeo.com/external/111081089.hd.mp4?s=7fc73b36d5f23c2b46272f0c2466fdeb",
"http://www.youtube.com/watch?v=0m__A7MlDrk,http://player.vimeo.com/external/111081090.mobile.mp4?s=f4fde8d2304350fed1fc70771f292032,http://player.vimeo.com/external/111081090.sd.mp4?s=e4e8d05d5093187411eda737120d1c54,http://player.vimeo.com/external/111081090.hd.mp4?s=a243a21bb0ceb9c63e1504fa6ae16376",
// new:
"http://www.youtube.com/watch?v=gvVlHE5nYJw,http://player.vimeo.com/external/129669280.mobile.mp4?s=ecd8a4bf45009a26f1a1e5facab0ff74,http://player.vimeo.com/external/129669280.sd.mp4?s=67cccdeeab0622a8c2a583187bd936ab,http://player.vimeo.com/external/129669280.hd.mp4?s=e2b2185feabd68d101b37f5830c84404",
"http://www.youtube.com/watch?v=kdBMXTd0DfI,http://player.vimeo.com/external/129669283.mobile.mp4?s=5fe075e71719b42cfc36f67b118a9e19,http://player.vimeo.com/external/129669283.sd.mp4?s=709197ba49b0f4d924c6a95d9fd80852,http://player.vimeo.com/external/129669283.hd.mp4?s=041ac74ba08aec62e8943cdaa6273b49",
"http://www.youtube.com/watch?v=0pRnUPaIesQ,http://player.vimeo.com/external/129669284.mobile.mp4?s=91a0fe51ff234800f740a8f0df704f86,http://player.vimeo.com/external/129669284.sd.mp4?s=4c8d2e93cab17a02676f9d107ccf03a7,http://player.vimeo.com/external/129669284.hd.mp4?s=5fd5f7d52570ef419ac3c5baf5878b7c",
"http://www.youtube.com/watch?v=S6P6JNDfbRE,http://player.vimeo.com/external/130102374.mobile.mp4?s=dfe5057f497bb8f3dbf0d64a67bf45d1,http://player.vimeo.com/external/130102374.sd.mp4?s=de7125f7bd4f1a0dd59a589a9524a590,http://player.vimeo.com/external/130102374.hd.mp4?s=fcb7680f87cf1777b129085890163b91",
"http://www.youtube.com/watch?v=b_rUa26HSDk,http://player.vimeo.com/external/129669287.mobile.mp4?s=5f5e9dc074d733f471bf1759b2fd7d6d,http://player.vimeo.com/external/129669287.sd.mp4?s=12a321b15d408c3da395675f5fbfdb02,http://player.vimeo.com/external/129669287.hd.mp4?s=5f563bdcba33a0fbb053853d13f8dd30",
"http://www.youtube.com/watch?v=uawQ84q7Fl0,http://player.vimeo.com/external/129669812.mobile.mp4?s=e5c6fc49081ed17eb363d41c94c4b6a5,http://player.vimeo.com/external/129669812.sd.mp4?s=1d7fb4d35960cfd0771bdeda82ac723e,http://player.vimeo.com/external/129669812.hd.mp4?s=0ebaa742f4d74ea6b84f6d641dae5dda",
"http://www.youtube.com/watch?v=mW0O0KIfsxs,http://player.vimeo.com/external/131341123.mobile.mp4?s=b9176169dddc24ef95601f9d95e16710,http://player.vimeo.com/external/131341123.sd.mp4?s=640c68f6ae913dc1b2e08cac6e75e19f,http://player.vimeo.com/external/131341123.hd.mp4?s=d9f3cac89e0d8570cbda1d67217bbfd9"

],

	A:
[
"http://www.youtube.com/watch?v=Sl-l0-uFgJ0,http://player.vimeo.com/external/109676100.mobile.mp4?s=492c39a5d904a9f1f188b0a5bf3e6b08,http://player.vimeo.com/external/109676100.sd.mp4?s=029535cf6fa8612288eea88121f3f83e,http://player.vimeo.com/external/109676100.hd.mp4?s=5f80e6a80c367b54273be5918a0eca3a",
"http://www.youtube.com/watch?v=jATIsS9_swo,http://player.vimeo.com/external/109676098.mobile.mp4?s=a8ae7830fd73d9b89c849b10795773b1,http://player.vimeo.com/external/109676098.sd.mp4?s=a02df6b7dd402410d4c43a8168bc95be,http://player.vimeo.com/external/109676098.hd.mp4?s=964705a807ec00da4b169ad1804a7222",
"http://www.youtube.com/watch?v=LaBwaCDPm4w,http://player.vimeo.com/external/110884058.mobile.mp4?s=85abff8effebb6906bf2105cee2590c0,http://player.vimeo.com/external/110884058.sd.mp4?s=fc54f6f60379056f9a403ae8ea9b55d1,http://player.vimeo.com/external/110884058.hd.mp4?s=bd53b55a2058f5165c9f903cfe5f45dc",
"http://www.youtube.com/watch?v=WaLBB2kPkDw,http://player.vimeo.com/external/109676101.mobile.mp4?s=d236c110092448b2d74b8f21aa10ab75,http://player.vimeo.com/external/109676101.sd.mp4?s=888993aec8141fa73bda9d427fdef4b2,http://player.vimeo.com/external/109676101.hd.mp4?s=697c8c466ff15b6e5c06c4ff153c9dcc",
"http://www.youtube.com/watch?v=ZulMDK5qhBo,http://player.vimeo.com/external/110699967.mobile.mp4?s=fa132ac220e0390d3172e4a847666dc7,http://player.vimeo.com/external/110699967.sd.mp4?s=214d159d86cb99108bf282888ad9ec62,http://player.vimeo.com/external/110699967.hd.mp4?s=a10fe4f950e8a0261518bfdf77af6f11",
"http://www.youtube.com/watch?v=jrVGbkkBiHM,http://player.vimeo.com/external/109676099.mobile.mp4?s=11f9aa793c9fa1315ecb2bdf2ddd8f48,http://player.vimeo.com/external/109676099.sd.mp4?s=f0a06547303478e5279dede658b41122,http://player.vimeo.com/external/109676099.hd.mp4?s=a09896b6f559a678ac5dda92ae1e582c",
"http://www.youtube.com/watch?v=bcHnaujEvU0,http://player.vimeo.com/external/110699968.mobile.mp4?s=1b6e79fefc235db74268b30374de5108,http://player.vimeo.com/external/110699968.sd.mp4?s=231462e6c3ffc1b76bb6de304581bfd9,http://player.vimeo.com/external/110699968.hd.mp4?s=ee9b223b2b368421ea0ca2019091b5f6",
"http://www.youtube.com/watch?v=pAjBpvZaSOI,http://player.vimeo.com/external/110699970.mobile.mp4?s=0b37dfea3ac28c6b945eb27b69c50dd3,http://player.vimeo.com/external/110699970.sd.mp4?s=f73e51fedb4d4f326d2d3d2d700a3a91,http://player.vimeo.com/external/110699970.hd.mp4?s=4fd5c49f8cfc94e949189fdec2f5536a",
"http://www.youtube.com/watch?v=u-TVbo9duz0,http://player.vimeo.com/external/110888354.mobile.mp4?s=1484bc5d663a38c704a1150ad3481f97,http://player.vimeo.com/external/110888354.sd.mp4?s=9636f7ac373bb0bd2aabc38d66637c37,http://player.vimeo.com/external/110888354.hd.mp4?s=9f7743e694295bbd297ca81615d323bd",
"http://www.youtube.com/watch?v=bgmoxds_p94,http://player.vimeo.com/external/110889320.mobile.mp4?s=d5b8d0b2c217434904d720e30ba40583,http://player.vimeo.com/external/110889320.sd.mp4?s=2d036ecac58e54623a8f92bc4e004ed2,http://player.vimeo.com/external/110889320.hd.mp4?s=d9dc0b2118485945ffc7383691ecb47d",
"http://www.youtube.com/watch?v=8n6E6GKEz00,http://player.vimeo.com/external/111081706.mobile.mp4?s=326f72b5e0d728dd1e6b14a3039dc4ab,http://player.vimeo.com/external/111081706.sd.mp4?s=be4dff92f408eff4f7672384ebae9abd,http://player.vimeo.com/external/111081706.hd.mp4?s=fe0ecbf8b45c0602ed5cdf942a486b2f",
"http://www.youtube.com/watch?v=dpPpT-KddoI,http://player.vimeo.com/external/111081707.mobile.mp4?s=887fe973f974587ff606187622e72263,http://player.vimeo.com/external/111081707.sd.mp4?s=4864c5f5aeefe21d89b9eb85ffd6b44a,http://player.vimeo.com/external/111081707.hd.mp4?s=49930c5c08c2899aa8e5dfc9e0a76c31",
"http://www.youtube.com/watch?v=KJSbg00EJNY,http://player.vimeo.com/external/110699971.mobile.mp4?s=7108692f89d1d08dd252be1165a23dea,http://player.vimeo.com/external/110699971.sd.mp4?s=d0812a07fe855ca23db7db2d7b08f68b,http://player.vimeo.com/external/110699971.hd.mp4?s=3d9fdcf5b5ae9688f20ca6e215454057",
"http://www.youtube.com/watch?v=KJSbg00EJNY,http://player.vimeo.com/external/111081708.mobile.mp4?s=4a154f32203e8094783d0a02efb2d683,http://player.vimeo.com/external/111081708.sd.mp4?s=9f5a802e7cda924e5a937034feafd1dc,http://player.vimeo.com/external/111081708.hd.mp4?s=6bf5cd6eb2d18779296d2fd85ae1bc85",
"http://www.youtube.com/watch?v=fstR_9s2sKI,http://player.vimeo.com/external/110904619.mobile.mp4?s=eb8b36729062e3341ca879c40d734312,http://player.vimeo.com/external/110904619.sd.mp4?s=64ce6472dae88e2fba51137a600a8838,http://player.vimeo.com/external/110904619.hd.mp4?s=8fe1322568109750101de61e6bc6f1a7",
"http://www.youtube.com/watch?v=B2emYLb13yg,http://player.vimeo.com/external/110904620.mobile.mp4?s=d898e9e0507a91436049b3a4291af84e,http://player.vimeo.com/external/110904620.sd.mp4?s=556723fffead865378872d4c676b116f,http://player.vimeo.com/external/110904620.hd.mp4?s=7cc272bcaceb87cf1f6b6c2c360d5390",
"http://www.youtube.com/watch?v=K293aqf4LKk,http://player.vimeo.com/external/110699973.mobile.mp4?s=d21883931cf4794c05d008a454254c29,http://player.vimeo.com/external/110699973.sd.mp4?s=b66c0a0e7f808434131468bbff60a77e,http://player.vimeo.com/external/110699973.hd.mp4?s=92f4e3d1a1b97ab07613df4c51e49ed3",
"http://www.youtube.com/watch?v=rFYmRX7A_Fc,http://player.vimeo.com/external/111081702.mobile.mp4?s=abfb0e5e03306403415e9acd3d2418ce,http://player.vimeo.com/external/111081702.sd.mp4?s=186077c154c7ff6fe50c8df131ab106d,http://player.vimeo.com/external/111081702.hd.mp4?s=1cf17720bcb1274cd8a4e2cb85f1af8c",
"http://www.youtube.com/watch?v=WuBKtzi2Cos,http://player.vimeo.com/external/111081701.mobile.mp4?s=8c765af7431e158f6ddba499943121d5,http://player.vimeo.com/external/111081701.sd.mp4?s=138fc50b8572993c6a42754c72690c9f,http://player.vimeo.com/external/111081701.hd.mp4?s=a12b63ca215bc1b2f03a39db7f1f8dc5",
"http://www.youtube.com/watch?v=z4w43Ynv1qM,http://player.vimeo.com/external/111081703.mobile.mp4?s=599f101ec177a4e078da44dbdc8cbfe5,http://player.vimeo.com/external/111081703.sd.mp4?s=a81a2929cbfb1d9d52145911225c7fd1,http://player.vimeo.com/external/111081703.hd.mp4?s=921d9fc2812bad401c8662ffa95ab3e8",
"http://www.youtube.com/watch?v=9sMQFrPnYfg,http://player.vimeo.com/external/111081704.mobile.mp4?s=d2be573c85d6169343bc18eff02e85b4,http://player.vimeo.com/external/111081704.sd.mp4?s=0ac5c3ffb44169d6f8e198914ab7b519,http://player.vimeo.com/external/111081704.hd.mp4?s=594fc0668efe5f5ff086191584719c07",
"http://www.youtube.com/watch?v=9DhiGASOCX8,http://player.vimeo.com/external/129860381.mobile.mp4?s=fac9f1b5c9c642c0a964e5cf36535f2e,http://player.vimeo.com/external/129860381.sd.mp4?s=5e2271dcc3e84086da93dc78cf45d82b,http://player.vimeo.com/external/129860381.hd.mp4?s=f98be818d46addbd78a9d99d747ef1cf",
"http://www.youtube.com/watch?v=L7Mf3vM9JFM,http://player.vimeo.com/external/129860383.mobile.mp4?s=a7712f6daa580cfcc4800b964d7a32fd,http://player.vimeo.com/external/129860383.sd.mp4?s=76cb7745f8a2d9ab7344bced26bb56b2,http://player.vimeo.com/external/129860383.hd.mp4?s=909a718a397dbaf861ea6fa6d9a85b06",
"http://www.youtube.com/watch?v=tVRfYZqKsLc,http://player.vimeo.com/external/129860384.mobile.mp4?s=ff86e42222ab9d3fb4b175ac0ed73183,http://player.vimeo.com/external/129860384.sd.mp4?s=1b2fe6ae662d2634853b7703063b4c2b,http://player.vimeo.com/external/129860384.hd.mp4?s=3a97e4faac5d89cb2bc4ea48788d1d59",
"http://www.youtube.com/watch?v=6iJf35lzB8o,http://player.vimeo.com/external/129860385.mobile.mp4?s=871e9e5969386d6aaa9c89b4fae1e0aa,http://player.vimeo.com/external/129860385.sd.mp4?s=18dadf8561579a68e5bcb0c42eafcd0a,http://player.vimeo.com/external/129860385.hd.mp4?s=d00d653a9c2089b8fa2bd623ad98d239",
"http://www.youtube.com/watch?v=kSlQe7C1QSo,http://player.vimeo.com/external/129774128.mobile.mp4?s=b0dc890f5b7e85080717f5ff8ea87851,http://player.vimeo.com/external/129774128.sd.mp4?s=331bbf7dd850bac6386a2fed0034797c,http://player.vimeo.com/external/129774128.hd.mp4?s=19e017129160af5226b125ca1a2e07fb",
"http://www.youtube.com/watch?v=3fHR9QYZVyE,http://player.vimeo.com/external/129860388.mobile.mp4?s=1d96fa13edd6f034e1b4dad0550dfb6e,http://player.vimeo.com/external/129860388.sd.mp4?s=c10e516b4f51d586b17cffa7e1b7e9f6,http://player.vimeo.com/external/129860388.hd.mp4?s=ea72fff02c021854b657354d58ec09ad",
"http://www.youtube.com/watch?v=FmkEyFMj4hs,http://player.vimeo.com/external/129860404.mobile.mp4?s=83a81d774e6b3e9a37573c996b48501e,http://player.vimeo.com/external/129860404.sd.mp4?s=3e55c9262310935374cfe311b9202aa1,http://player.vimeo.com/external/129860404.hd.mp4?s=c707eb5b68edf206f444270d6f8e73b2"
],
	B: //FIXME missing YT

[
",http://player.vimeo.com/external/110058518.mobile.mp4?s=98e86d0e453a922ac0faaaa763e93eb0,http://player.vimeo.com/external/110058518.sd.mp4?s=1d904d374903533bd2df0c91d0231edd,http://player.vimeo.com/external/110058518.hd.mp4?s=063ac708ae67f9e13d8ab07b66c3b812",
",http://player.vimeo.com/external/110446986.mobile.mp4?s=9f35cdecea4ee5b977454efba01b502f,http://player.vimeo.com/external/110446986.sd.mp4?s=38ebb19fce8801707f6bc4df6ade7eae,http://player.vimeo.com/external/110446986.hd.mp4?s=8b67b196fac0e8c1e0e4f7a1af906940",
",http://player.vimeo.com/external/110118914.mobile.mp4?s=360e42ccbc686d99ac1e58ef724dd138,http://player.vimeo.com/external/110118914.sd.mp4?s=7a7c38657d0f1ec2df584f95afef19f1,http://player.vimeo.com/external/110118914.hd.mp4?s=013506a17bfb7e38616e691fb365907a",
",http://player.vimeo.com/external/110063882.mobile.mp4?s=b7eb90d5a867158fedb893c2b9e63b37,http://player.vimeo.com/external/110063882.sd.mp4?s=56864bccf69973b994652882dacc31d0,http://player.vimeo.com/external/110063882.hd.mp4?s=e2682e62920295b45189ca213cb0e78e",
",http://player.vimeo.com/external/110118916.mobile.mp4?s=93b57b70458f775a3ec041075fbcd4af,http://player.vimeo.com/external/110118916.sd.mp4?s=294bd01fb0d0121960235c7e6a8038ed,http://player.vimeo.com/external/110118916.hd.mp4?s=5161c4e374bb532d1600174e73473ef0",
",http://player.vimeo.com/external/110341754.mobile.mp4?s=f34bde52bbb9736b596e5a42d5d2006c,http://player.vimeo.com/external/110341754.sd.mp4?s=682e1082d81753b49ec38408c7d1b4ca,http://player.vimeo.com/external/110341754.hd.mp4?s=510d3a3ebb5a912eb38d011b0da78b9d",
",http://player.vimeo.com/external/110118915.mobile.mp4?s=aa0b1f12d1a044a770309f0231e991c8,http://player.vimeo.com/external/110118915.sd.mp4?s=ca41675db8878d9114f4ffd61dc3a9d4,http://player.vimeo.com/external/110118915.hd.mp4?s=fe56f57ca8377c58a0f2a65373495355",
",http://player.vimeo.com/external/110128583.mobile.mp4?s=5a00583ddd3476112ba1b3219ede9836,http://player.vimeo.com/external/110128583.sd.mp4?s=20376362c753eb4496c730a63bdcc1f9,http://player.vimeo.com/external/110128583.hd.mp4?s=f82420424045568dae012fd388c9d2af",
",http://player.vimeo.com/external/110128582.mobile.mp4?s=dfbba0758dda28d2d6239fe2bfb8dcc6,http://player.vimeo.com/external/110128582.sd.mp4?s=dde4738ccb1f81cb6810a226ca6792c3,http://player.vimeo.com/external/110128582.hd.mp4?s=51410b0d80d53f800e41d80e15c15e89",
",http://player.vimeo.com/external/110125298.mobile.mp4?s=6fdd631cb44786c0da5704b7c2c58407,http://player.vimeo.com/external/110125298.sd.mp4?s=ff9439c504600144109eff533e553d8f,http://player.vimeo.com/external/110125298.hd.mp4?s=4c18b4c2105d66d6a98069b05f1733da",
",http://player.vimeo.com/external/110129858.mobile.mp4?s=50c17875b5fe867b10c2141d06e03c0a,http://player.vimeo.com/external/110129858.sd.mp4?s=57f086b75af4c64acddf116a1cfa9bcd,http://player.vimeo.com/external/110129858.hd.mp4?s=ee7e23206ae13704da69f8ea0b172bd4",
",http://player.vimeo.com/external/110129860.mobile.mp4?s=656f7cfd9554b80d1551084092a62ca2,http://player.vimeo.com/external/110129860.sd.mp4?s=6ef1853f9f890b99de66650a93914a5d,http://player.vimeo.com/external/110129860.hd.mp4?s=ea098fc168b3f9882f9917581669d35b",
",http://player.vimeo.com/external/110128581.mobile.mp4?s=d188b22f717e3a4fc1fb711dd554e39e,http://player.vimeo.com/external/110128581.sd.mp4?s=b757ba20552b5a7068ccabb514a9bfa2,http://player.vimeo.com/external/110128581.hd.mp4?s=6b48fa2be09fe90aed9212f4d1f52705",
",http://player.vimeo.com/external/110134174.mobile.mp4?s=0e8690b5b6682a99e0d310e318c5a246,http://player.vimeo.com/external/110134174.sd.mp4?s=bb85682f2e228c154d80002d209ff8f5,http://player.vimeo.com/external/110134174.hd.mp4?s=565f3daff51d71002141c61f06636437",
",http://player.vimeo.com/external/110125299.mobile.mp4?s=e6eaad266f5f989d34bc666a81d8f58d,http://player.vimeo.com/external/110125299.sd.mp4?s=8864da41b1ea27038a758b03c6d3af09,http://player.vimeo.com/external/110125299.hd.mp4?s=77638bc63497e50a376b02264722d5d9",
",http://player.vimeo.com/external/110128580.mobile.mp4?s=0e84a5982ae709daae97a674ce5f9963,http://player.vimeo.com/external/110128580.sd.mp4?s=3afbf306fcbfea47d6f704cdcc7e0252,http://player.vimeo.com/external/110128580.hd.mp4?s=0b2f0a61204844bd72b012c6b653bbe7",
",http://player.vimeo.com/external/110134175.mobile.mp4?s=308aecb77e730087b31679a9af86acd3,http://player.vimeo.com/external/110134175.sd.mp4?s=c1d6ee06f1e4f168fac24ab83f726715,http://player.vimeo.com/external/110134175.hd.mp4?s=19c8fd2379499e9f205edca55abb1cc0",
"http://www.youtube.com/watch?v=ib-GtISH7Q4,http://player.vimeo.com/external/110118917.mobile.mp4?s=c2fe2ff23f745c9b0939aad8013a2f84,http://player.vimeo.com/external/110118917.sd.mp4?s=f31746a901157007d4c1bf19292e54cd,http://player.vimeo.com/external/110118917.hd.mp4?s=dc61474cb5c2eff8d90c7f5752a98820",
"http://www.youtube.com/watch?v=JUamg_1D24Q,http://player.vimeo.com/external/110118918.mobile.mp4?s=0cdd3997e96eeca19f002056b414e460,http://player.vimeo.com/external/110118918.sd.mp4?s=29ffdb9d65e8ad65a809d721298fe30a,http://player.vimeo.com/external/110118918.hd.mp4?s=2e7250aea7e5b4786c4b4586bfab75d6",
"http://www.youtube.com/watch?v=ckUAzoK4Tnw,http://player.vimeo.com/external/110121998.mobile.mp4?s=42948c983badf380e5e06029093cb629,http://player.vimeo.com/external/110121998.sd.mp4?s=af9742b63e65bd26ca9035bf680af726,http://player.vimeo.com/external/110121998.hd.mp4?s=5144a500c0d0a995b530c9efe158024b",
",http://player.vimeo.com/external/110121999.mobile.mp4?s=6e0952b3840090ccffd4319dc05f5d56,http://player.vimeo.com/external/110121999.sd.mp4?s=40b3b4273361a1450ebe70e0dbcecc74,http://player.vimeo.com/external/110121999.hd.mp4?s=6d22706046eda0e76c00e4390ab47993"
],

	T: //FIXME missing YT

[
",http://player.vimeo.com/external/111083252.mobile.mp4?s=068306ae251439da7c89f4357201262b,http://player.vimeo.com/external/111083252.sd.mp4?s=ef8145cd5177339b7e388361a8a88de4,http://player.vimeo.com/external/111083252.hd.mp4?s=60ff643386853279de65ab6b085cbac5",
",http://player.vimeo.com/external/111082111.mobile.mp4?s=887ad7d2212f885c3085a01735c0064a,http://player.vimeo.com/external/111082111.sd.mp4?s=8948803a49e72fd9833a0f6f4094f510,http://player.vimeo.com/external/111082111.hd.mp4?s=8122f1b9c36cced7fdc539042674af27",
",http://player.vimeo.com/external/111083104.mobile.mp4?s=e116b75dcb2e888b66c4734170680d6d,http://player.vimeo.com/external/111083104.sd.mp4?s=4c9acb44edb3d359c73317c3e29bd846,http://player.vimeo.com/external/111083104.hd.mp4?s=6e4b436b9c19714090a04f5620123d7e",
",http://player.vimeo.com/external/111083105.mobile.mp4?s=bfda90eda13a7e051d8c32b9bf75fb7f,http://player.vimeo.com/external/111083105.sd.mp4?s=4110f95fe028a7b7ecd5267ddbc1d56a,http://player.vimeo.com/external/111083105.hd.mp4?s=53975b7b89bbb5768d0cd3a686b919d3",
",http://player.vimeo.com/external/111083107.mobile.mp4?s=d228f0d3f7dfab42303c79dc1e9e06c7,http://player.vimeo.com/external/111083107.sd.mp4?s=dd254b44117ba9433c22256e66291be6,http://player.vimeo.com/external/111083107.hd.mp4?s=7a23aa93043fb1da62b084f100105c27",
",http://player.vimeo.com/external/111083109.mobile.mp4?s=d3cc062ec558fec80a0f30317a24e0e6,http://player.vimeo.com/external/111083109.sd.mp4?s=2a31038e3e0068bcc123a28a57882036,http://player.vimeo.com/external/111083109.hd.mp4?s=602b681f546f27ca741e89e163c26112",
",http://player.vimeo.com/external/111083110.mobile.mp4?s=417477821b120ea0a5d07df690c23bd3,http://player.vimeo.com/external/111083110.sd.mp4?s=11304054bdd63088dd14867eba74083a,http://player.vimeo.com/external/111083110.hd.mp4?s=a8afa539e728956a2410094f2e9ce3be",
",http://player.vimeo.com/external/111083251.mobile.mp4?s=8fd69dfba890276b21a9507046b73925,http://player.vimeo.com/external/111083251.sd.mp4?s=70acc6b16a6a58d317bb54ab7dca4bbd,http://player.vimeo.com/external/111083251.hd.mp4?s=8d12992e5b7228cc498414421629b4e4",
",http://player.vimeo.com/external/111083254.mobile.mp4?s=e4e5d287e7638e5f6b954dbcee392c16,http://player.vimeo.com/external/111083254.sd.mp4?s=db2a3dca722a838f70693a429eb91860,http://player.vimeo.com/external/111083254.hd.mp4?s=13bfe75c37de98e5caae29ab1e506a22",
",http://player.vimeo.com/external/111083652.mobile.mp4?s=f6845d3ef36d19823abbffa536f28fc4,http://player.vimeo.com/external/111083652.sd.mp4?s=89217d8313aaabe923109999f1e1cdd8,http://player.vimeo.com/external/111083652.hd.mp4?s=0d2b69c18d46775dd8b5545b5c9977eb",
",http://player.vimeo.com/external/111083255.mobile.mp4?s=de515cde8bcab44a219db85002793276,http://player.vimeo.com/external/111083255.sd.mp4?s=49a2849cab5e4796753fbaa011ac4fb9,http://player.vimeo.com/external/111083255.hd.mp4?s=b0b9195d02fe005f40b78d914ebc0053",
",http://player.vimeo.com/external/111083650.mobile.mp4?s=58c2a468df15a3d4ae3a25834bebdc50,http://player.vimeo.com/external/111083650.sd.mp4?s=cb8afd7a15cb7577c191ec6dcc2fe7fe,http://player.vimeo.com/external/111083650.hd.mp4?s=497d438a67163087240dd989e01a84bd",
",http://player.vimeo.com/external/111083653.mobile.mp4?s=c532eeb5ce6a486a599b3aade16d9a23,http://player.vimeo.com/external/111083653.sd.mp4?s=291be106a323dc0cee20db1027b6a06e,http://player.vimeo.com/external/111083653.hd.mp4?s=497c9ec24cdff8b58988732bf7a3771a",
",http://player.vimeo.com/external/111083651.mobile.mp4?s=47718864a9296ce7d09e191bd16e93ff,http://player.vimeo.com/external/111083651.sd.mp4?s=77a13b6f2a28f24fb5d00cff6bb0c7e3,http://player.vimeo.com/external/111083651.hd.mp4?s=9287a0b51631ae371683f1070d73bb68",
",http://player.vimeo.com/external/111083654.mobile.mp4?s=30bbcaf92066ec1a6c98d588be628efd,http://player.vimeo.com/external/111083654.sd.mp4?s=0eac0eada2aad73f3a50e04c27129107,http://player.vimeo.com/external/111083654.hd.mp4?s=791dc19f2b1fdbdcd0895a689b57fd9e",
",http://player.vimeo.com/external/111083859.mobile.mp4?s=7d3828d5993055e04ae8672880a0f860,http://player.vimeo.com/external/111083859.sd.mp4?s=a98d216f82d15de4f51057446452921b,http://player.vimeo.com/external/111083859.hd.mp4?s=1fd0b5a63c08bc24d51d17faa63a47fe",
",http://player.vimeo.com/external/111083253.mobile.mp4?s=6730431f485f5894e85246eb2d23986e,http://player.vimeo.com/external/111083253.sd.mp4?s=57cc6c135bc74283f87a0aef22dffa56,http://player.vimeo.com/external/111083253.hd.mp4?s=a567c3026da16f0fb62da85e8de94bd8",
",http://player.vimeo.com/external/111082112.mobile.mp4?s=fe568a7fdcaab2a796b91677d10e3fe5,http://player.vimeo.com/external/111082112.sd.mp4?s=4407a888a8cabbc22e87e90d5da8df0d,http://player.vimeo.com/external/111082112.hd.mp4?s=8f778146b7841c1297ea8273efaa04aa",
",http://player.vimeo.com/external/111082113.mobile.mp4?s=8ce40da5ce80fe11697df30760814274,http://player.vimeo.com/external/111082113.sd.mp4?s=52870684bbca940f90587e594aa117a0,http://player.vimeo.com/external/111082113.hd.mp4?s=f3a79ed0a3152b2f1e9eed2a401fb258",
",http://player.vimeo.com/external/111082114.mobile.mp4?s=a77d42d69a3c08aa2c0057b88e14ad03,http://player.vimeo.com/external/111082114.sd.mp4?s=9beffb472a185c2f28d35fe348d18675,http://player.vimeo.com/external/111082114.hd.mp4?s=20a32523399c4b27f42cf20c78b7e4b4",
",http://player.vimeo.com/external/111082115.mobile.mp4?s=6968575c01e314d6d5348b4f0c2133fc,http://player.vimeo.com/external/111082115.sd.mp4?s=29d62b699e7f3ddbda77d56b4ce2878e,http://player.vimeo.com/external/111082115.hd.mp4?s=8d5c58a21270e200dc661d42834863fb"
]

};

module.exports = {TITLES, VIDEOS};
