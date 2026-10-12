/* Topic: Parts of a plant (Botany, beginner) */
TL.start({
  id: "plant-parts",
  camera: { theta: 0.45, phi: 1.36, radius: 11.5, target: [0.4, 1.0, 0], min: 5, max: 22 },
  labels: true,
  order: ["root", "stem", "leaf", "flower", "fruit", "seed"],
  parts: {
    root: { emoji: "🥕" }, stem: { emoji: "🎋" }, leaf: { emoji: "🍃" },
    flower: { emoji: "🌺" }, fruit: { emoji: "🍅" }, seed: { emoji: "🌰" }
  },
  quiz: [
    { part: "root", a: 1 }, { part: "leaf", a: 0 }, { part: "stem", a: 2 }, { part: "flower", a: 3 },
    { part: "fruit", a: 1 }, { part: "seed", a: 0 }, { part: "leaf", a: 1 }, { part: "stem", a: 1 }
  ],
  actions: [
    { id: "water", label: "water_btn", main: true, onClick: function (api) { api.state.toggleWater(); } },
    { id: "grow", label: "grow_btn", onClick: function (api) { api.state.grow(); } }
  ],

  /* ------------------------------------------------------------------
     CONTENT (en, hi, mr, kn). Quiz options ka order sab bhashaon me same.
     Hinglish me ye topic English me dikhta hai (fallback).
  ------------------------------------------------------------------ */
  text: {
    en: {
      tagline: "Meet the parts of a flowering plant",
      intro: '<strong>Let\'s explore a plant!</strong> Tap any part or its label. Press "💧 Water the plant" to watch water travel from the soil to the leaves, and "🌱 Grow from seed" to see the plant grow.',
      ui: {
        water_btn: "💧 Water the plant", water_stop: "💧 Stop watering",
        water_on: "Water enters the roots, rises up the stem and leaves the leaves as vapour",
        grow_btn: "🌱 Grow from seed", grow_go: "Root first, then stem and leaves, then flower and fruit",
        grow_done: "Fully grown! The flower has become a fruit with seeds inside"
      },
      parts: {
        root: { name: "Root", tag: "The plant's anchor and drinking straw",
          what: "Roots hold the plant firmly in the soil. Tiny root hairs soak up water and minerals and send them up to the stem.",
          adv: "Beans and mustard have a taproot system: one main root with side roots. Wheat, maize and grasses have fibrous roots: many thin roots of the same size. Root hairs are outgrowths of single surface cells that greatly increase the area for absorption. Water enters by osmosis; minerals such as nitrates are taken in by active transport, which uses energy from respiration.",
          real: "Carrot, radish, beetroot and sweet potato are roots that store food for the plant.",
          fact: "In one famous experiment, all the roots of a single rye plant together measured more than 600 kilometres!" },
        stem: { name: "Stem", tag: "The plant's lift and support pillar",
          what: "The stem holds the leaves up towards sunlight. Inside it, thin tubes carry water up from the roots and food from the leaves to every part.",
          adv: "Stems contain vascular bundles. Xylem carries water and minerals upward; phloem carries sugars made in the leaves to wherever they are needed (up or down). The points where leaves grow are nodes, and the gaps between them are internodes. A growing tip at the top, the apical meristem, makes the stem longer.",
          real: "Sugarcane stores sugar in its stem, and a potato is an underground stem: its 'eyes' are buds.",
          fact: "Some kinds of bamboo can grow almost a metre in a single day." },
        leaf: { name: "Leaf", tag: "The plant's food factory",
          what: "Leaves are green because of chlorophyll. They use sunlight, water and carbon dioxide from the air to make food for the whole plant. This is called photosynthesis.",
          adv: "A leaf has a flat blade (lamina), a stalk (petiole) and veins that contain xylem and phloem. Tiny pores called stomata, mostly on the underside, let carbon dioxide in and oxygen and water vapour out. Loss of water vapour from leaves is called transpiration; it cools the leaf and helps pull water up from the roots.",
          real: "Spinach, methi, cabbage and curry leaves are leaves that we eat.",
          fact: "A big tree can lose hundreds of litres of water through its leaves on one hot day." },
        flower: { name: "Flower", tag: "Where seeds begin",
          what: "The flower is the part that makes seeds. Bright petals and sweet nectar invite bees and butterflies, which carry pollen from flower to flower.",
          adv: "A typical flower has four rings of parts: sepals, petals, stamens (male; the anther makes pollen) and the pistil (female; stigma, style and ovary). Moving pollen to the stigma is pollination. After fertilisation, the ovary grows into the fruit and the ovules become seeds. See the topic 'Reproduction in flowering plants'.",
          real: "Cauliflower and broccoli are really bunches of flower buds, and saffron comes from the stigma of a crocus flower.",
          fact: "The biggest single flower, Rafflesia arnoldii, can be about 1 metre wide." },
        fruit: { name: "Fruit", tag: "The seeds' protective box",
          what: "After a flower is pollinated, part of it swells into a fruit. The fruit protects the seeds and helps spread them to new places.",
          adv: "In botany, a fruit is a ripened ovary. That is why tomato, cucumber, brinjal and okra are fruits, even though we cook them as vegetables. Fleshy fruits are eaten by animals that drop the seeds far away; other fruits are spread by wind, water, or by bursting open.",
          real: "Mango, guava, tomato and even bhindi (okra) are all fruits.",
          fact: "The tiny 'seeds' on the outside of a strawberry are actually small fruits, each with one seed inside." },
        seed: { name: "Seed", tag: "A baby plant with a packed lunch",
          what: "A seed holds a tiny baby plant (the embryo) and a store of food. With water, air and warmth it wakes up and grows. This is called germination.",
          adv: "A seed has a seed coat (testa), an embryo and stored food in the cotyledons or the endosperm. The embryo's radicle becomes the root and its plumule becomes the shoot. Dicot seeds such as beans have two cotyledons; monocot seeds such as maize have one.",
          real: "Rice, wheat, dal, peanuts and coconut are seeds that we eat.",
          fact: "In 2005 scientists grew a date palm from a seed that was about 2000 years old!" }
      },
      quiz: [
        { q: "Which part soaks up water and minerals from the soil?", o: ["Leaf", "Root", "Flower", "Fruit"],
          why: "Root hairs on the roots absorb water and minerals from the soil." },
        { q: "Where does a plant make its food?", o: ["Leaf", "Root", "Seed", "Fruit"],
          why: "Leaves contain chlorophyll and make food by photosynthesis using sunlight." },
        { q: "What is the main job of the stem?", o: ["Making seeds", "Making pollen", "Holding the plant up and carrying water and food", "Soaking up water from the soil"],
          why: "The stem supports the plant, and its xylem and phloem carry water and food." },
        { q: "Which part of a plant makes seeds?", o: ["Root", "Stem", "Leaf", "Flower"],
          why: "Seeds form inside the flower's ovary after pollination and fertilisation." },
        { q: "In botany, which of these is a fruit?", o: ["Potato", "Tomato", "Carrot", "Spinach"],
          why: "A tomato grows from the flower's ovary, so it is a fruit. Potato is a stem, carrot is a root and spinach is a leaf." },
        { q: "What does a seed need to germinate?", o: ["Water, air and warmth", "Only bright sunlight", "Only soil", "Salt and sugar"],
          why: "Most seeds need water, oxygen from air and the right warmth. Many seeds germinate even in the dark." },
        { q: "Tiny pores on a leaf that let gases in and out are called…", o: ["Root hairs", "Stomata", "Petals", "Nodes"],
          why: "Stomata let carbon dioxide in and oxygen and water vapour out." },
        { q: "Which tubes carry water up from the roots?", o: ["Phloem", "Xylem", "Stomata", "Petals"],
          why: "Xylem carries water and minerals up. Phloem carries food made in the leaves." }
      ],
      terms: [
        { t: "Root hair", d: "A tiny hair-like outgrowth of a root cell that absorbs water and minerals." },
        { t: "Xylem", d: "Tubes that carry water and minerals from the roots to the leaves." },
        { t: "Phloem", d: "Tubes that carry food (sugars) from the leaves to other parts." },
        { t: "Chlorophyll", d: "The green pigment in leaves that captures light energy." },
        { t: "Photosynthesis", d: "Making food (glucose) from carbon dioxide and water using light energy." },
        { t: "Stomata", d: "Tiny pores, mostly under the leaf, for gas exchange." },
        { t: "Transpiration", d: "Loss of water vapour from the leaves through the stomata." },
        { t: "Germination", d: "When a seed starts to grow into a new plant." }
      ],
      practice: [
        { q: "Name two vegetables we eat that are really roots.", a: "Any two of: carrot, radish, beetroot, sweet potato, turnip." },
        { q: "Why does a plant droop (wilt) when the soil is dry?", a: "The roots cannot replace the water lost from the leaves, so the cells lose their firmness and the plant droops." },
        { q: "Is a potato a root or a stem? How can you tell?", a: "A stem. It has 'eyes', which are buds that grow into new shoots. Roots do not have buds." },
        { q: "A plant is kept in a dark cupboard for two weeks. What happens, and why?", a: "It becomes pale yellow, thin and weak, because without light it cannot make chlorophyll or food by photosynthesis." }
      ]
    },

    hi: {
      tagline: "फूल वाले पौधे के भागों से मिलो",
      intro: '<strong>चलो एक पौधे को समझें!</strong> किसी भी भाग या उसके नाम पर टैप करो। "💧 पौधे को पानी दो" दबाकर देखो पानी मिट्टी से पत्तियों तक कैसे जाता है, और "🌱 बीज से उगाओ" दबाकर पौधे को बढ़ते देखो।',
      ui: {
        water_btn: "💧 पौधे को पानी दो", water_stop: "💧 पानी रोको",
        water_on: "पानी जड़ों से अंदर जाता है, तने में ऊपर चढ़ता है और पत्तियों से भाप बनकर निकलता है",
        grow_btn: "🌱 बीज से उगाओ", grow_go: "पहले जड़, फिर तना और पत्तियाँ, फिर फूल और फल",
        grow_done: "पौधा पूरा बड़ा हो गया! फूल अब बीज वाला फल बन गया"
      },
      parts: {
        root: { name: "जड़", tag: "पौधे का लंगर और पानी पीने की नली",
          what: "जड़ें पौधे को मिट्टी में मज़बूती से पकड़े रखती हैं। छोटे-छोटे मूलरोम पानी और खनिज सोखकर तने तक भेजते हैं।",
          adv: "सेम और सरसों में मूसला जड़ होती है: एक मुख्य जड़ और उससे निकलती शाखाएँ। गेहूँ, मक्का और घास में झकड़ा (रेशेदार) जड़ें होती हैं: एक जैसी बहुत सारी पतली जड़ें। मूलरोम बाहरी कोशिकाओं के उभार हैं जो सोखने की सतह बहुत बढ़ा देते हैं। पानी परासरण से अंदर आता है; नाइट्रेट जैसे खनिज सक्रिय परिवहन से लिए जाते हैं, जिसमें श्वसन की ऊर्जा लगती है।",
          real: "गाजर, मूली, चुकंदर और शकरकंद जड़ें हैं जो पौधे के लिए भोजन जमा करती हैं।",
          fact: "एक मशहूर प्रयोग में राई के एक ही पौधे की सारी जड़ों को जोड़ा गया तो लंबाई 600 किलोमीटर से ज़्यादा निकली!" },
        stem: { name: "तना", tag: "पौधे की लिफ़्ट और खंभा",
          what: "तना पत्तियों को धूप की ओर ऊपर उठाए रखता है। इसके अंदर पतली नलियाँ जड़ों से पानी ऊपर और पत्तियों से भोजन हर भाग तक ले जाती हैं।",
          adv: "तने में संवहन बंडल होते हैं। जाइलम पानी और खनिज ऊपर ले जाता है; फ्लोएम पत्तियों में बनी शर्करा को जहाँ ज़रूरत हो (ऊपर या नीचे) वहाँ पहुँचाता है। जहाँ से पत्तियाँ निकलती हैं उन्हें पर्वसंधि (गाँठ) कहते हैं, और उनके बीच के हिस्से को पर्व। ऊपर का बढ़ने वाला सिरा, शीर्षस्थ विभज्योतक, तने को लंबा करता है।",
          real: "गन्ना अपने तने में चीनी जमा करता है, और आलू ज़मीन के नीचे का तना है: उसकी 'आँखें' कलियाँ हैं।",
          fact: "बाँस की कुछ किस्में एक ही दिन में लगभग एक मीटर बढ़ सकती हैं।" },
        leaf: { name: "पत्ती", tag: "पौधे की भोजन फ़ैक्टरी",
          what: "पत्तियाँ पर्णहरित (क्लोरोफ़िल) के कारण हरी होती हैं। वे धूप, पानी और हवा की कार्बन डाइऑक्साइड से पूरे पौधे का भोजन बनाती हैं। इसे प्रकाश संश्लेषण कहते हैं।",
          adv: "पत्ती में एक चपटा फलक (पर्णफलक), एक डंठल (पर्णवृंत) और शिराएँ होती हैं जिनमें जाइलम और फ्लोएम होते हैं। ज़्यादातर नीचे की सतह पर छोटे छिद्र, रंध्र, कार्बन डाइऑक्साइड को अंदर और ऑक्सीजन व जलवाष्प को बाहर जाने देते हैं। पत्तियों से जलवाष्प निकलना वाष्पोत्सर्जन कहलाता है; यह पत्ती को ठंडा रखता है और जड़ों से पानी ऊपर खींचने में मदद करता है।",
          real: "पालक, मेथी, पत्तागोभी और करी पत्ता वे पत्तियाँ हैं जो हम खाते हैं।",
          fact: "एक बड़ा पेड़ गर्मी के एक दिन में अपनी पत्तियों से सैकड़ों लीटर पानी उड़ा सकता है।" },
        flower: { name: "फूल", tag: "जहाँ से बीज शुरू होते हैं",
          what: "फूल वह भाग है जो बीज बनाता है। चमकीली पंखुड़ियाँ और मीठा रस मधुमक्खियों और तितलियों को बुलाते हैं, जो परागकण एक फूल से दूसरे फूल तक ले जाती हैं।",
          adv: "एक सामान्य फूल में चार घेरे होते हैं: बाह्यदल, दल (पंखुड़ियाँ), पुंकेसर (नर; परागकोश परागकण बनाता है) और स्त्रीकेसर (मादा; वर्तिकाग्र, वर्तिका और अंडाशय)। परागकणों का वर्तिकाग्र तक पहुँचना परागण है। निषेचन के बाद अंडाशय फल बनता है और बीजांड बीज बनते हैं। 'पुष्पी पौधों में जनन' टॉपिक देखो।",
          real: "फूलगोभी और ब्रोकली असल में फूलों की कलियों के गुच्छे हैं, और केसर एक क्रोकस फूल के वर्तिकाग्र से मिलता है।",
          fact: "सबसे बड़ा अकेला फूल, रैफ़्लेसिया आर्नोल्डी, लगभग 1 मीटर चौड़ा हो सकता है।" },
        fruit: { name: "फल", tag: "बीजों का सुरक्षा डिब्बा",
          what: "फूल का परागण होने के बाद उसका एक हिस्सा फूलकर फल बन जाता है। फल बीजों को बचाता है और उन्हें नई जगहों तक फैलाने में मदद करता है।",
          adv: "वनस्पति विज्ञान में फल पका हुआ अंडाशय है। इसीलिए टमाटर, खीरा, बैंगन और भिंडी फल हैं, भले ही हम इन्हें सब्ज़ी की तरह पकाते हैं। गूदेदार फलों को जानवर खाते हैं और बीज दूर गिरा देते हैं; कुछ फल हवा, पानी से या फटकर बीज फैलाते हैं।",
          real: "आम, अमरूद, टमाटर और भिंडी भी, सब फल हैं।",
          fact: "स्ट्रॉबेरी के बाहर दिखने वाले छोटे 'बीज' असल में छोटे-छोटे फल हैं, हर एक के अंदर एक बीज।" },
        seed: { name: "बीज", tag: "टिफ़िन के साथ एक नन्हा पौधा",
          what: "बीज में एक नन्हा पौधा (भ्रूण) और भोजन का भंडार होता है। पानी, हवा और गर्माहट मिलने पर यह जागकर बढ़ने लगता है। इसे अंकुरण कहते हैं।",
          adv: "बीज में बीजावरण, भ्रूण और बीजपत्रों या भ्रूणपोष में जमा भोजन होता है। भ्रूण का मूलांकुर जड़ बनता है और प्रांकुर तना बनता है। सेम जैसे द्विबीजपत्री बीजों में दो बीजपत्र होते हैं; मक्का जैसे एकबीजपत्री बीजों में एक।",
          real: "चावल, गेहूँ, दाल, मूँगफली और नारियल वे बीज हैं जो हम खाते हैं।",
          fact: "2005 में वैज्ञानिकों ने लगभग 2000 साल पुराने बीज से खजूर का पौधा उगा दिया!" }
      },
      quiz: [
        { q: "कौन-सा भाग मिट्टी से पानी और खनिज सोखता है?", o: ["पत्ती", "जड़", "फूल", "फल"],
          why: "जड़ों के मूलरोम मिट्टी से पानी और खनिज सोखते हैं।" },
        { q: "पौधा अपना भोजन कहाँ बनाता है?", o: ["पत्ती", "जड़", "बीज", "फल"],
          why: "पत्तियों में पर्णहरित होता है और वे धूप से प्रकाश संश्लेषण करके भोजन बनाती हैं।" },
        { q: "तने का मुख्य काम क्या है?", o: ["बीज बनाना", "परागकण बनाना", "पौधे को सीधा रखना और पानी व भोजन ले जाना", "मिट्टी से पानी सोखना"],
          why: "तना पौधे को सहारा देता है, और उसके जाइलम और फ्लोएम पानी और भोजन ले जाते हैं।" },
        { q: "पौधे का कौन-सा भाग बीज बनाता है?", o: ["जड़", "तना", "पत्ती", "फूल"],
          why: "परागण और निषेचन के बाद फूल के अंडाशय में बीज बनते हैं।" },
        { q: "वनस्पति विज्ञान के अनुसार इनमें से फल कौन-सा है?", o: ["आलू", "टमाटर", "गाजर", "पालक"],
          why: "टमाटर फूल के अंडाशय से बनता है, इसलिए वह फल है। आलू तना है, गाजर जड़ है और पालक पत्ती है।" },
        { q: "बीज को अंकुरित होने के लिए क्या चाहिए?", o: ["पानी, हवा और गर्माहट", "सिर्फ़ तेज़ धूप", "सिर्फ़ मिट्टी", "नमक और चीनी"],
          why: "ज़्यादातर बीजों को पानी, हवा की ऑक्सीजन और सही गर्माहट चाहिए। कई बीज अंधेरे में भी अंकुरित होते हैं।" },
        { q: "पत्ती के वे छोटे छिद्र जिनसे गैसें अंदर-बाहर जाती हैं, कहलाते हैं…", o: ["मूलरोम", "रंध्र", "पंखुड़ियाँ", "गाँठें"],
          why: "रंध्र कार्बन डाइऑक्साइड को अंदर और ऑक्सीजन व जलवाष्प को बाहर जाने देते हैं।" },
        { q: "कौन-सी नलियाँ जड़ों से पानी ऊपर ले जाती हैं?", o: ["फ्लोएम", "जाइलम", "रंध्र", "पंखुड़ियाँ"],
          why: "जाइलम पानी और खनिज ऊपर ले जाता है। फ्लोएम पत्तियों में बना भोजन ले जाता है।" }
      ],
      terms: [
        { t: "मूलरोम", d: "जड़ की कोशिका का बाल जैसा छोटा उभार, जो पानी और खनिज सोखता है।" },
        { t: "जाइलम", d: "नलियाँ जो जड़ों से पत्तियों तक पानी और खनिज ले जाती हैं।" },
        { t: "फ्लोएम", d: "नलियाँ जो पत्तियों से भोजन (शर्करा) दूसरे भागों तक ले जाती हैं।" },
        { t: "पर्णहरित (क्लोरोफ़िल)", d: "पत्तियों का हरा वर्णक जो प्रकाश की ऊर्जा पकड़ता है।" },
        { t: "प्रकाश संश्लेषण", d: "प्रकाश की ऊर्जा से कार्बन डाइऑक्साइड और पानी से भोजन (ग्लूकोज़) बनाना।" },
        { t: "रंध्र", d: "ज़्यादातर पत्ती के नीचे छोटे छिद्र, गैसों के आने-जाने के लिए।" },
        { t: "वाष्पोत्सर्जन", d: "रंध्रों से पत्तियों का जलवाष्प बाहर निकलना।" },
        { t: "अंकुरण", d: "जब बीज बढ़कर नया पौधा बनना शुरू करता है।" }
      ],
      practice: [
        { q: "ऐसी दो सब्ज़ियों के नाम बताओ जो असल में जड़ें हैं।", a: "इनमें से कोई दो: गाजर, मूली, चुकंदर, शकरकंद, शलजम।" },
        { q: "मिट्टी सूखने पर पौधा मुरझा क्यों जाता है?", a: "जड़ें पत्तियों से उड़े पानी की भरपाई नहीं कर पातीं, कोशिकाएँ ढीली पड़ जाती हैं और पौधा झुक जाता है।" },
        { q: "आलू जड़ है या तना? कैसे पता चलता है?", a: "तना। उसमें 'आँखें' होती हैं, जो कलियाँ हैं और नए अंकुर बनाती हैं। जड़ों में कलियाँ नहीं होतीं।" },
        { q: "एक पौधे को दो हफ़्ते अंधेरी अलमारी में रखा गया। क्या होगा, और क्यों?", a: "वह पीला, पतला और कमज़ोर हो जाएगा, क्योंकि रोशनी के बिना वह पर्णहरित और प्रकाश संश्लेषण से भोजन नहीं बना सकता।" }
      ]
    },

    mr: {
      tagline: "सपुष्प वनस्पतीचे भाग ओळखा",
      intro: '<strong>चला, एक रोप समजून घेऊया!</strong> कोणत्याही भागावर किंवा त्याच्या नावावर टॅप करा. "💧 रोपाला पाणी द्या" दाबून पाणी मातीतून पानांपर्यंत कसं जातं ते बघा, आणि "🌱 बीपासून वाढवा" दाबून रोप वाढताना बघा.',
      ui: {
        water_btn: "💧 रोपाला पाणी द्या", water_stop: "💧 पाणी थांबवा",
        water_on: "पाणी मुळांतून आत जातं, खोडातून वर चढतं आणि पानांतून वाफ होऊन बाहेर पडतं",
        grow_btn: "🌱 बीपासून वाढवा", grow_go: "आधी मूळ, मग खोड आणि पानं, मग फूल आणि फळ",
        grow_done: "रोप पूर्ण वाढलं! फुलाचं आता बिया असलेलं फळ झालं"
      },
      parts: {
        root: { name: "मूळ", tag: "रोपाचा नांगर आणि पाणी पिण्याची नळी",
          what: "मुळं रोपाला मातीत घट्ट धरून ठेवतात. बारीक मूलरोम पाणी आणि खनिजं शोषून खोडाकडे पाठवतात.",
          adv: "घेवडा आणि मोहरीला सोटमूळ असतं: एक मुख्य मूळ आणि त्याच्या उपमुळ्या. गहू, मका आणि गवताला तंतुमय मुळं असतात: एकसारखी अनेक बारीक मुळं. मूलरोम म्हणजे बाहेरच्या पेशींचे उंचवटे, ते शोषणाचं क्षेत्र खूप वाढवतात. पाणी परासरणाने आत येतं; नायट्रेटसारखी खनिजं सक्रिय वहनाने घेतली जातात, त्यासाठी श्वसनाची ऊर्जा लागते.",
          real: "गाजर, मुळा, बीट आणि रताळं ही मुळं आहेत, ती रोपासाठी अन्न साठवतात.",
          fact: "एका प्रसिद्ध प्रयोगात राईच्या एकाच रोपाची सगळी मुळं जोडली, तर लांबी 600 किलोमीटरपेक्षा जास्त भरली!" },
        stem: { name: "खोड", tag: "रोपाची लिफ्ट आणि खांब",
          what: "खोड पानांना सूर्यप्रकाशाकडे वर धरून ठेवतं. त्याच्या आतल्या बारीक नळ्या मुळांपासून पाणी वर आणि पानांपासून अन्न प्रत्येक भागात नेतात.",
          adv: "खोडात संवहनी पूल असतात. जलवाहिनी (झायलेम) पाणी आणि खनिजं वर नेते; रसवाहिनी (फ्लोएम) पानांत बनलेली साखर जिथे गरज आहे तिथे (वर किंवा खाली) पोहोचवते. जिथून पानं फुटतात त्याला पेर म्हणतात, आणि दोन पेरांमधल्या भागाला कांडं. वरचं वाढणारं टोक, अग्रस्थ विभाजी ऊती, खोड लांब करतं.",
          real: "ऊस आपल्या खोडात साखर साठवतो, आणि बटाटा हे जमिनीखालचं खोड आहे: त्याचे 'डोळे' म्हणजे कळ्या.",
          fact: "बांबूच्या काही जाती एकाच दिवसात जवळजवळ एक मीटर वाढू शकतात." },
        leaf: { name: "पान", tag: "रोपाची अन्नाची फॅक्टरी",
          what: "हरितद्रव्यामुळे पानं हिरवी असतात. ती सूर्यप्रकाश, पाणी आणि हवेतल्या कार्बन डायऑक्साइडपासून संपूर्ण रोपासाठी अन्न बनवतात. याला प्रकाशसंश्लेषण म्हणतात.",
          adv: "पानाला सपाट पर्णपत्र, देठ (पर्णवृंत) आणि शिरा असतात; शिरांमध्ये जलवाहिनी आणि रसवाहिनी असते. बहुतेक खालच्या बाजूला असलेली बारीक छिद्रं, पर्णरंध्रे, कार्बन डायऑक्साइड आत आणि ऑक्सिजन व बाष्प बाहेर जाऊ देतात. पानांतून बाष्प बाहेर पडणं म्हणजे बाष्पोत्सर्जन; त्याने पान थंड राहतं आणि मुळांतून पाणी वर ओढलं जातं.",
          real: "पालक, मेथी, कोबी आणि कढीपत्ता ही पानं आपण खातो.",
          fact: "एक मोठं झाड उन्हाळ्याच्या एका दिवसात पानांतून शेकडो लिटर पाणी बाहेर सोडू शकतं." },
        flower: { name: "फूल", tag: "जिथून बिया सुरू होतात",
          what: "फूल हा बिया तयार करणारा भाग आहे. रंगीत पाकळ्या आणि गोड मकरंद मधमाश्या आणि फुलपाखरांना बोलावतात, आणि ती परागकण एका फुलावरून दुसऱ्या फुलावर नेतात.",
          adv: "साध्या फुलात चार मंडलं असतात: निदल, पाकळ्या, पुंकेसर (नर; परागकोश परागकण बनवतो) आणि स्त्रीकेसर (मादी; कुक्षी, कुक्षीवृंत आणि अंडाशय). परागकण कुक्षीवर पोहोचणं म्हणजे परागीभवन. फलनानंतर अंडाशयाचं फळ होतं आणि बीजांडांच्या बिया होतात. 'सपुष्प वनस्पतींमधील प्रजनन' हा विषय बघा.",
          real: "फुलकोबी आणि ब्रोकोली म्हणजे खरं तर फुलांच्या कळ्यांचे गुच्छ, आणि केशर क्रोकस फुलाच्या कुक्षीपासून मिळतं.",
          fact: "सगळ्यात मोठं एकटं फूल, रॅफ्लेशिया आर्नोल्डी, सुमारे 1 मीटर रुंद असू शकतं." },
        fruit: { name: "फळ", tag: "बियांची संरक्षक पेटी",
          what: "फुलाचं परागीभवन झाल्यावर त्याचा एक भाग फुगून फळ बनतो. फळ बियांचं रक्षण करतं आणि त्यांना नव्या ठिकाणी पसरवायला मदत करतं.",
          adv: "वनस्पतिशास्त्रात फळ म्हणजे पिकलेलं अंडाशय. म्हणूनच टोमॅटो, काकडी, वांगं आणि भेंडी ही फळं आहेत, जरी आपण त्यांची भाजी करतो. गरयुक्त फळं प्राणी खातात आणि बिया दूर टाकतात; काही फळं वारा, पाणी किंवा फुटून बिया पसरवतात.",
          real: "आंबा, पेरू, टोमॅटो आणि भेंडीसुद्धा, ही सगळी फळं आहेत.",
          fact: "स्ट्रॉबेरीच्या बाहेर दिसणाऱ्या बारीक 'बिया' खरं तर छोटी फळं आहेत, प्रत्येकात एक बी." },
        seed: { name: "बी", tag: "डबा घेऊन आलेलं छोटं रोप",
          what: "बीमध्ये एक छोटं रोप (भ्रूण) आणि अन्नाचा साठा असतो. पाणी, हवा आणि ऊब मिळाली की ते जागं होऊन वाढू लागतं. याला अंकुरण म्हणतात.",
          adv: "बीमध्ये बीजावरण, भ्रूण आणि बीजपत्रांत किंवा भ्रूणपोषात साठवलेलं अन्न असतं. भ्रूणाच्या आदिमुळाचं मूळ होतं आणि आदिअंकुराचं खोड. घेवड्यासारख्या द्विदलिकित बियांना दोन बीजपत्रं असतात; मक्यासारख्या एकदलिकित बियांना एक.",
          real: "तांदूळ, गहू, डाळ, शेंगदाणे आणि नारळ या बिया आपण खातो.",
          fact: "2005 मध्ये शास्त्रज्ञांनी सुमारे 2000 वर्षं जुन्या बीपासून खजुराचं रोप उगवलं!" }
      },
      quiz: [
        { q: "कोणता भाग मातीतून पाणी आणि खनिजं शोषतो?", o: ["पान", "मूळ", "फूल", "फळ"],
          why: "मुळांवरचे मूलरोम मातीतून पाणी आणि खनिजं शोषतात." },
        { q: "रोप आपलं अन्न कुठे बनवतं?", o: ["पान", "मूळ", "बी", "फळ"],
          why: "पानांत हरितद्रव्य असतं आणि ती सूर्यप्रकाशात प्रकाशसंश्लेषणाने अन्न बनवतात." },
        { q: "खोडाचं मुख्य काम काय?", o: ["बिया बनवणं", "परागकण बनवणं", "रोपाला उभं धरणं आणि पाणी व अन्न नेणं", "मातीतून पाणी शोषणं"],
          why: "खोड रोपाला आधार देतं, आणि त्यातली जलवाहिनी व रसवाहिनी पाणी आणि अन्न नेतात." },
        { q: "रोपाचा कोणता भाग बिया बनवतो?", o: ["मूळ", "खोड", "पान", "फूल"],
          why: "परागीभवन आणि फलनानंतर फुलाच्या अंडाशयात बिया तयार होतात." },
        { q: "वनस्पतिशास्त्रानुसार यापैकी फळ कोणतं?", o: ["बटाटा", "टोमॅटो", "गाजर", "पालक"],
          why: "टोमॅटो फुलाच्या अंडाशयापासून बनतो, म्हणून ते फळ आहे. बटाटा खोड, गाजर मूळ आणि पालक पान आहे." },
        { q: "बी रुजण्यासाठी काय लागतं?", o: ["पाणी, हवा आणि ऊब", "फक्त प्रखर सूर्यप्रकाश", "फक्त माती", "मीठ आणि साखर"],
          why: "बहुतेक बियांना पाणी, हवेतला ऑक्सिजन आणि योग्य ऊब लागते. अनेक बिया अंधारातही रुजतात." },
        { q: "पानावरची ज्या बारीक छिद्रांतून वायू आत-बाहेर जातात, त्यांना म्हणतात…", o: ["मूलरोम", "पर्णरंध्रे", "पाकळ्या", "पेरं"],
          why: "पर्णरंध्रे कार्बन डायऑक्साइड आत आणि ऑक्सिजन व बाष्प बाहेर जाऊ देतात." },
        { q: "कोणत्या नळ्या मुळांपासून पाणी वर नेतात?", o: ["रसवाहिनी (फ्लोएम)", "जलवाहिनी (झायलेम)", "पर्णरंध्रे", "पाकळ्या"],
          why: "जलवाहिनी पाणी आणि खनिजं वर नेते. रसवाहिनी पानांत बनलेलं अन्न नेते." }
      ],
      terms: [
        { t: "मूलरोम", d: "मुळाच्या पेशीचा केसासारखा बारीक उंचवटा, जो पाणी आणि खनिजं शोषतो." },
        { t: "जलवाहिनी (झायलेम)", d: "मुळांपासून पानांपर्यंत पाणी आणि खनिजं नेणाऱ्या नळ्या." },
        { t: "रसवाहिनी (फ्लोएम)", d: "पानांपासून अन्न (साखर) इतर भागांत नेणाऱ्या नळ्या." },
        { t: "हरितद्रव्य", d: "पानांतलं हिरवं रंगद्रव्य, जे प्रकाशाची ऊर्जा पकडतं." },
        { t: "प्रकाशसंश्लेषण", d: "प्रकाशाच्या ऊर्जेने कार्बन डायऑक्साइड आणि पाण्यापासून अन्न (ग्लुकोज) बनवणं." },
        { t: "पर्णरंध्रे", d: "बहुतेक पानाच्या खालच्या बाजूची बारीक छिद्रं, वायूंच्या देवाणघेवाणीसाठी." },
        { t: "बाष्पोत्सर्जन", d: "पर्णरंध्रांतून पानांचं बाष्प बाहेर पडणं." },
        { t: "अंकुरण", d: "बी वाढून नवं रोप बनायला सुरुवात होणं." }
      ],
      practice: [
        { q: "खरं तर मुळं असलेल्या दोन भाज्यांची नावं सांगा.", a: "यापैकी कोणत्याही दोन: गाजर, मुळा, बीट, रताळं, सलगम." },
        { q: "माती कोरडी झाली की रोप का कोमेजतं?", a: "पानांतून गेलेलं पाणी मुळं भरून काढू शकत नाहीत, पेशी सैल पडतात आणि रोप वाकतं." },
        { q: "बटाटा मूळ आहे की खोड? कसं ओळखाल?", a: "खोड. त्याला 'डोळे' असतात, त्या कळ्या असून त्यातून नवे कोंब येतात. मुळांना कळ्या नसतात." },
        { q: "एक रोप दोन आठवडे अंधाऱ्या कपाटात ठेवलं. काय होईल, आणि का?", a: "ते पिवळं, बारीक आणि कमकुवत होईल, कारण प्रकाशाशिवाय ते हरितद्रव्य आणि प्रकाशसंश्लेषणाने अन्न बनवू शकत नाही." }
      ]
    },

    kn: {
      tagline: "ಹೂಬಿಡುವ ಸಸ್ಯದ ಭಾಗಗಳನ್ನು ಪರಿಚಯಿಸಿಕೊಳ್ಳಿ",
      intro: '<strong>ಬನ್ನಿ, ಒಂದು ಸಸ್ಯವನ್ನು ಅರಿಯೋಣ!</strong> ಯಾವುದೇ ಭಾಗ ಅಥವಾ ಅದರ ಹೆಸರಿನ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿ. "💧 ಸಸ್ಯಕ್ಕೆ ನೀರು ಹಾಕಿ" ಒತ್ತಿ ನೀರು ಮಣ್ಣಿನಿಂದ ಎಲೆಗಳವರೆಗೆ ಹೇಗೆ ಹೋಗುತ್ತದೆ ನೋಡಿ, ಮತ್ತು "🌱 ಬೀಜದಿಂದ ಬೆಳೆಸಿ" ಒತ್ತಿ ಸಸ್ಯ ಬೆಳೆಯುವುದನ್ನು ನೋಡಿ.',
      ui: {
        water_btn: "💧 ಸಸ್ಯಕ್ಕೆ ನೀರು ಹಾಕಿ", water_stop: "💧 ನೀರು ನಿಲ್ಲಿಸಿ",
        water_on: "ನೀರು ಬೇರುಗಳಿಂದ ಒಳಗೆ ಹೋಗಿ, ಕಾಂಡದಲ್ಲಿ ಮೇಲೇರಿ, ಎಲೆಗಳಿಂದ ಆವಿಯಾಗಿ ಹೊರಬರುತ್ತದೆ",
        grow_btn: "🌱 ಬೀಜದಿಂದ ಬೆಳೆಸಿ", grow_go: "ಮೊದಲು ಬೇರು, ನಂತರ ಕಾಂಡ ಮತ್ತು ಎಲೆಗಳು, ನಂತರ ಹೂವು ಮತ್ತು ಹಣ್ಣು",
        grow_done: "ಸಸ್ಯ ಪೂರ್ಣವಾಗಿ ಬೆಳೆಯಿತು! ಹೂವು ಈಗ ಬೀಜಗಳಿರುವ ಹಣ್ಣಾಗಿದೆ"
      },
      parts: {
        root: { name: "ಬೇರು", tag: "ಸಸ್ಯದ ಲಂಗರು ಮತ್ತು ನೀರು ಕುಡಿಯುವ ಕೊಳವೆ",
          what: "ಬೇರುಗಳು ಸಸ್ಯವನ್ನು ಮಣ್ಣಿನಲ್ಲಿ ಗಟ್ಟಿಯಾಗಿ ಹಿಡಿದಿಡುತ್ತವೆ. ಸಣ್ಣ ಬೇರುಕೂದಲುಗಳು ನೀರು ಮತ್ತು ಖನಿಜಗಳನ್ನು ಹೀರಿ ಕಾಂಡಕ್ಕೆ ಕಳುಹಿಸುತ್ತವೆ.",
          adv: "ಅವರೆ ಮತ್ತು ಸಾಸಿವೆಯಲ್ಲಿ ತಾಯಿಬೇರು ವ್ಯವಸ್ಥೆ ಇರುತ್ತದೆ: ಒಂದು ಮುಖ್ಯ ಬೇರು ಮತ್ತು ಅದರ ಕವಲುಗಳು. ಗೋಧಿ, ಮೆಕ್ಕೆಜೋಳ ಮತ್ತು ಹುಲ್ಲಿನಲ್ಲಿ ತಂತುಬೇರುಗಳಿರುತ್ತವೆ: ಒಂದೇ ಗಾತ್ರದ ಅನೇಕ ತೆಳು ಬೇರುಗಳು. ಬೇರುಕೂದಲುಗಳು ಹೊರಗಿನ ಕೋಶಗಳ ಉಬ್ಬುಗಳು, ಅವು ಹೀರುವ ಮೇಲ್ಮೈಯನ್ನು ಬಹಳ ಹೆಚ್ಚಿಸುತ್ತವೆ. ನೀರು ಆಸ್ಮೋಸಿಸ್ (ಅಭಿಸರಣ) ಮೂಲಕ ಒಳಬರುತ್ತದೆ; ನೈಟ್ರೇಟ್‌ನಂತಹ ಖನಿಜಗಳನ್ನು ಸಕ್ರಿಯ ಸಾಗಣೆಯ ಮೂಲಕ ತೆಗೆದುಕೊಳ್ಳಲಾಗುತ್ತದೆ, ಇದಕ್ಕೆ ಉಸಿರಾಟದ ಶಕ್ತಿ ಬೇಕು.",
          real: "ಕ್ಯಾರೆಟ್, ಮೂಲಂಗಿ, ಬೀಟ್‌ರೂಟ್ ಮತ್ತು ಗೆಣಸು ಸಸ್ಯಕ್ಕಾಗಿ ಆಹಾರ ಸಂಗ್ರಹಿಸುವ ಬೇರುಗಳು.",
          fact: "ಒಂದು ಪ್ರಸಿದ್ಧ ಪ್ರಯೋಗದಲ್ಲಿ, ಒಂದೇ ರೈ ಸಸ್ಯದ ಎಲ್ಲಾ ಬೇರುಗಳನ್ನು ಸೇರಿಸಿದಾಗ ಉದ್ದ 600 ಕಿಲೋಮೀಟರ್‌ಗಿಂತ ಹೆಚ್ಚು ಇತ್ತು!" },
        stem: { name: "ಕಾಂಡ", tag: "ಸಸ್ಯದ ಲಿಫ್ಟ್ ಮತ್ತು ಕಂಬ",
          what: "ಕಾಂಡವು ಎಲೆಗಳನ್ನು ಸೂರ್ಯನ ಬೆಳಕಿನ ಕಡೆಗೆ ಮೇಲೆತ್ತಿ ಹಿಡಿಯುತ್ತದೆ. ಅದರೊಳಗಿನ ತೆಳು ನಳಿಕೆಗಳು ಬೇರುಗಳಿಂದ ನೀರನ್ನು ಮೇಲಕ್ಕೆ ಮತ್ತು ಎಲೆಗಳಿಂದ ಆಹಾರವನ್ನು ಎಲ್ಲಾ ಭಾಗಗಳಿಗೆ ಸಾಗಿಸುತ್ತವೆ.",
          adv: "ಕಾಂಡದಲ್ಲಿ ನಾಳಕಟ್ಟುಗಳಿರುತ್ತವೆ. ಕ್ಸೈಲಮ್ ನೀರು ಮತ್ತು ಖನಿಜಗಳನ್ನು ಮೇಲಕ್ಕೆ ಸಾಗಿಸುತ್ತದೆ; ಫ್ಲೋಯಮ್ ಎಲೆಗಳಲ್ಲಿ ತಯಾರಾದ ಸಕ್ಕರೆಯನ್ನು ಅಗತ್ಯವಿರುವ ಕಡೆಗೆ (ಮೇಲೆ ಅಥವಾ ಕೆಳಗೆ) ಸಾಗಿಸುತ್ತದೆ. ಎಲೆಗಳು ಹುಟ್ಟುವ ಸ್ಥಳಗಳು ಗೆಣ್ಣುಗಳು, ಅವುಗಳ ನಡುವಿನ ಭಾಗ ಅಂತರಗೆಣ್ಣು. ಮೇಲಿನ ಬೆಳೆಯುವ ತುದಿ, ಅಗ್ರ ವರ್ಧನ ಅಂಗಾಂಶ, ಕಾಂಡವನ್ನು ಉದ್ದವಾಗಿಸುತ್ತದೆ.",
          real: "ಕಬ್ಬು ತನ್ನ ಕಾಂಡದಲ್ಲಿ ಸಕ್ಕರೆ ಸಂಗ್ರಹಿಸುತ್ತದೆ, ಮತ್ತು ಆಲೂಗಡ್ಡೆ ನೆಲದಡಿಯ ಕಾಂಡ: ಅದರ 'ಕಣ್ಣುಗಳು' ಮೊಗ್ಗುಗಳು.",
          fact: "ಕೆಲವು ಬಗೆಯ ಬಿದಿರು ಒಂದೇ ದಿನದಲ್ಲಿ ಸುಮಾರು ಒಂದು ಮೀಟರ್ ಬೆಳೆಯಬಲ್ಲದು." },
        leaf: { name: "ಎಲೆ", tag: "ಸಸ್ಯದ ಆಹಾರ ಕಾರ್ಖಾನೆ",
          what: "ಪತ್ರಹರಿತ್ತಿನಿಂದಾಗಿ ಎಲೆಗಳು ಹಸಿರಾಗಿವೆ. ಅವು ಸೂರ್ಯನ ಬೆಳಕು, ನೀರು ಮತ್ತು ಗಾಳಿಯ ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ಬಳಸಿ ಇಡೀ ಸಸ್ಯಕ್ಕೆ ಆಹಾರ ತಯಾರಿಸುತ್ತವೆ. ಇದನ್ನು ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ ಎನ್ನುತ್ತಾರೆ.",
          adv: "ಎಲೆಗೆ ಚಪ್ಪಟೆಯಾದ ಪತ್ರ, ತೊಟ್ಟು ಮತ್ತು ನರಗಳಿರುತ್ತವೆ; ನರಗಳಲ್ಲಿ ಕ್ಸೈಲಮ್ ಮತ್ತು ಫ್ಲೋಯಮ್ ಇರುತ್ತವೆ. ಹೆಚ್ಚಾಗಿ ಕೆಳಭಾಗದಲ್ಲಿರುವ ಸಣ್ಣ ರಂಧ್ರಗಳು, ಪತ್ರರಂಧ್ರಗಳು, ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ಒಳಗೆ ಮತ್ತು ಆಮ್ಲಜನಕ ಹಾಗೂ ನೀರಾವಿ ಹೊರಗೆ ಹೋಗಲು ಬಿಡುತ್ತವೆ. ಎಲೆಗಳಿಂದ ನೀರಾವಿ ಹೊರಹೋಗುವುದು ಬಾಷ್ಪವಿಸರ್ಜನೆ; ಇದು ಎಲೆಯನ್ನು ತಂಪಾಗಿಡುತ್ತದೆ ಮತ್ತು ಬೇರುಗಳಿಂದ ನೀರನ್ನು ಮೇಲಕ್ಕೆ ಎಳೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
          real: "ಪಾಲಕ್, ಮೆಂತ್ಯ, ಎಲೆಕೋಸು ಮತ್ತು ಕರಿಬೇವು ನಾವು ತಿನ್ನುವ ಎಲೆಗಳು.",
          fact: "ಒಂದು ದೊಡ್ಡ ಮರವು ಒಂದು ಬಿಸಿಲಿನ ದಿನದಲ್ಲಿ ತನ್ನ ಎಲೆಗಳ ಮೂಲಕ ನೂರಾರು ಲೀಟರ್ ನೀರನ್ನು ಕಳೆದುಕೊಳ್ಳಬಹುದು." },
        flower: { name: "ಹೂವು", tag: "ಬೀಜಗಳು ಶುರುವಾಗುವ ಜಾಗ",
          what: "ಹೂವು ಬೀಜಗಳನ್ನು ತಯಾರಿಸುವ ಭಾಗ. ಬಣ್ಣದ ದಳಗಳು ಮತ್ತು ಸಿಹಿ ಮಕರಂದ ಜೇನುನೊಣ ಮತ್ತು ಚಿಟ್ಟೆಗಳನ್ನು ಕರೆಯುತ್ತವೆ, ಅವು ಪರಾಗವನ್ನು ಒಂದು ಹೂವಿನಿಂದ ಇನ್ನೊಂದಕ್ಕೆ ಒಯ್ಯುತ್ತವೆ.",
          adv: "ಸಾಮಾನ್ಯ ಹೂವಿನಲ್ಲಿ ನಾಲ್ಕು ಸುತ್ತುಗಳಿರುತ್ತವೆ: ಪುಷ್ಪಪತ್ರಗಳು, ದಳಗಳು, ಕೇಸರಗಳು (ಗಂಡು; ಪರಾಗಕೋಶ ಪರಾಗ ತಯಾರಿಸುತ್ತದೆ) ಮತ್ತು ಶಲಾಕೆ (ಹೆಣ್ಣು; ಶಲಾಕಾಗ್ರ, ಶಲಾಕಾನಳಿಕೆ ಮತ್ತು ಅಂಡಾಶಯ). ಪರಾಗವು ಶಲಾಕಾಗ್ರವನ್ನು ತಲುಪುವುದು ಪರಾಗಸ್ಪರ್ಶ. ನಿಷೇಚನದ ನಂತರ ಅಂಡಾಶಯ ಹಣ್ಣಾಗುತ್ತದೆ ಮತ್ತು ಅಂಡಕಗಳು ಬೀಜಗಳಾಗುತ್ತವೆ. 'ಹೂಬಿಡುವ ಸಸ್ಯಗಳಲ್ಲಿ ಸಂತಾನೋತ್ಪತ್ತಿ' ವಿಷಯ ನೋಡಿ.",
          real: "ಹೂಕೋಸು ಮತ್ತು ಬ್ರೊಕೊಲಿ ನಿಜವಾಗಿ ಹೂಮೊಗ್ಗುಗಳ ಗೊಂಚಲು, ಮತ್ತು ಕೇಸರಿ ಕ್ರೋಕಸ್ ಹೂವಿನ ಶಲಾಕಾಗ್ರದಿಂದ ಸಿಗುತ್ತದೆ.",
          fact: "ಅತಿ ದೊಡ್ಡ ಒಂಟಿ ಹೂವು, ರಾಫ್ಲೇಸಿಯಾ ಆರ್ನಾಲ್ಡಿ, ಸುಮಾರು 1 ಮೀಟರ್ ಅಗಲ ಇರಬಹುದು." },
        fruit: { name: "ಹಣ್ಣು", tag: "ಬೀಜಗಳ ರಕ್ಷಣಾ ಪೆಟ್ಟಿಗೆ",
          what: "ಹೂವಿಗೆ ಪರಾಗಸ್ಪರ್ಶವಾದ ನಂತರ ಅದರ ಒಂದು ಭಾಗ ಉಬ್ಬಿ ಹಣ್ಣಾಗುತ್ತದೆ. ಹಣ್ಣು ಬೀಜಗಳನ್ನು ರಕ್ಷಿಸುತ್ತದೆ ಮತ್ತು ಅವುಗಳನ್ನು ಹೊಸ ಜಾಗಗಳಿಗೆ ಹರಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
          adv: "ಸಸ್ಯಶಾಸ್ತ್ರದಲ್ಲಿ ಹಣ್ಣು ಎಂದರೆ ಮಾಗಿದ ಅಂಡಾಶಯ. ಅದಕ್ಕಾಗಿಯೇ ಟೊಮೆಟೊ, ಸೌತೆಕಾಯಿ, ಬದನೆ ಮತ್ತು ಬೆಂಡೆಕಾಯಿ ಹಣ್ಣುಗಳು, ನಾವು ಅವುಗಳನ್ನು ತರಕಾರಿಯಂತೆ ಬೇಯಿಸಿದರೂ ಸಹ. ತಿರುಳಿನ ಹಣ್ಣುಗಳನ್ನು ಪ್ರಾಣಿಗಳು ತಿಂದು ಬೀಜಗಳನ್ನು ದೂರ ಬಿಡುತ್ತವೆ; ಇತರ ಹಣ್ಣುಗಳು ಗಾಳಿ, ನೀರು ಅಥವಾ ಸಿಡಿಯುವುದರಿಂದ ಹರಡುತ್ತವೆ.",
          real: "ಮಾವು, ಸೀಬೆ, ಟೊಮೆಟೊ ಮತ್ತು ಬೆಂಡೆಕಾಯಿ ಕೂಡ, ಎಲ್ಲವೂ ಹಣ್ಣುಗಳು.",
          fact: "ಸ್ಟ್ರಾಬೆರಿಯ ಹೊರಗೆ ಕಾಣುವ ಸಣ್ಣ 'ಬೀಜಗಳು' ನಿಜವಾಗಿ ಪುಟ್ಟ ಹಣ್ಣುಗಳು, ಪ್ರತಿಯೊಂದರಲ್ಲೂ ಒಂದು ಬೀಜ." },
        seed: { name: "ಬೀಜ", tag: "ಬುತ್ತಿ ಸಹಿತ ಪುಟ್ಟ ಸಸ್ಯ",
          what: "ಬೀಜದಲ್ಲಿ ಒಂದು ಪುಟ್ಟ ಸಸ್ಯ (ಭ್ರೂಣ) ಮತ್ತು ಆಹಾರದ ಸಂಗ್ರಹ ಇರುತ್ತದೆ. ನೀರು, ಗಾಳಿ ಮತ್ತು ಬೆಚ್ಚಗಿನ ವಾತಾವರಣ ಸಿಕ್ಕಾಗ ಅದು ಎಚ್ಚೆತ್ತು ಬೆಳೆಯುತ್ತದೆ. ಇದನ್ನು ಮೊಳಕೆಯೊಡೆಯುವಿಕೆ ಎನ್ನುತ್ತಾರೆ.",
          adv: "ಬೀಜದಲ್ಲಿ ಬೀಜಕವಚ, ಭ್ರೂಣ ಮತ್ತು ಬೀಜದಳಗಳಲ್ಲಿ ಅಥವಾ ಭ್ರೂಣಪೋಷಕದಲ್ಲಿ ಸಂಗ್ರಹವಾದ ಆಹಾರ ಇರುತ್ತದೆ. ಭ್ರೂಣದ ಭ್ರೂಣಮೂಲ ಬೇರಾಗುತ್ತದೆ ಮತ್ತು ಭ್ರೂಣಾಂಕುರ ಚಿಗುರಾಗುತ್ತದೆ. ಅವರೆಯಂತಹ ದ್ವಿದಳ ಬೀಜಗಳಿಗೆ ಎರಡು ಬೀಜದಳಗಳು; ಮೆಕ್ಕೆಜೋಳದಂತಹ ಏಕದಳ ಬೀಜಗಳಿಗೆ ಒಂದು.",
          real: "ಅಕ್ಕಿ, ಗೋಧಿ, ಬೇಳೆ, ಕಡಲೆಕಾಯಿ ಮತ್ತು ತೆಂಗಿನಕಾಯಿ ನಾವು ತಿನ್ನುವ ಬೀಜಗಳು.",
          fact: "2005 ರಲ್ಲಿ ವಿಜ್ಞಾನಿಗಳು ಸುಮಾರು 2000 ವರ್ಷ ಹಳೆಯ ಬೀಜದಿಂದ ಖರ್ಜೂರದ ಸಸ್ಯವನ್ನು ಬೆಳೆಸಿದರು!" }
      },
      quiz: [
        { q: "ಯಾವ ಭಾಗ ಮಣ್ಣಿನಿಂದ ನೀರು ಮತ್ತು ಖನಿಜಗಳನ್ನು ಹೀರುತ್ತದೆ?", o: ["ಎಲೆ", "ಬೇರು", "ಹೂವು", "ಹಣ್ಣು"],
          why: "ಬೇರುಗಳ ಮೇಲಿನ ಬೇರುಕೂದಲುಗಳು ಮಣ್ಣಿನಿಂದ ನೀರು ಮತ್ತು ಖನಿಜಗಳನ್ನು ಹೀರುತ್ತವೆ." },
        { q: "ಸಸ್ಯ ತನ್ನ ಆಹಾರವನ್ನು ಎಲ್ಲಿ ತಯಾರಿಸುತ್ತದೆ?", o: ["ಎಲೆ", "ಬೇರು", "ಬೀಜ", "ಹಣ್ಣು"],
          why: "ಎಲೆಗಳಲ್ಲಿ ಪತ್ರಹರಿತ್ತು ಇದೆ, ಅವು ಸೂರ್ಯನ ಬೆಳಕಿನಲ್ಲಿ ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಯಿಂದ ಆಹಾರ ತಯಾರಿಸುತ್ತವೆ." },
        { q: "ಕಾಂಡದ ಮುಖ್ಯ ಕೆಲಸ ಏನು?", o: ["ಬೀಜಗಳನ್ನು ತಯಾರಿಸುವುದು", "ಪರಾಗ ತಯಾರಿಸುವುದು", "ಸಸ್ಯವನ್ನು ನೇರವಾಗಿ ಹಿಡಿದು ನೀರು ಮತ್ತು ಆಹಾರ ಸಾಗಿಸುವುದು", "ಮಣ್ಣಿನಿಂದ ನೀರು ಹೀರುವುದು"],
          why: "ಕಾಂಡ ಸಸ್ಯಕ್ಕೆ ಆಧಾರ ನೀಡುತ್ತದೆ, ಅದರ ಕ್ಸೈಲಮ್ ಮತ್ತು ಫ್ಲೋಯಮ್ ನೀರು ಮತ್ತು ಆಹಾರವನ್ನು ಸಾಗಿಸುತ್ತವೆ." },
        { q: "ಸಸ್ಯದ ಯಾವ ಭಾಗ ಬೀಜಗಳನ್ನು ತಯಾರಿಸುತ್ತದೆ?", o: ["ಬೇರು", "ಕಾಂಡ", "ಎಲೆ", "ಹೂವು"],
          why: "ಪರಾಗಸ್ಪರ್ಶ ಮತ್ತು ನಿಷೇಚನದ ನಂತರ ಹೂವಿನ ಅಂಡಾಶಯದಲ್ಲಿ ಬೀಜಗಳು ಉಂಟಾಗುತ್ತವೆ." },
        { q: "ಸಸ್ಯಶಾಸ್ತ್ರದ ಪ್ರಕಾರ ಇವುಗಳಲ್ಲಿ ಹಣ್ಣು ಯಾವುದು?", o: ["ಆಲೂಗಡ್ಡೆ", "ಟೊಮೆಟೊ", "ಕ್ಯಾರೆಟ್", "ಪಾಲಕ್"],
          why: "ಟೊಮೆಟೊ ಹೂವಿನ ಅಂಡಾಶಯದಿಂದ ಬೆಳೆಯುತ್ತದೆ, ಆದ್ದರಿಂದ ಅದು ಹಣ್ಣು. ಆಲೂಗಡ್ಡೆ ಕಾಂಡ, ಕ್ಯಾರೆಟ್ ಬೇರು ಮತ್ತು ಪಾಲಕ್ ಎಲೆ." },
        { q: "ಬೀಜ ಮೊಳಕೆಯೊಡೆಯಲು ಏನು ಬೇಕು?", o: ["ನೀರು, ಗಾಳಿ ಮತ್ತು ಬೆಚ್ಚಗಿನ ವಾತಾವರಣ", "ಕೇವಲ ಪ್ರಖರ ಬಿಸಿಲು", "ಕೇವಲ ಮಣ್ಣು", "ಉಪ್ಪು ಮತ್ತು ಸಕ್ಕರೆ"],
          why: "ಹೆಚ್ಚಿನ ಬೀಜಗಳಿಗೆ ನೀರು, ಗಾಳಿಯ ಆಮ್ಲಜನಕ ಮತ್ತು ಸರಿಯಾದ ಬೆಚ್ಚಗಿನ ವಾತಾವರಣ ಬೇಕು. ಅನೇಕ ಬೀಜಗಳು ಕತ್ತಲೆಯಲ್ಲೂ ಮೊಳಕೆಯೊಡೆಯುತ್ತವೆ." },
        { q: "ಅನಿಲಗಳು ಒಳಗೆ-ಹೊರಗೆ ಹೋಗುವ ಎಲೆಯ ಮೇಲಿನ ಸಣ್ಣ ರಂಧ್ರಗಳನ್ನು ಹೀಗೆನ್ನುತ್ತಾರೆ…", o: ["ಬೇರುಕೂದಲುಗಳು", "ಪತ್ರರಂಧ್ರಗಳು", "ದಳಗಳು", "ಗೆಣ್ಣುಗಳು"],
          why: "ಪತ್ರರಂಧ್ರಗಳು ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ಒಳಗೆ ಮತ್ತು ಆಮ್ಲಜನಕ ಹಾಗೂ ನೀರಾವಿ ಹೊರಗೆ ಹೋಗಲು ಬಿಡುತ್ತವೆ." },
        { q: "ಯಾವ ನಳಿಕೆಗಳು ಬೇರುಗಳಿಂದ ನೀರನ್ನು ಮೇಲಕ್ಕೆ ಸಾಗಿಸುತ್ತವೆ?", o: ["ಫ್ಲೋಯಮ್", "ಕ್ಸೈಲಮ್", "ಪತ್ರರಂಧ್ರಗಳು", "ದಳಗಳು"],
          why: "ಕ್ಸೈಲಮ್ ನೀರು ಮತ್ತು ಖನಿಜಗಳನ್ನು ಮೇಲಕ್ಕೆ ಸಾಗಿಸುತ್ತದೆ. ಫ್ಲೋಯಮ್ ಎಲೆಗಳಲ್ಲಿ ತಯಾರಾದ ಆಹಾರವನ್ನು ಸಾಗಿಸುತ್ತದೆ." }
      ],
      terms: [
        { t: "ಬೇರುಕೂದಲು", d: "ನೀರು ಮತ್ತು ಖನಿಜಗಳನ್ನು ಹೀರುವ, ಬೇರಿನ ಕೋಶದ ಕೂದಲಿನಂತಹ ಸಣ್ಣ ಉಬ್ಬು." },
        { t: "ಕ್ಸೈಲಮ್", d: "ಬೇರುಗಳಿಂದ ಎಲೆಗಳಿಗೆ ನೀರು ಮತ್ತು ಖನಿಜಗಳನ್ನು ಸಾಗಿಸುವ ನಳಿಕೆಗಳು." },
        { t: "ಫ್ಲೋಯಮ್", d: "ಎಲೆಗಳಿಂದ ಆಹಾರವನ್ನು (ಸಕ್ಕರೆ) ಇತರ ಭಾಗಗಳಿಗೆ ಸಾಗಿಸುವ ನಳಿಕೆಗಳು." },
        { t: "ಪತ್ರಹರಿತ್ತು", d: "ಬೆಳಕಿನ ಶಕ್ತಿಯನ್ನು ಹಿಡಿಯುವ ಎಲೆಗಳ ಹಸಿರು ವರ್ಣದ್ರವ್ಯ." },
        { t: "ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ", d: "ಬೆಳಕಿನ ಶಕ್ತಿಯಿಂದ ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ಮತ್ತು ನೀರಿನಿಂದ ಆಹಾರ (ಗ್ಲೂಕೋಸ್) ತಯಾರಿಸುವುದು." },
        { t: "ಪತ್ರರಂಧ್ರಗಳು", d: "ಅನಿಲ ವಿನಿಮಯಕ್ಕಾಗಿ, ಹೆಚ್ಚಾಗಿ ಎಲೆಯ ಕೆಳಭಾಗದಲ್ಲಿರುವ ಸಣ್ಣ ರಂಧ್ರಗಳು." },
        { t: "ಬಾಷ್ಪವಿಸರ್ಜನೆ", d: "ಪತ್ರರಂಧ್ರಗಳ ಮೂಲಕ ಎಲೆಗಳಿಂದ ನೀರಾವಿ ಹೊರಹೋಗುವುದು." },
        { t: "ಮೊಳಕೆಯೊಡೆಯುವಿಕೆ", d: "ಬೀಜವು ಹೊಸ ಸಸ್ಯವಾಗಿ ಬೆಳೆಯಲು ಶುರು ಮಾಡುವುದು." }
      ],
      practice: [
        { q: "ನಿಜವಾಗಿ ಬೇರುಗಳಾಗಿರುವ ಎರಡು ತರಕಾರಿಗಳನ್ನು ಹೆಸರಿಸಿ.", a: "ಇವುಗಳಲ್ಲಿ ಯಾವುದಾದರೂ ಎರಡು: ಕ್ಯಾರೆಟ್, ಮೂಲಂಗಿ, ಬೀಟ್‌ರೂಟ್, ಗೆಣಸು, ಟರ್ನಿಪ್." },
        { q: "ಮಣ್ಣು ಒಣಗಿದಾಗ ಸಸ್ಯ ಏಕೆ ಬಾಡುತ್ತದೆ?", a: "ಎಲೆಗಳಿಂದ ಕಳೆದುಹೋದ ನೀರನ್ನು ಬೇರುಗಳು ತುಂಬಲಾರವು, ಕೋಶಗಳು ಸಡಿಲವಾಗಿ ಸಸ್ಯ ಬಾಗುತ್ತದೆ." },
        { q: "ಆಲೂಗಡ್ಡೆ ಬೇರೋ ಕಾಂಡವೋ? ಹೇಗೆ ತಿಳಿಯುತ್ತದೆ?", a: "ಕಾಂಡ. ಅದಕ್ಕೆ 'ಕಣ್ಣುಗಳು' ಇವೆ, ಅವು ಹೊಸ ಚಿಗುರುಗಳಾಗಿ ಬೆಳೆಯುವ ಮೊಗ್ಗುಗಳು. ಬೇರುಗಳಿಗೆ ಮೊಗ್ಗುಗಳಿಲ್ಲ." },
        { q: "ಒಂದು ಸಸ್ಯವನ್ನು ಎರಡು ವಾರ ಕತ್ತಲೆ ಕಪಾಟಿನಲ್ಲಿ ಇಟ್ಟರೆ ಏನಾಗುತ್ತದೆ, ಏಕೆ?", a: "ಅದು ಹಳದಿ, ತೆಳು ಮತ್ತು ದುರ್ಬಲವಾಗುತ್ತದೆ, ಏಕೆಂದರೆ ಬೆಳಕಿಲ್ಲದೆ ಅದು ಪತ್ರಹರಿತ್ತು ಮತ್ತು ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಯಿಂದ ಆಹಾರ ತಯಾರಿಸಲಾರದು." }
      ]
    }
  },

  /* ------------------------------------------------------------------
     3D MODEL: mitti ka kata hua dabba (jadein dikhti hain), tana, 6 pattiyan,
     phool, latakta phal aur kata hua phal jisme beej dikhte hain.
  ------------------------------------------------------------------ */
  build: function (api) {
    var THREE = api.THREE, mat = api.mat, K = TL.bioKit(api), V = K.V;
    var s = api.state;
    s.K = K;

    /* Mitti: aar-paar dikhne wala dabba, taaki jadein dikhein (decor, chuna nahi jaata) */
    var soilM = mat(0x6b3f1d, { rough: 1, opacity: 0.22 });
    soilM.depthWrite = false;
    api.decor(api.box(5.2, 2.4, 3.2, soilM, 0, -1.22, 0));
    var topM = mat(0x4a2e14, { rough: 1, opacity: 0.55 });
    topM.depthWrite = false;
    api.decor(api.box(5.2, 0.06, 3.2, topM, 0, -0.03, 0));
    var pebM = mat(0xa08c78, { rough: 0.9 });
    [[-1.8, -0.8, 1.1], [1.6, -1.6, -0.9], [-0.9, -2.0, -1.0], [2.0, -0.5, 1.2]].forEach(function (p) {
      api.decor(K.blob(0.12, pebM, 1.3, 0.8, 1, 10)).position.set(p[0], p[1], p[2]);
    });

    /* Jad: mukhya (mooslaa) jad + side ki jadein + mool-rom */
    var root = new THREE.Group();
    var rootM = mat(0xdcc08e, { rough: 0.8 });
    var tap = api.cyl(0.13, 0.015, 2.0, rootM, 0, -1.0, 0, 12);
    root.add(tap);
    for (var i = 0; i < 8; i++) {
      var a = i * 2.4, y0 = -0.3 - i * 0.2, len = 0.95 - i * 0.07;
      var from = V(0, y0, 0), to = V(Math.cos(a) * len, y0 - 0.35, Math.sin(a) * len);
      root.add(api.rod(from, to, 0.028, rootM));
      for (var h = 1; h <= 3; h++) {
        var p = from.clone().lerp(to, h / 3.4);
        root.add(api.rod(p, p.clone().add(V(Math.cos(a + 1.2) * 0.12, -0.1, Math.sin(a + 1.2) * 0.12)), 0.008, rootM));
      }
    }
    api.addPart("root", root, V(0, 0, 0), null, { label: V(0.25, -1.2, 0) });

    /* Tana: neeche se upar badhta hai (scale.y), isliye mesh ka base y=0 par */
    var stem = new THREE.Group();
    var stemM = mat(0x4f9a3a, { rough: 0.6 });
    stem.add(api.cyl(0.08, 0.14, 4.3, stemM, 0, 2.15, 0, 14));
    var LEAVES = [[0.9, 0.3, 1.25], [1.4, 2.7, 1.2], [1.95, 5.1, 1.1], [2.45, 1.3, 1.0], [3.0, 3.9, 0.9], [3.45, 0.2, 0.75]];
    LEAVES.forEach(function (L) { var ring = api.torus(0.13 - L[0] * 0.012, 0.025, stemM, 0, L[0], 0); ring.rotation.x = Math.PI / 2; stem.add(ring); });
    api.addPart("stem", stem, V(0, 0, 0), null, { label: V(0, 3.25, 0) });

    /* Pattiyan: ek hi part "leaf" ke 6 tukde */
    var leafM = mat(0x3fae3a, { rough: 0.55 });
    var leafGroups = [];
    LEAVES.forEach(function (L, idx) {
      var g = new THREE.Group();
      var pet = api.rod(V(0, 0, 0), V(0.32, 0.08, 0), 0.025, stemM);
      g.add(pet);
      var lf = K.leaf(L[2] * 1.1, L[2] * 0.75, leafM);
      lf.position.set(0.3, 0.08, 0);
      lf.rotation.z = 0.32;
      g.add(lf);
      g.rotation.y = L[1];
      api.addPart("leaf", g, V(0, L[0], 0), null, idx === 0 ? { label: V(0.95, 0.3, 0) } : {});
      leafGroups.push({ g: g, y: L[0], len: L[2] });
    });

    /* Phool: 5 pankhudiyan, beech me peela hissa, neeche hare bahyadal */
    var flower = new THREE.Group();
    var petalM = mat(0xff6fa8, { rough: 0.5 });
    var sepalM = mat(0x58b84a, { rough: 0.6 });
    for (i = 0; i < 5; i++) {
      var ang = i / 5 * Math.PI * 2;
      var pt = K.blob(0.34, petalM, 1, 0.22, 0.6, 18);
      pt.position.set(Math.cos(ang) * 0.36, 0.12, Math.sin(ang) * 0.36);
      pt.rotation.y = -ang;
      pt.rotation.z = 0.35;
      flower.add(pt);
      var sp = K.blob(0.2, sepalM, 1, 0.18, 0.45, 12);
      sp.position.set(Math.cos(ang + 0.6) * 0.2, -0.02, Math.sin(ang + 0.6) * 0.2);
      sp.rotation.y = -(ang + 0.6);
      sp.rotation.z = -0.45;
      flower.add(sp);
    }
    var disc = K.blob(0.17, mat(0xffc93a, { rough: 0.6 }), 1, 0.55, 1, 16); disc.position.y = 0.16; flower.add(disc);
    var stamM = mat(0xffe27a);
    for (i = 0; i < 8; i++) {
      var ab = i / 8 * Math.PI * 2;
      flower.add(api.rod(V(0, 0.16, 0), V(Math.cos(ab) * 0.16, 0.38, Math.sin(ab) * 0.16), 0.012, stamM));
    }
    api.addPart("flower", flower, V(0, 4.32, 0));

    /* Phal: tane se nikli dandi par latakta tamatar */
    var fruit = new THREE.Group();
    fruit.add(api.rod(V(0.1, 0, 0), V(0.55, -0.12, -0.55), 0.03, stemM));
    var tomato = K.blob(0.36, mat(0xe8452c, { rough: 0.35 }), 1, 0.88, 1, 26);
    tomato.position.set(0.62, -0.55, -0.62);
    fruit.add(tomato);
    for (i = 0; i < 5; i++) {
      var ac = i / 5 * Math.PI * 2;
      var cx = K.blob(0.13, sepalM, 1, 0.15, 0.35, 8);
      cx.position.set(0.62 + Math.cos(ac) * 0.1, -0.24, -0.62 + Math.sin(ac) * 0.1);
      cx.rotation.y = -ac;
      fruit.add(cx);
    }
    api.addPart("fruit", fruit, V(0, 2.2, 0), null, { label: V(0.62, -0.55, -0.62) });

    /* Beej: zameen par kata hua aadha phal, uske kate hisse par beej */
    var seed = new THREE.Group();
    var half = new THREE.Mesh(new THREE.SphereGeometry(0.42, 26, 14, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), mat(0xe8452c, { rough: 0.35 }));
    half.rotation.x = Math.PI;
    half.position.y = 0.42;
    var cut = new THREE.Mesh(new THREE.CircleGeometry(0.4, 28), mat(0xff9b85, { rough: 0.6 }));
    cut.rotation.x = -Math.PI / 2;
    cut.position.y = 0.425;
    seed.add(half, cut);
    var pulp = api.torus(0.22, 0.04, mat(0xffc2b3), 0, 0.43, 0); pulp.rotation.x = Math.PI / 2; seed.add(pulp);
    var seedM = mat(0xf2deaa, { rough: 0.5 });
    for (i = 0; i < 9; i++) {
      var as = i / 9 * Math.PI * 2, rr = i % 2 ? 0.27 : 0.17;
      var sd = K.blob(0.055, seedM, 1.4, 0.6, 0.9, 10);
      sd.position.set(Math.cos(as) * rr, 0.45, Math.sin(as) * rr);
      sd.rotation.y = -as;
      seed.add(sd);
    }
    /* ek bada beej (sem jaisa) paas me */
    var bean = K.blob(0.2, mat(0x8a4f2a, { rough: 0.45 }), 1.4, 0.75, 0.9, 18);
    bean.position.set(0.75, 0.15, 0.25);
    seed.add(bean);
    api.addPart("seed", seed, V(1.6, 0, 0.9), null, { label: V(0.3, 0.6, 0.1) });

    /* Paani ka raasta: mitti → jad → tana → patti ki nok → bhaap */
    scene_updateTips();
    function scene_updateTips() { leafGroups.forEach(function (L) { L.g.updateMatrixWorld(true); }); }
    function tip(L, k) { return L.g.localToWorld(V(0.3 + L.len * 1.05 * k, 0.08 + L.len * 0.35 * k, 0)); }
    var water = [];
    [leafGroups[1], leafGroups[3], leafGroups[4]].forEach(function (L, n) {
      var pts = [V(-1.6 + n * 0.5, -1.9, 0.9 - n * 0.6), V(-0.5, -1.5, 0.3), V(0, -1.1, 0), V(0, -0.2, 0),
                 V(0, L.y - 0.4, 0), V(0, L.y, 0), tip(L, 0.45), tip(L, 0.9)];
      water.push(K.flow(pts, { count: 12, size: 0.065, color: 0x2f8cff, speed: 0.12, on: false }));
      var t = tip(L, 0.9);
      var vapM = mat(0xcfeaff, { opacity: 0.55 });
      water.push(K.flow([t, t.clone().add(V(0.2, 0.7, 0.1)), t.clone().add(V(0.5, 1.5, 0.2))],
        { count: 4, speed: 0.35, on: false, make: function () { return api.sphere(0.07, vapM, 0, 0, 0, 8); } }));
    });

    s.watering = false;
    s.toggleWater = function () {
      s.watering = !s.watering;
      water.forEach(function (f) { f.set(s.watering); });
      api.setButton("water", s.watering ? "water_stop" : "water_btn");
      if (s.watering) api.setStatus("water_on", 6000); else api.setStatus(null);
    };

    /* Ugna: g 0 → 1 */
    function clamp(x) { return Math.max(0, Math.min(1, x)); }
    function vis(obj, k) { obj.visible = k > 0.01; obj.scale.setScalar(Math.max(0.001, k)); }
    s.applyGrow = function (g) {
      vis(root, clamp(g / 0.25));
      var sh = clamp((g - 0.12) / 0.55);
      stem.visible = sh > 0.01;
      stem.scale.set(0.45 + 0.55 * sh, Math.max(0.001, sh), 0.45 + 0.55 * sh);
      leafGroups.forEach(function (L) { vis(L.g, clamp((sh * 4.3 - L.y) / 0.7)); });
      vis(flower, clamp((g - 0.72) / 0.12));
      vis(fruit, clamp((g - 0.84) / 0.1));
      vis(seed, clamp((g - 0.94) / 0.06));
    };
    s.growing = false;
    s.grow = function () {
      if (s.watering) s.toggleWater();
      s.g = api.reduceMotion ? 1 : 0;
      s.growing = !api.reduceMotion;
      s.applyGrow(s.g);
      api.setStatus(api.reduceMotion ? "grow_done" : "grow_go", 0);
    };
  },

  update: function (api, dt) {
    var s = api.state;
    s.K.update(dt);
    if (s.growing) {
      s.g = Math.min(1, s.g + dt / 6);
      s.applyGrow(s.g);
      if (s.g >= 1) { s.growing = false; api.setStatus("grow_done", 5000); }
    }
  }
});
