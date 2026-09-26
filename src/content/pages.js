import { schemas } from "./schemas";

const identity = {
  parse: (v) => v,
};

const pages = {
  about: (schemas.pages?.about ?? schemas.about ?? identity).parse({
    meta: {
      title: "About — Awakened | Whole-Person Coaching & Transformation",
      titleAr: "من نحن — أوايكند | التوجيه والتطوير المتكامل للإنسان",
      description:
        "Awakened is a whole-person coaching practice founded in Qatar. We work with individuals and organisations on self, health, career, family, and movement — together.",
      descriptionAr:
        "أوايكند ممارسة توجيه متكاملة للإنسان تأسست في قطر. نعمل مع الأفراد والمؤسسات على الذات والصحة والمسار المهني والأسرة والحركة — معًا.",
    },
    hero: {
      eyebrow: {
        en: "About Awakened",
        ar: "عن أوايكند",
      },
      headingLine1: {
        en: "We built the thing",
        ar: "بنينا ما لم نجده في أي مكان",
      },
      headingLine2: {
        en: "we couldn't find.",
        ar: "",
      },
      body: {
        en: "Awakened is a platform connecting people worldwide with experienced, carefully vetted wellness practitioners. Founded in Qatar and built for a global community — no gatekeeping, no jargon, no pressure. Just good guidance — when you need it",
        ar: "أوايكند منصة تربط الناس حول العالم بممارسي عافية ذوي خبرة، تم التحقق منهم بعناية. تأسست في قطر وبُنيت لمجتمع عالمي — لا قيود، لا مصطلحات معقدة، لا ضغط. إرشاد حقيقي — حين تحتاجه",
      },
      ctaPrimary: {
        en: "Meet Our Advisors",
        ar: "تعرف على مستشارينا",
      },
      ctaSecondary: {
        en: "Get in Touch",
        ar: "تواصل معنا",
      },
    },
    positioning: {
      eyebrow: {
        en: "What Awakened Is",
        ar: "ما هي أوايكند",
      },
      heading: {
        en: "Whole-person coaching for individuals and organisations",
        ar: "توجيه شامل للأفراد والمؤسسات",
      },
      body1: {
        en: "We work across five areas for individuals — self, health, career, family, and movement — and with organisations on leadership wellbeing, team wellness, and corporate retreats. Not as separate services, but as one integrated practice.",
        ar: "نعمل عبر خمسة مجالات للأفراد — الذات والصحة والمسار المهني والأسرة والحركة — ومع المؤسسات على رفاهية القيادة ورفاهية الفريق والخلوات المؤسسية. ليس كخدمات منفصلة، بل كممارسة متكاملة واحدة.",
      },
      body2: {
        en: "Because the person who shows up at work is the same person who goes home to their family, who carries their health, who holds their sense of purpose. We see all of it.",
        ar: "لأن الشخص الذي يأتي إلى العمل هو نفسه الذي يعود إلى أسرته، ويحمل صحته، ويتمسك بإحساسه بالهدف. نحن نرى كل ذلك.",
      },
    },
    problem: {
      eyebrow: {
        en: "The Problem",
        ar: "المشكلة",
      },
      headingLine1: {
        en: "Finding real help",
        ar: "إيجاد المساعدة الحقيقية لا ينبغي أن يكون بهذه الصعوبة",
      },
      headingLine2: {
        en: "shouldn't be this hard",
        ar: "",
      },
      paragraphs: [
        {
          id: "p1",
          en: "Most people who want support — whether for stress, burnout, physical health, or something harder to name — spend more time searching than actually getting help. They wade through vague websites, unclear pricing, and practitioners who may or may not be the right fit.",
          ar: "معظم من يبحثون عن الدعم — سواء للتوتر أو الإرهاق أو الصحة الجسدية أو شيء يصعب تسميته — يقضون وقتاً أطول في البحث من الحصول على المساعدة فعلاً",
        },
        {
          id: "p2",
          en: "There is also a quieter barrier: the feeling that you need to have it all figured out before you reach out. That you need to know exactly what kind of help you need, or that asking means something is seriously wrong.",
          ar: "ثمة حاجز أكثر هدوءاً: الشعور بأنك بحاجة إلى معرفة كل شيء قبل التواصل. أن تعرف بالضبط نوع المساعدة التي تحتاجها، أو أن طلب المساعدة يعني أن ثمة خطأً جسيماً",
        },
        {
          id: "p3",
          en: "Neither of those things is true. You do not need to have the right words. You just need a place to start.",
          ar: "لا شيء من هذا صحيح. لا تحتاج إلى الكلمات الصحيحة. تحتاج فقط إلى مكان للبدء",
        },
      ],
    },
    solution: {
      eyebrow: {
        en: "What We Do",
        ar: "ما نفعله",
      },
      headingLine1: {
        en: "Guidance over information.",
        ar: "الإرشاد فوق المعلومات. الناس فوق البرامج.",
      },
      headingLine2: {
        en: "People over programmes",
        ar: "",
      },
      cards: [
        {
          id: "c1",
          label: {
            en: "Vetted advisors",
            ar: "مستشارون معتمدون",
          },
          body: {
            en: "Every advisor on our platform has been reviewed in person — credentials checked, approach assessed, and held to a standard we would recommend to someone we care about.",
            ar: "تمت مراجعة كل مستشار على منصتنا شخصياً — اعتمادات موثّقة، ونهج مُقيَّم، ومعيار نرضاه لمن نهتم بهم",
          },
        },
        {
          id: "c2",
          label: {
            en: "Transparent pricing",
            ar: "أسعار شفافة",
          },
          body: {
            en: "Session costs are listed clearly before you book. No discovery calls that turn into sales pitches. No packages you have to commit to upfront. You see the price, you decide.",
            ar: "تكاليف الجلسات معلنة بوضوح قبل الحجز. لا مكالمات استكشافية تتحول إلى عروض بيع. لا باقات تُلزمك مسبقاً. ترى السعر وتقرر",
          },
        },
        {
          id: "c3",
          label: {
            en: "Advisory only — referrals when needed",
            ar: "استشاري فقط — إحالات عند الحاجة",
          },
          body: {
            en: "Our services are lifestyle advisory, not clinical treatment. When a situation calls for medical or psychological care, we say so clearly and help coordinate a referral to a qualified provider.",
            ar: "خدماتنا استشارات لنمط الحياة، لا علاج سريري. حين تستدعي الحالة رعاية طبية أو نفسية، نقول ذلك بصراحة ونساعد في تنسيق الإحالة إلى مختص مؤهل",
          },
        },
      ],
    },
    dimensions: {
      eyebrow: {
        en: "Our Framework",
        ar: "إطارنا",
      },
      headingLine1: {
        en: "Four dimensions.",
        ar: "أربعة أبعاد. حياة واحدة متكاملة",
      },
      headingLine2: {
        en: "One integrated life",
        ar: "",
      },
      body: {
        en: "At Awakened, we work across four dimensions of life — not because every client needs all four, but because real, lasting change rarely lives in just one. You might come to us for one thing and find that another dimension is where the work actually begins. That is normal. That is the process",
        ar: "في أوايكند، نعمل عبر أربعة أبعاد للحياة — ليس لأن كل عميل يحتاج إلى الأربعة، بل لأن التغيير الحقيقي والدائم نادراً ما يسكن في بُعد واحد. قد تأتي إلينا لشيء واحد وتكتشف أن بُعداً آخر هو حيث يبدأ العمل الفعلي. هذا طبيعي. هذه هي العملية",
      },
      footer: {
        en: "You can work on one dimension, two, or all four — at your own pace, in your own order. There is no fixed path",
        ar: "يمكنك العمل على بُعد واحد أو اثنين أو الأربعة — بإيقاعك وبترتيبك الخاص. لا مسار محدد ولا قالب جاهز",
      },
      items: [
        {
          id: "d1",
          number: "01",
          en: "Mental",
          ar: "النفسية",
          descEn:
            "Clarity of mind — away from pressure and noise. We help you step back from the mental patterns, habits of thought, and background stress that quietly drain your capacity to think, decide, and rest.",
          descAr:
            "صفاء الذهن، بعيداً عن الضغوط والضجيج. نساعدك على التراجع عن أنماط التفكير وعادات الذهن والتوتر الخفي الذي يستنزف قدرتك على التفكير والقرار والراحة",
        },
        {
          id: "d2",
          number: "02",
          en: "Physical",
          ar: "الجسدية",
          descEn:
            "Rebuilding the body's natural rhythm through habits that are sustainable, not punishing. Sleep, movement, energy, and recovery — addressed practically, without extremes or unrealistic demands.",
          descAr:
            "إعادة بناء الإيقاع الفطري للجسد من خلال عادات مستدامة لا مُرهِقة. النوم والحركة والطاقة والتعافي — تُعالج بشكل عملي، دون تطرف أو مطالب غير واقعية",
        },
        {
          id: "d3",
          number: "03",
          en: "Emotional",
          ar: "العاطفية",
          descEn:
            "Learning to understand and process what you feel — so your emotions guide you rather than master you. This is not about eliminating difficult feelings. It is about developing a healthier relationship with them.",
          descAr:
            "تعلّم فهم ما تشعر به ومعالجته — ليكون دليلك لا سيّدك. لا يتعلق الأمر بالتخلص من المشاعر الصعبة، بل ببناء علاقة أكثر صحة وعمقاً معها",
        },
        {
          id: "d4",
          number: "04",
          en: "Spiritual",
          ar: "الروحية",
          descEn:
            "Returning to a sense of purpose and meaning that makes daily life feel worth living. Not religion, not ritual — simply the quiet work of reconnecting with what matters to you and why.",
          descAr:
            "العودة إلى الشعور بالهدف والمعنى الذي يجعل الحياة اليومية تستحق العيش. ليس ديناً ولا طقوساً — بل العمل الهادئ على إعادة الاتصال بما يهمك ولماذا",
        },
      ],
    },
    standards: {
      eyebrow: {
        en: "Our Standards",
        ar: "معاييرنا",
      },
      headingLine1: {
        en: "If we wouldn't send a friend,",
        ar: "إذا لم نُرسل إليه صديقاً، فلن ندرجه",
      },
      headingLine2: {
        en: "we don't list them",
        ar: "",
      },
      paragraphs: [
        {
          id: "s1",
          en: "That is the actual test we use. Not a checklist, not a certification alone — though credentials matter and we verify them. The real question we ask about every advisor is: would we send someone we love to this person?",
          ar: "هذا هو الاختبار الفعلي الذي نستخدمه. ليس قائمة تحقق، وليس شهادة وحدها — رغم أن الاعتمادات مهمة ونتحقق منها. السؤال الحقيقي الذي نطرحه عن كل مستشار: هل سنُرسل إليه شخصاً نحبه؟",
        },
        {
          id: "s2",
          en: "We also check that every advisor is clear about what they do — and what they do not do. Our platform provides lifestyle advisory services only. Advisors who work with us understand that boundary and communicate it honestly. If a client's situation requires clinical care, the right response is a referral, not a workaround.",
          ar: "نتحقق أيضاً من أن كل مستشار واضح بشأن ما يفعله — وما لا يفعله. تقدم منصتنا خدمات استشارية لنمط الحياة فقط. المستشارون الذين يعملون معنا يفهمون هذا الحد ويوصلونه بصدق. إذا كانت حالة العميل تتطلب رعاية سريرية، فالاستجابة الصحيحة هي الإحالة، لا الالتفاف",
        },
        {
          id: "s3",
          en: "We also stay in touch. If something changes — an advisor's availability, their focus, or the quality of their work — we update accordingly. The platform is only as good as the people on it.",
          ar: "نبقى أيضاً على تواصل. إذا تغير شيء — توفر المستشار أو تركيزه أو جودة عمله — نُحدّث وفقاً لذلك. المنصة بجودة من يكون عليها",
        },
      ],
    },
    beliefs: {
      eyebrow: {
        en: "Our Beliefs",
        ar: "ما نؤمن به",
      },
      headingLine1: {
        en: "Come as you are.",
        ar: "تعال كما أنت. لا أداء مطلوب",
      },
      headingLine2: {
        en: "No performance required",
        ar: "",
      },
      items: [
        {
          id: "b1",
          en: "Wellbeing is not a luxury or a reward for people who have their lives together. It is something everyone deserves access to — regardless of where they are starting from.",
          ar: "العافية ليست رفاهية أو مكافأة لمن رتّب حياته. إنها حق يستحقه الجميع — بصرف النظر عن نقطة البداية",
        },
        {
          id: "b2",
          en: "You do not need to be in crisis to benefit from support. Some of the most useful sessions happen when things are fine but something feels slightly off — and you want to understand why.",
          ar: "لا تحتاج إلى أن تكون في أزمة لتستفيد من الدعم. بعض أكثر الجلسات قيمة تحدث حين تكون الأمور على ما يرام، لكن شيئاً ما يبدو غير صحيح — وتريد أن تفهم لماذا",
        },
        {
          id: "b3",
          en: "Accessibility matters to us. We offer virtual sessions so geography, mobility, or a busy schedule does not have to be a barrier. We keep pricing transparent so there are no surprises.",
          ar: "إمكانية الوصول تهمنا. نقدم جلسات افتراضية حتى لا تكون الجغرافيا أو التنقل أو الجدول المزدحم عائقاً. نُبقي الأسعار شفافة حتى لا تكون هناك مفاجآت",
        },
        {
          id: "b4",
          en: "We believe in guidance over information. The internet has no shortage of wellness content. What is harder to find is someone who actually listens, asks the right questions, and helps you figure out what you need.",
          ar: "نؤمن بالإرشاد فوق المعلومات. الإنترنت لا يفتقر إلى محتوى العافية. ما يصعب إيجاده هو من يستمع فعلاً، ويطرح الأسئلة الصحيحة، ويساعدك على معرفة ما تحتاجه",
        },
      ],
    },
    values: {
      eyebrow: {
        en: "What We Stand For",
        ar: "ما نؤمن به",
      },
      heading: {
        en: "Our values",
        ar: "قيمنا",
      },
      items: [
        {
          id: "v1",
          number: "01",
          en: "Privacy Above All",
          ar: "السرية فوق كل اعتبار",
          descEn:
            "Every client relationship begins and ends with absolute discretion. What is shared within Awakened stays within Awakened — without exception, without compromise.",
          descAr:
            "كل علاقة مع عميل تبدأ وتنتهي بتقدير مطلق للخصوصية. ما يُشارك داخل أوايكند يبقى داخل أوايكند — دون استثناء ودون تنازل",
        },
        {
          id: "v2",
          number: "02",
          en: "The Whole Person",
          ar: "الإنسان في كماله",
          descEn:
            "We do not treat symptoms. We address the full human being — mental, physical, emotional, and spiritual — because lasting change can only come from a complete understanding.",
          descAr:
            "نحن لا نعالج الأعراض. نتعامل مع الإنسان في كماله — نفسياً وجسدياً وعاطفياً وروحياً — لأن التغيير الحقيقي لا يأتي إلا من فهم شامل",
        },
        {
          id: "v3",
          number: "03",
          en: "No Generic Templates",
          ar: "لا قوالب جاهزة",
          descEn:
            "Every programme, every retreat, every session is built from scratch around the individual. We listen first, design second — always.",
          descAr:
            "كل برنامج، كل خلوة، كل جلسة — تُبنى من الصفر حول الفرد. نستمع أولاً، ثم نصمم — دائماً",
        },
        {
          id: "v4",
          number: "04",
          en: "Excellence Without Noise",
          ar: "التميز بلا صخب",
          descEn:
            "We operate quietly, with precision and care. Our work speaks through the transformation of those we serve — not through marketing or visibility.",
          descAr:
            "نعمل بهدوء، بدقة وعناية. يتحدث عملنا من خلال تحول من نخدمهم — لا من خلال التسويق أو الظهور",
        },
      ],
    },
    philosophy: {
      eyebrow: {
        en: "Our Philosophy",
        ar: "فلسفتنا",
      },
      quote: {
        en: '"We do not fix people. We create the conditions in which they heal themselves."',
        ar: '"نحن لا نُصلح الناس. نخلق الظروف التي يشفون فيها أنفسهم."',
      },
    },
    privacy: {
      eyebrow: {
        en: "Privacy & Confidentiality",
        ar: "الخصوصية والسرية",
      },
      headingLine1: {
        en: "Absolute privacy",
        ar: "السرية المطلقة هي أساسنا",
      },
      headingLine2: {
        en: "is our foundation",
        ar: "",
      },
      paragraphs: [
        {
          id: "pr1",
          en: "Privacy is not a feature of Awakened — it is the architecture. Every aspect of how we work, communicate, and store information is designed around the protection of our clients.",
          ar: "الخصوصية ليست ميزة في أوايكند — بل هي البنية الأساسية. كل جانب من جوانب عملنا وتواصلنا وتخزين المعلومات مصمم حول حماية عملائنا",
        },
        {
          id: "pr2",
          en: "We do not share client names, stories, or outcomes — with anyone, under any circumstances. Our clients trust us with their most personal journeys, and we honour that trust without exception.",
          ar: "لا نُشارك أسماء العملاء أو قصصهم أو نتائجهم — مع أحد، في أي ظرف. يأتمننا عملاؤنا على أعمق رحلاتهم الشخصية، ونحن نُكرّم هذه الأمانة دون استثناء",
        },
      ],
    },
    team: {
      eyebrow: {
        en: "Our Team",
        ar: "فريقنا",
      },
      headingLine1: {
        en: "Meet Our",
        ar: "تعرف على مستشارينا",
      },
      headingLine2: {
        en: "Advisors",
        ar: "",
      },
      body: {
        en: "Every advisor on our platform has been reviewed in person — credentials checked, approach assessed, and held to a standard we would recommend to someone we care about.",
        ar: "تمت مراجعة كل مستشار على منصتنا شخصياً — اعتمادات موثّقة، ونهج مُقيَّم، ومعيار نرضاه لمن نهتم بهم",
      },
      cta: {
        en: "View All Advisors",
        ar: "عرض جميع المستشارين",
      },
      advisors: [
        {
          id: "a1",
          slot: "team/dr-sarah-chen",
          nameEn: "Dr Sarah Chen",
          nameAr: "د. سارة تشن",
          specEn: "Integrative Medicine",
          specAr: "الطب التكاملي",
        },
        {
          id: "a2",
          slot: "team/amara-okafor",
          nameEn: "Amara Okafor",
          nameAr: "أمارا أوكافور",
          specEn: "Sound Healing & Therapy",
          specAr: "العلاج بالصوت",
        },
        {
          id: "a3",
          slot: "team/marcus-williams",
          nameEn: "Marcus Williams",
          nameAr: "ماركوس ويليامز",
          specEn: "Executive Coaching",
          specAr: "التوجيه التنفيذي",
        },
        {
          id: "a4",
          slot: "team/priya-sharma",
          nameEn: "Priya Sharma",
          nameAr: "بريا شارما",
          specEn: "Mindfulness & Meditation",
          specAr: "اليقظة الذهنية والتأمل",
        },
        {
          id: "a5",
          slot: "team/james-park",
          nameEn: "James Park",
          nameAr: "جيمس بارك",
          specEn: "Ayurvedic Wellness",
          specAr: "العافية الآيورفيدية",
        },
        {
          id: "a6",
          slot: "team/elena-rodriguez",
          nameEn: "Elena Rodriguez",
          nameAr: "إيلينا رودريغيز",
          specEn: "Holistic Nutrition",
          specAr: "التغذية الشاملة",
        },
      ],
    },
    cta: {
      headingLine1: {
        en: "Begin with a",
        ar: "ابدأ بمحادثة",
      },
      headingLine2: {
        en: "conversation",
        ar: "",
      },
      body: {
        en: "Whether for yourself, your team, or your organization, tell us a little about what you're looking for and we'll be in touch — privately and discreetly.",
        ar: "سواء كان ذلك لنفسك أو لفريقك أو لمؤسستك، أخبرنا قليلاً عما تبحث عنه وسنتواصل معك — بخصوصية تامة وتقدير",
      },
      ctaPrimary: {
        en: "Get in Touch",
        ar: "تواصل معنا",
      },
      ctaSecondary: {
        en: "Browse Advisors",
        ar: "تصفح المستشارين",
      },
      email: "info@gotawakened.com",
    },
  }),
  book: (schemas.pages?.book ?? schemas.book ?? identity).parse({
    hero: {
      eyebrow: {
        en: "Awakened",
        ar: "أوايكند",
      },
      heading: {
        en: "Book & Reserve",
        ar: "الحجز والاستفسار",
      },
      anchors: [
        {
          id: "discovery",
          en: "Discovery Call",
          ar: "مكالمة الاكتشاف",
        },
        {
          id: "sessions",
          en: "Advisory Sessions",
          ar: "الجلسات الاستشارية",
        },
        {
          id: "retreats",
          en: "Wellness Retreats",
          ar: "خلوات العافية",
        },
        {
          id: "events",
          en: "Events",
          ar: "الفعاليات",
        },
        {
          id: "membership",
          en: "Community Membership",
          ar: "عضوية المجتمع",
        },
        {
          id: "corporate",
          en: "Corporate Wellness",
          ar: "العافية المؤسسية",
        },
      ],
    },
    discovery: {
      eyebrow: {
        en: "Start Here",
        ar: "ابدأ من هنا",
      },
      heading: {
        en: "Book a Free Discovery Call",
        ar: "احجز مكالمة اكتشاف مجانية",
      },
      body: {
        en: "Before committing to any programme, we recommend starting with a free 30-minute discovery call. We listen, you ask questions, and together we figure out whether Awakened is the right fit — and if so, which pathway makes sense for you.",
        ar: "قبل الالتزام بأي برنامج، نوصي بالبدء بمكالمة اكتشاف مجانية مدتها 30 دقيقة. نستمع إليك، وتطرح أسئلتك، ونحدد معًا ما إذا كانت أوايكند هي الخيار المناسب — وإن كانت كذلك، أي مسار يناسبك.",
      },
      note: {
        en: "No commitment required. No sales pressure.",
        ar: "لا يُشترط أي التزام. بلا ضغط للبيع.",
      },
      cta: {
        en: "Request a Discovery Call",
        ar: "اطلب مكالمة اكتشاف",
      },
      emailNote: {
        en: "Or email us directly: info@gotawakened.com",
        ar: "أو راسلنا مباشرة: info@gotawakened.com",
      },
    },
    membership: {
      eyebrow: {
        en: "Section 04",
        ar: "القسم ٠٤",
      },
      heading: {
        en: "Community Membership",
        ar: "عضوية المجتمع",
      },
      body: {
        en: "Join the Awakened community and access a curated programme of events, workshops, and shared experiences throughout the year. Membership is annual and includes priority booking, member-only gatherings, and a dedicated space for connection.",
        ar: "انضم إلى مجتمع أوايكند واحصل على برنامج منتقى من الفعاليات وورش العمل والتجارب المشتركة على مدار العام. العضوية سنوية وتشمل الحجز المبكر والتجمعات الحصرية للأعضاء وفضاءً مخصصاً للتواصل.",
      },
      footnote: {
        en: "All memberships are annual and renew on the anniversary date. Membership is subject to availability and application review.",
        ar: "جميع العضويات سنوية وتُجدد في تاريخ الذكرى السنوية. العضوية خاضعة للتوفر ومراجعة الطلب.",
      },
      tiers: [
        {
          id: "essential",
          tier: {
            en: "Essential",
            ar: "الأساسية",
          },
          name: {
            en: "Community Access",
            ar: "الوصول إلى المجتمع",
          },
          desc: {
            en: "Access to all community events and workshops at member pricing. Ideal for those beginning their wellness journey.",
            ar: "الوصول إلى جميع فعاليات المجتمع وورش العمل بأسعار الأعضاء. مثالي لمن يبدأون رحلة العافية.",
          },
          features: [
            {
              en: "Priority booking for all events",
              ar: "الحجز المبكر لجميع الفعاليات",
              id: "x71lTUzTcrWxtMwmsH4ig",
            },
            {
              en: "Member pricing on workshops & masterclasses",
              ar: "أسعار الأعضاء على ورش العمل والدروس الرئيسية",
              id: "oOysX2fQzZUhCp58HS-tX",
            },
            {
              en: "Monthly community newsletter",
              ar: "النشرة الإخبارية الشهرية للمجتمع",
              id: "T614wudp8OTeIEuIj-MGS",
            },
            {
              en: "Access to the Awakened digital library",
              ar: "الوصول إلى المكتبة الرقمية لأوايكند",
              id: "9R41eKq4_LXS-7aCLj4Ly",
            },
          ],
          priceLabel: {
            en: "Annual membership",
            ar: "العضوية السنوية",
          },
          priceQAR: "QAR 2,400",
          priceUSD: "~$660 USD",
          cta: {
            en: "Apply for Membership",
            ar: "التقدم للعضوية",
          },
          highlight: false,
        },
        {
          id: "immersive",
          tier: {
            en: "Immersive",
            ar: "المكثفة",
          },
          name: {
            en: "Full Community",
            ar: "المجتمع الكامل",
          },
          badge: {
            en: "Most Popular",
            ar: "الأكثر طلباً",
          },
          desc: {
            en: "Full access to all events, retreats, and exclusive member gatherings. Includes one complimentary advisory session and a personal wellness check-in.",
            ar: "وصول كامل إلى جميع الفعاليات والخلوات والتجمعات الحصرية للأعضاء. يشمل جلسة استشارية مجانية واحدة ومتابعة شخصية للعافية.",
          },
          features: [
            {
              en: "Everything in Essential",
              ar: "كل ما في العضوية الأساسية",
              id: "_voVpRC33z6Ov0pj7gs32",
            },
            {
              en: "Exclusive member-only gatherings (quarterly)",
              ar: "تجمعات حصرية للأعضاء فقط (ربع سنوية)",
              id: "JMUQuRy3A_1Q-A11F6t3L",
            },
            {
              en: "One complimentary advisory session (QAR 1,750 value)",
              ar: "جلسة استشارية مجانية واحدة (بقيمة ١٬٧٥٠ ريال)",
              id: "JZ5t8T_8DcJQoyGO9Nxam",
            },
            {
              en: "Personal wellness check-in (mid-year)",
              ar: "متابعة شخصية للعافية (منتصف العام)",
              id: "zO_xc5QSMJ5SFvSNxi8VU",
            },
            {
              en: "Early access to retreat bookings",
              ar: "الوصول المبكر لحجوزات الخلوات",
              id: "XF02N5vuEQBdfbGZIlCXC",
            },
            {
              en: "Dedicated member concierge",
              ar: "خدمة كونسيرج مخصصة للأعضاء",
              id: "nfs1wwnhTRkPU2xu-mhB0",
            },
          ],
          priceLabel: {
            en: "Annual membership",
            ar: "العضوية السنوية",
          },
          priceQAR: "QAR 5,500",
          priceUSD: "~$1,511 USD",
          cta: {
            en: "Apply for Membership",
            ar: "التقدم للعضوية",
          },
          highlight: true,
        },
        {
          id: "founding",
          tier: {
            en: "Founding",
            ar: "التأسيسية",
          },
          name: {
            en: "Founding Member",
            ar: "العضو المؤسس",
          },
          desc: {
            en: "For those who wish to be part of shaping the Awakened community from the ground up. Limited to 20 founding members. Includes lifetime member pricing and a private founding circle.",
            ar: "لمن يرغبون في المشاركة في تشكيل مجتمع أوايكند من الأساس. محدود بـ ٢٠ عضواً مؤسساً. يشمل أسعار العضوية مدى الحياة ودائرة المؤسسين الخاصة.",
          },
          features: [
            {
              en: "Everything in Immersive",
              ar: "كل ما في العضوية المكثفة",
              id: "hDqHdhu8Lj2fugSbLSDn2",
            },
            {
              en: "Lifetime member pricing on all future tiers",
              ar: "أسعار العضوية مدى الحياة على جميع المستويات المستقبلية",
              id: "OBQRSGDeERe8y3dyeE1_w",
            },
            {
              en: "Private founding circle — quarterly dinners",
              ar: "دائرة المؤسسين الخاصة — عشاءات ربع سنوية",
              id: "z92LoKh8N9M10lWdjSrN1",
            },
            {
              en: "Two complimentary advisory sessions per year",
              ar: "جلستان استشاريتان مجانيتان سنوياً",
              id: "opjI_gxZhE9XshZ4ezgwe",
            },
            {
              en: "Named acknowledgement in Awakened publications",
              ar: "اعتراف باسمك في منشورات أوايكند",
              id: "02-j5SLhBF7DqWPM4pS2B",
            },
          ],
          priceLabel: {
            en: "Annual membership · Limited to 20",
            ar: "العضوية السنوية · محدودة بـ ٢٠",
          },
          priceQAR: "QAR 9,800",
          priceUSD: "~$2,692 USD",
          cta: {
            en: "Enquire About Founding",
            ar: "الاستفسار عن العضوية التأسيسية",
          },
          highlight: false,
        },
      ],
    },
  }),
  community: (schemas.pages?.community ?? schemas.community ?? identity).parse({
    hero: {
      eyebrow: {
        en: "Community",
        ar: "المجتمع",
      },
      heading: {
        en: "You don't have to do this alone",
        ar: "لا يجب أن تفعل هذا وحدك",
      },
      body: {
        en: "The Awakened community is a space for people who are serious about living with more intention — through events, workshops, and shared experience.",
        ar: "مجتمع أوايكند هو فضاء للأشخاص الجادين في العيش بوعي أكبر — من خلال الفعاليات وورش العمل والتجارب المشتركة.",
      },
    },
    offerings: [
      {
        id: "events-workshops",
        icon: "◎",
        title: {
          en: "Events & Workshops",
          ar: "الفعاليات وورش العمل",
        },
        desc: {
          en: "Intimate gatherings on topics that matter — rest, purpose, relationships, leadership, and more. Open to all.",
          ar: "تجمعات حميمة حول موضوعات تهم — الراحة والهدف والعلاقات والقيادة وغيرها. مفتوحة للجميع.",
        },
        link: "/events",
      },
      {
        id: "retreats",
        icon: "◈",
        title: {
          en: "Retreats",
          ar: "الخلوات",
        },
        desc: {
          en: "Deeper immersive experiences for small groups. A chance to step away, reset, and return with clarity.",
          ar: "تجارب مكثفة أعمق لمجموعات صغيرة. فرصة للابتعاد وإعادة الضبط والعودة بوضوح.",
        },
        link: "/retreats",
      },
      {
        id: "book-club",
        icon: "◉",
        title: {
          en: "The Book Club",
          ar: "نادي الكتاب",
        },
        desc: {
          en: "A curated reading community for those who want to think more deeply about how they live and lead.",
          ar: "مجتمع قراءة منتقى لمن يريدون التفكير بعمق أكبر في كيفية حياتهم وقيادتهم.",
        },
        link: "/events",
      },
    ],
    membership: {
      eyebrow: {
        en: "Annual Membership",
        ar: "العضوية السنوية",
      },
      heading: {
        en: "Choose your membership",
        ar: "اختر عضويتك",
      },
      body: {
        en: "All memberships are annual. Priority booking, member pricing, and exclusive gatherings are included across every tier.",
        ar: "جميع العضويات سنوية. الحجز المبكر وأسعار الأعضاء والتجمعات الحصرية مشمولة في كل المستويات.",
      },
      tiers: [
        {
          id: "essential",
          tier: {
            en: "Essential",
            ar: "الأساسية",
          },
          name: {
            en: "Community Access",
            ar: "الوصول إلى المجتمع",
          },
          desc: {
            en: "Priority booking, member pricing on all events and workshops, monthly newsletter, and access to the Awakened digital library.",
            ar: "الحجز المبكر وأسعار الأعضاء على جميع الفعاليات وورش العمل والنشرة الشهرية والوصول إلى المكتبة الرقمية.",
          },
          priceQAR: "QAR 2,400",
          priceUSD: "~$660 USD / year",
          cta: {
            en: "Apply for Membership",
            ar: "التقدم للعضوية",
          },
          highlight: false,
        },
        {
          id: "immersive",
          tier: {
            en: "Immersive",
            ar: "المكثفة",
          },
          name: {
            en: "Full Community",
            ar: "المجتمع الكامل",
          },
          badge: {
            en: "Most Popular",
            ar: "الأكثر طلباً",
          },
          desc: {
            en: "Everything in Essential, plus exclusive quarterly gatherings, one complimentary advisory session, personal mid-year wellness check-in, early retreat access, and a dedicated member concierge.",
            ar: "كل ما في الأساسية، بالإضافة إلى تجمعات ربع سنوية حصرية وجلسة استشارية مجانية ومتابعة شخصية منتصف العام والوصول المبكر للخلوات وخدمة كونسيرج مخصصة.",
          },
          priceQAR: "QAR 5,500",
          priceUSD: "~$1,511 USD / year",
          cta: {
            en: "Apply for Membership",
            ar: "التقدم للعضوية",
          },
          highlight: true,
        },
        {
          id: "founding",
          tier: {
            en: "Founding",
            ar: "التأسيسية",
          },
          name: {
            en: "Founding Member",
            ar: "العضو المؤسس",
          },
          desc: {
            en: "Everything in Immersive, plus lifetime member pricing, a private founding circle with quarterly dinners, two complimentary advisory sessions per year, and named acknowledgement in Awakened publications. Limited to 20 members.",
            ar: "كل ما في المكثفة، بالإضافة إلى أسعار العضوية مدى الحياة ودائرة المؤسسين الخاصة مع عشاءات ربع سنوية وجلستين استشاريتين مجانيتين سنوياً والاعتراف باسمك في منشورات أوايكند. محدودة بـ ٢٠ عضواً.",
          },
          priceLabel: {
            en: "Annual · Limited to 20",
            ar: "سنوية · محدودة بـ ٢٠",
          },
          priceQAR: "QAR 9,800",
          priceUSD: "~$2,692 USD / year",
          cta: {
            en: "Enquire About Founding",
            ar: "الاستفسار عن التأسيسية",
          },
          highlight: false,
        },
      ],
    },
    join: {
      eyebrow: {
        en: "Join Us",
        ar: "انضم إلينا",
      },
      heading: {
        en: "Request to join the community",
        ar: "طلب الانضمام إلى المجتمع",
      },
      body: {
        en: "Tell us a little about yourself and we'll be in touch. You can also ask to be notified first when new events and activities are announced.",
        ar: "أخبرنا قليلاً عن نفسك وسنتواصل معك. يمكنك أيضًا طلب أن تكون أول من يعلم عند الإعلان عن فعاليات وأنشطة جديدة.",
      },
      labelName: {
        en: "Your name",
        ar: "اسمك",
      },
      placeholderName: {
        en: "Full name",
        ar: "الاسم الكامل",
      },
      labelEmail: {
        en: "Email address",
        ar: "البريد الإلكتروني",
      },
      labelQuestion: {
        en: "What draws you to the community?",
        ar: "ما الذي يجذبك إلى المجتمع؟",
      },
      placeholderQuestion: {
        en: "Share a little about what you're looking for or what resonates with you…",
        ar: "شارك قليلاً عما تبحث عنه أو ما يتردد صداه معك…",
      },
      notifyLabel: {
        en: "Notify me first when new events and activities are announced",
        ar: "أخبرني أولاً عند الإعلان عن فعاليات وأنشطة جديدة",
      },
      submitLabel: {
        en: "Request to Join",
        ar: "طلب الانضمام",
      },
      submittingLabel: {
        en: "Sending…",
        ar: "جارٍ الإرسال…",
      },
      successHeading: {
        en: "Thank you",
        ar: "شكرًا لك",
      },
      successBody: {
        en: "We've received your request and will be in touch soon.",
        ar: "لقد تلقينا طلبك وسنتواصل معك قريبًا.",
      },
      errorMsg: {
        en: "Something went wrong. Please try again or email us at info@gotawakened.com",
        ar: "حدث خطأ ما. يرجى المحاولة مرة أخرى أو مراسلتنا على info@gotawakened.com",
      },
    },
  }),
  home: (schemas.pages?.home ?? schemas.home ?? identity).parse({
    WHO_WE_SUPPORT: [
      {
        en: {
          label: "Individuals",
          title: "People ready to live more intentionally",
          desc: "Self, health, career, family, movement — addressed together, not in isolation.",
        },
        ar: {
          label: "الأفراد",
          title: "أشخاص مستعدون للعيش بوعي أكبر",
          desc: "الذات والصحة والمسار المهني والأسرة والحركة — تُعالَج معًا لا بمعزل.",
        },
        href: "/individuals",
        icon: "◎",
        id: "VMMgsBL4J8-fDFraSRtE8",
      },
      {
        en: {
          label: "Organisations",
          title: "Teams and leaders who want to build something lasting",
          desc: "Workplace wellbeing, leadership coaching, and corporate retreats.",
        },
        ar: {
          label: "المؤسسات",
          title: "فرق وقادة يريدون بناء شيء دائم",
          desc: "رفاهية مكان العمل وتوجيه القيادة والخلوات المؤسسية.",
        },
        href: "/organizations",
        icon: "◈",
        id: "FbBZ6iSbyhLhu1eNXwCNT",
      },
      {
        en: {
          label: "Community",
          title: "Anyone curious about living with more depth",
          desc: "Events, workshops, retreats, and a book club — open to all.",
        },
        ar: {
          label: "المجتمع",
          title: "كل من يتطلع إلى حياة أعمق",
          desc: "فعاليات وورش عمل وخلوات ونادي كتاب — مفتوح للجميع.",
        },
        href: "/community",
        icon: "◉",
        id: "_f_gPMk4MEcHUeSnkDhwV",
      },
    ],
    PATHWAYS: [
      {
        en: "Self & Personal Transformation",
        ar: "الذات والتطور الشخصي",
        href: "/individuals#self",
        id: "-e4xr1vrN23Gtq1UAqpGy",
      },
      {
        en: "Holistic Health & Lifestyle",
        ar: "الصحة الشاملة ونمط الحياة",
        href: "/individuals#health",
        id: "7Bb5gjYTH_0glHToR-tHz",
      },
      {
        en: "Career & Purpose",
        ar: "المسار المهني والهدف",
        href: "/individuals#career",
        id: "-Xw7rQWagXsNIj-12INOS",
      },
      {
        en: "Parent & Family Guidance",
        ar: "توجيه الوالدين والأسرة",
        href: "/individuals#family",
        id: "jfxZgrlby_PLghiujHYKk",
      },
      {
        en: "Movement & Fitness",
        ar: "الحركة واللياقة",
        href: "/individuals#movement",
        id: "nIawXFV8LXfg0AQ9NeQL0",
      },
      {
        en: "Leadership Wellbeing",
        ar: "رفاهية القيادة",
        href: "/organizations",
        id: "mQHStu-UDWp1SP3Og4KKO",
      },
      {
        en: "Team Wellness Programmes",
        ar: "برامج رفاهية الفريق",
        href: "/organizations",
        id: "yc37mV9RLSh2aakr33Nh-",
      },
      {
        en: "Retreats & Experiences",
        ar: "الخلوات والتجارب",
        href: "/retreats",
        id: "asB3HrBuoJizS7eeVHygb",
      },
    ],
    RETREAT_SLIDES: [
      {
        en: {
          name: '"Stillness in Motion" Weekend Retreat',
          location: "Qatar",
          date: "November 2026",
          spots: "Max 8 participants",
          desc: "Two days of guided stillness, movement, and reflection. A rare chance to step away from the pace of daily life and return with clarity.",
        },
        ar: {
          name: 'خلوة نهاية الأسبوع "السكون في الحركة"',
          location: "قطر",
          date: "نوفمبر 2026",
          spots: "بحد أقصى 8 مشاركين",
          desc: "يومان من السكون الموجَّه والحركة والتأمل. فرصة نادرة للابتعاد عن إيقاع الحياة اليومية والعودة بوضوح.",
        },
        id: "vxOeP7SvHUmEXluoHohi_",
      },
    ],
  }),
  individuals: (schemas.pages?.individuals ?? schemas.individuals ?? identity).parse({
    PATHWAYS: [
      {
        id: "self",
        en: {
          title: "Self & Personal Transformation",
          sub: "Reconnect with who you are — and who you want to become",
          desc: "Work through identity, purpose, limiting beliefs, and life transitions with a dedicated advisor who sees the whole picture.",
        },
        ar: {
          title: "الذات والتطور الشخصي",
          sub: "أعد التواصل مع ذاتك — ومع من تريد أن تكون",
          desc: "اعمل على الهوية والهدف والمعتقدات المقيِّدة ومراحل التحول في الحياة مع مستشار مخصص يرى الصورة كاملة.",
        },
        icon: "◎",
      },
      {
        id: "health",
        en: {
          title: "Holistic Health & Lifestyle",
          sub: "Your body, your energy, your daily rhythm",
          desc: "Nutrition, sleep, movement, stress — addressed together, not in isolation. Because your physical state shapes everything else.",
        },
        ar: {
          title: "الصحة الشاملة ونمط الحياة",
          sub: "جسدك وطاقتك وإيقاعك اليومي",
          desc: "التغذية والنوم والحركة والتوتر — تُعالَج معًا لا بمعزل عن بعضها. لأن حالتك الجسدية تُشكّل كل شيء آخر.",
        },
        icon: "◈",
      },
      {
        id: "career",
        en: {
          title: "Career & Purpose",
          sub: "Clarity on what you do — and why it matters",
          desc: "Navigate career crossroads, build meaningful work, and align your professional life with your deeper values and strengths.",
        },
        ar: {
          title: "المسار المهني والهدف",
          sub: "وضوح فيما تفعله — ولماذا يهم",
          desc: "تجاوز مفترقات المسار المهني وبناء عمل ذي معنى ومواءمة حياتك المهنية مع قيمك ونقاط قوتك الأعمق.",
        },
        icon: "◇",
      },
      {
        id: "family",
        en: {
          title: "Parent & Family Guidance",
          sub: "Raising children with intention — and staying whole yourself",
          desc: "Parenting approaches, family dynamics, and the balance between nurturing others and maintaining your own wellbeing.",
        },
        ar: {
          title: "توجيه الوالدين والأسرة",
          sub: "تربية الأبناء بوعي — مع الحفاظ على اكتمالك أنت",
          desc: "أساليب التربية وديناميكيات الأسرة والتوازن بين رعاية الآخرين والحفاظ على رفاهيتك الشخصية.",
        },
        icon: "◉",
      },
      {
        id: "movement",
        en: {
          title: "Movement & Fitness",
          sub: "Move in a way that actually fits your life",
          desc: "Sustainable fitness, functional movement, and physical practices that support your energy — not deplete it.",
        },
        ar: {
          title: "الحركة واللياقة",
          sub: "تحرّك بطريقة تناسب حياتك فعلًا",
          desc: "لياقة مستدامة وحركة وظيفية وممارسات جسدية تدعم طاقتك — لا تستنزفها.",
        },
        icon: "◐",
      },
    ],
  }),
  organizations: (schemas.pages?.organizations ?? schemas.organizations ?? identity).parse({
    FAQ: [
      {
        id: "faq-org-1",
        en: {
          q: "How does Awakened's corporate wellbeing programme typically start?",
          a: "Every engagement begins with a private discovery conversation — with an HR lead, a senior manager, or both. We use that conversation to understand your organisation's context, priorities, and what has or hasn't worked before. From there we propose a scoped programme rather than a generic package.",
        },
        ar: {
          q: "كيف تبدأ برامج الرفاهية المؤسسية مع أوايكند عادةً؟",
          a: "تبدأ كل مشاركة بمحادثة اكتشاف خاصة — مع مسؤول الموارد البشرية أو مدير أول أو كليهما. نستخدم هذه المحادثة لفهم سياق مؤسستك وأولوياتها وما نجح أو لم ينجح سابقًا. ومن هناك نقترح برنامجًا محددًا بدلًا من حزمة جاهزة.",
        },
      },
      {
        id: "faq-org-2",
        en: {
          q: "Can programmes be delivered virtually for global teams, or only in person in Qatar?",
          a: "We work with both in-person and virtual formats, and many of our programmes are designed to accommodate distributed or international teams. In-person delivery in Qatar remains our primary offering, but we regularly support organisations with teams across multiple locations. We'll discuss what format best serves your people during the initial conversation.",
        },
        ar: {
          q: "هل يمكن تقديم البرامج افتراضيًا للفرق العالمية، أم في قطر فقط؟",
          a: "نعمل بكلا الشكلين: الحضوري والافتراضي، وكثير من برامجنا مصممة لاستيعاب الفرق الموزعة أو الدولية. يبقى التقديم الحضوري في قطر خيارنا الأساسي، لكننا ندعم بانتظام مؤسسات تضم فرقًا في مواقع متعددة. سنناقش الشكل الأنسب لفريقك خلال المحادثة الأولى.",
        },
      },
      {
        id: "faq-org-3",
        en: {
          q: "How is a corporate retreat different from a team wellness programme?",
          a: "A team wellness programme is typically an ongoing or recurring engagement — workshops, group sessions, or advisory support woven into the rhythm of work. A corporate retreat is a single immersive experience, held off-site, designed to create a meaningful break from the day-to-day and return people with a different perspective. Both serve distinct purposes, and some organisations choose to combine them.",
        },
        ar: {
          q: "كيف تختلف الخلوة المؤسسية عن برنامج رفاهية الفريق؟",
          a: "برنامج رفاهية الفريق هو عادةً مشاركة مستمرة أو متكررة — ورش عمل وجلسات جماعية ودعم استشاري يُدمج في إيقاع العمل. أما الخلوة المؤسسية فهي تجربة مكثفة واحدة خارج المكتب، مصممة لخلق استراحة حقيقية من الروتين اليومي وإعادة الناس بمنظور مختلف. كلاهما يخدم أغراضًا مميزة، وبعض المؤسسات تختار الجمع بينهما.",
        },
      },
      {
        id: "faq-org-4",
        en: {
          q: "Do you work with organizations outside Qatar?",
          a: "Yes. While we are based in Doha, we work with organisations across the Gulf region and internationally. Virtual engagements and retreat programmes can be structured for teams anywhere in the world. If you are based outside Qatar and want to explore what a partnership might look like, we welcome the conversation.",
        },
        ar: {
          q: "هل تعملون مع مؤسسات خارج قطر؟",
          a: "نعم. رغم أن مقرنا في الدوحة، نعمل مع مؤسسات في منطقة الخليج وعلى المستوى الدولي. يمكن تصميم المشاركات الافتراضية وبرامج الخلوات لفرق في أي مكان في العالم. إذا كنت خارج قطر وتريد استكشاف شكل الشراكة المحتملة، فنحن نرحب بالمحادثة.",
        },
      },
      {
        id: "faq-org-5",
        en: {
          q: "How is pricing structured for corporate engagements?",
          a: "Pricing is structured by team size, with a planning deposit that secures your dates. Deposits start from QAR 8,000 for small teams (up to 15 people), QAR 15,000 for mid-size organizations (16–50 people), and QAR 30,000 for large enterprises (51+ people). Full programme pricing is provided privately and customized to each organization's specific needs during consultation.",
        },
        ar: {
          q: "كيف يتم تحديد أسعار المشاركات المؤسسية؟",
          a: "يُحدَّد السعر بناءً على حجم الفريق، مع دفعة تخطيط تُثبِّت مواعيدك. تبدأ الدفعات من 8,000 ريال قطري للفرق الصغيرة (حتى 15 شخصًا)، و15,000 ريال للمؤسسات متوسطة الحجم (16–50 شخصًا)، و30,000 ريال للمؤسسات الكبيرة (51 شخصًا فأكثر). يُقدَّم التسعير الكامل للبرنامج بشكل خاص ومُخصَّص وفق احتياجات كل مؤسسة خلال الاستشارة.",
        },
      },
    ],
    OFFERINGS: [
      {
        en: {
          title: "Leadership Wellbeing",
          desc: "Senior leaders carry the most — and are often the least supported. We work with executives and managers on sustainable performance, decision clarity, and personal resilience. Engagements typically begin with a private assessment, followed by a series of one-to-one sessions tailored to the individual's role, pressures, and goals. Leaders who invest in this work report sharper focus, more grounded decision-making, and a measurable reduction in reactive behaviour under pressure.",
        },
        ar: {
          title: "رفاهية القيادة",
          desc: "يحمل القادة الكبار أكثر من غيرهم — وغالبًا ما يحظون بأقل دعم. نعمل مع المديرين التنفيذيين والمدراء على الأداء المستدام ووضوح القرار والمرونة الشخصية. تبدأ الجلسات عادةً بتقييم خاص، يعقبه سلسلة من الجلسات الفردية المصممة وفق دور الشخص وضغوطه وأهدافه. يُفيد القادة الذين يستثمرون في هذا العمل بتحسّن ملحوظ في التركيز واتخاذ القرار وانخفاض في ردود الفعل الانفعالية تحت الضغط.",
        },
        icon: "◈",
        id: "f754Lf9GbkMKCwRLJE99O",
      },
      {
        en: {
          title: "Team Wellness Programmes",
          desc: "Structured programmes that address stress, communication, and collective energy — delivered as workshops, group sessions, or ongoing advisory. Designed for teams navigating change, high-pressure periods, or a need to rebuild trust and cohesion, each programme is scoped to the organisation's specific context rather than delivered off the shelf. Teams typically leave with shared language, practical tools, and a noticeably different quality of interaction with one another.",
        },
        ar: {
          title: "برامج رفاهية الفريق",
          desc: "برامج منظمة تعالج التوتر والتواصل والطاقة الجماعية — تُقدَّم كورش عمل أو جلسات جماعية أو استشارات مستمرة. صُمِّمت للفرق التي تمر بمراحل تغيير أو ضغط عالٍ أو تحتاج إلى إعادة بناء الثقة والتماسك، وتُصاغ كل برنامج وفق السياق الخاص بالمؤسسة لا من قالب جاهز. تغادر الفرق عادةً بلغة مشتركة وأدوات عملية وجودة تفاعل ملموسة بينها.",
        },
        icon: "◉",
        id: "tWPxFyZpF2q0fRkR7WSYT",
      },
      {
        en: {
          title: "Corporate Retreats",
          desc: "Immersive off-site experiences that reset perspective, deepen connection, and return teams with renewed clarity and purpose. Designed for leadership groups, cross-functional teams, or organisations marking a significant transition, retreats are held in carefully chosen settings that support genuine rest and reflection. Participants consistently describe a shift in how they relate to their work and to each other — one that carries forward long after the retreat ends.",
        },
        ar: {
          title: "خلوات مؤسسية",
          desc: "تجارب مكثفة خارج المكتب تُعيد ضبط المنظور وتعمّق الروابط وتُعيد الفرق بوضوح وهدف متجدد. صُمِّمت لمجموعات القيادة والفرق متعددة التخصصات أو المؤسسات التي تمر بمرحلة تحول مهمة، وتُعقد في بيئات مختارة بعناية تدعم الراحة الحقيقية والتأمل. يصف المشاركون باستمرار تحولًا في علاقتهم بعملهم وببعضهم — يمتد أثره طويلًا بعد انتهاء الخلوة.",
        },
        icon: "◇",
        id: "DabRdApfBukBNqpfhey3q",
      },
      {
        en: {
          title: "Wellbeing Strategy",
          desc: "Advisory support for HR and leadership teams building or refining a workplace wellbeing strategy that actually works. We help organisations move beyond surface-level initiatives — auditing what is already in place, identifying gaps, and co-designing an approach that is coherent, sustainable, and genuinely valued by employees. The outcome is a clear strategic framework that leadership can implement with confidence and measure over time.",
        },
        ar: {
          title: "استراتيجية الرفاهية",
          desc: "دعم استشاري لفرق الموارد البشرية والقيادة في بناء أو تحسين استراتيجية رفاهية في مكان العمل تُحقق نتائج فعلية. نساعد المؤسسات على تجاوز المبادرات السطحية — من خلال مراجعة ما هو قائم وتحديد الثغرات وتصميم نهج متماسك ومستدام يُقدِّره الموظفون حقًا. والنتيجة إطار استراتيجي واضح يمكن للقيادة تطبيقه بثقة وقياسه بمرور الوقت.",
        },
        icon: "◎",
        id: "D6sZC1ZyanjTSPCLHi0XJ",
      },
    ],
  }),
  services: (schemas.pages?.services ?? schemas.services ?? identity).parse({
    services: [
      {
        number: "01",
        id: "holistic-consultancy",
        en: "Holistic Lifestyle Advisory",
        ar: "الاستشارة الشاملة لنمط الحياة",
        descEn:
          "Our one-on-one advisory service explores the full picture of your personal wellbeing. Through structured conversations and practical frameworks, we help you identify what is out of balance and build a realistic, personalised plan for sustainable change. This is lifestyle advisory — not clinical treatment.",
        descAr:
          "تستكشف خدمتنا الاستشارية الفردية الصورة الكاملة لرفاهيتك الشخصية. من خلال محادثات منظمة وأطر عملية، نساعدك على تحديد ما هو خارج التوازن وبناء خطة واقعية ومخصصة للتغيير المستدام. هذه استشارة لنمط الحياة — لا علاج سريري",
        features: [
          {
            en: "Personalised wellbeing assessment across all four pillars",
            ar: "تقييم شخصي للعافية عبر الأبعاد الأربعة",
            id: "bJ9CKwI8FGV4lqa4fG2OF",
          },
          {
            en: "Practical guidance on stress, sleep, and daily habits",
            ar: "إرشاد عملي حول التوتر والنوم والعادات اليومية",
            id: "9fpzWtNMPQEolXIdedg93",
          },
          {
            en: "Emotional awareness and resilience-building frameworks",
            ar: "أطر الوعي العاطفي وبناء المرونة الداخلية",
            id: "7WXcVJQJbW7N1BgXCJAPd",
          },
          {
            en: "Ongoing advisory support and accountability",
            ar: "دعم استشاري مستمر ومتابعة حقيقية",
            id: "2OymrkwCfRxP2pi0YVKY5",
          },
        ],
        bookingLink: "/book#sessions",
        bookingEn: "Book a Session",
        bookingAr: "احجز جلسة",
        learnMoreLink: "/individuals",
        learnMoreEn: "Learn More",
        learnMoreAr: "اعرف المزيد",
      },
      {
        number: "02",
        id: "specialised-support",
        en: "Specialised Wellbeing Programs",
        ar: "برامج العافية المتخصصة",
        descEn:
          "Structured advisory programs for individuals navigating specific lifestyle challenges. Each program is built around the individual and delivered by experienced advisors. Where a challenge requires clinical care, we coordinate referrals to qualified healthcare providers — we do not replace them.",
        descAr:
          "برامج استشارية مصممة للأفراد الذين يواجهون تحديات محددة في نمط الحياة. كل برنامج مبني حول الفرد ويُقدَّم من قِبل مستشارين ذوي خبرة. حين يتطلب التحدي رعاية سريرية، ننسق الإحالة إلى المختصين المؤهلين — نحن لا نحل محلهم",
        features: [
          {
            en: "Sleep improvement and circadian rhythm guidance",
            ar: "إرشاد لتحسين النوم وضبط الإيقاع اليومي",
            id: "TyWPtu21D1ezdZB0o5gkW",
          },
          {
            en: "Longevity and preventive lifestyle advisory",
            ar: "استشارات نمط الحياة الوقائي وطول العمر",
            id: "mnfAU7ECL9f3IDdle0GSj",
          },
          {
            en: "Burnout recovery and executive wellbeing advisory",
            ar: "استشارات التعافي من الإرهاق ورفاهية القيادات",
            id: "VnCyDb0XJjSDWgCPz1B7M",
          },
          {
            en: "Clinical referrals coordinated where required",
            ar: "تنسيق الإحالات السريرية عند الحاجة",
            id: "lKxs4C_3dR9zqA6rqRHAP",
          },
        ],
        bookingLink: "/book#sessions",
        bookingEn: "Book a Session",
        bookingAr: "احجز جلسة",
        learnMoreLink: "/individuals",
        learnMoreEn: "Learn More",
        learnMoreAr: "اعرف المزيد",
      },
      {
        number: "03",
        id: "corporate-group",
        en: "Corporate & Group Wellbeing",
        ar: "رفاهية المؤسسات والفرق",
        descEn:
          "Advisory wellbeing programmes for organisations, leadership teams, and private groups — in Qatar and internationally. We design and facilitate practical sessions that build awareness, reduce burnout risk, and support sustainable performance — delivered as advisory workshops, not clinical interventions.",
        descAr:
          "برامج استشارية للرفاهية للمؤسسات وفرق القيادة والمجموعات الخاصة — في قطر وعالمياً. نصمم ونيسّر جلسات عملية تبني الوعي وتقلل من مخاطر الإرهاق وتدعم الأداء المستدام — مقدمة كورش عمل استشارية، لا تدخلات سريرية",
        features: [
          {
            en: "Leadership and executive wellbeing workshops",
            ar: "ورش عمل رفاهية القيادة والمديرين التنفيذيين",
            id: "f9bu7S2vUJnTZpPjuUESy",
          },
          {
            en: "Team resilience and stress awareness programs",
            ar: "برامج مرونة الفريق والوعي بالضغط",
            id: "YCn9MmOgqeDTGInjmWUYk",
          },
          {
            en: "Ongoing organisational wellbeing advisory",
            ar: "استشارات رفاهية مؤسسية مستمرة",
            id: "jFqedLU1d52cMA1A8_kOb",
          },
          {
            en: "Optional: curated corporate retreats at luxury venues",
            ar: "اختياري: خلوات مؤسسية مختارة في أماكن راقية",
            id: "kxB4xzPmZ-Z4pEONpO-J9",
          },
        ],
        bookingLink: "/book#retreats",
        bookingEn: "Register Your Interest",
        bookingAr: "سجّل اهتمامك",
        learnMoreLink: "/organizations",
        learnMoreEn: "Learn More",
        learnMoreAr: "اعرف المزيد",
      },
      {
        number: "04",
        id: "luxury-retreats",
        en: "Luxury Wellness Retreats",
        ar: "خلوات العافية الراقية",
        descEn:
          "Curated retreat experiences at premium venues in Qatar and internationally. Each retreat combines lifestyle advisory sessions, restorative practices, and expert-led programming — designed to help you reset, reflect, and return with greater clarity.",
        descAr:
          "تجارب خلوات مختارة بعناية في أماكن راقية داخل قطر وخارجها. تجمع كل خلوة بين جلسات استشارة نمط الحياة والممارسات التصالحية والبرامج بإشراف خبراء — مصممة لمساعدتك على إعادة الضبط والتأمل والعودة بوضوح أعمق",
        features: [
          {
            en: "Exclusive partnerships with luxury venues in Qatar and internationally",
            ar: "شراكات حصرية مع أماكن راقية في قطر وخارجها",
            id: "1Jx1WgH1cex92lwA_zY1p",
          },
          {
            en: "Fully bespoke retreat itinerary — designed around each guest",
            ar: "برنامج خلوة مخصص بالكامل — مصمم حول كل ضيف",
            id: "-V-3k3GJuOPY0FoQsjqKJ",
          },
          {
            en: "Lifestyle advisory and restorative practice sessions",
            ar: "جلسات استشارة نمط الحياة والممارسات التصالحية",
            id: "AEzzFNwQuJF4Ykghp99Ir",
          },
          {
            en: "Absolute privacy and discretion throughout",
            ar: "خصوصية مطلقة وتقدير تام طوال الرحلة",
            id: "e3iUyb6cTXDor-0t0S-XT",
          },
        ],
        bookingLink: "/book#retreats",
        bookingEn: "View Retreats",
        bookingAr: "استعرض الخلوات",
        learnMoreLink: "/retreats",
        learnMoreEn: "Learn More",
        learnMoreAr: "اعرف المزيد",
      },
    ],
    pillars: [
      {
        en: "Mental",
        ar: "النفسية",
        descEn: "Clarity of mind — away from pressure and noise",
        descAr: "صفاء الذهن، بعيداً عن الضغوط والضجيج",
        id: "iO-7aP36AZYv2HoWg8MEQ",
      },
      {
        en: "Physical",
        ar: "الجسدية",
        descEn: "A body in balance, restoring its natural rhythm",
        descAr: "جسد في توازن، يستعيد إيقاعه الفطري",
        id: "XZgIoRIUT9Lt3mozUfRvb",
      },
      {
        en: "Emotional",
        ar: "العاطفية",
        descEn: "The depth of feeling — met with understanding and care",
        descAr: "عمق المشاعر، يُقابَل بالفهم والرعاية الحقيقية",
        id: "O0JPDUoyL1uGnyF02mPPH",
      },
      {
        en: "Spiritual",
        ar: "الروحية",
        descEn: "A quiet sense of purpose — discovered from within",
        descAr: "إحساس هادئ بالهدف، يُكتشف من أعماق الذات",
        id: "XBex5ObPriwFe--cIjyxx",
      },
    ],
  }),
};

export const about = pages.about;

export const book = pages.book;

export const community = pages.community;

export const home = pages.home;

export const individuals = pages.individuals;

export const organizations = pages.organizations;

export const services = pages.services;
