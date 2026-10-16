/* Topic: Plant tissues (Botany, intermediate) */
TL.start({
  id: "plant-tissues",
  camera: { theta: 0.2, phi: 1.15, radius: 14.5, target: [0.6, 0.1, 0], min: 5, max: 26 },
  autoRotate: false,
  labels: true,
  order: ["epidermis", "parenchyma", "sclerenchyma", "xylem", "phloem", "meristem"],
  parts: {
    epidermis: { emoji: "🧴" }, parenchyma: { emoji: "🟢" }, sclerenchyma: { emoji: "🪵" },
    xylem: { emoji: "💧" }, phloem: { emoji: "🍬" }, meristem: { emoji: "✳️" }
  },
  quiz: [
    { part: "xylem", a: 1 }, { part: "phloem", a: 1 }, { part: "meristem", a: 0 }, { part: "epidermis", a: 0 },
    { part: "sclerenchyma", a: 1 }, { part: "parenchyma", a: 0 }, { part: "xylem", a: 1 }, { part: "parenchyma", a: 0 }
  ],
  actions: [
    { id: "flow", label: "flow_btn", main: true, onClick: function (api) { api.state.toggleFlow(); } },
    { id: "divide", label: "divide_btn", onClick: function (api) { api.state.divide(); } }
  ],

  text: {
    en: {
      tagline: "Xylem, phloem and meristem: teams of cells",
      intro: '<strong>A plant is built from teams of cells called tissues.</strong> Here is a piece of stem cut across, with its root tip below and two transport tubes zoomed in on the right. Press "💧 Show transport" to see water rise in the xylem and food move in the phloem, and "🔬 Divide cells" to watch the meristem make new cells.',
      ui: {
        flow_btn: "💧 Show transport", flow_stop: "⏸ Stop",
        flow_on: "Blue: water and minerals rise up the xylem from the roots. Orange: sugar travels in the phloem from the leaves to where it is needed.",
        divide_btn: "🔬 Divide cells",
        divide_on: "Meristem cells at the tip divide again and again, so the root grows longer. New cells then specialise into other tissues."
      },
      parts: {
        epidermis: { name: "Epidermis", tag: "The protective skin",
          what: "The epidermis is a single layer of tightly packed cells covering the plant, like its skin. It protects the inner tissues.",
          adv: "Epidermis cells on leaves and stems make a waxy cuticle that reduces water loss. Leaf epidermis has pores (stomata) controlled by guard cells; root epidermis grows root hairs that absorb water. In old trees, the epidermis of the trunk is replaced by thick dead cork, which is the bark.",
          real: "The shiny, waxy skin of an apple or a brinjal is a cuticle made by the epidermis.",
          fact: "Bottle corks are made from the bark of the cork oak tree." },
        parenchyma: { name: "Parenchyma", tag: "The all-rounder cells",
          what: "Parenchyma is made of simple, living cells with thin walls and spaces between them. It stores food and water and fills most of the soft parts of a plant.",
          adv: "A group of similar cells that do one job together is a tissue. Parenchyma is a simple permanent tissue. In leaves, parenchyma with chloroplasts (chlorenchyma) makes food; in water plants, parenchyma with big air spaces (aerenchyma) helps them float. Collenchyma, with cells thickened at the corners, gives flexible support to young stems and leaf stalks.",
          real: "The soft white part of a potato is parenchyma packed with starch.",
          fact: "Parenchyma cells can stay alive and keep dividing for many years, which helps plants heal wounds." },
        sclerenchyma: { name: "Sclerenchyma", tag: "The tough supporters",
          what: "Sclerenchyma cells have very thick, hard walls and are dead when mature. They make the plant strong and stiff.",
          adv: "The walls are thickened with lignin, a hard waterproof substance. Sclerenchyma includes long fibres and short, stony cells called sclereids. Fibres often form caps outside the vascular bundles, helping the stem resist bending in the wind.",
          real: "Jute and coir (coconut fibre) are sclerenchyma fibres; the gritty bits in a pear are sclereids.",
          fact: "The hard shell of a coconut and a walnut is made of sclerenchyma." },
        xylem: { name: "Xylem", tag: "The water pipes",
          what: "Xylem carries water and dissolved minerals up from the roots to the stem and leaves. It also helps support the plant.",
          adv: "Water-conducting xylem vessels are long hollow tubes made of dead cells joined end to end with their end walls removed. Their walls are strengthened with rings or spirals of lignin so they do not collapse. Xylem also has tracheids, fibres and parenchyma. Wood is mostly xylem.",
          real: "The rings you see on a tree stump are layers of xylem, one added each year.",
          fact: "In the tallest trees, xylem lifts water more than 100 metres from the roots to the top." },
        phloem: { name: "Phloem", tag: "The food delivery service",
          what: "Phloem carries food, mainly sugar, from the leaves to all other parts of the plant, such as roots, fruits and growing tips.",
          adv: "Phloem is made of living sieve tubes, whose end walls have holes (sieve plates), and companion cells that supply them with energy. Unlike xylem, phloem can carry material both up and down. Moving food in the phloem is called translocation.",
          real: "Aphids push their mouthparts into phloem to drink the sweet sap.",
          fact: "Sugarcane stores so much sugar from its phloem that its juice is up to 20% sugar." },
        meristem: { name: "Meristem", tag: "The cell factory",
          what: "Meristem is tissue whose cells keep dividing to make new cells. It is found at the tips of roots and shoots, where the plant grows longer.",
          adv: "Apical meristems at root and shoot tips cause growth in length. Lateral meristem (cambium) between xylem and phloem makes new xylem and phloem, so the stem grows thicker. Intercalary meristem at the base of leaves and nodes lets grasses regrow after being grazed or mown. Meristem cells are small, with thin walls, dense cytoplasm and a large nucleus.",
          real: "Lawn grass keeps growing after mowing because its meristem is near the base, not at the tip.",
          fact: "A root tip is protected by a root cap that is slowly worn away and replaced as it pushes through soil." }
      },
      quiz: [
        { q: "Which tissue carries water from the roots to the leaves?", o: ["Phloem", "Xylem", "Epidermis", "Cork"],
          why: "Xylem vessels are hollow tubes that carry water and minerals upwards." },
        { q: "Which tissue carries food made in the leaves?", o: ["Xylem", "Phloem", "Stomata", "Meristem"],
          why: "Phloem carries sugar from the leaves to the rest of the plant." },
        { q: "Which tissue divides to make new cells?", o: ["Meristem", "Xylem", "Sclerenchyma", "Epidermis"],
          why: "Meristem cells keep dividing at root and shoot tips." },
        { q: "What is the outer protective layer of a young plant called?", o: ["Epidermis", "Phloem", "Pith", "Xylem"],
          why: "The epidermis is a single layer of cells covering the plant." },
        { q: "Which tissue has dead cells with thick, hard walls for support?", o: ["Parenchyma", "Sclerenchyma", "Phloem", "Meristem"],
          why: "Sclerenchyma walls are thickened with lignin, making the plant strong." },
        { q: "What is a main job of parenchyma?", o: ["Storing food", "Carrying water", "Dividing quickly", "Making bark"],
          why: "Parenchyma cells store food and water and fill soft parts of the plant." },
        { q: "What are mature xylem vessels made of?", o: ["Living cells with a nucleus", "Dead, hollow cells joined end to end", "Green cells with chloroplasts", "Root hair cells"],
          why: "Dead cells with no end walls form continuous pipes." },
        { q: "What is a group of similar cells doing the same job called?", o: ["A tissue", "An organ", "An organism", "A system"],
          why: "Tissues are teams of similar cells; organs are made of several tissues." }
      ],
      terms: [
        { t: "Tissue", d: "A group of similar cells that work together to do one job." },
        { t: "Meristem", d: "Tissue with cells that keep dividing to make new cells." },
        { t: "Xylem", d: "Tissue of dead, hollow tubes that carries water and minerals upwards." },
        { t: "Phloem", d: "Living tissue that carries food (sugar) around the plant." },
        { t: "Vascular bundle", d: "A strand containing xylem and phloem together." },
        { t: "Lignin", d: "A hard substance that strengthens the walls of xylem and sclerenchyma." },
        { t: "Translocation", d: "The movement of food through the phloem." }
      ],
      practice: [
        { q: "Give two differences between xylem and phloem.", a: "Xylem carries water and minerals, only upwards, and is made mostly of dead cells; phloem carries food, up and down, and is made of living cells." },
        { q: "Why does a plant grow longer only at its tips?", a: "The apical meristems, where cells divide, are at the tips of roots and shoots." },
        { q: "Put a celery stalk or a white flower in coloured water for a day. What will you see, and which tissue does it show?", a: "Coloured streaks in the stalk or petals, showing the path of water through the xylem." },
        { q: "Why are xylem walls strengthened with lignin?", a: "So the hollow tubes do not collapse as water is pulled up, and so they support the plant." }
      ]
    },

    hi: {
      tagline: "जाइलम, फ्लोएम और विभज्योतक: कोशिकाओं की टीम",
      intro: '<strong>पौधा कोशिकाओं की टीमों से बना है, जिन्हें ऊतक कहते हैं।</strong> यहाँ तने का आड़ा कटा टुकड़ा है, नीचे उसकी जड़ की नोक, और दाईं ओर दो परिवहन नलियाँ बड़ी करके दिखाई गई हैं। "💧 परिवहन दिखाओ" दबाकर देखो पानी जाइलम में कैसे चढ़ता है और भोजन फ्लोएम में कैसे चलता है, और "🔬 कोशिकाएँ बाँटो" दबाकर विभज्योतक को नई कोशिकाएँ बनाते देखो।',
      ui: {
        flow_btn: "💧 परिवहन दिखाओ", flow_stop: "⏸ रोको",
        flow_on: "नीला: पानी और खनिज जड़ों से जाइलम में ऊपर चढ़ते हैं। नारंगी: शर्करा फ्लोएम में पत्तियों से वहाँ जाती है जहाँ उसकी ज़रूरत है।",
        divide_btn: "🔬 कोशिकाएँ बाँटो",
        divide_on: "नोक की विभज्योतक कोशिकाएँ बार-बार बँटती हैं, इसलिए जड़ लंबी होती है। फिर नई कोशिकाएँ दूसरे ऊतकों में बदल जाती हैं।"
      },
      parts: {
        epidermis: { name: "बाह्यत्वचा (एपिडर्मिस)", short: "बाह्यत्वचा", tag: "सुरक्षा करने वाली त्वचा",
          what: "बाह्यत्वचा पौधे को ढकने वाली, सटी हुई कोशिकाओं की एक परत है, उसकी त्वचा जैसी। यह अंदर के ऊतकों की रक्षा करती है।",
          adv: "पत्तियों और तनों की बाह्यत्वचा कोशिकाएँ मोम जैसी उपत्वचा (क्यूटिकल) बनाती हैं जो पानी की हानि घटाती है। पत्ती की बाह्यत्वचा में रंध्र होते हैं जिन्हें द्वार कोशिकाएँ नियंत्रित करती हैं; जड़ की बाह्यत्वचा पर मूलरोम उगते हैं जो पानी सोखते हैं। पुराने पेड़ों के तने में बाह्यत्वचा की जगह मोटा, मृत कॉर्क आ जाता है, यही छाल है।",
          real: "सेब या बैंगन की चमकीली, मोमी त्वचा बाह्यत्वचा की बनाई उपत्वचा है।",
          fact: "बोतल के कॉर्क कॉर्क ओक पेड़ की छाल से बनते हैं।" },
        parenchyma: { name: "मृदूतक (पैरेनकाइमा)", short: "मृदूतक", tag: "हर काम वाली कोशिकाएँ",
          what: "मृदूतक पतली दीवार वाली सरल, जीवित कोशिकाओं से बना है जिनके बीच जगह होती है। यह भोजन और पानी जमा करता है और पौधे के ज़्यादातर नरम भाग भरता है।",
          adv: "एक जैसी कोशिकाओं का समूह जो मिलकर एक काम करे, ऊतक कहलाता है। मृदूतक एक सरल स्थायी ऊतक है। पत्तियों में हरितलवक वाला मृदूतक (हरित ऊतक) भोजन बनाता है; जलीय पौधों में बड़ी वायु-जगहों वाला मृदूतक (वायूतक) उन्हें तैरने में मदद करता है। स्थूलकोणोतक (कोलेनकाइमा), जिसकी कोशिकाएँ कोनों पर मोटी होती हैं, नए तनों और पत्ती के डंठलों को लचीला सहारा देता है।",
          real: "आलू का नरम सफ़ेद भाग स्टार्च से भरा मृदूतक है।",
          fact: "मृदूतक कोशिकाएँ कई साल जीवित रहकर बँटती रह सकती हैं, जिससे पौधों के घाव भरते हैं।" },
        sclerenchyma: { name: "दृढ़ोतक (स्क्लेरेनकाइमा)", short: "दृढ़ोतक", tag: "मज़बूत सहारा देने वाले",
          what: "दृढ़ोतक कोशिकाओं की दीवारें बहुत मोटी और सख़्त होती हैं और पकने पर वे मृत हो जाती हैं। ये पौधे को मज़बूत और कड़ा बनाती हैं।",
          adv: "दीवारें लिग्निन से मोटी होती हैं, जो एक सख़्त जलरोधी पदार्थ है। दृढ़ोतक में लंबे रेशे और छोटी, पत्थर जैसी कोशिकाएँ (स्क्लेरीड) होती हैं। रेशे अक्सर संवहन बंडलों के बाहर टोपी बनाते हैं, जिससे तना हवा में मुड़ने से बचता है।",
          real: "जूट और नारियल का रेशा दृढ़ोतक के रेशे हैं; नाशपाती के किरकिरे कण स्क्लेरीड हैं।",
          fact: "नारियल और अखरोट का सख़्त खोल दृढ़ोतक से बना है।" },
        xylem: { name: "जाइलम (दारु)", short: "जाइलम", tag: "पानी के पाइप",
          what: "जाइलम पानी और घुले खनिजों को जड़ों से ऊपर तने और पत्तियों तक ले जाता है। यह पौधे को सहारा भी देता है।",
          adv: "पानी ले जाने वाली जाइलम वाहिकाएँ मृत कोशिकाओं से बनी लंबी खोखली नलियाँ हैं, जो सिरे से सिरा जुड़ी हैं और जिनकी सिरे की दीवारें हट चुकी हैं। इनकी दीवारें लिग्निन के छल्लों या कुंडलियों से मज़बूत होती हैं ताकि ये पिचकें नहीं। जाइलम में वाहिनिकाएँ, रेशे और मृदूतक भी होते हैं। लकड़ी ज़्यादातर जाइलम है।",
          real: "पेड़ के ठूँठ पर दिखने वाले छल्ले जाइलम की परतें हैं, हर साल एक।",
          fact: "सबसे ऊँचे पेड़ों में जाइलम पानी को जड़ों से 100 मीटर से ज़्यादा ऊपर चढ़ाता है।" },
        phloem: { name: "फ्लोएम (पोषवाह)", short: "फ्लोएम", tag: "भोजन पहुँचाने वाला",
          what: "फ्लोएम भोजन, मुख्यतः शर्करा, को पत्तियों से पौधे के बाकी भागों तक ले जाता है, जैसे जड़ें, फल और बढ़ते सिरे।",
          adv: "फ्लोएम जीवित चालनी नलिकाओं से बना है, जिनकी सिरे की दीवारों में छेद (चालनी पट्टिकाएँ) होते हैं, और सहचर कोशिकाओं से जो उन्हें ऊर्जा देती हैं। जाइलम के विपरीत, फ्लोएम पदार्थ ऊपर और नीचे दोनों ओर ले जा सकता है। फ्लोएम में भोजन का चलना स्थानांतरण कहलाता है।",
          real: "माहू (एफ़िड) अपने मुखांग फ्लोएम में घुसाकर मीठा रस पीते हैं।",
          fact: "गन्ना फ्लोएम से इतनी शर्करा जमा करता है कि उसके रस में 20% तक शर्करा होती है।" },
        meristem: { name: "विभज्योतक (मेरिस्टेम)", short: "विभज्योतक", tag: "कोशिकाओं का कारख़ाना",
          what: "विभज्योतक वह ऊतक है जिसकी कोशिकाएँ लगातार बँटकर नई कोशिकाएँ बनाती हैं। यह जड़ों और प्ररोहों की नोकों पर होता है, जहाँ पौधा लंबा होता है।",
          adv: "जड़ और प्ररोह की नोकों पर शीर्षस्थ विभज्योतक लंबाई में वृद्धि कराते हैं। जाइलम और फ्लोएम के बीच पार्श्व विभज्योतक (एधा) नया जाइलम और फ्लोएम बनाता है, जिससे तना मोटा होता है। पत्तियों और पर्वसंधियों के आधार पर अंतर्वेशी विभज्योतक घास को चरने या काटने के बाद फिर बढ़ने देता है। विभज्योतक कोशिकाएँ छोटी, पतली दीवार, घने कोशिकाद्रव्य और बड़े केंद्रक वाली होती हैं।",
          real: "लॉन की घास काटने के बाद भी बढ़ती रहती है क्योंकि उसका विभज्योतक नोक पर नहीं, आधार के पास है।",
          fact: "जड़ की नोक मूलगोप से सुरक्षित रहती है, जो मिट्टी में धँसते समय धीरे-धीरे घिसती और फिर बनती रहती है।" }
      },
      quiz: [
        { q: "कौन-सा ऊतक पानी को जड़ों से पत्तियों तक ले जाता है?", o: ["फ्लोएम", "जाइलम", "बाह्यत्वचा", "कॉर्क"],
          why: "जाइलम वाहिकाएँ खोखली नलियाँ हैं जो पानी और खनिज ऊपर ले जाती हैं।" },
        { q: "पत्तियों में बना भोजन कौन-सा ऊतक ले जाता है?", o: ["जाइलम", "फ्लोएम", "रंध्र", "विभज्योतक"],
          why: "फ्लोएम शर्करा को पत्तियों से पौधे के बाकी भागों तक ले जाता है।" },
        { q: "कौन-सा ऊतक बँटकर नई कोशिकाएँ बनाता है?", o: ["विभज्योतक", "जाइलम", "दृढ़ोतक", "बाह्यत्वचा"],
          why: "विभज्योतक कोशिकाएँ जड़ और प्ररोह की नोकों पर बँटती रहती हैं।" },
        { q: "नए पौधे की बाहरी सुरक्षा परत क्या कहलाती है?", o: ["बाह्यत्वचा", "फ्लोएम", "मज्जा", "जाइलम"],
          why: "बाह्यत्वचा पौधे को ढकने वाली कोशिकाओं की एक परत है।" },
        { q: "किस ऊतक में सहारे के लिए मोटी, सख़्त दीवार वाली मृत कोशिकाएँ होती हैं?", o: ["मृदूतक", "दृढ़ोतक", "फ्लोएम", "विभज्योतक"],
          why: "दृढ़ोतक की दीवारें लिग्निन से मोटी होती हैं, जिससे पौधा मज़बूत होता है।" },
        { q: "मृदूतक का मुख्य काम क्या है?", o: ["भोजन जमा करना", "पानी ले जाना", "तेज़ी से बँटना", "छाल बनाना"],
          why: "मृदूतक कोशिकाएँ भोजन और पानी जमा करती हैं और नरम भाग भरती हैं।" },
        { q: "पकी जाइलम वाहिकाएँ किससे बनी होती हैं?", o: ["केंद्रक वाली जीवित कोशिकाओं से", "सिरे से सिरा जुड़ी मृत, खोखली कोशिकाओं से", "हरितलवक वाली हरी कोशिकाओं से", "मूलरोम कोशिकाओं से"],
          why: "बिना सिरे की दीवार वाली मृत कोशिकाएँ लगातार पाइप बनाती हैं।" },
        { q: "एक ही काम करने वाली एक जैसी कोशिकाओं का समूह क्या कहलाता है?", o: ["ऊतक", "अंग", "जीव", "तंत्र"],
          why: "ऊतक एक जैसी कोशिकाओं की टीमें हैं; अंग कई ऊतकों से बनते हैं।" }
      ],
      terms: [
        { t: "ऊतक", d: "एक जैसी कोशिकाओं का समूह जो मिलकर एक काम करता है।" },
        { t: "विभज्योतक", d: "वह ऊतक जिसकी कोशिकाएँ बँटकर नई कोशिकाएँ बनाती रहती हैं।" },
        { t: "जाइलम", d: "मृत, खोखली नलियों का ऊतक जो पानी और खनिज ऊपर ले जाता है।" },
        { t: "फ्लोएम", d: "जीवित ऊतक जो भोजन (शर्करा) पौधे में ले जाता है।" },
        { t: "संवहन बंडल", d: "जाइलम और फ्लोएम वाली एक लड़ी।" },
        { t: "लिग्निन", d: "सख़्त पदार्थ जो जाइलम और दृढ़ोतक की दीवारें मज़बूत करता है।" },
        { t: "स्थानांतरण", d: "फ्लोएम द्वारा भोजन का चलना।" }
      ],
      practice: [
        { q: "जाइलम और फ्लोएम में दो अंतर बताओ।", a: "जाइलम पानी और खनिज सिर्फ़ ऊपर ले जाता है और ज़्यादातर मृत कोशिकाओं से बना है; फ्लोएम भोजन ऊपर-नीचे ले जाता है और जीवित कोशिकाओं से बना है।" },
        { q: "पौधा सिर्फ़ अपनी नोकों पर ही लंबा क्यों होता है?", a: "शीर्षस्थ विभज्योतक, जहाँ कोशिकाएँ बँटती हैं, जड़ों और प्ररोहों की नोकों पर होते हैं।" },
        { q: "सेलरी का डंठल या सफ़ेद फूल एक दिन रंगीन पानी में रखो। क्या दिखेगा, और यह कौन-सा ऊतक दिखाता है?", a: "डंठल या पंखुड़ियों में रंगीन धारियाँ, जो जाइलम में पानी का रास्ता दिखाती हैं।" },
        { q: "जाइलम की दीवारें लिग्निन से मज़बूत क्यों होती हैं?", a: "ताकि पानी ऊपर खिंचने पर खोखली नलियाँ पिचकें नहीं, और वे पौधे को सहारा दें।" }
      ]
    },

    mr: {
      tagline: "जलवाहिनी, रसवाहिनी आणि विभाजी ऊती: पेशींच्या टीम",
      intro: '<strong>वनस्पती पेशींच्या टीमपासून बनलेली असते, त्यांना ऊती म्हणतात.</strong> इथे खोडाचा आडवा कापलेला तुकडा आहे, खाली मुळाचं टोक, आणि उजवीकडे दोन वहन नलिका मोठ्या करून दाखवल्या आहेत. "💧 वहन दाखवा" दाबून पाणी जलवाहिनीत कसं चढतं आणि अन्न रसवाहिनीत कसं जातं ते बघा, आणि "🔬 पेशी विभाजित करा" दाबून विभाजी ऊती नव्या पेशी बनवताना बघा.',
      ui: {
        flow_btn: "💧 वहन दाखवा", flow_stop: "⏸ थांबवा",
        flow_on: "निळं: पाणी आणि खनिजं मुळांपासून जलवाहिनीतून वर चढतात. नारिंगी: साखर रसवाहिनीतून पानांपासून जिथे गरज आहे तिथे जाते.",
        divide_btn: "🔬 पेशी विभाजित करा",
        divide_on: "टोकावरच्या विभाजी पेशी पुन्हा पुन्हा विभाजित होतात, म्हणून मूळ लांब होतं. मग नव्या पेशी इतर ऊतींमध्ये विशेष होतात."
      },
      parts: {
        epidermis: { name: "अपित्वचा (एपिडर्मिस)", short: "अपित्वचा", tag: "संरक्षक त्वचा",
          what: "अपित्वचा हा वनस्पतीला झाकणारा, घट्ट जुळलेल्या पेशींचा एक थर आहे, तिच्या त्वचेसारखा. तो आतल्या ऊतींचं रक्षण करतो.",
          adv: "पानं आणि खोडांवरच्या अपित्वचा पेशी मेणासारखं उपचर्म (क्युटिकल) बनवतात, जे पाण्याचा ऱ्हास कमी करतं. पानाच्या अपित्वचेत पर्णरंध्रं असतात, ती रक्षक पेशी नियंत्रित करतात; मुळाच्या अपित्वचेवर मूलरोम येतात, जे पाणी शोषतात. जुन्या झाडांच्या खोडावर अपित्वचेऐवजी जाड, मृत बूच (कॉर्क) येतं, तीच साल.",
          real: "सफरचंद किंवा वांग्याची चकचकीत, मेणचट साल म्हणजे अपित्वचेने बनवलेलं उपचर्म.",
          fact: "बाटल्यांची बुचं कॉर्क ओक झाडाच्या सालीपासून बनतात." },
        parenchyma: { name: "मृदूतक (पॅरेन्कायमा)", short: "मृदूतक", tag: "सर्व कामं करणाऱ्या पेशी",
          what: "मृदूतक पातळ भिंतींच्या साध्या, जिवंत पेशींपासून बनलेलं असतं, त्यांच्यामध्ये मोकळ्या जागा असतात. ते अन्न आणि पाणी साठवतं आणि वनस्पतीचे बहुतेक मऊ भाग भरतं.",
          adv: "एकच काम एकत्र करणाऱ्या सारख्या पेशींच्या गटाला ऊती म्हणतात. मृदूतक ही साधी स्थायी ऊती आहे. पानांमध्ये हरितलवक असलेलं मृदूतक (हरितोती) अन्न बनवतं; जलवनस्पतींमध्ये मोठ्या हवेच्या पोकळ्या असलेलं मृदूतक (वायूतक) त्यांना तरंगायला मदत करतं. स्थूलकोनोती (कोलेन्कायमा), जिच्या पेशी कोपऱ्यांवर जाड असतात, कोवळ्या खोडांना आणि देठांना लवचिक आधार देते.",
          real: "बटाट्याचा मऊ पांढरा भाग म्हणजे पिष्टमय पदार्थांनी भरलेलं मृदूतक.",
          fact: "मृदूतक पेशी अनेक वर्षं जिवंत राहून विभाजित होत राहू शकतात, त्यामुळे वनस्पतींच्या जखमा भरतात." },
        sclerenchyma: { name: "दृढोती (स्क्लेरेन्कायमा)", short: "दृढोती", tag: "मजबूत आधार देणाऱ्या",
          what: "दृढोती पेशींच्या भिंती खूप जाड आणि कठीण असतात आणि परिपक्व झाल्यावर त्या मृत असतात. त्या वनस्पतीला मजबूत आणि ताठ बनवतात.",
          adv: "भिंती लिग्निनने जाड झालेल्या असतात, हा एक कठीण जलरोधी पदार्थ आहे. दृढोतीत लांब तंतू आणि लहान, दगडासारख्या पेशी (स्क्लेरिड) असतात. तंतू अनेकदा संवहनी जुडग्यांच्या बाहेर टोपी बनवतात, त्यामुळे खोड वाऱ्यात वाकत नाही.",
          real: "ताग आणि काथ्या (नारळाचा धागा) हे दृढोतीचे तंतू आहेत; नासपतीतले खरखरीत कण स्क्लेरिड आहेत.",
          fact: "नारळाची आणि अक्रोडाची कठीण करवंटी दृढोतीपासून बनलेली असते." },
        xylem: { name: "जलवाहिनी (झायलेम)", short: "जलवाहिनी", tag: "पाण्याचे पाइप",
          what: "जलवाहिनी पाणी आणि विरघळलेली खनिजं मुळांपासून वर खोड आणि पानांपर्यंत नेते. ती वनस्पतीला आधारही देते.",
          adv: "पाणी वाहणाऱ्या जलवाहिन्या म्हणजे मृत पेशींच्या लांब पोकळ नळ्या, ज्या टोकाला टोक जोडलेल्या असून त्यांच्या टोकाच्या भिंती नाहीशा झालेल्या असतात. त्यांच्या भिंती लिग्निनच्या कड्यांनी किंवा सर्पिलांनी मजबूत असतात म्हणजे त्या दबत नाहीत. जलवाहिनीत वाहिनिका, तंतू आणि मृदूतकही असतं. लाकूड म्हणजे बहुतेक जलवाहिनी.",
          real: "झाडाच्या बुंध्यावर दिसणारी कडी म्हणजे जलवाहिनीचे थर, दर वर्षी एक.",
          fact: "सर्वात उंच झाडांमध्ये जलवाहिनी पाणी मुळांपासून 100 मीटरपेक्षा जास्त वर चढवते." },
        phloem: { name: "रसवाहिनी (फ्लोएम)", short: "रसवाहिनी", tag: "अन्न पोहोचवणारी",
          what: "रसवाहिनी अन्न, मुख्यतः साखर, पानांपासून वनस्पतीच्या इतर भागांपर्यंत नेते, जसं मुळं, फळं आणि वाढणारी टोकं.",
          adv: "रसवाहिनी जिवंत चाळणी नलिकांपासून बनलेली असते, ज्यांच्या टोकाच्या भिंतींना छिद्रं (चाळणी पट्टिका) असतात, आणि त्यांना ऊर्जा पुरवणाऱ्या सहपेशींपासून. जलवाहिनीच्या उलट, रसवाहिनी पदार्थ वर आणि खाली दोन्हीकडे नेऊ शकते. रसवाहिनीतून अन्न वाहून जाणं याला स्थानांतरण म्हणतात.",
          real: "मावा (ॲफिड) आपले मुखांग रसवाहिनीत खुपसून गोड रस पितात.",
          fact: "ऊस रसवाहिनीतून इतकी साखर साठवतो की त्याच्या रसात 20% पर्यंत साखर असते." },
        meristem: { name: "विभाजी ऊती (मेरिस्टेम)", short: "विभाजी ऊती", tag: "पेशींचा कारखाना",
          what: "विभाजी ऊती म्हणजे जिच्या पेशी सतत विभाजित होऊन नव्या पेशी बनवतात. ती मुळांच्या आणि अंकुरांच्या टोकांवर असते, जिथे वनस्पती लांब होते.",
          adv: "मूळ आणि अंकुराच्या टोकांवरच्या अग्रस्थ विभाजी ऊती लांबीत वाढ घडवतात. जलवाहिनी आणि रसवाहिनीच्या मधली पार्श्व विभाजी ऊती (एधा) नवी जलवाहिनी आणि रसवाहिनी बनवते, त्यामुळे खोड जाड होतं. पानं आणि पेरांच्या तळाशी असलेली आंतरीय विभाजी ऊती गवताला चरल्यावर किंवा कापल्यावर पुन्हा वाढू देते. विभाजी पेशी लहान, पातळ भिंतीच्या, दाट पेशीद्रव्य आणि मोठ्या केंद्रकाच्या असतात.",
          real: "हिरवळीचं गवत कापल्यावरही वाढत राहतं कारण त्याची विभाजी ऊती टोकावर नसून तळाजवळ असते.",
          fact: "मुळाच्या टोकाचं मूलटोपी रक्षण करते, जी मातीत घुसताना हळूहळू झिजते आणि पुन्हा तयार होते." }
      },
      quiz: [
        { q: "कोणती ऊती पाणी मुळांपासून पानांपर्यंत नेते?", o: ["रसवाहिनी", "जलवाहिनी", "अपित्वचा", "बूच"],
          why: "जलवाहिन्या पाणी आणि खनिजं वर नेणाऱ्या पोकळ नळ्या आहेत." },
        { q: "पानांत बनलेलं अन्न कोणती ऊती नेते?", o: ["जलवाहिनी", "रसवाहिनी", "पर्णरंध्र", "विभाजी ऊती"],
          why: "रसवाहिनी साखर पानांपासून वनस्पतीच्या इतर भागांत नेते." },
        { q: "कोणती ऊती विभाजित होऊन नव्या पेशी बनवते?", o: ["विभाजी ऊती", "जलवाहिनी", "दृढोती", "अपित्वचा"],
          why: "विभाजी पेशी मूळ आणि अंकुराच्या टोकांवर विभाजित होत राहतात." },
        { q: "कोवळ्या वनस्पतीच्या बाहेरच्या संरक्षक थराला काय म्हणतात?", o: ["अपित्वचा", "रसवाहिनी", "मज्जा", "जलवाहिनी"],
          why: "अपित्वचा हा वनस्पतीला झाकणारा पेशींचा एक थर आहे." },
        { q: "कोणत्या ऊतीत आधारासाठी जाड, कठीण भिंतींच्या मृत पेशी असतात?", o: ["मृदूतक", "दृढोती", "रसवाहिनी", "विभाजी ऊती"],
          why: "दृढोतीच्या भिंती लिग्निनने जाड असतात, त्यामुळे वनस्पती मजबूत होते." },
        { q: "मृदूतकाचं मुख्य काम काय?", o: ["अन्न साठवणं", "पाणी वाहणं", "जलद विभाजित होणं", "साल बनवणं"],
          why: "मृदूतक पेशी अन्न आणि पाणी साठवतात आणि मऊ भाग भरतात." },
        { q: "परिपक्व जलवाहिन्या कशापासून बनलेल्या असतात?", o: ["केंद्रक असलेल्या जिवंत पेशींपासून", "टोकाला टोक जोडलेल्या मृत, पोकळ पेशींपासून", "हरितलवक असलेल्या हिरव्या पेशींपासून", "मूलरोम पेशींपासून"],
          why: "टोकाच्या भिंती नसलेल्या मृत पेशी अखंड नळ्या बनवतात." },
        { q: "एकच काम करणाऱ्या सारख्या पेशींच्या गटाला काय म्हणतात?", o: ["ऊती", "इंद्रिय", "सजीव", "संस्था"],
          why: "ऊती म्हणजे सारख्या पेशींच्या टीम; इंद्रियं अनेक ऊतींपासून बनतात." }
      ],
      terms: [
        { t: "ऊती", d: "एकच काम एकत्र करणाऱ्या सारख्या पेशींचा गट." },
        { t: "विभाजी ऊती", d: "जिच्या पेशी सतत विभाजित होऊन नव्या पेशी बनवतात ती ऊती." },
        { t: "जलवाहिनी", d: "पाणी आणि खनिजं वर नेणारी मृत, पोकळ नळ्यांची ऊती." },
        { t: "रसवाहिनी", d: "अन्न (साखर) वनस्पतीत सगळीकडे नेणारी जिवंत ऊती." },
        { t: "संवहनी जुडगा", d: "जलवाहिनी आणि रसवाहिनी एकत्र असलेला धागा." },
        { t: "लिग्निन", d: "जलवाहिनी आणि दृढोतीच्या भिंती मजबूत करणारा कठीण पदार्थ." },
        { t: "स्थानांतरण", d: "रसवाहिनीतून अन्नाचं वहन." }
      ],
      practice: [
        { q: "जलवाहिनी आणि रसवाहिनी यांतले दोन फरक सांगा.", a: "जलवाहिनी पाणी आणि खनिजं फक्त वर नेते आणि बहुतेक मृत पेशींपासून बनलेली असते; रसवाहिनी अन्न वर-खाली नेते आणि जिवंत पेशींपासून बनलेली असते." },
        { q: "वनस्पती फक्त टोकांवरच लांब का होते?", a: "अग्रस्थ विभाजी ऊती, जिथे पेशी विभाजित होतात, मुळांच्या आणि अंकुरांच्या टोकांवर असतात." },
        { q: "सेलरीचा देठ किंवा पांढरं फूल एक दिवस रंगीत पाण्यात ठेवा. काय दिसेल, आणि ते कोणती ऊती दाखवतं?", a: "देठात किंवा पाकळ्यांत रंगीत रेषा, ज्या जलवाहिनीतून पाण्याचा मार्ग दाखवतात." },
        { q: "जलवाहिनीच्या भिंती लिग्निनने मजबूत का असतात?", a: "पाणी वर ओढलं जाताना पोकळ नळ्या दबू नयेत, आणि त्या वनस्पतीला आधार द्याव्यात म्हणून." }
      ]
    },

    kn: {
      tagline: "ಕ್ಸೈಲಮ್, ಫ್ಲೋಯಮ್ ಮತ್ತು ವರ್ಧನ ಅಂಗಾಂಶ: ಕೋಶಗಳ ತಂಡಗಳು",
      intro: '<strong>ಸಸ್ಯ ಅಂಗಾಂಶಗಳೆಂಬ ಕೋಶಗಳ ತಂಡಗಳಿಂದ ಮಾಡಲ್ಪಟ್ಟಿದೆ.</strong> ಇಲ್ಲಿ ಅಡ್ಡವಾಗಿ ಕತ್ತರಿಸಿದ ಕಾಂಡದ ತುಂಡು ಇದೆ, ಕೆಳಗೆ ಅದರ ಬೇರಿನ ತುದಿ, ಮತ್ತು ಬಲಕ್ಕೆ ಎರಡು ಸಾಗಣೆ ನಳಿಕೆಗಳನ್ನು ದೊಡ್ಡದಾಗಿ ತೋರಿಸಲಾಗಿದೆ. "💧 ಸಾಗಣೆ ತೋರಿಸಿ" ಒತ್ತಿ ನೀರು ಕ್ಸೈಲಮ್‌ನಲ್ಲಿ ಏರುವುದನ್ನು ಮತ್ತು ಆಹಾರ ಫ್ಲೋಯಮ್‌ನಲ್ಲಿ ಸಾಗುವುದನ್ನು ನೋಡಿ, ಮತ್ತು "🔬 ಕೋಶ ವಿಭಜಿಸಿ" ಒತ್ತಿ ವರ್ಧನ ಅಂಗಾಂಶ ಹೊಸ ಕೋಶಗಳನ್ನು ಮಾಡುವುದನ್ನು ನೋಡಿ.',
      ui: {
        flow_btn: "💧 ಸಾಗಣೆ ತೋರಿಸಿ", flow_stop: "⏸ ನಿಲ್ಲಿಸಿ",
        flow_on: "ನೀಲಿ: ನೀರು ಮತ್ತು ಖನಿಜಗಳು ಬೇರುಗಳಿಂದ ಕ್ಸೈಲಮ್‌ನಲ್ಲಿ ಮೇಲೇರುತ್ತವೆ. ಕಿತ್ತಳೆ: ಸಕ್ಕರೆ ಫ್ಲೋಯಮ್‌ನಲ್ಲಿ ಎಲೆಗಳಿಂದ ಬೇಕಾದ ಕಡೆಗೆ ಸಾಗುತ್ತದೆ.",
        divide_btn: "🔬 ಕೋಶ ವಿಭಜಿಸಿ",
        divide_on: "ತುದಿಯ ವರ್ಧನ ಕೋಶಗಳು ಮತ್ತೆ ಮತ್ತೆ ವಿಭಜನೆಯಾಗುತ್ತವೆ, ಹಾಗಾಗಿ ಬೇರು ಉದ್ದವಾಗುತ್ತದೆ. ನಂತರ ಹೊಸ ಕೋಶಗಳು ಇತರ ಅಂಗಾಂಶಗಳಾಗಿ ವಿಶೇಷಗೊಳ್ಳುತ್ತವೆ."
      },
      parts: {
        epidermis: { name: "ಹೊರಚರ್ಮ (ಎಪಿಡರ್ಮಿಸ್)", short: "ಹೊರಚರ್ಮ", tag: "ರಕ್ಷಣಾ ಚರ್ಮ",
          what: "ಹೊರಚರ್ಮ ಸಸ್ಯವನ್ನು ಆವರಿಸಿರುವ, ಒತ್ತಾಗಿ ಜೋಡಿಸಿದ ಕೋಶಗಳ ಒಂದು ಪದರ, ಅದರ ಚರ್ಮದಂತೆ. ಅದು ಒಳಗಿನ ಅಂಗಾಂಶಗಳನ್ನು ರಕ್ಷಿಸುತ್ತದೆ.",
          adv: "ಎಲೆ ಮತ್ತು ಕಾಂಡಗಳ ಹೊರಚರ್ಮ ಕೋಶಗಳು ನೀರಿನ ನಷ್ಟ ಕಡಿಮೆ ಮಾಡುವ ಮೇಣದಂತಹ ಕ್ಯೂಟಿಕಲ್ ಮಾಡುತ್ತವೆ. ಎಲೆಯ ಹೊರಚರ್ಮದಲ್ಲಿ ಕಾವಲು ಕೋಶಗಳು ನಿಯಂತ್ರಿಸುವ ಪತ್ರರಂಧ್ರಗಳಿವೆ; ಬೇರಿನ ಹೊರಚರ್ಮದಲ್ಲಿ ನೀರು ಹೀರುವ ಬೇರುಕೂದಲುಗಳು ಬೆಳೆಯುತ್ತವೆ. ಹಳೆಯ ಮರಗಳ ಕಾಂಡದಲ್ಲಿ ಹೊರಚರ್ಮದ ಬದಲು ದಪ್ಪ, ಸತ್ತ ಬಿರಡೆ (ಕಾರ್ಕ್) ಬರುತ್ತದೆ, ಅದೇ ತೊಗಟೆ.",
          real: "ಸೇಬು ಅಥವಾ ಬದನೆಯ ಹೊಳೆಯುವ, ಮೇಣದಂತಹ ಸಿಪ್ಪೆ ಹೊರಚರ್ಮ ಮಾಡಿದ ಕ್ಯೂಟಿಕಲ್.",
          fact: "ಬಾಟಲಿಯ ಬಿರಡೆಗಳನ್ನು ಕಾರ್ಕ್ ಓಕ್ ಮರದ ತೊಗಟೆಯಿಂದ ಮಾಡುತ್ತಾರೆ." },
        parenchyma: { name: "ಮೃದ್ವಂಗಾಂಶ (ಪ್ಯಾರೆಂಕೈಮಾ)", short: "ಮೃದ್ವಂಗಾಂಶ", tag: "ಎಲ್ಲ ಕೆಲಸದ ಕೋಶಗಳು",
          what: "ಮೃದ್ವಂಗಾಂಶ ತೆಳು ಗೋಡೆಯ ಸರಳ, ಜೀವಂತ ಕೋಶಗಳಿಂದ ಮಾಡಲ್ಪಟ್ಟಿದ್ದು ಅವುಗಳ ನಡುವೆ ಜಾಗವಿದೆ. ಅದು ಆಹಾರ ಮತ್ತು ನೀರನ್ನು ಸಂಗ್ರಹಿಸುತ್ತದೆ ಮತ್ತು ಸಸ್ಯದ ಹೆಚ್ಚಿನ ಮೃದು ಭಾಗಗಳನ್ನು ತುಂಬುತ್ತದೆ.",
          adv: "ಒಂದೇ ಕೆಲಸವನ್ನು ಒಟ್ಟಿಗೆ ಮಾಡುವ ಒಂದೇ ರೀತಿಯ ಕೋಶಗಳ ಗುಂಪು ಅಂಗಾಂಶ. ಮೃದ್ವಂಗಾಂಶ ಒಂದು ಸರಳ ಶಾಶ್ವತ ಅಂಗಾಂಶ. ಎಲೆಗಳಲ್ಲಿ ಹರಿತ್ತುಕಣವಿರುವ ಮೃದ್ವಂಗಾಂಶ (ಕ್ಲೋರೆಂಕೈಮಾ) ಆಹಾರ ತಯಾರಿಸುತ್ತದೆ; ಜಲಸಸ್ಯಗಳಲ್ಲಿ ದೊಡ್ಡ ಗಾಳಿ ಜಾಗಗಳಿರುವ ಮೃದ್ವಂಗಾಂಶ (ಏರೆಂಕೈಮಾ) ತೇಲಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಮೂಲೆಗಳಲ್ಲಿ ದಪ್ಪವಾದ ಕೋಶಗಳಿರುವ ಸ್ಥೂಲಕೋನಾಂಗಾಂಶ (ಕೊಲೆಂಕೈಮಾ) ಎಳೆಯ ಕಾಂಡ ಮತ್ತು ತೊಟ್ಟುಗಳಿಗೆ ಬಾಗುವ ಆಧಾರ ಕೊಡುತ್ತದೆ.",
          real: "ಆಲೂಗಡ್ಡೆಯ ಮೃದು ಬಿಳಿ ಭಾಗ ಪಿಷ್ಟದಿಂದ ತುಂಬಿದ ಮೃದ್ವಂಗಾಂಶ.",
          fact: "ಮೃದ್ವಂಗಾಂಶ ಕೋಶಗಳು ಅನೇಕ ವರ್ಷ ಜೀವಂತವಿದ್ದು ವಿಭಜನೆಯಾಗುತ್ತಿರಬಲ್ಲವು, ಇದು ಸಸ್ಯಗಳ ಗಾಯ ಮಾಗಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ." },
        sclerenchyma: { name: "ದೃಢಾಂಗಾಂಶ (ಸ್ಕ್ಲೆರೆಂಕೈಮಾ)", short: "ದೃಢಾಂಗಾಂಶ", tag: "ಗಟ್ಟಿ ಆಧಾರಕಾರರು",
          what: "ದೃಢಾಂಗಾಂಶ ಕೋಶಗಳಿಗೆ ತುಂಬಾ ದಪ್ಪ, ಗಟ್ಟಿ ಗೋಡೆಗಳಿವೆ ಮತ್ತು ಪಕ್ವವಾದಾಗ ಅವು ಸತ್ತಿರುತ್ತವೆ. ಅವು ಸಸ್ಯವನ್ನು ಬಲವಾಗಿ ಮತ್ತು ಗಟ್ಟಿಯಾಗಿ ಮಾಡುತ್ತವೆ.",
          adv: "ಗೋಡೆಗಳು ಲಿಗ್ನಿನ್ ಎಂಬ ಗಟ್ಟಿಯಾದ ಜಲನಿರೋಧಕ ವಸ್ತುವಿನಿಂದ ದಪ್ಪವಾಗಿವೆ. ದೃಢಾಂಗಾಂಶದಲ್ಲಿ ಉದ್ದದ ನಾರುಗಳು ಮತ್ತು ಕಲ್ಲಿನಂತಹ ಸಣ್ಣ ಕೋಶಗಳು (ಸ್ಕ್ಲೆರೀಡ್) ಇವೆ. ನಾರುಗಳು ಹೆಚ್ಚಾಗಿ ನಾಳಕಟ್ಟುಗಳ ಹೊರಗೆ ಟೋಪಿ ಮಾಡುತ್ತವೆ, ಇದರಿಂದ ಕಾಂಡ ಗಾಳಿಗೆ ಬಾಗದಂತೆ ತಡೆಯುತ್ತದೆ.",
          real: "ಸೆಣಬು ಮತ್ತು ತೆಂಗಿನ ನಾರು ದೃಢಾಂಗಾಂಶದ ನಾರುಗಳು; ಪೇರಳೆಯ ಕರಕರ ಕಣಗಳು ಸ್ಕ್ಲೆರೀಡ್‌ಗಳು.",
          fact: "ತೆಂಗಿನಕಾಯಿ ಮತ್ತು ಅಕ್ರೋಟಿನ ಗಟ್ಟಿ ಚಿಪ್ಪು ದೃಢಾಂಗಾಂಶದಿಂದ ಮಾಡಲ್ಪಟ್ಟಿದೆ." },
        xylem: { name: "ಕ್ಸೈಲಮ್ (ದಾರು)", short: "ಕ್ಸೈಲಮ್", tag: "ನೀರಿನ ಕೊಳವೆಗಳು",
          what: "ಕ್ಸೈಲಮ್ ನೀರು ಮತ್ತು ಕರಗಿದ ಖನಿಜಗಳನ್ನು ಬೇರುಗಳಿಂದ ಮೇಲೆ ಕಾಂಡ ಮತ್ತು ಎಲೆಗಳಿಗೆ ಒಯ್ಯುತ್ತದೆ. ಅದು ಸಸ್ಯಕ್ಕೆ ಆಧಾರವನ್ನೂ ಕೊಡುತ್ತದೆ.",
          adv: "ನೀರು ಸಾಗಿಸುವ ಕ್ಸೈಲಮ್ ನಾಳಗಳು ತುದಿಗೆ ತುದಿ ಜೋಡಿಸಿದ, ತುದಿ ಗೋಡೆಗಳು ಇಲ್ಲವಾದ ಸತ್ತ ಕೋಶಗಳಿಂದಾದ ಉದ್ದದ ಟೊಳ್ಳು ನಳಿಕೆಗಳು. ಅವು ಕುಸಿಯದಂತೆ ಅವುಗಳ ಗೋಡೆಗಳು ಲಿಗ್ನಿನ್ ಉಂಗುರ ಅಥವಾ ಸುರುಳಿಗಳಿಂದ ಬಲಗೊಂಡಿವೆ. ಕ್ಸೈಲಮ್‌ನಲ್ಲಿ ಟ್ರಕೀಡ್‌ಗಳು, ನಾರುಗಳು ಮತ್ತು ಮೃದ್ವಂಗಾಂಶವೂ ಇದೆ. ಮರದ ದಿಮ್ಮಿ ಹೆಚ್ಚಾಗಿ ಕ್ಸೈಲಮ್.",
          real: "ಮರದ ಬುಡದ ಮೇಲೆ ಕಾಣುವ ಉಂಗುರಗಳು ಕ್ಸೈಲಮ್‌ನ ಪದರಗಳು, ಪ್ರತಿ ವರ್ಷ ಒಂದು.",
          fact: "ಅತಿ ಎತ್ತರದ ಮರಗಳಲ್ಲಿ ಕ್ಸೈಲಮ್ ನೀರನ್ನು ಬೇರುಗಳಿಂದ 100 ಮೀಟರ್‌ಗಿಂತ ಹೆಚ್ಚು ಮೇಲಕ್ಕೆ ಏರಿಸುತ್ತದೆ." },
        phloem: { name: "ಫ್ಲೋಯಮ್ (ಪೋಷಕನಾಳ)", short: "ಫ್ಲೋಯಮ್", tag: "ಆಹಾರ ವಿತರಣೆ",
          what: "ಫ್ಲೋಯಮ್ ಆಹಾರವನ್ನು, ಮುಖ್ಯವಾಗಿ ಸಕ್ಕರೆಯನ್ನು, ಎಲೆಗಳಿಂದ ಬೇರು, ಹಣ್ಣು ಮತ್ತು ಬೆಳೆಯುವ ತುದಿಗಳಂತಹ ಸಸ್ಯದ ಇತರ ಭಾಗಗಳಿಗೆ ಒಯ್ಯುತ್ತದೆ.",
          adv: "ಫ್ಲೋಯಮ್ ತುದಿ ಗೋಡೆಗಳಲ್ಲಿ ರಂಧ್ರಗಳಿರುವ (ಜರಡಿ ತಟ್ಟೆಗಳು) ಜೀವಂತ ಜರಡಿ ನಳಿಕೆಗಳು ಮತ್ತು ಅವುಗಳಿಗೆ ಶಕ್ತಿ ಪೂರೈಸುವ ಸಹಚರ ಕೋಶಗಳಿಂದ ಮಾಡಲ್ಪಟ್ಟಿದೆ. ಕ್ಸೈಲಮ್‌ಗೆ ವಿರುದ್ಧವಾಗಿ ಫ್ಲೋಯಮ್ ವಸ್ತುಗಳನ್ನು ಮೇಲೆ ಮತ್ತು ಕೆಳಗೆ ಎರಡೂ ಕಡೆ ಒಯ್ಯಬಲ್ಲದು. ಫ್ಲೋಯಮ್‌ನಲ್ಲಿ ಆಹಾರ ಸಾಗುವುದನ್ನು ಸ್ಥಳಾಂತರಣ ಎನ್ನುತ್ತಾರೆ.",
          real: "ಏಫಿಡ್‌ಗಳು ತಮ್ಮ ಬಾಯಿಭಾಗಗಳನ್ನು ಫ್ಲೋಯಮ್‌ಗೆ ಚುಚ್ಚಿ ಸಿಹಿ ರಸ ಕುಡಿಯುತ್ತವೆ.",
          fact: "ಕಬ್ಬು ಫ್ಲೋಯಮ್‌ನಿಂದ ಎಷ್ಟು ಸಕ್ಕರೆ ಸಂಗ್ರಹಿಸುತ್ತದೆಯೆಂದರೆ ಅದರ ರಸದಲ್ಲಿ 20% ವರೆಗೆ ಸಕ್ಕರೆ ಇರುತ್ತದೆ." },
        meristem: { name: "ವರ್ಧನ ಅಂಗಾಂಶ (ಮೆರಿಸ್ಟಮ್)", short: "ವರ್ಧನ ಅಂಗಾಂಶ", tag: "ಕೋಶಗಳ ಕಾರ್ಖಾನೆ",
          what: "ವರ್ಧನ ಅಂಗಾಂಶದ ಕೋಶಗಳು ವಿಭಜನೆಯಾಗುತ್ತಲೇ ಹೊಸ ಕೋಶಗಳನ್ನು ಮಾಡುತ್ತವೆ. ಅದು ಬೇರು ಮತ್ತು ಕಾಂಡಗಳ ತುದಿಗಳಲ್ಲಿದ್ದು, ಅಲ್ಲಿ ಸಸ್ಯ ಉದ್ದವಾಗುತ್ತದೆ.",
          adv: "ಬೇರು ಮತ್ತು ಕಾಂಡದ ತುದಿಗಳ ಅಗ್ರ ವರ್ಧನ ಅಂಗಾಂಶಗಳು ಉದ್ದದಲ್ಲಿ ಬೆಳವಣಿಗೆ ಉಂಟುಮಾಡುತ್ತವೆ. ಕ್ಸೈಲಮ್ ಮತ್ತು ಫ್ಲೋಯಮ್ ನಡುವಿನ ಪಾರ್ಶ್ವ ವರ್ಧನ ಅಂಗಾಂಶ (ಕ್ಯಾಂಬಿಯಮ್) ಹೊಸ ಕ್ಸೈಲಮ್ ಮತ್ತು ಫ್ಲೋಯಮ್ ಮಾಡುತ್ತದೆ, ಇದರಿಂದ ಕಾಂಡ ದಪ್ಪವಾಗುತ್ತದೆ. ಎಲೆ ಮತ್ತು ಗೆಣ್ಣುಗಳ ಬುಡದ ಅಂತರ್ವೇಶಿ ವರ್ಧನ ಅಂಗಾಂಶ ಹುಲ್ಲನ್ನು ಮೇದ ಅಥವಾ ಕತ್ತರಿಸಿದ ನಂತರ ಮತ್ತೆ ಬೆಳೆಯಲು ಬಿಡುತ್ತದೆ. ವರ್ಧನ ಕೋಶಗಳು ಚಿಕ್ಕವು, ತೆಳು ಗೋಡೆ, ದಟ್ಟ ಜೀವದ್ರವ್ಯ ಮತ್ತು ದೊಡ್ಡ ಕೋಶಕೇಂದ್ರ ಹೊಂದಿವೆ.",
          real: "ಹುಲ್ಲುಹಾಸನ್ನು ಕತ್ತರಿಸಿದ ನಂತರವೂ ಹುಲ್ಲು ಬೆಳೆಯುತ್ತದೆ, ಏಕೆಂದರೆ ಅದರ ವರ್ಧನ ಅಂಗಾಂಶ ತುದಿಯಲ್ಲಲ್ಲ, ಬುಡದ ಹತ್ತಿರವಿದೆ.",
          fact: "ಬೇರಿನ ತುದಿಯನ್ನು ಬೇರುಟೋಪಿ ರಕ್ಷಿಸುತ್ತದೆ, ಅದು ಮಣ್ಣಿನೊಳಗೆ ನುಗ್ಗುವಾಗ ನಿಧಾನವಾಗಿ ಸವೆದು ಮತ್ತೆ ರೂಪುಗೊಳ್ಳುತ್ತದೆ." }
      },
      quiz: [
        { q: "ಯಾವ ಅಂಗಾಂಶ ನೀರನ್ನು ಬೇರುಗಳಿಂದ ಎಲೆಗಳಿಗೆ ಒಯ್ಯುತ್ತದೆ?", o: ["ಫ್ಲೋಯಮ್", "ಕ್ಸೈಲಮ್", "ಹೊರಚರ್ಮ", "ಬಿರಡೆ"],
          why: "ಕ್ಸೈಲಮ್ ನಾಳಗಳು ನೀರು ಮತ್ತು ಖನಿಜಗಳನ್ನು ಮೇಲಕ್ಕೆ ಒಯ್ಯುವ ಟೊಳ್ಳು ನಳಿಕೆಗಳು." },
        { q: "ಎಲೆಗಳಲ್ಲಿ ತಯಾರಾದ ಆಹಾರವನ್ನು ಯಾವ ಅಂಗಾಂಶ ಒಯ್ಯುತ್ತದೆ?", o: ["ಕ್ಸೈಲಮ್", "ಫ್ಲೋಯಮ್", "ಪತ್ರರಂಧ್ರ", "ವರ್ಧನ ಅಂಗಾಂಶ"],
          why: "ಫ್ಲೋಯಮ್ ಸಕ್ಕರೆಯನ್ನು ಎಲೆಗಳಿಂದ ಸಸ್ಯದ ಉಳಿದ ಭಾಗಗಳಿಗೆ ಒಯ್ಯುತ್ತದೆ." },
        { q: "ಯಾವ ಅಂಗಾಂಶ ವಿಭಜನೆಯಾಗಿ ಹೊಸ ಕೋಶಗಳನ್ನು ಮಾಡುತ್ತದೆ?", o: ["ವರ್ಧನ ಅಂಗಾಂಶ", "ಕ್ಸೈಲಮ್", "ದೃಢಾಂಗಾಂಶ", "ಹೊರಚರ್ಮ"],
          why: "ವರ್ಧನ ಕೋಶಗಳು ಬೇರು ಮತ್ತು ಕಾಂಡದ ತುದಿಗಳಲ್ಲಿ ವಿಭಜನೆಯಾಗುತ್ತಲೇ ಇರುತ್ತವೆ." },
        { q: "ಎಳೆಯ ಸಸ್ಯದ ಹೊರಗಿನ ರಕ್ಷಣಾ ಪದರವನ್ನು ಏನೆನ್ನುತ್ತಾರೆ?", o: ["ಹೊರಚರ್ಮ", "ಫ್ಲೋಯಮ್", "ಮಜ್ಜೆ", "ಕ್ಸೈಲಮ್"],
          why: "ಹೊರಚರ್ಮ ಸಸ್ಯವನ್ನು ಆವರಿಸುವ ಕೋಶಗಳ ಒಂದು ಪದರ." },
        { q: "ಆಧಾರಕ್ಕಾಗಿ ದಪ್ಪ, ಗಟ್ಟಿ ಗೋಡೆಯ ಸತ್ತ ಕೋಶಗಳಿರುವ ಅಂಗಾಂಶ ಯಾವುದು?", o: ["ಮೃದ್ವಂಗಾಂಶ", "ದೃಢಾಂಗಾಂಶ", "ಫ್ಲೋಯಮ್", "ವರ್ಧನ ಅಂಗಾಂಶ"],
          why: "ದೃಢಾಂಗಾಂಶದ ಗೋಡೆಗಳು ಲಿಗ್ನಿನ್‌ನಿಂದ ದಪ್ಪವಾಗಿದ್ದು ಸಸ್ಯವನ್ನು ಬಲಗೊಳಿಸುತ್ತವೆ." },
        { q: "ಮೃದ್ವಂಗಾಂಶದ ಮುಖ್ಯ ಕೆಲಸ ಏನು?", o: ["ಆಹಾರ ಸಂಗ್ರಹಿಸುವುದು", "ನೀರು ಒಯ್ಯುವುದು", "ವೇಗವಾಗಿ ವಿಭಜನೆಯಾಗುವುದು", "ತೊಗಟೆ ಮಾಡುವುದು"],
          why: "ಮೃದ್ವಂಗಾಂಶ ಕೋಶಗಳು ಆಹಾರ ಮತ್ತು ನೀರನ್ನು ಸಂಗ್ರಹಿಸಿ ಮೃದು ಭಾಗಗಳನ್ನು ತುಂಬುತ್ತವೆ." },
        { q: "ಪಕ್ವ ಕ್ಸೈಲಮ್ ನಾಳಗಳು ಯಾವುದರಿಂದ ಮಾಡಲ್ಪಟ್ಟಿವೆ?", o: ["ಕೋಶಕೇಂದ್ರವಿರುವ ಜೀವಂತ ಕೋಶಗಳಿಂದ", "ತುದಿಗೆ ತುದಿ ಜೋಡಿಸಿದ ಸತ್ತ, ಟೊಳ್ಳು ಕೋಶಗಳಿಂದ", "ಹರಿತ್ತುಕಣವಿರುವ ಹಸಿರು ಕೋಶಗಳಿಂದ", "ಬೇರುಕೂದಲು ಕೋಶಗಳಿಂದ"],
          why: "ತುದಿ ಗೋಡೆಗಳಿಲ್ಲದ ಸತ್ತ ಕೋಶಗಳು ನಿರಂತರ ಕೊಳವೆಗಳಾಗುತ್ತವೆ." },
        { q: "ಒಂದೇ ಕೆಲಸ ಮಾಡುವ ಒಂದೇ ರೀತಿಯ ಕೋಶಗಳ ಗುಂಪನ್ನು ಏನೆನ್ನುತ್ತಾರೆ?", o: ["ಅಂಗಾಂಶ", "ಅಂಗ", "ಜೀವಿ", "ವ್ಯವಸ್ಥೆ"],
          why: "ಅಂಗಾಂಶಗಳು ಒಂದೇ ರೀತಿಯ ಕೋಶಗಳ ತಂಡಗಳು; ಅಂಗಗಳು ಅನೇಕ ಅಂಗಾಂಶಗಳಿಂದ ಮಾಡಲ್ಪಟ್ಟಿವೆ." }
      ],
      terms: [
        { t: "ಅಂಗಾಂಶ", d: "ಒಂದೇ ಕೆಲಸವನ್ನು ಒಟ್ಟಿಗೆ ಮಾಡುವ ಒಂದೇ ರೀತಿಯ ಕೋಶಗಳ ಗುಂಪು." },
        { t: "ವರ್ಧನ ಅಂಗಾಂಶ", d: "ವಿಭಜನೆಯಾಗುತ್ತಲೇ ಹೊಸ ಕೋಶಗಳನ್ನು ಮಾಡುವ ಕೋಶಗಳಿರುವ ಅಂಗಾಂಶ." },
        { t: "ಕ್ಸೈಲಮ್", d: "ನೀರು ಮತ್ತು ಖನಿಜಗಳನ್ನು ಮೇಲಕ್ಕೆ ಒಯ್ಯುವ ಸತ್ತ, ಟೊಳ್ಳು ನಳಿಕೆಗಳ ಅಂಗಾಂಶ." },
        { t: "ಫ್ಲೋಯಮ್", d: "ಆಹಾರವನ್ನು (ಸಕ್ಕರೆ) ಸಸ್ಯದಲ್ಲೆಲ್ಲ ಒಯ್ಯುವ ಜೀವಂತ ಅಂಗಾಂಶ." },
        { t: "ನಾಳಕಟ್ಟು", d: "ಕ್ಸೈಲಮ್ ಮತ್ತು ಫ್ಲೋಯಮ್ ಒಟ್ಟಿಗಿರುವ ಎಳೆ." },
        { t: "ಲಿಗ್ನಿನ್", d: "ಕ್ಸೈಲಮ್ ಮತ್ತು ದೃಢಾಂಗಾಂಶದ ಗೋಡೆಗಳನ್ನು ಬಲಗೊಳಿಸುವ ಗಟ್ಟಿ ವಸ್ತು." },
        { t: "ಸ್ಥಳಾಂತರಣ", d: "ಫ್ಲೋಯಮ್ ಮೂಲಕ ಆಹಾರದ ಸಾಗಣೆ." }
      ],
      practice: [
        { q: "ಕ್ಸೈಲಮ್ ಮತ್ತು ಫ್ಲೋಯಮ್ ನಡುವಿನ ಎರಡು ವ್ಯತ್ಯಾಸ ತಿಳಿಸಿ.", a: "ಕ್ಸೈಲಮ್ ನೀರು ಮತ್ತು ಖನಿಜಗಳನ್ನು ಮೇಲಕ್ಕೆ ಮಾತ್ರ ಒಯ್ಯುತ್ತದೆ ಮತ್ತು ಹೆಚ್ಚಾಗಿ ಸತ್ತ ಕೋಶಗಳಿಂದಾಗಿದೆ; ಫ್ಲೋಯಮ್ ಆಹಾರವನ್ನು ಮೇಲೆ-ಕೆಳಗೆ ಒಯ್ಯುತ್ತದೆ ಮತ್ತು ಜೀವಂತ ಕೋಶಗಳಿಂದಾಗಿದೆ." },
        { q: "ಸಸ್ಯ ತನ್ನ ತುದಿಗಳಲ್ಲಿ ಮಾತ್ರ ಏಕೆ ಉದ್ದವಾಗುತ್ತದೆ?", a: "ಕೋಶಗಳು ವಿಭಜನೆಯಾಗುವ ಅಗ್ರ ವರ್ಧನ ಅಂಗಾಂಶಗಳು ಬೇರು ಮತ್ತು ಕಾಂಡಗಳ ತುದಿಗಳಲ್ಲಿವೆ." },
        { q: "ಸೆಲರಿ ದಂಟು ಅಥವಾ ಬಿಳಿ ಹೂವನ್ನು ಒಂದು ದಿನ ಬಣ್ಣದ ನೀರಿನಲ್ಲಿಡಿ. ಏನು ಕಾಣುತ್ತದೆ, ಮತ್ತು ಅದು ಯಾವ ಅಂಗಾಂಶವನ್ನು ತೋರಿಸುತ್ತದೆ?", a: "ದಂಟು ಅಥವಾ ದಳಗಳಲ್ಲಿ ಬಣ್ಣದ ಗೆರೆಗಳು, ಕ್ಸೈಲಮ್ ಮೂಲಕ ನೀರಿನ ದಾರಿಯನ್ನು ತೋರಿಸುತ್ತವೆ." },
        { q: "ಕ್ಸೈಲಮ್ ಗೋಡೆಗಳು ಲಿಗ್ನಿನ್‌ನಿಂದ ಏಕೆ ಬಲಗೊಂಡಿವೆ?", a: "ನೀರು ಮೇಲೆಳೆಯಲ್ಪಡುವಾಗ ಟೊಳ್ಳು ನಳಿಕೆಗಳು ಕುಸಿಯದಂತೆ, ಮತ್ತು ಅವು ಸಸ್ಯಕ್ಕೆ ಆಧಾರ ಕೊಡುವಂತೆ." }
      ]
    }
  },

  build: function (api) {
    var THREE = api.THREE, mat = api.mat, K = TL.bioKit(api), V = K.V;
    var s = api.state;
    s.K = K;

    /* ---------- Tane ka tukda: upar kata hua (beech me) ---------- */
    var SX = -1.0, SY = 1.4, R = 1.7, H = 1.4;
    /* bahya twacha: patla bahari chhalla */
    var ep = new THREE.Group();
    var epM = mat(0x5aa83a, { rough: 0.5 });
    epM.side = THREE.DoubleSide;
    ep.add(new THREE.Mesh(new THREE.CylinderGeometry(R, R, H, 48, 1, true), epM));
    ep.add(api.torus(R - 0.03, 0.06, mat(0x4a9a30, { rough: 0.5 }), 0, H / 2, 0));
    ep.children[1].rotation.x = Math.PI / 2;
    api.addPart("epidermis", ep, V(SX, SY, 0), null, { label: V(-R, H / 2 + 0.2, 0) });

    /* mridutak: andar ka bharav + upar ke chehre par gol koshikaayein */
    var pa = new THREE.Group();
    pa.add(api.cyl(R - 0.08, R - 0.08, H - 0.02, mat(0xd8eeb0, { rough: 0.8 }), 0, -0.01, 0, 40));
    var cellM = mat(0xc4e098, { rough: 0.7 });
    for (var r = 0.2; r < R - 0.15; r += 0.24) {
      var n = Math.max(1, Math.round(r * 2 * Math.PI / 0.24));
      for (var i = 0; i < n; i++) {
        var a = i / n * Math.PI * 2 + r;
        if (Math.abs(r - 1.05) < 0.2) continue;          // bandal ki jagah chhodo
        var c = api.sphere(0.1, cellM, Math.cos(a) * r, H / 2, Math.sin(a) * r, 8);
        c.scale.y = 0.3;
        pa.add(c);
      }
    }
    api.addPart("parenchyma", pa, V(SX, SY, 0), null, { pickBehind: true, label: V(0, H / 2 + 0.25, 0) });

    /* 8 samvahan bandal: andar jaileam, bahar floem, sabse bahar drudhotak topi */
    var xy = new THREE.Group(), ph = new THREE.Group(), sc = new THREE.Group();
    var xM = mat(0xb03a5a, { rough: 0.5 }), pM = mat(0xf09a3a, { rough: 0.5 }), sM = mat(0x6a4a2a, { rough: 0.6 });
    s.xLines = []; s.pLines = [];
    for (i = 0; i < 8; i++) {
      a = i / 8 * Math.PI * 2;
      var cx = Math.cos(a), cz = Math.sin(a);
      for (var k = 0; k < 3; k++) {
        var off = (k - 1) * 0.13, rr = 0.9;
        var px = cx * rr - cz * off, pz = cz * rr + cx * off;
        var tube = api.cyl(0.06, 0.06, H + 0.04, xM, px, 0, pz, 10);
        xy.add(tube);
        s.xLines.push([px, pz]);
      }
      var pp = api.cyl(0.13, 0.13, H + 0.02, pM, cx * 1.18, 0, cz * 1.18, 12);
      pp.scale.x = 1.4;
      pp.rotation.y = -a;
      ph.add(pp);
      s.pLines.push([cx * 1.18, cz * 1.18]);
      var cap = api.cyl(0.09, 0.09, H + 0.03, sM, cx * 1.4, 0, cz * 1.4, 10);
      cap.scale.x = 1.8;
      cap.rotation.y = -a;
      sc.add(cap);
    }
    api.addPart("xylem", xy, V(SX, SY, 0), null, { label: V(0.9, H / 2 + 0.3, 0) });
    api.addPart("phloem", ph, V(SX, SY, 0), null, { label: V(-0.2, H / 2 + 0.3, 1.18) });
    api.addPart("sclerenchyma", sc, V(SX, SY, 0), null, { label: V(-1.4, H / 2 + 0.3, 0.2) });

    /* ---------- Jad ki nok: tane ke neeche, vibhajyotak koshikaayein ---------- */
    var me = new THREE.Group();
    var rootM = mat(0xeee2c0, { rough: 0.6, opacity: 0.55 });
    rootM.depthWrite = false;
    me.add(api.cyl(0.45, 0.45, 1.4, rootM, 0, 0.6, 0, 24));
    var tip = api.cyl(0.45, 0.05, 0.8, rootM, 0, -0.5, 0, 24);
    me.add(tip);
    me.add(api.cyl(0.36, 0.0, 0.35, mat(0xc8a070, { rough: 0.8 }), 0, -0.85, 0, 16));     // moolgop
    s.mCells = [];
    var mcM = mat(0x8a5ae0, { rough: 0.4 });
    for (i = 0; i < 14; i++) {
      var yy = -0.55 + Math.floor(i / 4) * 0.13, xx = ((i % 4) - 1.5) * 0.12 * (1 - (yy + 0.55) * -0.2);
      var cell = api.box(0.11, 0.11, 0.11, mcM, xx, yy + 0.05, 0.05);
      me.add(cell);
      s.mCells.push(cell);
    }
    api.addPart("meristem", me, V(SX, SY - 2.6, 0), null, { label: V(0.6, -0.5, 0) });
    s.me = me;
    api.decor(api.cyl(0.3, 0.45, 0.6, mat(0xd8eeb0, { rough: 0.8 }), SX, SY - 1.0, 0, 20));

    /* ---------- Daayein: badi xylem vaahika aur floem chhalni nalika ---------- */
    var ZX = 3.4;
    var glass = mat(0xb03a5a, { rough: 0.4, opacity: 0.35 });
    glass.depthWrite = false;
    var vx = new THREE.Group();
    vx.add(api.cyl(0.32, 0.32, 3.6, glass, 0, 0, 0, 24));
    for (i = 0; i < 16; i++) { var ring = api.torus(0.32, 0.03, xM, 0, -1.7 + i * 0.226, 0); ring.rotation.x = Math.PI / 2 + 0.2; vx.add(ring); }
    api.addPart("xylem", vx, V(ZX, 1.0, 0), null);
    var vp = new THREE.Group();
    var pg = mat(0xf09a3a, { rough: 0.4, opacity: 0.4 });
    pg.depthWrite = false;
    vp.add(api.cyl(0.3, 0.3, 3.6, pg, 0, 0, 0, 24));
    for (i = 0; i < 4; i++) {
      var plate = api.cyl(0.3, 0.3, 0.04, mat(0xd07a2a, { rough: 0.5 }), 0, -1.35 + i * 0.9, 0, 24);
      vp.add(plate);
      vp.add(K.blob(0.12, mat(0xe8c060, { rough: 0.5 }), 1, 3.0, 1, 10));
      vp.children[vp.children.length - 1].position.set(0.42, -0.9 + i * 0.9, 0);
    }
    api.addPart("phloem", vp, V(ZX + 1.2, 1.0, 0), null);

    /* behte kan: tane ke bandalon me aur badi naliyon me */
    var wM = mat(0x3a8af0, { rough: 0.2 }), sgM = mat(0xff9a20, { rough: 0.3 });
    s.flows = [];
    [0, 3, 6, 9, 12, 15, 18, 21].forEach(function (j) {
      var p = s.xLines[j];
      s.flows.push(K.flow([[SX + p[0], SY - H / 2, p[1] + 0.02], [SX + p[0], SY + H / 2 + 0.05, p[1] + 0.02]], { count: 2, speed: 0.5, on: false, make: function () { return api.sphere(0.05, wM, 0, 0, 0, 8); } }));
    });
    s.pLines.forEach(function (p) {
      s.flows.push(K.flow([[SX + p[0], SY + H / 2 + 0.05, p[1] + 0.05], [SX + p[0], SY - H / 2, p[1] + 0.05]], { count: 2, speed: 0.35, on: false, make: function () { return api.sphere(0.05, sgM, 0, 0, 0, 8); } }));
    });
    s.flows.push(K.flow([[ZX, -0.8, 0], [ZX, 2.8, 0]], { count: 7, speed: 0.3, on: false, make: function () { return api.sphere(0.1, wM, 0, 0, 0, 10); } }));
    s.flows.push(K.flow([[ZX + 1.2, 2.8, 0], [ZX + 1.2, -0.8, 0]], { count: 6, speed: 0.2, on: false, make: function () { return api.sphere(0.09, sgM, 0, 0, 0, 10); } }));

    s.flowing = false;
    s.toggleFlow = function () {
      s.flowing = !s.flowing;
      s.flows.forEach(function (f) { f.set(s.flowing); });
      api.setButton("flow", s.flowing ? "flow_stop" : "flow_btn");
      if (s.flowing) api.setStatus("flow_on", 9000); else api.setStatus(null);
    };
    s.divT = -1;
    s.divide = function () {
      s.divT = 0;
      api.select("meristem");
      api.setStatus("divide_on", 8000);
    };
  },

  update: function (api, dt) {
    var s = api.state;
    s.K.update(dt);
    if (s.divT >= 0) {
      s.divT += dt;
      /* koshikaayein ek-ek karke do me bantti dikhen (phoolna), jad thodi lambi */
      s.mCells.forEach(function (c, i) {
        var k = s.divT * 3 - i * 0.25;
        var pulse = k > 0 && k < 1 ? Math.sin(k * Math.PI) : 0;
        c.scale.set(1 + 0.6 * pulse, 1 - 0.3 * pulse, 1);
      });
      s.me.scale.y = 1 + 0.12 * Math.min(1, s.divT / 4);
      if (s.divT > 5) { s.divT = -1; s.me.scale.y = 1; }
    }
  }
});
