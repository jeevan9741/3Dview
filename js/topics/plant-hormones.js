/* Topic: Plant hormones (Botany, advanced) */
TL.start({
  id: "plant-hormones",
  camera: { theta: 0.0, phi: 1.3, radius: 15, target: [0, 1.0, 0], min: 6, max: 28 },
  autoRotate: false,
  labels: true,
  order: ["auxin", "gravitropism", "gibberellin", "cytokinin", "ethylene", "abscisic"],
  parts: {
    auxin: { emoji: "💡" }, gravitropism: { emoji: "🧲" }, gibberellin: { emoji: "📏" },
    cytokinin: { emoji: "🌿" }, ethylene: { emoji: "🍌" }, abscisic: { emoji: "🍂" }
  },
  quiz: [
    { part: "auxin", a: 0 }, { part: "auxin", a: 0 }, { part: "auxin", a: 0 }, { part: "gravitropism", a: 0 },
    { part: "gibberellin", a: 0 }, { part: "ethylene", a: 0 }, { part: "abscisic", a: 0 }, { part: "cytokinin", a: 0 }
  ],
  actions: [
    { id: "light", label: "light_btn", main: true, onClick: function (api) { api.state.toggleLight(); } },
    { id: "ripen", label: "ripen_btn", onClick: function (api) { api.state.toggleRipen(); } }
  ],

  text: {
    en: {
      tagline: "How auxin bends a plant towards light",
      intro: '<strong>Plants cannot walk, but they can turn, grow and change.</strong> Chemical messengers called plant hormones control this. Each box here shows one hormone at work. Press "💡 Light from one side" to watch a seedling bend towards the lamp, and "🍌 Ripen the bananas" to see a gas hormone at work.',
      ui: {
        light_btn: "💡 Light from one side", light_off: "💡 Light from above",
        light_on: "Auxin (yellow dots) moves to the shaded side. Cells there grow longer, so the shoot bends towards the light: phototropism.",
        light_top: "Light from above: auxin is spread evenly, so the shoot grows straight up.",
        ripen_btn: "🍌 Ripen the bananas", unripe_btn: "↺ New green bananas",
        ripen_on: "The ripe apple gives off ethylene gas, which makes the bananas ripen: green → yellow, hard → soft, sour → sweet."
      },
      parts: {
        auxin: { name: "Auxin and phototropism", short: "Auxin", tag: "Bending towards light",
          what: "Auxin is a plant hormone made in the shoot tip. When light comes from one side, auxin moves to the shaded side, those cells grow longer, and the shoot bends towards the light.",
          adv: "Growth in response to light is phototropism; shoots are positively phototropic. Auxin makes shoot cells elongate. Charles Darwin and his son showed in 1880 that covering the tip of a grass seedling stopped it bending, so the signal comes from the tip. Synthetic auxins are used as rooting powder and as selective weedkillers.",
          real: "House plants on a windowsill lean towards the window; turning the pot keeps them straight.",
          fact: "Sunflower buds track the Sun from east to west during the day." },
        gravitropism: { name: "Gravitropism", tag: "Roots down, shoots up",
          what: "Roots grow down towards gravity and shoots grow up away from it, whichever way the seed lies. This response to gravity is called gravitropism (geotropism).",
          adv: "In a seed lying on its side, auxin collects on the lower side of both root and shoot. In the shoot, extra auxin speeds up growth, so the shoot bends up. In the root, the same amount of auxin slows growth, so the root bends down. Plants also respond to touch (thigmotropism) and water (hydrotropism).",
          real: "Seeds sown any way up in a field still send roots down and shoots up.",
          fact: "On the International Space Station, seedlings grow in all directions unless light guides them." },
        gibberellin: { name: "Gibberellins", tag: "The stretch hormone",
          what: "Gibberellins make stems grow taller and help seeds germinate. A dwarf plant sprayed with gibberellin can grow as tall as a normal one.",
          adv: "Gibberellins cause stem cells to elongate and divide, break seed dormancy by switching on enzymes that release stored food, and make fruits grow larger. The modern dwarf wheat and rice of the Green Revolution have changes in gibberellin signalling, so they stay short and do not fall over under heavy grain.",
          real: "Grape growers spray gibberellins to get bigger, longer bunches of seedless grapes.",
          fact: "Gibberellin was discovered in Japan from a fungus that made rice seedlings grow so tall they fell over: 'foolish seedling' disease." },
        cytokinin: { name: "Cytokinins", tag: "The cell division hormone",
          what: "Cytokinins make cells divide and help side buds grow into branches, giving a bushy plant. They also keep leaves green for longer.",
          adv: "Cytokinins are made mostly in roots and move up in the xylem. The balance of auxin (from the shoot tip) and cytokinin (from the roots) decides branching: the tip's auxin holds side buds back (apical dominance), while cytokinin pushes them to grow. In tissue culture, the right auxin–cytokinin mix makes a lump of cells form shoots or roots.",
          real: "Pinching off the tip of a tulsi or mint plant makes it grow more side branches and become bushier.",
          fact: "Coconut water is naturally rich in cytokinins and was used in early plant tissue culture." },
        ethylene: { name: "Ethylene", tag: "The ripening gas",
          what: "Ethylene is a hormone that is a gas. It makes fruits ripen: they become soft, sweet and change colour.",
          adv: "As fruits such as bananas, mangoes and apples ripen, they release more ethylene, which speeds up ripening in themselves and in nearby fruit. Ethylene also causes leaves and flowers to fall and helps seedlings push through soil. Farmers pick fruit unripe and ripen it later in rooms with controlled ethylene.",
          real: "Put an unripe mango in a closed paper bag with a ripe banana and it ripens faster.",
          fact: "Ethylene is one of the simplest hormones: a molecule with just two carbon atoms and four hydrogen atoms." },
        abscisic: { name: "Abscisic acid (ABA)", short: "Abscisic acid", tag: "The stress hormone",
          what: "Abscisic acid helps plants survive hard times. It closes the stomata during drought and keeps seeds and buds dormant through the winter or dry season.",
          adv: "When roots sense dry soil, ABA is made and carried to the leaves, where it makes guard cells lose water so the stomata close within minutes. ABA also prevents seeds from germinating inside the fruit and is linked with leaves dropping in autumn. It works against gibberellins, which break dormancy.",
          real: "Many trees drop their leaves in the dry season to save water, and grow new ones when the rains come.",
          fact: "Without enough ABA, some maize seeds start sprouting while still on the cob." }
      },
      quiz: [
        { q: "What is the bending of a shoot towards light called?", o: ["Phototropism", "Gravitropism", "Transpiration", "Germination"],
          why: "Photo means light; tropism means a growth response towards or away from something." },
        { q: "Which hormone makes a shoot bend towards light?", o: ["Auxin", "Ethylene", "Insulin", "Adrenaline"],
          why: "Auxin makes shoot cells grow longer on the shaded side." },
        { q: "When light comes from one side, where does auxin collect?", o: ["On the shaded side", "On the lit side", "Only in the root tip", "Nowhere"],
          why: "Auxin moves away from light, so the shaded side grows faster." },
        { q: "Why do roots grow downwards?", o: ["They respond to gravity", "They respond to light", "Because of wind", "Because of sound"],
          why: "Roots show positive gravitropism." },
        { q: "Which hormone makes stems grow tall and helps seeds germinate?", o: ["Gibberellin", "Abscisic acid", "Ethylene", "Cytokinin"],
          why: "Gibberellins cause stem elongation and break seed dormancy." },
        { q: "Which gaseous hormone makes fruit ripen?", o: ["Ethylene", "Oxygen", "Auxin", "Carbon dioxide"],
          why: "Ripening fruits give off ethylene, which speeds up ripening." },
        { q: "Which hormone closes stomata in drought and keeps seeds dormant?", o: ["Abscisic acid", "Gibberellin", "Auxin", "Cytokinin"],
          why: "ABA is the plant's stress hormone." },
        { q: "Which hormone promotes cell division and side branches?", o: ["Cytokinin", "Ethylene", "Abscisic acid", "Thyroxine"],
          why: "Cytokinins make cells divide and side buds grow." }
      ],
      terms: [
        { t: "Plant hormone", d: "A chemical made in small amounts that controls growth and development in a plant." },
        { t: "Tropism", d: "A growth movement of a plant part towards or away from a stimulus." },
        { t: "Phototropism", d: "Growth in response to light." },
        { t: "Gravitropism", d: "Growth in response to gravity." },
        { t: "Apical dominance", d: "The shoot tip holding back the growth of side buds." },
        { t: "Dormancy", d: "A resting state of a seed or bud." },
        { t: "Ripening", d: "Changes that make fruit soft, sweet and coloured." }
      ],
      practice: [
        { q: "Explain why a seedling on a windowsill bends towards the window.", a: "Light comes from one side, so auxin moves to the shaded side; those cells grow longer, so the shoot bends towards the light." },
        { q: "Why do gardeners pinch off the tip of a plant?", a: "Removing the tip removes the auxin that holds back side buds, so more branches grow and the plant becomes bushy." },
        { q: "Why are fruits often transported unripe?", a: "Unripe fruit is firm and lasts longer; it can be ripened later with ethylene gas." },
        { q: "Name a hormone that helps a plant in drought and say how.", a: "Abscisic acid: it makes the stomata close, so less water is lost." }
      ]
    },

    hi: {
      tagline: "ऑक्सिन पौधे को रोशनी की ओर कैसे मोड़ता है",
      intro: '<strong>पौधे चल नहीं सकते, पर वे मुड़ सकते हैं, बढ़ सकते हैं और बदल सकते हैं।</strong> यह सब पादप हॉर्मोन नाम के रासायनिक संदेशवाहक नियंत्रित करते हैं। यहाँ हर डिब्बा एक हॉर्मोन को काम करते दिखाता है। "💡 एक तरफ़ से रोशनी" दबाकर पौध को लैंप की ओर मुड़ते देखो, और "🍌 केले पकाओ" दबाकर एक गैस हॉर्मोन का काम देखो।',
      ui: {
        light_btn: "💡 एक तरफ़ से रोशनी", light_off: "💡 ऊपर से रोशनी",
        light_on: "ऑक्सिन (पीले बिंदु) छाया वाली तरफ़ चला जाता है। वहाँ की कोशिकाएँ ज़्यादा लंबी होती हैं, इसलिए प्ररोह रोशनी की ओर मुड़ता है: प्रकाशानुवर्तन।",
        light_top: "ऊपर से रोशनी: ऑक्सिन बराबर फैला है, इसलिए प्ररोह सीधा ऊपर बढ़ता है।",
        ripen_btn: "🍌 केले पकाओ", unripe_btn: "↺ नए हरे केले",
        ripen_on: "पका सेब एथिलीन गैस छोड़ता है, जिससे केले पकते हैं: हरे → पीले, सख़्त → नरम, खट्टे → मीठे।"
      },
      parts: {
        auxin: { name: "ऑक्सिन और प्रकाशानुवर्तन", short: "ऑक्सिन", tag: "रोशनी की ओर मुड़ना",
          what: "ऑक्सिन प्ररोह के सिरे पर बनने वाला पादप हॉर्मोन है। जब रोशनी एक तरफ़ से आती है, तो ऑक्सिन छाया वाली तरफ़ जाता है, वहाँ की कोशिकाएँ लंबी होती हैं, और प्ररोह रोशनी की ओर मुड़ जाता है।",
          adv: "रोशनी के प्रति वृद्धि प्रकाशानुवर्तन है; प्ररोह धनात्मक प्रकाशानुवर्ती होते हैं। ऑक्सिन प्ररोह की कोशिकाओं को लंबा करता है। चार्ल्स डार्विन और उनके बेटे ने 1880 में दिखाया कि घास की पौध का सिरा ढकने पर वह नहीं मुड़ती, यानी संकेत सिरे से आता है। कृत्रिम ऑक्सिन जड़ उगाने वाले पाउडर और चुनिंदा खरपतवारनाशी के रूप में इस्तेमाल होते हैं।",
          real: "खिड़की पर रखे घरेलू पौधे खिड़की की ओर झुकते हैं; गमला घुमाने से वे सीधे रहते हैं।",
          fact: "सूरजमुखी की कलियाँ दिन भर सूरज को पूर्व से पश्चिम तक देखती रहती हैं।" },
        gravitropism: { name: "गुरुत्वानुवर्तन", tag: "जड़ें नीचे, प्ररोह ऊपर",
          what: "बीज किसी भी तरह पड़ा हो, जड़ें गुरुत्व की ओर नीचे और प्ररोह उससे दूर ऊपर बढ़ते हैं। गुरुत्व के प्रति इस प्रतिक्रिया को गुरुत्वानुवर्तन कहते हैं।",
          adv: "करवट पड़े बीज में ऑक्सिन जड़ और प्ररोह, दोनों के निचले भाग में जमा होता है। प्ररोह में ज़्यादा ऑक्सिन वृद्धि तेज़ करता है, इसलिए प्ररोह ऊपर मुड़ता है। जड़ में उतना ही ऑक्सिन वृद्धि धीमी करता है, इसलिए जड़ नीचे मुड़ती है। पौधे स्पर्श (स्पर्शानुवर्तन) और पानी (जलानुवर्तन) के प्रति भी प्रतिक्रिया करते हैं।",
          real: "खेत में बीज किसी भी तरह बोए जाएँ, जड़ें नीचे और प्ररोह ऊपर ही जाते हैं।",
          fact: "अंतरराष्ट्रीय अंतरिक्ष स्टेशन पर पौध हर दिशा में बढ़ती है, जब तक रोशनी उसे दिशा न दे।" },
        gibberellin: { name: "जिबरेलिन", tag: "खिंचाव वाला हॉर्मोन",
          what: "जिबरेलिन तनों को ऊँचा बढ़ाते हैं और बीजों के अंकुरण में मदद करते हैं। जिबरेलिन छिड़कने पर बौना पौधा भी सामान्य जितना ऊँचा बढ़ सकता है।",
          adv: "जिबरेलिन तने की कोशिकाओं को लंबा करते और बाँटते हैं, जमा भोजन छुड़ाने वाले एंज़ाइम चालू करके बीज की सुप्तावस्था तोड़ते हैं, और फलों को बड़ा करते हैं। हरित क्रांति के आधुनिक बौने गेहूँ और चावल में जिबरेलिन संकेतन में बदलाव हैं, इसलिए वे छोटे रहते हैं और भारी दानों से गिरते नहीं।",
          real: "अंगूर उगाने वाले बड़े, लंबे गुच्छों वाले बीजरहित अंगूर पाने के लिए जिबरेलिन छिड़कते हैं।",
          fact: "जिबरेलिन जापान में एक कवक से खोजा गया जो धान की पौध को इतना ऊँचा कर देता था कि वह गिर जाती थी: 'मूर्ख पौध' रोग।" },
        cytokinin: { name: "साइटोकाइनिन", tag: "कोशिका विभाजन का हॉर्मोन",
          what: "साइटोकाइनिन कोशिकाओं को बँटवाते हैं और बगल की कलियों को शाखाओं में बढ़ने में मदद करते हैं, जिससे पौधा घना बनता है। ये पत्तियों को ज़्यादा देर हरा भी रखते हैं।",
          adv: "साइटोकाइनिन ज़्यादातर जड़ों में बनते हैं और जाइलम से ऊपर जाते हैं। ऑक्सिन (प्ररोह सिरे से) और साइटोकाइनिन (जड़ों से) का संतुलन शाखाएँ तय करता है: सिरे का ऑक्सिन बगल की कलियों को रोकता है (शिखाग्र प्रभाविता), जबकि साइटोकाइनिन उन्हें बढ़ाता है। ऊतक संवर्धन में ऑक्सिन–साइटोकाइनिन का सही मिश्रण कोशिकाओं के ढेले से प्ररोह या जड़ें बनवाता है।",
          real: "तुलसी या पुदीने का सिरा तोड़ने से उसमें ज़्यादा बगल की शाखाएँ निकलती हैं और वह घना हो जाता है।",
          fact: "नारियल पानी में प्राकृतिक रूप से साइटोकाइनिन भरपूर होते हैं और शुरुआती पादप ऊतक संवर्धन में इसका इस्तेमाल हुआ।" },
        ethylene: { name: "एथिलीन", tag: "पकाने वाली गैस",
          what: "एथिलीन एक हॉर्मोन है जो गैस है। यह फलों को पकाता है: वे नरम, मीठे होते हैं और रंग बदलते हैं।",
          adv: "केले, आम और सेब जैसे फल पकते समय ज़्यादा एथिलीन छोड़ते हैं, जो उनके अपने और पास के फलों के पकने को तेज़ करता है। एथिलीन पत्तियों और फूलों को गिराता भी है और पौध को मिट्टी से निकलने में मदद करता है। किसान फल कच्चे तोड़ते हैं और बाद में नियंत्रित एथिलीन वाले कमरों में पकाते हैं।",
          real: "कच्चे आम को पके केले के साथ बंद काग़ज़ की थैली में रखो, वह जल्दी पकता है।",
          fact: "एथिलीन सबसे सरल हॉर्मोनों में से है: सिर्फ़ दो कार्बन और चार हाइड्रोजन परमाणुओं वाला अणु।" },
        abscisic: { name: "एब्सिसिक अम्ल (ABA)", short: "एब्सिसिक अम्ल", tag: "तनाव का हॉर्मोन",
          what: "एब्सिसिक अम्ल पौधों को कठिन समय में बचने में मदद करता है। यह सूखे में रंध्र बंद करता है और बीजों व कलियों को सर्दी या सूखे मौसम भर सुप्त रखता है।",
          adv: "जब जड़ें सूखी मिट्टी महसूस करती हैं, तो ABA बनकर पत्तियों तक जाता है, जहाँ यह द्वार कोशिकाओं से पानी निकलवाता है और मिनटों में रंध्र बंद हो जाते हैं। ABA बीजों को फल के अंदर ही अंकुरित होने से रोकता है और पतझड़ में पत्तियाँ गिरने से जुड़ा है। यह सुप्तावस्था तोड़ने वाले जिबरेलिनों के विपरीत काम करता है।",
          real: "बहुत से पेड़ सूखे मौसम में पानी बचाने के लिए पत्तियाँ गिरा देते हैं, और बारिश आने पर नई उगाते हैं।",
          fact: "पर्याप्त ABA न हो तो मक्का के कुछ दाने भुट्टे पर ही अंकुरित होने लगते हैं।" }
      },
      quiz: [
        { q: "प्ररोह का रोशनी की ओर मुड़ना क्या कहलाता है?", o: ["प्रकाशानुवर्तन", "गुरुत्वानुवर्तन", "वाष्पोत्सर्जन", "अंकुरण"],
          why: "प्रकाश यानी रोशनी; अनुवर्तन यानी किसी चीज़ की ओर या उससे दूर बढ़ना।" },
        { q: "कौन-सा हॉर्मोन प्ररोह को रोशनी की ओर मोड़ता है?", o: ["ऑक्सिन", "एथिलीन", "इंसुलिन", "एड्रिनलिन"],
          why: "ऑक्सिन छाया वाली तरफ़ की प्ररोह कोशिकाओं को लंबा करता है।" },
        { q: "जब रोशनी एक तरफ़ से आती है, तो ऑक्सिन कहाँ जमा होता है?", o: ["छाया वाली तरफ़", "रोशनी वाली तरफ़", "सिर्फ़ जड़ की नोक में", "कहीं नहीं"],
          why: "ऑक्सिन रोशनी से दूर जाता है, इसलिए छाया वाली तरफ़ तेज़ बढ़ती है।" },
        { q: "जड़ें नीचे की ओर क्यों बढ़ती हैं?", o: ["वे गुरुत्व के प्रति प्रतिक्रिया करती हैं", "वे रोशनी के प्रति प्रतिक्रिया करती हैं", "हवा के कारण", "आवाज़ के कारण"],
          why: "जड़ें धनात्मक गुरुत्वानुवर्तन दिखाती हैं।" },
        { q: "कौन-सा हॉर्मोन तने को ऊँचा बढ़ाता है और बीज अंकुरण में मदद करता है?", o: ["जिबरेलिन", "एब्सिसिक अम्ल", "एथिलीन", "साइटोकाइनिन"],
          why: "जिबरेलिन तने को लंबा करते हैं और बीज की सुप्तावस्था तोड़ते हैं।" },
        { q: "कौन-सा गैसीय हॉर्मोन फल पकाता है?", o: ["एथिलीन", "ऑक्सीजन", "ऑक्सिन", "कार्बन डाइऑक्साइड"],
          why: "पकते फल एथिलीन छोड़ते हैं, जो पकना तेज़ करता है।" },
        { q: "कौन-सा हॉर्मोन सूखे में रंध्र बंद करता है और बीजों को सुप्त रखता है?", o: ["एब्सिसिक अम्ल", "जिबरेलिन", "ऑक्सिन", "साइटोकाइनिन"],
          why: "ABA पौधे का तनाव हॉर्मोन है।" },
        { q: "कौन-सा हॉर्मोन कोशिका विभाजन और बगल की शाखाओं को बढ़ाता है?", o: ["साइटोकाइनिन", "एथिलीन", "एब्सिसिक अम्ल", "थायरॉक्सिन"],
          why: "साइटोकाइनिन कोशिकाएँ बँटवाते हैं और बगल की कलियाँ बढ़ाते हैं।" }
      ],
      terms: [
        { t: "पादप हॉर्मोन", d: "थोड़ी मात्रा में बना रसायन जो पौधे की वृद्धि और विकास नियंत्रित करता है।" },
        { t: "अनुवर्तन", d: "किसी उद्दीपन की ओर या उससे दूर पौधे के भाग की वृद्धि-गति।" },
        { t: "प्रकाशानुवर्तन", d: "रोशनी के प्रति वृद्धि।" },
        { t: "गुरुत्वानुवर्तन", d: "गुरुत्व के प्रति वृद्धि।" },
        { t: "शिखाग्र प्रभाविता", d: "प्ररोह के सिरे द्वारा बगल की कलियों की वृद्धि रोकना।" },
        { t: "सुप्तावस्था", d: "बीज या कली की आराम की अवस्था।" },
        { t: "पकना", d: "बदलाव जो फल को नरम, मीठा और रंगीन बनाते हैं।" }
      ],
      practice: [
        { q: "समझाओ कि खिड़की पर रखी पौध खिड़की की ओर क्यों मुड़ती है।", a: "रोशनी एक तरफ़ से आती है, इसलिए ऑक्सिन छाया वाली तरफ़ जाता है; वहाँ की कोशिकाएँ लंबी होती हैं, इसलिए प्ररोह रोशनी की ओर मुड़ता है।" },
        { q: "माली पौधे का सिरा क्यों तोड़ते हैं?", a: "सिरा हटाने से वह ऑक्सिन हट जाता है जो बगल की कलियों को रोकता है, इसलिए ज़्यादा शाखाएँ निकलती हैं और पौधा घना होता है।" },
        { q: "फल अक्सर कच्चे क्यों भेजे जाते हैं?", a: "कच्चे फल सख़्त होते हैं और ज़्यादा देर टिकते हैं; उन्हें बाद में एथिलीन गैस से पकाया जा सकता है।" },
        { q: "सूखे में पौधे की मदद करने वाले हॉर्मोन का नाम बताओ और कैसे, यह भी।", a: "एब्सिसिक अम्ल: यह रंध्र बंद करवाता है, जिससे कम पानी निकलता है।" }
      ]
    },

    mr: {
      tagline: "ऑक्झिन रोपाला प्रकाशाकडे कसं वळवतं",
      intro: '<strong>वनस्पती चालू शकत नाहीत, पण त्या वळू शकतात, वाढू शकतात आणि बदलू शकतात.</strong> हे सगळं वनस्पती संप्रेरकं नावाचे रासायनिक संदेशवाहक नियंत्रित करतात. इथे प्रत्येक खोका एका संप्रेरकाचं काम दाखवतो. "💡 एका बाजूने प्रकाश" दाबून रोपटं दिव्याकडे वळताना बघा, आणि "🍌 केळी पिकवा" दाबून एका वायू संप्रेरकाचं काम बघा.',
      ui: {
        light_btn: "💡 एका बाजूने प्रकाश", light_off: "💡 वरून प्रकाश",
        light_on: "ऑक्झिन (पिवळे ठिपके) सावलीच्या बाजूला जातं. तिथल्या पेशी जास्त लांब होतात, म्हणून अंकुर प्रकाशाकडे वळतो: प्रकाशानुवर्तन.",
        light_top: "वरून प्रकाश: ऑक्झिन समान पसरलेलं आहे, म्हणून अंकुर सरळ वर वाढतो.",
        ripen_btn: "🍌 केळी पिकवा", unripe_btn: "↺ नवी हिरवी केळी",
        ripen_on: "पिकलेलं सफरचंद इथिलीन वायू सोडतं, त्यामुळे केळी पिकतात: हिरवी → पिवळी, कडक → मऊ, आंबट → गोड."
      },
      parts: {
        auxin: { name: "ऑक्झिन आणि प्रकाशानुवर्तन", short: "ऑक्झिन", tag: "प्रकाशाकडे वळणं",
          what: "ऑक्झिन हे अंकुराच्या टोकावर तयार होणारं वनस्पती संप्रेरक आहे. प्रकाश एका बाजूने आला की ऑक्झिन सावलीच्या बाजूला जातं, तिथल्या पेशी लांब होतात, आणि अंकुर प्रकाशाकडे वळतो.",
          adv: "प्रकाशाला प्रतिसाद म्हणून होणारी वाढ म्हणजे प्रकाशानुवर्तन; अंकुर धन प्रकाशानुवर्ती असतात. ऑक्झिन अंकुराच्या पेशी लांब करतं. चार्ल्स डार्विन आणि त्यांच्या मुलाने 1880 मध्ये दाखवलं की गवताच्या रोपट्याचं टोक झाकलं तर ते वळत नाही, म्हणजे संकेत टोकातून येतो. कृत्रिम ऑक्झिन मुळं फुटवणारी पावडर आणि निवडक तणनाशक म्हणून वापरतात.",
          real: "खिडकीत ठेवलेली घरगुती रोपं खिडकीकडे झुकतात; कुंडी फिरवल्याने ती सरळ राहतात.",
          fact: "सूर्यफुलाच्या कळ्या दिवसभर सूर्याला पूर्वेकडून पश्चिमेकडे फॉलो करतात." },
        gravitropism: { name: "गुरुत्वानुवर्तन", tag: "मुळं खाली, अंकुर वर",
          what: "बी कसंही पडलेलं असलं तरी मुळं गुरुत्वाकडे खाली आणि अंकुर त्याच्यापासून दूर वर वाढतात. गुरुत्वाला दिलेल्या या प्रतिसादाला गुरुत्वानुवर्तन म्हणतात.",
          adv: "कुशीवर पडलेल्या बीमध्ये ऑक्झिन मूळ आणि अंकुर दोघांच्या खालच्या बाजूला जमा होतं. अंकुरात जास्त ऑक्झिन वाढ जलद करतं, म्हणून अंकुर वर वळतो. मुळात तेवढंच ऑक्झिन वाढ मंद करतं, म्हणून मूळ खाली वळतं. वनस्पती स्पर्शाला (स्पर्शानुवर्तन) आणि पाण्याला (जलानुवर्तन) सुद्धा प्रतिसाद देतात.",
          real: "शेतात बिया कशाही पेरल्या तरी मुळं खाली आणि अंकुर वरच जातात.",
          fact: "आंतरराष्ट्रीय अंतराळ स्थानकावर रोपटी सगळ्या दिशांनी वाढतात, जोपर्यंत प्रकाश त्यांना दिशा देत नाही." },
        gibberellin: { name: "जिबरेलिन", tag: "ताणणारं संप्रेरक",
          what: "जिबरेलिन खोडं उंच वाढवतात आणि बिया रुजायला मदत करतात. जिबरेलिन फवारलेलं बुटकं रोप सामान्य रोपाएवढं उंच वाढू शकतं.",
          adv: "जिबरेलिन खोडाच्या पेशी लांब करतात आणि विभाजित करतात, साठवलेलं अन्न सोडवणारी विकरं सुरू करून बीची सुप्तावस्था मोडतात, आणि फळं मोठी करतात. हरितक्रांतीच्या आधुनिक बुटक्या गहू आणि तांदळात जिबरेलिन संकेतनात बदल आहेत, म्हणून ते लहान राहतात आणि जड दाण्यांनी कोसळत नाहीत.",
          real: "द्राक्ष उत्पादक मोठे, लांब घड असलेली बिनबियांची द्राक्षं मिळवण्यासाठी जिबरेलिन फवारतात.",
          fact: "जिबरेलिनचा शोध जपानमध्ये एका बुरशीपासून लागला, जी भाताची रोपं इतकी उंच करायची की ती कोसळायची: 'वेडं रोप' रोग." },
        cytokinin: { name: "सायटोकायनिन", tag: "पेशी विभाजनाचं संप्रेरक",
          what: "सायटोकायनिन पेशी विभाजित करतात आणि बाजूच्या कळ्यांना फांद्यांमध्ये वाढायला मदत करतात, त्यामुळे रोप दाट होतं. ते पानं जास्त काळ हिरवीही ठेवतात.",
          adv: "सायटोकायनिन बहुतेक मुळांत तयार होतात आणि जलवाहिनीतून वर जातात. ऑक्झिन (अंकुराच्या टोकातून) आणि सायटोकायनिन (मुळांतून) यांचा समतोल फांद्या ठरवतो: टोकावरचं ऑक्झिन बाजूच्या कळ्यांना रोखतं (अग्रप्रभाविता), तर सायटोकायनिन त्यांना वाढवतं. ऊतीसंवर्धनात ऑक्झिन–सायटोकायनिनचं योग्य मिश्रण पेशींच्या गोळ्यापासून अंकुर किंवा मुळं बनवतं.",
          real: "तुळस किंवा पुदिन्याचं टोक खुडल्याने त्याला जास्त बाजूच्या फांद्या येतात आणि ते दाट होतं.",
          fact: "नारळाच्या पाण्यात नैसर्गिकरीत्या सायटोकायनिन भरपूर असतात आणि सुरुवातीच्या वनस्पती ऊतीसंवर्धनात ते वापरलं गेलं." },
        ethylene: { name: "इथिलीन", tag: "पिकवणारा वायू",
          what: "इथिलीन हे वायुरूप संप्रेरक आहे. ते फळं पिकवतं: ती मऊ, गोड होतात आणि रंग बदलतात.",
          adv: "केळी, आंबे आणि सफरचंदं पिकताना जास्त इथिलीन सोडतात, ते त्यांचं स्वतःचं आणि जवळच्या फळांचं पिकणं जलद करतं. इथिलीन पानं आणि फुलं गळवतं आणि रोपट्याला मातीतून वर यायला मदत करतं. शेतकरी फळं कच्ची तोडतात आणि नंतर नियंत्रित इथिलीन असलेल्या खोल्यांत पिकवतात.",
          real: "कच्चा आंबा पिकलेल्या केळ्यासोबत बंद कागदी पिशवीत ठेवा, तो लवकर पिकतो.",
          fact: "इथिलीन हे सर्वात साध्या संप्रेरकांपैकी एक आहे: फक्त दोन कार्बन आणि चार हायड्रोजन अणूंचा रेणू." },
        abscisic: { name: "ॲब्सिसिक आम्ल (ABA)", short: "ॲब्सिसिक आम्ल", tag: "ताणाचं संप्रेरक",
          what: "ॲब्सिसिक आम्ल वनस्पतींना कठीण काळात टिकायला मदत करतं. ते दुष्काळात पर्णरंध्रं बंद करतं आणि बिया व कळ्या हिवाळा किंवा कोरडा ऋतू संपेपर्यंत सुप्त ठेवतं.",
          adv: "मुळांना माती कोरडी जाणवली की ABA तयार होऊन पानांपर्यंत जातं, तिथे ते रक्षक पेशींमधून पाणी काढून घेतं आणि मिनिटांत पर्णरंध्रं बंद होतात. ABA बियांना फळाच्या आतच रुजू देत नाही आणि पानगळीशी जोडलेलं आहे. ते सुप्तावस्था मोडणाऱ्या जिबरेलिनच्या विरुद्ध काम करतं.",
          real: "अनेक झाडं कोरड्या ऋतूत पाणी वाचवण्यासाठी पानं गाळतात, आणि पाऊस आल्यावर नवी पानं येतात.",
          fact: "पुरेसं ABA नसलं तर मक्याचे काही दाणे कणसावरच रुजू लागतात." }
      },
      quiz: [
        { q: "अंकुर प्रकाशाकडे वळण्याला काय म्हणतात?", o: ["प्रकाशानुवर्तन", "गुरुत्वानुवर्तन", "बाष्पोत्सर्जन", "अंकुरण"],
          why: "प्रकाश म्हणजे उजेड; अनुवर्तन म्हणजे एखाद्या गोष्टीकडे किंवा तिच्यापासून दूर वाढणं." },
        { q: "कोणतं संप्रेरक अंकुराला प्रकाशाकडे वळवतं?", o: ["ऑक्झिन", "इथिलीन", "इन्सुलिन", "ॲड्रिनॅलिन"],
          why: "ऑक्झिन सावलीच्या बाजूच्या अंकुर पेशी लांब करतं." },
        { q: "प्रकाश एका बाजूने आला की ऑक्झिन कुठे जमा होतं?", o: ["सावलीच्या बाजूला", "प्रकाशाच्या बाजूला", "फक्त मुळाच्या टोकात", "कुठेच नाही"],
          why: "ऑक्झिन प्रकाशापासून दूर जातं, म्हणून सावलीची बाजू जलद वाढते." },
        { q: "मुळं खाली का वाढतात?", o: ["ती गुरुत्वाला प्रतिसाद देतात", "ती प्रकाशाला प्रतिसाद देतात", "वाऱ्यामुळे", "आवाजामुळे"],
          why: "मुळं धन गुरुत्वानुवर्तन दाखवतात." },
        { q: "कोणतं संप्रेरक खोड उंच वाढवतं आणि बी रुजायला मदत करतं?", o: ["जिबरेलिन", "ॲब्सिसिक आम्ल", "इथिलीन", "सायटोकायनिन"],
          why: "जिबरेलिन खोड लांब करतात आणि बीची सुप्तावस्था मोडतात." },
        { q: "कोणतं वायुरूप संप्रेरक फळं पिकवतं?", o: ["इथिलीन", "ऑक्सिजन", "ऑक्झिन", "कार्बन डायऑक्साइड"],
          why: "पिकणारी फळं इथिलीन सोडतात, ते पिकणं जलद करतं." },
        { q: "कोणतं संप्रेरक दुष्काळात पर्णरंध्रं बंद करतं आणि बिया सुप्त ठेवतं?", o: ["ॲब्सिसिक आम्ल", "जिबरेलिन", "ऑक्झिन", "सायटोकायनिन"],
          why: "ABA हे वनस्पतीचं ताणाचं संप्रेरक आहे." },
        { q: "कोणतं संप्रेरक पेशी विभाजन आणि बाजूच्या फांद्या वाढवतं?", o: ["सायटोकायनिन", "इथिलीन", "ॲब्सिसिक आम्ल", "थायरॉक्सिन"],
          why: "सायटोकायनिन पेशी विभाजित करतात आणि बाजूच्या कळ्या वाढवतात." }
      ],
      terms: [
        { t: "वनस्पती संप्रेरक", d: "कमी प्रमाणात तयार होणारं, वनस्पतीची वाढ आणि विकास नियंत्रित करणारं रसायन." },
        { t: "अनुवर्तन", d: "उद्दीपनाकडे किंवा त्याच्यापासून दूर वनस्पतीच्या भागाची वाढ-हालचाल." },
        { t: "प्रकाशानुवर्तन", d: "प्रकाशाला प्रतिसाद म्हणून होणारी वाढ." },
        { t: "गुरुत्वानुवर्तन", d: "गुरुत्वाला प्रतिसाद म्हणून होणारी वाढ." },
        { t: "अग्रप्रभाविता", d: "अंकुराच्या टोकाने बाजूच्या कळ्यांची वाढ रोखणं." },
        { t: "सुप्तावस्था", d: "बी किंवा कळीची विश्रांतीची अवस्था." },
        { t: "पिकणं", d: "फळ मऊ, गोड आणि रंगीत करणारे बदल." }
      ],
      practice: [
        { q: "खिडकीत ठेवलेलं रोपटं खिडकीकडे का वळतं ते स्पष्ट करा.", a: "प्रकाश एका बाजूने येतो, म्हणून ऑक्झिन सावलीच्या बाजूला जातं; तिथल्या पेशी लांब होतात, म्हणून अंकुर प्रकाशाकडे वळतो." },
        { q: "माळी रोपाचं टोक का खुडतात?", a: "टोक काढल्याने बाजूच्या कळ्यांना रोखणारं ऑक्झिन निघून जातं, म्हणून जास्त फांद्या येतात आणि रोप दाट होतं." },
        { q: "फळं अनेकदा कच्ची का पाठवली जातात?", a: "कच्ची फळं कडक असतात आणि जास्त काळ टिकतात; ती नंतर इथिलीन वायूने पिकवता येतात." },
        { q: "दुष्काळात वनस्पतीला मदत करणाऱ्या संप्रेरकाचं नाव आणि ते कसं मदत करतं ते सांगा.", a: "ॲब्सिसिक आम्ल: ते पर्णरंध्रं बंद करतं, त्यामुळे कमी पाणी जातं." }
      ]
    },

    kn: {
      tagline: "ಆಕ್ಸಿನ್ ಸಸ್ಯವನ್ನು ಬೆಳಕಿನ ಕಡೆಗೆ ಹೇಗೆ ಬಾಗಿಸುತ್ತದೆ",
      intro: '<strong>ಸಸ್ಯಗಳು ನಡೆಯಲಾರವು, ಆದರೆ ಅವು ತಿರುಗಬಲ್ಲವು, ಬೆಳೆಯಬಲ್ಲವು ಮತ್ತು ಬದಲಾಗಬಲ್ಲವು.</strong> ಸಸ್ಯ ಹಾರ್ಮೋನುಗಳೆಂಬ ರಾಸಾಯನಿಕ ಸಂದೇಶವಾಹಕಗಳು ಇದನ್ನು ನಿಯಂತ್ರಿಸುತ್ತವೆ. ಇಲ್ಲಿ ಪ್ರತಿ ಪೆಟ್ಟಿಗೆ ಒಂದು ಹಾರ್ಮೋನಿನ ಕೆಲಸ ತೋರಿಸುತ್ತದೆ. "💡 ಒಂದು ಕಡೆಯಿಂದ ಬೆಳಕು" ಒತ್ತಿ ಸಸಿ ದೀಪದ ಕಡೆ ಬಾಗುವುದನ್ನು ನೋಡಿ, ಮತ್ತು "🍌 ಬಾಳೆಹಣ್ಣು ಹಣ್ಣಾಗಿಸಿ" ಒತ್ತಿ ಒಂದು ಅನಿಲ ಹಾರ್ಮೋನಿನ ಕೆಲಸ ನೋಡಿ.',
      ui: {
        light_btn: "💡 ಒಂದು ಕಡೆಯಿಂದ ಬೆಳಕು", light_off: "💡 ಮೇಲಿನಿಂದ ಬೆಳಕು",
        light_on: "ಆಕ್ಸಿನ್ (ಹಳದಿ ಚುಕ್ಕೆಗಳು) ನೆರಳಿನ ಕಡೆ ಹೋಗುತ್ತದೆ. ಅಲ್ಲಿನ ಕೋಶಗಳು ಹೆಚ್ಚು ಉದ್ದವಾಗುತ್ತವೆ, ಹಾಗಾಗಿ ಕಾಂಡ ಬೆಳಕಿನ ಕಡೆ ಬಾಗುತ್ತದೆ: ದ್ಯುತಿಅನುವರ್ತನೆ.",
        light_top: "ಮೇಲಿನಿಂದ ಬೆಳಕು: ಆಕ್ಸಿನ್ ಸಮವಾಗಿ ಹರಡಿದೆ, ಹಾಗಾಗಿ ಕಾಂಡ ನೇರವಾಗಿ ಮೇಲೆ ಬೆಳೆಯುತ್ತದೆ.",
        ripen_btn: "🍌 ಬಾಳೆಹಣ್ಣು ಹಣ್ಣಾಗಿಸಿ", unripe_btn: "↺ ಹೊಸ ಹಸಿರು ಬಾಳೆಕಾಯಿ",
        ripen_on: "ಹಣ್ಣಾದ ಸೇಬು ಎಥಿಲೀನ್ ಅನಿಲ ಬಿಡುತ್ತದೆ, ಅದು ಬಾಳೆಯನ್ನು ಹಣ್ಣಾಗಿಸುತ್ತದೆ: ಹಸಿರು → ಹಳದಿ, ಗಟ್ಟಿ → ಮೃದು, ಹುಳಿ → ಸಿಹಿ."
      },
      parts: {
        auxin: { name: "ಆಕ್ಸಿನ್ ಮತ್ತು ದ್ಯುತಿಅನುವರ್ತನೆ", short: "ಆಕ್ಸಿನ್", tag: "ಬೆಳಕಿನ ಕಡೆ ಬಾಗುವುದು",
          what: "ಆಕ್ಸಿನ್ ಕಾಂಡದ ತುದಿಯಲ್ಲಿ ತಯಾರಾಗುವ ಸಸ್ಯ ಹಾರ್ಮೋನ್. ಬೆಳಕು ಒಂದು ಕಡೆಯಿಂದ ಬಂದಾಗ ಆಕ್ಸಿನ್ ನೆರಳಿನ ಕಡೆ ಹೋಗುತ್ತದೆ, ಅಲ್ಲಿನ ಕೋಶಗಳು ಉದ್ದವಾಗುತ್ತವೆ, ಮತ್ತು ಕಾಂಡ ಬೆಳಕಿನ ಕಡೆ ಬಾಗುತ್ತದೆ.",
          adv: "ಬೆಳಕಿಗೆ ಪ್ರತಿಕ್ರಿಯೆಯಾಗಿ ಬೆಳವಣಿಗೆ ದ್ಯುತಿಅನುವರ್ತನೆ; ಕಾಂಡಗಳು ಧನಾತ್ಮಕ ದ್ಯುತಿಅನುವರ್ತಿಗಳು. ಆಕ್ಸಿನ್ ಕಾಂಡದ ಕೋಶಗಳನ್ನು ಉದ್ದವಾಗಿಸುತ್ತದೆ. ಹುಲ್ಲಿನ ಸಸಿಯ ತುದಿ ಮುಚ್ಚಿದರೆ ಅದು ಬಾಗುವುದಿಲ್ಲ, ಅಂದರೆ ಸಂಕೇತ ತುದಿಯಿಂದ ಬರುತ್ತದೆ ಎಂದು ಚಾರ್ಲ್ಸ್ ಡಾರ್ವಿನ್ ಮತ್ತು ಅವರ ಮಗ 1880ರಲ್ಲಿ ತೋರಿಸಿದರು. ಕೃತಕ ಆಕ್ಸಿನ್‌ಗಳನ್ನು ಬೇರು ಬರಿಸುವ ಪುಡಿ ಮತ್ತು ಆಯ್ದ ಕಳೆನಾಶಕಗಳಾಗಿ ಬಳಸುತ್ತಾರೆ.",
          real: "ಕಿಟಕಿಯ ಮೇಲಿಟ್ಟ ಮನೆಗಿಡಗಳು ಕಿಟಕಿಯ ಕಡೆ ವಾಲುತ್ತವೆ; ಕುಂಡ ತಿರುಗಿಸಿದರೆ ಅವು ನೇರವಾಗಿರುತ್ತವೆ.",
          fact: "ಸೂರ್ಯಕಾಂತಿ ಮೊಗ್ಗುಗಳು ದಿನವಿಡೀ ಸೂರ್ಯನನ್ನು ಪೂರ್ವದಿಂದ ಪಶ್ಚಿಮಕ್ಕೆ ಹಿಂಬಾಲಿಸುತ್ತವೆ." },
        gravitropism: { name: "ಗುರುತ್ವಾನುವರ್ತನೆ", tag: "ಬೇರು ಕೆಳಗೆ, ಕಾಂಡ ಮೇಲೆ",
          what: "ಬೀಜ ಹೇಗೇ ಬಿದ್ದಿರಲಿ, ಬೇರುಗಳು ಗುರುತ್ವದ ಕಡೆ ಕೆಳಗೆ ಮತ್ತು ಕಾಂಡಗಳು ಅದರಿಂದ ದೂರ ಮೇಲೆ ಬೆಳೆಯುತ್ತವೆ. ಗುರುತ್ವಕ್ಕೆ ಈ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಗುರುತ್ವಾನುವರ್ತನೆ ಎನ್ನುತ್ತಾರೆ.",
          adv: "ಪಕ್ಕಕ್ಕೆ ಬಿದ್ದ ಬೀಜದಲ್ಲಿ ಆಕ್ಸಿನ್ ಬೇರು ಮತ್ತು ಕಾಂಡ ಎರಡರ ಕೆಳಭಾಗದಲ್ಲಿ ಸಂಗ್ರಹವಾಗುತ್ತದೆ. ಕಾಂಡದಲ್ಲಿ ಹೆಚ್ಚು ಆಕ್ಸಿನ್ ಬೆಳವಣಿಗೆಯನ್ನು ವೇಗಗೊಳಿಸುತ್ತದೆ, ಹಾಗಾಗಿ ಕಾಂಡ ಮೇಲೆ ಬಾಗುತ್ತದೆ. ಬೇರಿನಲ್ಲಿ ಅಷ್ಟೇ ಆಕ್ಸಿನ್ ಬೆಳವಣಿಗೆಯನ್ನು ನಿಧಾನಗೊಳಿಸುತ್ತದೆ, ಹಾಗಾಗಿ ಬೇರು ಕೆಳಗೆ ಬಾಗುತ್ತದೆ. ಸಸ್ಯಗಳು ಸ್ಪರ್ಶಕ್ಕೆ (ಸ್ಪರ್ಶಾನುವರ್ತನೆ) ಮತ್ತು ನೀರಿಗೆ (ಜಲಾನುವರ್ತನೆ) ಕೂಡ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತವೆ.",
          real: "ಹೊಲದಲ್ಲಿ ಬೀಜಗಳನ್ನು ಹೇಗೇ ಬಿತ್ತಿದರೂ ಬೇರುಗಳು ಕೆಳಗೆ ಮತ್ತು ಕಾಂಡಗಳು ಮೇಲೆಯೇ ಹೋಗುತ್ತವೆ.",
          fact: "ಅಂತರರಾಷ್ಟ್ರೀಯ ಬಾಹ್ಯಾಕಾಶ ನಿಲ್ದಾಣದಲ್ಲಿ ಬೆಳಕು ದಾರಿ ತೋರಿಸದಿದ್ದರೆ ಸಸಿಗಳು ಎಲ್ಲಾ ದಿಕ್ಕುಗಳಲ್ಲೂ ಬೆಳೆಯುತ್ತವೆ." },
        gibberellin: { name: "ಜಿಬ್ಬೆರೆಲಿನ್‌ಗಳು", tag: "ಉದ್ದವಾಗಿಸುವ ಹಾರ್ಮೋನ್",
          what: "ಜಿಬ್ಬೆರೆಲಿನ್‌ಗಳು ಕಾಂಡಗಳನ್ನು ಎತ್ತರ ಬೆಳೆಸುತ್ತವೆ ಮತ್ತು ಬೀಜ ಮೊಳಕೆಯೊಡೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ. ಜಿಬ್ಬೆರೆಲಿನ್ ಸಿಂಪಡಿಸಿದ ಕುಳ್ಳ ಸಸ್ಯ ಸಾಮಾನ್ಯ ಸಸ್ಯದಷ್ಟು ಎತ್ತರ ಬೆಳೆಯಬಲ್ಲದು.",
          adv: "ಜಿಬ್ಬೆರೆಲಿನ್‌ಗಳು ಕಾಂಡದ ಕೋಶಗಳನ್ನು ಉದ್ದವಾಗಿಸಿ ವಿಭಜಿಸುತ್ತವೆ, ಸಂಗ್ರಹಿತ ಆಹಾರ ಬಿಡುಗಡೆ ಮಾಡುವ ಕಿಣ್ವಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ ಬೀಜದ ಸುಪ್ತಾವಸ್ಥೆ ಮುರಿಯುತ್ತವೆ, ಮತ್ತು ಹಣ್ಣುಗಳನ್ನು ದೊಡ್ಡದಾಗಿಸುತ್ತವೆ. ಹಸಿರು ಕ್ರಾಂತಿಯ ಆಧುನಿಕ ಕುಳ್ಳ ಗೋಧಿ ಮತ್ತು ಭತ್ತದಲ್ಲಿ ಜಿಬ್ಬೆರೆಲಿನ್ ಸಂಕೇತನದಲ್ಲಿ ಬದಲಾವಣೆಗಳಿವೆ, ಹಾಗಾಗಿ ಅವು ಕುಳ್ಳಾಗಿದ್ದು ಭಾರದ ತೆನೆಯಿಂದ ಬೀಳುವುದಿಲ್ಲ.",
          real: "ದ್ರಾಕ್ಷಿ ಬೆಳೆಗಾರರು ದೊಡ್ಡ, ಉದ್ದ ಗೊಂಚಲುಗಳ ಬೀಜರಹಿತ ದ್ರಾಕ್ಷಿಗಾಗಿ ಜಿಬ್ಬೆರೆಲಿನ್ ಸಿಂಪಡಿಸುತ್ತಾರೆ.",
          fact: "ಭತ್ತದ ಸಸಿಗಳನ್ನು ಬೀಳುವಷ್ಟು ಎತ್ತರ ಬೆಳೆಸುತ್ತಿದ್ದ ಒಂದು ಶಿಲೀಂಧ್ರದಿಂದ ಜಪಾನಿನಲ್ಲಿ ಜಿಬ್ಬೆರೆಲಿನ್ ಕಂಡುಹಿಡಿಯಲಾಯಿತು: 'ಮೂರ್ಖ ಸಸಿ' ರೋಗ." },
        cytokinin: { name: "ಸೈಟೋಕೈನಿನ್‌ಗಳು", tag: "ಕೋಶ ವಿಭಜನೆಯ ಹಾರ್ಮೋನ್",
          what: "ಸೈಟೋಕೈನಿನ್‌ಗಳು ಕೋಶಗಳನ್ನು ವಿಭಜಿಸುತ್ತವೆ ಮತ್ತು ಪಕ್ಕದ ಮೊಗ್ಗುಗಳು ಕೊಂಬೆಗಳಾಗಿ ಬೆಳೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ, ಸಸ್ಯ ದಟ್ಟವಾಗುತ್ತದೆ. ಅವು ಎಲೆಗಳನ್ನು ಹೆಚ್ಚು ಕಾಲ ಹಸಿರಾಗಿಯೂ ಇಡುತ್ತವೆ.",
          adv: "ಸೈಟೋಕೈನಿನ್‌ಗಳು ಹೆಚ್ಚಾಗಿ ಬೇರುಗಳಲ್ಲಿ ತಯಾರಾಗಿ ಕ್ಸೈಲಮ್‌ನಲ್ಲಿ ಮೇಲೇರುತ್ತವೆ. ಆಕ್ಸಿನ್ (ಕಾಂಡದ ತುದಿಯಿಂದ) ಮತ್ತು ಸೈಟೋಕೈನಿನ್ (ಬೇರುಗಳಿಂದ) ಸಮತೋಲನ ಕೊಂಬೆಗಳನ್ನು ನಿರ್ಧರಿಸುತ್ತದೆ: ತುದಿಯ ಆಕ್ಸಿನ್ ಪಕ್ಕದ ಮೊಗ್ಗುಗಳನ್ನು ತಡೆಯುತ್ತದೆ (ಅಗ್ರ ಪ್ರಾಬಲ್ಯ), ಸೈಟೋಕೈನಿನ್ ಅವುಗಳನ್ನು ಬೆಳೆಸುತ್ತದೆ. ಅಂಗಾಂಶ ಕೃಷಿಯಲ್ಲಿ ಆಕ್ಸಿನ್–ಸೈಟೋಕೈನಿನ್‌ನ ಸರಿಯಾದ ಮಿಶ್ರಣ ಕೋಶಗಳ ಉಂಡೆಯಿಂದ ಕಾಂಡ ಅಥವಾ ಬೇರುಗಳನ್ನು ರೂಪಿಸುತ್ತದೆ.",
          real: "ತುಳಸಿ ಅಥವಾ ಪುದೀನಾದ ತುದಿ ಚಿವುಟಿದರೆ ಹೆಚ್ಚು ಪಕ್ಕದ ಕೊಂಬೆಗಳು ಬಂದು ಅದು ದಟ್ಟವಾಗುತ್ತದೆ.",
          fact: "ಎಳನೀರಿನಲ್ಲಿ ನೈಸರ್ಗಿಕವಾಗಿ ಸೈಟೋಕೈನಿನ್‌ಗಳು ಹೇರಳವಾಗಿದ್ದು ಆರಂಭಿಕ ಸಸ್ಯ ಅಂಗಾಂಶ ಕೃಷಿಯಲ್ಲಿ ಬಳಕೆಯಾಗಿತ್ತು." },
        ethylene: { name: "ಎಥಿಲೀನ್", tag: "ಹಣ್ಣಾಗಿಸುವ ಅನಿಲ",
          what: "ಎಥಿಲೀನ್ ಅನಿಲ ರೂಪದ ಹಾರ್ಮೋನ್. ಅದು ಹಣ್ಣುಗಳನ್ನು ಹಣ್ಣಾಗಿಸುತ್ತದೆ: ಅವು ಮೃದು, ಸಿಹಿಯಾಗಿ ಬಣ್ಣ ಬದಲಿಸುತ್ತವೆ.",
          adv: "ಬಾಳೆ, ಮಾವು ಮತ್ತು ಸೇಬಿನಂತಹ ಹಣ್ಣುಗಳು ಹಣ್ಣಾಗುವಾಗ ಹೆಚ್ಚು ಎಥಿಲೀನ್ ಬಿಡುತ್ತವೆ, ಅದು ತಮ್ಮದೂ ಹತ್ತಿರದ ಹಣ್ಣುಗಳದ್ದೂ ಹಣ್ಣಾಗುವಿಕೆಯನ್ನು ವೇಗಗೊಳಿಸುತ್ತದೆ. ಎಥಿಲೀನ್ ಎಲೆ ಮತ್ತು ಹೂಗಳನ್ನು ಉದುರಿಸುತ್ತದೆ ಮತ್ತು ಸಸಿಗಳು ಮಣ್ಣಿನಿಂದ ಹೊರಬರಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ರೈತರು ಹಣ್ಣುಗಳನ್ನು ಕಾಯಿಯಾಗಿ ಕಿತ್ತು ನಂತರ ನಿಯಂತ್ರಿತ ಎಥಿಲೀನ್ ಇರುವ ಕೋಣೆಗಳಲ್ಲಿ ಹಣ್ಣಾಗಿಸುತ್ತಾರೆ.",
          real: "ಕಾಯಿ ಮಾವನ್ನು ಹಣ್ಣಾದ ಬಾಳೆಯೊಂದಿಗೆ ಮುಚ್ಚಿದ ಕಾಗದದ ಚೀಲದಲ್ಲಿಡಿ, ಅದು ಬೇಗ ಹಣ್ಣಾಗುತ್ತದೆ.",
          fact: "ಎಥಿಲೀನ್ ಅತಿ ಸರಳ ಹಾರ್ಮೋನುಗಳಲ್ಲೊಂದು: ಕೇವಲ ಎರಡು ಕಾರ್ಬನ್ ಮತ್ತು ನಾಲ್ಕು ಹೈಡ್ರೋಜನ್ ಪರಮಾಣುಗಳ ಅಣು." },
        abscisic: { name: "ಅಬ್ಸಿಸಿಕ್ ಆಮ್ಲ (ABA)", short: "ಅಬ್ಸಿಸಿಕ್ ಆಮ್ಲ", tag: "ಒತ್ತಡದ ಹಾರ್ಮೋನ್",
          what: "ಅಬ್ಸಿಸಿಕ್ ಆಮ್ಲ ಸಸ್ಯಗಳು ಕಷ್ಟಕಾಲದಲ್ಲಿ ಬದುಕಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಅದು ಬರದಲ್ಲಿ ಪತ್ರರಂಧ್ರಗಳನ್ನು ಮುಚ್ಚುತ್ತದೆ ಮತ್ತು ಬೀಜ ಹಾಗೂ ಮೊಗ್ಗುಗಳನ್ನು ಚಳಿಗಾಲ ಅಥವಾ ಒಣ ಋತುವಿನಲ್ಲಿ ಸುಪ್ತವಾಗಿಡುತ್ತದೆ.",
          adv: "ಬೇರುಗಳು ಒಣ ಮಣ್ಣನ್ನು ಗ್ರಹಿಸಿದಾಗ ABA ತಯಾರಾಗಿ ಎಲೆಗಳಿಗೆ ಸಾಗುತ್ತದೆ, ಅಲ್ಲಿ ಅದು ಕಾವಲು ಕೋಶಗಳಿಂದ ನೀರು ಹೊರಹಾಕಿಸಿ ನಿಮಿಷಗಳಲ್ಲಿ ಪತ್ರರಂಧ್ರಗಳನ್ನು ಮುಚ್ಚುತ್ತದೆ. ABA ಬೀಜಗಳು ಹಣ್ಣಿನೊಳಗೇ ಮೊಳಕೆಯೊಡೆಯದಂತೆ ತಡೆಯುತ್ತದೆ ಮತ್ತು ಎಲೆ ಉದುರುವಿಕೆಗೆ ಸಂಬಂಧಿಸಿದೆ. ಅದು ಸುಪ್ತಾವಸ್ಥೆ ಮುರಿಯುವ ಜಿಬ್ಬೆರೆಲಿನ್‌ಗಳಿಗೆ ವಿರುದ್ಧವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ.",
          real: "ಅನೇಕ ಮರಗಳು ಒಣ ಋತುವಿನಲ್ಲಿ ನೀರು ಉಳಿಸಲು ಎಲೆ ಉದುರಿಸಿ, ಮಳೆ ಬಂದಾಗ ಹೊಸ ಎಲೆಗಳನ್ನು ಬೆಳೆಸುತ್ತವೆ.",
          fact: "ಸಾಕಷ್ಟು ABA ಇಲ್ಲದಿದ್ದರೆ ಕೆಲವು ಮೆಕ್ಕೆಜೋಳದ ಕಾಳುಗಳು ತೆನೆಯ ಮೇಲೆಯೇ ಮೊಳಕೆಯೊಡೆಯತೊಡಗುತ್ತವೆ." }
      },
      quiz: [
        { q: "ಕಾಂಡ ಬೆಳಕಿನ ಕಡೆ ಬಾಗುವುದನ್ನು ಏನೆನ್ನುತ್ತಾರೆ?", o: ["ದ್ಯುತಿಅನುವರ್ತನೆ", "ಗುರುತ್ವಾನುವರ್ತನೆ", "ಬಾಷ್ಪವಿಸರ್ಜನೆ", "ಮೊಳಕೆಯೊಡೆಯುವಿಕೆ"],
          why: "ದ್ಯುತಿ ಎಂದರೆ ಬೆಳಕು; ಅನುವರ್ತನೆ ಎಂದರೆ ಯಾವುದರ ಕಡೆಗೋ ಅಥವಾ ದೂರಕ್ಕೋ ಬೆಳೆಯುವ ಪ್ರತಿಕ್ರಿಯೆ." },
        { q: "ಯಾವ ಹಾರ್ಮೋನ್ ಕಾಂಡವನ್ನು ಬೆಳಕಿನ ಕಡೆ ಬಾಗಿಸುತ್ತದೆ?", o: ["ಆಕ್ಸಿನ್", "ಎಥಿಲೀನ್", "ಇನ್ಸುಲಿನ್", "ಅಡ್ರಿನಲಿನ್"],
          why: "ಆಕ್ಸಿನ್ ನೆರಳಿನ ಕಡೆಯ ಕಾಂಡ ಕೋಶಗಳನ್ನು ಉದ್ದವಾಗಿಸುತ್ತದೆ." },
        { q: "ಬೆಳಕು ಒಂದು ಕಡೆಯಿಂದ ಬಂದಾಗ ಆಕ್ಸಿನ್ ಎಲ್ಲಿ ಸಂಗ್ರಹವಾಗುತ್ತದೆ?", o: ["ನೆರಳಿನ ಕಡೆ", "ಬೆಳಕಿನ ಕಡೆ", "ಬೇರಿನ ತುದಿಯಲ್ಲಿ ಮಾತ್ರ", "ಎಲ್ಲೂ ಇಲ್ಲ"],
          why: "ಆಕ್ಸಿನ್ ಬೆಳಕಿನಿಂದ ದೂರ ಹೋಗುತ್ತದೆ, ಹಾಗಾಗಿ ನೆರಳಿನ ಕಡೆ ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತದೆ." },
        { q: "ಬೇರುಗಳು ಕೆಳಗೆ ಏಕೆ ಬೆಳೆಯುತ್ತವೆ?", o: ["ಅವು ಗುರುತ್ವಕ್ಕೆ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತವೆ", "ಅವು ಬೆಳಕಿಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತವೆ", "ಗಾಳಿಯಿಂದ", "ಶಬ್ದದಿಂದ"],
          why: "ಬೇರುಗಳು ಧನಾತ್ಮಕ ಗುರುತ್ವಾನುವರ್ತನೆ ತೋರಿಸುತ್ತವೆ." },
        { q: "ಯಾವ ಹಾರ್ಮೋನ್ ಕಾಂಡವನ್ನು ಎತ್ತರ ಬೆಳೆಸಿ ಬೀಜ ಮೊಳಕೆಯೊಡೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ?", o: ["ಜಿಬ್ಬೆರೆಲಿನ್", "ಅಬ್ಸಿಸಿಕ್ ಆಮ್ಲ", "ಎಥಿಲೀನ್", "ಸೈಟೋಕೈನಿನ್"],
          why: "ಜಿಬ್ಬೆರೆಲಿನ್‌ಗಳು ಕಾಂಡವನ್ನು ಉದ್ದವಾಗಿಸಿ ಬೀಜದ ಸುಪ್ತಾವಸ್ಥೆ ಮುರಿಯುತ್ತವೆ." },
        { q: "ಯಾವ ಅನಿಲ ಹಾರ್ಮೋನ್ ಹಣ್ಣನ್ನು ಹಣ್ಣಾಗಿಸುತ್ತದೆ?", o: ["ಎಥಿಲೀನ್", "ಆಮ್ಲಜನಕ", "ಆಕ್ಸಿನ್", "ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್"],
          why: "ಹಣ್ಣಾಗುತ್ತಿರುವ ಹಣ್ಣುಗಳು ಎಥಿಲೀನ್ ಬಿಟ್ಟು ಹಣ್ಣಾಗುವಿಕೆ ವೇಗಗೊಳಿಸುತ್ತವೆ." },
        { q: "ಯಾವ ಹಾರ್ಮೋನ್ ಬರದಲ್ಲಿ ಪತ್ರರಂಧ್ರ ಮುಚ್ಚಿ ಬೀಜಗಳನ್ನು ಸುಪ್ತವಾಗಿಡುತ್ತದೆ?", o: ["ಅಬ್ಸಿಸಿಕ್ ಆಮ್ಲ", "ಜಿಬ್ಬೆರೆಲಿನ್", "ಆಕ್ಸಿನ್", "ಸೈಟೋಕೈನಿನ್"],
          why: "ABA ಸಸ್ಯದ ಒತ್ತಡದ ಹಾರ್ಮೋನ್." },
        { q: "ಯಾವ ಹಾರ್ಮೋನ್ ಕೋಶ ವಿಭಜನೆ ಮತ್ತು ಪಕ್ಕದ ಕೊಂಬೆಗಳನ್ನು ಉತ್ತೇಜಿಸುತ್ತದೆ?", o: ["ಸೈಟೋಕೈನಿನ್", "ಎಥಿಲೀನ್", "ಅಬ್ಸಿಸಿಕ್ ಆಮ್ಲ", "ಥೈರಾಕ್ಸಿನ್"],
          why: "ಸೈಟೋಕೈನಿನ್‌ಗಳು ಕೋಶಗಳನ್ನು ವಿಭಜಿಸಿ ಪಕ್ಕದ ಮೊಗ್ಗುಗಳನ್ನು ಬೆಳೆಸುತ್ತವೆ." }
      ],
      terms: [
        { t: "ಸಸ್ಯ ಹಾರ್ಮೋನ್", d: "ಸ್ವಲ್ಪ ಪ್ರಮಾಣದಲ್ಲಿ ತಯಾರಾಗಿ ಸಸ್ಯದ ಬೆಳವಣಿಗೆ ಮತ್ತು ವಿಕಸನ ನಿಯಂತ್ರಿಸುವ ರಾಸಾಯನಿಕ." },
        { t: "ಅನುವರ್ತನೆ", d: "ಪ್ರಚೋದನೆಯ ಕಡೆಗೆ ಅಥವಾ ದೂರಕ್ಕೆ ಸಸ್ಯಭಾಗದ ಬೆಳವಣಿಗೆಯ ಚಲನೆ." },
        { t: "ದ್ಯುತಿಅನುವರ್ತನೆ", d: "ಬೆಳಕಿಗೆ ಪ್ರತಿಕ್ರಿಯೆಯಾಗಿ ಬೆಳವಣಿಗೆ." },
        { t: "ಗುರುತ್ವಾನುವರ್ತನೆ", d: "ಗುರುತ್ವಕ್ಕೆ ಪ್ರತಿಕ್ರಿಯೆಯಾಗಿ ಬೆಳವಣಿಗೆ." },
        { t: "ಅಗ್ರ ಪ್ರಾಬಲ್ಯ", d: "ಕಾಂಡದ ತುದಿ ಪಕ್ಕದ ಮೊಗ್ಗುಗಳ ಬೆಳವಣಿಗೆಯನ್ನು ತಡೆಯುವುದು." },
        { t: "ಸುಪ್ತಾವಸ್ಥೆ", d: "ಬೀಜ ಅಥವಾ ಮೊಗ್ಗಿನ ವಿಶ್ರಾಂತಿ ಸ್ಥಿತಿ." },
        { t: "ಹಣ್ಣಾಗುವಿಕೆ", d: "ಹಣ್ಣನ್ನು ಮೃದು, ಸಿಹಿ ಮತ್ತು ಬಣ್ಣದ್ದಾಗಿಸುವ ಬದಲಾವಣೆಗಳು." }
      ],
      practice: [
        { q: "ಕಿಟಕಿಯ ಮೇಲಿನ ಸಸಿ ಕಿಟಕಿಯ ಕಡೆ ಏಕೆ ಬಾಗುತ್ತದೆ ವಿವರಿಸಿ.", a: "ಬೆಳಕು ಒಂದು ಕಡೆಯಿಂದ ಬರುತ್ತದೆ, ಹಾಗಾಗಿ ಆಕ್ಸಿನ್ ನೆರಳಿನ ಕಡೆ ಹೋಗುತ್ತದೆ; ಅಲ್ಲಿನ ಕೋಶಗಳು ಉದ್ದವಾಗುತ್ತವೆ, ಹಾಗಾಗಿ ಕಾಂಡ ಬೆಳಕಿನ ಕಡೆ ಬಾಗುತ್ತದೆ." },
        { q: "ತೋಟಗಾರರು ಸಸ್ಯದ ತುದಿಯನ್ನು ಏಕೆ ಚಿವುಟುತ್ತಾರೆ?", a: "ತುದಿ ತೆಗೆದರೆ ಪಕ್ಕದ ಮೊಗ್ಗುಗಳನ್ನು ತಡೆಯುವ ಆಕ್ಸಿನ್ ಹೋಗುತ್ತದೆ, ಹಾಗಾಗಿ ಹೆಚ್ಚು ಕೊಂಬೆಗಳು ಬೆಳೆದು ಸಸ್ಯ ದಟ್ಟವಾಗುತ್ತದೆ." },
        { q: "ಹಣ್ಣುಗಳನ್ನು ಹೆಚ್ಚಾಗಿ ಕಾಯಿಯಾಗಿಯೇ ಏಕೆ ಸಾಗಿಸುತ್ತಾರೆ?", a: "ಕಾಯಿ ಗಟ್ಟಿಯಾಗಿದ್ದು ಹೆಚ್ಚು ಕಾಲ ಉಳಿಯುತ್ತದೆ; ನಂತರ ಎಥಿಲೀನ್ ಅನಿಲದಿಂದ ಹಣ್ಣಾಗಿಸಬಹುದು." },
        { q: "ಬರದಲ್ಲಿ ಸಸ್ಯಕ್ಕೆ ಸಹಾಯ ಮಾಡುವ ಹಾರ್ಮೋನನ್ನು ಹೆಸರಿಸಿ ಮತ್ತು ಹೇಗೆಂದು ತಿಳಿಸಿ.", a: "ಅಬ್ಸಿಸಿಕ್ ಆಮ್ಲ: ಅದು ಪತ್ರರಂಧ್ರಗಳನ್ನು ಮುಚ್ಚಿಸುತ್ತದೆ, ಹಾಗಾಗಿ ಕಡಿಮೆ ನೀರು ಕಳೆಯುತ್ತದೆ." }
      ]
    }
  },

  build: function (api) {
    var THREE = api.THREE, mat = api.mat, K = TL.bioKit(api), V = K.V;
    var s = api.state;
    s.K = K;

    var table = mat(0xd8cbb0, { rough: 0.9 });
    api.decor(api.box(14, 0.2, 3.4, table, 0, -0.1, 0));
    var potM = mat(0xc0603a, { rough: 0.7 }), soilM = mat(0x5a3a22, { rough: 0.95 });
    var stemM = mat(0x6aa84a, { rough: 0.55 }), leafM = mat(0x3faa3a, { rough: 0.55 });
    function pot(x, z) {
      var g = new THREE.Group();
      g.add(api.cyl(0.45, 0.35, 0.6, potM, 0, 0.3, 0, 20));
      g.add(api.cyl(0.42, 0.42, 0.04, soilM, 0, 0.6, 0, 20));
      g.position.set(x, 0, z || 0);
      return g;
    }
    function leafPair(y, size) {
      var g = new THREE.Group();
      [-1, 1].forEach(function (sd) {
        var l = K.leaf(size, size * 0.55, leafM);
        l.rotation.set(0.6, sd > 0 ? 0 : Math.PI, 0.4);
        g.add(l);
      });
      g.position.y = y;
      return g;
    }

    /* 1. Auxin: dibba (ek taraf khidki) + jhukne wala paudha + lamp */
    var AX = -5.6;
    var ax = new THREE.Group();
    var boxM = mat(0x8a7a6a, { rough: 0.8, opacity: 0.35 });
    boxM.depthWrite = false;
    ax.add(api.box(1.6, 2.4, 1.4, boxM, 0, 1.2, 0));
    ax.add(pot(0, 0));
    /* tana: 8 tukde ek-doosre ke andar, taaki jhuk sake */
    s.segs = [];
    var parent = ax, segH = 0.2;
    var base = new THREE.Group(); base.position.set(0, 0.62, 0); ax.add(base); parent = base;
    for (var i = 0; i < 8; i++) {
      var seg = new THREE.Group();
      seg.add(api.cyl(0.04, 0.045, segH, stemM, 0, segH / 2, 0, 8));
      if (i > 0) seg.position.y = segH;
      parent.add(seg);
      s.segs.push(seg);
      parent = seg;
    }
    var tip = leafPair(segH, 0.35);
    parent.add(tip);
    /* auxin ke peele bindu: tane ke dono taraf, roshni me ek taraf chale jaate */
    s.aux = [];
    var auxM = mat(0xffd820, { glow: 0xffc000, glowLevel: 0.8 });
    s.segs.forEach(function (sg, k) {
      if (k < 2) return;
      [-1, 1].forEach(function (sd) {
        var d = api.sphere(0.03, auxM, sd * 0.06, 0.1, 0.03, 6);
        d.userData.sd = sd;
        sg.add(d);
        s.aux.push(d);
      });
    });
    s.lamp = new THREE.Group();
    s.lamp.add(api.sphere(0.22, mat(0xfff2a0, { glow: 0xfff080, glowLevel: 1 }), 0, 0, 0, 14));
    s.lamp.add(api.cyl(0.02, 0.02, 0.8, mat(0x444444), 0, -0.5, 0, 6));
    s.lamp.position.set(0, 2.9, 0);
    ax.add(s.lamp);
    api.addPart("auxin", ax, V(AX, 0, 0), null, { label: V(0, 2.7, 0.6) });

    /* 2. Gravitropism: kaanch ke jaar me karvat beej: jad neeche mudi, tana upar */
    var GX = -3.3;
    var gr = new THREE.Group();
    var gl = mat(0xdff0ff, { rough: 0.1, opacity: 0.3 }); gl.depthWrite = false;
    gr.add(api.cyl(0.6, 0.6, 1.6, gl, 0, 0.8, 0, 24));
    gr.add(api.cyl(0.55, 0.55, 0.3, mat(0xe8e0d0, { rough: 0.9 }), 0, 0.15, 0, 20));
    var seed = K.blob(0.13, mat(0x8a4a2a, { rough: 0.5 }), 1.4, 0.9, 0.8, 12);
    seed.position.set(0, 0.9, 0); seed.rotation.z = Math.PI / 2;
    gr.add(seed);
    gr.add(K.tube([[0.1, 0.9, 0], [0.35, 0.85, 0], [0.42, 0.6, 0], [0.4, 0.35, 0]], 0.025, mat(0xf2ecd8), false, 20));
    gr.add(K.tube([[-0.1, 0.92, 0], [-0.3, 1.0, 0], [-0.35, 1.25, 0], [-0.3, 1.5, 0]], 0.03, stemM, false, 20));
    var gl2 = leafPair(1.5, 0.18); gl2.position.x = -0.3; gr.add(gl2);
    api.addPart("gravitropism", gr, V(GX, 0, 0), null, { label: V(0, 1.9, 0) });

    /* 3. Gibberellin: bauna vs lamba paudha + spray botal */
    var BX = -1.0;
    var gb = new THREE.Group();
    [[-0.55, 0.6], [0.55, 2.0]].forEach(function (p) {
      var pg = pot(p[0], 0);
      pg.add(api.cyl(0.04, 0.05, p[1], stemM, 0, 0.6 + p[1] / 2, 0, 8));
      for (var k = 0; k < (p[1] > 1 ? 4 : 2); k++) pg.add(leafPair(0.8 + k * (p[1] / 4.5), 0.35));
      gb.add(pg);
    });
    var spray = new THREE.Group();
    spray.add(api.cyl(0.12, 0.14, 0.4, mat(0x4a8ae0, { rough: 0.3 }), 0, 0.2, 0, 12));
    spray.add(api.box(0.18, 0.08, 0.08, mat(0xeeeeee), 0.1, 0.45, 0));
    spray.position.set(1.05, 0, 0.35);
    gb.add(spray);
    api.addPart("gibberellin", gb, V(BX, 0, 0), null, { label: V(0.55, 2.9, 0) });

    /* 4. Cytokinin: ghana paudha, bagal ki shakhayein */
    var CX = 1.4;
    var ck = pot(0, 0);
    ck.add(api.cyl(0.05, 0.06, 1.6, stemM, 0, 1.4, 0, 8));
    for (i = 0; i < 6; i++) {
      var y = 0.9 + i * 0.22, ang = i * 2.4;
      var end = V(Math.cos(ang) * 0.55, y + 0.35, Math.sin(ang) * 0.55);
      ck.add(api.rod(V(0, y, 0), end, 0.025, stemM));
      var lp = leafPair(0, 0.28); lp.position.copy(end); ck.add(lp);
    }
    ck.add(leafPair(2.2, 0.3));
    var cytG = new THREE.Group(); cytG.add(ck);
    api.addPart("cytokinin", cytG, V(CX, 0, 0), null, { label: V(0, 2.6, 0) });

    /* 5. Ethylene: thaali me kele + pakka seb, gas ke kan */
    var EX = 3.6;
    var et = new THREE.Group();
    et.add(api.cyl(0.9, 0.6, 0.15, mat(0xe0e4ec, { rough: 0.3, metal: 0.3 }), 0, 0.08, 0, 28));
    s.banM = mat(0x7ab83a, { rough: 0.5 });
    s.bananas = [];
    for (i = 0; i < 4; i++) {
      var pts = [];
      for (var k = 0; k <= 6; k++) { var a = -0.9 + k * 0.3; pts.push([Math.sin(a) * 0.55, 0.3 + (1 - Math.cos(a)) * 0.5 + i * 0.06, -0.15 + i * 0.1]); }
      var bn = K.tube(pts, 0.07, s.banM, false, 24);
      et.add(bn);
      s.bananas.push(bn);
    }
    var apple = api.sphere(0.22, mat(0xd8302a, { rough: 0.4 }), 0.5, 0.35, 0.35, 16);
    et.add(apple);
    et.add(api.cyl(0.01, 0.015, 0.1, mat(0x5a3a1a), 0.5, 0.6, 0.35, 6));
    api.addPart("ethylene", et, V(EX, 0, 0), null, { label: V(0, 1.4, 0) });
    s.gas = K.flow([[EX + 0.5, 0.6, 0.35], [EX + 0.2, 1.0, 0.1], [EX - 0.2, 0.8, -0.1], [EX - 0.4, 0.5, 0]], { count: 6, speed: 0.3, on: false, spinItems: true, make: function () {
      return K.molecule([["C", -0.3, 0, 0], ["C", 0.3, 0, 0], ["H", -0.55, 0.25, 0], ["H", -0.55, -0.25, 0], ["H", 0.55, 0.25, 0], ["H", 0.55, -0.25, 0]], [[0, 1], [0, 2], [0, 3], [1, 4], [1, 5]], 0.2);
    } });

    /* 6. Abscisic acid: chhota ped, girti pattiyan, so rahi kali */
    var ABX = 5.8;
    var ab = new THREE.Group();
    var bark = mat(0x7a5232, { rough: 0.8 });
    ab.add(api.cyl(0.08, 0.12, 1.6, bark, 0, 0.8, 0, 10));
    [[-0.5, 1.9], [0.5, 2.0], [0, 2.2]].forEach(function (p) { ab.add(api.rod(V(0, 1.4, 0), V(p[0], p[1], 0), 0.04, bark)); });
    var aut = mat(0xd88a2a, { rough: 0.6 });
    s.fall = [];
    for (i = 0; i < 6; i++) {
      var lf = K.leaf(0.22, 0.12, aut);
      lf.position.set(-0.5 + i * 0.2, 2.0, (i % 2) * 0.2 - 0.1);
      lf.userData = { x0: lf.position.x, y0: 2.0, ph: i * 0.9 };
      ab.add(lf);
      s.fall.push(lf);
    }
    ab.add(api.sphere(0.06, mat(0x6a4a2a, { rough: 0.5 }), 0, 2.25, 0, 8));
    api.addPart("abscisic", ab, V(ABX, 0, 0), null, { label: V(0, 2.6, 0) });

    s.side = false;
    s.bend = 0;
    s.ripe = false;
    s.ripeK = 0;
    s.toggleLight = function () {
      s.side = !s.side;
      api.setButton("light", s.side ? "light_off" : "light_btn");
      api.select("auxin");
      api.setStatus(s.side ? "light_on" : "light_top", 9000);
    };
    s.toggleRipen = function () {
      s.ripe = !s.ripe;
      s.gas.set(s.ripe);
      api.setButton("ripen", s.ripe ? "unripe_btn" : "ripen_btn");
      if (s.ripe) { api.select("ethylene"); api.setStatus("ripen_on", 9000); } else { s.ripeK = 0; api.setStatus(null); }
    };
  },

  update: function (api, dt, t) {
    var s = api.state;
    s.K.update(dt);
    /* lamp: upar ya daayein; paudha dheere jhukta hai */
    var lx = s.side ? 1.15 : 0, ly = s.side ? 1.7 : 2.9;
    s.lamp.position.x += (lx - s.lamp.position.x) * Math.min(1, dt * 3);
    s.lamp.position.y += (ly - s.lamp.position.y) * Math.min(1, dt * 3);
    s.bend += ((s.side ? 1 : 0) - s.bend) * Math.min(1, dt * (api.reduceMotion ? 3 : 0.5));
    s.segs.forEach(function (sg, k) { sg.rotation.z = -0.11 * s.bend * (k / 7); });
    /* auxin: roshni ki ulti (chhaaya, -x) taraf */
    s.aux.forEach(function (d) {
      var wantVisible = !s.side || d.userData.sd < 0;
      d.scale.setScalar(wantVisible ? 1 : Math.max(0.01, 1 - s.bend));
      d.position.x = d.userData.sd * 0.06 * (s.side && d.userData.sd < 0 ? 1.3 : 1);
    });
    /* kele: hare se peele */
    if (s.ripe) s.ripeK = Math.min(1, s.ripeK + dt * 0.25);
    s.bananas.forEach(function (b) { b.material.color.setRGB(0.48 + 0.47 * s.ripeK, 0.72 + 0.13 * s.ripeK, 0.23 - 0.05 * s.ripeK); });
    /* girti pattiyan */
    if (!api.reduceMotion) s.fall.forEach(function (lf) {
      var k = ((t * 0.25 + lf.userData.ph) % 1);
      lf.position.y = lf.userData.y0 - k * 1.9;
      lf.position.x = lf.userData.x0 + Math.sin(k * 8 + lf.userData.ph) * 0.15;
      lf.rotation.y = k * 6;
    });
  }
});
