/* Topic: Internet kaise chalta hai */
TL.start({
  id: "internet",
  camera: { theta: 0.35, phi: 1.05, radius: 17, target: [0, 1, 0], min: 8, max: 30 },
  order: ["phone", "router", "cable", "isp", "server", "packet"],
  parts: {
    phone: { emoji: "📱" }, router: { emoji: "📶" }, cable: { emoji: "🧵" },
    isp: { emoji: "🏢" }, server: { emoji: "🗄️" }, packet: { emoji: "✉️" }
  },
  quiz: [
    { part: "packet", a: 1 }, { part: "router", a: 2 }, { part: "server", a: 0 },
    { part: "cable", a: 3 }, { part: "isp", a: 1 }, { part: "phone", a: 2 }
  ],
  actions: [
    { id: "send", label: "send", main: true, onClick: function (api) { api.state.send(); } }
  ],

  text: {
    hinglish: {
      tagline: "Tumhara message duniya ki sair kaise karta hai",
      intro: '<strong>Chalo shuru karein!</strong> "Message bhejo" dabao aur dekho message phone se server tak kaise jaata hai aur jawab kaise wapas aata hai. Kisi bhi cheez par tap karke uske baare me padho.',
      ui: {
        send: "✉️ Message bhejo",
        s1: "1. Phone ne message ko chhote packets me toda",
        s2: "2. Packet Wi‑Fi ki hawa se router tak gaya",
        s3: "3. Router ne packet cable me bheja",
        s4: "4. Internet company (ISP) ne sahi raasta chuna",
        s5: "5. Packet server tak pahunch gaya! Server jawab bana raha hai",
        s6: "6. Jawab wapas aa raha hai…",
        s7: "✅ Jawab phone par aa gaya! Poora safar 1 second se bhi kam me"
      },
      parts: {
        phone: { name: "Phone", tag: "Message bhejne wala",
          what: "Jab tum message bhejte ho, phone use chhote chhote tukdon me todta hai jinhe packet kehte hain. Har packet par pata likha hota hai ki use kahan jaana hai.",
          real: "Jaise chitthi par ghar ka pata likhte ho, waise hi har packet par address hota hai.",
          fact: "Har phone aur computer ka internet par ek pata hota hai, jise IP address kehte hain." },
        router: { name: "Wi‑Fi Router", short: "Router", tag: "Ghar ka internet darwaza",
          what: "Router ghar ke saare phone aur laptop ko internet se jodta hai. Ye Wi‑Fi ki adrishya radio lehron se phone se baat karta hai.",
          real: "Society ka gate jahan se saari gaadiyan andar-bahar jaati hain.",
          fact: "Wi‑Fi bhi radio ki tarah lehron se chalta hai, bas ye lehrein dikhti nahi." },
        cable: { name: "Fibre Cable", short: "Cable", tag: "Roshni wali sadak",
          what: "Router se internet company tak patli cable jaati hai. Fibre cable ke andar data roshni ki chamak ban kar daudta hai.",
          real: "Jaise pipe me paani behta hai, waise hi cable me data behta hai.",
          fact: "Samundar ke neeche bhi cable bichhi hain jo desh ko desh se jodti hain." },
        isp: { name: "Internet Company (ISP)", short: "ISP", tag: "Raasta dikhane wala",
          what: "ISP wo company hai jo tumhe internet deti hai. Ye har packet ka pata padhkar use sahi raaste par aage bhejti hai.",
          real: "Jaise post office har chitthi ko sahi sheher ki gaadi me daalta hai.",
          fact: "Ek packet server tak pahunchne se pehle 10 se 20 router paar kar sakta hai." },
        server: { name: "Server", tag: "Internet ki badi almari",
          what: "Server ek bahut bada computer hai jo din-raat chalta rehta hai. Videos, games aur websites isi me rakhe hote hain. Ye tumhare message ka jawab bhejta hai.",
          real: "Library jahan se tum kitaab maangte ho aur librarian la ke deta hai.",
          fact: "Bade data center me hazaaron server ek saath lage hote hain." },
        packet: { name: "Data Packet", short: "Packet", tag: "Message ka chhota tukda",
          what: "Bada message chhote packets me toot kar jaata hai. Server tak pahunch kar sab packets dobara jud jaate hain.",
          real: "Badi puzzle ko tukdon me dabbe me bhejo, wahan pahunch kar dobara jod lo.",
          fact: "Ek video dekhne me hazaaron packets har second aate hain." }
      },
      quiz: [
        { q: "Internet par message kis roop me jaata hai?", o: ["Ek badi chitthi", "Chhote packets", "Awaaz", "Photo"],
          why: "Message chhote packets me toot kar jaata hai aur wahan dobara jud jaata hai." },
        { q: "Ghar me phone ko internet se kaun jodta hai?", o: ["Server", "Fan", "Wi‑Fi Router", "Battery"],
          why: "Router Wi‑Fi lehron se phone ko internet se jodta hai." },
        { q: "Videos aur websites kahan rakhe hote hain?", o: ["Server", "Router", "Cable", "Phone ka cover"],
          why: "Server bada computer hai jisme websites aur videos rehte hain." },
        { q: "Fibre cable me data kaise daudta hai?", o: ["Paani ban kar", "Hawa ban kar", "Awaaz ban kar", "Roshni ban kar"],
          why: "Fibre cable ke andar data roshni ki chamak ban kar bahut tez chalta hai." },
        { q: "ISP kya karta hai?", o: ["Phone banata hai", "Internet deta hai aur packet ko sahi raasta dikhata hai", "Game khelta hai", "Bijli banata hai"],
          why: "ISP internet company hai jo packets ko sahi raaste par bhejti hai." },
        { q: "Packet ko kaise pata chalta hai ki kahan jaana hai?", o: ["Wo andaza lagata hai", "Router se poochhta hai", "Us par pata (IP address) likha hota hai", "Wo rang dekhta hai"],
          why: "Chitthi ki tarah har packet par address likha hota hai." }
      ]
    },

    en: {
      tagline: "How your message travels the world",
      intro: '<strong>Let\'s begin!</strong> Press "Send message" and watch the message go from the phone to the server, and the reply come back. Tap anything to read about it.',
      ui: {
        send: "✉️ Send message",
        s1: "1. The phone breaks the message into small packets",
        s2: "2. The packet flies over Wi‑Fi to the router",
        s3: "3. The router sends the packet into the cable",
        s4: "4. The internet company (ISP) picks the right road",
        s5: "5. The packet reached the server! The server is making a reply",
        s6: "6. The reply is coming back…",
        s7: "✅ The reply reached the phone! The whole trip took less than 1 second"
      },
      parts: {
        phone: { name: "Phone", tag: "The sender",
          what: "When you send a message, the phone breaks it into small pieces called packets. Each packet has an address that says where it must go.",
          real: "Just like you write an address on a letter, every packet carries an address.",
          fact: "Every phone and computer on the internet has an address called an IP address." },
        router: { name: "Wi‑Fi Router", short: "Router", tag: "The home's internet door",
          what: "The router connects all the phones and laptops at home to the internet. It talks to your phone using invisible Wi‑Fi radio waves.",
          real: "Like the gate of a housing society where every car goes in and out.",
          fact: "Wi‑Fi works with waves like a radio, but you cannot see them." },
        cable: { name: "Fibre Cable", short: "Cable", tag: "A road made of light",
          what: "A thin cable runs from the router to the internet company. Inside a fibre cable, data races along as flashes of light.",
          real: "Like water flowing in a pipe, data flows in a cable.",
          fact: "Cables lie under the sea and connect one country to another." },
        isp: { name: "Internet Company (ISP)", short: "ISP", tag: "The route finder",
          what: "The ISP is the company that gives you internet. It reads each packet's address and sends it along the right road.",
          real: "Like a post office putting every letter in the van going to the right city.",
          fact: "A packet may pass through 10 to 20 routers before it reaches the server." },
        server: { name: "Server", tag: "The internet's big cupboard",
          what: "A server is a very big computer that runs day and night. Videos, games and websites are kept on it. It sends the reply to your message.",
          real: "Like a library where you ask for a book and the librarian brings it.",
          fact: "Big data centres hold thousands of servers together." },
        packet: { name: "Data Packet", short: "Packet", tag: "A small piece of the message",
          what: "A big message travels as small packets. At the server, all the packets join up again.",
          real: "Send a big puzzle in pieces in a box, then put it together when it arrives.",
          fact: "Watching a video brings in thousands of packets every second." }
      },
      quiz: [
        { q: "In what form does a message travel on the internet?", o: ["One big letter", "Small packets", "Sound", "A photo"],
          why: "The message breaks into small packets and joins up again at the other end." },
        { q: "What connects your phone to the internet at home?", o: ["Server", "Fan", "Wi‑Fi Router", "Battery"],
          why: "The router uses Wi‑Fi waves to connect the phone to the internet." },
        { q: "Where are videos and websites kept?", o: ["Server", "Router", "Cable", "Phone cover"],
          why: "A server is a big computer that stores websites and videos." },
        { q: "How does data travel in a fibre cable?", o: ["As water", "As air", "As sound", "As light"],
          why: "Inside a fibre cable, data travels very fast as flashes of light." },
        { q: "What does an ISP do?", o: ["Makes phones", "Gives internet and sends packets the right way", "Plays games", "Makes electricity"],
          why: "The ISP is the internet company that sends packets along the right road." },
        { q: "How does a packet know where to go?", o: ["It guesses", "It asks the router", "It carries an address (IP address)", "It looks at colours"],
          why: "Like a letter, every packet has an address written on it." }
      ]
    },

    hi: {
      tagline: "तुम्हारा मैसेज दुनिया की सैर कैसे करता है",
      intro: '<strong>चलो शुरू करें!</strong> "मैसेज भेजो" दबाओ और देखो मैसेज फ़ोन से सर्वर तक कैसे जाता है और जवाब कैसे वापस आता है। किसी भी चीज़ पर टैप करके उसके बारे में पढ़ो।',
      ui: {
        send: "✉️ मैसेज भेजो",
        s1: "1. फ़ोन ने मैसेज को छोटे पैकेट में तोड़ा",
        s2: "2. पैकेट वाई-फ़ाई की हवा से राउटर तक गया",
        s3: "3. राउटर ने पैकेट केबल में भेजा",
        s4: "4. इंटरनेट कंपनी (ISP) ने सही रास्ता चुना",
        s5: "5. पैकेट सर्वर तक पहुँच गया! सर्वर जवाब बना रहा है",
        s6: "6. जवाब वापस आ रहा है…",
        s7: "✅ जवाब फ़ोन पर आ गया! पूरा सफ़र 1 सेकंड से भी कम में"
      },
      parts: {
        phone: { name: "फ़ोन", tag: "मैसेज भेजने वाला",
          what: "जब तुम मैसेज भेजते हो, फ़ोन उसे छोटे-छोटे टुकड़ों में तोड़ता है जिन्हें पैकेट कहते हैं। हर पैकेट पर पता लिखा होता है कि उसे कहाँ जाना है।",
          real: "जैसे चिट्ठी पर घर का पता लिखते हो, वैसे ही हर पैकेट पर पता होता है।",
          fact: "हर फ़ोन और कंप्यूटर का इंटरनेट पर एक पता होता है, जिसे IP एड्रेस कहते हैं।" },
        router: { name: "वाई-फ़ाई राउटर", short: "राउटर", tag: "घर का इंटरनेट दरवाज़ा",
          what: "राउटर घर के सारे फ़ोन और लैपटॉप को इंटरनेट से जोड़ता है। यह वाई-फ़ाई की अदृश्य रेडियो लहरों से फ़ोन से बात करता है।",
          real: "सोसाइटी का गेट जहाँ से सारी गाड़ियाँ अंदर-बाहर जाती हैं।",
          fact: "वाई-फ़ाई भी रेडियो की तरह लहरों से चलता है, बस ये लहरें दिखती नहीं।" },
        cable: { name: "फ़ाइबर केबल", short: "केबल", tag: "रोशनी वाली सड़क",
          what: "राउटर से इंटरनेट कंपनी तक पतली केबल जाती है। फ़ाइबर केबल के अंदर डेटा रोशनी की चमक बनकर दौड़ता है।",
          real: "जैसे पाइप में पानी बहता है, वैसे ही केबल में डेटा बहता है।",
          fact: "समुद्र के नीचे भी केबल बिछी हैं जो देश को देश से जोड़ती हैं।" },
        isp: { name: "इंटरनेट कंपनी (ISP)", short: "ISP", tag: "रास्ता दिखाने वाला",
          what: "ISP वह कंपनी है जो तुम्हें इंटरनेट देती है। यह हर पैकेट का पता पढ़कर उसे सही रास्ते पर आगे भेजती है।",
          real: "जैसे डाकघर हर चिट्ठी को सही शहर की गाड़ी में डालता है।",
          fact: "एक पैकेट सर्वर तक पहुँचने से पहले 10 से 20 राउटर पार कर सकता है।" },
        server: { name: "सर्वर", tag: "इंटरनेट की बड़ी अलमारी",
          what: "सर्वर एक बहुत बड़ा कंप्यूटर है जो दिन-रात चलता रहता है। वीडियो, गेम और वेबसाइट इसी में रखे होते हैं। यह तुम्हारे मैसेज का जवाब भेजता है।",
          real: "लाइब्रेरी जहाँ तुम किताब माँगते हो और लाइब्रेरियन लाकर देता है।",
          fact: "बड़े डेटा सेंटर में हज़ारों सर्वर एक साथ लगे होते हैं।" },
        packet: { name: "डेटा पैकेट", short: "पैकेट", tag: "मैसेज का छोटा टुकड़ा",
          what: "बड़ा मैसेज छोटे पैकेट में टूटकर जाता है। सर्वर तक पहुँचकर सब पैकेट दोबारा जुड़ जाते हैं।",
          real: "बड़ी पज़ल को टुकड़ों में डिब्बे में भेजो, वहाँ पहुँचकर दोबारा जोड़ लो।",
          fact: "एक वीडियो देखने में हज़ारों पैकेट हर सेकंड आते हैं।" }
      },
      quiz: [
        { q: "इंटरनेट पर मैसेज किस रूप में जाता है?", o: ["एक बड़ी चिट्ठी", "छोटे पैकेट", "आवाज़", "फ़ोटो"],
          why: "मैसेज छोटे पैकेट में टूटकर जाता है और वहाँ दोबारा जुड़ जाता है।" },
        { q: "घर में फ़ोन को इंटरनेट से कौन जोड़ता है?", o: ["सर्वर", "पंखा", "वाई-फ़ाई राउटर", "बैटरी"],
          why: "राउटर वाई-फ़ाई लहरों से फ़ोन को इंटरनेट से जोड़ता है।" },
        { q: "वीडियो और वेबसाइट कहाँ रखे होते हैं?", o: ["सर्वर", "राउटर", "केबल", "फ़ोन का कवर"],
          why: "सर्वर बड़ा कंप्यूटर है जिसमें वेबसाइट और वीडियो रहते हैं।" },
        { q: "फ़ाइबर केबल में डेटा कैसे दौड़ता है?", o: ["पानी बनकर", "हवा बनकर", "आवाज़ बनकर", "रोशनी बनकर"],
          why: "फ़ाइबर केबल के अंदर डेटा रोशनी की चमक बनकर बहुत तेज़ चलता है।" },
        { q: "ISP क्या करता है?", o: ["फ़ोन बनाता है", "इंटरनेट देता है और पैकेट को सही रास्ता दिखाता है", "गेम खेलता है", "बिजली बनाता है"],
          why: "ISP इंटरनेट कंपनी है जो पैकेट को सही रास्ते पर भेजती है।" },
        { q: "पैकेट को कैसे पता चलता है कि कहाँ जाना है?", o: ["वह अंदाज़ा लगाता है", "राउटर से पूछता है", "उस पर पता (IP एड्रेस) लिखा होता है", "वह रंग देखता है"],
          why: "चिट्ठी की तरह हर पैकेट पर पता लिखा होता है।" }
      ]
    },

    mr: {
      tagline: "तुमचा मेसेज जगाची सफर कशी करतो",
      intro: '<strong>चला सुरू करूया!</strong> "मेसेज पाठवा" दाबा आणि बघा मेसेज फोनपासून सर्व्हरपर्यंत कसा जातो आणि उत्तर परत कसं येतं. कोणत्याही गोष्टीवर टॅप करून तिच्याबद्दल वाचा.',
      ui: {
        send: "✉️ मेसेज पाठवा",
        s1: "1. फोनने मेसेजचे छोटे पॅकेट केले",
        s2: "2. पॅकेट वाय-फायच्या हवेतून राउटरकडे गेलं",
        s3: "3. राउटरने पॅकेट केबलमध्ये पाठवलं",
        s4: "4. इंटरनेट कंपनीने (ISP) योग्य रस्ता निवडला",
        s5: "5. पॅकेट सर्व्हरपर्यंत पोहोचलं! सर्व्हर उत्तर तयार करतोय",
        s6: "6. उत्तर परत येतंय…",
        s7: "✅ उत्तर फोनवर आलं! पूर्ण प्रवास 1 सेकंदापेक्षाही कमी वेळात"
      },
      parts: {
        phone: { name: "फोन", tag: "मेसेज पाठवणारा",
          what: "तुम्ही मेसेज पाठवता तेव्हा फोन त्याचे छोटे छोटे तुकडे करतो, त्यांना पॅकेट म्हणतात. प्रत्येक पॅकेटवर त्याला कुठे जायचं आहे तो पत्ता लिहिलेला असतो.",
          real: "जसं पत्रावर घराचा पत्ता लिहितो, तसाच प्रत्येक पॅकेटवर पत्ता असतो.",
          fact: "इंटरनेटवर प्रत्येक फोन आणि कॉम्प्युटरचा एक पत्ता असतो, त्याला IP ॲड्रेस म्हणतात." },
        router: { name: "वाय-फाय राउटर", short: "राउटर", tag: "घराचा इंटरनेट दरवाजा",
          what: "राउटर घरातले सगळे फोन आणि लॅपटॉप इंटरनेटला जोडतो. तो वाय-फायच्या न दिसणाऱ्या रेडिओ लहरींनी फोनशी बोलतो.",
          real: "सोसायटीचं गेट, जिथून सगळ्या गाड्या आत-बाहेर जातात.",
          fact: "वाय-फाय पण रेडिओसारखं लहरींवर चालतं, फक्त या लहरी दिसत नाहीत." },
        cable: { name: "फायबर केबल", short: "केबल", tag: "प्रकाशाचा रस्ता",
          what: "राउटरपासून इंटरनेट कंपनीपर्यंत बारीक केबल जाते. फायबर केबलच्या आत डेटा प्रकाशाच्या चमकेच्या रूपात धावतो.",
          real: "जसं पाईपमधून पाणी वाहतं, तसा केबलमधून डेटा वाहतो.",
          fact: "समुद्राच्या तळाशीही केबल टाकलेल्या आहेत, त्या एका देशाला दुसऱ्या देशाशी जोडतात." },
        isp: { name: "इंटरनेट कंपनी (ISP)", short: "ISP", tag: "रस्ता दाखवणारा",
          what: "ISP म्हणजे तुम्हाला इंटरनेट देणारी कंपनी. ती प्रत्येक पॅकेटचा पत्ता वाचून त्याला योग्य रस्त्याने पुढे पाठवते.",
          real: "जसं पोस्ट ऑफिस प्रत्येक पत्र योग्य शहराच्या गाडीत टाकतं.",
          fact: "सर्व्हरपर्यंत पोहोचण्याआधी एक पॅकेट 10 ते 20 राउटर पार करू शकतं." },
        server: { name: "सर्व्हर", tag: "इंटरनेटचं मोठं कपाट",
          what: "सर्व्हर हा दिवस-रात्र चालणारा खूप मोठा कॉम्प्युटर आहे. व्हिडिओ, गेम आणि वेबसाइट त्यातच ठेवलेले असतात. तो तुमच्या मेसेजचं उत्तर पाठवतो.",
          real: "वाचनालयासारखं, जिथे तुम्ही पुस्तक मागता आणि ग्रंथपाल ते आणून देतात.",
          fact: "मोठ्या डेटा सेंटरमध्ये हजारो सर्व्हर एकत्र लावलेले असतात." },
        packet: { name: "डेटा पॅकेट", short: "पॅकेट", tag: "मेसेजचा छोटा तुकडा",
          what: "मोठा मेसेज छोट्या पॅकेटमध्ये तुटून जातो. सर्व्हरपर्यंत पोहोचल्यावर सगळी पॅकेट पुन्हा जुळतात.",
          real: "मोठं कोडं तुकड्यांमध्ये खोक्यात पाठवा, तिथे पोहोचल्यावर पुन्हा जोडा.",
          fact: "एक व्हिडिओ बघताना दर सेकंदाला हजारो पॅकेट येतात." }
      },
      quiz: [
        { q: "इंटरनेटवर मेसेज कोणत्या रूपात जातो?", o: ["एक मोठं पत्र", "छोटी पॅकेट", "आवाज", "फोटो"],
          why: "मेसेज छोट्या पॅकेटमध्ये तुटून जातो आणि तिथे पुन्हा जुळतो." },
        { q: "घरात फोनला इंटरनेटशी कोण जोडतो?", o: ["सर्व्हर", "पंखा", "वाय-फाय राउटर", "बॅटरी"],
          why: "राउटर वाय-फाय लहरींनी फोनला इंटरनेटशी जोडतो." },
        { q: "व्हिडिओ आणि वेबसाइट कुठे ठेवलेले असतात?", o: ["सर्व्हर", "राउटर", "केबल", "फोनचं कव्हर"],
          why: "सर्व्हर हा मोठा कॉम्प्युटर आहे, त्यात वेबसाइट आणि व्हिडिओ असतात." },
        { q: "फायबर केबलमध्ये डेटा कसा धावतो?", o: ["पाणी बनून", "हवा बनून", "आवाज बनून", "प्रकाश बनून"],
          why: "फायबर केबलच्या आत डेटा प्रकाशाच्या चमकेच्या रूपात खूप वेगाने जातो." },
        { q: "ISP काय करतो?", o: ["फोन बनवतो", "इंटरनेट देतो आणि पॅकेटला योग्य रस्ता दाखवतो", "गेम खेळतो", "वीज तयार करतो"],
          why: "ISP ही इंटरनेट कंपनी आहे, ती पॅकेट योग्य रस्त्याने पाठवते." },
        { q: "पॅकेटला कुठे जायचं हे कसं कळतं?", o: ["तो अंदाज लावतो", "राउटरला विचारतो", "त्याच्यावर पत्ता (IP ॲड्रेस) लिहिलेला असतो", "तो रंग बघतो"],
          why: "पत्रासारखा प्रत्येक पॅकेटवर पत्ता लिहिलेला असतो." }
      ]
    }
  },

  build: function (api) {
    var THREE = api.THREE, mat = api.mat, box = api.box, cyl = api.cyl, sphere = api.sphere;
    var V = function (x, y, z) { return new THREE.Vector3(x, y, z); };
    var s = api.state;

    /* Zameen */
    api.decor(box(18, 0.2, 7, mat(0x9fc79a, { rough: 0.9 }), 0, -0.1, 0));

    /* Phone */
    var screenM = mat(0x0f1a33, { glow: 0x5fd4ff, glowLevel: 0.15, rough: 0.3 });
    (function () {
      var g = new THREE.Group();
      g.add(box(1.1, 2.1, 0.16, mat(0x22252e, { rough: 0.4 }), 0, 0, 0));
      g.add(box(0.96, 1.8, 0.02, screenM, 0, 0.02, 0.09));
      g.add(box(0.8, 0.12, 0.6, mat(0x55627f), 0, -1.1, 0.1));   // stand
      g.rotation.y = 0.5;
      api.addPart("phone", g, V(-7, 1.2, 0.5));
    })();

    /* Router + Wi-Fi lehrein */
    var ledMs = [];
    (function () {
      var g = new THREE.Group();
      g.add(box(1.8, 0.4, 1.1, mat(0xf2f4f8, { rough: 0.4 }), 0, 0, 0));
      [-0.7, 0.7].forEach(function (x) {
        var a = cyl(0.05, 0.05, 1.2, mat(0x2b2f3a), x, 0.7, -0.4, 8);
        a.rotation.z = x * 0.2;
        g.add(a);
      });
      for (var i = 0; i < 4; i++) {
        var lm = mat(0x1a3a1a, { glow: 0x3fff7a, glowLevel: 0.2 });
        ledMs.push(lm);
        g.add(box(0.1, 0.06, 0.02, lm, -0.5 + i * 0.3, 0.05, 0.56));
      }
      api.addPart("router", g, V(-3.5, 0.2, 0));
    })();
    var waves = [];
    for (var w = 0; w < 3; w++) {
      var wm = new THREE.MeshBasicMaterial({ color: 0x2b6bff, transparent: true, opacity: 0.5, side: THREE.DoubleSide });
      var ring = new THREE.Mesh(new THREE.TorusGeometry(1, 0.03, 6, 40, Math.PI * 0.7), wm);
      ring.position.set(-5.25, 1.5, 0.25);
      ring.rotation.set(0, Math.PI / 2 - 0.1, Math.PI * 0.15);
      api.decor(ring);
      waves.push(ring);
    }

    /* Cable (router -> ISP -> server), zameen par */
    var cableM = mat(0xffb020, { rough: 0.4 });
    var cablePts = [V(-3.5, 0.12, 0.3), V(-3.5, 0.12, 1.6), V(0.6, 0.12, 1.6), V(0.6, 0.12, 1.1),
                    V(0.6, 0.12, 1.6), V(5.5, 0.12, 1.6), V(5.5, 0.12, 0.6)];
    (function () {
      var g = new THREE.Group();
      for (var i = 0; i < cablePts.length - 1; i++) {
        if (cablePts[i].distanceTo(cablePts[i + 1]) < 0.01) continue;
        g.add(api.rod(cablePts[i], cablePts[i + 1], 0.08, cableM));
      }
      api.addPart("cable", g, V(0, 0, 0));
    })();

    /* ISP building + tower */
    (function () {
      var g = new THREE.Group();
      g.add(box(2.2, 2.2, 1.8, mat(0x6a7fb5, { rough: 0.6 }), 0, 1.1, 0));
      var win = mat(0xd8ecff, { rough: 0.2, metal: 0.3 });
      for (var r = 0; r < 2; r++) for (var c = 0; c < 3; c++) g.add(box(0.4, 0.4, 0.02, win, -0.65 + c * 0.65, 0.8 + r * 0.8, 0.91));
      var steel = mat(0xb9c1d0, { metal: 0.7, rough: 0.35 });
      g.add(cyl(0.06, 0.12, 2.6, steel, 0.6, 3.5, 0, 8));
      g.add(cyl(0.06, 0.12, 2.6, steel, -0.6, 3.5, 0, 8));
      for (var k = 0; k < 4; k++) g.add(box(1.3, 0.05, 0.05, steel, 0, 2.5 + k * 0.6, 0));
      g.add(sphere(0.18, mat(0xff5a3c, { glow: 0xff3a1a, glowLevel: 0.6 }), 0, 4.9, 0, 12));
      api.addPart("isp", g, V(0.6, 0, 0));
    })();

    /* Server racks */
    var serverLeds = [];
    (function () {
      var g = new THREE.Group();
      [-0.75, 0.75].forEach(function (x) {
        g.add(box(1.3, 3.2, 1.2, mat(0x1d2230, { rough: 0.5, metal: 0.3 }), x, 1.6, 0));
        for (var i = 0; i < 6; i++) {
          g.add(box(1.1, 0.34, 0.02, mat(0x2d3446), x, 0.5 + i * 0.45, 0.61));
          var lm = mat(0x103010, { glow: 0x3fff7a, glowLevel: 0.3 });
          serverLeds.push(lm);
          g.add(box(0.08, 0.08, 0.02, lm, x + 0.42, 0.5 + i * 0.45, 0.63));
        }
      });
      api.addPart("server", g, V(5.5, 0, -0.2));
    })();

    /* Packet (lifafa) */
    var packet = new THREE.Group();
    packet.add(box(0.6, 0.4, 0.06, mat(0xffffff, { rough: 0.5 }), 0, 0, 0));
    var flap = box(0.44, 0.44, 0.02, mat(0xff5a3c), 0, 0.08, 0.04);
    flap.rotation.z = Math.PI / 4;
    flap.scale.set(1, 0.55, 1);
    packet.add(flap);
    api.addPart("packet", packet, V(-7, 2.6, 0.5), null, { focus: false });

    /* Safar ka raasta: phone -> router (hawa me) -> cable -> ISP -> cable -> server */
    var path = [
      V(-6.8, 2.4, 0.6), V(-5.2, 3.0, 0.4), V(-3.5, 1.1, 0.2),     // Wi-Fi
      V(-3.5, 0.45, 1.6), V(0.6, 0.45, 1.6), V(0.6, 1.3, 1.2),       // cable -> ISP
      V(0.6, 0.45, 1.6), V(5.5, 0.45, 1.6), V(5.5, 1.8, 0.8)         // cable -> server
    ];
    var curve = new THREE.CatmullRomCurve3(path, false, "catmullrom", 0.1);
    /* u par kaun sa message dikhana hai */
    var STEPS = [[0.0, "s2"], [0.27, "s3"], [0.5, "s4"], [0.9, "s5"]];

    s.mode = "idle"; s.u = 0; s.wait = 0; s.step = "";
    s.send = function () {
      if (s.mode !== "idle") return;
      s.mode = "split"; s.u = 0; s.wait = 1.2; s.step = "";
      api.button("send").disabled = true;
      api.setStatus("s1", 0);
      packet.children[1].material.color.set(0xff5a3c);
    };
    function stepMsg(u, forward) {
      var key = "";
      if (forward) STEPS.forEach(function (st) { if (u >= st[0]) key = st[1]; });
      else key = "s6";
      if (key !== s.step) { s.step = key; api.setStatus(key, 0); }
    }
    s.packet = packet; s.curve = curve; s.stepMsg = stepMsg;
    s.waves = waves; s.ledMs = ledMs; s.serverLeds = serverLeds; s.screenM = screenM;
  },

  update: function (api, dt, t) {
    var s = api.state;
    var speed = 0.16;
    var busy = s.mode !== "idle";

    if (s.mode === "split") {
      s.packet.position.copy(s.curve.getPointAt(0));
      s.packet.scale.setScalar(0.6 + 0.4 * Math.abs(Math.sin(t * 6)));
      s.wait -= dt;
      if (s.wait <= 0) { s.mode = "go"; s.packet.scale.setScalar(1); }
    } else if (s.mode === "go") {
      s.u = Math.min(1, s.u + dt * speed);
      s.packet.position.copy(s.curve.getPointAt(s.u));
      s.stepMsg(s.u, true);
      if (s.u >= 1) { s.mode = "server"; s.wait = 1.6; }
    } else if (s.mode === "server") {
      s.wait -= dt;
      s.packet.rotation.y += dt * 6;
      if (s.wait <= 0) {
        s.mode = "back"; s.packet.rotation.y = 0;
        s.packet.children[1].material.color.set(0x12995f);   // jawab hara lifafa
      }
    } else if (s.mode === "back") {
      s.u = Math.max(0, s.u - dt * speed * 1.4);
      s.packet.position.copy(s.curve.getPointAt(s.u));
      s.stepMsg(s.u, false);
      if (s.u <= 0) {
        s.mode = "idle";
        api.setStatus("s7", 5000);
        api.button("send").disabled = false;
        s.screenM.emissiveIntensity = 1.2;
      }
    } else {
      s.packet.position.copy(s.curve.getPointAt(0));
      s.packet.position.y += Math.sin(t * 2) * 0.08;
    }
    if (busy) s.packet.lookAt(api.cameraWorldPos());
    else s.packet.rotation.set(0, 0.5, 0);

    /* phone screen dheere dheere normal */
    s.screenM.emissiveIntensity += (0.15 - s.screenM.emissiveIntensity) * dt * 0.8;

    /* Wi-Fi lehrein aur LEDs */
    var still = api.reduceMotion;
    s.waves.forEach(function (w, i) {
      var k = still ? 0.5 : ((t * (busy ? 1.2 : 0.5) + i / 3) % 1);
      w.scale.setScalar(0.5 + k * 1.1);
      w.material.opacity = 0.6 * (1 - k);
    });
    s.ledMs.forEach(function (m, i) { m.emissiveIntensity = busy && !still ? (Math.sin(t * 20 + i * 2) > 0 ? 1.4 : 0.1) : 0.6; });
    s.serverLeds.forEach(function (m, i) {
      m.emissiveIntensity = (s.mode === "server" && !still) ? (Math.sin(t * 25 + i) > 0 ? 1.5 : 0.1) : 0.5;
    });
  }
});
