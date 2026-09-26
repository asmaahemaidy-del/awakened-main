import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router";
import { organizations } from "../content/pages";
import { Seo } from "../components/Seo";
import { useLanguage } from "../i18n/LanguageContext";

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

export function OrganizationsPage() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";
  const fontBody = isAr ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = isAr ? "var(--font-arabic)" : "var(--font-heading)";
  const [openFaq, setOpenFaq] = useState(null);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    email: "",
    organisation: "",
    message: "",
  });
  const [enquirySending, setEnquirySending] = useState(false);
  return (
    <>
      <Seo
        path="/organizations"
        title={t(
          "Corporate Wellbeing & Leadership Coaching | Awakened Qatar",
          "التوجيه القيادي ورفاهية المؤسسات | أوايكند قطر",
        )}
        description={t(
          "Leadership coaching, team wellness programmes, corporate retreats, and wellbeing strategy for organizations in Qatar and worldwide. Enquire about corporate programmes.",
          "توجيه قيادي وبرامج عافية للفرق وخلوات مؤسسية واستراتيجية رفاهية للمنظمات في قطر وحول العالم. استفسر عن البرامج المؤسسية.",
        )}
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": organizations.OFFERINGS.map((o) => ({
            "@type": "Service",
            name: o.en.title,
            description: o.en.desc,
            provider: {
              "@type": "Organization",
              name: "Awakened",
              url: "https://www.gotawakened.com",
            },
            areaServed: "Qatar and worldwide",
            url: "https://www.gotawakened.com/organizations",
          })),
        }}
      />
      <div
        style={{
          direction: isAr ? "rtl" : "ltr",
        }}
      >
        <section
          style={{
            background: "var(--brand-forest)",
            paddingTop: 140,
            paddingBottom: 80,
            paddingLeft: 24,
            paddingRight: 24,
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
                  fontSize: isAr ? "0.82rem" : "0.65rem",
                  letterSpacing: isAr ? 0 : "0.22em",
                  textTransform: isAr ? "none" : "uppercase",
                  color: "var(--brand-gold)",
                  marginBottom: 20,
                }}
              >
                {t("For Organisations", "للمؤسسات")}
              </p>
              <h1
                style={{
                  fontFamily: fontHead,
                  fontSize: isAr ? "clamp(2rem,5vw,3.2rem)" : "clamp(2.2rem,5vw,3.6rem)",
                  fontWeight: 400,
                  color: "var(--brand-cream)",
                  lineHeight: isAr ? 1.5 : 1.15,
                  marginBottom: 16,
                }}
              >
                {t(
                  "Wellbeing is part of how people work, live and lead",
                  "الرفاهية جزء من طريقة عمل الناس وحياتهم وقيادتهم",
                )}
              </h1>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: isAr ? "1.05rem" : "1rem",
                  color: "var(--brand-sage-pale)",
                  lineHeight: isAr ? 2 : 1.75,
                  maxWidth: 600,
                  margin: "0 auto 28px",
                }}
              >
                {t(
                  "We partner with organisations to build cultures where people can genuinely thrive — not just perform.",
                  "نتشارك مع المؤسسات لبناء ثقافات يستطيع فيها الناس الازدهار الحقيقي — لا مجرد الأداء.",
                )}
              </p>
              <p
                style={{
                  fontFamily: fontHead,
                  fontSize: isAr ? "clamp(1.2rem,2.5vw,1.6rem)" : "clamp(1.1rem,2.5vw,1.5rem)",
                  fontWeight: 400,
                  color: "var(--brand-gold)",
                  lineHeight: isAr ? 1.6 : 1.3,
                  maxWidth: 560,
                  margin: "0 auto 32px",
                  letterSpacing: isAr ? 0 : "0.02em",
                }}
              >
                {t(
                  "Healthier People. Stronger Teams. Better Work.",
                  "أشخاص أكثر صحة. فرق أقوى. عمل أفضل.",
                )}
              </p>
              <div
                style={{
                  maxWidth: 600,
                  margin: "0 auto",
                  textAlign: isAr ? "right" : "left",
                  marginBottom: 36,
                }}
              >
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: isAr ? "1rem" : "0.95rem",
                    color: "var(--brand-sage-pale)",
                    lineHeight: isAr ? 2 : 1.8,
                    marginBottom: 16,
                    fontWeight: isAr ? 600 : 500,
                  }}
                >
                  {t(
                    "People don't leave their lives at the office door.",
                    "الناس لا يتركون حياتهم خارج باب المكتب.",
                  )}
                </p>
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: isAr ? "1rem" : "0.95rem",
                    color: "var(--brand-sage-pale)",
                    lineHeight: isAr ? 2 : 1.8,
                    marginBottom: 16,
                  }}
                >
                  {t(
                    "Their energy, wellbeing, relationships, responsibilities and personal challenges can all influence the way they work and lead.",
                    "طاقتهم وعافيتهم وعلاقاتهم ومسؤولياتهم وتحدياتهم الشخصية — كل ذلك يؤثر في طريقة عملهم وقيادتهم.",
                  )}
                </p>
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: isAr ? "1rem" : "0.95rem",
                    color: "var(--brand-sage-pale)",
                    lineHeight: isAr ? 2 : 1.8,
                  }}
                >
                  {t(
                    "Awakened partners with organizations to create meaningful wellbeing experiences for employees and teams.",
                    "تتشارك أوايكند مع المؤسسات لخلق تجارب عافية ذات معنى للموظفين والفرق.",
                  )}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 16,
                  justifyContent: isAr ? "flex-end" : "flex-start",
                }}
              >
                <button
                  onClick={() => {
                    setEnquiryOpen(true);
                    setEnquirySubmitted(false);
                  }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    cursor: "pointer",
                    border: "1px solid var(--brand-gold)",
                    padding: "12px 32px",
                    fontFamily: fontBody,
                    fontSize: isAr ? "0.9rem" : "0.7rem",
                    letterSpacing: isAr ? 0 : "0.18em",
                    textTransform: isAr ? "none" : "uppercase",
                    color: "var(--brand-gold)",
                    background: "transparent",
                    transition: "background 0.4s, color 0.4s",
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
                  {t("Enquire About Corporate Programmes", "استفسر عن البرامج المؤسسية")}
                </button>
                <Link
                  to="/book#corporate"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    cursor: "pointer",
                    background: "var(--brand-gold)",
                    padding: "12px 32px",
                    fontFamily: fontBody,
                    fontSize: isAr ? "0.9rem" : "0.7rem",
                    letterSpacing: isAr ? 0 : "0.18em",
                    textTransform: isAr ? "none" : "uppercase",
                    color: "var(--brand-forest)",
                    textDecoration: "none",
                    transition: "background 0.4s, color 0.4s",
                    border: "1px solid var(--brand-gold)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--brand-gold)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--brand-gold)";
                    e.currentTarget.style.color = "var(--brand-forest)";
                  }}
                >
                  {t("Pay Deposit & Reserve", "ادفع العربون واحجز")}
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
        <section
          style={{
            background: "var(--brand-cream)",
            padding: "80px 24px",
          }}
        >
          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            <Reveal>
              <h2
                style={{
                  fontFamily: fontHead,
                  fontSize: isAr ? "clamp(1.6rem,4vw,2.4rem)" : "clamp(1.8rem,4vw,2.6rem)",
                  fontWeight: 400,
                  color: "var(--brand-forest)",
                  textAlign: "center",
                  marginBottom: 48,
                }}
              >
                {t("What we offer", "ما نقدمه")}
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
              {organizations.OFFERINGS.map((o, i) => {
                const content = isAr ? o.ar : o.en;
                return (
                  <Reveal key={i} delay={i * 0.08}>
                    <div
                      style={{
                        padding: "32px 28px",
                        background: "var(--brand-cream-mid)",
                        border: "1px solid var(--brand-border-subtle)",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: fontHead,
                          fontSize: "1.6rem",
                          color: "var(--brand-sage)",
                          marginBottom: 16,
                        }}
                      >
                        {o.icon}
                      </div>
                      <h3
                        style={{
                          fontFamily: fontHead,
                          fontSize: isAr ? "1.15rem" : "1.1rem",
                          fontWeight: 600,
                          color: "var(--brand-forest)",
                          marginBottom: 12,
                          lineHeight: isAr ? 1.6 : 1.3,
                        }}
                      >
                        {content.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: fontBody,
                          fontSize: isAr ? "0.9rem" : "0.85rem",
                          color: "var(--brand-forest-mid)",
                          lineHeight: isAr ? 2 : 1.7,
                        }}
                      >
                        {content.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
        <section
          style={{
            background: "var(--brand-forest)",
            padding: "80px 24px",
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
                  fontSize: isAr ? "0.82rem" : "0.65rem",
                  letterSpacing: isAr ? 0 : "0.22em",
                  textTransform: isAr ? "none" : "uppercase",
                  color: "var(--brand-gold)",
                  textAlign: "center",
                  marginBottom: 16,
                }}
              >
                {t("FAQ", "الأسئلة الشائعة")}
              </p>
              <h2
                style={{
                  fontFamily: fontHead,
                  fontSize: isAr ? "clamp(1.6rem,4vw,2.4rem)" : "clamp(1.8rem,4vw,2.6rem)",
                  fontWeight: 400,
                  color: "var(--brand-cream)",
                  textAlign: "center",
                  marginBottom: 56,
                }}
              >
                {t("Questions About Corporate Wellbeing", "أسئلة حول الرفاهية المؤسسية")}
              </h2>
            </Reveal>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              {organizations.FAQ.map((item, i) => {
                const isOpen = openFaq === i;
                const isLast = i === organizations.FAQ.length - 1;
                return (
                  <div
                    key={item.id}
                    style={{
                      borderTop: "1px solid var(--brand-forest-mid)",
                      borderBottom: isLast ? "1px solid var(--brand-forest-mid)" : "none",
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: 16,
                        padding: "24px 0",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: isAr ? "right" : "left",
                        flexDirection: isAr ? "row-reverse" : "row",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: fontHead,
                          fontSize: isAr
                            ? "clamp(1rem,2.5vw,1.15rem)"
                            : "clamp(0.95rem,2vw,1.05rem)",
                          fontWeight: 400,
                          fontStyle: isAr ? "normal" : "italic",
                          color: isOpen ? "var(--brand-gold)" : "var(--brand-cream)",
                          lineHeight: isAr ? 1.7 : 1.4,
                          transition: "color 0.3s",
                          flex: 1,
                        }}
                      >
                        {isAr ? item.ar.q : item.en.q}
                      </span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          flexShrink: 0,
                          marginTop: 4,
                          color: isOpen ? "var(--brand-gold)" : "var(--brand-sage-pale)",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.35s ease, color 0.3s",
                        }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key={"answer"}
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.35,
                            ease: "easeInOut",
                          }}
                          style={{
                            overflow: "hidden",
                          }}
                        >
                          <p
                            style={{
                              fontFamily: fontBody,
                              fontSize: isAr ? "0.95rem" : "0.88rem",
                              color: "var(--brand-sage-pale)",
                              lineHeight: isAr ? 2 : 1.8,
                              paddingBottom: 24,
                              paddingInlineEnd: 32,
                            }}
                          >
                            {isAr ? item.ar.a : item.en.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section
          style={{
            background: "var(--brand-forest)",
            padding: "72px 24px",
            textAlign: "center",
          }}
        >
          <Reveal>
            <div
              style={{
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              <h2
                style={{
                  fontFamily: fontHead,
                  fontSize: isAr ? "clamp(1.4rem,3.5vw,2rem)" : "clamp(1.6rem,3.5vw,2.2rem)",
                  fontWeight: 400,
                  color: "var(--brand-cream)",
                  marginBottom: 16,
                }}
              >
                {t("Tailored to your organisation", "مُصمَّم لمؤسستك")}
              </h2>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: isAr ? "1rem" : "0.95rem",
                  color: "var(--brand-sage-pale)",
                  lineHeight: isAr ? 2 : 1.75,
                  marginBottom: 32,
                }}
              >
                {t(
                  "Corporate programmes are scoped and priced based on team size, duration, and objectives. Reach out to start a conversation.",
                  "تُحدَّد البرامج المؤسسية وأسعارها بناءً على حجم الفريق والمدة والأهداف. تواصل معنا لبدء المحادثة.",
                )}
              </p>
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  border: "1px solid var(--brand-gold)",
                  padding: "12px 32px",
                  fontFamily: fontBody,
                  fontSize: isAr ? "0.9rem" : "0.7rem",
                  letterSpacing: isAr ? 0 : "0.18em",
                  textTransform: isAr ? "none" : "uppercase",
                  color: "var(--brand-gold)",
                  textDecoration: "none",
                  transition: "background 0.4s, color 0.4s",
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
                {t("Get in Touch", "تواصل معنا")}
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
      <AnimatePresence>
        {enquiryOpen && (
          <motion.div
            key={"enquiry-backdrop"}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={() => setEnquiryOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9e3,
              backgroundColor: "color-mix(in srgb, var(--brand-forest) 88%, transparent)",
              backdropFilter: "blur(6px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
            }}
          >
            <motion.div
              key={"enquiry-box"}
              initial={{
                opacity: 0,
                y: 32,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 24,
                scale: 0.97,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "var(--brand-forest)",
                border: "1px solid color-mix(in srgb, var(--brand-gold) 28%, transparent)",
                maxWidth: 520,
                width: "100%",
                padding: "48px 40px",
                position: "relative",
                direction: isAr ? "rtl" : "ltr",
              }}
            >
              <button
                onClick={() => setEnquiryOpen(false)}
                aria-label="Close"
                style={{
                  position: "absolute",
                  top: 18,
                  right: isAr ? "auto" : 18,
                  left: isAr ? 18 : "auto",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--brand-sage-pale)",
                  fontSize: "1.3rem",
                  lineHeight: 1,
                }}
              >
                ✕
              </button>
              {enquirySubmitted ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "24px 0",
                  }}
                >
                  <p
                    style={{
                      fontFamily: fontHead,
                      fontSize: "1.8rem",
                      fontWeight: 400,
                      fontStyle: isAr ? "normal" : "italic",
                      color: "var(--brand-cream)",
                      marginBottom: 16,
                    }}
                  >
                    {t("Thank you", "شكراً لك")}
                  </p>
                  <p
                    style={{
                      fontFamily: fontBody,
                      fontSize: "0.9rem",
                      color: "var(--brand-sage-pale)",
                      lineHeight: 1.8,
                    }}
                  >
                    {t(
                      "We've received your enquiry and will be in touch shortly.",
                      "لقد استلمنا استفساركم وسنتواصل معكم قريباً",
                    )}
                  </p>
                </div>
              ) : (
                <>
                  <p
                    style={{
                      fontFamily: fontBody,
                      fontSize: "0.65rem",
                      letterSpacing: isAr ? 0 : "0.2em",
                      textTransform: isAr ? "none" : "uppercase",
                      color: "var(--brand-gold)",
                      marginBottom: 12,
                    }}
                  >
                    {t("Corporate Enquiry", "استفسار مؤسسي")}
                  </p>
                  <h2
                    style={{
                      fontFamily: fontHead,
                      fontSize: "clamp(1.5rem,3vw,2rem)",
                      fontWeight: 400,
                      fontStyle: isAr ? "normal" : "italic",
                      color: "var(--brand-cream)",
                      marginBottom: 8,
                      lineHeight: 1.2,
                    }}
                  >
                    {t("Tell us about your organisation", "أخبرنا عن مؤسستك")}
                  </h2>
                  <p
                    style={{
                      fontFamily: fontBody,
                      fontSize: "0.85rem",
                      color: "var(--brand-sage-pale)",
                      lineHeight: 1.75,
                      marginBottom: 32,
                    }}
                  >
                    {t(
                      "Share a few details and we'll be in touch — privately and discreetly.",
                      "شاركنا بعض التفاصيل وسنتواصل معكم — بخصوصية تامة وتقدير",
                    )}
                  </p>
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setEnquirySending(true);
                      try {
                        await fetch("/api/contact", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            ...enquiryForm,
                            interest: "Corporate Programme Enquiry",
                          }),
                        });
                        setEnquirySubmitted(true);
                      } finally {
                        setEnquirySending(false);
                      }
                    }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                    }}
                  >
                    {[
                      {
                        key: "name",
                        label: t("Your name", "اسمك"),
                        type: "text",
                        required: true,
                      },
                      {
                        key: "email",
                        label: t("Email address", "البريد الإلكتروني"),
                        type: "email",
                        required: true,
                      },
                      {
                        key: "organisation",
                        label: t("Organisation", "المؤسسة"),
                        type: "text",
                        required: false,
                      },
                    ].map((field) => (
                      <div
                        key={field.key}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 6,
                        }}
                      >
                        <label
                          style={{
                            fontFamily: fontBody,
                            fontSize: "0.7rem",
                            letterSpacing: isAr ? 0 : "0.12em",
                            textTransform: isAr ? "none" : "uppercase",
                            color: "var(--brand-sage-pale)",
                          }}
                        >
                          {field.label}
                          {field.required && (
                            <span
                              style={{
                                color: "var(--brand-gold)",
                                marginInlineStart: 4,
                              }}
                            >
                              *
                            </span>
                          )}
                        </label>
                        <input
                          type={field.type}
                          required={field.required}
                          value={enquiryForm[field.key]}
                          onChange={(e) =>
                            setEnquiryForm((f) => ({
                              ...f,
                              [field.key]: e.target.value,
                            }))
                          }
                          style={{
                            background: "color-mix(in srgb, var(--brand-forest) 60%, transparent)",
                            border:
                              "1px solid color-mix(in srgb, var(--brand-gold) 25%, transparent)",
                            padding: "10px 14px",
                            fontFamily: fontBody,
                            fontSize: "0.9rem",
                            color: "var(--brand-cream)",
                            outline: "none",
                            transition: "border-color 0.3s",
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor =
                              "color-mix(in srgb, var(--brand-gold) 65%, transparent)";
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor =
                              "color-mix(in srgb, var(--brand-gold) 25%, transparent)";
                          }}
                        />
                      </div>
                    ))}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                      }}
                    >
                      <label
                        style={{
                          fontFamily: fontBody,
                          fontSize: "0.7rem",
                          letterSpacing: isAr ? 0 : "0.12em",
                          textTransform: isAr ? "none" : "uppercase",
                          color: "var(--brand-sage-pale)",
                        }}
                      >
                        {t("How can we help?", "كيف يمكننا المساعدة؟")}
                      </label>
                      <textarea
                        rows={4}
                        value={enquiryForm.message}
                        onChange={(e) =>
                          setEnquiryForm((f) => ({
                            ...f,
                            message: e.target.value,
                          }))
                        }
                        style={{
                          background: "color-mix(in srgb, var(--brand-forest) 60%, transparent)",
                          border:
                            "1px solid color-mix(in srgb, var(--brand-gold) 25%, transparent)",
                          padding: "10px 14px",
                          fontFamily: fontBody,
                          fontSize: "0.9rem",
                          color: "var(--brand-cream)",
                          outline: "none",
                          resize: "vertical",
                          transition: "border-color 0.3s",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor =
                            "color-mix(in srgb, var(--brand-gold) 65%, transparent)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor =
                            "color-mix(in srgb, var(--brand-gold) 25%, transparent)";
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={enquirySending}
                      style={{
                        marginTop: 8,
                        padding: "13px 32px",
                        cursor: enquirySending ? "default" : "pointer",
                        background: "transparent",
                        border: "1px solid var(--brand-gold)",
                        fontFamily: fontBody,
                        fontSize: "0.7rem",
                        letterSpacing: isAr ? 0 : "0.18em",
                        textTransform: isAr ? "none" : "uppercase",
                        color: "var(--brand-gold)",
                        transition: "background 0.4s, color 0.4s",
                        opacity: enquirySending ? 0.6 : 1,
                        alignSelf: isAr ? "flex-end" : "flex-start",
                      }}
                      onMouseEnter={(e) => {
                        if (!enquirySending) {
                          e.currentTarget.style.background = "var(--brand-gold)";
                          e.currentTarget.style.color = "var(--brand-forest)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--brand-gold)";
                      }}
                    >
                      {enquirySending
                        ? t("Sending…", "جارٍ الإرسال…")
                        : t("Send Enquiry", "إرسال الاستفسار")}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
