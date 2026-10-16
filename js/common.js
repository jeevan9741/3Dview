/* Tech Lab 3D: languages, topic list, progress (saved in this browser), theme, read-aloud.
   Used by both the home menu (index.html) and topic pages (topic.html). */
var TL = window.TL || {};
window.TL = TL;

(function () {
  "use strict";

  /* ================================================================
     LANGUAGES
     Nayi bhasha jodne ke liye:
       1. LANGS me ek line jodo
       2. UI me us bhasha ke shabd jodo
       3. Har topic file ke `text` me us bhasha ka block jodo
     Jo shabd kisi bhasha me nahi mila, wo English (phir Hinglish) me dikhega.
  ================================================================ */
  TL.LANGS = [
    { id: "hinglish", label: "Hinglish", html: "hi-Latn", speech: ["en-IN", "hi-IN", "en"] },
    { id: "en",       label: "English",  html: "en",      speech: ["en-IN", "en-GB", "en"] },
    { id: "hi",       label: "हिंदी",     html: "hi",      speech: ["hi-IN", "hi"] },
    { id: "mr",       label: "मराठी",     html: "mr",      speech: ["mr-IN", "mr", "hi-IN", "hi"] },
    { id: "kn",       label: "ಕನ್ನಡ",     html: "kn",      speech: ["kn-IN", "kn"] }
  ];
  var FALLBACK = ["en", "hinglish"];

  TL.UI = {
    hinglish: {
      home_sub: "Technology ko ghumao, kholo aur samjho",
      home_h2: "Aaj kya seekhna hai?",
      home_p: "Koi bhi topic chuno. Har topic me ek 3D model hai jise tum ghuma sakte ho, parts par tap karke seekh sakte ho, aur end me quiz khel sakte ho.",
      open: "Kholo →",
      stars_title: "Tumhare stars",
      stars_zero: "Abhi 0 / {0} stars. Har topic me 3 star milte hain: saare parts dekho, quiz me aadhe se zyada lao, aur poore number lao.",
      stars_all: "Kamaal! Tumne saare {0} stars jeet liye. Tum Tech Lab ke champion ho! 🏆",
      stars_some: "Tumhare paas {0} / {1} stars hain. Aise hi chalte raho!",
      reset_progress: "Progress mitao",
      lang_label: "Bhasha",
      theme_label: "Light ya dark mode badlo",
      home_label: "Saare topics",
      hint_default: "Drag karke ghumao. Pinch ya scroll se zoom karo. Kisi part par tap karo.",
      intro_default: "<strong>Chalo shuru karein!</strong> 3D model me kisi bhi part par tap karo, ya upar ka button dabao.",
      explode: "Parts alag karo", join: "Wapas jodo", reset_view: "Wapas dekho",
      tab_learn: "Seekho", tab_quiz: "Quiz",
      real_life: "Asli zindagi me", did_you_know: "Kya tumhe pata hai?",
      seen_parts: "Dekhe gaye parts: {0} / {1}", best_quiz: "Best quiz: {0} / {1}",
      question: "Sawaal {0} / {1}",
      right: "Shabaash! Sahi jawab.", wrong: "Koi baat nahi, dekho 3D me.",
      glow_note: "Sahi part 3D me chamak raha hai.",
      next: "Agla sawaal", see_result: "Result dekho", again: "Dobara khelo", other_topic: "Doosra topic",
      msg_full: "Kamaal! Tum to expert ho!", msg_half: "Bahut accha! Thoda aur practice karo.",
      msg_low: "Koi baat nahi. Seekho tab me parts dobara dekho aur phir try karo.",
      new_star: "Naya star mila!",
      listen: "🔊 Suno", stop: "⏹ Ruko",
      nogl: "Tumhare browser me 3D nahi chal raha. Chrome ya Edge ka naya version try karo. Seekho aur Quiz tab phir bhi chalenge.",
      load_fail: "Ye topic abhi load nahi hua. Home par wapas jao."
    },
    en: {
      home_sub: "Turn it, open it, understand it",
      home_h2: "What do you want to learn today?",
      home_p: "Pick any topic. Each one has a 3D model you can turn around, tap parts to learn, and play a quiz at the end.",
      open: "Open →",
      stars_title: "Your stars",
      stars_zero: "0 / {0} stars so far. Each topic gives 3 stars: see every part, score more than half in the quiz, and get full marks.",
      stars_all: "Amazing! You won all {0} stars. You are a Tech Lab champion! 🏆",
      stars_some: "You have {0} / {1} stars. Keep going!",
      reset_progress: "Clear progress",
      lang_label: "Language",
      theme_label: "Switch light or dark mode",
      home_label: "All topics",
      hint_default: "Drag to turn. Pinch or scroll to zoom. Tap any part.",
      intro_default: "<strong>Let's begin!</strong> Tap any part in the 3D model, or press a button above.",
      explode: "Take apart", join: "Put back", reset_view: "Reset view",
      tab_learn: "Learn", tab_quiz: "Quiz",
      real_life: "In real life", did_you_know: "Did you know?",
      seen_parts: "Parts seen: {0} / {1}", best_quiz: "Best quiz: {0} / {1}",
      question: "Question {0} / {1}",
      right: "Well done! Correct.", wrong: "No problem, look at the 3D model.",
      glow_note: "The correct part is glowing in 3D.",
      next: "Next question", see_result: "See result", again: "Play again", other_topic: "Another topic",
      msg_full: "Amazing! You're an expert!", msg_half: "Very good! Practise a little more.",
      msg_low: "No problem. Look at the parts again in Learn, then try again.",
      new_star: "New star!",
      listen: "🔊 Listen", stop: "⏹ Stop",
      nogl: "3D is not working in this browser. Try a new version of Chrome or Edge. Learn and Quiz still work.",
      load_fail: "This topic did not load. Go back home."
    },
    hi: {
      home_sub: "टेक्नोलॉजी को घुमाओ, खोलो और समझो",
      home_h2: "आज क्या सीखना है?",
      home_p: "कोई भी टॉपिक चुनो। हर टॉपिक में एक 3D मॉडल है जिसे तुम घुमा सकते हो, पार्ट्स पर टैप करके सीख सकते हो, और आखिर में क्विज़ खेल सकते हो।",
      open: "खोलो →",
      stars_title: "तुम्हारे स्टार",
      stars_zero: "अभी 0 / {0} स्टार। हर टॉपिक में 3 स्टार मिलते हैं: सारे पार्ट्स देखो, क्विज़ में आधे से ज़्यादा लाओ, और पूरे नंबर लाओ।",
      stars_all: "कमाल! तुमने सारे {0} स्टार जीत लिए। तुम टेक लैब के चैंपियन हो! 🏆",
      stars_some: "तुम्हारे पास {0} / {1} स्टार हैं। ऐसे ही चलते रहो!",
      reset_progress: "प्रोग्रेस मिटाओ",
      lang_label: "भाषा",
      theme_label: "लाइट या डार्क मोड बदलो",
      home_label: "सारे टॉपिक",
      hint_default: "ड्रैग करके घुमाओ। पिंच या स्क्रॉल से ज़ूम करो। किसी पार्ट पर टैप करो।",
      intro_default: "<strong>चलो शुरू करें!</strong> 3D मॉडल में किसी भी पार्ट पर टैप करो, या ऊपर का बटन दबाओ।",
      explode: "पार्ट्स अलग करो", join: "वापस जोड़ो", reset_view: "वापस देखो",
      tab_learn: "सीखो", tab_quiz: "क्विज़",
      real_life: "असली ज़िंदगी में", did_you_know: "क्या तुम्हें पता है?",
      seen_parts: "देखे गए पार्ट्स: {0} / {1}", best_quiz: "बेस्ट क्विज़: {0} / {1}",
      question: "सवाल {0} / {1}",
      right: "शाबाश! सही जवाब।", wrong: "कोई बात नहीं, 3D में देखो।",
      glow_note: "सही पार्ट 3D में चमक रहा है।",
      next: "अगला सवाल", see_result: "रिज़ल्ट देखो", again: "दोबारा खेलो", other_topic: "दूसरा टॉपिक",
      msg_full: "कमाल! तुम तो एक्सपर्ट हो!", msg_half: "बहुत अच्छा! थोड़ी और प्रैक्टिस करो।",
      msg_low: "कोई बात नहीं। सीखो टैब में पार्ट्स दोबारा देखो और फिर कोशिश करो।",
      new_star: "नया स्टार मिला!",
      listen: "🔊 सुनो", stop: "⏹ रुको",
      nogl: "तुम्हारे ब्राउज़र में 3D नहीं चल रहा। Chrome या Edge का नया वर्ज़न आज़माओ। सीखो और क्विज़ टैब फिर भी चलेंगे।",
      load_fail: "यह टॉपिक अभी लोड नहीं हुआ। होम पर वापस जाओ।"
    },
    mr: {
      home_sub: "टेक्नॉलॉजी फिरवा, उघडा आणि समजून घ्या",
      home_h2: "आज काय शिकायचं?",
      home_p: "कोणताही विषय निवडा. प्रत्येक विषयात एक 3D मॉडेल आहे. ते फिरवा, भागांवर टॅप करून शिका आणि शेवटी क्विझ खेळा.",
      open: "उघडा →",
      stars_title: "तुमचे स्टार",
      stars_zero: "आत्ता 0 / {0} स्टार. प्रत्येक विषयात 3 स्टार मिळतात: सगळे भाग बघा, क्विझमध्ये अर्ध्यापेक्षा जास्त गुण मिळवा, आणि पूर्ण गुण मिळवा.",
      stars_all: "कमाल! तुम्ही सगळे {0} स्टार जिंकले. तुम्ही टेक लॅबचे चॅम्पियन आहात! 🏆",
      stars_some: "तुमच्याकडे {0} / {1} स्टार आहेत. असेच पुढे चला!",
      reset_progress: "प्रगती पुसा",
      lang_label: "भाषा",
      theme_label: "लाइट किंवा डार्क मोड बदला",
      home_label: "सगळे विषय",
      hint_default: "ड्रॅग करून फिरवा. पिंच किंवा स्क्रोल करून झूम करा. कोणत्याही भागावर टॅप करा.",
      intro_default: "<strong>चला सुरू करूया!</strong> 3D मॉडेलमधील कोणत्याही भागावर टॅप करा, किंवा वरचे बटण दाबा.",
      explode: "भाग वेगळे करा", join: "परत जोडा", reset_view: "परत बघा",
      tab_learn: "शिका", tab_quiz: "क्विझ",
      real_life: "रोजच्या आयुष्यात", did_you_know: "तुम्हाला माहीत आहे का?",
      seen_parts: "पाहिलेले भाग: {0} / {1}", best_quiz: "सर्वोत्तम क्विझ: {0} / {1}",
      question: "प्रश्न {0} / {1}",
      right: "शाब्बास! बरोबर उत्तर.", wrong: "हरकत नाही, 3D मध्ये बघा.",
      glow_note: "बरोबर भाग 3D मध्ये चमकत आहे.",
      next: "पुढचा प्रश्न", see_result: "निकाल बघा", again: "पुन्हा खेळा", other_topic: "दुसरा विषय",
      msg_full: "कमाल! तुम्ही तर एक्सपर्ट आहात!", msg_half: "खूप छान! अजून थोडा सराव करा.",
      msg_low: "हरकत नाही. शिका टॅबमध्ये भाग पुन्हा बघा आणि परत प्रयत्न करा.",
      new_star: "नवा स्टार मिळाला!",
      listen: "🔊 ऐका", stop: "⏹ थांबा",
      nogl: "तुमच्या ब्राउझरमध्ये 3D चालत नाही. Chrome किंवा Edge ची नवी आवृत्ती वापरा. शिका आणि क्विझ टॅब तरीही चालतील.",
      load_fail: "हा विषय लोड झाला नाही. होमवर परत जा."
    },
    kn: {
      home_sub: "ತಂತ್ರಜ್ಞಾನವನ್ನು ತಿರುಗಿಸಿ, ತೆರೆಯಿರಿ ಮತ್ತು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ",
      home_h2: "ಇಂದು ಏನು ಕಲಿಯೋಣ?",
      home_p: "ಯಾವುದೇ ವಿಷಯವನ್ನು ಆರಿಸಿ. ಪ್ರತಿ ವಿಷಯದಲ್ಲೂ ಒಂದು 3D ಮಾದರಿ ಇದೆ. ಅದನ್ನು ತಿರುಗಿಸಿ, ಭಾಗಗಳ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿ ಕಲಿಯಿರಿ, ಕೊನೆಯಲ್ಲಿ ರಸಪ್ರಶ್ನೆ ಆಡಿ.",
      open: "ತೆರೆಯಿರಿ →",
      stars_title: "ನಿಮ್ಮ ನಕ್ಷತ್ರಗಳು",
      stars_zero: "ಈಗ 0 / {0} ನಕ್ಷತ್ರಗಳು. ಪ್ರತಿ ವಿಷಯದಲ್ಲಿ 3 ನಕ್ಷತ್ರಗಳು ಸಿಗುತ್ತವೆ: ಎಲ್ಲಾ ಭಾಗಗಳನ್ನು ನೋಡಿ, ರಸಪ್ರಶ್ನೆಯಲ್ಲಿ ಅರ್ಧಕ್ಕಿಂತ ಹೆಚ್ಚು ಅಂಕ ಪಡೆಯಿರಿ, ಮತ್ತು ಪೂರ್ಣ ಅಂಕ ಪಡೆಯಿರಿ.",
      stars_all: "ಅದ್ಭುತ! ನೀವು ಎಲ್ಲಾ {0} ನಕ್ಷತ್ರಗಳನ್ನು ಗೆದ್ದಿದ್ದೀರಿ. ನೀವು ಟೆಕ್ ಲ್ಯಾಬ್ ಚಾಂಪಿಯನ್! 🏆",
      stars_some: "ನಿಮ್ಮ ಬಳಿ {0} / {1} ನಕ್ಷತ್ರಗಳಿವೆ. ಹೀಗೆಯೇ ಮುಂದುವರಿಯಿರಿ!",
      reset_progress: "ಪ್ರಗತಿಯನ್ನು ಅಳಿಸಿ",
      lang_label: "ಭಾಷೆ",
      theme_label: "ಲೈಟ್ ಅಥವಾ ಡಾರ್ಕ್ ಮೋಡ್ ಬದಲಿಸಿ",
      home_label: "ಎಲ್ಲಾ ವಿಷಯಗಳು",
      hint_default: "ಎಳೆದು ತಿರುಗಿಸಿ. ಪಿಂಚ್ ಅಥವಾ ಸ್ಕ್ರೋಲ್ ಮಾಡಿ ಜೂಮ್ ಮಾಡಿ. ಯಾವುದೇ ಭಾಗದ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿ.",
      intro_default: "<strong>ಶುರು ಮಾಡೋಣ!</strong> 3D ಮಾದರಿಯ ಯಾವುದೇ ಭಾಗದ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿ, ಅಥವಾ ಮೇಲಿನ ಬಟನ್ ಒತ್ತಿ.",
      explode: "ಭಾಗಗಳನ್ನು ಬೇರ್ಪಡಿಸಿ", join: "ಮತ್ತೆ ಜೋಡಿಸಿ", reset_view: "ಮೊದಲ ನೋಟ",
      tab_learn: "ಕಲಿಯಿರಿ", tab_quiz: "ರಸಪ್ರಶ್ನೆ",
      real_life: "ನಿಜ ಜೀವನದಲ್ಲಿ", did_you_know: "ನಿಮಗೆ ಗೊತ್ತೇ?",
      seen_parts: "ನೋಡಿದ ಭಾಗಗಳು: {0} / {1}", best_quiz: "ಅತ್ಯುತ್ತಮ ರಸಪ್ರಶ್ನೆ: {0} / {1}",
      question: "ಪ್ರಶ್ನೆ {0} / {1}",
      right: "ಭೇಷ್! ಸರಿಯಾದ ಉತ್ತರ.", wrong: "ಪರವಾಗಿಲ್ಲ, 3D ಯಲ್ಲಿ ನೋಡಿ.",
      glow_note: "ಸರಿಯಾದ ಭಾಗ 3D ಯಲ್ಲಿ ಹೊಳೆಯುತ್ತಿದೆ.",
      next: "ಮುಂದಿನ ಪ್ರಶ್ನೆ", see_result: "ಫಲಿತಾಂಶ ನೋಡಿ", again: "ಮತ್ತೆ ಆಡಿ", other_topic: "ಬೇರೆ ವಿಷಯ",
      msg_full: "ಅದ್ಭುತ! ನೀವು ಪರಿಣತರು!", msg_half: "ತುಂಬಾ ಚೆನ್ನಾಗಿದೆ! ಇನ್ನೂ ಸ್ವಲ್ಪ ಅಭ್ಯಾಸ ಮಾಡಿ.",
      msg_low: "ಪರವಾಗಿಲ್ಲ. ಕಲಿಯಿರಿ ಟ್ಯಾಬ್‌ನಲ್ಲಿ ಭಾಗಗಳನ್ನು ಮತ್ತೆ ನೋಡಿ, ನಂತರ ಪ್ರಯತ್ನಿಸಿ.",
      new_star: "ಹೊಸ ನಕ್ಷತ್ರ ಸಿಕ್ಕಿತು!",
      listen: "🔊 ಕೇಳಿ", stop: "⏹ ನಿಲ್ಲಿಸಿ",
      nogl: "ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ 3D ಕೆಲಸ ಮಾಡುತ್ತಿಲ್ಲ. Chrome ಅಥವಾ Edge ನ ಹೊಸ ಆವೃತ್ತಿ ಬಳಸಿ. ಕಲಿಯಿರಿ ಮತ್ತು ರಸಪ್ರಶ್ನೆ ಟ್ಯಾಬ್‌ಗಳು ಆದರೂ ಕೆಲಸ ಮಾಡುತ್ತವೆ.",
      load_fail: "ಈ ವಿಷಯ ಲೋಡ್ ಆಗಲಿಲ್ಲ. ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ."
    }
  };

  /* Profiles, badges, AR aur teacher page ke shabd */
  var MORE_UI = {
    hinglish: {
      guest: "Mehmaan", who: "Kaun seekh raha hai?", add_child: "+ Naya bachcha", name_ph: "Apna naam likho",
      pick_avatar: "Apna chehra chuno", save: "Save karo", cancel: "Rehne do",
      teacher_link: "👩‍🏫 Teacher aur parents ke liye", text_size: "Text bada ya chhota karo",
      badges_title: "Tumhare badges", badges_count: "{0} / {1} badges mile", badge_new: "Naya badge mila: {0}",
      locked: "Abhi band hai",
      b_first_step: "Pehla kadam", d_first_step: "Pehla part dekha",
      b_explorer: "Khojbeen", d_explorer: "Ek topic ke saare parts dekhe",
      b_quiz_star: "Quiz star", d_quiz_star: "Ek quiz me poore number laaye",
      b_never_give_up: "Haar nahi maani", d_never_give_up: "Ek quiz 3 baar khela",
      b_listener: "Dhyan se suno", d_listener: "🔊 se text suna",
      b_polyglot: "Bhasha ka raja", d_polyglot: "3 bhashaon me app chalaya",
      b_traveler: "Sair-sapata", d_traveler: "Saare {0} topic khole",
      b_all_parts: "Gyaani", d_all_parts: "Saare topics ke saare parts dekhe",
      b_champion: "Champion", d_champion: "Saare {1} star jeete",
      ar_start: "📷 AR me dekho", cam_start: "📷 Camera me dekho", cam_stop: "✖ Camera band karo", ar_exit: "✖ AR band karo",
      ar_scan: "Phone ko dheere se ghumao aur mez ya zameen dikhao",
      ar_place: "Gol nishaan dikhe to screen par tap karke model rakho",
      ar_placed: "Model rakh diya! Paas jao aur parts par tap karo",
      cam_on: "Camera chalu hai. Model ko drag karke ghumao",
      cam_denied: "Camera nahi khula. Browser me camera ki permission do",
      ar_fail: "AR shuru nahi hua. Camera mode try karo",
      t_title: "Teacher dashboard", t_intro: "Is device par seekhne wale har bachche ki progress. Ye data sirf isi browser me rehta hai, kahin bheja nahi jaata.",
      t_child: "Bachcha", t_stars: "Stars", t_badges: "Badges",
      t_legend: "👁 dekhe gaye parts · 📝 pehla quiz score → best score (kitni baar khela)",
      t_export: "⬇ CSV download karo", t_delete: "Hatao", t_sure: "Pakka hatayein?", t_none: "Abhi koi data nahi. Bachche topics kholenge to yahan dikhega.",
      t_summary: "Class ka average: pehla quiz {0}% → best {1}% ({2} quiz khele gaye)",
      t_back: "← Home", t_topic: "Topic", t_seen: "Dekhe parts", t_first: "Pehla score", t_best: "Best score", t_tries: "Kitni baar"
    },
    en: {
      guest: "Guest", who: "Who is learning?", add_child: "+ New child", name_ph: "Type your name",
      pick_avatar: "Pick your face", save: "Save", cancel: "Cancel",
      teacher_link: "👩‍🏫 For teachers and parents", text_size: "Make text bigger or smaller",
      badges_title: "Your badges", badges_count: "{0} / {1} badges won", badge_new: "New badge: {0}",
      locked: "Not yet won",
      b_first_step: "First step", d_first_step: "Saw your first part",
      b_explorer: "Explorer", d_explorer: "Saw every part in one topic",
      b_quiz_star: "Quiz star", d_quiz_star: "Got full marks in a quiz",
      b_never_give_up: "Never give up", d_never_give_up: "Played one quiz 3 times",
      b_listener: "Good listener", d_listener: "Listened with 🔊",
      b_polyglot: "Language star", d_polyglot: "Used the app in 3 languages",
      b_traveler: "Traveller", d_traveler: "Opened all {0} topics",
      b_all_parts: "Know-it-all", d_all_parts: "Saw every part in every topic",
      b_champion: "Champion", d_champion: "Won all {1} stars",
      ar_start: "📷 View in AR", cam_start: "📷 Camera view", cam_stop: "✖ Close camera", ar_exit: "✖ Exit AR",
      ar_scan: "Move your phone slowly and show it a table or the floor",
      ar_place: "When you see the ring, tap the screen to place the model",
      ar_placed: "Model placed! Walk closer and tap the parts",
      cam_on: "The camera is on. Drag to turn the model",
      cam_denied: "The camera did not open. Allow camera permission in the browser",
      ar_fail: "AR did not start. Try camera view",
      t_title: "Teacher dashboard", t_intro: "Progress of every child learning on this device. This data stays in this browser only and is never sent anywhere.",
      t_child: "Child", t_stars: "Stars", t_badges: "Badges",
      t_legend: "👁 parts seen · 📝 first quiz score → best score (times played)",
      t_export: "⬇ Download CSV", t_delete: "Remove", t_sure: "Really remove?", t_none: "No data yet. It appears here when children open topics.",
      t_summary: "Class average: first quiz {0}% → best {1}% ({2} quizzes played)",
      t_back: "← Home", t_topic: "Topic", t_seen: "Parts seen", t_first: "First score", t_best: "Best score", t_tries: "Times played"
    },
    hi: {
      guest: "मेहमान", who: "कौन सीख रहा है?", add_child: "+ नया बच्चा", name_ph: "अपना नाम लिखो",
      pick_avatar: "अपना चेहरा चुनो", save: "सेव करो", cancel: "रहने दो",
      teacher_link: "👩‍🏫 टीचर और पेरेंट्स के लिए", text_size: "टेक्स्ट बड़ा या छोटा करो",
      badges_title: "तुम्हारे बैज", badges_count: "{0} / {1} बैज मिले", badge_new: "नया बैज मिला: {0}",
      locked: "अभी बंद है",
      b_first_step: "पहला कदम", d_first_step: "पहला पार्ट देखा",
      b_explorer: "खोजबीन", d_explorer: "एक टॉपिक के सारे पार्ट्स देखे",
      b_quiz_star: "क्विज़ स्टार", d_quiz_star: "एक क्विज़ में पूरे नंबर लाए",
      b_never_give_up: "हार नहीं मानी", d_never_give_up: "एक क्विज़ 3 बार खेला",
      b_listener: "ध्यान से सुनो", d_listener: "🔊 से टेक्स्ट सुना",
      b_polyglot: "भाषा का राजा", d_polyglot: "3 भाषाओं में ऐप चलाया",
      b_traveler: "सैर-सपाटा", d_traveler: "सारे {0} टॉपिक खोले",
      b_all_parts: "ज्ञानी", d_all_parts: "सारे टॉपिक के सारे पार्ट्स देखे",
      b_champion: "चैंपियन", d_champion: "सारे {1} स्टार जीते",
      ar_start: "📷 AR में देखो", cam_start: "📷 कैमरे में देखो", cam_stop: "✖ कैमरा बंद करो", ar_exit: "✖ AR बंद करो",
      ar_scan: "फ़ोन को धीरे से घुमाओ और मेज़ या ज़मीन दिखाओ",
      ar_place: "गोल निशान दिखे तो स्क्रीन पर टैप करके मॉडल रखो",
      ar_placed: "मॉडल रख दिया! पास जाओ और पार्ट्स पर टैप करो",
      cam_on: "कैमरा चालू है। मॉडल को ड्रैग करके घुमाओ",
      cam_denied: "कैमरा नहीं खुला। ब्राउज़र में कैमरे की परमिशन दो",
      ar_fail: "AR शुरू नहीं हुआ। कैमरा मोड आज़माओ",
      t_title: "टीचर डैशबोर्ड", t_intro: "इस डिवाइस पर सीखने वाले हर बच्चे की प्रोग्रेस। यह डेटा सिर्फ़ इसी ब्राउज़र में रहता है, कहीं भेजा नहीं जाता।",
      t_child: "बच्चा", t_stars: "स्टार", t_badges: "बैज",
      t_legend: "👁 देखे गए पार्ट्स · 📝 पहला क्विज़ स्कोर → बेस्ट स्कोर (कितनी बार खेला)",
      t_export: "⬇ CSV डाउनलोड करो", t_delete: "हटाओ", t_sure: "पक्का हटाएँ?", t_none: "अभी कोई डेटा नहीं। बच्चे टॉपिक खोलेंगे तो यहाँ दिखेगा।",
      t_summary: "क्लास का औसत: पहला क्विज़ {0}% → बेस्ट {1}% ({2} क्विज़ खेले गए)",
      t_back: "← होम", t_topic: "टॉपिक", t_seen: "देखे पार्ट्स", t_first: "पहला स्कोर", t_best: "बेस्ट स्कोर", t_tries: "कितनी बार"
    },
    mr: {
      guest: "पाहुणा", who: "कोण शिकतंय?", add_child: "+ नवीन मूल", name_ph: "तुमचं नाव लिहा",
      pick_avatar: "तुमचा चेहरा निवडा", save: "सेव्ह करा", cancel: "राहू द्या",
      teacher_link: "👩‍🏫 शिक्षक आणि पालकांसाठी", text_size: "अक्षरं मोठी किंवा लहान करा",
      badges_title: "तुमचे बॅज", badges_count: "{0} / {1} बॅज मिळाले", badge_new: "नवा बॅज मिळाला: {0}",
      locked: "अजून मिळाला नाही",
      b_first_step: "पहिलं पाऊल", d_first_step: "पहिला भाग पाहिला",
      b_explorer: "शोधक", d_explorer: "एका विषयाचे सगळे भाग पाहिले",
      b_quiz_star: "क्विझ स्टार", d_quiz_star: "एका क्विझमध्ये पूर्ण गुण मिळवले",
      b_never_give_up: "हार नाही मानली", d_never_give_up: "एक क्विझ 3 वेळा खेळलं",
      b_listener: "लक्ष देऊन ऐका", d_listener: "🔊 ने मजकूर ऐकला",
      b_polyglot: "भाषांचा राजा", d_polyglot: "3 भाषांमध्ये ॲप वापरलं",
      b_traveler: "भटकंती", d_traveler: "सगळे {0} विषय उघडले",
      b_all_parts: "ज्ञानी", d_all_parts: "सगळ्या विषयांचे सगळे भाग पाहिले",
      b_champion: "चॅम्पियन", d_champion: "सगळे {1} स्टार जिंकले",
      ar_start: "📷 AR मध्ये बघा", cam_start: "📷 कॅमेऱ्यात बघा", cam_stop: "✖ कॅमेरा बंद करा", ar_exit: "✖ AR बंद करा",
      ar_scan: "फोन हळू फिरवा आणि टेबल किंवा जमीन दाखवा",
      ar_place: "गोल खूण दिसली की स्क्रीनवर टॅप करून मॉडेल ठेवा",
      ar_placed: "मॉडेल ठेवलं! जवळ जा आणि भागांवर टॅप करा",
      cam_on: "कॅमेरा चालू आहे. मॉडेल ड्रॅग करून फिरवा",
      cam_denied: "कॅमेरा उघडला नाही. ब्राउझरमध्ये कॅमेऱ्याची परवानगी द्या",
      ar_fail: "AR सुरू झालं नाही. कॅमेरा मोड वापरून बघा",
      t_title: "शिक्षक डॅशबोर्ड", t_intro: "या डिव्हाइसवर शिकणाऱ्या प्रत्येक मुलाची प्रगती. हा डेटा फक्त याच ब्राउझरमध्ये राहतो, कुठेही पाठवला जात नाही.",
      t_child: "मूल", t_stars: "स्टार", t_badges: "बॅज",
      t_legend: "👁 पाहिलेले भाग · 📝 पहिला क्विझ स्कोअर → सर्वोत्तम स्कोअर (किती वेळा खेळलं)",
      t_export: "⬇ CSV डाउनलोड करा", t_delete: "काढा", t_sure: "नक्की काढायचं?", t_none: "अजून डेटा नाही. मुलं विषय उघडतील तेव्हा इथे दिसेल.",
      t_summary: "वर्गाची सरासरी: पहिलं क्विझ {0}% → सर्वोत्तम {1}% ({2} क्विझ खेळले)",
      t_back: "← होम", t_topic: "विषय", t_seen: "पाहिलेले भाग", t_first: "पहिला स्कोअर", t_best: "सर्वोत्तम स्कोअर", t_tries: "किती वेळा"
    },
    kn: {
      guest: "ಅತಿಥಿ", who: "ಯಾರು ಕಲಿಯುತ್ತಿದ್ದಾರೆ?", add_child: "+ ಹೊಸ ಮಗು", name_ph: "ನಿಮ್ಮ ಹೆಸರು ಬರೆಯಿರಿ",
      pick_avatar: "ನಿಮ್ಮ ಮುಖ ಆರಿಸಿ", save: "ಉಳಿಸಿ", cancel: "ಬೇಡ",
      teacher_link: "👩‍🏫 ಶಿಕ್ಷಕರು ಮತ್ತು ಪೋಷಕರಿಗಾಗಿ", text_size: "ಅಕ್ಷರಗಳನ್ನು ದೊಡ್ಡದು ಅಥವಾ ಚಿಕ್ಕದು ಮಾಡಿ",
      badges_title: "ನಿಮ್ಮ ಬ್ಯಾಡ್ಜ್‌ಗಳು", badges_count: "{0} / {1} ಬ್ಯಾಡ್ಜ್‌ಗಳು ಸಿಕ್ಕಿವೆ", badge_new: "ಹೊಸ ಬ್ಯಾಡ್ಜ್: {0}",
      locked: "ಇನ್ನೂ ಸಿಕ್ಕಿಲ್ಲ",
      b_first_step: "ಮೊದಲ ಹೆಜ್ಜೆ", d_first_step: "ಮೊದಲ ಭಾಗ ನೋಡಿದಿರಿ",
      b_explorer: "ಅನ್ವೇಷಕ", d_explorer: "ಒಂದು ವಿಷಯದ ಎಲ್ಲಾ ಭಾಗಗಳನ್ನು ನೋಡಿದಿರಿ",
      b_quiz_star: "ರಸಪ್ರಶ್ನೆ ತಾರೆ", d_quiz_star: "ಒಂದು ರಸಪ್ರಶ್ನೆಯಲ್ಲಿ ಪೂರ್ಣ ಅಂಕ ಪಡೆದಿರಿ",
      b_never_give_up: "ಸೋಲೊಪ್ಪದವರು", d_never_give_up: "ಒಂದು ರಸಪ್ರಶ್ನೆಯನ್ನು 3 ಬಾರಿ ಆಡಿದಿರಿ",
      b_listener: "ಚೆನ್ನಾಗಿ ಕೇಳುವವರು", d_listener: "🔊 ಮೂಲಕ ಪಠ್ಯ ಕೇಳಿದಿರಿ",
      b_polyglot: "ಭಾಷಾ ತಾರೆ", d_polyglot: "3 ಭಾಷೆಗಳಲ್ಲಿ ಆ್ಯಪ್ ಬಳಸಿದಿರಿ",
      b_traveler: "ಪ್ರವಾಸಿ", d_traveler: "ಎಲ್ಲಾ {0} ವಿಷಯಗಳನ್ನು ತೆರೆದಿರಿ",
      b_all_parts: "ಜ್ಞಾನಿ", d_all_parts: "ಎಲ್ಲಾ ವಿಷಯಗಳ ಎಲ್ಲಾ ಭಾಗಗಳನ್ನು ನೋಡಿದಿರಿ",
      b_champion: "ಚಾಂಪಿಯನ್", d_champion: "ಎಲ್ಲಾ {1} ನಕ್ಷತ್ರಗಳನ್ನು ಗೆದ್ದಿರಿ",
      ar_start: "📷 AR ನಲ್ಲಿ ನೋಡಿ", cam_start: "📷 ಕ್ಯಾಮೆರಾದಲ್ಲಿ ನೋಡಿ", cam_stop: "✖ ಕ್ಯಾಮೆರಾ ಮುಚ್ಚಿ", ar_exit: "✖ AR ನಿಂದ ಹೊರಬನ್ನಿ",
      ar_scan: "ಫೋನ್ ಅನ್ನು ನಿಧಾನವಾಗಿ ಸರಿಸಿ ಮತ್ತು ಮೇಜು ಅಥವಾ ನೆಲವನ್ನು ತೋರಿಸಿ",
      ar_place: "ವೃತ್ತ ಕಾಣಿಸಿದಾಗ, ಮಾದರಿಯನ್ನು ಇಡಲು ಪರದೆಯ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿ",
      ar_placed: "ಮಾದರಿ ಇಡಲಾಗಿದೆ! ಹತ್ತಿರ ಹೋಗಿ ಭಾಗಗಳ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿ",
      cam_on: "ಕ್ಯಾಮೆರಾ ಆನ್ ಆಗಿದೆ. ಮಾದರಿಯನ್ನು ಎಳೆದು ತಿರುಗಿಸಿ",
      cam_denied: "ಕ್ಯಾಮೆರಾ ತೆರೆಯಲಿಲ್ಲ. ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಕ್ಯಾಮೆರಾ ಅನುಮತಿ ನೀಡಿ",
      ar_fail: "AR ಶುರುವಾಗಲಿಲ್ಲ. ಕ್ಯಾಮೆರಾ ನೋಟ ಪ್ರಯತ್ನಿಸಿ",
      t_title: "ಶಿಕ್ಷಕರ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", t_intro: "ಈ ಸಾಧನದಲ್ಲಿ ಕಲಿಯುತ್ತಿರುವ ಪ್ರತಿ ಮಗುವಿನ ಪ್ರಗತಿ. ಈ ಡೇಟಾ ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಮಾತ್ರ ಇರುತ್ತದೆ, ಎಲ್ಲಿಗೂ ಕಳುಹಿಸಲಾಗುವುದಿಲ್ಲ.",
      t_child: "ಮಗು", t_stars: "ನಕ್ಷತ್ರಗಳು", t_badges: "ಬ್ಯಾಡ್ಜ್‌ಗಳು",
      t_legend: "👁 ನೋಡಿದ ಭಾಗಗಳು · 📝 ಮೊದಲ ರಸಪ್ರಶ್ನೆ ಅಂಕ → ಅತ್ಯುತ್ತಮ ಅಂಕ (ಎಷ್ಟು ಬಾರಿ ಆಡಿದರು)",
      t_export: "⬇ CSV ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ", t_delete: "ತೆಗೆದುಹಾಕಿ", t_sure: "ಖಚಿತವಾಗಿ ತೆಗೆಯಬೇಕೇ?", t_none: "ಇನ್ನೂ ಡೇಟಾ ಇಲ್ಲ. ಮಕ್ಕಳು ವಿಷಯಗಳನ್ನು ತೆರೆದಾಗ ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ.",
      t_summary: "ತರಗತಿಯ ಸರಾಸರಿ: ಮೊದಲ ರಸಪ್ರಶ್ನೆ {0}% → ಅತ್ಯುತ್ತಮ {1}% ({2} ರಸಪ್ರಶ್ನೆಗಳು ಆಡಲಾಗಿದೆ)",
      t_back: "← ಮುಖಪುಟ", t_topic: "ವಿಷಯ", t_seen: "ನೋಡಿದ ಭಾಗಗಳು", t_first: "ಮೊದಲ ಅಂಕ", t_best: "ಅತ್ಯುತ್ತಮ ಅಂಕ", t_tries: "ಎಷ್ಟು ಬಾರಿ"
    }
  };

  /* Engine ke naye hisse (labels, gehri science, dohrao tab, level, agla topic) ke shabd */
  var LEARN_UI = {
    hinglish: {
      adv_title: "🔬 Gehri science", tab_revise: "Dohrao",
      terms_title: "📖 Zaroori shabd", practice_title: "✍️ Practice sawaal", show_answer: "Jawab dekho",
      labels_show: "🏷️ Naam dikhao", labels_hide: "🏷️ Naam chhupao",
      lvl_1: "Shuruaati", lvl_2: "Madhyam", lvl_3: "Advanced",
      st_new: "Shuru nahi kiya", st_progress: "Chal raha hai", st_done: "✓ Poora hua",
      learn_first: "Pehle ye seekho:", next_topic: "Agla topic →",
      done_rule: "Topic poora tab hota hai jab saare parts dekh lo aur quiz me aadhe ya zyada number lao."
    },
    en: {
      adv_title: "🔬 Deeper science", tab_revise: "Revise",
      terms_title: "📖 Key words", practice_title: "✍️ Practice questions", show_answer: "Show answer",
      labels_show: "🏷️ Show labels", labels_hide: "🏷️ Hide labels",
      lvl_1: "Beginner", lvl_2: "Intermediate", lvl_3: "Advanced",
      st_new: "Not started", st_progress: "In progress", st_done: "✓ Completed",
      learn_first: "Learn first:", next_topic: "Next topic →",
      done_rule: "A topic is complete when you have seen every part and scored at least half in the quiz."
    },
    hi: {
      adv_title: "🔬 गहरा विज्ञान", tab_revise: "दोहराओ",
      terms_title: "📖 ज़रूरी शब्द", practice_title: "✍️ अभ्यास प्रश्न", show_answer: "जवाब देखो",
      labels_show: "🏷️ नाम दिखाओ", labels_hide: "🏷️ नाम छिपाओ",
      lvl_1: "शुरुआती", lvl_2: "मध्यम", lvl_3: "उन्नत",
      st_new: "शुरू नहीं किया", st_progress: "चल रहा है", st_done: "✓ पूरा हुआ",
      learn_first: "पहले यह सीखो:", next_topic: "अगला टॉपिक →",
      done_rule: "टॉपिक तब पूरा होता है जब सारे पार्ट्स देख लो और क्विज़ में आधे या ज़्यादा नंबर लाओ।"
    },
    mr: {
      adv_title: "🔬 सखोल विज्ञान", tab_revise: "उजळणी",
      terms_title: "📖 महत्त्वाचे शब्द", practice_title: "✍️ सराव प्रश्न", show_answer: "उत्तर बघा",
      labels_show: "🏷️ नावं दाखवा", labels_hide: "🏷️ नावं लपवा",
      lvl_1: "प्राथमिक", lvl_2: "मध्यम", lvl_3: "प्रगत",
      st_new: "सुरू केलं नाही", st_progress: "सुरू आहे", st_done: "✓ पूर्ण झालं",
      learn_first: "आधी हे शिका:", next_topic: "पुढचा विषय →",
      done_rule: "सगळे भाग पाहिले आणि क्विझमध्ये अर्धे किंवा जास्त गुण मिळवले की विषय पूर्ण होतो."
    },
    kn: {
      adv_title: "🔬 ಆಳವಾದ ವಿಜ್ಞಾನ", tab_revise: "ಪುನರಾವರ್ತನೆ",
      terms_title: "📖 ಮುಖ್ಯ ಪದಗಳು", practice_title: "✍️ ಅಭ್ಯಾಸ ಪ್ರಶ್ನೆಗಳು", show_answer: "ಉತ್ತರ ನೋಡಿ",
      labels_show: "🏷️ ಹೆಸರುಗಳನ್ನು ತೋರಿಸಿ", labels_hide: "🏷️ ಹೆಸರುಗಳನ್ನು ಮರೆಮಾಡಿ",
      lvl_1: "ಆರಂಭಿಕ", lvl_2: "ಮಧ್ಯಮ", lvl_3: "ಉನ್ನತ",
      st_new: "ಶುರು ಮಾಡಿಲ್ಲ", st_progress: "ನಡೆಯುತ್ತಿದೆ", st_done: "✓ ಪೂರ್ಣಗೊಂಡಿದೆ",
      learn_first: "ಮೊದಲು ಇದನ್ನು ಕಲಿಯಿರಿ:", next_topic: "ಮುಂದಿನ ವಿಷಯ →",
      done_rule: "ಎಲ್ಲಾ ಭಾಗಗಳನ್ನು ನೋಡಿ, ರಸಪ್ರಶ್ನೆಯಲ್ಲಿ ಅರ್ಧ ಅಥವಾ ಹೆಚ್ಚು ಅಂಕ ಪಡೆದಾಗ ವಿಷಯ ಪೂರ್ಣಗೊಳ್ಳುತ್ತದೆ."
    }
  };
  [MORE_UI, LEARN_UI].forEach(function (more) {
    Object.keys(more).forEach(function (l) {
      Object.keys(more[l]).forEach(function (k) { TL.UI[l][k] = more[l][k]; });
    });
  });
  TL.addUI = function (more) {
    Object.keys(more).forEach(function (l) {
      if (!TL.UI[l]) return;
      Object.keys(more[l]).forEach(function (k) { TL.UI[l][k] = more[l][k]; });
    });
  };

  var LANG_KEY = "techlab3d.lang";
  TL.lang = "hinglish";
  try {
    var savedLang = window.localStorage.getItem(LANG_KEY);
    if (savedLang && TL.UI[savedLang]) TL.lang = savedLang;
  } catch (e) {}

  function fill(s, args) {
    return String(s).replace(/\{(\d)\}/g, function (m, i) { return args[+i] !== undefined ? args[+i] : m; });
  }
  /* Kisi bhi table se current bhasha ka shabd, na mile to fallback */
  TL.pick = function (table) {
    if (!table) return undefined;
    if (table[TL.lang] !== undefined) return table[TL.lang];
    for (var i = 0; i < FALLBACK.length; i++) if (table[FALLBACK[i]] !== undefined) return table[FALLBACK[i]];
    return undefined;
  };
  /* UI shabd: TL.u("seen_parts", 3, 7) */
  TL.u = function (key) {
    var args = Array.prototype.slice.call(arguments, 1);
    var s = TL.UI[TL.lang][key];
    if (s === undefined) s = TL.UI.en[key];
    if (s === undefined) s = key;
    return fill(s, args);
  };
  TL.fill = fill;

  /* Chhota event bus: engine batata hai (part, answer, quiz, badge...), fun.js sunta hai */
  var bus = {};
  TL.on = function (name, cb) { (bus[name] = bus[name] || []).push(cb); };
  TL.emit = function (name, data) {
    (bus[name] || []).forEach(function (cb) { try { cb(data); } catch (e) {} });
  };

  var langListeners = [];
  TL.onLang = function (cb) { langListeners.push(cb); };
  TL.langInfo = function () {
    for (var i = 0; i < TL.LANGS.length; i++) if (TL.LANGS[i].id === TL.lang) return TL.LANGS[i];
    return TL.LANGS[0];
  };
  TL.setLang = function (id) {
    if (!TL.UI[id] || id === TL.lang) return;
    TL.lang = id;
    try { window.localStorage.setItem(LANG_KEY, id); } catch (e) {}
    document.documentElement.lang = TL.langInfo().html;
    TL.stopSpeaking();
    noteLang();
    langListeners.forEach(function (cb) { cb(id); });
    TL.announceBadges();
  };
  /* Language bar ke buttons banao */
  TL.buildLangBar = function (el) {
    el.setAttribute("role", "group");
    function render() {
      el.setAttribute("aria-label", TL.u("lang_label"));
      el.innerHTML = "";
      TL.LANGS.forEach(function (l) {
        var b = document.createElement("button");
        b.className = "lang-btn";
        b.textContent = l.label;
        b.lang = l.html;
        b.setAttribute("aria-pressed", String(l.id === TL.lang));
        b.addEventListener("click", function () { TL.setLang(l.id); });
        el.appendChild(b);
      });
    }
    render();
    TL.onLang(render);
  };
  document.documentElement.lang = TL.langInfo().html;

  /* ================================================================
     READ ALOUD (browser ki apni awaaz, internet ke bina bhi chalti hai)
  ================================================================ */
  TL.canSpeak = !!(window.speechSynthesis && window.SpeechSynthesisUtterance);
  function findVoice() {
    var voices = window.speechSynthesis.getVoices() || [];
    var wants = TL.langInfo().speech;
    for (var i = 0; i < wants.length; i++) {
      var w = wants[i].toLowerCase();
      for (var j = 0; j < voices.length; j++) {
        var vl = (voices[j].lang || "").toLowerCase().replace("_", "-");
        if (vl === w || vl.indexOf(w + "-") === 0) return voices[j];
      }
    }
    return null;
  }
  TL.speak = function (text, onEnd) {
    if (!TL.canSpeak) return;
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    var v = findVoice();
    if (v) { u.voice = v; u.lang = v.lang; } else u.lang = TL.langInfo().speech[0];
    u.rate = 0.92;
    u.onend = u.onerror = function () { if (onEnd) onEnd(); };
    window.speechSynthesis.speak(u);
  };
  TL.stopSpeaking = function () { if (TL.canSpeak) window.speechSynthesis.cancel(); };
  if (TL.canSpeak) window.speechSynthesis.getVoices(); /* Chrome voices ko pehle se load karo */

  /* ================================================================
     TOPICS (naya topic: yahan ek entry + js/topics/<id>.js)
  ================================================================ */
  TL.TOPICS = [
    { id: "computer", emoji: "🖥️",
      title: { hinglish: "Computer ke parts", en: "Parts of a computer", hi: "कंप्यूटर के पार्ट्स", mr: "कॉम्प्युटरचे भाग" },
      desc: { hinglish: "Computer ke andar jhaank ke dekho: CPU, RAM, GPU aur baaki sab.",
              en: "Peek inside a computer: CPU, RAM, GPU and everything else.",
              hi: "कंप्यूटर के अंदर झाँककर देखो: CPU, RAM, GPU और बाकी सब।",
              mr: "कॉम्प्युटरच्या आत डोकावून बघा: CPU, RAM, GPU आणि बाकी सगळं." } },
    { id: "internet", emoji: "🌐",
      title: { hinglish: "Internet kaise chalta hai", en: "How the internet works", hi: "इंटरनेट कैसे चलता है", mr: "इंटरनेट कसं चालतं" },
      desc: { hinglish: "Tumhara message phone se router, tower aur server tak kaise jaata hai.",
              en: "How your message travels from your phone to a router, a tower and a server.",
              hi: "तुम्हारा मैसेज फ़ोन से राउटर, टावर और सर्वर तक कैसे जाता है।",
              mr: "तुमचा मेसेज फोनपासून राउटर, टॉवर आणि सर्व्हरपर्यंत कसा जातो." } },
    { id: "circuit", emoji: "💡",
      title: { hinglish: "Bijli ka circuit", en: "Electric circuit", hi: "बिजली का सर्किट", mr: "विजेचं सर्किट" },
      desc: { hinglish: "Battery, switch aur bulb jodo. Switch dabao aur bulb jalao!",
              en: "Connect a battery, a switch and a bulb. Press the switch and light the bulb!",
              hi: "बैटरी, स्विच और बल्ब जोड़ो। स्विच दबाओ और बल्ब जलाओ!",
              mr: "बॅटरी, स्विच आणि बल्ब जोडा. स्विच दाबा आणि बल्ब लावा!" } },
    { id: "robot", emoji: "🤖",
      title: { hinglish: "Robot aur sensor", en: "Robots and sensors", hi: "रोबोट और सेंसर", mr: "रोबोट आणि सेन्सर" },
      desc: { hinglish: "Robot ko command do. Uska sensor deewar dekhkar ruk jaata hai.",
              en: "Give the robot commands. Its sensor sees a wall and stops it.",
              hi: "रोबोट को कमांड दो। उसका सेंसर दीवार देखकर रुक जाता है।",
              mr: "रोबोटला कमांड द्या. त्याचा सेन्सर भिंत बघून थांबतो." } },
    { id: "coding", emoji: "🧩",
      title: { hinglish: "Coding ki shuruaat", en: "Coding basics", hi: "कोडिंग की शुरुआत", mr: "कोडिंगची सुरुवात" },
      desc: { hinglish: "Command blocks jodo aur character ko star tak pahunchao.",
              en: "Join command blocks and guide the character to the star.",
              hi: "कमांड ब्लॉक जोड़ो और कैरेक्टर को स्टार तक पहुँचाओ।",
              mr: "कमांड ब्लॉक जोडा आणि कॅरेक्टरला स्टारपर्यंत पोहोचवा." } },
    { id: "satellite", emoji: "🛰️",
      title: { hinglish: "Satellite aur GPS", en: "Satellites and GPS", hi: "सैटेलाइट और GPS", mr: "उपग्रह आणि GPS" },
      desc: { hinglish: "Satellite Earth ke chakkar lagate hain aur tumhara phone dhoondte hain.",
              en: "Satellites circle the Earth and find where your phone is.",
              hi: "सैटेलाइट पृथ्वी के चक्कर लगाते हैं और तुम्हारा फ़ोन ढूँढते हैं।",
              mr: "उपग्रह पृथ्वीभोवती फिरतात आणि तुमचा फोन शोधतात." } },
    { id: "mobile", emoji: "📱",
      title: { hinglish: "Mobile phone ke andar", en: "Inside a mobile phone", hi: "मोबाइल फ़ोन के अंदर", mr: "मोबाइल फोनच्या आत" },
      desc: { hinglish: "Screen, battery, chip aur camera. Call karo aur photo lo!",
              en: "Screen, battery, chip and camera. Make a call and take a photo!",
              hi: "स्क्रीन, बैटरी, चिप और कैमरा। कॉल करो और फ़ोटो लो!",
              mr: "स्क्रीन, बॅटरी, चिप आणि कॅमेरा. कॉल करा आणि फोटो काढा!" } },
    { id: "solar", emoji: "☀️",
      title: { hinglish: "Solar energy", en: "Solar energy", hi: "सौर ऊर्जा", mr: "सौर ऊर्जा" },
      desc: { hinglish: "Sooraj ki roshni se ghar me bijli. Badal aur raat me kya hota hai?",
              en: "Electricity for a home from sunlight. What happens with clouds and at night?",
              hi: "सूरज की रोशनी से घर में बिजली। बादल और रात में क्या होता है?",
              mr: "सूर्यप्रकाशापासून घरात वीज. ढग आल्यावर आणि रात्री काय होतं?" } },
    { id: "drone", emoji: "🚁",
      title: { hinglish: "Drone kaise udta hai", en: "How a drone flies", hi: "ड्रोन कैसे उड़ता है", mr: "ड्रोन कसा उडतो" },
      desc: { hinglish: "4 propeller, motor aur ek chhota dimaag. Drone udao aur ghumao!",
              en: "4 propellers, motors and a small brain. Fly the drone and turn it!",
              hi: "4 प्रोपेलर, मोटर और एक छोटा दिमाग। ड्रोन उड़ाओ और घुमाओ!",
              mr: "4 प्रोपेलर, मोटर आणि एक छोटा मेंदू. ड्रोन उडवा आणि फिरवा!" } },
    { id: "rocket", emoji: "🚀",
      title: { hinglish: "Rocket aur space", en: "Rockets and space", hi: "रॉकेट और अंतरिक्ष", mr: "रॉकेट आणि अवकाश" },
      desc: { hinglish: "Countdown karo aur rocket launch karo. Stage alag hote dekho!",
              en: "Count down and launch the rocket. Watch the stages separate!",
              hi: "काउंटडाउन करो और रॉकेट लॉन्च करो। स्टेज अलग होते देखो!",
              mr: "काउंटडाउन करा आणि रॉकेट लाँच करा. टप्पे वेगळे होताना बघा!" } }
  ];

  TL.topicById = function (id) {
    for (var i = 0; i < TL.TOPICS.length; i++) if (TL.TOPICS[i].id === id) return TL.TOPICS[i];
    return null;
  };
  /* Topic ka "ghar" page: technology wale index.html par, biology wale biology.html par */
  TL.topicHome = function (t) { return (t && t.home) || "index.html"; };

  /* ================================================================
     PROFILES + PROGRESS + BADGES (sab isi browser me save)
     db = { current: id, list: [ { id, name, avatar, langs: [], listened, badges: [], progress: {
            topicId: { seen: [], parts, best, total, attempts, first, firstSeen, last } } } ] }
     Browser storage kabhi kabhi band hota hai (private window), isliye try/catch.
  ================================================================ */
  var PKEY = "techlab3d.profiles.v1";
  var OLD_KEY = "techlab3d.progress.v1";
  var db = null;
  TL.AVATARS = ["🦁", "🐯", "🐼", "🦊", "🐸", "🐵", "🦄", "🐧", "🐢", "🐙", "🦋", "🚀"];

  function newProfile(name, avatar) {
    return { id: "p" + Date.now().toString(36) + Math.floor(Math.random() * 1000),
             name: name || "", avatar: avatar || "🦁", langs: [], listened: false, badges: [], progress: {} };
  }
  function loadDb() {
    if (db) return db;
    try { db = JSON.parse(window.localStorage.getItem(PKEY)); } catch (e) { db = null; }
    if (!db || !db.list || !db.list.length) {
      var p = newProfile("", "🦁");
      /* purani (profile se pehle wali) progress ko pehle profile me le aao */
      try { var old = JSON.parse(window.localStorage.getItem(OLD_KEY)); if (old) p.progress = old; } catch (e) {}
      db = { current: p.id, list: [p] };
      saveDb();
    }
    if (!TL.profileById(db.current)) db.current = db.list[0].id;
    return db;
  }
  function saveDb() {
    try { window.localStorage.setItem(PKEY, JSON.stringify(db)); } catch (e) {}
  }
  /* Doosre page se wapas aane par storage se taaza padho */
  TL.reloadProfiles = function () { db = null; return loadDb(); };
  TL.profiles = function () { return loadDb().list; };
  TL.profileById = function (id) {
    var list = db ? db.list : [];
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  };
  TL.currentProfile = function () { loadDb(); return TL.profileById(db.current); };
  TL.profileName = function (p) { return (p && p.name) || TL.u("guest"); };
  TL.setCurrentProfile = function (id) { loadDb(); if (TL.profileById(id)) { db.current = id; saveDb(); } };
  TL.addProfile = function (name, avatar) {
    loadDb();
    var p = newProfile(String(name || "").trim().slice(0, 24), avatar);
    db.list.push(p); db.current = p.id; saveDb();
    return p;
  };
  TL.deleteProfile = function (id) {
    loadDb();
    db.list = db.list.filter(function (p) { return p.id !== id; });
    if (!db.list.length) db.list.push(newProfile("", "🦁"));
    if (!TL.profileById(db.current)) db.current = db.list[0].id;
    saveDb();
  };

  function progOf(profile, id) {
    if (!profile.progress[id]) profile.progress[id] = { seen: [], parts: 0, best: 0, total: 0, attempts: 0, first: null, firstSeen: 0, last: null };
    return profile.progress[id];
  }
  TL.loadProgress = function () { return TL.currentProfile().progress; };
  TL.topicProgress = function (id, profile) { return progOf(profile || TL.currentProfile(), id); };
  TL.markSeen = function (topicId, partId, partCount) {
    var p = TL.topicProgress(topicId);
    p.parts = partCount;
    if (p.seen.indexOf(partId) === -1) p.seen.push(partId);
    saveDb();
    return p;
  };
  TL.recordScore = function (topicId, score, total) {
    var p = TL.topicProgress(topicId);
    p.total = total;
    p.attempts = (p.attempts || 0) + 1;
    if (p.first === null || p.first === undefined) { p.first = score; p.firstSeen = p.seen.length; }
    p.last = score;
    if (score > p.best) p.best = score;
    saveDb();
    return p;
  };
  /* 3 stars: saare parts dekhe, quiz me aadhe se zyada, quiz me poore number */
  TL.starsFor = function (id, profile) {
    var p = TL.topicProgress(id, profile);
    var s = 0;
    if (p.parts && p.seen.length >= p.parts) s++;
    if (p.total && p.best >= p.total / 2) s++;
    if (p.total && p.best === p.total) s++;
    return s;
  };
  /* "done": saare parts dekhe + quiz me aadhe ya zyada; "progress": kuch shuru kiya; "new": kuch nahi */
  TL.topicStatus = function (id, profile) {
    var p = (profile || TL.currentProfile()).progress[id];
    if (!p || (!p.seen.length && !p.attempts)) return "new";
    if (p.parts && p.seen.length >= p.parts && p.total && p.best >= p.total / 2) return "done";
    return "progress";
  };
  TL.totalStars = function (profile) {
    var n = 0;
    TL.TOPICS.forEach(function (t) { n += TL.starsFor(t.id, profile); });
    return n;
  };
  TL.resetProgress = function () {
    var pr = TL.currentProfile();
    pr.progress = {}; pr.badges = []; pr.langs = []; pr.listened = false;
    saveDb();
  };
  TL.starsHtml = function (n) {
    var h = "";
    for (var i = 0; i < 3; i++) h += i < n ? "★" : '<span class="off">★</span>';
    return h;
  };

  /* ---------------- Badges ---------------- */
  function anyTopic(pr, fn) { return TL.TOPICS.some(function (t) { return pr.progress[t.id] && fn(pr.progress[t.id]); }); }
  function allTopics(pr, fn) { return TL.TOPICS.every(function (t) { return pr.progress[t.id] && fn(pr.progress[t.id]); }); }
  TL.BADGES = [
    { id: "first_step", emoji: "👣", test: function (pr) { return anyTopic(pr, function (p) { return p.seen.length > 0; }); } },
    { id: "explorer", emoji: "🔍", test: function (pr) { return anyTopic(pr, function (p) { return p.parts && p.seen.length >= p.parts; }); } },
    { id: "quiz_star", emoji: "🧠", test: function (pr) { return anyTopic(pr, function (p) { return p.total && p.best === p.total; }); } },
    { id: "never_give_up", emoji: "🔁", test: function (pr) { return anyTopic(pr, function (p) { return p.attempts >= 3; }); } },
    { id: "listener", emoji: "🔊", test: function (pr) { return !!pr.listened; } },
    { id: "polyglot", emoji: "🗣️", test: function (pr) { return (pr.langs || []).length >= 3; } },
    { id: "traveler", emoji: "🧭", test: function (pr) { return allTopics(pr, function (p) { return p.seen.length > 0; }); } },
    { id: "all_parts", emoji: "🎓", test: function (pr) { return allTopics(pr, function (p) { return p.parts && p.seen.length >= p.parts; }); } },
    { id: "champion", emoji: "🏆", test: function (pr) { return TL.totalStars(pr) === TL.TOPICS.length * 3; } }
  ];
  /* Naye badge dhoondo; naye wale lautao (toast dikhane ke liye) */
  TL.checkBadges = function () {
    var pr = TL.currentProfile();
    var fresh = [];
    TL.BADGES.forEach(function (b) {
      if (pr.badges.indexOf(b.id) === -1 && b.test(pr)) { pr.badges.push(b.id); fresh.push(b); }
    });
    if (fresh.length) saveDb();
    return fresh;
  };
  TL.noteListen = function () {
    var pr = TL.currentProfile();
    if (!pr.listened) { pr.listened = true; saveDb(); }
    TL.announceBadges();
  };
  function noteLang() {
    var pr = TL.currentProfile();
    pr.langs = pr.langs || [];
    if (pr.langs.indexOf(TL.lang) === -1) { pr.langs.push(TL.lang); saveDb(); }
  }

  /* ---------------- Toast (chhota sa pop-up message) ---------------- */
  TL.toast = function (text) {
    var box = document.getElementById("toasts");
    if (!box) {
      box = document.createElement("div");
      box.id = "toasts";
      box.setAttribute("role", "status");
      box.setAttribute("aria-live", "polite");
      document.body.appendChild(box);
    }
    var t = document.createElement("div");
    t.className = "toast";
    t.textContent = text;
    box.appendChild(t);
    setTimeout(function () { t.classList.add("out"); }, 3600);
    setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 4200);
  };
  TL.announceBadges = function () {
    TL.checkBadges().forEach(function (b) {
      TL.toast(b.emoji + " " + TL.u("badge_new", TL.u("b_" + b.id)));
      TL.emit("badge", b);
    });
  };

  noteLang();

  /* ================================================================
     TEXT SIZE (bade text wala mode)
  ================================================================ */
  var SIZE_KEY = "techlab3d.bigtext";
  try { if (window.localStorage.getItem(SIZE_KEY) === "1") document.documentElement.classList.add("big"); } catch (e) {}
  TL.bindSizeButton = function (btn) {
    function sync() {
      var on = document.documentElement.classList.contains("big");
      btn.setAttribute("aria-pressed", String(on));
      btn.setAttribute("aria-label", TL.u("text_size"));
      btn.title = TL.u("text_size");
    }
    sync();
    TL.onLang(sync);
    btn.addEventListener("click", function () {
      var on = document.documentElement.classList.toggle("big");
      try { window.localStorage.setItem(SIZE_KEY, on ? "1" : "0"); } catch (e) {}
      sync();
      window.dispatchEvent(new Event("resize"));
    });
  };

  /* ================================================================
     OFFLINE / INSTALL (sirf website par, file:// par nahi)
  ================================================================ */
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    });
    /* Naya service worker aaya (app update hua) to page ek baar khud reload ho,
       taaki purani cached files (jaise purana bio.js) na dikhein */
    var hadController = !!navigator.serviceWorker.controller, reloaded = false;
    navigator.serviceWorker.addEventListener("controllerchange", function () {
      if (hadController && !reloaded) { reloaded = true; location.reload(); }
    });
  }

  /* ================================================================
     THEME
  ================================================================ */
  var THEME_KEY = "techlab3d.theme";
  try {
    var saved = window.localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") document.documentElement.setAttribute("data-theme", saved);
  } catch (e) {}

  TL.isDark = function () {
    var t = document.documentElement.getAttribute("data-theme");
    if (t) return t === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };
  TL.bindThemeButton = function (btn, onChange) {
    function lbl() { btn.setAttribute("aria-label", TL.u("theme_label")); btn.title = TL.u("theme_label"); }
    lbl();
    TL.onLang(lbl);
    btn.addEventListener("click", function () {
      var next = TL.isDark() ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { window.localStorage.setItem(THEME_KEY, next); } catch (e) {}
      if (onChange) onChange();
    });
  };

  TL.esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  };
})();
