/* Topic: Drone kaise udta hai */
TL.start({
  id: "drone",
  camera: { theta: 0.6, phi: 1.12, radius: 11, target: [0, 1.8, 0], min: 5, max: 22, explodeRadius: 13 },
  explode: true,
  order: ["frame", "propeller", "motor", "battery", "controller", "camera"],
  parts: {
    frame: { emoji: "✖️" }, propeller: { emoji: "🌀" }, motor: { emoji: "⚙️" },
    battery: { emoji: "🔋" }, controller: { emoji: "🧠" }, camera: { emoji: "📷" }
  },
  quiz: [
    { part: "propeller", a: 1 }, { part: "motor", a: 0 }, { part: "battery", a: 2 },
    { part: "controller", a: 1 }, { part: "propeller", a: 3 }, { part: "camera", a: 0 }
  ],
  actions: [
    { id: "fly", label: "fly", main: true, onClick: function (api) { api.state.toggleFly(); } },
    { id: "yaw", label: "yaw", onClick: function (api) { api.state.turn(); } }
  ],

  text: {
    hinglish: {
      tagline: "4 pankhe, ek chhota dimaag, aur udaan!",
      intro: '<strong>Chalo drone udaayein!</strong> "Udaao" dabao aur dekho propeller kaise ghoomte hain. Udte hue "Ghumao" dabao. "Parts alag karo" se andar ke parts dekho.',
      ui: {
        fly: "🛫 Udaao", land: "🛬 Utaaro", yaw: "↻ Ghumao",
        fly_msg: "🛫 Motor tez! Propeller hawa ko neeche dhakel rahe hain, isliye drone upar uth gaya",
        land_msg: "🛬 Motor dheere hui, drone aaram se neeche aa gaya",
        yaw_msg: "↻ 2 propeller tez ghoome, isliye drone ulti taraf ghoom gaya",
        fly_first: "Pehle 🛫 Udaao dabao!"
      },
      parts: {
        frame: { name: "Frame", tag: "Drone ka dhaancha",
          what: "Frame saare parts ko pakad kar rakhta hai: beech me body aur chaar haath. Ye halka aur mazboot hona chahiye, isliye aksar carbon fiber ya plastic se banta hai.",
          real: "Jaise hamari haddiyaan sharir ko aakaar deti hain.",
          fact: "Drone jitna halka hoga, utni zyada der ud sakega." },
        propeller: { name: "Propeller", tag: "Hawa ko dhakelne wale pankh",
          what: "Propeller ke pankh thode tedhe hote hain. Tezi se ghoomte hue ye hawa ko neeche dhakelte hain, aur hawa drone ko upar dhakelti hai. Isi se drone udta hai.",
          real: "Table fan ke saamne haath rakho, hawa ka dhakka mehsoos hota hai na? Wahi dhakka drone ko uthata hai.",
          fact: "4 me se 2 propeller ek taraf aur 2 ulti taraf ghoomte hain. Warna drone khud hi lattoo ki tarah ghoomne lagta." },
        motor: { name: "Motor", tag: "Propeller ko ghumane wali",
          what: "Har propeller ke neeche ek chhoti par bahut tez motor hai. Bijli milte hi ye bahut tezi se ghoomti hai. Motor ki speed badal kar drone upar, neeche aur idhar-udhar jaata hai.",
          real: "Mixer grinder me bhi motor hi blade ko tezi se ghumati hai.",
          fact: "Drone ki motor ek minute me 10,000 se bhi zyada chakkar laga sakti hai." },
        battery: { name: "Battery", tag: "Udne ki taakat",
          what: "Battery chaaron motor ko bijli deti hai. Udte waqt motor bahut bijli khaati hain, isliye zyaadatar chhote drone sirf 20-30 minute hi ud paate hain.",
          real: "Jaise daudne me jaldi thakaan hoti hai, waise hi udne me battery jaldi khatam hoti hai.",
          fact: "Battery kam ho to kai drone khud hi wapas usi jagah aa jaate hain jahan se ude the." },
        controller: { name: "Flight controller", short: "Controller", tag: "Drone ka chhota dimaag",
          what: "Ye chhota circuit board drone ka dimaag hai. Iske sensor har pal dekhte hain ki drone jhuk to nahi raha. Jhukte hi ye motors ki speed badal kar drone ko seedha kar deta hai, ek second me sainkdon baar!",
          real: "Cycle chalate waqt tum bina soche balance banate ho. Controller bhi waise hi balance banata hai.",
          fact: "Iske andar wahi gyro sensor hota hai jo tumhare phone ko batata hai ki phone ghooma ya nahi." },
        camera: { name: "Camera", tag: "Drone ki aankh",
          what: "Camera ek gimbal par laga hai. Drone hile tab bhi gimbal camera ko seedha rakhta hai. Isse upar se saaf photo aur video milti hai.",
          real: "Kisaan drone se khet ki photo lekar dekhte hain ki kaun se paudhe bimar hain.",
          fact: "Drone se kheton me dawai ka chhidkaav hota hai, aur door ke gaon tak dawaiyaan bhi pahunchaai jaati hain." }
      },
      quiz: [
        { q: "Drone hawa me kaise uthta hai?", o: ["Camera ki madad se", "Propeller hawa ko neeche dhakelte hain", "Battery ke wajan se", "Usme gubbara laga hai"],
          why: "Propeller hawa ko neeche dhakelte hain, aur hawa drone ko upar dhakelti hai." },
        { q: "Propeller ko kaun ghumata hai?", o: ["Motor", "Camera", "Frame", "Battery ka dhakkan"],
          why: "Har propeller ke neeche ek tez motor hai." },
        { q: "Chhota drone zyada der kyun nahi ud paata?", o: ["Propeller thak jaate hain", "Hawa khatam ho jaati hai", "Battery jaldi khatam hoti hai", "Camera bhaari hai"],
          why: "Udne me motor bahut bijli khaati hain, isliye battery jaldi khatam hoti hai." },
        { q: "Drone ko seedha (balance me) kaun rakhta hai?", o: ["Camera", "Flight controller aur uske sensor", "Landing legs", "Propeller guard"],
          why: "Controller ke sensor jhukaav pakadte hain aur motors ki speed turant badal dete hain." },
        { q: "Drone ke 4 propeller kaise ghoomte hain?", o: ["Saare ek hi taraf", "Sirf ek ghoomta hai", "Koi nahi ghoomta", "2 ek taraf, 2 ulti taraf"],
          why: "Ulti disha me ghoomne se drone apne aap lattoo ki tarah nahi ghoomta." },
        { q: "Kisaan drone ke camera se kya kar sakte hain?", o: ["Upar se khet dekh kar bimar paudhe dhoondh sakte hain", "Baarish la sakte hain", "Beej uga sakte hain", "Mitti bana sakte hain"],
          why: "Upar se poora khet ek saath dikhta hai, isliye bimar paudhe jaldi mil jaate hain." }
      ]
    },

    en: {
      tagline: "4 propellers, a small brain, and lift-off!",
      intro: '<strong>Let\'s fly the drone!</strong> Press "Fly" and watch the propellers spin. While it flies, press "Turn". Use "Take apart" to see the parts inside.',
      ui: {
        fly: "🛫 Fly", land: "🛬 Land", yaw: "↻ Turn",
        fly_msg: "🛫 Motors fast! The propellers push air down, so the drone rises up",
        land_msg: "🛬 The motors slowed down and the drone landed gently",
        yaw_msg: "↻ Two propellers spun faster, so the drone turned the other way",
        fly_first: "Press 🛫 Fly first!"
      },
      parts: {
        frame: { name: "Frame", tag: "The drone's skeleton",
          what: "The frame holds all the parts: the body in the middle and four arms. It must be light and strong, so it is often made of carbon fibre or plastic.",
          real: "Like our bones give our body its shape.",
          fact: "The lighter the drone, the longer it can fly." },
        propeller: { name: "Propeller", tag: "Blades that push the air",
          what: "Propeller blades are slightly tilted. Spinning fast, they push air down, and the air pushes the drone up. That is how a drone flies.",
          real: "Put your hand in front of a table fan. Can you feel the push of the air? That same push lifts the drone.",
          fact: "Of the 4 propellers, 2 spin one way and 2 spin the other way. Otherwise the drone would spin like a top." },
        motor: { name: "Motor", tag: "Spins the propeller",
          what: "Under each propeller is a small but very fast motor. As soon as it gets electricity, it spins very fast. By changing motor speeds, the drone goes up, down and sideways.",
          real: "In a mixer grinder, a motor also spins the blade very fast.",
          fact: "A drone motor can spin more than 10,000 times in a minute." },
        battery: { name: "Battery", tag: "The power to fly",
          what: "The battery gives electricity to all four motors. Flying uses a lot of electricity, so most small drones can fly for only 20 to 30 minutes.",
          real: "Just as running makes you tired quickly, flying uses up the battery quickly.",
          fact: "When the battery is low, many drones fly back by themselves to the place they took off from." },
        controller: { name: "Flight controller", short: "Controller", tag: "The drone's small brain",
          what: "This small circuit board is the drone's brain. Its sensors check every moment whether the drone is tilting. If it tilts, the controller changes the motor speeds to level it, hundreds of times a second!",
          real: "When you ride a bicycle you balance without thinking. The controller balances the same way.",
          fact: "It has the same gyro sensor that tells your phone when it has been turned." },
        camera: { name: "Camera", tag: "The drone's eye",
          what: "The camera sits on a gimbal. Even when the drone moves, the gimbal keeps the camera steady. That gives clear photos and videos from above.",
          real: "Farmers take photos of their fields with drones to find which plants are sick.",
          fact: "Drones spray medicine on crops, and even carry medicines to faraway villages." }
      },
      quiz: [
        { q: "How does a drone rise into the air?", o: ["With help from the camera", "The propellers push air down", "Because of the battery's weight", "It has a balloon"],
          why: "The propellers push air down, and the air pushes the drone up." },
        { q: "What spins the propeller?", o: ["A motor", "The camera", "The frame", "The battery cover"],
          why: "There is a fast motor under each propeller." },
        { q: "Why can't a small drone fly for long?", o: ["The propellers get tired", "The air runs out", "The battery runs out quickly", "The camera is heavy"],
          why: "Flying makes the motors use a lot of electricity, so the battery runs out quickly." },
        { q: "What keeps the drone level and balanced?", o: ["The camera", "The flight controller and its sensors", "The landing legs", "The propeller guard"],
          why: "The controller's sensors notice a tilt and change the motor speeds right away." },
        { q: "How do a drone's 4 propellers spin?", o: ["All the same way", "Only one spins", "None of them spin", "2 one way, 2 the other way"],
          why: "Spinning in opposite directions stops the drone from spinning like a top." },
        { q: "What can farmers do with a drone's camera?", o: ["Look at the field from above to find sick plants", "Bring rain", "Grow seeds", "Make soil"],
          why: "From above you see the whole field at once, so sick plants are found quickly." }
      ]
    },

    hi: {
      tagline: "4 पंखे, एक छोटा दिमाग, और उड़ान!",
      intro: '<strong>चलो ड्रोन उड़ाएँ!</strong> "उड़ाओ" दबाओ और देखो प्रोपेलर कैसे घूमते हैं। उड़ते हुए "घुमाओ" दबाओ। "पार्ट्स अलग करो" से अंदर के पार्ट्स देखो।',
      ui: {
        fly: "🛫 उड़ाओ", land: "🛬 उतारो", yaw: "↻ घुमाओ",
        fly_msg: "🛫 मोटर तेज़! प्रोपेलर हवा को नीचे धकेल रहे हैं, इसलिए ड्रोन ऊपर उठ गया",
        land_msg: "🛬 मोटर धीमी हुई, ड्रोन आराम से नीचे आ गया",
        yaw_msg: "↻ 2 प्रोपेलर तेज़ घूमे, इसलिए ड्रोन उल्टी तरफ़ घूम गया",
        fly_first: "पहले 🛫 उड़ाओ दबाओ!"
      },
      parts: {
        frame: { name: "फ़्रेम", tag: "ड्रोन का ढाँचा",
          what: "फ़्रेम सारे पार्ट्स को पकड़कर रखता है: बीच में बॉडी और चार हाथ। यह हल्का और मज़बूत होना चाहिए, इसलिए अक्सर कार्बन फ़ाइबर या प्लास्टिक से बनता है।",
          real: "जैसे हमारी हड्डियाँ शरीर को आकार देती हैं।",
          fact: "ड्रोन जितना हल्का होगा, उतनी ज़्यादा देर उड़ सकेगा।" },
        propeller: { name: "प्रोपेलर", tag: "हवा को धकेलने वाले पंख",
          what: "प्रोपेलर के पंख थोड़े टेढ़े होते हैं। तेज़ी से घूमते हुए ये हवा को नीचे धकेलते हैं, और हवा ड्रोन को ऊपर धकेलती है। इसी से ड्रोन उड़ता है।",
          real: "टेबल फ़ैन के सामने हाथ रखो, हवा का धक्का महसूस होता है ना? वही धक्का ड्रोन को उठाता है।",
          fact: "4 में से 2 प्रोपेलर एक तरफ़ और 2 उल्टी तरफ़ घूमते हैं। वरना ड्रोन खुद ही लट्टू की तरह घूमने लगता।" },
        motor: { name: "मोटर", tag: "प्रोपेलर को घुमाने वाली",
          what: "हर प्रोपेलर के नीचे एक छोटी पर बहुत तेज़ मोटर है। बिजली मिलते ही यह बहुत तेज़ी से घूमती है। मोटर की स्पीड बदलकर ड्रोन ऊपर, नीचे और इधर-उधर जाता है।",
          real: "मिक्सर ग्राइंडर में भी मोटर ही ब्लेड को तेज़ी से घुमाती है।",
          fact: "ड्रोन की मोटर एक मिनट में 10,000 से भी ज़्यादा चक्कर लगा सकती है।" },
        battery: { name: "बैटरी", tag: "उड़ने की ताकत",
          what: "बैटरी चारों मोटर को बिजली देती है। उड़ते समय मोटर बहुत बिजली खाती हैं, इसलिए ज़्यादातर छोटे ड्रोन सिर्फ़ 20-30 मिनट ही उड़ पाते हैं।",
          real: "जैसे दौड़ने में जल्दी थकान होती है, वैसे ही उड़ने में बैटरी जल्दी खत्म होती है।",
          fact: "बैटरी कम हो तो कई ड्रोन खुद ही वापस उसी जगह आ जाते हैं जहाँ से उड़े थे।" },
        controller: { name: "फ़्लाइट कंट्रोलर", short: "कंट्रोलर", tag: "ड्रोन का छोटा दिमाग",
          what: "यह छोटा सर्किट बोर्ड ड्रोन का दिमाग है। इसके सेंसर हर पल देखते हैं कि ड्रोन झुक तो नहीं रहा। झुकते ही यह मोटरों की स्पीड बदलकर ड्रोन को सीधा कर देता है, एक सेकंड में सैकड़ों बार!",
          real: "साइकिल चलाते समय तुम बिना सोचे संतुलन बनाते हो। कंट्रोलर भी वैसे ही संतुलन बनाता है।",
          fact: "इसके अंदर वही जाइरो सेंसर होता है जो तुम्हारे फ़ोन को बताता है कि फ़ोन घूमा या नहीं।" },
        camera: { name: "कैमरा", tag: "ड्रोन की आँख",
          what: "कैमरा एक जिम्बल पर लगा है। ड्रोन हिले तब भी जिम्बल कैमरे को सीधा रखता है। इससे ऊपर से साफ़ फ़ोटो और वीडियो मिलते हैं।",
          real: "किसान ड्रोन से खेत की फ़ोटो लेकर देखते हैं कि कौन-से पौधे बीमार हैं।",
          fact: "ड्रोन से खेतों में दवाई का छिड़काव होता है, और दूर के गाँवों तक दवाइयाँ भी पहुँचाई जाती हैं।" }
      },
      quiz: [
        { q: "ड्रोन हवा में कैसे उठता है?", o: ["कैमरे की मदद से", "प्रोपेलर हवा को नीचे धकेलते हैं", "बैटरी के वज़न से", "उसमें गुब्बारा लगा है"],
          why: "प्रोपेलर हवा को नीचे धकेलते हैं, और हवा ड्रोन को ऊपर धकेलती है।" },
        { q: "प्रोपेलर को कौन घुमाता है?", o: ["मोटर", "कैमरा", "फ़्रेम", "बैटरी का ढक्कन"],
          why: "हर प्रोपेलर के नीचे एक तेज़ मोटर है।" },
        { q: "छोटा ड्रोन ज़्यादा देर क्यों नहीं उड़ पाता?", o: ["प्रोपेलर थक जाते हैं", "हवा खत्म हो जाती है", "बैटरी जल्दी खत्म होती है", "कैमरा भारी है"],
          why: "उड़ने में मोटर बहुत बिजली खाती हैं, इसलिए बैटरी जल्दी खत्म होती है।" },
        { q: "ड्रोन को सीधा (संतुलन में) कौन रखता है?", o: ["कैमरा", "फ़्लाइट कंट्रोलर और उसके सेंसर", "लैंडिंग लेग्स", "प्रोपेलर गार्ड"],
          why: "कंट्रोलर के सेंसर झुकाव पकड़ते हैं और मोटरों की स्पीड तुरंत बदल देते हैं।" },
        { q: "ड्रोन के 4 प्रोपेलर कैसे घूमते हैं?", o: ["सारे एक ही तरफ़", "सिर्फ़ एक घूमता है", "कोई नहीं घूमता", "2 एक तरफ़, 2 उल्टी तरफ़"],
          why: "उल्टी दिशा में घूमने से ड्रोन अपने आप लट्टू की तरह नहीं घूमता।" },
        { q: "किसान ड्रोन के कैमरे से क्या कर सकते हैं?", o: ["ऊपर से खेत देखकर बीमार पौधे ढूँढ सकते हैं", "बारिश ला सकते हैं", "बीज उगा सकते हैं", "मिट्टी बना सकते हैं"],
          why: "ऊपर से पूरा खेत एक साथ दिखता है, इसलिए बीमार पौधे जल्दी मिल जाते हैं।" }
      ]
    },

    mr: {
      tagline: "4 पंखे, एक छोटा मेंदू, आणि उड्डाण!",
      intro: '<strong>चला ड्रोन उडवूया!</strong> "उडवा" दाबा आणि प्रोपेलर कसे फिरतात ते बघा. उडत असताना "फिरवा" दाबा. "भाग वेगळे करा" दाबून आतले भाग बघा.',
      ui: {
        fly: "🛫 उडवा", land: "🛬 उतरवा", yaw: "↻ फिरवा",
        fly_msg: "🛫 मोटर वेगात! प्रोपेलर हवा खाली ढकलतात, म्हणून ड्रोन वर उचलला गेला",
        land_msg: "🛬 मोटर हळू झाली, ड्रोन अलगद खाली आला",
        yaw_msg: "↻ 2 प्रोपेलर वेगाने फिरले, म्हणून ड्रोन उलट्या दिशेला फिरला",
        fly_first: "आधी 🛫 उडवा दाबा!"
      },
      parts: {
        frame: { name: "फ्रेम", tag: "ड्रोनचा सांगाडा",
          what: "फ्रेम सगळे भाग धरून ठेवते: मध्ये बॉडी आणि चार हात. ती हलकी आणि मजबूत असायला हवी, म्हणून बहुतेक कार्बन फायबर किंवा प्लास्टिकची बनते.",
          real: "जशी आपली हाडं शरीराला आकार देतात.",
          fact: "ड्रोन जितका हलका, तितका जास्त वेळ तो उडू शकतो." },
        propeller: { name: "प्रोपेलर", tag: "हवा ढकलणारे पंखे",
          what: "प्रोपेलरची पाती थोडी तिरकी असतात. वेगाने फिरताना ती हवा खाली ढकलतात, आणि हवा ड्रोनला वर ढकलते. यामुळेच ड्रोन उडतो.",
          real: "टेबल फॅनसमोर हात धरा, हवेचा धक्का जाणवतो ना? तोच धक्का ड्रोनला उचलतो.",
          fact: "4 पैकी 2 प्रोपेलर एका दिशेने आणि 2 उलट्या दिशेने फिरतात. नाहीतर ड्रोन भोवऱ्यासारखा स्वतःच गोल फिरू लागला असता." },
        motor: { name: "मोटर", tag: "प्रोपेलर फिरवणारी",
          what: "प्रत्येक प्रोपेलरखाली एक छोटी पण खूप वेगवान मोटर असते. वीज मिळताच ती खूप वेगाने फिरते. मोटरचा वेग बदलून ड्रोन वर, खाली आणि इकडे-तिकडे जातो.",
          real: "मिक्सरमध्येही मोटरच पाती वेगाने फिरवते.",
          fact: "ड्रोनची मोटर एका मिनिटात 10,000 पेक्षा जास्त फेऱ्या मारू शकते." },
        battery: { name: "बॅटरी", tag: "उडण्याची ताकद",
          what: "बॅटरी चारही मोटरना वीज देते. उडताना मोटर खूप वीज वापरतात, म्हणून बहुतेक छोटे ड्रोन फक्त 20-30 मिनिटंच उडू शकतात.",
          real: "जसं धावताना लवकर दमायला होतं, तशी उडताना बॅटरी लवकर संपते.",
          fact: "बॅटरी कमी झाली की अनेक ड्रोन जिथून उडाले त्याच जागी स्वतःहून परत येतात." },
        controller: { name: "फ्लाइट कंट्रोलर", short: "कंट्रोलर", tag: "ड्रोनचा छोटा मेंदू",
          what: "हा छोटा सर्किट बोर्ड ड्रोनचा मेंदू आहे. त्याचे सेन्सर प्रत्येक क्षणी बघतात की ड्रोन झुकतोय का. झुकला की तो मोटरचा वेग बदलून ड्रोन सरळ करतो, एका सेकंदात शेकडो वेळा!",
          real: "सायकल चालवताना तुम्ही विचार न करता तोल सांभाळता. कंट्रोलरही तसाच तोल सांभाळतो.",
          fact: "त्यात तोच जायरो सेन्सर असतो जो तुमच्या फोनला सांगतो की फोन फिरला की नाही." },
        camera: { name: "कॅमेरा", tag: "ड्रोनचा डोळा",
          what: "कॅमेरा एका जिम्बलवर बसवलेला असतो. ड्रोन हलला तरी जिम्बल कॅमेरा स्थिर ठेवतो. त्यामुळे वरून स्पष्ट फोटो आणि व्हिडिओ मिळतात.",
          real: "शेतकरी ड्रोनने शेताचे फोटो काढून बघतात की कोणती रोपं आजारी आहेत.",
          fact: "ड्रोनने शेतात औषध फवारलं जातं, आणि दूरच्या गावांपर्यंत औषधंही पोहोचवली जातात." }
      },
      quiz: [
        { q: "ड्रोन हवेत कसा उचलला जातो?", o: ["कॅमेऱ्याच्या मदतीने", "प्रोपेलर हवा खाली ढकलतात", "बॅटरीच्या वजनामुळे", "त्यात फुगा लावलेला असतो"],
          why: "प्रोपेलर हवा खाली ढकलतात, आणि हवा ड्रोनला वर ढकलते." },
        { q: "प्रोपेलर कोण फिरवतं?", o: ["मोटर", "कॅमेरा", "फ्रेम", "बॅटरीचं झाकण"],
          why: "प्रत्येक प्रोपेलरखाली एक वेगवान मोटर असते." },
        { q: "छोटा ड्रोन जास्त वेळ का उडू शकत नाही?", o: ["प्रोपेलर दमतात", "हवा संपते", "बॅटरी लवकर संपते", "कॅमेरा जड असतो"],
          why: "उडताना मोटर खूप वीज वापरतात, म्हणून बॅटरी लवकर संपते." },
        { q: "ड्रोनला सरळ (तोल सांभाळून) कोण ठेवतं?", o: ["कॅमेरा", "फ्लाइट कंट्रोलर आणि त्याचे सेन्सर", "लँडिंग पाय", "प्रोपेलर गार्ड"],
          why: "कंट्रोलरचे सेन्सर झुकणं ओळखतात आणि मोटरचा वेग लगेच बदलतात." },
        { q: "ड्रोनचे 4 प्रोपेलर कसे फिरतात?", o: ["सगळे एकाच दिशेने", "फक्त एक फिरतो", "एकही फिरत नाही", "2 एका दिशेने, 2 उलट्या दिशेने"],
          why: "उलट्या दिशेने फिरल्यामुळे ड्रोन भोवऱ्यासारखा स्वतः फिरत नाही." },
        { q: "शेतकरी ड्रोनच्या कॅमेऱ्याने काय करू शकतात?", o: ["वरून शेत बघून आजारी रोपं शोधू शकतात", "पाऊस आणू शकतात", "बिया उगवू शकतात", "माती बनवू शकतात"],
          why: "वरून पूर्ण शेत एकाच वेळी दिसतं, म्हणून आजारी रोपं लवकर सापडतात." }
      ]
    }
  },

  /* ------------------------------------------------------------------
     3D MODEL: saare parts `craft` group ke andar, taaki poora drone ude.
  ------------------------------------------------------------------ */
  build: function (api) {
    var THREE = api.THREE, mat = api.mat, box = api.box, cyl = api.cyl, sphere = api.sphere;
    var V = function (x, y, z) { return new THREE.Vector3(x, y, z); };
    var s = api.state;
    var craft = new THREE.Group();
    api.decor(craft);
    var LANDED = 0.62;
    craft.position.y = LANDED;
    /* part banao, phir craft ke andar daalo (engine explode ko craft ke hisaab se chalata hai) */
    function part(id, g, pos, explode) { api.addPart(id, g, pos, explode); craft.add(g); }

    /* Zameen, helipad, ped */
    api.decor(box(16, 0.2, 12, mat(0x86c46f, { rough: 0.9 }), 0, 0, 0));
    api.decor(cyl(1.9, 1.9, 0.06, mat(0x4a5163, { rough: 0.8 }), 0, 0.13, 0, 40));
    var hM = mat(0xffffff);
    api.decor(box(0.18, 0.02, 1.2, hM, -0.4, 0.17, 0));
    api.decor(box(0.18, 0.02, 1.2, hM, 0.4, 0.17, 0));
    api.decor(box(0.8, 0.02, 0.18, hM, 0, 0.17, 0));
    [[-5, -3.5], [5.5, -2.5], [-4.5, 3.5]].forEach(function (p) {
      api.decor(cyl(0.18, 0.25, 1.4, mat(0x8a5a2b), p[0], 0.8, p[1], 10));
      api.decor(sphere(1.0, mat(0x2f9a4a, { rough: 0.9 }), p[0], 2.1, p[1], 14));
    });
    var shadow = cyl(1.6, 1.6, 0.02, mat(0x000000, { opacity: 0.25 }), 0, 0.18, 0, 32);
    api.decor(shadow);

    var ARMS = [[-1, -1], [1, -1], [1, 1], [-1, 1]];   // aage-baayein se ghadi ki disha
    var R = 1.45;

    /* Frame: body + haath + legs */
    (function () {
      var g = new THREE.Group();
      var bodyM = mat(0xeef1f6, { rough: 0.4 });
      g.add(box(1.3, 0.42, 1.3, bodyM, 0, 0, 0));
      g.add(box(1.0, 0.1, 1.0, mat(0xff5a3c, { rough: 0.5 }), 0, 0.25, 0));
      var armM = mat(0x2b2f3a, { rough: 0.5 });
      ARMS.forEach(function (a) {
        g.add(api.rod(V(0, 0.05, 0), V(a[0] * R, 0.05, a[1] * R), 0.07, armM));
      });
      var legM = mat(0x3a4150);
      [[-0.45, 0], [0.45, 0]].forEach(function (p) {
        g.add(api.rod(V(p[0], -0.2, -0.35), V(p[0] * 1.3, -0.62, -0.45), 0.035, legM));
        g.add(api.rod(V(p[0], -0.2, 0.35), V(p[0] * 1.3, -0.62, 0.45), 0.035, legM));
        g.add(box(0.06, 0.06, 1.3, legM, p[0] * 1.3, -0.62, 0));
      });
      part("frame", g, V(0, 0, 0));
    })();

    /* Motors */
    (function () {
      var g = new THREE.Group();
      var mM = mat(0x5a6275, { metal: 0.7, rough: 0.35 });
      var cap = mat(0xc9ced8, { metal: 0.9, rough: 0.25 });
      ARMS.forEach(function (a) {
        g.add(cyl(0.18, 0.2, 0.28, mM, a[0] * R, 0.18, a[1] * R, 18));
        g.add(cyl(0.06, 0.06, 0.12, cap, a[0] * R, 0.36, a[1] * R, 10));
      });
      part("motor", g, V(0, 0, 0), V(0, 0.8, 0));
    })();

    /* Propellers */
    var props = [];
    (function () {
      var g = new THREE.Group();
      ARMS.forEach(function (a, i) {
        var p = new THREE.Group();
        var bm = mat(i % 2 === 0 ? 0x2b6bff : 0xff5a3c, { rough: 0.4 });
        var b1 = box(1.15, 0.025, 0.14, bm, 0, 0, 0); b1.rotation.x = 0.18; p.add(b1);
        var b2 = box(1.15, 0.025, 0.14, bm, 0, 0, 0); b2.rotation.y = Math.PI / 2; b2.rotation.z = 0.18; p.add(b2);
        p.add(cyl(0.07, 0.07, 0.06, mat(0x1a1d26), 0, 0, 0, 10));
        p.position.set(a[0] * R, 0.44, a[1] * R);
        g.add(p);
        props.push({ g: p, dir: i % 2 === 0 ? -1 : 1 });   // 0 aur 2 ghadi ki disha me, 1 aur 3 ulte
      });
      part("propeller", g, V(0, 0, 0), V(0, 1.7, 0));
    })();

    /* Battery (neeche) */
    (function () {
      var g = new THREE.Group();
      g.add(box(0.95, 0.3, 0.6, mat(0x2a2f3c, { rough: 0.5 }), 0, 0, 0));
      g.add(box(0.96, 0.08, 0.61, mat(0xffc233), 0, 0.05, 0));
      [0, 1, 2, 3].forEach(function (i) {
        g.add(box(0.12, 0.05, 0.02, mat(0x31d17c, { glow: 0x31d17c, glowLevel: 0.8 }), -0.25 + i * 0.16, -0.06, 0.31));
      });
      part("battery", g, V(0, -0.37, -0.1), V(0, -1.1, 0));
    })();

    /* Flight controller (upar, chamakti LED) */
    var ledM = mat(0x330000, { glow: 0xff3030, glowLevel: 0.5 });
    (function () {
      var g = new THREE.Group();
      g.add(box(0.7, 0.04, 0.7, mat(0x0e8a78, { rough: 0.5 }), 0, 0, 0));
      g.add(box(0.28, 0.06, 0.28, mat(0x1a1d26), 0, 0.05, 0));
      g.add(box(0.12, 0.08, 0.12, mat(0xc9ced8, { metal: 0.8 }), 0.22, 0.05, -0.22));
      g.add(sphere(0.06, ledM, -0.24, 0.07, 0.24, 8));
      var arrowM = mat(0xffffff);
      g.add(box(0.06, 0.03, 0.22, arrowM, 0, 0.04, 0.24));
      part("controller", g, V(0, 0.32, 0), V(0, 1.1, 0));
    })();

    /* Camera + gimbal (aage, neeche) */
    (function () {
      var g = new THREE.Group();
      g.add(box(0.14, 0.2, 0.14, mat(0x3a4150), 0, 0.1, 0));
      g.add(sphere(0.2, mat(0x1a1d26, { rough: 0.4 }), 0, -0.1, 0, 16));
      var lens = cyl(0.09, 0.09, 0.08, mat(0x0a0d18, { metal: 0.5, rough: 0.05 }), 0, -0.1, 0.19, 16);
      lens.rotation.x = Math.PI / 2;
      g.add(lens);
      part("camera", g, V(0, -0.38, 0.62), V(0, -0.5, 1.1));
    })();

    s.flying = false; s.speed = 0; s.yawLeft = 0;
    s.craft = craft; s.props = props; s.ledM = ledM; s.shadow = shadow; s.LANDED = LANDED;

    s.toggleFly = function () {
      s.flying = !s.flying;
      api.setButton("fly", s.flying ? "land" : "fly");
      api.setStatus(s.flying ? "fly_msg" : "land_msg", 4500);
    };
    s.turn = function () {
      if (!s.flying || s.craft.position.y < 1.5) { api.setStatus("fly_first", 2500); return; }
      s.yawLeft = Math.PI * 2;
      api.setStatus("yaw_msg", 4500);
    };
  },

  update: function (api, dt, t) {
    var s = api.state;
    /* propeller ki speed: udte waqt tez, neeche dheere-dheere ruk jaaye */
    var want = s.flying ? 1 : (s.craft.position.y > s.LANDED + 0.05 ? 0.6 : 0);
    s.speed += (want - s.speed) * Math.min(1, dt * 2);
    var yawing = s.yawLeft > 0;
    s.props.forEach(function (p, i) {
      /* ghoomne ke liye 0 aur 2 wale tez */
      var boost = yawing && i % 2 === 0 ? 1.6 : 1;
      p.g.rotation.y += p.dir * dt * 32 * s.speed * boost;
    });

    /* upar-neeche */
    var targetY = s.flying && s.speed > 0.6 ? 3.2 + (api.reduceMotion ? 0 : Math.sin(t * 2) * 0.08) : s.LANDED;
    s.craft.position.y += (targetY - s.craft.position.y) * Math.min(1, dt * (s.flying ? 1.2 : 1.6));
    var h = s.craft.position.y - s.LANDED;
    s.craft.rotation.z = s.flying && !api.reduceMotion ? Math.sin(t * 1.3) * 0.04 : 0;

    /* ghoomna (yaw): tez propeller ulti disha me, drone doosri disha me */
    if (yawing) {
      var step = Math.min(s.yawLeft, dt * 2.5);
      s.craft.rotation.y += step;
      s.yawLeft -= step;
    }

    var sc = Math.max(0.35, 1 - h * 0.18);
    s.shadow.scale.set(sc, 1, sc);
    s.shadow.material.opacity = 0.25 * sc;

    /* LED: udte waqt hari, warna laal timtimati */
    if (s.flying) { s.ledM.emissive.setHex(0x31ff6a); s.ledM.emissiveIntensity = 1.2; }
    else { s.ledM.emissive.setHex(0xff3030); s.ledM.emissiveIntensity = Math.sin(t * 4) > 0 ? 1 : 0.1; }
  }
});
