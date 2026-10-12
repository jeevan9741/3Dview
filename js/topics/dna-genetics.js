/* Topic: DNA and genetics (Zoology, advanced) */
TL.start({
  id: "dna-genetics",
  camera: { theta: 0.25, phi: 1.3, radius: 14, target: [0.9, 0, 0], min: 5, max: 26 },
  labels: true,
  order: ["backbone", "adenine", "thymine", "guanine", "cytosine", "hbond", "gene", "chromosome"],
  parts: {
    backbone: { emoji: "🪜" }, adenine: { emoji: "🟢" }, thymine: { emoji: "🔴" }, guanine: { emoji: "🟡" },
    cytosine: { emoji: "🔵" }, hbond: { emoji: "🤝" }, gene: { emoji: "📜" }, chromosome: { emoji: "❌" }
  },
  quiz: [
    { part: "adenine", a: 1 }, { part: "cytosine", a: 0 }, { part: "backbone", a: 2 }, { part: "hbond", a: 3 },
    { part: "gene", a: 0 }, { part: "chromosome", a: 1 }, { part: "backbone", a: 1 }, { part: "backbone", a: 2 }
  ],
  actions: [
    { id: "rep", label: "rep_btn", main: true, onClick: function (api) { api.state.replicate(); } },
    { id: "mut", label: "mut_btn", onClick: function (api) { api.state.toggleMutation(); } }
  ],

  text: {
    en: {
      tagline: "The instruction book of life",
      intro: '<strong>DNA is a twisted ladder.</strong> The colours are the four bases: <b style="color:#2f9e44">A</b> green, <b style="color:#e03131">T</b> red, <b style="color:#e8a200">G</b> yellow, <b style="color:#3b5bdb">C</b> blue. Press "🧬 Unzip & copy DNA" to watch DNA copy itself, and "⚠️ Make a mutation" to change one letter.',
      ui: {
        rep_btn: "🧬 Unzip & copy DNA", rep_reset: "🔁 Reset the DNA",
        rep1: "Helicase unzips the DNA by breaking the hydrogen bonds",
        rep2: "New bases pair up: A with T, G with C. DNA polymerase joins them into new strands",
        rep3: "Two identical DNA molecules! Each has one old strand and one new strand: semi-conservative replication",
        mut_btn: "⚠️ Make a mutation", mut_undo: "↩️ Undo the mutation",
        mut_on: "One base pair changed from A-T to G-C (see 3 hydrogen bonds instead of 2). This is a point mutation",
        mut_off: "The original A-T pair is back",
        mut_wait: "Reset the DNA first, then make a mutation"
      },
      parts: {
        backbone: { name: "Sugar-phosphate backbone", short: "Backbone", tag: "The two side rails of the ladder",
          what: "DNA looks like a twisted ladder. The two side rails are long chains of sugar (deoxyribose) and phosphate. The orange balls are phosphates.",
          adv: "Each building block of DNA is a nucleotide: one sugar, one phosphate and one base. The two strands run in opposite directions (antiparallel: one 5'→3', the other 3'→5') and twist into a right-handed double helix about 2 nanometres wide, making a full turn about every 10 base pairs.",
          real: "Like the two side ropes of a rope ladder that hold all the steps in place.",
          fact: "Rosalind Franklin's X-ray 'Photo 51' helped James Watson and Francis Crick work out the double helix in 1953." },
        adenine: { name: "Adenine (A)", short: "A · adenine", tag: "Always pairs with T",
          what: "Adenine is one of the four bases, the 'letters' of DNA. It always pairs with thymine (T), joined by 2 hydrogen bonds.",
          adv: "Adenine and guanine are purines (bases with two rings); thymine and cytosine are pyrimidines (one ring). A purine always pairs with a pyrimidine, so every rung of the ladder is the same width. Erwin Chargaff found that in any DNA, the amount of A equals T and the amount of G equals C.",
          real: "If one strand reads A-T-G, the other must read T-A-C. This rule lets cells copy DNA very accurately.",
          fact: "The 'A' in ATP, the energy molecule made by mitochondria, is the same adenine." },
        thymine: { name: "Thymine (T)", short: "T · thymine", tag: "Always pairs with A",
          what: "Thymine pairs with adenine. In RNA, the messenger that carries a copy of a gene, thymine is replaced by a similar base called uracil (U).",
          adv: "Thymine is a pyrimidine. Ultraviolet light from the sun can make two neighbouring thymines stick together (a thymine dimer), which damages DNA. Cells repair most of this, but too much sun can leave mutations that may lead to skin cancer.",
          real: "Sunscreen helps protect the DNA in your skin cells from UV damage.",
          fact: "Every cell in your body repairs thousands of small DNA damages each day." },
        guanine: { name: "Guanine (G)", short: "G · guanine", tag: "Always pairs with C",
          what: "Guanine pairs with cytosine, joined by 3 hydrogen bonds, so a G-C pair holds together more strongly than an A-T pair.",
          adv: "Because G-C pairs have three hydrogen bonds, DNA rich in G-C needs a higher temperature to 'melt' (separate its strands). Laboratories use heat this way in PCR, the method used in COVID-19 tests, which heats DNA to about 95 °C to separate the strands before copying them.",
          real: "Tiny guanine crystals make fish scales look silvery and shiny.",
          fact: "Guanine was first found in guano (bird droppings), which is how it got its name." },
        cytosine: { name: "Cytosine (C)", short: "C · cytosine", tag: "Always pairs with G",
          what: "Cytosine pairs with guanine. The order of A, T, G and C along DNA spells out the instructions for making proteins.",
          adv: "Three bases in a row (a codon) code for one amino acid; for example ATG codes for methionine and is the usual 'start' signal. Cells can also attach small methyl groups to cytosine to switch genes off without changing the letters. This is part of epigenetics.",
          real: "Like letters making words: the order matters, just as 'DOG' and 'GOD' use the same letters but mean different things.",
          fact: "Human DNA has about 3 billion base pairs in each set of chromosomes." },
        hbond: { name: "Hydrogen bonds", tag: "The weak 'glue' in the middle",
          what: "The two bases in each rung are held together by weak hydrogen bonds (the white dots): 2 between A and T, 3 between G and C. They are weak enough to unzip when DNA is copied.",
          adv: "One hydrogen bond is weak, but millions together keep the double helix stable. The enzyme helicase breaks them to unzip DNA during replication and transcription, while the strong covalent bonds in the backbone stay unbroken.",
          real: "Like a zip: each tooth is weak, but together they hold firmly, and the zip still opens easily when pulled.",
          fact: "Heating DNA to around 90–95 °C separates the two strands, but the backbones do not break." },
        gene: { name: "Gene", tag: "One recipe in the book",
          what: "A gene is a section of DNA (shown by the golden sleeve) that carries the instructions for one product, usually a protein. Genes help decide traits like eye colour and blood group.",
          adv: "Different versions of a gene are called alleles. You get one allele of each gene from each parent. A dominant allele can hide a recessive one, which is why a trait can skip a generation (Mendel's laws). Humans have about 20,000 protein-coding genes, only about 1–2% of all our DNA.",
          real: "Your blood group (A, B, AB or O) is decided by the alleles of a single gene.",
          fact: "Gregor Mendel worked out the basic rules of inheritance with pea plants in the 1860s, long before anyone knew about DNA." },
        chromosome: { name: "Chromosome", tag: "DNA packed for travel",
          what: "A chromosome is one very long DNA molecule coiled tightly around proteins. Before a cell divides, each chromosome copies itself and looks like an X: two identical sister chromatids joined at the centromere.",
          adv: "Human body cells have 46 chromosomes (23 pairs): one of each pair from the mother, one from the father. Pair 23 are the sex chromosomes: XX is usually female, XY usually male. DNA wraps around histone proteins like thread on spools, then coils again and again, so 2 metres of DNA fit inside a nucleus a few micrometres wide.",
          real: "A karyotype is a picture of all of a person's chromosomes; doctors use it to check for conditions such as Down syndrome (an extra chromosome 21).",
          fact: "More chromosomes does not mean a more complex body: a potato plant has 48 chromosomes, more than a human." }
      },
      quiz: [
        { q: "In DNA, adenine (A) always pairs with…", o: ["Guanine", "Thymine", "Cytosine", "Uracil"],
          why: "A pairs with T (2 hydrogen bonds). Uracil is found in RNA, not DNA." },
        { q: "Cytosine (C) pairs with…", o: ["Guanine", "Adenine", "Thymine", "Cytosine"],
          why: "C pairs with G, joined by 3 hydrogen bonds." },
        { q: "What forms the 'side rails' of the DNA ladder?", o: ["Hydrogen bonds", "Bases only", "Sugar and phosphate", "Proteins"],
          why: "The backbone is made of alternating sugar and phosphate." },
        { q: "How many hydrogen bonds join G and C?", o: ["1", "2", "4", "3"],
          why: "G-C pairs have 3 hydrogen bonds; A-T pairs have 2." },
        { q: "A section of DNA that codes for a protein is called a…", o: ["Gene", "Cell", "Ribosome", "Chromosome pair"],
          why: "A gene is a stretch of DNA with the instructions for one product." },
        { q: "How many chromosomes are in a normal human body cell?", o: ["23", "46", "48", "92"],
          why: "46, in 23 pairs. Egg and sperm cells have 23." },
        { q: "If one strand reads A-T-G-C, the other strand reads…", o: ["A-T-G-C", "T-A-C-G", "G-C-A-T", "C-G-T-A"],
          why: "Each base pairs with its partner: A↔T, T↔A, G↔C, C↔G." },
        { q: "When DNA copies itself, each new DNA molecule has…", o: ["two new strands", "two old strands", "one old and one new strand", "no strands"],
          why: "Replication is semi-conservative: each copy keeps one old strand as a template." }
      ],
      terms: [
        { t: "DNA", d: "Deoxyribonucleic acid, the molecule that carries genetic instructions." },
        { t: "Nucleotide", d: "A building block of DNA: a sugar, a phosphate and one base." },
        { t: "Complementary base pairing", d: "A always pairs with T, and G always pairs with C." },
        { t: "Double helix", d: "The shape of DNA: two strands twisted around each other like a spiral ladder." },
        { t: "Gene", d: "A section of DNA that codes for one product, usually a protein." },
        { t: "Allele", d: "One of the different versions of a gene." },
        { t: "Mutation", d: "A change in the DNA sequence." },
        { t: "Replication", d: "Copying DNA before a cell divides; each copy keeps one old strand." }
      ],
      practice: [
        { q: "Write the complementary strand for: A-A-T-G-C-C-T.", a: "T-T-A-C-G-G-A." },
        { q: "A DNA sample is 30% adenine. What percentage is thymine, guanine and cytosine?", a: "Thymine = 30% (it pairs with A). G + C = 40%, so guanine = 20% and cytosine = 20%." },
        { q: "Why do children look a little like both parents?", a: "They get half their chromosomes, and one allele of each gene, from each parent." },
        { q: "Why is a mutation in a skin cell not passed to children, while one in an egg or sperm cell can be?", a: "Only the DNA in sex cells (eggs and sperm) is passed on to the next generation." }
      ]
    },

    hi: {
      tagline: "जीवन की निर्देश पुस्तिका",
      intro: '<strong>DNA एक मुड़ी हुई सीढ़ी है।</strong> रंग चार क्षार हैं: <b style="color:#2f9e44">A</b> हरा, <b style="color:#e03131">T</b> लाल, <b style="color:#e8a200">G</b> पीला, <b style="color:#3b5bdb">C</b> नीला। "🧬 DNA खोलो और कॉपी करो" दबाकर DNA को अपनी कॉपी बनाते देखो, और "⚠️ उत्परिवर्तन करो" दबाकर एक अक्षर बदलो।',
      ui: {
        rep_btn: "🧬 DNA खोलो और कॉपी करो", rep_reset: "🔁 DNA वापस करो",
        rep1: "हेलिकेज़ हाइड्रोजन आबंध तोड़कर DNA की ज़िप खोलता है",
        rep2: "नए क्षार जोड़ी बनाते हैं: A के साथ T, G के साथ C। DNA पॉलिमरेज़ इन्हें नए सूत्रों में जोड़ता है",
        rep3: "दो एक जैसे DNA अणु! हर एक में एक पुराना और एक नया सूत्र है: अर्ध-संरक्षी प्रतिकृतिकरण",
        mut_btn: "⚠️ उत्परिवर्तन करो", mut_undo: "↩️ उत्परिवर्तन हटाओ",
        mut_on: "एक क्षार युग्म A-T से G-C में बदल गया (2 की जगह 3 हाइड्रोजन आबंध देखो)। यह बिंदु उत्परिवर्तन है",
        mut_off: "मूल A-T युग्म वापस आ गया",
        mut_wait: "पहले DNA वापस करो, फिर उत्परिवर्तन करो"
      },
      parts: {
        backbone: { name: "शर्करा-फ़ॉस्फ़ेट मेरुदंड", short: "मेरुदंड", tag: "सीढ़ी की दो बगल वाली रेलिंग",
          what: "DNA एक मुड़ी हुई सीढ़ी जैसा दिखता है। दोनों तरफ़ की रेलिंग शर्करा (डीऑक्सीराइबोज़) और फ़ॉस्फ़ेट की लंबी शृंखलाएँ हैं। नारंगी गोले फ़ॉस्फ़ेट हैं।",
          adv: "DNA की हर इकाई एक न्यूक्लियोटाइड है: एक शर्करा, एक फ़ॉस्फ़ेट और एक क्षार। दोनों सूत्र उलटी दिशाओं में चलते हैं (प्रतिसमांतर: एक 5'→3', दूसरा 3'→5') और लगभग 2 नैनोमीटर चौड़ी दक्षिणावर्त द्विकुंडलिनी बनाते हैं, जो लगभग हर 10 क्षार युग्म पर एक पूरा चक्कर लेती है।",
          real: "जैसे रस्सी की सीढ़ी की दो बगल वाली रस्सियाँ जो सारे डंडों को थामे रखती हैं।",
          fact: "रोज़लिंड फ़्रैंकलिन की एक्स-रे 'फ़ोटो 51' ने जेम्स वॉटसन और फ़्रांसिस क्रिक को 1953 में द्विकुंडलिनी समझने में मदद की।" },
        adenine: { name: "एडेनिन (A)", short: "A · एडेनिन", tag: "हमेशा T से जोड़ी",
          what: "एडेनिन चार क्षारों में से एक है, जो DNA के 'अक्षर' हैं। यह हमेशा थाइमिन (T) से 2 हाइड्रोजन आबंधों से जुड़ता है।",
          adv: "एडेनिन और ग्वानिन प्यूरीन हैं (दो छल्लों वाले क्षार); थाइमिन और साइटोसिन पिरिमिडीन हैं (एक छल्ला)। प्यूरीन हमेशा पिरिमिडीन से जुड़ता है, इसलिए सीढ़ी का हर डंडा एक जितना चौड़ा होता है। एरविन शार्गाफ़ ने पाया कि किसी भी DNA में A की मात्रा T के बराबर और G की मात्रा C के बराबर होती है।",
          real: "अगर एक सूत्र A-T-G पढ़ता है, तो दूसरा T-A-C पढ़ेगा। इसी नियम से कोशिकाएँ DNA की बहुत सही कॉपी बनाती हैं।",
          fact: "माइटोकॉन्ड्रिया में बनने वाले ऊर्जा अणु ATP का 'A' यही एडेनिन है।" },
        thymine: { name: "थाइमिन (T)", short: "T · थाइमिन", tag: "हमेशा A से जोड़ी",
          what: "थाइमिन एडेनिन से जोड़ी बनाता है। RNA में, जो जीन की कॉपी ले जाने वाला संदेशवाहक है, थाइमिन की जगह मिलता-जुलता क्षार यूरेसिल (U) होता है।",
          adv: "थाइमिन एक पिरिमिडीन है। सूरज की पराबैंगनी रोशनी पास-पास के दो थाइमिन को आपस में चिपका सकती है (थाइमिन डाइमर), जिससे DNA को नुकसान होता है। कोशिकाएँ इसका ज़्यादातर हिस्सा ठीक कर लेती हैं, पर बहुत ज़्यादा धूप ऐसे उत्परिवर्तन छोड़ सकती है जो त्वचा कैंसर की ओर ले जाएँ।",
          real: "सनस्क्रीन तुम्हारी त्वचा कोशिकाओं के DNA को पराबैंगनी नुकसान से बचाने में मदद करता है।",
          fact: "तुम्हारे शरीर की हर कोशिका रोज़ हज़ारों छोटे DNA नुकसान ठीक करती है।" },
        guanine: { name: "ग्वानिन (G)", short: "G · ग्वानिन", tag: "हमेशा C से जोड़ी",
          what: "ग्वानिन साइटोसिन से 3 हाइड्रोजन आबंधों से जुड़ता है, इसलिए G-C जोड़ी A-T जोड़ी से ज़्यादा मज़बूती से जुड़ी रहती है।",
          adv: "G-C जोड़ियों में तीन हाइड्रोजन आबंध होने से, ज़्यादा G-C वाले DNA के सूत्र अलग करने ('पिघलाने') के लिए ज़्यादा तापमान चाहिए। प्रयोगशालाएँ PCR में गर्मी का ऐसे ही इस्तेमाल करती हैं, जो COVID-19 जाँच का तरीक़ा है: कॉपी बनाने से पहले सूत्र अलग करने के लिए DNA को लगभग 95 °C तक गर्म किया जाता है।",
          real: "ग्वानिन के नन्हे क्रिस्टल मछली के शल्कों को चाँदी जैसा चमकीला बनाते हैं।",
          fact: "ग्वानिन पहली बार गुआनो (पक्षियों की बीट) में मिला था, इसी से इसका नाम पड़ा।" },
        cytosine: { name: "साइटोसिन (C)", short: "C · साइटोसिन", tag: "हमेशा G से जोड़ी",
          what: "साइटोसिन ग्वानिन से जोड़ी बनाता है। DNA पर A, T, G और C का क्रम प्रोटीन बनाने के निर्देश लिखता है।",
          adv: "एक पंक्ति में तीन क्षार (एक कोडॉन) एक अमीनो अम्ल का कोड होते हैं; जैसे ATG मेथियोनीन का कोड है और आमतौर पर 'शुरू' का संकेत है। कोशिकाएँ अक्षर बदले बिना जीन बंद करने के लिए साइटोसिन पर छोटे मिथाइल समूह भी जोड़ सकती हैं। यह एपिजेनेटिक्स का हिस्सा है।",
          real: "जैसे अक्षरों से शब्द बनते हैं: क्रम मायने रखता है, जैसे 'कमल' और 'मलक' में अक्षर वही हैं पर मतलब अलग।",
          fact: "इंसान के गुणसूत्रों के हर सेट में लगभग 3 अरब क्षार युग्म होते हैं।" },
        hbond: { name: "हाइड्रोजन आबंध", tag: "बीच का कमज़ोर 'गोंद'",
          what: "हर डंडे के दोनों क्षार कमज़ोर हाइड्रोजन आबंधों (सफ़ेद बिंदु) से जुड़े होते हैं: A और T के बीच 2, G और C के बीच 3। ये इतने कमज़ोर हैं कि DNA की कॉपी बनते समय खुल जाते हैं।",
          adv: "एक हाइड्रोजन आबंध कमज़ोर है, पर लाखों मिलकर द्विकुंडलिनी को स्थिर रखते हैं। प्रतिकृतिकरण और अनुलेखन के समय हेलिकेज़ एंज़ाइम इन्हें तोड़कर DNA खोलता है, जबकि मेरुदंड के मज़बूत सहसंयोजी आबंध नहीं टूटते।",
          real: "जैसे ज़िप: हर दाँत कमज़ोर है, पर सब मिलकर मज़बूती से पकड़ते हैं, और खींचने पर ज़िप आसानी से खुल भी जाती है।",
          fact: "DNA को लगभग 90–95 °C तक गर्म करने पर दोनों सूत्र अलग हो जाते हैं, पर मेरुदंड नहीं टूटते।" },
        gene: { name: "जीन", tag: "किताब की एक रेसिपी",
          what: "जीन DNA का एक हिस्सा है (सुनहरी आस्तीन से दिखाया गया) जिसमें एक उत्पाद, आमतौर पर एक प्रोटीन, बनाने के निर्देश होते हैं। जीन आँखों का रंग और रक्त समूह जैसे गुण तय करने में मदद करते हैं।",
          adv: "एक जीन के अलग-अलग रूप युग्मविकल्पी (एलील) कहलाते हैं। हर जीन का एक एलील माँ से और एक पिता से मिलता है। प्रभावी एलील अप्रभावी एलील को छिपा सकता है, इसीलिए कोई गुण एक पीढ़ी छोड़कर दिख सकता है (मेंडल के नियम)। इंसान में लगभग 20,000 प्रोटीन बनाने वाले जीन हैं, जो हमारे पूरे DNA का सिर्फ़ लगभग 1–2% हैं।",
          real: "तुम्हारा रक्त समूह (A, B, AB या O) एक ही जीन के एलील से तय होता है।",
          fact: "ग्रेगर मेंडल ने 1860 के दशक में मटर के पौधों से वंशागति के बुनियादी नियम खोजे, DNA के बारे में किसी के जानने से बहुत पहले।" },
        chromosome: { name: "गुणसूत्र", tag: "सफ़र के लिए पैक किया DNA",
          what: "गुणसूत्र एक बहुत लंबा DNA अणु है जो प्रोटीनों पर कसकर लिपटा होता है। कोशिका विभाजन से पहले हर गुणसूत्र अपनी कॉपी बनाता है और X जैसा दिखता है: दो एक जैसे अर्धगुणसूत्र (क्रोमैटिड) जो गुणसूत्रबिंदु (सेंट्रोमियर) पर जुड़े होते हैं।",
          adv: "इंसान की शरीर कोशिकाओं में 46 गुणसूत्र (23 जोड़े) होते हैं: हर जोड़े का एक माँ से, एक पिता से। 23वाँ जोड़ा लिंग गुणसूत्र है: XX आमतौर पर लड़की, XY आमतौर पर लड़का। DNA हिस्टोन प्रोटीनों पर धागे की रील की तरह लिपटता है, फिर बार-बार कुंडलित होता है, ताकि 2 मीटर DNA कुछ माइक्रोमीटर चौड़े केंद्रक में समा जाए।",
          real: "कैरियोटाइप किसी व्यक्ति के सारे गुणसूत्रों की तस्वीर है; डॉक्टर इससे डाउन सिंड्रोम (एक अतिरिक्त गुणसूत्र 21) जैसी स्थितियाँ जाँचते हैं।",
          fact: "ज़्यादा गुणसूत्र का मतलब ज़्यादा जटिल शरीर नहीं: आलू के पौधे में 48 गुणसूत्र हैं, इंसान से ज़्यादा।" }
      },
      quiz: [
        { q: "DNA में एडेनिन (A) हमेशा किससे जोड़ी बनाता है?", o: ["ग्वानिन", "थाइमिन", "साइटोसिन", "यूरेसिल"],
          why: "A, T से जुड़ता है (2 हाइड्रोजन आबंध)। यूरेसिल RNA में होता है, DNA में नहीं।" },
        { q: "साइटोसिन (C) किससे जोड़ी बनाता है?", o: ["ग्वानिन", "एडेनिन", "थाइमिन", "साइटोसिन"],
          why: "C, G से 3 हाइड्रोजन आबंधों से जुड़ता है।" },
        { q: "DNA सीढ़ी की 'बगल वाली रेलिंग' किससे बनती है?", o: ["हाइड्रोजन आबंध", "सिर्फ़ क्षार", "शर्करा और फ़ॉस्फ़ेट", "प्रोटीन"],
          why: "मेरुदंड बारी-बारी से शर्करा और फ़ॉस्फ़ेट से बनता है।" },
        { q: "G और C के बीच कितने हाइड्रोजन आबंध होते हैं?", o: ["1", "2", "4", "3"],
          why: "G-C जोड़ी में 3 हाइड्रोजन आबंध; A-T में 2।" },
        { q: "DNA का वह हिस्सा जो एक प्रोटीन का कोड रखता है, कहलाता है…", o: ["जीन", "कोशिका", "राइबोसोम", "गुणसूत्र जोड़ा"],
          why: "जीन DNA का वह हिस्सा है जिसमें एक उत्पाद के निर्देश होते हैं।" },
        { q: "इंसान की सामान्य शरीर कोशिका में कितने गुणसूत्र होते हैं?", o: ["23", "46", "48", "92"],
          why: "46, यानी 23 जोड़े। अंड और शुक्राणु कोशिकाओं में 23 होते हैं।" },
        { q: "अगर एक सूत्र A-T-G-C पढ़ता है, तो दूसरा सूत्र पढ़ेगा…", o: ["A-T-G-C", "T-A-C-G", "G-C-A-T", "C-G-T-A"],
          why: "हर क्षार अपने साथी से जुड़ता है: A↔T, T↔A, G↔C, C↔G।" },
        { q: "DNA की कॉपी बनने पर हर नए DNA अणु में होते हैं…", o: ["दो नए सूत्र", "दो पुराने सूत्र", "एक पुराना और एक नया सूत्र", "कोई सूत्र नहीं"],
          why: "प्रतिकृतिकरण अर्ध-संरक्षी है: हर कॉपी एक पुराना सूत्र साँचे के रूप में रखती है।" }
      ],
      terms: [
        { t: "DNA", d: "डीऑक्सीराइबोन्यूक्लिक अम्ल, वह अणु जो आनुवंशिक निर्देश रखता है।" },
        { t: "न्यूक्लियोटाइड", d: "DNA की इकाई: एक शर्करा, एक फ़ॉस्फ़ेट और एक क्षार।" },
        { t: "पूरक क्षार युग्मन", d: "A हमेशा T से, और G हमेशा C से जोड़ी बनाता है।" },
        { t: "द्विकुंडलिनी (डबल हेलिक्स)", d: "DNA का आकार: एक-दूसरे पर लिपटे दो सूत्र, घुमावदार सीढ़ी जैसे।" },
        { t: "जीन", d: "DNA का हिस्सा जो एक उत्पाद, आमतौर पर प्रोटीन, का कोड रखता है।" },
        { t: "युग्मविकल्पी (एलील)", d: "किसी जीन के अलग-अलग रूपों में से एक।" },
        { t: "उत्परिवर्तन (म्यूटेशन)", d: "DNA क्रम में बदलाव।" },
        { t: "प्रतिकृतिकरण", d: "कोशिका विभाजन से पहले DNA की कॉपी बनाना; हर कॉपी में एक पुराना सूत्र रहता है।" }
      ],
      practice: [
        { q: "इसका पूरक सूत्र लिखो: A-A-T-G-C-C-T।", a: "T-T-A-C-G-G-A।" },
        { q: "एक DNA नमूने में 30% एडेनिन है। थाइमिन, ग्वानिन और साइटोसिन कितने प्रतिशत हैं?", a: "थाइमिन = 30% (A से जुड़ता है)। G + C = 40%, इसलिए ग्वानिन = 20% और साइटोसिन = 20%।" },
        { q: "बच्चे थोड़े-थोड़े माता और पिता दोनों जैसे क्यों दिखते हैं?", a: "उन्हें आधे गुणसूत्र, और हर जीन का एक एलील, माता-पिता में से हर एक से मिलता है।" },
        { q: "त्वचा कोशिका का उत्परिवर्तन बच्चों तक क्यों नहीं जाता, जबकि अंड या शुक्राणु कोशिका का जा सकता है?", a: "सिर्फ़ जनन कोशिकाओं (अंड और शुक्राणु) का DNA अगली पीढ़ी तक जाता है।" }
      ]
    },

    mr: {
      tagline: "जीवनाची सूचना-पुस्तिका",
      intro: '<strong>DNA म्हणजे पिळलेली शिडी.</strong> रंग म्हणजे चार आम्लारी: <b style="color:#2f9e44">A</b> हिरवा, <b style="color:#e03131">T</b> लाल, <b style="color:#e8a200">G</b> पिवळा, <b style="color:#3b5bdb">C</b> निळा. "🧬 DNA उघडा आणि प्रत बनवा" दाबून DNA स्वतःची प्रत बनवताना बघा, आणि "⚠️ उत्परिवर्तन करा" दाबून एक अक्षर बदला.',
      ui: {
        rep_btn: "🧬 DNA उघडा आणि प्रत बनवा", rep_reset: "🔁 DNA पूर्ववत करा",
        rep1: "हेलिकेज हायड्रोजन बंध तोडून DNA ची चेन उघडतं",
        rep2: "नवे आम्लारी जोड्या बनवतात: A सोबत T, G सोबत C. DNA पॉलिमरेज त्यांना नव्या धाग्यांमध्ये जोडतं",
        rep3: "दोन एकसारखे DNA रेणू! प्रत्येकात एक जुना आणि एक नवा धागा आहे: अर्धसंवर्धी प्रतिकृती",
        mut_btn: "⚠️ उत्परिवर्तन करा", mut_undo: "↩️ उत्परिवर्तन काढा",
        mut_on: "एक आम्लारी जोडी A-T वरून G-C झाली (2 ऐवजी 3 हायड्रोजन बंध बघा). हे बिंदू उत्परिवर्तन आहे",
        mut_off: "मूळ A-T जोडी परत आली",
        mut_wait: "आधी DNA पूर्ववत करा, मग उत्परिवर्तन करा"
      },
      parts: {
        backbone: { name: "शर्करा-फॉस्फेट कणा", short: "कणा", tag: "शिडीचे दोन बाजूचे दांडे",
          what: "DNA पिळलेल्या शिडीसारखं दिसतं. दोन्ही बाजूचे दांडे म्हणजे शर्करा (डिऑक्सिरायबोज) आणि फॉस्फेटच्या लांब साखळ्या. नारंगी गोळे म्हणजे फॉस्फेट.",
          adv: "DNA चा प्रत्येक घटक म्हणजे न्यूक्लिओटाइड: एक शर्करा, एक फॉस्फेट आणि एक आम्लारी. दोन धागे विरुद्ध दिशांना धावतात (प्रतिसमांतर: एक 5'→3', दुसरा 3'→5') आणि सुमारे 2 नॅनोमीटर रुंद, उजव्या हाताची दुहेरी सर्पिल बनवतात, जी सुमारे दर 10 आम्लारी जोड्यांनी एक पूर्ण वळण घेते.",
          real: "दोरीच्या शिडीच्या दोन बाजूच्या दोऱ्यांसारखं, ज्या सगळ्या पायऱ्या धरून ठेवतात.",
          fact: "रोझलिंड फ्रँकलिन यांच्या एक्स-रे 'फोटो 51' ने जेम्स वॉटसन आणि फ्रान्सिस क्रिक यांना 1953 मध्ये दुहेरी सर्पिल शोधायला मदत केली." },
        adenine: { name: "ॲडेनिन (A)", short: "A · ॲडेनिन", tag: "नेहमी T शी जोडी",
          what: "ॲडेनिन हा चार आम्लारींपैकी एक, म्हणजे DNA चं 'अक्षर'. तो नेहमी थायमिनशी (T) 2 हायड्रोजन बंधांनी जोडलेला असतो.",
          adv: "ॲडेनिन आणि ग्वानिन प्युरीन आहेत (दोन कड्यांचे आम्लारी); थायमिन आणि सायटोसिन पिरिमिडीन आहेत (एक कडं). प्युरीन नेहमी पिरिमिडीनशी जोडतो, म्हणून शिडीची प्रत्येक पायरी सारख्याच रुंदीची असते. एर्विन शार्गाफ यांना आढळलं की कोणत्याही DNA मध्ये A चं प्रमाण T एवढं आणि G चं प्रमाण C एवढं असतं.",
          real: "एक धागा A-T-G वाचत असेल तर दुसरा T-A-C वाचेल. या नियमामुळे पेशी DNA ची अचूक प्रत बनवतात.",
          fact: "तंतुकणिकांमध्ये बनणाऱ्या ऊर्जा रेणू ATP मधला 'A' हाच ॲडेनिन आहे." },
        thymine: { name: "थायमिन (T)", short: "T · थायमिन", tag: "नेहमी A शी जोडी",
          what: "थायमिन ॲडेनिनशी जोडी बनवतो. RNA मध्ये, जो जनुकाची प्रत वाहणारा संदेशवाहक आहे, थायमिनऐवजी युरॅसिल (U) हा मिळताजुळता आम्लारी असतो.",
          adv: "थायमिन हा पिरिमिडीन आहे. सूर्याचा अतिनील प्रकाश शेजारच्या दोन थायमिनना एकमेकांना चिकटवू शकतो (थायमिन डायमर), त्याने DNA ला इजा होते. पेशी यातलं बहुतेक दुरुस्त करतात, पण जास्त ऊन अशी उत्परिवर्तनं मागे सोडू शकतं ज्यातून त्वचेचा कर्करोग होऊ शकतो.",
          real: "सनस्क्रीन तुमच्या त्वचापेशींतल्या DNA चं अतिनील इजेपासून रक्षण करायला मदत करतं.",
          fact: "तुमच्या शरीरातली प्रत्येक पेशी रोज DNA च्या हजारो छोट्या इजा दुरुस्त करते." },
        guanine: { name: "ग्वानिन (G)", short: "G · ग्वानिन", tag: "नेहमी C शी जोडी",
          what: "ग्वानिन सायटोसिनशी 3 हायड्रोजन बंधांनी जोडतो, म्हणून G-C जोडी A-T जोडीपेक्षा घट्ट धरून राहते.",
          adv: "G-C जोड्यांना तीन हायड्रोजन बंध असल्याने, जास्त G-C असलेल्या DNA चे धागे वेगळे करायला ('वितळवायला') जास्त तापमान लागतं. प्रयोगशाळा PCR मध्ये उष्णतेचा असा वापर करतात, ही COVID-19 चाचणीची पद्धत आहे: प्रत बनवण्यापूर्वी धागे वेगळे करण्यासाठी DNA सुमारे 95 °C पर्यंत तापवलं जातं.",
          real: "ग्वानिनचे बारीक स्फटिक माशांच्या खवल्यांना चांदीसारखी चमक देतात.",
          fact: "ग्वानिन पहिल्यांदा ग्वानोमध्ये (पक्ष्यांची विष्ठा) सापडलं, त्यावरूनच त्याचं नाव पडलं." },
        cytosine: { name: "सायटोसिन (C)", short: "C · सायटोसिन", tag: "नेहमी G शी जोडी",
          what: "सायटोसिन ग्वानिनशी जोडी बनवतो. DNA वरचा A, T, G आणि C चा क्रम प्रथिनं बनवण्याच्या सूचना लिहितो.",
          adv: "एका ओळीतले तीन आम्लारी (एक कोडॉन) एका अमिनो आम्लाचा संकेत असतात; उदा. ATG मिथिओनिनचा संकेत असून नेहमीचा 'सुरुवात' संकेत आहे. अक्षरं न बदलता जनुक बंद करण्यासाठी पेशी सायटोसिनवर छोटे मिथाइल गट जोडू शकतात. हा एपिजेनेटिक्सचा भाग आहे.",
          real: "अक्षरांनी शब्द बनतात तसं: क्रम महत्त्वाचा, जसं 'कमल' आणि 'मलक' मध्ये अक्षरं तीच पण अर्थ वेगळा.",
          fact: "माणसाच्या गुणसूत्रांच्या प्रत्येक संचात सुमारे 3 अब्ज आम्लारी जोड्या असतात." },
        hbond: { name: "हायड्रोजन बंध", tag: "मधला कमकुवत 'डिंक'",
          what: "प्रत्येक पायरीतले दोन आम्लारी कमकुवत हायड्रोजन बंधांनी (पांढरे ठिपके) जोडलेले असतात: A आणि T मध्ये 2, G आणि C मध्ये 3. DNA ची प्रत बनताना उघडता यावं इतके ते कमकुवत असतात.",
          adv: "एक हायड्रोजन बंध कमकुवत असतो, पण लाखो मिळून दुहेरी सर्पिल स्थिर ठेवतात. प्रतिकृती आणि प्रतिलेखनाच्या वेळी हेलिकेज विकर ते तोडून DNA उघडतं, तर कण्यातले मजबूत सहसंयुज बंध तुटत नाहीत.",
          real: "चेनसारखं: प्रत्येक दात कमकुवत, पण सगळे मिळून घट्ट धरतात, आणि ओढल्यावर चेन सहज उघडतेही.",
          fact: "DNA सुमारे 90–95 °C पर्यंत तापवलं की दोन धागे वेगळे होतात, पण कणे तुटत नाहीत." },
        gene: { name: "जनुक", tag: "पुस्तकातली एक पाककृती",
          what: "जनुक म्हणजे DNA चा एक भाग (सोनेरी बाहीने दाखवलेला), ज्यात एक उत्पादन, बहुधा प्रथिन, बनवण्याच्या सूचना असतात. डोळ्यांचा रंग आणि रक्तगट यांसारखे गुणधर्म ठरवायला जनुकं मदत करतात.",
          adv: "एकाच जनुकाच्या वेगवेगळ्या रूपांना युग्मविकल्पी (ॲलेल) म्हणतात. प्रत्येक जनुकाचा एक ॲलेल आईकडून आणि एक वडिलांकडून मिळतो. प्रभावी ॲलेल अप्रभावी ॲलेलला लपवू शकतो, म्हणून एखादा गुणधर्म एक पिढी सोडून दिसू शकतो (मेंडेलचे नियम). माणसात सुमारे 20,000 प्रथिन बनवणारी जनुकं आहेत, जी आपल्या एकूण DNA चा फक्त सुमारे 1–2% भाग आहेत.",
          real: "तुमचा रक्तगट (A, B, AB किंवा O) एकाच जनुकाच्या ॲलेलवरून ठरतो.",
          fact: "ग्रेगर मेंडेल यांनी 1860 च्या दशकात वाटाण्याच्या रोपांवरून आनुवंशिकतेचे मूळ नियम शोधले, DNA बद्दल कोणाला माहीत होण्याच्या खूप आधी." },
        chromosome: { name: "गुणसूत्र", tag: "प्रवासासाठी पॅक केलेलं DNA",
          what: "गुणसूत्र म्हणजे प्रथिनांभोवती घट्ट गुंडाळलेला एक खूप लांब DNA रेणू. पेशीविभाजनापूर्वी प्रत्येक गुणसूत्र स्वतःची प्रत बनवतं आणि X सारखं दिसतं: गुणसूत्रबिंदूवर (सेंट्रोमिअर) जोडलेले दोन एकसारखे क्रोमॅटिड.",
          adv: "माणसाच्या शरीरपेशींमध्ये 46 गुणसूत्रं (23 जोड्या) असतात: प्रत्येक जोडीतलं एक आईकडून, एक वडिलांकडून. 23 वी जोडी लिंग गुणसूत्रं: XX बहुधा मुलगी, XY बहुधा मुलगा. DNA हिस्टोन प्रथिनांवर रिळावरच्या दोऱ्यासारखं गुंडाळलं जातं, मग पुन्हा पुन्हा वेटोळं होतं, म्हणजे 2 मीटर DNA काही मायक्रोमीटर रुंद केंद्रकात मावतं.",
          real: "कॅरिओटाइप म्हणजे एखाद्या व्यक्तीच्या सगळ्या गुणसूत्रांचं चित्र; डॉक्टर त्यावरून डाऊन सिंड्रोमसारख्या (गुणसूत्र 21 जास्तीचं) स्थिती तपासतात.",
          fact: "जास्त गुणसूत्रं म्हणजे जास्त गुंतागुंतीचं शरीर नाही: बटाट्याच्या रोपात 48 गुणसूत्रं असतात, माणसापेक्षा जास्त." }
      },
      quiz: [
        { q: "DNA मध्ये ॲडेनिन (A) नेहमी कोणाशी जोडी बनवतो?", o: ["ग्वानिन", "थायमिन", "सायटोसिन", "युरॅसिल"],
          why: "A, T शी जोडतो (2 हायड्रोजन बंध). युरॅसिल RNA मध्ये असतो, DNA मध्ये नाही." },
        { q: "सायटोसिन (C) कोणाशी जोडी बनवतो?", o: ["ग्वानिन", "ॲडेनिन", "थायमिन", "सायटोसिन"],
          why: "C, G शी 3 हायड्रोजन बंधांनी जोडतो." },
        { q: "DNA शिडीचे 'बाजूचे दांडे' कशाचे बनलेले असतात?", o: ["हायड्रोजन बंध", "फक्त आम्लारी", "शर्करा आणि फॉस्फेट", "प्रथिनं"],
          why: "कणा आळीपाळीने शर्करा आणि फॉस्फेटने बनतो." },
        { q: "G आणि C मध्ये किती हायड्रोजन बंध असतात?", o: ["1", "2", "4", "3"],
          why: "G-C जोडीत 3 हायड्रोजन बंध; A-T मध्ये 2." },
        { q: "एका प्रथिनाचा संकेत असलेल्या DNA च्या भागाला म्हणतात…", o: ["जनुक", "पेशी", "रायबोसोम", "गुणसूत्र जोडी"],
          why: "जनुक म्हणजे एका उत्पादनाच्या सूचना असलेला DNA चा भाग." },
        { q: "माणसाच्या सामान्य शरीरपेशीत किती गुणसूत्रं असतात?", o: ["23", "46", "48", "92"],
          why: "46, म्हणजे 23 जोड्या. अंडपेशी आणि शुक्राणूंमध्ये 23 असतात." },
        { q: "एक धागा A-T-G-C वाचत असेल तर दुसरा धागा वाचेल…", o: ["A-T-G-C", "T-A-C-G", "G-C-A-T", "C-G-T-A"],
          why: "प्रत्येक आम्लारी आपल्या जोडीदाराशी जोडतो: A↔T, T↔A, G↔C, C↔G." },
        { q: "DNA ची प्रत बनल्यावर प्रत्येक नव्या DNA रेणूत असतात…", o: ["दोन नवे धागे", "दोन जुने धागे", "एक जुना आणि एक नवा धागा", "एकही धागा नाही"],
          why: "प्रतिकृती अर्धसंवर्धी असते: प्रत्येक प्रत एक जुना धागा साच्यासारखा ठेवते." }
      ],
      terms: [
        { t: "DNA", d: "डिऑक्सिरायबोन्यूक्लिक आम्ल, आनुवंशिक सूचना वाहणारा रेणू." },
        { t: "न्यूक्लिओटाइड", d: "DNA चा घटक: एक शर्करा, एक फॉस्फेट आणि एक आम्लारी." },
        { t: "पूरक आम्लारी जोडी", d: "A नेहमी T शी, आणि G नेहमी C शी जोडी बनवतो." },
        { t: "दुहेरी सर्पिल", d: "DNA चा आकार: एकमेकांभोवती पिळलेले दोन धागे, वळणदार शिडीसारखे." },
        { t: "जनुक", d: "एका उत्पादनाचा, बहुधा प्रथिनाचा, संकेत असलेला DNA चा भाग." },
        { t: "युग्मविकल्पी (ॲलेल)", d: "एखाद्या जनुकाच्या वेगवेगळ्या रूपांपैकी एक." },
        { t: "उत्परिवर्तन", d: "DNA च्या क्रमातला बदल." },
        { t: "प्रतिकृती", d: "पेशीविभाजनापूर्वी DNA ची प्रत बनवणं; प्रत्येक प्रतीत एक जुना धागा राहतो." }
      ],
      practice: [
        { q: "याचा पूरक धागा लिहा: A-A-T-G-C-C-T.", a: "T-T-A-C-G-G-A." },
        { q: "एका DNA नमुन्यात 30% ॲडेनिन आहे. थायमिन, ग्वानिन आणि सायटोसिन किती टक्के?", a: "थायमिन = 30% (A शी जोडतो). G + C = 40%, म्हणून ग्वानिन = 20% आणि सायटोसिन = 20%." },
        { q: "मुलं थोडी आई आणि थोडी वडिलांसारखी का दिसतात?", a: "त्यांना निम्मी गुणसूत्रं, आणि प्रत्येक जनुकाचा एक ॲलेल, आई-वडील प्रत्येकाकडून मिळतो." },
        { q: "त्वचेच्या पेशीतलं उत्परिवर्तन मुलांपर्यंत का जात नाही, पण अंडपेशी किंवा शुक्राणूतलं जाऊ शकतं?", a: "फक्त जननपेशींचं (अंडपेशी आणि शुक्राणू) DNA पुढच्या पिढीत जातं." }
      ]
    },

    kn: {
      tagline: "ಜೀವದ ಸೂಚನಾ ಪುಸ್ತಕ",
      intro: '<strong>DNA ಒಂದು ತಿರುಚಿದ ಏಣಿ.</strong> ಬಣ್ಣಗಳು ನಾಲ್ಕು ಪ್ರತ್ಯಾಮ್ಲಗಳು: <b style="color:#2f9e44">A</b> ಹಸಿರು, <b style="color:#e03131">T</b> ಕೆಂಪು, <b style="color:#e8a200">G</b> ಹಳದಿ, <b style="color:#3b5bdb">C</b> ನೀಲಿ. "🧬 DNA ತೆರೆದು ನಕಲು ಮಾಡಿ" ಒತ್ತಿ DNA ತನ್ನ ನಕಲು ಮಾಡುವುದನ್ನು ನೋಡಿ, ಮತ್ತು "⚠️ ಉತ್ಪರಿವರ್ತನೆ ಮಾಡಿ" ಒತ್ತಿ ಒಂದು ಅಕ್ಷರ ಬದಲಿಸಿ.',
      ui: {
        rep_btn: "🧬 DNA ತೆರೆದು ನಕಲು ಮಾಡಿ", rep_reset: "🔁 DNA ಮೊದಲಿನಂತೆ ಮಾಡಿ",
        rep1: "ಹೆಲಿಕೇಸ್ ಹೈಡ್ರೋಜನ್ ಬಂಧಗಳನ್ನು ಮುರಿದು DNA ಯ ಜಿಪ್ ತೆರೆಯುತ್ತದೆ",
        rep2: "ಹೊಸ ಪ್ರತ್ಯಾಮ್ಲಗಳು ಜೋಡಿಯಾಗುತ್ತವೆ: A ಜೊತೆ T, G ಜೊತೆ C. DNA ಪಾಲಿಮರೇಸ್ ಅವುಗಳನ್ನು ಹೊಸ ಎಳೆಗಳಾಗಿ ಜೋಡಿಸುತ್ತದೆ",
        rep3: "ಎರಡು ಒಂದೇ ರೀತಿಯ DNA ಅಣುಗಳು! ಪ್ರತಿಯೊಂದರಲ್ಲೂ ಒಂದು ಹಳೆಯ ಮತ್ತು ಒಂದು ಹೊಸ ಎಳೆ: ಅರ್ಧ-ಸಂರಕ್ಷಕ ಪ್ರತಿಕೃತಿ",
        mut_btn: "⚠️ ಉತ್ಪರಿವರ್ತನೆ ಮಾಡಿ", mut_undo: "↩️ ಉತ್ಪರಿವರ್ತನೆ ತೆಗೆಯಿರಿ",
        mut_on: "ಒಂದು ಪ್ರತ್ಯಾಮ್ಲ ಜೋಡಿ A-T ಯಿಂದ G-C ಆಯಿತು (2 ರ ಬದಲು 3 ಹೈಡ್ರೋಜನ್ ಬಂಧಗಳನ್ನು ನೋಡಿ). ಇದು ಬಿಂದು ಉತ್ಪರಿವರ್ತನೆ",
        mut_off: "ಮೂಲ A-T ಜೋಡಿ ಮರಳಿ ಬಂತು",
        mut_wait: "ಮೊದಲು DNA ಮೊದಲಿನಂತೆ ಮಾಡಿ, ನಂತರ ಉತ್ಪರಿವರ್ತನೆ ಮಾಡಿ"
      },
      parts: {
        backbone: { name: "ಸಕ್ಕರೆ-ಫಾಸ್ಫೇಟ್ ಬೆನ್ನೆಲುಬು", short: "ಬೆನ್ನೆಲುಬು", tag: "ಏಣಿಯ ಎರಡು ಪಕ್ಕದ ಕಂಬಿಗಳು",
          what: "DNA ತಿರುಚಿದ ಏಣಿಯಂತೆ ಕಾಣುತ್ತದೆ. ಎರಡು ಪಕ್ಕದ ಕಂಬಿಗಳು ಸಕ್ಕರೆ (ಡಿಆಕ್ಸಿರೈಬೋಸ್) ಮತ್ತು ಫಾಸ್ಫೇಟ್‌ನ ಉದ್ದ ಸರಪಳಿಗಳು. ಕಿತ್ತಳೆ ಚೆಂಡುಗಳು ಫಾಸ್ಫೇಟ್‌ಗಳು.",
          adv: "DNA ಯ ಪ್ರತಿ ಘಟಕ ಒಂದು ನ್ಯೂಕ್ಲಿಯೋಟೈಡ್: ಒಂದು ಸಕ್ಕರೆ, ಒಂದು ಫಾಸ್ಫೇಟ್ ಮತ್ತು ಒಂದು ಪ್ರತ್ಯಾಮ್ಲ. ಎರಡು ಎಳೆಗಳು ವಿರುದ್ಧ ದಿಕ್ಕುಗಳಲ್ಲಿ ಸಾಗುತ್ತವೆ (ಪ್ರತಿಸಮಾಂತರ: ಒಂದು 5'→3', ಇನ್ನೊಂದು 3'→5') ಮತ್ತು ಸುಮಾರು 2 ನ್ಯಾನೋಮೀಟರ್ ಅಗಲದ ಬಲಗೈ ದ್ವಿಸುರುಳಿಯಾಗಿ ತಿರುಚಿಕೊಳ್ಳುತ್ತವೆ, ಸುಮಾರು ಪ್ರತಿ 10 ಪ್ರತ್ಯಾಮ್ಲ ಜೋಡಿಗಳಿಗೆ ಒಂದು ಪೂರ್ಣ ಸುತ್ತು.",
          real: "ಎಲ್ಲಾ ಮೆಟ್ಟಿಲುಗಳನ್ನು ಹಿಡಿದಿಡುವ ಹಗ್ಗದ ಏಣಿಯ ಎರಡು ಪಕ್ಕದ ಹಗ್ಗಗಳಂತೆ.",
          fact: "ರೋಸಲಿಂಡ್ ಫ್ರಾಂಕ್ಲಿನ್ ಅವರ ಎಕ್ಸ್-ರೇ 'ಫೋಟೋ 51' 1953 ರಲ್ಲಿ ಜೇಮ್ಸ್ ವಾಟ್ಸನ್ ಮತ್ತು ಫ್ರಾನ್ಸಿಸ್ ಕ್ರಿಕ್ ಅವರಿಗೆ ದ್ವಿಸುರುಳಿ ಕಂಡುಹಿಡಿಯಲು ಸಹಾಯ ಮಾಡಿತು." },
        adenine: { name: "ಅಡೆನಿನ್ (A)", short: "A · ಅಡೆನಿನ್", tag: "ಯಾವಾಗಲೂ T ಜೊತೆ ಜೋಡಿ",
          what: "ಅಡೆನಿನ್ ನಾಲ್ಕು ಪ್ರತ್ಯಾಮ್ಲಗಳಲ್ಲಿ ಒಂದು, DNA ಯ 'ಅಕ್ಷರಗಳು'. ಅದು ಯಾವಾಗಲೂ ಥೈಮಿನ್ (T) ಜೊತೆ 2 ಹೈಡ್ರೋಜನ್ ಬಂಧಗಳಿಂದ ಜೋಡಿಯಾಗುತ್ತದೆ.",
          adv: "ಅಡೆನಿನ್ ಮತ್ತು ಗ್ವಾನಿನ್ ಪ್ಯೂರಿನ್‌ಗಳು (ಎರಡು ಉಂಗುರಗಳ ಪ್ರತ್ಯಾಮ್ಲಗಳು); ಥೈಮಿನ್ ಮತ್ತು ಸೈಟೋಸಿನ್ ಪಿರಿಮಿಡಿನ್‌ಗಳು (ಒಂದು ಉಂಗುರ). ಪ್ಯೂರಿನ್ ಯಾವಾಗಲೂ ಪಿರಿಮಿಡಿನ್ ಜೊತೆ ಜೋಡಿಯಾಗುತ್ತದೆ, ಹಾಗಾಗಿ ಏಣಿಯ ಪ್ರತಿ ಮೆಟ್ಟಿಲೂ ಒಂದೇ ಅಗಲ. ಯಾವುದೇ DNA ಯಲ್ಲಿ A ಪ್ರಮಾಣ T ಗೆ ಸಮ ಮತ್ತು G ಪ್ರಮಾಣ C ಗೆ ಸಮ ಎಂದು ಎರ್ವಿನ್ ಶಾರ್ಗಾಫ್ ಕಂಡುಹಿಡಿದರು.",
          real: "ಒಂದು ಎಳೆ A-T-G ಎಂದು ಓದಿದರೆ ಇನ್ನೊಂದು T-A-C ಎಂದು ಓದಬೇಕು. ಈ ನಿಯಮದಿಂದ ಕೋಶಗಳು DNA ಯನ್ನು ಬಹಳ ನಿಖರವಾಗಿ ನಕಲು ಮಾಡುತ್ತವೆ.",
          fact: "ಮೈಟೋಕಾಂಡ್ರಿಯ ತಯಾರಿಸುವ ಶಕ್ತಿ ಅಣು ATP ಯ 'A' ಇದೇ ಅಡೆನಿನ್." },
        thymine: { name: "ಥೈಮಿನ್ (T)", short: "T · ಥೈಮಿನ್", tag: "ಯಾವಾಗಲೂ A ಜೊತೆ ಜೋಡಿ",
          what: "ಥೈಮಿನ್ ಅಡೆನಿನ್ ಜೊತೆ ಜೋಡಿಯಾಗುತ್ತದೆ. ಜೀನ್‌ನ ನಕಲನ್ನು ಒಯ್ಯುವ ಸಂದೇಶವಾಹಕ RNA ಯಲ್ಲಿ ಥೈಮಿನ್ ಬದಲಿಗೆ ಯುರಾಸಿಲ್ (U) ಎಂಬ ಹೋಲುವ ಪ್ರತ್ಯಾಮ್ಲ ಇರುತ್ತದೆ.",
          adv: "ಥೈಮಿನ್ ಒಂದು ಪಿರಿಮಿಡಿನ್. ಸೂರ್ಯನ ನೇರಳಾತೀತ ಬೆಳಕು ಪಕ್ಕಪಕ್ಕದ ಎರಡು ಥೈಮಿನ್‌ಗಳನ್ನು ಅಂಟಿಸಬಹುದು (ಥೈಮಿನ್ ಡೈಮರ್), ಇದು DNA ಗೆ ಹಾನಿ ಮಾಡುತ್ತದೆ. ಕೋಶಗಳು ಇದರಲ್ಲಿ ಹೆಚ್ಚಿನದನ್ನು ಸರಿಪಡಿಸುತ್ತವೆ, ಆದರೆ ಅತಿಯಾದ ಬಿಸಿಲು ಚರ್ಮದ ಕ್ಯಾನ್ಸರ್‌ಗೆ ಕಾರಣವಾಗಬಹುದಾದ ಉತ್ಪರಿವರ್ತನೆಗಳನ್ನು ಉಳಿಸಬಹುದು.",
          real: "ಸನ್‌ಸ್ಕ್ರೀನ್ ನಿಮ್ಮ ಚರ್ಮ ಕೋಶಗಳ DNA ಯನ್ನು ನೇರಳಾತೀತ ಹಾನಿಯಿಂದ ರಕ್ಷಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
          fact: "ನಿಮ್ಮ ದೇಹದ ಪ್ರತಿ ಕೋಶವೂ ಪ್ರತಿದಿನ ಸಾವಿರಾರು ಸಣ್ಣ DNA ಹಾನಿಗಳನ್ನು ಸರಿಪಡಿಸುತ್ತದೆ." },
        guanine: { name: "ಗ್ವಾನಿನ್ (G)", short: "G · ಗ್ವಾನಿನ್", tag: "ಯಾವಾಗಲೂ C ಜೊತೆ ಜೋಡಿ",
          what: "ಗ್ವಾನಿನ್ ಸೈಟೋಸಿನ್ ಜೊತೆ 3 ಹೈಡ್ರೋಜನ್ ಬಂಧಗಳಿಂದ ಜೋಡಿಯಾಗುತ್ತದೆ, ಹಾಗಾಗಿ G-C ಜೋಡಿ A-T ಜೋಡಿಗಿಂತ ಗಟ್ಟಿಯಾಗಿ ಹಿಡಿದಿರುತ್ತದೆ.",
          adv: "G-C ಜೋಡಿಗಳಿಗೆ ಮೂರು ಹೈಡ್ರೋಜನ್ ಬಂಧಗಳಿರುವುದರಿಂದ, ಹೆಚ್ಚು G-C ಇರುವ DNA ಯ ಎಳೆಗಳನ್ನು ಬೇರ್ಪಡಿಸಲು ('ಕರಗಿಸಲು') ಹೆಚ್ಚು ತಾಪಮಾನ ಬೇಕು. ಪ್ರಯೋಗಾಲಯಗಳು PCR ನಲ್ಲಿ ಶಾಖವನ್ನು ಹೀಗೆ ಬಳಸುತ್ತವೆ, ಇದು COVID-19 ಪರೀಕ್ಷೆಯ ವಿಧಾನ: ನಕಲು ಮಾಡುವ ಮೊದಲು ಎಳೆಗಳನ್ನು ಬೇರ್ಪಡಿಸಲು DNA ಯನ್ನು ಸುಮಾರು 95 °C ವರೆಗೆ ಬಿಸಿಮಾಡಲಾಗುತ್ತದೆ.",
          real: "ಗ್ವಾನಿನ್‌ನ ಪುಟ್ಟ ಹರಳುಗಳು ಮೀನಿನ ಹುರುಪೆಗಳಿಗೆ ಬೆಳ್ಳಿಯಂತಹ ಹೊಳಪು ಕೊಡುತ್ತವೆ.",
          fact: "ಗ್ವಾನಿನ್ ಮೊದಲು ಗ್ವಾನೋದಲ್ಲಿ (ಹಕ್ಕಿಗಳ ಹಿಕ್ಕೆ) ಸಿಕ್ಕಿತು, ಅದರಿಂದಲೇ ಅದಕ್ಕೆ ಈ ಹೆಸರು." },
        cytosine: { name: "ಸೈಟೋಸಿನ್ (C)", short: "C · ಸೈಟೋಸಿನ್", tag: "ಯಾವಾಗಲೂ G ಜೊತೆ ಜೋಡಿ",
          what: "ಸೈಟೋಸಿನ್ ಗ್ವಾನಿನ್ ಜೊತೆ ಜೋಡಿಯಾಗುತ್ತದೆ. DNA ಯ ಮೇಲೆ A, T, G ಮತ್ತು C ಯ ಕ್ರಮ ಪ್ರೋಟೀನ್ ತಯಾರಿಸುವ ಸೂಚನೆಗಳನ್ನು ಬರೆಯುತ್ತದೆ.",
          adv: "ಸಾಲಿನಲ್ಲಿರುವ ಮೂರು ಪ್ರತ್ಯಾಮ್ಲಗಳು (ಒಂದು ಕೋಡಾನ್) ಒಂದು ಅಮೈನೋ ಆಮ್ಲದ ಸಂಕೇತ; ಉದಾ. ATG ಮೆಥಿಯೋನಿನ್‌ನ ಸಂಕೇತ ಮತ್ತು ಸಾಮಾನ್ಯ 'ಶುರು' ಸಂಕೇತ. ಅಕ್ಷರಗಳನ್ನು ಬದಲಿಸದೆ ಜೀನ್‌ಗಳನ್ನು ಆಫ್ ಮಾಡಲು ಕೋಶಗಳು ಸೈಟೋಸಿನ್‌ಗೆ ಸಣ್ಣ ಮೀಥೈಲ್ ಗುಂಪುಗಳನ್ನು ಜೋಡಿಸಬಹುದು. ಇದು ಎಪಿಜೆನೆಟಿಕ್ಸ್‌ನ ಭಾಗ.",
          real: "ಅಕ್ಷರಗಳಿಂದ ಪದಗಳಾಗುವಂತೆ: ಕ್ರಮ ಮುಖ್ಯ, 'ಕಮಲ' ಮತ್ತು 'ಮಲಕ' ದಲ್ಲಿ ಅಕ್ಷರಗಳು ಒಂದೇ ಆದರೆ ಅರ್ಥ ಬೇರೆ.",
          fact: "ಮನುಷ್ಯನ ವರ್ಣತಂತುಗಳ ಪ್ರತಿ ಗುಂಪಿನಲ್ಲಿ ಸುಮಾರು 300 ಕೋಟಿ ಪ್ರತ್ಯಾಮ್ಲ ಜೋಡಿಗಳಿವೆ." },
        hbond: { name: "ಹೈಡ್ರೋಜನ್ ಬಂಧಗಳು", tag: "ಮಧ್ಯದ ದುರ್ಬಲ 'ಅಂಟು'",
          what: "ಪ್ರತಿ ಮೆಟ್ಟಿಲಿನ ಎರಡು ಪ್ರತ್ಯಾಮ್ಲಗಳು ದುರ್ಬಲ ಹೈಡ್ರೋಜನ್ ಬಂಧಗಳಿಂದ (ಬಿಳಿ ಚುಕ್ಕೆಗಳು) ಜೋಡಣೆಯಾಗಿವೆ: A ಮತ್ತು T ನಡುವೆ 2, G ಮತ್ತು C ನಡುವೆ 3. DNA ನಕಲಾಗುವಾಗ ತೆರೆದುಕೊಳ್ಳುವಷ್ಟು ಅವು ದುರ್ಬಲ.",
          adv: "ಒಂದು ಹೈಡ್ರೋಜನ್ ಬಂಧ ದುರ್ಬಲ, ಆದರೆ ಲಕ್ಷಾಂತರ ಸೇರಿ ದ್ವಿಸುರುಳಿಯನ್ನು ಸ್ಥಿರವಾಗಿಡುತ್ತವೆ. ಪ್ರತಿಕೃತಿ ಮತ್ತು ಪ್ರತಿಲೇಖನದ ವೇಳೆ ಹೆಲಿಕೇಸ್ ಕಿಣ್ವ ಅವುಗಳನ್ನು ಮುರಿದು DNA ತೆರೆಯುತ್ತದೆ, ಆದರೆ ಬೆನ್ನೆಲುಬಿನ ಬಲವಾದ ಸಹವೇಲೆನ್ಸೀಯ ಬಂಧಗಳು ಮುರಿಯುವುದಿಲ್ಲ.",
          real: "ಜಿಪ್‌ನಂತೆ: ಪ್ರತಿ ಹಲ್ಲು ದುರ್ಬಲ, ಆದರೆ ಎಲ್ಲವೂ ಸೇರಿ ಗಟ್ಟಿಯಾಗಿ ಹಿಡಿಯುತ್ತವೆ, ಮತ್ತು ಎಳೆದಾಗ ಜಿಪ್ ಸುಲಭವಾಗಿ ತೆರೆಯುತ್ತದೆ.",
          fact: "DNA ಯನ್ನು ಸುಮಾರು 90–95 °C ವರೆಗೆ ಬಿಸಿಮಾಡಿದರೆ ಎರಡು ಎಳೆಗಳು ಬೇರೆಯಾಗುತ್ತವೆ, ಆದರೆ ಬೆನ್ನೆಲುಬುಗಳು ಮುರಿಯುವುದಿಲ್ಲ." },
        gene: { name: "ವಂಶವಾಹಿ (ಜೀನ್)", short: "ಜೀನ್", tag: "ಪುಸ್ತಕದ ಒಂದು ಪಾಕವಿಧಾನ",
          what: "ಜೀನ್ DNA ಯ ಒಂದು ಭಾಗ (ಚಿನ್ನದ ತೋಳಿನಿಂದ ತೋರಿಸಲಾಗಿದೆ), ಅದರಲ್ಲಿ ಒಂದು ಉತ್ಪನ್ನವನ್ನು, ಸಾಮಾನ್ಯವಾಗಿ ಒಂದು ಪ್ರೋಟೀನ್ ಅನ್ನು ತಯಾರಿಸುವ ಸೂಚನೆಗಳಿವೆ. ಕಣ್ಣಿನ ಬಣ್ಣ ಮತ್ತು ರಕ್ತದ ಗುಂಪಿನಂತಹ ಲಕ್ಷಣಗಳನ್ನು ಜೀನ್‌ಗಳು ನಿರ್ಧರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.",
          adv: "ಒಂದೇ ಜೀನ್‌ನ ಬೇರೆ ಬೇರೆ ರೂಪಗಳನ್ನು ಅಲೀಲ್‌ಗಳು ಎನ್ನುತ್ತಾರೆ. ಪ್ರತಿ ಜೀನ್‌ನ ಒಂದು ಅಲೀಲ್ ತಾಯಿಯಿಂದ, ಒಂದು ತಂದೆಯಿಂದ ಸಿಗುತ್ತದೆ. ಪ್ರಬಲ ಅಲೀಲ್ ದುರ್ಬಲ (ಅಪ್ರಬಲ) ಅಲೀಲ್ ಅನ್ನು ಮರೆಮಾಡಬಹುದು, ಅದಕ್ಕೇ ಒಂದು ಲಕ್ಷಣ ಒಂದು ಪೀಳಿಗೆ ಬಿಟ್ಟು ಕಾಣಿಸಬಹುದು (ಮೆಂಡಲ್‌ನ ನಿಯಮಗಳು). ಮನುಷ್ಯನಲ್ಲಿ ಸುಮಾರು 20,000 ಪ್ರೋಟೀನ್ ತಯಾರಿಸುವ ಜೀನ್‌ಗಳಿವೆ, ಅವು ನಮ್ಮ ಒಟ್ಟು DNA ಯ ಕೇವಲ ಸುಮಾರು 1–2%.",
          real: "ನಿಮ್ಮ ರಕ್ತದ ಗುಂಪು (A, B, AB ಅಥವಾ O) ಒಂದೇ ಜೀನ್‌ನ ಅಲೀಲ್‌ಗಳಿಂದ ನಿರ್ಧಾರವಾಗುತ್ತದೆ.",
          fact: "ಗ್ರೆಗರ್ ಮೆಂಡಲ್ 1860 ರ ದಶಕದಲ್ಲಿ ಬಟಾಣಿ ಸಸ್ಯಗಳಿಂದ ಅನುವಂಶೀಯತೆಯ ಮೂಲ ನಿಯಮಗಳನ್ನು ಕಂಡುಹಿಡಿದರು, DNA ಬಗ್ಗೆ ಯಾರಿಗಾದರೂ ತಿಳಿಯುವುದಕ್ಕೂ ಬಹಳ ಮೊದಲು." },
        chromosome: { name: "ವರ್ಣತಂತು (ಕ್ರೋಮೋಸೋಮ್)", short: "ವರ್ಣತಂತು", tag: "ಪ್ರಯಾಣಕ್ಕೆ ಪ್ಯಾಕ್ ಮಾಡಿದ DNA",
          what: "ವರ್ಣತಂತು ಪ್ರೋಟೀನುಗಳ ಸುತ್ತ ಬಿಗಿಯಾಗಿ ಸುತ್ತಿದ ಒಂದು ಬಹಳ ಉದ್ದದ DNA ಅಣು. ಕೋಶ ವಿಭಜನೆಯ ಮೊದಲು ಪ್ರತಿ ವರ್ಣತಂತು ತನ್ನ ನಕಲು ಮಾಡಿಕೊಂಡು X ನಂತೆ ಕಾಣುತ್ತದೆ: ಸೆಂಟ್ರೋಮಿಯರ್‌ನಲ್ಲಿ ಜೋಡಣೆಯಾದ ಎರಡು ಒಂದೇ ರೀತಿಯ ಸಹೋದರ ಕ್ರೊಮ್ಯಾಟಿಡ್‌ಗಳು.",
          adv: "ಮನುಷ್ಯನ ದೇಹ ಕೋಶಗಳಲ್ಲಿ 46 ವರ್ಣತಂತುಗಳು (23 ಜೋಡಿಗಳು) ಇವೆ: ಪ್ರತಿ ಜೋಡಿಯ ಒಂದು ತಾಯಿಯಿಂದ, ಒಂದು ತಂದೆಯಿಂದ. 23 ನೇ ಜೋಡಿ ಲಿಂಗ ವರ್ಣತಂತುಗಳು: XX ಸಾಮಾನ್ಯವಾಗಿ ಹೆಣ್ಣು, XY ಸಾಮಾನ್ಯವಾಗಿ ಗಂಡು. DNA ಹಿಸ್ಟೋನ್ ಪ್ರೋಟೀನುಗಳ ಮೇಲೆ ರೀಲಿನ ದಾರದಂತೆ ಸುತ್ತಿಕೊಂಡು ಮತ್ತೆ ಮತ್ತೆ ಸುರುಳಿಯಾಗುತ್ತದೆ, ಹಾಗಾಗಿ 2 ಮೀಟರ್ DNA ಕೆಲವು ಮೈಕ್ರೋಮೀಟರ್ ಅಗಲದ ಕೋಶಕೇಂದ್ರದೊಳಗೆ ಹಿಡಿಸುತ್ತದೆ.",
          real: "ಕ್ಯಾರಿಯೋಟೈಪ್ ಒಬ್ಬ ವ್ಯಕ್ತಿಯ ಎಲ್ಲಾ ವರ್ಣತಂತುಗಳ ಚಿತ್ರ; ಡೌನ್ ಸಿಂಡ್ರೋಮ್ (ಹೆಚ್ಚುವರಿ ವರ್ಣತಂತು 21) ನಂತಹ ಸ್ಥಿತಿಗಳನ್ನು ಪರೀಕ್ಷಿಸಲು ವೈದ್ಯರು ಅದನ್ನು ಬಳಸುತ್ತಾರೆ.",
          fact: "ಹೆಚ್ಚು ವರ್ಣತಂತುಗಳು ಎಂದರೆ ಹೆಚ್ಚು ಸಂಕೀರ್ಣ ದೇಹ ಎಂದಲ್ಲ: ಆಲೂಗಡ್ಡೆ ಸಸ್ಯದಲ್ಲಿ 48 ವರ್ಣತಂತುಗಳಿವೆ, ಮನುಷ್ಯನಿಗಿಂತ ಹೆಚ್ಚು." }
      },
      quiz: [
        { q: "DNA ಯಲ್ಲಿ ಅಡೆನಿನ್ (A) ಯಾವಾಗಲೂ ಯಾವುದರ ಜೊತೆ ಜೋಡಿಯಾಗುತ್ತದೆ?", o: ["ಗ್ವಾನಿನ್", "ಥೈಮಿನ್", "ಸೈಟೋಸಿನ್", "ಯುರಾಸಿಲ್"],
          why: "A, T ಜೊತೆ ಜೋಡಿಯಾಗುತ್ತದೆ (2 ಹೈಡ್ರೋಜನ್ ಬಂಧಗಳು). ಯುರಾಸಿಲ್ RNA ಯಲ್ಲಿದೆ, DNA ಯಲ್ಲಲ್ಲ." },
        { q: "ಸೈಟೋಸಿನ್ (C) ಯಾವುದರ ಜೊತೆ ಜೋಡಿಯಾಗುತ್ತದೆ?", o: ["ಗ್ವಾನಿನ್", "ಅಡೆನಿನ್", "ಥೈಮಿನ್", "ಸೈಟೋಸಿನ್"],
          why: "C, G ಜೊತೆ 3 ಹೈಡ್ರೋಜನ್ ಬಂಧಗಳಿಂದ ಜೋಡಿಯಾಗುತ್ತದೆ." },
        { q: "DNA ಏಣಿಯ 'ಪಕ್ಕದ ಕಂಬಿಗಳು' ಯಾವುದರಿಂದಾಗಿವೆ?", o: ["ಹೈಡ್ರೋಜನ್ ಬಂಧಗಳು", "ಕೇವಲ ಪ್ರತ್ಯಾಮ್ಲಗಳು", "ಸಕ್ಕರೆ ಮತ್ತು ಫಾಸ್ಫೇಟ್", "ಪ್ರೋಟೀನುಗಳು"],
          why: "ಬೆನ್ನೆಲುಬು ಪರ್ಯಾಯವಾಗಿ ಸಕ್ಕರೆ ಮತ್ತು ಫಾಸ್ಫೇಟ್‌ನಿಂದಾಗಿದೆ." },
        { q: "G ಮತ್ತು C ನಡುವೆ ಎಷ್ಟು ಹೈಡ್ರೋಜನ್ ಬಂಧಗಳು?", o: ["1", "2", "4", "3"],
          why: "G-C ಜೋಡಿಗೆ 3 ಹೈಡ್ರೋಜನ್ ಬಂಧಗಳು; A-T ಗೆ 2." },
        { q: "ಒಂದು ಪ್ರೋಟೀನ್‌ನ ಸಂಕೇತವಿರುವ DNA ಯ ಭಾಗವನ್ನು ಹೀಗೆನ್ನುತ್ತಾರೆ…", o: ["ಜೀನ್", "ಕೋಶ", "ರೈಬೋಸೋಮ್", "ವರ್ಣತಂತು ಜೋಡಿ"],
          why: "ಜೀನ್ ಎಂದರೆ ಒಂದು ಉತ್ಪನ್ನದ ಸೂಚನೆಗಳಿರುವ DNA ಯ ಭಾಗ." },
        { q: "ಮನುಷ್ಯನ ಸಾಮಾನ್ಯ ದೇಹ ಕೋಶದಲ್ಲಿ ಎಷ್ಟು ವರ್ಣತಂತುಗಳಿವೆ?", o: ["23", "46", "48", "92"],
          why: "46, ಅಂದರೆ 23 ಜೋಡಿಗಳು. ಅಂಡಾಣು ಮತ್ತು ವೀರ್ಯಾಣುಗಳಲ್ಲಿ 23 ಇರುತ್ತವೆ." },
        { q: "ಒಂದು ಎಳೆ A-T-G-C ಎಂದು ಓದಿದರೆ, ಇನ್ನೊಂದು ಎಳೆ ಓದುವುದು…", o: ["A-T-G-C", "T-A-C-G", "G-C-A-T", "C-G-T-A"],
          why: "ಪ್ರತಿ ಪ್ರತ್ಯಾಮ್ಲ ತನ್ನ ಜೊತೆಗಾರನೊಂದಿಗೆ ಜೋಡಿಯಾಗುತ್ತದೆ: A↔T, T↔A, G↔C, C↔G." },
        { q: "DNA ತನ್ನ ನಕಲು ಮಾಡಿಕೊಂಡಾಗ, ಪ್ರತಿ ಹೊಸ DNA ಅಣುವಿನಲ್ಲಿ ಇರುವುದು…", o: ["ಎರಡು ಹೊಸ ಎಳೆಗಳು", "ಎರಡು ಹಳೆಯ ಎಳೆಗಳು", "ಒಂದು ಹಳೆಯ ಮತ್ತು ಒಂದು ಹೊಸ ಎಳೆ", "ಯಾವ ಎಳೆಯೂ ಇಲ್ಲ"],
          why: "ಪ್ರತಿಕೃತಿ ಅರ್ಧ-ಸಂರಕ್ಷಕ: ಪ್ರತಿ ನಕಲು ಒಂದು ಹಳೆಯ ಎಳೆಯನ್ನು ಅಚ್ಚಾಗಿ ಉಳಿಸಿಕೊಳ್ಳುತ್ತದೆ." }
      ],
      terms: [
        { t: "DNA", d: "ಡಿಆಕ್ಸಿರೈಬೋನ್ಯೂಕ್ಲಿಯಿಕ್ ಆಮ್ಲ, ಅನುವಂಶೀಯ ಸೂಚನೆಗಳನ್ನು ಒಯ್ಯುವ ಅಣು." },
        { t: "ನ್ಯೂಕ್ಲಿಯೋಟೈಡ್", d: "DNA ಯ ಘಟಕ: ಒಂದು ಸಕ್ಕರೆ, ಒಂದು ಫಾಸ್ಫೇಟ್ ಮತ್ತು ಒಂದು ಪ್ರತ್ಯಾಮ್ಲ." },
        { t: "ಪೂರಕ ಪ್ರತ್ಯಾಮ್ಲ ಜೋಡಣೆ", d: "A ಯಾವಾಗಲೂ T ಜೊತೆ, G ಯಾವಾಗಲೂ C ಜೊತೆ ಜೋಡಿಯಾಗುತ್ತದೆ." },
        { t: "ದ್ವಿಸುರುಳಿ (ಡಬಲ್ ಹೆಲಿಕ್ಸ್)", d: "DNA ಯ ಆಕಾರ: ಒಂದರ ಸುತ್ತ ಒಂದು ತಿರುಚಿದ ಎರಡು ಎಳೆಗಳು, ಸುರುಳಿ ಏಣಿಯಂತೆ." },
        { t: "ವಂಶವಾಹಿ (ಜೀನ್)", d: "ಒಂದು ಉತ್ಪನ್ನದ, ಸಾಮಾನ್ಯವಾಗಿ ಪ್ರೋಟೀನ್‌ನ, ಸಂಕೇತವಿರುವ DNA ಯ ಭಾಗ." },
        { t: "ಅಲೀಲ್", d: "ಒಂದು ಜೀನ್‌ನ ಬೇರೆ ಬೇರೆ ರೂಪಗಳಲ್ಲಿ ಒಂದು." },
        { t: "ಉತ್ಪರಿವರ್ತನೆ (ಮ್ಯುಟೇಶನ್)", d: "DNA ಕ್ರಮದಲ್ಲಿನ ಬದಲಾವಣೆ." },
        { t: "ಪ್ರತಿಕೃತಿ", d: "ಕೋಶ ವಿಭಜನೆಯ ಮೊದಲು DNA ನಕಲು ಮಾಡುವುದು; ಪ್ರತಿ ನಕಲಿನಲ್ಲಿ ಒಂದು ಹಳೆಯ ಎಳೆ ಉಳಿಯುತ್ತದೆ." }
      ],
      practice: [
        { q: "ಇದರ ಪೂರಕ ಎಳೆಯನ್ನು ಬರೆಯಿರಿ: A-A-T-G-C-C-T.", a: "T-T-A-C-G-G-A." },
        { q: "ಒಂದು DNA ಮಾದರಿಯಲ್ಲಿ 30% ಅಡೆನಿನ್ ಇದೆ. ಥೈಮಿನ್, ಗ್ವಾನಿನ್ ಮತ್ತು ಸೈಟೋಸಿನ್ ಎಷ್ಟು ಶೇಕಡಾ?", a: "ಥೈಮಿನ್ = 30% (A ಜೊತೆ ಜೋಡಿ). G + C = 40%, ಹಾಗಾಗಿ ಗ್ವಾನಿನ್ = 20% ಮತ್ತು ಸೈಟೋಸಿನ್ = 20%." },
        { q: "ಮಕ್ಕಳು ಸ್ವಲ್ಪ ತಾಯಿಯಂತೆ, ಸ್ವಲ್ಪ ತಂದೆಯಂತೆ ಏಕೆ ಕಾಣುತ್ತಾರೆ?", a: "ಅವರಿಗೆ ಅರ್ಧ ವರ್ಣತಂತುಗಳು, ಮತ್ತು ಪ್ರತಿ ಜೀನ್‌ನ ಒಂದು ಅಲೀಲ್, ತಂದೆ-ತಾಯಿ ಪ್ರತಿಯೊಬ್ಬರಿಂದ ಸಿಗುತ್ತದೆ." },
        { q: "ಚರ್ಮ ಕೋಶದ ಉತ್ಪರಿವರ್ತನೆ ಮಕ್ಕಳಿಗೆ ಏಕೆ ಹೋಗುವುದಿಲ್ಲ, ಆದರೆ ಅಂಡಾಣು ಅಥವಾ ವೀರ್ಯಾಣುವಿನದ್ದು ಹೋಗಬಹುದು?", a: "ಕೇವಲ ಲೈಂಗಿಕ ಕೋಶಗಳ (ಅಂಡಾಣು ಮತ್ತು ವೀರ್ಯಾಣು) DNA ಮಾತ್ರ ಮುಂದಿನ ಪೀಳಿಗೆಗೆ ಹೋಗುತ್ತದೆ." }
      ]
    }
  },

  /* ------------------------------------------------------------------
     3D MODEL: 12 jodi wala double helix (har nucleotide alag group, taaki
     strand alag ho sakein), ek X-aakar ka gunasootra, aur jeen ki sunehri aasteen.
  ------------------------------------------------------------------ */
  build: function (api) {
    var THREE = api.THREE, mat = api.mat, K = TL.bioKit(api), V = K.V;
    var s = api.state;
    s.K = K;
    var N = 12, R = 1.15, STEP = 0.5, TURN = Math.PI / 5;     // 10 jodi = 1 chakkar
    var SEQ = "ATGCCGATTGCA";
    var PAIR = { A: "T", T: "A", G: "C", C: "G" };
    var BASE = { A: "adenine", T: "thymine", G: "guanine", C: "cytosine" };
    var COL = { A: 0x2f9e44, T: 0xe03131, G: 0xf0b400, C: 0x3b5bdb };
    var NEWCOL = { A: 0x8ce99a, T: 0xffa8a8, G: 0xffe066, C: 0x91a7ff };
    var y0 = -(N - 1) * STEP / 2;

    var helix = new THREE.Group();
    helix.position.set(-0.6, 0, 0);
    api.decor(helix);
    s.helix = helix;

    function pt(strand, i, extra) {
      var a = i * TURN + (strand ? Math.PI : 0) + (extra || 0);
      return V(Math.cos(a) * R, y0 + i * STEP, Math.sin(a) * R);
    }
    /* ek nucleotide: backbone ka tukda + phosphate + aadha danda (base) */
    function nucleotide(strand, i, letter, colors, isNew) {
      var g = new THREE.Group();
      var bb = new THREE.Group();
      var bbM = mat(isNew ? 0xd0bfff : (strand ? 0x22b8a6 : 0x7a5cd6), { rough: 0.45 });
      var pts = [];
      for (var k = 0; k <= 6; k++) {
        var f = (k / 6 - 0.5);
        var a = (i + f) * TURN + (strand ? Math.PI : 0);
        pts.push(V(Math.cos(a) * R, y0 + (i + f) * STEP, Math.sin(a) * R));
      }
      bb.add(K.tube(pts, 0.1, bbM, false, 12));
      var p = pt(strand, i);
      bb.add(api.sphere(0.15, mat(0xf39a1e, { rough: 0.4 }), p.x, p.y, p.z, 12));
      g.add(bb);
      var base = new THREE.Group();
      var inner = V(p.x * 0.06, p.y, p.z * 0.06);
      base.add(api.rod(p, inner, 0.11, mat(colors[letter], { rough: 0.4 })));
      g.add(base);
      return { g: g, bb: bb, base: base };
    }
    function hbonds(i, n, isNew) {
      var g = new THREE.Group();
      var hM = mat(isNew ? 0xe9ecef : 0xffffff, { glow: 0xffffff, glowLevel: 0.4 });
      var p = pt(0, i), dir = V(p.x, 0, p.z).normalize();
      var side = V(-dir.z, 0, dir.x);
      for (var k = 0; k < n; k++) {
        var off = (k - (n - 1) / 2) * 0.13;
        g.add(api.sphere(0.045, hM, side.x * off, p.y + off * 0.3, side.z * off, 8));
      }
      return g;
    }

    s.rungs = [];
    for (var i = 0; i < N; i++) {
      var la = SEQ[i], lb = PAIR[la];
      var A = nucleotide(0, i, la, COL), B = nucleotide(1, i, lb, COL);
      helix.add(A.g); helix.add(B.g);
      /* label sirf pehli baar wale addPart se banta hai: helix ke upar wali jagah do */
      api.addPart("backbone", A.bb, null, null, i === 0 ? { label: pt(0, N - 1).add(V(0, 0.3, 0)) } : {});
      api.addPart("backbone", B.bb, null, null);
      api.addPart(BASE[la], A.base, null, null);
      api.addPart(BASE[lb], B.base, null, null);
      var hb = hbonds(i, la === "A" || la === "T" ? 2 : 3);
      helix.add(hb);
      api.addPart("hbond", hb, null, null);
      /* naye (copy) nucleotide: shuru me chhupe; replication me dikhte hain */
      var nB = nucleotide(1, i, lb, NEWCOL, true), nA = nucleotide(0, i, la, NEWCOL, true);
      nB.g.visible = nA.g.visible = false;
      helix.add(nB.g); helix.add(nA.g);
      var hA = hbonds(i, la === "A" || la === "T" ? 2 : 3, true), hB = hbonds(i, la === "A" || la === "T" ? 2 : 3, true);
      hA.visible = hB.visible = false;
      helix.add(hA); helix.add(hB);
      s.rungs.push({ A: A, B: B, hb: hb, nA: nA, nB: nB, hA: hA, hB: hB, letter: la });
    }
    /* Mutation ke liye ek jodi (index 6: A-T) ke G-C wale tukde pehle se bana ke chhupa do */
    var MI = 6;
    s.mutI = MI;
    var mG = nucleotide(0, MI, "G", COL), mC = nucleotide(1, MI, "C", COL);
    helix.add(mG.base); helix.add(mC.base);
    api.addPart("guanine", mG.base, null, null);
    api.addPart("cytosine", mC.base, null, null);
    mG.base.visible = mC.base.visible = false;
    var mH = hbonds(MI, 3);
    mH.visible = false;
    helix.add(mH);
    api.addPart("hbond", mH, null, null);
    var ringM = mat(0xff922b, { glow: 0xff922b, glowLevel: 0.7 });
    var mRing = api.torus(0.45, 0.04, ringM, 0, pt(0, MI).y, 0);
    mRing.rotation.x = Math.PI / 2;
    mRing.visible = false;
    helix.add(mRing);
    s.mut = { G: mG.base, C: mC.base, H: mH, ring: mRing };

    /* Jeen: helix ke 4 jodiyon par sunehri aar-paar aasteen + gunasootra par patti */
    var gene = new THREE.Group();
    var gM = mat(0xffd43b, { opacity: 0.22, rough: 0.2 });
    gM.depthWrite = false;
    gene.add(api.cyl(R + 0.35, R + 0.35, STEP * 3 + 0.2, gM, 0, y0 + STEP * 9.5, 0, 36));
    helix.add(gene);
    api.addPart("gene", gene, null, null, { pickBehind: 1, label: V(R + 0.4, y0 + STEP * 11.1, 0) });

    /* Gunasootra: do chromatid (capsule) X aakar me + centromere */
    var chrom = new THREE.Group();
    var cM = mat(0x9b59b6, { rough: 0.5 });
    [-1, 1].forEach(function (sd) {
      var c = K.capsule(0.42, 3.0, cM, 20);
      c.rotation.z = sd * 0.32;
      chrom.add(c);
      for (var k = -3; k <= 3; k++) {
        if (k === 0) continue;
        var band = api.cyl(0.43, 0.43, 0.08, mat(0x7d3c98, { rough: 0.6 }), 0, k * 0.42, 0, 20);
        band.position.applyAxisAngle(V(0, 0, 1), sd * 0.32);
        band.rotation.z = sd * 0.32;
        chrom.add(band);
      }
    });
    chrom.add(api.sphere(0.38, mat(0x6c3483, { rough: 0.5 }), 0, 0, 0, 18));
    chrom.scale.setScalar(0.8);
    api.addPart("chromosome", chrom, V(4.7, -0.2, 0), null, { label: V(0.7, 2.1, 0) });
    /* gunasootra par jeen ki patti (gene part ka doosra tukda) */
    var gBand = new THREE.Group();
    var gb = api.cyl(0.46, 0.46, 0.3, mat(0xffd43b, { rough: 0.4 }), 0, 1.05, 0, 20);
    gBand.add(gb);
    gBand.rotation.z = -0.32;
    chrom.add(gBand);
    api.addPart("gene", gBand, null, null);
    var zM = mat(0xb9c7e6, { rough: 0.4 });
    api.decor(api.rod(V(-0.6 + R + 0.35, y0 + STEP * 9.5, 0), V(4.6, 0.6, 0), 0.02, zM));
    s.gene = gene;

    s.rep = 0;          // 0 aam, 1 chal raha, 2 poora
    s.repT = 0;
    s.spin = true;
    s.replicate = function () {
      if (s.rep === 1) return;
      if (s.rep === 2) { s.resetRep(); return; }
      if (s.mutOn) s.toggleMutation();
      s.rep = 1; s.repT = 0; s.spin = false; s.stage = 0;
      s.gene.visible = false;
      s.helix.rotation.y = 0;
      var b = api.button("rep"); if (b) b.disabled = true;
      api.setStatus("rep1", 0);
      if (api.reduceMotion) s.repT = 99;
    };
    s.applyRep = function (k) {
      /* k: 0..1 upar se neeche ki taraf khulna, phir naye nucleotide aana */
      s.rungs.forEach(function (r, idx) {
        var start = (N - 1 - idx) / N * 0.55;            // upar wali jodi pehle
        var u = Math.max(0, Math.min(1, (k - start) / 0.25));
        var e = u * u * (3 - 2 * u);
        r.A.g.position.x = -1.7 * e; r.B.g.position.x = 1.7 * e;
        r.hb.visible = e < 0.15;
        var nn = Math.max(0, Math.min(1, (k - start - 0.2) / 0.25));
        [r.nB, r.nA].forEach(function (n, j) {
          n.g.visible = nn > 0.01;
          n.g.scale.setScalar(Math.max(0.001, nn));
          n.g.position.x = j ? 1.7 : -1.7;
        });
        r.hA.visible = r.hB.visible = nn > 0.9;
        r.hA.position.x = -1.7; r.hB.position.x = 1.7;
      });
    };
    s.resetRep = function () {
      s.rep = 0; s.spin = true;
      s.gene.visible = true;
      s.applyRep(0);
      s.rungs.forEach(function (r) { r.nA.g.visible = r.nB.g.visible = false; r.hA.visible = r.hB.visible = false; });
      api.setButton("rep", "rep_btn");
      api.setStatus(null);
    };
    s.mutOn = false;
    s.toggleMutation = function () {
      if (s.rep !== 0) { api.setStatus("mut_wait", 4000); return; }
      s.mutOn = !s.mutOn;
      var r = s.rungs[MI];
      r.A.base.visible = r.B.base.visible = r.hb.visible = !s.mutOn;
      s.mut.G.visible = s.mut.C.visible = s.mut.H.visible = s.mut.ring.visible = s.mutOn;
      api.setButton("mut", s.mutOn ? "mut_undo" : "mut_btn");
      api.setStatus(s.mutOn ? "mut_on" : "mut_off", 7000);
      if (s.mutOn) { s.spin = false; s.helix.rotation.y = -Math.PI / 2 - MI * TURN + 0.3; }
      else s.spin = true;
    };
  },

  update: function (api, dt) {
    var s = api.state;
    if (s.spin && !api.reduceMotion) s.helix.rotation.y += dt * 0.35;
    if (s.rep !== 1) return;
    s.repT += dt;
    var k = Math.min(1, s.repT / 7);
    s.applyRep(k);
    if (k > 0.3 && s.stage === 0) { s.stage = 1; api.setStatus("rep2", 0); }
    if (k >= 1) {
      s.rep = 2;
      api.setStatus("rep3", 9000);
      api.setButton("rep", "rep_reset");
      var b = api.button("rep"); if (b) b.disabled = false;
    }
  }
});
