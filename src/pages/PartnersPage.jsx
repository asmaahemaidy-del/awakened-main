import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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

function Field({
  id,
  label,
  labelAr,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  textarea,
}) {
  const { lang } = useLanguage();
  const fontBody = lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)";
  const inputStyle = {
    fontFamily: fontBody,
    background: "#FDFAF5",
    color: "#1A2B1C",
    border: "1px solid #C0B8A8",
    outline: "none",
    fontSize: "0.92rem",
    padding: "0.85rem 1rem",
    borderRadius: 0,
    width: "100%",
    resize: "none",
  };
  const displayLabel = lang === "ar" ? labelAr : label;
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs tracking-[0.15em] uppercase"
        style={{
          fontFamily: fontBody,
          color: "#2E4A32",
        }}
      >
        {displayLabel}
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
          value={value}
          required={required}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          style={inputStyle}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          required={required}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          style={inputStyle}
        />
      )}
    </div>
  );
}

const partners = [
  {
    number: "01",
    en: "Luxury Hospitality & Venue Partners",
    ar: "شركاء الضيافة الفاخرة والأماكن",
    descEn:
      "Our retreat and event experiences are hosted exclusively at properties that share our commitment to privacy, excellence, and intentional design. Each venue is personally vetted by the Awakened team.",
    descAr:
      "تُقام خلواتنا وفعالياتنا حصريًا في أماكن تشاركنا التزامنا بالخصوصية والتميز والتصميم المدروس. يتم التحقق من كل مكان شخصيًا من قِبَل فريق أوايكند",
    qualities: [
      {
        en: "Five-star resorts in Qatar and internationally",
        ar: "منتجعات خمس نجوم داخل قطر وخارجها",
      },
      {
        en: "Full privacy and end-to-end event management",
        ar: "خصوصية تامة وإدارة شاملة للفعاليات",
      },
      {
        en: "Aligned with the Awakened aesthetic and ethos",
        ar: "متوافقة مع هوية أوايكند وقيمها",
      },
    ],
  },
  {
    number: "02",
    en: "Specialist Practitioners",
    ar: "الممارسون المتخصصون",
    descEn:
      "For clients requiring specialist input — whether in functional medicine, physiotherapy, psychology, or sleep science — we work with a trusted network of practitioners who share our evidence-informed, whole-person approach.",
    descAr:
      "للعملاء الذين يحتاجون إلى دعم متخصص — سواء في الطب الوظيفي أو العلاج الطبيعي أو علم النفس أو علم النوم — نعمل مع شبكة موثوقة من الممارسين الذين يشاركوننا نهجنا الشامل المستند إلى الأدلة",
    qualities: [
      {
        en: "Functional medicine and integrative health",
        ar: "الطب الوظيفي والصحة التكاملية",
      },
      {
        en: "Sleep science and recovery specialists",
        ar: "متخصصو علم النوم والتعافي",
      },
      {
        en: "Psychology and emotional wellbeing support",
        ar: "دعم علم النفس والصحة العاطفية",
      },
    ],
  },
  {
    number: "03",
    en: "Nutrition & Meal Partners",
    ar: "شركاء التغذية والوجبات",
    descEn:
      "We collaborate with carefully selected nutrition providers and ready-made meal services that meet the Awakened standard — whole ingredients, mindful preparation, and alignment with each client’s personalised wellness plan.",
    descAr:
      "نتعاون مع مزودي تغذية ومطابخ وجبات جاهزة مختارين بعناية وفق معايير أوايكند — مكونات طبيعية، وإعداد واعٍ، وتوافق مع خطة العافية الشخصية لكل عميل",
    qualities: [
      {
        en: "Whole-food, nutrient-dense menus",
        ar: "قوائم طعام غنية بالمغذيات من مكونات طبيعية",
      },
      {
        en: "Customised to individual dietary needs",
        ar: "مخصصة وفق الاحتياجات الغذائية الفردية",
      },
      {
        en: "Delivered with discretion and care",
        ar: "تُسلَّم بتحفظ واهتمام",
      },
    ],
  },
  {
    number: "04",
    en: "Corporate & Organisational Partners",
    ar: "الشركاء المؤسسيون والتنظيميون",
    descEn:
      "We partner with forward-thinking organisations in Qatar and globally to deliver bespoke corporate wellbeing programmes, leadership retreats, and long-term wellness strategies for their teams.",
    descAr:
      "نتشارك مع مؤسسات رائدة في قطر وعالمياً لتقديم برامج عافية مؤسسية مخصصة، وخلوات قيادية، واستراتيجيات عافية طويلة الأمد لفرقهم",
    qualities: [
      {
        en: "Tailored wellbeing programmes for leadership teams",
        ar: "برامج عافية مخصصة لفرق القيادة",
      },
      {
        en: "Confidential and professionally managed",
        ar: "سرية وتُدار باحترافية",
      },
      {
        en: "Measurable outcomes and ongoing support",
        ar: "نتائج قابلة للقياس ودعم مستمر",
      },
    ],
  },
];

