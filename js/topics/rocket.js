/* Topic: Rocket aur space */
TL.start({
  id: "rocket",
  camera: { theta: 0.6, phi: 1.22, radius: 17, target: [0, 4.5, 0], min: 7, max: 30, explodeRadius: 20 },
  explode: true,
  order: ["payload", "stage2", "stage1", "engine", "fins", "exhaust"],
  parts: {
    payload: { emoji: "🛰️" }, stage2: { emoji: "2️⃣" }, stage1: { emoji: "⛽" },
    engine: { emoji: "🔥" }, fins: { emoji: "🔺" }, exhaust: { emoji: "💨" }
  },
  quiz: [
    { part: "engine", a: 0 }, { part: "stage1", a: 1 }, { part: "stage1", a: 2 },
    { part: "payload", a: 1 }, { part: "fins", a: 3 }, { part: "payload", a: 0 }
  ],
  actions: [
    { id: "launch", label: "launch", main: true, onClick: function (api) { api.state.launchOrReset(); } }
  ],

  text: {
    hinglish: {
      tagline: "3… 2… 1… Liftoff!",
      intro: '<strong>Chalo rocket udaayein!</strong> "Launch karo" dabao aur countdown suno. Dekho kaise aag neeche jaati hai aur rocket upar, aur kaise khaali stage alag ho jaata hai.',
      ui: {
        launch: "🚀 Launch karo", reset: "↺ Wapas lao",
        count: "{0}…", lift: "🔥 Liftoff! Gas neeche, rocket upar!",
        sep: "✂️ Pehla stage khaali hokar alag ho gaya. Ab rocket halka hai!",
        space: "🛰️ Space pahunch gaye! Ab satellite apni kaksha (orbit) me jaayega",
        see_flame: "Aag dekhne ke liye 🚀 Launch karo dabao"
      },
      parts: {
        payload: { name: "Payload (Satellite)", short: "Payload", tag: "Rocket ka keemti saamaan",
          what: "Rocket ka asli kaam payload ko space tak pahunchana hai. Payload ek satellite, ek space probe, ya astronaut bhi ho sakte hain. Upar ka nukeela dhakkan (fairing) use hawa ki ragad aur garmi se bachata hai.",
          real: "Jaise courier ka dabba keemti saamaan ko safar me bachata hai.",
          fact: "ISRO ne 2017 me ek hi PSLV rocket se 104 satellite ek saath bheje the!" },
        stage2: { name: "Upar wala stage", short: "Stage 2", tag: "Rocket ke upar ek aur rocket",
          what: "Ye bade rocket ke upar ek chhota rocket hai. Neeche wala stage khaali hokar gir jaata hai, tab ye apna engine chala kar payload ko aur upar le jaata hai.",
          real: "Relay race jaisa: ek dhaavak thak jaaye to agla dhaavak daud aage badhata hai.",
          fact: "Kai rocket me 3 ya 4 stage hote hain." },
        stage1: { name: "Pehla stage (fuel aur oxygen)", short: "Stage 1", tag: "Sabse badi tanki",
          what: "Rocket ka zyaadatar hissa bas tanki hai! Laal tanki me fuel aur neeli tanki me oxygen bhari hai. Space me hawa nahi hoti, isliye rocket apni oxygen saath le jaata hai, warna fuel jal hi nahi paata.",
          real: "Diya bhi hawa ki oxygen se jalta hai. Use glass se dhak do to bujh jaata hai.",
          fact: "Launch ke waqt rocket ka lagbhag 85-90% wajan sirf fuel aur oxygen ka hota hai." },
        engine: { name: "Rocket engine", short: "Engine", tag: "Dhakka dene wala",
          what: "Engine me fuel aur oxygen milkar bahut tezi se jalte hain. Garam gas nozzle se bahut zor se neeche nikalti hai, aur gas rocket ko utni hi zor se upar dhakelti hai.",
          real: "Gubbara phula kar chhod do. Hawa ek taraf nikalti hai aur gubbara doosri taraf bhaagta hai.",
          fact: "Ye Newton ka teesra niyam hai: har kriya ki baraabar aur ulti pratikriya hoti hai." },
        fins: { name: "Fins", tag: "Rocket ko seedha rakhne wale",
          what: "Neeche lage chhote pankh (fins) hawa me rocket ko seedha rakhte hain, jaise teer ke peeche lage pankh. Isse rocket ladkhadata nahi.",
          real: "Teer aur badminton ki shuttle ke peeche pankh isi liye hote hain.",
          fact: "Space me hawa nahi hoti, isliye wahan fins kaam nahi karte. Wahan engine ko thoda ghuma kar disha badalte hain." },
        exhaust: { name: "Aag aur garam gas", short: "Aag", tag: "Rocket ki poonch",
          what: "Ye jalte fuel ki garam gas hai, jo bahut tezi se neeche nikalti hai. Isi ki taakat se rocket upar jaata hai. Launch dabao aur dekho!",
          real: "Diwali ka rocket bhi aise hi peeche aag phenk kar upar jaata hai.",
          fact: "Rocket ki aag 3000 °C se bhi zyada garam ho sakti hai. Itni garmi lohe ko bhi pighla de!" }
      },
      quiz: [
        { q: "Rocket upar kaise jaata hai?", o: ["Garam gas ko neeche zor se phenk kar", "Pankh hila kar", "Hawa me tair kar", "Rassi se kheench kar"],
          why: "Gas neeche jaati hai to rocket upar jaata hai. Ye Newton ka teesra niyam hai." },
        { q: "Space me hawa nahi hai. Phir rocket ka fuel kaise jalta hai?", o: ["Fuel ko oxygen ki zaroorat nahi", "Rocket apni oxygen saath le jaata hai", "Sooraj fuel jalata hai", "Fuel jalta hi nahi"],
          why: "Rocket me fuel ke saath oxygen ki tanki bhi hoti hai." },
        { q: "Khaali stage ko rocket kyun chhod deta hai?", o: ["Sajaane ke liye", "Galti se", "Halka hokar aur tez jaane ke liye", "Kachra phenkne ke liye"],
          why: "Khaali tanki bekaar wajan hai. Use chhodne se rocket halka aur tez ho jaata hai." },
        { q: "Rocket ki nok (nose) ke andar kya hota hai?", o: ["Fuel", "Satellite ya astronaut (payload)", "Pahiye", "Kuch nahi"],
          why: "Nok ke andar payload hota hai, jise space tak pahunchana hai." },
        { q: "Fins ka kaam kya hai?", o: ["Fuel rakhna", "Photo lena", "Aag banana", "Rocket ko seedha rakhna"],
          why: "Fins hawa me rocket ko seedha rakhte hain, jaise teer ke pankh." },
        { q: "Chandrayaan-3 ko chaand ki taraf kis Bharatiya rocket ne bheja tha?", o: ["LVM3", "Falcon 9", "Saturn V", "Ariane 5"],
          why: "ISRO ke LVM3 rocket ne 14 July 2023 ko Sriharikota se Chandrayaan-3 launch kiya tha." }
      ]
    },

    en: {
      tagline: "3… 2… 1… Liftoff!",
      intro: '<strong>Let\'s launch a rocket!</strong> Press "Launch" and follow the countdown. Watch the fire go down and the rocket go up, and see the empty stage fall away.',
      ui: {
        launch: "🚀 Launch", reset: "↺ Bring it back",
        count: "{0}…", lift: "🔥 Liftoff! Gas goes down, rocket goes up!",
        sep: "✂️ The first stage is empty and has dropped away. Now the rocket is lighter!",
        space: "🛰️ We reached space! Now the satellite will go into its orbit",
        see_flame: "Press 🚀 Launch to see the fire"
      },
      parts: {
        payload: { name: "Payload (Satellite)", short: "Payload", tag: "The rocket's precious cargo",
          what: "A rocket's real job is to carry its payload to space. The payload can be a satellite, a space probe, or even astronauts. The pointed cover on top (the fairing) protects it from air rubbing and heat.",
          real: "Like a courier box that protects precious things on a journey.",
          fact: "In 2017 ISRO sent 104 satellites together on one PSLV rocket!" },
        stage2: { name: "Upper stage", short: "Stage 2", tag: "A rocket on top of a rocket",
          what: "This is a smaller rocket on top of the big one. When the lower stage is empty and falls away, this one fires its own engine and carries the payload higher.",
          real: "Like a relay race: when one runner is tired, the next runner carries on.",
          fact: "Many rockets have 3 or 4 stages." },
        stage1: { name: "First stage (fuel and oxygen)", short: "Stage 1", tag: "The biggest tank",
          what: "Most of a rocket is just tanks! The red tank holds fuel and the blue tank holds oxygen. There is no air in space, so the rocket carries its own oxygen. Without it, the fuel could not burn.",
          real: "A diya also burns using oxygen from the air. Cover it with a glass and it goes out.",
          fact: "At launch, about 85 to 90% of a rocket's weight is just fuel and oxygen." },
        engine: { name: "Rocket engine", short: "Engine", tag: "Gives the push",
          what: "In the engine, fuel and oxygen burn very fast. Hot gas rushes out of the nozzle downwards, and the gas pushes the rocket upwards just as hard.",
          real: "Blow up a balloon and let it go. Air rushes out one way and the balloon zooms the other way.",
          fact: "This is Newton's third law: every action has an equal and opposite reaction." },
        fins: { name: "Fins", tag: "Keep the rocket straight",
          what: "The small wings at the bottom (fins) keep the rocket straight in the air, like the feathers on an arrow. They stop the rocket from wobbling.",
          real: "That is why arrows and badminton shuttles have feathers at the back.",
          fact: "There is no air in space, so fins don't work there. Instead, the engine is tilted a little to steer." },
        exhaust: { name: "Fire and hot gas", short: "Fire", tag: "The rocket's tail",
          what: "This is hot gas from the burning fuel, rushing out very fast. Its push lifts the rocket. Press Launch and watch!",
          real: "A Diwali rocket also goes up by throwing fire out of its back.",
          fact: "Rocket fire can be hotter than 3000 °C. That is hot enough to melt iron!" }
      },
      quiz: [
        { q: "How does a rocket go up?", o: ["By pushing hot gas down very hard", "By flapping wings", "By floating in the air", "By being pulled with a rope"],
          why: "The gas goes down, so the rocket goes up. This is Newton's third law." },
        { q: "There is no air in space. So how does rocket fuel burn?", o: ["Fuel doesn't need oxygen", "The rocket carries its own oxygen", "The Sun burns the fuel", "The fuel doesn't burn"],
          why: "Along with fuel, a rocket also has an oxygen tank." },
        { q: "Why does a rocket drop its empty stage?", o: ["To look nice", "By mistake", "To become lighter and go faster", "To throw away rubbish"],
          why: "An empty tank is useless weight. Dropping it makes the rocket lighter and faster." },
        { q: "What is inside the rocket's nose?", o: ["Fuel", "A satellite or astronauts (the payload)", "Wheels", "Nothing"],
          why: "The nose holds the payload that has to reach space." },
        { q: "What do the fins do?", o: ["Hold fuel", "Take photos", "Make fire", "Keep the rocket straight"],
          why: "Fins keep the rocket straight in the air, like an arrow's feathers." },
        { q: "Which Indian rocket sent Chandrayaan-3 towards the Moon?", o: ["LVM3", "Falcon 9", "Saturn V", "Ariane 5"],
          why: "ISRO's LVM3 rocket launched Chandrayaan-3 from Sriharikota on 14 July 2023." }
      ]
    },

    hi: {
      tagline: "3… 2… 1… लिफ़्टऑफ़!",
      intro: '<strong>चलो रॉकेट उड़ाएँ!</strong> "लॉन्च करो" दबाओ और काउंटडाउन सुनो। देखो कैसे आग नीचे जाती है और रॉकेट ऊपर, और कैसे खाली स्टेज अलग हो जाता है।',
      ui: {
        launch: "🚀 लॉन्च करो", reset: "↺ वापस लाओ",
        count: "{0}…", lift: "🔥 लिफ़्टऑफ़! गैस नीचे, रॉकेट ऊपर!",
        sep: "✂️ पहला स्टेज खाली होकर अलग हो गया। अब रॉकेट हल्का है!",
        space: "🛰️ अंतरिक्ष पहुँच गए! अब सैटेलाइट अपनी कक्षा (ऑर्बिट) में जाएगा",
        see_flame: "आग देखने के लिए 🚀 लॉन्च करो दबाओ"
      },
      parts: {
        payload: { name: "पेलोड (सैटेलाइट)", short: "पेलोड", tag: "रॉकेट का कीमती सामान",
          what: "रॉकेट का असली काम पेलोड को अंतरिक्ष तक पहुँचाना है। पेलोड एक सैटेलाइट, एक स्पेस प्रोब, या अंतरिक्ष यात्री भी हो सकते हैं। ऊपर का नुकीला ढक्कन (फ़ेयरिंग) उसे हवा की रगड़ और गर्मी से बचाता है।",
          real: "जैसे कूरियर का डिब्बा कीमती सामान को सफ़र में बचाता है।",
          fact: "ISRO ने 2017 में एक ही PSLV रॉकेट से 104 सैटेलाइट एक साथ भेजे थे!" },
        stage2: { name: "ऊपर वाला स्टेज", short: "स्टेज 2", tag: "रॉकेट के ऊपर एक और रॉकेट",
          what: "यह बड़े रॉकेट के ऊपर एक छोटा रॉकेट है। नीचे वाला स्टेज खाली होकर गिर जाता है, तब यह अपना इंजन चलाकर पेलोड को और ऊपर ले जाता है।",
          real: "रिले रेस जैसा: एक धावक थक जाए तो अगला धावक दौड़ आगे बढ़ाता है।",
          fact: "कई रॉकेट में 3 या 4 स्टेज होते हैं।" },
        stage1: { name: "पहला स्टेज (ईंधन और ऑक्सीजन)", short: "स्टेज 1", tag: "सबसे बड़ी टंकी",
          what: "रॉकेट का ज़्यादातर हिस्सा बस टंकी है! लाल टंकी में ईंधन और नीली टंकी में ऑक्सीजन भरी है। अंतरिक्ष में हवा नहीं होती, इसलिए रॉकेट अपनी ऑक्सीजन साथ ले जाता है, वरना ईंधन जल ही नहीं पाता।",
          real: "दीया भी हवा की ऑक्सीजन से जलता है। उसे गिलास से ढक दो तो बुझ जाता है।",
          fact: "लॉन्च के समय रॉकेट का लगभग 85-90% वज़न सिर्फ़ ईंधन और ऑक्सीजन का होता है।" },
        engine: { name: "रॉकेट इंजन", short: "इंजन", tag: "धक्का देने वाला",
          what: "इंजन में ईंधन और ऑक्सीजन मिलकर बहुत तेज़ी से जलते हैं। गरम गैस नोज़ल से बहुत ज़ोर से नीचे निकलती है, और गैस रॉकेट को उतने ही ज़ोर से ऊपर धकेलती है।",
          real: "गुब्बारा फुलाकर छोड़ दो। हवा एक तरफ़ निकलती है और गुब्बारा दूसरी तरफ़ भागता है।",
          fact: "यह न्यूटन का तीसरा नियम है: हर क्रिया की बराबर और उल्टी प्रतिक्रिया होती है।" },
        fins: { name: "फ़िन्स", tag: "रॉकेट को सीधा रखने वाले",
          what: "नीचे लगे छोटे पंख (फ़िन्स) हवा में रॉकेट को सीधा रखते हैं, जैसे तीर के पीछे लगे पंख। इससे रॉकेट लड़खड़ाता नहीं।",
          real: "तीर और बैडमिंटन की शटल के पीछे पंख इसीलिए होते हैं।",
          fact: "अंतरिक्ष में हवा नहीं होती, इसलिए वहाँ फ़िन्स काम नहीं करते। वहाँ इंजन को थोड़ा घुमाकर दिशा बदलते हैं।" },
        exhaust: { name: "आग और गरम गैस", short: "आग", tag: "रॉकेट की पूँछ",
          what: "यह जलते ईंधन की गरम गैस है, जो बहुत तेज़ी से नीचे निकलती है। इसी की ताकत से रॉकेट ऊपर जाता है। लॉन्च दबाओ और देखो!",
          real: "दिवाली का रॉकेट भी ऐसे ही पीछे आग फेंककर ऊपर जाता है।",
          fact: "रॉकेट की आग 3000 °C से भी ज़्यादा गरम हो सकती है। इतनी गर्मी लोहे को भी पिघला दे!" }
      },
      quiz: [
        { q: "रॉकेट ऊपर कैसे जाता है?", o: ["गरम गैस को नीचे ज़ोर से फेंककर", "पंख हिलाकर", "हवा में तैरकर", "रस्सी से खींचकर"],
          why: "गैस नीचे जाती है तो रॉकेट ऊपर जाता है। यह न्यूटन का तीसरा नियम है।" },
        { q: "अंतरिक्ष में हवा नहीं है। फिर रॉकेट का ईंधन कैसे जलता है?", o: ["ईंधन को ऑक्सीजन की ज़रूरत नहीं", "रॉकेट अपनी ऑक्सीजन साथ ले जाता है", "सूरज ईंधन जलाता है", "ईंधन जलता ही नहीं"],
          why: "रॉकेट में ईंधन के साथ ऑक्सीजन की टंकी भी होती है।" },
        { q: "खाली स्टेज को रॉकेट क्यों छोड़ देता है?", o: ["सजाने के लिए", "गलती से", "हल्का होकर और तेज़ जाने के लिए", "कचरा फेंकने के लिए"],
          why: "खाली टंकी बेकार वज़न है। उसे छोड़ने से रॉकेट हल्का और तेज़ हो जाता है।" },
        { q: "रॉकेट की नोक के अंदर क्या होता है?", o: ["ईंधन", "सैटेलाइट या अंतरिक्ष यात्री (पेलोड)", "पहिए", "कुछ नहीं"],
          why: "नोक के अंदर पेलोड होता है, जिसे अंतरिक्ष तक पहुँचाना है।" },
        { q: "फ़िन्स का काम क्या है?", o: ["ईंधन रखना", "फ़ोटो लेना", "आग बनाना", "रॉकेट को सीधा रखना"],
          why: "फ़िन्स हवा में रॉकेट को सीधा रखते हैं, जैसे तीर के पंख।" },
        { q: "चंद्रयान-3 को चाँद की तरफ़ किस भारतीय रॉकेट ने भेजा था?", o: ["LVM3", "Falcon 9", "Saturn V", "Ariane 5"],
          why: "ISRO के LVM3 रॉकेट ने 14 जुलाई 2023 को श्रीहरिकोटा से चंद्रयान-3 लॉन्च किया था।" }
      ]
    },

    mr: {
      tagline: "3… 2… 1… लिफ्टऑफ!",
      intro: '<strong>चला रॉकेट उडवूया!</strong> "लाँच करा" दाबा आणि काउंटडाउन ऐका. आग खाली आणि रॉकेट वर कसा जातो, आणि रिकामा टप्पा कसा वेगळा होतो ते बघा.',
      ui: {
        launch: "🚀 लाँच करा", reset: "↺ परत आणा",
        count: "{0}…", lift: "🔥 लिफ्टऑफ! वायू खाली, रॉकेट वर!",
        sep: "✂️ पहिला टप्पा रिकामा होऊन वेगळा झाला. आता रॉकेट हलका आहे!",
        space: "🛰️ अवकाशात पोहोचलो! आता उपग्रह आपल्या कक्षेत (ऑर्बिट) जाईल",
        see_flame: "आग बघण्यासाठी 🚀 लाँच करा दाबा"
      },
      parts: {
        payload: { name: "पेलोड (उपग्रह)", short: "पेलोड", tag: "रॉकेटचं मौल्यवान सामान",
          what: "पेलोड अवकाशात पोहोचवणं हे रॉकेटचं खरं काम आहे. पेलोड म्हणजे उपग्रह, अवकाशयान, किंवा अंतराळवीरही असू शकतात. वरचं टोकदार झाकण (फेअरिंग) त्याचं हवेच्या घर्षणापासून आणि उष्णतेपासून रक्षण करतं.",
          real: "जसा कुरियरचा डबा मौल्यवान सामान प्रवासात सांभाळतो.",
          fact: "ISRO ने 2017 मध्ये एकाच PSLV रॉकेटने 104 उपग्रह एकत्र पाठवले होते!" },
        stage2: { name: "वरचा टप्पा", short: "टप्पा 2", tag: "रॉकेटवर आणखी एक रॉकेट",
          what: "हा मोठ्या रॉकेटवरचा एक छोटा रॉकेट आहे. खालचा टप्पा रिकामा होऊन पडला की हा स्वतःचं इंजिन चालू करून पेलोड आणखी वर नेतो.",
          real: "रिले शर्यतीसारखं: एक धावपटू दमला की पुढचा धावपटू शर्यत पुढे नेतो.",
          fact: "अनेक रॉकेटमध्ये 3 किंवा 4 टप्पे असतात." },
        stage1: { name: "पहिला टप्पा (इंधन आणि ऑक्सिजन)", short: "टप्पा 1", tag: "सगळ्यात मोठी टाकी",
          what: "रॉकेटचा बहुतेक भाग म्हणजे फक्त टाक्या! लाल टाकीत इंधन आणि निळ्या टाकीत ऑक्सिजन भरलेला आहे. अवकाशात हवा नसते, म्हणून रॉकेट स्वतःचा ऑक्सिजन सोबत नेतो, नाहीतर इंधन जळूच शकलं नसतं.",
          real: "दिवाही हवेतल्या ऑक्सिजनमुळे जळतो. त्यावर ग्लास झाकला की तो विझतो.",
          fact: "लाँचच्या वेळी रॉकेटचं सुमारे 85-90% वजन फक्त इंधन आणि ऑक्सिजनचं असतं." },
        engine: { name: "रॉकेट इंजिन", short: "इंजिन", tag: "धक्का देणारं",
          what: "इंजिनमध्ये इंधन आणि ऑक्सिजन मिळून खूप वेगाने जळतात. गरम वायू नोझलमधून जोरात खाली बाहेर पडतो, आणि वायू रॉकेटला तितक्याच जोरात वर ढकलतो.",
          real: "फुगा फुगवून सोडून द्या. हवा एका बाजूने बाहेर पडते आणि फुगा दुसऱ्या बाजूला पळतो.",
          fact: "हा न्यूटनचा तिसरा नियम आहे: प्रत्येक क्रियेला समान आणि विरुद्ध प्रतिक्रिया असते." },
        fins: { name: "फिन्स", tag: "रॉकेट सरळ ठेवणारे",
          what: "खाली लावलेले छोटे पंख (फिन्स) हवेत रॉकेट सरळ ठेवतात, जसे बाणाच्या मागचे पंख. त्यामुळे रॉकेट डगमगत नाही.",
          real: "म्हणूनच बाण आणि बॅडमिंटनच्या फुलाला मागे पंख असतात.",
          fact: "अवकाशात हवा नसते, म्हणून तिथे फिन्स काम करत नाहीत. तिथे इंजिन थोडं फिरवून दिशा बदलतात." },
        exhaust: { name: "आग आणि गरम वायू", short: "आग", tag: "रॉकेटची शेपटी",
          what: "हा जळणाऱ्या इंधनाचा गरम वायू आहे, जो खूप वेगाने खाली बाहेर पडतो. याच्या ताकदीने रॉकेट वर जातो. लाँच दाबा आणि बघा!",
          real: "दिवाळीतला रॉकेटही असाच मागे आग फेकून वर जातो.",
          fact: "रॉकेटची आग 3000 °C पेक्षाही जास्त गरम असू शकते. इतकी उष्णता लोखंडही वितळवेल!" }
      },
      quiz: [
        { q: "रॉकेट वर कसा जातो?", o: ["गरम वायू जोरात खाली फेकून", "पंख हलवून", "हवेत तरंगून", "दोरीने ओढून"],
          why: "वायू खाली जातो म्हणून रॉकेट वर जातो. हा न्यूटनचा तिसरा नियम आहे." },
        { q: "अवकाशात हवा नाही. मग रॉकेटचं इंधन कसं जळतं?", o: ["इंधनाला ऑक्सिजन लागत नाही", "रॉकेट स्वतःचा ऑक्सिजन सोबत नेतो", "सूर्य इंधन जाळतो", "इंधन जळतच नाही"],
          why: "रॉकेटमध्ये इंधनासोबत ऑक्सिजनची टाकीही असते." },
        { q: "रॉकेट रिकामा टप्पा का सोडून देतो?", o: ["सजावटीसाठी", "चुकून", "हलका होऊन वेगाने जाण्यासाठी", "कचरा टाकण्यासाठी"],
          why: "रिकामी टाकी म्हणजे निरुपयोगी वजन. ती सोडल्यावर रॉकेट हलका आणि वेगवान होतो." },
        { q: "रॉकेटच्या टोकाच्या आत काय असतं?", o: ["इंधन", "उपग्रह किंवा अंतराळवीर (पेलोड)", "चाकं", "काहीच नाही"],
          why: "टोकाच्या आत पेलोड असतो, जो अवकाशात पोहोचवायचा असतो." },
        { q: "फिन्सचं काम काय आहे?", o: ["इंधन ठेवणं", "फोटो काढणं", "आग तयार करणं", "रॉकेट सरळ ठेवणं"],
          why: "फिन्स हवेत रॉकेट सरळ ठेवतात, जसे बाणाचे पंख." },
        { q: "चांद्रयान-3 कोणत्या भारतीय रॉकेटने चंद्राकडे पाठवलं?", o: ["LVM3", "Falcon 9", "Saturn V", "Ariane 5"],
          why: "ISRO च्या LVM3 रॉकेटने 14 जुलै 2023 रोजी श्रीहरिकोटाहून चांद्रयान-3 लाँच केलं." }
      ]
    }
  },

  /* ------------------------------------------------------------------
     3D MODEL: rocket apni jagah rehta hai; launch par zameen aur badal neeche
     jaate hain, isliye rocket camera me dikhta rehta hai.
  ------------------------------------------------------------------ */
  build: function (api) {
    var THREE = api.THREE, mat = api.mat, box = api.box, cyl = api.cyl, sphere = api.sphere;
    var V = function (x, y, z) { return new THREE.Vector3(x, y, z); };
    var s = api.state;

    var rocket = new THREE.Group();
    var upper = new THREE.Group(), lower = new THREE.Group();
    rocket.add(upper); rocket.add(lower);
    api.decor(rocket);
    function part(id, holder, g, pos, explode) { api.addPart(id, g, pos, explode); holder.add(g); }

    var white = mat(0xf4f6fa, { rough: 0.45 });
    var orange = mat(0xff7a2b, { rough: 0.5 });
    var metal = mat(0x9aa3b5, { metal: 0.8, rough: 0.3 });

    /* --- Neeche ka hissa: stage 1, engine, fins, aag --- */
    (function () {
      var g = new THREE.Group();
      var shell = mat(0xf4f6fa, { rough: 0.4, opacity: 0.38 });
      g.add(cyl(0.78, 0.78, 4, shell, 0, 0, 0, 32));
      g.add(cyl(0.6, 0.6, 1.9, mat(0xd12f4c, { rough: 0.5 }), 0, 0.95, 0, 24));     // fuel
      g.add(cyl(0.6, 0.6, 1.7, mat(0x2b6bff, { rough: 0.5 }), 0, -1.0, 0, 24));     // oxygen
      g.add(cyl(0.8, 0.8, 0.25, orange, 0, 1.9, 0, 32));
      g.add(cyl(0.8, 0.8, 0.25, orange, 0, -1.9, 0, 32));
      part("stage1", lower, g, V(0, 3.3, 0));
    })();
    (function () {
      var g = new THREE.Group();
      g.add(cyl(0.7, 0.75, 0.3, metal, 0, 0.2, 0, 24));
      [[0, 0], [0.36, 0.2], [-0.36, 0.2], [0, -0.38]].forEach(function (p) {
        g.add(cyl(0.12, 0.26, 0.55, mat(0x5a6275, { metal: 0.8, rough: 0.35 }), p[0], -0.2, p[1], 16));
      });
      part("engine", lower, g, V(0, 1.05, 0), V(0, -1.4, 0));
    })();
    (function () {
      var g = new THREE.Group();
      for (var i = 0; i < 4; i++) {
        var a = (i / 4) * Math.PI * 2 + Math.PI / 4;
        var f = box(0.08, 1.2, 0.75, orange, Math.cos(a) * 1.05, 0, Math.sin(a) * 1.05);
        f.rotation.y = -a;
        g.add(f);
      }
      part("fins", lower, g, V(0, 1.75, 0), V(0, -0.7, 0));
    })();
    var flameM = mat(0xff8a00, { glow: 0xff6a00, glowLevel: 1.6, opacity: 0.9 });
    var coreM = mat(0xfff2a8, { glow: 0xffe14a, glowLevel: 2 });
    var flame = new THREE.Group();
    flame.add(cyl(0.55, 0.08, 2.6, flameM, 0, -1.3, 0, 20));
    flame.add(cyl(0.3, 0.04, 1.6, coreM, 0, -0.8, 0, 16));
    var flameLight = new THREE.PointLight(0xff9a3c, 0, 14);
    flameLight.position.set(0, -1, 0);
    flame.add(flameLight);
    part("exhaust", lower, flame, V(0, 0.55, 0), V(0, -1.4, 0));
    flame.visible = false;

    /* --- Upar ka hissa: stage 2 aur payload --- */
    (function () {
      var g = new THREE.Group();
      g.add(cyl(0.66, 0.78, 0.3, white, 0, -0.95, 0, 32));
      g.add(cyl(0.66, 0.66, 1.6, white, 0, 0, 0, 32));
      g.add(cyl(0.67, 0.67, 0.2, orange, 0, 0.5, 0, 32));
      /* chhota tiranga patta */
      g.add(box(0.02, 0.12, 0.42, mat(0xff9933), 0.67, 0.12, 0));
      g.add(box(0.02, 0.12, 0.42, white, 0.67, 0, 0));
      g.add(box(0.02, 0.12, 0.42, mat(0x138808), 0.67, -0.12, 0));
      g.add(cyl(0.1, 0.22, 0.35, mat(0x5a6275, { metal: 0.8 }), 0, -1.2, 0, 14));
      part("stage2", upper, g, V(0, 6.1, 0), V(0, 1.0, 0));
    })();
    (function () {
      var g = new THREE.Group();
      g.add(cyl(0.02, 0.66, 1.9, mat(0xf4f6fa, { rough: 0.4, opacity: 0.4 }), 0, 0.2, 0, 32));
      /* andar ka satellite */
      g.add(box(0.42, 0.5, 0.42, mat(0xe6b93c, { metal: 0.7, rough: 0.35 }), 0, -0.25, 0));
      var pv = mat(0x1a3a8f, { metal: 0.3, rough: 0.3 });
      g.add(box(0.08, 0.45, 0.04, pv, 0.28, -0.25, 0));
      g.add(box(0.08, 0.45, 0.04, pv, -0.28, -0.25, 0));
      g.add(cyl(0.02, 0.02, 0.3, metal, 0, 0.15, 0, 6));
      part("payload", upper, g, V(0, 7.9, 0), V(0, 2.2, 0));
    })();
    var flame2M = mat(0x6ab8ff, { glow: 0x4aa8ff, glowLevel: 1.6, opacity: 0.85 });
    var flame2 = cyl(0.25, 0.03, 1.4, flame2M, 0, 4.5, 0, 14);
    flame2.visible = false;
    upper.add(flame2);

    /* --- Zameen, launch pad, tower, badal: launch par ye neeche jaate hain --- */
    var land = new THREE.Group();
    api.decor(land);
    land.add(box(16, 0.2, 12, mat(0xc9b48a, { rough: 0.9 }), 0, -0.1, 0));
    land.add(box(3.4, 0.6, 3.4, mat(0x6b7282, { rough: 0.8 }), 0, 0.3, 0));
    land.add(box(1.4, 0.62, 1.4, mat(0x2b2f3a), 0, 0.31, 0));       // aag jaane ka gaddha
    var towerM = mat(0xd12f4c, { rough: 0.6 });
    for (var y = 0; y < 9; y += 1) {
      land.add(box(0.08, 1, 0.08, towerM, -2.0, 0.9 + y, -0.35));
      land.add(box(0.08, 1, 0.08, towerM, -2.0, 0.9 + y, 0.35));
      land.add(box(0.08, 1, 0.08, towerM, -2.7, 0.9 + y, -0.35));
      land.add(box(0.08, 1, 0.08, towerM, -2.7, 0.9 + y, 0.35));
      land.add(box(0.8, 0.06, 0.8, towerM, -2.35, 1.4 + y, 0));
    }
    var arm1 = box(1.2, 0.12, 0.2, metal, -1.5, 6.5, 0); land.add(arm1);
    var arm2 = box(1.2, 0.12, 0.2, metal, -1.5, 3.5, 0); land.add(arm2);

    var clouds = [];
    var cloudM = mat(0xffffff, { rough: 1, opacity: 0.85 });
    [[-4, 14, -3], [4, 22, -2], [-3, 30, 2], [3.5, 38, 1]].forEach(function (p) {
      var c = new THREE.Group();
      [[0, 0, 0, 1.2], [1.2, -0.2, 0.2, 0.9], [-1.2, -0.25, 0.1, 0.85], [0.4, 0.5, 0, 0.8]].forEach(function (q) {
        c.add(sphere(q[3], cloudM, q[0], q[1], q[2], 14));
      });
      c.position.set(p[0], p[1], p[2]);
      api.decor(c);
      clouds.push({ g: c, y: p[1] });
    });

    /* Taare: upar jaane par dikhte hain */
    var starGeo = new THREE.BufferGeometry();
    var pts = [];
    for (var i = 0; i < 400; i++) {
      var th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1), r = 30 + Math.random() * 15;
      pts.push(r * Math.sin(ph) * Math.cos(th), r * Math.cos(ph), r * Math.sin(ph) * Math.sin(th));
    }
    starGeo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    var starM = new THREE.PointsMaterial({ color: 0xffffff, size: 0.25, transparent: true, opacity: 0 });
    api.decor(new THREE.Points(starGeo, starM));

    s.phase = "idle"; s.alt = 0; s.vel = 0; s.token = 0;
    s.rocket = rocket; s.upper = upper; s.lower = lower; s.land = land; s.clouds = clouds;
    s.flame = flame; s.flame2 = flame2; s.flameLight = flameLight; s.starM = starM;

    function reset() {
      s.token++;
      s.phase = "idle"; s.alt = 0; s.vel = 0; s.sepT = 0;
      s.lower.position.set(0, 0, 0); s.lower.rotation.set(0, 0, 0); s.lower.visible = true;
      s.rocket.position.set(0, 0, 0);
      s.flame.visible = false; s.flame2.visible = false; s.flameLight.intensity = 0;
      s.land.position.y = 0; s.land.visible = true;
      s.clouds.forEach(function (c) { c.g.position.y = c.y; });
      s.starM.opacity = 0;
      api.setButton("launch", "launch");
    }
    s.launchOrReset = function () {
      if (s.phase !== "idle") { reset(); api.setStatus(null); return; }
      s.phase = "count";
      api.setButton("launch", "reset");
      var my = ++s.token;
      [3, 2, 1].forEach(function (n, i) {
        setTimeout(function () { if (s.token === my) api.setStatus("count", 1200, n); }, i * 1000);
      });
      setTimeout(function () {
        if (s.token !== my) return;
        s.phase = "climb";
        s.flame.visible = true;
        api.setStatus("lift", 3500);
      }, 3000);
    };
  },

  onSelect: function (api, id) {
    if (id === "exhaust" && api.state.phase === "idle") api.setStatus("see_flame", 3000);
  },

  update: function (api, dt, t) {
    var s = api.state;
    var flick = api.reduceMotion ? 1 : 0.85 + 0.3 * Math.random();

    if (s.phase === "climb" || s.phase === "space") {
      s.vel = Math.min(s.phase === "space" ? 4 : 14, s.vel + dt * 2.2);
      s.alt += s.vel * dt;
      /* zameen neeche, badal neeche aur phir upar se wapas */
      s.land.position.y = -s.alt;
      s.land.visible = s.alt < 40;
      s.clouds.forEach(function (c) {
        var y = c.y - s.alt;
        while (y < -12) { c.y += 48; y += 48; }
        c.g.position.y = y;
        c.g.visible = s.alt < 70;
      });
      s.starM.opacity = Math.max(0, Math.min(1, (s.alt - 20) / 30));
      if (!api.reduceMotion) s.rocket.position.x = (Math.random() - 0.5) * 0.04;

      if (s.phase === "climb" && s.alt > 35 && !s.sepT) {
        s.sepT = 0.001;
        s.flame2.visible = true;
        api.setStatus("sep", 4500);
      }
      if (s.alt > 90 && s.phase === "climb") {
        s.phase = "space";
        api.setStatus("space", 5000);
      }
    }

    /* stage alag: neeche ka hissa girta aur ghoomta hai */
    if (s.sepT) {
      s.sepT += dt;
      s.lower.position.y -= dt * (1 + s.sepT * 3);
      s.lower.position.x += dt * 0.4;
      s.lower.rotation.z -= dt * 0.35;
      if (s.sepT > 0.4) s.flame.visible = false;
      if (s.sepT > 4) s.lower.visible = false;
    }

    s.flame.scale.set(1, s.flame.visible ? flick : 1, 1);
    s.flameLight.intensity = s.flame.visible ? 2.5 * flick : 0;
    s.flame2.scale.set(1, flick, 1);
  }
});
