import { AnimatePresence, motion, useInView } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { Link } from "react-router";
import { Seo } from "../components/Seo";
import { useLanguage } from "../i18n/LanguageContext";

function Reveal({ children, delay = 0, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-50px",
  });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: 22,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: 22,
            }
      }
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

function SageLine({ className }) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-60px",
  });
  const { lang } = useLanguage();
  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="h-px bg-[#6B9970]"
        initial={{
          scaleX: 0,
        }}
        animate={
          inView
            ? {
                scaleX: 1,
              }
            : {
                scaleX: 0,
              }
        }
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        style={{
          transformOrigin: lang === "ar" ? "right" : "left",
        }}
      />
    </div>
  );
}

function BiLabel({ en, ar }) {
  const { t, lang } = useLanguage();
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <p
        className="text-xs tracking-[0.3em] uppercase"
        style={{
          fontFamily: lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)",
          color: "#4A7A50",
          letterSpacing: lang === "ar" ? 0 : void 0,
        }}
      >
        {t(en, ar)}
      </p>
    </div>
  );
}

function BiBlock({
  en,
  ar,
  size = "0.95rem",
  enColor = "#2E4A32",
  arColor = "#4A6B4E",
  lineHeight = 1.85,
  className = "",
}) {
  const { t, lang } = useLanguage();
  const color = lang === "ar" ? arColor : enColor;
  return (
    <div className={`flex flex-col items-center gap-2 text-center ${className}`}>
      <p
        style={{
          fontFamily: lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)",
          fontSize: size,
          color,
          lineHeight,
          fontWeight: lang === "ar" ? 500 : 400,
        }}
      >
        {t(en, ar)}
      </p>
    </div>
  );
}

function BiFeature({ en, ar }) {
  const { t, lang } = useLanguage();
  return (
    <div
      className="flex flex-col items-center gap-0.5 py-2"
      style={{
        borderTop: "1px solid #D6E0D8",
      }}
    >
      <p
        style={{
          fontFamily: lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)",
          fontSize: "0.88rem",
          color: "#2E4A32",
          lineHeight: 1.75,
          fontWeight: lang === "ar" ? 500 : 400,
        }}
      >
        {t(en, ar)}
      </p>
    </div>
  );
}

