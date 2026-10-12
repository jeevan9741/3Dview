/* Topic: Solar energy */
TL.start({
  id: "solar",
  camera: { theta: 0.55, phi: 1.15, radius: 19, target: [0, 3.4, -0.8], min: 8, max: 32 },
  order: ["sun", "panel", "inverter", "battery", "home"],
  parts: {
    sun: { emoji: "☀️" }, panel: { emoji: "🔲" }, inverter: { emoji: "🔄" },
    battery: { emoji: "🔋" }, home: { emoji: "🏠" }
  },
  quiz: [
    { part: "sun", a: 1 }, { part: "panel", a: 1 }, { part: "inverter", a: 0 },
    { part: "battery", a: 2 }, { part: "panel", a: 3 }, { part: "home", a: 0 }
  ],
  actions: [
    { id: "cloud", label: "cloud_btn", main: true, onClick: function (api) { api.state.toggleCloud(); } },
    { id: "night", label: "night_btn", onClick: function (api) { api.state.toggleNight(); } }
  ],

  text: {
    hinglish: {
      tagline: "Sooraj ki roshni se ghar me bijli",
      intro: '<strong>Chalo sooraj se bijli banayein!</strong> Peeli roshni panel tak jaati dikhegi aur peele dots taar me bijli. Phir "Badal lao" aur "Raat karo" dabakar dekho battery kaise madad karti hai.',
      ui: {
        cloud_btn: "☁️ Badal lao", cloud_away: "☀️ Badal hatao",
        night_btn: "🌙 Raat karo", day_btn: "🌅 Din karo",
        cloud_on: "☁️ Badal ne sooraj ko dhak liya. Panel kam bijli bana raha hai, battery madad kar rahi hai",
        cloud_off: "☀️ Badal hat gaya! Panel phir poori bijli bana raha hai aur battery charge ho rahi hai",
        night: "🌙 Raat ho gayi. Panel bijli nahi bana sakta, ab battery se ghar chal raha hai",
        day: "🌅 Subah ho gayi! Panel phir se kaam par lag gaya",
        empty: "🪫 Battery khaali ho gayi! Pankha ruk gaya. Ab sooraj ka intezaar karo"
      },
      parts: {
        sun: { name: "Sooraj", tag: "Energy ka sabse bada khazana",
          what: "Sooraj har din dher saari roshni aur garmi bhejta hai. Ye roshni sirf 8 minute me Prithvi tak pahunch jaati hai. Solar panel isi roshni ko pakad kar bijli banata hai.",
          real: "Dhoop me daale kapde jaldi sookhte hain, kyunki sooraj energy deta hai.",
          fact: "Sooraj lagbhag ek-do ghante me Prithvi par itni energy bhejta hai jitni poori duniya ek saal me use karti hai." },
        panel: { name: "Solar panel", tag: "Roshni ko bijli banane wala",
          what: "Panel me bahut saare neele solar cell lage hote hain. Ye silicon se bante hain, jo ret se milta hai. Roshni cell par padti hai to uske andar bijli chalne lagti hai. Badal aaye to roshni kam, aur bijli bhi kam.",
          real: "Jaise paudhe ke patte dhoop se apna khaana banate hain, waise hi panel dhoop se bijli banata hai.",
          fact: "Panel ko sooraj ki taraf thoda jhuka kar lagate hain aur uski dhool saaf rakhte hain, taaki wo zyada roshni pakde." },
        inverter: { name: "Inverter", tag: "Bijli ko ghar ke laayak banane wala",
          what: "Panel aur battery DC bijli dete hain, jo hamesha ek hi disha me behti hai. Ghar ke pankhe aur TV AC bijli se chalte hain, jo baar baar disha badalti hai. Inverter DC ko AC me badal deta hai.",
          real: "Jaise ek translator Hindi ko English me badalta hai, taaki doosra samajh sake.",
          fact: "Ghar ki AC bijli ek second me 50 baar aage-peeche jhoolti hai!" },
        battery: { name: "Battery", tag: "Bijli ka bhandaar",
          what: "Din me jo bijli bach jaati hai, wo battery me jama hoti hai. Raat ko ya badal me, jab panel kam bijli banata hai, tab battery ghar ko bijli deti hai. Hari patti dikhati hai ki battery kitni bhari hai.",
          real: "Jaise gullak me paise bachate hain aur zaroorat par nikaalte hain.",
          fact: "Kai gaon me solar panel aur battery se hi raat ko ghar aur school roshan hote hain." },
        home: { name: "Ghar ke appliances", short: "Ghar", tag: "Bijli use karne wale",
          what: "Pankha, bulb aur TV bijli se chalte hain. Jab tak panel ya battery se bijli mil rahi hai, ye chalte rehte hain. Bijli band hui to pankha ruk jaata hai aur bulb bujh jaata hai.",
          real: "LED bulb kam bijli khaata hai, isliye solar ghar me LED lagana samajhdaari hai.",
          fact: "Duniya ke sabse bade solar parks me se ek Rajasthan ka Bhadla solar park hai." }
      },
      quiz: [
        { q: "Solar panel ko energy kahan se milti hai?", o: ["Chaand se", "Sooraj ki roshni se", "Hawa se", "Baarish se"],
          why: "Panel sooraj ki roshni pakad kar bijli banata hai." },
        { q: "Solar panel kya banata hai?", o: ["Paani", "Bijli", "Khaana", "Awaaz"],
          why: "Solar cell par roshni padti hai to bijli banti hai." },
        { q: "Inverter ka kaam kya hai?", o: ["DC bijli ko ghar wali AC bijli me badalna", "Paani garam karna", "Panel saaf karna", "Sooraj ko rokna"],
          why: "Ghar ke appliances AC bijli se chalte hain, isliye inverter DC ko AC banata hai." },
        { q: "Raat ko solar ghar me bijli kahan se aati hai?", o: ["Panel se", "Chaand se", "Battery se", "Pankhe se"],
          why: "Din me bachi bijli battery me jama hoti hai, aur raat ko wahi kaam aati hai." },
        { q: "Badal aane par panel kya karta hai?", o: ["Zyada bijli banata hai", "Paani banata hai", "Toot jaata hai", "Kam bijli banata hai"],
          why: "Badal roshni rok lete hain, isliye panel kam bijli banata hai." },
        { q: "Solar energy achhi kyun hai?", o: ["Dhuan nahi karti aur sooraj roz nikalta hai", "Bahut shor karti hai", "Sirf raat ko chalti hai", "Koyla jalati hai"],
          why: "Solar energy saaf hai aur kabhi khatam nahi hoti." }
      ]
    },

    en: {
      tagline: "Electricity for a home from sunlight",
      intro: '<strong>Let\'s make electricity from the Sun!</strong> You will see yellow light going to the panel and yellow dots of electricity in the wires. Then press "Bring clouds" and "Make it night" to see how the battery helps.',
      ui: {
        cloud_btn: "☁️ Bring clouds", cloud_away: "☀️ Clear the clouds",
        night_btn: "🌙 Make it night", day_btn: "🌅 Make it day",
        cloud_on: "☁️ A cloud covered the Sun. The panel makes less electricity, so the battery is helping",
        cloud_off: "☀️ The cloud moved away! The panel makes full power again and the battery is charging",
        night: "🌙 It's night. The panel can't make electricity, so the home now runs on the battery",
        day: "🌅 Good morning! The panel is back at work",
        empty: "🪫 The battery is empty! The fan has stopped. Now wait for the Sun"
      },
      parts: {
        sun: { name: "The Sun", tag: "The biggest treasure of energy",
          what: "Every day the Sun sends lots of light and heat. This light reaches the Earth in just 8 minutes. A solar panel catches this light and turns it into electricity.",
          real: "Clothes dry quickly in the sun, because the Sun gives energy.",
          fact: "In about one or two hours, the Sun sends the Earth as much energy as the whole world uses in a year." },
        panel: { name: "Solar panel", tag: "Turns light into electricity",
          what: "A panel has many blue solar cells. They are made of silicon, which comes from sand. When light falls on a cell, electricity starts to flow inside it. With clouds there is less light, so less electricity.",
          real: "Just as leaves make food from sunlight, a panel makes electricity from sunlight.",
          fact: "Panels are tilted towards the Sun and kept free of dust, so they catch more light." },
        inverter: { name: "Inverter", tag: "Makes electricity ready for the home",
          what: "The panel and battery give DC electricity, which always flows in one direction. Fans and TVs at home run on AC electricity, which keeps changing direction. The inverter changes DC into AC.",
          real: "Like a translator who changes Hindi into English so the other person understands.",
          fact: "AC electricity at home swings back and forth 50 times every second!" },
        battery: { name: "Battery", tag: "A store of electricity",
          what: "Extra electricity from the day is stored in the battery. At night or on cloudy days, when the panel makes less, the battery powers the home. The green bar shows how full the battery is.",
          real: "Like saving coins in a piggy bank and taking them out when needed.",
          fact: "In many villages, homes and schools are lit at night by solar panels and batteries." },
        home: { name: "Home appliances", short: "Home", tag: "Things that use electricity",
          what: "The fan, bulb and TV run on electricity. As long as the panel or battery gives power, they keep working. When the power stops, the fan stops and the bulb goes out.",
          real: "LED bulbs use little electricity, so they are a smart choice for a solar home.",
          fact: "One of the world's biggest solar parks is the Bhadla solar park in Rajasthan." }
      },
      quiz: [
        { q: "Where does a solar panel get its energy from?", o: ["The Moon", "Sunlight", "Wind", "Rain"],
          why: "The panel catches sunlight and turns it into electricity." },
        { q: "What does a solar panel make?", o: ["Water", "Electricity", "Food", "Sound"],
          why: "When light falls on a solar cell, electricity is made." },
        { q: "What does an inverter do?", o: ["Changes DC electricity into AC electricity for the home", "Heats water", "Cleans the panel", "Stops the Sun"],
          why: "Home appliances run on AC, so the inverter turns DC into AC." },
        { q: "At night, where does a solar home get electricity from?", o: ["The panel", "The Moon", "The battery", "The fan"],
          why: "Extra electricity from the day is stored in the battery and used at night." },
        { q: "What happens to the panel when clouds come?", o: ["It makes more electricity", "It makes water", "It breaks", "It makes less electricity"],
          why: "Clouds block the light, so the panel makes less electricity." },
        { q: "Why is solar energy good?", o: ["It makes no smoke and the Sun rises every day", "It is very noisy", "It works only at night", "It burns coal"],
          why: "Solar energy is clean and never runs out." }
      ]
    },

    hi: {
      tagline: "सूरज की रोशनी से घर में बिजली",
      intro: '<strong>चलो सूरज से बिजली बनाएँ!</strong> पीली रोशनी पैनल तक जाती दिखेगी और पीले बिंदु तार में बिजली हैं। फिर "बादल लाओ" और "रात करो" दबाकर देखो बैटरी कैसे मदद करती है।',
      ui: {
        cloud_btn: "☁️ बादल लाओ", cloud_away: "☀️ बादल हटाओ",
        night_btn: "🌙 रात करो", day_btn: "🌅 दिन करो",
        cloud_on: "☁️ बादल ने सूरज को ढक लिया। पैनल कम बिजली बना रहा है, बैटरी मदद कर रही है",
        cloud_off: "☀️ बादल हट गया! पैनल फिर पूरी बिजली बना रहा है और बैटरी चार्ज हो रही है",
        night: "🌙 रात हो गई। पैनल बिजली नहीं बना सकता, अब बैटरी से घर चल रहा है",
        day: "🌅 सुबह हो गई! पैनल फिर से काम पर लग गया",
        empty: "🪫 बैटरी खाली हो गई! पंखा रुक गया। अब सूरज का इंतज़ार करो"
      },
      parts: {
        sun: { name: "सूरज", tag: "ऊर्जा का सबसे बड़ा खज़ाना",
          what: "सूरज हर दिन ढेर सारी रोशनी और गर्मी भेजता है। यह रोशनी सिर्फ़ 8 मिनट में पृथ्वी तक पहुँच जाती है। सोलर पैनल इसी रोशनी को पकड़कर बिजली बनाता है।",
          real: "धूप में डाले कपड़े जल्दी सूखते हैं, क्योंकि सूरज ऊर्जा देता है।",
          fact: "सूरज लगभग एक-दो घंटे में पृथ्वी पर इतनी ऊर्जा भेजता है जितनी पूरी दुनिया एक साल में इस्तेमाल करती है।" },
        panel: { name: "सोलर पैनल", tag: "रोशनी को बिजली बनाने वाला",
          what: "पैनल में बहुत सारे नीले सोलर सेल लगे होते हैं। ये सिलिकॉन से बनते हैं, जो रेत से मिलता है। रोशनी सेल पर पड़ती है तो उसके अंदर बिजली चलने लगती है। बादल आएँ तो रोशनी कम, और बिजली भी कम।",
          real: "जैसे पौधे के पत्ते धूप से अपना खाना बनाते हैं, वैसे ही पैनल धूप से बिजली बनाता है।",
          fact: "पैनल को सूरज की तरफ़ थोड़ा झुकाकर लगाते हैं और उसकी धूल साफ़ रखते हैं, ताकि वह ज़्यादा रोशनी पकड़े।" },
        inverter: { name: "इन्वर्टर", tag: "बिजली को घर के लायक बनाने वाला",
          what: "पैनल और बैटरी DC बिजली देते हैं, जो हमेशा एक ही दिशा में बहती है। घर के पंखे और TV AC बिजली से चलते हैं, जो बार-बार दिशा बदलती है। इन्वर्टर DC को AC में बदल देता है।",
          real: "जैसे एक अनुवादक हिंदी को अंग्रेज़ी में बदलता है, ताकि दूसरा समझ सके।",
          fact: "घर की AC बिजली एक सेकंड में 50 बार आगे-पीछे झूलती है!" },
        battery: { name: "बैटरी", tag: "बिजली का भंडार",
          what: "दिन में जो बिजली बच जाती है, वह बैटरी में जमा होती है। रात को या बादल में, जब पैनल कम बिजली बनाता है, तब बैटरी घर को बिजली देती है। हरी पट्टी दिखाती है कि बैटरी कितनी भरी है।",
          real: "जैसे गुल्लक में पैसे बचाते हैं और ज़रूरत पर निकालते हैं।",
          fact: "कई गाँवों में सोलर पैनल और बैटरी से ही रात को घर और स्कूल रोशन होते हैं।" },
        home: { name: "घर के उपकरण", short: "घर", tag: "बिजली इस्तेमाल करने वाले",
          what: "पंखा, बल्ब और TV बिजली से चलते हैं। जब तक पैनल या बैटरी से बिजली मिल रही है, ये चलते रहते हैं। बिजली बंद हुई तो पंखा रुक जाता है और बल्ब बुझ जाता है।",
          real: "LED बल्ब कम बिजली खाता है, इसलिए सोलर घर में LED लगाना समझदारी है।",
          fact: "दुनिया के सबसे बड़े सोलर पार्कों में से एक राजस्थान का भड़ला सोलर पार्क है।" }
      },
      quiz: [
        { q: "सोलर पैनल को ऊर्जा कहाँ से मिलती है?", o: ["चाँद से", "सूरज की रोशनी से", "हवा से", "बारिश से"],
          why: "पैनल सूरज की रोशनी पकड़कर बिजली बनाता है।" },
        { q: "सोलर पैनल क्या बनाता है?", o: ["पानी", "बिजली", "खाना", "आवाज़"],
          why: "सोलर सेल पर रोशनी पड़ती है तो बिजली बनती है।" },
        { q: "इन्वर्टर का काम क्या है?", o: ["DC बिजली को घर वाली AC बिजली में बदलना", "पानी गरम करना", "पैनल साफ़ करना", "सूरज को रोकना"],
          why: "घर के उपकरण AC बिजली से चलते हैं, इसलिए इन्वर्टर DC को AC बनाता है।" },
        { q: "रात को सोलर घर में बिजली कहाँ से आती है?", o: ["पैनल से", "चाँद से", "बैटरी से", "पंखे से"],
          why: "दिन में बची बिजली बैटरी में जमा होती है, और रात को वही काम आती है।" },
        { q: "बादल आने पर पैनल क्या करता है?", o: ["ज़्यादा बिजली बनाता है", "पानी बनाता है", "टूट जाता है", "कम बिजली बनाता है"],
          why: "बादल रोशनी रोक लेते हैं, इसलिए पैनल कम बिजली बनाता है।" },
        { q: "सौर ऊर्जा अच्छी क्यों है?", o: ["धुआँ नहीं करती और सूरज रोज़ निकलता है", "बहुत शोर करती है", "सिर्फ़ रात को चलती है", "कोयला जलाती है"],
          why: "सौर ऊर्जा साफ़ है और कभी खत्म नहीं होती।" }
      ]
    },

    mr: {
      tagline: "सूर्यप्रकाशापासून घरात वीज",
      intro: '<strong>चला सूर्यापासून वीज बनवूया!</strong> पिवळा प्रकाश पॅनेलकडे जाताना दिसेल आणि वायरमधले पिवळे ठिपके म्हणजे वीज. मग "ढग आणा" आणि "रात्र करा" दाबून बॅटरी कशी मदत करते ते बघा.',
      ui: {
        cloud_btn: "☁️ ढग आणा", cloud_away: "☀️ ढग हटवा",
        night_btn: "🌙 रात्र करा", day_btn: "🌅 दिवस करा",
        cloud_on: "☁️ ढगाने सूर्य झाकला. पॅनेल कमी वीज बनवतोय, बॅटरी मदत करतेय",
        cloud_off: "☀️ ढग हटला! पॅनेल पुन्हा पूर्ण वीज बनवतोय आणि बॅटरी चार्ज होतेय",
        night: "🌙 रात्र झाली. पॅनेल वीज बनवू शकत नाही, आता घर बॅटरीवर चालतंय",
        day: "🌅 सकाळ झाली! पॅनेल पुन्हा कामाला लागला",
        empty: "🪫 बॅटरी संपली! पंखा थांबला. आता सूर्याची वाट बघा"
      },
      parts: {
        sun: { name: "सूर्य", tag: "ऊर्जेचा सगळ्यात मोठा खजिना",
          what: "सूर्य दररोज भरपूर प्रकाश आणि उष्णता पाठवतो. हा प्रकाश फक्त 8 मिनिटांत पृथ्वीवर पोहोचतो. सोलर पॅनेल हाच प्रकाश पकडून वीज बनवतो.",
          real: "उन्हात वाळत घातलेले कपडे लवकर सुकतात, कारण सूर्य ऊर्जा देतो.",
          fact: "सूर्य साधारण एक-दोन तासांत पृथ्वीवर इतकी ऊर्जा पाठवतो जितकी सगळं जग एका वर्षात वापरतं." },
        panel: { name: "सोलर पॅनेल", tag: "प्रकाशापासून वीज बनवणारा",
          what: "पॅनेलमध्ये खूप निळे सोलर सेल असतात. ते सिलिकॉनपासून बनतात, जे वाळूतून मिळतं. सेलवर प्रकाश पडला की त्याच्या आत वीज वाहू लागते. ढग आले तर प्रकाश कमी, आणि वीजही कमी.",
          real: "जशी झाडाची पानं उन्हापासून अन्न बनवतात, तसा पॅनेल उन्हापासून वीज बनवतो.",
          fact: "पॅनेल सूर्याकडे थोडा झुकवून लावतात आणि त्यावरची धूळ साफ ठेवतात, म्हणजे तो जास्त प्रकाश पकडतो." },
        inverter: { name: "इन्व्हर्टर", tag: "वीज घरासाठी योग्य बनवणारा",
          what: "पॅनेल आणि बॅटरी DC वीज देतात, जी नेहमी एकाच दिशेने वाहते. घरातले पंखे आणि TV AC विजेवर चालतात, जी सतत दिशा बदलते. इन्व्हर्टर DC चं AC मध्ये रूपांतर करतो.",
          real: "जसा एखादा अनुवादक मराठीचं इंग्रजीत भाषांतर करतो, म्हणजे दुसऱ्याला समजेल.",
          fact: "घरातली AC वीज एका सेकंदात 50 वेळा पुढे-मागे झुलते!" },
        battery: { name: "बॅटरी", tag: "विजेचा साठा",
          what: "दिवसा उरलेली वीज बॅटरीत साठते. रात्री किंवा ढगाळ दिवशी, पॅनेल कमी वीज बनवतो तेव्हा बॅटरी घराला वीज देते. हिरवी पट्टी दाखवते की बॅटरी किती भरली आहे.",
          real: "जसे पिगी बँकेत पैसे साठवतो आणि गरज पडली की काढतो.",
          fact: "अनेक गावांमध्ये सोलर पॅनेल आणि बॅटरीमुळेच रात्री घरं आणि शाळा उजळतात." },
        home: { name: "घरातली उपकरणं", short: "घर", tag: "वीज वापरणारी उपकरणं",
          what: "पंखा, बल्ब आणि TV विजेवर चालतात. पॅनेल किंवा बॅटरीकडून वीज मिळत राहील तोपर्यंत ते चालू राहतात. वीज बंद झाली की पंखा थांबतो आणि बल्ब विझतो.",
          real: "LED बल्ब कमी वीज वापरतो, म्हणून सोलर घरात LED लावणं शहाणपणाचं आहे.",
          fact: "जगातल्या सगळ्यात मोठ्या सोलर पार्कपैकी एक म्हणजे राजस्थानचा भडला सोलर पार्क." }
      },
      quiz: [
        { q: "सोलर पॅनेलला ऊर्जा कुठून मिळते?", o: ["चंद्राकडून", "सूर्यप्रकाशापासून", "वाऱ्यापासून", "पावसापासून"],
          why: "पॅनेल सूर्यप्रकाश पकडून वीज बनवतो." },
        { q: "सोलर पॅनेल काय बनवतो?", o: ["पाणी", "वीज", "अन्न", "आवाज"],
          why: "सोलर सेलवर प्रकाश पडला की वीज तयार होते." },
        { q: "इन्व्हर्टरचं काम काय आहे?", o: ["DC विजेचं घरातल्या AC विजेत रूपांतर करणं", "पाणी गरम करणं", "पॅनेल साफ करणं", "सूर्याला थांबवणं"],
          why: "घरातली उपकरणं AC विजेवर चालतात, म्हणून इन्व्हर्टर DC चं AC करतो." },
        { q: "रात्री सोलर घरात वीज कुठून येते?", o: ["पॅनेलकडून", "चंद्राकडून", "बॅटरीकडून", "पंख्याकडून"],
          why: "दिवसा उरलेली वीज बॅटरीत साठते, आणि रात्री तीच कामाला येते." },
        { q: "ढग आल्यावर पॅनेल काय करतो?", o: ["जास्त वीज बनवतो", "पाणी बनवतो", "तुटतो", "कमी वीज बनवतो"],
          why: "ढग प्रकाश अडवतात, म्हणून पॅनेल कमी वीज बनवतो." },
        { q: "सौर ऊर्जा चांगली का आहे?", o: ["धूर होत नाही आणि सूर्य रोज उगवतो", "खूप आवाज करते", "फक्त रात्री चालते", "कोळसा जाळते"],
          why: "सौर ऊर्जा स्वच्छ आहे आणि कधीच संपत नाही." }
      ]
    }
  },

  /* ------------------------------------------------------------------
     3D MODEL: chhat par panel, deewar par inverter, bagal me battery,
     ghar ke andar pankha, bulb aur TV. Aage ki deewar nahi (dollhouse jaisa).
  ------------------------------------------------------------------ */
  build: function (api) {
    var THREE = api.THREE, mat = api.mat, box = api.box, cyl = api.cyl, sphere = api.sphere;
    var V = function (x, y, z) { return new THREE.Vector3(x, y, z); };
    var s = api.state;

    /* Zameen aur ghar */
    api.decor(box(15, 0.2, 10, mat(0x7cc46a, { rough: 0.9 }), 0, 0, 0));
    var wallM = mat(0xf3e2c4, { rough: 0.8 });
    api.decor(box(5, 3, 0.2, wallM, 0, 1.6, -2));
    api.decor(box(0.2, 3, 4.2, wallM, -2.5, 1.6, 0));
    api.decor(box(0.2, 3, 4.2, wallM, 2.5, 1.6, 0));
    api.decor(box(5, 0.1, 4.2, mat(0xc98f55, { rough: 0.8 }), 0, 0.15, 0));
    api.decor(box(5.4, 0.25, 4.6, mat(0xd8c3a0, { rough: 0.8 }), 0, 3.2, 0));

    /* Sooraj */
    var SUN = V(-5, 7.6, -4.5);
    var sunG = new THREE.Group();
    (function () {
      sunG.add(sphere(1.2, mat(0xffd24a, { glow: 0xffb000, glowLevel: 1.2 }), 0, 0, 0, 28));
      var rayM = mat(0xffe680, { glow: 0xffc233, glowLevel: 0.9 });
      for (var i = 0; i < 12; i++) {
        var a = (i / 12) * Math.PI * 2;
        var r = box(0.12, 0.6, 0.12, rayM, Math.cos(a) * 1.65, Math.sin(a) * 1.65, 0);
        r.rotation.z = a - Math.PI / 2;
        sunG.add(r);
      }
      api.addPart("sun", sunG, SUN.clone());
    })();
    api.spin(sunG, 0.15, "z");

    /* Chaand (raat me) */
    var moon = sphere(0.8, mat(0xe8ecf5, { glow: 0xcfd8ff, glowLevel: 0.6 }), 5, -4, -5, 24);
    api.decor(moon);

    /* Badal */
    var cloud = new THREE.Group();
    var cloudM = mat(0xffffff, { rough: 1, opacity: 0.95 });
    [[0, 0, 0, 1.1], [1.1, -0.2, 0.2, 0.85], [-1.1, -0.25, 0.1, 0.8], [0.5, 0.5, -0.1, 0.8], [-0.5, 0.4, 0.2, 0.75]]
      .forEach(function (p) { cloud.add(sphere(p[3], cloudM, p[0], p[1], p[2], 16)); });
    api.decor(cloud);
    var CLOUD_OFF = V(-15, 7.6, -4.5), CLOUD_ON = V(-4.2, 7.3, -3.1);
    cloud.position.copy(CLOUD_OFF);

    /* Solar panel (chhat par, sooraj ki taraf jhuka) */
    var PANEL = V(0, 4.3, 0);
    (function () {
      var g = new THREE.Group();
      var steel = mat(0x9aa3b5, { metal: 0.7, rough: 0.4 });
      g.add(cyl(0.06, 0.06, 1.5, steel, -1.4, -0.55, 0.6, 8));
      g.add(cyl(0.06, 0.06, 1.5, steel, 1.4, -0.55, 0.6, 8));
      g.add(cyl(0.06, 0.06, 0.6, steel, -1.4, -0.85, -0.5, 8));
      g.add(cyl(0.06, 0.06, 0.6, steel, 1.4, -0.85, -0.5, 8));
      var tilt = new THREE.Group();
      tilt.rotation.x = -0.5;
      tilt.add(box(3.8, 0.08, 2.4, mat(0xd9dde6, { metal: 0.8, rough: 0.3 }), 0, 0, 0));
      var cellM = mat(0x1a3a8f, { rough: 0.25, metal: 0.3 });
      for (var r = 0; r < 4; r++) for (var c = 0; c < 6; c++) {
        tilt.add(box(0.56, 0.04, 0.52, cellM, -1.5 + c * 0.6, 0.05, -0.84 + r * 0.56));
      }
      g.add(tilt);
      api.addPart("panel", g, PANEL.clone());
    })();

    /* Inverter (daayein deewar par bahar) */
    var invM = mat(0x0b1020, { glow: 0x31d17c, glowLevel: 0 });
    var INV = V(2.8, 1.8, 0.9);
    (function () {
      var g = new THREE.Group();
      g.add(box(0.35, 1.1, 0.9, mat(0xeef1f6, { rough: 0.5 }), 0, 0, 0));
      g.add(box(0.02, 0.25, 0.5, invM, 0.18, 0.25, 0));
      g.add(box(0.03, 0.08, 0.08, mat(0xff5a3c), 0.18, -0.15, -0.2));
      g.add(box(0.03, 0.08, 0.08, mat(0x12995f), 0.18, -0.15, 0));
      api.addPart("inverter", g, INV.clone());
    })();

    /* Battery (ghar ke bagal me zameen par) */
    var barM = mat(0x12995f, { glow: 0x31d17c, glowLevel: 0.6 });
    var bar;
    var BAT = V(3.9, 0.7, -0.8);
    (function () {
      var g = new THREE.Group();
      g.add(box(0.9, 1.0, 1.4, mat(0x3a4150, { rough: 0.5 }), 0, 0, 0));
      g.add(box(0.15, 0.12, 0.15, mat(0xd12f4c), 0, 0.56, -0.4));
      g.add(box(0.15, 0.12, 0.15, mat(0x2b2f3a), 0, 0.56, 0.4));
      g.add(box(0.02, 0.8, 0.3, mat(0x1a1d26), 0.46, 0, 0));
      bar = box(0.03, 0.76, 0.24, barM, 0.47, 0, 0);
      g.add(bar);
      api.addPart("battery", g, BAT.clone());
    })();

    /* Ghar ke andar: pankha, bulb, TV */
    var bulbM = mat(0xfff6cc, { glow: 0xffd24a, glowLevel: 0, opacity: 0.85 });
    var tvM = mat(0x0b1020, { glow: 0x4aa8ff, glowLevel: 0 });
    var blades = new THREE.Group();
    var homeLight = new THREE.PointLight(0xffe0a0, 0, 7);
    (function () {
      var g = new THREE.Group();
      g.add(cyl(0.04, 0.04, 0.6, mat(0x555555), 0, 2.65, 0, 8));
      var bm = mat(0xffffff, { rough: 0.5 });
      for (var i = 0; i < 3; i++) {
        var a = (i / 3) * Math.PI * 2;
        var b = box(1.2, 0.03, 0.25, bm, Math.cos(a) * 0.65, 0, Math.sin(a) * 0.65);
        b.rotation.y = -a;
        blades.add(b);
      }
      blades.add(cyl(0.15, 0.15, 0.12, mat(0x8a95ab), 0, 0, 0, 14));
      blades.position.set(0, 2.32, 0);
      g.add(blades);
      /* bulb deewar par */
      g.add(cyl(0.12, 0.12, 0.2, mat(0x8a95ab), -2.25, 2.5, -1.2, 10));
      var bulb = sphere(0.22, bulbM, -2.05, 2.5, -1.2, 16);
      g.add(bulb);
      homeLight.position.set(-1.8, 2.4, -1.0);
      g.add(homeLight);
      /* TV mez par */
      g.add(box(1.6, 0.6, 0.6, mat(0xa0663a, { rough: 0.8 }), 0.8, 0.5, -1.5));
      g.add(box(1.5, 0.9, 0.08, mat(0x1a1d26), 0.8, 1.3, -1.6));
      g.add(box(1.38, 0.78, 0.02, tvM, 0.8, 1.3, -1.55));
      api.addPart("home", g, V(0, 0, 0), null, { focus: false });
    })();

    /* Taar */
    var wireM = mat(0x2b2f3a, { rough: 0.5 });
    var pathPanel = [V(1.6, 3.9, 0.9), V(2.75, 3.4, 0.9), V(2.75, 2.4, 0.9)];
    var pathHome = [V(2.62, 1.8, 0.9), V(2.0, 2.1, 0.9), V(0, 2.75, 0)];
    var pathBat = [V(2.9, 1.25, 0.9), V(3.3, 1.25, 0.2), V(3.9, 1.25, -0.4)];
    [pathPanel, pathHome, pathBat].forEach(function (p) {
      for (var i = 0; i < p.length - 1; i++) api.decor(api.rod(p[i], p[i + 1], 0.04, wireM));
    });
    function curve(pts) {
      var c = new THREE.CurvePath();
      for (var i = 0; i < pts.length - 1; i++) c.add(new THREE.LineCurve3(pts[i], pts[i + 1]));
      return c;
    }
    var dotM = mat(0xffe14a, { glow: 0xffc233, glowLevel: 1 });
    function dots(n) {
      var arr = [];
      for (var i = 0; i < n; i++) { var d = sphere(0.08, dotM, 0, 0, 0, 8); api.decor(d); arr.push(d); }
      return arr;
    }

    /* Sooraj se panel tak roshni ki kiranein */
    var rays = [];
    var rayDotM = mat(0xfff2a8, { glow: 0xffd24a, glowLevel: 1.2 });
    for (var k = 0; k < 10; k++) { var rd = sphere(0.11, rayDotM, 0, 0, 0, 8); api.decor(rd); rays.push(rd); }

    /* Raat me roshni kam karne ke liye scene ki lights */
    var lights = [];
    api.scene.children.forEach(function (o) { if (o.isLight) lights.push({ l: o, base: o.intensity }); });

    s.day = true; s.cloud = false; s.charge = 0.5; s.dayK = 1; s.cloudK = 0; s.fan = 1;
    s.warnedEmpty = false;
    s.sunG = sunG; s.SUN = SUN; s.moon = moon; s.cloudG = cloud; s.CLOUD_OFF = CLOUD_OFF; s.CLOUD_ON = CLOUD_ON;
    s.PANEL = PANEL; s.rays = rays; s.lights = lights;
    s.invM = invM; s.bar = bar; s.barM = barM; s.bulbM = bulbM; s.tvM = tvM; s.blades = blades; s.homeLight = homeLight;
    s.flows = [
      { curve: curve(pathPanel), dots: dots(5), k: 0 },
      { curve: curve(pathHome), dots: dots(5), k: 0 },
      { curve: curve(pathBat), dots: dots(5), k: 0 }
    ];

    s.toggleCloud = function () {
      s.cloud = !s.cloud;
      api.setButton("cloud", s.cloud ? "cloud_away" : "cloud_btn");
      if (s.day) api.setStatus(s.cloud ? "cloud_on" : "cloud_off", 5000);
    };
    s.toggleNight = function () {
      s.day = !s.day;
      api.setButton("night", s.day ? "night_btn" : "day_btn");
      api.setStatus(s.day ? "day" : "night", 5000);
      s.warnedEmpty = false;
    };
  },

  update: function (api, dt, t) {
    var s = api.state;
    var ease = Math.min(1, dt * 2);
    s.dayK += ((s.day ? 1 : 0) - s.dayK) * ease;
    s.cloudK += ((s.cloud ? 1 : 0) - s.cloudK) * ease;

    /* sooraj neeche jaata hai, chaand upar aata hai */
    s.sunG.position.set(s.SUN.x, s.SUN.y - (1 - s.dayK) * 11, s.SUN.z);
    s.moon.position.y = -4 + (1 - s.dayK) * 11.5;
    s.cloudG.position.copy(s.CLOUD_OFF).lerp(s.CLOUD_ON, s.cloudK);
    s.lights.forEach(function (x) { x.l.intensity = x.base * (0.4 + 0.6 * s.dayK); });

    /* bijli ka hisaab: ghar ko 0.6 chahiye */
    var sun = s.dayK * (1 - 0.7 * s.cloudK);
    var LOAD = 0.6;
    var batFlow = 0;                 // + charge ho rahi, − kharch ho rahi
    if (sun >= LOAD) {
      batFlow = s.charge < 1 ? (sun - LOAD) : 0;
      s.charge = Math.min(1, s.charge + batFlow * dt * 0.08);
    } else if (s.charge > 0) {
      batFlow = -(LOAD - sun);
      s.charge = Math.max(0, s.charge + batFlow * dt * 0.05);
    }
    var powered = sun >= LOAD || s.charge > 0;
    if (!powered && !s.warnedEmpty) { s.warnedEmpty = true; api.setStatus("empty", 5000); }
    if (powered) s.warnedEmpty = false;

    /* battery ki patti */
    s.bar.scale.y = Math.max(0.02, s.charge);
    s.bar.position.y = -0.38 * (1 - s.bar.scale.y);
    s.barM.emissive.setHex(s.charge > 0.25 ? 0x31d17c : 0xff4a4a);
    s.barM.color.setHex(s.charge > 0.25 ? 0x12995f : 0xd12f4c);

    /* ghar */
    var on = powered ? 1 : 0;
    s.fan += (on - s.fan) * Math.min(1, dt * 1.5);
    if (!api.reduceMotion) s.blades.rotation.y += dt * 9 * s.fan;
    s.bulbM.emissiveIntensity = 1.4 * on;
    s.homeLight.intensity = 1.2 * on;
    s.tvM.emissiveIntensity = 0.8 * on;
    s.invM.emissiveIntensity = powered ? 0.9 : 0;

    /* roshni ki kiranein: sooraj se panel tak */
    var n = Math.round(sun * s.rays.length);
    s.rays.forEach(function (r, i) {
      r.visible = i < n;
      if (!r.visible) return;
      var k = (t * 0.45 + i / s.rays.length) % 1;
      r.position.copy(s.sunG.position).lerp(s.PANEL, k);
    });

    /* taar me bijli ke dots */
    var flowsOn = [sun > 0.05, powered, Math.abs(batFlow) > 0.01];
    var dir = [1, 1, batFlow >= 0 ? 1 : -1];
    s.flows.forEach(function (f, j) {
      if (flowsOn[j] && !api.reduceMotion) f.k = (f.k + dt * 0.35 * dir[j] + 1) % 1;
      f.dots.forEach(function (d, i) {
        d.visible = flowsOn[j];
        if (d.visible) d.position.copy(f.curve.getPointAt((i / f.dots.length + f.k) % 1));
      });
    });
  }
});
