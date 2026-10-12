/* Topic: Computer ke parts */
TL.start({
  id: "computer",
  camera: { theta: 0.7, phi: 1.0, radius: 13, target: [0, 0.4, 0], explodeRadius: 17 },
  explode: true,
  order: ["board", "cpu", "cooler", "ram", "storage", "gpu", "psu"],
  parts: {
    board: { emoji: "🗺️" }, cpu: { emoji: "🧠" }, cooler: { emoji: "🌀" }, ram: { emoji: "🧩" },
    storage: { emoji: "💾" }, gpu: { emoji: "🎮" }, psu: { emoji: "🔌" }
  },
  quiz: [
    { part: "cpu", a: 0 }, { part: "storage", a: 1 }, { part: "ram", a: 2 },
    { part: "cooler", a: 1 }, { part: "gpu", a: 2 }, { part: "psu", a: 1 }
  ],

  /* ------------------------------------------------------------------
     CONTENT: har bhasha ka text yahan. Quiz ke options ka order sab bhashaon me same rakho.
  ------------------------------------------------------------------ */
  text: {
    hinglish: {
      tagline: "Computer ke andar jhaank ke dekho",
      intro: '<strong>Chalo shuru karein!</strong> 3D computer me kisi bhi part par tap karo, ya upar ka button dabao. Phir "Parts alag karo" dabakar dekho ki andar kya kya hai.',
      parts: {
        cpu: { name: "CPU (Processor)", tag: "Computer ka dimaag",
          what: "CPU har instruction padhta hai aur uska jawab nikalta hai. Jab tum game khelte ho ya calculator chalate ho, ye ek second me arbon chhote hisaab kar leta hai.",
          real: "Jaise teacher sawaal sunte hi jawab soch leti hain, waise hi CPU sochta hai.",
          fact: "Ek CPU chip me arbon transistor (chhote switch) hote hain." },
        cooler: { name: "Heatsink aur Fan", short: "Fan", tag: "Computer ka pankha",
          what: "CPU kaam karte karte garam ho jata hai. Heatsink garmi ko sokh leta hai aur fan usse hawa se bahar phenk deta hai. Dekho, fan ghoom raha hai!",
          real: "Garmi me tum pankhe ke neeche baithte ho na? Bilkul waisa hi.",
          fact: "Agar CPU bahut garam ho jaye to computer apni speed kam kar deta hai." },
        ram: { name: "RAM (Memory)", tag: "Computer ki chhoti desk",
          what: "RAM me wo cheezein rehti hain jin par computer abhi kaam kar raha hai. Ye bahut tez hoti hai, par computer band hote hi sab bhool jaati hai.",
          real: "School desk par wahi kitaab hoti hai jo abhi khuli hai. Baaki kitaabein almari me.",
          fact: "Jitni zyada RAM, utne zyada app ek saath aaram se chalte hain." },
        storage: { name: "Hard Disk / SSD", tag: "Computer ki almari",
          what: "Photos, videos, games aur apps yahin save rehte hain. Computer band ho jaye tab bhi kuch nahi mitta.",
          real: "Almari me rakhi kitaabein tab tak wahin rehti hain jab tak tum na hatao.",
          fact: "SSD me ghoomne wale hisse nahi hote, isliye wo purane hard disk se kaafi tez hota hai." },
        gpu: { name: "Graphics Card (GPU)", tag: "Tasveer banane wala artist",
          what: "GPU screen par dikhne wali tasveerein, games aur videos banata hai. Ye ek saath hazaaron chhote kaam kar sakta hai.",
          real: "CPU ek genius teacher hai. GPU artists ki poori team hai jo ek saath rang bhar rahi hai.",
          fact: "Aaj kal AI ko seekhne me bhi GPU kaam aate hain." },
        psu: { name: "Power Supply (PSU)", tag: "Computer ka khaana (bijli)",
          what: "Deewar ki bijli seedhe computer ke liye theek nahi hoti. PSU use badalkar har part ko sahi matra me bijli deta hai.",
          real: "Mummy sabki plate me utna hi khaana parosti hain jitni bhookh ho.",
          fact: "Zyada powerful GPU ko zyada bijli chahiye, isliye PSU bhi bada lagta hai." },
        board: { name: "Motherboard", tag: "Sab parts ko jodne wala board",
          what: "CPU, RAM, GPU sab motherboard par lagte hain. Board ke andar patle raaste bane hote hain jinse data ek part se doosre tak jaata hai.",
          real: "Sheher ki sadkein jaise saare ghar jodti hain.",
          fact: "Motherboard me kai layers hoti hain, aur har layer me alag raaste bane hote hain." }
      },
      quiz: [
        { q: "Computer ka dimaag kaun sa part hai?", o: ["CPU", "Fan", "Power Supply", "Motherboard"],
          why: "CPU hi saare instruction padhkar jawab nikalta hai." },
        { q: "Computer band karne ke baad bhi photos kaun yaad rakhta hai?", o: ["RAM", "Hard Disk / SSD", "Fan", "GPU"],
          why: "Storage me data hamesha save rehta hai. RAM to band hote hi sab bhool jaati hai." },
        { q: "RAM ka kaam kya hai?", o: ["Bijli banana", "Computer ko thanda rakhna", "Abhi chal rahe kaam ko tez yaad rakhna", "Photos hamesha save karna"],
          why: "RAM computer ki chhoti desk hai: abhi ka kaam yahin rehta hai." },
        { q: "Fan aur heatsink kyun lagaye jaate hain?", o: ["Awaaz karne ke liye", "Garmi bahar nikalne ke liye", "Bijli bachane ke liye", "Screen bada karne ke liye"],
          why: "CPU garam hota hai, aur heatsink-fan uski garmi hata dete hain." },
        { q: "Game ki tasveerein kaun sa part banata hai?", o: ["PSU", "RAM", "GPU", "Hard Disk"],
          why: "GPU ek saath hazaaron chhote kaam karke tasveerein banata hai." },
        { q: "Computer ke parts ko bijli kaun deta hai?", o: ["Motherboard", "Power Supply", "CPU", "RAM"],
          why: "PSU deewar ki bijli ko sahi matra me har part tak pahunchata hai." }
      ]
    },

    en: {
      tagline: "Peek inside a computer",
      intro: '<strong>Let\'s begin!</strong> Tap any part of the 3D computer, or press a button above. Then press "Take apart" to see everything inside.',
      parts: {
        cpu: { name: "CPU (Processor)", tag: "The computer's brain",
          what: "The CPU reads every instruction and works out the answer. When you play a game or use a calculator, it does billions of tiny sums every second.",
          real: "Just like a teacher thinks of the answer as soon as she hears a question, the CPU thinks.",
          fact: "One CPU chip has billions of transistors (tiny switches)." },
        cooler: { name: "Heatsink and Fan", short: "Fan", tag: "The computer's fan",
          what: "The CPU gets hot while it works. The heatsink soaks up the heat and the fan blows it away. Look, the fan is spinning!",
          real: "On a hot day you sit under a fan, right? Exactly the same.",
          fact: "If the CPU gets too hot, the computer slows itself down." },
        ram: { name: "RAM (Memory)", tag: "The computer's small desk",
          what: "RAM holds the things the computer is working on right now. It is very fast, but it forgets everything when the computer turns off.",
          real: "Your school desk holds only the book that is open now. The other books stay in the cupboard.",
          fact: "More RAM means more apps can run smoothly at the same time." },
        storage: { name: "Hard Disk / SSD", tag: "The computer's cupboard",
          what: "Photos, videos, games and apps are saved here. Nothing is lost even when the computer is switched off.",
          real: "Books in a cupboard stay there until you take them out.",
          fact: "An SSD has no moving parts, so it is much faster than an old hard disk." },
        gpu: { name: "Graphics Card (GPU)", tag: "The picture-making artist",
          what: "The GPU makes the pictures, games and videos you see on screen. It can do thousands of small jobs at once.",
          real: "The CPU is one genius teacher. The GPU is a whole team of artists colouring at the same time.",
          fact: "Today GPUs are also used to train AI." },
        psu: { name: "Power Supply (PSU)", tag: "The computer's food (electricity)",
          what: "Electricity from the wall is not right for a computer directly. The PSU changes it and gives each part the right amount.",
          real: "Like a parent serving each person just as much food as they need.",
          fact: "A more powerful GPU needs more electricity, so it needs a bigger PSU." },
        board: { name: "Motherboard", tag: "The board that connects everything",
          what: "The CPU, RAM and GPU all fit on the motherboard. Thin paths inside the board carry data from one part to another.",
          real: "Like the roads of a city that connect all the houses.",
          fact: "A motherboard has many layers, and each layer has its own paths." }
      },
      quiz: [
        { q: "Which part is the computer's brain?", o: ["CPU", "Fan", "Power Supply", "Motherboard"],
          why: "The CPU reads all the instructions and works out the answers." },
        { q: "Which part remembers your photos even after the computer is switched off?", o: ["RAM", "Hard Disk / SSD", "Fan", "GPU"],
          why: "Storage keeps data saved. RAM forgets everything when the power goes off." },
        { q: "What does RAM do?", o: ["Makes electricity", "Keeps the computer cool", "Quickly remembers the work happening now", "Saves photos forever"],
          why: "RAM is the computer's small desk: the current work stays here." },
        { q: "Why do computers have a fan and heatsink?", o: ["To make noise", "To remove heat", "To save electricity", "To make the screen bigger"],
          why: "The CPU gets hot, and the heatsink and fan take the heat away." },
        { q: "Which part makes the pictures in a game?", o: ["PSU", "RAM", "GPU", "Hard Disk"],
          why: "The GPU makes pictures by doing thousands of small jobs together." },
        { q: "Which part gives electricity to all the other parts?", o: ["Motherboard", "Power Supply", "CPU", "RAM"],
          why: "The PSU takes wall electricity and sends the right amount to every part." }
      ]
    },

    hi: {
      tagline: "कंप्यूटर के अंदर झाँककर देखो",
      intro: '<strong>चलो शुरू करें!</strong> 3D कंप्यूटर में किसी भी पार्ट पर टैप करो, या ऊपर का बटन दबाओ। फिर "पार्ट्स अलग करो" दबाकर देखो कि अंदर क्या-क्या है।',
      parts: {
        cpu: { name: "CPU (प्रोसेसर)", short: "CPU", tag: "कंप्यूटर का दिमाग",
          what: "CPU हर निर्देश पढ़ता है और उसका जवाब निकालता है। जब तुम गेम खेलते हो या कैलकुलेटर चलाते हो, यह एक सेकंड में अरबों छोटे हिसाब कर लेता है।",
          real: "जैसे टीचर सवाल सुनते ही जवाब सोच लेती हैं, वैसे ही CPU सोचता है।",
          fact: "एक CPU चिप में अरबों ट्रांज़िस्टर (छोटे स्विच) होते हैं।" },
        cooler: { name: "हीटसिंक और पंखा", short: "पंखा", tag: "कंप्यूटर का पंखा",
          what: "CPU काम करते-करते गरम हो जाता है। हीटसिंक गर्मी को सोख लेता है और पंखा उसे हवा से बाहर फेंक देता है। देखो, पंखा घूम रहा है!",
          real: "गर्मी में तुम पंखे के नीचे बैठते हो ना? बिल्कुल वैसा ही।",
          fact: "अगर CPU बहुत गरम हो जाए तो कंप्यूटर अपनी स्पीड कम कर देता है।" },
        ram: { name: "RAM (मेमोरी)", short: "RAM", tag: "कंप्यूटर की छोटी डेस्क",
          what: "RAM में वो चीज़ें रहती हैं जिन पर कंप्यूटर अभी काम कर रहा है। यह बहुत तेज़ होती है, पर कंप्यूटर बंद होते ही सब भूल जाती है।",
          real: "स्कूल डेस्क पर वही किताब होती है जो अभी खुली है। बाकी किताबें अलमारी में।",
          fact: "जितनी ज़्यादा RAM, उतने ज़्यादा ऐप एक साथ आराम से चलते हैं।" },
        storage: { name: "हार्ड डिस्क / SSD", short: "हार्ड डिस्क", tag: "कंप्यूटर की अलमारी",
          what: "फ़ोटो, वीडियो, गेम और ऐप यहीं सेव रहते हैं। कंप्यूटर बंद हो जाए तब भी कुछ नहीं मिटता।",
          real: "अलमारी में रखी किताबें तब तक वहीं रहती हैं जब तक तुम न हटाओ।",
          fact: "SSD में घूमने वाले हिस्से नहीं होते, इसलिए वह पुरानी हार्ड डिस्क से काफ़ी तेज़ होता है।" },
        gpu: { name: "ग्राफ़िक्स कार्ड (GPU)", short: "GPU", tag: "तस्वीर बनाने वाला आर्टिस्ट",
          what: "GPU स्क्रीन पर दिखने वाली तस्वीरें, गेम और वीडियो बनाता है। यह एक साथ हज़ारों छोटे काम कर सकता है।",
          real: "CPU एक जीनियस टीचर है। GPU आर्टिस्ट्स की पूरी टीम है जो एक साथ रंग भर रही है।",
          fact: "आजकल AI को सिखाने में भी GPU काम आते हैं।" },
        psu: { name: "पावर सप्लाई (PSU)", short: "पावर सप्लाई", tag: "कंप्यूटर का खाना (बिजली)",
          what: "दीवार की बिजली सीधे कंप्यूटर के लिए ठीक नहीं होती। PSU उसे बदलकर हर पार्ट को सही मात्रा में बिजली देता है।",
          real: "मम्मी सबकी थाली में उतना ही खाना परोसती हैं जितनी भूख हो।",
          fact: "ज़्यादा पावरफ़ुल GPU को ज़्यादा बिजली चाहिए, इसलिए PSU भी बड़ा लगता है।" },
        board: { name: "मदरबोर्ड", tag: "सब पार्ट्स को जोड़ने वाला बोर्ड",
          what: "CPU, RAM, GPU सब मदरबोर्ड पर लगते हैं। बोर्ड के अंदर पतले रास्ते बने होते हैं जिनसे डेटा एक पार्ट से दूसरे तक जाता है।",
          real: "शहर की सड़कें जैसे सारे घर जोड़ती हैं।",
          fact: "मदरबोर्ड में कई परतें होती हैं, और हर परत में अलग रास्ते बने होते हैं।" }
      },
      quiz: [
        { q: "कंप्यूटर का दिमाग कौन-सा पार्ट है?", o: ["CPU", "पंखा", "पावर सप्लाई", "मदरबोर्ड"],
          why: "CPU ही सारे निर्देश पढ़कर जवाब निकालता है।" },
        { q: "कंप्यूटर बंद करने के बाद भी फ़ोटो कौन याद रखता है?", o: ["RAM", "हार्ड डिस्क / SSD", "पंखा", "GPU"],
          why: "स्टोरेज में डेटा हमेशा सेव रहता है। RAM तो बंद होते ही सब भूल जाती है।" },
        { q: "RAM का काम क्या है?", o: ["बिजली बनाना", "कंप्यूटर को ठंडा रखना", "अभी चल रहे काम को तेज़ी से याद रखना", "फ़ोटो हमेशा सेव करना"],
          why: "RAM कंप्यूटर की छोटी डेस्क है: अभी का काम यहीं रहता है।" },
        { q: "पंखा और हीटसिंक क्यों लगाए जाते हैं?", o: ["आवाज़ करने के लिए", "गर्मी बाहर निकालने के लिए", "बिजली बचाने के लिए", "स्क्रीन बड़ा करने के लिए"],
          why: "CPU गरम होता है, और हीटसिंक-पंखा उसकी गर्मी हटा देते हैं।" },
        { q: "गेम की तस्वीरें कौन-सा पार्ट बनाता है?", o: ["PSU", "RAM", "GPU", "हार्ड डिस्क"],
          why: "GPU एक साथ हज़ारों छोटे काम करके तस्वीरें बनाता है।" },
        { q: "कंप्यूटर के पार्ट्स को बिजली कौन देता है?", o: ["मदरबोर्ड", "पावर सप्लाई", "CPU", "RAM"],
          why: "PSU दीवार की बिजली को सही मात्रा में हर पार्ट तक पहुँचाता है।" }
      ]
    },

    mr: {
      tagline: "कॉम्प्युटरच्या आत डोकावून बघा",
      intro: '<strong>चला सुरू करूया!</strong> 3D कॉम्प्युटरमधील कोणत्याही भागावर टॅप करा, किंवा वरचे बटण दाबा. मग "भाग वेगळे करा" दाबून आत काय काय आहे ते बघा.',
      parts: {
        cpu: { name: "CPU (प्रोसेसर)", short: "CPU", tag: "कॉम्प्युटरचा मेंदू",
          what: "CPU प्रत्येक सूचना वाचतो आणि त्याचं उत्तर काढतो. तुम्ही गेम खेळता किंवा कॅल्क्युलेटर वापरता, तेव्हा तो एका सेकंदात अब्जावधी छोटी गणितं करतो.",
          real: "शिक्षिका प्रश्न ऐकताच उत्तराचा विचार करतात, तसाच CPU विचार करतो.",
          fact: "एका CPU चिपमध्ये अब्जावधी ट्रान्झिस्टर (छोटे स्विच) असतात." },
        cooler: { name: "हीटसिंक आणि पंखा", short: "पंखा", tag: "कॉम्प्युटरचा पंखा",
          what: "काम करता करता CPU गरम होतो. हीटसिंक उष्णता शोषून घेतो आणि पंखा ती हवेने बाहेर फेकतो. बघा, पंखा फिरतोय!",
          real: "उन्हाळ्यात तुम्ही पंख्याखाली बसता ना? अगदी तसंच.",
          fact: "CPU खूप गरम झाला तर कॉम्प्युटर स्वतःचा वेग कमी करतो." },
        ram: { name: "RAM (मेमरी)", short: "RAM", tag: "कॉम्प्युटरचं छोटं डेस्क",
          what: "कॉम्प्युटर आत्ता ज्या गोष्टींवर काम करतोय त्या RAM मध्ये असतात. ती खूप वेगवान असते, पण कॉम्प्युटर बंद होताच सगळं विसरते.",
          real: "शाळेच्या डेस्कवर फक्त आत्ता उघडलेलं पुस्तक असतं. बाकीची पुस्तकं कपाटात.",
          fact: "जितकी जास्त RAM, तितकी जास्त ॲप्स एकाच वेळी सहज चालतात." },
        storage: { name: "हार्ड डिस्क / SSD", short: "हार्ड डिस्क", tag: "कॉम्प्युटरचं कपाट",
          what: "फोटो, व्हिडिओ, गेम आणि ॲप्स इथेच सेव्ह राहतात. कॉम्प्युटर बंद झाला तरी काहीही पुसलं जात नाही.",
          real: "कपाटातली पुस्तकं तुम्ही काढेपर्यंत तिथेच राहतात.",
          fact: "SSD मध्ये फिरणारे भाग नसतात, म्हणून तो जुन्या हार्ड डिस्कपेक्षा खूप वेगवान असतो." },
        gpu: { name: "ग्राफिक्स कार्ड (GPU)", short: "GPU", tag: "चित्र काढणारा कलाकार",
          what: "स्क्रीनवर दिसणारी चित्रं, गेम आणि व्हिडिओ GPU बनवतो. तो एकाच वेळी हजारो छोटी कामं करू शकतो.",
          real: "CPU म्हणजे एक हुशार शिक्षक. GPU म्हणजे एकत्र रंग भरणाऱ्या कलाकारांची पूर्ण टीम.",
          fact: "आजकाल AI शिकवण्यासाठीही GPU वापरले जातात." },
        psu: { name: "पॉवर सप्लाय (PSU)", short: "पॉवर सप्लाय", tag: "कॉम्प्युटरचं जेवण (वीज)",
          what: "भिंतीतली वीज थेट कॉम्प्युटरसाठी योग्य नसते. PSU ती बदलून प्रत्येक भागाला योग्य प्रमाणात वीज देतो.",
          real: "आई प्रत्येकाच्या ताटात जितकी भूक तितकंच जेवण वाढते.",
          fact: "जास्त पॉवरफुल GPU ला जास्त वीज लागते, म्हणून PSU पण मोठा लागतो." },
        board: { name: "मदरबोर्ड", tag: "सगळे भाग जोडणारा बोर्ड",
          what: "CPU, RAM, GPU सगळे मदरबोर्डवर बसतात. बोर्डच्या आत बारीक रस्ते असतात, त्यातून डेटा एका भागातून दुसऱ्या भागात जातो.",
          real: "शहरातले रस्ते जसे सगळी घरं जोडतात.",
          fact: "मदरबोर्डमध्ये अनेक थर असतात, आणि प्रत्येक थरात वेगळे रस्ते असतात." }
      },
      quiz: [
        { q: "कॉम्प्युटरचा मेंदू कोणता भाग आहे?", o: ["CPU", "पंखा", "पॉवर सप्लाय", "मदरबोर्ड"],
          why: "CPU च सगळ्या सूचना वाचून उत्तर काढतो." },
        { q: "कॉम्प्युटर बंद केल्यावरही फोटो कोण लक्षात ठेवतो?", o: ["RAM", "हार्ड डिस्क / SSD", "पंखा", "GPU"],
          why: "स्टोरेजमध्ये डेटा कायम सेव्ह राहतो. RAM तर बंद होताच सगळं विसरते." },
        { q: "RAM चं काम काय आहे?", o: ["वीज तयार करणं", "कॉम्प्युटर थंड ठेवणं", "आत्ता चालू असलेलं काम पटकन लक्षात ठेवणं", "फोटो कायमचे सेव्ह करणं"],
          why: "RAM म्हणजे कॉम्प्युटरचं छोटं डेस्क: आत्ताचं काम इथेच असतं." },
        { q: "पंखा आणि हीटसिंक का लावतात?", o: ["आवाज करण्यासाठी", "उष्णता बाहेर काढण्यासाठी", "वीज वाचवण्यासाठी", "स्क्रीन मोठी करण्यासाठी"],
          why: "CPU गरम होतो, आणि हीटसिंक-पंखा त्याची उष्णता काढून टाकतात." },
        { q: "गेममधली चित्रं कोणता भाग बनवतो?", o: ["PSU", "RAM", "GPU", "हार्ड डिस्क"],
          why: "GPU एकाच वेळी हजारो छोटी कामं करून चित्रं बनवतो." },
        { q: "कॉम्प्युटरच्या भागांना वीज कोण देतो?", o: ["मदरबोर्ड", "पॉवर सप्लाय", "CPU", "RAM"],
          why: "PSU भिंतीतली वीज योग्य प्रमाणात प्रत्येक भागापर्यंत पोहोचवतो." }
      ]
    }
  },

  /* ------------------------------------------------------------------
     3D MODEL
  ------------------------------------------------------------------ */
  build: function (api) {
    var THREE = api.THREE, mat = api.mat, box = api.box, cyl = api.cyl;
    var V = function (x, y, z) { return new THREE.Vector3(x, y, z); };

    /* Motherboard */
    (function () {
      var g = new THREE.Group();
      g.add(box(8, 0.2, 8, mat(0x0e8a78, { rough: 0.5 }), 0, 0, 0));
      g.add(box(3.4, 0.1, 0.22, mat(0x1b1b1f), -0.4, 0.14, 2.3));       // GPU slot
      g.add(box(0.2, 0.12, 2.5, mat(0x1b1b1f), 2.1, 0.14, -0.9));        // RAM slots
      g.add(box(0.2, 0.12, 2.5, mat(0x1b1b1f), 2.5, 0.14, -0.9));
      g.add(box(1.7, 0.08, 1.7, mat(0x2b2b30), -0.6, 0.12, -0.9));       // CPU socket
      var capM = mat(0xd9dde6, { metal: 0.5, rough: 0.3 });
      [[-3.4, 3.4], [-3, 3.4], [-2.6, 3.4], [-3.4, 3], [3.4, -3.4], [3.4, -3], [3, -3.4], [0.6, -3.3], [1, -3.3], [1.4, -3.3]]
        .forEach(function (p) { g.add(cyl(0.14, 0.14, 0.3, capM, p[0], 0.25, p[1], 14)); });
      var chipM = mat(0x18181c);
      g.add(box(0.7, 0.1, 0.7, chipM, -2.9, 0.15, 1.6));
      g.add(box(0.5, 0.1, 0.5, chipM, 0.9, 0.15, 0.9));
      var goldM = mat(0xe6b93c, { metal: 0.8, rough: 0.3 });
      for (var i = 0; i < 6; i++) g.add(box(0.5, 0.08, 0.08, goldM, 3.2, 0.14, 1.2 + i * 0.3));
      api.addPart("board", g, V(0, 0, 0), V(0, -1.4, 0));
    })();

    /* CPU */
    (function () {
      var g = new THREE.Group();
      g.add(box(1.5, 0.14, 1.5, mat(0x1f6f4f, { rough: 0.5 }), 0, 0, 0));
      g.add(box(0.95, 0.1, 0.95, mat(0xc9ced8, { metal: 0.9, rough: 0.25 }), 0, 0.12, 0));
      var gold = mat(0xe6b93c, { metal: 0.8, rough: 0.3 });
      for (var i = -3; i <= 3; i++) g.add(box(0.05, 0.03, 1.5, gold, i * 0.2, -0.07, 0));
      api.addPart("cpu", g, V(-0.6, 0.27, -0.9), V(0, 1.3, 0));
    })();

    /* Heatsink + fan */
    (function () {
      var g = new THREE.Group();
      var finM = mat(0xb8c2d6, { metal: 0.85, rough: 0.3 });
      g.add(box(1.7, 0.1, 1.7, finM, 0, -0.2, 0));
      for (var i = 0; i < 8; i++) g.add(box(1.7, 0.4, 0.08, finM, 0, 0.05, -0.75 + i * 0.215));
      var fan = api.makeFan(0.7, 0xff5a3c, 0x2b2f3a);
      fan.position.set(0, 0.42, 0);
      g.add(fan);
      api.addPart("cooler", g, V(-0.6, 0.72, -0.9), V(0, 2.9, 0));
    })();

    /* RAM */
    (function () {
      var g = new THREE.Group();
      function stick(x) {
        var s = new THREE.Group();
        s.add(box(0.1, 0.9, 2.4, mat(0x3a4bd0, { rough: 0.5 }), 0, 0, 0));
        var chip = mat(0x15151a);
        for (var i = 0; i < 4; i++) {
          s.add(box(0.06, 0.32, 0.42, chip, 0.08, 0.1, -0.85 + i * 0.58));
          s.add(box(0.06, 0.32, 0.42, chip, -0.08, 0.1, -0.85 + i * 0.58));
        }
        s.add(box(0.11, 0.08, 2.3, mat(0xe6b93c, { metal: 0.8, rough: 0.3 }), 0, -0.4, 0));
        s.position.x = x;
        return s;
      }
      g.add(stick(0));
      g.add(stick(0.4));
      api.addPart("ram", g, V(2.1, 0.62, -0.9), V(2.3, 0.9, 0));
    })();

    /* Storage */
    (function () {
      var g = new THREE.Group();
      g.add(box(1.5, 0.34, 2.3, mat(0xaeb6c5, { metal: 0.85, rough: 0.35 }), 0, 0, 0));
      g.add(box(1.3, 0.02, 1.0, mat(0x2b3a67), 0, 0.18, 0.55));
      g.add(cyl(0.45, 0.45, 0.03, mat(0x1a1d26, { metal: 0.5 }), 0, 0.18, -0.55, 28));
      g.add(cyl(0.1, 0.1, 0.05, mat(0xd9dde6, { metal: 0.9 }), 0, 0.19, -0.55, 12));
      api.addPart("storage", g, V(-2.9, 0.27, -0.9), V(-2.3, 0.9, 0));
    })();

    /* GPU */
    (function () {
      var g = new THREE.Group();
      g.add(box(4.0, 0.08, 1.3, mat(0x1a1d26), 0, 0, 0));
      g.add(box(3.8, 0.34, 1.2, mat(0x30343f, { rough: 0.45 }), 0, 0.2, 0));
      g.add(box(0.06, 0.95, 1.3, mat(0xc9ced8, { metal: 0.85, rough: 0.3 }), -2.02, 0.2, 0));
      g.add(box(1.6, 0.05, 0.1, mat(0xe6b93c, { metal: 0.8, rough: 0.3 }), -0.4, -0.2, 0));
      var f1 = api.makeFan(0.42, 0x4aa8ff, 0x14161d); f1.position.set(-0.8, 0.4, 0); g.add(f1);
      var f2 = api.makeFan(0.42, 0x4aa8ff, 0x14161d); f2.position.set(0.8, 0.4, 0); g.add(f2);
      api.addPart("gpu", g, V(-0.4, 0.6, 2.3), V(0, 1.2, 1.6));
    })();

    /* Power supply */
    (function () {
      var g = new THREE.Group();
      g.add(box(1.8, 1.3, 1.8, mat(0x2a2f3c, { rough: 0.5, metal: 0.4 }), 0, 0, 0));
      g.add(box(1.82, 0.28, 1.2, mat(0xffc233, { rough: 0.5 }), 0, 0.15, 0));
      g.add(cyl(0.6, 0.6, 0.04, mat(0x14161d), 0, 0.66, 0, 24));
      g.add(cyl(0.12, 0.12, 0.06, mat(0xd9dde6, { metal: 0.9 }), 0, 0.67, 0, 12));
      api.addPart("psu", g, V(2.7, 0.75, 2.6), V(0.9, 1.0, 1.4));
    })();
  }
});