const retreatTypes = [
  {
    number: "01",
    en: "Private Wellness Retreats",
    ar: "خلوات العافية الخاصة",
    descEn:
      "Exclusively curated for individuals or couples seeking deep rest, renewal, and transformation. Held at the finest luxury resorts in Qatar and select international destinations — each retreat is designed entirely around you, your intentions, and your pace. Every retreat we design is unique. Because every person is.",
    descAr:
      "مصممة حصرياً للأفراد أو الأزواج الباحثين عن الراحة العميقة والتجديد والتحول. تُعقد في أرقى المنتجعات الفاخرة داخل قطر ووجهات دولية مختارة — كل خلوة مصممة بالكامل حولك وحول نواياك وإيقاعك. كل خلوة نصممها فريدة من نوعها. لأن كل شخص فريد",
    features: [
      {
        en: "Luxury resort partnerships in Qatar and internationally",
        ar: "شراكات مع منتجعات فاخرة في قطر وخارجها",
      },
      {
        en: "Fully bespoke itinerary — no two retreats are the same",
        ar: "برنامج مخصص بالكامل — لا خلوتان متشابهتان",
      },
      {
        en: "Integration of holistic therapies and personal consultancy sessions",
        ar: "دمج العلاجات الشاملة وجلسات الاستشارة الشخصية",
      },
      {
        en: "Absolute privacy and discretion throughout",
        ar: "خصوصية مطلقة وتقدير تام طوال الرحلة",
      },
    ],
  },
  {
    number: "02",
    en: "Group Wellness Retreats",
    ar: "خلوات العافية الجماعية",
    descEn:
      "Open to individuals from all walks of life — the only shared requirement is a genuine desire for wellness. Our group retreats bring together people of different backgrounds, cultures, and stories in a curated, supportive environment. Strangers arrive; a community leaves.",
    descAr:
      "مفتوحة للأفراد من جميع مناحي الحياة — الشرط الوحيد المشترك هو الرغبة الحقيقية في العافية. تجمع خلواتنا الجماعية أشخاصاً من خلفيات وثقافات وقصص مختلفة في بيئة مختارة وداعمة. يصلون غرباء ويغادرون مجتمعاً",
    features: [
      {
        en: "Open to all — no prior wellness experience required",
        ar: "مفتوحة للجميع — لا تجربة سابقة في العافية مطلوبة",
      },
      {
        en: "Diverse participants united by a shared intention to grow",
        ar: "مشاركون متنوعون يجمعهم نية مشتركة للنمو",
      },
      {
        en: "Carefully facilitated to honour each person's pace and boundaries",
        ar: "ميسّرة بعناية لاحترام إيقاع كل شخص وحدوده",
      },
      {
        en: "Held at luxury venues — intimate group sizes, never crowded",
        ar: "تُعقد في أماكن فاخرة — أحجام مجموعات حميمة، لا ازدحام أبداً",
      },
    ],
  },
  {
    number: "03",
    en: "Corporate Retreats",
    ar: "الخلوات المؤسسية",
    descEn:
      "A powerful extension of corporate wellness — taking teams out of the office and into an environment designed for genuine reset. Corporate retreats are curated at luxury venues in Qatar and internationally, combining structured wellbeing programming with space for reflection, connection, and renewal.",
    descAr:
      "امتداد قوي لبرامج العافية المؤسسية — يأخذ الفرق خارج المكتب إلى بيئة مصممة لإعادة الضبط الحقيقية. تُنظَّم الخلوات المؤسسية في أماكن فاخرة داخل قطر وخارجها، تجمع بين برامج عافية منظمة ومساحة للتأمل والتواصل والتجديد",
    features: [
      {
        en: "Curated at luxury resorts in Qatar and internationally",
        ar: "مختارة في منتجعات فاخرة داخل قطر وخارجها",
      },
      {
        en: "Structured wellbeing sessions alongside team connection experiences",
        ar: "جلسات عافية منظمة إلى جانب تجارب تواصل الفريق",
      },
      {
        en: "Leadership resilience, energy management and collective renewal",
        ar: "مرونة القيادة وإدارة الطاقة والتجديد الجماعي",
      },
      {
        en: "Full confidentiality and end-to-end planning handled by Awakened",
        ar: "سرية تامة وتخطيط شامل من البداية إلى النهاية تتولاه أوايكند",
      },
    ],
  },
];

