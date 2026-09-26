import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";
import { Seo } from "../components/Seo";
import { useLanguage } from "../i18n/LanguageContext";

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-60px",
  });
  return (
    <motion.div
      ref={ref}
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
          : {}
      }
      transition={{
        duration: 0.65,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

const ADVISORS = [
  {
    id: 1,
    name: "Advisor Name",
    nameAr: "اسم المستشار",
    speciality: "Speciality",
    specialityAr: "التخصص",
    bio: "Bio coming soon",
    bioAr: "السيرة الذاتية قريباً",
  },
  {
    id: 2,
    name: "Advisor Name",
    nameAr: "اسم المستشار",
    speciality: "Speciality",
    specialityAr: "التخصص",
    bio: "Bio coming soon",
    bioAr: "السيرة الذاتية قريباً",
  },
  {
    id: 3,
    name: "Advisor Name",
    nameAr: "اسم المستشار",
    speciality: "Speciality",
    specialityAr: "التخصص",
    bio: "Bio coming soon",
    bioAr: "السيرة الذاتية قريباً",
  },
  {
    id: 4,
    name: "Advisor Name",
    nameAr: "اسم المستشار",
    speciality: "Speciality",
    specialityAr: "التخصص",
    bio: "Bio coming soon",
    bioAr: "السيرة الذاتية قريباً",
  },
  {
    id: 5,
    name: "Advisor Name",
    nameAr: "اسم المستشار",
    speciality: "Speciality",
    specialityAr: "التخصص",
    bio: "Bio coming soon",
    bioAr: "السيرة الذاتية قريباً",
  },
  {
    id: 6,
    name: "Advisor Name",
    nameAr: "اسم المستشار",
    speciality: "Speciality",
    specialityAr: "التخصص",
    bio: "Bio coming soon",
    bioAr: "السيرة الذاتية قريباً",
  },
  {
    id: 7,
    name: "Advisor Name",
    nameAr: "اسم المستشار",
    speciality: "Speciality",
    specialityAr: "التخصص",
    bio: "Bio coming soon",
    bioAr: "السيرة الذاتية قريباً",
  },
  {
    id: 8,
    name: "Advisor Name",
    nameAr: "اسم المستشار",
    speciality: "Speciality",
    specialityAr: "التخصص",
    bio: "Bio coming soon",
    bioAr: "السيرة الذاتية قريباً",
  },
  {
    id: 9,
    name: "Advisor Name",
    nameAr: "اسم المستشار",
    speciality: "Speciality",
    specialityAr: "التخصص",
    bio: "Bio coming soon",
    bioAr: "السيرة الذاتية قريباً",
  },
  {
    id: 10,
    name: "Advisor Name",
    nameAr: "اسم المستشار",
    speciality: "Speciality",
    specialityAr: "التخصص",
    bio: "Bio coming soon",
    bioAr: "السيرة الذاتية قريباً",
  },
  {
    id: 11,
    name: "Advisor Name",
    nameAr: "اسم المستشار",
    speciality: "Speciality",
    specialityAr: "التخصص",
    bio: "Bio coming soon",
    bioAr: "السيرة الذاتية قريباً",
  },
  {
    id: 12,
    name: "Advisor Name",
    nameAr: "اسم المستشار",
    speciality: "Speciality",
    specialityAr: "التخصص",
    bio: "Bio coming soon",
    bioAr: "السيرة الذاتية قريباً",
  },
  {
    id: 13,
    name: "Advisor Name",
    nameAr: "اسم المستشار",
    speciality: "Speciality",
    specialityAr: "التخصص",
    bio: "Bio coming soon",
    bioAr: "السيرة الذاتية قريباً",
  },
  {
    id: 14,
    name: "Advisor Name",
    nameAr: "اسم المستشار",
    speciality: "Speciality",
    specialityAr: "التخصص",
    bio: "Bio coming soon",
    bioAr: "السيرة الذاتية قريباً",
  },
  {
    id: 15,
    name: "Advisor Name",
    nameAr: "اسم المستشار",
    speciality: "Speciality",
    specialityAr: "التخصص",
    bio: "Bio coming soon",
    bioAr: "السيرة الذاتية قريباً",
  },
];

function AdvisorCard({ advisor, index }) {
  const { t, lang } = useLanguage();
  const fontBody = lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = lang === "ar" ? "var(--font-arabic)" : "var(--font-heading)";
  return (
    <Reveal delay={index * 0.04}>
      <div
        className="flex flex-col h-full p-7"
        style={{
          background: "#FFFFFF",
          border: "1px solid #E8E2D9",
          boxShadow: "0 2px 16px rgba(26,43,28,0.04)",
        }}
      >
        <div
          className="w-8 h-px mb-5"
          style={{
            background: "#C9A84C",
          }}
        />
        <h3
          style={{
            fontFamily: fontHead,
            fontSize: "1.15rem",
            color: "#1A2B1C",
            fontWeight: 600,
            lineHeight: 1.2,
            marginBottom: "0.3rem",
          }}
        >
          {t(advisor.name, advisor.nameAr)}
        </h3>
        <p
          className="mb-4"
          style={{
            fontFamily: fontBody,
            fontSize: "0.72rem",
            color: "#6B9970",
            letterSpacing: lang === "ar" ? 0 : "0.1em",
            textTransform: lang === "ar" ? "none" : "uppercase",
          }}
        >
          {t(advisor.speciality, advisor.specialityAr)}
        </p>
        <p
          style={{
            fontFamily: fontBody,
            fontSize: "0.88rem",
            color: "#4A6B4E",
            lineHeight: 1.8,
            flex: 1,
            marginBottom: "1.5rem",
          }}
        >
          {t(advisor.bio, advisor.bioAr)}
        </p>
        <div className="flex flex-col gap-2 mt-auto">
          <Link
            to="/book#top"
            className="w-full py-3 text-center text-xs tracking-[0.18em] uppercase transition-all duration-300"
            style={{
              fontFamily: fontBody,
              background: "transparent",
              color: "#C9A84C",
              textDecoration: "none",
              display: "block",
              border: "1px solid #C9A84C",
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
  );
}

export function ExpertsPage() {
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
        path="/experts"
        title={t("Our Team — Awakened", "فريقنا — أوايكند")}
        description={t(
          "Meet the team at Awakened — advisors and the people behind the platform, committed to your wellbeing journey",
          "تعرف على فريق أوايكند — المستشارون والفريق خلف المنصة، ملتزمون برحلتك نحو العافية",
        )}
      />
      <section
        id="top"
        className="relative pt-44 pb-28 overflow-hidden"
        style={{
          background: "#1A2B1C",
          scrollMarginTop: "80px",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(107,153,112,0.12) 0%, transparent 65%)",
          }}
        />
        <div
          className="relative max-w-5xl mx-auto px-8"
          style={{
            direction: isAr ? "rtl" : "ltr",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <Reveal>
                <p
                  className="text-xs tracking-[0.3em] uppercase mb-6"
                  style={{
                    fontFamily: fontBody,
                    color: "#6B9970",
                  }}
                >
                  {t("Our Team", "فريقنا")}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1
                  style={{
                    fontFamily: fontHead,
                    fontSize: "clamp(2.8rem, 5vw, 4.6rem)",
                    color: "#F7F4EE",
                    fontWeight: 400,
                    lineHeight: 1.08,
                    letterSpacing: isAr ? 0 : "-0.01em",
                  }}
                >
                  {t(
                    <>
                      People who take
                      <br />
                      <span
                        style={{
                          color: "#A8C5A0",
                          fontStyle: "italic",
                        }}
                      >
                        this work seriously
                      </span>
                    </>,
                    <span>أشخاص يأخذون هذا العمل بجدية حقيقية</span>,
                  )}
                </h1>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="flex flex-wrap items-center gap-4 mt-10">
                  <a
                    href="#advisors"
                    className="inline-flex items-center gap-2 px-10 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300"
                    style={{
                      fontFamily: fontBody,
                      background: "#4A7A50",
                      color: "#FFFFFF",
                      textDecoration: "none",
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
                    {t("View Advisors", "عرض المستشارين")}
                  </a>
                  <Link
                    to="/contact#top"
                    className="inline-flex items-center gap-2 px-10 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300"
                    style={{
                      fontFamily: fontBody,
                      background: "transparent",
                      color: "#C9A84C",
                      textDecoration: "none",
                      border: "1px solid #C9A84C",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(201,168,76,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {t("Get in Touch", "تواصل معنا")}
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="flex flex-col gap-6 lg:pt-2">
              {[
                {
                  en: "Each advisor brings their own distinct expertise and perspective. What they share is a commitment to showing up fully for the people they work with, and a clear understanding that their role is advisory, not clinical.",
                  ar: "يحمل كل مستشار خبرته ومنظوره المميز. ما يجمعهم هو الالتزام بالحضور الكامل لمن يعملون معهم، وفهم واضح بأن دورهم استشاري لا سريري",
                },
                {
                  en: "Behind the advisors, there is a small team managing the platform — handling bookings, answering questions, and making sure the experience from first message to final session is as smooth as it should be.",
                  ar: "خلف المستشارين، فريق صغير يدير المنصة — يتعامل مع الحجوزات ويجيب على الأسئلة ويحرص على أن تكون التجربة من الرسالة الأولى إلى الجلسة الأخيرة سلسة كما ينبغي",
                },
                {
                  en: "We are founded in Qatar and built this for people here and everywhere — virtual sessions mean we can work with anyone, anywhere in the world.",
                  ar: "تأسسنا في قطر وبنينا هذا للناس هنا وفي كل مكان — الجلسات الافتراضية تعني أننا نستطيع العمل مع أي شخص في أي بقعة من العالم",
                },
              ].map((para, i) => (
                <Reveal key={i} delay={0.15 + i * 0.07}>
                  <p
                    style={{
                      fontFamily: fontBody,
                      fontSize: "0.95rem",
                      color: "#C8D8C4",
                      lineHeight: 1.85,
                    }}
                  >
                    {t(para.en, para.ar)}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-10 px-8"
        style={{
          background: "#F5F1EA",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div
              className="p-5 flex gap-4 items-start"
              style={{
                background: "#EDE8DF",
                borderLeft: "3px solid #6B9970",
              }}
            >
              <div className="flex-shrink-0 mt-0.5">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6B9970"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <p
                className="text-xs leading-relaxed"
                style={{
                  fontFamily: fontBody,
                  color: "#2E4A32",
                  lineHeight: 1.85,
                }}
              >
                {t(
                  "All sessions at Awakened are lifestyle advisory and wellbeing guidance only. Our advisors do not provide medical diagnosis, psychological therapy, or clinical treatment. If you are experiencing a medical or mental health emergency, please contact a qualified healthcare professional",
                  "جميع الجلسات في أوايكند هي استشارات لنمط الحياة وإرشاد للعافية فقط. لا يقدم مستشارونا تشخيصاً طبياً أو علاجاً نفسياً أو تدخلاً سريرياً. إذا كنت تعاني من حالة طوارئ طبية أو نفسية، يرجى التواصل مع متخصص رعاية صحية مؤهل",
                )}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <section
        id="advisors"
        className="py-20 px-8"
        style={{
          background: "var(--brand-cream-mid)",
          scrollMarginTop: "80px",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div
              className="mb-16 text-center max-w-2xl mx-auto"
              style={{
                direction: isAr ? "rtl" : "ltr",
              }}
            >
              <p
                className="text-xs tracking-[0.3em] uppercase mb-5"
                style={{
                  fontFamily: fontBody,
                  color: "var(--brand-sage-mid)",
                }}
              >
                {t("Our Team", "فريقنا")}
              </p>
              <h2
                className="mb-6"
                style={{
                  fontFamily: fontHead,
                  fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                  color: "var(--brand-forest)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                }}
              >
                {t(
                  <>
                    {"Meet Our "}
                    <span
                      style={{
                        fontStyle: "italic",
                        color: "var(--brand-sage-mid)",
                      }}
                    >
                      Advisors
                    </span>
                  </>,
                  <span>تعرّف على مستشارينا</span>,
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
                {t(
                  "Each advisor on our platform is reviewed in person before being listed. Practical lifestyle guidance, delivered with discretion.",
                  "كل مستشار على منصتنا يُراجَع شخصياً قبل إدراجه. إرشاد عملي لنمط الحياة، مُقدَّم بتقدير واحترام",
                )}
              </p>
              <div
                style={{
                  height: "1px",
                  background: "var(--brand-sage-light)",
                  opacity: 0.5,
                  marginTop: 40,
                }}
              />
            </div>
          </Reveal>
          <div id="advisor-cards" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVISORS.map((advisor, i) => (
              <AdvisorCard key={advisor.id} advisor={advisor} index={i} />
            ))}
          </div>
        </div>
      </section>
      <section
        className="py-20 px-8 text-center"
        style={{
          background: "#1A2B1C",
        }}
      >
        <Reveal>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{
              fontFamily: fontBody,
              color: "#6B9970",
            }}
          >
            {t("Not sure where to start?", "لست متأكداً من أين تبدأ؟")}
          </p>
          <h2
            style={{
              fontFamily: fontHead,
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              color: "#F7F4EE",
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            {t("We will find the right advisor for you", "سنجد لك المستشار الأنسب")}
          </h2>
          <p
            className="mt-4 max-w-md mx-auto"
            style={{
              fontFamily: fontBody,
              fontSize: "0.9rem",
              color: "#C8D8C4",
              lineHeight: 1.7,
            }}
          >
            {t(
              "Send us a message and we will personally match you with the advisor best suited to your situation",
              "أرسل لنا رسالة وسنطابقك شخصياً مع المستشار الأنسب لوضعك وأهدافك",
            )}
          </p>
          <Link
            to="/contact#top"
            className="inline-flex items-center gap-2 mt-8 px-10 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300"
            style={{
              fontFamily: fontBody,
              background: "#4A7A50",
              color: "#FFFFFF",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#3A6040";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#4A7A50";
            }}
          >
            {t("Get in Touch", "تواصل معنا")}
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
