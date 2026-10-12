/* Topic: Coding ki shuruaat (command blocks + AI helper) */
TL.start({
  id: "coding",
  camera: { theta: 0, phi: 0.75, radius: 14, target: [0, 0, 1], min: 7, max: 24 },
  autoRotate: false,
  noReset: true,
  order: ["sprite", "goal", "rock", "blocks", "ai"],
  parts: {
    sprite: { emoji: "🐥" }, goal: { emoji: "⭐" }, rock: { emoji: "🪨" },
    blocks: { emoji: "🧱" }, ai: { emoji: "🤖" }
  },
  quiz: [
    { part: "blocks", a: 1 }, { part: "blocks", a: 2 }, { part: "rock", a: 0 },
    { part: "blocks", a: 3 }, { part: "ai", a: 1 }, { part: "sprite", a: 2 }
  ],
  actions: [
    { id: "F", label: "b_f", onClick: function (api) { api.state.add("F"); } },
    { id: "L", label: "b_l", onClick: function (api) { api.state.add("L"); } },
    { id: "R", label: "b_r", onClick: function (api) { api.state.add("R"); } },
    { id: "run", label: "run", main: true, onClick: function (api) { api.state.run(); } },
    { id: "undo", label: "undo", onClick: function (api) { api.state.undo(); } },
    { id: "hint", label: "hint", onClick: function (api) { api.state.hint(); } }
  ],

  text: {
    hinglish: {
      tagline: "Computer ko step-by-step hukum dena",
      hint: "Neeche ke blocks dabakar program banao, phir ▶ Chalao dabao.",
      intro: '<strong>Program banao!</strong> "⬆ Aage", "↰ Baayein" aur "↱ Daayein" dabakar blocks jodo. Phir "▶ Chalao" dabao aur dekho chooza ⭐ tak pahunchta hai ya nahi. Atak gaye? "💡 AI hint" dabao.',
      ui: {
        b_f: "⬆ Aage", b_l: "↰ Baayein", b_r: "↱ Daayein", run: "▶ Chalao", undo: "⌫ Mitao", hint: "💡 AI hint",
        level: "Level {0}: Chooze ko ⭐ tak pahunchao",
        full: "Program bhar gaya! Pehle kuch blocks mitao",
        empty: "Pehle kuch blocks jodo, phir ▶ Chalao dabao",
        bug: "🐞 Bug! Chooza patthar ya kinare se takra gaya. Program theek karo",
        short: "Chooza ⭐ tak nahi pahuncha. Aur blocks jodo",
        win: "🎉 Shabaash! Program sahi chala. Agla level aa raha hai…",
        all_done: "🏆 Saare level poore! Tum programmer ban gaye. Phir se shuru karte hain",
        ai_hint: "🤖 AI ne sabse chhota raasta dhoondha: {0} blocks. Ab ▶ Chalao dabao"
      },
      parts: {
        sprite: { name: "Chooza (Character)", short: "Chooza", tag: "Jise hum program se chalate hain",
          what: "Chooza apne aap kuch nahi karta. Wo sirf wahi karta hai jo tumhare program ke blocks kehte hain, ek ke baad ek, bilkul usi order me.",
          real: "Jaise game me character wahi karta hai jo tum button se kehte ho.",
          fact: "Computer bahut tez hai par khud se nahi sochta. Use har step batana padta hai." },
        goal: { name: "Star (Lakshya)", short: "Star", tag: "Jahan pahunchna hai",
          what: "Har program ka ek lakshya hota hai. Yahan lakshya hai chooze ko star tak le jaana.",
          real: "Jaise school jaane ke liye pehle pata hona chahiye ki school kahan hai.",
          fact: "Programmer pehle sochte hain ki kya karna hai, phir code likhte hain." },
        rock: { name: "Patthar (Rukawat)", short: "Patthar", tag: "Raaste ki rukawat",
          what: "Agar program chooze ko patthar ki taraf bheje to wo takra jaata hai. Program ki is galti ko 'bug' kehte hain. Bug dhoond kar theek karna 'debugging' kehlata hai.",
          real: "Jaise recipe me galat step likh do to khaana kharab ho jaata hai.",
          fact: "1947 me ek asli keeda (moth) computer me phans gaya tha, tab se galti ko 'bug' kehte hain." },
        blocks: { name: "Command Blocks (Program)", short: "Blocks", tag: "Step-by-step hukum",
          what: "Har block ek hukum hai. Saare blocks mil kar program bante hain. Kaam karne ke steps ki is list ko 'algorithm' kehte hain. Order badla to nateeja badal jaata hai!",
          real: "Daant saaf karna: brush uthao, paste lagao, brush karo, kulla karo. Order zaroori hai.",
          fact: "Jo step baar baar hota hai use 'loop' se chhota likh sakte hain, jaise '3 baar aage jao'." },
        ai: { name: "AI Helper", short: "AI", tag: "Seekhne aur dhoondne wala madadgar",
          what: "AI (Artificial Intelligence) aise program hain jo bahut saare raaste jaanch kar sabse accha chunte hain, ya udaharan dekh kar seekhte hain. Yahan AI saare raaste jaanch kar sabse chhota raasta dhoondta hai.",
          real: "Phone ka map app bhi AI jaisa hisaab laga kar sabse tez raasta batata hai.",
          fact: "AI bhi insaan ke likhe program se hi chalta hai. Wo galti bhi kar sakta hai, isliye uska kaam jaanchna zaroori hai." }
      },
      quiz: [
        { q: "Program kya hota hai?", o: ["Ek khilona", "Computer ke liye step-by-step hukum", "Ek tasveer", "Ek gaana"],
          why: "Program hukum ki list hai jise computer ek ek karke maanta hai." },
        { q: "Blocks ka order badal do to kya hoga?", o: ["Kuch nahi", "Computer band ho jaayega", "Nateeja badal sakta hai", "Blocks gayab ho jaayenge"],
          why: "Computer blocks ko usi order me chalata hai, isliye order bahut zaroori hai." },
        { q: "Program ki galti ko kya kehte hain?", o: ["Bug", "Star", "Loop", "Block"],
          why: "Program ki galti ko bug aur use theek karne ko debugging kehte hain." },
        { q: "Kaam karne ke steps ki list ko kya kehte hain?", o: ["Battery", "Router", "Pixel", "Algorithm"],
          why: "Algorithm kisi kaam ko karne ke steps ka sahi order hai." },
        { q: "AI helper ne kya kiya?", o: ["Chooze ko khaana diya", "Saare raaste jaanch kar sabse chhota raasta dhoondha", "Game band kiya", "Patthar hataye"],
          why: "AI ne bahut saare raaste jaanch kar sabse accha chuna." },
        { q: "Chooza kiske hisaab se chalta hai?", o: ["Apne mann se", "Hawa se", "Tumhare program ke blocks se", "Star se"],
          why: "Character sirf wahi karta hai jo program kehta hai." }
      ]
    },

    en: {
      tagline: "Giving a computer step-by-step orders",
      hint: "Press the blocks below to build a program, then press ▶ Run.",
      intro: '<strong>Build a program!</strong> Press "⬆ Forward", "↰ Left" and "↱ Right" to join blocks. Then press "▶ Run" and see if the chick reaches the ⭐. Stuck? Press "💡 AI hint".',
      ui: {
        b_f: "⬆ Forward", b_l: "↰ Left", b_r: "↱ Right", run: "▶ Run", undo: "⌫ Undo", hint: "💡 AI hint",
        level: "Level {0}: Get the chick to the ⭐",
        full: "The program is full! Remove some blocks first",
        empty: "Add some blocks first, then press ▶ Run",
        bug: "🐞 Bug! The chick bumped into a rock or the edge. Fix the program",
        short: "The chick did not reach the ⭐. Add more blocks",
        win: "🎉 Well done! The program worked. Next level coming…",
        all_done: "🏆 All levels done! You are a programmer. Let's start again",
        ai_hint: "🤖 The AI found the shortest path: {0} blocks. Now press ▶ Run"
      },
      parts: {
        sprite: { name: "Chick (Character)", short: "Chick", tag: "The one our program moves",
          what: "The chick does nothing on its own. It does only what your program's blocks say, one after another, in exactly that order.",
          real: "Like a game character that does only what you tell it with the buttons.",
          fact: "A computer is very fast but does not think for itself. You must tell it every step." },
        goal: { name: "Star (Goal)", short: "Star", tag: "Where to reach",
          what: "Every program has a goal. Here the goal is to take the chick to the star.",
          real: "To walk to school you first need to know where the school is.",
          fact: "Programmers first think about what to do, then write the code." },
        rock: { name: "Rock (Obstacle)", short: "Rock", tag: "Something in the way",
          what: "If the program sends the chick towards a rock, it bumps into it. A mistake in a program is called a 'bug'. Finding and fixing it is called 'debugging'.",
          real: "Like a recipe with a wrong step: the food turns out bad.",
          fact: "In 1947 a real moth got stuck in a computer. Since then mistakes have been called 'bugs'." },
        blocks: { name: "Command Blocks (Program)", short: "Blocks", tag: "Step-by-step orders",
          what: "Each block is one order. All the blocks together make a program. A list of steps to do a job is called an 'algorithm'. Change the order and the result changes!",
          real: "Brushing teeth: pick up the brush, add paste, brush, rinse. The order matters.",
          fact: "Steps that repeat can be written shorter with a 'loop', like 'move forward 3 times'." },
        ai: { name: "AI Helper", short: "AI", tag: "A helper that searches and learns",
          what: "AI (Artificial Intelligence) means programs that check lots of possibilities and pick the best one, or learn from examples. Here the AI checks every path and finds the shortest.",
          real: "A map app on a phone also works out the fastest road in a similar way.",
          fact: "AI also runs on programs written by people. It can make mistakes, so its work must be checked." }
      },
      quiz: [
        { q: "What is a program?", o: ["A toy", "Step-by-step orders for a computer", "A picture", "A song"],
          why: "A program is a list of orders that the computer follows one by one." },
        { q: "What happens if you change the order of the blocks?", o: ["Nothing", "The computer turns off", "The result can change", "The blocks disappear"],
          why: "The computer runs blocks in that exact order, so the order matters a lot." },
        { q: "What is a mistake in a program called?", o: ["Bug", "Star", "Loop", "Block"],
          why: "A mistake in a program is a bug, and fixing it is debugging." },
        { q: "What is a list of steps to do a job called?", o: ["Battery", "Router", "Pixel", "Algorithm"],
          why: "An algorithm is the right order of steps to do a job." },
        { q: "What did the AI helper do?", o: ["Fed the chick", "Checked all the paths and found the shortest one", "Closed the game", "Moved the rocks"],
          why: "The AI checked many paths and picked the best one." },
        { q: "What makes the chick move?", o: ["Its own mind", "The wind", "Your program's blocks", "The star"],
          why: "The character does only what the program says." }
      ]
    },

    hi: {
      tagline: "कंप्यूटर को कदम-दर-कदम हुक्म देना",
      hint: "नीचे के ब्लॉक दबाकर प्रोग्राम बनाओ, फिर ▶ चलाओ दबाओ।",
      intro: '<strong>प्रोग्राम बनाओ!</strong> "⬆ आगे", "↰ बाएँ" और "↱ दाएँ" दबाकर ब्लॉक जोड़ो। फिर "▶ चलाओ" दबाओ और देखो चूज़ा ⭐ तक पहुँचता है या नहीं। अटक गए? "💡 AI हिंट" दबाओ।',
      ui: {
        b_f: "⬆ आगे", b_l: "↰ बाएँ", b_r: "↱ दाएँ", run: "▶ चलाओ", undo: "⌫ मिटाओ", hint: "💡 AI हिंट",
        level: "लेवल {0}: चूज़े को ⭐ तक पहुँचाओ",
        full: "प्रोग्राम भर गया! पहले कुछ ब्लॉक मिटाओ",
        empty: "पहले कुछ ब्लॉक जोड़ो, फिर ▶ चलाओ दबाओ",
        bug: "🐞 बग! चूज़ा पत्थर या किनारे से टकरा गया। प्रोग्राम ठीक करो",
        short: "चूज़ा ⭐ तक नहीं पहुँचा। और ब्लॉक जोड़ो",
        win: "🎉 शाबाश! प्रोग्राम सही चला। अगला लेवल आ रहा है…",
        all_done: "🏆 सारे लेवल पूरे! तुम प्रोग्रामर बन गए। फिर से शुरू करते हैं",
        ai_hint: "🤖 AI ने सबसे छोटा रास्ता ढूँढा: {0} ब्लॉक। अब ▶ चलाओ दबाओ"
      },
      parts: {
        sprite: { name: "चूज़ा (कैरेक्टर)", short: "चूज़ा", tag: "जिसे हम प्रोग्राम से चलाते हैं",
          what: "चूज़ा अपने आप कुछ नहीं करता। वह सिर्फ़ वही करता है जो तुम्हारे प्रोग्राम के ब्लॉक कहते हैं, एक के बाद एक, बिल्कुल उसी क्रम में।",
          real: "जैसे गेम में कैरेक्टर वही करता है जो तुम बटन से कहते हो।",
          fact: "कंप्यूटर बहुत तेज़ है पर खुद से नहीं सोचता। उसे हर कदम बताना पड़ता है।" },
        goal: { name: "स्टार (लक्ष्य)", short: "स्टार", tag: "जहाँ पहुँचना है",
          what: "हर प्रोग्राम का एक लक्ष्य होता है। यहाँ लक्ष्य है चूज़े को स्टार तक ले जाना।",
          real: "जैसे स्कूल जाने के लिए पहले पता होना चाहिए कि स्कूल कहाँ है।",
          fact: "प्रोग्रामर पहले सोचते हैं कि क्या करना है, फिर कोड लिखते हैं।" },
        rock: { name: "पत्थर (रुकावट)", short: "पत्थर", tag: "रास्ते की रुकावट",
          what: "अगर प्रोग्राम चूज़े को पत्थर की तरफ़ भेजे तो वह टकरा जाता है। प्रोग्राम की इस गलती को 'बग' कहते हैं। बग ढूँढकर ठीक करना 'डीबगिंग' कहलाता है।",
          real: "जैसे रेसिपी में गलत कदम लिख दो तो खाना खराब हो जाता है।",
          fact: "1947 में एक असली कीड़ा (पतंगा) कंप्यूटर में फँस गया था, तब से गलती को 'बग' कहते हैं।" },
        blocks: { name: "कमांड ब्लॉक (प्रोग्राम)", short: "ब्लॉक", tag: "कदम-दर-कदम हुक्म",
          what: "हर ब्लॉक एक हुक्म है। सारे ब्लॉक मिलकर प्रोग्राम बनते हैं। काम करने के कदमों की इस सूची को 'एल्गोरिदम' कहते हैं। क्रम बदला तो नतीजा बदल जाता है!",
          real: "दाँत साफ़ करना: ब्रश उठाओ, पेस्ट लगाओ, ब्रश करो, कुल्ला करो। क्रम ज़रूरी है।",
          fact: "जो कदम बार-बार होता है उसे 'लूप' से छोटा लिख सकते हैं, जैसे '3 बार आगे जाओ'।" },
        ai: { name: "AI हेल्पर", short: "AI", tag: "सीखने और ढूँढने वाला मददगार",
          what: "AI (आर्टिफ़िशियल इंटेलिजेंस) ऐसे प्रोग्राम हैं जो बहुत सारे रास्ते जाँचकर सबसे अच्छा चुनते हैं, या उदाहरण देखकर सीखते हैं। यहाँ AI सारे रास्ते जाँचकर सबसे छोटा रास्ता ढूँढता है।",
          real: "फ़ोन का मैप ऐप भी ऐसा ही हिसाब लगाकर सबसे तेज़ रास्ता बताता है।",
          fact: "AI भी इंसान के लिखे प्रोग्राम से ही चलता है। वह गलती भी कर सकता है, इसलिए उसका काम जाँचना ज़रूरी है।" }
      },
      quiz: [
        { q: "प्रोग्राम क्या होता है?", o: ["एक खिलौना", "कंप्यूटर के लिए कदम-दर-कदम हुक्म", "एक तस्वीर", "एक गाना"],
          why: "प्रोग्राम हुक्म की सूची है जिसे कंप्यूटर एक-एक करके मानता है।" },
        { q: "ब्लॉक का क्रम बदल दो तो क्या होगा?", o: ["कुछ नहीं", "कंप्यूटर बंद हो जाएगा", "नतीजा बदल सकता है", "ब्लॉक गायब हो जाएँगे"],
          why: "कंप्यूटर ब्लॉक को उसी क्रम में चलाता है, इसलिए क्रम बहुत ज़रूरी है।" },
        { q: "प्रोग्राम की गलती को क्या कहते हैं?", o: ["बग", "स्टार", "लूप", "ब्लॉक"],
          why: "प्रोग्राम की गलती को बग और उसे ठीक करने को डीबगिंग कहते हैं।" },
        { q: "काम करने के कदमों की सूची को क्या कहते हैं?", o: ["बैटरी", "राउटर", "पिक्सेल", "एल्गोरिदम"],
          why: "एल्गोरिदम किसी काम को करने के कदमों का सही क्रम है।" },
        { q: "AI हेल्पर ने क्या किया?", o: ["चूज़े को खाना दिया", "सारे रास्ते जाँचकर सबसे छोटा रास्ता ढूँढा", "गेम बंद किया", "पत्थर हटाए"],
          why: "AI ने बहुत सारे रास्ते जाँचकर सबसे अच्छा चुना।" },
        { q: "चूज़ा किसके हिसाब से चलता है?", o: ["अपने मन से", "हवा से", "तुम्हारे प्रोग्राम के ब्लॉक से", "स्टार से"],
          why: "कैरेक्टर सिर्फ़ वही करता है जो प्रोग्राम कहता है।" }
      ]
    },

    mr: {
      tagline: "कॉम्प्युटरला एकेक पायरीने आज्ञा देणं",
      hint: "खालचे ब्लॉक दाबून प्रोग्राम बनवा, मग ▶ चालवा दाबा.",
      intro: '<strong>प्रोग्राम बनवा!</strong> "⬆ पुढे", "↰ डावीकडे" आणि "↱ उजवीकडे" दाबून ब्लॉक जोडा. मग "▶ चालवा" दाबा आणि बघा पिल्लू ⭐ पर्यंत पोहोचतं का. अडकलात? "💡 AI सूचना" दाबा.',
      ui: {
        b_f: "⬆ पुढे", b_l: "↰ डावीकडे", b_r: "↱ उजवीकडे", run: "▶ चालवा", undo: "⌫ पुसा", hint: "💡 AI सूचना",
        level: "लेव्हल {0}: पिल्लाला ⭐ पर्यंत पोहोचवा",
        full: "प्रोग्राम भरला! आधी काही ब्लॉक पुसा",
        empty: "आधी काही ब्लॉक जोडा, मग ▶ चालवा दाबा",
        bug: "🐞 बग! पिल्लू दगडाला किंवा कडेला धडकलं. प्रोग्राम दुरुस्त करा",
        short: "पिल्लू ⭐ पर्यंत पोहोचलं नाही. आणखी ब्लॉक जोडा",
        win: "🎉 शाब्बास! प्रोग्राम बरोबर चालला. पुढचं लेव्हल येतंय…",
        all_done: "🏆 सगळे लेव्हल पूर्ण! तुम्ही प्रोग्रामर झालात. पुन्हा सुरू करूया",
        ai_hint: "🤖 AI ने सगळ्यात छोटा रस्ता शोधला: {0} ब्लॉक. आता ▶ चालवा दाबा"
      },
      parts: {
        sprite: { name: "पिल्लू (कॅरेक्टर)", short: "पिल्लू", tag: "ज्याला आपण प्रोग्रामने चालवतो",
          what: "पिल्लू स्वतःहून काहीच करत नाही. तुमच्या प्रोग्रामचे ब्लॉक जे सांगतात तेच ते करतं, एकामागून एक, अगदी त्याच क्रमाने.",
          real: "गेममधलं कॅरेक्टर तुम्ही बटणाने सांगाल तेच करतं, तसंच.",
          fact: "कॉम्प्युटर खूप वेगवान आहे पण स्वतः विचार करत नाही. त्याला प्रत्येक पायरी सांगावी लागते." },
        goal: { name: "स्टार (ध्येय)", short: "स्टार", tag: "जिथे पोहोचायचं आहे",
          what: "प्रत्येक प्रोग्रामचं एक ध्येय असतं. इथे ध्येय आहे पिल्लाला स्टारपर्यंत नेणं.",
          real: "शाळेत जाण्यासाठी आधी शाळा कुठे आहे ते माहीत हवं.",
          fact: "प्रोग्रामर आधी काय करायचं याचा विचार करतात, मग कोड लिहितात." },
        rock: { name: "दगड (अडथळा)", short: "दगड", tag: "रस्त्यातला अडथळा",
          what: "प्रोग्रामने पिल्लाला दगडाकडे पाठवलं तर ते धडकतं. प्रोग्राममधल्या अशा चुकीला 'बग' म्हणतात. बग शोधून दुरुस्त करणं म्हणजे 'डीबगिंग'.",
          real: "पाककृतीत चुकीची पायरी लिहिली तर जेवण बिघडतं, तसंच.",
          fact: "1947 मध्ये एक खरा किडा (पतंग) कॉम्प्युटरमध्ये अडकला होता, तेव्हापासून चुकीला 'बग' म्हणतात." },
        blocks: { name: "कमांड ब्लॉक (प्रोग्राम)", short: "ब्लॉक", tag: "एकेक पायरीच्या आज्ञा",
          what: "प्रत्येक ब्लॉक म्हणजे एक आज्ञा. सगळे ब्लॉक मिळून प्रोग्राम बनतो. काम करण्याच्या पायऱ्यांच्या या यादीला 'अल्गोरिदम' म्हणतात. क्रम बदलला तर निकाल बदलतो!",
          real: "दात घासणं: ब्रश घ्या, पेस्ट लावा, घासा, चूळ भरा. क्रम महत्त्वाचा आहे.",
          fact: "पुन्हा पुन्हा होणारी पायरी 'लूप' वापरून छोटी लिहिता येते, जसं '3 वेळा पुढे जा'." },
        ai: { name: "AI मदतनीस", short: "AI", tag: "शोधणारा आणि शिकणारा मदतनीस",
          what: "AI (आर्टिफिशियल इंटेलिजन्स) म्हणजे असे प्रोग्राम जे खूप सारे पर्याय तपासून सगळ्यात चांगला निवडतात, किंवा उदाहरणं बघून शिकतात. इथे AI सगळे रस्ते तपासून सगळ्यात छोटा रस्ता शोधतो.",
          real: "फोनमधलं मॅप ॲप पण असंच गणित करून सगळ्यात जलद रस्ता सांगतं.",
          fact: "AI पण माणसांनी लिहिलेल्या प्रोग्रामवरच चालतो. तो चुकू शकतो, म्हणून त्याचं काम तपासणं गरजेचं आहे." }
      },
      quiz: [
        { q: "प्रोग्राम म्हणजे काय?", o: ["एक खेळणं", "कॉम्प्युटरसाठी एकेक पायरीच्या आज्ञा", "एक चित्र", "एक गाणं"],
          why: "प्रोग्राम म्हणजे आज्ञांची यादी, कॉम्प्युटर ती एकेक करून पाळतो." },
        { q: "ब्लॉकचा क्रम बदलला तर काय होईल?", o: ["काहीच नाही", "कॉम्प्युटर बंद होईल", "निकाल बदलू शकतो", "ब्लॉक गायब होतील"],
          why: "कॉम्प्युटर ब्लॉक त्याच क्रमाने चालवतो, म्हणून क्रम खूप महत्त्वाचा आहे." },
        { q: "प्रोग्राममधल्या चुकीला काय म्हणतात?", o: ["बग", "स्टार", "लूप", "ब्लॉक"],
          why: "प्रोग्राममधली चूक म्हणजे बग आणि ती दुरुस्त करणं म्हणजे डीबगिंग." },
        { q: "काम करण्याच्या पायऱ्यांच्या यादीला काय म्हणतात?", o: ["बॅटरी", "राउटर", "पिक्सेल", "अल्गोरिदम"],
          why: "अल्गोरिदम म्हणजे एखादं काम करण्याच्या पायऱ्यांचा योग्य क्रम." },
        { q: "AI मदतनीसाने काय केलं?", o: ["पिल्लाला खायला दिलं", "सगळे रस्ते तपासून सगळ्यात छोटा रस्ता शोधला", "गेम बंद केला", "दगड हटवले"],
          why: "AI ने खूप रस्ते तपासून सगळ्यात चांगला निवडला." },
        { q: "पिल्लू कशानुसार चालतं?", o: ["स्वतःच्या मनाने", "वाऱ्याने", "तुमच्या प्रोग्रामच्या ब्लॉकनुसार", "स्टारनुसार"],
          why: "कॅरेक्टर प्रोग्राम सांगेल तेच करतं." }
      ]
    }
  },

  build: function (api) {
    var THREE = api.THREE, mat = api.mat, box = api.box, cyl = api.cyl, sphere = api.sphere;
    var s = api.state;
    var C = 1.5, H = 2, MAX = 14;

    /* Levels: start [x, z, dir], star [x, z], rocks. dir: 0 +z, 1 +x, 2 -z, 3 -x */
    var LEVELS = [
      { start: [-2, 0, 1], star: [1, 0], rocks: [] },
      { start: [-2, 2, 2], star: [0, 0], rocks: [[-2, -1], [-1, 1], [1, 0]] },
      { start: [-2, -2, 1], star: [2, 2], rocks: [[0, -2], [-1, 0], [1, 1], [2, 0]] }
    ];

    /* Farsh */
    var tA = mat(0xbfe6b0, { rough: 0.9 }), tB = mat(0xa6d99a, { rough: 0.9 });
    for (var x = -H; x <= H; x++) for (var z = -H; z <= H; z++) {
      api.decor(box(C * 0.96, 0.2, C * 0.96, (x + z) % 2 === 0 ? tA : tB, x * C, -0.1, z * C));
    }

    /* Chooza */
    var sprite = new THREE.Group();
    var yellow = mat(0xffd23a, { rough: 0.5 });
    sprite.add(sphere(0.45, yellow, 0, 0.45, 0, 20));
    sprite.add(sphere(0.3, yellow, 0, 0.95, 0.05, 18));
    var eye = mat(0x14161d);
    sprite.add(sphere(0.05, eye, -0.11, 1.02, 0.3, 8));
    sprite.add(sphere(0.05, eye, 0.11, 1.02, 0.3, 8));
    var beak = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.2, 10), mat(0xff8a1f));
    beak.rotation.x = Math.PI / 2; beak.position.set(0, 0.93, 0.38);
    sprite.add(beak);
    var wing = mat(0xffb820, { rough: 0.5 });
    sprite.add(box(0.08, 0.3, 0.35, wing, -0.46, 0.45, 0));
    sprite.add(box(0.08, 0.3, 0.35, wing, 0.46, 0.45, 0));
    api.addPart("sprite", sprite, new THREE.Vector3(0, 0, 0), null, { focus: false });

    /* Star */
    var shape = new THREE.Shape();
    for (var i = 0; i < 10; i++) {
      var r = i % 2 === 0 ? 0.55 : 0.24, a = (i / 10) * Math.PI * 2 + Math.PI / 2;
      if (i === 0) shape.moveTo(Math.cos(a) * r, Math.sin(a) * r); else shape.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    shape.closePath();
    var starGeo = new THREE.ExtrudeGeometry(shape, { depth: 0.16, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.03, bevelSegments: 1 });
    starGeo.center();
    var star = new THREE.Group();
    star.add(new THREE.Mesh(starGeo, mat(0xffc400, { metal: 0.5, rough: 0.3 })));
    api.addPart("goal", star, new THREE.Vector3(0, 0.8, 0), null, { focus: false });

    /* Patthar (4 tak, har level me jagah badalti hai) */
    var rocks = [];
    var rockM = mat(0x8c8f99, { rough: 0.9 });
    for (var k = 0; k < 4; k++) {
      var rg = new THREE.Group();
      var m1 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.5), rockM);
      m1.position.y = 0.35; m1.scale.set(1, 0.75, 1);
      rg.add(m1);
      var m2 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.28), rockM);
      m2.position.set(0.35, 0.2, 0.25);
      rg.add(m2);
      rg.rotation.y = k * 1.3;
      api.addPart("rock", rg, new THREE.Vector3(0, 0, 0), null, { focus: false });
      rocks.push(rg);
    }

    /* Program ke blocks (neeche ki patti par) */
    var tray = box(MAX * 0.62 + 0.4, 0.12, 1.0, mat(0x55627f, { rough: 0.6 }), 0, 0.02, (H + 1.25) * C);
    api.decor(tray);
    function arrowTex(kind, bg) {
      var c = document.createElement("canvas");
      c.width = c.height = 128;
      var g = c.getContext("2d");
      g.fillStyle = bg; g.fillRect(0, 0, 128, 128);
      g.strokeStyle = "#ffffff"; g.fillStyle = "#ffffff"; g.lineWidth = 16; g.lineCap = "round"; g.lineJoin = "round";
      g.beginPath();
      if (kind === "F") { g.moveTo(64, 104); g.lineTo(64, 34); g.stroke(); g.beginPath(); g.moveTo(34, 60); g.lineTo(64, 28); g.lineTo(94, 60); g.stroke(); }
      else if (kind === "L") { g.moveTo(88, 104); g.lineTo(88, 60); g.quadraticCurveTo(88, 44, 72, 44); g.lineTo(34, 44); g.stroke(); g.beginPath(); g.moveTo(52, 22); g.lineTo(30, 44); g.lineTo(52, 66); g.stroke(); }
      else { g.moveTo(40, 104); g.lineTo(40, 60); g.quadraticCurveTo(40, 44, 56, 44); g.lineTo(94, 44); g.stroke(); g.beginPath(); g.moveTo(76, 22); g.lineTo(98, 44); g.lineTo(76, 66); g.stroke(); }
      var t = new THREE.CanvasTexture(c);
      return t;
    }
    var TEX = { F: arrowTex("F", "#ff5a3c"), L: arrowTex("L", "#2b6bff"), R: arrowTex("R", "#7a5cff") };
    var blocksG = new THREE.Group();
    var blockMeshes = [];
    for (var b = 0; b < MAX; b++) {
      var bm = new THREE.MeshStandardMaterial({ color: 0xffffff, map: TEX.F, roughness: 0.5, emissive: 0xffa53a, emissiveIntensity: 0 });
      var mesh = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.25, 0.54), bm);
      mesh.position.set((b - (MAX - 1) / 2) * 0.62, 0.22, 0);
      mesh.rotation.y = 0;
      mesh.visible = false;
      blocksG.add(mesh);
      blockMeshes.push(mesh);
    }
    /* engine har block ka material clone karta hai; blockMeshes me wahi mesh hain, to map badalna kaam karega */
    api.addPart("blocks", blocksG, new THREE.Vector3(0, 0, (H + 1.25) * C), null, { focus: false });

    /* AI helper (hawa me tairta chhota robot) */
    var ai = new THREE.Group();
    ai.add(sphere(0.42, mat(0xeaf0ff, { rough: 0.3 }), 0, 0, 0, 22));
    var visor = box(0.55, 0.22, 0.2, mat(0x14213d, { rough: 0.2 }), 0, 0.03, 0.32);
    ai.add(visor);
    var aiEyeM = mat(0x0a2a3a, { glow: 0x5fd4ff, glowLevel: 1.4 });
    ai.add(sphere(0.06, aiEyeM, -0.12, 0.04, 0.43, 10));
    ai.add(sphere(0.06, aiEyeM, 0.12, 0.04, 0.43, 10));
    var halo = api.torus(0.5, 0.03, mat(0x2b6bff), 0, -0.05, 0);
    halo.rotation.x = Math.PI / 2;
    ai.add(halo);
    api.addPart("ai", ai, new THREE.Vector3((H + 1.3) * C, 1.8, -H * C), null, { focus: false });

    /* ---------------- Logic ---------------- */
    s.C = C; s.sprite = sprite; s.star = star; s.ai = ai; s.aiEyeM = aiEyeM;
    s.level = 0; s.prog = []; s.running = false; s.step = -1; s.anim = null; s.wait = 0; s.shake = 0;
    s.blockMeshes = blockMeshes;

    function blocked(x, z) {
      if (Math.abs(x) > H || Math.abs(z) > H) return true;
      var L = LEVELS[s.level];
      for (var i = 0; i < L.rocks.length; i++) if (L.rocks[i][0] === x && L.rocks[i][1] === z) return true;
      return false;
    }
    function fwd(x, z, d) { var a = d * Math.PI / 2; return [x + Math.round(Math.sin(a)), z + Math.round(Math.cos(a))]; }

    function placeSprite() {
      var L = LEVELS[s.level];
      s.x = L.start[0]; s.z = L.start[1]; s.dir = L.start[2];
      s.yaw = s.dir * Math.PI / 2;
      sprite.position.set(s.x * C, 0, s.z * C);
      sprite.rotation.set(0, s.yaw, 0);
      s.anim = null;
    }
    function loadLevel(n) {
      s.level = n;
      var L = LEVELS[n];
      rocks.forEach(function (rg, i) {
        var p = L.rocks[i];
        rg.visible = !!p;
        if (p) rg.position.set(p[0] * C, 0, p[1] * C);
      });
      star.position.set(L.star[0] * C, 0.8, L.star[1] * C);
      s.prog = []; renderBlocks();
      placeSprite();
      api.setStatus("level", 4000, n + 1);
    }
    function renderBlocks() {
      blockMeshes.forEach(function (m, i) {
        var c = s.prog[i];
        m.visible = !!c;
        if (c) { m.material.map = TEX[c]; m.material.needsUpdate = true; }
        m.position.y = 0.22;
      });
    }
    function setBusy(b) {
      s.running = b;
      ["F", "L", "R", "run", "undo", "hint"].forEach(function (id) { api.button(id).disabled = b; });
    }

    s.add = function (c) {
      if (s.running) return;
      if (s.prog.length >= MAX) { api.setStatus("full", 2500); return; }
      if (s.step !== -1) { placeSprite(); s.step = -1; }
      s.prog.push(c); renderBlocks();
    };
    s.undo = function () {
      if (s.running) return;
      s.prog.pop(); renderBlocks();
      if (s.step !== -1) { placeSprite(); s.step = -1; }
    };
    s.run = function () {
      if (s.running) return;
      if (!s.prog.length) { api.setStatus("empty", 2500); return; }
      placeSprite();
      s.step = 0; s.wait = 0.3;
      setBusy(true);
      api.setStatus(null);
    };
    /* AI: breadth-first search, har (x, z, dir) halat jaanch kar sabse chhota raasta */
    s.hint = function () {
      if (s.running) return;
      var L = LEVELS[s.level];
      var startKey = L.start.join(",");
      var prev = {}; prev[startKey] = null;
      var q = [L.start.slice()];
      var found = null;
      while (q.length) {
        var cur = q.shift();
        if (cur[0] === L.star[0] && cur[1] === L.star[1]) { found = cur; break; }
        var moves = [["F"].concat(fwd(cur[0], cur[1], cur[2]), [cur[2]]),
                     ["L", cur[0], cur[1], (cur[2] + 1) % 4],
                     ["R", cur[0], cur[1], (cur[2] + 3) % 4]];
        for (var i = 0; i < moves.length; i++) {
          var mv = moves[i], nxt = [mv[1], mv[2], mv[3]], key = nxt.join(",");
          if (mv[0] === "F" && blocked(mv[1], mv[2])) continue;
          if (key in prev) continue;
          prev[key] = { from: cur.join(","), cmd: mv[0] };
          q.push(nxt);
        }
      }
      if (!found) return;
      var path = [], k = found.join(",");
      while (prev[k]) { path.unshift(prev[k].cmd); k = prev[k].from; }
      s.prog = path.slice(0, MAX); renderBlocks();
      placeSprite(); s.step = -1;
      s.aiFlash = 1.5;
      api.setStatus("ai_hint", 4500, path.length);
    };
    /* Ek block chalao */
    s.exec = function (c) {
      if (c === "F") {
        var n = fwd(s.x, s.z, s.dir);
        if (blocked(n[0], n[1])) return false;
        s.x = n[0]; s.z = n[1];
      } else if (c === "L") { s.dir = (s.dir + 1) % 4; }
      else { s.dir = (s.dir + 3) % 4; }
      s.anim = { from: sprite.position.clone(), to: new THREE.Vector3(s.x * C, 0, s.z * C),
                 yaw0: s.yaw, yaw1: s.yaw + (c === "L" ? Math.PI / 2 : c === "R" ? -Math.PI / 2 : 0), k: 0 };
      s.yaw = s.anim.yaw1;
      return true;
    };
    s.finish = function (result) {
      setBusy(false);
      renderBlocks();
      if (result === "bug") { s.shake = 1; api.setStatus("bug", 4000); s.step = -2; return; }
      var L = LEVELS[s.level];
      if (s.x === L.star[0] && s.z === L.star[1]) {
        s.celebrate = 2.2;
        var last = s.level === LEVELS.length - 1;
        api.setStatus(last ? "all_done" : "win", 3000);
        setBusy(true);
        setTimeout(function () { setBusy(false); s.step = -1; loadLevel(last ? 0 : s.level + 1); }, 2600);
      } else { api.setStatus("short", 3500); s.step = -2; }
    };

    loadLevel(0);
  },

  update: function (api, dt, t) {
    var s = api.state;
    var still = api.reduceMotion;

    /* program chal raha hai */
    if (s.running && s.step >= 0) {
      if (s.anim) {
        s.anim.k = Math.min(1, s.anim.k + dt * 3);
        var e = s.anim.k < 0.5 ? 2 * s.anim.k * s.anim.k : 1 - Math.pow(-2 * s.anim.k + 2, 2) / 2;
        s.sprite.position.lerpVectors(s.anim.from, s.anim.to, e);
        s.sprite.position.y = Math.sin(e * Math.PI) * 0.25;
        s.sprite.rotation.y = s.anim.yaw0 + (s.anim.yaw1 - s.anim.yaw0) * e;
        if (s.anim.k >= 1) { s.anim = null; s.step++; s.wait = 0.12; }
      } else {
        s.wait -= dt;
        if (s.wait <= 0) {
          if (s.step >= s.prog.length) { s.finish("done"); }
          else {
            s.blockMeshes.forEach(function (m, i) { m.position.y = i === s.step ? 0.5 : 0.22; });
            if (!s.exec(s.prog[s.step])) s.finish("bug");
          }
        }
      }
    }

    /* takkar par hilna */
    if (s.shake > 0) {
      s.shake = Math.max(0, s.shake - dt * 1.5);
      s.sprite.rotation.z = Math.sin(t * 40) * 0.25 * s.shake;
    } else s.sprite.rotation.z = 0;

    /* star ghoomta hai, jeet par uchhalta hai */
    if (!still) s.star.rotation.y += dt * 1.5;
    if (s.celebrate > 0) {
      s.celebrate -= dt;
      s.star.scale.setScalar(1 + 0.4 * Math.abs(Math.sin(t * 8)));
      if (!still) s.sprite.rotation.y += dt * 10;
    } else s.star.scale.setScalar(1);

    /* AI helper tairta hai */
    s.ai.position.y = 1.8 + (still ? 0 : Math.sin(t * 2) * 0.15);
    s.ai.rotation.y = still ? 0 : Math.sin(t * 0.8) * 0.5;
    if (s.aiFlash > 0) { s.aiFlash -= dt; s.aiEyeM.emissiveIntensity = 1.4 + Math.abs(Math.sin(t * 12)) * 2; }
    else s.aiEyeM.emissiveIntensity = 1.4;
  }
});
