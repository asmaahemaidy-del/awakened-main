import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router";
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
  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="h-px"
        style={{
          background: "var(--brand-cream-warm)",
        }}
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
      />
    </div>
  );
}

function Field({
  label,
  labelAr,
  id,
  type = "text",
  required = false,
  textarea = false,
  value,
  onChange,
  placeholder,
}) {
  const [focused, setFocused] = useState(false);
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const baseStyle = {
    fontFamily: isAr ? "var(--font-arabic)" : "var(--font-sans)",
    background: "#FFFFFF",
    color: "#1A2B1C",
    border: `1px solid ${focused ? "#4A7A50" : "#D6CFC4"}`,
    outline: "none",
    transition: "border-color 0.25s",
    fontSize: isAr ? "1rem" : "0.92rem",
    lineHeight: 1.6,
    width: "100%",
    padding: "0.85rem 1rem",
    borderRadius: 0,
    textAlign: "start",
  };
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        style={{
          fontFamily: isAr ? "var(--font-arabic)" : "var(--font-sans)",
          fontSize: isAr ? "0.82rem" : "0.7rem",
          letterSpacing: isAr ? "0.02em" : "0.15em",
          textTransform: isAr ? "none" : "uppercase",
          color: "#2E4A32",
          fontWeight: isAr ? 600 : 500,
          display: "block",
          textAlign: "start",
        }}
      >
        {isAr ? labelAr : label}
        {required && (
          <span
            style={{
              color: "var(--brand-gold)",
            }}
          >
            {" *"}
          </span>
        )}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          required={required}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            ...baseStyle,
            resize: "vertical",
          }}
        />
      ) : (
        <input
          id={id}
          type={type}
          required={required}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={baseStyle}
        />
      )}
    </div>
  );
}

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    language: "",
    interest: "",
    message: "",
  });
  // Applied after mount so the prerendered HTML (no query string) matches the first client render.
  useEffect(() => {
    if (searchParams.get("interest") === "discovery")
      setForm((f) => ({ ...f, interest: "Discovery Call (Free)" }));
  }, [searchParams]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";
  const fontBody = isAr ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = isAr ? "var(--font-arabic)" : "var(--font-heading)";
  const set = (key) => (v) =>
    setForm((f) => ({
      ...f,
      [key]: v,
    }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  };
  const interests = [
    {
      en: "Discovery Call (Free)",
      ar: "مكالمة اكتشاف (مجانية)",
    },
    {
      en: "Personal Coaching & Sessions",
      ar: "التوجيه الشخصي والجلسات",
    },
    {
      en: "Organisational Wellbeing",
      ar: "الرفاهية المؤسسية",
    },
    {
      en: "Corporate Programmes",
      ar: "البرامج المؤسسية",
    },
    {
      en: "Retreats",
      ar: "الخلوات",
    },
    {
      en: "Events & Workshops",
      ar: "الفعاليات وورش العمل",
    },
    {
      en: "Community Membership",
      ar: "عضوية المجتمع",
    },
    {
      en: "Speaking & Partnerships",
      ar: "المحاضرات والشراكات",
    },
    {
      en: "General Inquiry",
      ar: "استفسار عام",
    },
  ];
  const labelStyle = {
    fontFamily: fontBody,
    fontSize: isAr ? "0.78rem" : "0.68rem",
    letterSpacing: isAr ? "0.02em" : "0.28em",
    textTransform: isAr ? "none" : "uppercase",
    color: "#4A7A50",
    fontWeight: isAr ? 600 : 500,
  };
  return (
    <div
      style={{
        direction: isAr ? "rtl" : "ltr",
      }}
    >
      <Seo
        path="/contact"
        title={t("Contact — Awakened", "تواصل معنا — أوايكند")}
        description={t(
          "Reach out to Awakened — founded in Qatar, serving clients worldwide virtually and through international retreats",
          "تواصل مع أوايكند — تأسسنا في قطر ونخدم العملاء حول العالم افتراضياً وعبر الخلوات الدولية.",
        )}
      />
      <section
        id="top"
        className="relative pt-44 pb-24 overflow-hidden"
        style={{
          background: "#1A2B1C",
          scrollMarginTop: "80px",
        }}
      >
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 700,
            height: 700,
            top: "50%",
            left: "60%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, #4A7A50 0%, transparent 65%)",
            filter: "blur(120px)",
            opacity: 0.12,
          }}
          animate={{
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div
          className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10"
          style={{
            direction: isAr ? "rtl" : "ltr",
          }}
        >
          <Reveal>
            <p style={labelStyle}>{t("Get in Touch", "تواصل معنا")}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className="mt-5"
              style={{
                fontFamily: fontHead,
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                color: "#F5F1EA",
                fontWeight: 600,
                lineHeight: 1.08,
                fontStyle: isAr ? "normal" : "italic",
                letterSpacing: isAr ? 0 : "-0.01em",
              }}
            >
              {lang === "ar" ? (
                "ابدأ بمحادثة"
              ) : (
                <>
                  Begin with a<br />
                  <span
                    style={{
                      color: "#A8C5A0",
                    }}
                  >
                    conversation
                  </span>
                </>
              )}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="mt-7 max-w-lg"
              style={{
                fontFamily: fontBody,
                fontSize: isAr ? "1.05rem" : "0.97rem",
                color: "#C8D8C4",
                lineHeight: isAr ? 2 : 1.85,
                fontWeight: isAr ? 500 : 400,
              }}
            >
              {t(
                "Whether for yourself, your team, or your organization, tell us a little about what you're looking for and we'll be in touch — privately and discreetly",
                "كل رحلة في أوايكند تبدأ بمحادثة واحدة خاصة. شاركنا بعض المعلومات عنك وسنتواصل معك بكل تحفظ.",
              )}
            </p>
          </Reveal>
        </div>
      </section>
      <section
        style={{
          background: "#EDE8DF",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-14">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{
              border: "1px solid #C0B8A8",
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            {[
              {
                labelEn: "Launched in",
                labelAr: "انطلقنا من",
                headEn: "Doha, Qatar",
                headAr: "الدوحة، قطر",
                bodyEn:
                  "Our home base — where Awakened was founded and where our in-person advisory practice is rooted",
                bodyAr: "مقرنا الأصلي — حيث تأسست أوايكند وتنطلق ممارستنا الاستشارية الحضورية",
              },
              {
                labelEn: "Virtual Sessions",
                labelAr: "الجلسات الافتراضية",
                headEn: "Worldwide",
                headAr: "حول العالم",
                bodyEn:
                  "Advisory sessions are available remotely to clients anywhere in the world, in English and Arabic",
                bodyAr:
                  "الجلسات الاستشارية متاحة عن بُعد لعملاء في أي مكان حول العالم، بالعربية والإنجليزية",
              },
              {
                labelEn: "Retreats",
                labelAr: "الخلوات",
                headEn: "Qatar & International",
                headAr: "قطر والعالم",
                bodyEn:
                  "Wellness retreats held at luxury venues in Qatar and internationally — we travel to you",
                bodyAr: "خلوات العافية في أماكن فاخرة داخل قطر وخارجها — نحن نصل إليك",
              },
              {
                labelEn: "Response Time",
                labelAr: "وقت الرد",
                headEn: "Within 24 hrs",
                headAr: "خلال ٢٤ ساعة",
                bodyEn: "A real person will respond personally. No automated replies, no templates",
                bodyAr: "شخص حقيقي سيرد عليك شخصياً. لا ردود آلية، لا نماذج جاهزة",
              },
            ].map((item, i) => (
              <Reveal key={item.labelEn} delay={i * 0.07}>
                <div
                  className="flex flex-col gap-3 p-7 sm:p-8 h-full"
                  style={{
                    borderInlineEnd: i < 3 ? "1px solid #C0B8A8" : "none",
                    borderBottom: "1px solid #C0B8A8",
                  }}
                >
                  <p style={labelStyle}>{t(item.labelEn, item.labelAr)}</p>
                  <p
                    style={{
                      fontFamily: fontHead,
                      fontSize: "1.1rem",
                      color: "#1A2B1C",
                      fontWeight: 600,
                      fontStyle: isAr ? "normal" : "italic",
                      lineHeight: 1.3,
                    }}
                  >
                    {t(item.headEn, item.headAr)}
                  </p>
                  <p
                    style={{
                      fontFamily: fontBody,
                      fontSize: isAr ? "0.88rem" : "0.8rem",
                      color: "#4A6B4E",
                      lineHeight: isAr ? 1.95 : 1.75,
                      fontWeight: isAr ? 500 : 400,
                    }}
                  >
                    {t(item.bodyEn, item.bodyAr)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section
        className="relative py-24"
        style={{
          background: "#FAF7F2",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div
              className="lg:col-span-4 flex flex-col gap-10"
              style={{
                direction: isAr ? "rtl" : "ltr",
              }}
            >
              <Reveal>
                <div>
                  <p style={labelStyle}>{t("Start Here", "ابدأ هنا")}</p>
                  <p
                    className="mt-5"
                    style={{
                      fontFamily: fontBody,
                      fontSize: isAr ? "1rem" : "0.92rem",
                      color: "#2E4A32",
                      lineHeight: isAr ? 2 : 1.85,
                      fontWeight: isAr ? 500 : 400,
                    }}
                  >
                    {t(
                      "Fill in the form and we will reach out to arrange a private, no-obligation conversation at a time that suits you",
                      "أكمل النموذج وسنتواصل معك لترتيب محادثة خاصة وغير ملزمة في الوقت الذي يناسبك.",
                    )}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div>
                  <p style={labelStyle}>{t("What to expect", "ما يمكن توقعه")}</p>
                  <ul
                    className="flex flex-col mt-5"
                    style={{
                      gap: "0",
                    }}
                  >
                    {[
                      {
                        en: "A personal reply — not a template",
                        ar: "رد شخصي — ليس نموذجاً جاهزاً",
                      },
                      {
                        en: "No pressure, no sales pitch",
                        ar: "لا ضغط، لا عروض مبيعات",
                      },
                      {
                        en: "Complete discretion at every step",
                        ar: "تقدير تام في كل خطوة",
                      },
                      {
                        en: "A conversation, not a transaction",
                        ar: "محادثة، ليست معاملة",
                      },
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 py-3"
                        style={{
                          borderTop: i === 0 ? "none" : "1px solid #DDD8CE",
                        }}
                      >
                        <span
                          style={{
                            color: "#3D5C42",
                            marginTop: "0.2em",
                            flexShrink: 0,
                            lineHeight: 1,
                          }}
                        >
                          —
                        </span>
                        <span
                          style={{
                            fontFamily: fontBody,
                            fontSize: isAr ? "0.92rem" : "0.83rem",
                            color: "#2E4A32",
                            lineHeight: isAr ? 1.95 : 1.7,
                            fontWeight: isAr ? 500 : 400,
                          }}
                        >
                          {t(item.en, item.ar)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div
                  className="p-5"
                  style={{
                    background: "#EDE8DF",
                    borderInlineStart: "2px solid #6B9970",
                  }}
                >
                  <p
                    style={{
                      fontFamily: fontBody,
                      fontSize: isAr ? "0.88rem" : "0.82rem",
                      color: "#2E4A32",
                      lineHeight: 1.6,
                      fontWeight: isAr ? 500 : 400,
                    }}
                  >
                    info@gotawakened.com
                  </p>
                  <p
                    className="mt-1"
                    style={{
                      fontFamily: fontBody,
                      fontSize: "0.75rem",
                      color: "#2E4A32",
                    }}
                  >
                    CR: 241070
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              {submitted ? (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  className="py-16"
                  style={{
                    direction: isAr ? "rtl" : "ltr",
                  }}
                >
                  <div
                    className="w-12 h-px mb-10"
                    style={{
                      background: "#6B9970",
                    }}
                  />
                  <h2
                    style={{
                      fontFamily: fontHead,
                      fontSize: "clamp(2rem, 3.5vw, 3rem)",
                      color: "#1A2B1C",
                      fontWeight: 600,
                      fontStyle: isAr ? "normal" : "italic",
                    }}
                  >
                    {t("Thank you", "شكراً لك")}
                  </h2>
                  <p
                    className="mt-7 max-w-md"
                    style={{
                      fontFamily: fontBody,
                      fontSize: isAr ? "1rem" : "0.95rem",
                      color: "#2E4A32",
                      lineHeight: isAr ? 2 : 1.85,
                      fontWeight: isAr ? 500 : 400,
                    }}
                  >
                    {t(
                      "Your message has been received. We will be in touch with you privately and at your convenience. All communications are treated with absolute confidentiality",
                      "تم استلام رسالتك. سنتواصل معك بشكل خاص وفي الوقت المناسب لك. جميع المراسلات تُعامَل بسرية تامة.",
                    )}
                  </p>
                  <div
                    className="w-12 h-px mt-10"
                    style={{
                      background: "#6B9970",
                    }}
                  />
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-8"
                  style={{
                    direction: isAr ? "rtl" : "ltr",
                  }}
                >
                  <Reveal delay={0.05}>
                    <div className="flex flex-col gap-5">
                      <p
                        style={{
                          fontFamily: fontBody,
                          fontSize: isAr ? "0.78rem" : "0.68rem",
                          letterSpacing: isAr ? "0.02em" : "0.25em",
                          textTransform: isAr ? "none" : "uppercase",
                          color: "#2E4A32",
                          fontWeight: isAr ? 600 : 500,
                        }}
                      >
                        {t("01 · About You", "٠١ · عنك")}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field
                          id="name"
                          label="Full Name"
                          labelAr="الاسم الكامل"
                          required
                          value={form.name}
                          onChange={set("name")}
                          placeholder={t("Your name", "اسمك")}
                        />
                        <Field
                          id="email"
                          label="Email Address"
                          labelAr="البريد الإلكتروني"
                          type="email"
                          required
                          value={form.email}
                          onChange={set("email")}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </Reveal>
                  <SageLine />
                  <Reveal delay={0.1}>
                    <div className="flex flex-col gap-5">
                      <p
                        style={{
                          fontFamily: fontBody,
                          fontSize: isAr ? "0.78rem" : "0.68rem",
                          letterSpacing: isAr ? "0.02em" : "0.25em",
                          textTransform: isAr ? "none" : "uppercase",
                          color: "#2E4A32",
                          fontWeight: isAr ? 600 : 500,
                        }}
                      >
                        {t("02 · How to Reach You", "٠٢ · كيفية التواصل")}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field
                          id="phone"
                          label="Phone / WhatsApp"
                          labelAr="الهاتف / واتساب"
                          type="tel"
                          value={form.phone}
                          onChange={set("phone")}
                          placeholder="+974 ···"
                        />
                        <div className="flex flex-col gap-2">
                          <label
                            htmlFor="language"
                            style={{
                              fontFamily: fontBody,
                              fontSize: isAr ? "0.82rem" : "0.7rem",
                              letterSpacing: isAr ? "0.02em" : "0.15em",
                              textTransform: isAr ? "none" : "uppercase",
                              color: "#2E4A32",
                              fontWeight: isAr ? 600 : 500,
                              display: "block",
                              textAlign: "start",
                            }}
                          >
                            {t("Preferred Language", "لغة التواصل المفضلة")}
                          </label>
                          <select
                            id="language"
                            value={form.language}
                            onChange={(e) => set("language")(e.target.value)}
                            style={{
                              fontFamily: fontBody,
                              background: "#FFFFFF",
                              color: form.language ? "#1A2B1C" : "#4A7A50",
                              border: "1px solid #D6CFC4",
                              outline: "none",
                              fontSize: isAr ? "1rem" : "0.92rem",
                              padding: "0.85rem 1rem",
                              borderRadius: 0,
                              width: "100%",
                              appearance: "none",
                              cursor: "pointer",
                              textAlign: "start",
                            }}
                          >
                            <option value="" disabled>
                              {t("Select language", "اختر اللغة")}
                            </option>
                            <option value="en">English</option>
                            <option value="ar">العربية</option>
                            <option value="both">{t("Both", "كلاهما")}</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                  <SageLine />
                  <Reveal delay={0.15}>
                    <div className="flex flex-col gap-5">
                      <p
                        style={{
                          fontFamily: fontBody,
                          fontSize: isAr ? "0.78rem" : "0.68rem",
                          letterSpacing: isAr ? "0.02em" : "0.25em",
                          textTransform: isAr ? "none" : "uppercase",
                          color: "#2E4A32",
                          fontWeight: isAr ? 600 : 500,
                        }}
                      >
                        {t("03 · What You're Looking For", "٠٣ · ما تبحث عنه")}
                      </p>
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="interest"
                          style={{
                            fontFamily: fontBody,
                            fontSize: isAr ? "0.82rem" : "0.7rem",
                            letterSpacing: isAr ? "0.02em" : "0.15em",
                            textTransform: isAr ? "none" : "uppercase",
                            color: "#2E4A32",
                            fontWeight: isAr ? 600 : 500,
                            display: "block",
                            textAlign: "start",
                          }}
                        >
                          {t("Area of Interest", "مجال الاهتمام")}
                        </label>
                        <select
                          id="interest"
                          value={form.interest}
                          onChange={(e) => set("interest")(e.target.value)}
                          style={{
                            fontFamily: fontBody,
                            background: "#FFFFFF",
                            color: form.interest ? "#1A2B1C" : "#4A7A50",
                            border: "1px solid #D6CFC4",
                            outline: "none",
                            fontSize: isAr ? "1rem" : "0.92rem",
                            padding: "0.85rem 1rem",
                            borderRadius: 0,
                            width: "100%",
                            appearance: "none",
                            cursor: "pointer",
                            textAlign: "start",
                          }}
                        >
                          <option value="" disabled>
                            {t("Select an area", "اختر مجالاً")}
                          </option>
                          {interests.map((i) => (
                            <option key={i.en} value={i.en}>
                              {t(i.en, i.ar)}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </Reveal>
                  <SageLine />
                  <Reveal delay={0.2}>
                    <div className="flex flex-col gap-5">
                      <p
                        style={{
                          fontFamily: fontBody,
                          fontSize: isAr ? "0.78rem" : "0.68rem",
                          letterSpacing: isAr ? "0.02em" : "0.25em",
                          textTransform: isAr ? "none" : "uppercase",
                          color: "#2E4A32",
                          fontWeight: isAr ? 600 : 500,
                        }}
                      >
                        {t("04 · Your Message", "٠٤ · رسالتك")}
                      </p>
                      <Field
                        id="message"
                        label="Anything you'd like us to know"
                        labelAr="أي شيء تود إخبارنا به"
                        textarea
                        value={form.message}
                        onChange={set("message")}
                        placeholder={t(
                          "Share anything you'd like us to know before we connect…",
                          "شاركنا أي شيء تود إخبارنا به قبل التواصل…",
                        )}
                      />
                    </div>
                  </Reveal>
                  <Reveal delay={0.25}>
                    <div className="flex flex-col gap-5">
                      <div
                        className="p-4"
                        style={{
                          background: "#EDE8DF",
                          borderInlineStart: "2px solid #6B9970",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: fontBody,
                            fontSize: isAr ? "0.85rem" : "0.78rem",
                            color: "#2E4A32",
                            lineHeight: isAr ? 1.9 : 1.7,
                            fontWeight: isAr ? 500 : 400,
                          }}
                        >
                          {t(
                            "Your inquiry is treated with absolute confidentiality. We will never share your information with any third party",
                            "استفسارك يُعامَل بسرية تامة. لن نشارك معلوماتك مع أي طرف ثالث.",
                          )}
                        </p>
                      </div>
                      <div>
                        <button
                          type="submit"
                          disabled={submitting}
                          className="inline-flex items-center justify-center px-12 py-4 transition-all duration-500"
                          style={{
                            fontFamily: fontBody,
                            color: "#FFFFFF",
                            background: submitting ? "#8AAE8E" : "#4A7A50",
                            cursor: submitting ? "not-allowed" : "pointer",
                            border: "none",
                            fontSize: isAr ? "0.88rem" : void 0,
                            letterSpacing: isAr ? "0.04em" : "0.2em",
                          }}
                          onMouseEnter={(e) => {
                            if (!submitting) {
                              e.currentTarget.style.background = "#3A6040";
                              e.currentTarget.style.boxShadow = "0 8px 30px rgba(74,122,80,0.3)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!submitting) {
                              e.currentTarget.style.background = "#4A7A50";
                              e.currentTarget.style.boxShadow = "none";
                            }
                          }}
                        >
                          <span
                            style={{
                              textTransform: isAr ? "none" : "uppercase",
                            }}
                          >
                            {submitting
                              ? t("Sending…", "جارٍ الإرسال…")
                              : t("Send Inquiry", "إرسال الاستفسار")}
                          </span>
                        </button>
                      </div>
                    </div>
                  </Reveal>
                </form>
              )}
            </div>
          </div>
          <div className="mt-24">
            <SageLine />
          </div>
        </div>
      </section>
    </div>
  );
}
