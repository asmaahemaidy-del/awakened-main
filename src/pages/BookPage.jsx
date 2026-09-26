import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { book } from "../content/pages";
import { useLanguage } from "../i18n/LanguageContext";
import { Seo } from "../components/Seo";
import { startOneTimeCommerceCheckout } from "../lib/commerce";

const SINGLE_SESSION_PRICE = 174700;

const SINGLE_SESSION_USD = 480;

function toUSD(qar) {
  return `~$${Math.round(qar / 100 / 3.64).toLocaleString("en-US")}`;
}

const MEAL_PLANS = [
  {
    id: "meal-basic",
    labelEn: "Essential Plan",
    labelAr: "الخطة الأساسية",
    descEn: "10 ready-made meals / week",
    descAr: "١٠ وجبات جاهزة / أسبوع",
    priceEn: "+ QAR 850 / week",
    priceAr: "+ ٨٥٠ ريال / أسبوع",
  },
  {
    id: "meal-full",
    labelEn: "Full Nutrition Plan",
    labelAr: "خطة التغذية الكاملة",
    descEn: "21 meals / week — breakfast, lunch & dinner",
    descAr: "٢١ وجبة / أسبوع — إفطار وغداء وعشاء",
    priceEn: "+ QAR 1,600 / week",
    priceAr: "+ ١٬٦٠٠ ريال / أسبوع",
  },
  {
    id: "meal-premium",
    labelEn: "Premium Wellness Meals",
    labelAr: "وجبات العافية المميزة",
    descEn: "21 chef-curated therapeutic meals / week",
    descAr: "٢١ وجبة علاجية يُعدّها الشيف / أسبوع",
    priceEn: "+ QAR 2,400 / week",
    priceAr: "+ ٢٬٤٠٠ ريال / أسبوع",
  },
];

const packages = [
  {
    skuId: "019dce10-c3f0-7669-ac04-e245507ba5c0",
    tier: "Starter",
    tierAr: "البداية",
    sessions: "3 Sessions",
    sessionsAr: "٣ جلسات",
    price: 494700,
    descEn:
      "An initial deep-dive advisory session followed by two focused follow-up sessions. The ideal starting point for those beginning their wellbeing journey with Awakened.",
    descAr:
      "تقييم أولي معمّق يتبعه جلستا متابعة مركّزتان. نقطة البداية المثالية لمن يشرع في رحلة العافية مع أوايكند",
    features: [
      {
        en: "Comprehensive initial wellbeing assessment",
        ar: "تقييم شامل للعافية في البداية",
      },
      {
        en: "2 personalised follow-up sessions",
        ar: "جلستا متابعة مخصصتان",
      },
      {
        en: "Personalised wellness recommendations",
        ar: "توصيات عافية مصممة خصيصاً لك",
      },
    ],
    highlight: false,
    mealPlan: false,
  },
  {
    skuId: "019dce10-cd64-7799-ae81-3b479a68c7b4",
    tier: "Core",
    tierAr: "الأساسية",
    sessions: "6 Sessions",
    sessionsAr: "٦ جلسات",
    price: 969700,
    descEn:
      "Our primary advisory programme. A comprehensive lifestyle assessment, six one-on-one sessions, and a personalised wellbeing roadmap.",
    descAr: "برنامجنا الاستشاري الأساسي. تقييم شامل وست جلسات فردية وخارطة طريق تحول مخصصة لك",
    features: [
      {
        en: "Full-spectrum wellbeing assessment",
        ar: "تقييم شامل للعافية",
      },
      {
        en: "6 one-on-one personalised sessions",
        ar: "٦ جلسات فردية مخصصة",
      },
      {
        en: "Personalised transformation roadmap",
        ar: "خارطة طريق تحول مصممة لك",
      },
      {
        en: "Optional meal plan add-on available",
        ar: "خطة وجبات اختيارية متاحة",
      },
    ],
    highlight: true,
    mealPlan: true,
  },
  {
    skuId: "019dce10-d42f-737d-bd6d-dce6efe7d464",
    tier: "Immersive",
    tierAr: "الغامرة",
    sessions: "12 Sessions",
    sessionsAr: "١٢ جلسة",
    price: 1879700,
    descEn:
      "Our most comprehensive advisory offering. Twelve sessions over three months, a full-spectrum lifestyle roadmap, priority access, and ongoing accountability support.",
    descAr:
      "عرضنا الأكثر شمولاً. اثنتا عشرة جلسة على مدى ثلاثة أشهر، وخارطة طريق شاملة للعافية، وأولوية الوصول، ودعم مستمر للمتابعة",
    features: [
      {
        en: "12 sessions over 3 months",
        ar: "١٢ جلسة على مدى ٣ أشهر",
      },
      {
        en: "Full-spectrum transformation roadmap",
        ar: "خارطة طريق تحول شاملة",
      },
      {
        en: "Priority access & scheduling",
        ar: "أولوية الوصول والجدولة",
      },
      {
        en: "Ongoing accountability support",
        ar: "دعم مستمر للمتابعة والمساءلة",
      },
      {
        en: "Optional meal plan add-on available",
        ar: "خطة وجبات اختيارية متاحة",
      },
    ],
    highlight: false,
    mealPlan: true,
  },
];

