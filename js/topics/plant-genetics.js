/* Topic: Mendel's pea plants (genetics) (Botany, advanced) */
TL.start({
  id: "plant-genetics",
  camera: { theta: 0.0, phi: 1.12, radius: 17, target: [0, 0.6, 0.6], min: 6, max: 30 },
  autoRotate: false,
  labels: true,
  order: ["parents", "f1", "f2", "alleles", "punnett", "peapod"],
  parts: {
    parents: { emoji: "👨‍🌾" }, f1: { emoji: "1️⃣" }, f2: { emoji: "2️⃣" },
    alleles: { emoji: "🧬" }, punnett: { emoji: "🔲" }, peapod: { emoji: "🫛" }
  },
  quiz: [
    { part: "parents", a: 0 }, { part: "f1", a: 0 }, { part: "f2", a: 0 }, { part: "f1", a: 0 },
    { part: "alleles", a: 0 }, { part: "punnett", a: 0 }, { part: "punnett", a: 0 }, { part: "peapod", a: 0 }
  ],
  actions: [
    { id: "cross", label: "cross_btn", main: true, onClick: function (api) { api.state.cross(); } },
    { id: "dice", label: "dice_btn", onClick: function (api) { api.state.newF2(); } }
  ],

  text: {
    en: {
      tagline: "Tall or dwarf? How traits pass to the next generation",
      intro: '<strong>In the 1860s a monk named Gregor Mendel grew about 28,000 pea plants and discovered the rules of heredity.</strong> Here a pure tall plant is crossed with a pure dwarf plant. Press "🌱 Cross the plants" to grow the next two generations, and "🎲 Grow a new F2" to see how chance gives roughly 3 tall : 1 dwarf.',
      ui: {
        cross_btn: "🌱 Cross the plants", cross_again: "↺ Start again",
        c1: "Parents: pure tall (TT) × pure dwarf (tt). Each parent passes on one allele in its pollen or egg.",
        c2: "F1: every plant gets T from one parent and t from the other (Tt). All are tall, because tall is dominant.",
        c3: "F2: F1 plants self-pollinate. TT, Tt, tT are tall and tt is dwarf, about 3 tall : 1 dwarf. The hidden dwarf trait returns!",
        dice_btn: "🎲 Grow a new F2",
        dice_on: "This F2 has {0} tall : {1} dwarf. Expected about 6 : 2. Chance makes each batch a little different."
      },
      parts: {
        parents: { name: "Parent plants (P)", short: "Parents", tag: "Pure tall × pure dwarf",
          what: "Mendel began with pure-breeding plants: tall plants whose offspring were always tall, and dwarf plants whose offspring were always dwarf. He transferred pollen from one to the other to cross them.",
          adv: "A pure-breeding plant has two identical alleles for a trait: TT (tall) or tt (dwarf). Such a plant is homozygous. Mendel removed the stamens from one flower so it could not pollinate itself, and dusted its stigma with pollen from the other plant: a controlled cross.",
          real: "Plant breeders still cross chosen parents to produce better crop varieties.",
          fact: "Mendel's work was ignored for about 35 years until three scientists rediscovered it in 1900." },
        f1: { name: "First generation (F1)", short: "F1", tag: "All tall",
          what: "All the plants of the first generation (F1) were tall. The dwarf trait seemed to disappear.",
          adv: "Each F1 plant received T from the tall parent and t from the dwarf parent, so all are Tt (heterozygous). Because T is dominant over t, they all look tall. A trait that shows in the heterozygote is dominant; one that is hidden is recessive. Appearance is the phenotype; the allele pair is the genotype.",
          real: "Two brown-eyed parents can have a blue-eyed child if both carry a hidden recessive allele.",
          fact: "F stands for 'filial', from the Latin word for son or daughter." },
        f2: { name: "Second generation (F2)", short: "F2", tag: "The dwarf returns: 3 : 1",
          what: "When F1 plants were allowed to self-pollinate, the dwarf plants came back. About three out of four F2 plants were tall and one out of four was dwarf.",
          adv: "Each Tt plant makes two kinds of gametes, T and t, in equal numbers (law of segregation). Random fertilisation gives TT : Tt : tt in the ratio 1 : 2 : 1, so the phenotypes are 3 tall : 1 dwarf. Mendel counted 787 tall and 277 dwarf plants, a ratio of 2.84 : 1.",
          real: "Ratios like 3 : 1 help doctors estimate the chance that a child will inherit a genetic condition.",
          fact: "Mendel studied seven pea traits, and every one gave about 3 : 1 in the F2." },
        alleles: { name: "Genes and alleles", short: "Alleles", tag: "Two copies of every gene",
          what: "A gene is a piece of DNA that controls a trait, such as plant height. Different forms of a gene are called alleles: here T (tall) and t (dwarf). Each plant has two alleles for every gene, one from each parent.",
          adv: "The two alleles sit at the same place on a pair of matching chromosomes. In this model, blue cubes are the dominant allele T and small yellow balls the recessive allele t. Mendel did not know about DNA or chromosomes; he called them 'factors'. Today we know the tall/dwarf gene controls an enzyme that makes gibberellin.",
          real: "Your blood group is decided by the pair of alleles you inherited from your parents.",
          fact: "Pea plants have 7 pairs of chromosomes; humans have 23 pairs." },
        punnett: { name: "Punnett square", tag: "Predicting the offspring",
          what: "A Punnett square is a grid that shows all the ways the parents' alleles can combine. Here it shows a Tt × Tt cross: one TT, two Tt and one tt.",
          adv: "Write one parent's gametes along the top and the other's down the side, then fill each box with one allele from each. Each box has an equal chance, so the square gives the expected ratios: 1 TT : 2 Tt : 1 tt, or 3 tall : 1 dwarf. A test cross with a tt plant reveals whether a tall plant is TT or Tt.",
          real: "Breeders use Punnett squares to plan which animals or plants to cross.",
          fact: "It is named after Reginald Punnett, a British geneticist who invented it around 1905." },
        peapod: { name: "Pea pod and seeds", short: "Pea pod", tag: "Why peas were perfect",
          what: "Pea plants were ideal for Mendel: they grow quickly, have many seeds, and show clear either-or traits such as round or wrinkled seeds, yellow or green seeds and tall or dwarf stems.",
          adv: "Peas normally self-pollinate inside a closed flower, so pure lines are easy to keep, but they can also be cross-pollinated by hand. Mendel also crossed plants that differed in two traits and found that the traits were inherited independently (law of independent assortment), giving a 9 : 3 : 3 : 1 ratio.",
          real: "Wrinkled peas taste sweeter: their recessive allele means less starch and more sugar.",
          fact: "One pea pod holds about 6–10 seeds, and every seed is a separate offspring." }
      },
      quiz: [
        { q: "Who is called the father of genetics?", o: ["Gregor Mendel", "Charles Darwin", "Isaac Newton", "Robert Hooke"],
          why: "Mendel discovered the basic rules of heredity using pea plants." },
        { q: "When a pure tall plant is crossed with a pure dwarf plant, the F1 plants are…", o: ["all tall", "all dwarf", "half tall, half dwarf", "medium height"],
          why: "All are Tt, and tall is dominant." },
        { q: "What is the ratio of tall to dwarf plants in the F2?", o: ["3 : 1", "1 : 1", "2 : 1", "1 : 3"],
          why: "TT, Tt and tT are tall; only tt is dwarf." },
        { q: "A trait that shows up in the F1 is called…", o: ["dominant", "recessive", "a mutation", "a fossil"],
          why: "The dominant allele hides the recessive one." },
        { q: "What are different forms of the same gene called?", o: ["Alleles", "Chromosomes", "Cells", "Seeds"],
          why: "T and t are two alleles of the height gene." },
        { q: "What is the genotype of a dwarf pea plant?", o: ["tt", "TT", "Tt", "T"],
          why: "The recessive trait shows only when both alleles are recessive." },
        { q: "Which diagram predicts the possible offspring of a cross?", o: ["A Punnett square", "A food chain", "An energy pyramid", "A family photo"],
          why: "The grid shows every combination of the parents' alleles." },
        { q: "Why were pea plants a good choice for Mendel?", o: ["They have clear either-or traits and grow quickly", "They taste nice", "They grow in snow", "They have no flowers"],
          why: "Contrasting traits, many seeds and easy pollination control made peas ideal." }
      ],
      terms: [
        { t: "Heredity", d: "The passing of traits from parents to offspring." },
        { t: "Gene", d: "A section of DNA that controls a trait." },
        { t: "Allele", d: "One of the different forms of a gene, such as T or t." },
        { t: "Dominant / recessive", d: "A dominant allele shows its effect even with one copy; a recessive allele only shows with two copies." },
        { t: "Genotype / phenotype", d: "Genotype is the allele pair (TT, Tt, tt); phenotype is what the plant looks like (tall or dwarf)." },
        { t: "Homozygous / heterozygous", d: "Having two identical alleles (TT or tt) / two different alleles (Tt)." },
        { t: "Punnett square", d: "A grid used to predict the genotypes of offspring." }
      ],
      practice: [
        { q: "Draw a Punnett square for Tt × Tt and give the ratios.", a: "Gametes T and t from each parent give TT, Tt, Tt, tt: genotype 1 : 2 : 1, phenotype 3 tall : 1 dwarf." },
        { q: "A tall plant might be TT or Tt. How could you find out?", a: "Cross it with a dwarf (tt) plant. If any offspring are dwarf, the tall plant was Tt; if all are tall, it was probably TT." },
        { q: "What would you get from crossing Tt × tt?", a: "Tt and tt in equal numbers: 1 tall : 1 dwarf." },
        { q: "Why did the dwarf trait 'disappear' in F1 and come back in F2?", a: "F1 plants carried the hidden recessive allele t. When two F1 plants' t gametes met, they made tt plants, which are dwarf." }
      ]
    },

    hi: {
      tagline: "लंबा या बौना? गुण अगली पीढ़ी तक कैसे जाते हैं",
      intro: '<strong>1860 के दशक में ग्रेगर मेंडल नाम के एक पादरी ने लगभग 28,000 मटर के पौधे उगाए और वंशागति के नियम खोजे।</strong> यहाँ एक शुद्ध लंबे पौधे का शुद्ध बौने पौधे से संकरण होता है। "🌱 पौधों का संकरण करो" दबाकर अगली दो पीढ़ियाँ उगाओ, और "🎲 नई F2 उगाओ" दबाकर देखो कि संयोग से लगभग 3 लंबे : 1 बौना कैसे आता है।',
      ui: {
        cross_btn: "🌱 पौधों का संकरण करो", cross_again: "↺ फिर से शुरू करो",
        c1: "जनक: शुद्ध लंबा (TT) × शुद्ध बौना (tt)। हर जनक अपने परागकण या अंडे में एक युग्मविकल्पी (एलील) देता है।",
        c2: "F1: हर पौधे को एक जनक से T और दूसरे से t मिलता है (Tt)। सब लंबे हैं, क्योंकि लंबापन प्रभावी है।",
        c3: "F2: F1 पौधे स्व-परागण करते हैं। TT, Tt, tT लंबे हैं और tt बौना, लगभग 3 लंबे : 1 बौना। छिपा बौनापन लौट आया!",
        dice_btn: "🎲 नई F2 उगाओ",
        dice_on: "इस F2 में {0} लंबे : {1} बौने हैं। अपेक्षा लगभग 6 : 2 की है। संयोग से हर बार थोड़ा अलग होता है।"
      },
      parts: {
        parents: { name: "जनक पौधे (P)", short: "जनक", tag: "शुद्ध लंबा × शुद्ध बौना",
          what: "मेंडल ने शुद्ध नस्ल के पौधों से शुरुआत की: लंबे पौधे जिनकी संतान हमेशा लंबी होती थी, और बौने पौधे जिनकी संतान हमेशा बौनी। उन्होंने एक के परागकण दूसरे पर डालकर उनका संकरण किया।",
          adv: "शुद्ध नस्ल के पौधे में किसी गुण के लिए दो एक जैसे युग्मविकल्पी होते हैं: TT (लंबा) या tt (बौना)। ऐसा पौधा समयुग्मजी कहलाता है। मेंडल ने एक फूल के पुंकेसर हटा दिए ताकि वह स्व-परागण न कर सके, और उसके वर्तिकाग्र पर दूसरे पौधे के परागकण डाले: यह नियंत्रित संकरण है।",
          real: "पादप प्रजनक आज भी बेहतर फ़सल क़िस्में बनाने के लिए चुने हुए जनकों का संकरण करते हैं।",
          fact: "मेंडल के काम पर लगभग 35 साल ध्यान नहीं दिया गया, फिर 1900 में तीन वैज्ञानिकों ने उसे दोबारा खोजा।" },
        f1: { name: "पहली पीढ़ी (F1)", short: "F1", tag: "सब लंबे",
          what: "पहली पीढ़ी (F1) के सारे पौधे लंबे थे। बौनापन ग़ायब हो गया लगता था।",
          adv: "हर F1 पौधे को लंबे जनक से T और बौने जनक से t मिला, इसलिए सब Tt (विषमयुग्मजी) हैं। क्योंकि T, t पर प्रभावी है, सब लंबे दिखते हैं। जो गुण विषमयुग्मजी में दिखे वह प्रभावी है; जो छिपा रहे वह अप्रभावी। दिखावट लक्षणप्ररूप (फ़ीनोटाइप) है; युग्मविकल्पियों की जोड़ी जीनप्ररूप (जीनोटाइप) है।",
          real: "भूरी आँखों वाले दो माता-पिता का बच्चा नीली आँखों वाला हो सकता है, अगर दोनों में छिपा अप्रभावी युग्मविकल्पी हो।",
          fact: "F का अर्थ 'फ़िलियल' है, लैटिन में बेटा या बेटी।" },
        f2: { name: "दूसरी पीढ़ी (F2)", short: "F2", tag: "बौना लौटा: 3 : 1",
          what: "जब F1 पौधों को स्व-परागण करने दिया गया, तो बौने पौधे लौट आए। F2 के लगभग चार में से तीन पौधे लंबे और चार में से एक बौना था।",
          adv: "हर Tt पौधा दो तरह के युग्मक, T और t, बराबर संख्या में बनाता है (पृथक्करण का नियम)। संयोग से निषेचन TT : Tt : tt को 1 : 2 : 1 अनुपात में देता है, इसलिए लक्षणप्ररूप 3 लंबे : 1 बौना है। मेंडल ने 787 लंबे और 277 बौने पौधे गिने, यानी 2.84 : 1 का अनुपात।",
          real: "3 : 1 जैसे अनुपात डॉक्टरों को यह अनुमान लगाने में मदद करते हैं कि बच्चे को कोई आनुवंशिक रोग मिलने की कितनी संभावना है।",
          fact: "मेंडल ने मटर के सात गुण पढ़े, और हर एक ने F2 में लगभग 3 : 1 दिया।" },
        alleles: { name: "जीन और युग्मविकल्पी", short: "युग्मविकल्पी", tag: "हर जीन की दो प्रतियाँ",
          what: "जीन DNA का वह भाग है जो पौधे की ऊँचाई जैसा कोई गुण नियंत्रित करता है। जीन के अलग-अलग रूप युग्मविकल्पी (एलील) कहलाते हैं: यहाँ T (लंबा) और t (बौना)। हर पौधे में हर जीन के दो युग्मविकल्पी होते हैं, हर जनक से एक।",
          adv: "दोनों युग्मविकल्पी मिलते-जुलते गुणसूत्रों की जोड़ी पर एक ही जगह होते हैं। इस मॉडल में नीले घन प्रभावी युग्मविकल्पी T हैं और छोटी पीली गेंदें अप्रभावी युग्मविकल्पी t। मेंडल DNA या गुणसूत्रों के बारे में नहीं जानते थे; उन्होंने इन्हें 'कारक' कहा। आज हम जानते हैं कि लंबा/बौना जीन एक ऐसे एंज़ाइम को नियंत्रित करता है जो जिबरेलिन बनाता है।",
          real: "तुम्हारा रक्त समूह माता-पिता से मिली युग्मविकल्पियों की जोड़ी तय करती है।",
          fact: "मटर के पौधे में गुणसूत्रों की 7 जोड़ियाँ होती हैं; मनुष्य में 23 जोड़ियाँ।" },
        punnett: { name: "पनेट वर्ग", tag: "संतान का अनुमान",
          what: "पनेट वर्ग एक जाल है जो दिखाता है कि जनकों के युग्मविकल्पी किन-किन तरीक़ों से मिल सकते हैं। यहाँ यह Tt × Tt संकरण दिखाता है: एक TT, दो Tt और एक tt।",
          adv: "एक जनक के युग्मक ऊपर और दूसरे के बगल में लिखो, फिर हर ख़ाने में दोनों से एक-एक युग्मविकल्पी भरो। हर ख़ाने की संभावना बराबर है, इसलिए वर्ग अपेक्षित अनुपात देता है: 1 TT : 2 Tt : 1 tt, यानी 3 लंबे : 1 बौना। tt पौधे से परीक्षण संकरण बताता है कि लंबा पौधा TT है या Tt।",
          real: "प्रजनक पनेट वर्ग से योजना बनाते हैं कि किन जंतुओं या पौधों का संकरण करें।",
          fact: "इसका नाम ब्रिटिश आनुवंशिकीविद रेजिनाल्ड पनेट पर है, जिन्होंने इसे लगभग 1905 में बनाया।" },
        peapod: { name: "मटर की फली और बीज", short: "मटर की फली", tag: "मटर क्यों एकदम सही था",
          what: "मटर के पौधे मेंडल के लिए आदर्श थे: वे जल्दी उगते हैं, उनमें बहुत बीज होते हैं, और वे साफ़ या-तो-यह-या-वह गुण दिखाते हैं, जैसे गोल या झुर्रीदार बीज, पीले या हरे बीज और लंबे या बौने तने।",
          adv: "मटर आमतौर पर बंद फूल के अंदर स्व-परागण करती है, इसलिए शुद्ध नस्लें रखना आसान है, पर हाथ से पर-परागण भी किया जा सकता है। मेंडल ने दो गुणों में अलग पौधों का भी संकरण किया और पाया कि गुण स्वतंत्र रूप से वंशागत होते हैं (स्वतंत्र अपव्यूहन का नियम), जिससे 9 : 3 : 3 : 1 अनुपात मिला।",
          real: "झुर्रीदार मटर ज़्यादा मीठी लगती है: उसके अप्रभावी युग्मविकल्पी का अर्थ है कम स्टार्च और ज़्यादा शर्करा।",
          fact: "मटर की एक फली में लगभग 6–10 बीज होते हैं, और हर बीज एक अलग संतान है।" }
      },
      quiz: [
        { q: "आनुवंशिकी का जनक किसे कहते हैं?", o: ["ग्रेगर मेंडल", "चार्ल्स डार्विन", "आइज़क न्यूटन", "रॉबर्ट हुक"],
          why: "मेंडल ने मटर के पौधों से वंशागति के मूल नियम खोजे।" },
        { q: "शुद्ध लंबे पौधे का शुद्ध बौने पौधे से संकरण करने पर F1 पौधे होते हैं…", o: ["सब लंबे", "सब बौने", "आधे लंबे, आधे बौने", "मध्यम ऊँचाई"],
          why: "सब Tt हैं, और लंबापन प्रभावी है।" },
        { q: "F2 में लंबे और बौने पौधों का अनुपात क्या है?", o: ["3 : 1", "1 : 1", "2 : 1", "1 : 3"],
          why: "TT, Tt और tT लंबे हैं; सिर्फ़ tt बौना है।" },
        { q: "F1 में दिखने वाला गुण कहलाता है…", o: ["प्रभावी", "अप्रभावी", "उत्परिवर्तन", "जीवाश्म"],
          why: "प्रभावी युग्मविकल्पी अप्रभावी को छिपा देता है।" },
        { q: "एक ही जीन के अलग-अलग रूप क्या कहलाते हैं?", o: ["युग्मविकल्पी", "गुणसूत्र", "कोशिकाएँ", "बीज"],
          why: "T और t ऊँचाई के जीन के दो युग्मविकल्पी हैं।" },
        { q: "बौने मटर के पौधे का जीनप्ररूप क्या है?", o: ["tt", "TT", "Tt", "T"],
          why: "अप्रभावी गुण तभी दिखता है जब दोनों युग्मविकल्पी अप्रभावी हों।" },
        { q: "कौन-सा चित्र संकरण की संभावित संतान का अनुमान लगाता है?", o: ["पनेट वर्ग", "आहार श्रृंखला", "ऊर्जा पिरामिड", "परिवार की फ़ोटो"],
          why: "जाल जनकों के युग्मविकल्पियों का हर मेल दिखाता है।" },
        { q: "मेंडल के लिए मटर के पौधे अच्छे क्यों थे?", o: ["उनमें साफ़ या-तो-यह-या-वह गुण हैं और वे जल्दी उगते हैं", "वे स्वादिष्ट हैं", "वे बर्फ़ में उगते हैं", "उनमें फूल नहीं होते"],
          why: "विपरीत गुण, बहुत बीज और परागण पर आसान नियंत्रण ने मटर को आदर्श बनाया।" }
      ],
      terms: [
        { t: "वंशागति", d: "माता-पिता से संतान तक गुणों का जाना।" },
        { t: "जीन", d: "DNA का भाग जो कोई गुण नियंत्रित करता है।" },
        { t: "युग्मविकल्पी (एलील)", d: "जीन के अलग-अलग रूपों में से एक, जैसे T या t।" },
        { t: "प्रभावी / अप्रभावी", d: "प्रभावी युग्मविकल्पी एक प्रति में भी असर दिखाता है; अप्रभावी सिर्फ़ दो प्रतियों में।" },
        { t: "जीनप्ररूप / लक्षणप्ररूप", d: "जीनप्ररूप युग्मविकल्पियों की जोड़ी है (TT, Tt, tt); लक्षणप्ररूप पौधे की दिखावट (लंबा या बौना)।" },
        { t: "समयुग्मजी / विषमयुग्मजी", d: "दो एक जैसे युग्मविकल्पी (TT या tt) / दो अलग युग्मविकल्पी (Tt) होना।" },
        { t: "पनेट वर्ग", d: "संतान के जीनप्ररूप का अनुमान लगाने वाला जाल।" }
      ],
      practice: [
        { q: "Tt × Tt का पनेट वर्ग बनाओ और अनुपात बताओ।", a: "हर जनक से T और t युग्मक TT, Tt, Tt, tt देते हैं: जीनप्ररूप 1 : 2 : 1, लक्षणप्ररूप 3 लंबे : 1 बौना।" },
        { q: "लंबा पौधा TT या Tt हो सकता है। तुम कैसे पता करोगे?", a: "उसका बौने (tt) पौधे से संकरण करो। अगर कोई संतान बौनी है, तो लंबा पौधा Tt था; अगर सब लंबी हैं, तो शायद TT था।" },
        { q: "Tt × tt संकरण से क्या मिलेगा?", a: "Tt और tt बराबर संख्या में: 1 लंबा : 1 बौना।" },
        { q: "बौनापन F1 में 'ग़ायब' होकर F2 में क्यों लौटा?", a: "F1 पौधों में छिपा अप्रभावी युग्मविकल्पी t था। जब दो F1 पौधों के t युग्मक मिले, तो tt पौधे बने, जो बौने हैं।" }
      ]
    },

    mr: {
      tagline: "उंच की बुटका? गुणधर्म पुढच्या पिढीत कसे जातात",
      intro: '<strong>1860 च्या दशकात ग्रेगर मेंडेल नावाच्या एका धर्मगुरूने सुमारे 28,000 वाटाण्याची रोपं वाढवली आणि आनुवंशिकतेचे नियम शोधले.</strong> इथे एका शुद्ध उंच रोपाचा शुद्ध बुटक्या रोपाशी संकर होतो. "🌱 रोपांचा संकर करा" दाबून पुढच्या दोन पिढ्या वाढवा, आणि "🎲 नवी F2 वाढवा" दाबून बघा की योगायोगाने साधारण 3 उंच : 1 बुटकं कसं येतं.',
      ui: {
        cross_btn: "🌱 रोपांचा संकर करा", cross_again: "↺ पुन्हा सुरू करा",
        c1: "पालक: शुद्ध उंच (TT) × शुद्ध बुटकं (tt). प्रत्येक पालक आपल्या परागकणात किंवा अंड्यात एक विकल्प (ॲलील) देतो.",
        c2: "F1: प्रत्येक रोपाला एका पालकाकडून T आणि दुसऱ्याकडून t मिळतो (Tt). सगळी उंच आहेत, कारण उंची प्रभावी आहे.",
        c3: "F2: F1 रोपं स्वपरागण करतात. TT, Tt, tT उंच आणि tt बुटकं, साधारण 3 उंच : 1 बुटकं. लपलेला बुटकेपणा परत आला!",
        dice_btn: "🎲 नवी F2 वाढवा",
        dice_on: "या F2 मध्ये {0} उंच : {1} बुटकी आहेत. अपेक्षित साधारण 6 : 2. योगायोगामुळे प्रत्येक वेळी थोडं वेगळं येतं."
      },
      parts: {
        parents: { name: "पालक रोपं (P)", short: "पालक", tag: "शुद्ध उंच × शुद्ध बुटकं",
          what: "मेंडेलनी शुद्ध जातीच्या रोपांपासून सुरुवात केली: उंच रोपं ज्यांची संतती नेहमी उंच असायची, आणि बुटकी रोपं ज्यांची संतती नेहमी बुटकी. त्यांनी एकाचे परागकण दुसऱ्यावर टाकून त्यांचा संकर केला.",
          adv: "शुद्ध जातीच्या रोपात एखाद्या गुणधर्मासाठी दोन सारखे विकल्प असतात: TT (उंच) किंवा tt (बुटकं). अशा रोपाला समयुग्मजी म्हणतात. मेंडेलनी एका फुलाचे पुंकेसर काढून टाकले म्हणजे ते स्वपरागण करू शकणार नाही, आणि त्याच्या कुक्षीवर दुसऱ्या रोपाचे परागकण टाकले: हा नियंत्रित संकर.",
          real: "वनस्पती पैदासकार आजही चांगल्या पिकांच्या जाती बनवण्यासाठी निवडलेल्या पालकांचा संकर करतात.",
          fact: "मेंडेलच्या कामाकडे सुमारे 35 वर्षं दुर्लक्ष झालं, मग 1900 मध्ये तीन वैज्ञानिकांनी ते पुन्हा शोधलं." },
        f1: { name: "पहिली पिढी (F1)", short: "F1", tag: "सगळी उंच",
          what: "पहिल्या पिढीतली (F1) सगळी रोपं उंच होती. बुटकेपणा नाहीसा झाल्यासारखा वाटला.",
          adv: "प्रत्येक F1 रोपाला उंच पालकाकडून T आणि बुटक्या पालकाकडून t मिळाला, म्हणून सगळी Tt (विषमयुग्मजी) आहेत. T हा t वर प्रभावी असल्याने सगळी उंच दिसतात. विषमयुग्मजीत दिसणारा गुणधर्म प्रभावी; लपलेला अप्रभावी. दिसणं म्हणजे दृश्यरूप (फिनोटाइप); विकल्पांची जोडी म्हणजे जनुकरूप (जिनोटाइप).",
          real: "तपकिरी डोळ्यांच्या दोन पालकांचं मूल निळ्या डोळ्यांचं असू शकतं, जर दोघांमध्ये लपलेला अप्रभावी विकल्प असेल.",
          fact: "F म्हणजे 'फिलियल', लॅटिनमध्ये मुलगा किंवा मुलगी." },
        f2: { name: "दुसरी पिढी (F2)", short: "F2", tag: "बुटकं परत: 3 : 1",
          what: "F1 रोपांना स्वपरागण करू दिलं तेव्हा बुटकी रोपं परत आली. F2 मधली साधारण चारपैकी तीन रोपं उंच आणि चारपैकी एक बुटकं होतं.",
          adv: "प्रत्येक Tt रोप दोन प्रकारचे युग्मक, T आणि t, समान संख्येत बनवतं (पृथक्करणाचा नियम). यादृच्छिक फलनामुळे TT : Tt : tt हे 1 : 2 : 1 प्रमाणात येतात, म्हणून दृश्यरूपं 3 उंच : 1 बुटकं. मेंडेलनी 787 उंच आणि 277 बुटकी रोपं मोजली, म्हणजे 2.84 : 1 प्रमाण.",
          real: "3 : 1 सारखी प्रमाणं डॉक्टरांना मुलाला एखादा आनुवंशिक आजार मिळण्याची शक्यता अंदाजायला मदत करतात.",
          fact: "मेंडेलनी वाटाण्याचे सात गुणधर्म अभ्यासले, आणि प्रत्येकाने F2 मध्ये साधारण 3 : 1 दिलं." },
        alleles: { name: "जनुकं आणि विकल्प", short: "विकल्प", tag: "प्रत्येक जनुकाच्या दोन प्रती",
          what: "जनुक म्हणजे रोपाची उंची असा एखादा गुणधर्म नियंत्रित करणारा DNA चा भाग. जनुकाच्या वेगवेगळ्या रूपांना विकल्प (ॲलील) म्हणतात: इथे T (उंच) आणि t (बुटकं). प्रत्येक रोपात प्रत्येक जनुकाचे दोन विकल्प असतात, प्रत्येक पालकाकडून एक.",
          adv: "दोन्ही विकल्प जुळणाऱ्या गुणसूत्रांच्या जोडीवर एकाच जागी असतात. या मॉडेलमध्ये निळे घन प्रभावी विकल्प T आणि लहान पिवळे चेंडू अप्रभावी विकल्प t आहेत. मेंडेलना DNA किंवा गुणसूत्रांबद्दल माहिती नव्हती; त्यांनी त्यांना 'घटक' म्हटलं. आज आपल्याला माहीत आहे की उंच/बुटकं जनुक जिबरेलिन बनवणारं एक विकर नियंत्रित करतं.",
          real: "तुमचा रक्तगट तुम्हाला पालकांकडून मिळालेल्या विकल्पांच्या जोडीवरून ठरतो.",
          fact: "वाटाण्याच्या रोपात गुणसूत्रांच्या 7 जोड्या असतात; माणसात 23 जोड्या." },
        punnett: { name: "पनेट चौकोन", tag: "संततीचा अंदाज",
          what: "पनेट चौकोन हे एक जाळं आहे जे पालकांचे विकल्प कोणकोणत्या प्रकारे एकत्र येऊ शकतात ते दाखवतं. इथे ते Tt × Tt संकर दाखवतं: एक TT, दोन Tt आणि एक tt.",
          adv: "एका पालकाचे युग्मक वर आणि दुसऱ्याचे बाजूला लिहा, मग प्रत्येक घरात दोघांकडून एकेक विकल्प भरा. प्रत्येक घराची शक्यता समान असते, म्हणून चौकोन अपेक्षित प्रमाण देतो: 1 TT : 2 Tt : 1 tt, म्हणजे 3 उंच : 1 बुटकं. tt रोपाशी केलेला परीक्षा संकर उंच रोप TT आहे की Tt ते सांगतो.",
          real: "पैदासकार कोणते प्राणी किंवा वनस्पती संकरित करायचे याचं नियोजन पनेट चौकोनाने करतात.",
          fact: "याचं नाव ब्रिटिश आनुवंशिकशास्त्रज्ञ रेजिनाल्ड पनेट यांच्यावरून आहे, त्यांनी तो सुमारे 1905 मध्ये तयार केला." },
        peapod: { name: "वाटाण्याची शेंग आणि बिया", short: "वाटाण्याची शेंग", tag: "वाटाणा अगदी योग्य का होता",
          what: "वाटाण्याची रोपं मेंडेलसाठी आदर्श होती: ती लवकर वाढतात, त्यांना खूप बिया असतात, आणि ती स्पष्ट एकतर-हे-किंवा-ते गुणधर्म दाखवतात, जसं गोल किंवा सुरकुतलेल्या बिया, पिवळ्या किंवा हिरव्या बिया आणि उंच किंवा बुटकं खोड.",
          adv: "वाटाणा सहसा बंद फुलाच्या आत स्वपरागण करतो, म्हणून शुद्ध जाती राखणं सोपं असतं, पण हाताने परपरागणही करता येतं. मेंडेलनी दोन गुणधर्मांत वेगळ्या रोपांचाही संकर केला आणि त्यांना आढळलं की गुणधर्म स्वतंत्रपणे आनुवंशिक होतात (स्वतंत्र वितरणाचा नियम), त्यामुळे 9 : 3 : 3 : 1 प्रमाण येतं.",
          real: "सुरकुतलेले वाटाणे जास्त गोड लागतात: त्यांच्या अप्रभावी विकल्पामुळे पिष्टमय पदार्थ कमी आणि साखर जास्त असते.",
          fact: "वाटाण्याच्या एका शेंगेत सुमारे 6–10 बिया असतात, आणि प्रत्येक बी ही वेगळी संतती आहे." }
      },
      quiz: [
        { q: "आनुवंशिकशास्त्राचे जनक कोणाला म्हणतात?", o: ["ग्रेगर मेंडेल", "चार्ल्स डार्विन", "आयझॅक न्यूटन", "रॉबर्ट हूक"],
          why: "मेंडेलनी वाटाण्याच्या रोपांवरून आनुवंशिकतेचे मूलभूत नियम शोधले." },
        { q: "शुद्ध उंच रोपाचा शुद्ध बुटक्या रोपाशी संकर केल्यावर F1 रोपं असतात…", o: ["सगळी उंच", "सगळी बुटकी", "अर्धी उंच, अर्धी बुटकी", "मध्यम उंचीची"],
          why: "सगळी Tt आहेत, आणि उंची प्रभावी आहे." },
        { q: "F2 मध्ये उंच आणि बुटक्या रोपांचं प्रमाण किती?", o: ["3 : 1", "1 : 1", "2 : 1", "1 : 3"],
          why: "TT, Tt आणि tT उंच आहेत; फक्त tt बुटकं." },
        { q: "F1 मध्ये दिसणाऱ्या गुणधर्माला म्हणतात…", o: ["प्रभावी", "अप्रभावी", "उत्परिवर्तन", "जीवाश्म"],
          why: "प्रभावी विकल्प अप्रभावी विकल्पाला लपवतो." },
        { q: "एकाच जनुकाच्या वेगवेगळ्या रूपांना काय म्हणतात?", o: ["विकल्प (ॲलील)", "गुणसूत्रं", "पेशी", "बिया"],
          why: "T आणि t हे उंचीच्या जनुकाचे दोन विकल्प आहेत." },
        { q: "बुटक्या वाटाण्याच्या रोपाचं जनुकरूप काय?", o: ["tt", "TT", "Tt", "T"],
          why: "अप्रभावी गुणधर्म दोन्ही विकल्प अप्रभावी असतील तेव्हाच दिसतो." },
        { q: "कोणती आकृती संकराच्या संभाव्य संततीचा अंदाज देते?", o: ["पनेट चौकोन", "अन्नसाखळी", "ऊर्जा पिरॅमिड", "कुटुंबाचा फोटो"],
          why: "जाळं पालकांच्या विकल्पांचं प्रत्येक मिश्रण दाखवतं." },
        { q: "मेंडेलसाठी वाटाण्याची रोपं चांगली का होती?", o: ["त्यांना स्पष्ट एकतर-हे-किंवा-ते गुणधर्म असतात आणि ती लवकर वाढतात", "ती चविष्ट असतात", "ती बर्फात वाढतात", "त्यांना फुलं नसतात"],
          why: "विरोधी गुणधर्म, खूप बिया आणि परागणावर सोपं नियंत्रण यांमुळे वाटाणा आदर्श ठरला." }
      ],
      terms: [
        { t: "आनुवंशिकता", d: "पालकांकडून संततीकडे गुणधर्म जाणं." },
        { t: "जनुक", d: "एखादा गुणधर्म नियंत्रित करणारा DNA चा भाग." },
        { t: "विकल्प (ॲलील)", d: "जनुकाच्या वेगवेगळ्या रूपांपैकी एक, जसं T किंवा t." },
        { t: "प्रभावी / अप्रभावी", d: "प्रभावी विकल्प एका प्रतीतही परिणाम दाखवतो; अप्रभावी फक्त दोन प्रतींत." },
        { t: "जनुकरूप / दृश्यरूप", d: "जनुकरूप म्हणजे विकल्पांची जोडी (TT, Tt, tt); दृश्यरूप म्हणजे रोप कसं दिसतं (उंच किंवा बुटकं)." },
        { t: "समयुग्मजी / विषमयुग्मजी", d: "दोन सारखे विकल्प (TT किंवा tt) / दोन वेगळे विकल्प (Tt) असणं." },
        { t: "पनेट चौकोन", d: "संततीच्या जनुकरूपांचा अंदाज बांधणारं जाळं." }
      ],
      practice: [
        { q: "Tt × Tt साठी पनेट चौकोन काढा आणि प्रमाण सांगा.", a: "प्रत्येक पालकाकडून T आणि t युग्मक TT, Tt, Tt, tt देतात: जनुकरूप 1 : 2 : 1, दृश्यरूप 3 उंच : 1 बुटकं." },
        { q: "उंच रोप TT किंवा Tt असू शकतं. तुम्ही कसं शोधाल?", a: "त्याचा बुटक्या (tt) रोपाशी संकर करा. एखादी संतती बुटकी असेल तर उंच रोप Tt होतं; सगळी उंच असतील तर बहुधा TT." },
        { q: "Tt × tt संकरातून काय मिळेल?", a: "Tt आणि tt समान संख्येत: 1 उंच : 1 बुटकं." },
        { q: "बुटकेपणा F1 मध्ये 'नाहीसा' होऊन F2 मध्ये परत का आला?", a: "F1 रोपांमध्ये लपलेला अप्रभावी विकल्प t होता. दोन F1 रोपांचे t युग्मक एकत्र आले तेव्हा tt रोपं तयार झाली, जी बुटकी असतात." }
      ]
    },

    kn: {
      tagline: "ಎತ್ತರ ಅಥವಾ ಕುಳ್ಳ? ಗುಣಗಳು ಮುಂದಿನ ಪೀಳಿಗೆಗೆ ಹೇಗೆ ಹೋಗುತ್ತವೆ",
      intro: '<strong>1860ರ ದಶಕದಲ್ಲಿ ಗ್ರೆಗರ್ ಮೆಂಡಲ್ ಎಂಬ ಪಾದ್ರಿ ಸುಮಾರು 28,000 ಬಟಾಣಿ ಸಸ್ಯಗಳನ್ನು ಬೆಳೆಸಿ ಅನುವಂಶೀಯತೆಯ ನಿಯಮಗಳನ್ನು ಕಂಡುಹಿಡಿದರು.</strong> ಇಲ್ಲಿ ಶುದ್ಧ ಎತ್ತರದ ಸಸ್ಯವನ್ನು ಶುದ್ಧ ಕುಳ್ಳ ಸಸ್ಯದೊಂದಿಗೆ ಸಂಕರಿಸಲಾಗುತ್ತದೆ. "🌱 ಸಸ್ಯಗಳನ್ನು ಸಂಕರಿಸಿ" ಒತ್ತಿ ಮುಂದಿನ ಎರಡು ಪೀಳಿಗೆಗಳನ್ನು ಬೆಳೆಸಿ, ಮತ್ತು "🎲 ಹೊಸ F2 ಬೆಳೆಸಿ" ಒತ್ತಿ ಆಕಸ್ಮಿಕವಾಗಿ ಸುಮಾರು 3 ಎತ್ತರ : 1 ಕುಳ್ಳ ಹೇಗೆ ಬರುತ್ತದೆ ನೋಡಿ.',
      ui: {
        cross_btn: "🌱 ಸಸ್ಯಗಳನ್ನು ಸಂಕರಿಸಿ", cross_again: "↺ ಮತ್ತೆ ಶುರು ಮಾಡಿ",
        c1: "ಪೋಷಕರು: ಶುದ್ಧ ಎತ್ತರ (TT) × ಶುದ್ಧ ಕುಳ್ಳ (tt). ಪ್ರತಿ ಪೋಷಕ ತನ್ನ ಪರಾಗ ಅಥವಾ ಅಂಡದಲ್ಲಿ ಒಂದು ಆಲೀಲ್ ಕೊಡುತ್ತದೆ.",
        c2: "F1: ಪ್ರತಿ ಸಸ್ಯಕ್ಕೆ ಒಬ್ಬ ಪೋಷಕನಿಂದ T ಮತ್ತು ಇನ್ನೊಬ್ಬನಿಂದ t ಸಿಗುತ್ತದೆ (Tt). ಎತ್ತರ ಪ್ರಬಲವಾದ್ದರಿಂದ ಎಲ್ಲವೂ ಎತ್ತರ.",
        c3: "F2: F1 ಸಸ್ಯಗಳು ಸ್ವಪರಾಗಸ್ಪರ್ಶ ಮಾಡುತ್ತವೆ. TT, Tt, tT ಎತ್ತರ ಮತ್ತು tt ಕುಳ್ಳ, ಸುಮಾರು 3 ಎತ್ತರ : 1 ಕುಳ್ಳ. ಅಡಗಿದ್ದ ಕುಳ್ಳತನ ಮರಳಿತು!",
        dice_btn: "🎲 ಹೊಸ F2 ಬೆಳೆಸಿ",
        dice_on: "ಈ F2 ನಲ್ಲಿ {0} ಎತ್ತರ : {1} ಕುಳ್ಳ ಇವೆ. ನಿರೀಕ್ಷೆ ಸುಮಾರು 6 : 2. ಆಕಸ್ಮಿಕತೆಯಿಂದ ಪ್ರತಿ ಬಾರಿ ಸ್ವಲ್ಪ ಬೇರೆ ಬರುತ್ತದೆ."
      },
      parts: {
        parents: { name: "ಪೋಷಕ ಸಸ್ಯಗಳು (P)", short: "ಪೋಷಕರು", tag: "ಶುದ್ಧ ಎತ್ತರ × ಶುದ್ಧ ಕುಳ್ಳ",
          what: "ಮೆಂಡಲ್ ಶುದ್ಧ ತಳಿಯ ಸಸ್ಯಗಳಿಂದ ಶುರು ಮಾಡಿದರು: ಸಂತತಿ ಯಾವಾಗಲೂ ಎತ್ತರವಾಗಿರುವ ಎತ್ತರದ ಸಸ್ಯಗಳು, ಮತ್ತು ಸಂತತಿ ಯಾವಾಗಲೂ ಕುಳ್ಳಾಗಿರುವ ಕುಳ್ಳ ಸಸ್ಯಗಳು. ಒಂದರ ಪರಾಗವನ್ನು ಇನ್ನೊಂದಕ್ಕೆ ಹಾಕಿ ಅವುಗಳನ್ನು ಸಂಕರಿಸಿದರು.",
          adv: "ಶುದ್ಧ ತಳಿಯ ಸಸ್ಯದಲ್ಲಿ ಒಂದು ಗುಣಕ್ಕೆ ಎರಡು ಒಂದೇ ಆಲೀಲ್‌ಗಳಿರುತ್ತವೆ: TT (ಎತ್ತರ) ಅಥವಾ tt (ಕುಳ್ಳ). ಅಂತಹ ಸಸ್ಯ ಸಮಯುಗ್ಮಜ. ಮೆಂಡಲ್ ಒಂದು ಹೂವಿನ ಕೇಸರಗಳನ್ನು ತೆಗೆದರು, ಹಾಗಾಗಿ ಅದು ಸ್ವಪರಾಗಸ್ಪರ್ಶ ಮಾಡಲಾರದು, ಮತ್ತು ಅದರ ಶಲಾಕಾಗ್ರದ ಮೇಲೆ ಇನ್ನೊಂದು ಸಸ್ಯದ ಪರಾಗ ಹಾಕಿದರು: ಇದು ನಿಯಂತ್ರಿತ ಸಂಕರಣ.",
          real: "ಸಸ್ಯ ತಳಿಗಾರರು ಇಂದೂ ಉತ್ತಮ ಬೆಳೆ ತಳಿಗಳಿಗಾಗಿ ಆಯ್ದ ಪೋಷಕರನ್ನು ಸಂಕರಿಸುತ್ತಾರೆ.",
          fact: "ಮೆಂಡಲ್‌ನ ಕೆಲಸವನ್ನು ಸುಮಾರು 35 ವರ್ಷ ಕಡೆಗಣಿಸಲಾಗಿತ್ತು, 1900ರಲ್ಲಿ ಮೂವರು ವಿಜ್ಞಾನಿಗಳು ಅದನ್ನು ಮತ್ತೆ ಕಂಡುಹಿಡಿದರು." },
        f1: { name: "ಮೊದಲ ಪೀಳಿಗೆ (F1)", short: "F1", tag: "ಎಲ್ಲವೂ ಎತ್ತರ",
          what: "ಮೊದಲ ಪೀಳಿಗೆಯ (F1) ಎಲ್ಲಾ ಸಸ್ಯಗಳು ಎತ್ತರವಾಗಿದ್ದವು. ಕುಳ್ಳತನ ಮಾಯವಾದಂತೆ ಕಂಡಿತು.",
          adv: "ಪ್ರತಿ F1 ಸಸ್ಯಕ್ಕೆ ಎತ್ತರದ ಪೋಷಕನಿಂದ T ಮತ್ತು ಕುಳ್ಳ ಪೋಷಕನಿಂದ t ಸಿಕ್ಕಿತು, ಹಾಗಾಗಿ ಎಲ್ಲವೂ Tt (ವಿಷಮಯುಗ್ಮಜ). T, t ಮೇಲೆ ಪ್ರಬಲವಾದ್ದರಿಂದ ಎಲ್ಲವೂ ಎತ್ತರವಾಗಿ ಕಾಣುತ್ತವೆ. ವಿಷಮಯುಗ್ಮಜದಲ್ಲಿ ಕಾಣುವ ಗುಣ ಪ್ರಬಲ; ಅಡಗಿರುವುದು ಅಪ್ರಬಲ. ಕಾಣಿಸಿಕೊಳ್ಳುವಿಕೆ ಲಕ್ಷಣರೂಪ (ಫಿನೋಟೈಪ್); ಆಲೀಲ್ ಜೋಡಿ ಜೀನ್‌ರೂಪ (ಜೀನೋಟೈಪ್).",
          real: "ಕಂದು ಕಣ್ಣಿನ ಇಬ್ಬರು ಪೋಷಕರಿಗೆ ನೀಲಿ ಕಣ್ಣಿನ ಮಗು ಹುಟ್ಟಬಹುದು, ಇಬ್ಬರಲ್ಲೂ ಅಡಗಿದ ಅಪ್ರಬಲ ಆಲೀಲ್ ಇದ್ದರೆ.",
          fact: "F ಎಂದರೆ 'ಫಿಲಿಯಲ್', ಲ್ಯಾಟಿನ್‌ನಲ್ಲಿ ಮಗ ಅಥವಾ ಮಗಳು." },
        f2: { name: "ಎರಡನೇ ಪೀಳಿಗೆ (F2)", short: "F2", tag: "ಕುಳ್ಳ ಮರಳಿತು: 3 : 1",
          what: "F1 ಸಸ್ಯಗಳಿಗೆ ಸ್ವಪರಾಗಸ್ಪರ್ಶ ಮಾಡಲು ಬಿಟ್ಟಾಗ ಕುಳ್ಳ ಸಸ್ಯಗಳು ಮರಳಿ ಬಂದವು. F2 ನ ಸುಮಾರು ನಾಲ್ಕರಲ್ಲಿ ಮೂರು ಸಸ್ಯಗಳು ಎತ್ತರ ಮತ್ತು ನಾಲ್ಕರಲ್ಲಿ ಒಂದು ಕುಳ್ಳ.",
          adv: "ಪ್ರತಿ Tt ಸಸ್ಯ T ಮತ್ತು t ಎಂಬ ಎರಡು ಬಗೆಯ ಲಿಂಗಾಣುಗಳನ್ನು ಸಮ ಸಂಖ್ಯೆಯಲ್ಲಿ ತಯಾರಿಸುತ್ತದೆ (ಪ್ರತ್ಯೇಕತೆಯ ನಿಯಮ). ಯಾದೃಚ್ಛಿಕ ನಿಷೇಚನ TT : Tt : tt ಅನ್ನು 1 : 2 : 1 ಅನುಪಾತದಲ್ಲಿ ಕೊಡುತ್ತದೆ, ಹಾಗಾಗಿ ಲಕ್ಷಣರೂಪಗಳು 3 ಎತ್ತರ : 1 ಕುಳ್ಳ. ಮೆಂಡಲ್ 787 ಎತ್ತರ ಮತ್ತು 277 ಕುಳ್ಳ ಸಸ್ಯಗಳನ್ನು ಎಣಿಸಿದರು, ಅಂದರೆ 2.84 : 1 ಅನುಪಾತ.",
          real: "3 : 1 ನಂತಹ ಅನುಪಾತಗಳು ಮಗುವಿಗೆ ಅನುವಂಶೀಯ ಕಾಯಿಲೆ ಬರುವ ಸಾಧ್ಯತೆಯನ್ನು ಅಂದಾಜಿಸಲು ವೈದ್ಯರಿಗೆ ಸಹಾಯ ಮಾಡುತ್ತವೆ.",
          fact: "ಮೆಂಡಲ್ ಬಟಾಣಿಯ ಏಳು ಗುಣಗಳನ್ನು ಅಧ್ಯಯನ ಮಾಡಿದರು, ಪ್ರತಿಯೊಂದೂ F2 ನಲ್ಲಿ ಸುಮಾರು 3 : 1 ಕೊಟ್ಟಿತು." },
        alleles: { name: "ಜೀನುಗಳು ಮತ್ತು ಆಲೀಲ್‌ಗಳು", short: "ಆಲೀಲ್‌ಗಳು", tag: "ಪ್ರತಿ ಜೀನಿನ ಎರಡು ಪ್ರತಿಗಳು",
          what: "ಜೀನ್ ಸಸ್ಯದ ಎತ್ತರದಂತಹ ಗುಣವನ್ನು ನಿಯಂತ್ರಿಸುವ DNA ಯ ಭಾಗ. ಜೀನಿನ ಬೇರೆ ಬೇರೆ ರೂಪಗಳನ್ನು ಆಲೀಲ್‌ಗಳು ಎನ್ನುತ್ತಾರೆ: ಇಲ್ಲಿ T (ಎತ್ತರ) ಮತ್ತು t (ಕುಳ್ಳ). ಪ್ರತಿ ಸಸ್ಯದಲ್ಲಿ ಪ್ರತಿ ಜೀನಿನ ಎರಡು ಆಲೀಲ್‌ಗಳಿವೆ, ಪ್ರತಿ ಪೋಷಕನಿಂದ ಒಂದು.",
          adv: "ಎರಡು ಆಲೀಲ್‌ಗಳು ಹೊಂದುವ ವರ್ಣತಂತುಗಳ ಜೋಡಿಯ ಮೇಲೆ ಒಂದೇ ಜಾಗದಲ್ಲಿರುತ್ತವೆ. ಈ ಮಾದರಿಯಲ್ಲಿ ನೀಲಿ ಘನಗಳು ಪ್ರಬಲ ಆಲೀಲ್ T ಮತ್ತು ಸಣ್ಣ ಹಳದಿ ಚೆಂಡುಗಳು ಅಪ್ರಬಲ ಆಲೀಲ್ t. ಮೆಂಡಲ್‌ಗೆ DNA ಅಥವಾ ವರ್ಣತಂತುಗಳ ಬಗ್ಗೆ ತಿಳಿದಿರಲಿಲ್ಲ; ಅವರು ಅವುಗಳನ್ನು 'ಅಂಶಗಳು' ಎಂದರು. ಎತ್ತರ/ಕುಳ್ಳ ಜೀನ್ ಜಿಬ್ಬೆರೆಲಿನ್ ತಯಾರಿಸುವ ಕಿಣ್ವವನ್ನು ನಿಯಂತ್ರಿಸುತ್ತದೆ ಎಂದು ಇಂದು ನಮಗೆ ತಿಳಿದಿದೆ.",
          real: "ನಿಮ್ಮ ರಕ್ತದ ಗುಂಪು ಪೋಷಕರಿಂದ ಬಂದ ಆಲೀಲ್ ಜೋಡಿಯಿಂದ ನಿರ್ಧಾರವಾಗುತ್ತದೆ.",
          fact: "ಬಟಾಣಿ ಸಸ್ಯದಲ್ಲಿ 7 ಜೊತೆ ವರ್ಣತಂತುಗಳಿವೆ; ಮನುಷ್ಯರಲ್ಲಿ 23 ಜೊತೆ." },
        punnett: { name: "ಪನೆಟ್ ಚೌಕ", tag: "ಸಂತತಿಯ ಅಂದಾಜು",
          what: "ಪನೆಟ್ ಚೌಕ ಪೋಷಕರ ಆಲೀಲ್‌ಗಳು ಸೇರಬಹುದಾದ ಎಲ್ಲಾ ರೀತಿಗಳನ್ನು ತೋರಿಸುವ ಜಾಲ. ಇಲ್ಲಿ ಅದು Tt × Tt ಸಂಕರಣ ತೋರಿಸುತ್ತದೆ: ಒಂದು TT, ಎರಡು Tt ಮತ್ತು ಒಂದು tt.",
          adv: "ಒಬ್ಬ ಪೋಷಕನ ಲಿಂಗಾಣುಗಳನ್ನು ಮೇಲೆ ಮತ್ತು ಇನ್ನೊಬ್ಬನದನ್ನು ಪಕ್ಕದಲ್ಲಿ ಬರೆದು, ಪ್ರತಿ ಚೌಕದಲ್ಲಿ ಇಬ್ಬರಿಂದಲೂ ಒಂದೊಂದು ಆಲೀಲ್ ತುಂಬಿ. ಪ್ರತಿ ಚೌಕಕ್ಕೂ ಸಮಾನ ಸಾಧ್ಯತೆ, ಹಾಗಾಗಿ ಚೌಕ ನಿರೀಕ್ಷಿತ ಅನುಪಾತ ಕೊಡುತ್ತದೆ: 1 TT : 2 Tt : 1 tt, ಅಂದರೆ 3 ಎತ್ತರ : 1 ಕುಳ್ಳ. tt ಸಸ್ಯದೊಂದಿಗಿನ ಪರೀಕ್ಷಾ ಸಂಕರಣ ಎತ್ತರದ ಸಸ್ಯ TT ಯೋ Tt ಯೋ ತಿಳಿಸುತ್ತದೆ.",
          real: "ತಳಿಗಾರರು ಯಾವ ಪ್ರಾಣಿ ಅಥವಾ ಸಸ್ಯಗಳನ್ನು ಸಂಕರಿಸಬೇಕೆಂದು ಪನೆಟ್ ಚೌಕದಿಂದ ಯೋಜಿಸುತ್ತಾರೆ.",
          fact: "ಇದಕ್ಕೆ ಸುಮಾರು 1905ರಲ್ಲಿ ಇದನ್ನು ರೂಪಿಸಿದ ಬ್ರಿಟಿಷ್ ಅನುವಂಶಿಕ ವಿಜ್ಞಾನಿ ರೆಜಿನಾಲ್ಡ್ ಪನೆಟ್ ಅವರ ಹೆಸರಿಡಲಾಗಿದೆ." },
        peapod: { name: "ಬಟಾಣಿ ಕಾಯಿ ಮತ್ತು ಬೀಜಗಳು", short: "ಬಟಾಣಿ ಕಾಯಿ", tag: "ಬಟಾಣಿ ಏಕೆ ಸರಿಯಾದ ಆಯ್ಕೆ",
          what: "ಬಟಾಣಿ ಸಸ್ಯಗಳು ಮೆಂಡಲ್‌ಗೆ ಆದರ್ಶವಾಗಿದ್ದವು: ಅವು ಬೇಗ ಬೆಳೆಯುತ್ತವೆ, ಬಹಳ ಬೀಜಗಳಿರುತ್ತವೆ, ಮತ್ತು ದುಂಡು ಅಥವಾ ಸುಕ್ಕಾದ ಬೀಜ, ಹಳದಿ ಅಥವಾ ಹಸಿರು ಬೀಜ ಮತ್ತು ಎತ್ತರ ಅಥವಾ ಕುಳ್ಳ ಕಾಂಡದಂತಹ ಸ್ಪಷ್ಟ ಇದು-ಅಥವಾ-ಅದು ಗುಣಗಳನ್ನು ತೋರಿಸುತ್ತವೆ.",
          adv: "ಬಟಾಣಿ ಸಾಮಾನ್ಯವಾಗಿ ಮುಚ್ಚಿದ ಹೂವಿನೊಳಗೆ ಸ್ವಪರಾಗಸ್ಪರ್ಶ ಮಾಡುತ್ತದೆ, ಹಾಗಾಗಿ ಶುದ್ಧ ತಳಿಗಳನ್ನು ಉಳಿಸುವುದು ಸುಲಭ, ಆದರೆ ಕೈಯಿಂದ ಪರಪರಾಗಸ್ಪರ್ಶವನ್ನೂ ಮಾಡಬಹುದು. ಮೆಂಡಲ್ ಎರಡು ಗುಣಗಳಲ್ಲಿ ಭಿನ್ನವಾದ ಸಸ್ಯಗಳನ್ನೂ ಸಂಕರಿಸಿ ಗುಣಗಳು ಸ್ವತಂತ್ರವಾಗಿ ಅನುವಂಶಿಕವಾಗುತ್ತವೆ (ಸ್ವತಂತ್ರ ವಿಂಗಡಣೆಯ ನಿಯಮ) ಎಂದು ಕಂಡರು, ಇದರಿಂದ 9 : 3 : 3 : 1 ಅನುಪಾತ ಬರುತ್ತದೆ.",
          real: "ಸುಕ್ಕಾದ ಬಟಾಣಿ ಹೆಚ್ಚು ಸಿಹಿ: ಅದರ ಅಪ್ರಬಲ ಆಲೀಲ್‌ನಿಂದಾಗಿ ಕಡಿಮೆ ಪಿಷ್ಟ ಮತ್ತು ಹೆಚ್ಚು ಸಕ್ಕರೆ.",
          fact: "ಒಂದು ಬಟಾಣಿ ಕಾಯಿಯಲ್ಲಿ ಸುಮಾರು 6–10 ಬೀಜಗಳಿರುತ್ತವೆ, ಮತ್ತು ಪ್ರತಿ ಬೀಜವೂ ಬೇರೆ ಸಂತತಿ." }
      },
      quiz: [
        { q: "ಅನುವಂಶೀಯತೆಯ ಪಿತಾಮಹ ಎಂದು ಯಾರನ್ನು ಕರೆಯುತ್ತಾರೆ?", o: ["ಗ್ರೆಗರ್ ಮೆಂಡಲ್", "ಚಾರ್ಲ್ಸ್ ಡಾರ್ವಿನ್", "ಐಸಾಕ್ ನ್ಯೂಟನ್", "ರಾಬರ್ಟ್ ಹುಕ್"],
          why: "ಮೆಂಡಲ್ ಬಟಾಣಿ ಸಸ್ಯಗಳಿಂದ ಅನುವಂಶೀಯತೆಯ ಮೂಲ ನಿಯಮಗಳನ್ನು ಕಂಡುಹಿಡಿದರು." },
        { q: "ಶುದ್ಧ ಎತ್ತರದ ಸಸ್ಯವನ್ನು ಶುದ್ಧ ಕುಳ್ಳ ಸಸ್ಯದೊಂದಿಗೆ ಸಂಕರಿಸಿದಾಗ F1 ಸಸ್ಯಗಳು…", o: ["ಎಲ್ಲವೂ ಎತ್ತರ", "ಎಲ್ಲವೂ ಕುಳ್ಳ", "ಅರ್ಧ ಎತ್ತರ, ಅರ್ಧ ಕುಳ್ಳ", "ಮಧ್ಯಮ ಎತ್ತರ"],
          why: "ಎಲ್ಲವೂ Tt, ಮತ್ತು ಎತ್ತರ ಪ್ರಬಲ." },
        { q: "F2 ನಲ್ಲಿ ಎತ್ತರ ಮತ್ತು ಕುಳ್ಳ ಸಸ್ಯಗಳ ಅನುಪಾತ ಎಷ್ಟು?", o: ["3 : 1", "1 : 1", "2 : 1", "1 : 3"],
          why: "TT, Tt ಮತ್ತು tT ಎತ್ತರ; tt ಮಾತ್ರ ಕುಳ್ಳ." },
        { q: "F1 ನಲ್ಲಿ ಕಾಣುವ ಗುಣವನ್ನು ಹೀಗೆನ್ನುತ್ತಾರೆ…", o: ["ಪ್ರಬಲ", "ಅಪ್ರಬಲ", "ಉತ್ಪರಿವರ್ತನೆ", "ಪಳೆಯುಳಿಕೆ"],
          why: "ಪ್ರಬಲ ಆಲೀಲ್ ಅಪ್ರಬಲವನ್ನು ಅಡಗಿಸುತ್ತದೆ." },
        { q: "ಒಂದೇ ಜೀನಿನ ಬೇರೆ ಬೇರೆ ರೂಪಗಳನ್ನು ಏನೆನ್ನುತ್ತಾರೆ?", o: ["ಆಲೀಲ್‌ಗಳು", "ವರ್ಣತಂತುಗಳು", "ಜೀವಕೋಶಗಳು", "ಬೀಜಗಳು"],
          why: "T ಮತ್ತು t ಎತ್ತರದ ಜೀನಿನ ಎರಡು ಆಲೀಲ್‌ಗಳು." },
        { q: "ಕುಳ್ಳ ಬಟಾಣಿ ಸಸ್ಯದ ಜೀನ್‌ರೂಪ ಯಾವುದು?", o: ["tt", "TT", "Tt", "T"],
          why: "ಎರಡೂ ಆಲೀಲ್‌ಗಳು ಅಪ್ರಬಲವಾಗಿದ್ದಾಗ ಮಾತ್ರ ಅಪ್ರಬಲ ಗುಣ ಕಾಣುತ್ತದೆ." },
        { q: "ಸಂಕರಣದ ಸಾಧ್ಯ ಸಂತತಿಯನ್ನು ಯಾವ ಚಿತ್ರ ಅಂದಾಜಿಸುತ್ತದೆ?", o: ["ಪನೆಟ್ ಚೌಕ", "ಆಹಾರ ಸರಪಳಿ", "ಶಕ್ತಿ ಪಿರಮಿಡ್", "ಕುಟುಂಬದ ಫೋಟೋ"],
          why: "ಜಾಲ ಪೋಷಕರ ಆಲೀಲ್‌ಗಳ ಪ್ರತಿ ಸಂಯೋಜನೆಯನ್ನು ತೋರಿಸುತ್ತದೆ." },
        { q: "ಮೆಂಡಲ್‌ಗೆ ಬಟಾಣಿ ಸಸ್ಯಗಳು ಏಕೆ ಒಳ್ಳೆಯ ಆಯ್ಕೆಯಾಗಿದ್ದವು?", o: ["ಅವುಗಳಲ್ಲಿ ಸ್ಪಷ್ಟ ಇದು-ಅಥವಾ-ಅದು ಗುಣಗಳಿದ್ದು ಬೇಗ ಬೆಳೆಯುತ್ತವೆ", "ಅವು ರುಚಿಯಾಗಿವೆ", "ಅವು ಹಿಮದಲ್ಲಿ ಬೆಳೆಯುತ್ತವೆ", "ಅವುಗಳಿಗೆ ಹೂವುಗಳಿಲ್ಲ"],
          why: "ವಿರುದ್ಧ ಗುಣಗಳು, ಬಹಳ ಬೀಜಗಳು ಮತ್ತು ಪರಾಗಸ್ಪರ್ಶದ ಸುಲಭ ನಿಯಂತ್ರಣ ಬಟಾಣಿಯನ್ನು ಆದರ್ಶವಾಗಿಸಿದವು." }
      ],
      terms: [
        { t: "ಅನುವಂಶೀಯತೆ", d: "ಪೋಷಕರಿಂದ ಸಂತತಿಗೆ ಗುಣಗಳು ಹೋಗುವುದು." },
        { t: "ಜೀನ್", d: "ಒಂದು ಗುಣವನ್ನು ನಿಯಂತ್ರಿಸುವ DNA ಯ ಭಾಗ." },
        { t: "ಆಲೀಲ್", d: "T ಅಥವಾ t ನಂತೆ ಜೀನಿನ ಬೇರೆ ಬೇರೆ ರೂಪಗಳಲ್ಲಿ ಒಂದು." },
        { t: "ಪ್ರಬಲ / ಅಪ್ರಬಲ", d: "ಪ್ರಬಲ ಆಲೀಲ್ ಒಂದು ಪ್ರತಿಯಲ್ಲೂ ಪರಿಣಾಮ ತೋರಿಸುತ್ತದೆ; ಅಪ್ರಬಲ ಎರಡು ಪ್ರತಿಗಳಲ್ಲಿ ಮಾತ್ರ." },
        { t: "ಜೀನ್‌ರೂಪ / ಲಕ್ಷಣರೂಪ", d: "ಜೀನ್‌ರೂಪ ಆಲೀಲ್ ಜೋಡಿ (TT, Tt, tt); ಲಕ್ಷಣರೂಪ ಸಸ್ಯ ಹೇಗೆ ಕಾಣುತ್ತದೆ (ಎತ್ತರ ಅಥವಾ ಕುಳ್ಳ)." },
        { t: "ಸಮಯುಗ್ಮಜ / ವಿಷಮಯುಗ್ಮಜ", d: "ಎರಡು ಒಂದೇ ಆಲೀಲ್‌ಗಳು (TT ಅಥವಾ tt) / ಎರಡು ಬೇರೆ ಆಲೀಲ್‌ಗಳು (Tt) ಇರುವುದು." },
        { t: "ಪನೆಟ್ ಚೌಕ", d: "ಸಂತತಿಯ ಜೀನ್‌ರೂಪಗಳನ್ನು ಅಂದಾಜಿಸುವ ಜಾಲ." }
      ],
      practice: [
        { q: "Tt × Tt ಗೆ ಪನೆಟ್ ಚೌಕ ಬರೆದು ಅನುಪಾತಗಳನ್ನು ತಿಳಿಸಿ.", a: "ಪ್ರತಿ ಪೋಷಕನಿಂದ T ಮತ್ತು t ಲಿಂಗಾಣುಗಳು TT, Tt, Tt, tt ಕೊಡುತ್ತವೆ: ಜೀನ್‌ರೂಪ 1 : 2 : 1, ಲಕ್ಷಣರೂಪ 3 ಎತ್ತರ : 1 ಕುಳ್ಳ." },
        { q: "ಎತ್ತರದ ಸಸ್ಯ TT ಅಥವಾ Tt ಇರಬಹುದು. ನೀವು ಹೇಗೆ ಕಂಡುಹಿಡಿಯುತ್ತೀರಿ?", a: "ಅದನ್ನು ಕುಳ್ಳ (tt) ಸಸ್ಯದೊಂದಿಗೆ ಸಂಕರಿಸಿ. ಯಾವುದಾದರೂ ಸಂತತಿ ಕುಳ್ಳಾದರೆ ಎತ್ತರದ ಸಸ್ಯ Tt; ಎಲ್ಲವೂ ಎತ್ತರವಾದರೆ ಬಹುಶಃ TT." },
        { q: "Tt × tt ಸಂಕರಣದಿಂದ ಏನು ಸಿಗುತ್ತದೆ?", a: "Tt ಮತ್ತು tt ಸಮ ಸಂಖ್ಯೆಯಲ್ಲಿ: 1 ಎತ್ತರ : 1 ಕುಳ್ಳ." },
        { q: "ಕುಳ್ಳತನ F1 ನಲ್ಲಿ 'ಮಾಯವಾಗಿ' F2 ನಲ್ಲಿ ಏಕೆ ಮರಳಿತು?", a: "F1 ಸಸ್ಯಗಳಲ್ಲಿ ಅಡಗಿದ ಅಪ್ರಬಲ ಆಲೀಲ್ t ಇತ್ತು. ಎರಡು F1 ಸಸ್ಯಗಳ t ಲಿಂಗಾಣುಗಳು ಸೇರಿದಾಗ tt ಸಸ್ಯಗಳಾದವು, ಅವು ಕುಳ್ಳ." }
      ]
    }
  },

  build: function (api) {
    var THREE = api.THREE, mat = api.mat, K = TL.bioKit(api), V = K.V;
    var s = api.state;
    s.K = K;

    var groundM = mat(0x9ac86a, { rough: 0.9 });
    api.decor(api.box(12, 0.2, 5.0, groundM, 0, -0.1, 0.6));
    var stemM = mat(0x6aa84a, { rough: 0.55 }), leafM = mat(0x5abf4a, { rough: 0.55 }), flM = mat(0xc8a0e0, { rough: 0.5 });
    var TM = mat(0x2a6ae0, { rough: 0.4 }), tM = mat(0xf2c62a, { rough: 0.4 });

    /* matar ka paudha: lamba (1.9) ya bauna (0.6) */
    function plant(tall) {
      var g = new THREE.Group(), h = tall ? 1.9 : 0.6;
      g.add(api.cyl(0.035, 0.045, h, stemM, 0, h / 2, 0, 8));
      var n = tall ? 4 : 2;
      for (var k = 0; k < n; k++) {
        var y = 0.25 + k * (h - 0.3) / n;
        [-1, 1].forEach(function (sd) { var l = K.blob(0.08, leafM, 1.6, 0.4, 1, 8); l.position.set(sd * 0.13, y, 0); g.add(l); });
      }
      var f = K.blob(0.07, flM, 1.2, 1, 1, 8); f.position.y = h + 0.04; g.add(f);
      return g;
    }
    /* allele jodi ka chhota sanket: T = neela ghan, t = peeli gend */
    function pair(a, b) {
      var g = new THREE.Group();
      [a, b].forEach(function (al, i) {
        var x = (i - 0.5) * 0.22;
        g.add(al === "T" ? api.box(0.16, 0.16, 0.16, TM, x, 0, 0) : api.sphere(0.07, tM, x, 0, 0, 10));
      });
      return g;
    }

    /* ---------- Janak: lamba TT × bauna tt ---------- */
    var par = new THREE.Group();
    var p1 = plant(true); p1.position.x = -0.6; par.add(p1);
    var p2 = plant(false); p2.position.x = 0.6; par.add(p2);
    var xm = mat(0xe85a3c, { rough: 0.5 });
    var c1 = api.box(0.35, 0.06, 0.06, xm, 0, 0.6, 0); c1.rotation.z = 0.785; par.add(c1);
    var c2 = api.box(0.35, 0.06, 0.06, xm, 0, 0.6, 0); c2.rotation.z = -0.785; par.add(c2);
    var g1 = pair("T", "T"); g1.position.set(-0.6, -0.35, 0.35); par.add(g1);
    var g2 = pair("t", "t"); g2.position.set(0.6, -0.35, 0.35); par.add(g2);
    api.addPart("parents", par, V(-4.4, 0, -0.6), null, { label: V(0, 2.4, 0) });

    /* ---------- F1: 4 lambe Tt ---------- */
    var f1 = new THREE.Group();
    s.f1Plants = [];
    for (var i = 0; i < 4; i++) {
      var pl = plant(true); pl.position.x = -0.75 + i * 0.5; f1.add(pl); s.f1Plants.push(pl);
      var gp = pair("T", "t"); gp.position.set(-0.75 + i * 0.5, -0.35, 0.35); gp.scale.setScalar(0.8); f1.add(gp);
    }
    api.addPart("f1", f1, V(-1.3, 0, -0.6), null, { label: V(0, 2.4, 0) });

    /* ---------- F2: 8 jagah, har jagah lamba aur bauna dono (ek dikhega) ---------- */
    var f2 = new THREE.Group();
    s.slots = [];
    for (i = 0; i < 8; i++) {
      var x = -1.75 + i * 0.5;
      var tl = plant(true), dw = plant(false);
      tl.position.x = x; dw.position.x = x;
      f2.add(tl); f2.add(dw);
      s.slots.push({ tall: tl, dwarf: dw });
    }
    api.addPart("f2", f2, V(2.7, 0, -0.6), null, { label: V(0, 2.4, 0) });
    s.f2 = f2;

    /* ---------- Gunsutra jodi par allele (saamne baayein) ---------- */
    var al = new THREE.Group();
    [-0.3, 0.3].forEach(function (x, i) {
      al.add(K.capsule(0.12, 1.1, mat(i ? 0xd88aa8 : 0x8aa8d8, { rough: 0.5 })));
      al.children[al.children.length - 1].position.set(x, 0, 0);
      al.add(i ? api.sphere(0.15, tM, x, 0.25, 0.08, 12) : api.box(0.3, 0.22, 0.3, TM, x, 0.25, 0));
    });
    api.addPart("alleles", al, V(-4.0, 0.7, 2.4), null, { label: V(0, 1.0, 0) });

    /* ---------- Punnett varg: Tt × Tt (saamne beech) ---------- */
    var pu = new THREE.Group();
    var board = mat(0xf4f0e6, { rough: 0.8 }), line = mat(0x5a5040, { rough: 0.6 });
    pu.add(api.box(2.2, 2.2, 0.08, board, 0, 0, -0.06));
    pu.add(api.box(2.2, 0.04, 0.1, line, 0, 0, -0.02));
    pu.add(api.box(0.04, 2.2, 0.1, line, 0, 0, -0.02));
    var ALL = [["T", "T"], ["T", "t"], ["t", "T"], ["t", "t"]];
    ALL.forEach(function (ab, k) {
      var pp = pair(ab[0], ab[1]);
      pp.position.set(k % 2 ? 0.55 : -0.55, k < 2 ? 0.55 : -0.55, 0.05);
      pp.scale.setScalar(1.5);
      pu.add(pp);
    });
    /* upar aur baayein yugmak */
    [["T", -0.55], ["t", 0.55]].forEach(function (g) {
      pu.add(g[0] === "T" ? api.box(0.22, 0.22, 0.22, TM, g[1], 1.35, 0.05) : api.sphere(0.1, tM, g[1], 1.35, 0.05, 10));
      pu.add(g[0] === "T" ? api.box(0.22, 0.22, 0.22, TM, -1.35, -g[1], 0.05) : api.sphere(0.1, tM, -1.35, -g[1], 0.05, 10));
    });
    pu.scale.setScalar(0.6);
    pu.rotation.x = -0.35;
    api.addPart("punnett", pu, V(-0.4, 0.75, 2.5), null, { label: V(0, 1.5, 0) });

    /* ---------- Matar ki khuli phali (saamne daayein) ---------- */
    var pod = new THREE.Group();
    var podM = mat(0x6ab84a, { rough: 0.5 });
    podM.side = THREE.DoubleSide;
    var shell = new THREE.Mesh(new THREE.SphereGeometry(1, 28, 12, 0, Math.PI * 2, Math.PI * 0.5, Math.PI * 0.5), podM);
    shell.scale.set(1.0, 0.25, 0.28);
    pod.add(shell);
    var peaRound = mat(0xd8e050, { rough: 0.4 }), peaGreen = mat(0x8ac040, { rough: 0.4 });
    for (i = 0; i < 6; i++) {
      var pea = api.sphere(0.12, i % 3 === 2 ? peaGreen : peaRound, -0.65 + i * 0.26, 0.02, 0, 12);
      if (i === 4) pea.scale.set(0.95, 0.75, 0.95);          // jhurridar beej
      pod.add(pea);
    }
    pod.rotation.x = 0.4;
    api.addPart("peapod", pod, V(3.2, 0.35, 2.5), null, { label: V(0, 0.6, 0) });

    /* ---------- Halchal ---------- */
    s.step = 0;             // 0 = sirf janak, 1 = F1 dikh raha, 2 = F2 dikh raha
    s.grow = [0, 0];
    s.setF2 = function (talls) {
      s.slots.forEach(function (sl, k) { sl.tall.visible = talls[k]; sl.dwarf.visible = !talls[k]; });
    };
    s.setF2([true, true, false, true, true, true, false, true]);
    s.cross = function () {
      if (s.step >= 2) {
        s.step = 0;
        api.setButton("cross", "cross_btn");
        api.select("parents");
        api.setStatus("c1", 8000);
        return;
      }
      s.step++;
      api.select(s.step === 1 ? "f1" : "f2");
      api.setStatus(s.step === 1 ? "c2" : "c3", 10000);
      if (s.step >= 2) api.setButton("cross", "cross_again");
    };
    s.newF2 = function () {
      var talls = s.slots.map(function () { return Math.random() < 0.75; });
      s.setF2(talls);
      if (s.step < 2) { s.step = 2; api.setButton("cross", "cross_again"); }
      var nT = talls.filter(Boolean).length;
      api.select("f2");
      api.setStatus("dice_on", 9000, nT, 8 - nT);
    };
    s.f1g = f1;
  },

  update: function (api, dt) {
    var s = api.state;
    s.K.update(dt);
    /* peedhiyan dheere ugti hain */
    var r = api.reduceMotion ? 10 : 1.5;
    s.grow[0] += ((s.step >= 1 ? 1 : 0) - s.grow[0]) * Math.min(1, dt * r);
    s.grow[1] += ((s.step >= 2 ? 1 : 0) - s.grow[1]) * Math.min(1, dt * r);
    s.f1g.scale.set(1, Math.max(0.02, s.grow[0]), 1);
    s.f2.scale.set(1, Math.max(0.02, s.grow[1]), 1);
  }
});
