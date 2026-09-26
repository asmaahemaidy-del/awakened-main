import { motion, useInView } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { about, home } from "../content/pages";
import { Seo } from "../components/Seo";
import { LOGO_URL, OG_IMAGE, SITE_URL } from "../lib/site";
import { useLanguage } from "../i18n/LanguageContext";

function AmbientOrb({ className, style, duration = 14, delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={style}
      animate={{
        y: [0, -28, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function SageLine({ className }) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });
  const { lang } = useLanguage();
  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
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
          height: 1,
          background: "var(--brand-sage-mid)",
          transformOrigin: lang === "ar" ? "right" : "left",
        }}
      />
    </div>
  );
}

function Reveal({ children, delay = 0, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-60px",
  });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: 24,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: 24,
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

function RetreatEnquiryModal({ retreatEn, retreatAr, onClose }) {
  const { t, lang } = useLanguage();
  const fontBody = lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = lang === "ar" ? "var(--font-arabic)" : "var(--font-heading)";
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const set = (k) => (v) =>
    setForm((f) => ({
      ...f,
      [k]: v,
    }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  };
  const inputDir = lang === "ar" ? "rtl" : "ltr";
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: "var(--brand-forest-overlay)",
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
          background: "var(--brand-cream)",
          maxHeight: "90vh",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="px-8 pt-8 pb-6"
          style={{
            borderBottom: "1px solid var(--brand-cream-warm)",
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: "0.65rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--brand-sage-mid)",
                  marginBottom: 4,
                }}
              >
                {t("Retreat Enquiry", "استفسار خلوة")}
              </p>
              <h3
                style={{
                  fontFamily: fontHead,
                  fontSize: "1.4rem",
                  color: "var(--brand-forest)",
                  fontStyle: "italic",
                }}
              >
                {t(retreatEn, retreatAr)}
              </h3>
            </div>
            <button
              onClick={onClose}
              style={{
                color: "var(--brand-sage-mid)",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "1.4rem",
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
                  background: "var(--brand-sage-mid)",
                }}
              />
              <p
                style={{
                  fontFamily: fontHead,
                  fontSize: "1.5rem",
                  color: "var(--brand-forest)",
                  fontStyle: "italic",
                  marginBottom: 8,
                }}
              >
                {t("Thank you", "شكرًا لك")}
              </p>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: "0.88rem",
                  color: "var(--brand-sage-mid)",
                  lineHeight: 1.7,
                }}
              >
                {t("We'll be in touch within 48 hours.", "سنتواصل معك خلال 48 ساعة.")}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <input
                required
                placeholder={t("Full name", "الاسم الكامل")}
                value={form.name}
                onChange={(e) => set("name")(e.target.value)}
                style={{
                  fontFamily: fontBody,
                  background: "var(--brand-cream)",
                  color: "var(--brand-forest)",
                  border: "1px solid var(--brand-cream-warm)",
                  outline: "none",
                  fontSize: "0.88rem",
                  lineHeight: 1.6,
                  width: "100%",
                  padding: "0.75rem 0.9rem",
                  borderRadius: 0,
                  direction: inputDir,
                }}
              />
              <input
                required
                type="email"
                placeholder={t("Email address", "البريد الإلكتروني")}
                value={form.email}
                onChange={(e) => set("email")(e.target.value)}
                style={{
                  fontFamily: fontBody,
                  background: "var(--brand-cream)",
                  color: "var(--brand-forest)",
                  border: "1px solid var(--brand-cream-warm)",
                  outline: "none",
                  fontSize: "0.88rem",
                  lineHeight: 1.6,
                  width: "100%",
                  padding: "0.75rem 0.9rem",
                  borderRadius: 0,
                  direction: inputDir,
                }}
              />
              <input
                placeholder={t("Phone / WhatsApp", "الهاتف / واتساب")}
                value={form.phone}
                onChange={(e) => set("phone")(e.target.value)}
                style={{
                  fontFamily: fontBody,
                  background: "var(--brand-cream)",
                  color: "var(--brand-forest)",
                  border: "1px solid var(--brand-cream-warm)",
                  outline: "none",
                  fontSize: "0.88rem",
                  lineHeight: 1.6,
                  width: "100%",
                  padding: "0.75rem 0.9rem",
                  borderRadius: 0,
                  direction: inputDir,
                }}
              />
              <input
                placeholder={t("Preferred dates (if known)", "التواريخ المفضلة (إن عُرفت)")}
                value={form.dates}
                onChange={(e) => set("dates")(e.target.value)}
                style={{
                  fontFamily: fontBody,
                  background: "var(--brand-cream)",
                  color: "var(--brand-forest)",
                  border: "1px solid var(--brand-cream-warm)",
                  outline: "none",
                  fontSize: "0.88rem",
                  lineHeight: 1.6,
                  width: "100%",
                  padding: "0.75rem 0.9rem",
                  borderRadius: 0,
                  direction: inputDir,
                }}
              />
              <textarea
                rows={3}
                placeholder={t("Anything else we should know?", "أي شيء آخر يجب أن نعرفه؟")}
                value={form.message}
                onChange={(e) => set("message")(e.target.value)}
                style={{
                  fontFamily: fontBody,
                  background: "var(--brand-cream)",
                  color: "var(--brand-forest)",
                  border: "1px solid var(--brand-cream-warm)",
                  outline: "none",
                  fontSize: "0.88rem",
                  lineHeight: 1.6,
                  width: "100%",
                  padding: "0.75rem 0.9rem",
                  borderRadius: 0,
                  direction: inputDir,
                  resize: "vertical",
                }}
              />
              <button
                type="submit"
                disabled={submitting}
                style={{
                  fontFamily: fontBody,
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  background: "var(--brand-forest)",
                  color: "var(--brand-gold)",
                  border: "none",
                  padding: "14px 32px",
                  cursor: submitting ? "wait" : "pointer",
                  opacity: submitting ? 0.7 : 1,
                  transition: "opacity 0.3s",
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

const EVENT_SLIDES = [
  {
    en: {
      name: '"The Art of Rest" Masterclass',
      location: "Doha",
      date: "September 2026",
      desc: "A practical masterclass on the science and practice of genuine rest — not just sleep.",
    },
    ar: {
      name: 'ماستركلاس "فن الراحة"',
      location: "الدوحة",
      date: "سبتمبر 2026",
      desc: "ماستركلاس عملي حول علم وممارسة الراحة الحقيقية — لا مجرد النوم.",
    },
  },
  {
    en: {
      name: "Inner Compass Workshop",
      location: "Doha",
      date: "October 2026",
      desc: "Reconnect with your values and what actually matters to you.",
    },
    ar: {
      name: "ورشة البوصلة الداخلية",
      location: "الدوحة",
      date: "أكتوبر 2026",
      desc: "أعد التواصل مع قيمك وما يهمك فعلًا.",
    },
  },
  {
    en: {
      name: "Leadership & Longevity",
      location: "Doha",
      date: "November 2026",
      desc: "For leaders navigating high performance without burning out.",
    },
    ar: {
      name: "القيادة والاستدامة",
      location: "الدوحة",
      date: "نوفمبر 2026",
      desc: "للقادة الذين يسعون إلى الأداء العالي دون الإرهاق.",
    },
  },
  {
    en: {
      name: "High-Value Book Club",
      location: "Doha",
      date: "Monthly",
      desc: "A curated reading community for those who think deeply about how they live.",
    },
    ar: {
      name: "نادي الكتاب الراقي",
      location: "الدوحة",
      date: "شهريًا",
      desc: "مجتمع قراءة منتقى لمن يفكرون بعمق في كيفية حياتهم.",
    },
  },
];

export function HomePage() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";
  const fontBody = isAr ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = isAr ? "var(--font-arabic)" : "var(--font-heading)";
  const navigate = useNavigate();
  const [retreatModal, setRetreatModal] = useState(null);
  const [eventIdx, setEventIdx] = useState(0);
  const openRetreat = useCallback(
    (en, ar) =>
      setRetreatModal({
        en,
        ar,
      }),
    [],
  );
  const site = SITE_URL;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site}/#website`,
        name: "Awakened",
        url: `${site}/`,
      },
      {
        "@type": "Organization",
        "@id": `${site}/#organization`,
        name: "Awakened for Consultations",
        alternateName: ["Awakened", "أوايكند للاستشارات"],
        url: `${site}/`,
        logo: LOGO_URL,
        image: OG_IMAGE,
        email: "info@gotawakened.com",
        telephone: "+974 7710 6177",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Zone 53, Street 627, Building 23, 2nd Floor, Office 1",
          addressLocality: "Doha",
          addressCountry: "QA",
        },
        areaServed: "Worldwide",
      },
      {
        "@type": "WebPage",
        "@id": `${site}/#webpage`,
        url: `${site}/`,
        isPartOf: {
          "@id": `${site}/#website`,
        },
        about: {
          "@id": `${site}/#organization`,
        },
        datePublished: "2025-01-01",
        dateModified: "2026-09-01",
      },
    ],
  };
  return (
    <>
      <Seo
        path="/"
        title={"Awakened | Whole-Person Coaching & Luxury Wellness Retreats | Qatar & Worldwide"}
        description={
          "Private whole-person coaching and curated luxury retreats in Qatar and worldwide destinations, plus corporate wellness experiences. Book a confidential discovery call."
        }
        jsonLd={jsonLd}
      />
      {retreatModal && (
        <RetreatEnquiryModal
          retreatEn={retreatModal.en}
          retreatAr={retreatModal.ar}
          onClose={() => setRetreatModal(null)}
        />
      )}
      <div
        style={{
          direction: isAr ? "rtl" : "ltr",
        }}
      >
        <section
          style={{
            position: "relative",
            background: "var(--brand-forest)",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <AmbientOrb
            className="w-96 h-96 opacity-[0.07]"
            style={{
              background: "var(--brand-forest-orb-a)",
              top: "-10%",
              left: "60%",
            }}
            duration={18}
          />
          <AmbientOrb
            className="w-72 h-72 opacity-[0.05]"
            style={{
              background: "var(--brand-forest-orb-b)",
              bottom: "10%",
              right: "5%",
            }}
            duration={22}
            delay={3}
          />
          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
              padding: "140px 24px 100px",
              position: "relative",
              zIndex: 1,
              textAlign: "center",
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              style={{
                marginBottom: 48,
              }}
            >
              <img
                src="/images/logo-640.webp"
                srcSet="/images/logo-640.webp 640w, /images/logo-1200.webp 1200w"
                sizes="(max-width: 640px) 90vw, 570px"
                width={1536}
                height={1024}
                fetchPriority="high"
                alt="Awakened"
                style={{
                  height: 380,
                  width: "auto",
                  maxWidth: "90vw",
                  objectFit: "contain",
                  margin: "0 auto",
                  display: "block",
                  filter: "drop-shadow(0 0 24px var(--brand-gold-border))",
                }}
              />
            </motion.div>
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              style={{
                fontFamily: fontBody,
                fontSize: isAr ? "0.85rem" : "0.65rem",
                letterSpacing: isAr ? 0 : "0.28em",
                textTransform: isAr ? "none" : "uppercase",
                color: "var(--brand-gold)",
                marginBottom: 24,
                fontWeight: isAr ? 500 : 400,
              }}
            >
              {t("Whole-Person Coaching & Transformation", "التوجيه والتطوير المتكامل للإنسان")}
            </motion.p>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.6,
                ease: "easeOut",
              }}
              style={{
                fontFamily: fontHead,
                fontSize: isAr ? "clamp(2.2rem,6vw,4rem)" : "clamp(2.6rem,6vw,4.4rem)",
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: isAr ? 1.45 : 1.1,
                marginBottom: 28,
                whiteSpace: "pre-line",
              }}
            >
              {t("A private space for meaningful transformation", "فضاء خاص للتحول الحقيقي")}
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: "easeOut",
              }}
              style={{
                fontFamily: fontBody,
                fontSize: isAr ? "1.1rem" : "1.05rem",
                color: "var(--brand-sage-pale)",
                lineHeight: isAr ? 2 : 1.75,
                maxWidth: 580,
                margin: "0 auto 40px",
              }}
            >
              {t(
                "Holistic consultancy, transformational coaching, wellness experiences, retreats, and corporate wellbeing — thoughtfully designed around the whole person.",
                "استشارات شاملة، وتدريب تحويلي، وتجارب عافية، وخلوات، وبرامج رفاهية مؤسسية — مصمَّمة بعناية حول الإنسان بأكمله.",
              )}
            </motion.p>
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 1.1,
              }}
              style={{
                display: "flex",
                gap: 16,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "var(--brand-gold)",
                  padding: "14px 36px",
                  fontFamily: fontBody,
                  fontSize: isAr ? "0.9rem" : "0.7rem",
                  letterSpacing: isAr ? 0 : "0.18em",
                  textTransform: isAr ? "none" : "uppercase",
                  color: "var(--brand-forest)",
                  textDecoration: "none",
                  fontWeight: isAr ? 600 : 400,
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {t("Book a Free Discovery Call", "احجز مكالمة اكتشاف مجانية")}
              </Link>
              <Link
                to="/retreats"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  border: "1px solid var(--brand-sage-mid)",
                  padding: "14px 36px",
                  fontFamily: fontBody,
                  fontSize: isAr ? "0.9rem" : "0.7rem",
                  letterSpacing: isAr ? 0 : "0.18em",
                  textTransform: isAr ? "none" : "uppercase",
                  color: "var(--brand-sage-pale)",
                  textDecoration: "none",
                  transition: "border-color 0.3s, color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--brand-sage-light)";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--brand-sage-mid)";
                  e.currentTarget.style.color = "var(--brand-sage-pale)";
                }}
              >
                {t("Explore Our Retreats", "استكشف خلواتنا")}
              </Link>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 2,
                duration: 1,
              }}
              style={{
                marginTop: 64,
              }}
            >
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  width: 1,
                  height: 48,
                  background: "var(--brand-sage-mid)",
                  margin: "0 auto",
                  opacity: 0.5,
                }}
              />
            </motion.div>
          </div>
        </section>
        <section
          style={{
            background: "var(--brand-cream)",
            padding: "clamp(5rem,10vw,8rem) 24px",
            direction: isAr ? "rtl" : "ltr",
          }}
        >
          <div
            style={{
              maxWidth: 1080,
              margin: "0 auto",
            }}
          >
            <Reveal>
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "clamp(3rem,6vw,5rem)",
                }}
              >
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: isAr ? "0.82rem" : "0.62rem",
                    letterSpacing: isAr ? 0 : "0.32em",
                    textTransform: isAr ? "none" : "uppercase",
                    color: "var(--brand-gold-dark)",
                    fontWeight: isAr ? 600 : 400,
                    marginBottom: 14,
                  }}
                >
                  {t("Client Voices", "أصوات عملائنا")}
                </p>
                <h2
                  style={{
                    fontFamily: fontHead,
                    fontSize: isAr ? "clamp(1.8rem,4vw,2.8rem)" : "clamp(2rem,4vw,3rem)",
                    fontWeight: 400,
                    color: "var(--brand-forest)",
                    lineHeight: isAr ? 1.45 : 1.1,
                    fontStyle: isAr ? "normal" : "italic",
                  }}
                >
                  {t("In Their Words", "بكلماتهم")}
                </h2>
              </div>
            </Reveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.75rem",
                direction: isAr ? "rtl" : "ltr",
              }}
            >
              <Reveal delay={0}>
                <div
                  style={{
                    background: "var(--brand-cream-warm)",
                    padding: "clamp(2rem,4vw,2.75rem)",
                    borderTop: "2px solid var(--brand-gold)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.75rem",
                    height: "100%",
                    direction: isAr ? "rtl" : "ltr",
                  }}
                >
                  <span
                    style={{
                      fontFamily: fontHead,
                      fontSize: "3.5rem",
                      color: "var(--brand-gold)",
                      lineHeight: 0.8,
                      fontStyle: "italic",
                      display: "block",
                      opacity: 0.6,
                    }}
                  >
                    "
                  </span>
                  <p
                    style={{
                      fontFamily: fontHead,
                      fontSize: isAr ? "1.05rem" : "1.15rem",
                      color: "var(--brand-forest)",
                      lineHeight: isAr ? 1.85 : 1.65,
                      fontStyle: isAr ? "normal" : "italic",
                      fontWeight: 400,
                      flex: 1,
                      /* PLACEHOLDER — replace with real client quote */
                    }}
                  >
                    {t(
                      "[PLACEHOLDER] I came to Awakened feeling completely depleted — professionally successful but personally lost. Within a few months, I had a clarity I hadn't felt in years. The process was private, unhurried, and genuinely transformative.",
                      "[نص مؤقت] جئت إلى أوايكند وأنا أشعر بالإرهاق التام — ناجح مهنياً لكن ضائع شخصياً. في غضون أشهر قليلة، وجدت وضوحاً لم أشعر به منذ سنوات. كانت العملية خاصة وغير متسرعة وتحويلية حقاً",
                    )}
                  </p>
                  <div
                    style={{
                      borderTop: "1px solid var(--brand-sage-pale)",
                      paddingTop: "1.25rem",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: fontBody,
                        fontSize: isAr ? "0.8rem" : "0.68rem",
                        letterSpacing: isAr ? 0 : "0.18em",
                        textTransform: isAr ? "none" : "uppercase",
                        color: "var(--brand-sage)",
                        fontWeight: isAr ? 600 : 400,
                      }}
                    >
                      {t("Private Client, Doha", "عميل خاص، الدوحة")}
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div
                  style={{
                    background: "var(--brand-cream-warm)",
                    padding: "clamp(2rem,4vw,2.75rem)",
                    borderTop: "2px solid var(--brand-gold)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.75rem",
                    height: "100%",
                    direction: isAr ? "rtl" : "ltr",
                  }}
                >
                  <span
                    style={{
                      fontFamily: fontHead,
                      fontSize: "3.5rem",
                      color: "var(--brand-gold)",
                      lineHeight: 0.8,
                      fontStyle: "italic",
                      display: "block",
                      opacity: 0.6,
                    }}
                  >
                    "
                  </span>
                  <p
                    style={{
                      fontFamily: fontHead,
                      fontSize: isAr ? "1.05rem" : "1.15rem",
                      color: "var(--brand-forest)",
                      lineHeight: isAr ? 1.85 : 1.65,
                      fontStyle: isAr ? "normal" : "italic",
                      fontWeight: 400,
                      flex: 1,
                      /* PLACEHOLDER — replace with real client quote */
                    }}
                  >
                    {t(
                      "[PLACEHOLDER] The retreat was unlike anything I'd experienced before. Every detail was considered, the privacy was absolute, and I returned home with a renewed sense of purpose. I've recommended Awakened to several close friends.",
                      "[نص مؤقت] كانت الخلوة على عكس أي شيء مررت به من قبل. كل تفصيل كان مدروساً، والخصوصية كانت مطلقة، وعدت إلى المنزل بإحساس متجدد بالهدف. لقد أوصيت بأوايكند لعدد من أصدقائي المقربين",
                    )}
                  </p>
                  <div
                    style={{
                      borderTop: "1px solid var(--brand-sage-pale)",
                      paddingTop: "1.25rem",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: fontBody,
                        fontSize: isAr ? "0.8rem" : "0.68rem",
                        letterSpacing: isAr ? 0 : "0.18em",
                        textTransform: isAr ? "none" : "uppercase",
                        color: "var(--brand-sage)",
                        fontWeight: isAr ? 600 : 400,
                      }}
                    >
                      {t("Private Client, London", "عميل خاص، لندن")}
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div
                  style={{
                    background: "var(--brand-cream-warm)",
                    padding: "clamp(2rem,4vw,2.75rem)",
                    borderTop: "2px solid var(--brand-gold)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.75rem",
                    height: "100%",
                    direction: isAr ? "rtl" : "ltr",
                  }}
                >
                  <span
                    style={{
                      fontFamily: fontHead,
                      fontSize: "3.5rem",
                      color: "var(--brand-gold)",
                      lineHeight: 0.8,
                      fontStyle: "italic",
                      display: "block",
                      opacity: 0.6,
                    }}
                  >
                    "
                  </span>
                  <p
                    style={{
                      fontFamily: fontHead,
                      fontSize: isAr ? "1.05rem" : "1.15rem",
                      color: "var(--brand-forest)",
                      lineHeight: isAr ? 1.85 : 1.65,
                      fontStyle: isAr ? "normal" : "italic",
                      fontWeight: 400,
                      flex: 1,
                      /* PLACEHOLDER — replace with real client quote */
                    }}
                  >
                    {t(
                      "[PLACEHOLDER] We brought Awakened in to support our leadership team during a period of significant organisational change. The programme was thoughtfully designed, deeply practical, and the impact on our team's cohesion was immediate and lasting.",
                      "[نص مؤقت] أحضرنا أوايكند لدعم فريق قيادتنا خلال فترة تغيير مؤسسي كبير. كان البرنامج مصمماً بعناية وعملياً للغاية، وكان تأثيره على تماسك فريقنا فورياً ودائماً",
                    )}
                  </p>
                  <div
                    style={{
                      borderTop: "1px solid var(--brand-sage-pale)",
                      paddingTop: "1.25rem",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: fontBody,
                        fontSize: isAr ? "0.8rem" : "0.68rem",
                        letterSpacing: isAr ? 0 : "0.18em",
                        textTransform: isAr ? "none" : "uppercase",
                        color: "var(--brand-sage)",
                        fontWeight: isAr ? 600 : 400,
                      }}
                    >
                      {t("Corporate Client, Qatar", "عميل مؤسسي، قطر")}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
        <section
          style={{
            background: "var(--brand-cream-warm)",
            padding: "80px 24px",
            borderTop: "1px solid var(--brand-cream-mid)",
          }}
        >
          <div
            style={{
              maxWidth: 680,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <Reveal>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: isAr ? "0.82rem" : "0.62rem",
                  letterSpacing: isAr ? 0 : "0.32em",
                  textTransform: isAr ? "none" : "uppercase",
                  color: "var(--brand-gold-dark)",
                  marginBottom: 16,
                }}
              >
                {t("Our Promise", "وعدنا")}
              </p>
              <h2
                style={{
                  fontFamily: fontHead,
                  fontSize: isAr ? "clamp(1.4rem,3.5vw,2rem)" : "clamp(1.6rem,3.5vw,2.2rem)",
                  fontWeight: 400,
                  color: "var(--brand-forest)",
                  lineHeight: isAr ? 1.5 : 1.2,
                  marginBottom: 16,
                  fontStyle: isAr ? "normal" : "italic",
                }}
              >
                {t(
                  "Privacy, discretion, and complete confidentiality",
                  "الخصوصية والتكتم والسرية التامة",
                )}
              </h2>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: isAr ? "0.95rem" : "0.9rem",
                  color: "var(--brand-forest-mid)",
                  lineHeight: isAr ? 2 : 1.8,
                }}
              >
                {t(
                  "Everything shared with Awakened stays with Awakened. We serve clients who value discretion, and we take that responsibility seriously.",
                  "كل ما يُشارَك مع أوايكند يبقى مع أوايكند. نخدم عملاء يُقدّرون التكتم، ونأخذ هذه المسؤولية بجدية تامة.",
                )}
              </p>
            </Reveal>
          </div>
        </section>
        <section
          style={{
            background: "var(--brand-cream)",
            padding: "96px 24px",
          }}
        >
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <Reveal>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: isAr ? "0.82rem" : "0.62rem",
                  letterSpacing: isAr ? 0 : "0.32em",
                  textTransform: isAr ? "none" : "uppercase",
                  color: "var(--brand-gold-dark)",
                  marginBottom: 24,
                }}
              >
                {t("Our Philosophy", "فلسفتنا")}
              </p>
              <SageLine className="w-12 mx-auto mb-10" />
              <h2
                style={{
                  fontFamily: fontHead,
                  fontSize: isAr ? "clamp(1.8rem,4.5vw,3rem)" : "clamp(2rem,4.5vw,3.2rem)",
                  fontWeight: 400,
                  color: "var(--brand-forest)",
                  lineHeight: isAr ? 1.5 : 1.15,
                  marginBottom: 28,
                  fontStyle: isAr ? "normal" : "italic",
                }}
              >
                {t("A different kind of support", "نهج مختلف في الدعم")}
              </h2>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: isAr ? "1.05rem" : "1rem",
                  color: "var(--brand-forest-mid)",
                  lineHeight: isAr ? 2.1 : 1.8,
                  marginBottom: 20,
                  fontWeight: isAr ? 600 : 500,
                }}
              >
                {t(
                  "Most support systems focus on one part of life at a time — the mind, the body, the career, or relationships. But you are never just one of these things.",
                  "تركّز معظم أنظمة الدعم على جانب واحد من الحياة في كل مرة — العقل، أو الجسد، أو المسار المهني، أو العلاقات. لكنك لست أبدًا مجرد واحد من هذه الأشياء.",
                )}
              </p>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: isAr ? "1.05rem" : "1rem",
                  color: "var(--brand-forest-mid)",
                  lineHeight: isAr ? 2.1 : 1.8,
                  marginBottom: 20,
                }}
              >
                {t(
                  "At Awakened, we look at the whole person.",
                  "في أوايكند، ننظر إلى الإنسان في كماله.",
                )}
              </p>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: isAr ? "1.05rem" : "1rem",
                  color: "var(--brand-forest-mid)",
                  lineHeight: isAr ? 2.1 : 1.8,
                  marginBottom: 20,
                }}
              >
                {t(
                  "Because how you feel in your body can influence how you think. Your relationships can shape how you experience life. Your daily habits can affect your energy. And your sense of purpose can influence the choices you make.",
                  "لأن ما تشعر به في جسدك يؤثر في طريقة تفكيرك. وعلاقاتك تُشكّل كيف تعيش حياتك. وعاداتك اليومية تؤثر في طاقتك. وإحساسك بالهدف يؤثر في الخيارات التي تتخذها.",
                )}
              </p>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: isAr ? "1.05rem" : "1rem",
                  color: "var(--brand-forest-mid)",
                  lineHeight: isAr ? 2.1 : 1.8,
                  marginBottom: 20,
                  fontWeight: isAr ? 600 : 500,
                }}
              >
                {t(
                  "We believe meaningful change begins when all of these parts are understood together.",
                  "نؤمن بأن التغيير الحقيقي يبدأ حين تُفهم هذه الجوانب كلها معًا.",
                )}
              </p>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: isAr ? "1.05rem" : "1rem",
                  color: "var(--brand-forest-mid)",
                  lineHeight: isAr ? 2.1 : 1.8,
                }}
              >
                {t(
                  "Awakened brings personalized coaching, guidance, wellbeing, personal growth, career support, family guidance, movement, retreats, and transformational experiences into one connected approach — helping you understand where you are, discover what you need, and move forward with greater clarity and intention.",
                  "تجمع أوايكند بين التوجيه الشخصي والإرشاد والعافية والنمو الشخصي ودعم المسار المهني وتوجيه الأسرة والحركة والخلوات والتجارب التحويلية في نهج متكامل واحد — يساعدك على فهم وضعك الحالي، واكتشاف ما تحتاجه، والمضي قدمًا بوضوح أكبر وهدف أعمق.",
                )}
              </p>
            </Reveal>
          </div>
        </section>
        <section
          style={{
            background: "var(--brand-forest)",
            padding: "96px 24px",
          }}
        >
          <div
            style={{
              maxWidth: 1e3,
              margin: "0 auto",
            }}
          >
            <Reveal>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: isAr ? "0.82rem" : "0.62rem",
                  letterSpacing: isAr ? 0 : "0.32em",
                  textTransform: isAr ? "none" : "uppercase",
                  color: "var(--brand-gold)",
                  textAlign: "center",
                  marginBottom: 16,
                }}
              >
                {t("Who We Support", "من ندعم")}
              </p>
              <h2
                style={{
                  fontFamily: fontHead,
                  fontSize: isAr ? "clamp(1.6rem,4vw,2.6rem)" : "clamp(1.8rem,4vw,2.8rem)",
                  fontWeight: 400,
                  color: "var(--brand-cream)",
                  textAlign: "center",
                  lineHeight: isAr ? 1.5 : 1.2,
                  marginBottom: 56,
                  fontStyle: isAr ? "normal" : "italic",
                }}
              >
                {t("Wherever you are, we meet you there", "أينما كنت، نلتقيك هناك")}
              </h2>
            </Reveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 24,
                direction: isAr ? "rtl" : "ltr",
              }}
            >
              {home.WHO_WE_SUPPORT.map((card, i) => {
                const c = isAr ? card.ar : card.en;
                return (
                  <Reveal key={i} delay={i * 0.1}>
                    <div
                      role="link"
                      tabIndex={0}
                      onClick={() => navigate(card.href)}
                      onKeyDown={(e) => e.key === "Enter" && navigate(card.href)}
                      style={{
                        display: "block",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          padding: "36px 28px",
                          border: "1px solid var(--brand-border-subtle)",
                          background: "var(--brand-overlay-card)",
                          transition: "border-color 0.3s, transform 0.3s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "var(--brand-gold)";
                          e.currentTarget.style.transform = "translateY(-4px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "var(--brand-border-subtle)";
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        <div
                          style={{
                            fontFamily: fontHead,
                            fontSize: "1.8rem",
                            color: "var(--brand-sage-mid)",
                            marginBottom: 16,
                          }}
                        >
                          {card.icon}
                        </div>
                        <p
                          style={{
                            fontFamily: fontBody,
                            fontSize: isAr ? "0.78rem" : "0.62rem",
                            letterSpacing: isAr ? 0 : "0.2em",
                            textTransform: isAr ? "none" : "uppercase",
                            color: "var(--brand-gold)",
                            marginBottom: 10,
                            fontWeight: isAr ? 500 : 400,
                          }}
                        >
                          {c.label}
                        </p>
                        <h3
                          style={{
                            fontFamily: fontHead,
                            fontSize: isAr ? "1.2rem" : "1.15rem",
                            fontWeight: 400,
                            color: "var(--brand-cream)",
                            lineHeight: isAr ? 1.6 : 1.3,
                            marginBottom: 12,
                          }}
                        >
                          {c.title}
                        </h3>
                        <p
                          style={{
                            fontFamily: fontBody,
                            fontSize: isAr ? "0.9rem" : "0.85rem",
                            color: "var(--brand-sage-pale)",
                            lineHeight: isAr ? 2 : 1.7,
                            marginBottom: 20,
                          }}
                        >
                          {c.desc}
                        </p>
                        <span
                          style={{
                            fontFamily: fontBody,
                            fontSize: isAr ? "0.82rem" : "0.68rem",
                            letterSpacing: isAr ? 0 : "0.15em",
                            textTransform: isAr ? "none" : "uppercase",
                            color: "var(--brand-sage-light)",
                            borderBottom: "1px solid var(--brand-sage-mid)",
                            paddingBottom: 2,
                          }}
                        >
                          {t("Learn more", "اعرف المزيد")}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
        <section
          style={{
            background: "var(--brand-cream-warm)",
            padding: "96px 24px",
          }}
        >
          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            <Reveal>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: isAr ? "0.82rem" : "0.62rem",
                  letterSpacing: isAr ? 0 : "0.32em",
                  textTransform: isAr ? "none" : "uppercase",
                  color: "var(--brand-gold-dark)",
                  textAlign: "center",
                  marginBottom: 16,
                }}
              >
                {t("Awakened Pathways", "مسارات أوايكند")}
              </p>
              <h2
                style={{
                  fontFamily: fontHead,
                  fontSize: isAr ? "clamp(1.6rem,4vw,2.6rem)" : "clamp(1.8rem,4vw,2.8rem)",
                  fontWeight: 400,
                  color: "var(--brand-forest)",
                  textAlign: "center",
                  lineHeight: isAr ? 1.5 : 1.2,
                  marginBottom: 12,
                  fontStyle: isAr ? "normal" : "italic",
                }}
              >
                {t("Eight areas. One integrated practice.", "ثمانية مجالات. ممارسة متكاملة واحدة.")}
              </h2>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: isAr ? "0.95rem" : "0.9rem",
                  color: "var(--brand-forest-mid)",
                  textAlign: "center",
                  lineHeight: isAr ? 2 : 1.7,
                  maxWidth: 560,
                  margin: "0 auto 48px",
                }}
              >
                {t(
                  "You can start anywhere. Your advisor will help you see how everything connects.",
                  "يمكنك البدء من أي مكان. سيساعدك مستشارك على رؤية كيف يترابط كل شيء.",
                )}
              </p>
            </Reveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 16,
                direction: isAr ? "rtl" : "ltr",
              }}
            >
              {home.PATHWAYS.map((p, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div
                    role="link"
                    tabIndex={0}
                    onClick={() => navigate(p.href)}
                    onKeyDown={(e) => e.key === "Enter" && navigate(p.href)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "18px 20px",
                      background: "var(--brand-cream-mid)",
                      border: "1px solid var(--brand-border-subtle)",
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "border-color 0.3s, background 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--brand-gold)";
                      e.currentTarget.style.background = "var(--brand-cream)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--brand-border-subtle)";
                      e.currentTarget.style.background = "var(--brand-cream-mid)";
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "var(--brand-sage)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: fontBody,
                        fontSize: isAr ? "0.9rem" : "0.78rem",
                        color: "var(--brand-forest)",
                        lineHeight: isAr ? 1.8 : 1.4,
                        fontWeight: isAr ? 500 : 400,
                      }}
                    >
                      {isAr ? p.ar : p.en}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section
          style={{
            background: "var(--brand-forest)",
            padding: "96px 24px",
          }}
        >
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
            }}
          >
            <Reveal>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: isAr ? "0.82rem" : "0.62rem",
                  letterSpacing: isAr ? 0 : "0.32em",
                  textTransform: isAr ? "none" : "uppercase",
                  color: "var(--brand-gold)",
                  textAlign: "center",
                  marginBottom: 16,
                }}
              >
                {t("FAQ", "أسئلة شائعة")}
              </p>
              <h2
                style={{
                  fontFamily: fontHead,
                  fontSize: isAr ? "clamp(1.6rem,4vw,2.6rem)" : "clamp(1.8rem,4vw,2.8rem)",
                  fontWeight: 400,
                  color: "var(--brand-cream)",
                  textAlign: "center",
                  lineHeight: isAr ? 1.5 : 1.2,
                  marginBottom: 64,
                  fontStyle: isAr ? "normal" : "italic",
                }}
              >
                {t("Common Questions", "أسئلة متكررة")}
              </h2>
            </Reveal>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                direction: isAr ? "rtl" : "ltr",
              }}
            >
              {[
                {
                  q: {
                    en: "What is whole-person coaching?",
                    ar: "ما هو التدريب الشامل للإنسان؟",
                  },
                  a: {
                    en: "Whole-person coaching addresses every dimension of your life — physical health, mental clarity, emotional wellbeing, relationships, purpose, and environment — as an interconnected system rather than isolated problems. Rather than focusing on a single goal or symptom, your Awakened advisor works with you to understand the deeper patterns shaping your experience and supports meaningful, lasting change across all areas.",
                    ar: "يتناول التدريب الشامل للإنسان كل جانب من جوانب حياتك — الصحة الجسدية، والوضوح الذهني، والعافية العاطفية، والعلاقات، والغاية، والبيئة — باعتبارها منظومة متكاملة لا مشكلات منفصلة. بدلاً من التركيز على هدف واحد أو عَرَض بعينه، يعمل مستشارك في أوايكند معك لفهم الأنماط العميقة التي تشكّل تجربتك، ويدعمك في إحداث تغيير حقيقي ودائم في جميع المجالات",
                  },
                },
                {
                  q: {
                    en: "How is Awakened different from a regular life coach or therapist?",
                    ar: "كيف تختلف أوايكند عن مدرب الحياة العادي أو المعالج النفسي؟",
                  },
                  a: {
                    en: "Awakened sits at the intersection of advisory, coaching, and curated wellbeing — drawing on evidence-informed frameworks without being bound by any single discipline. Unlike a life coach, our advisors bring deep specialist knowledge across health, psychology, and lifestyle design. Unlike therapy, our focus is on forward movement, personal growth, and building the conditions for a life that feels genuinely aligned.",
                    ar: "تقع أوايكند عند تقاطع الاستشارة والتدريب والعافية المنتقاة — مستندةً إلى أطر مدعومة بالأدلة دون أن تكون مقيّدة بتخصص واحد. على خلاف مدرب الحياة، يمتلك مستشارونا معرفة متخصصة عميقة في الصحة وعلم النفس وتصميم أسلوب الحياة. وعلى خلاف العلاج النفسي، ينصبّ تركيزنا على المضيّ قُدُمًا والنمو الشخصي وبناء الظروف الملائمة لحياة تشعر فيها بالتوافق الحقيقي",
                  },
                },
                {
                  q: {
                    en: "Who are Awakened's retreats and coaching for?",
                    ar: "لمن تُوجَّه خلوات أوايكند وجلسات التدريب؟",
                  },
                  a: {
                    en: "Awakened works with individuals, couples, and senior professionals who are ready for a more intentional approach to their health, clarity, and quality of life. Our clients come from across the Gulf and internationally — many are high-achieving people who have found that conventional approaches no longer meet the depth of change they are seeking.",
                    ar: "تعمل أوايكند مع الأفراد والأزواج وكبار المهنيين الذين هم على استعداد لاتباع نهج أكثر تعمّدًا في صحتهم ووضوحهم الذهني وجودة حياتهم. يأتي عملاؤنا من منطقة الخليج ومن حول العالم — كثيرون منهم أشخاص متميزون وجدوا أن الأساليب التقليدية لم تعد تلبّي عمق التغيير الذي يسعون إليه",
                  },
                },
                {
                  q: {
                    en: "Is Awakened coaching a substitute for therapy or medical care?",
                    ar: "هل يُغني تدريب أوايكند عن العلاج النفسي أو الرعاية الطبية؟",
                  },
                  a: {
                    en: "Awakened coaching and wellbeing services are designed to support personal development, wellbeing, and lifestyle goals. They are not a substitute for medical, psychiatric, or emergency care. If you are managing a clinical condition, we encourage you to work alongside your existing healthcare providers — our advisors are experienced in collaborating with medical teams where appropriate.",
                    ar: "صُمِّمت خدمات التدريب والعافية في أوايكند لدعم التطوير الشخصي وأهداف العافية وأسلوب الحياة، وهي ليست بديلاً عن الرعاية الطبية أو النفسية أو الطارئة. إذا كنت تتعامل مع حالة سريرية، فنحن نشجعك على العمل إلى جانب مقدمي الرعاية الصحية الحاليين — إذ يمتلك مستشارونا خبرة في التعاون مع الفرق الطبية عند الاقتضاء",
                  },
                },
                {
                  q: {
                    en: "How does the private advisory process work, from first contact to ongoing coaching?",
                    ar: "كيف تسير عملية الاستشارة الخاصة، من أول تواصل وحتى التدريب المستمر؟",
                  },
                  a: {
                    en: "It begins with a complimentary discovery call — a private, no-obligation conversation to understand where you are and what you are looking for. From there, your advisor designs a personalised programme tailored to your goals, pace, and preferences. Sessions are conducted with complete discretion, and your programme evolves as you do — with ongoing support between sessions as needed.",
                    ar: "تبدأ العملية بمكالمة اكتشاف مجانية — محادثة خاصة وغير مُلزِمة لفهم وضعك الحالي وما تبحث عنه. بعد ذلك، يصمم مستشارك برنامجًا شخصيًا مخصصًا لأهدافك وإيقاعك وتفضيلاتك. تُجرى الجلسات بسرية تامة، ويتطور برنامجك بتطورك — مع دعم مستمر بين الجلسات عند الحاجة",
                  },
                },
              ].map((item, i, arr) => (
                <Reveal key={i} delay={i * 0.07}>
                  <div
                    style={{
                      borderTop: "1px solid var(--brand-border-subtle)",
                      borderBottom:
                        i === arr.length - 1 ? "1px solid var(--brand-border-subtle)" : "none",
                      padding: "36px 0",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: fontHead,
                        fontSize: isAr ? "1.1rem" : "1.05rem",
                        fontWeight: isAr ? 600 : 400,
                        color: "var(--brand-cream)",
                        lineHeight: isAr ? 1.6 : 1.35,
                        marginBottom: 16,
                        fontStyle: isAr ? "normal" : "italic",
                      }}
                    >
                      {isAr ? item.q.ar : item.q.en}
                    </h3>
                    <p
                      style={{
                        fontFamily: fontBody,
                        fontSize: isAr ? "0.92rem" : "0.88rem",
                        color: "var(--brand-sage-pale)",
                        lineHeight: isAr ? 2 : 1.75,
                        maxWidth: 640,
                      }}
                    >
                      {isAr ? item.a.ar : item.a.en}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section
          style={{
            background: "var(--brand-forest)",
            padding: "96px 24px",
            borderTop: "1px solid var(--brand-forest-mid)",
          }}
        >
          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            <Reveal>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: isAr ? "0.82rem" : "0.62rem",
                  letterSpacing: isAr ? 0 : "0.32em",
                  textTransform: isAr ? "none" : "uppercase",
                  color: "var(--brand-gold)",
                  textAlign: "center",
                  marginBottom: 16,
                }}
              >
                {t("What's Coming", "ما هو قادم")}
              </p>
              <h2
                style={{
                  fontFamily: fontHead,
                  fontSize: isAr ? "clamp(1.6rem,4vw,2.6rem)" : "clamp(1.8rem,4vw,2.8rem)",
                  fontWeight: 400,
                  color: "var(--brand-cream)",
                  textAlign: "center",
                  lineHeight: isAr ? 1.5 : 1.2,
                  marginBottom: 48,
                  fontStyle: isAr ? "normal" : "italic",
                }}
              >
                {t("Upcoming Retreats", "الخلوات القادمة")}
              </h2>
            </Reveal>
            {home.RETREAT_SLIDES.map((r, i) => {
              const c = isAr ? r.ar : r.en;
              return (
                <Reveal key={i} delay={i * 0.1}>
                  <div
                    style={{
                      border: "1px solid var(--brand-border-subtle)",
                      padding: "40px 36px",
                      marginBottom: 24,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 24,
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        direction: isAr ? "rtl" : "ltr",
                      }}
                    >
                      <div
                        style={{
                          flex: "1 1 300px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            gap: 16,
                            marginBottom: 16,
                            flexWrap: "wrap",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: fontBody,
                              fontSize: isAr ? "0.78rem" : "0.65rem",
                              letterSpacing: isAr ? 0 : "0.18em",
                              textTransform: isAr ? "none" : "uppercase",
                              color: "var(--brand-gold)",
                              fontWeight: isAr ? 500 : 400,
                            }}
                          >
                            {c.date}
                          </span>
                          <span
                            style={{
                              fontFamily: fontBody,
                              fontSize: isAr ? "0.78rem" : "0.65rem",
                              letterSpacing: isAr ? 0 : "0.18em",
                              textTransform: isAr ? "none" : "uppercase",
                              color: "var(--brand-sage-mid)",
                              fontWeight: isAr ? 500 : 400,
                            }}
                          >
                            {c.location}
                          </span>
                          <span
                            style={{
                              fontFamily: fontBody,
                              fontSize: isAr ? "0.78rem" : "0.65rem",
                              letterSpacing: isAr ? 0 : "0.18em",
                              textTransform: isAr ? "none" : "uppercase",
                              color: "var(--brand-sage-mid)",
                              fontWeight: isAr ? 500 : 400,
                            }}
                          >
                            {c.spots}
                          </span>
                        </div>
                        <h3
                          style={{
                            fontFamily: fontHead,
                            fontSize: isAr ? "1.4rem" : "1.5rem",
                            fontWeight: 400,
                            color: "var(--brand-cream)",
                            fontStyle: isAr ? "normal" : "italic",
                            lineHeight: isAr ? 1.6 : 1.3,
                            marginBottom: 12,
                          }}
                        >
                          {c.name}
                        </h3>
                        <p
                          style={{
                            fontFamily: fontBody,
                            fontSize: isAr ? "0.92rem" : "0.88rem",
                            color: "var(--brand-sage-pale)",
                            lineHeight: isAr ? 2 : 1.7,
                          }}
                        >
                          {c.desc}
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 12,
                          flexShrink: 0,
                        }}
                      >
                        <button
                          onClick={() => openRetreat(r.en.name, r.ar.name)}
                          style={{
                            fontFamily: fontBody,
                            fontSize: isAr ? "0.85rem" : "0.68rem",
                            letterSpacing: isAr ? 0 : "0.16em",
                            textTransform: isAr ? "none" : "uppercase",
                            border: "1px solid var(--brand-gold)",
                            padding: "12px 24px",
                            color: "var(--brand-gold)",
                            background: "transparent",
                            cursor: "pointer",
                            transition: "background 0.3s, color 0.3s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "var(--brand-gold)";
                            e.currentTarget.style.color = "var(--brand-forest)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "var(--brand-gold)";
                          }}
                        >
                          {t("Enquire", "استفسر")}
                        </button>
                        <Link
                          to="/retreats"
                          style={{
                            fontFamily: fontBody,
                            fontSize: isAr ? "0.82rem" : "0.65rem",
                            letterSpacing: isAr ? 0 : "0.15em",
                            textTransform: isAr ? "none" : "uppercase",
                            color: "var(--brand-sage-mid)",
                            textDecoration: "none",
                            textAlign: "center",
                          }}
                        >
                          {t("All retreats", "جميع الخلوات")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>
        <section
          style={{
            background: "var(--brand-cream)",
            padding: "96px 24px",
          }}
        >
          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            <Reveal>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: isAr ? "0.82rem" : "0.62rem",
                  letterSpacing: isAr ? 0 : "0.32em",
                  textTransform: isAr ? "none" : "uppercase",
                  color: "var(--brand-gold-dark)",
                  textAlign: "center",
                  marginBottom: 16,
                }}
              >
                {t("Upcoming Events", "الفعاليات القادمة")}
              </p>
              <h2
                style={{
                  fontFamily: fontHead,
                  fontSize: isAr ? "clamp(1.6rem,4vw,2.6rem)" : "clamp(1.8rem,4vw,2.8rem)",
                  fontWeight: 400,
                  color: "var(--brand-forest)",
                  textAlign: "center",
                  lineHeight: isAr ? 1.5 : 1.2,
                  marginBottom: 48,
                  fontStyle: isAr ? "normal" : "italic",
                }}
              >
                {t("Events & Workshops", "الفعاليات وورش العمل")}
              </h2>
            </Reveal>
            <div
              style={{
                display: "flex",
                gap: 8,
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: 32,
                direction: isAr ? "rtl" : "ltr",
              }}
            >
              {EVENT_SLIDES.map((e, i) => {
                const c = isAr ? e.ar : e.en;
                return (
                  <button
                    key={i}
                    onClick={() => setEventIdx(i)}
                    style={{
                      fontFamily: fontBody,
                      fontSize: isAr ? "0.82rem" : "0.65rem",
                      letterSpacing: isAr ? 0 : "0.15em",
                      textTransform: isAr ? "none" : "uppercase",
                      padding: "8px 16px",
                      border: "1px solid",
                      borderColor:
                        eventIdx === i ? "var(--brand-forest)" : "var(--brand-border-subtle)",
                      background: eventIdx === i ? "var(--brand-forest)" : "transparent",
                      color: eventIdx === i ? "var(--brand-cream)" : "var(--brand-forest-mid)",
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                  >
                    {c.date}
                  </button>
                );
              })}
            </div>
            <Reveal key={eventIdx}>
              <div
                style={{
                  border: "1px solid var(--brand-border-subtle)",
                  padding: "40px 36px",
                  direction: isAr ? "rtl" : "ltr",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    marginBottom: 16,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontFamily: fontBody,
                      fontSize: isAr ? "0.78rem" : "0.65rem",
                      letterSpacing: isAr ? 0 : "0.18em",
                      textTransform: isAr ? "none" : "uppercase",
                      color: "var(--brand-sage)",
                      fontWeight: isAr ? 500 : 400,
                    }}
                  >
                    {isAr ? EVENT_SLIDES[eventIdx].ar.date : EVENT_SLIDES[eventIdx].en.date}
                  </span>
                  <span
                    style={{
                      fontFamily: fontBody,
                      fontSize: isAr ? "0.78rem" : "0.65rem",
                      letterSpacing: isAr ? 0 : "0.18em",
                      textTransform: isAr ? "none" : "uppercase",
                      color: "var(--brand-sage-mid)",
                      fontWeight: isAr ? 500 : 400,
                    }}
                  >
                    {isAr ? EVENT_SLIDES[eventIdx].ar.location : EVENT_SLIDES[eventIdx].en.location}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: fontHead,
                    fontSize: isAr ? "1.5rem" : "1.6rem",
                    fontWeight: 400,
                    color: "var(--brand-forest)",
                    fontStyle: isAr ? "normal" : "italic",
                    lineHeight: isAr ? 1.6 : 1.3,
                    marginBottom: 12,
                  }}
                >
                  {isAr ? EVENT_SLIDES[eventIdx].ar.name : EVENT_SLIDES[eventIdx].en.name}
                </h3>
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: isAr ? "0.95rem" : "0.9rem",
                    color: "var(--brand-forest-mid)",
                    lineHeight: isAr ? 2 : 1.7,
                    marginBottom: 24,
                  }}
                >
                  {isAr ? EVENT_SLIDES[eventIdx].ar.desc : EVENT_SLIDES[eventIdx].en.desc}
                </p>
                <Link
                  to="/events"
                  style={{
                    fontFamily: fontBody,
                    fontSize: isAr ? "0.85rem" : "0.68rem",
                    letterSpacing: isAr ? 0 : "0.16em",
                    textTransform: isAr ? "none" : "uppercase",
                    color: "var(--brand-sage)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--brand-sage-mid)",
                    paddingBottom: 2,
                  }}
                >
                  {t("View all events", "عرض جميع الفعاليات")}
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
        <section
          style={{
            background: "var(--brand-cream-mid)",
            padding: "112px 32px",
            borderTop: "1px solid var(--brand-cream-warm)",
          }}
        >
          <div
            style={{
              maxWidth: 1152,
              margin: "0 auto",
            }}
          >
            <Reveal>
              <div
                style={{
                  textAlign: "center",
                  maxWidth: 640,
                  margin: "0 auto 64px",
                  direction: isAr ? "rtl" : "ltr",
                }}
              >
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: "0.62rem",
                    letterSpacing: isAr ? 0 : "0.32em",
                    textTransform: isAr ? "none" : "uppercase",
                    color: "var(--brand-gold-dark)",
                    marginBottom: 20,
                  }}
                >
                  {t(about.team.eyebrow.en, about.team.eyebrow.ar)}
                </p>
                <h2
                  style={{
                    fontFamily: fontHead,
                    fontSize: "clamp(2.2rem,4vw,3.4rem)",
                    color: "var(--brand-forest)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    marginBottom: 20,
                    fontStyle: isAr ? "normal" : "italic",
                  }}
                >
                  {isAr ? (
                    <span
                      style={{
                        whiteSpace: "pre-line",
                      }}
                    >
                      {about.team.headingLine1.ar}
                    </span>
                  ) : (
                    <>
                      {about.team.headingLine1.en}{" "}
                      <span
                        style={{
                          whiteSpace: "pre-line",
                          color: "var(--brand-sage-mid)",
                        }}
                      >
                        {about.team.headingLine2.en}
                      </span>
                    </>
                  )}
                </h2>
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: "0.95rem",
                    color: "var(--brand-forest-mid)",
                    lineHeight: 1.85,
                  }}
                >
                  {t(about.team.body.en, about.team.body.ar)}
                </p>
                <div
                  style={{
                    height: 1,
                    background: "var(--brand-sage-light)",
                    opacity: 0.4,
                    marginTop: 40,
                  }}
                />
              </div>
            </Reveal>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              style={{
                direction: isAr ? "rtl" : "ltr",
              }}
            >
              {about.team.advisors.map((advisor, i) => (
                <Reveal key={advisor.id} delay={i * 0.04}>
                  <div
                    className="flex flex-col h-full p-7"
                    style={{
                      background: "var(--brand-cream)",
                      border: "1px solid var(--brand-border-subtle)",
                    }}
                  >
                    <div
                      className="w-8 h-px mb-5"
                      style={{
                        background: "var(--brand-gold)",
                      }}
                    />
                    <h3
                      style={{
                        fontFamily: fontHead,
                        fontSize: "1.15rem",
                        color: "var(--brand-forest)",
                        fontWeight: 600,
                        lineHeight: 1.2,
                        marginBottom: "0.3rem",
                      }}
                    >
                      {t(advisor.nameEn, advisor.nameAr)}
                    </h3>
                    <p
                      className="mb-4"
                      style={{
                        fontFamily: fontBody,
                        fontSize: "0.72rem",
                        color: "var(--brand-sage)",
                        letterSpacing: isAr ? 0 : "0.1em",
                        textTransform: isAr ? "none" : "uppercase",
                      }}
                    >
                      {t(advisor.specEn, advisor.specAr)}
                    </p>
                    <div className="flex flex-col gap-2 mt-auto">
                      <Link
                        to="/book#top"
                        className="w-full py-3 text-center text-xs tracking-[0.18em] uppercase transition-all duration-300"
                        style={{
                          fontFamily: fontBody,
                          background: "transparent",
                          color: "var(--brand-gold)",
                          textDecoration: "none",
                          display: "block",
                          border: "1px solid var(--brand-gold)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(201,168,76,0.08)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        {t("Book a Session", "احجز جلسة")}
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.35}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 48,
                }}
              >
                <Link
                  to="/experts"
                  className="inline-flex items-center justify-center px-10 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300"
                  style={{
                    fontFamily: fontBody,
                    background: "var(--brand-forest-mid)",
                    color: "var(--brand-cream)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--brand-forest)";
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(74,122,80,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--brand-forest-mid)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {t(about.team.cta.en, about.team.cta.ar)}
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
        <section
          style={{
            background: "var(--brand-cream-warm)",
            padding: "80px 32px",
            borderTop: "1px solid var(--brand-cream-mid)",
          }}
        >
          <div
            style={{
              maxWidth: 1152,
              margin: "0 auto",
            }}
          >
            <Reveal>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: "0.62rem",
                  letterSpacing: isAr ? 0 : "0.32em",
                  textTransform: isAr ? "none" : "uppercase",
                  color: "var(--brand-gold-dark)",
                  textAlign: "center",
                  marginBottom: 40,
                }}
              >
                {t("Our Partners", "شركاؤنا")}
              </p>
            </Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Array.from({
                length: 8,
              }).map((_, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div
                    className="flex items-center justify-center aspect-[3/2] transition-all duration-300"
                    style={{
                      background: "var(--brand-cream)",
                      border: "1px solid var(--brand-border-subtle)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--brand-sage-light)";
                      e.currentTarget.style.boxShadow = "0 4px 20px rgba(107,153,112,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--brand-border-subtle)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.72rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--brand-sage-mid)",
                        textAlign: "center",
                        padding: "0 12px",
                      }}
                    >
                      Partner Logo
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section
          style={{
            background: "var(--brand-forest)",
            padding: "96px 24px",
            borderTop: "1px solid var(--brand-forest-mid)",
          }}
        >
          <div
            style={{
              maxWidth: 700,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <Reveal>
              <SageLine className="w-12 mx-auto mb-10" />
              <h2
                style={{
                  fontFamily: fontHead,
                  fontSize: isAr ? "clamp(1.8rem,4.5vw,3rem)" : "clamp(2rem,4.5vw,3.2rem)",
                  fontWeight: 400,
                  color: "var(--brand-cream)",
                  lineHeight: isAr ? 1.5 : 1.15,
                  marginBottom: 20,
                  fontStyle: isAr ? "normal" : "italic",
                }}
              >
                {t("Start with a conversation", "ابدأ بمحادثة")}
              </h2>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: isAr ? "1.05rem" : "1rem",
                  color: "var(--brand-sage-pale)",
                  lineHeight: isAr ? 2 : 1.75,
                  maxWidth: 520,
                  margin: "0 auto 16px",
                }}
              >
                {t(
                  "Whether for yourself, your team, or your organization, tell us a little about what you're looking for and we'll be in touch — privately and discreetly.",
                  "سواء كان ذلك لنفسك أو لفريقك أو لمؤسستك، أخبرنا قليلاً عما تبحث عنه وسنتواصل معك — بخصوصية تامة وتقدير",
                )}
              </p>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: isAr ? "0.88rem" : "0.82rem",
                  color: "var(--brand-sage-mid)",
                  fontStyle: isAr ? "normal" : "italic",
                  marginBottom: 36,
                }}
              >
                {t(
                  "We work with a small number of clients at a time. Availability is limited.",
                  "نعمل مع عدد محدود من العملاء في كل مرة. الأماكن المتاحة محدودة.",
                )}
              </p>
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "var(--brand-gold)",
                  padding: "16px 44px",
                  fontFamily: fontBody,
                  fontSize: isAr ? "0.95rem" : "0.72rem",
                  letterSpacing: isAr ? 0 : "0.2em",
                  textTransform: isAr ? "none" : "uppercase",
                  color: "var(--brand-forest)",
                  textDecoration: "none",
                  fontWeight: isAr ? 600 : 400,
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {t("Book a Free Discovery Call", "احجز مكالمة اكتشاف مجانية")}
              </Link>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}