function RetreatEnquiryModal({ retreat, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { t, lang } = useLanguage();
  const fontBody = lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = lang === "ar" ? "var(--font-arabic)" : "var(--font-heading)";
  const set = (k) => (e) =>
    setForm((f) => ({
      ...f,
      [k]: e.target.value,
    }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  };
  const inputStyle = {
    fontFamily: fontBody,
    background: "#FDFAF5",
    color: "#1A2B1C",
    border: "1px solid #C0B8A8",
    outline: "none",
    fontSize: "0.88rem",
    lineHeight: 1.6,
    width: "100%",
    padding: "0.75rem 0.9rem",
    borderRadius: 0,
    direction: lang === "ar" ? "rtl" : "ltr",
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: "rgba(26,43,28,0.6)",
        backdropFilter: "blur(6px)",
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 20,
          scale: 0.97,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        className="relative w-full max-w-lg overflow-y-auto"
        style={{
          background: "#FAF7F2",
          maxHeight: "90vh",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="px-8 pt-8 pb-6"
          style={{
            borderBottom: "1px solid #E0D9CE",
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p
                className="text-xs tracking-[0.25em] uppercase mb-1"
                style={{
                  fontFamily: fontBody,
                  color: "#6B9970",
                }}
              >
                {t("Retreat Enquiry", "استفسار خلوة")}
              </p>
              <h3
                style={{
                  fontFamily: fontHead,
                  fontSize: "1.4rem",
                  color: "#1A2B1C",
                  fontStyle: lang === "ar" ? "normal" : "italic",
                }}
              >
                {t(retreat.en, retreat.ar)}
              </h3>
            </div>
            <button
              onClick={onClose}
              style={{
                color: "#9B8E7E",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "1.5rem",
                lineHeight: 1,
                marginTop: 2,
              }}
            >
              ×
            </button>
          </div>
        </div>
        <div className="px-8 py-7">
          {submitted ? (
            <div className="py-6 text-center">
              <div
                className="w-10 h-px mx-auto mb-6"
                style={{
                  background: "#6B9970",
                }}
              />
              <p
                style={{
                  fontFamily: fontHead,
                  fontSize: "1.5rem",
                  color: "#1A2B1C",
                  fontStyle: lang === "ar" ? "normal" : "italic",
                }}
              >
                {t("Thank you", "شكراً لك")}
              </p>
              <p
                className="mt-4 text-sm leading-relaxed"
                style={{
                  fontFamily: fontBody,
                  color: "#2E4A32",
                }}
              >
                {t(
                  "Your retreat enquiry has been received. We will be in touch personally within 24 hours",
                  "تم استلام استفسارك. سنتواصل معك شخصياً خلال 24 ساعة.",
                )}
              </p>
              <div
                className="w-10 h-px mx-auto mt-6"
                style={{
                  background: "#6B9970",
                }}
              />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label
                    className="text-xs tracking-[0.15em] uppercase"
                    style={{
                      fontFamily: fontBody,
                      color: "#2E4A32",
                      letterSpacing: lang === "ar" ? 0 : void 0,
                    }}
                  >
                    {t("Full Name", "الاسم الكامل")}{" "}
                    <span
                      style={{
                        color: "#6B9970",
                      }}
                    >
                      *
                    </span>
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={set("name")}
                    placeholder={t("Your name", "اسمك")}
                    style={inputStyle}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className="text-xs tracking-[0.15em] uppercase"
                    style={{
                      fontFamily: fontBody,
                      color: "#2E4A32",
                      letterSpacing: lang === "ar" ? 0 : void 0,
                    }}
                  >
                    {t("Email", "البريد الإلكتروني")}{" "}
                    <span
                      style={{
                        color: "#6B9970",
                      }}
                    >
                      *
                    </span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={set("email")}
                    placeholder="your@email.com"
                    style={inputStyle}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label
                    className="text-xs tracking-[0.15em] uppercase"
                    style={{
                      fontFamily: fontBody,
                      color: "#2E4A32",
                      letterSpacing: lang === "ar" ? 0 : void 0,
                    }}
                  >
                    {t("Phone / WhatsApp", "الهاتف / واتساب")}
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="+974 ···"
                    style={inputStyle}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className="text-xs tracking-[0.15em] uppercase"
                    style={{
                      fontFamily: fontBody,
                      color: "#2E4A32",
                      letterSpacing: lang === "ar" ? 0 : void 0,
                    }}
                  >
                    {t("Preferred Dates", "التواريخ المفضلة")}
                  </label>
                  <input
                    value={form.dates}
                    onChange={set("dates")}
                    placeholder={t("e.g. June 2026", "مثال: يونيو 2026")}
                    style={inputStyle}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="text-xs tracking-[0.15em] uppercase"
                  style={{
                    fontFamily: fontBody,
                    color: "#2E4A32",
                    letterSpacing: lang === "ar" ? 0 : void 0,
                  }}
                >
                  {t("Tell us about your intentions", "أخبرنا عن نواياك")}
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={set("message")}
                  placeholder={t(
                    "What are you hoping to experience or achieve through this retreat?",
                    "ما الذي تأمل في تجربته أو تحقيقه من خلال هذه الخلوة؟",
                  )}
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                  }}
                />
              </div>
              <div
                className="p-3"
                style={{
                  background: "#EDE8DF",
                  borderLeft: "2px solid #6B9970",
                }}
              >
                <p
                  className="text-xs leading-relaxed"
                  style={{
                    fontFamily: fontBody,
                    color: "#2E4A32",
                  }}
                >
                  {t(
                    "All enquiries are handled with complete confidentiality",
                    "تُعالج جميع الاستفسارات بسرية تامة",
                  )}
                </p>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 text-xs tracking-[0.2em] uppercase transition-all duration-500"
                style={{
                  fontFamily: fontBody,
                  background: submitting ? "#8AAE8E" : "#4A7A50",
                  color: "#FFFFFF",
                  border: "none",
                  cursor: submitting ? "not-allowed" : "pointer",
                }}
              >
                {submitting ? t("Sending…", "جارٍ الإرسال…") : t("Send Enquiry", "إرسال الاستفسار")}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export function RetreatsPage() {
  const [enquiryRetreat, setEnquiryRetreat] = useState(null);
  const openEnquiry = useCallback((r) => setEnquiryRetreat(r), []);
  const closeEnquiry = useCallback(() => setEnquiryRetreat(null), []);
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";
  const fontBody = lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = lang === "ar" ? "var(--font-arabic)" : "var(--font-heading)";
  return (
    <div
      style={{
        direction: lang === "ar" ? "rtl" : "ltr",
      }}
    >
      <Seo
        path="/retreats"
        title={t(
          "Wellness Retreats — Awakened | Worldwide",
          "خلوات العافية — أوايكند | حول العالم",
        )}
        description={t(
          "Awakened curates private luxury wellness retreats and group experiences at the finest resorts worldwide — founded in Qatar, available globally",
          "تختار أوايكند خلوات عافية فاخرة خاصة وتجارب جماعية في أرقى المنتجعات حول العالم — تأسست في قطر ومتاحة عالمياً.",
        )}
      />
      <section
        id="top"
        className="relative pt-44 pb-24 overflow-hidden"
        style={{
          background: "#F5F1EA",
          scrollMarginTop: "80px",
        }}
      >
        <motion.div
          className="absolute rounded-full pointer-events-none w-[700px] h-[700px] -top-40 -right-40 opacity-[0.16]"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, #A8C5A0 0%, #6B9970 50%, transparent 70%)",
            filter: "blur(90px)",
          }}
          animate={{
            y: [0, -24, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <Reveal>
            <BiLabel en="Wellness Retreats" ar="خلوات العافية" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center text-center gap-3 mt-5 mb-8">
              <h1
                style={{
                  fontFamily: fontHead,
                  fontSize: "clamp(3rem, 6vw, 5.5rem)",
                  color: "#1A2B1C",
                  fontWeight: 600,
                  letterSpacing: isAr ? 0 : "-0.01em",
                  lineHeight: 1.05,
                }}
              >
                {t(
                  <>
                    {`Spaces designed for`}
                    <br />
                    <span
                      style={{
                        color: "#4A7A50",
                        fontStyle: "italic",
                      }}
                    >
                      deep renewal.
                    </span>
                  </>,
                  <span>مساحات مصممة للتجديد العميق.</span>,
                )}
              </h1>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="flex flex-col items-center text-center mb-6">
              <p
                style={{
                  fontFamily: isAr ? "var(--font-arabic)" : "var(--font-heading)",
                  fontSize: isAr ? "1.15rem" : "clamp(1.05rem, 2vw, 1.35rem)",
                  fontStyle: isAr ? "normal" : "italic",
                  fontWeight: isAr ? 500 : 400,
                  color: "var(--brand-forest-mid)",
                  letterSpacing: isAr ? 0 : "0.01em",
                  lineHeight: isAr ? 2 : 1.6,
                }}
              >
                {t(
                  "Go Away. Go Deeper. Return With Intention.",
                  "ابتعد. اغُص في أعماقك. عُد بنية.",
                )}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.26}>
            <BiBlock
              en="Private luxury retreats and curated group experiences — held at the finest resorts worldwide. Every detail is considered. Every experience is personal."
              ar="خلوات فاخرة خاصة وتجارب جماعية مختارة — تُعقد في أرقى المنتجعات داخل قطر وخارجها. كل تفصيل مدروس. كل تجربة شخصية."
              size="1rem"
              enColor="#2E4A32"
              arColor="#4A6B4E"
              lineHeight={1.85}
              className="mb-12"
            />
          </Reveal>
        </div>
      </section>
      <section
        id="retreat-details"
        className="relative py-20"
        style={{
          background: "#F5F1EA",
          scrollMarginTop: "80px",
        }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <Reveal>
            <BiLabel en="Retreat Experiences" ar="تجارب الخلوات" />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-col items-center gap-1 mt-4 mb-4 text-center">
              <h2
                style={{
                  fontFamily: fontHead,
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  color: "#1A2B1C",
                  fontWeight: 600,
                  lineHeight: 1.1,
                }}
              >
                {t("Choose your retreat", "اختر خلوتك")}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="max-w-2xl mx-auto mb-14">
              <BiBlock
                en="Each format is designed for a different intention — from deeply private individual experiences to curated group journeys and bespoke corporate programmes."
                ar="كل شكل مصمم لنية مختلفة — من التجارب الفردية الخاصة جداً إلى الرحلات الجماعية المختارة والبرامج المؤسسية المخصصة."
                size="0.92rem"
                enColor="#2E4A32"
                arColor="#4A6B4E"
                lineHeight={1.85}
              />
            </div>
          </Reveal>
          {retreatTypes.map((r, i) => (
            <Reveal key={r.number} delay={i * 0.05}>
              <div>
                <SageLine />
                <div className="py-14 flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
                  <div className="flex flex-col items-center gap-2">
                    <span
                      className="text-xs tracking-[0.2em]"
                      style={{
                        fontFamily: fontBody,
                        color: "#A8C5A0",
                      }}
                    >
                      {r.number}
                    </span>
                    <h2
                      style={{
                        fontFamily: fontHead,
                        fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                        color: "#1A2B1C",
                        fontWeight: 600,
                        lineHeight: 1.2,
                      }}
                    >
                      {t(r.en, r.ar)}
                    </h2>
                  </div>
                  <div className="w-full flex flex-col gap-5">
                    <BiBlock
                      en={r.descEn}
                      ar={r.descAr}
                      size="0.95rem"
                      enColor="#2E4A32"
                      arColor="#4A6B4E"
                      lineHeight={1.85}
                    />
                    <div className="flex flex-col gap-3 mt-1">
                      {r.features.map((f, fi) => (
                        <BiFeature key={fi} en={f.en} ar={f.ar} />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                    <button
                      onClick={() => openEnquiry(r)}
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 transition-all duration-300"
                      style={{
                        fontFamily: fontBody,
                        background: "transparent",
                        color: "#2E4A32",
                        border: "1px solid #6B9970",
                        cursor: "pointer",
                        borderRadius: 0,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#EDE8DF";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <span className="text-xs tracking-[0.15em] uppercase">
                        {t("Enquire", "استفسر")}
                      </span>
                    </button>
                    <Link
                      to={`/book#retreat-${r.number}`}
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 transition-all duration-300 text-center"
                      style={{
                        fontFamily: fontBody,
                        background: "#4A7A50",
                        color: "#FFFFFF",
                        borderRadius: 0,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#3A6040";
                        e.currentTarget.style.boxShadow = "0 8px 30px rgba(74,122,80,0.25)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#4A7A50";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <span className="text-xs tracking-[0.15em] uppercase">
                        {t("Reserve Your Spot", "احجز مكانك")}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <SageLine />
        </div>
      </section>
      <section
        className="relative py-20 overflow-hidden"
        style={{
          background: "#1A2B1C",
        }}
      >
        <motion.div
          className="absolute rounded-full pointer-events-none w-[500px] h-[500px] -bottom-32 -left-32 opacity-[0.12]"
          style={{
            background: "radial-gradient(circle, #6B9970 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-8 flex flex-col items-center text-center">
          <Reveal>
            <div className="flex flex-col items-center gap-1 mb-6">
              <p
                className="text-xs tracking-[0.3em] uppercase"
                style={{
                  fontFamily: fontBody,
                  color: "#A8C5A0",
                }}
              >
                {t("Destinations", "الوجهات")}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center gap-2 mb-8">
              <h2
                style={{
                  fontFamily: fontHead,
                  fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                  color: "#F5F1EA",
                  fontWeight: 600,
                  lineHeight: 1.15,
                }}
              >
                {t(
                  <>
                    {`The world's finest`}
                    <br />
                    <span
                      style={{
                        color: "#A8C5A0",
                        fontStyle: lang === "ar" ? "normal" : "italic",
                      }}
                    >
                      wellness destinations.
                    </span>
                  </>,
                  <span>أرقى وجهات العافية في العالم.</span>,
                )}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <BiBlock
              en="We partner exclusively with luxury resorts and properties that meet our exacting standards — in Qatar and across the world's most sought-after destinations."
              ar="نتعاون حصرياً مع المنتجعات والعقارات الفاخرة التي تلبي معاييرنا الصارمة — في قطر وعبر أكثر الوجهات المرغوبة في العالم."
              size="0.95rem"
              enColor="#C8D8C8"
              arColor="#A8C5A0"
              lineHeight={1.85}
              className="mb-12"
            />
          </Reveal>
          <div className="w-full flex flex-col gap-4">
            {[
              {
                region: "Qatar",
                regionAr: "قطر",
                desc: "Exclusive partnerships with Qatar's premier luxury resorts and private wellness properties.",
                descAr: "شراكات حصرية مع أفخر المنتجعات الفاخرة والعقارات الصحية الخاصة في قطر",
              },
              {
                region: "Middle East & North Africa",
                regionAr: "منطقة الشرق الأوسط وشمال أفريقيا",
                desc: "Curated properties across the UAE, Oman, Jordan, Morocco, and the wider region.",
                descAr: "عقارات مختارة في الإمارات وعُمان والأردن والمغرب والمنطقة الأوسع",
              },
              {
                region: "International",
                regionAr: "دولياً",
                desc: "Select destinations across Europe, Asia, and beyond — chosen for their exceptional standard of care.",
                descAr:
                  "وجهات مختارة في أوروبا وآسيا وما وراءها — اختيرت لمعاييرها الاستثنائية في الرعاية",
              },
            ].map((d, i) => (
              <Reveal key={d.region} delay={i * 0.1}>
                <div
                  className="p-6 flex flex-col items-center text-center gap-3"
                  style={{
                    borderTop: "1px solid #2E4A32",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: fontHead,
                      fontSize: "1.3rem",
                      color: "#F5F1EA",
                      fontWeight: 600,
                      fontStyle: lang === "ar" ? "normal" : "italic",
                    }}
                  >
                    {t(d.region, d.regionAr)}
                  </h3>
                  <BiBlock
                    en={d.desc}
                    ar={d.descAr}
                    size="0.88rem"
                    enColor="#C8D8C8"
                    arColor="#A8C5A0"
                    lineHeight={1.8}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section
        className="relative py-16 overflow-hidden"
        style={{
          background: "#EDE8DF",
        }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <Reveal>
            <div
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 p-8"
              style={{
                background: "#F5F1EA",
                borderLeft: "2px solid #6B9970",
              }}
            >
              <div>
                <p
                  className="text-[10px] tracking-[0.3em] uppercase mb-2"
                  style={{
                    fontFamily: fontBody,
                    color: "#6B9970",
                  }}
                >
                  {t("Also from Awakened", "أيضاً من أوايكند")}
                </p>
                <h3
                  style={{
                    fontFamily: fontHead,
                    fontSize: "1.4rem",
                    color: "#1A2B1C",
                    fontWeight: 600,
                    lineHeight: 1.2,
                  }}
                >
                  {t("Upcoming Events & Experiences", "الفعاليات والتجارب القادمة")}
                </h3>
                <p
                  className="mt-1"
                  style={{
                    fontFamily: fontBody,
                    fontSize: "0.88rem",
                    color: "#4A6B4E",
                    lineHeight: 1.75,
                  }}
                >
                  {t(
                    "Workshops, masterclasses, and curated experiences — separate from our retreats programme",
                    "ورش عمل ودروس رئيسية وتجارب مختارة — منفصلة عن برنامج خلواتنا.",
                  )}
                </p>
              </div>
              <Link
                to="/events#top"
                className="whitespace-nowrap inline-flex items-center justify-center px-8 py-3.5 transition-all duration-300 shrink-0"
                style={{
                  fontFamily: fontBody,
                  color: "#FFFFFF",
                  background: "#4A7A50",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#3A6040";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(74,122,80,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#4A7A50";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span className="text-xs tracking-[0.18em] uppercase">
                  {t("View Events →", "عرض الفعاليات →")}
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <section
        className="relative py-28"
        style={{
          background: "#F5F1EA",
        }}
      >
        <div className="max-w-4xl mx-auto px-8">
          <Reveal>
            <div
              className="w-12 h-px mb-10"
              style={{
                background: "#6B9970",
              }}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-2 mb-12">
              <blockquote
                style={{
                  fontFamily: fontHead,
                  fontSize: "clamp(1.6rem, 3vw, 2.6rem)",
                  color: "#1A2B1C",
                  fontWeight: 400,
                  fontStyle: lang === "ar" ? "normal" : "italic",
                  lineHeight: 1.45,
                }}
              >
                {t(
                  '"Every retreat we design is unique. Because every person is."',
                  '"كل خلوة نصممها فريدة من نوعها. لأن كل شخص فريد."',
                )}
              </blockquote>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <BiBlock
              en="Looking for private wellness consultations? Our one-to-one consultancy programmes are available separately."
              ar="هل تبحث عن استشارات عافية خاصة؟ برامج الاستشارات الفردية متاحة بشكل منفصل."
              size="0.92rem"
              enColor="#4A7A50"
              arColor="#6B9970"
              lineHeight={1.75}
              className="mb-10"
            />
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/book#retreats"
                className="inline-flex items-center justify-center text-center px-12 py-4 transition-all duration-500"
                style={{
                  fontFamily: fontBody,
                  color: "#FFFFFF",
                  background: "#4A7A50",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#3A6040";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(74,122,80,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#4A7A50";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span className="text-xs tracking-[0.2em] uppercase">
                  {t("Enquire About a Retreat", "الاستفسار عن خلوة")}
                </span>
              </Link>
              <Link
                to="/services#top"
                className="inline-flex items-center justify-center text-center px-12 py-4 transition-all duration-500"
                style={{
                  fontFamily: fontBody,
                  color: "#4A7A50",
                  background: "transparent",
                  border: "1px solid #A8C5A0",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#4A7A50";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#A8C5A0";
                }}
              >
                <span className="text-xs tracking-[0.2em] uppercase">
                  {t("View All Services", "عرض جميع الخدمات")}
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <AnimatePresence>
        {enquiryRetreat && <RetreatEnquiryModal retreat={enquiryRetreat} onClose={closeEnquiry} />}
      </AnimatePresence>
    </div>
  );
}
