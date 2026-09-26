import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";
import { individuals } from "../content/pages";
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

export function IndividualsPage() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";
  const fontBody = isAr ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = isAr ? "var(--font-arabic)" : "var(--font-heading)";
  return (
    <>
      <Seo
        path="/individuals"
        title={t("Individual Coaching & Guidance — Awakened", "التوجيه الشخصي — أوايكند")}
        description={t(
          "Whole-person coaching for individuals — self, health, career, family and movement. Based in Qatar, serving clients worldwide.",
          "توجيه شامل للأفراد — الذات والصحة والمسار المهني والأسرة والحركة. مقرنا قطر ونخدم عملاء حول العالم.",
        )}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How Awakened Works — Individual Coaching Process",
          description:
            "The five-step process Awakened uses to support individuals through whole-person coaching and lifestyle advisory.",
          url: "https://www.gotawakened.com/individuals",
          step: [
            {
              "@type": "HowToStep",
              position: 1,
              name: "Understand",
              text: "We start with a free introductory call — no pressure, no pitch. Just an honest conversation about where you are, what you are carrying, and what you are hoping to change.",
            },
            {
              "@type": "HowToStep",
              position: 2,
              name: "Assess",
              text: "The first paid session is a proper assessment. We go deeper — mapping your needs, your patterns, and the areas of your life that need the most attention right now.",
            },
            {
              "@type": "HowToStep",
              position: 3,
              name: "Match",
              text: "Based on your assessment, we match you with the advisors best suited to your situation. Not a generic recommendation — a considered pairing built around who you are.",
            },
            {
              "@type": "HowToStep",
              position: 4,
              name: "Support",
              text: "Sessions are available virtually worldwide or in person in Qatar. Pricing is shown upfront. You continue at your own pace — no hidden fees, no packages you have to commit to before you are ready.",
            },
            {
              "@type": "HowToStep",
              position: 5,
              name: "Evolve",
              text: "Results come from consistency. We ask you to commit to the process — but life happens, and rescheduling is always easy. Your progress is what matters, not the calendar.",
            },
          ],
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
                {t("For Individuals", "للأفراد")}
              </p>
              <h1
                style={{
                  fontFamily: fontHead,
                  fontSize: isAr ? "clamp(2rem,5vw,3.2rem)" : "clamp(2.2rem,5vw,3.6rem)",
                  fontWeight: 400,
                  color: "var(--brand-cream)",
                  lineHeight: isAr ? 1.5 : 1.15,
                  marginBottom: 24,
                }}
              >
                {t(
                  "Come back to yourself.\nMove forward with intention.",
                  "عد إلى نفسك.\nتقدّم بنيّة وهدف",
                )}
              </h1>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: isAr ? "1.05rem" : "1rem",
                  color: "var(--brand-sage-pale)",
                  lineHeight: isAr ? 2 : 1.75,
                  maxWidth: 560,
                  margin: "0 auto 36px",
                }}
              >
                {t(
                  "We work with you as a whole person — not a set of problems to fix. Every pathway below is connected, and your advisor sees all of them.",
                  "نعمل معك كإنسان متكامل — لا كمجموعة من المشكلات التي تحتاج إلى حل. كل مسار من المسارات أدناه مترابط، ومستشارك يرى جميعها.",
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
                {t("Book a Free Discovery Call", "احجز مكالمة اكتشاف مجانية")}
              </Link>
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
                  marginBottom: 16,
                }}
              >
                {t(
                  "Five pathways for individuals. One integrated approach.",
                  "خمسة مسارات للأفراد. نهج متكامل واحد.",
                )}
              </h2>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: isAr ? "1rem" : "0.95rem",
                  color: "var(--brand-forest-mid)",
                  textAlign: "center",
                  lineHeight: isAr ? 2 : 1.7,
                  maxWidth: 600,
                  margin: "0 auto 56px",
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
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 24,
                direction: isAr ? "rtl" : "ltr",
              }}
            >
              {individuals.PATHWAYS.map((p, i) => {
                const content = isAr ? p.ar : p.en;
                return (
                  <Reveal key={p.id} delay={i * 0.08}>
                    <a
                      href={`/individuals#${p.id}`}
                      id={p.id}
                      style={{
                        display: "block",
                        padding: "32px 28px",
                        background: "var(--brand-cream-mid)",
                        border: "1px solid var(--brand-border-subtle)",
                        textDecoration: "none",
                        transition: "border-color 0.3s, transform 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--brand-gold)";
                        e.currentTarget.style.transform = "translateY(-3px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--brand-border-subtle)";
                        e.currentTarget.style.transform = "translateY(0)";
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
                        {p.icon}
                      </div>
                      <h3
                        style={{
                          fontFamily: fontHead,
                          fontSize: isAr ? "1.15rem" : "1.1rem",
                          fontWeight: 600,
                          color: "var(--brand-forest)",
                          marginBottom: 8,
                          lineHeight: isAr ? 1.6 : 1.3,
                        }}
                      >
                        {content.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: fontBody,
                          fontSize: isAr ? "0.88rem" : "0.82rem",
                          color: "var(--brand-sage)",
                          fontStyle: isAr ? "normal" : "italic",
                          marginBottom: 12,
                          lineHeight: isAr ? 1.9 : 1.5,
                        }}
                      >
                        {content.sub}
                      </p>
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
                    </a>
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
              maxWidth: 800,
              margin: "0 auto",
            }}
          >
            <Reveal>
              <div
                style={{
                  textAlign: "center",
                  marginBottom: 56,
                }}
              >
                <h2
                  style={{
                    fontFamily: fontHead,
                    fontSize: isAr ? "clamp(1.6rem,4vw,2.4rem)" : "clamp(1.8rem,4vw,2.6rem)",
                    fontWeight: 400,
                    color: "var(--brand-cream)",
                    marginBottom: 12,
                  }}
                >
                  {t(
                    <>
                      {"How we "}
                      <span
                        style={{
                          fontStyle: "italic",
                          color: "var(--brand-gold)",
                        }}
                      >
                        work
                      </span>
                    </>,
                    <span>كيف نعمل</span>,
                  )}
                </h2>
              </div>
            </Reveal>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                direction: isAr ? "rtl" : "ltr",
              }}
            >
              {[
                {
                  step: "01",
                  en: "Understand",
                  ar: "الفهم",
                  enDesc:
                    "We start with a free introductory call — no pressure, no pitch. Just an honest conversation about where you are, what you are carrying, and what you are hoping to change.",
                  arDesc:
                    "نبدأ بمكالمة تعريفية مجانية — بلا ضغط ولا عروض. محادثة صادقة فحسب، حول وضعك وما تحمله وما تأمل في تغييره",
                },
                {
                  step: "02",
                  en: "Assess",
                  ar: "التقييم",
                  enDesc:
                    "The first paid session is a proper assessment. We go deeper — mapping your needs, your patterns, and the areas of your life that need the most attention right now.",
                  arDesc:
                    "الجلسة الأولى المدفوعة تقييم حقيقي. نتعمق أكثر — نرسم احتياجاتك وأنماطك ومجالات حياتك التي تحتاج أكبر قدر من الاهتمام الآن",
                },
                {
                  step: "03",
                  en: "Match",
                  ar: "المطابقة",
                  enDesc:
                    "Based on your assessment, we match you with the advisors best suited to your situation. Not a generic recommendation — a considered pairing built around who you are.",
                  arDesc:
                    "بناءً على تقييمك، نطابقك مع المستشارين الأنسب لوضعك. ليست توصية عامة — بل اقتران مدروس مبني على شخصيتك",
                },
                {
                  step: "04",
                  en: "Support",
                  ar: "الدعم",
                  enDesc:
                    "Sessions are available virtually worldwide or in person in Qatar. Pricing is shown upfront. You continue at your own pace — no hidden fees, no packages you have to commit to before you are ready.",
                  arDesc:
                    "الجلسات متاحة افتراضياً في كل مكان، أو حضورياً في قطر. الأسعار معلنة مسبقاً. تواصل بإيقاعك الخاص — لا رسوم خفية، ولا باقات تُلزمك قبل أن تكون مستعداً",
                },
                {
                  step: "05",
                  en: "Evolve",
                  ar: "التطور",
                  enDesc:
                    "Results come from consistency. We ask you to commit to the process — but life happens, and rescheduling is always easy. Your progress is what matters, not the calendar.",
                  arDesc:
                    "النتائج تأتي من الاستمرارية. نطلب منك الالتزام بالمسار — لكن الحياة تفرض نفسها، وإعادة الجدولة دائماً سهلة. ما يهم هو تقدمك، لا التقويم",
                },
              ].map((s, i) => (
                <Reveal key={s.step} delay={i * 0.08}>
                  <div>
                    {i > 0 && (
                      <div
                        style={{
                          height: 1,
                          background: "var(--brand-forest-mid)",
                          margin: "0 0",
                        }}
                      />
                    )}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: isAr ? "1fr 3fr 0.4fr" : "0.4fr 3fr 1fr",
                        gap: 24,
                        padding: "32px 0",
                        alignItems: "start",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: fontHead,
                          fontSize: "1.5rem",
                          fontStyle: "italic",
                          color: "var(--brand-gold)",
                          paddingTop: 2,
                          textAlign: isAr ? "right" : "left",
                        }}
                      >
                        {s.step}
                      </div>
                      <div>
                        <h3
                          style={{
                            fontFamily: fontHead,
                            fontSize: isAr ? "1.2rem" : "1.15rem",
                            fontWeight: 600,
                            color: "var(--brand-cream)",
                            marginBottom: 10,
                            lineHeight: isAr ? 1.6 : 1.3,
                          }}
                        >
                          {isAr ? s.ar : s.en}
                        </h3>
                        <p
                          style={{
                            fontFamily: fontBody,
                            fontSize: isAr ? "0.95rem" : "0.88rem",
                            color: "var(--brand-sage-mid)",
                            lineHeight: isAr ? 2 : 1.75,
                            margin: 0,
                          }}
                        >
                          {isAr ? s.arDesc : s.enDesc}
                        </p>
                      </div>
                      <div />
                    </div>
                  </div>
                </Reveal>
              ))}
              <div
                style={{
                  height: 1,
                  background: "var(--brand-forest-mid)",
                }}
              />
            </div>
          </div>
        </section>
        <section
          style={{
            background: "var(--brand-cream-warm)",
            padding: "72px 24px",
            textAlign: "center",
          }}
        >
          <Reveal>
            <h2
              style={{
                fontFamily: fontHead,
                fontSize: isAr ? "clamp(1.6rem,4vw,2.4rem)" : "clamp(1.8rem,4vw,2.6rem)",
                fontWeight: 400,
                color: "var(--brand-forest)",
                marginBottom: 16,
              }}
            >
              {t("Ready to begin?", "هل أنت مستعد للبدء؟")}
            </h2>
            <p
              style={{
                fontFamily: fontBody,
                fontSize: isAr ? "1rem" : "0.95rem",
                color: "var(--brand-forest-mid)",
                lineHeight: isAr ? 2 : 1.75,
                maxWidth: 480,
                margin: "0 auto 16px",
              }}
            >
              {t(
                "Your first call is free. No commitment, no pressure — just an honest conversation about where you are and where you want to be.",
                "مكالمتك الأولى مجانية. لا التزامات، لا ضغط — مجرد محادثة صادقة حول وضعك الحالي وأين تريد أن تكون",
              )}
            </p>
            <p
              style={{
                fontFamily: fontBody,
                fontSize: isAr ? "0.82rem" : "0.78rem",
                color: "var(--brand-forest-mid)",
                lineHeight: isAr ? 1.8 : 1.6,
                maxWidth: 480,
                margin: "0 auto 32px",
                opacity: 0.65,
                letterSpacing: isAr ? 0 : "0.04em",
              }}
            >
              {t(
                "We work with a small number of clients at a time. Availability is limited.",
                "نعمل مع عدد محدود من العملاء في وقت واحد. الأماكن المتاحة محدودة",
              )}
            </p>
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "var(--brand-forest)",
                padding: "14px 36px",
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
              {t("Book a Free Discovery Call", "احجز مكالمة اكتشاف مجانية")}
            </Link>
          </Reveal>
        </section>
      </div>
    </>
  );
}
