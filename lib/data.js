// Mock News Data
export const newsData = {
  breaking: [
    'भारत ने ऑस्ट्रेलिया को 6 विकेट से हराया, सीरीज में 2-1 से आगे',
    'दिल्ली में तापमान में भारी गिरावट, अगले 48 घंटों में और ठंड',
    'संसद में विपक्ष का हंगामा, सरकार पर लगाए गंभीर आरोप',
    'मुंबई शेयर बाजार में तेजी, सेंसेक्स 500 अंक चढ़ा',
  ],

  hero: {
    main: {
      id: 1,
      title: 'भारत ने ऑस्ट्रेलिया को 6 विकेट से हराया, सीरीज में टीम इंडिया 2-1 से आगे',
      description: 'मेलबर्न क्रिकेट ग्राउंड पर खेले गए तीसरे टेस्ट मैच में भारतीय टीम ने शानदार जीत दर्ज की।',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=600&fit=crop',
      category: 'खेल',
      time: '2 घंटे पहले'
    },
    side: [
      {
        id: 2,
        title: 'संसद में विपक्ष का हंगामा जारी, सरकार पर लगाए आरोप',
        image: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=400&h=300&fit=crop',
        category: 'राजनीति',
        time: '3 घंटे पहले'
      },
      {
        id: 3,
        title: 'शाहरुख खान की नई फिल्म का ट्रेलर रिलीज़',
        image: 'https://images.unsplash.com/photo-1512070679279-8988d32161be?w=400&h=300&fit=crop',
        category: 'मनोरंजन',
        time: '4 घंटे पहले'
      }
    ]
  },

  categories: {
    देश: [
      {
        id: 101,
        title: 'दिल्ली में प्रदूषण स्तर खतरनाक, स्कूल बंद',
        description: 'राजधानी में वायु प्रदूषण खतरनाक स्तर पर पहुंच गया है।',
        image: 'https://images.unsplash.com/photo-1476900543704-4312b78632f8?w=400&h=300&fit=crop',
        category: 'देश',
        time: '1 घंटे पहले'
      },
      {
        id: 102,
        title: 'मुंबई में भारी बारिश का अलर्ट जारी',
        description: 'मौसम विभाग ने अगले 48 घंटों के लिए भारी बारिश की चेतावनी दी है।',
        image: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=400&h=300&fit=crop',
        category: 'देश',
        time: '2 घंटे पहले'
      },
      {
        id: 103,
        title: 'उत्तर प्रदेश में नई योजना की शुरुआत',
        description: 'मुख्यमंत्री ने गरीबों के लिए नई कल्याणकारी योजना शुरू की।',
        image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=400&h=300&fit=crop',
        category: 'देश',
        time: '3 घंटे पहले'
      },
      {
        id: 104,
        title: 'केरल में बाढ़ से हालात गंभीर',
        description: 'भारी बारिश के कारण केरल के कई इलाकों में बाढ़ जैसे हालात।',
        image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=400&h=300&fit=crop',
        category: 'देश',
        time: '4 घंटे पहले'
      }
    ],

    राजनीति: [
      {
        id: 201,
        title: 'लोकसभा चुनाव 2024: तैयारियां शुरू',
        description: 'सभी राजनीतिक दल चुनाव की तैयारियों में जुट गए हैं।',
        image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=300&fit=crop',
        category: 'राजनीति',
        time: '1 घंटे पहले'
      },
      {
        id: 202,
        title: 'PM मोदी ने की नई योजना की घोषणा',
        description: 'प्रधानमंत्री ने किसानों के लिए नई योजना का ऐलान किया।',
        image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=400&h=300&fit=crop',
        category: 'राजनीति',
        time: '2 घंटे पहले'
      },
      {
        id: 203,
        title: 'विपक्ष की बैठक में एकता का संदेश',
        description: 'विपक्षी दलों ने मिलकर सरकार के खिलाफ मोर्चा खोला।',
        image: 'https://images.unsplash.com/photo-1591343395902-bde67e738b4f?w=400&h=300&fit=crop',
        category: 'राजनीति',
        time: '3 घंटे पहले'
      },
      {
        id: 204,
        title: 'विधानसभा चुनाव: पांच राज्यों में मतदान',
        description: 'पांच राज्यों में विधानसभा चुनाव के लिए मतदान शुरू।',
        image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=400&h=300&fit=crop',
        category: 'राजनीति',
        time: '4 घंटे पहले'
      }
    ],

    खेल: [
      {
        id: 301,
        title: 'IPL 2024: मुंबई इंडियंस की जीत',
        description: 'रोमांचक मुकाबले में मुंबई ने चेन्नई को हराया।',
        image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=300&fit=crop',
        category: 'खेल',
        time: '30 मिनट पहले'
      },
      {
        id: 302,
        title: 'नीरज चोपड़ा ने जीता स्वर्ण पदक',
        description: 'भारतीय एथलीट ने फिर रचा इतिहास।',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop',
        category: 'खेल',
        time: '2 घंटे पहले'
      },
      {
        id: 303,
        title: 'फुटबॉल: भारत ने कतर को हराया',
        description: 'विश्व कप क्वालिफायर में भारत की ऐतिहासिक जीत।',
        image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=300&fit=crop',
        category: 'खेल',
        time: '3 घंटे पहले'
      },
      {
        id: 304,
        title: 'पीवी सिंधु सेमीफाइनल में',
        description: 'स्टार बैडमिंटन खिलाड़ी ने किया सेमीफाइनल में प्रवेश।',
        image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&h=300&fit=crop',
        category: 'खेल',
        time: '4 घंटे पहले'
      }
    ],

    मनोरंजन: [
      {
        id: 401,
        title: 'पठान का नया गाना वायरल',
        description: '24 घंटे में 50 मिलियन व्यूज के पार।',
        image: 'https://images.unsplash.com/photo-1574267432644-f9423ee5c1c1?w=400&h=300&fit=crop',
        category: 'मनोरंजन',
        time: '1 घंटे पहले'
      },
      {
        id: 402,
        title: 'बिग बॉस 17: कंटेस्टेंट बाहर',
        description: 'इस सप्ताह घर से बाहर हुआ यह कंटेस्टेंट।',
        image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=300&fit=crop',
        category: 'मनोरंजन',
        time: '2 घंटे पहले'
      },
      {
        id: 403,
        title: 'आलिया भट्ट का नया लुक वायरल',
        description: 'नई फिल्म का पोस्टर रिलीज़।',
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop',
        category: 'मनोरंजन',
        time: '3 घंटे पहले'
      },
      {
        id: 404,
        title: 'कार्तिक आर्यन की नई लग्जरी कार',
        description: 'एक्टर ने खरीदी करोड़ों की कार।',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop',
        category: 'मनोरंजन',
        time: '5 घंटे पहले'
      }
    ],

    दुनिया: [
      {
        id: 501,
        title: 'अमेरिका में राष्ट्रपति चुनाव की तैयारी शुरू',
        description: 'अमेरिका में आगामी राष्ट्रपति चुनाव के लिए तैयारियां जोरों पर हैं।',
        image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=300&fit=crop',
        category: 'दुनिया',
        time: '2 घंटे पहले'
      },
      {
        id: 502,
        title: 'चीन में नई तकनीक का अनावरण',
        description: 'चीन ने AI और रोबोटिक्स में नई तकनीक पेश की है।',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
        category: 'दुनिया',
        time: '4 घंटे पहले'
      },
      {
        id: 503,
        title: 'यूरोप में गर्मी का रिकॉर्ड टूटा',
        description: 'यूरोप के कई देशों में अभूतपूर्व गर्मी दर्ज की गई है।',
        image: 'https://images.unsplash.com/photo-1476900543704-4312b78632f8?w=400&h=300&fit=crop',
        category: 'दुनिया',
        time: '6 घंटे पहले'
      },
      {
        id: 504,
        title: 'संयुक्त राष्ट्र में जलवायु परिवर्तन पर चर्चा',
        description: 'UN में जलवायु परिवर्तन से निपटने के लिए नए प्रस्ताव पर बहस।',
        image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=400&h=300&fit=crop',
        category: 'दुनिया',
        time: '8 घंटे पहले'
      }
    ],

    बिज़नेस: [
      {
        id: 601,
        title: 'शेयर बाजार में तेजी, सेंसेक्स 75000 पार',
        description: 'आज भारतीय शेयर बाजार में शानदार उछाल देखा गया।',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop',
        category: 'बिज़नेस',
        time: '1 घंटे पहले'
      },
      {
        id: 602,
        title: 'रिलायंस का नया बिजनेस वेंचर',
        description: 'रिलायंस इंडस्ट्रीज ने नए क्षेत्र में निवेश की घोषणा की।',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
        category: 'बिज़नेस',
        time: '3 घंटे पहले'
      },
            {
        id: 603,
        title: 'सोने की कीमतों में गिरावट',
        description: 'आज सोने के भाव में 500 रुपये प्रति 10 ग्राम की कमी आई।',
        image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&h=300&fit=crop',
        category: 'बिज़नेस',
        time: '5 घंटे पहले'
      },
      {
        id: 604,
        title: 'टाटा ग्रुप का नया इलेक्ट्रिक वाहन प्लांट',
        description: 'टाटा मोटर्स गुजरात में नया EV प्लांट लगाएगी।',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
        category: 'बिज़नेस',
        time: '7 घंटे पहले'
      }
    ],

    टेक्नोलॉजी: [
      {
        id: 701,
        title: 'भारत में 6G नेटवर्क की तैयारी शुरू',
        description: 'भारत सरकार ने 6G तकनीक पर काम शुरू करने की घोषणा की है।',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
        category: 'टेक्नोलॉजी',
        time: '2 घंटे पहले'
      },
      {
        id: 702,
        title: 'AI में भारतीय कंपनियों का निवेश बढ़ा',
        description: 'भारतीय स्टार्टअप्स आर्टिफिशियल इंटेलिजेंस में भारी निवेश कर रहे हैं।',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
        category: 'टेक्नोलॉजी',
        time: '4 घंटे पहले'
      },
      {
        id: 703,
        title: 'नई स्मार्टफोन तकनीक लॉन्च',
        description: 'भारतीय कंपनी ने अत्याधुनिक स्मार्टफोन तकनीक पेश की।',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
        category: 'टेक्नोलॉजी',
        time: '6 घंटे पहले'
      },
      {
        id: 704,
        title: 'साइबर सुरक्षा में नए मानक',
        description: 'भारत सरकार ने साइबर सुरक्षा के लिए नए नियम जारी किए।',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
        category: 'टेक्नोलॉजी',
        time: '8 घंटे पहले'
      }
    ],

    लाइफस्टाइल: [
      {
        id: 801,
        title: 'स्वस्थ जीवन के लिए योग के फायदे',
        description: 'नियमित योग से कैसे रहें स्वस्थ और फिट, जानें विशेषज्ञों की राय।',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop',
        category: 'लाइफस्टाइल',
        time: '3 घंटे पहले'
      },
      {
        id: 802,
        title: 'घर की सजावट के नए ट्रेंड',
        description: 'इस सीजन में अपने घर को सजाने के लिए बेस्ट आइडियाज।',
        image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=400&h=300&fit=crop',
        category: 'लाइफस्टाइल',
        time: '5 घंटे पहले'
      },
      {
        id: 803,
        title: 'फैशन वीक में दिखे नए ट्रेंड',
        description: 'इंडिया फैशन वीक में डिजाइनरों ने पेश किए नए कलेक्शन।',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=300&fit=crop',
        category: 'लाइफस्टाइल',
        time: '7 घंटे पहले'
      },
      {
        id: 804,
        title: 'हेल्दी डाइट के लिए सुपरफूड्स',
        description: 'जानें कौन से सुपरफूड्स हैं आपकी सेहत के लिए बेस्ट।',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop',
        category: 'लाइफस्टाइल',
        time: '9 घंटे पहले'
      }
    ],

    ऑटो: [
      {
        id: 901,
        title: 'मारुति की नई इलेक्ट्रिक कार लॉन्च',
        description: 'मारुति सुजुकी ने भारत में अपनी पहली EV कार पेश की।',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop',
        category: 'ऑटो',
        time: '2 घंटे पहले'
      },
      {
        id: 902,
        title: 'टाटा मोटर्स का नया SUV',
        description: 'टाटा ने लग्जरी SUV सेगमेंट में नई कार उतारी।',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=300&fit=crop',
        category: 'ऑटो',
        time: '4 घंटे पहले'
      },
      {
        id: 903,
        title: 'पेट्रोल-डीजल की कीमतों में बदलाव',
        description: 'आज फ्यूल की कीमतों में मामूली इजाफा हुआ है।',
        image: 'https://images.unsplash.com/photo-1483450388369-9ed95738483c?w=400&h=300&fit=crop',
        category: 'ऑटो',
        time: '6 घंटे पहले'
      },
      {
        id: 904,
        title: 'हुंडई की नई सेडान भारत में लॉन्च',
        description: 'हुंडई ने भारतीय बाजार में अपनी नई प्रीमियम सेडान पेश की।',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
        category: 'ऑटो',
        time: '8 घंटे पहले'
      }
    ],

    गैजेट्स: [
      {
        id: 1101,
        title: 'नया iPhone 15 भारत में लॉन्च',
        description: 'Apple ने भारत में iPhone 15 सीरीज को लॉन्च किया।',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
        category: 'गैजेट्स',
        time: '1 घंटे पहले'
      },
      {
        id: 1102,
        title: 'Samsung के नए फोल्डेबल स्मार्टफोन',
        description: 'Samsung ने Galaxy Fold की नई सीरीज पेश की।',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
        category: 'गैजेट्स',
        time: '3 घंटे पहले'
      },
      {
        id: 1103,
        title: 'बेस्ट बजट स्मार्टवॉच 2024',
        description: '10000 रुपये से कम में मिलने वाली बेस्ट स्मार्टवॉच।',
        image: 'https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=400&h=300&fit=crop',
        category: 'गैजेट्स',
        time: '5 घंटे पहले'
      },
      {
        id: 1104,
        title: 'Gaming Laptop में नए फीचर्स',
        description: 'लेटेस्ट गेमिंग लैपटॉप में AI और बेहतर ग्राफिक्स।',
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop',
        category: 'गैजेट्स',
        time: '7 घंटे पहले'
      }
    ],

    करियर: [
      {
        id: 1201,
        title: 'सरकारी नौकरी: रेलवे में 10000 पदों पर भर्ती',
        description: 'भारतीय रेलवे ने विभिन्न पदों के लिए भर्ती निकाली है।',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
        category: 'करियर',
        time: '2 घंटे पहले'
      },
      {
        id: 1202,
        title: 'IT सेक्टर में नौकरी के अवसर बढ़े',
        description: 'टेक कंपनियों ने बड़े पैमाने पर हायरिंग शुरू की है।',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
        category: 'करियर',
        time: '4 घंटे पहले'
      },
      {
        id: 1203,
        title: 'UPSC परीक्षा 2024 की तारीखें घोषित',
        description: 'संघ लोक सेवा आयोग ने सिविल सेवा परीक्षा की तिथियां जारी कीं।',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
        category: 'करियर',
        time: '6 घंटे पहले'
      },
      {
        id: 1204,
        title: 'बैंकिंग सेक्टर में नई नौकरियां',
        description: 'SBI और अन्य बैंकों में बड़ी भर्ती का ऐलान।',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop',
        category: 'करियर',
        time: '8 घंटे पहले'
      }
    ],

    धर्म: [
      {
        id: 1301,
        title: 'अयोध्या में राम मंदिर का भव्य उत्सव',
        description: 'अयोध्या में राम मंदिर में विशेष पूजा का आयोजन।',
        image: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=400&h=300&fit=crop',
        category: 'धर्म',
        time: '3 घंटे पहले'
      },
      {
        id: 1302,
        title: 'महाशिवरात्रि पर विशेष आयोजन',
        description: 'देशभर के शिव मंदिरों में भक्तों की भारी भीड़।',
        image: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=400&h=300&fit=crop',
        category: 'धर्म',
        time: '5 घंटे पहले'
      },
      {
        id: 1303,
        title: 'वाराणसी में गंगा आरती का भव्य दृश्य',
        description: 'काशी विश्वनाथ मंदिर में गंगा आरती में उमड़ा जनसैलाब।',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop',
        category: 'धर्म',
        time: '7 घंटे पहले'
      },
      {
        id: 1304,
        title: 'तिरुपति बालाजी मंदिर में नए नियम',
        description: 'तिरुपति मंदिर प्रशासन ने दर्शन के लिए नए दिशा-निर्देश जारी किए।',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop',
        category: 'धर्म',
        time: '9 घंटे पहले'
      }
    ],

    वीडियो: [
      {
        id: 1401,
        title: 'PM मोदी का लाइव संबोधन - देखें वीडियो',
        description: 'प्रधानमंत्री नरेंद्र मोदी का राष्ट्र के नाम संदेश।',
        image: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=400&h=300&fit=crop',
        category: 'वीडियो',
        time: '1 घंटे पहले'
      },
            {
        id: 1402,
        title: 'भारत-ऑस्ट्रेलिया मैच की हाइलाइट्स',
        description: 'देखें टेस्ट मैच के रोमांचक पल।',
        image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=300&fit=crop',
        category: 'वीडियो',
        time: '3 घंटे पहले'
      },
      {
        id: 1403,
        title: 'मुंबई में भारी बारिश का वीडियो वायरल',
        description: 'मुंबई में मूसलाधार बारिश से जनजीवन अस्त-व्यस्त।',
        image: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=400&h=300&fit=crop',
        category: 'वीडियो',
        time: '5 घंटे पहले'
      },
      {
        id: 1404,
        title: 'बॉलीवुड सितारों का डांस वीडियो',
        description: 'अवॉर्ड शो में सितारों का धमाकेदार परफॉर्मेंस।',
        image: 'https://images.unsplash.com/photo-1512070679279-8988d32161be?w=400&h=300&fit=crop',
        category: 'वीडियो',
        time: '7 घंटे पहले'
      }
    ]
  },

  trending: [
    'भारत-ऑस्ट्रेलिया टेस्ट: विराट कोहली का शानदार प्रदर्शन',
    'संसद में हंगामा: विपक्ष ने किया वॉकआउट',
    'दिल्ली में प्रदूषण खतरनाक स्तर पर',
    'शेयर बाजार में तेजी, सेंसेक्स 500 अंक चढ़ा',
    'शाहरुख खान की नई फिल्म की घोषणा',
    'मुंबई में बारिश का अलर्ट जारी',
    'नीरज चोपड़ा ने जीता गोल्ड मेडल',
    'पेट्रोल-डीजल की कीमतों में बदलाव'
  ]
};

