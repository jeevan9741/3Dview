/* Topic: Robot aur sensor */
TL.start({
  id: "robot",
  camera: { theta: 0.5, phi: 0.85, radius: 15, target: [0, 0.3, 0], min: 5, max: 26 },
  autoRotate: false,
  order: ["controller", "sensor", "motor", "battery", "led"],
  parts: {
    controller: { emoji: "🧠" }, sensor: { emoji: "👀" }, motor: { emoji: "⚙️" },
    battery: { emoji: "🔋" }, led: { emoji: "🚨" }
  },
  quiz: [
    { part: "sensor", a: 1 }, { part: "controller", a: 0 }, { part: "motor", a: 2 },
    { part: "sensor", a: 3 }, { part: "battery", a: 1 }, { part: "controller", a: 2 }
  ],
  actions: [
    { id: "fwd", label: "fwd", main: true, onClick: function (api) { api.state.cmd("F"); } },
    { id: "left", label: "left", onClick: function (api) { api.state.cmd("L"); } },
    { id: "right", label: "right", onClick: function (api) { api.state.cmd("R"); } },
    { id: "auto", label: "auto", onClick: function (api) { api.state.toggleAuto(); } }
  ],

  text: {
    hinglish: {
      tagline: "Robot sochta hai, dekhta hai aur chalta hai",
      intro: '<strong>Robot ko chalao!</strong> "Aage", "Baayein" aur "Daayein" dabakar robot ko command do. Deewar ke paas jaoge to uska sensor use rok dega. "Khud chalo" dabao aur dekho robot khud raasta kaise dhoondta hai.',
      ui: {
        fwd: "⬆ Aage", left: "↰ Baayein", right: "↱ Daayein", auto: "🤖 Khud chalo", stop: "✋ Ruko",
        blocked: "👀 Sensor ne rukawat dekhi! Robot ruk gaya",
        auto_on: "🤖 Robot khud chal raha hai: rukawat dikhi to mud jaata hai",
        auto_off: "✋ Robot ruk gaya. Ab tum command do"
      },
      parts: {
        controller: { name: "Controller (Robot ka dimaag)", short: "Controller", tag: "Robot ka dimaag",
          what: "Controller ek chhota computer hai. Ye sensor se khabar leta hai, program ke hisaab se sochta hai aur motor ko batata hai ki kya karna hai.",
          real: "Jaise tumhara dimaag aankhon se dekh kar pairon ko chalne ka hukum deta hai.",
          fact: "Robot wahi karta hai jo program me likha ho. Program insaan likhte hain." },
        sensor: { name: "Distance Sensor", short: "Sensor", tag: "Robot ki aankhein",
          what: "Ye sensor awaaz ki lehrein bhejta hai jo samne ki cheez se takra kar wapas aati hain. Isse robot jaan leta hai ki deewar kitni door hai.",
          real: "Chamgaadad (bat) bhi andhere me isi tarah awaaz ki goonj se raasta dhoondta hai.",
          fact: "Gaadiyon ke peeche lage parking sensor bhi aise hi kaam karte hain." },
        motor: { name: "Motor aur Pahiye", short: "Motor", tag: "Robot ke pair",
          what: "Motor bijli se ghoomti hai aur pahiyon ko chalati hai. Ek taraf ke pahiye tez ghoome to robot mud jaata hai.",
          real: "Khilona car me bhi chhoti motor pahiye ghumati hai.",
          fact: "Mangal (Mars) grah par chalne wale robot rover ke 6 pahiye hain." },
        battery: { name: "Battery Pack", short: "Battery", tag: "Robot ki taakat",
          what: "Battery controller, sensor aur motor sabko bijli deti hai. Battery khatam to robot ruk jaata hai.",
          real: "Jaise humein khaane se taakat milti hai.",
          fact: "Kai robot vacuum cleaner battery kam hone par khud charging jagah par chale jaate hain." },
        led: { name: "Status Light (LED)", short: "LED", tag: "Robot ka mood batane wali batti",
          what: "LED ka rang batata hai robot kya kar raha hai: hara matlab chal raha hai, laal matlab ruk gaya, neela matlab intezaar.",
          real: "Traffic signal ki tarah: rang dekh kar samajh jaate hain.",
          fact: "LED bahut kam bijli leti hai aur saalon tak chalti hai." }
      },
      quiz: [
        { q: "Robot ko deewar kaise dikhti hai?", o: ["Motor se", "Sensor se", "Battery se", "LED se"],
          why: "Sensor samne ki doori naap kar controller ko batata hai." },
        { q: "Robot ka dimaag kaun sa part hai?", o: ["Controller", "Pahiya", "Battery", "LED"],
          why: "Controller sochta hai aur baaki parts ko hukum deta hai." },
        { q: "Robot ko chalata kaun hai?", o: ["Sensor", "LED", "Motor aur pahiye", "Antenna"],
          why: "Motor pahiyon ko ghuma kar robot ko aage le jaati hai." },
        { q: "Sensor ko rukawat dikhe to robot kya karta hai?", o: ["Aur tez chalta hai", "So jaata hai", "Gaana gaata hai", "Ruk jaata hai ya mud jaata hai"],
          why: "Program kehta hai: rukawat dikhe to ruko ya mudo." },
        { q: "Robot ko bijli kahan se milti hai?", o: ["Sensor se", "Battery se", "Pahiyon se", "Hawa se"],
          why: "Battery sab parts ko bijli deti hai." },
        { q: "Robot kya karna hai, ye kaun tay karta hai?", o: ["Robot khud sapna dekhta hai", "Pahiye", "Insaan ka likha program", "Battery"],
          why: "Robot program ke hisaab se chalta hai jo insaan likhte hain." }
      ]
    },

    en: {
      tagline: "A robot senses, thinks and moves",
      intro: '<strong>Drive the robot!</strong> Press "Forward", "Left" and "Right" to give commands. Near a wall, its sensor will stop it. Press "Drive itself" and watch the robot find its own way.',
      ui: {
        fwd: "⬆ Forward", left: "↰ Left", right: "↱ Right", auto: "🤖 Drive itself", stop: "✋ Stop",
        blocked: "👀 The sensor saw something in the way! The robot stopped",
        auto_on: "🤖 The robot is driving itself: it turns when it sees something in the way",
        auto_off: "✋ The robot stopped. Now you give the commands"
      },
      parts: {
        controller: { name: "Controller (robot's brain)", short: "Controller", tag: "The robot's brain",
          what: "The controller is a tiny computer. It gets news from the sensor, thinks using its program, and tells the motors what to do.",
          real: "Like your brain seeing with your eyes and telling your legs to walk.",
          fact: "A robot does only what its program says. People write the programs." },
        sensor: { name: "Distance Sensor", short: "Sensor", tag: "The robot's eyes",
          what: "This sensor sends out sound waves that bounce off things in front and come back. That tells the robot how far away the wall is.",
          real: "Bats find their way in the dark with echoes in the same way.",
          fact: "Parking sensors on the back of cars work like this too." },
        motor: { name: "Motors and Wheels", short: "Motor", tag: "The robot's legs",
          what: "Motors spin using electricity and turn the wheels. If the wheels on one side spin faster, the robot turns.",
          real: "A toy car also has a small motor that turns its wheels.",
          fact: "The robot rovers driving on Mars have 6 wheels." },
        battery: { name: "Battery Pack", short: "Battery", tag: "The robot's energy",
          what: "The battery gives electricity to the controller, sensor and motors. When the battery runs out, the robot stops.",
          real: "Just like food gives us energy.",
          fact: "Many robot vacuum cleaners drive back to their charger by themselves when the battery is low." },
        led: { name: "Status Light (LED)", short: "LED", tag: "The light that shows the robot's mood",
          what: "The LED colour shows what the robot is doing: green means moving, red means stopped, blue means waiting.",
          real: "Like a traffic signal: you understand by the colour.",
          fact: "LEDs use very little electricity and last for years." }
      },
      quiz: [
        { q: "How does the robot see the wall?", o: ["With the motor", "With the sensor", "With the battery", "With the LED"],
          why: "The sensor measures the distance ahead and tells the controller." },
        { q: "Which part is the robot's brain?", o: ["Controller", "Wheel", "Battery", "LED"],
          why: "The controller thinks and gives orders to the other parts." },
        { q: "What makes the robot move?", o: ["Sensor", "LED", "Motors and wheels", "Antenna"],
          why: "The motors turn the wheels and move the robot forward." },
        { q: "What does the robot do when the sensor sees something in the way?", o: ["Goes faster", "Falls asleep", "Sings a song", "Stops or turns"],
          why: "The program says: if something is in the way, stop or turn." },
        { q: "Where does the robot get electricity from?", o: ["The sensor", "The battery", "The wheels", "The air"],
          why: "The battery gives electricity to every part." },
        { q: "Who decides what the robot should do?", o: ["The robot dreams it", "The wheels", "A program written by people", "The battery"],
          why: "A robot follows a program that people write." }
      ]
    },

    hi: {
      tagline: "रोबोट सोचता है, देखता है और चलता है",
      intro: '<strong>रोबोट को चलाओ!</strong> "आगे", "बाएँ" और "दाएँ" दबाकर रोबोट को कमांड दो। दीवार के पास जाओगे तो उसका सेंसर उसे रोक देगा। "खुद चलो" दबाओ और देखो रोबोट खुद रास्ता कैसे ढूँढता है।',
      ui: {
        fwd: "⬆ आगे", left: "↰ बाएँ", right: "↱ दाएँ", auto: "🤖 खुद चलो", stop: "✋ रुको",
        blocked: "👀 सेंसर ने रुकावट देखी! रोबोट रुक गया",
        auto_on: "🤖 रोबोट खुद चल रहा है: रुकावट दिखी तो मुड़ जाता है",
        auto_off: "✋ रोबोट रुक गया। अब तुम कमांड दो"
      },
      parts: {
        controller: { name: "कंट्रोलर (रोबोट का दिमाग)", short: "कंट्रोलर", tag: "रोबोट का दिमाग",
          what: "कंट्रोलर एक छोटा कंप्यूटर है। यह सेंसर से खबर लेता है, प्रोग्राम के हिसाब से सोचता है और मोटर को बताता है कि क्या करना है।",
          real: "जैसे तुम्हारा दिमाग आँखों से देखकर पैरों को चलने का हुक्म देता है।",
          fact: "रोबोट वही करता है जो प्रोग्राम में लिखा हो। प्रोग्राम इंसान लिखते हैं।" },
        sensor: { name: "डिस्टेंस सेंसर", short: "सेंसर", tag: "रोबोट की आँखें",
          what: "यह सेंसर आवाज़ की लहरें भेजता है जो सामने की चीज़ से टकराकर वापस आती हैं। इससे रोबोट जान लेता है कि दीवार कितनी दूर है।",
          real: "चमगादड़ भी अँधेरे में इसी तरह आवाज़ की गूँज से रास्ता ढूँढता है।",
          fact: "गाड़ियों के पीछे लगे पार्किंग सेंसर भी ऐसे ही काम करते हैं।" },
        motor: { name: "मोटर और पहिए", short: "मोटर", tag: "रोबोट के पैर",
          what: "मोटर बिजली से घूमती है और पहियों को चलाती है। एक तरफ़ के पहिए तेज़ घूमें तो रोबोट मुड़ जाता है।",
          real: "खिलौना कार में भी छोटी मोटर पहिए घुमाती है।",
          fact: "मंगल ग्रह पर चलने वाले रोबोट रोवर के 6 पहिए हैं।" },
        battery: { name: "बैटरी पैक", short: "बैटरी", tag: "रोबोट की ताकत",
          what: "बैटरी कंट्रोलर, सेंसर और मोटर सबको बिजली देती है। बैटरी खत्म तो रोबोट रुक जाता है।",
          real: "जैसे हमें खाने से ताकत मिलती है।",
          fact: "कई रोबोट वैक्यूम क्लीनर बैटरी कम होने पर खुद चार्जिंग की जगह पर चले जाते हैं।" },
        led: { name: "स्टेटस लाइट (LED)", short: "LED", tag: "रोबोट का मूड बताने वाली बत्ती",
          what: "LED का रंग बताता है रोबोट क्या कर रहा है: हरा मतलब चल रहा है, लाल मतलब रुक गया, नीला मतलब इंतज़ार।",
          real: "ट्रैफ़िक सिग्नल की तरह: रंग देखकर समझ जाते हैं।",
          fact: "LED बहुत कम बिजली लेती है और सालों तक चलती है।" }
      },
      quiz: [
        { q: "रोबोट को दीवार कैसे दिखती है?", o: ["मोटर से", "सेंसर से", "बैटरी से", "LED से"],
          why: "सेंसर सामने की दूरी नापकर कंट्रोलर को बताता है।" },
        { q: "रोबोट का दिमाग कौन-सा पार्ट है?", o: ["कंट्रोलर", "पहिया", "बैटरी", "LED"],
          why: "कंट्रोलर सोचता है और बाकी पार्ट्स को हुक्म देता है।" },
        { q: "रोबोट को कौन चलाता है?", o: ["सेंसर", "LED", "मोटर और पहिए", "एंटीना"],
          why: "मोटर पहियों को घुमाकर रोबोट को आगे ले जाती है।" },
        { q: "सेंसर को रुकावट दिखे तो रोबोट क्या करता है?", o: ["और तेज़ चलता है", "सो जाता है", "गाना गाता है", "रुक जाता है या मुड़ जाता है"],
          why: "प्रोग्राम कहता है: रुकावट दिखे तो रुको या मुड़ो।" },
        { q: "रोबोट को बिजली कहाँ से मिलती है?", o: ["सेंसर से", "बैटरी से", "पहियों से", "हवा से"],
          why: "बैटरी सब पार्ट्स को बिजली देती है।" },
        { q: "रोबोट को क्या करना है, यह कौन तय करता है?", o: ["रोबोट खुद सपना देखता है", "पहिए", "इंसान का लिखा प्रोग्राम", "बैटरी"],
          why: "रोबोट प्रोग्राम के हिसाब से चलता है जो इंसान लिखते हैं।" }
      ]
    },

    mr: {
      tagline: "रोबोट बघतो, विचार करतो आणि चालतो",
      intro: '<strong>रोबोट चालवा!</strong> "पुढे", "डावीकडे" आणि "उजवीकडे" दाबून रोबोटला कमांड द्या. भिंतीजवळ गेलात तर त्याचा सेन्सर त्याला थांबवेल. "स्वतः चाल" दाबा आणि बघा रोबोट स्वतः रस्ता कसा शोधतो.',
      ui: {
        fwd: "⬆ पुढे", left: "↰ डावीकडे", right: "↱ उजवीकडे", auto: "🤖 स्वतः चाल", stop: "✋ थांब",
        blocked: "👀 सेन्सरला अडथळा दिसला! रोबोट थांबला",
        auto_on: "🤖 रोबोट स्वतः चालतोय: अडथळा दिसला की वळतो",
        auto_off: "✋ रोबोट थांबला. आता तुम्ही कमांड द्या"
      },
      parts: {
        controller: { name: "कंट्रोलर (रोबोटचा मेंदू)", short: "कंट्रोलर", tag: "रोबोटचा मेंदू",
          what: "कंट्रोलर हा एक छोटा कॉम्प्युटर आहे. तो सेन्सरकडून बातमी घेतो, प्रोग्रामप्रमाणे विचार करतो आणि मोटरला काय करायचं ते सांगतो.",
          real: "जसा तुमचा मेंदू डोळ्यांनी बघून पायांना चालायला सांगतो.",
          fact: "प्रोग्राममध्ये लिहिलं असेल तेच रोबोट करतो. प्रोग्राम माणसं लिहितात." },
        sensor: { name: "डिस्टन्स सेन्सर", short: "सेन्सर", tag: "रोबोटचे डोळे",
          what: "हा सेन्सर आवाजाच्या लहरी पाठवतो, त्या समोरच्या वस्तूवर आपटून परत येतात. त्यावरून रोबोटला कळतं की भिंत किती दूर आहे.",
          real: "वटवाघूळ पण अंधारात आवाजाच्या प्रतिध्वनीने असाच रस्ता शोधतं.",
          fact: "गाड्यांच्या मागे असलेले पार्किंग सेन्सर पण असेच काम करतात." },
        motor: { name: "मोटर आणि चाकं", short: "मोटर", tag: "रोबोटचे पाय",
          what: "मोटर विजेवर फिरते आणि चाकं फिरवते. एका बाजूची चाकं जास्त वेगाने फिरली की रोबोट वळतो.",
          real: "खेळण्यातल्या गाडीतही छोटी मोटर चाकं फिरवते.",
          fact: "मंगळ ग्रहावर फिरणाऱ्या रोबोट रोव्हरला 6 चाकं आहेत." },
        battery: { name: "बॅटरी पॅक", short: "बॅटरी", tag: "रोबोटची ताकद",
          what: "बॅटरी कंट्रोलर, सेन्सर आणि मोटर सगळ्यांना वीज देते. बॅटरी संपली की रोबोट थांबतो.",
          real: "जसं आपल्याला जेवणातून ताकद मिळते.",
          fact: "अनेक रोबोट व्हॅक्यूम क्लीनर बॅटरी कमी झाली की स्वतःहून चार्जिंगच्या जागी जातात." },
        led: { name: "स्टेटस लाइट (LED)", short: "LED", tag: "रोबोटचा मूड सांगणारा दिवा",
          what: "LED चा रंग सांगतो रोबोट काय करतोय: हिरवा म्हणजे चालतोय, लाल म्हणजे थांबला, निळा म्हणजे वाट बघतोय.",
          real: "ट्रॅफिक सिग्नलसारखं: रंग बघून समजतं.",
          fact: "LED खूप कमी वीज वापरतो आणि वर्षानुवर्षं चालतो." }
      },
      quiz: [
        { q: "रोबोटला भिंत कशी दिसते?", o: ["मोटरने", "सेन्सरने", "बॅटरीने", "LED ने"],
          why: "सेन्सर समोरचं अंतर मोजून कंट्रोलरला सांगतो." },
        { q: "रोबोटचा मेंदू कोणता भाग आहे?", o: ["कंट्रोलर", "चाक", "बॅटरी", "LED"],
          why: "कंट्रोलर विचार करतो आणि बाकीच्या भागांना आज्ञा देतो." },
        { q: "रोबोटला कोण चालवतं?", o: ["सेन्सर", "LED", "मोटर आणि चाकं", "अँटेना"],
          why: "मोटर चाकं फिरवून रोबोटला पुढे नेते." },
        { q: "सेन्सरला अडथळा दिसला तर रोबोट काय करतो?", o: ["आणखी वेगाने जातो", "झोपतो", "गाणं म्हणतो", "थांबतो किंवा वळतो"],
          why: "प्रोग्राम सांगतो: अडथळा दिसला तर थांबा किंवा वळा." },
        { q: "रोबोटला वीज कुठून मिळते?", o: ["सेन्सरमधून", "बॅटरीमधून", "चाकांमधून", "हवेतून"],
          why: "बॅटरी सगळ्या भागांना वीज देते." },
        { q: "रोबोटने काय करायचं हे कोण ठरवतं?", o: ["रोबोट स्वतः स्वप्न बघतो", "चाकं", "माणसांनी लिहिलेला प्रोग्राम", "बॅटरी"],
          why: "रोबोट माणसांनी लिहिलेल्या प्रोग्रामप्रमाणे चालतो." }
      ]
    }
  },

  build: function (api) {
    var THREE = api.THREE, mat = api.mat, box = api.box, cyl = api.cyl, sphere = api.sphere;
    var s = api.state;
    var C = 1.4, H = 3;   // cell size, grid -3..3

    /* Farsh (checkerboard) */
    var tileA = mat(0xe9eef8, { rough: 0.9 }), tileB = mat(0xcdd7ea, { rough: 0.9 });
    for (var x = -H; x <= H; x++) for (var z = -H; z <= H; z++) {
      api.decor(box(C * 0.98, 0.1, C * 0.98, (x + z) % 2 === 0 ? tileA : tileB, x * C, -0.05, z * C));
    }
    /* Chaaron taraf deewar */
    var wallM = mat(0x8a94ab, { rough: 0.7 });
    var L = (2 * H + 1) * C;
    api.decor(box(L + 0.4, 0.6, 0.2, wallM, 0, 0.3, (H + 0.5) * C + 0.1));
    api.decor(box(L + 0.4, 0.6, 0.2, wallM, 0, 0.3, -(H + 0.5) * C - 0.1));
    api.decor(box(0.2, 0.6, L, wallM, (H + 0.5) * C + 0.1, 0.3, 0));
    api.decor(box(0.2, 0.6, L, wallM, -(H + 0.5) * C - 0.1, 0.3, 0));

    /* Rukawatein (rang-birange dabbe) */
    var blocks = [[1, 0], [1, -1], [-2, 0], [-2, -1], [0, -2], [2, 2], [-1, 3], [3, -2]];
    var colors = [0xff5a3c, 0xffb020, 0x12995f, 0x7a5cff];
    var blocked = {};
    blocks.forEach(function (b, i) {
      blocked[b[0] + "," + b[1]] = true;
      api.decor(box(C * 0.8, 0.9, C * 0.8, mat(colors[i % 4], { rough: 0.6 }), b[0] * C, 0.45, b[1] * C));
    });
    function isBlocked(gx, gz) {
      return Math.abs(gx) > H || Math.abs(gz) > H || !!blocked[gx + "," + gz];
    }

    /* ---------------- Robot ---------------- */
    var robot = new THREE.Group();
    api.decor(robot);
    var bodyM = mat(0xf2f4f8, { rough: 0.4 });
    robot.add(box(0.9, 0.5, 1.0, bodyM, 0, 0.45, 0));
    robot.add(box(0.7, 0.35, 0.6, bodyM, 0, 0.87, 0.05));   // sir

    /* Controller: sir ke upar hari board + chip, kaanch ke dhakkan me */
    var ctrl = new THREE.Group();
    ctrl.add(box(0.55, 0.04, 0.45, mat(0x0e8a78), 0, 1.07, 0.05));
    ctrl.add(box(0.2, 0.05, 0.2, mat(0x18181c), 0, 1.11, 0.05));
    ctrl.add(box(0.06, 0.03, 0.06, mat(0xe6b93c, { metal: 0.8 }), 0.18, 1.1, -0.1));
    ctrl.add(box(0.06, 0.03, 0.06, mat(0xe6b93c, { metal: 0.8 }), -0.18, 1.1, -0.1));
    robot.add(ctrl);
    robot.add(box(0.6, 0.18, 0.5, mat(0xbfe3ff, { opacity: 0.25, rough: 0.1 }), 0, 1.16, 0.05));

    /* Sensor: aage do "aankhein" */
    var sensor = new THREE.Group();
    sensor.add(box(0.62, 0.22, 0.06, mat(0x2b6bff), 0, 0.9, 0.38));
    [-0.17, 0.17].forEach(function (x) {
      var e = cyl(0.1, 0.1, 0.12, mat(0xd9dde6, { metal: 0.8, rough: 0.25 }), x, 0.9, 0.44, 16);
      e.rotation.x = Math.PI / 2;
      sensor.add(e);
      var pupil = cyl(0.06, 0.06, 0.02, mat(0x14161d), x, 0.9, 0.51, 12);
      pupil.rotation.x = Math.PI / 2;
      sensor.add(pupil);
    });
    robot.add(sensor);

    /* Sensor ki "lehar" (cone) */
    var beamM = new THREE.MeshBasicMaterial({ color: 0x3fd69a, transparent: true, opacity: 0.18, depthWrite: false });
    var beam = new THREE.Mesh(new THREE.ConeGeometry(0.5, C * 0.9, 20, 1, true), beamM);
    beam.rotation.x = -Math.PI / 2;
    beam.position.set(0, 0.9, 0.5 + C * 0.45);
    robot.add(beam);

    /* Motor + pahiye */
    var motor = new THREE.Group();
    var wheels = [];
    [[-0.52, 0.3], [0.52, 0.3], [-0.52, -0.3], [0.52, -0.3]].forEach(function (p) {
      var w = new THREE.Group();
      var tyre = cyl(0.24, 0.24, 0.16, mat(0x22252e, { rough: 0.8 }), 0, 0, 0, 20);
      tyre.rotation.z = Math.PI / 2;
      w.add(tyre);
      var hub = cyl(0.1, 0.1, 0.18, mat(0xffb020, { metal: 0.4 }), 0, 0, 0, 12);
      hub.rotation.z = Math.PI / 2;
      w.add(hub);
      w.position.set(p[0], 0.24, p[1]);
      motor.add(w);
      wheels.push(w);
    });
    robot.add(motor);

    /* Battery peeche */
    var batt = new THREE.Group();
    batt.add(box(0.5, 0.3, 0.14, mat(0xffc233, { rough: 0.5 }), 0, 0.5, -0.57));
    batt.add(box(0.12, 0.06, 0.04, mat(0x2b2f3a), 0, 0.57, -0.65));
    robot.add(batt);

    /* LED antenna */
    var led = new THREE.Group();
    led.add(cyl(0.025, 0.025, 0.4, mat(0x55627f), 0.25, 1.3, -0.15, 8));
    var ledM = mat(0x222244, { glow: 0x4a7bff, glowLevel: 1.2 });
    led.add(sphere(0.09, ledM, 0.25, 1.52, -0.15, 14));
    robot.add(led);

    api.addPart("controller", ctrl, null);
    api.addPart("sensor", sensor, null);
    api.addPart("motor", motor, null);
    api.addPart("battery", batt, null);
    api.addPart("led", led, null);

    /* ---------------- Chalne ka logic ---------------- */
    s.gx = 0; s.gz = 2; s.dir = 2;          // dir: 0 +z, 1 +x, 2 -z, 3 -x
    s.yaw = Math.PI; s.yawT = Math.PI;
    s.queue = []; s.busy = false; s.auto = false; s.bump = 0; s.autoWait = 0;
    s.robot = robot; s.wheels = wheels; s.ledM = ledM; s.beamM = beamM;
    robot.position.set(s.gx * C, 0, s.gz * C);
    robot.rotation.y = s.yaw;
    s.target = robot.position.clone();

    function ahead() {
      var a = s.dir * Math.PI / 2;
      return { x: s.gx + Math.round(Math.sin(a)), z: s.gz + Math.round(Math.cos(a)) };
    }
    s.blockedAhead = function () { var a = ahead(); return isBlocked(a.x, a.z); };
    s.run = function (c) {
      if (c === "F") {
        if (s.blockedAhead()) {
          s.bump = 1;
          if (!s.auto) api.setStatus("blocked", 3000);
          return false;
        }
        var a = ahead();
        s.gx = a.x; s.gz = a.z;
        s.target.set(s.gx * C, 0, s.gz * C);
      } else if (c === "L") { s.dir = (s.dir + 1) % 4; s.yawT += Math.PI / 2; }
      else if (c === "R") { s.dir = (s.dir + 3) % 4; s.yawT -= Math.PI / 2; }
      s.busy = true;
      return true;
    };
    s.cmd = function (c) {
      if (s.auto) s.toggleAuto();
      if (s.queue.length < 6) s.queue.push(c);
    };
    s.toggleAuto = function () {
      s.auto = !s.auto;
      s.queue = [];
      api.setButton("auto", s.auto ? "stop" : "auto");
      api.setStatus(s.auto ? "auto_on" : "auto_off", 3500);
    };
    s.C = C;
  },

  update: function (api, dt, t) {
    var s = api.state;
    var r = s.robot;
    var k = Math.min(1, dt * 6);

    if (s.busy) {
      r.position.lerp(s.target, k);
      s.yaw += (s.yawT - s.yaw) * k;
      r.rotation.y = s.yaw;
      var spinAmt = r.position.distanceTo(s.target) > 0.02 ? dt * 10 : Math.abs(s.yawT - s.yaw) > 0.02 ? dt * 6 : 0;
      s.wheels.forEach(function (w) { w.rotation.x += spinAmt; });
      if (r.position.distanceTo(s.target) < 0.02 && Math.abs(s.yawT - s.yaw) < 0.02) {
        r.position.copy(s.target); s.yaw = s.yawT; r.rotation.y = s.yaw;
        s.busy = false;
      }
    } else if (s.queue.length && s.bump === 0) {
      s.run(s.queue.shift());
    } else if (s.auto) {
      s.autoWait -= dt;
      if (s.autoWait <= 0) {
        s.autoWait = 0.15;
        if (s.blockedAhead()) { s.bump = 1; s.run(Math.random() < 0.5 ? "L" : "R"); }
        else s.run("F");
      }
    }

    /* Takkar se pehle chhota sa jhatka */
    if (s.bump > 0) {
      s.bump = Math.max(0, s.bump - dt * 2.5);
      var a = s.dir * Math.PI / 2;
      var j = Math.sin(s.bump * Math.PI) * 0.12;
      r.position.set(s.target.x + Math.sin(a) * j, 0, s.target.z + Math.cos(a) * j);
    }

    /* Sensor lehar aur LED ka rang */
    var danger = s.blockedAhead();
    s.beamM.color.set(danger ? 0xff4a4a : 0x3fd69a);
    s.beamM.opacity = api.reduceMotion ? 0.2 : 0.12 + 0.08 * Math.sin(t * 6);
    var ledColor = s.bump > 0 ? 0xff3030 : (s.busy || s.auto) ? 0x30ff70 : 0x4a7bff;
    s.ledM.emissive.set(ledColor);
  }
});
