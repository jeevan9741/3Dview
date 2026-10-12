/* Topic: Satellite aur GPS */
TL.start({
  id: "satellite",
  camera: { theta: 1.2, phi: 1.2, radius: 19, target: [0, 0, 0], min: 9, max: 34 },
  autoRotate: false,
  order: ["earth", "satellite", "orbit", "phone", "signal"],
  parts: {
    earth: { emoji: "🌍" }, satellite: { emoji: "🛰️" }, orbit: { emoji: "⭕" },
    phone: { emoji: "📍" }, signal: { emoji: "📡" }
  },
  quiz: [
    { part: "satellite", a: 1 }, { part: "signal", a: 2 }, { part: "orbit", a: 0 },
    { part: "satellite", a: 3 }, { part: "phone", a: 1 }, { part: "phone", a: 2 }
  ],
  actions: [
    { id: "find", label: "find", main: true, onClick: function (api) { api.state.find(); } },
    { id: "speed", label: "fast", onClick: function (api) { api.state.toggleSpeed(); } }
  ],

  text: {
    hinglish: {
      tagline: "Aasmaan se tumhara pata kaise lagta hai",
      intro: '<strong>Phone dhoondo!</strong> Satellite Earth ke chakkar laga rahe hain. "Phone dhoondo" dabao aur dekho kaise 3 satellite milkar India me rakhe phone ki jagah pata karte hain.',
      ui: {
        find: "📍 Phone dhoondo", fast: "⏩ Tez chalao", slow: "▶ Normal chalao",
        listening: "📡 Phone 3 satellite ke signal sun raha hai…",
        found: "✅ Mil gaya! 3 satellite se doori naap kar phone ki jagah pata chal gayi",
        fast_on: "⏩ Satellite tez chal rahe hain (asal me ek chakkar me ~12 ghante lagte hain)"
      },
      parts: {
        earth: { name: "Prithvi (Earth)", short: "Prithvi", tag: "Hamara ghar",
          what: "Prithvi apni dhuri par ghoomti hai, isliye din aur raat hote hain. Iske chaaron taraf hazaaron satellite ghoom rahe hain.",
          real: "Lattu jaise apni jagah par ghoomta hai, waise hi Prithvi ghoomti hai.",
          fact: "Prithvi ko ek poora chakkar lagane me lagbhag 24 ghante lagte hain." },
        satellite: { name: "GPS Satellite", short: "Satellite", tag: "Aasmaan ka chowkidar",
          what: "GPS satellite aasmaan me bahut upar se lagataar signal bhejte hain jisme likha hota hai 'main kaun hoon aur abhi kitna time hua'. Inke neele panel suraj ki roshni se bijli banate hain.",
          real: "Jaise mandir ki ghanti ki awaaz door tak sunai deti hai, waise hi satellite ka signal poori Prithvi par pahunchta hai.",
          fact: "GPS satellite zameen se lagbhag 20,000 km upar ghoomte hain. Har ek me bahut sahi ghadi (atomic clock) lagi hoti hai." },
        orbit: { name: "Kaksha (Orbit)", short: "Orbit", tag: "Satellite ka gol raasta",
          what: "Satellite jis gol raaste par Prithvi ke chakkar lagata hai use kaksha (orbit) kehte hain. Satellite itna tez chalta hai ki neeche girne ki jagah ghoomta rehta hai.",
          real: "Dhaage se bandhi gend ko gol ghumao, wo gol raaste par chalti rehti hai.",
          fact: "Chandrama bhi Prithvi ka ek prakritik satellite hai." },
        phone: { name: "Phone (GPS Receiver)", short: "Phone", tag: "Signal sunne wala",
          what: "Phone ke andar GPS receiver hai. Ye sirf satellites ke signal sunta hai, kuch bhejta nahi. Signal ko aane me kitna time laga, isse wo har satellite ki doori nikaalta hai.",
          real: "Bijli chamakne ke baad baadal ki awaaz kitni der me aayi, isse pata chalta hai ki toofan kitna door hai.",
          fact: "India ka apna satellite system bhi hai, uska naam NavIC hai." },
        signal: { name: "Radio Signal", short: "Signal", tag: "Aasmaan se aane wala sandesh",
          what: "Peeli lakeerein signal dikhati hain. Kam se kam 3 satellite ki doori pata ho to phone ki sahi jagah nikal aati hai. Asal me ghadi theek rakhne ke liye 4 satellite use hote hain.",
          real: "Teen dost batayein ki tum unse kitni door ho, to tumhari jagah pakki ho jaati hai.",
          fact: "Radio signal roshni ki raftaar se chalta hai: ek second me 3 lakh km!" }
      },
      quiz: [
        { q: "GPS satellite kya bhejte hain?", o: ["Photos", "Apna naam aur time wala signal", "Khaana", "Paani"],
          why: "Satellite lagataar signal bhejte hain jisme unki pehchaan aur time hota hai." },
        { q: "Phone ki jagah pata karne ke liye kam se kam kitne satellite chahiye?", o: ["1", "2", "3 (asal me 4)", "100"],
          why: "3 satellite ki doori se jagah nikalti hai, aur 4tha ghadi ko theek rakhta hai." },
        { q: "Satellite ke gol raaste ko kya kehte hain?", o: ["Kaksha (orbit)", "Sadak", "Nadi", "Cable"],
          why: "Prithvi ke chaaron taraf satellite ka raasta orbit kehlata hai." },
        { q: "Satellite neeche kyun nahi girta?", o: ["Wo halka hai", "Use rassi se baandha hai", "Wo so raha hai", "Wo bahut tez ghoomta rehta hai"],
          why: "Satellite itna tez chalta hai ki girne ki jagah Prithvi ke chakkar lagata rehta hai." },
        { q: "Phone ka GPS receiver kya karta hai?", o: ["Satellite ko signal bhejta hai", "Satellite ke signal sunta hai", "Satellite banata hai", "Internet deta hai"],
          why: "GPS receiver sirf sunta hai aur doori ka hisaab lagata hai." },
        { q: "India ke apne satellite navigation system ka naam kya hai?", o: ["Router", "Chandrayaan", "NavIC", "Wi‑Fi"],
          why: "India ka apna navigation system NavIC hai." }
      ]
    },

    en: {
      tagline: "How the sky knows where you are",
      intro: '<strong>Find the phone!</strong> Satellites are circling the Earth. Press "Find phone" and watch 3 satellites work together to find a phone in India.',
      ui: {
        find: "📍 Find phone", fast: "⏩ Speed up", slow: "▶ Normal speed",
        listening: "📡 The phone is listening to signals from 3 satellites…",
        found: "✅ Found it! Measuring the distance to 3 satellites showed where the phone is",
        fast_on: "⏩ Satellites sped up (in real life one lap takes about 12 hours)"
      },
      parts: {
        earth: { name: "Earth", tag: "Our home",
          what: "The Earth spins on its axis, which gives us day and night. Thousands of satellites are circling around it.",
          real: "Like a spinning top turning in one place.",
          fact: "The Earth takes about 24 hours to spin around once." },
        satellite: { name: "GPS Satellite", tag: "A guard in the sky",
          what: "GPS satellites send signals all the time from high in the sky, saying 'who I am and what time it is now'. Their blue panels make electricity from sunlight.",
          real: "Like the sound of a temple bell heard far away, a satellite's signal reaches the whole Earth.",
          fact: "GPS satellites circle about 20,000 km above the ground. Each one carries a very exact atomic clock." },
        orbit: { name: "Orbit", tag: "The satellite's round path",
          what: "The round path a satellite follows around the Earth is called its orbit. A satellite moves so fast that it keeps going around instead of falling down.",
          real: "Swing a ball on a string in a circle and it keeps moving on a round path.",
          fact: "The Moon is also a natural satellite of the Earth." },
        phone: { name: "Phone (GPS receiver)", short: "Phone", tag: "The listener",
          what: "Inside the phone is a GPS receiver. It only listens to satellite signals and sends nothing back. From how long each signal took to arrive, it works out the distance to each satellite.",
          real: "Counting the time between lightning and thunder tells you how far away the storm is.",
          fact: "India has its own satellite navigation system too, called NavIC." },
        signal: { name: "Radio Signal", short: "Signal", tag: "A message from the sky",
          what: "The yellow lines show the signals. If the phone knows its distance from at least 3 satellites, it can find its exact place. In real life, 4 are used so the clock stays correct.",
          real: "If three friends each tell you how far you are from them, your place is certain.",
          fact: "Radio signals travel at the speed of light: 300,000 km in one second!" }
      },
      quiz: [
        { q: "What do GPS satellites send?", o: ["Photos", "A signal with their name and the time", "Food", "Water"],
          why: "Satellites keep sending a signal with who they are and the time." },
        { q: "At least how many satellites are needed to find the phone?", o: ["1", "2", "3 (really 4)", "100"],
          why: "Distances to 3 satellites give the place, and a 4th keeps the clock correct." },
        { q: "What is a satellite's round path called?", o: ["Orbit", "Road", "River", "Cable"],
          why: "The path of a satellite around the Earth is called an orbit." },
        { q: "Why doesn't a satellite fall down?", o: ["It is light", "It is tied with a rope", "It is asleep", "It keeps moving very fast around the Earth"],
          why: "A satellite moves so fast that it keeps circling the Earth instead of falling." },
        { q: "What does the phone's GPS receiver do?", o: ["Sends signals to satellites", "Listens to satellite signals", "Builds satellites", "Gives internet"],
          why: "A GPS receiver only listens and works out the distances." },
        { q: "What is India's own satellite navigation system called?", o: ["Router", "Chandrayaan", "NavIC", "Wi‑Fi"],
          why: "India's own navigation system is NavIC." }
      ]
    },

    hi: {
      tagline: "आसमान से तुम्हारा पता कैसे लगता है",
      intro: '<strong>फ़ोन ढूँढो!</strong> सैटेलाइट पृथ्वी के चक्कर लगा रहे हैं। "फ़ोन ढूँढो" दबाओ और देखो कैसे 3 सैटेलाइट मिलकर भारत में रखे फ़ोन की जगह पता करते हैं।',
      ui: {
        find: "📍 फ़ोन ढूँढो", fast: "⏩ तेज़ चलाओ", slow: "▶ नॉर्मल चलाओ",
        listening: "📡 फ़ोन 3 सैटेलाइट के सिग्नल सुन रहा है…",
        found: "✅ मिल गया! 3 सैटेलाइट से दूरी नापकर फ़ोन की जगह पता चल गई",
        fast_on: "⏩ सैटेलाइट तेज़ चल रहे हैं (असल में एक चक्कर में लगभग 12 घंटे लगते हैं)"
      },
      parts: {
        earth: { name: "पृथ्वी", tag: "हमारा घर",
          what: "पृथ्वी अपनी धुरी पर घूमती है, इसलिए दिन और रात होते हैं। इसके चारों तरफ़ हज़ारों सैटेलाइट घूम रहे हैं।",
          real: "लट्टू जैसे अपनी जगह पर घूमता है, वैसे ही पृथ्वी घूमती है।",
          fact: "पृथ्वी को एक पूरा चक्कर लगाने में लगभग 24 घंटे लगते हैं।" },
        satellite: { name: "GPS सैटेलाइट", short: "सैटेलाइट", tag: "आसमान का चौकीदार",
          what: "GPS सैटेलाइट आसमान में बहुत ऊपर से लगातार सिग्नल भेजते हैं जिसमें लिखा होता है 'मैं कौन हूँ और अभी कितना समय हुआ'। इनके नीले पैनल सूरज की रोशनी से बिजली बनाते हैं।",
          real: "जैसे मंदिर की घंटी की आवाज़ दूर तक सुनाई देती है, वैसे ही सैटेलाइट का सिग्नल पूरी पृथ्वी पर पहुँचता है।",
          fact: "GPS सैटेलाइट ज़मीन से लगभग 20,000 km ऊपर घूमते हैं। हर एक में बहुत सही घड़ी (एटॉमिक क्लॉक) लगी होती है।" },
        orbit: { name: "कक्षा (ऑर्बिट)", short: "कक्षा", tag: "सैटेलाइट का गोल रास्ता",
          what: "सैटेलाइट जिस गोल रास्ते पर पृथ्वी के चक्कर लगाता है उसे कक्षा कहते हैं। सैटेलाइट इतना तेज़ चलता है कि नीचे गिरने की जगह घूमता रहता है।",
          real: "धागे से बँधी गेंद को गोल घुमाओ, वह गोल रास्ते पर चलती रहती है।",
          fact: "चंद्रमा भी पृथ्वी का एक प्राकृतिक सैटेलाइट है।" },
        phone: { name: "फ़ोन (GPS रिसीवर)", short: "फ़ोन", tag: "सिग्नल सुनने वाला",
          what: "फ़ोन के अंदर GPS रिसीवर है। यह सिर्फ़ सैटेलाइट के सिग्नल सुनता है, कुछ भेजता नहीं। सिग्नल को आने में कितना समय लगा, इससे वह हर सैटेलाइट की दूरी निकालता है।",
          real: "बिजली चमकने के बाद बादल की आवाज़ कितनी देर में आई, इससे पता चलता है कि तूफ़ान कितना दूर है।",
          fact: "भारत का अपना सैटेलाइट सिस्टम भी है, उसका नाम NavIC है।" },
        signal: { name: "रेडियो सिग्नल", short: "सिग्नल", tag: "आसमान से आने वाला संदेश",
          what: "पीली लकीरें सिग्नल दिखाती हैं। कम से कम 3 सैटेलाइट की दूरी पता हो तो फ़ोन की सही जगह निकल आती है। असल में घड़ी ठीक रखने के लिए 4 सैटेलाइट इस्तेमाल होते हैं।",
          real: "तीन दोस्त बताएँ कि तुम उनसे कितनी दूर हो, तो तुम्हारी जगह पक्की हो जाती है।",
          fact: "रेडियो सिग्नल रोशनी की रफ़्तार से चलता है: एक सेकंड में 3 लाख km!" }
      },
      quiz: [
        { q: "GPS सैटेलाइट क्या भेजते हैं?", o: ["फ़ोटो", "अपना नाम और समय वाला सिग्नल", "खाना", "पानी"],
          why: "सैटेलाइट लगातार सिग्नल भेजते हैं जिसमें उनकी पहचान और समय होता है।" },
        { q: "फ़ोन की जगह पता करने के लिए कम से कम कितने सैटेलाइट चाहिए?", o: ["1", "2", "3 (असल में 4)", "100"],
          why: "3 सैटेलाइट की दूरी से जगह निकलती है, और चौथा घड़ी को ठीक रखता है।" },
        { q: "सैटेलाइट के गोल रास्ते को क्या कहते हैं?", o: ["कक्षा (ऑर्बिट)", "सड़क", "नदी", "केबल"],
          why: "पृथ्वी के चारों तरफ़ सैटेलाइट का रास्ता कक्षा कहलाता है।" },
        { q: "सैटेलाइट नीचे क्यों नहीं गिरता?", o: ["वह हल्का है", "उसे रस्सी से बाँधा है", "वह सो रहा है", "वह बहुत तेज़ घूमता रहता है"],
          why: "सैटेलाइट इतना तेज़ चलता है कि गिरने की जगह पृथ्वी के चक्कर लगाता रहता है।" },
        { q: "फ़ोन का GPS रिसीवर क्या करता है?", o: ["सैटेलाइट को सिग्नल भेजता है", "सैटेलाइट के सिग्नल सुनता है", "सैटेलाइट बनाता है", "इंटरनेट देता है"],
          why: "GPS रिसीवर सिर्फ़ सुनता है और दूरी का हिसाब लगाता है।" },
        { q: "भारत के अपने सैटेलाइट नेविगेशन सिस्टम का नाम क्या है?", o: ["राउटर", "चंद्रयान", "NavIC", "वाई-फ़ाई"],
          why: "भारत का अपना नेविगेशन सिस्टम NavIC है।" }
      ]
    },

    mr: {
      tagline: "आकाशाला तुमचा पत्ता कसा कळतो",
      intro: '<strong>फोन शोधा!</strong> उपग्रह पृथ्वीभोवती फिरत आहेत. "फोन शोधा" दाबा आणि बघा 3 उपग्रह मिळून भारतातल्या फोनची जागा कशी शोधतात.',
      ui: {
        find: "📍 फोन शोधा", fast: "⏩ वेगाने चालवा", slow: "▶ नेहमीच्या वेगाने",
        listening: "📡 फोन 3 उपग्रहांचे सिग्नल ऐकतोय…",
        found: "✅ सापडला! 3 उपग्रहांपासूनचं अंतर मोजून फोनची जागा कळली",
        fast_on: "⏩ उपग्रह वेगाने फिरत आहेत (खरं तर एका फेरीला सुमारे 12 तास लागतात)"
      },
      parts: {
        earth: { name: "पृथ्वी", tag: "आपलं घर",
          what: "पृथ्वी स्वतःभोवती फिरते, म्हणून दिवस आणि रात्र होतात. तिच्याभोवती हजारो उपग्रह फिरत आहेत.",
          real: "भोवरा जसा एका जागी गरगर फिरतो, तशी पृथ्वी फिरते.",
          fact: "पृथ्वीला स्वतःभोवती एक फेरी पूर्ण करायला सुमारे 24 तास लागतात." },
        satellite: { name: "GPS उपग्रह", short: "उपग्रह", tag: "आकाशातला पहारेकरी",
          what: "GPS उपग्रह आकाशात खूप उंचावरून सतत सिग्नल पाठवतात, त्यात लिहिलेलं असतं 'मी कोण आहे आणि आत्ता किती वाजले'. त्यांचे निळे पॅनेल सूर्यप्रकाशापासून वीज तयार करतात.",
          real: "मंदिरातल्या घंटेचा आवाज दूरपर्यंत ऐकू येतो, तसा उपग्रहाचा सिग्नल संपूर्ण पृथ्वीवर पोहोचतो.",
          fact: "GPS उपग्रह जमिनीपासून सुमारे 20,000 km उंचावर फिरतात. प्रत्येकात अगदी अचूक घड्याळ (ॲटॉमिक क्लॉक) असतं." },
        orbit: { name: "कक्षा (ऑर्बिट)", short: "कक्षा", tag: "उपग्रहाचा गोल रस्ता",
          what: "उपग्रह ज्या गोल रस्त्याने पृथ्वीभोवती फिरतो त्याला कक्षा म्हणतात. उपग्रह इतक्या वेगाने जातो की खाली पडण्याऐवजी फिरत राहतो.",
          real: "दोरीला बांधलेला चेंडू गोल फिरवा, तो गोल रस्त्यावर फिरत राहतो.",
          fact: "चंद्र हा पण पृथ्वीचा एक नैसर्गिक उपग्रह आहे." },
        phone: { name: "फोन (GPS रिसीव्हर)", short: "फोन", tag: "सिग्नल ऐकणारा",
          what: "फोनच्या आत GPS रिसीव्हर असतो. तो फक्त उपग्रहांचे सिग्नल ऐकतो, काहीही पाठवत नाही. सिग्नल यायला किती वेळ लागला यावरून तो प्रत्येक उपग्रहाचं अंतर काढतो.",
          real: "वीज चमकल्यावर गडगडाट किती वेळाने ऐकू आला यावरून वादळ किती दूर आहे ते कळतं.",
          fact: "भारताची स्वतःची उपग्रह प्रणालीही आहे, तिचं नाव NavIC आहे." },
        signal: { name: "रेडिओ सिग्नल", short: "सिग्नल", tag: "आकाशातून येणारा संदेश",
          what: "पिवळ्या रेषा सिग्नल दाखवतात. किमान 3 उपग्रहांचं अंतर माहीत असेल तर फोनची अचूक जागा कळते. खरं तर घड्याळ बरोबर ठेवण्यासाठी 4 उपग्रह वापरले जातात.",
          real: "तीन मित्रांनी सांगितलं की तुम्ही त्यांच्यापासून किती दूर आहात, तर तुमची जागा नक्की होते.",
          fact: "रेडिओ सिग्नल प्रकाशाच्या वेगाने जातो: एका सेकंदात 3 लाख km!" }
      },
      quiz: [
        { q: "GPS उपग्रह काय पाठवतात?", o: ["फोटो", "स्वतःचं नाव आणि वेळ असलेला सिग्नल", "जेवण", "पाणी"],
          why: "उपग्रह सतत सिग्नल पाठवतात, त्यात त्यांची ओळख आणि वेळ असते." },
        { q: "फोनची जागा शोधायला किमान किती उपग्रह लागतात?", o: ["1", "2", "3 (खरं तर 4)", "100"],
          why: "3 उपग्रहांच्या अंतरावरून जागा कळते, आणि चौथा घड्याळ बरोबर ठेवतो." },
        { q: "उपग्रहाच्या गोल रस्त्याला काय म्हणतात?", o: ["कक्षा (ऑर्बिट)", "रस्ता", "नदी", "केबल"],
          why: "पृथ्वीभोवतीच्या उपग्रहाच्या रस्त्याला कक्षा म्हणतात." },
        { q: "उपग्रह खाली का पडत नाही?", o: ["तो हलका आहे", "त्याला दोरीने बांधलंय", "तो झोपलाय", "तो खूप वेगाने फिरत राहतो"],
          why: "उपग्रह इतक्या वेगाने जातो की पडण्याऐवजी पृथ्वीभोवती फिरत राहतो." },
        { q: "फोनमधला GPS रिसीव्हर काय करतो?", o: ["उपग्रहांना सिग्नल पाठवतो", "उपग्रहांचे सिग्नल ऐकतो", "उपग्रह बनवतो", "इंटरनेट देतो"],
          why: "GPS रिसीव्हर फक्त ऐकतो आणि अंतराचं गणित करतो." },
        { q: "भारताच्या स्वतःच्या उपग्रह नेव्हिगेशन प्रणालीचं नाव काय?", o: ["राउटर", "चांद्रयान", "NavIC", "वाय-फाय"],
          why: "भारताची स्वतःची नेव्हिगेशन प्रणाली NavIC आहे." }
      ]
    }
  },

  build: function (api) {
    var THREE = api.THREE, mat = api.mat, box = api.box, cyl = api.cyl, sphere = api.sphere;
    var s = api.state;
    var R = 3, ORBIT = 6.2;

    /* ---------------- Prithvi (canvas par bana naksha) ---------------- */
    var W = 1024, Ht = 512;
    var cv = document.createElement("canvas");
    cv.width = W; cv.height = Ht;
    var g = cv.getContext("2d");
    g.fillStyle = "#2f7fd6"; g.fillRect(0, 0, W, Ht);
    function px(lon) { return (lon + 180) / 360 * W; }
    function py(lat) { return (90 - lat) / 180 * Ht; }
    /* mote taur par mahadweep: [lon, lat, chaudai (deg), unchai (deg), ghumaav] */
    var land = [
      [-100, 48, 38, 20, 0.3], [-85, 20, 12, 10, 0.6], [-60, -15, 16, 26, -0.3], [-68, -40, 6, 12, 0.2],
      [-42, 72, 14, 9, 0], [15, 5, 20, 30, 0], [22, 50, 22, 10, 0], [90, 52, 50, 16, 0],
      [100, 30, 22, 12, 0], [45, 25, 12, 10, 0.4], [135, -25, 17, 11, 0], [115, 0, 10, 5, 0.4], [140, 38, 3, 8, 0.5]
    ];
    g.fillStyle = "#4caf50";
    land.forEach(function (l) {
      g.save();
      g.translate(px(l[0]), py(l[1]));
      g.rotate(l[4]);
      g.beginPath();
      g.ellipse(0, 0, l[2] / 360 * W, l[3] / 180 * Ht, 0, 0, Math.PI * 2);
      g.fill();
      g.restore();
    });
    /* India (tikona) */
    g.fillStyle = "#e0b04a";
    g.beginPath();
    g.moveTo(px(68), py(24)); g.lineTo(px(74), py(35)); g.lineTo(px(88), py(27));
    g.lineTo(px(92), py(22)); g.lineTo(px(80), py(8)); g.closePath(); g.fill();
    /* barf wale dhruv */
    g.fillStyle = "#f4f8ff";
    g.fillRect(0, 0, W, Ht * 0.06); g.fillRect(0, Ht * 0.93, W, Ht * 0.07);
    var earthTex = new THREE.CanvasTexture(cv);

    var earth = new THREE.Group();
    var globe = new THREE.Mesh(new THREE.SphereGeometry(R, 48, 32),
      new THREE.MeshStandardMaterial({ map: earthTex, roughness: 0.8, emissive: 0xffa53a, emissiveIntensity: 0 }));
    earth.add(globe);
    api.addPart("earth", earth, new THREE.Vector3(0, 0, 0), null, { focus: false });
    earth.rotation.z = 0.41;   // Prithvi ka jhukaav (~23.5°)

    /* Phone pin (India: 22°N, 79°E) - Prithvi ke saath ghoomta hai */
    function latLon(lat, lon, r) {
      var u = (lon + 180) / 360, v = (90 - lat) / 180;
      return new THREE.Vector3(-r * Math.cos(u * Math.PI * 2) * Math.sin(v * Math.PI),
                                r * Math.cos(v * Math.PI),
                                r * Math.sin(u * Math.PI * 2) * Math.sin(v * Math.PI));
    }
    var pin = new THREE.Group();
    var pinM = mat(0xd12f4c, { rough: 0.4 });
    var cone = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.5, 14), pinM);
    cone.rotation.x = Math.PI; cone.position.y = 0.25;
    pin.add(cone);
    pin.add(sphere(0.2, pinM, 0, 0.6, 0, 16));
    pin.add(sphere(0.08, mat(0xffffff), 0, 0.6, 0.15, 10));
    var pinPos = latLon(22, 79, R);
    pin.position.copy(pinPos);
    pin.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), pinPos.clone().normalize());
    earth.add(pin);
    api.addPart("phone", pin, null);
    var pinTip = new THREE.Object3D();
    pinTip.position.set(0, 0.6, 0);
    pin.add(pinTip);

    /* "Mil gaya" wali lehar */
    var rippleM = new THREE.MeshBasicMaterial({ color: 0xff5a3c, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false });
    var ripple = new THREE.Mesh(new THREE.RingGeometry(0.3, 0.42, 32), rippleM);
    ripple.rotation.x = -Math.PI / 2;
    ripple.position.y = 0.02;
    pin.add(ripple);

    /* ---------------- Satellites + orbits ---------------- */
    var sats = [];
    var tilts = [[0.3, 0], [1.1, 0.6], [-0.9, 1.9], [0.7, -2.4]];
    tilts.forEach(function (tl, i) {
      var plane = new THREE.Group();
      plane.rotation.set(tl[0], tl[1], 0);
      api.decor(plane);

      var ring = api.torus(ORBIT, 0.035, mat(0x7ea6ff, { rough: 0.5 }), 0, 0, 0);
      ring.rotation.x = Math.PI / 2;
      plane.add(ring);
      api.addPart("orbit", ring, null);

      var pivot = new THREE.Group();
      pivot.rotation.y = i * 1.7;
      plane.add(pivot);

      var sat = new THREE.Group();
      sat.add(box(0.5, 0.5, 0.7, mat(0xe0b04a, { metal: 0.8, rough: 0.35 }), 0, 0, 0));
      var panelM = mat(0x1d3fa8, { metal: 0.4, rough: 0.3 });
      sat.add(box(1.3, 0.04, 0.5, panelM, -1.0, 0, 0));
      sat.add(box(1.3, 0.04, 0.5, panelM, 1.0, 0, 0));
      sat.add(cyl(0.03, 0.03, 0.5, mat(0xc9ced8), -0.4, 0, 0, 6));
      var dish = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 8, 0, Math.PI * 2, 0, Math.PI / 3), mat(0xf2f4f8, { rough: 0.3 }));
      dish.rotation.x = Math.PI; dish.position.y = -0.45;
      sat.add(dish);
      sat.position.set(ORBIT, 0, 0);
      pivot.add(sat);
      api.addPart("satellite", sat, null);
      sats.push({ sat: sat, pivot: pivot, speed: 0.12 + i * 0.03 });
    });

    /* ---------------- Signal lines (3 rods, har frame update) ---------------- */
    var sigGroup = new THREE.Group();
    var sigM = mat(0xffe14a, { rough: 0.3 });
    var rods = [];
    for (var k = 0; k < 3; k++) {
      var rod = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1, 8), sigM);
      sigGroup.add(rod);
      rods.push(rod);
    }
    api.addPart("signal", sigGroup, new THREE.Vector3(0, 0, 0), null, { focus: false });
    sigGroup.visible = false;

    s.earth = earth; s.sats = sats; s.rods = rods; s.sigGroup = sigGroup; s.pinTip = pinTip; s.pin = pin;
    s.ripple = ripple; s.rippleM = rippleM;
    s.fast = false; s.finding = 0; s.found = 0;

    s.find = function () {
      s.finding = 2.4; s.found = 0;
      sigGroup.visible = true;
      api.setStatus("listening", 0);
    };
    s.toggleSpeed = function () {
      s.fast = !s.fast;
      api.setButton("speed", s.fast ? "slow" : "fast");
      if (s.fast) api.setStatus("fast_on", 3500); else api.setStatus(null);
    };
    /* pehle se signal part chune to lines dikha do */
    s.showSignals = function () { sigGroup.visible = true; s.found = Math.max(s.found, 4); };
  },

  onSelect: function (api, id) {
    if (id === "signal") api.state.showSignals();
  },

  update: function (api, dt, t) {
    var THREE = api.THREE;
    var s = api.state;
    var still = api.reduceMotion;
    var mult = s.fast ? 6 : 1;

    if (!still) {
      s.earth.rotation.y += dt * 0.08 * mult;
      s.sats.forEach(function (o) { o.pivot.rotation.y += dt * o.speed * mult; });
    }

    /* Signal: phone ke sabse paas ke 3 satellite */
    if (s.sigGroup.visible) {
      var tip = new THREE.Vector3();
      s.pinTip.getWorldPosition(tip);
      var up = tip.clone().normalize();
      var list = s.sats.map(function (o) {
        var p = new THREE.Vector3();
        o.sat.getWorldPosition(p);
        return { p: p, score: p.clone().normalize().dot(up) };
      }).sort(function (a, b) { return b.score - a.score; });
      var pulse = s.finding > 0 ? 0.5 + 0.5 * Math.abs(Math.sin(t * 10)) : 1;
      for (var i = 0; i < 3; i++) {
        var a = list[i].p, dir = new THREE.Vector3().subVectors(tip, a);
        var rod = s.rods[i];
        rod.position.copy(a).addScaledVector(dir, 0.5);
        rod.scale.set(pulse, dir.length(), pulse);
        rod.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
      }
    }

    if (s.finding > 0) {
      s.finding -= dt;
      if (s.finding <= 0) {
        s.found = 5;
        api.setStatus("found", 5000);
      }
    }
    if (s.found > 0) {
      s.found -= dt;
      var k = still ? 0.5 : (t * 0.9) % 1;
      s.ripple.scale.setScalar(1 + k * 3);
      s.rippleM.opacity = 0.8 * (1 - k);
      s.pin.scale.setScalar(1 + (still ? 0 : 0.15 * Math.abs(Math.sin(t * 6))));
      if (s.found <= 0) { s.sigGroup.visible = false; s.rippleM.opacity = 0; s.pin.scale.setScalar(1); }
    }
  }
});
