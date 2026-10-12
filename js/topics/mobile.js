/* Topic: Mobile phone ke andar */
TL.start({
  id: "mobile",
  camera: { theta: 0.55, phi: 1.2, radius: 13, target: [0, 3.2, 0], min: 6, max: 24, explodeRadius: 16 },
  explode: true,
  order: ["screen", "chip", "battery", "camera", "speaker", "antenna"],
  parts: {
    screen: { emoji: "📲" }, chip: { emoji: "🧠" }, battery: { emoji: "🔋" },
    camera: { emoji: "📷" }, speaker: { emoji: "🔈" }, antenna: { emoji: "📶" }
  },
  quiz: [
    { part: "screen", a: 0 }, { part: "chip", a: 2 }, { part: "battery", a: 1 },
    { part: "camera", a: 1 }, { part: "antenna", a: 3 }, { part: "speaker", a: 0 }
  ],
  actions: [
    { id: "call", label: "call", main: true, onClick: function (api) { api.state.toggleCall(); } },
    { id: "photo", label: "photo", onClick: function (api) { api.state.takePhoto(); } }
  ],

  /* ------------------------------------------------------------------
     CONTENT: har bhasha ka text. Quiz ke options ka order sab bhashaon me same rakho.
  ------------------------------------------------------------------ */
  text: {
    hinglish: {
      tagline: "Chhote se phone me kitna kuch!",
      intro: '<strong>Chalo phone kholein!</strong> "Parts alag karo" dabao aur dekho andar kya hai. Phir "Call karo" aur "Photo lo" dabakar dekho phone kaise kaam karta hai.',
      ui: {
        call: "📞 Call karo", hang: "📵 Call kaato", photo: "📸 Photo lo",
        call_go: "📶 Antenna radio waves bhej raha hai. Signal tower tak pahunch gaya!",
        call_end: "Call khatam. Antenna ab aaram kar raha hai",
        photo_msg: "📸 Click! Lens ne roshni pakdi aur chip ne photo bana di. Phone ghumakar peeche camera dekho"
      },
      parts: {
        screen: { name: "Touchscreen", tag: "Dekhne aur chhoone wali khidki",
          what: "Screen me laakhon chhote rangeen dots (pixels) hote hain jo jal-bujh kar tasveer banate hain. Uske upar ek patli parat hoti hai jo tumhari ungli ki halki si bijli mehsoos karti hai. Isliye screen jaanti hai ki tumne kahan chhua.",
          real: "Jaise rangoli chhote chhote rang ke daano se banti hai, waise hi screen ki tasveer pixels se banti hai.",
          fact: "Oon ke dastane (gloves) pehen kar touch karo to screen aksar kaam nahi karti, kyunki kapda ungli ki bijli rok deta hai." },
        chip: { name: "Processor chip (SoC)", short: "Chip", tag: "Phone ka dimaag",
          what: "Ye chhoti si chip phone ka saara hisaab karti hai: app kholna, game chalana, photo banana. Isi ek chip ke andar CPU, GPU aur bahut kuch ek saath hota hai.",
          real: "Jaise ek chhote se dabbe me poora kitchen ho: gas, fridge aur bartan sab ek saath.",
          fact: "Aaj ke phone ki chip un computers se bhi bahut tez hai jinki madad se insaan pehli baar chaand par gaya tha." },
        battery: { name: "Battery (Lithium-ion)", short: "Battery", tag: "Phone ka power bank",
          what: "Phone ka sabse bada hissa battery hai. Charge karte waqt bijli iske andar jama hoti hai, aur din bhar dheere dheere kharch hoti hai. Ye baar baar recharge ho sakti hai.",
          real: "Jaise paani ki tanki raat ko bhar lete hain aur din bhar paani use karte hain.",
          fact: "Battery ko bahut garam jagah, jaise dhoop me khadi car me, nahi chhodna chahiye. Garmi se wo jaldi kharab hoti hai." },
        camera: { name: "Camera", tag: "Phone ki aankh",
          what: "Camera ka lens roshni ko ek chhote sensor par ikattha karta hai. Sensor har rang ki roshni ko numbers me badal deta hai, aur chip un numbers se photo bana deti hai. Phone ghumakar peeche dekho!",
          real: "Hamari aankh bhi lens se roshni pakadti hai, aur dimaag tasveer samajhta hai.",
          fact: "Kai phone me 3-4 camera hote hain: ek door ki cheez ke liye, ek chaude scene ke liye, aur ek bilkul paas ke liye." },
        speaker: { name: "Speaker", tag: "Phone ki awaaz",
          what: "Speaker me ek chhota magnet aur ek patli parat hoti hai. Bijli ka signal parat ko bahut tezi se aage-peeche hilata hai. Isse hawa kaanpti hai aur hume awaaz sunai deti hai.",
          real: "Thaali par chammach maaro to thaali kaanpti hai aur awaaz aati hai. Speaker bhi aise hi kaanpta hai.",
          fact: "Phone me ek chhota mic bhi hota hai jo ulta kaam karta hai: tumhari awaaz ko bijli ke signal me badalta hai." },
        antenna: { name: "Antenna", tag: "Tower se baat karne wala",
          what: "Antenna radio waves bhejta aur pakadta hai. In anadekhi lehron se phone mobile tower tak call, message aur internet bhejta hai. Kai phone me bahar ka metal frame hi antenna hota hai!",
          real: "Jaise FM radio hawa se gaane pakad leta hai.",
          fact: "Radio waves roshni ki speed se chalti hain: ek second me lagbhag 3 lakh kilometre!" }
      },
      quiz: [
        { q: "Touchscreen kaise jaanti hai ki tumne kahan chhua?", o: ["Ungli ki halki bijli se", "Ungli ki garmi se", "Awaaz se", "Hawa se"],
          why: "Screen ki parat ungli ki halki bijli mehsoos karti hai. Isliye oon ke gloves pehen kar touch kaam nahi karta." },
        { q: "Phone ka dimaag kaun sa hissa hai?", o: ["Battery", "Speaker", "Processor chip", "Camera"],
          why: "Processor chip hi saare hisaab aur kaam karti hai." },
        { q: "Phone ki battery kaisi hoti hai?", o: ["Ek baar chalakar phenkne wali", "Baar baar recharge hone wali", "Paani se chalne wali", "Sirf dhoop se chalne wali"],
          why: "Lithium-ion battery hazaaron baar charge ho sakti hai." },
        { q: "Camera kya pakadta hai?", o: ["Awaaz", "Roshni", "Garmi", "Hawa"],
          why: "Lens roshni ko sensor par ikattha karta hai, aur usi se photo banti hai." },
        { q: "Phone mobile tower tak signal kaise bhejta hai?", o: ["Taar se", "Speaker se", "Camera se", "Antenna ki radio waves se"],
          why: "Antenna anadekhi radio waves se tower tak signal bhejta hai." },
        { q: "Speaker awaaz kaise banata hai?", o: ["Ek parat ko tezi se hila kar", "Roshni jala kar", "Battery garam karke", "Hawa ko rok kar"],
          why: "Parat kaanpti hai, usse hawa kaanpti hai, aur hume awaaz sunai deti hai." }
      ]
    },

    en: {
      tagline: "So much inside a small phone!",
      intro: '<strong>Let\'s open the phone!</strong> Press "Take apart" to see what is inside. Then press "Make a call" and "Take a photo" to see how a phone works.',
      ui: {
        call: "📞 Make a call", hang: "📵 End call", photo: "📸 Take a photo",
        call_go: "📶 The antenna is sending radio waves. The signal reached the tower!",
        call_end: "Call ended. The antenna is resting now",
        photo_msg: "📸 Click! The lens caught the light and the chip made a photo. Turn the phone to see the camera at the back"
      },
      parts: {
        screen: { name: "Touchscreen", tag: "A window you can see and touch",
          what: "The screen has millions of tiny coloured dots (pixels) that switch on and off to make a picture. On top is a thin layer that feels the tiny bit of electricity in your finger. That is how the screen knows where you touched.",
          real: "Just as a rangoli is made of tiny grains of colour, a screen picture is made of pixels.",
          fact: "If you wear woollen gloves the screen often does not work, because the cloth blocks your finger's electricity." },
        chip: { name: "Processor chip (SoC)", short: "Chip", tag: "The phone's brain",
          what: "This small chip does all the phone's thinking: opening apps, running games, making photos. One chip holds the CPU, the GPU and much more together.",
          real: "Like a whole kitchen in one small box: stove, fridge and pots all together.",
          fact: "Today's phone chip is much faster than the computers that helped people reach the Moon for the first time." },
        battery: { name: "Battery (Lithium-ion)", short: "Battery", tag: "The phone's power bank",
          what: "The battery is the biggest part of a phone. Electricity is stored in it while charging, and used up slowly through the day. It can be recharged again and again.",
          real: "Like filling a water tank at night and using the water all day.",
          fact: "Don't leave a battery in a very hot place, like a car parked in the sun. Heat damages it quickly." },
        camera: { name: "Camera", tag: "The phone's eye",
          what: "The camera lens gathers light onto a tiny sensor. The sensor turns each colour of light into numbers, and the chip makes a photo from those numbers. Turn the phone and look at the back!",
          real: "Our eyes also catch light with a lens, and the brain understands the picture.",
          fact: "Many phones have 3 or 4 cameras: one for faraway things, one for wide scenes and one for very close things." },
        speaker: { name: "Speaker", tag: "The phone's voice",
          what: "A speaker has a small magnet and a thin sheet. The electric signal shakes the sheet back and forth very fast. That shakes the air, and we hear sound.",
          real: "Tap a steel plate with a spoon and the plate shakes and makes a sound. A speaker shakes the same way.",
          fact: "A phone also has a tiny mic that does the opposite: it turns your voice into an electric signal." },
        antenna: { name: "Antenna", tag: "The part that talks to the tower",
          what: "The antenna sends and catches radio waves. Using these invisible waves, the phone sends calls, messages and internet to the mobile tower. In many phones the metal frame itself is the antenna!",
          real: "Like an FM radio catching songs from the air.",
          fact: "Radio waves travel at the speed of light: about 3 lakh kilometres in one second!" }
      },
      quiz: [
        { q: "How does a touchscreen know where you touched?", o: ["From the tiny electricity in your finger", "From the heat of your finger", "From sound", "From air"],
          why: "The screen's layer feels the tiny electricity in your finger. That is why touch doesn't work with woollen gloves." },
        { q: "Which part is the phone's brain?", o: ["Battery", "Speaker", "Processor chip", "Camera"],
          why: "The processor chip does all the thinking and the work." },
        { q: "What kind of battery does a phone have?", o: ["One you use once and throw away", "One you can recharge again and again", "One that runs on water", "One that runs only on sunlight"],
          why: "A lithium-ion battery can be charged thousands of times." },
        { q: "What does a camera catch?", o: ["Sound", "Light", "Heat", "Air"],
          why: "The lens gathers light onto the sensor, and that makes the photo." },
        { q: "How does a phone send a signal to the mobile tower?", o: ["Through a wire", "Through the speaker", "Through the camera", "With radio waves from the antenna"],
          why: "The antenna sends the signal to the tower with invisible radio waves." },
        { q: "How does a speaker make sound?", o: ["By shaking a thin sheet very fast", "By switching on a light", "By heating the battery", "By stopping the air"],
          why: "The sheet shakes, that shakes the air, and we hear sound." }
      ]
    },

    hi: {
      tagline: "छोटे-से फ़ोन में कितना कुछ!",
      intro: '<strong>चलो फ़ोन खोलें!</strong> "पार्ट्स अलग करो" दबाओ और देखो अंदर क्या है। फिर "कॉल करो" और "फ़ोटो लो" दबाकर देखो फ़ोन कैसे काम करता है।',
      ui: {
        call: "📞 कॉल करो", hang: "📵 कॉल काटो", photo: "📸 फ़ोटो लो",
        call_go: "📶 एंटीना रेडियो तरंगें भेज रहा है। सिग्नल टावर तक पहुँच गया!",
        call_end: "कॉल खत्म। एंटीना अब आराम कर रहा है",
        photo_msg: "📸 क्लिक! लेंस ने रोशनी पकड़ी और चिप ने फ़ोटो बना दी। फ़ोन घुमाकर पीछे कैमरा देखो"
      },
      parts: {
        screen: { name: "टचस्क्रीन", tag: "देखने और छूने वाली खिड़की",
          what: "स्क्रीन में लाखों छोटे रंगीन बिंदु (पिक्सल) होते हैं जो जल-बुझकर तस्वीर बनाते हैं। उसके ऊपर एक पतली परत होती है जो तुम्हारी उँगली की हल्की-सी बिजली महसूस करती है। इसलिए स्क्रीन जानती है कि तुमने कहाँ छुआ।",
          real: "जैसे रंगोली छोटे-छोटे रंग के दानों से बनती है, वैसे ही स्क्रीन की तस्वीर पिक्सल से बनती है।",
          fact: "ऊन के दस्ताने पहनकर छुओ तो स्क्रीन अक्सर काम नहीं करती, क्योंकि कपड़ा उँगली की बिजली रोक देता है।" },
        chip: { name: "प्रोसेसर चिप (SoC)", short: "चिप", tag: "फ़ोन का दिमाग",
          what: "यह छोटी-सी चिप फ़ोन का सारा हिसाब करती है: ऐप खोलना, गेम चलाना, फ़ोटो बनाना। इसी एक चिप के अंदर CPU, GPU और बहुत कुछ एक साथ होता है।",
          real: "जैसे एक छोटे-से डिब्बे में पूरी रसोई हो: गैस, फ़्रिज और बर्तन सब एक साथ।",
          fact: "आज के फ़ोन की चिप उन कंप्यूटरों से भी बहुत तेज़ है जिनकी मदद से इंसान पहली बार चाँद पर गया था।" },
        battery: { name: "बैटरी (लिथियम-आयन)", short: "बैटरी", tag: "फ़ोन का पावर बैंक",
          what: "फ़ोन का सबसे बड़ा हिस्सा बैटरी है। चार्ज करते समय बिजली इसके अंदर जमा होती है, और दिन भर धीरे-धीरे खर्च होती है। यह बार-बार रिचार्ज हो सकती है।",
          real: "जैसे पानी की टंकी रात को भर लेते हैं और दिन भर पानी इस्तेमाल करते हैं।",
          fact: "बैटरी को बहुत गरम जगह, जैसे धूप में खड़ी कार में, नहीं छोड़ना चाहिए। गर्मी से वह जल्दी खराब होती है।" },
        camera: { name: "कैमरा", tag: "फ़ोन की आँख",
          what: "कैमरे का लेंस रोशनी को एक छोटे सेंसर पर इकट्ठा करता है। सेंसर हर रंग की रोशनी को नंबरों में बदल देता है, और चिप उन नंबरों से फ़ोटो बना देती है। फ़ोन घुमाकर पीछे देखो!",
          real: "हमारी आँख भी लेंस से रोशनी पकड़ती है, और दिमाग तस्वीर समझता है।",
          fact: "कई फ़ोन में 3-4 कैमरे होते हैं: एक दूर की चीज़ के लिए, एक चौड़े नज़ारे के लिए, और एक बिल्कुल पास के लिए।" },
        speaker: { name: "स्पीकर", tag: "फ़ोन की आवाज़",
          what: "स्पीकर में एक छोटा चुंबक और एक पतली परत होती है। बिजली का सिग्नल परत को बहुत तेज़ी से आगे-पीछे हिलाता है। इससे हवा काँपती है और हमें आवाज़ सुनाई देती है।",
          real: "थाली पर चम्मच मारो तो थाली काँपती है और आवाज़ आती है। स्पीकर भी ऐसे ही काँपता है।",
          fact: "फ़ोन में एक छोटा माइक भी होता है जो उल्टा काम करता है: तुम्हारी आवाज़ को बिजली के सिग्नल में बदलता है।" },
        antenna: { name: "एंटीना", tag: "टावर से बात करने वाला",
          what: "एंटीना रेडियो तरंगें भेजता और पकड़ता है। इन अनदेखी तरंगों से फ़ोन मोबाइल टावर तक कॉल, मैसेज और इंटरनेट भेजता है। कई फ़ोन में बाहर का धातु का फ़्रेम ही एंटीना होता है!",
          real: "जैसे FM रेडियो हवा से गाने पकड़ लेता है।",
          fact: "रेडियो तरंगें रोशनी की रफ़्तार से चलती हैं: एक सेकंड में लगभग 3 लाख किलोमीटर!" }
      },
      quiz: [
        { q: "टचस्क्रीन कैसे जानती है कि तुमने कहाँ छुआ?", o: ["उँगली की हल्की बिजली से", "उँगली की गर्मी से", "आवाज़ से", "हवा से"],
          why: "स्क्रीन की परत उँगली की हल्की बिजली महसूस करती है। इसलिए ऊन के दस्ताने पहनकर टच काम नहीं करता।" },
        { q: "फ़ोन का दिमाग कौन-सा हिस्सा है?", o: ["बैटरी", "स्पीकर", "प्रोसेसर चिप", "कैमरा"],
          why: "प्रोसेसर चिप ही सारे हिसाब और काम करती है।" },
        { q: "फ़ोन की बैटरी कैसी होती है?", o: ["एक बार चलाकर फेंकने वाली", "बार-बार रिचार्ज होने वाली", "पानी से चलने वाली", "सिर्फ़ धूप से चलने वाली"],
          why: "लिथियम-आयन बैटरी हज़ारों बार चार्ज हो सकती है।" },
        { q: "कैमरा क्या पकड़ता है?", o: ["आवाज़", "रोशनी", "गर्मी", "हवा"],
          why: "लेंस रोशनी को सेंसर पर इकट्ठा करता है, और उसी से फ़ोटो बनती है।" },
        { q: "फ़ोन मोबाइल टावर तक सिग्नल कैसे भेजता है?", o: ["तार से", "स्पीकर से", "कैमरे से", "एंटीना की रेडियो तरंगों से"],
          why: "एंटीना अनदेखी रेडियो तरंगों से टावर तक सिग्नल भेजता है।" },
        { q: "स्पीकर आवाज़ कैसे बनाता है?", o: ["एक परत को तेज़ी से हिलाकर", "रोशनी जलाकर", "बैटरी गरम करके", "हवा को रोककर"],
          why: "परत काँपती है, उससे हवा काँपती है, और हमें आवाज़ सुनाई देती है।" }
      ]
    },

    mr: {
      tagline: "छोट्याशा फोनमध्ये केवढं काय!",
      intro: '<strong>चला फोन उघडूया!</strong> "भाग वेगळे करा" दाबा आणि आत काय आहे ते बघा. मग "कॉल करा" आणि "फोटो काढा" दाबून फोन कसा काम करतो ते बघा.',
      ui: {
        call: "📞 कॉल करा", hang: "📵 कॉल बंद करा", photo: "📸 फोटो काढा",
        call_go: "📶 अँटेना रेडिओ लहरी पाठवतोय. सिग्नल टॉवरपर्यंत पोहोचला!",
        call_end: "कॉल संपला. अँटेना आता आराम करतोय",
        photo_msg: "📸 क्लिक! लेन्सने प्रकाश पकडला आणि चिपने फोटो बनवला. फोन फिरवून मागचा कॅमेरा बघा"
      },
      parts: {
        screen: { name: "टचस्क्रीन", tag: "बघण्याची आणि स्पर्शाची खिडकी",
          what: "स्क्रीनमध्ये लाखो छोटे रंगीत ठिपके (पिक्सेल) असतात. ते चालू-बंद होऊन चित्र बनवतात. त्यावर एक पातळ थर असतो जो तुमच्या बोटातली थोडीशी वीज ओळखतो. म्हणून स्क्रीनला कळतं की तुम्ही कुठे स्पर्श केला.",
          real: "जशी रांगोळी छोट्या छोट्या रंगाच्या कणांनी बनते, तसं स्क्रीनवरचं चित्र पिक्सेलनी बनतं.",
          fact: "लोकरीचे हातमोजे घालून स्पर्श केला तर स्क्रीन बहुतेक चालत नाही, कारण कापड बोटातली वीज अडवतं." },
        chip: { name: "प्रोसेसर चिप (SoC)", short: "चिप", tag: "फोनचा मेंदू",
          what: "ही छोटीशी चिप फोनचं सगळं गणित करते: ॲप उघडणं, गेम चालवणं, फोटो बनवणं. याच एका चिपमध्ये CPU, GPU आणि बरंच काही एकत्र असतं.",
          real: "जसं एका छोट्या डब्यात पूर्ण स्वयंपाकघर: गॅस, फ्रिज आणि भांडी सगळं एकत्र.",
          fact: "आजच्या फोनची चिप, माणूस पहिल्यांदा चंद्रावर गेला तेव्हाच्या कॉम्प्युटरपेक्षा खूप वेगवान आहे." },
        battery: { name: "बॅटरी (लिथियम-आयन)", short: "बॅटरी", tag: "फोनची पॉवर बँक",
          what: "बॅटरी हा फोनचा सगळ्यात मोठा भाग आहे. चार्ज करताना वीज तिच्यात साठते, आणि दिवसभर हळूहळू वापरली जाते. ती पुन्हा पुन्हा रिचार्ज करता येते.",
          real: "जशी पाण्याची टाकी रात्री भरून ठेवतो आणि दिवसभर पाणी वापरतो.",
          fact: "बॅटरी खूप गरम जागी, जसं उन्हात उभ्या गाडीत, ठेवू नये. उष्णतेने ती लवकर खराब होते." },
        camera: { name: "कॅमेरा", tag: "फोनचा डोळा",
          what: "कॅमेऱ्याची लेन्स प्रकाश एका छोट्या सेन्सरवर गोळा करते. सेन्सर प्रत्येक रंगाच्या प्रकाशाचं आकड्यांमध्ये रूपांतर करतो, आणि चिप त्या आकड्यांपासून फोटो बनवते. फोन फिरवून मागे बघा!",
          real: "आपला डोळाही लेन्सने प्रकाश पकडतो, आणि मेंदू चित्र समजून घेतो.",
          fact: "अनेक फोनमध्ये 3-4 कॅमेरे असतात: एक लांबच्या गोष्टीसाठी, एक रुंद दृश्यासाठी, आणि एक अगदी जवळच्यासाठी." },
        speaker: { name: "स्पीकर", tag: "फोनचा आवाज",
          what: "स्पीकरमध्ये एक छोटा चुंबक आणि एक पातळ पडदा असतो. विजेचा सिग्नल पडद्याला खूप वेगाने पुढे-मागे हलवतो. त्यामुळे हवा थरथरते आणि आपल्याला आवाज ऐकू येतो.",
          real: "ताटावर चमचा मारला तर ताट थरथरतं आणि आवाज येतो. स्पीकरही असाच थरथरतो.",
          fact: "फोनमध्ये एक छोटा माइकही असतो जो उलटं काम करतो: तुमच्या आवाजाचं विजेच्या सिग्नलमध्ये रूपांतर करतो." },
        antenna: { name: "अँटेना", tag: "टॉवरशी बोलणारा",
          what: "अँटेना रेडिओ लहरी पाठवतो आणि पकडतो. या न दिसणाऱ्या लहरींनी फोन मोबाइल टॉवरपर्यंत कॉल, मेसेज आणि इंटरनेट पाठवतो. अनेक फोनमध्ये बाहेरची धातूची फ्रेमच अँटेना असते!",
          real: "जसा FM रेडिओ हवेतून गाणी पकडतो.",
          fact: "रेडिओ लहरी प्रकाशाच्या वेगाने जातात: एका सेकंदात सुमारे 3 लाख किलोमीटर!" }
      },
      quiz: [
        { q: "तुम्ही कुठे स्पर्श केला हे टचस्क्रीनला कसं कळतं?", o: ["बोटातल्या थोड्याशा विजेमुळे", "बोटाच्या उष्णतेमुळे", "आवाजामुळे", "हवेमुळे"],
          why: "स्क्रीनचा थर बोटातली थोडीशी वीज ओळखतो. म्हणून लोकरीचे हातमोजे घालून टच चालत नाही." },
        { q: "फोनचा मेंदू कोणता भाग आहे?", o: ["बॅटरी", "स्पीकर", "प्रोसेसर चिप", "कॅमेरा"],
          why: "प्रोसेसर चिपच सगळं गणित आणि काम करते." },
        { q: "फोनची बॅटरी कशी असते?", o: ["एकदा वापरून फेकून देण्याची", "पुन्हा पुन्हा रिचार्ज होणारी", "पाण्यावर चालणारी", "फक्त उन्हावर चालणारी"],
          why: "लिथियम-आयन बॅटरी हजारो वेळा चार्ज होऊ शकते." },
        { q: "कॅमेरा काय पकडतो?", o: ["आवाज", "प्रकाश", "उष्णता", "हवा"],
          why: "लेन्स प्रकाश सेन्सरवर गोळा करते, आणि त्यातूनच फोटो बनतो." },
        { q: "फोन मोबाइल टॉवरपर्यंत सिग्नल कसा पाठवतो?", o: ["वायरने", "स्पीकरने", "कॅमेऱ्याने", "अँटेनाच्या रेडिओ लहरींनी"],
          why: "अँटेना न दिसणाऱ्या रेडिओ लहरींनी टॉवरपर्यंत सिग्नल पाठवतो." },
        { q: "स्पीकर आवाज कसा तयार करतो?", o: ["एक पातळ पडदा वेगाने हलवून", "दिवा लावून", "बॅटरी गरम करून", "हवा अडवून"],
          why: "पडदा थरथरतो, त्यामुळे हवा थरथरते, आणि आपल्याला आवाज ऐकू येतो." }
      ]
    }
  },

  /* ------------------------------------------------------------------
     3D MODEL: phone khada hai, screen saamne (+z), camera peeche
  ------------------------------------------------------------------ */
  build: function (api) {
    var THREE = api.THREE, mat = api.mat, box = api.box, cyl = api.cyl, sphere = api.sphere;
    var V = function (x, y, z) { return new THREE.Vector3(x, y, z); };
    var s = api.state;
    var PY = 3.4;           // phone ka beech

    /* Stand */
    var standM = mat(0x8a95ab, { rough: 0.6 });
    api.decor(box(4.4, 0.2, 2.4, standM, 0, 0.1, 0));
    api.decor(box(3.6, 0.45, 0.2, standM, 0, 0.42, 0.5));

    /* Screen */
    var displayM = mat(0x0b1020, { glow: 0x3a6bff, glowLevel: 0.35, rough: 0.2 });
    (function () {
      var g = new THREE.Group();
      g.add(box(3.2, 6.4, 0.08, mat(0x101318, { rough: 0.3 }), 0, 0, 0));
      g.add(box(2.95, 6.1, 0.02, displayM, 0, 0, 0.05));
      var colors = [0xff5a3c, 0x2b6bff, 0x12995f, 0xffc233, 0xc04bff, 0x19b5c9, 0xff8ac4, 0xffffff];
      for (var r = 0; r < 5; r++) {
        for (var c = 0; c < 4; c++) {
          var icon = box(0.48, 0.48, 0.03, mat(colors[(r * 4 + c) % colors.length], { rough: 0.4 }), -1.05 + c * 0.7, 2.0 - r * 0.78, 0.07);
          g.add(icon);
        }
      }
      var front = cyl(0.08, 0.08, 0.03, mat(0x000000), 0, 2.85, 0.07, 12);
      front.rotation.x = Math.PI / 2;
      g.add(front);
      api.addPart("screen", g, V(0, PY, 0.2), V(0, 0, 2.4));
    })();

    /* Metal frame = antenna */
    (function () {
      var g = new THREE.Group();
      var fm = mat(0xb9c1cf, { metal: 0.85, rough: 0.3 });
      var gap = mat(0x22252d);
      g.add(box(0.1, 6.4, 0.45, fm, -1.6, 0, 0));
      g.add(box(0.1, 6.4, 0.45, fm, 1.6, 0, 0));
      g.add(box(3.3, 0.1, 0.45, fm, 0, 3.2, 0));
      g.add(box(3.3, 0.1, 0.45, fm, 0, -3.2, 0));
      /* plastic ki patti: antenna ke hisse alag karti hai */
      [[-1.6, 2.6], [1.6, 2.6], [-1.6, -2.6], [1.6, -2.6]].forEach(function (p) {
        g.add(box(0.12, 0.09, 0.46, gap, p[0], p[1], 0));
      });
      g.add(box(0.06, 0.6, 0.15, fm, 1.66, 1.4, 0));
      g.add(box(0.06, 0.9, 0.15, fm, -1.66, 1.6, 0));
      api.addPart("antenna", g, V(0, PY, 0));
    })();

    /* Chip board */
    (function () {
      var g = new THREE.Group();
      g.add(box(2.9, 1.9, 0.04, mat(0x0e8a78, { rough: 0.5 }), 0, 0, 0));
      g.add(box(0.75, 0.75, 0.05, mat(0x1a1d26), -0.2, 0.1, 0.03));
      g.add(box(0.55, 0.55, 0.01, mat(0xc9ced8, { metal: 0.9, rough: 0.25 }), -0.2, 0.1, 0.06));
      var small = mat(0x2b2f3a);
      g.add(box(0.4, 0.25, 0.04, small, 0.8, 0.5, 0.03));
      g.add(box(0.3, 0.3, 0.04, small, 0.85, -0.3, 0.03));
      g.add(box(0.5, 0.2, 0.04, mat(0xe6b93c, { metal: 0.8, rough: 0.3 }), -0.9, -0.6, 0.03));
      api.addPart("chip", g, V(0, PY + 1.95, 0.1), V(0, 0, 1.3));
    })();

    /* Battery */
    (function () {
      var g = new THREE.Group();
      g.add(box(2.8, 3.6, 0.22, mat(0x2a2f3c, { rough: 0.5 }), 0, 0, 0));
      var label = mat(0xffc233, { rough: 0.5 });
      g.add(box(2.0, 1.0, 0.01, label, 0, 0.3, -0.115));
      g.add(box(2.0, 1.0, 0.01, label, 0, 0.3, 0.115));
      var plus = mat(0xd12f4c);
      g.add(box(0.36, 0.08, 0.01, plus, 0, -0.8, -0.115));
      g.add(box(0.08, 0.36, 0.01, plus, 0, -0.8, -0.115));
      api.addPart("battery", g, V(0, PY - 0.75, -0.02));
    })();

    /* Camera (peeche) */
    var flashM = mat(0xf4f4f4, { glow: 0xffffff, glowLevel: 0, rough: 0.2 });
    var flashLight = new THREE.PointLight(0xffffff, 0, 10);
    (function () {
      var g = new THREE.Group();
      g.add(box(1.15, 1.15, 0.12, mat(0x2b2f3a, { rough: 0.4 }), 0, 0, 0));
      var ring = mat(0xc9ced8, { metal: 0.9, rough: 0.25 });
      var glass = mat(0x0a0d18, { rough: 0.05, metal: 0.4 });
      [[-0.24, 0.24], [-0.24, -0.24]].forEach(function (p) {
        var r = cyl(0.24, 0.24, 0.08, ring, p[0], p[1], -0.08, 24); r.rotation.x = Math.PI / 2; g.add(r);
        var l = cyl(0.17, 0.17, 0.1, glass, p[0], p[1], -0.09, 24); l.rotation.x = Math.PI / 2; g.add(l);
      });
      var fl = cyl(0.1, 0.1, 0.06, flashM, 0.27, 0.27, -0.07, 16);
      fl.rotation.x = Math.PI / 2;
      g.add(fl);
      flashLight.position.set(0.27, 0.27, -0.6);
      g.add(flashLight);
      api.addPart("camera", g, V(-0.85, PY + 2.4, -0.26), V(0, 0, -1.4));
    })();

    /* Speaker (neeche) */
    var cone;
    (function () {
      var g = new THREE.Group();
      g.add(box(1.3, 0.35, 0.3, mat(0x1a1d26), 0, 0, 0));
      cone = cyl(0.13, 0.13, 0.05, mat(0x9aa3b5, { metal: 0.6 }), 0, 0, 0.16, 16);
      cone.rotation.x = Math.PI / 2;
      g.add(cone);
      var hole = mat(0x0a0a0a);
      for (var i = 0; i < 6; i++) g.add(cyl(0.05, 0.05, 0.14, hole, -0.4 + i * 0.16, -0.22, 0, 8));
      api.addPart("speaker", g, V(0.5, PY - 2.85, 0), V(0, -0.9, 0.8));
    })();

    /* Mobile tower (sajawat) */
    (function () {
      var g = new THREE.Group();
      var steel = mat(0x9aa3b5, { metal: 0.7, rough: 0.4 });
      [[-1, -1], [1, -1], [1, 1], [-1, 1]].forEach(function (p) {
        g.add(api.rod(V(p[0] * 0.8, 0, p[1] * 0.8), V(p[0] * 0.15, 7, p[1] * 0.15), 0.05, steel));
      });
      for (var h = 1; h < 7; h += 1.5) {
        var w = 0.8 - (0.65 * h) / 7;
        g.add(box(w * 2, 0.05, 0.05, steel, 0, h, w));
        g.add(box(w * 2, 0.05, 0.05, steel, 0, h, -w));
      }
      g.add(box(0.25, 0.9, 0.12, mat(0xeeeeee), 0.25, 6.6, 0));
      g.add(box(0.25, 0.9, 0.12, mat(0xeeeeee), -0.25, 6.6, 0));
      g.add(sphere(0.12, mat(0xd12f4c, { glow: 0xff2222, glowLevel: 0.8 }), 0, 7.15, 0, 10));
      g.position.set(7, 0, -5);
      api.decor(g);
    })();

    /* Radio waves: phone ke upar badhte hue gol chhalle, aur tower tak jaate dots */
    var rings = [];
    for (var i = 0; i < 3; i++) {
      var rm = mat(0x19b5c9, { glow: 0x19b5c9, glowLevel: 0.8, opacity: 0 });
      var ring = api.torus(1, 0.04, rm, 0, PY + 3.4, 0);
      ring.rotation.x = Math.PI / 2;
      api.decor(ring);
      rings.push(ring);
    }
    var dots = [];
    var dotM = mat(0x19b5c9, { glow: 0x19b5c9, glowLevel: 1 });
    for (var d = 0; d < 6; d++) {
      var dot = sphere(0.1, dotM, 0, 0, 0, 10);
      dot.visible = false;
      api.decor(dot);
      dots.push(dot);
    }

    s.calling = false; s.flash = 0;
    s.displayM = displayM; s.flashM = flashM; s.flashLight = flashLight;
    s.rings = rings; s.dots = dots; s.cone = cone;
    s.from = V(0, PY + 3.3, 0); s.to = V(7, 7.1, -5);

    s.toggleCall = function () {
      s.calling = !s.calling;
      api.setButton("call", s.calling ? "hang" : "call");
      api.setStatus(s.calling ? "call_go" : "call_end", s.calling ? 4500 : 3000);
    };
    s.takePhoto = function () {
      s.flash = 0.35;
      api.setStatus("photo_msg", 5000);
    };
  },

  update: function (api, dt, t) {
    var s = api.state;
    if (s.flash > 0) s.flash -= dt;
    var flashing = s.flash > 0;

    /* screen ka rang: normal neela, call par hara, photo par safed */
    if (flashing) { s.displayM.emissive.setHex(0xffffff); s.displayM.emissiveIntensity = 0.9; }
    else if (s.calling) { s.displayM.emissive.setHex(0x31d17c); s.displayM.emissiveIntensity = 0.5 + 0.1 * Math.sin(t * 5); }
    else { s.displayM.emissive.setHex(0x3a6bff); s.displayM.emissiveIntensity = 0.35; }
    s.flashM.emissiveIntensity = flashing ? 3 : 0;
    s.flashLight.intensity = flashing ? 3 : 0;

    /* radio waves */
    s.rings.forEach(function (r, i) {
      var k = (t * 0.6 + i / 3) % 1;
      var sc = 0.6 + k * 4;
      r.scale.set(sc, sc, sc);
      r.material.opacity = s.calling ? (1 - k) * 0.8 : 0;
      r.visible = s.calling;
    });
    s.dots.forEach(function (d, i) {
      d.visible = s.calling;
      if (!s.calling) return;
      var k = (t * 0.5 + i / s.dots.length) % 1;
      d.position.copy(s.from).lerp(s.to, k);
    });

    /* speaker kaanpta hai jab call chal rahi ho */
    var shake = s.calling && !api.reduceMotion ? 1 + 0.35 * Math.abs(Math.sin(t * 40)) : 1;
    s.cone.scale.set(shake, 1, shake);
  }
});