// State-based news data
export const stateNewsData = {
  'उत्तर प्रदेश': [
    {
      id: 1001,
      title: 'लखनऊ में मेट्रो का नया रूट शुरू, यात्रियों को मिलेगी राहत',
      description: 'उत्तर प्रदेश की राजधानी लखनऊ में मेट्रो का एक नया रूट शुरू किया गया है।',
      image: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?w=400&h=300&fit=crop',
      category: 'उत्तर प्रदेश',
      time: '2 घंटे पहले'
    },
    {
      id: 1002,
      title: 'यूपी बोर्ड परीक्षा 2024 की तारीखें घोषित',
      description: 'उत्तर प्रदेश माध्यमिक शिक्षा परिषद ने बोर्ड परीक्षाओं की तिथियां जारी की हैं।',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
      category: 'उत्तर प्रदेश',
      time: '4 घंटे पहले'
    },
    {
      id: 1003,
      title: 'आगरा में ताजमहल के पास नया पर्यटन केंद्र',
      description: 'आगरा में पर्यटकों की सुविधा के लिए एक नया पर्यटन सूचना केंद्र खोला गया।',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop',
      category: 'उत्तर प्रदेश',
      time: '5 घंटे पहले'
    },
    {
      id: 1004,
      title: 'वाराणसी में गंगा आरती के लिए नए नियम',
      description: 'वाराणसी प्रशासन ने गंगा आरती देखने के लिए नए दिशा-निर्देश जारी किए हैं।',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop',
      category: 'उत्तर प्रदेश',
      time: '6 घंटे पहले'
    }
  ],

  'दिल्ली': [
    {
      id: 2001,
      title: 'दिल्ली में वायु प्रदूषण का स्तर खतरनाक श्रेणी में',
      description: 'राजधानी दिल्ली में प्रदूषण स्तर एक बार फिर खतरनाक स्तर पर पहुंच गया है।',
      image: 'https://images.unsplash.com/photo-1476900543704-4312b78632f8?w=400&h=300&fit=crop',
      category: 'दिल्ली',
      time: '1 घंटे पहले'
    },
    {
      id: 2002,
      title: 'दिल्ली मेट्रो की नई लाइन का उद्घाटन',
      description: 'दिल्ली मेट्रो की नई लाइन का आज मुख्यमंत्री ने उद्घाटन किया।',
      image: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?w=400&h=300&fit=crop',
      category: 'दिल्ली',
      time: '3 घंटे पहले'
    },
    {
      id: 2003,
      title: 'दिल्ली में बिजली की दरों में कमी का ऐलान',
      description: 'दिल्ली सरकार ने बिजली की दरों में राहत देने की घोषणा की है।',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop',
      category: 'दिल्ली',
      time: '5 घंटे पहले'
    },
    {
      id: 2004,
      title: 'कनॉट प्लेस में नया शॉपिंग कॉम्प्लेक्स',
      description: 'दिल्ली के कनॉट प्लेस में एक नया शॉपिंग कॉम्प्लेक्स खुला।',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
      category: 'दिल्ली',
      time: '7 घंटे पहले'
    }
  ],

  'बिहार': [
    {
      id: 3001,
      title: 'पटना में नए फ्लाईओवर का निर्माण शुरू',
      description: 'बिहार की राजधानी पटना में यातायात सुविधा के लिए नया फ्लाईओवर बनाया जा रहा है।',
      image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=400&h=300&fit=crop',
      category: 'बिहार',
      time: '2 घंटे पहले'
    },
    {
      id: 3002,
      title: 'बिहार बोर्ड की परीक्षाओं में सख्ती',
      description: 'इस बार बिहार बोर्ड की परीक्षाओं में नकल रोकने के लिए कड़े कदम उठाए जाएंगे।',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
      category: 'बिहार',
      time: '4 घंटे पहले'
    },
    {
      id: 3003,
      title: 'गया में पर्यटन को बढ़ावा देने की योजना',
      description: 'बिहार सरकार ने गया में पर्यटन बढ़ाने के लिए नई योजना शुरू की है।',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      category: 'बिहार',
      time: '6 घंटे पहले'
    },
    {
      id: 3004,
      title: 'बिहार में नई औद्योगिक नीति का ऐलान',
      description: 'राज्य में उद्योग को बढ़ावा देने के लिए नई नीति लागू की गई।',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      category: 'बिहार',
      time: '8 घंटे पहले'
    }
  ],

  'झारखंड': [
    {
      id: 4001,
      title: 'रांची में स्मार्ट सिटी प्रोजेक्ट में तेजी',
      description: 'झारखंड की राजधानी रांची में स्मार्ट सिटी परियोजना का काम तेज गति से चल रहा है।',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop',
      category: 'झारखंड',
      time: '3 घंटे पहले'
    },
    {
      id: 4002,
      title: 'झारखंड में खनन नीति में बदलाव',
      description: 'राज्य सरकार ने खनन क्षेत्र में नई नीति लागू करने का निर्णय लिया है।',
      image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=400&h=300&fit=crop',
      category: 'झारखंड',
      time: '5 घंटे पहले'
    }
  ],

  'राजस्थान': [
    {
      id: 5001,
      title: 'जयपुर में मेट्रो का विस्तार, नए रूट जल्द',
      description: 'राजस्थान की राजधानी जयपुर में मेट्रो के नए रूट जोड़े जा रहे हैं।',
      image: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?w=400&h=300&fit=crop',
      category: 'राजस्थान',
      time: '2 घंटे पहले'
    },
    {
      id: 5002,
      title: 'जैसलमेर में पर्यटन सीजन की शुरुआत',
      description: 'राजस्थान के जैसलमेर में पर्यटन सीजन शुरू हो गया है।',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop',
      category: 'राजस्थान',
      time: '4 घंटे पहले'
    }
  ],

  'मध्य प्रदेश': [
    {
      id: 6001,
      title: 'भोपाल में नए इंडस्ट्रियल पार्क की घोषणा',
      description: 'मध्य प्रदेश की राजधानी भोपाल में एक नया औद्योगिक पार्क बनाया जाएगा।',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      category: 'मध्य प्रदेश',
      time: '3 घंटे पहले'
    },
    {
      id: 6002,
      title: 'इंदौर स्वच्छता में फिर से नंबर वन',
      description: 'मध्य प्रदेश का इंदौर शहर लगातार छठी बार स्वच्छ शहर चुना गया है।',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      category: 'मध्य प्रदेश',
      time: '5 घंटे पहले'
    }
  ],

  'हरियाणा': [
    {
      id: 7001,
      title: 'गुरुग्राम में ट्रैफिक जाम की समस्या पर नई योजना',
      description: 'हरियाणा सरकार ने गुरुग्राम में ट्रैफिक समस्या हल करने के लिए नई योजना बनाई है।',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      category: 'हरियाणा',
      time: '2 घंटे पहले'
    }
  ],

  'उत्तराखंड': [
    {
      id: 8001,
      title: 'देहरादून में नई हवाई सेवा शुरू',
      description: 'उत्तराखंड की राजधानी देहरादून से कई नए शहरों के लिए फ्लाइट शुरू की गई हैं।',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop',
      category: 'उत्तराखंड',
      time: '3 घंटे पहले'
    }
  ],

  'पंजाब': [
    {
      id: 9001,
      title: 'अमृतसर में स्वर्ण मंदिर का जीर्णोद्धार',
      description: 'पंजाब के अमृतसर में स्वर्ण मंदिर के जीर्णोद्धार का काम शुरू किया गया है।',
      image: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=400&h=300&fit=crop',
      category: 'पंजाब',
      time: '4 घंटे पहले'
    }
  ],// Add this at the end of your categories object, before closing

    'टेस्ट-एज-केस': [
      {
        id: 9001,
        title: 'यह एक बहुत ही लंबा शीर्षक है जो यह परीक्षण करने के लिए है कि लंबे शीर्षक वाले लेख कैसे दिखते हैं और क्या वे UI को तोड़ते हैं या नहीं',
        description: 'यह एक बहुत लंबा विवरण है जो यह जांचने के लिए है कि सिस्टम लंबे टेक्स्ट को कैसे संभालता है।',
        image: '',  // No image
        category: 'टेस्ट-एज-केस',
        time: '1 घंटे पहले'
      },
      {
        id: 9002,
        title: 'छवि के बिना लेख',
        description: 'इस लेख में कोई छवि नहीं है।',
        image: null,  // No image
        category: 'टेस्ट-एज-केस',
        time: '2 घंटे पहले'
      },
      {
        id: 9003,
        title: 'सामान्य लेख',
        description: 'यह एक सामान्य लेख है सभी डेटा के साथ।',
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop',
        category: 'टेस्ट-एज-केस',
        time: '3 घंटे पहले'
      }
    ]
  
};

// Export functions
export function getNewsByCategory(category) {
  return newsData.categories[category] || [];
}

export function getAllCategories() {
  return Object.keys(newsData.categories);
}

export function getNewsByState(state) {
  return stateNewsData[state] || [];
}

export function getAllStates() {
  return Object.keys(stateNewsData);
}