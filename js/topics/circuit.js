/* Topic: Bijli ka circuit */
TL.start({
  id: "circuit",
  camera: { theta: 0.45, phi: 0.95, radius: 12, target: [-0.4, 0.4, 0], min: 6, max: 22 },
  order: ["battery", "switch", "bulb", "wire", "current"],
  parts: {
    battery: { emoji: "🔋" }, switch: { emoji: "🔘" }, bulb: { emoji: "💡" },
    wire: { emoji: "〰️" }, current: { emoji: "⚡" }
  },
  quiz: [
    { part: "bulb", a: 2 }, { part: "switch", a: 0 }, { part: "battery", a: 1 },
    { part: "wire", a: 3 }, { part: "wire", a: 1 }, { part: "current", a: 0 }
  ],
  actions: [
    { id: "switch", label: "sw_on", main: true, onClick: function (api) { api.state.toggleSwitch(); } },
    { id: "cut", label: "cut", onClick: function (api) { api.state.toggleCut(); } }
  ],

  text: {
    hinglish: {
      tagline: "Bijli ek gol raaste me ghoomti hai",
      intro: '<strong>Chalo bulb jalayein!</strong> "Switch ON karo" dabao aur dekho bijli kaise ghoomti hai. Phir "Wire kaato" dabakar dekho kya hota hai jab raasta toot jaata hai.',
      ui: {
        sw_on: "🔘 Switch ON karo", sw_off: "🔘 Switch OFF karo",
        cut: "✂️ Wire kaato", join: "🔗 Wire jodo",
        lit: "💡 Circuit poora hua! Bijli ghoom rahi hai aur bulb jal gaya",
        off: "Switch khula hai. Raasta toota, isliye bulb bujh gaya",
        broken: "✂️ Wire kata hua hai! Raasta poora nahi, isliye bulb nahi jalega",
        fixed: "🔗 Wire jud gaya. Ab switch ON karke dekho"
      },
      parts: {
        battery: { name: "Battery", tag: "Bijli ka dabba",
          what: "Battery ke andar chemicals hote hain jo bijli ko dhakka dete hain. Iske do sire hote hain: plus (+) aur minus (−). Bijli + se nikal kar − me wapas aati hai.",
          real: "Remote, ghadi aur khilaunon me yahi battery lagti hai.",
          fact: "Pehli battery 1800 me Alessandro Volta ne banayi thi, isliye 'Volt' naam unhi se aaya." },
        switch: { name: "Switch", tag: "Raasta kholne-band karne wala",
          what: "Switch ON karne par dhaatu ka patta raasta jod deta hai aur bijli beh sakti hai. OFF karne par raasta toot jaata hai.",
          real: "Ghar ki deewar par lage switch se tum pankha aur light chalate ho.",
          fact: "Switch bijli nahi banata, wo sirf raasta jodta ya todta hai." },
        bulb: { name: "Bulb", tag: "Roshni dene wala",
          what: "Jab bijli bulb ke andar ke patle taar (filament) se guzarti hai, to taar itna garam hota hai ki chamakne lagta hai.",
          real: "Jaise lohe ko bahut garam karo to wo laal chamakne lagta hai.",
          fact: "Aaj kal LED bulb aate hain jo kam bijli me zyada roshni dete hain." },
        wire: { name: "Taar (Wire)", short: "Taar", tag: "Bijli ki sadak",
          what: "Taar ke andar tamba (copper) hota hai jisme bijli aasani se behti hai. Upar plastic ka cover hota hai taaki humein current na lage.",
          real: "Jaise paani ke liye pipe, waise bijli ke liye taar.",
          fact: "Jo cheezein bijli ko behne deti hain unhe 'conductor' kehte hain, jaise tamba aur loha." },
        current: { name: "Bijli ki dhaara (Current)", short: "Current", tag: "Behti hui bijli",
          what: "Chamakte peele dots bijli ki dhaara dikhate hain. Ye tabhi chalti hai jab raasta poora gol ho: battery se bulb tak aur wapas battery tak.",
          real: "Jaise race track par gaadiyan tabhi daudti hain jab track kahin se toota na ho.",
          fact: "Bijli taar me bahut tez chalti hai, switch dabate hi bulb turant jal jaata hai." }
      },
      quiz: [
        { q: "Bulb kab jalta hai?", o: ["Jab battery akeli ho", "Jab switch OFF ho", "Jab circuit poora gol ho", "Jab taar kata ho"],
          why: "Bijli ko battery se bulb tak aur wapas aane ke liye poora raasta chahiye." },
        { q: "Switch ka kaam kya hai?", o: ["Raasta jodna ya todna", "Bijli banana", "Roshni dena", "Battery charge karna"],
          why: "Switch sirf raasta kholta ya band karta hai." },
        { q: "Circuit me bijli kahan se aati hai?", o: ["Bulb se", "Battery se", "Switch se", "Board se"],
          why: "Battery ke chemicals bijli ko dhakka dete hain." },
        { q: "Taar ke andar kya hota hai?", o: ["Lakdi", "Plastic", "Kaanch", "Tamba (copper)"],
          why: "Tamba ek accha conductor hai, bijli usme aasani se behti hai." },
        { q: "Agar taar beech me kat jaaye to kya hoga?", o: ["Bulb aur tez jalega", "Bulb bujh jaayega", "Battery phat jaayegi", "Kuch nahi hoga"],
          why: "Raasta toot gaya to bijli aage nahi ja sakti, isliye bulb bujh jaata hai." },
        { q: "Circuit me ghoomne wali cheez ko kya kehte hain?", o: ["Current (bijli ki dhaara)", "Hawa", "Paani", "Awaaz"],
          why: "Taar me behti bijli ko current kehte hain." }
      ]
    },

    en: {
      tagline: "Electricity travels in a closed loop",
      intro: '<strong>Let\'s light the bulb!</strong> Press "Switch ON" and watch electricity flow. Then press "Cut wire" to see what happens when the path breaks.',
      ui: {
        sw_on: "🔘 Switch ON", sw_off: "🔘 Switch OFF",
        cut: "✂️ Cut wire", join: "🔗 Join wire",
        lit: "💡 The circuit is complete! Electricity flows and the bulb lights up",
        off: "The switch is open. The path is broken, so the bulb went off",
        broken: "✂️ The wire is cut! The path is not complete, so the bulb cannot light",
        fixed: "🔗 The wire is joined. Now switch ON and see"
      },
      parts: {
        battery: { name: "Battery", tag: "A box of electricity",
          what: "Inside a battery are chemicals that push electricity. It has two ends: plus (+) and minus (−). Electricity leaves from + and comes back to −.",
          real: "Remotes, clocks and toys use batteries like this.",
          fact: "Alessandro Volta made the first battery in 1800. The word 'volt' comes from his name." },
        switch: { name: "Switch", tag: "Opens and closes the path",
          what: "When the switch is ON, a metal strip joins the path and electricity can flow. When it is OFF, the path breaks.",
          real: "You use wall switches at home to turn fans and lights on.",
          fact: "A switch does not make electricity. It only joins or breaks the path." },
        bulb: { name: "Bulb", tag: "Gives light",
          what: "When electricity passes through the thin wire inside the bulb (the filament), the wire gets so hot that it glows.",
          real: "Like iron that glows red when it gets very hot.",
          fact: "Today's LED bulbs give more light using less electricity." },
        wire: { name: "Wire", tag: "The road for electricity",
          what: "Inside a wire is copper, which electricity flows through easily. A plastic cover on top keeps us from getting a shock.",
          real: "Pipes are for water; wires are for electricity.",
          fact: "Things that let electricity flow are called conductors, like copper and iron." },
        current: { name: "Electric current", short: "Current", tag: "Moving electricity",
          what: "The glowing yellow dots show the electric current. It only moves when the path is a full loop: from the battery to the bulb and back to the battery.",
          real: "Like cars on a race track that can only race if the track is not broken anywhere.",
          fact: "Electricity moves so fast in a wire that the bulb lights the moment you press the switch." }
      },
      quiz: [
        { q: "When does the bulb light up?", o: ["When the battery is alone", "When the switch is OFF", "When the circuit is a complete loop", "When the wire is cut"],
          why: "Electricity needs a full path from the battery to the bulb and back." },
        { q: "What does a switch do?", o: ["Joins or breaks the path", "Makes electricity", "Gives light", "Charges the battery"],
          why: "A switch only opens or closes the path." },
        { q: "Where does the electricity in the circuit come from?", o: ["The bulb", "The battery", "The switch", "The board"],
          why: "The chemicals in the battery push the electricity." },
        { q: "What is inside a wire?", o: ["Wood", "Plastic", "Glass", "Copper"],
          why: "Copper is a good conductor, so electricity flows through it easily." },
        { q: "What happens if the wire is cut in the middle?", o: ["The bulb gets brighter", "The bulb goes off", "The battery bursts", "Nothing happens"],
          why: "When the path breaks, electricity cannot go on, so the bulb goes off." },
        { q: "What do we call the electricity moving around a circuit?", o: ["Current", "Air", "Water", "Sound"],
          why: "Electricity flowing in a wire is called current." }
      ]
    },

    hi: {
      tagline: "बिजली एक गोल रास्ते में घूमती है",
      intro: '<strong>चलो बल्ब जलाएँ!</strong> "स्विच ON करो" दबाओ और देखो बिजली कैसे घूमती है। फिर "तार काटो" दबाकर देखो क्या होता है जब रास्ता टूट जाता है।',
      ui: {
        sw_on: "🔘 स्विच ON करो", sw_off: "🔘 स्विच OFF करो",
        cut: "✂️ तार काटो", join: "🔗 तार जोड़ो",
        lit: "💡 सर्किट पूरा हुआ! बिजली घूम रही है और बल्ब जल गया",
        off: "स्विच खुला है। रास्ता टूटा, इसलिए बल्ब बुझ गया",
        broken: "✂️ तार कटा हुआ है! रास्ता पूरा नहीं, इसलिए बल्ब नहीं जलेगा",
        fixed: "🔗 तार जुड़ गया। अब स्विच ON करके देखो"
      },
      parts: {
        battery: { name: "बैटरी", tag: "बिजली का डिब्बा",
          what: "बैटरी के अंदर केमिकल होते हैं जो बिजली को धक्का देते हैं। इसके दो सिरे होते हैं: प्लस (+) और माइनस (−)। बिजली + से निकलकर − में वापस आती है।",
          real: "रिमोट, घड़ी और खिलौनों में यही बैटरी लगती है।",
          fact: "पहली बैटरी 1800 में अलेस्सांद्रो वोल्टा ने बनाई थी, इसलिए 'वोल्ट' नाम उन्हीं से आया।" },
        switch: { name: "स्विच", tag: "रास्ता खोलने-बंद करने वाला",
          what: "स्विच ON करने पर धातु की पट्टी रास्ता जोड़ देती है और बिजली बह सकती है। OFF करने पर रास्ता टूट जाता है।",
          real: "घर की दीवार पर लगे स्विच से तुम पंखा और लाइट चलाते हो।",
          fact: "स्विच बिजली नहीं बनाता, वह सिर्फ़ रास्ता जोड़ता या तोड़ता है।" },
        bulb: { name: "बल्ब", tag: "रोशनी देने वाला",
          what: "जब बिजली बल्ब के अंदर के पतले तार (फ़िलामेंट) से गुज़रती है, तो तार इतना गरम होता है कि चमकने लगता है।",
          real: "जैसे लोहे को बहुत गरम करो तो वह लाल चमकने लगता है।",
          fact: "आजकल LED बल्ब आते हैं जो कम बिजली में ज़्यादा रोशनी देते हैं।" },
        wire: { name: "तार", tag: "बिजली की सड़क",
          what: "तार के अंदर ताँबा होता है जिसमें बिजली आसानी से बहती है। ऊपर प्लास्टिक का कवर होता है ताकि हमें करंट न लगे।",
          real: "जैसे पानी के लिए पाइप, वैसे बिजली के लिए तार।",
          fact: "जो चीज़ें बिजली को बहने देती हैं उन्हें 'कंडक्टर' कहते हैं, जैसे ताँबा और लोहा।" },
        current: { name: "बिजली की धारा (करंट)", short: "करंट", tag: "बहती हुई बिजली",
          what: "चमकते पीले डॉट बिजली की धारा दिखाते हैं। यह तभी चलती है जब रास्ता पूरा गोल हो: बैटरी से बल्ब तक और वापस बैटरी तक।",
          real: "जैसे रेस ट्रैक पर गाड़ियाँ तभी दौड़ती हैं जब ट्रैक कहीं से टूटा न हो।",
          fact: "बिजली तार में बहुत तेज़ चलती है, स्विच दबाते ही बल्ब तुरंत जल जाता है।" }
      },
      quiz: [
        { q: "बल्ब कब जलता है?", o: ["जब बैटरी अकेली हो", "जब स्विच OFF हो", "जब सर्किट पूरा गोल हो", "जब तार कटा हो"],
          why: "बिजली को बैटरी से बल्ब तक और वापस आने के लिए पूरा रास्ता चाहिए।" },
        { q: "स्विच का काम क्या है?", o: ["रास्ता जोड़ना या तोड़ना", "बिजली बनाना", "रोशनी देना", "बैटरी चार्ज करना"],
          why: "स्विच सिर्फ़ रास्ता खोलता या बंद करता है।" },
        { q: "सर्किट में बिजली कहाँ से आती है?", o: ["बल्ब से", "बैटरी से", "स्विच से", "बोर्ड से"],
          why: "बैटरी के केमिकल बिजली को धक्का देते हैं।" },
        { q: "तार के अंदर क्या होता है?", o: ["लकड़ी", "प्लास्टिक", "काँच", "ताँबा"],
          why: "ताँबा एक अच्छा कंडक्टर है, बिजली उसमें आसानी से बहती है।" },
        { q: "अगर तार बीच में कट जाए तो क्या होगा?", o: ["बल्ब और तेज़ जलेगा", "बल्ब बुझ जाएगा", "बैटरी फट जाएगी", "कुछ नहीं होगा"],
          why: "रास्ता टूट गया तो बिजली आगे नहीं जा सकती, इसलिए बल्ब बुझ जाता है।" },
        { q: "सर्किट में घूमने वाली चीज़ को क्या कहते हैं?", o: ["करंट (बिजली की धारा)", "हवा", "पानी", "आवाज़"],
          why: "तार में बहती बिजली को करंट कहते हैं।" }
      ]
    },

    mr: {
      tagline: "वीज एका गोल रस्त्यातून फिरते",
      intro: '<strong>चला बल्ब लावूया!</strong> "स्विच ON करा" दाबा आणि बघा वीज कशी फिरते. मग "वायर कापा" दाबून बघा रस्ता तुटल्यावर काय होतं.',
      ui: {
        sw_on: "🔘 स्विच ON करा", sw_off: "🔘 स्विच OFF करा",
        cut: "✂️ वायर कापा", join: "🔗 वायर जोडा",
        lit: "💡 सर्किट पूर्ण झालं! वीज फिरतेय आणि बल्ब लागला",
        off: "स्विच उघडा आहे. रस्ता तुटला, म्हणून बल्ब विझला",
        broken: "✂️ वायर कापलेली आहे! रस्ता पूर्ण नाही, म्हणून बल्ब लागणार नाही",
        fixed: "🔗 वायर जोडली. आता स्विच ON करून बघा"
      },
      parts: {
        battery: { name: "बॅटरी", tag: "विजेचा डबा",
          what: "बॅटरीच्या आत रसायनं असतात, ती विजेला ढकलतात. तिला दोन टोकं असतात: प्लस (+) आणि मायनस (−). वीज + मधून निघून − मध्ये परत येते.",
          real: "रिमोट, घड्याळ आणि खेळण्यांमध्ये अशीच बॅटरी असते.",
          fact: "पहिली बॅटरी 1800 मध्ये अलेस्सांद्रो व्होल्टा यांनी बनवली, म्हणून 'व्होल्ट' हे नाव त्यांच्यावरून आलं." },
        switch: { name: "स्विच", tag: "रस्ता उघडणारा-बंद करणारा",
          what: "स्विच ON केल्यावर धातूची पट्टी रस्ता जोडते आणि वीज वाहू शकते. OFF केल्यावर रस्ता तुटतो.",
          real: "घराच्या भिंतीवरच्या स्विचने तुम्ही पंखा आणि लाइट लावता.",
          fact: "स्विच वीज तयार करत नाही, तो फक्त रस्ता जोडतो किंवा तोडतो." },
        bulb: { name: "बल्ब", tag: "प्रकाश देणारा",
          what: "बल्बच्या आतल्या बारीक तारेतून (फिलामेंट) वीज जाते तेव्हा ती तार इतकी गरम होते की चमकू लागते.",
          real: "लोखंड खूप गरम केलं की ते लाल चमकू लागतं, तसंच.",
          fact: "आजकाल LED बल्ब येतात, ते कमी विजेत जास्त प्रकाश देतात." },
        wire: { name: "वायर (तार)", short: "वायर", tag: "विजेचा रस्ता",
          what: "वायरच्या आत तांबं असतं, त्यातून वीज सहज वाहते. वर प्लास्टिकचं आवरण असतं म्हणजे आपल्याला शॉक बसत नाही.",
          real: "पाण्यासाठी पाईप, तशी विजेसाठी वायर.",
          fact: "ज्या वस्तू वीज वाहू देतात त्यांना 'कंडक्टर' (वाहक) म्हणतात, जसं तांबं आणि लोखंड." },
        current: { name: "विजेचा प्रवाह (करंट)", short: "करंट", tag: "वाहणारी वीज",
          what: "चमकणारे पिवळे ठिपके विजेचा प्रवाह दाखवतात. रस्ता पूर्ण गोल असेल तेव्हाच तो चालतो: बॅटरीपासून बल्बपर्यंत आणि परत बॅटरीपर्यंत.",
          real: "रेस ट्रॅक कुठेही तुटलेला नसेल तेव्हाच गाड्या धावू शकतात, तसंच.",
          fact: "वायरमध्ये वीज इतकी वेगाने जाते की स्विच दाबताच बल्ब लगेच लागतो." }
      },
      quiz: [
        { q: "बल्ब कधी लागतो?", o: ["बॅटरी एकटी असताना", "स्विच OFF असताना", "सर्किट पूर्ण गोल असताना", "वायर कापलेली असताना"],
          why: "विजेला बॅटरीपासून बल्बपर्यंत आणि परत येण्यासाठी पूर्ण रस्ता लागतो." },
        { q: "स्विचचं काम काय आहे?", o: ["रस्ता जोडणं किंवा तोडणं", "वीज तयार करणं", "प्रकाश देणं", "बॅटरी चार्ज करणं"],
          why: "स्विच फक्त रस्ता उघडतो किंवा बंद करतो." },
        { q: "सर्किटमध्ये वीज कुठून येते?", o: ["बल्बमधून", "बॅटरीमधून", "स्विचमधून", "बोर्डमधून"],
          why: "बॅटरीतली रसायनं विजेला ढकलतात." },
        { q: "वायरच्या आत काय असतं?", o: ["लाकूड", "प्लास्टिक", "काच", "तांबं"],
          why: "तांबं चांगला वाहक आहे, त्यातून वीज सहज वाहते." },
        { q: "वायर मध्येच कापली तर काय होईल?", o: ["बल्ब जास्त चमकेल", "बल्ब विझेल", "बॅटरी फुटेल", "काहीच होणार नाही"],
          why: "रस्ता तुटला तर वीज पुढे जाऊ शकत नाही, म्हणून बल्ब विझतो." },
        { q: "सर्किटमध्ये फिरणाऱ्या गोष्टीला काय म्हणतात?", o: ["करंट (विजेचा प्रवाह)", "हवा", "पाणी", "आवाज"],
          why: "वायरमधून वाहणाऱ्या विजेला करंट म्हणतात." }
      ]
    }
  },

  build: function (api) {
    var THREE = api.THREE, mat = api.mat, box = api.box, cyl = api.cyl, sphere = api.sphere;
    var V = function (x, y, z) { return new THREE.Vector3(x, y, z); };
    var s = api.state;
    var Y = 0.2;

    /* Lakdi ka board */
    api.decor(box(10, 0.3, 5.2, mat(0xc98f55, { rough: 0.8 }), -0.6, 0, 0));

    /* Battery (letti hui) */
    (function () {
      var g = new THREE.Group();
      var body = cyl(0.5, 0.5, 1.7, mat(0x23262f, { rough: 0.4 }), 0, 0, 0, 28);
      body.rotation.z = Math.PI / 2; g.add(body);
      var band = cyl(0.51, 0.51, 0.55, mat(0xffb020, { rough: 0.4 }), 0.55, 0, 0, 28);
      band.rotation.z = Math.PI / 2; g.add(band);
      var nub = cyl(0.16, 0.16, 0.16, mat(0xd9dde6, { metal: 0.9, rough: 0.2 }), 0.92, 0, 0, 16);
      nub.rotation.z = Math.PI / 2; g.add(nub);
      var neg = cyl(0.34, 0.34, 0.04, mat(0xd9dde6, { metal: 0.9, rough: 0.2 }), -0.86, 0, 0, 20);
      neg.rotation.z = Math.PI / 2; g.add(neg);
      /* + aur − ke chinh */
      var red = mat(0xd12f4c), blue = mat(0x2b6bff);
      g.add(box(0.3, 0.02, 0.08, red, 0.55, 0.52, 0));
      g.add(box(0.08, 0.02, 0.3, red, 0.55, 0.52, 0));
      g.add(box(0.3, 0.02, 0.08, blue, -0.5, 0.51, 0));
      api.addPart("battery", g, V(-3, 0.65, 0));
    })();

    /* Switch */
    var lever;
    (function () {
      var g = new THREE.Group();
      g.add(box(2.0, 0.2, 0.9, mat(0x3a4bd0, { rough: 0.5 }), 0, 0, 0));
      var metal = mat(0xd9dde6, { metal: 0.9, rough: 0.25 });
      g.add(cyl(0.12, 0.12, 0.35, metal, -0.7, 0.25, 0, 12));
      g.add(cyl(0.12, 0.12, 0.35, metal, 0.7, 0.25, 0, 12));
      lever = new THREE.Group();
      lever.position.set(-0.7, 0.42, 0);
      lever.add(box(1.5, 0.07, 0.22, metal, 0.72, 0, 0));
      lever.add(cyl(0.09, 0.09, 0.35, mat(0xd12f4c), 1.45, 0.14, 0, 12));   // haath lagane ki jagah
      lever.rotation.z = 0.6;
      g.add(lever);
      api.addPart("switch", g, V(0, Y, 1.6));
    })();

    /* Bulb */
    var glassM = mat(0xfff6cc, { glow: 0xffd24a, glowLevel: 0, opacity: 0.55, rough: 0.1 });
    var filM = mat(0x886633, { glow: 0xff8a00, glowLevel: 0 });
    var bulbLight = new THREE.PointLight(0xffd27a, 0, 9);
    (function () {
      var g = new THREE.Group();
      g.add(cyl(0.55, 0.65, 0.3, mat(0x2b2f3a), 0, 0.15, 0, 20));           // holder
      g.add(cyl(0.3, 0.3, 0.45, mat(0xc9ced8, { metal: 0.9, rough: 0.3 }), 0, 0.5, 0, 20));
      for (var i = 0; i < 3; i++) g.add(cyl(0.32, 0.32, 0.04, mat(0x9aa3b5, { metal: 0.9 }), 0, 0.38 + i * 0.12, 0, 20));
      var glass = sphere(0.72, glassM, 0, 1.3, 0, 28);
      g.add(glass);
      var fil = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.025, 6, 16, Math.PI), filM);
      fil.position.set(0, 1.25, 0);
      g.add(fil);
      g.add(cyl(0.015, 0.015, 0.5, filM, -0.16, 1.0, 0, 6));
      g.add(cyl(0.015, 0.015, 0.5, filM, 0.16, 1.0, 0, 6));
      bulbLight.position.set(0, 1.3, 0);
      g.add(bulbLight);
      api.addPart("bulb", g, V(3, Y, 0));
    })();

    /* Taar ka gol raasta: battery + -> switch -> bulb -> battery − */
    var loop = [
      V(-2.08, 0.65, 0), V(-1.5, Y + 0.1, 0), V(-1.5, Y + 0.1, 1.6), V(-0.7, Y + 0.1, 1.6),
      V(0.7, Y + 0.1, 1.6), V(3, Y + 0.1, 1.6), V(3, Y + 0.1, 0.55),
      V(3, Y + 0.1, -0.55), V(3, Y + 0.1, -1.7), V(-0.4, Y + 0.1, -1.7),
      V(-1.4, Y + 0.1, -1.7), V(-4.4, Y + 0.1, -1.7), V(-4.4, Y + 0.1, 0), V(-3.9, 0.65, 0)
    ];
    var wireM = mat(0xd12f4c, { rough: 0.5 });
    var cutPiece = null;
    (function () {
      var g = new THREE.Group();
      for (var i = 0; i < loop.length - 1; i++) {
        if (i === 3) continue;          // switch ka hissa
        if (i === 6) continue;          // bulb ke andar
        var piece = api.rod(loop[i], loop[i + 1], 0.07, wireM);
        if (i === 9) cutPiece = piece;  // yahi tukda "kaata" jaata hai
        g.add(piece);
      }
      /* kate hue taar ke tambe wale sire */
      var copper = mat(0xe08a3c, { metal: 0.8, rough: 0.3 });
      g.add(api.rod(V(-0.4, Y + 0.1, -1.7), V(-0.55, Y + 0.1, -1.7), 0.04, copper));
      g.add(api.rod(V(-1.4, Y + 0.1, -1.7), V(-1.25, Y + 0.1, -1.7), 0.04, copper));
      api.addPart("wire", g, V(0, 0, 0));
    })();

    /* Current ke dots */
    var path = new THREE.CurvePath();
    for (var i = 0; i < loop.length - 1; i++) path.add(new THREE.LineCurve3(loop[i], loop[i + 1]));
    path.add(new THREE.LineCurve3(loop[loop.length - 1], loop[0]));   // battery ke andar se wapas
    var dots = new THREE.Group();
    var dotM = mat(0xffe14a, { rough: 0.3 });
    var N = 26;
    for (var d = 0; d < N; d++) dots.add(sphere(0.1, dotM, 0, 0, 0, 10));
    api.addPart("current", dots, V(0, 0, 0), null, { focus: false });

    s.on = false; s.cut = false; s.flow = 0; s.lever = lever;
    s.glassM = glassM; s.filM = filM; s.light = bulbLight; s.dots = dots; s.path = path; s.N = N;
    s.cutPiece = cutPiece;

    function closed() { return s.on && !s.cut; }
    s.closed = closed;
    s.toggleSwitch = function () {
      s.on = !s.on;
      api.setButton("switch", s.on ? "sw_off" : "sw_on");
      if (closed()) api.setStatus("lit", 4000);
      else if (s.on && s.cut) api.setStatus("broken", 4500);
      else api.setStatus("off", 3500);
    };
    s.toggleCut = function () {
      s.cut = !s.cut;
      api.setButton("cut", s.cut ? "join" : "cut");
      cutPiece.visible = !s.cut;
      if (s.cut) api.setStatus("broken", 4500);
      else if (closed()) api.setStatus("lit", 4000);
      else api.setStatus("fixed", 3500);
    };
  },

  update: function (api, dt, t) {
    var s = api.state;
    var closed = s.closed();

    /* lever dheere se ghoome */
    var want = s.on ? 0 : 0.6;
    s.lever.rotation.z += (want - s.lever.rotation.z) * Math.min(1, dt * 10);

    /* bulb ki roshni */
    var glow = closed ? 1 : 0;
    s.glassM.emissiveIntensity += (glow * 1.1 - s.glassM.emissiveIntensity) * Math.min(1, dt * 8);
    s.filM.emissiveIntensity += (glow * 2.0 - s.filM.emissiveIntensity) * Math.min(1, dt * 8);
    s.light.intensity += (glow * 1.6 - s.light.intensity) * Math.min(1, dt * 8);

    /* dots: raasta poora ho tabhi chalen */
    if (closed && !api.reduceMotion) s.flow = (s.flow + dt * 0.07) % 1;
    for (var i = 0; i < s.N; i++) {
      var u = (i / s.N + s.flow) % 1;
      s.dots.children[i].position.copy(s.path.getPointAt(u));
    }
  }
});