const partnerTypes = [
  {
    en: "Nutrition & Meal Services",
    ar: "خدمات التغذية والوجبات",
  },
  {
    en: "Luxury Hospitality & Venues",
    ar: "الضيافة الفاخرة والأماكن",
  },
  {
    en: "Specialist Practitioner",
    ar: "ممارس متخصص",
  },
  {
    en: "Corporate & Organisational",
    ar: "مؤسسي وتنظيمي",
  },
  {
    en: "Other",
    ar: "أخرى",
  },
];

function PartnerCard({ number, en, ar, descEn, descAr, qualities, delay = 0 }) {
  const { t, lang } = useLanguage();
  const fontBody = lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = lang === "ar" ? "var(--font-arabic)" : "var(--font-heading)";
  return (
    <Reveal delay={delay}>
      <div>
        <SageLine />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-14">
          <div className="lg:col-span-1">
            <p
              className="text-xs tracking-[0.2em]"
              style={{
                fontFamily: fontBody,
                color: "#3D6B44",
              }}
            >
              {number}
            </p>
          </div>
          <div className="lg:col-span-3 flex flex-col items-center text-center">
            <p
              style={{
                fontFamily: fontHead,
                fontSize: "clamp(1.3rem, 2vw, 1.75rem)",
                color: "#1A2B1C",
                lineHeight: 1.25,
                fontWeight: lang === "ar" ? 600 : 400,
              }}
            >
              {t(en, ar)}
            </p>
          </div>
          <div className="lg:col-span-8 flex flex-col items-center text-center">
            <BiBlock
              en={descEn}
              ar={descAr}
              size="0.95rem"
              enColor="#2E4A32"
              arColor="#4A6B4E"
              lineHeight={1.85}
            />
            <div className="mt-8 flex flex-col gap-4 w-full">
              {qualities.map((q, i) => (
                <div
                  key={i}
                  className="py-2 text-center"
                  style={{
                    borderTop: "1px solid #D6E0D8",
                  }}
                >
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: fontBody,
                      color: "#2E4A32",
                    }}
                  >
                    {t(q.en, q.ar)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function PartnersPage() {
  const [form, setForm] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { t, lang } = useLanguage();
  const fontBody = lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)";
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
  return (
    <div
      style={{
        direction: lang === "ar" ? "rtl" : "ltr",
      }}
    >
      <Seo
        path="/partners"
        title={t("Trusted Partners — Awakened", "الشركاء الموثوقون — أوايكند")}
        description={t(
          "Awakened works with a curated network of trusted partners in nutrition, hospitality, specialist health, and corporate wellbeing — founded in Qatar, operating across the globe",
          "تعمل أوايكند مع شبكة مختارة من الشركاء الموثوقين في التغذية والضيافة والصحة المتخصصة ورفاهية المؤسسات.",
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
          className="absolute rounded-full pointer-events-none w-[600px] h-[600px] -top-32 -right-32 opacity-[0.12]"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, #A8C5A0 0%, #6B9970 50%, transparent 70%)",
            filter: "blur(90px)",
          }}
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.12, 0.18, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="max-w-4xl mx-auto px-8 relative flex flex-col items-center text-center">
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
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{
                fontFamily: fontBody,
                color: "#2E4A32",
              }}
            >
              {t("Our Network", "شبكتنا")}
            </p>
            <h1
              style={{
                fontFamily: lang === "ar" ? "var(--font-arabic)" : "var(--font-heading)",
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                color: "#1A2B1C",
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              {t("Trusted Partners", "شركاؤنا الموثوقون")}
            </h1>
          </motion.div>
          <motion.div
            className="mt-10 max-w-2xl"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            <BiBlock
              en="Every partner in the Awakened network is selected with the same rigour we apply to our clients' wellbeing — aligned in values, exceptional in quality, and committed to absolute discretion."
              ar="كل شريك في شبكة أوايكند مختار بنفس الدقة التي نطبقها على عافية عملائنا — متوافق في القيم، متميز في الجودة، وملتزم بالسرية التامة."
              size="1.05rem"
              enColor="#2E4A32"
              arColor="#4A6B4E"
              lineHeight={1.85}
            />
          </motion.div>
          <motion.div
            className="mt-10"
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
              delay: 0.5,
              ease: "easeOut",
            }}
          >
            <button
              onClick={() => {
                const el = document.getElementById("partner-enquiry");
                if (el)
                  el.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
                background: "var(--brand-forest)",
                border: "1px solid var(--brand-forest)",
                padding: "14px 40px",
                fontFamily: lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)",
                fontSize: lang === "ar" ? "0.9rem" : "0.7rem",
                letterSpacing: lang === "ar" ? 0 : "0.2em",
                textTransform: lang === "ar" ? "none" : "uppercase",
                color: "var(--brand-cream-warm)",
                transition: "background 0.4s, color 0.4s, border-color 0.4s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--brand-forest)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--brand-forest)";
                e.currentTarget.style.color = "var(--brand-cream-warm)";
              }}
            >
              {t("Partner With Us", "انضم إلى شبكتنا")}
            </button>
          </motion.div>
        </div>
      </section>
      <section
        className="py-16 px-8"
        style={{
          background: "#EDE8DF",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p
              className="text-xs tracking-[0.3em] uppercase text-center mb-8"
              style={{
                fontFamily: fontBody,
                color: "#2E4A32",
              }}
            >
              {t("Our Partners", "شركاؤنا")}
            </p>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
            {Array.from({
              length: 8,
            }).map((_, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div
                  className="flex items-center justify-center aspect-[3/2] transition-all duration-300"
                  style={{
                    background: "#FAF7F2",
                    border: "1px solid #D6CFC4",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#A8C5A0";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(107,153,112,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#D6CFC4";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <p
                    className="text-xs tracking-[0.15em] uppercase text-center px-3"
                    style={{
                      fontFamily: "var(--font-sans)",
                      color: "#4A7A50",
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
        className="relative py-20"
        style={{
          background: "#F5F1EA",
        }}
      >
        <div className="max-w-7xl mx-auto px-8">
          {partners.map((p, i) => (
            <PartnerCard key={p.number} {...p} delay={i * 0.05} />
          ))}
          <SageLine className="mt-4" />
        </div>
      </section>
      <section
        id="partner-enquiry"
        className="relative py-28 overflow-hidden"
        style={{
          background: "#EDE8DF",
          scrollMarginTop: "80px",
        }}
      >
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, #6B9970 0%, transparent 70%)",
          }}
        />
        <div className="max-w-5xl mx-auto px-8 relative">
          <div className="flex flex-col items-center text-center mb-16">
            <Reveal>
              <div
                className="w-8 h-px mb-8"
                style={{
                  background: "#6B9970",
                }}
              />
            </Reveal>
            <Reveal delay={0.05}>
              <p
                className="text-xs tracking-[0.25em] uppercase mb-4"
                style={{
                  fontFamily: fontBody,
                  color: "#2E4A32",
                }}
              >
                {t("Partner With Us", "انضم إلى شبكتنا")}
              </p>
              <h2
                style={{
                  fontFamily: lang === "ar" ? "var(--font-arabic)" : "var(--font-heading)",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  color: "#1A2B1C",
                  fontWeight: 400,
                  lineHeight: 1.15,
                }}
              >
                {t("Become a Partner", "كن شريكًا")}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 max-w-xl">
                <BiBlock
                  en="If your organisation shares our commitment to excellence, privacy, and genuine wellbeing transformation, we welcome a conversation. Complete the form and a member of our team will be in touch."
                  ar="إذا كانت مؤسستك تشاركنا التزامنا بالتميز والخصوصية والتحول الحقيقي في العافية، فنرحب بالتواصل. أكمل النموذج وسيتواصل معك أحد أعضاء فريقنا."
                  size="0.9rem"
                  enColor="#2E4A32"
                  arColor="#4A6B4E"
                  lineHeight={1.85}
                />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-col items-center gap-4">
                <p
                  className="text-xs tracking-[0.2em] uppercase"
                  style={{
                    fontFamily: fontBody,
                    color: "#2E4A32",
                  }}
                >
                  {t("What We Look For", "ما نبحث عنه")}
                </p>
                <div className="flex flex-col gap-3 w-full max-w-sm">
                  {[
                    {
                      en: "Alignment in values and quality standards",
                      ar: "التوافق في القيم ومعايير الجودة",
                    },
                    {
                      en: "Commitment to client privacy and discretion",
                      ar: "الالتزام بخصوصية العميل والتحفظ",
                    },
                    {
                      en: "Excellence in your field",
                      ar: "التميز في مجالك",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="py-2 text-center"
                      style={{
                        borderTop: "1px solid #D6E0D8",
                      }}
                    >
                      <p
                        className="text-sm"
                        style={{
                          fontFamily: fontBody,
                          color: "#2E4A32",
                        }}
                      >
                        {t(item.en, item.ar)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
          <div className="max-w-2xl mx-auto">
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
                className="py-12 flex flex-col items-center text-center"
              >
                <div
                  className="w-12 h-px mb-10"
                  style={{
                    background: "#6B9970",
                  }}
                />
                <p
                  style={{
                    fontFamily: lang === "ar" ? "var(--font-arabic)" : "var(--font-heading)",
                    fontSize: "clamp(2rem, 3vw, 2.8rem)",
                    color: "#1A2B1C",
                    fontStyle: lang === "ar" ? "normal" : "italic",
                    fontWeight: 400,
                  }}
                >
                  {t("Thank you", "شكراً لك")}
                </p>
                <div className="mt-8">
                  <BiBlock
                    en="Your partnership enquiry has been received. A member of our team will review your submission and be in touch with you directly."
                    ar="تم استلام استفسار الشراكة. سيراجع أحد أعضاء فريقنا طلبك ويتواصل معك مباشرة."
                    size="0.95rem"
                    enColor="#2E4A32"
                    arColor="#4A6B4E"
                  />
                </div>
                <div
                  className="w-12 h-px mt-10"
                  style={{
                    background: "#6B9970",
                  }}
                />
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                <Reveal delay={0.05}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field
                      id="p-name"
                      label="Your Name"
                      labelAr="اسمك"
                      required
                      value={form.name}
                      onChange={set("name")}
                      placeholder={t("Full name", "الاسم الكامل")}
                    />
                    <Field
                      id="p-org"
                      label="Organisation / Practice"
                      labelAr="المؤسسة / الممارسة"
                      required
                      value={form.organisation}
                      onChange={set("organisation")}
                      placeholder={t("Company or practice name", "اسم الشركة أو الممارسة")}
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field
                      id="p-email"
                      label="Email Address"
                      labelAr="البريد الإلكتروني"
                      type="email"
                      required
                      value={form.email}
                      onChange={set("email")}
                      placeholder="your@email.com"
                    />
                    <Field
                      id="p-phone"
                      label="Phone / WhatsApp"
                      labelAr="الهاتف / واتساب"
                      type="tel"
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="+974 ···"
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="p-type"
                      className="text-xs tracking-[0.15em] uppercase"
                      style={{
                        fontFamily: fontBody,
                        color: "#2E4A32",
                      }}
                    >
                      {t("Partnership Category", "فئة الشراكة")}{" "}
                      <span
                        style={{
                          color: "var(--brand-gold)",
                        }}
                      >
                        *
                      </span>
                    </label>
                    <select
                      id="p-type"
                      required
                      value={form.type}
                      onChange={(e) => set("type")(e.target.value)}
                      style={{
                        fontFamily: fontBody,
                        background: "#FDFAF5",
                        color: form.type ? "#1A2B1C" : "#4A7A50",
                        border: "1px solid #C0B8A8",
                        outline: "none",
                        fontSize: "0.92rem",
                        padding: "0.85rem 1rem",
                        borderRadius: 0,
                        width: "100%",
                        appearance: "none",
                        cursor: "pointer",
                      }}
                    >
                      <option value="" disabled>
                        {t("Select a category", "اختر فئة")}
                      </option>
                      {partnerTypes.map((pt) => (
                        <option key={pt.en} value={pt.en}>
                          {t(pt.en, pt.ar)}
                        </option>
                      ))}
                    </select>
                  </div>
                </Reveal>
                <Reveal delay={0.2}>
                  <Field
                    id="p-message"
                    label="Tell Us About Your Organisation"
                    labelAr="أخبرنا عن مؤسستك"
                    textarea
                    required
                    value={form.message}
                    onChange={set("message")}
                    placeholder={t(
                      "Briefly describe your services, values, and how you see a potential collaboration with Awakened…",
                      "صف بإيجاز خدماتك وقيمك وكيف ترى تعاونًا محتملًا مع أوايكند…",
                    )}
                  />
                </Reveal>
                <Reveal delay={0.25}>
                  <div
                    className="p-4"
                    style={{
                      background: "rgba(255,255,255,0.5)",
                      borderLeft: "2px solid #6B9970",
                    }}
                  >
                    <BiBlock
                      en="All partnership enquiries are reviewed personally and treated with complete confidentiality"
                      ar="تُراجَع جميع استفسارات الشراكة بشكل شخصي وتُعامَل بسرية تامة"
                      size="0.8rem"
                      enColor="#2E4A32"
                      arColor="#4A6B4E"
                      lineHeight={1.7}
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center px-12 py-4 transition-all duration-500 self-start"
                    style={{
                      fontFamily: fontBody,
                      color: "#FFFFFF",
                      background: submitting ? "#8AAE8E" : "#4A7A50",
                      cursor: submitting ? "not-allowed" : "pointer",
                      border: "none",
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
                    <span className="text-xs tracking-[0.2em] uppercase">
                      {submitting
                        ? t("Sending…", "جارٍ الإرسال…")
                        : t("Submit Partnership Enquiry", "إرسال استفسار الشراكة")}
                    </span>
                  </button>
                </Reveal>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
