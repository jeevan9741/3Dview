/* Topic: Transport in plants (plant physiology) (Botany, advanced) */
TL.start({
  id: "plant-physiology",
  camera: { theta: 0.1, phi: 1.35, radius: 15, target: [0, 1.6, 0], min: 6, max: 28 },
  autoRotate: false,
  labels: true,
  order: ["roothair", "xylem", "leaf", "stomata", "phloem", "factors"],
  parts: {
    roothair: { emoji: "🫚" }, xylem: { emoji: "⬆️" }, leaf: { emoji: "🍃" },
    stomata: { emoji: "👄" }, phloem: { emoji: "⬇️" }, factors: { emoji: "🌬️" }
  },
  quiz: [
    { part: "roothair", a: 0 }, { part: "xylem", a: 1 }, { part: "leaf", a: 0 }, { part: "stomata", a: 0 },
    { part: "phloem", a: 1 }, { part: "factors", a: 0 }, { part: "leaf", a: 0 }, { part: "roothair", a: 0 }
  ],
  actions: [
    { id: "flow", label: "flow_btn", main: true, onClick: function (api) { api.state.toggleFlow(); } },
    { id: "dry", label: "dry_btn", onClick: function (api) { api.state.toggleDry(); } }
  ],

  text: {
    en: {
      tagline: "Osmosis and transpiration lift water 100 metres up",
      intro: '<strong>A plant has no heart, yet it moves water from its roots to its highest leaf.</strong> On the left, a root hair is zoomed in; on the right, the underside of a leaf with its stomata. Press "💧 Start transport" to watch water rise and sugar travel, then "🥀 Stop watering" to see the plant wilt.',
      ui: {
        flow_btn: "💧 Start transport", flow_stop: "⏸ Stop",
        flow_on: "Water enters root hairs by osmosis, rises in the xylem and evaporates from the leaves through open stomata. Sugar travels in the phloem.",
        dry_btn: "🥀 Stop watering", wet_btn: "💧 Water the plant",
        dry_on: "Dry soil: the plant loses more water than it takes in. Cells lose their firmness (turgor), the leaves droop and the stomata close to save water.",
        wet_on: "Water again: cells fill up and become firm, the leaves rise and the stomata reopen."
      },
      parts: {
        roothair: { name: "Root hairs (osmosis)", short: "Root hairs", tag: "Where water gets in",
          what: "Root hairs are tiny outgrowths of root skin cells. Water from the soil moves into them by osmosis, and minerals are taken in too.",
          adv: "Osmosis is the movement of water through a partially permeable membrane from a dilute solution (soil water) to a more concentrated one (cell sap). Root hairs give a huge surface for absorption. Minerals such as nitrates are often less concentrated in the soil than in the root, so they are taken in by active transport, which uses energy from respiration.",
          real: "Over-fertilising a pot makes the soil water too concentrated, so water can be pulled out of the roots and the plant wilts.",
          fact: "A single rye plant can have billions of root hairs." },
        xylem: { name: "Xylem (water up)", short: "Xylem", tag: "The water lift",
          what: "Water travels up the stem in the xylem, a set of long, hollow tubes running from the roots to every leaf.",
          adv: "Water is pulled up mainly from the top. As water evaporates from the leaves, it pulls on the column of water behind it. Water molecules stick to each other (cohesion) and to the xylem walls (adhesion), so the whole column moves up unbroken: the transpiration pull. Root pressure gives a small push from below.",
          real: "Put a cut white flower in coloured water; after a few hours the petals change colour.",
          fact: "Water can rise more than 100 metres up the trunk of a giant redwood tree." },
        leaf: { name: "Leaf (transpiration)", short: "Leaf", tag: "Where water leaves",
          what: "Most of the water a plant takes in evaporates from the cells inside the leaves and escapes as water vapour. This is called transpiration.",
          adv: "Transpiration cools the plant, keeps a steady flow of water and minerals rising from the roots, and keeps cells firm (turgid). Only about 1–2% of the water absorbed is used in photosynthesis. When a plant loses water faster than it can take it in, cells lose turgor and the plant wilts.",
          real: "Tie a plastic bag over a leafy branch on a sunny day: water droplets collect inside.",
          fact: "A maize plant can transpire about 200 litres of water during its life." },
        stomata: { name: "Stomata and guard cells", short: "Stomata", tag: "The leaf's doors",
          what: "Stomata are tiny pores, mostly on the underside of leaves. Each one is surrounded by two bean-shaped guard cells that open and close it.",
          adv: "When guard cells take in water they swell and bend apart, opening the pore; when they lose water they become limp and the pore closes. Stomata let carbon dioxide in for photosynthesis and let oxygen and water vapour out. Most close at night and in drought to save water.",
          real: "Nail polish painted on a leaf and peeled off shows the stomata under a microscope.",
          fact: "A single leaf can have more than 100,000 stomata." },
        phloem: { name: "Phloem (food around)", short: "Phloem", tag: "The sugar delivery",
          what: "The phloem carries sugar made in the leaves to every part that needs it: roots, fruits, seeds and growing tips. It can move food up or down.",
          adv: "Moving food in the phloem is called translocation. Sugar is loaded into sieve tubes where it is made or released (the source, often a leaf) and unloaded where it is used or stored (the sink, such as a root, fruit or seed). It travels as a sugar solution called sap.",
          real: "Potatoes and carrots fill with starch made from sugar delivered by the phloem.",
          fact: "Maple syrup is made by boiling down the sugary sap of the sugar maple tree." },
        factors: { name: "Weather and transpiration", short: "Weather", tag: "Sun, wind and dryness",
          what: "Plants lose water faster when it is hot, bright, dry and windy, and slower when it is cool, dark, humid and still.",
          adv: "Heat gives water molecules more energy to evaporate; bright light opens the stomata; dry air increases the difference in water vapour between leaf and air; and wind blows away the moist air around the leaf. A potometer measures how fast a cut shoot takes up water, which is used to compare these conditions.",
          real: "Gardeners water plants in the evening so that less water evaporates.",
          fact: "On a hot, windy afternoon a plant may transpire several times faster than on a cool, still morning." }
      },
      quiz: [
        { q: "How does water enter root hairs?", o: ["By osmosis", "By photosynthesis", "By digestion", "By evaporation"],
          why: "Water moves from the dilute soil water into the more concentrated cell sap." },
        { q: "Which tissue carries water up the stem?", o: ["Phloem", "Xylem", "Stomata", "Cuticle"],
          why: "Xylem vessels are hollow tubes that carry water and minerals upwards." },
        { q: "What is the loss of water vapour from leaves called?", o: ["Transpiration", "Translocation", "Respiration", "Germination"],
          why: "Water evaporates inside the leaf and escapes through the stomata." },
        { q: "What opens and closes the stomata?", o: ["Guard cells", "Root hairs", "Xylem", "Phloem"],
          why: "Two guard cells swell to open the pore and go limp to close it." },
        { q: "Which tissue carries sugar around the plant?", o: ["Xylem", "Phloem", "Root hairs", "Stomata"],
          why: "Phloem carries sugar from where it is made to where it is used." },
        { q: "When is transpiration fastest?", o: ["Hot, bright, dry and windy", "Cold, dark, humid and still", "At night", "Under water"],
          why: "These conditions help water evaporate and keep the stomata open." },
        { q: "Why does a plant wilt?", o: ["It loses more water than it takes in", "It gets too much light", "It makes too much sugar", "Its roots grow too fast"],
          why: "Cells lose water and firmness, so the leaves and stem droop." },
        { q: "What do root hairs increase?", o: ["The surface area for absorbing water", "The height of the plant", "The number of flowers", "The rate of photosynthesis"],
          why: "Millions of fine hairs give a huge surface for taking in water." }
      ],
      terms: [
        { t: "Osmosis", d: "Movement of water through a partially permeable membrane from a dilute to a concentrated solution." },
        { t: "Transpiration", d: "Evaporation of water from the leaves, mainly through the stomata." },
        { t: "Transpiration pull", d: "The pull on the water column in the xylem caused by water evaporating from leaves." },
        { t: "Stoma (plural stomata)", d: "A tiny pore in a leaf, opened and closed by two guard cells." },
        { t: "Translocation", d: "Movement of sugar and other food in the phloem." },
        { t: "Turgor", d: "Firmness of a plant cell when it is full of water." },
        { t: "Wilting", d: "Drooping of a plant when its cells lose water." }
      ],
      practice: [
        { q: "Trace the path of a water molecule from the soil to the air.", a: "Soil → root hair (osmosis) → root cortex → xylem in root → xylem in stem → xylem in leaf → leaf cells → air spaces → out through a stoma as vapour." },
        { q: "Why do many plants close their stomata on very hot afternoons?", a: "To reduce water loss and prevent wilting, even though it slows photosynthesis." },
        { q: "Why is a seedling transplanted with soil around its roots?", a: "To avoid damaging the root hairs, which absorb water; damaged root hairs make the seedling wilt." },
        { q: "Give two differences between transport in xylem and in phloem.", a: "Xylem carries water and minerals only upwards in dead tubes; phloem carries sugar up and down in living sieve tubes." }
      ]
    },

    hi: {
      tagline: "परासरण और वाष्पोत्सर्जन से पानी 100 मीटर ऊपर",
      intro: '<strong>पौधे का कोई हृदय नहीं, फिर भी वह पानी को जड़ों से सबसे ऊँची पत्ती तक पहुँचाता है।</strong> बाईं ओर मूलरोम बड़ा करके दिखाया है; दाईं ओर रंध्रों वाली पत्ती की निचली सतह। "💧 परिवहन शुरू करो" दबाकर पानी को चढ़ते और शर्करा को चलते देखो, फिर "🥀 पानी देना बंद करो" दबाकर पौधे को मुरझाते देखो।',
      ui: {
        flow_btn: "💧 परिवहन शुरू करो", flow_stop: "⏸ रोको",
        flow_on: "पानी परासरण से मूलरोमों में आता है, जाइलम में चढ़ता है और खुले रंध्रों से पत्तियों से भाप बनकर उड़ता है। शर्करा फ्लोएम में चलती है।",
        dry_btn: "🥀 पानी देना बंद करो", wet_btn: "💧 पौधे को पानी दो",
        dry_on: "सूखी मिट्टी: पौधा जितना पानी लेता है उससे ज़्यादा खोता है। कोशिकाएँ अपनी कसावट (स्फीति) खो देती हैं, पत्तियाँ लटक जाती हैं और पानी बचाने को रंध्र बंद हो जाते हैं।",
        wet_on: "फिर पानी: कोशिकाएँ भरकर कसी हो जाती हैं, पत्तियाँ उठती हैं और रंध्र फिर खुलते हैं।"
      },
      parts: {
        roothair: { name: "मूलरोम (परासरण)", short: "मूलरोम", tag: "जहाँ से पानी अंदर आता है",
          what: "मूलरोम जड़ की त्वचा कोशिकाओं की नन्ही बढ़वार हैं। मिट्टी का पानी परासरण से इनमें जाता है, और खनिज भी लिए जाते हैं।",
          adv: "परासरण पानी का अर्धपारगम्य झिल्ली से तनु विलयन (मिट्टी का पानी) से सांद्र विलयन (कोशिका रस) की ओर जाना है। मूलरोम सोखने के लिए विशाल सतह देते हैं। नाइट्रेट जैसे खनिज अक्सर मिट्टी में जड़ से कम सांद्र होते हैं, इसलिए वे सक्रिय परिवहन से लिए जाते हैं, जिसमें श्वसन की ऊर्जा लगती है।",
          real: "गमले में बहुत ज़्यादा खाद डालने से मिट्टी का पानी बहुत सांद्र हो जाता है, जिससे जड़ों से पानी बाहर खिंच सकता है और पौधा मुरझा जाता है।",
          fact: "राई के एक पौधे में अरबों मूलरोम हो सकते हैं।" },
        xylem: { name: "जाइलम (पानी ऊपर)", short: "जाइलम", tag: "पानी की लिफ़्ट",
          what: "पानी तने में जाइलम से ऊपर जाता है, जो जड़ों से हर पत्ती तक जाने वाली लंबी, खोखली नलियों का समूह है।",
          adv: "पानी मुख्यतः ऊपर से खींचा जाता है। पत्तियों से पानी के भाप बनने पर वह पीछे के पानी के स्तंभ को खींचता है। पानी के अणु आपस में (संसंजन) और जाइलम की दीवारों से (आसंजन) चिपकते हैं, इसलिए पूरा स्तंभ बिना टूटे ऊपर चलता है: यही वाष्पोत्सर्जन खिंचाव है। मूल दाब नीचे से थोड़ा धक्का देता है।",
          real: "कटे सफ़ेद फूल को रंगीन पानी में रखो; कुछ घंटों में पंखुड़ियों का रंग बदल जाता है।",
          fact: "विशाल रेडवुड पेड़ के तने में पानी 100 मीटर से ज़्यादा ऊपर चढ़ सकता है।" },
        leaf: { name: "पत्ती (वाष्पोत्सर्जन)", short: "पत्ती", tag: "जहाँ से पानी निकलता है",
          what: "पौधे का लिया ज़्यादातर पानी पत्तियों के अंदर की कोशिकाओं से भाप बनकर जलवाष्प के रूप में निकल जाता है। इसे वाष्पोत्सर्जन कहते हैं।",
          adv: "वाष्पोत्सर्जन पौधे को ठंडा करता है, जड़ों से पानी और खनिजों का लगातार प्रवाह बनाए रखता है, और कोशिकाओं को कसा (स्फीत) रखता है। सोखे गए पानी का सिर्फ़ लगभग 1–2% प्रकाश संश्लेषण में लगता है। जब पौधा जितना ले सकता है उससे तेज़ पानी खोता है, तो कोशिकाएँ स्फीति खो देती हैं और पौधा मुरझा जाता है।",
          real: "धूप वाले दिन पत्तेदार टहनी पर प्लास्टिक की थैली बाँधो: अंदर पानी की बूँदें जमा होती हैं।",
          fact: "मक्का का एक पौधा अपने जीवन में लगभग 200 लीटर पानी वाष्पोत्सर्जित कर सकता है।" },
        stomata: { name: "रंध्र और द्वार कोशिकाएँ", short: "रंध्र", tag: "पत्ती के दरवाज़े",
          what: "रंध्र नन्हे छिद्र हैं, ज़्यादातर पत्तियों की निचली सतह पर। हर एक के चारों ओर सेम के आकार की दो द्वार कोशिकाएँ होती हैं जो उसे खोलती-बंद करती हैं।",
          adv: "जब द्वार कोशिकाएँ पानी लेती हैं तो फूलकर मुड़ जाती हैं और छिद्र खुलता है; पानी खोने पर वे ढीली होती हैं और छिद्र बंद हो जाता है। रंध्र प्रकाश संश्लेषण के लिए कार्बन डाइऑक्साइड अंदर आने देते हैं और ऑक्सीजन व जलवाष्प बाहर जाने देते हैं। ज़्यादातर रंध्र रात में और सूखे में पानी बचाने को बंद हो जाते हैं।",
          real: "पत्ती पर नेल पॉलिश लगाकर छीलो, तो सूक्ष्मदर्शी में रंध्र दिखते हैं।",
          fact: "एक पत्ती में 1,00,000 से ज़्यादा रंध्र हो सकते हैं।" },
        phloem: { name: "फ्लोएम (भोजन चारों ओर)", short: "फ्लोएम", tag: "शर्करा पहुँचाने वाला",
          what: "फ्लोएम पत्तियों में बनी शर्करा को हर उस भाग तक ले जाता है जिसे उसकी ज़रूरत है: जड़ें, फल, बीज और बढ़ते सिरे। यह भोजन ऊपर या नीचे ले जा सकता है।",
          adv: "फ्लोएम में भोजन का चलना स्थानांतरण कहलाता है। शर्करा जहाँ बनती या निकलती है (स्रोत, अक्सर पत्ती) वहाँ चालनी नलिकाओं में भरी जाती है और जहाँ इस्तेमाल या जमा होती है (कुंड, जैसे जड़, फल या बीज) वहाँ उतारी जाती है। यह शर्करा के घोल, रस, के रूप में चलती है।",
          real: "आलू और गाजर फ्लोएम से पहुँची शर्करा से बने स्टार्च से भर जाते हैं।",
          fact: "मेपल सिरप शुगर मेपल पेड़ के मीठे रस को उबालकर बनाया जाता है।" },
        factors: { name: "मौसम और वाष्पोत्सर्जन", short: "मौसम", tag: "धूप, हवा और सूखापन",
          what: "पौधे गर्म, तेज़ रोशनी, सूखे और हवादार मौसम में पानी तेज़ी से खोते हैं, और ठंडे, अँधेरे, नम और शांत मौसम में धीरे।",
          adv: "गर्मी पानी के अणुओं को भाप बनने के लिए ज़्यादा ऊर्जा देती है; तेज़ रोशनी रंध्र खोलती है; सूखी हवा पत्ती और हवा के बीच जलवाष्प का अंतर बढ़ाती है; और हवा पत्ती के चारों ओर की नम हवा उड़ा ले जाती है। पोटोमीटर नापता है कि कटा प्ररोह कितनी तेज़ी से पानी लेता है, जिससे इन स्थितियों की तुलना की जाती है।",
          real: "माली शाम को पौधों को पानी देते हैं ताकि कम पानी भाप बने।",
          fact: "गर्म, हवादार दोपहर में पौधा ठंडी, शांत सुबह से कई गुना तेज़ वाष्पोत्सर्जन कर सकता है।" }
      },
      quiz: [
        { q: "पानी मूलरोमों में कैसे जाता है?", o: ["परासरण से", "प्रकाश संश्लेषण से", "पाचन से", "वाष्पन से"],
          why: "पानी तनु मिट्टी के पानी से सांद्र कोशिका रस की ओर जाता है।" },
        { q: "कौन-सा ऊतक तने में पानी ऊपर ले जाता है?", o: ["फ्लोएम", "जाइलम", "रंध्र", "उपत्वचा"],
          why: "जाइलम वाहिकाएँ पानी और खनिज ऊपर ले जाने वाली खोखली नलियाँ हैं।" },
        { q: "पत्तियों से जलवाष्प का निकलना क्या कहलाता है?", o: ["वाष्पोत्सर्जन", "स्थानांतरण", "श्वसन", "अंकुरण"],
          why: "पानी पत्ती के अंदर भाप बनकर रंध्रों से निकलता है।" },
        { q: "रंध्रों को कौन खोलता-बंद करता है?", o: ["द्वार कोशिकाएँ", "मूलरोम", "जाइलम", "फ्लोएम"],
          why: "दो द्वार कोशिकाएँ फूलकर छिद्र खोलती हैं और ढीली होकर बंद करती हैं।" },
        { q: "कौन-सा ऊतक पौधे में शर्करा ले जाता है?", o: ["जाइलम", "फ्लोएम", "मूलरोम", "रंध्र"],
          why: "फ्लोएम शर्करा को बनने की जगह से इस्तेमाल की जगह तक ले जाता है।" },
        { q: "वाष्पोत्सर्जन सबसे तेज़ कब होता है?", o: ["गर्म, तेज़ रोशनी, सूखे और हवादार में", "ठंडे, अँधेरे, नम और शांत में", "रात में", "पानी के अंदर"],
          why: "ये परिस्थितियाँ पानी को भाप बनने में मदद करती हैं और रंध्र खुले रखती हैं।" },
        { q: "पौधा क्यों मुरझाता है?", o: ["वह जितना पानी लेता है उससे ज़्यादा खोता है", "उसे बहुत ज़्यादा रोशनी मिलती है", "वह बहुत ज़्यादा शर्करा बनाता है", "उसकी जड़ें बहुत तेज़ बढ़ती हैं"],
          why: "कोशिकाएँ पानी और कसावट खो देती हैं, इसलिए पत्तियाँ और तना लटक जाते हैं।" },
        { q: "मूलरोम क्या बढ़ाते हैं?", o: ["पानी सोखने की सतह", "पौधे की ऊँचाई", "फूलों की संख्या", "प्रकाश संश्लेषण की दर"],
          why: "लाखों बारीक रोम पानी लेने के लिए विशाल सतह देते हैं।" }
      ],
      terms: [
        { t: "परासरण", d: "अर्धपारगम्य झिल्ली से पानी का तनु से सांद्र विलयन की ओर जाना।" },
        { t: "वाष्पोत्सर्जन", d: "पत्तियों से, मुख्यतः रंध्रों से, पानी का भाप बनकर उड़ना।" },
        { t: "वाष्पोत्सर्जन खिंचाव", d: "पत्तियों से पानी उड़ने के कारण जाइलम के पानी के स्तंभ पर खिंचाव।" },
        { t: "रंध्र", d: "पत्ती का नन्हा छिद्र, जिसे दो द्वार कोशिकाएँ खोलती-बंद करती हैं।" },
        { t: "स्थानांतरण", d: "फ्लोएम में शर्करा और दूसरे भोजन का चलना।" },
        { t: "स्फीति", d: "पानी से भरी पादप कोशिका की कसावट।" },
        { t: "मुरझाना", d: "कोशिकाओं के पानी खोने पर पौधे का लटक जाना।" }
      ],
      practice: [
        { q: "पानी के एक अणु का मिट्टी से हवा तक का रास्ता बताओ।", a: "मिट्टी → मूलरोम (परासरण) → जड़ का वल्कुट → जड़ का जाइलम → तने का जाइलम → पत्ती का जाइलम → पत्ती की कोशिकाएँ → वायु-जगहें → रंध्र से भाप बनकर बाहर।" },
        { q: "बहुत गर्म दोपहर में कई पौधे अपने रंध्र क्यों बंद कर लेते हैं?", a: "पानी की हानि घटाने और मुरझाने से बचने के लिए, भले ही इससे प्रकाश संश्लेषण धीमा हो जाए।" },
        { q: "पौध को जड़ों के आसपास की मिट्टी के साथ क्यों रोपा जाता है?", a: "ताकि पानी सोखने वाले मूलरोमों को नुक़सान न हो; टूटे मूलरोमों से पौध मुरझा जाती है।" },
        { q: "जाइलम और फ्लोएम के परिवहन में दो अंतर बताओ।", a: "जाइलम पानी और खनिज मृत नलियों में सिर्फ़ ऊपर ले जाता है; फ्लोएम शर्करा जीवित चालनी नलिकाओं में ऊपर-नीचे ले जाता है।" }
      ]
    },

    mr: {
      tagline: "परासरण आणि बाष्पोत्सर्जनामुळे पाणी 100 मीटर वर",
      intro: '<strong>वनस्पतीला हृदय नसतं, तरीही ती पाणी मुळांपासून सर्वात उंच पानापर्यंत पोहोचवते.</strong> डावीकडे मूलरोम मोठा करून दाखवला आहे; उजवीकडे पर्णरंध्रं असलेली पानाची खालची बाजू. "💧 वहन सुरू करा" दाबून पाणी चढताना आणि साखर जाताना बघा, मग "🥀 पाणी देणं थांबवा" दाबून रोप कोमेजताना बघा.',
      ui: {
        flow_btn: "💧 वहन सुरू करा", flow_stop: "⏸ थांबवा",
        flow_on: "पाणी परासरणाने मूलरोमांत येतं, जलवाहिनीतून चढतं आणि उघड्या पर्णरंध्रांतून पानांतून वाफ होऊन उडतं. साखर रसवाहिनीतून जाते.",
        dry_btn: "🥀 पाणी देणं थांबवा", wet_btn: "💧 रोपाला पाणी द्या",
        dry_on: "कोरडी माती: रोप जितकं पाणी घेतं त्यापेक्षा जास्त गमावतं. पेशी आपला ताठपणा (स्फीती) गमावतात, पानं लोंबकळतात आणि पाणी वाचवण्यासाठी पर्णरंध्रं बंद होतात.",
        wet_on: "पुन्हा पाणी: पेशी भरून ताठ होतात, पानं वर येतात आणि पर्णरंध्रं पुन्हा उघडतात."
      },
      parts: {
        roothair: { name: "मूलरोम (परासरण)", short: "मूलरोम", tag: "जिथे पाणी आत येतं",
          what: "मूलरोम म्हणजे मुळाच्या त्वचापेशींची बारीक वाढ. मातीतलं पाणी परासरणाने त्यांच्यात जातं, आणि खनिजंही घेतली जातात.",
          adv: "परासरण म्हणजे अर्धपार्य पटलातून पाण्याचं विरल द्रावणाकडून (मातीतलं पाणी) संहत द्रावणाकडे (पेशीद्रव) जाणं. मूलरोम शोषणासाठी प्रचंड पृष्ठभाग देतात. नायट्रेटसारखी खनिजं अनेकदा मातीत मुळापेक्षा कमी संहत असतात, म्हणून ती सक्रिय वहनाने घेतली जातात, ज्यासाठी श्वसनातली ऊर्जा लागते.",
          real: "कुंडीत खूप जास्त खत घातल्याने मातीतलं पाणी खूप संहत होतं, त्यामुळे मुळांतून पाणी बाहेर ओढलं जाऊ शकतं आणि रोप कोमेजतं.",
          fact: "राईच्या एका रोपाला अब्जावधी मूलरोम असू शकतात." },
        xylem: { name: "जलवाहिनी (पाणी वर)", short: "जलवाहिनी", tag: "पाण्याची लिफ्ट",
          what: "पाणी खोडात जलवाहिनीतून वर जातं, जी मुळांपासून प्रत्येक पानापर्यंत जाणाऱ्या लांब, पोकळ नळ्यांचा संच आहे.",
          adv: "पाणी मुख्यतः वरून ओढलं जातं. पानांतून पाण्याची वाफ होताना ते मागच्या पाण्याच्या स्तंभाला ओढतं. पाण्याचे रेणू एकमेकांना (संसंजन) आणि जलवाहिनीच्या भिंतींना (आसंजन) चिकटतात, म्हणून संपूर्ण स्तंभ न तुटता वर सरकतो: हेच बाष्पोत्सर्जन ओढ. मूलदाब खालून थोडा धक्का देतो.",
          real: "कापलेलं पांढरं फूल रंगीत पाण्यात ठेवा; काही तासांत पाकळ्यांचा रंग बदलतो.",
          fact: "प्रचंड रेडवुड झाडाच्या खोडात पाणी 100 मीटरपेक्षा जास्त वर चढू शकतं." },
        leaf: { name: "पान (बाष्पोत्सर्जन)", short: "पान", tag: "जिथून पाणी बाहेर पडतं",
          what: "रोपाने घेतलेलं बहुतेक पाणी पानांच्या आतल्या पेशींतून वाफ होऊन पाण्याच्या वाफेच्या रूपात बाहेर पडतं. याला बाष्पोत्सर्जन म्हणतात.",
          adv: "बाष्पोत्सर्जन रोपाला थंड ठेवतं, मुळांपासून पाणी आणि खनिजांचा सतत प्रवाह चालू ठेवतं, आणि पेशी ताठ (स्फीत) ठेवतं. शोषलेल्या पाण्यापैकी फक्त सुमारे 1–2% प्रकाशसंश्लेषणात वापरलं जातं. रोप घेऊ शकतं त्यापेक्षा वेगाने पाणी गमावतं तेव्हा पेशी स्फीती गमावतात आणि रोप कोमेजतं.",
          real: "उन्हाच्या दिवशी पानांच्या फांदीवर प्लॅस्टिकची पिशवी बांधा: आत पाण्याचे थेंब जमा होतात.",
          fact: "मक्याचं एक रोप आयुष्यभरात सुमारे 200 लिटर पाण्याचं बाष्पोत्सर्जन करू शकतं." },
        stomata: { name: "पर्णरंध्रं आणि रक्षक पेशी", short: "पर्णरंध्रं", tag: "पानाचे दरवाजे",
          what: "पर्णरंध्रं म्हणजे बहुतेक पानांच्या खालच्या बाजूला असलेली बारीक छिद्रं. प्रत्येकाभोवती घेवड्याच्या आकाराच्या दोन रक्षक पेशी असतात, ज्या ते उघडतात आणि बंद करतात.",
          adv: "रक्षक पेशी पाणी घेतात तेव्हा फुगून वाकतात आणि छिद्र उघडतं; पाणी गमावल्यावर त्या सैल होतात आणि छिद्र बंद होतं. पर्णरंध्रं प्रकाशसंश्लेषणासाठी कार्बन डायऑक्साइड आत येऊ देतात आणि ऑक्सिजन व पाण्याची वाफ बाहेर जाऊ देतात. बहुतेक पर्णरंध्रं रात्री आणि दुष्काळात पाणी वाचवण्यासाठी बंद होतात.",
          real: "पानावर नेलपॉलिश लावून ते सोलून काढलं तर सूक्ष्मदर्शकाखाली पर्णरंध्रं दिसतात.",
          fact: "एका पानावर 1,00,000 पेक्षा जास्त पर्णरंध्रं असू शकतात." },
        phloem: { name: "रसवाहिनी (अन्न सगळीकडे)", short: "रसवाहिनी", tag: "साखर पोहोचवणारी",
          what: "रसवाहिनी पानांत बनलेली साखर ज्या भागांना गरज आहे तिथे नेते: मुळं, फळं, बिया आणि वाढणारी टोकं. ती अन्न वर किंवा खाली नेऊ शकते.",
          adv: "रसवाहिनीतून अन्न वाहून जाण्याला स्थानांतरण म्हणतात. साखर जिथे बनते किंवा सुटते (स्रोत, अनेकदा पान) तिथे चाळणी नलिकांत भरली जाते आणि जिथे वापरली किंवा साठवली जाते (कुंड, जसं मूळ, फळ किंवा बी) तिथे उतरवली जाते. ती साखरेच्या द्रावणाच्या, रसाच्या, रूपात जाते.",
          real: "बटाटे आणि गाजर रसवाहिनीने पोहोचवलेल्या साखरेपासून बनलेल्या पिष्टमय पदार्थांनी भरतात.",
          fact: "मेपल सिरप शुगर मेपल झाडाचा गोड रस आटवून बनवतात." },
        factors: { name: "हवामान आणि बाष्पोत्सर्जन", short: "हवामान", tag: "ऊन, वारा आणि कोरडेपणा",
          what: "गरम, प्रखर प्रकाश, कोरडी आणि वाऱ्याची हवा असताना वनस्पती पाणी वेगाने गमावतात, आणि थंड, अंधाऱ्या, दमट आणि शांत हवेत हळू.",
          adv: "उष्णतेमुळे पाण्याच्या रेणूंना वाफ होण्यासाठी जास्त ऊर्जा मिळते; प्रखर प्रकाश पर्णरंध्रं उघडतो; कोरडी हवा पान आणि हवेतल्या बाष्पाचा फरक वाढवते; आणि वारा पानाभोवतीची दमट हवा उडवून नेतो. पोटोमीटर कापलेला अंकुर किती वेगाने पाणी घेतो ते मोजतो, त्याने या परिस्थितींची तुलना करतात.",
          real: "माळी संध्याकाळी रोपांना पाणी देतात म्हणजे कमी पाण्याची वाफ होते.",
          fact: "गरम, वाऱ्याच्या दुपारी रोप थंड, शांत सकाळपेक्षा कित्येक पट जास्त वेगाने बाष्पोत्सर्जन करू शकतं." }
      },
      quiz: [
        { q: "पाणी मूलरोमांत कसं जातं?", o: ["परासरणाने", "प्रकाशसंश्लेषणाने", "पचनाने", "बाष्पीभवनाने"],
          why: "पाणी विरल मातीतल्या पाण्याकडून संहत पेशीद्रवाकडे जातं." },
        { q: "कोणती ऊती खोडात पाणी वर नेते?", o: ["रसवाहिनी", "जलवाहिनी", "पर्णरंध्र", "उपचर्म"],
          why: "जलवाहिन्या पाणी आणि खनिजं वर नेणाऱ्या पोकळ नळ्या आहेत." },
        { q: "पानांतून पाण्याची वाफ बाहेर पडण्याला काय म्हणतात?", o: ["बाष्पोत्सर्जन", "स्थानांतरण", "श्वसन", "अंकुरण"],
          why: "पानाच्या आत पाण्याची वाफ होऊन ती पर्णरंध्रांतून बाहेर पडते." },
        { q: "पर्णरंध्रं कोण उघडतं-बंद करतं?", o: ["रक्षक पेशी", "मूलरोम", "जलवाहिनी", "रसवाहिनी"],
          why: "दोन रक्षक पेशी फुगून छिद्र उघडतात आणि सैल होऊन बंद करतात." },
        { q: "कोणती ऊती रोपात साखर नेते?", o: ["जलवाहिनी", "रसवाहिनी", "मूलरोम", "पर्णरंध्रं"],
          why: "रसवाहिनी साखर बनण्याच्या जागेपासून वापराच्या जागेपर्यंत नेते." },
        { q: "बाष्पोत्सर्जन सर्वात जलद कधी होतं?", o: ["गरम, प्रखर प्रकाश, कोरडी आणि वाऱ्याची हवा", "थंड, अंधारी, दमट आणि शांत हवा", "रात्री", "पाण्याखाली"],
          why: "या परिस्थितीत पाण्याची वाफ होायला मदत होते आणि पर्णरंध्रं उघडी राहतात." },
        { q: "रोप का कोमेजतं?", o: ["ते घेतं त्यापेक्षा जास्त पाणी गमावतं", "त्याला खूप प्रकाश मिळतो", "ते खूप साखर बनवतं", "त्याची मुळं खूप वेगाने वाढतात"],
          why: "पेशी पाणी आणि ताठपणा गमावतात, म्हणून पानं आणि खोड लोंबकळतात." },
        { q: "मूलरोम काय वाढवतात?", o: ["पाणी शोषण्याचा पृष्ठभाग", "रोपाची उंची", "फुलांची संख्या", "प्रकाशसंश्लेषणाचा दर"],
          why: "लाखो बारीक रोम पाणी घेण्यासाठी प्रचंड पृष्ठभाग देतात." }
      ],
      terms: [
        { t: "परासरण", d: "अर्धपार्य पटलातून पाण्याचं विरल द्रावणाकडून संहत द्रावणाकडे जाणं." },
        { t: "बाष्पोत्सर्जन", d: "पानांतून, मुख्यतः पर्णरंध्रांतून, पाण्याची वाफ होऊन बाहेर पडणं." },
        { t: "बाष्पोत्सर्जन ओढ", d: "पानांतून पाण्याची वाफ झाल्यामुळे जलवाहिनीतल्या पाण्याच्या स्तंभावर येणारी ओढ." },
        { t: "पर्णरंध्र", d: "दोन रक्षक पेशींनी उघडलं-बंद केलं जाणारं पानावरचं बारीक छिद्र." },
        { t: "स्थानांतरण", d: "रसवाहिनीतून साखर आणि इतर अन्नाचं वहन." },
        { t: "स्फीती", d: "पाण्याने भरलेल्या वनस्पती पेशीचा ताठपणा." },
        { t: "कोमेजणं", d: "पेशींनी पाणी गमावल्यावर रोप लोंबकळणं." }
      ],
      practice: [
        { q: "पाण्याच्या एका रेणूचा मातीपासून हवेपर्यंतचा मार्ग सांगा.", a: "माती → मूलरोम (परासरण) → मुळाचा बाह्यक → मुळातली जलवाहिनी → खोडातली जलवाहिनी → पानातली जलवाहिनी → पानाच्या पेशी → हवेच्या पोकळ्या → पर्णरंध्रातून वाफ होऊन बाहेर." },
        { q: "खूप गरम दुपारी अनेक वनस्पती आपली पर्णरंध्रं का बंद करतात?", a: "पाण्याचा ऱ्हास कमी करण्यासाठी आणि कोमेजणं टाळण्यासाठी, जरी त्यामुळे प्रकाशसंश्लेषण मंदावलं तरी." },
        { q: "रोप मुळांभोवतीच्या मातीसह का लावतात?", a: "पाणी शोषणाऱ्या मूलरोमांना इजा होऊ नये म्हणून; तुटलेल्या मूलरोमांमुळे रोप कोमेजतं." },
        { q: "जलवाहिनी आणि रसवाहिनीतल्या वहनातले दोन फरक सांगा.", a: "जलवाहिनी पाणी आणि खनिजं मृत नळ्यांतून फक्त वर नेते; रसवाहिनी साखर जिवंत चाळणी नलिकांतून वर-खाली नेते." }
      ]
    },

    kn: {
      tagline: "ಆಸ್ಮೋಸಿಸ್ ಮತ್ತು ಬಾಷ್ಪವಿಸರ್ಜನೆಯಿಂದ ನೀರು 100 ಮೀಟರ್ ಮೇಲಕ್ಕೆ",
      intro: '<strong>ಸಸ್ಯಕ್ಕೆ ಹೃದಯವಿಲ್ಲ, ಆದರೂ ಅದು ನೀರನ್ನು ಬೇರುಗಳಿಂದ ಅತಿ ಎತ್ತರದ ಎಲೆಯವರೆಗೆ ಸಾಗಿಸುತ್ತದೆ.</strong> ಎಡಕ್ಕೆ ಬೇರುಕೂದಲನ್ನು ದೊಡ್ಡದಾಗಿ ತೋರಿಸಲಾಗಿದೆ; ಬಲಕ್ಕೆ ಪತ್ರರಂಧ್ರಗಳಿರುವ ಎಲೆಯ ಕೆಳಭಾಗ. "💧 ಸಾಗಣೆ ಶುರು ಮಾಡಿ" ಒತ್ತಿ ನೀರು ಏರುವುದನ್ನು ಮತ್ತು ಸಕ್ಕರೆ ಸಾಗುವುದನ್ನು ನೋಡಿ, ನಂತರ "🥀 ನೀರು ಹಾಕುವುದು ನಿಲ್ಲಿಸಿ" ಒತ್ತಿ ಸಸ್ಯ ಬಾಡುವುದನ್ನು ನೋಡಿ.',
      ui: {
        flow_btn: "💧 ಸಾಗಣೆ ಶುರು ಮಾಡಿ", flow_stop: "⏸ ನಿಲ್ಲಿಸಿ",
        flow_on: "ನೀರು ಆಸ್ಮೋಸಿಸ್‌ನಿಂದ ಬೇರುಕೂದಲುಗಳಿಗೆ ಬರುತ್ತದೆ, ಕ್ಸೈಲಮ್‌ನಲ್ಲಿ ಏರುತ್ತದೆ ಮತ್ತು ತೆರೆದ ಪತ್ರರಂಧ್ರಗಳ ಮೂಲಕ ಎಲೆಗಳಿಂದ ಆವಿಯಾಗುತ್ತದೆ. ಸಕ್ಕರೆ ಫ್ಲೋಯಮ್‌ನಲ್ಲಿ ಸಾಗುತ್ತದೆ.",
        dry_btn: "🥀 ನೀರು ಹಾಕುವುದು ನಿಲ್ಲಿಸಿ", wet_btn: "💧 ಸಸ್ಯಕ್ಕೆ ನೀರು ಹಾಕಿ",
        dry_on: "ಒಣ ಮಣ್ಣು: ಸಸ್ಯ ತೆಗೆದುಕೊಳ್ಳುವುದಕ್ಕಿಂತ ಹೆಚ್ಚು ನೀರು ಕಳೆದುಕೊಳ್ಳುತ್ತದೆ. ಕೋಶಗಳು ತಮ್ಮ ಬಿಗಿತ (ಟರ್ಗರ್) ಕಳೆದುಕೊಳ್ಳುತ್ತವೆ, ಎಲೆಗಳು ಜೋತುಬೀಳುತ್ತವೆ ಮತ್ತು ನೀರು ಉಳಿಸಲು ಪತ್ರರಂಧ್ರಗಳು ಮುಚ್ಚುತ್ತವೆ.",
        wet_on: "ಮತ್ತೆ ನೀರು: ಕೋಶಗಳು ತುಂಬಿ ಬಿಗಿಯಾಗುತ್ತವೆ, ಎಲೆಗಳು ಮೇಲೇಳುತ್ತವೆ ಮತ್ತು ಪತ್ರರಂಧ್ರಗಳು ಮತ್ತೆ ತೆರೆಯುತ್ತವೆ."
      },
      parts: {
        roothair: { name: "ಬೇರುಕೂದಲುಗಳು (ಆಸ್ಮೋಸಿಸ್)", short: "ಬೇರುಕೂದಲು", tag: "ನೀರು ಒಳಬರುವ ಜಾಗ",
          what: "ಬೇರುಕೂದಲುಗಳು ಬೇರಿನ ಚರ್ಮ ಕೋಶಗಳ ಪುಟ್ಟ ಬೆಳವಣಿಗೆಗಳು. ಮಣ್ಣಿನ ನೀರು ಆಸ್ಮೋಸಿಸ್‌ನಿಂದ ಅವುಗಳೊಳಗೆ ಹೋಗುತ್ತದೆ, ಮತ್ತು ಖನಿಜಗಳನ್ನೂ ತೆಗೆದುಕೊಳ್ಳಲಾಗುತ್ತದೆ.",
          adv: "ಆಸ್ಮೋಸಿಸ್ ಎಂದರೆ ಅರೆಪಾರಕ ಪೊರೆಯ ಮೂಲಕ ನೀರು ದುರ್ಬಲ ದ್ರಾವಣದಿಂದ (ಮಣ್ಣಿನ ನೀರು) ಸಾಂದ್ರ ದ್ರಾವಣಕ್ಕೆ (ಕೋಶರಸ) ಚಲಿಸುವುದು. ಬೇರುಕೂದಲುಗಳು ಹೀರುವಿಕೆಗೆ ವಿಶಾಲ ಮೇಲ್ಮೈ ಕೊಡುತ್ತವೆ. ನೈಟ್ರೇಟ್‌ನಂತಹ ಖನಿಜಗಳು ಹೆಚ್ಚಾಗಿ ಮಣ್ಣಿನಲ್ಲಿ ಬೇರಿಗಿಂತ ಕಡಿಮೆ ಸಾಂದ್ರವಾಗಿರುತ್ತವೆ, ಹಾಗಾಗಿ ಶ್ವಸನದ ಶಕ್ತಿ ಬಳಸುವ ಸಕ್ರಿಯ ಸಾಗಣೆಯಿಂದ ಅವುಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲಾಗುತ್ತದೆ.",
          real: "ಕುಂಡಕ್ಕೆ ಅತಿಯಾಗಿ ಗೊಬ್ಬರ ಹಾಕಿದರೆ ಮಣ್ಣಿನ ನೀರು ತುಂಬಾ ಸಾಂದ್ರವಾಗಿ ಬೇರುಗಳಿಂದ ನೀರು ಹೊರಗೆಳೆಯಲ್ಪಡಬಹುದು ಮತ್ತು ಸಸ್ಯ ಬಾಡುತ್ತದೆ.",
          fact: "ಒಂದು ರೈ ಸಸ್ಯಕ್ಕೆ ಶತಕೋಟಿಗಟ್ಟಲೆ ಬೇರುಕೂದಲುಗಳಿರಬಹುದು." },
        xylem: { name: "ಕ್ಸೈಲಮ್ (ನೀರು ಮೇಲಕ್ಕೆ)", short: "ಕ್ಸೈಲಮ್", tag: "ನೀರಿನ ಲಿಫ್ಟ್",
          what: "ನೀರು ಕಾಂಡದಲ್ಲಿ ಕ್ಸೈಲಮ್ ಮೂಲಕ ಮೇಲೇರುತ್ತದೆ, ಅದು ಬೇರುಗಳಿಂದ ಪ್ರತಿ ಎಲೆಯವರೆಗೆ ಸಾಗುವ ಉದ್ದದ, ಟೊಳ್ಳು ನಳಿಕೆಗಳ ಸಮೂಹ.",
          adv: "ನೀರು ಮುಖ್ಯವಾಗಿ ಮೇಲಿನಿಂದ ಎಳೆಯಲ್ಪಡುತ್ತದೆ. ಎಲೆಗಳಿಂದ ನೀರು ಆವಿಯಾದಂತೆ ಅದು ಹಿಂದಿನ ನೀರಿನ ಸ್ತಂಭವನ್ನು ಎಳೆಯುತ್ತದೆ. ನೀರಿನ ಅಣುಗಳು ಪರಸ್ಪರ (ಸಂಸಕ್ತಿ) ಮತ್ತು ಕ್ಸೈಲಮ್ ಗೋಡೆಗಳಿಗೆ (ಆಸಂಜನ) ಅಂಟುತ್ತವೆ, ಹಾಗಾಗಿ ಇಡೀ ಸ್ತಂಭ ಮುರಿಯದೆ ಮೇಲೇರುತ್ತದೆ: ಇದೇ ಬಾಷ್ಪವಿಸರ್ಜನಾ ಎಳೆತ. ಬೇರಿನ ಒತ್ತಡ ಕೆಳಗಿನಿಂದ ಸ್ವಲ್ಪ ತಳ್ಳುತ್ತದೆ.",
          real: "ಕತ್ತರಿಸಿದ ಬಿಳಿ ಹೂವನ್ನು ಬಣ್ಣದ ನೀರಿನಲ್ಲಿಡಿ; ಕೆಲವು ಗಂಟೆಗಳಲ್ಲಿ ದಳಗಳ ಬಣ್ಣ ಬದಲಾಗುತ್ತದೆ.",
          fact: "ದೈತ್ಯ ರೆಡ್‌ವುಡ್ ಮರದ ಕಾಂಡದಲ್ಲಿ ನೀರು 100 ಮೀಟರ್‌ಗಿಂತ ಹೆಚ್ಚು ಏರಬಲ್ಲದು." },
        leaf: { name: "ಎಲೆ (ಬಾಷ್ಪವಿಸರ್ಜನೆ)", short: "ಎಲೆ", tag: "ನೀರು ಹೊರಹೋಗುವ ಜಾಗ",
          what: "ಸಸ್ಯ ತೆಗೆದುಕೊಳ್ಳುವ ಹೆಚ್ಚಿನ ನೀರು ಎಲೆಗಳೊಳಗಿನ ಕೋಶಗಳಿಂದ ಆವಿಯಾಗಿ ನೀರಾವಿಯಾಗಿ ಹೊರಹೋಗುತ್ತದೆ. ಇದನ್ನು ಬಾಷ್ಪವಿಸರ್ಜನೆ ಎನ್ನುತ್ತಾರೆ.",
          adv: "ಬಾಷ್ಪವಿಸರ್ಜನೆ ಸಸ್ಯವನ್ನು ತಂಪಾಗಿಸುತ್ತದೆ, ಬೇರುಗಳಿಂದ ನೀರು ಮತ್ತು ಖನಿಜಗಳ ನಿರಂತರ ಹರಿವನ್ನು ಉಳಿಸುತ್ತದೆ, ಮತ್ತು ಕೋಶಗಳನ್ನು ಬಿಗಿಯಾಗಿಡುತ್ತದೆ. ಹೀರಿದ ನೀರಿನ ಕೇವಲ ಸುಮಾರು 1–2% ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಗೆ ಬಳಕೆಯಾಗುತ್ತದೆ. ಸಸ್ಯ ತೆಗೆದುಕೊಳ್ಳಬಲ್ಲದಕ್ಕಿಂತ ವೇಗವಾಗಿ ನೀರು ಕಳೆದಾಗ ಕೋಶಗಳು ಬಿಗಿತ ಕಳೆದು ಸಸ್ಯ ಬಾಡುತ್ತದೆ.",
          real: "ಬಿಸಿಲಿನ ದಿನ ಎಲೆಗಳಿರುವ ಕೊಂಬೆಗೆ ಪ್ಲಾಸ್ಟಿಕ್ ಚೀಲ ಕಟ್ಟಿ: ಒಳಗೆ ನೀರಿನ ಹನಿಗಳು ಸಂಗ್ರಹವಾಗುತ್ತವೆ.",
          fact: "ಒಂದು ಮೆಕ್ಕೆಜೋಳದ ಸಸ್ಯ ತನ್ನ ಜೀವಿತದಲ್ಲಿ ಸುಮಾರು 200 ಲೀಟರ್ ನೀರನ್ನು ಬಾಷ್ಪವಿಸರ್ಜಿಸಬಲ್ಲದು." },
        stomata: { name: "ಪತ್ರರಂಧ್ರಗಳು ಮತ್ತು ಕಾವಲು ಕೋಶಗಳು", short: "ಪತ್ರರಂಧ್ರ", tag: "ಎಲೆಯ ಬಾಗಿಲುಗಳು",
          what: "ಪತ್ರರಂಧ್ರಗಳು ಪುಟ್ಟ ರಂಧ್ರಗಳು, ಹೆಚ್ಚಾಗಿ ಎಲೆಗಳ ಕೆಳಭಾಗದಲ್ಲಿ. ಪ್ರತಿಯೊಂದರ ಸುತ್ತ ಅದನ್ನು ತೆರೆದು ಮುಚ್ಚುವ ಹುರುಳಿ ಆಕಾರದ ಎರಡು ಕಾವಲು ಕೋಶಗಳಿವೆ.",
          adv: "ಕಾವಲು ಕೋಶಗಳು ನೀರು ತೆಗೆದುಕೊಂಡಾಗ ಉಬ್ಬಿ ಬಾಗಿ ರಂಧ್ರ ತೆರೆಯುತ್ತದೆ; ನೀರು ಕಳೆದಾಗ ಅವು ಸಡಿಲವಾಗಿ ರಂಧ್ರ ಮುಚ್ಚುತ್ತದೆ. ಪತ್ರರಂಧ್ರಗಳು ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಗೆ ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ಒಳಬರಲು ಮತ್ತು ಆಮ್ಲಜನಕ ಹಾಗೂ ನೀರಾವಿ ಹೊರಹೋಗಲು ಬಿಡುತ್ತವೆ. ಹೆಚ್ಚಿನವು ರಾತ್ರಿ ಮತ್ತು ಬರದಲ್ಲಿ ನೀರು ಉಳಿಸಲು ಮುಚ್ಚುತ್ತವೆ.",
          real: "ಎಲೆಗೆ ನೇಲ್ ಪಾಲಿಶ್ ಹಚ್ಚಿ ಸುಲಿದರೆ ಸೂಕ್ಷ್ಮದರ್ಶಕದಲ್ಲಿ ಪತ್ರರಂಧ್ರಗಳು ಕಾಣುತ್ತವೆ.",
          fact: "ಒಂದು ಎಲೆಯಲ್ಲಿ 1,00,000 ಕ್ಕಿಂತ ಹೆಚ್ಚು ಪತ್ರರಂಧ್ರಗಳಿರಬಹುದು." },
        phloem: { name: "ಫ್ಲೋಯಮ್ (ಆಹಾರ ಎಲ್ಲೆಡೆ)", short: "ಫ್ಲೋಯಮ್", tag: "ಸಕ್ಕರೆ ವಿತರಣೆ",
          what: "ಫ್ಲೋಯಮ್ ಎಲೆಗಳಲ್ಲಿ ತಯಾರಾದ ಸಕ್ಕರೆಯನ್ನು ಅಗತ್ಯವಿರುವ ಪ್ರತಿ ಭಾಗಕ್ಕೆ ಒಯ್ಯುತ್ತದೆ: ಬೇರು, ಹಣ್ಣು, ಬೀಜ ಮತ್ತು ಬೆಳೆಯುವ ತುದಿಗಳು. ಅದು ಆಹಾರವನ್ನು ಮೇಲೆ ಅಥವಾ ಕೆಳಗೆ ಒಯ್ಯಬಲ್ಲದು.",
          adv: "ಫ್ಲೋಯಮ್‌ನಲ್ಲಿ ಆಹಾರ ಸಾಗುವುದನ್ನು ಸ್ಥಳಾಂತರಣ ಎನ್ನುತ್ತಾರೆ. ಸಕ್ಕರೆ ತಯಾರಾಗುವ ಅಥವಾ ಬಿಡುಗಡೆಯಾಗುವ ಜಾಗದಲ್ಲಿ (ಮೂಲ, ಹೆಚ್ಚಾಗಿ ಎಲೆ) ಜರಡಿ ನಳಿಕೆಗಳಿಗೆ ತುಂಬಲ್ಪಡುತ್ತದೆ ಮತ್ತು ಬಳಕೆಯಾಗುವ ಅಥವಾ ಸಂಗ್ರಹವಾಗುವ ಜಾಗದಲ್ಲಿ (ಸಿಂಕ್, ಬೇರು, ಹಣ್ಣು ಅಥವಾ ಬೀಜದಂತೆ) ಇಳಿಸಲ್ಪಡುತ್ತದೆ. ಅದು ಸಕ್ಕರೆಯ ದ್ರಾವಣವಾದ ರಸವಾಗಿ ಸಾಗುತ್ತದೆ.",
          real: "ಆಲೂಗಡ್ಡೆ ಮತ್ತು ಕ್ಯಾರೆಟ್ ಫ್ಲೋಯಮ್ ತಲುಪಿಸಿದ ಸಕ್ಕರೆಯಿಂದಾದ ಪಿಷ್ಟದಿಂದ ತುಂಬುತ್ತವೆ.",
          fact: "ಮೇಪಲ್ ಸಿರಪ್ ಅನ್ನು ಶುಗರ್ ಮೇಪಲ್ ಮರದ ಸಿಹಿ ರಸವನ್ನು ಕುದಿಸಿ ಮಾಡುತ್ತಾರೆ." },
        factors: { name: "ಹವಾಮಾನ ಮತ್ತು ಬಾಷ್ಪವಿಸರ್ಜನೆ", short: "ಹವಾಮಾನ", tag: "ಬಿಸಿಲು, ಗಾಳಿ ಮತ್ತು ಒಣಹವೆ",
          what: "ಬಿಸಿ, ಪ್ರಖರ ಬೆಳಕು, ಒಣ ಮತ್ತು ಗಾಳಿಯ ವಾತಾವರಣದಲ್ಲಿ ಸಸ್ಯಗಳು ನೀರನ್ನು ವೇಗವಾಗಿ ಕಳೆದುಕೊಳ್ಳುತ್ತವೆ, ಮತ್ತು ತಂಪು, ಕತ್ತಲೆ, ತೇವ ಮತ್ತು ಶಾಂತ ವಾತಾವರಣದಲ್ಲಿ ನಿಧಾನವಾಗಿ.",
          adv: "ಶಾಖ ನೀರಿನ ಅಣುಗಳಿಗೆ ಆವಿಯಾಗಲು ಹೆಚ್ಚು ಶಕ್ತಿ ಕೊಡುತ್ತದೆ; ಪ್ರಖರ ಬೆಳಕು ಪತ್ರರಂಧ್ರಗಳನ್ನು ತೆರೆಯುತ್ತದೆ; ಒಣ ಗಾಳಿ ಎಲೆ ಮತ್ತು ಗಾಳಿಯ ನಡುವಿನ ನೀರಾವಿ ವ್ಯತ್ಯಾಸ ಹೆಚ್ಚಿಸುತ್ತದೆ; ಮತ್ತು ಗಾಳಿ ಎಲೆಯ ಸುತ್ತಲಿನ ತೇವ ಗಾಳಿಯನ್ನು ಹಾರಿಸುತ್ತದೆ. ಪೊಟೊಮೀಟರ್ ಕತ್ತರಿಸಿದ ಕಾಂಡ ಎಷ್ಟು ವೇಗವಾಗಿ ನೀರು ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ ಅಳೆಯುತ್ತದೆ, ಇದರಿಂದ ಈ ಸ್ಥಿತಿಗಳನ್ನು ಹೋಲಿಸುತ್ತಾರೆ.",
          real: "ಕಡಿಮೆ ನೀರು ಆವಿಯಾಗಲೆಂದು ತೋಟಗಾರರು ಸಂಜೆ ಸಸ್ಯಗಳಿಗೆ ನೀರು ಹಾಕುತ್ತಾರೆ.",
          fact: "ಬಿಸಿ, ಗಾಳಿಯ ಮಧ್ಯಾಹ್ನ ಸಸ್ಯ ತಂಪು, ಶಾಂತ ಬೆಳಗ್ಗೆಗಿಂತ ಹಲವು ಪಟ್ಟು ವೇಗವಾಗಿ ಬಾಷ್ಪವಿಸರ್ಜಿಸಬಹುದು." }
      },
      quiz: [
        { q: "ನೀರು ಬೇರುಕೂದಲುಗಳಿಗೆ ಹೇಗೆ ಹೋಗುತ್ತದೆ?", o: ["ಆಸ್ಮೋಸಿಸ್‌ನಿಂದ", "ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಯಿಂದ", "ಜೀರ್ಣಕ್ರಿಯೆಯಿಂದ", "ಆವಿಯಾಗುವಿಕೆಯಿಂದ"],
          why: "ನೀರು ದುರ್ಬಲ ಮಣ್ಣಿನ ನೀರಿನಿಂದ ಸಾಂದ್ರ ಕೋಶರಸದ ಕಡೆ ಚಲಿಸುತ್ತದೆ." },
        { q: "ಯಾವ ಅಂಗಾಂಶ ಕಾಂಡದಲ್ಲಿ ನೀರನ್ನು ಮೇಲಕ್ಕೆ ಒಯ್ಯುತ್ತದೆ?", o: ["ಫ್ಲೋಯಮ್", "ಕ್ಸೈಲಮ್", "ಪತ್ರರಂಧ್ರ", "ಕ್ಯೂಟಿಕಲ್"],
          why: "ಕ್ಸೈಲಮ್ ನಾಳಗಳು ನೀರು ಮತ್ತು ಖನಿಜಗಳನ್ನು ಮೇಲಕ್ಕೆ ಒಯ್ಯುವ ಟೊಳ್ಳು ನಳಿಕೆಗಳು." },
        { q: "ಎಲೆಗಳಿಂದ ನೀರಾವಿ ಹೊರಹೋಗುವುದನ್ನು ಏನೆನ್ನುತ್ತಾರೆ?", o: ["ಬಾಷ್ಪವಿಸರ್ಜನೆ", "ಸ್ಥಳಾಂತರಣ", "ಶ್ವಸನ", "ಮೊಳಕೆಯೊಡೆಯುವಿಕೆ"],
          why: "ಎಲೆಯೊಳಗೆ ನೀರು ಆವಿಯಾಗಿ ಪತ್ರರಂಧ್ರಗಳ ಮೂಲಕ ಹೊರಹೋಗುತ್ತದೆ." },
        { q: "ಪತ್ರರಂಧ್ರಗಳನ್ನು ಯಾವುದು ತೆರೆದು ಮುಚ್ಚುತ್ತದೆ?", o: ["ಕಾವಲು ಕೋಶಗಳು", "ಬೇರುಕೂದಲುಗಳು", "ಕ್ಸೈಲಮ್", "ಫ್ಲೋಯಮ್"],
          why: "ಎರಡು ಕಾವಲು ಕೋಶಗಳು ಉಬ್ಬಿ ರಂಧ್ರ ತೆರೆಯುತ್ತವೆ ಮತ್ತು ಸಡಿಲವಾಗಿ ಮುಚ್ಚುತ್ತವೆ." },
        { q: "ಯಾವ ಅಂಗಾಂಶ ಸಸ್ಯದಲ್ಲಿ ಸಕ್ಕರೆ ಒಯ್ಯುತ್ತದೆ?", o: ["ಕ್ಸೈಲಮ್", "ಫ್ಲೋಯಮ್", "ಬೇರುಕೂದಲು", "ಪತ್ರರಂಧ್ರ"],
          why: "ಫ್ಲೋಯಮ್ ಸಕ್ಕರೆಯನ್ನು ತಯಾರಾದ ಜಾಗದಿಂದ ಬಳಕೆಯ ಜಾಗಕ್ಕೆ ಒಯ್ಯುತ್ತದೆ." },
        { q: "ಬಾಷ್ಪವಿಸರ್ಜನೆ ಯಾವಾಗ ಅತಿ ವೇಗ?", o: ["ಬಿಸಿ, ಪ್ರಖರ ಬೆಳಕು, ಒಣ ಮತ್ತು ಗಾಳಿಯಿರುವಾಗ", "ತಂಪು, ಕತ್ತಲೆ, ತೇವ ಮತ್ತು ಶಾಂತವಾಗಿರುವಾಗ", "ರಾತ್ರಿ", "ನೀರಿನೊಳಗೆ"],
          why: "ಈ ಸ್ಥಿತಿಗಳು ನೀರು ಆವಿಯಾಗಲು ಸಹಾಯ ಮಾಡಿ ಪತ್ರರಂಧ್ರಗಳನ್ನು ತೆರೆದಿಡುತ್ತವೆ." },
        { q: "ಸಸ್ಯ ಏಕೆ ಬಾಡುತ್ತದೆ?", o: ["ತೆಗೆದುಕೊಳ್ಳುವುದಕ್ಕಿಂತ ಹೆಚ್ಚು ನೀರು ಕಳೆಯುತ್ತದೆ", "ಅದಕ್ಕೆ ಅತಿ ಹೆಚ್ಚು ಬೆಳಕು", "ಅದು ಅತಿ ಹೆಚ್ಚು ಸಕ್ಕರೆ ತಯಾರಿಸುತ್ತದೆ", "ಅದರ ಬೇರುಗಳು ತುಂಬಾ ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತವೆ"],
          why: "ಕೋಶಗಳು ನೀರು ಮತ್ತು ಬಿಗಿತ ಕಳೆದು ಎಲೆ ಮತ್ತು ಕಾಂಡ ಜೋತುಬೀಳುತ್ತವೆ." },
        { q: "ಬೇರುಕೂದಲುಗಳು ಏನನ್ನು ಹೆಚ್ಚಿಸುತ್ತವೆ?", o: ["ನೀರು ಹೀರುವ ಮೇಲ್ಮೈ", "ಸಸ್ಯದ ಎತ್ತರ", "ಹೂವುಗಳ ಸಂಖ್ಯೆ", "ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಯ ದರ"],
          why: "ಲಕ್ಷಾಂತರ ತೆಳು ಕೂದಲುಗಳು ನೀರು ತೆಗೆದುಕೊಳ್ಳಲು ವಿಶಾಲ ಮೇಲ್ಮೈ ಕೊಡುತ್ತವೆ." }
      ],
      terms: [
        { t: "ಆಸ್ಮೋಸಿಸ್", d: "ಅರೆಪಾರಕ ಪೊರೆಯ ಮೂಲಕ ನೀರು ದುರ್ಬಲ ದ್ರಾವಣದಿಂದ ಸಾಂದ್ರ ದ್ರಾವಣಕ್ಕೆ ಚಲಿಸುವುದು." },
        { t: "ಬಾಷ್ಪವಿಸರ್ಜನೆ", d: "ಎಲೆಗಳಿಂದ, ಮುಖ್ಯವಾಗಿ ಪತ್ರರಂಧ್ರಗಳ ಮೂಲಕ, ನೀರು ಆವಿಯಾಗುವುದು." },
        { t: "ಬಾಷ್ಪವಿಸರ್ಜನಾ ಎಳೆತ", d: "ಎಲೆಗಳಿಂದ ನೀರು ಆವಿಯಾಗುವುದರಿಂದ ಕ್ಸೈಲಮ್‌ನ ನೀರಿನ ಸ್ತಂಭದ ಮೇಲಿನ ಎಳೆತ." },
        { t: "ಪತ್ರರಂಧ್ರ", d: "ಎರಡು ಕಾವಲು ಕೋಶಗಳು ತೆರೆದು ಮುಚ್ಚುವ ಎಲೆಯ ಪುಟ್ಟ ರಂಧ್ರ." },
        { t: "ಸ್ಥಳಾಂತರಣ", d: "ಫ್ಲೋಯಮ್‌ನಲ್ಲಿ ಸಕ್ಕರೆ ಮತ್ತು ಇತರ ಆಹಾರದ ಸಾಗಣೆ." },
        { t: "ಟರ್ಗರ್ (ಬಿಗಿತ)", d: "ನೀರಿನಿಂದ ತುಂಬಿದ ಸಸ್ಯಕೋಶದ ಬಿಗಿತ." },
        { t: "ಬಾಡುವಿಕೆ", d: "ಕೋಶಗಳು ನೀರು ಕಳೆದಾಗ ಸಸ್ಯ ಜೋತುಬೀಳುವುದು." }
      ],
      practice: [
        { q: "ನೀರಿನ ಒಂದು ಅಣುವಿನ ಮಣ್ಣಿನಿಂದ ಗಾಳಿಯವರೆಗಿನ ದಾರಿಯನ್ನು ತಿಳಿಸಿ.", a: "ಮಣ್ಣು → ಬೇರುಕೂದಲು (ಆಸ್ಮೋಸಿಸ್) → ಬೇರಿನ ಕಾರ್ಟೆಕ್ಸ್ → ಬೇರಿನ ಕ್ಸೈಲಮ್ → ಕಾಂಡದ ಕ್ಸೈಲಮ್ → ಎಲೆಯ ಕ್ಸೈಲಮ್ → ಎಲೆಯ ಕೋಶಗಳು → ಗಾಳಿ ಜಾಗಗಳು → ಪತ್ರರಂಧ್ರದ ಮೂಲಕ ಆವಿಯಾಗಿ ಹೊರಗೆ." },
        { q: "ತುಂಬಾ ಬಿಸಿಯಾದ ಮಧ್ಯಾಹ್ನ ಅನೇಕ ಸಸ್ಯಗಳು ಪತ್ರರಂಧ್ರಗಳನ್ನು ಏಕೆ ಮುಚ್ಚುತ್ತವೆ?", a: "ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ ನಿಧಾನವಾದರೂ, ನೀರಿನ ನಷ್ಟ ತಗ್ಗಿಸಿ ಬಾಡುವಿಕೆ ತಡೆಯಲು." },
        { q: "ಸಸಿಯನ್ನು ಬೇರುಗಳ ಸುತ್ತಲಿನ ಮಣ್ಣಿನೊಂದಿಗೆ ಏಕೆ ನಾಟಿ ಮಾಡುತ್ತಾರೆ?", a: "ನೀರು ಹೀರುವ ಬೇರುಕೂದಲುಗಳಿಗೆ ಹಾನಿಯಾಗದಂತೆ; ಹಾನಿಗೊಂಡ ಬೇರುಕೂದಲುಗಳಿಂದ ಸಸಿ ಬಾಡುತ್ತದೆ." },
        { q: "ಕ್ಸೈಲಮ್ ಮತ್ತು ಫ್ಲೋಯಮ್ ಸಾಗಣೆಯ ನಡುವಿನ ಎರಡು ವ್ಯತ್ಯಾಸ ತಿಳಿಸಿ.", a: "ಕ್ಸೈಲಮ್ ನೀರು ಮತ್ತು ಖನಿಜಗಳನ್ನು ಸತ್ತ ನಳಿಕೆಗಳಲ್ಲಿ ಮೇಲಕ್ಕೆ ಮಾತ್ರ ಒಯ್ಯುತ್ತದೆ; ಫ್ಲೋಯಮ್ ಸಕ್ಕರೆಯನ್ನು ಜೀವಂತ ಜರಡಿ ನಳಿಕೆಗಳಲ್ಲಿ ಮೇಲೆ-ಕೆಳಗೆ ಒಯ್ಯುತ್ತದೆ." }
      ]
    }
  },

  build: function (api) {
    var THREE = api.THREE, mat = api.mat, K = TL.bioKit(api), V = K.V;
    var s = api.state;
    s.K = K;

    /* zameen: patti + saamne mitti */
    api.decor(api.box(8, 0.2, 3, mat(0x9ac86a, { rough: 0.9 }), 0, -0.1, -0.5));
    api.decor(api.box(8, 1.6, 0.6, mat(0x6a4a2a, { rough: 0.95 }), 0, -1.0, 0.7));

    /* Paudha: tanaa, xylem (neeli lakeer), phloem (narangi), pattiyan */
    var PX = 0, stemM = mat(0x6aa84a, { rough: 0.55 });
    api.decor(api.cyl(0.14, 0.18, 4.0, stemM, PX, 2.0, 0.3, 14));
    var xy = new THREE.Group(), ph = new THREE.Group();
    xy.add(api.cyl(0.035, 0.035, 5.4, mat(0x3a7ae0, { rough: 0.4 }), 0, 0, 0, 8));
    ph.add(api.cyl(0.035, 0.035, 5.4, mat(0xf0942a, { rough: 0.4 }), 0, 0, 0, 8));
    api.addPart("xylem", xy, V(PX - 0.09, 1.3, 0.47), null, { label: V(-0.4, 1.2, 0) });
    api.addPart("phloem", ph, V(PX + 0.09, 1.3, 0.47), null, { label: V(0.45, 0.6, 0) });
    /* jadein mitti me (saamne) */
    var rootM = mat(0xe8d8b0, { rough: 0.6 });
    [[-1.0, -1.5], [-0.4, -1.7], [0.4, -1.65], [1.0, -1.4]].forEach(function (p) { api.decor(K.tube([[PX, -0.1, 1.01], [p[0] * 0.4, -0.7, 1.01], [p[0], p[1], 1.01]], 0.04, rootM, false, 14)); });
    /* pattiyan: pivot tane par, sukhe me jhukti hain */
    s.leaves = [];
    var lM = mat(0x3faa3a, { rough: 0.5 });
    [[1.6, 0.4], [2.3, Math.PI], [3.0, 0.2], [3.6, Math.PI + 0.3]].forEach(function (p, i) {
      var holder = new THREE.Group();
      holder.position.set(PX, p[0], 0.3);
      holder.rotation.y = p[1];
      var lf = K.leaf(1.3, 0.7, lM);
      /* patti ka chehra camera ki taraf jhuka ho (dono taraf ki pattiyon ke liye ulta) */
      lf.rotation.x = i % 2 ? -0.9 : 0.9;
      lf.rotation.z = 0.35;
      holder.add(lf);
      s.leaves.push(lf);
      api.decor(holder);
      api.addPart("leaf", holder, null, null, i === 0 ? { label: V(1.1, 0.4, 0) } : null);
    });

    /* Moolrom (bada): baayein neeche, koshika + lambi rom, paani ke kan andar aate */
    var RX = -3.6, RY = -0.7;
    var rh = new THREE.Group();
    var cellM = mat(0xf2e6c0, { rough: 0.6, opacity: 0.75 });
    cellM.depthWrite = false;
    rh.add(api.box(0.9, 0.7, 0.5, cellM, 0, 0, 0));
    rh.add(api.sphere(0.13, mat(0x8a6ac0, { rough: 0.5 }), -0.15, 0.05, 0, 12));
    rh.add(api.sphere(0.22, mat(0xbfe0ff, { rough: 0.3, opacity: 0.6 }), 0.15, -0.05, 0, 14));
    var hair = K.tube([[0.45, -0.1, 0], [1.0, -0.25, 0], [1.6, -0.3, 0]], 0.09, cellM, false, 20);
    rh.add(hair);
    for (var i = 0; i < 9; i++) rh.add(api.sphere(0.08, mat(0x9a7a5a, { rough: 0.95 }), 0.6 + i * 0.15, -0.55 + (i % 2) * 0.55, 0.15, 8));
    api.addPart("roothair", rh, V(RX, RY, 1.5), null, { label: V(0.6, 0.55, 0) });
    api.decor(api.torus(1.15, 0.05, mat(0x5b6375, { rough: 0.4, metal: 0.4 }), RX + 0.55, RY - 0.1, 1.4));

    /* Patti ki nichli satah (badi): daayein upar, do randhra (dwaar koshikaayein) */
    var SX = 3.3, SY = 3.6;
    var st = new THREE.Group();
    st.add(api.box(2.2, 1.4, 0.08, mat(0x7ac85a, { rough: 0.6 }), 0, 0, -0.05));
    s.guards = [];
    [[-0.5, 0.1], [0.5, -0.15]].forEach(function (p) {
      [-1, 1].forEach(function (sd) {
        var g = K.blob(0.14, mat(0x3a8a2a, { rough: 0.5 }), 0.7, 1.8, 0.6, 12);
        g.position.set(p[0] + sd * 0.1, p[1], 0.04);
        g.userData = { cx: p[0], sd: sd };
        st.add(g);
        s.guards.push(g);
      });
      st.add(api.box(0.05, 0.3, 0.02, mat(0x1a2a1a), p[0], p[1], 0.03));
    });
    api.addPart("stomata", st, V(SX, SY, 0.3), null, { label: V(0, 0.95, 0) });
    api.decor(api.torus(1.45, 0.05, mat(0x5b6375, { rough: 0.4, metal: 0.4 }), SX, SY, 0.2));
    api.decor(api.rod(V(0.9, 3.4, 0.3), V(SX - 1.45, SY - 0.1, 0.25), 0.02, mat(0x8a93a6)));

    /* Mausam: sooraj + pankha (hawa) */
    var fc = new THREE.Group();
    fc.add(api.sphere(0.45, mat(0xffc832, { glow: 0xffa000, glowLevel: 0.6 }), 0, 0, 0, 18));
    var fan = api.makeFan(0.45, 0xd0d6e0, 0x5a6270);
    fan.rotation.z = Math.PI / 2;
    fan.position.set(0.0, -1.4, 0);
    fc.add(fan);
    fc.add(api.cyl(0.04, 0.04, 1.1, mat(0x5a6270), 0, -2.05, 0, 8));
    api.addPart("factors", fc, V(-3.6, 4.0, -0.4), null, { label: V(0.6, 0.4, 0) });

    /* Behte kan */
    var wM = mat(0x2a7ae8, { rough: 0.2 }), sM = mat(0xff9a20, { rough: 0.3 }), vM = mat(0xcfe8ff, { rough: 0.2, opacity: 0.8 });
    s.flows = [
      K.flow([[RX + 1.9, RY - 0.3, 1.55], [RX + 1.1, RY - 0.25, 1.55], [RX + 0.2, RY - 0.05, 1.55]], { count: 5, speed: 0.35, on: false, make: function () { return api.sphere(0.06, wM, 0, 0, 0, 8); } }),
      K.flow([[PX - 0.09, -1.3, 0.5], [PX - 0.09, 1.5, 0.5], [PX - 0.09, 3.9, 0.5]], { count: 10, speed: 0.3, on: false, make: function () { return api.sphere(0.065, wM, 0, 0, 0, 8); } }),
      K.flow([[PX + 0.09, 3.9, 0.5], [PX + 0.09, 1.5, 0.5], [PX + 0.09, -1.3, 0.5]], { count: 8, speed: 0.22, on: false, make: function () { return api.sphere(0.06, sM, 0, 0, 0, 8); } }),
      K.flow([[SX - 0.5, SY + 0.1, 0.4], [SX - 0.6, SY + 0.7, 0.9], [SX - 0.4, SY + 1.5, 1.2]], { count: 4, speed: 0.4, on: false, make: function () { return api.sphere(0.06, vM, 0, 0, 0, 8); } }),
      K.flow([[SX + 0.5, SY - 0.15, 0.4], [SX + 0.6, SY + 0.6, 0.9], [SX + 0.7, SY + 1.4, 1.2]], { count: 4, speed: 0.4, on: false, make: function () { return api.sphere(0.06, vM, 0, 0, 0, 8); } }),
      K.flow([[1.0, 3.2, 0.6], [1.8, 4.3, 0.8], [2.2, 5.2, 0.9]], { count: 4, speed: 0.35, on: false, make: function () { return api.sphere(0.06, vM, 0, 0, 0, 8); } })
    ];

    s.flowing = false;
    s.dry = false;
    s.droop = 0;
    s.sync = function () {
      s.flows.forEach(function (f) { f.set(s.flowing && !s.dry); });
    };
    s.toggleFlow = function () {
      s.flowing = !s.flowing;
      s.sync();
      api.setButton("flow", s.flowing ? "flow_stop" : "flow_btn");
      if (s.flowing) api.setStatus("flow_on", 9000); else api.setStatus(null);
    };
    s.toggleDry = function () {
      s.dry = !s.dry;
      s.sync();
      api.setButton("dry", s.dry ? "wet_btn" : "dry_btn");
      api.setStatus(s.dry ? "dry_on" : "wet_on", 9000);
    };
  },

  update: function (api, dt) {
    var s = api.state;
    s.K.update(dt);
    s.droop += ((s.dry ? 1 : 0) - s.droop) * Math.min(1, dt * 0.8);
    /* sukhe me patti jhukti hai (z-ghumaav neeche) */
    s.leaves.forEach(function (lf) { lf.rotation.z = 0.35 - 1.3 * s.droop; });
    /* randhra: khula = dwaar koshikaayein door, band = paas */
    var open = s.flowing && !s.dry ? 1 : s.dry ? 0 : 0.5;
    s.guards.forEach(function (g) {
      var x = g.userData.cx + g.userData.sd * (0.07 + 0.06 * open);
      g.position.x += (x - g.position.x) * Math.min(1, dt * 4);
    });
  }
});