const retreats = [
  {
    skuId: "019dce10-f342-70af-8712-c61979038e28",
    number: "01",
    en: "Private Wellness Retreat",
    ar: "خلوة العافية الخاصة",
    tagEn: "Fully Bespoke",
    tagAr: "مخصص بالكامل",
    price: 755e3,
    depositNote: "Reservation deposit — full programme priced upon consultation",
    depositNoteAr: "وديعة الحجز — يُحدد سعر البرنامج الكامل عند الاستشارة",
    descEn:
      "A completely private retreat designed entirely around you. Held at luxury resorts in Qatar and internationally. Your itinerary, your pace, your transformation.",
    descAr:
      "خلوة خاصة تماماً، مصممة بالكامل حولك. تُعقد في منتجعات راقية داخل قطر وخارجها. برنامجك، إيقاعك، تحولك",
    features: [
      {
        en: "Fully bespoke itinerary — no two retreats are the same",
        ar: "برنامج مخصص بالكامل — لا خلوتان متشابهتان",
      },
      {
        en: "Luxury resort partnerships in Qatar and internationally",
        ar: "شراكات مع منتجعات راقية في قطر وخارجها",
      },
      {
        en: "Holistic therapies and personal consultancy sessions",
        ar: "علاجات شاملة وجلسات استشارة شخصية",
      },
      {
        en: "Absolute privacy and discretion throughout",
        ar: "خصوصية مطلقة وتقدير تام طوال الرحلة",
      },
    ],
    dark: true,
  },
  {
    skuId: "019dce10-fdbb-74cb-a2fb-99c738dc0d5e",
    number: "02",
    en: "Group Wellness Retreat",
    ar: "خلوة العافية الجماعية",
    tagEn: "Limited Spaces",
    tagAr: "أماكن محدودة",
    price: 35e4,
    depositNote: "Per person — spot reservation",
    depositNoteAr: "للشخص الواحد — حجز مكان",
    descEn:
      "Open to individuals from all walks of life, united by a shared intention for wellness. Intimate group sizes, luxury venues, carefully facilitated to honour each person’s pace.",
    descAr:
      "مفتوحة لكل من يحمل نية صادقة نحو العافية. مجموعات صغيرة، أماكن راقية، ميسّرة بعناية لتكريم إيقاع كل شخص",
    features: [
      {
        en: "Open to all — no prior wellness experience required",
        ar: "مفتوحة للجميع — لا يُشترط خبرة سابقة",
      },
      {
        en: "Intimate group sizes, never crowded",
        ar: "مجموعات صغيرة، لا ازدحام ولا ضجيج",
      },
      {
        en: "Luxury venues in Qatar and internationally",
        ar: "أماكن راقية في قطر وخارجها",
      },
      {
        en: "Facilitated to honour each person's pace",
        ar: "ميسّرة لتكريم إيقاع كل شخص",
      },
    ],
    dark: false,
  },
  {
    skuId: "019dce11-0687-736f-91e7-73f13ccc783c",
    number: "03",
    en: "Corporate Retreat",
    ar: "الخلوة المؤسسية",
    tagEn: "Teams & Organisations",
    tagAr: "الفرق والمؤسسات",
    price: 15e5,
    depositNote: "Planning deposit — full programme priced upon consultation",
    depositNoteAr: "وديعة التخطيط — يُحدد سعر البرنامج الكامل عند الاستشارة",
    descEn:
      "A powerful extension of corporate wellness. Curated at luxury venues in Qatar and internationally, combining structured wellbeing programming with space for reflection, connection, and renewal.",
    descAr:
      "امتداد قوي لبرامج العافية المؤسسية. مختارة في أماكن راقية داخل قطر وخارجها، تجمع بين برامج عافية منظمة ومساحة للتأمل والتواصل والتجدد",
    features: [
      {
        en: "Curated at luxury resorts in Qatar and internationally",
        ar: "مختارة في منتجعات راقية داخل قطر وخارجها",
      },
      {
        en: "Leadership resilience and energy management",
        ar: "مرونة القيادة وإدارة الطاقة",
      },
      {
        en: "Structured wellbeing and team connection sessions",
        ar: "جلسات عافية منظمة وتواصل الفريق",
      },
      {
        en: "Full confidentiality and end-to-end planning",
        ar: "سرية تامة وتخطيط شامل من البداية إلى النهاية",
      },
    ],
    dark: false,
  },
];

const events = [
  {
    skuId: "019dce11-2788-749a-ac80-a3d248c38fa7",
    en: "The Art of Rest",
    ar: "فن الراحة",
    typeEn: "Masterclass",
    typeAr: "درس رئيسي",
    date: "October 2026",
    dateAr: "أكتوبر ٢٠٢٦",
    price: 85e3,
    descEn:
      "A deep dive into the science and practice of restorative rest — sleep, recovery, and the art of doing nothing well.",
    descAr: "غوص عميق في علم الراحة التصالحية وممارستها — النوم والتعافي وفن التوقف بإتقان",
    location: "Doha, Qatar",
    locationAr: "الدوحة، قطر",
  },
  {
    skuId: "019dce11-33ea-74f8-938f-5c60c3ac7dee",
    en: "Stillness in Motion",
    ar: "السكون في الحركة",
    typeEn: "Weekend Retreat",
    typeAr: "خلوة نهاية الأسبوع",
    date: "November 2026",
    dateAr: "نوفمبر ٢٠٢٦",
    price: 22e4,
    descEn:
      "Movement, breathwork, and mindful presence. A two-day experience limited to 8 participants.",
    descAr: "حركة وتنفس واعٍ وحضور حقيقي. تجربة يومين لا تتجاوز ٨ مشاركين",
    location: "Qatar",
    locationAr: "قطر",
  },
  {
    skuId: "019dce11-4118-74ac-ab8d-120ae0d02f1b",
    en: "Leadership & Longevity",
    ar: "القيادة وطول العمر",
    typeEn: "Workshop",
    typeAr: "ورشة عمل",
    date: "December 2026",
    dateAr: "ديسمبر ٢٠٢٦",
    price: 12e4,
    descEn:
      "Sustainable performance for senior leaders. A half-day workshop on energy management and long-term vitality.",
    descAr:
      "أداء مستدام للقادة الذين يفكرون بعيداً. ورشة نصف يوم حول إدارة الطاقة والحيوية طويلة الأمد",
    location: "Doha, Qatar",
    locationAr: "الدوحة، قطر",
  },
];

const PRIMARY_SESSION_SKU = "019dce10-c3f0-7669-ac04-e245507ba5c0";

const corporateTiers = [
  {
    skuId: "019dce10-c3f0-7669-ac04-e245507ba5c0",
    // reuse existing SKU for deposit flow
    sizeEn: "Small Team",
    sizeAr: "فريق صغير",
    rangeEn: "Up to 15 people",
    rangeAr: "حتى ١٥ شخصاً",
    deposit: 797e3,
    descEn:
      "Ideal for small leadership teams or departments seeking focused wellbeing programming and team cohesion.",
    descAr:
      "مثالي للفرق القيادية الصغيرة أو الأقسام التي تسعى إلى برامج عافية مركّزة وتماسك الفريق",
    features: [
      {
        en: "Bespoke half-day or full-day programme",
        ar: "برنامج مخصص لنصف يوم أو يوم كامل",
      },
      {
        en: "Wellbeing assessment for each participant",
        ar: "تقييم عافية لكل مشارك",
      },
      {
        en: "Leadership resilience workshop",
        ar: "ورشة مرونة القيادة",
      },
      {
        en: "Full confidentiality & end-to-end planning",
        ar: "سرية تامة وتخطيط شامل",
      },
    ],
    highlight: false,
  },
  {
    skuId: "019dce10-cd64-7799-ae81-3b479a68c7b4",
    sizeEn: "Mid-Size Organisation",
    sizeAr: "مؤسسة متوسطة",
    rangeEn: "16 – 50 people",
    rangeAr: "١٦ – ٥٠ شخصاً",
    deposit: 1497e3,
    descEn:
      "A structured multi-day retreat combining wellbeing programming, team connection sessions, and individual advisory touchpoints.",
    descAr: "خلوة متعددة الأيام تجمع بين برامج العافية وجلسات تواصل الفريق ونقاط استشارية فردية",
    features: [
      {
        en: "Multi-day structured retreat programme",
        ar: "برنامج خلوة متعدد الأيام",
      },
      {
        en: "Group & individual wellbeing sessions",
        ar: "جلسات عافية جماعية وفردية",
      },
      {
        en: "Energy management & performance workshops",
        ar: "ورش إدارة الطاقة والأداء",
      },
      {
        en: "Luxury venue in Qatar or internationally",
        ar: "مكان راقٍ في قطر أو خارجها",
      },
      {
        en: "Full confidentiality & end-to-end planning",
        ar: "سرية تامة وتخطيط شامل",
      },
    ],
    highlight: true,
  },
  {
    skuId: "019dce10-d42f-737d-bd6d-dce6efe7d464",
    sizeEn: "Large Enterprise",
    sizeAr: "مؤسسة كبيرة",
    rangeEn: "51+ people",
    rangeAr: "٥١ شخصاً فأكثر",
    deposit: 2997e3,
    descEn:
      "A fully bespoke enterprise wellness retreat. Designed from the ground up for large organisations with complex needs and high standards.",
    descAr:
      "خلوة عافية مؤسسية مخصصة بالكامل. مصممة من الصفر للمؤسسات الكبيرة ذات الاحتياجات المعقدة والمعايير الرفيعة",
    features: [
      {
        en: "Fully bespoke multi-day enterprise programme",
        ar: "برنامج مؤسسي متعدد الأيام مخصص بالكامل",
      },
      {
        en: "Dedicated Awakened programme director",
        ar: "مدير برنامج أوايكند مخصص",
      },
      {
        en: "Multiple practitioner specialists on-site",
        ar: "متخصصون متعددون في الموقع",
      },
      {
        en: "Executive 1:1 advisory sessions",
        ar: "جلسات استشارية فردية للمديرين التنفيذيين",
      },
      {
        en: "Post-retreat follow-up & reporting",
        ar: "متابعة وتقارير ما بعد الخلوة",
      },
      {
        en: "Full confidentiality & end-to-end planning",
        ar: "سرية تامة وتخطيط شامل",
      },
    ],
    highlight: false,
  },
];

