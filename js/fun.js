/* Tech Lab 3D: bachchon ke liye mazedaar cheezein.
   - Awaaz (sound effects): browser khud banata hai, koi file nahi, offline bhi chalti hai
   - Confetti (khushi ki baarish) jab poore number ya naya star/badge mile
   - Chiku 🤖: madad karne wala robot dost, hint aur shabaashi deta hai
   - Pehli baar aane par tour: kaun sa button kya karta hai
   Engine aur common.js TL.emit(...) se batate hain; yahan TL.on(...) se sunte hain. */
(function () {
  "use strict";

  var FUN_UI = {
    hinglish: {
      hint: "💡 Hint lo",
      mascot_label: "Chiku se madad lo",
      m_home_hi: "Namaste {0}! Main Chiku hoon 🤖 Aaj kaun sa topic kholein?",
      m_topic_hi: "Hi! Main Chiku hoon 🤖 Kisi bhi part par tap karo, ya neeche ke buttons dabao!",
      m_all_seen: "Waah! Saare parts dekh liye ⭐ Ab Quiz tab kholo!",
      m_right1: "Shabaash! 🎉", m_right2: "Ek dum sahi! 👏", m_right3: "Super! Tum to tez ho! ⚡",
      m_wrong: "Koi baat nahi! Galti se hi seekhte hain. Sahi part 3D me chamak raha hai.",
      m_hint: "Maine ek galat jawab hata diya. Ab dhyan se socho! 🤔",
      m_quiz_full: "Poore number! Tum superstar ho! 🎉",
      m_new_star: "Naya star mila! ⭐ Aise hi aage badho!",
      m_quiz_done: "Quiz khatam! Seekho tab me parts dobara dekho, phir try karo.",
      m_badge: "Naya badge! {0} 🏅",
      m_tip1: "Model ko ungli se ghumao. Do ungliyon se pinch karke zoom karo.",
      m_tip2: "Neeche ke buttons dabao. Model me kuch mazedaar hoga!",
      m_tip3: "🔊 Suno button dabakar text sun bhi sakte ho.",
      m_tip4: "Upar ke chips par tap karke har part jaldi dhoondo.",
      m_tip5: "Quiz me atak gaye? 💡 Hint button dabao.",
      snd_on: "🔊 Awaaz chalu karo", snd_off: "🔇 Awaaz band karo",
      tour_again: "❓ Tour dobara dekho", close: "✖ Band karo",
      tour_next: "Aage →", tour_done: "Shuru karein! 🚀", tour_skip: "Chhodo", tour_step: "{0} / {1}",
      tour_h1: "Pehle apna naam chuno. Har bachche ke stars alag save hote hain.",
      tour_h2: "Yahan apni bhasha chuno: Hinglish, English, हिंदी, मराठी ya ಕನ್ನಡ.",
      tour_h3: "Koi bhi topic card kholo. Har topic me ek 3D model hai!",
      tour_h4: "Parts dekho aur quiz khelo, to stars aur badges milenge.",
      tour_h5: "Main Chiku hoon! Atak jao to mujh par tap karo, madad milegi.",
      tour_t1: "Ye 3D model hai. Ungli se ghumao, pinch ya scroll karke zoom karo.",
      tour_t2: "In chips par tap karo aur har part ke baare me padho.",
      tour_t3: "Ye buttons dabao aur model me kamaal dekho!",
      tour_t4: "Sab seekh liya? Quiz khelo aur stars jeeto.",
      tour_t5: "Atak jao to mujh par tap karo, madad milegi!"
    },
    en: {
      hint: "💡 Get a hint",
      mascot_label: "Get help from Chiku",
      m_home_hi: "Hello {0}! I'm Chiku 🤖 Which topic shall we open today?",
      m_topic_hi: "Hi! I'm Chiku 🤖 Tap any part, or press the buttons below!",
      m_all_seen: "Wow! You saw every part ⭐ Now open the Quiz tab!",
      m_right1: "Well done! 🎉", m_right2: "Exactly right! 👏", m_right3: "Super! You're quick! ⚡",
      m_wrong: "No problem! Mistakes help us learn. The right part is glowing in 3D.",
      m_hint: "I removed one wrong answer. Now think carefully! 🤔",
      m_quiz_full: "Full marks! You're a superstar! 🎉",
      m_new_star: "New star! ⭐ Keep going!",
      m_quiz_done: "Quiz finished! Look at the parts again in Learn, then try again.",
      m_badge: "New badge! {0} 🏅",
      m_tip1: "Turn the model with your finger. Pinch with two fingers to zoom.",
      m_tip2: "Press the buttons below. Something fun will happen in the model!",
      m_tip3: "Press 🔊 Listen to hear the text read aloud.",
      m_tip4: "Tap the chips at the top to find each part quickly.",
      m_tip5: "Stuck in the quiz? Press the 💡 hint button.",
      snd_on: "🔊 Turn sound on", snd_off: "🔇 Turn sound off",
      tour_again: "❓ See the tour again", close: "✖ Close",
      tour_next: "Next →", tour_done: "Let's start! 🚀", tour_skip: "Skip", tour_step: "{0} / {1}",
      tour_h1: "First, pick your name. Each child's stars are saved separately.",
      tour_h2: "Choose your language here: Hinglish, English, हिंदी, मराठी or ಕನ್ನಡ.",
      tour_h3: "Open any topic card. Every topic has a 3D model!",
      tour_h4: "See the parts and play the quiz to win stars and badges.",
      tour_h5: "I'm Chiku! If you get stuck, tap me for help.",
      tour_t1: "This is the 3D model. Turn it with your finger, pinch or scroll to zoom.",
      tour_t2: "Tap these chips and read about each part.",
      tour_t3: "Press these buttons and watch the model do something amazing!",
      tour_t4: "Learned everything? Play the quiz and win stars.",
      tour_t5: "If you get stuck, tap me for help!"
    },
    hi: {
      hint: "💡 हिंट लो",
      mascot_label: "चीकू से मदद लो",
      m_home_hi: "नमस्ते {0}! मैं चीकू हूँ 🤖 आज कौन-सा टॉपिक खोलें?",
      m_topic_hi: "हाय! मैं चीकू हूँ 🤖 किसी भी पार्ट पर टैप करो, या नीचे के बटन दबाओ!",
      m_all_seen: "वाह! सारे पार्ट्स देख लिए ⭐ अब क्विज़ टैब खोलो!",
      m_right1: "शाबाश! 🎉", m_right2: "एकदम सही! 👏", m_right3: "सुपर! तुम तो तेज़ हो! ⚡",
      m_wrong: "कोई बात नहीं! गलती से ही सीखते हैं। सही पार्ट 3D में चमक रहा है।",
      m_hint: "मैंने एक गलत जवाब हटा दिया। अब ध्यान से सोचो! 🤔",
      m_quiz_full: "पूरे नंबर! तुम सुपरस्टार हो! 🎉",
      m_new_star: "नया स्टार मिला! ⭐ ऐसे ही आगे बढ़ो!",
      m_quiz_done: "क्विज़ खत्म! सीखो टैब में पार्ट्स दोबारा देखो, फिर कोशिश करो।",
      m_badge: "नया बैज! {0} 🏅",
      m_tip1: "मॉडल को उँगली से घुमाओ। दो उँगलियों से पिंच करके ज़ूम करो।",
      m_tip2: "नीचे के बटन दबाओ। मॉडल में कुछ मज़ेदार होगा!",
      m_tip3: "🔊 सुनो बटन दबाकर टेक्स्ट सुन भी सकते हो।",
      m_tip4: "ऊपर के चिप्स पर टैप करके हर पार्ट जल्दी ढूँढो।",
      m_tip5: "क्विज़ में अटक गए? 💡 हिंट बटन दबाओ।",
      snd_on: "🔊 आवाज़ चालू करो", snd_off: "🔇 आवाज़ बंद करो",
      tour_again: "❓ टूर दोबारा देखो", close: "✖ बंद करो",
      tour_next: "आगे →", tour_done: "शुरू करें! 🚀", tour_skip: "छोड़ो", tour_step: "{0} / {1}",
      tour_h1: "पहले अपना नाम चुनो। हर बच्चे के स्टार अलग सेव होते हैं।",
      tour_h2: "यहाँ अपनी भाषा चुनो: Hinglish, English, हिंदी, मराठी या ಕನ್ನಡ।",
      tour_h3: "कोई भी टॉपिक कार्ड खोलो। हर टॉपिक में एक 3D मॉडल है!",
      tour_h4: "पार्ट्स देखो और क्विज़ खेलो, तो स्टार और बैज मिलेंगे।",
      tour_h5: "मैं चीकू हूँ! अटक जाओ तो मुझ पर टैप करो, मदद मिलेगी।",
      tour_t1: "यह 3D मॉडल है। उँगली से घुमाओ, पिंच या स्क्रॉल करके ज़ूम करो।",
      tour_t2: "इन चिप्स पर टैप करो और हर पार्ट के बारे में पढ़ो।",
      tour_t3: "ये बटन दबाओ और मॉडल में कमाल देखो!",
      tour_t4: "सब सीख लिया? क्विज़ खेलो और स्टार जीतो।",
      tour_t5: "अटक जाओ तो मुझ पर टैप करो, मदद मिलेगी!"
    },
    mr: {
      hint: "💡 हिंट घ्या",
      mascot_label: "चिकूची मदत घ्या",
      m_home_hi: "नमस्ते {0}! मी चिकू 🤖 आज कोणता विषय उघडूया?",
      m_topic_hi: "हाय! मी चिकू 🤖 कोणत्याही भागावर टॅप करा, किंवा खालची बटणं दाबा!",
      m_all_seen: "वा! सगळे भाग पाहिले ⭐ आता क्विझ टॅब उघडा!",
      m_right1: "शाब्बास! 🎉", m_right2: "अगदी बरोबर! 👏", m_right3: "सुपर! तुम्ही तर हुशार आहात! ⚡",
      m_wrong: "हरकत नाही! चुकांमधूनच शिकतो. बरोबर भाग 3D मध्ये चमकतोय.",
      m_hint: "मी एक चुकीचं उत्तर काढून टाकलं. आता नीट विचार करा! 🤔",
      m_quiz_full: "पूर्ण गुण! तुम्ही सुपरस्टार आहात! 🎉",
      m_new_star: "नवा स्टार मिळाला! ⭐ असेच पुढे चला!",
      m_quiz_done: "क्विझ संपलं! शिका टॅबमध्ये भाग पुन्हा बघा, मग परत प्रयत्न करा.",
      m_badge: "नवा बॅज! {0} 🏅",
      m_tip1: "बोटाने मॉडेल फिरवा. दोन बोटांनी पिंच करून झूम करा.",
      m_tip2: "खालची बटणं दाबा. मॉडेलमध्ये काहीतरी मजेदार होईल!",
      m_tip3: "🔊 ऐका बटण दाबून मजकूर ऐकूही शकता.",
      m_tip4: "वरच्या चिप्सवर टॅप करून प्रत्येक भाग पटकन शोधा.",
      m_tip5: "क्विझमध्ये अडकलात? 💡 हिंट बटण दाबा.",
      snd_on: "🔊 आवाज चालू करा", snd_off: "🔇 आवाज बंद करा",
      tour_again: "❓ टूर पुन्हा बघा", close: "✖ बंद करा",
      tour_next: "पुढे →", tour_done: "सुरू करूया! 🚀", tour_skip: "वगळा", tour_step: "{0} / {1}",
      tour_h1: "आधी तुमचं नाव निवडा. प्रत्येक मुलाचे स्टार वेगळे सेव्ह होतात.",
      tour_h2: "इथे तुमची भाषा निवडा: Hinglish, English, हिंदी, मराठी किंवा ಕನ್ನಡ.",
      tour_h3: "कोणतंही विषय कार्ड उघडा. प्रत्येक विषयात एक 3D मॉडेल आहे!",
      tour_h4: "भाग बघा आणि क्विझ खेळा, म्हणजे स्टार आणि बॅज मिळतील.",
      tour_h5: "मी चिकू! अडकलात तर माझ्यावर टॅप करा, मदत मिळेल.",
      tour_t1: "हे 3D मॉडेल आहे. बोटाने फिरवा, पिंच किंवा स्क्रोल करून झूम करा.",
      tour_t2: "या चिप्सवर टॅप करा आणि प्रत्येक भागाबद्दल वाचा.",
      tour_t3: "ही बटणं दाबा आणि मॉडेलमध्ये कमाल बघा!",
      tour_t4: "सगळं शिकलात? क्विझ खेळा आणि स्टार जिंका.",
      tour_t5: "अडकलात तर माझ्यावर टॅप करा, मदत मिळेल!"
    },
    kn: {
      hint: "💡 ಸುಳಿವು ಪಡೆಯಿರಿ",
      mascot_label: "ಚಿಕುವಿನಿಂದ ಸಹಾಯ ಪಡೆಯಿರಿ",
      m_home_hi: "ನಮಸ್ಕಾರ {0}! ನಾನು ಚಿಕು 🤖 ಇಂದು ಯಾವ ವಿಷಯ ತೆರೆಯೋಣ?",
      m_topic_hi: "ಹಾಯ್! ನಾನು ಚಿಕು 🤖 ಯಾವುದೇ ಭಾಗದ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿ, ಅಥವಾ ಕೆಳಗಿನ ಬಟನ್‌ಗಳನ್ನು ಒತ್ತಿ!",
      m_all_seen: "ವಾಹ್! ಎಲ್ಲಾ ಭಾಗಗಳನ್ನು ನೋಡಿದಿರಿ ⭐ ಈಗ ರಸಪ್ರಶ್ನೆ ಟ್ಯಾಬ್ ತೆರೆಯಿರಿ!",
      m_right1: "ಭೇಷ್! 🎉", m_right2: "ಸರಿಯಾಗಿದೆ! 👏", m_right3: "ಸೂಪರ್! ನೀವು ಚುರುಕು! ⚡",
      m_wrong: "ಪರವಾಗಿಲ್ಲ! ತಪ್ಪುಗಳಿಂದಲೇ ಕಲಿಯುತ್ತೇವೆ. ಸರಿಯಾದ ಭಾಗ 3D ಯಲ್ಲಿ ಹೊಳೆಯುತ್ತಿದೆ.",
      m_hint: "ನಾನು ಒಂದು ತಪ್ಪು ಉತ್ತರವನ್ನು ತೆಗೆದಿದ್ದೇನೆ. ಈಗ ಎಚ್ಚರಿಕೆಯಿಂದ ಯೋಚಿಸಿ! 🤔",
      m_quiz_full: "ಪೂರ್ಣ ಅಂಕ! ನೀವು ಸೂಪರ್‌ಸ್ಟಾರ್! 🎉",
      m_new_star: "ಹೊಸ ನಕ್ಷತ್ರ! ⭐ ಹೀಗೆಯೇ ಮುಂದುವರಿಯಿರಿ!",
      m_quiz_done: "ರಸಪ್ರಶ್ನೆ ಮುಗಿಯಿತು! ಕಲಿಯಿರಿ ಟ್ಯಾಬ್‌ನಲ್ಲಿ ಭಾಗಗಳನ್ನು ಮತ್ತೆ ನೋಡಿ, ನಂತರ ಪ್ರಯತ್ನಿಸಿ.",
      m_badge: "ಹೊಸ ಬ್ಯಾಡ್ಜ್! {0} 🏅",
      m_tip1: "ಬೆರಳಿನಿಂದ ಮಾದರಿಯನ್ನು ತಿರುಗಿಸಿ. ಎರಡು ಬೆರಳುಗಳಿಂದ ಪಿಂಚ್ ಮಾಡಿ ಜೂಮ್ ಮಾಡಿ.",
      m_tip2: "ಕೆಳಗಿನ ಬಟನ್‌ಗಳನ್ನು ಒತ್ತಿ. ಮಾದರಿಯಲ್ಲಿ ಏನೋ ಮಜಾ ಆಗುತ್ತದೆ!",
      m_tip3: "🔊 ಕೇಳಿ ಬಟನ್ ಒತ್ತಿ ಪಠ್ಯವನ್ನು ಕೇಳಬಹುದು.",
      m_tip4: "ಮೇಲಿನ ಚಿಪ್‌ಗಳ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿ ಪ್ರತಿ ಭಾಗವನ್ನು ಬೇಗ ಹುಡುಕಿ.",
      m_tip5: "ರಸಪ್ರಶ್ನೆಯಲ್ಲಿ ಸಿಲುಕಿದಿರಾ? 💡 ಸುಳಿವು ಬಟನ್ ಒತ್ತಿ.",
      snd_on: "🔊 ಧ್ವನಿ ಆನ್ ಮಾಡಿ", snd_off: "🔇 ಧ್ವನಿ ಆಫ್ ಮಾಡಿ",
      tour_again: "❓ ಪ್ರವಾಸ ಮತ್ತೆ ನೋಡಿ", close: "✖ ಮುಚ್ಚಿ",
      tour_next: "ಮುಂದೆ →", tour_done: "ಶುರು ಮಾಡೋಣ! 🚀", tour_skip: "ಬಿಟ್ಟುಬಿಡಿ", tour_step: "{0} / {1}",
      tour_h1: "ಮೊದಲು ನಿಮ್ಮ ಹೆಸರು ಆರಿಸಿ. ಪ್ರತಿ ಮಗುವಿನ ನಕ್ಷತ್ರಗಳು ಬೇರೆ ಬೇರೆಯಾಗಿ ಉಳಿಯುತ್ತವೆ.",
      tour_h2: "ಇಲ್ಲಿ ನಿಮ್ಮ ಭಾಷೆ ಆರಿಸಿ: Hinglish, English, हिंदी, मराठी ಅಥವಾ ಕನ್ನಡ.",
      tour_h3: "ಯಾವುದೇ ವಿಷಯ ಕಾರ್ಡ್ ತೆರೆಯಿರಿ. ಪ್ರತಿ ವಿಷಯದಲ್ಲೂ 3D ಮಾದರಿ ಇದೆ!",
      tour_h4: "ಭಾಗಗಳನ್ನು ನೋಡಿ ಮತ್ತು ರಸಪ್ರಶ್ನೆ ಆಡಿ, ನಕ್ಷತ್ರಗಳು ಮತ್ತು ಬ್ಯಾಡ್ಜ್‌ಗಳು ಸಿಗುತ್ತವೆ.",
      tour_h5: "ನಾನು ಚಿಕು! ಸಿಲುಕಿದರೆ ನನ್ನ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿ, ಸಹಾಯ ಸಿಗುತ್ತದೆ.",
      tour_t1: "ಇದು 3D ಮಾದರಿ. ಬೆರಳಿನಿಂದ ತಿರುಗಿಸಿ, ಪಿಂಚ್ ಅಥವಾ ಸ್ಕ್ರೋಲ್ ಮಾಡಿ ಜೂಮ್ ಮಾಡಿ.",
      tour_t2: "ಈ ಚಿಪ್‌ಗಳ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿ ಪ್ರತಿ ಭಾಗದ ಬಗ್ಗೆ ಓದಿ.",
      tour_t3: "ಈ ಬಟನ್‌ಗಳನ್ನು ಒತ್ತಿ, ಮಾದರಿಯಲ್ಲಿ ಅದ್ಭುತ ನೋಡಿ!",
      tour_t4: "ಎಲ್ಲಾ ಕಲಿತಿರಾ? ರಸಪ್ರಶ್ನೆ ಆಡಿ ಮತ್ತು ನಕ್ಷತ್ರಗಳನ್ನು ಗೆಲ್ಲಿರಿ.",
      tour_t5: "ಸಿಲುಕಿದರೆ ನನ್ನ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿ, ಸಹಾಯ ಸಿಗುತ್ತದೆ!"
    }
  };
  TL.addUI(FUN_UI);

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var isTopic = document.body.classList.contains("topic");
  function store(key, val) {
    try {
      if (val === undefined) return window.localStorage.getItem(key);
      window.localStorage.setItem(key, val);
    } catch (e) {}
    return null;
  }

  /* ================================================================
     1. AWAAZ (Web Audio se chhoti dhunein)
  ================================================================ */
  var SOUND_KEY = "techlab3d.sound";
  var soundOn = store(SOUND_KEY) !== "0";
  var actx = null;
  function audio() {
    if (!actx) {
      var C = window.AudioContext || window.webkitAudioContext;
      if (!C) return null;
      try { actx = new C(); } catch (e) { return null; }
    }
    if (actx.state === "suspended") actx.resume();
    return actx;
  }
  /* [frequency, shuru (sec), lambai (sec), wave, volume] */
  var SOUNDS = {
    tap:     [[660, 0, 0.06, "sine", 0.06]],
    select:  [[520, 0, 0.08, "triangle", 0.1], [780, 0.07, 0.1, "triangle", 0.1]],
    right:   [[523, 0, 0.12, "triangle", 0.14], [659, 0.1, 0.12, "triangle", 0.14], [784, 0.2, 0.25, "triangle", 0.14]],
    wrong:   [[330, 0, 0.16, "sine", 0.12], [247, 0.15, 0.28, "sine", 0.12]],
    hint:    [[880, 0, 0.08, "sine", 0.09], [1175, 0.08, 0.14, "sine", 0.09]],
    fanfare: [[523, 0, 0.12, "triangle", 0.14], [659, 0.12, 0.12, "triangle", 0.14], [784, 0.24, 0.12, "triangle", 0.14],
              [1047, 0.36, 0.45, "triangle", 0.15], [784, 0.36, 0.45, "sine", 0.06]]
  };
  TL.play = function (name) {
    if (!soundOn || !SOUNDS[name]) return;
    var a = audio();
    if (!a) return;
    SOUNDS[name].forEach(function (n) {
      var t0 = a.currentTime + n[1];
      var o = a.createOscillator(), g = a.createGain();
      o.type = n[3];
      o.frequency.setValueAtTime(n[0], t0);
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(n[4], t0 + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + n[2]);
      o.connect(g); g.connect(a.destination);
      o.start(t0); o.stop(t0 + n[2] + 0.05);
    });
  };
  function setSound(on) {
    soundOn = on;
    store(SOUND_KEY, on ? "1" : "0");
    if (on) TL.play("select");
  }
  /* Buttons dabane par halki "tik" (quiz options aur chips ki apni awaaz hai) */
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("button.act, [role=tab], .lang-btn, .kid, .avatars button, .round-btn, .link-btn");
    if (b && !b.classList.contains("hint-btn")) TL.play("tap");
  });

  /* ================================================================
     2. CONFETTI
  ================================================================ */
  var COLORS = ["#ff5a3c", "#2b6bff", "#ffd24a", "#12995f", "#c04bff", "#ff8ac4"];
  TL.confetti = function (big) {
    if (reduceMotion) return;
    var c = document.createElement("canvas");
    c.className = "confetti";
    c.setAttribute("aria-hidden", "true");
    document.body.appendChild(c);
    var W = window.innerWidth, H = window.innerHeight;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    c.width = W * dpr; c.height = H * dpr;
    var g = c.getContext("2d");
    g.scale(dpr, dpr);
    var bits = [];
    function shoot(x, y, n, dirX) {
      for (var i = 0; i < n; i++) {
        var ang = -Math.PI / 2 + dirX * 0.45 + (Math.random() - 0.5) * 0.9;
        var sp = (big ? 9 : 6) + Math.random() * (big ? 8 : 5);
        bits.push({ x: x, y: y, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp,
                    r: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.4,
                    w: 6 + Math.random() * 6, h: 4 + Math.random() * 4,
                    col: COLORS[Math.floor(Math.random() * COLORS.length)] });
      }
    }
    if (big) { shoot(0, H, 80, 1); shoot(W, H, 80, -1); }
    else shoot(W / 2, H * 0.6, 50, 0);
    var start = performance.now();
    function step(now) {
      var k = (now - start) / 2600;
      g.clearRect(0, 0, W, H);
      g.globalAlpha = Math.max(0, Math.min(1, (1 - k) * 2.5));
      bits.forEach(function (b) {
        b.vy += 0.25; b.vx *= 0.99; b.x += b.vx; b.y += b.vy; b.r += b.vr;
        g.save(); g.translate(b.x, b.y); g.rotate(b.r);
        g.fillStyle = b.col; g.fillRect(-b.w / 2, -b.h / 2, b.w, b.h);
        g.restore();
      });
      if (k < 1) requestAnimationFrame(step);
      else if (c.parentNode) c.parentNode.removeChild(c);
    }
    requestAnimationFrame(step);
  };

  /* ================================================================
     3. CHIKU (madad karne wala robot)
  ================================================================ */
  var MASCOT_SVG =
    '<svg viewBox="0 0 64 64" aria-hidden="true">' +
    '<line x1="32" y1="5" x2="32" y2="15" stroke="#14213d" stroke-width="3" stroke-linecap="round"/>' +
    '<circle class="m-ant" cx="32" cy="6" r="4.5" fill="#ff5a3c"/>' +
    '<rect x="4" y="27" width="7" height="13" rx="3.5" fill="#ff5a3c"/>' +
    '<rect x="53" y="27" width="7" height="13" rx="3.5" fill="#ff5a3c"/>' +
    '<rect x="9" y="14" width="46" height="38" rx="15" fill="#2b6bff"/>' +
    '<rect x="15" y="20" width="34" height="22" rx="10" fill="#eaf4ff"/>' +
    '<g class="m-eyes"><circle cx="25" cy="30" r="3.8" fill="#14213d"/><circle cx="39" cy="30" r="3.8" fill="#14213d"/></g>' +
    '<path d="M26 36.5 q6 4.5 12 0" stroke="#14213d" stroke-width="2.6" fill="none" stroke-linecap="round"/>' +
    '<circle cx="19" cy="36" r="2.2" fill="#ff8ac4" opacity=".7"/><circle cx="45" cy="36" r="2.2" fill="#ff8ac4" opacity=".7"/>' +
    '<rect x="21" y="52" width="22" height="8" rx="4" fill="#2b6bff"/></svg>';

  var mascot = null, mBtn = null, bubble = null, bText = null, bMenu = null;
  var said = null, hideTimer = 0, menuOpen = false;

  function buildMascot() {
    mascot = document.createElement("div");
    mascot.id = "mascot";
    mascot.innerHTML =
      '<button class="mascot-btn" type="button" aria-expanded="false">' + MASCOT_SVG + "</button>" +
      '<div class="bubble" hidden><p role="status" aria-live="polite"></p><div class="mascot-menu" hidden></div></div>';
    var host = isTopic && document.getElementById("stage");
    (host || document.body).appendChild(mascot);
    if (!host) mascot.classList.add("floating");
    mBtn = mascot.querySelector(".mascot-btn");
    bubble = mascot.querySelector(".bubble");
    bText = bubble.querySelector("p");
    bMenu = bubble.querySelector(".mascot-menu");
    mBtn.addEventListener("click", function () {
      if (menuOpen) { hideBubble(); return; }
      openMenu();
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && menuOpen) hideBubble(); });
    labelMascot();
    if (isTopic) watchStatus();
  }
  /* 3D par status ka sandesh aaye to Chiku ka apna bubble hata do, taaki dono ek doosre ko na dhakein */
  function watchStatus() {
    var st = document.getElementById("status");
    if (!st || !window.MutationObserver) return;
    new MutationObserver(function () {
      if (st.classList.contains("show") && !menuOpen && bubble && !bubble.hidden) hideBubble();
    }).observe(st, { attributes: true, attributeFilter: ["class"] });
  }
  function labelMascot() {
    mBtn.setAttribute("aria-label", TL.u("mascot_label"));
    mBtn.title = TL.u("mascot_label");
  }
  function showText() {
    if (said) bText.textContent = TL.u.apply(null, [said.key].concat(said.args));
  }
  /* say("m_right1", 3000, arg0...) */
  function say(key, ms) {
    if (!mascot || touring) return;
    said = { key: key, args: Array.prototype.slice.call(arguments, 2) };
    showText();
    bubble.hidden = false;
    if (!menuOpen) bMenu.hidden = true;
    mascot.classList.remove("talk");
    void mascot.offsetWidth;          // animation dobara chalane ke liye
    mascot.classList.add("talk");
    clearTimeout(hideTimer);
    if (!menuOpen) hideTimer = setTimeout(hideBubble, ms || 6000);
  }
  TL.say = say;
  function hideBubble() {
    clearTimeout(hideTimer);
    if (TL.canSpeak && menuOpen) TL.stopSpeaking();
    menuOpen = false;
    bubble.hidden = true;
    bMenu.hidden = true;
    mBtn.setAttribute("aria-expanded", "false");
  }
  function openMenu() {
    menuOpen = true;
    clearTimeout(hideTimer);
    if (!said || bubble.hidden) said = { key: randomTip(), args: [] };
    showText();
    renderMenu();
    bubble.hidden = false;
    bMenu.hidden = false;
    mBtn.setAttribute("aria-expanded", "true");
  }
  function renderMenu() {
    var items = [];
    if (TL.canSpeak) items.push(["listen", function () { TL.speak(bText.textContent); TL.noteListen(); }]);
    items.push([soundOn ? "snd_off" : "snd_on", function () { setSound(!soundOn); renderMenu(); }]);
    items.push(["tour_again", function () { hideBubble(); startTour(true); }]);
    items.push(["close", hideBubble]);
    bMenu.innerHTML = "";
    items.forEach(function (it) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "mm-btn";
      b.textContent = TL.u(it[0]);
      b.addEventListener("click", it[1]);
      bMenu.appendChild(b);
    });
  }
  var TIPS = isTopic ? ["m_tip1", "m_tip2", "m_tip3", "m_tip4", "m_tip5"] : ["tour_h3", "tour_h4", "tour_h2"];
  var tipAt = 0;
  function randomTip() { tipAt = (tipAt + 1) % TIPS.length; return TIPS[tipAt]; }

  /* Bachcha kuch der kuch na kare to Chiku ek tip deta hai (topic page par) */
  var idleTimer = 0, idleTips = 0;
  function poke() {
    clearTimeout(idleTimer);
    if (!isTopic || idleTips >= 4) return;
    idleTimer = setTimeout(function () {
      if (touring || menuOpen) { poke(); return; }
      idleTips++;
      say(randomTip(), 7000);
      poke();
    }, 30000);
  }
  ["pointerdown", "keydown", "wheel"].forEach(function (ev) { document.addEventListener(ev, poke, { passive: true }); });

  /* ================================================================
     4. TOUR (pehli baar aane par)
  ================================================================ */
  var TOUR = isTopic ? {
    key: "techlab3d.tour.topic",
    steps: [["#c", "tour_t1"], ["#chips", "tour_t2"], ["#controls", "tour_t3"], ["#tabQuiz", "tour_t4"], ["#mascot", "tour_t5"]]
  } : {
    key: "techlab3d.tour.home",
    steps: [["#kids", "tour_h1"], ["#langbar", "tour_h2"], ["#grid .card", "tour_h3"], [".badge-row", "tour_h4"], ["#mascot", "tour_h5"]]
  };
  var touring = false, tourEl = null, tourSteps = [], tourAt = 0;

  function visible(el) {
    if (!el) return false;
    var r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  }
  function startTour(force) {
    if (!force && store(TOUR.key) === "1") return false;
    tourSteps = TOUR.steps.filter(function (s) { return visible(document.querySelector(s[0])); });
    if (!tourSteps.length) return false;
    if (mascot) hideBubble();
    touring = true; tourAt = 0;
    tourEl = document.createElement("div");
    tourEl.id = "tour";
    tourEl.setAttribute("role", "dialog");
    tourEl.setAttribute("aria-modal", "true");
    tourEl.innerHTML =
      '<div class="spot"></div>' +
      '<div class="tour-card"><div class="tc-head"><span class="tc-face">' + MASCOT_SVG + '</span><span class="tc-step"></span></div>' +
      '<p class="tc-text" id="tourText"></p><div class="row tc-row">' +
      '<button type="button" class="act main" id="tourNext"></button>' +
      (TL.canSpeak ? '<button type="button" class="act" id="tourSpeak"></button>' : "") +
      '<button type="button" class="link-btn" id="tourSkip"></button></div></div>';
    tourEl.setAttribute("aria-labelledby", "tourText");
    document.body.appendChild(tourEl);
    document.getElementById("tourNext").addEventListener("click", function () {
      if (tourAt < tourSteps.length - 1) { tourAt++; renderTour(); } else endTour();
    });
    document.getElementById("tourSkip").addEventListener("click", endTour);
    var sp = document.getElementById("tourSpeak");
    if (sp) sp.addEventListener("click", function () { TL.speak(TL.u(tourSteps[tourAt][1])); TL.noteListen(); });
    renderTour();
    return true;
  }
  function renderTour() {
    if (!touring) return;
    var s = tourSteps[tourAt];
    var last = tourAt === tourSteps.length - 1;
    TL.stopSpeaking();
    tourEl.querySelector(".tc-step").textContent = TL.u("tour_step", tourAt + 1, tourSteps.length);
    document.getElementById("tourText").textContent = TL.u(s[1]);
    document.getElementById("tourNext").textContent = TL.u(last ? "tour_done" : "tour_next");
    document.getElementById("tourSkip").textContent = TL.u("tour_skip");
    var sp = document.getElementById("tourSpeak");
    if (sp) sp.textContent = TL.u("listen");
    var el = document.querySelector(s[0]);
    if (el && el.scrollIntoView) el.scrollIntoView({ block: "center", behavior: reduceMotion ? "auto" : "smooth" });
    placeTour();
    setTimeout(placeTour, 350);      // smooth scroll ke baad dobara jagah thik karo
    document.getElementById("tourNext").focus({ preventScroll: true });
  }
  function placeTour() {
    if (!touring) return;
    var el = document.querySelector(tourSteps[tourAt][0]);
    var spot = tourEl.querySelector(".spot");
    var card = tourEl.querySelector(".tour-card");
    var r = el ? el.getBoundingClientRect() : { left: 0, top: 0, width: 0, height: 0, bottom: 0 };
    var W = window.innerWidth, H = window.innerHeight, pad = 8;
    /* bahut bada element (jaise 3D stage) ho to screen ke andar hi rakho */
    var L = Math.max(4, r.left - pad), T = Math.max(4, r.top - pad);
    var R = Math.min(W - 4, r.left + r.width + pad), B = Math.min(H - 4, r.top + r.height + pad);
    spot.style.left = L + "px"; spot.style.top = T + "px";
    spot.style.width = Math.max(0, R - L) + "px"; spot.style.height = Math.max(0, B - T) + "px";
    var cw = Math.min(340, W - 32);
    card.style.width = cw + "px";
    var ch = card.offsetHeight;
    var top;
    if (H - B > ch + 16) top = B + 12;
    else if (T > ch + 16) top = T - ch - 12;
    else top = H - ch - 16;          // jagah na ho to neeche, element ke upar
    card.style.top = Math.max(12, top) + "px";
    var left = (L + R) / 2 - cw / 2;
    card.style.left = Math.max(16, Math.min(W - cw - 16, left)) + "px";
  }
  function endTour() {
    if (!touring) return;
    touring = false;
    TL.stopSpeaking();
    store(TOUR.key, "1");
    if (tourEl && tourEl.parentNode) tourEl.parentNode.removeChild(tourEl);
    tourEl = null;
    TL.play("select");
    poke();
  }
  window.addEventListener("resize", placeTour);
  document.addEventListener("keydown", function (e) { if (touring && e.key === "Escape") endTour(); });

  /* ================================================================
     5. ENGINE KI KHABAR PAR REACTION
  ================================================================ */
  TL.on("part", function (d) {
    TL.play("select");
    if (d.allSeen) {
      TL.play("fanfare");
      TL.confetti(false);
      say("m_all_seen", 6000);
    }
  });
  TL.on("answer", function (d) {
    if (d.ok) {
      TL.play("right");
      say("m_right" + (1 + Math.floor(Math.random() * 3)), 2500);
    } else {
      TL.play("wrong");
      say("m_wrong", 5000);
    }
  });
  TL.on("hint", function () { TL.play("hint"); say("m_hint", 4000); });
  TL.on("quiz", function (d) {
    if (d.score === d.total) { TL.play("fanfare"); TL.confetti(true); say("m_quiz_full", 6000); }
    else if (d.newStar) { TL.play("fanfare"); TL.confetti(true); say("m_new_star", 6000); }
    else say("m_quiz_done", 6000);
  });
  TL.on("badge", function () {
    setTimeout(function () { TL.play("fanfare"); TL.confetti(true); }, 300);
  });
  TL.on("ready", function () {
    setTimeout(function () {
      if (!startTour(false)) say("m_topic_hi", 5500);
      poke();
    }, 700);
  });

  TL.onLang(function () {
    if (!mascot) return;
    labelMascot();
    showText();
    if (menuOpen) renderMenu();
    renderTour();
  });

  function init() {
    buildMascot();
    if (!isTopic) {
      setTimeout(function () {
        if (!startTour(false)) say("m_home_hi", 6000, TL.profileName(TL.currentProfile()));
      }, 600);
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
