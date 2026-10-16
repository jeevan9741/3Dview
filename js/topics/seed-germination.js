/* Topic: Seed germination (Botany, beginner) */
TL.start({
  id: "seed-germination",
  camera: { theta: 0.1, phi: 1.36, radius: 13.5, target: [0.6, 0.4, 0], min: 5, max: 26 },
  autoRotate: false,
  labels: true,
  order: ["coat", "cotyledon", "radicle", "plumule", "seedling", "conditions"],
  parts: {
    coat: { emoji: "🧥" }, cotyledon: { emoji: "🫘" }, radicle: { emoji: "⬇️" },
    plumule: { emoji: "🌱" }, seedling: { emoji: "🪴" }, conditions: { emoji: "🧪" }
  },
  quiz: [
    { part: "radicle", a: 1 }, { part: "cotyledon", a: 1 }, { part: "plumule", a: 1 }, { part: "coat", a: 0 },
    { part: "conditions", a: 0 }, { part: "conditions", a: 0 }, { part: "cotyledon", a: 0 }, { part: "seedling", a: 0 }
  ],
  actions: [
    { id: "grow", label: "grow_btn", main: true, onClick: function (api) { api.state.toggleGrow(); } },
    { id: "jars", label: "jars_btn", onClick: function (api) { api.state.nextJar(); } }
  ],

  text: {
    en: {
      tagline: "How the tiny plant inside a seed wakes up",
      intro: '<strong>A seed is a baby plant with a packed lunch!</strong> On the left, a bean seed is cut open. In the middle, a seed is planted in soil. Press "💧 Water the seed" to watch it germinate. On the right, three jars test what a seed needs: press "🧪 Check the jars".',
      ui: {
        grow_btn: "💧 Water the seed", grow_again: "↺ Plant again",
        g1: "1. The seed soaks up water and swells (imbibition). The seed coat splits.",
        g2: "2. The radicle pushes out first and grows down into the soil.",
        g3: "3. The shoot grows up towards the light, carrying the cotyledons.",
        g4: "4. The first green leaves open and start making food by photosynthesis. Germination is complete!",
        jars_btn: "🧪 Check the jars",
        jar_a: "Jar A, dry cotton: no water, so the seed does not germinate",
        jar_b: "Jar B, moist cotton in a warm room: water, air and warmth, so the seed germinates",
        jar_c: "Jar C, seed under boiled water with oil on top: no air (oxygen), so the seed does not germinate"
      },
      parts: {
        coat: { name: "Seed coat (testa)", short: "Seed coat", tag: "The protective jacket",
          what: "The seed coat is the tough outer covering of the seed. It protects the baby plant inside from damage, insects and drying out.",
          adv: "On a bean seed you can see a scar called the hilum, where the seed was attached to the pod, and a tiny hole called the micropyle, through which water enters at the start of germination. Some seed coats are so hard that they must be scratched or soaked before the seed can germinate.",
          real: "Soaking chana or moong overnight softens the seed coat, which is why soaked seeds sprout faster.",
          fact: "Some lotus seeds with very hard coats have germinated after about 1,300 years." },
        cotyledon: { name: "Cotyledons (seed leaves)", short: "Cotyledons", tag: "The packed lunch",
          what: "The cotyledons are thick seed leaves that store food. The young plant uses this food until its own green leaves can make food.",
          adv: "Plants with two cotyledons (beans, peas, mango) are dicots; plants with one cotyledon (maize, wheat, rice) are monocots. In maize and wheat, most of the food is stored in a separate tissue, the endosperm. The stored food is mainly starch, with some protein and oil; enzymes break it down to feed the growing embryo.",
          real: "The two halves of a dal grain, such as split moong or chana, are the cotyledons.",
          fact: "In some seeds, such as beans, the cotyledons come above the ground and turn green for a while." },
        radicle: { name: "Radicle", tag: "The first root",
          what: "The radicle is the baby root. It is the first part to come out of a germinating seed, and it always grows downwards.",
          adv: "Growing down towards gravity is called positive geotropism (gravitropism). The radicle comes out first so that the seedling is anchored and can absorb water and minerals before the shoot needs them. Soon it grows root hairs that greatly increase the surface for absorption.",
          real: "Even if you plant a seed upside down, the root turns and grows down.",
          fact: "Cells in the root tip contain heavy starch grains that settle at the bottom, telling the root which way is down." },
        plumule: { name: "Plumule", tag: "The baby shoot",
          what: "The plumule is the tiny shoot of the embryo. It grows up out of the soil and becomes the stem and the first leaves.",
          adv: "The plumule grows towards light (positive phototropism) and away from gravity. In beans, the stem below the cotyledons (hypocotyl) forms a hook that pulls the delicate tip up through the soil without damaging it. Together, the radicle, plumule and cotyledons make up the embryo.",
          real: "Sprouted moong in a salad shows a small white radicle and a tiny plumule.",
          fact: "Until it reaches light, the shoot of a seedling is pale yellow, because chlorophyll needs light to form." },
        seedling: { name: "Seedling", tag: "The young plant",
          what: "A seedling is the young plant that grows from a germinating seed. Once its leaves are green, it can make its own food.",
          adv: "Germination begins with imbibition: the seed absorbs water and swells. Water activates enzymes that turn stored starch into sugar, and the embryo uses this sugar in respiration to release energy for growth. Germination ends when the seedling can photosynthesise.",
          real: "Farmers grow rice seedlings in a nursery bed first and later transplant them into the flooded field.",
          fact: "A bean seed can produce a seedling with leaves in about a week." },
        conditions: { name: "Conditions for germination", short: "Conditions", tag: "Water, air and warmth",
          what: "A seed needs three things to germinate: water, air (oxygen) and warmth. Most seeds do not need light or soil to germinate.",
          adv: "Water activates the enzymes; oxygen is needed for respiration, which releases the energy; and warmth lets the enzymes work at a good speed. Boiling water removes dissolved oxygen, and a layer of oil stops air from dissolving again. Some seeds stay dormant even in good conditions until something, such as cold, fire or passing through an animal's gut, breaks the dormancy.",
          real: "Seeds stored in a dry, cool place stay alive for a long time because they cannot germinate without water.",
          fact: "The Svalbard seed vault in the Arctic stores over a million seed samples at −18 °C as a backup for the world's crops." }
      },
      quiz: [
        { q: "Which part comes out first from a germinating seed?", o: ["Plumule", "Radicle", "Leaf", "Flower"],
          why: "The radicle (baby root) comes out first and anchors the seedling." },
        { q: "Which part stores food for the young plant?", o: ["Seed coat", "Cotyledon", "Radicle", "Root hair"],
          why: "Cotyledons are seed leaves packed with stored food." },
        { q: "What does the plumule grow into?", o: ["The root", "The shoot", "The seed coat", "The fruit"],
          why: "The plumule becomes the stem and the first leaves." },
        { q: "What is the job of the seed coat?", o: ["To protect the seed", "To make food", "To absorb sunlight", "To become the root"],
          why: "The tough seed coat protects the embryo inside." },
        { q: "Which conditions does a seed need to germinate?", o: ["Water, air and warmth", "Light, soil and fertiliser", "Only light", "Cold and darkness"],
          why: "Water starts the enzymes, oxygen is needed for respiration, and warmth helps enzymes work." },
        { q: "Why does a seed under boiled water with oil on top not germinate?", o: ["It has no air (oxygen)", "It has too much light", "It has no soil", "It is too warm"],
          why: "Boiling removes the oxygen and the oil stops new air from dissolving." },
        { q: "A bean seed has two cotyledons. It is a…", o: ["dicot", "monocot", "fern", "moss"],
          why: "Dicots have two cotyledons; monocots such as maize have one." },
        { q: "What is the first step of germination, when the seed absorbs water and swells?", o: ["Imbibition", "Photosynthesis", "Pollination", "Transpiration"],
          why: "Imbibition softens the seed coat and wakes up the embryo." }
      ],
      terms: [
        { t: "Germination", d: "The process by which a seed starts to grow into a new plant." },
        { t: "Embryo", d: "The baby plant inside the seed: radicle, plumule and cotyledons." },
        { t: "Radicle", d: "The embryonic root, the first part to come out of the seed." },
        { t: "Plumule", d: "The embryonic shoot that becomes the stem and leaves." },
        { t: "Cotyledon", d: "A seed leaf that stores food for the young plant." },
        { t: "Imbibition", d: "The seed absorbing water and swelling at the start of germination." },
        { t: "Dormancy", d: "A resting stage when a seed does not germinate even in good conditions." }
      ],
      practice: [
        { q: "Plan an experiment to show that a seed needs water to germinate.", a: "Take two jars with cotton and a few seeds each, kept in the same warm place. Keep one cotton moist and the other dry. Only the seeds on moist cotton germinate." },
        { q: "Why does the radicle come out before the plumule?", a: "So the seedling is anchored and can absorb water and minerals before the shoot starts to grow." },
        { q: "Why do seedlings not need sunlight for the first few days?", a: "They use the food stored in the cotyledons until their green leaves can make food by photosynthesis." },
        { q: "Name one monocot and one dicot seed you eat.", a: "Monocot: rice, wheat or maize. Dicot: chana, moong, peas or groundnut." }
      ]
    },

    hi: {
      tagline: "बीज के अंदर का नन्हा पौधा कैसे जागता है",
      intro: '<strong>बीज टिफ़िन के साथ एक नन्हा पौधा है!</strong> बाईं ओर सेम का बीज खोलकर दिखाया गया है। बीच में मिट्टी में बोया हुआ बीज है। "💧 बीज को पानी दो" दबाकर इसे अंकुरित होते देखो। दाईं ओर तीन बरनियाँ जाँचती हैं कि बीज को क्या चाहिए: "🧪 बरनियाँ देखो" दबाओ।',
      ui: {
        grow_btn: "💧 बीज को पानी दो", grow_again: "↺ फिर से बोओ",
        g1: "1. बीज पानी सोखकर फूलता है (अंतःशोषण)। बीजावरण फट जाता है।",
        g2: "2. मूलांकुर सबसे पहले निकलता है और नीचे मिट्टी में बढ़ता है।",
        g3: "3. प्ररोह बीजपत्रों को लेकर रोशनी की ओर ऊपर बढ़ता है।",
        g4: "4. पहली हरी पत्तियाँ खुलती हैं और प्रकाश संश्लेषण से भोजन बनाने लगती हैं। अंकुरण पूरा!",
        jars_btn: "🧪 बरनियाँ देखो",
        jar_a: "बरनी A, सूखी रुई: पानी नहीं, इसलिए बीज अंकुरित नहीं होता",
        jar_b: "बरनी B, गर्म कमरे में गीली रुई: पानी, हवा और गर्मी, इसलिए बीज अंकुरित होता है",
        jar_c: "बरनी C, उबले पानी में डूबा बीज, ऊपर तेल: हवा (ऑक्सीजन) नहीं, इसलिए बीज अंकुरित नहीं होता"
      },
      parts: {
        coat: { name: "बीजावरण (टेस्टा)", short: "बीजावरण", tag: "सुरक्षा कवच",
          what: "बीजावरण बीज का सख़्त बाहरी आवरण है। यह अंदर के नन्हे पौधे को चोट, कीड़ों और सूखने से बचाता है।",
          adv: "सेम के बीज पर एक निशान दिखता है जिसे नाभिका (हाइलम) कहते हैं, जहाँ बीज फली से जुड़ा था, और एक नन्हा छेद, बीजांडद्वार (माइक्रोपाइल), जिससे अंकुरण की शुरुआत में पानी अंदर जाता है। कुछ बीजावरण इतने सख़्त होते हैं कि बीज के अंकुरित होने से पहले उन्हें खुरचना या भिगोना पड़ता है।",
          real: "चना या मूँग रात भर भिगोने से बीजावरण नरम हो जाता है, इसीलिए भीगे बीज जल्दी अंकुरित होते हैं।",
          fact: "बहुत सख़्त आवरण वाले कमल के कुछ बीज लगभग 1,300 साल बाद भी अंकुरित हुए हैं।" },
        cotyledon: { name: "बीजपत्र", tag: "टिफ़िन",
          what: "बीजपत्र मोटी बीज-पत्तियाँ हैं जो भोजन जमा रखती हैं। नन्हा पौधा यह भोजन तब तक इस्तेमाल करता है जब तक उसकी अपनी हरी पत्तियाँ भोजन न बनाने लगें।",
          adv: "दो बीजपत्र वाले पौधे (सेम, मटर, आम) द्विबीजपत्री हैं; एक बीजपत्र वाले पौधे (मक्का, गेहूँ, चावल) एकबीजपत्री हैं। मक्का और गेहूँ में ज़्यादातर भोजन एक अलग ऊतक, भ्रूणपोष, में जमा होता है। जमा भोजन मुख्यतः स्टार्च है, कुछ प्रोटीन और तेल के साथ; एंज़ाइम उसे तोड़कर बढ़ते भ्रूण को खिलाते हैं।",
          real: "दाल के दाने के दो हिस्से, जैसे धुली मूँग या चने की दाल, बीजपत्र ही हैं।",
          fact: "सेम जैसे कुछ बीजों में बीजपत्र ज़मीन के ऊपर आ जाते हैं और कुछ समय के लिए हरे हो जाते हैं।" },
        radicle: { name: "मूलांकुर", tag: "पहली जड़",
          what: "मूलांकुर नन्ही जड़ है। अंकुरित होते बीज से सबसे पहले यही निकलता है, और यह हमेशा नीचे की ओर बढ़ता है।",
          adv: "गुरुत्व की ओर नीचे बढ़ना धनात्मक गुरुत्वानुवर्तन कहलाता है। मूलांकुर पहले निकलता है ताकि पौध टिक जाए और प्ररोह को ज़रूरत पड़ने से पहले पानी और खनिज सोख सके। जल्दी ही इस पर मूलरोम निकलते हैं जो सोखने की सतह को बहुत बढ़ा देते हैं।",
          real: "बीज उल्टा बोओ तो भी जड़ मुड़कर नीचे ही बढ़ती है।",
          fact: "जड़ की नोक की कोशिकाओं में भारी स्टार्च कण नीचे बैठ जाते हैं, जिससे जड़ को पता चलता है कि नीचे कौन-सी दिशा है।" },
        plumule: { name: "प्रांकुर (प्लम्यूल)", short: "प्रांकुर", tag: "नन्हा प्ररोह",
          what: "प्रांकुर भ्रूण का नन्हा प्ररोह है। यह मिट्टी से ऊपर निकलकर तना और पहली पत्तियाँ बनता है।",
          adv: "प्रांकुर रोशनी की ओर (धनात्मक प्रकाशानुवर्तन) और गुरुत्व से दूर बढ़ता है। सेम में बीजपत्रों के नीचे का तना (बीजपत्राधार) एक हुक बनाता है जो नाज़ुक सिरे को बिना नुक़सान मिट्टी से ऊपर खींचता है। मूलांकुर, प्रांकुर और बीजपत्र मिलकर भ्रूण बनाते हैं।",
          real: "सलाद की अंकुरित मूँग में छोटा सफ़ेद मूलांकुर और नन्हा प्रांकुर दिखता है।",
          fact: "रोशनी तक पहुँचने तक पौध का प्ररोह हल्का पीला रहता है, क्योंकि पर्णहरित बनने के लिए रोशनी चाहिए।" },
        seedling: { name: "पौध (नवोद्भिद)", short: "पौध", tag: "नन्हा पौधा",
          what: "पौध वह नन्हा पौधा है जो अंकुरित बीज से बढ़ता है। पत्तियाँ हरी होते ही यह अपना भोजन ख़ुद बना सकता है।",
          adv: "अंकुरण अंतःशोषण से शुरू होता है: बीज पानी सोखकर फूलता है। पानी एंज़ाइमों को सक्रिय करता है जो जमा स्टार्च को शर्करा में बदलते हैं, और भ्रूण इस शर्करा को श्वसन में इस्तेमाल करके बढ़ने की ऊर्जा पाता है। पौध के प्रकाश संश्लेषण करने लगने पर अंकुरण पूरा होता है।",
          real: "किसान पहले नर्सरी क्यारी में धान की पौध उगाते हैं और बाद में उसे पानी भरे खेत में रोपते हैं।",
          fact: "सेम का बीज लगभग एक हफ़्ते में पत्तियों वाली पौध बना सकता है।" },
        conditions: { name: "अंकुरण की परिस्थितियाँ", short: "परिस्थितियाँ", tag: "पानी, हवा और गर्मी",
          what: "अंकुरण के लिए बीज को तीन चीज़ें चाहिए: पानी, हवा (ऑक्सीजन) और गर्मी। ज़्यादातर बीजों को अंकुरण के लिए रोशनी या मिट्टी नहीं चाहिए।",
          adv: "पानी एंज़ाइमों को सक्रिय करता है; श्वसन के लिए ऑक्सीजन चाहिए, जिससे ऊर्जा निकलती है; और गर्मी एंज़ाइमों को अच्छी गति से काम करने देती है। उबालने से पानी में घुली ऑक्सीजन निकल जाती है, और तेल की परत हवा को फिर घुलने से रोकती है। कुछ बीज अच्छी परिस्थितियों में भी सुप्त रहते हैं जब तक ठंड, आग या किसी जानवर के पेट से गुज़रना जैसी कोई चीज़ उनकी सुप्तावस्था न तोड़े।",
          real: "सूखी, ठंडी जगह रखे बीज लंबे समय तक जीवित रहते हैं क्योंकि पानी के बिना वे अंकुरित नहीं हो सकते।",
          fact: "आर्कटिक का स्वालबार्ड बीज भंडार दुनिया की फ़सलों के बैकअप के रूप में −18 °C पर दस लाख से ज़्यादा बीज नमूने रखता है।" }
      },
      quiz: [
        { q: "अंकुरित होते बीज से सबसे पहले कौन-सा भाग निकलता है?", o: ["प्रांकुर", "मूलांकुर", "पत्ती", "फूल"],
          why: "मूलांकुर (नन्ही जड़) सबसे पहले निकलकर पौध को टिकाता है।" },
        { q: "कौन-सा भाग नन्हे पौधे के लिए भोजन जमा करता है?", o: ["बीजावरण", "बीजपत्र", "मूलांकुर", "मूलरोम"],
          why: "बीजपत्र जमा भोजन से भरी बीज-पत्तियाँ हैं।" },
        { q: "प्रांकुर बढ़कर क्या बनता है?", o: ["जड़", "प्ररोह", "बीजावरण", "फल"],
          why: "प्रांकुर तना और पहली पत्तियाँ बनता है।" },
        { q: "बीजावरण का काम क्या है?", o: ["बीज की रक्षा करना", "भोजन बनाना", "धूप सोखना", "जड़ बनना"],
          why: "सख़्त बीजावरण अंदर के भ्रूण की रक्षा करता है।" },
        { q: "अंकुरण के लिए बीज को कौन-सी परिस्थितियाँ चाहिए?", o: ["पानी, हवा और गर्मी", "रोशनी, मिट्टी और खाद", "सिर्फ़ रोशनी", "ठंड और अँधेरा"],
          why: "पानी एंज़ाइम शुरू करता है, श्वसन के लिए ऑक्सीजन चाहिए, और गर्मी एंज़ाइमों की मदद करती है।" },
        { q: "उबले पानी में डूबा, ऊपर तेल वाला बीज अंकुरित क्यों नहीं होता?", o: ["उसे हवा (ऑक्सीजन) नहीं मिलती", "उसे बहुत ज़्यादा रोशनी मिलती है", "उसके पास मिट्टी नहीं है", "वह बहुत गर्म है"],
          why: "उबालने से ऑक्सीजन निकल जाती है और तेल नई हवा को घुलने नहीं देता।" },
        { q: "सेम के बीज में दो बीजपत्र होते हैं। यह है…", o: ["द्विबीजपत्री", "एकबीजपत्री", "फ़र्न", "मॉस"],
          why: "द्विबीजपत्री में दो बीजपत्र होते हैं; मक्का जैसे एकबीजपत्री में एक।" },
        { q: "अंकुरण का पहला चरण, जब बीज पानी सोखकर फूलता है, क्या कहलाता है?", o: ["अंतःशोषण", "प्रकाश संश्लेषण", "परागण", "वाष्पोत्सर्जन"],
          why: "अंतःशोषण बीजावरण को नरम करता है और भ्रूण को जगाता है।" }
      ],
      terms: [
        { t: "अंकुरण", d: "वह प्रक्रिया जिसमें बीज नए पौधे में बढ़ना शुरू करता है।" },
        { t: "भ्रूण", d: "बीज के अंदर का नन्हा पौधा: मूलांकुर, प्रांकुर और बीजपत्र।" },
        { t: "मूलांकुर", d: "भ्रूण की जड़, जो बीज से सबसे पहले निकलती है।" },
        { t: "प्रांकुर", d: "भ्रूण का प्ररोह जो तना और पत्तियाँ बनता है।" },
        { t: "बीजपत्र", d: "बीज-पत्ती जो नन्हे पौधे के लिए भोजन जमा करती है।" },
        { t: "अंतःशोषण", d: "अंकुरण की शुरुआत में बीज का पानी सोखकर फूलना।" },
        { t: "सुप्तावस्था", d: "आराम की अवस्था जिसमें बीज अच्छी परिस्थितियों में भी अंकुरित नहीं होता।" }
      ],
      practice: [
        { q: "यह दिखाने का प्रयोग बनाओ कि बीज को अंकुरण के लिए पानी चाहिए।", a: "रुई और कुछ बीजों वाली दो बरनियाँ एक ही गर्म जगह रखो। एक की रुई गीली और दूसरी की सूखी रखो। सिर्फ़ गीली रुई वाले बीज अंकुरित होते हैं।" },
        { q: "मूलांकुर प्रांकुर से पहले क्यों निकलता है?", a: "ताकि पौध टिक जाए और प्ररोह के बढ़ने से पहले पानी और खनिज सोख सके।" },
        { q: "पौध को पहले कुछ दिन धूप की ज़रूरत क्यों नहीं होती?", a: "वह बीजपत्रों में जमा भोजन इस्तेमाल करती है जब तक हरी पत्तियाँ प्रकाश संश्लेषण से भोजन न बनाने लगें।" },
        { q: "तुम्हारे खाने का एक एकबीजपत्री और एक द्विबीजपत्री बीज बताओ।", a: "एकबीजपत्री: चावल, गेहूँ या मक्का। द्विबीजपत्री: चना, मूँग, मटर या मूँगफली।" }
      ]
    },

    mr: {
      tagline: "बीजातलं छोटं रोप कसं जागं होतं",
      intro: '<strong>बी म्हणजे डबा घेऊन आलेलं छोटं रोप!</strong> डावीकडे घेवड्याचं बी कापून दाखवलं आहे. मध्यभागी मातीत पेरलेलं बी आहे. "💧 बीला पाणी द्या" दाबून ते अंकुरताना बघा. उजवीकडच्या तीन बरण्या बीला काय लागतं ते तपासतात: "🧪 बरण्या बघा" दाबा.',
      ui: {
        grow_btn: "💧 बीला पाणी द्या", grow_again: "↺ पुन्हा पेरा",
        g1: "1. बी पाणी शोषून फुगतं (अंतःशोषण). बीजावरण फाटतं.",
        g2: "2. आदिमूळ सर्वात आधी बाहेर येतं आणि खाली मातीत वाढतं.",
        g3: "3. अंकुर बीजपत्रांना घेऊन प्रकाशाकडे वर वाढतो.",
        g4: "4. पहिली हिरवी पानं उघडतात आणि प्रकाशसंश्लेषणाने अन्न बनवू लागतात. अंकुरण पूर्ण!",
        jars_btn: "🧪 बरण्या बघा",
        jar_a: "बरणी A, कोरडा कापूस: पाणी नाही, म्हणून बी रुजत नाही",
        jar_b: "बरणी B, उबदार खोलीत ओला कापूस: पाणी, हवा आणि उष्णता, म्हणून बी रुजतं",
        jar_c: "बरणी C, उकळलेल्या पाण्यात बुडलेलं बी, वर तेल: हवा (ऑक्सिजन) नाही, म्हणून बी रुजत नाही"
      },
      parts: {
        coat: { name: "बीजावरण (टेस्टा)", short: "बीजावरण", tag: "संरक्षक कवच",
          what: "बीजावरण हे बीचं कडक बाहेरचं आवरण आहे. ते आतल्या छोट्या रोपाचं इजा, कीटक आणि सुकण्यापासून रक्षण करतं.",
          adv: "घेवड्याच्या बीवर एक खूण दिसते, तिला बीजनाभी (हायलम) म्हणतात, जिथे बी शेंगेला जोडलेलं होतं, आणि एक बारीक छिद्र, बीजांडद्वार (मायक्रोपाइल), ज्यातून अंकुरणाच्या सुरुवातीला पाणी आत जातं. काही बीजावरणं इतकी कडक असतात की बी रुजण्याआधी ती खरवडावी किंवा भिजवावी लागतात.",
          real: "हरभरा किंवा मूग रात्रभर भिजवल्याने बीजावरण मऊ होतं, म्हणून भिजवलेल्या बिया लवकर मोड येतात.",
          fact: "खूप कडक आवरणाच्या कमळाच्या काही बिया सुमारे 1,300 वर्षांनंतरही रुजल्या आहेत." },
        cotyledon: { name: "बीजपत्रं", tag: "जेवणाचा डबा",
          what: "बीजपत्रं ही अन्न साठवणारी जाड बी-पानं आहेत. छोटं रोप स्वतःची हिरवी पानं अन्न बनवू लागेपर्यंत हे अन्न वापरतं.",
          adv: "दोन बीजपत्रं असलेल्या वनस्पती (घेवडा, वाटाणा, आंबा) द्विदल; एक बीजपत्र असलेल्या वनस्पती (मका, गहू, तांदूळ) एकदल. मका आणि गव्हात बहुतेक अन्न भ्रूणपोष नावाच्या वेगळ्या ऊतीत साठलेलं असतं. साठवलेलं अन्न मुख्यतः पिष्टमय पदार्थ असतं, सोबत थोडं प्रथिन आणि तेल; विकरं त्याचं विघटन करून वाढणाऱ्या गर्भाला पोसतात.",
          real: "डाळीच्या दाण्याचे दोन भाग, जसे मुगाची किंवा हरभऱ्याची डाळ, म्हणजेच बीजपत्रं.",
          fact: "घेवड्यासारख्या काही बियांमध्ये बीजपत्रं जमिनीवर येतात आणि काही काळ हिरवी होतात." },
        radicle: { name: "आदिमूळ", tag: "पहिलं मूळ",
          what: "आदिमूळ म्हणजे छोटं मूळ. रुजणाऱ्या बीतून सर्वात आधी हेच बाहेर येतं, आणि ते नेहमी खालच्या दिशेने वाढतं.",
          adv: "गुरुत्वाकडे खाली वाढणं याला धन गुरुत्वानुवर्तन म्हणतात. आदिमूळ आधी बाहेर येतं म्हणजे रोप पक्कं रोवलं जातं आणि अंकुराला गरज पडण्याआधी पाणी व खनिजं शोषू शकतं. लवकरच त्यावर मूलरोम येतात, जे शोषणाचा पृष्ठभाग खूप वाढवतात.",
          real: "बी उलटं पेरलं तरी मूळ वळून खालीच वाढतं.",
          fact: "मुळाच्या टोकातल्या पेशींमध्ये जड पिष्टकण तळाशी बसतात, त्यामुळे मुळाला खाली कोणती दिशा आहे हे कळतं." },
        plumule: { name: "आदिकोंब (प्लम्यूल)", short: "आदिकोंब", tag: "छोटा अंकुर",
          what: "आदिकोंब हा गर्भाचा छोटा अंकुर आहे. तो मातीतून वर येऊन खोड आणि पहिली पानं बनतो.",
          adv: "आदिकोंब प्रकाशाकडे (धन प्रकाशानुवर्तन) आणि गुरुत्वापासून दूर वाढतो. घेवड्यात बीजपत्रांखालचं खोड (अधराक्ष) एक आकडा बनवतं, जो नाजूक टोकाला इजा न होता मातीतून वर ओढतो. आदिमूळ, आदिकोंब आणि बीजपत्रं मिळून गर्भ बनतो.",
          real: "सॅलडमधल्या मोड आलेल्या मुगात छोटं पांढरं आदिमूळ आणि बारीक आदिकोंब दिसतो.",
          fact: "प्रकाशापर्यंत पोहोचेपर्यंत रोपाचा अंकुर फिकट पिवळा असतो, कारण हरितद्रव्य तयार होण्यासाठी प्रकाश लागतो." },
        seedling: { name: "रोपटं", tag: "लहान रोप",
          what: "रोपटं म्हणजे रुजलेल्या बीतून वाढणारं लहान रोप. पानं हिरवी झाली की ते स्वतःचं अन्न बनवू शकतं.",
          adv: "अंकुरण अंतःशोषणाने सुरू होतं: बी पाणी शोषून फुगतं. पाणी विकरांना सक्रिय करतं, ती साठलेल्या पिष्टमय पदार्थाचं साखरेत रूपांतर करतात, आणि गर्भ ही साखर श्वसनात वापरून वाढीसाठी ऊर्जा मिळवतो. रोपटं प्रकाशसंश्लेषण करू लागलं की अंकुरण पूर्ण होतं.",
          real: "शेतकरी आधी रोपवाटिकेत भाताची रोपं वाढवतात आणि नंतर पाणी भरलेल्या शेतात लावतात.",
          fact: "घेवड्याचं बी सुमारे एका आठवड्यात पानं असलेलं रोपटं बनवू शकतं." },
        conditions: { name: "अंकुरणासाठी परिस्थिती", short: "परिस्थिती", tag: "पाणी, हवा आणि उष्णता",
          what: "रुजण्यासाठी बीला तीन गोष्टी लागतात: पाणी, हवा (ऑक्सिजन) आणि उष्णता. बहुतेक बियांना रुजण्यासाठी प्रकाश किंवा माती लागत नाही.",
          adv: "पाणी विकरांना सक्रिय करतं; श्वसनासाठी ऑक्सिजन लागतो, ज्यातून ऊर्जा मिळते; आणि उष्णतेमुळे विकरं चांगल्या वेगाने काम करतात. उकळल्याने पाण्यात विरघळलेला ऑक्सिजन निघून जातो, आणि तेलाचा थर हवा पुन्हा विरघळू देत नाही. काही बिया चांगल्या परिस्थितीतही सुप्त राहतात, जोपर्यंत थंडी, आग किंवा प्राण्याच्या पोटातून जाणं अशी एखादी गोष्ट त्यांची सुप्तावस्था मोडत नाही.",
          real: "कोरड्या, थंड जागी ठेवलेल्या बिया खूप काळ जिवंत राहतात कारण पाण्याशिवाय त्या रुजू शकत नाहीत.",
          fact: "आर्क्टिकमधलं स्वालबार्ड बीज भांडार जगातल्या पिकांचा राखीव साठा म्हणून −18 °C वर दहा लाखांहून जास्त बीज नमुने ठेवतं." }
      },
      quiz: [
        { q: "रुजणाऱ्या बीतून सर्वात आधी कोणता भाग बाहेर येतो?", o: ["आदिकोंब", "आदिमूळ", "पान", "फूल"],
          why: "आदिमूळ (छोटं मूळ) सर्वात आधी बाहेर येऊन रोपाला रोवतं." },
        { q: "कोणता भाग छोट्या रोपासाठी अन्न साठवतो?", o: ["बीजावरण", "बीजपत्र", "आदिमूळ", "मूलरोम"],
          why: "बीजपत्रं ही साठवलेल्या अन्नाने भरलेली बी-पानं आहेत." },
        { q: "आदिकोंब वाढून काय बनतो?", o: ["मूळ", "अंकुर (खोड व पानं)", "बीजावरण", "फळ"],
          why: "आदिकोंब खोड आणि पहिली पानं बनतो." },
        { q: "बीजावरणाचं काम काय?", o: ["बीचं रक्षण करणं", "अन्न बनवणं", "सूर्यप्रकाश शोषणं", "मूळ बनणं"],
          why: "कडक बीजावरण आतल्या गर्भाचं रक्षण करतं." },
        { q: "रुजण्यासाठी बीला कोणती परिस्थिती लागते?", o: ["पाणी, हवा आणि उष्णता", "प्रकाश, माती आणि खत", "फक्त प्रकाश", "थंडी आणि अंधार"],
          why: "पाणी विकरं सुरू करतं, श्वसनासाठी ऑक्सिजन लागतो, आणि उष्णता विकरांना मदत करते." },
        { q: "उकळलेल्या पाण्यात बुडलेलं, वर तेल असलेलं बी का रुजत नाही?", o: ["त्याला हवा (ऑक्सिजन) मिळत नाही", "त्याला खूप प्रकाश मिळतो", "त्याच्याकडे माती नाही", "ते खूप उबदार आहे"],
          why: "उकळल्याने ऑक्सिजन निघून जातो आणि तेल नवी हवा विरघळू देत नाही." },
        { q: "घेवड्याच्या बीला दोन बीजपत्रं असतात. ते आहे…", o: ["द्विदल", "एकदल", "नेचा", "मॉस"],
          why: "द्विदलांना दोन बीजपत्रं; मक्यासारख्या एकदलांना एक." },
        { q: "अंकुरणाची पहिली पायरी, जेव्हा बी पाणी शोषून फुगतं, तिला काय म्हणतात?", o: ["अंतःशोषण", "प्रकाशसंश्लेषण", "परागण", "बाष्पोत्सर्जन"],
          why: "अंतःशोषणाने बीजावरण मऊ होतं आणि गर्भ जागा होतो." }
      ],
      terms: [
        { t: "अंकुरण", d: "बी नव्या रोपात वाढू लागण्याची प्रक्रिया." },
        { t: "गर्भ", d: "बीतलं छोटं रोप: आदिमूळ, आदिकोंब आणि बीजपत्रं." },
        { t: "आदिमूळ", d: "गर्भाचं मूळ, जे बीतून सर्वात आधी बाहेर येतं." },
        { t: "आदिकोंब", d: "गर्भाचा अंकुर, जो खोड आणि पानं बनतो." },
        { t: "बीजपत्र", d: "छोट्या रोपासाठी अन्न साठवणारं बी-पान." },
        { t: "अंतःशोषण", d: "अंकुरणाच्या सुरुवातीला बीने पाणी शोषून फुगणं." },
        { t: "सुप्तावस्था", d: "चांगल्या परिस्थितीतही बी रुजत नाही अशी विश्रांतीची अवस्था." }
      ],
      practice: [
        { q: "बीला रुजण्यासाठी पाणी लागतं हे दाखवणारा प्रयोग आखा.", a: "कापूस आणि काही बिया असलेल्या दोन बरण्या एकाच उबदार जागी ठेवा. एकातला कापूस ओला आणि दुसऱ्यातला कोरडा ठेवा. फक्त ओल्या कापसावरच्या बिया रुजतात." },
        { q: "आदिमूळ आदिकोंबाच्या आधी का बाहेर येतं?", a: "म्हणजे रोप रोवलं जातं आणि अंकुर वाढू लागण्याआधी पाणी व खनिजं शोषू शकतं." },
        { q: "रोपट्याला पहिले काही दिवस सूर्यप्रकाश का लागत नाही?", a: "हिरवी पानं प्रकाशसंश्लेषणाने अन्न बनवू लागेपर्यंत ते बीजपत्रांत साठवलेलं अन्न वापरतं." },
        { q: "तुम्ही खाता त्यातलं एक एकदल आणि एक द्विदल बी सांगा.", a: "एकदल: तांदूळ, गहू किंवा मका. द्विदल: हरभरा, मूग, वाटाणा किंवा शेंगदाणा." }
      ]
    },

    kn: {
      tagline: "ಬೀಜದೊಳಗಿನ ಪುಟ್ಟ ಸಸ್ಯ ಹೇಗೆ ಎಚ್ಚರಗೊಳ್ಳುತ್ತದೆ",
      intro: '<strong>ಬೀಜ ಎಂದರೆ ಊಟದ ಡಬ್ಬಿಯೊಂದಿಗೆ ಬಂದ ಪುಟ್ಟ ಸಸ್ಯ!</strong> ಎಡಕ್ಕೆ ಅವರೆ ಬೀಜವನ್ನು ಕತ್ತರಿಸಿ ತೋರಿಸಲಾಗಿದೆ. ನಡುವೆ ಮಣ್ಣಿನಲ್ಲಿ ಬಿತ್ತಿದ ಬೀಜವಿದೆ. "💧 ಬೀಜಕ್ಕೆ ನೀರು ಹಾಕಿ" ಒತ್ತಿ ಅದು ಮೊಳಕೆಯೊಡೆಯುವುದನ್ನು ನೋಡಿ. ಬಲಕ್ಕಿರುವ ಮೂರು ಜಾಡಿಗಳು ಬೀಜಕ್ಕೆ ಏನು ಬೇಕು ಎಂದು ಪರೀಕ್ಷಿಸುತ್ತವೆ: "🧪 ಜಾಡಿಗಳನ್ನು ನೋಡಿ" ಒತ್ತಿ.',
      ui: {
        grow_btn: "💧 ಬೀಜಕ್ಕೆ ನೀರು ಹಾಕಿ", grow_again: "↺ ಮತ್ತೆ ಬಿತ್ತಿ",
        g1: "1. ಬೀಜ ನೀರು ಹೀರಿ ಉಬ್ಬುತ್ತದೆ (ಅಂತಃಶೋಷಣೆ). ಬೀಜಕವಚ ಒಡೆಯುತ್ತದೆ.",
        g2: "2. ಭ್ರೂಣಮೂಲ ಮೊದಲು ಹೊರಬಂದು ಕೆಳಗೆ ಮಣ್ಣಿನೊಳಗೆ ಬೆಳೆಯುತ್ತದೆ.",
        g3: "3. ಕಾಂಡ ಬೀಜದಳಗಳನ್ನು ಹೊತ್ತು ಬೆಳಕಿನ ಕಡೆ ಮೇಲೆ ಬೆಳೆಯುತ್ತದೆ.",
        g4: "4. ಮೊದಲ ಹಸಿರು ಎಲೆಗಳು ತೆರೆದು ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಯಿಂದ ಆಹಾರ ತಯಾರಿಸತೊಡಗುತ್ತವೆ. ಮೊಳಕೆಯೊಡೆಯುವಿಕೆ ಪೂರ್ಣ!",
        jars_btn: "🧪 ಜಾಡಿಗಳನ್ನು ನೋಡಿ",
        jar_a: "ಜಾಡಿ A, ಒಣ ಹತ್ತಿ: ನೀರಿಲ್ಲ, ಹಾಗಾಗಿ ಬೀಜ ಮೊಳಕೆಯೊಡೆಯುವುದಿಲ್ಲ",
        jar_b: "ಜಾಡಿ B, ಬೆಚ್ಚಗಿನ ಕೋಣೆಯಲ್ಲಿ ತೇವ ಹತ್ತಿ: ನೀರು, ಗಾಳಿ ಮತ್ತು ಬಿಸುಪು, ಹಾಗಾಗಿ ಬೀಜ ಮೊಳಕೆಯೊಡೆಯುತ್ತದೆ",
        jar_c: "ಜಾಡಿ C, ಕುದಿಸಿದ ನೀರಿನಲ್ಲಿ ಮುಳುಗಿದ ಬೀಜ, ಮೇಲೆ ಎಣ್ಣೆ: ಗಾಳಿ (ಆಮ್ಲಜನಕ) ಇಲ್ಲ, ಹಾಗಾಗಿ ಬೀಜ ಮೊಳಕೆಯೊಡೆಯುವುದಿಲ್ಲ"
      },
      parts: {
        coat: { name: "ಬೀಜಕವಚ (ಟೆಸ್ಟಾ)", short: "ಬೀಜಕವಚ", tag: "ರಕ್ಷಣಾ ಕವಚ",
          what: "ಬೀಜಕವಚ ಬೀಜದ ಗಟ್ಟಿಯಾದ ಹೊರ ಹೊದಿಕೆ. ಅದು ಒಳಗಿನ ಪುಟ್ಟ ಸಸ್ಯವನ್ನು ಹಾನಿ, ಕೀಟಗಳು ಮತ್ತು ಒಣಗುವಿಕೆಯಿಂದ ರಕ್ಷಿಸುತ್ತದೆ.",
          adv: "ಅವರೆ ಬೀಜದ ಮೇಲೆ ಬೀಜನಾಭಿ (ಹೈಲಮ್) ಎಂಬ ಗುರುತು ಕಾಣುತ್ತದೆ, ಅಲ್ಲಿ ಬೀಜ ಕಾಯಿಗೆ ಅಂಟಿತ್ತು, ಮತ್ತು ಮೈಕ್ರೋಪೈಲ್ ಎಂಬ ಪುಟ್ಟ ರಂಧ್ರ, ಅದರ ಮೂಲಕ ಮೊಳಕೆಯ ಆರಂಭದಲ್ಲಿ ನೀರು ಒಳಹೋಗುತ್ತದೆ. ಕೆಲವು ಬೀಜಕವಚಗಳು ಎಷ್ಟು ಗಟ್ಟಿಯೆಂದರೆ ಬೀಜ ಮೊಳಕೆಯೊಡೆಯುವ ಮೊದಲು ಅವುಗಳನ್ನು ಕೆರೆಯಬೇಕು ಅಥವಾ ನೆನೆಸಬೇಕು.",
          real: "ಕಡಲೆ ಅಥವಾ ಹೆಸರುಕಾಳನ್ನು ರಾತ್ರಿಯಿಡೀ ನೆನೆಸಿದರೆ ಬೀಜಕವಚ ಮೃದುವಾಗುತ್ತದೆ, ಅದಕ್ಕಾಗಿಯೇ ನೆನೆಸಿದ ಬೀಜಗಳು ಬೇಗ ಮೊಳಕೆಯೊಡೆಯುತ್ತವೆ.",
          fact: "ತುಂಬಾ ಗಟ್ಟಿ ಕವಚವಿರುವ ಕೆಲವು ತಾವರೆ ಬೀಜಗಳು ಸುಮಾರು 1,300 ವರ್ಷಗಳ ನಂತರವೂ ಮೊಳಕೆಯೊಡೆದಿವೆ." },
        cotyledon: { name: "ಬೀಜದಳಗಳು", tag: "ಊಟದ ಡಬ್ಬಿ",
          what: "ಬೀಜದಳಗಳು ಆಹಾರ ಸಂಗ್ರಹಿಸುವ ದಪ್ಪ ಬೀಜ-ಎಲೆಗಳು. ತನ್ನದೇ ಹಸಿರು ಎಲೆಗಳು ಆಹಾರ ತಯಾರಿಸುವವರೆಗೆ ಪುಟ್ಟ ಸಸ್ಯ ಈ ಆಹಾರವನ್ನು ಬಳಸುತ್ತದೆ.",
          adv: "ಎರಡು ಬೀಜದಳಗಳಿರುವ ಸಸ್ಯಗಳು (ಅವರೆ, ಬಟಾಣಿ, ಮಾವು) ದ್ವಿದಳ ಸಸ್ಯಗಳು; ಒಂದು ಬೀಜದಳವಿರುವವು (ಮೆಕ್ಕೆಜೋಳ, ಗೋಧಿ, ಭತ್ತ) ಏಕದಳ ಸಸ್ಯಗಳು. ಮೆಕ್ಕೆಜೋಳ ಮತ್ತು ಗೋಧಿಯಲ್ಲಿ ಹೆಚ್ಚಿನ ಆಹಾರ ಭ್ರೂಣಪೋಷಕ ಎಂಬ ಬೇರೆ ಅಂಗಾಂಶದಲ್ಲಿ ಸಂಗ್ರಹವಾಗಿರುತ್ತದೆ. ಸಂಗ್ರಹಿತ ಆಹಾರ ಮುಖ್ಯವಾಗಿ ಪಿಷ್ಟ, ಜೊತೆಗೆ ಸ್ವಲ್ಪ ಪ್ರೋಟೀನ್ ಮತ್ತು ಎಣ್ಣೆ; ಕಿಣ್ವಗಳು ಅದನ್ನು ಒಡೆದು ಬೆಳೆಯುವ ಭ್ರೂಣಕ್ಕೆ ಉಣಿಸುತ್ತವೆ.",
          real: "ಬೇಳೆಯ ಕಾಳಿನ ಎರಡು ಭಾಗಗಳು, ಹೆಸರುಬೇಳೆ ಅಥವಾ ಕಡಲೆಬೇಳೆಯಂತೆ, ಬೀಜದಳಗಳೇ.",
          fact: "ಅವರೆಯಂತಹ ಕೆಲವು ಬೀಜಗಳಲ್ಲಿ ಬೀಜದಳಗಳು ನೆಲದ ಮೇಲೆ ಬಂದು ಸ್ವಲ್ಪ ಕಾಲ ಹಸಿರಾಗುತ್ತವೆ." },
        radicle: { name: "ಭ್ರೂಣಮೂಲ", tag: "ಮೊದಲ ಬೇರು",
          what: "ಭ್ರೂಣಮೂಲ ಪುಟ್ಟ ಬೇರು. ಮೊಳಕೆಯೊಡೆಯುವ ಬೀಜದಿಂದ ಮೊದಲು ಹೊರಬರುವುದು ಇದೇ, ಮತ್ತು ಅದು ಯಾವಾಗಲೂ ಕೆಳಮುಖವಾಗಿ ಬೆಳೆಯುತ್ತದೆ.",
          adv: "ಗುರುತ್ವದ ಕಡೆಗೆ ಕೆಳಗೆ ಬೆಳೆಯುವುದನ್ನು ಧನಾತ್ಮಕ ಗುರುತ್ವಾನುವರ್ತನೆ ಎನ್ನುತ್ತಾರೆ. ಸಸಿ ಭದ್ರವಾಗಿ ನಿಂತು ಕಾಂಡಕ್ಕೆ ಬೇಕಾಗುವ ಮೊದಲೇ ನೀರು ಮತ್ತು ಖನಿಜ ಹೀರಲೆಂದು ಭ್ರೂಣಮೂಲ ಮೊದಲು ಬರುತ್ತದೆ. ಬೇಗನೆ ಅದರ ಮೇಲೆ ಬೇರುಕೂದಲುಗಳು ಬೆಳೆದು ಹೀರುವ ಮೇಲ್ಮೈಯನ್ನು ಬಹಳ ಹೆಚ್ಚಿಸುತ್ತವೆ.",
          real: "ಬೀಜವನ್ನು ತಲೆಕೆಳಗಾಗಿ ಬಿತ್ತಿದರೂ ಬೇರು ತಿರುಗಿ ಕೆಳಕ್ಕೇ ಬೆಳೆಯುತ್ತದೆ.",
          fact: "ಬೇರಿನ ತುದಿಯ ಕೋಶಗಳಲ್ಲಿ ಭಾರದ ಪಿಷ್ಟ ಕಣಗಳು ಕೆಳಗೆ ಕೂರುತ್ತವೆ, ಇದರಿಂದ ಬೇರಿಗೆ ಕೆಳಗೆ ಯಾವ ದಿಕ್ಕು ಎಂದು ತಿಳಿಯುತ್ತದೆ." },
        plumule: { name: "ಭ್ರೂಣಾಂಕುರ (ಪ್ಲುಮ್ಯೂಲ್)", short: "ಭ್ರೂಣಾಂಕುರ", tag: "ಪುಟ್ಟ ಕಾಂಡ",
          what: "ಭ್ರೂಣಾಂಕುರ ಭ್ರೂಣದ ಪುಟ್ಟ ಕಾಂಡ. ಅದು ಮಣ್ಣಿನಿಂದ ಮೇಲೆ ಬೆಳೆದು ಕಾಂಡ ಮತ್ತು ಮೊದಲ ಎಲೆಗಳಾಗುತ್ತದೆ.",
          adv: "ಭ್ರೂಣಾಂಕುರ ಬೆಳಕಿನ ಕಡೆಗೆ (ಧನಾತ್ಮಕ ದ್ಯುತಿಅನುವರ್ತನೆ) ಮತ್ತು ಗುರುತ್ವದಿಂದ ದೂರ ಬೆಳೆಯುತ್ತದೆ. ಅವರೆಯಲ್ಲಿ ಬೀಜದಳಗಳ ಕೆಳಗಿನ ಕಾಂಡ (ಹೈಪೋಕಾಟಿಲ್) ಕೊಕ್ಕೆಯಂತೆ ಬಾಗಿ ನಾಜೂಕಾದ ತುದಿಯನ್ನು ಹಾನಿಯಿಲ್ಲದೆ ಮಣ್ಣಿನಿಂದ ಮೇಲೆಳೆಯುತ್ತದೆ. ಭ್ರೂಣಮೂಲ, ಭ್ರೂಣಾಂಕುರ ಮತ್ತು ಬೀಜದಳಗಳು ಸೇರಿ ಭ್ರೂಣವಾಗುತ್ತದೆ.",
          real: "ಸಲಾಡಿನ ಮೊಳಕೆ ಹೆಸರುಕಾಳಿನಲ್ಲಿ ಸಣ್ಣ ಬಿಳಿ ಭ್ರೂಣಮೂಲ ಮತ್ತು ಪುಟ್ಟ ಭ್ರೂಣಾಂಕುರ ಕಾಣುತ್ತದೆ.",
          fact: "ಬೆಳಕನ್ನು ತಲುಪುವವರೆಗೆ ಸಸಿಯ ಕಾಂಡ ತಿಳಿ ಹಳದಿಯಾಗಿರುತ್ತದೆ, ಏಕೆಂದರೆ ಪತ್ರಹರಿತ್ತು ತಯಾರಾಗಲು ಬೆಳಕು ಬೇಕು." },
        seedling: { name: "ಸಸಿ", tag: "ಎಳೆಯ ಸಸ್ಯ",
          what: "ಸಸಿ ಮೊಳಕೆಯೊಡೆದ ಬೀಜದಿಂದ ಬೆಳೆಯುವ ಎಳೆಯ ಸಸ್ಯ. ಎಲೆಗಳು ಹಸಿರಾದ ಕೂಡಲೇ ಅದು ತನ್ನ ಆಹಾರ ತಾನೇ ತಯಾರಿಸಬಲ್ಲದು.",
          adv: "ಮೊಳಕೆಯೊಡೆಯುವಿಕೆ ಅಂತಃಶೋಷಣೆಯಿಂದ ಶುರು: ಬೀಜ ನೀರು ಹೀರಿ ಉಬ್ಬುತ್ತದೆ. ನೀರು ಕಿಣ್ವಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ, ಅವು ಸಂಗ್ರಹಿತ ಪಿಷ್ಟವನ್ನು ಸಕ್ಕರೆಯಾಗಿಸುತ್ತವೆ, ಮತ್ತು ಭ್ರೂಣ ಈ ಸಕ್ಕರೆಯನ್ನು ಶ್ವಸನದಲ್ಲಿ ಬಳಸಿ ಬೆಳವಣಿಗೆಗೆ ಶಕ್ತಿ ಪಡೆಯುತ್ತದೆ. ಸಸಿ ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ ಮಾಡತೊಡಗಿದಾಗ ಮೊಳಕೆಯೊಡೆಯುವಿಕೆ ಮುಗಿಯುತ್ತದೆ.",
          real: "ರೈತರು ಮೊದಲು ಸಸಿಮಡಿಯಲ್ಲಿ ಭತ್ತದ ಸಸಿಗಳನ್ನು ಬೆಳೆಸಿ ನಂತರ ನೀರು ತುಂಬಿದ ಗದ್ದೆಗೆ ನಾಟಿ ಮಾಡುತ್ತಾರೆ.",
          fact: "ಅವರೆ ಬೀಜ ಸುಮಾರು ಒಂದು ವಾರದಲ್ಲಿ ಎಲೆಗಳಿರುವ ಸಸಿಯಾಗಬಲ್ಲದು." },
        conditions: { name: "ಮೊಳಕೆಯೊಡೆಯಲು ಬೇಕಾದ ಸ್ಥಿತಿಗಳು", short: "ಸ್ಥಿತಿಗಳು", tag: "ನೀರು, ಗಾಳಿ ಮತ್ತು ಬಿಸುಪು",
          what: "ಮೊಳಕೆಯೊಡೆಯಲು ಬೀಜಕ್ಕೆ ಮೂರು ವಸ್ತುಗಳು ಬೇಕು: ನೀರು, ಗಾಳಿ (ಆಮ್ಲಜನಕ) ಮತ್ತು ಬಿಸುಪು. ಹೆಚ್ಚಿನ ಬೀಜಗಳಿಗೆ ಮೊಳಕೆಯೊಡೆಯಲು ಬೆಳಕು ಅಥವಾ ಮಣ್ಣು ಬೇಕಿಲ್ಲ.",
          adv: "ನೀರು ಕಿಣ್ವಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ; ಶಕ್ತಿ ಬಿಡುಗಡೆ ಮಾಡುವ ಶ್ವಸನಕ್ಕೆ ಆಮ್ಲಜನಕ ಬೇಕು; ಮತ್ತು ಬಿಸುಪು ಕಿಣ್ವಗಳು ಉತ್ತಮ ವೇಗದಲ್ಲಿ ಕೆಲಸ ಮಾಡಲು ಬಿಡುತ್ತದೆ. ಕುದಿಸುವುದರಿಂದ ನೀರಿನಲ್ಲಿ ಕರಗಿದ ಆಮ್ಲಜನಕ ಹೊರಹೋಗುತ್ತದೆ, ಮತ್ತು ಎಣ್ಣೆಯ ಪದರ ಗಾಳಿ ಮತ್ತೆ ಕರಗದಂತೆ ತಡೆಯುತ್ತದೆ. ಕೆಲವು ಬೀಜಗಳು ಉತ್ತಮ ಸ್ಥಿತಿಯಲ್ಲೂ ಸುಪ್ತವಾಗಿರುತ್ತವೆ, ಚಳಿ, ಬೆಂಕಿ ಅಥವಾ ಪ್ರಾಣಿಯ ಹೊಟ್ಟೆಯ ಮೂಲಕ ಹಾದುಹೋಗುವಂತಹ ಏನಾದರೂ ಸುಪ್ತಾವಸ್ಥೆಯನ್ನು ಮುರಿಯುವವರೆಗೆ.",
          real: "ಒಣ, ತಂಪಾದ ಜಾಗದಲ್ಲಿಟ್ಟ ಬೀಜಗಳು ಬಹಳ ಕಾಲ ಜೀವಂತವಾಗಿರುತ್ತವೆ, ಏಕೆಂದರೆ ನೀರಿಲ್ಲದೆ ಅವು ಮೊಳಕೆಯೊಡೆಯಲಾರವು.",
          fact: "ಆರ್ಕ್ಟಿಕ್‌ನ ಸ್ವಾಲ್ಬಾರ್ಡ್ ಬೀಜ ಭಂಡಾರ ಪ್ರಪಂಚದ ಬೆಳೆಗಳ ಬ್ಯಾಕಪ್ ಆಗಿ −18 °C ನಲ್ಲಿ ಹತ್ತು ಲಕ್ಷಕ್ಕಿಂತ ಹೆಚ್ಚು ಬೀಜ ಮಾದರಿಗಳನ್ನು ಇಟ್ಟಿದೆ." }
      },
      quiz: [
        { q: "ಮೊಳಕೆಯೊಡೆಯುವ ಬೀಜದಿಂದ ಮೊದಲು ಯಾವ ಭಾಗ ಹೊರಬರುತ್ತದೆ?", o: ["ಭ್ರೂಣಾಂಕುರ", "ಭ್ರೂಣಮೂಲ", "ಎಲೆ", "ಹೂವು"],
          why: "ಭ್ರೂಣಮೂಲ (ಪುಟ್ಟ ಬೇರು) ಮೊದಲು ಹೊರಬಂದು ಸಸಿಯನ್ನು ಭದ್ರಗೊಳಿಸುತ್ತದೆ." },
        { q: "ಯಾವ ಭಾಗ ಎಳೆಯ ಸಸ್ಯಕ್ಕೆ ಆಹಾರ ಸಂಗ್ರಹಿಸುತ್ತದೆ?", o: ["ಬೀಜಕವಚ", "ಬೀಜದಳ", "ಭ್ರೂಣಮೂಲ", "ಬೇರುಕೂದಲು"],
          why: "ಬೀಜದಳಗಳು ಸಂಗ್ರಹಿತ ಆಹಾರದಿಂದ ತುಂಬಿದ ಬೀಜ-ಎಲೆಗಳು." },
        { q: "ಭ್ರೂಣಾಂಕುರ ಬೆಳೆದು ಏನಾಗುತ್ತದೆ?", o: ["ಬೇರು", "ಕಾಂಡ ಮತ್ತು ಎಲೆಗಳು", "ಬೀಜಕವಚ", "ಹಣ್ಣು"],
          why: "ಭ್ರೂಣಾಂಕುರ ಕಾಂಡ ಮತ್ತು ಮೊದಲ ಎಲೆಗಳಾಗುತ್ತದೆ." },
        { q: "ಬೀಜಕವಚದ ಕೆಲಸ ಏನು?", o: ["ಬೀಜವನ್ನು ರಕ್ಷಿಸುವುದು", "ಆಹಾರ ತಯಾರಿಸುವುದು", "ಸೂರ್ಯನ ಬೆಳಕು ಹೀರುವುದು", "ಬೇರಾಗುವುದು"],
          why: "ಗಟ್ಟಿ ಬೀಜಕವಚ ಒಳಗಿನ ಭ್ರೂಣವನ್ನು ರಕ್ಷಿಸುತ್ತದೆ." },
        { q: "ಮೊಳಕೆಯೊಡೆಯಲು ಬೀಜಕ್ಕೆ ಯಾವ ಸ್ಥಿತಿಗಳು ಬೇಕು?", o: ["ನೀರು, ಗಾಳಿ ಮತ್ತು ಬಿಸುಪು", "ಬೆಳಕು, ಮಣ್ಣು ಮತ್ತು ಗೊಬ್ಬರ", "ಬೆಳಕು ಮಾತ್ರ", "ಚಳಿ ಮತ್ತು ಕತ್ತಲೆ"],
          why: "ನೀರು ಕಿಣ್ವಗಳನ್ನು ಶುರು ಮಾಡುತ್ತದೆ, ಶ್ವಸನಕ್ಕೆ ಆಮ್ಲಜನಕ ಬೇಕು, ಮತ್ತು ಬಿಸುಪು ಕಿಣ್ವಗಳಿಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ." },
        { q: "ಕುದಿಸಿದ ನೀರಿನಲ್ಲಿ ಮುಳುಗಿ ಮೇಲೆ ಎಣ್ಣೆಯಿರುವ ಬೀಜ ಏಕೆ ಮೊಳಕೆಯೊಡೆಯುವುದಿಲ್ಲ?", o: ["ಅದಕ್ಕೆ ಗಾಳಿ (ಆಮ್ಲಜನಕ) ಇಲ್ಲ", "ಅದಕ್ಕೆ ಅತಿ ಹೆಚ್ಚು ಬೆಳಕು", "ಅದಕ್ಕೆ ಮಣ್ಣಿಲ್ಲ", "ಅದು ತುಂಬಾ ಬಿಸಿ"],
          why: "ಕುದಿಸುವುದರಿಂದ ಆಮ್ಲಜನಕ ಹೊರಹೋಗುತ್ತದೆ ಮತ್ತು ಎಣ್ಣೆ ಹೊಸ ಗಾಳಿ ಕರಗದಂತೆ ತಡೆಯುತ್ತದೆ." },
        { q: "ಅವರೆ ಬೀಜಕ್ಕೆ ಎರಡು ಬೀಜದಳಗಳಿವೆ. ಅದು…", o: ["ದ್ವಿದಳ", "ಏಕದಳ", "ಜರೀಗಿಡ", "ಪಾಚಿ (ಮಾಸ್)"],
          why: "ದ್ವಿದಳಗಳಿಗೆ ಎರಡು ಬೀಜದಳ; ಮೆಕ್ಕೆಜೋಳದಂತಹ ಏಕದಳಗಳಿಗೆ ಒಂದು." },
        { q: "ಬೀಜ ನೀರು ಹೀರಿ ಉಬ್ಬುವ ಮೊಳಕೆಯ ಮೊದಲ ಹಂತವನ್ನು ಏನೆನ್ನುತ್ತಾರೆ?", o: ["ಅಂತಃಶೋಷಣೆ", "ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ", "ಪರಾಗಸ್ಪರ್ಶ", "ಬಾಷ್ಪವಿಸರ್ಜನೆ"],
          why: "ಅಂತಃಶೋಷಣೆ ಬೀಜಕವಚವನ್ನು ಮೃದುಗೊಳಿಸಿ ಭ್ರೂಣವನ್ನು ಎಬ್ಬಿಸುತ್ತದೆ." }
      ],
      terms: [
        { t: "ಮೊಳಕೆಯೊಡೆಯುವಿಕೆ", d: "ಬೀಜ ಹೊಸ ಸಸ್ಯವಾಗಿ ಬೆಳೆಯಲು ಶುರುವಾಗುವ ಪ್ರಕ್ರಿಯೆ." },
        { t: "ಭ್ರೂಣ", d: "ಬೀಜದೊಳಗಿನ ಪುಟ್ಟ ಸಸ್ಯ: ಭ್ರೂಣಮೂಲ, ಭ್ರೂಣಾಂಕುರ ಮತ್ತು ಬೀಜದಳಗಳು." },
        { t: "ಭ್ರೂಣಮೂಲ", d: "ಬೀಜದಿಂದ ಮೊದಲು ಹೊರಬರುವ ಭ್ರೂಣದ ಬೇರು." },
        { t: "ಭ್ರೂಣಾಂಕುರ", d: "ಕಾಂಡ ಮತ್ತು ಎಲೆಗಳಾಗುವ ಭ್ರೂಣದ ಕಾಂಡ." },
        { t: "ಬೀಜದಳ", d: "ಎಳೆಯ ಸಸ್ಯಕ್ಕೆ ಆಹಾರ ಸಂಗ್ರಹಿಸುವ ಬೀಜ-ಎಲೆ." },
        { t: "ಅಂತಃಶೋಷಣೆ", d: "ಮೊಳಕೆಯ ಆರಂಭದಲ್ಲಿ ಬೀಜ ನೀರು ಹೀರಿ ಉಬ್ಬುವುದು." },
        { t: "ಸುಪ್ತಾವಸ್ಥೆ", d: "ಉತ್ತಮ ಸ್ಥಿತಿಯಲ್ಲೂ ಬೀಜ ಮೊಳಕೆಯೊಡೆಯದ ವಿಶ್ರಾಂತಿ ಹಂತ." }
      ],
      practice: [
        { q: "ಮೊಳಕೆಯೊಡೆಯಲು ಬೀಜಕ್ಕೆ ನೀರು ಬೇಕೆಂದು ತೋರಿಸುವ ಪ್ರಯೋಗ ರೂಪಿಸಿ.", a: "ಹತ್ತಿ ಮತ್ತು ಕೆಲವು ಬೀಜಗಳಿರುವ ಎರಡು ಜಾಡಿಗಳನ್ನು ಒಂದೇ ಬೆಚ್ಚಗಿನ ಜಾಗದಲ್ಲಿಡಿ. ಒಂದರ ಹತ್ತಿಯನ್ನು ತೇವವಾಗಿ, ಇನ್ನೊಂದನ್ನು ಒಣಗಿ ಇಡಿ. ತೇವ ಹತ್ತಿಯ ಮೇಲಿನ ಬೀಜಗಳು ಮಾತ್ರ ಮೊಳಕೆಯೊಡೆಯುತ್ತವೆ." },
        { q: "ಭ್ರೂಣಮೂಲ ಭ್ರೂಣಾಂಕುರಕ್ಕಿಂತ ಮೊದಲು ಏಕೆ ಹೊರಬರುತ್ತದೆ?", a: "ಸಸಿ ಭದ್ರವಾಗಿ ನಿಂತು ಕಾಂಡ ಬೆಳೆಯುವ ಮೊದಲೇ ನೀರು ಮತ್ತು ಖನಿಜ ಹೀರಲು." },
        { q: "ಸಸಿಗಳಿಗೆ ಮೊದಲ ಕೆಲವು ದಿನ ಸೂರ್ಯನ ಬೆಳಕು ಏಕೆ ಬೇಕಿಲ್ಲ?", a: "ಹಸಿರು ಎಲೆಗಳು ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಯಿಂದ ಆಹಾರ ತಯಾರಿಸುವವರೆಗೆ ಅವು ಬೀಜದಳಗಳ ಸಂಗ್ರಹಿತ ಆಹಾರ ಬಳಸುತ್ತವೆ." },
        { q: "ನೀವು ತಿನ್ನುವ ಒಂದು ಏಕದಳ ಮತ್ತು ಒಂದು ದ್ವಿದಳ ಬೀಜವನ್ನು ಹೆಸರಿಸಿ.", a: "ಏಕದಳ: ಅಕ್ಕಿ, ಗೋಧಿ ಅಥವಾ ಮೆಕ್ಕೆಜೋಳ. ದ್ವಿದಳ: ಕಡಲೆ, ಹೆಸರುಕಾಳು, ಬಟಾಣಿ ಅಥವಾ ಕಡಲೆಕಾಯಿ." }
      ]
    }
  },

  build: function (api) {
    var THREE = api.THREE, mat = api.mat, K = TL.bioKit(api), V = K.V;
    var s = api.state;
    s.K = K;

    /* ---------- Baayein: bada kata hua sem ka beej ---------- */
    var BX = -3.6, BY = 1.4;
    /* aadha beej: peeche ka khol (beejavaran) + andar beejpatra, kata hua chehra saamne */
    var coatM = mat(0x8a4a2a, { rough: 0.5 });
    coatM.side = THREE.DoubleSide;
    var coat = new THREE.Mesh(new THREE.SphereGeometry(1, 40, 28, Math.PI, Math.PI), coatM);
    coat.scale.set(1.35, 0.9, 0.75);
    var coatG = new THREE.Group(); coatG.add(coat);
    var rim = api.torus(1, 0.05, mat(0x6a3418, { rough: 0.5 }), 0, 0, 0);
    rim.scale.set(1.35, 0.9, 1);
    coatG.add(rim);
    coatG.add(api.sphere(0.12, mat(0xf0e0b0, { rough: 0.6 }), 0, -0.86, -0.1, 10));      // naabhi (hilum)
    api.addPart("coat", coatG, V(BX, BY, 0), null, { pickBehind: 2, label: V(-1.2, 0.7, 0) });
    var cot = new THREE.Group(), cotM = mat(0xf2e2a8, { rough: 0.6 });
    cotM.side = THREE.DoubleSide;
    var inner = new THREE.Mesh(new THREE.SphereGeometry(1, 36, 24, Math.PI, Math.PI), cotM);
    inner.scale.set(1.27, 0.83, 0.66);
    cot.add(inner);
    var face = new THREE.Mesh(new THREE.CircleGeometry(1, 40), mat(0xf8ecc0, { rough: 0.7 }));
    face.scale.set(1.27, 0.83, 1);
    cot.add(face);
    api.addPart("cotyledon", cot, V(BX, BY, 0), null, { pickBehind: 1, label: V(0.6, 0.5, 0.05) });
    var rad = new THREE.Group();
    var rc = api.cyl(0.13, 0.03, 0.5, mat(0xf8f0d8, { rough: 0.5 }), 0, 0, 0, 12);
    rad.add(rc);
    rad.rotation.z = -0.5;
    api.addPart("radicle", rad, V(BX - 0.2, BY - 0.55, 0.08), null, { label: V(-0.2, -0.3, 0) });
    var plu = new THREE.Group(), pM = mat(0xc8e070, { rough: 0.5 });
    plu.add(api.cyl(0.05, 0.06, 0.25, pM, 0, 0, 0, 8));
    [-1, 1].forEach(function (sd) { var l = K.blob(0.08, pM, 0.6, 1.6, 0.4, 8); l.position.set(sd * 0.06, 0.18, 0); l.rotation.z = -sd * 0.5; plu.add(l); });
    api.addPart("plumule", plu, V(BX + 0.0, BY - 0.2, 0.08), null, { label: V(0.3, 0.3, 0) });

    /* ---------- Beech: gamle me ugta beej ---------- */
    var PX = 0.6, PY = -1.0;
    var pot = api.cyl(1.3, 1.0, 1.6, mat(0xc0603a, { rough: 0.7 }), PX, PY - 0.8, 0, 32);
    pot.material.transparent = true; pot.material.opacity = 0.35; pot.material.depthWrite = false;
    api.decor(pot);
    var soil = api.cyl(1.27, 1.27, 0.05, mat(0x5a3a22, { rough: 0.95 }), PX, PY, 0, 32);
    api.decor(soil);
    var sd = new THREE.Group();
    sd.position.set(PX, PY, 0);
    s.seedBall = K.blob(0.2, mat(0x8a4a2a, { rough: 0.5 }), 1.3, 0.9, 0.8, 16);
    s.seedBall.position.y = -0.4;
    sd.add(s.seedBall);
    /* jad: upar se neeche (pivot upar) */
    var rootM = mat(0xf2ecd8, { rough: 0.6 });
    s.root = new THREE.Group(); s.root.position.y = -0.45;
    var rm = api.cyl(0.05, 0.015, 1.0, rootM, 0, -0.5, 0, 8);
    s.root.add(rm);
    for (var i = 0; i < 8; i++) {
      var y = -0.4 - i * 0.07, a = i * 2.3;
      s.root.add(api.rod(V(0, y, 0), V(Math.cos(a) * 0.12, y - 0.04, Math.sin(a) * 0.12), 0.006, rootM));
    }
    sd.add(s.root);
    /* tana (pivot neeche) */
    var stemM = mat(0x8ac04a, { rough: 0.5 });
    s.stem = new THREE.Group(); s.stem.position.y = -0.35;
    s.stem.add(api.cyl(0.05, 0.06, 1.0, stemM, 0, 0.5, 0, 10));
    sd.add(s.stem);
    /* upar: beejpatra + pehli pattiyan */
    s.top = new THREE.Group();
    var cM = mat(0xb8d860, { rough: 0.5 });
    [-1, 1].forEach(function (k) { var c = K.blob(0.16, cM, 1.3, 0.5, 0.9, 12); c.position.set(k * 0.2, 0, 0); s.top.add(c); });
    s.leaves = new THREE.Group();
    var lM = mat(0x3faa3a, { rough: 0.5 });
    [-1, 1].forEach(function (k) {
      var lf = K.leaf(0.55, 0.32, lM);
      lf.rotation.set(0.3, k > 0 ? 0 : Math.PI, 0.5);
      lf.position.y = 0.25;
      s.leaves.add(lf);
    });
    s.leaves.add(api.cyl(0.025, 0.03, 0.25, stemM, 0, 0.12, 0, 6));
    s.top.add(s.leaves);
    sd.add(s.top);
    api.addPart("seedling", sd, null, null, { label: V(0.6, 1.0, 0) });
    api.decor(sd);

    /* ---------- Daayein: teen barniyaan ---------- */
    var JX = 4.4, JY = 0.2;
    var jars = new THREE.Group();
    var glass = mat(0xdff0ff, { rough: 0.1, opacity: 0.3 });
    glass.depthWrite = false;
    s.jarPos = [];
    ["a", "b", "c"].forEach(function (k, j) {
      var x = (j - 1) * 1.15;
      jars.add(api.cyl(0.42, 0.42, 1.3, glass, x, 0, 0, 24));
      if (k === "c") {
        jars.add(api.cyl(0.4, 0.4, 0.9, mat(0x8ac0f0, { rough: 0.2, opacity: 0.55 }), x, -0.2, 0, 20));
        jars.add(api.cyl(0.4, 0.4, 0.06, mat(0xf0d040, { rough: 0.2 }), x, 0.28, 0, 20));
      } else {
        jars.add(api.cyl(0.38, 0.38, 0.2, mat(k === "a" ? 0xf8f8f4 : 0xdce8f0, { rough: 0.9 }), x, -0.52, 0, 20));
      }
      jars.add(K.blob(0.1, mat(0x8a4a2a, { rough: 0.5 }), 1.3, 0.9, 0.8, 10));
      jars.children[jars.children.length - 1].position.set(x, k === "c" ? -0.5 : -0.36, 0.1);
      if (k === "b") {
        jars.add(api.cyl(0.02, 0.02, 0.5, stemM, x, -0.1, 0.1, 6));
        jars.add(K.blob(0.07, cM, 1.4, 0.5, 0.9, 8));
        jars.children[jars.children.length - 1].position.set(x, 0.16, 0.1);
        jars.add(api.rod(V(x, -0.4, 0.1), V(x + 0.05, -0.62, 0.15), 0.012, rootM));
      }
      s.jarPos.push(x);
    });
    s.jarMark = api.cyl(0.0, 0.12, 0.25, mat(0xff5a3c, { glow: 0xff5a3c, glowLevel: 0.6 }), 0, 0, 0, 10);
    s.jarMark.rotation.z = Math.PI;
    s.jarMark.visible = false;
    jars.add(s.jarMark);
    api.addPart("conditions", jars, V(JX, JY, 0), null, { label: V(0, 1.0, 0) });

    s.g = 0;
    s.growing = false;
    s.shown = 0;
    s.toggleGrow = function () {
      if (s.growing || s.g >= 1) {
        s.growing = false; s.g = 0; s.shown = 0;
        api.setButton("grow", "grow_btn");
        api.setStatus(null);
        return;
      }
      s.growing = true;
      api.select("seedling");
      api.setButton("grow", "grow_again");
    };
    s.jar = -1;
    s.nextJar = function () {
      s.jar = (s.jar + 1) % 3;
      s.jarMark.visible = true;
      s.jarMark.position.set(s.jarPos[s.jar], 1.0, 0);
      api.select("conditions");
      api.setStatus("jar_" + "abc".charAt(s.jar), 9000);
    };
  },

  update: function (api, dt, t) {
    var s = api.state;
    s.K.update(dt);
    if (s.growing && s.g < 1) s.g = Math.min(1, s.g + dt / (api.reduceMotion ? 3 : 10));
    var g = s.g;
    function seg(a, b) { return Math.max(0, Math.min(1, (g - a) / (b - a))); }
    /* 0-0.15 phoolna, 0.15-0.45 jad, 0.35-0.75 tana, 0.7-1 pattiyan */
    var swell = 1 + 0.25 * seg(0, 0.15);
    s.seedBall.scale.set(1.3 * swell, 0.9 * swell, 0.8 * swell);
    var r = Math.max(0.001, seg(0.15, 0.5));
    s.root.scale.set(1, r, 1);
    var st = seg(0.35, 0.75);
    s.stem.scale.set(1, Math.max(0.001, st * 1.3), 1);
    s.top.position.y = -0.35 + 1.3 * st;
    s.top.visible = st > 0.02;
    s.top.scale.setScalar(0.4 + 0.6 * st);
    var lv = seg(0.7, 1);
    s.leaves.scale.setScalar(Math.max(0.001, lv));
    var stage = g <= 0 ? 0 : g < 0.15 ? 1 : g < 0.4 ? 2 : g < 0.75 ? 3 : g >= 1 ? 4 : 3;
    if (s.growing && stage > s.shown) { s.shown = stage; api.setStatus("g" + stage, 6000); }
    if (s.jarMark.visible && !api.reduceMotion) s.jarMark.position.y = 1.0 + Math.sin(t * 4) * 0.08;
  }
});