export function BookPage() {
  const [loadingSkuId, setLoadingSkuId] = useState(null);
  const [error, setError] = useState(null);
  const [selectedMealPlan, setSelectedMealPlan] = useState({});
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";
  const fontBody = lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = lang === "ar" ? "var(--font-arabic)" : "var(--font-heading)";
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(
          () =>
            el.scrollIntoView({
              behavior: "smooth",
              block: "start",
            }),
          120,
        );
      }
    }
  }, [location.hash]);
  const handleCheckout = async (skuId) => {
    setLoadingSkuId(skuId);
    setError(null);
    const result = await startOneTimeCommerceCheckout({
      skuId,
      quantity: 1,
    });
    if (result.success && result.checkoutUrl) {
      window.location.href = result.checkoutUrl;
      return;
    }
    setError(result.error || "Unable to start checkout. Please try again.");
    setLoadingSkuId(null);
  };
  return (
    <div
      style={{
        direction: lang === "ar" ? "rtl" : "ltr",
      }}
    >
      <Seo
        path="/book"
        title={t(
          "Book — Awakened | Start with a Discovery Call",
          "الحجز — أوايكند | ابدأ بمكالمة اكتشاف",
        )}
        description={t(
          "Book a free discovery call, advisory sessions, wellness retreats, or corporate programmes with Awakened. Based in Qatar, serving clients worldwide.",
          "احجز مكالمة اكتشاف مجانية أو جلسات استشارية أو خلوات عافية أو برامج مؤسسية مع أوايكند. مقرنا قطر ونخدم عملاء حول العالم.",
        )}
      />
      <section
        id="top"
        className="relative overflow-hidden"
        style={{
          background: "#1A2B1C",
          scrollMarginTop: "80px",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, rgba(107,153,112,0.12) 0%, transparent 65%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-8 pt-40 pb-20">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-8 h-px"
              style={{
                background: "#C9A84C",
              }}
            />
            <p
              className="text-[10px] tracking-[0.35em] uppercase"
              style={{
                fontFamily: fontBody,
                color: "#C9A84C",
              }}
            >
              {t("Awakened", "أوايكند")}
            </p>
          </div>
          <h1
            style={{
              fontFamily: fontHead,
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              color: "#F7F4EE",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: isAr ? 0 : "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            {t(
              <>
                <span>Book</span>
                {" & "}
                <span
                  style={{
                    color: "#A8C5A0",
                    fontStyle: "italic",
                  }}
                >
                  Reserve
                </span>
              </>,
              <>
                <span>الحجز</span>{" "}
                <span
                  style={{
                    color: "#A8C5A0",
                  }}
                >
                  والاستفسار
                </span>
              </>,
            )}
          </h1>
          <div className="flex flex-wrap gap-3">
            {[
              {
                href: "#discovery",
                en: "Discovery Call",
                ar: "مكالمة الاكتشاف",
              },
              {
                href: "#sessions",
                en: "Advisory Sessions",
                ar: "الجلسات الاستشارية",
              },
              {
                href: "#corporate",
                en: "Corporate Wellness",
                ar: "العافية المؤسسية",
              },
              {
                href: "#retreats",
                en: "Wellness Retreats",
                ar: "خلوات العافية",
              },
              {
                href: "#events",
                en: "Events",
                ar: "الفعاليات",
              },
              {
                href: "#membership",
                en: "Community Membership",
                ar: "عضوية المجتمع",
              },
            ].map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="px-5 py-2 text-[10px] tracking-[0.2em] uppercase transition-all duration-300"
                style={{
                  fontFamily: fontBody,
                  border: "1px solid rgba(168,197,160,0.35)",
                  color: "#A8C5A0",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(168,197,160,0.1)";
                  e.currentTarget.style.borderColor = "#A8C5A0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(168,197,160,0.35)";
                }}
              >
                {t(a.en, a.ar)}
              </a>
            ))}
          </div>
        </div>
        <div
          className="w-full h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.4) 40%, rgba(168,197,160,0.3) 70%, transparent 100%)",
          }}
        />
      </section>
      <section
        id="discovery"
        style={{
          background: "var(--brand-cream)",
          padding: "72px 24px",
          scrollMarginTop: 80,
        }}
      >
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            textAlign: "center",
            direction: lang === "ar" ? "rtl" : "ltr",
          }}
        >
          <p
            style={{
              fontFamily: fontBody,
              fontSize: isAr ? "0.82rem" : "0.65rem",
              letterSpacing: isAr ? 0 : "0.22em",
              textTransform: isAr ? "none" : "uppercase",
              color: "var(--brand-sage)",
              marginBottom: 16,
            }}
          >
            {t(book.discovery.eyebrow.en, book.discovery.eyebrow.ar)}
          </p>
          <h2
            style={{
              fontFamily: fontHead,
              fontSize: isAr ? "clamp(1.8rem,4.5vw,3rem)" : "clamp(2rem,4.5vw,3.2rem)",
              fontWeight: 400,
              color: "var(--brand-forest)",
              lineHeight: isAr ? 1.5 : 1.15,
              marginBottom: 16,
            }}
          >
            {t(book.discovery.heading.en, book.discovery.heading.ar)}
          </h2>
          <p
            style={{
              fontFamily: fontBody,
              fontSize: isAr ? "1rem" : "0.95rem",
              color: "var(--brand-forest-mid)",
              lineHeight: isAr ? 2.1 : 1.8,
              maxWidth: 560,
              margin: "0 auto 12px",
            }}
          >
            {t(book.discovery.body.en, book.discovery.body.ar)}
          </p>
          <p
            style={{
              fontFamily: fontBody,
              fontSize: isAr ? "0.88rem" : "0.82rem",
              color: "var(--brand-sage-mid)",
              fontStyle: isAr ? "normal" : "italic",
              marginBottom: 32,
            }}
          >
            {t(book.discovery.note.en, book.discovery.note.ar)}
          </p>
          <Link
            to="/contact?interest=discovery"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "var(--brand-forest)",
              padding: "14px 40px",
              fontFamily: fontBody,
              fontSize: isAr ? "0.9rem" : "0.7rem",
              letterSpacing: isAr ? 0 : "0.18em",
              textTransform: isAr ? "none" : "uppercase",
              color: "var(--brand-gold)",
              textDecoration: "none",
              transition: "background 0.4s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--brand-forest-mid)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--brand-forest)")}
          >
            {t(book.discovery.cta.en, book.discovery.cta.ar)}
          </Link>
          <p
            style={{
              fontFamily: fontBody,
              fontSize: isAr ? "0.82rem" : "0.72rem",
              color: "var(--brand-sage-mid)",
              marginTop: 16,
            }}
          >
            {t(book.discovery.emailNote.en, book.discovery.emailNote.ar)}
          </p>
        </div>
      </section>
      <section
        id="sessions"
        style={{
          background: "#FAF7F2",
          scrollMarginTop: "80px",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 pt-20 pb-12">
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-10 h-px"
              style={{
                background: "#6B9970",
              }}
            />
            <p
              className="text-[10px] tracking-[0.35em] uppercase"
              style={{
                fontFamily: fontBody,
                color: "#6B9970",
              }}
            >
              {t("Section 01", "القسم ٠١")}
            </p>
          </div>
          <h2
            style={{
              fontFamily: fontHead,
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              color: "#1A2B1C",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: isAr ? 0 : "-0.01em",
            }}
          >
            {t("Advisory Sessions", "الجلسات الاستشارية")}
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-8 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.skuId}
                className="relative flex flex-col overflow-hidden"
                style={{
                  background: pkg.highlight ? "#1A2B1C" : "#FFFFFF",
                  border: pkg.highlight ? "none" : "1px solid #E0D9CE",
                  boxShadow: pkg.highlight
                    ? "0 8px 40px rgba(26,43,28,0.18)"
                    : "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                {pkg.highlight && (
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{
                      background: "#6B9970",
                    }}
                  />
                )}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-xs tracking-[0.2em] uppercase px-3 py-1"
                      style={{
                        fontFamily: fontBody,
                        background: pkg.highlight ? "rgba(107,153,112,0.2)" : "#F0EBE3",
                        color: pkg.highlight ? "#A8C5A0" : "#6B9970",
                      }}
                    >
                      {t(pkg.tier, pkg.tierAr)}
                    </span>
                    <span
                      className="text-sm"
                      style={{
                        fontFamily: fontBody,
                        color: pkg.highlight ? "#A8C5A0" : "#9B8E7E",
                      }}
                    >
                      {t(pkg.sessions, pkg.sessionsAr)}
                    </span>
                  </div>
                  <div className="mb-6">
                    <p
                      className="text-3xl font-light"
                      style={{
                        fontFamily: fontHead,
                        color: pkg.highlight ? "#F7F4EE" : "#1A2B1C",
                      }}
                    >
                      {"QAR "}
                      {(pkg.price / 100).toLocaleString("en-QA")}
                    </p>
                    <p
                      className="text-sm mt-1"
                      style={{
                        fontFamily: fontBody,
                        color: pkg.highlight ? "#A8C5A0" : "#9B8E7E",
                      }}
                    >
                      {toUSD(pkg.price)}
                      {" USD"}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2 mb-8 flex-1">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span
                          style={{
                            color: "#6B9970",
                            marginTop: 2,
                          }}
                        >
                          —
                        </span>
                        <span
                          className="text-xs"
                          style={{
                            fontFamily: fontBody,
                            color: pkg.highlight ? "#C8D8C4" : "#3D5C42",
                          }}
                        >
                          {t(f.en, f.ar)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {pkg.mealPlan && (
                    <div
                      className="mb-6"
                      style={{
                        borderTop: pkg.highlight
                          ? "1px solid rgba(168,197,160,0.2)"
                          : "1px solid #E0D9CE",
                        paddingTop: 20,
                      }}
                    >
                      <p
                        className="text-xs mb-3"
                        style={{
                          fontFamily: fontBody,
                          color: pkg.highlight ? "#A8C5A0" : "#9B8E7E",
                          letterSpacing: isAr ? 0 : "0.12em",
                          textTransform: isAr ? "none" : "uppercase",
                        }}
                      >
                        {t("Add a Meal Plan (optional)", "أضف خطة وجبات (اختياري)")}
                      </p>
                      <div className="flex flex-col gap-2">
                        {MEAL_PLANS.map((plan) => {
                          const isSelected = selectedMealPlan[pkg.skuId] === plan.id;
                          return (
                            <button
                              key={plan.id}
                              onClick={() =>
                                setSelectedMealPlan((prev) => ({
                                  ...prev,
                                  [pkg.skuId]: isSelected ? null : plan.id,
                                }))
                              }
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                                justifyContent: "space-between",
                                gap: 8,
                                padding: "10px 12px",
                                background: isSelected
                                  ? pkg.highlight
                                    ? "rgba(107,153,112,0.25)"
                                    : "#EEF5EE"
                                  : pkg.highlight
                                    ? "rgba(255,255,255,0.04)"
                                    : "#F9F6F1",
                                border: isSelected
                                  ? "1px solid #6B9970"
                                  : pkg.highlight
                                    ? "1px solid rgba(168,197,160,0.15)"
                                    : "1px solid #E0D9CE",
                                cursor: "pointer",
                                textAlign: isAr ? "right" : "left",
                                flexDirection: isAr ? "row-reverse" : "row",
                                transition: "all 0.2s",
                              }}
                            >
                              <div
                                style={{
                                  flex: 1,
                                }}
                              >
                                <span
                                  className="block text-xs font-medium"
                                  style={{
                                    fontFamily: fontBody,
                                    color: isSelected
                                      ? "#3D5C42"
                                      : pkg.highlight
                                        ? "#D8E8D4"
                                        : "#1A2B1C",
                                  }}
                                >
                                  {t(plan.labelEn, plan.labelAr)}
                                </span>
                                <span
                                  className="block text-xs mt-0.5"
                                  style={{
                                    fontFamily: fontBody,
                                    color: pkg.highlight ? "#A8C5A0" : "#9B8E7E",
                                  }}
                                >
                                  {t(plan.descEn, plan.descAr)}
                                </span>
                              </div>
                              <span
                                className="text-xs font-medium shrink-0"
                                style={{
                                  fontFamily: fontBody,
                                  color: isSelected
                                    ? "#3D5C42"
                                    : pkg.highlight
                                      ? "#A8C5A0"
                                      : "#6B9970",
                                  marginTop: 1,
                                }}
                              >
                                {t(plan.priceEn, plan.priceAr)}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                      {selectedMealPlan[pkg.skuId] && (
                        <p
                          className="text-xs mt-3"
                          style={{
                            fontFamily: fontBody,
                            color: pkg.highlight ? "#A8C5A0" : "#9B8E7E",
                            fontStyle: "italic",
                          }}
                        >
                          {t(
                            "Meal plan details will be confirmed after booking.",
                            "سيتم تأكيد تفاصيل خطة الوجبات بعد الحجز.",
                          )}
                        </p>
                      )}
                    </div>
                  )}
                  <button
                    onClick={() => handleCheckout(pkg.skuId)}
                    disabled={loadingSkuId === pkg.skuId}
                    className="w-full py-3 text-sm tracking-[0.1em] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      fontFamily: fontBody,
                      background: pkg.highlight ? "#6B9970" : "#1A2B1C",
                      color: "#FAF7F2",
                    }}
                  >
                    {loadingSkuId === pkg.skuId
                      ? t("Preparing checkout…", "جارٍ التحضير…")
                      : t("Reserve Your Place", "احجز مكانك")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 pb-20">
          <div
            className="max-w-2xl mx-auto px-10 py-10 text-center"
            style={{
              background: "#F0EBE3",
              border: "1px solid #D8D0C4",
            }}
          >
            <p
              style={{
                fontFamily: fontHead,
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                color: "#1A2B1C",
                lineHeight: 1.2,
              }}
            >
              {t("Book a Primary Session", "احجز جلسة استشارية أولى")}
            </p>
            <div className="flex items-baseline justify-center gap-2 mt-4 mb-8">
              <span
                style={{
                  fontFamily: fontHead,
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  color: "#1A2B1C",
                  fontWeight: 600,
                  lineHeight: 1,
                }}
              >
                {"QAR "}
                {(SINGLE_SESSION_PRICE / 100).toLocaleString("en-QA")}
              </span>
              <span
                className="text-xs tracking-[0.1em]"
                style={{
                  fontFamily: fontBody,
                  color: "#9B8E7E",
                }}
              >
                {t("/ session", "/ جلسة")}
              </span>
            </div>
            <p
              className="text-sm mt-1 mb-0"
              style={{
                fontFamily: fontBody,
                color: "var(--brand-sage)",
              }}
            >
              ~${SINGLE_SESSION_USD.toLocaleString("en-US")}
              {" USD"}
            </p>
            <button
              onClick={() => handleCheckout(PRIMARY_SESSION_SKU)}
              disabled={loadingSkuId === PRIMARY_SESSION_SKU}
              className="inline-flex items-center justify-center px-10 py-4 transition-all duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                fontFamily: fontBody,
                color: "#FFFFFF",
                background: "#4A7A50",
                border: "none",
                cursor: "pointer",
                textAlign: "center",
              }}
              onMouseEnter={(e) => {
                if (loadingSkuId !== PRIMARY_SESSION_SKU) {
                  e.currentTarget.style.background = "#3A6040";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(74,122,80,0.3)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#4A7A50";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span className="text-xs tracking-[0.2em] uppercase">
                {loadingSkuId === PRIMARY_SESSION_SKU
                  ? t("Preparing checkout…", "جارٍ التحضير…")
                  : t("Book Now", "احجز الآن")}
              </span>
            </button>
          </div>
        </div>
      </section>
      <section
        id="corporate"
        style={{
          background: "#1A2B1C",
          scrollMarginTop: "80px",
        }}
      >
        <div
          className="max-w-7xl mx-auto px-8 pt-20 pb-12"
          style={{
            borderTop: "1px solid rgba(168,197,160,0.2)",
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-10 h-px"
              style={{
                background: "#C9A84C",
              }}
            />
            <p
              className="text-[10px] tracking-[0.35em] uppercase"
              style={{
                fontFamily: fontBody,
                color: "#C9A84C",
              }}
            >
              {t("Section 02", "القسم ٠٢")}
            </p>
          </div>
          <h2
            style={{
              fontFamily: fontHead,
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              color: "#F7F4EE",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: isAr ? 0 : "-0.01em",
            }}
          >
            {t("Corporate Wellness", "العافية المؤسسية")}
          </h2>
          <p
            className="mt-4 max-w-2xl"
            style={{
              fontFamily: fontBody,
              fontSize: "0.95rem",
              color: "#A8C5A0",
              lineHeight: 1.85,
            }}
          >
            {t(
              "Bespoke wellness retreats and programmes designed for teams and organisations. Every engagement is built around your people, your culture, and your goals. A planning deposit secures your dates — the full programme is priced upon consultation.",
              "خلوات وبرامج عافية مخصصة مصممة للفرق والمؤسسات. كل مشاركة تُبنى حول موظفيك وثقافتك وأهدافك. تضمن وديعة التخطيط تواريخك — ويُحدد سعر البرنامج الكامل عند الاستشارة",
            )}
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-8 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corporateTiers.map((tier) => (
              <div
                key={tier.skuId + tier.sizeEn}
                className="relative flex flex-col overflow-hidden"
                style={{
                  background: tier.highlight ? "#243D26" : "rgba(255,255,255,0.04)",
                  border: tier.highlight ? "none" : "1px solid rgba(168,197,160,0.18)",
                  boxShadow: tier.highlight ? "0 8px 40px rgba(0,0,0,0.3)" : "none",
                }}
              >
                {tier.highlight && (
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{
                      background: "#C9A84C",
                    }}
                  />
                )}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-xs tracking-[0.2em] uppercase px-3 py-1"
                      style={{
                        fontFamily: fontBody,
                        background: tier.highlight
                          ? "rgba(201,168,76,0.15)"
                          : "rgba(168,197,160,0.1)",
                        color: tier.highlight ? "#C9A84C" : "#A8C5A0",
                      }}
                    >
                      {t(tier.sizeEn, tier.sizeAr)}
                    </span>
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: fontBody,
                        color: "#7A9E7E",
                      }}
                    >
                      {t(tier.rangeEn, tier.rangeAr)}
                    </span>
                  </div>
                  <p
                    className="text-xs mb-1"
                    style={{
                      fontFamily: fontBody,
                      color: "var(--brand-sage-mid)",
                    }}
                  >
                    {t("Planning deposit from", "وديعة التخطيط من")}
                  </p>
                  <p
                    className="text-3xl font-light mb-0.5"
                    style={{
                      fontFamily: fontHead,
                      color: "var(--brand-cream-mid)",
                    }}
                  >
                    {"QAR "}
                    {(tier.deposit / 100).toLocaleString()}
                  </p>
                  <p
                    className="text-sm mb-1"
                    style={{
                      fontFamily: fontBody,
                      color: "var(--brand-sage-mid)",
                    }}
                  >
                    {toUSD(tier.deposit)}
                    {" USD"}
                  </p>
                  <p
                    className="text-xs mb-6"
                    style={{
                      fontFamily: fontBody,
                      color: "var(--brand-sage-mid)",
                    }}
                  >
                    {t(
                      "Full programme priced upon consultation",
                      "يُحدد سعر البرنامج الكامل عند الاستشارة",
                    )}
                  </p>
                  <p
                    className="text-sm mb-6 flex-1"
                    style={{
                      fontFamily: fontBody,
                      color: "#A8C5A0",
                      lineHeight: 1.85,
                    }}
                  >
                    {t(tier.descEn, tier.descAr)}
                  </p>
                  <ul className="flex flex-col gap-2 mb-8">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span
                          style={{
                            color: "#6B9970",
                            marginTop: 2,
                            flexShrink: 0,
                          }}
                        >
                          —
                        </span>
                        <span
                          className="text-xs"
                          style={{
                            fontFamily: fontBody,
                            color: "#8AB08E",
                            lineHeight: 1.7,
                          }}
                        >
                          {t(f.en, f.ar)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleCheckout(tier.skuId)}
                    disabled={loadingSkuId === tier.skuId}
                    className="w-full py-3 text-xs tracking-[0.15em] uppercase transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      fontFamily: fontBody,
                      background: tier.highlight ? "#C9A84C" : "#4A7A50",
                      color: tier.highlight ? "#1A2B1C" : "#FAF7F2",
                    }}
                    onMouseEnter={(e) => {
                      if (loadingSkuId !== tier.skuId) {
                        e.currentTarget.style.opacity = "0.85";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "1";
                    }}
                  >
                    {loadingSkuId === tier.skuId
                      ? t("Preparing checkout…", "جارٍ التحضير…")
                      : t("Pay Deposit & Reserve", "ادفع الوديعة واحجز")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 pb-20">
          <div className="max-w-2xl mx-auto text-center">
            <p
              className="text-xs leading-relaxed"
              style={{
                fontFamily: fontBody,
                color: "#5A7E5E",
                lineHeight: 1.85,
              }}
            >
              {t(
                "Deposits are applied toward your final programme cost. All corporate enquiries are handled with complete confidentiality. To discuss your organisation's needs before committing, contact us at info@gotawakened.com",
                "تُطبَّق الودائع على تكلفة برنامجك النهائي. تُعالج جميع الاستفسارات المؤسسية بسرية تامة. للتحدث عن احتياجات مؤسستك قبل الالتزام، تواصل معنا على info@gotawakened.com",
              )}
            </p>
          </div>
        </div>
      </section>
      <section
        id="retreats"
        style={{
          background: "#F5F1EA",
          scrollMarginTop: "80px",
        }}
      >
        <div
          className="max-w-7xl mx-auto px-8 pt-20 pb-12"
          style={{
            borderTop: "1px solid #E0D9CE",
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-10 h-px"
              style={{
                background: "#C9A84C",
              }}
            />
            <p
              className="text-[10px] tracking-[0.35em] uppercase"
              style={{
                fontFamily: fontBody,
                color: "#C9A84C",
              }}
            >
              {t("Section 03", "القسم ٠٣")}
            </p>
          </div>
          <h2
            style={{
              fontFamily: fontHead,
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              color: "var(--brand-forest)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: isAr ? 0 : "-0.01em",
            }}
          >
            {t("Wellness Retreats", "خلوات العافية")}
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-8 pb-10">
          <div className="flex flex-col gap-6">
            {retreats.map((retreat) => (
              <div
                key={retreat.skuId}
                id={`retreat-${retreat.number}`}
                className="overflow-hidden"
                style={{
                  scrollMarginTop: "100px",
                  background: retreat.dark ? "#1A2B1C" : "#FFFFFF",
                  border: retreat.dark ? "none" : "1px solid #E0D9CE",
                  boxShadow: retreat.dark
                    ? "0 8px 40px rgba(26,43,28,0.18)"
                    : "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="text-xs tracking-[0.2em]"
                        style={{
                          fontFamily: fontBody,
                          color: "#6B9970",
                        }}
                      >
                        {retreat.number}
                      </span>
                      <span
                        className="text-xs tracking-[0.15em] uppercase px-3 py-1"
                        style={{
                          fontFamily: fontBody,
                          background: retreat.dark ? "rgba(107,153,112,0.2)" : "#F0EBE3",
                          color: retreat.dark ? "#A8C5A0" : "#6B9970",
                        }}
                      >
                        {t(retreat.tagEn, retreat.tagAr)}
                      </span>
                    </div>
                    <h3
                      className="text-2xl md:text-3xl mb-5"
                      style={{
                        fontFamily: fontHead,
                        color: retreat.dark ? "#F7F4EE" : "#1A2B1C",
                      }}
                    >
                      {t(retreat.en, retreat.ar)}
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {retreat.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span
                            style={{
                              color: "#6B9970",
                              marginTop: 2,
                            }}
                          >
                            —
                          </span>
                          <span
                            className="text-xs"
                            style={{
                              fontFamily: fontBody,
                              color: retreat.dark ? "#C8D8C4" : "#3D5C42",
                            }}
                          >
                            {t(f.en, f.ar)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <p
                        className="text-xs mb-1"
                        style={{
                          fontFamily: fontBody,
                          color: retreat.dark ? "#A8C5A0" : "#9B8E7E",
                        }}
                      >
                        {t("Deposit from", "الوديعة من")}
                      </p>
                      <p
                        className="text-3xl font-light mb-0.5"
                        style={{
                          fontFamily: fontHead,
                          color: retreat.dark ? "#F7F4EE" : "#1A2B1C",
                        }}
                      >
                        {"QAR "}
                        {(retreat.price / 100).toLocaleString()}
                      </p>
                      <p
                        className="text-sm mb-1"
                        style={{
                          fontFamily: fontBody,
                          color: retreat.dark ? "#7A9E7E" : "#9B8E7E",
                        }}
                      >
                        {toUSD(retreat.price)}
                        {" USD"}
                      </p>
                      <p
                        className="text-xs leading-relaxed mb-6"
                        style={{
                          fontFamily: fontBody,
                          color: retreat.dark ? "#7A9E7E" : "#9B8E7E",
                        }}
                      >
                        {t(retreat.depositNote, retreat.depositNoteAr)}
                      </p>
                    </div>
                    <button
                      onClick={() => handleCheckout(retreat.skuId)}
                      disabled={loadingSkuId === retreat.skuId}
                      className="w-full py-3 text-sm tracking-[0.1em] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{
                        fontFamily: fontBody,
                        background: retreat.dark ? "#6B9970" : "#1A2B1C",
                        color: "#FAF7F2",
                      }}
                    >
                      {loadingSkuId === retreat.skuId
                        ? t("Preparing checkout…", "جارٍ التحضير…")
                        : t("Reserve Your Spot", "احجز مكانك")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-xl mx-auto mt-10 text-center">
            <p
              className="text-xs leading-relaxed"
              style={{
                fontFamily: fontBody,
                color: "#9B8E7E",
              }}
            >
              {t(
                "All retreat reservations are handled with complete confidentiality. Deposits are applied toward your final programme cost",
                "تُعالج جميع حجوزات الخلوات بسرية تامة. تُطبَّق الودائع على تكلفة برنامجك النهائي.",
              )}
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 pb-20 mt-8">
          <div
            className="max-w-3xl"
            style={{
              borderTop: "1px solid #D6CFC4",
              paddingTop: "2.5rem",
            }}
          >
            <div
              className="w-8 h-px mb-6"
              style={{
                background: "#6B9970",
              }}
            />
            <p
              className="text-xs tracking-[0.3em] uppercase mb-3"
              style={{
                fontFamily: fontBody,
                color: "#6B9970",
              }}
            >
              {t("Cancellation & Refund Policy", "سياسة الإلغاء والاسترداد")}
            </p>
            <h3
              className="mb-6"
              style={{
                fontFamily: fontHead,
                fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                color: "#1A2B1C",
                fontWeight: 400,
                fontStyle: lang === "ar" ? "normal" : "italic",
              }}
            >
              {t("Retreat Refund Policy", "سياسة استرداد الخلوات")}
            </h3>
            <div className="flex flex-col gap-4">
              <div
                className="p-6"
                style={{
                  background: "#FAF7F2",
                  borderLeft: "2px solid #6B9970",
                }}
              >
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-3"
                  style={{
                    fontFamily: fontBody,
                    color: "#6B9970",
                  }}
                >
                  {t("Group Retreats", "الخلوات الجماعية")}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: fontBody,
                    color: "#2E4A32",
                    lineHeight: 1.85,
                  }}
                >
                  {t(
                    "A full 100% refund will be issued for group retreat bookings cancelled no less than 40 days prior to the retreat start date. Cancellations received after this period are non-refundable",
                    "يحق للمشاركين في الخلوات الجماعية الحصول على استرداد كامل بنسبة 100% في حال الإلغاء قبل 40 يوماً على الأقل من تاريخ بدء الخلوة. لا يحق الاسترداد في حالات الإلغاء بعد هذه المدة",
                  )}
                </p>
              </div>
              <div
                className="p-6"
                style={{
                  background: "#FAF7F2",
                  borderLeft: "2px solid #A8C5A0",
                }}
              >
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-3"
                  style={{
                    fontFamily: fontBody,
                    color: "#6B9970",
                  }}
                >
                  {t("Private & Corporate Retreats", "الخلوات الخاصة والمؤسسية")}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: fontBody,
                    color: "#2E4A32",
                    lineHeight: 1.85,
                  }}
                >
                  {t(
                    "Due to the bespoke nature of private and corporate retreats — which involve significant advance planning, venue reservations, practitioner coordination, and logistical arrangements — refunds are assessed on a case-by-case basis",
                    "نظراً للطابع المخصص للخلوات الخاصة والمؤسسية — التي تتضمن تخطيطاً مسبقاً مكثفاً وحجوزات أماكن وتنسيقاً مع الممارسين — يُقيَّم الاسترداد في كل حالة على حدة",
                  )}
                </p>
              </div>
              <div
                className="p-4"
                style={{
                  border: "1px solid #D6CFC4",
                }}
              >
                <p
                  className="text-xs leading-relaxed"
                  style={{
                    fontFamily: fontBody,
                    color: "#6B7E6C",
                    lineHeight: 1.8,
                  }}
                >
                  {t(
                    "All cancellation requests must be submitted in writing to info@gotawakened.com. Awakened reserves the right to apply this policy at its discretion",
                    "يجب تقديم جميع طلبات الإلغاء كتابياً إلى info@gotawakened.com. تحتفظ أوايكند بالحق في تطبيق هذه السياسة وفق تقديرها",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="events"
        style={{
          background: "#EDE8DF",
          scrollMarginTop: "80px",
        }}
      >
        <div
          className="max-w-7xl mx-auto px-8 pt-20 pb-12"
          style={{
            borderTop: "1px solid #D6CFC4",
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-10 h-px"
              style={{
                background: "#A8C5A0",
              }}
            />
            <p
              className="text-[10px] tracking-[0.35em] uppercase"
              style={{
                fontFamily: fontBody,
                color: "#A8C5A0",
              }}
            >
              {t("Section 04", "القسم ٠٤")}
            </p>
          </div>
          <h2
            style={{
              fontFamily: fontHead,
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              color: "#1A2B1C",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: isAr ? 0 : "-0.01em",
            }}
          >
            {t("Events & Experiences", "الفعاليات والتجارب")}
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((ev) => (
              <div
                key={ev.skuId}
                className="flex flex-col overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E0D9CE",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs tracking-[0.15em] uppercase px-3 py-1"
                      style={{
                        fontFamily: fontBody,
                        background: "rgba(168,197,160,0.18)",
                        color: "#4A7A50",
                      }}
                    >
                      {t(ev.typeEn, ev.typeAr)}
                    </span>
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: fontBody,
                        color: "#9B8E7E",
                      }}
                    >
                      {t(ev.date, ev.dateAr)}
                    </span>
                  </div>
                  <h3
                    className="text-xl mb-4"
                    style={{
                      fontFamily: fontHead,
                      color: "#1A2B1C",
                      fontStyle: lang === "ar" ? "normal" : "italic",
                    }}
                  >
                    {t(ev.en, ev.ar)}
                  </h3>
                  <div className="flex items-center gap-2 mb-6">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#6B9970"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: fontBody,
                        color: "#6B9970",
                      }}
                    >
                      {t(ev.location, ev.locationAr)}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span
                      className="text-2xl font-light"
                      style={{
                        fontFamily: fontHead,
                        color: "#1A2B1C",
                      }}
                    >
                      {"QAR "}
                      {(ev.price / 100).toLocaleString()}
                    </span>
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: fontBody,
                        color: "#9B8E7E",
                      }}
                    >
                      {t("per person", "للشخص")}
                    </span>
                  </div>
                  <p
                    className="text-xs mb-5"
                    style={{
                      fontFamily: fontBody,
                      color: "var(--brand-sage-mid)",
                    }}
                  >
                    {toUSD(ev.price)}
                    {" USD"}
                  </p>
                  <button
                    onClick={() => handleCheckout(ev.skuId)}
                    disabled={loadingSkuId === ev.skuId}
                    className="w-full py-3 text-xs tracking-[0.15em] uppercase transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      fontFamily: fontBody,
                      background: "#1A2B1C",
                      color: "#FAF7F2",
                    }}
                    onMouseEnter={(e) => {
                      if (loadingSkuId !== ev.skuId) e.currentTarget.style.background = "#2E4A32";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#1A2B1C";
                    }}
                  >
                    {loadingSkuId === ev.skuId
                      ? t("Preparing checkout…", "جارٍ التحضير…")
                      : t("Reserve Your Spot", "احجز مكانك")}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p
              className="text-xs mb-4"
              style={{
                fontFamily: fontBody,
                color: "#9B8E7E",
              }}
            >
              {t(
                "More events announced throughout the year",
                "المزيد من الفعاليات تُعلن على مدار العام",
              )}
            </p>
            <Link
              to="/events#top"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs tracking-[0.18em] uppercase transition-all duration-300"
              style={{
                fontFamily: fontBody,
                border: "1px solid #4A7A50",
                color: "#4A7A50",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#4A7A50";
                e.currentTarget.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#4A7A50";
              }}
            >
              {t("View Full Events Page →", "عرض صفحة الفعاليات الكاملة →")}
            </Link>
          </div>
        </div>
      </section>
      <section
        id="membership"
        style={{
          background: "var(--brand-forest)",
          scrollMarginTop: "80px",
        }}
      >
        <div
          className="max-w-7xl mx-auto px-8 pt-20 pb-12"
          style={{
            borderTop: "1px solid var(--brand-border-mid)",
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-10 h-px"
              style={{
                background: "var(--brand-gold)",
              }}
            />
            <p
              className="text-[10px] tracking-[0.35em] uppercase"
              style={{
                fontFamily: fontBody,
                color: "var(--brand-gold)",
              }}
            >
              {t(book.membership.eyebrow.en, book.membership.eyebrow.ar)}
            </p>
          </div>
          <h2
            style={{
              fontFamily: fontHead,
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              color: "var(--brand-cream)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: isAr ? 0 : "-0.01em",
              marginBottom: 16,
            }}
          >
            {t(book.membership.heading.en, book.membership.heading.ar)}
          </h2>
          <p
            style={{
              fontFamily: fontBody,
              fontSize: isAr ? "1rem" : "0.95rem",
              color: "var(--brand-sage-pale)",
              lineHeight: isAr ? 2 : 1.75,
              maxWidth: 640,
            }}
          >
            {t(book.membership.body.en, book.membership.body.ar)}
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {book.membership.tiers.map((tier, ti) => {
              const badge = tier.badge;
              const priceLabel = tier.priceLabel;
              return (
                <div
                  key={tier.id}
                  className="flex flex-col"
                  style={{
                    border: tier.highlight
                      ? "1px solid var(--brand-gold)"
                      : "1px solid var(--brand-border-mid)",
                    background: tier.highlight
                      ? "var(--brand-gold-bg)"
                      : "var(--brand-overlay-card)",
                    padding: "40px 32px",
                    position: "relative",
                  }}
                >
                  {badge && (
                    <div
                      style={{
                        position: "absolute",
                        top: -1,
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "var(--brand-gold)",
                        padding: "4px 20px",
                        fontFamily: fontBody,
                        fontSize: isAr ? "0.72rem" : "0.58rem",
                        letterSpacing: isAr ? 0 : "0.2em",
                        textTransform: isAr ? "none" : "uppercase",
                        color: "var(--brand-forest)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {t(badge.en, badge.ar)}
                    </div>
                  )}
                  <p
                    style={{
                      fontFamily: fontBody,
                      fontSize: isAr ? "0.78rem" : "0.62rem",
                      letterSpacing: isAr ? 0 : "0.22em",
                      textTransform: isAr ? "none" : "uppercase",
                      color: tier.highlight ? "var(--brand-gold)" : "var(--brand-sage-light)",
                      marginBottom: 12,
                    }}
                  >
                    {t(tier.tier.en, tier.tier.ar)}
                  </p>
                  <p
                    style={{
                      fontFamily: fontHead,
                      fontSize: isAr ? "clamp(1.4rem,2.5vw,1.8rem)" : "clamp(1.5rem,2.5vw,2rem)",
                      fontWeight: 400,
                      color: "var(--brand-cream)",
                      lineHeight: 1.2,
                      marginBottom: 8,
                    }}
                  >
                    {t(tier.name.en, tier.name.ar)}
                  </p>
                  <p
                    style={{
                      fontFamily: fontBody,
                      fontSize: isAr ? "0.9rem" : "0.82rem",
                      color: "var(--brand-sage-pale)",
                      lineHeight: isAr ? 2 : 1.7,
                      marginBottom: 28,
                      flexGrow: 1,
                    }}
                  >
                    {t(tier.desc.en, tier.desc.ar)}
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "0 0 28px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {tier.features.map((feat, fi) => (
                      <li
                        key={fi}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          direction: isAr ? "rtl" : "ltr",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--brand-gold)",
                            marginTop: 2,
                            flexShrink: 0,
                          }}
                        >
                          ◦
                        </span>
                        <span
                          style={{
                            fontFamily: fontBody,
                            fontSize: isAr ? "0.88rem" : "0.8rem",
                            color: "var(--brand-sage-pale)",
                            lineHeight: isAr ? 1.9 : 1.6,
                          }}
                        >
                          {t(feat.en, feat.ar)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {priceLabel && (
                    <p
                      style={{
                        fontFamily: fontBody,
                        fontSize: isAr ? "0.75rem" : "0.62rem",
                        letterSpacing: isAr ? 0 : "0.18em",
                        textTransform: isAr ? "none" : "uppercase",
                        color: "var(--brand-sage-mid)",
                        marginBottom: 6,
                      }}
                    >
                      {t(priceLabel.en, priceLabel.ar)}
                    </p>
                  )}
                  <p
                    style={{
                      whiteSpace: "pre-line",
                      fontFamily: fontHead,
                      fontSize: "clamp(1.6rem,2.5vw,2.2rem)",
                      fontWeight: 400,
                      color: tier.highlight ? "var(--brand-gold)" : "var(--brand-cream)",
                      marginBottom: 4,
                    }}
                  >
                    {tier.priceQAR}
                  </p>
                  <p
                    style={{
                      whiteSpace: "pre-line",
                      fontFamily: fontBody,
                      fontSize: "0.85rem",
                      color: "var(--brand-sage-mid)",
                      marginBottom: 24,
                    }}
                  >
                    {tier.priceUSD}
                  </p>
                  <a
                    href="/community#membership"
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "13px 24px",
                      background: tier.highlight ? "var(--brand-gold)" : "transparent",
                      border: tier.highlight ? "none" : "1px solid var(--brand-gold)",
                      fontFamily: fontBody,
                      fontSize: isAr ? "0.88rem" : "0.68rem",
                      letterSpacing: isAr ? 0 : "0.18em",
                      textTransform: isAr ? "none" : "uppercase",
                      color: tier.highlight ? "var(--brand-forest)" : "var(--brand-gold)",
                      textDecoration: "none",
                      transition: tier.highlight ? "opacity 0.3s" : "background 0.3s, color 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      if (tier.highlight) {
                        e.currentTarget.style.opacity = "0.88";
                      } else {
                        e.currentTarget.style.background = "var(--brand-gold)";
                        e.currentTarget.style.color = "var(--brand-forest)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (tier.highlight) {
                        e.currentTarget.style.opacity = "1";
                      } else {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--brand-gold)";
                      }
                    }}
                  >
                    {t(tier.cta.en, tier.cta.ar)}
                  </a>
                </div>
              );
            })}
          </div>
          <p
            className="text-center mt-10 text-xs"
            style={{
              fontFamily: fontBody,
              color: "var(--brand-sage-mid)",
            }}
          >
            {t(book.membership.footnote.en, book.membership.footnote.ar)}
          </p>
        </div>
      </section>
      {error && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3"
          style={{
            background: "#C0392B",
            color: "#FFFFFF",
            fontFamily: fontBody,
            fontSize: "0.85rem",
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
}
