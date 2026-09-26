import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router";
import { services } from "../content/pages";
import { Seo } from "../components/Seo";
import { useLanguage } from "../i18n/LanguageContext";

function Reveal({ children, delay = 0, style }) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-50px",
  });
  return (
    <motion.div
      ref={ref}
      style={style}
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

export function ServicesPage() {
  const { t, lang } = useLanguage();
  const navigate = useNavigate();
  const isAr = lang === "ar";
  const fontBody = isAr ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = isAr ? "var(--font-arabic)" : "var(--font-heading)";
  return (
    <div
      style={{
        direction: isAr ? "rtl" : "ltr",
      }}
    >
      <Seo
        path="/services"
        title={t(
          "Services — Awakened | Holistic Consultancy & Wellness",
          "الخدمات — أوايكند | استشارات شاملة وعافية",
        )}
        description={t(
          "Holistic consultancy, transformational coaching, wellness experiences, retreats, and corporate wellbeing — thoughtfully designed around the whole person.",
          "استشارات شاملة وتدريب تحويلي وتجارب عافية وخلوات ورفاهية مؤسسية — مصمَّمة بعناية حول الإنسان بأكمله",
        )}
      />
      <section
        id="top"
        style={{
          background: "var(--brand-forest)",
          paddingTop: "clamp(7rem, 14vw, 11rem)",
          paddingBottom: "clamp(4rem, 8vw, 7rem)",
          position: "relative",
          overflow: "hidden",
          scrollMarginTop: 80,
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            borderRadius: "50%",
            pointerEvents: "none",
            width: 700,
            height: 700,
            top: "50%",
            left: isAr ? "20%" : "75%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, var(--brand-sage) 0%, transparent 65%)",
            filter: "blur(120px)",
            opacity: 0.1,
          }}
          animate={{
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: 900,
            margin: "0 auto",
            padding: "0 clamp(1.5rem, 5vw, 3rem)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            direction: isAr ? "rtl" : "ltr",
          }}
        >
          <Reveal>
            <p
              style={{
                fontFamily: fontBody,
                fontSize: isAr ? "0.82rem" : "0.65rem",
                letterSpacing: isAr ? "0.02em" : "0.28em",
                textTransform: isAr ? "none" : "uppercase",
                color: "var(--brand-gold)",
                fontWeight: isAr ? 600 : 400,
                marginBottom: "1.5rem",
              }}
            >
              {t("Our Services", "خدماتنا")}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              style={{
                fontFamily: fontHead,
                fontSize: "clamp(2.4rem, 6vw, 4.6rem)",
                fontWeight: 400,
                color: "var(--brand-cream)",
                lineHeight: isAr ? 1.45 : 1.1,
                marginBottom: "1.75rem",
                fontStyle: isAr ? "normal" : "italic",
              }}
            >
              {t(
                "Thoughtfully designed around the whole person",
                "مصمَّمة بعناية حول الإنسان بأكمله",
              )}
            </h1>
          </Reveal>
          <Reveal
            delay={0.2}
            style={{
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            <p
              style={{
                fontFamily: fontBody,
                fontSize: isAr ? "1.05rem" : "0.97rem",
                color: "var(--brand-sage-pale)",
                lineHeight: isAr ? 2 : 1.85,
                maxWidth: 620,
                margin: "0 auto 2.5rem",
                fontWeight: isAr ? 500 : 400,
              }}
            >
              {t(
                "Every service at Awakened is built around you — your situation, your goals, your pace. We provide lifestyle advisory and practical wellbeing guidance. Where clinical care is needed, we connect you with the right professionals.",
                "كل خدمة في أوايكند مبنية حولك — وضعك وأهدافك وإيقاعك. نقدم استشارة نمط الحياة والإرشاد العملي للعافية. حين تستدعي الحالة رعاية سريرية، نربطك بالمختصين المناسبين",
              )}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <button
              onClick={() => navigate("/contact#top")}
              style={{
                fontFamily: fontBody,
                fontSize: isAr ? "0.85rem" : "0.65rem",
                letterSpacing: isAr ? "0.02em" : "0.22em",
                textTransform: isAr ? "none" : "uppercase",
                fontWeight: isAr ? 600 : 400,
                background: "var(--brand-gold)",
                color: "var(--brand-forest)",
                border: "none",
                padding: "14px 40px",
                cursor: "pointer",
                transition: "opacity 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.88";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(201,168,76,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {t("Request a Consultation", "طلب استشارة")}
            </button>
          </Reveal>
        </div>
      </section>
      <section
        style={{
          background: "var(--brand-cream-warm)",
          padding: "clamp(4rem, 8vw, 7rem) 0",
          direction: isAr ? "rtl" : "ltr",
        }}
      >
        <div
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            padding: "0 clamp(1.5rem, 5vw, 3rem)",
          }}
        >
          {services.services.map((s, i) => (
            <Reveal
              key={s.number}
              delay={i * 0.04}
              style={{
                direction: isAr ? "rtl" : "ltr",
              }}
            >
              <div
                id={s.id}
                style={{
                  scrollMarginTop: 100,
                }}
              >
                <div
                  style={{
                    height: 1,
                    background: "var(--brand-sage-pale)",
                    marginBottom: 0,
                  }}
                />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "2.5rem 3rem",
                    padding: "clamp(3rem, 5vw, 4.5rem) 0",
                    direction: isAr ? "rtl" : "ltr",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.5rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: fontBody,
                        fontSize: "0.7rem",
                        letterSpacing: isAr ? 0 : "0.2em",
                        color: "var(--brand-sage)",
                        fontWeight: 400,
                      }}
                    >
                      {s.number}
                    </span>
                    <h2
                      style={{
                        fontFamily: fontHead,
                        fontSize: "clamp(1.5rem, 2.2vw, 2.1rem)",
                        color: "var(--brand-forest)",
                        fontWeight: 400,
                        lineHeight: 1.25,
                        fontStyle: isAr ? "normal" : "italic",
                      }}
                    >
                      {t(s.en, s.ar)}
                    </h2>
                    <button
                      onClick={() => navigate(s.bookingLink)}
                      style={{
                        fontFamily: fontBody,
                        fontSize: isAr ? "0.82rem" : "0.62rem",
                        letterSpacing: isAr ? "0.02em" : "0.2em",
                        textTransform: isAr ? "none" : "uppercase",
                        fontWeight: isAr ? 600 : 400,
                        background: "transparent",
                        color: "var(--brand-forest)",
                        border: "1px solid var(--brand-gold)",
                        padding: "12px 28px",
                        cursor: "pointer",
                        alignSelf: "flex-start",
                        transition: "background 0.3s, color 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--brand-gold)";
                        e.currentTarget.style.color = "var(--brand-forest)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--brand-forest)";
                      }}
                    >
                      {t(s.bookingEn, s.bookingAr)}
                    </button>
                    {s.learnMoreLink && (
                      <button
                        onClick={() => navigate(s.learnMoreLink)}
                        style={{
                          fontFamily: fontBody,
                          fontSize: isAr ? "0.82rem" : "0.62rem",
                          letterSpacing: isAr ? "0.02em" : "0.18em",
                          textTransform: isAr ? "none" : "uppercase",
                          fontWeight: isAr ? 600 : 400,
                          background: "transparent",
                          color: "var(--brand-sage)",
                          border: "none",
                          padding: "4px 0",
                          cursor: "pointer",
                          alignSelf: "flex-start",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          transition: "color 0.25s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "var(--brand-forest)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "var(--brand-sage)";
                        }}
                      >
                        {t(s.learnMoreEn ?? "Learn More", s.learnMoreAr ?? "اعرف المزيد")}
                        <span
                          style={{
                            display: "inline-block",
                            transform: isAr ? "scaleX(-1)" : "none",
                            fontSize: "0.9em",
                            lineHeight: 1,
                          }}
                        >
                          →
                        </span>
                      </button>
                    )}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.5rem",
                      direction: isAr ? "rtl" : "ltr",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: fontBody,
                        fontSize: isAr ? "1rem" : "0.95rem",
                        color: "var(--brand-forest-mid)",
                        lineHeight: isAr ? 2 : 1.85,
                        fontWeight: isAr ? 500 : 400,
                        textAlign: "start",
                      }}
                    >
                      {t(s.descEn, s.descAr)}
                    </p>
                    <div>
                      {s.features.map((f, fi) => (
                        <div
                          key={fi}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.75rem",
                            padding: "0.85rem 0",
                            borderTop: "1px solid var(--brand-sage-pale)",
                            flexDirection: isAr ? "row-reverse" : "row",
                            direction: isAr ? "rtl" : "ltr",
                          }}
                        >
                          <span
                            style={{
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              background: "var(--brand-gold)",
                              flexShrink: 0,
                              marginTop: 7,
                            }}
                          />
                          <p
                            style={{
                              fontFamily: fontBody,
                              fontSize: isAr ? "0.92rem" : "0.85rem",
                              color: "var(--brand-forest)",
                              lineHeight: isAr ? 1.9 : 1.75,
                              fontWeight: isAr ? 500 : 400,
                              textAlign: "start",
                            }}
                          >
                            {t(f.en, f.ar)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <div
            style={{
              height: 1,
              background: "var(--brand-sage-pale)",
            }}
          />
          <Reveal
            delay={0.1}
            style={{
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            <div
              style={{
                marginTop: "3rem",
                padding: "1.5rem 2rem",
                background: "var(--brand-overlay-card)",
                borderInlineStart: "3px solid var(--brand-sage)",
                display: "flex",
                gap: "1rem",
                flexDirection: isAr ? "row-reverse" : "row",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--brand-sage)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: isAr ? "0.78rem" : "0.65rem",
                    letterSpacing: isAr ? "0.02em" : "0.22em",
                    textTransform: isAr ? "none" : "uppercase",
                    color: "var(--brand-sage)",
                    fontWeight: isAr ? 600 : 500,
                    marginBottom: "0.5rem",
                  }}
                >
                  {t("Advisory Services Notice", "إشعار الخدمات الاستشارية")}
                </p>
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: isAr ? "0.9rem" : "0.83rem",
                    color: "var(--brand-forest-mid)",
                    lineHeight: isAr ? 1.95 : 1.8,
                    fontWeight: isAr ? 500 : 400,
                  }}
                >
                  {t(
                    "Awakened provides lifestyle advisory and wellbeing guidance only. Our services are not a substitute for medical, psychological, or clinical treatment. Where a situation requires professional clinical care, we will always recommend and, where possible, coordinate a referral to a qualified healthcare provider.",
                    "تقدم أوايكند استشارات نمط الحياة والإرشاد للعافية فقط. خدماتنا ليست بديلاً عن العلاج الطبي أو النفسي أو السريري. حين تستدعي الحالة رعاية سريرية متخصصة، سنوصي دائماً وننسق، حيثما أمكن، إحالة إلى مقدم رعاية صحية مؤهل",
                  )}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section
        style={{
          background: "var(--brand-forest)",
          padding: "clamp(5rem, 10vw, 8rem) 0",
          position: "relative",
          overflow: "hidden",
          direction: isAr ? "rtl" : "ltr",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, var(--brand-sage) 0%, transparent 70%)",
            opacity: 0.05,
          }}
        />
        <div
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            padding: "0 clamp(1.5rem, 5vw, 3rem)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Reveal
            style={{
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            <p
              style={{
                fontFamily: fontBody,
                fontSize: isAr ? "0.82rem" : "0.65rem",
                letterSpacing: isAr ? "0.02em" : "0.28em",
                textTransform: isAr ? "none" : "uppercase",
                color: "var(--brand-gold)",
                fontWeight: isAr ? 600 : 400,
                marginBottom: "1.25rem",
              }}
            >
              {t("Our Approach", "نهجنا")}
            </p>
          </Reveal>
          <Reveal
            delay={0.1}
            style={{
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            <h2
              style={{
                fontFamily: fontHead,
                fontSize: "clamp(1.9rem, 3.5vw, 3.2rem)",
                fontWeight: 400,
                color: "var(--brand-cream)",
                lineHeight: isAr ? 1.45 : 1.15,
                maxWidth: 640,
                marginBottom: "1.25rem",
                fontStyle: isAr ? "normal" : "italic",
              }}
            >
              {t("A life fully integrated — in every dimension", "حياة متكاملة من جميع النواحي")}
            </h2>
          </Reveal>
          <Reveal
            delay={0.2}
            style={{
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            <p
              style={{
                fontFamily: fontBody,
                fontSize: isAr ? "1rem" : "0.95rem",
                color: "var(--brand-sage-pale)",
                lineHeight: isAr ? 2 : 1.85,
                maxWidth: 620,
                marginBottom: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: isAr ? 500 : 400,
              }}
            >
              {t(
                "True wellbeing cannot be addressed in isolation. At Awakened, we work across all four dimensions of the human experience — mental, physical, emotional, and spiritual — because lasting change requires the whole person.",
                "لا يمكن معالجة العافية الحقيقية بمعزل عن بعضها. في أوايكند، نعمل عبر الأبعاد الأربعة للتجربة الإنسانية — النفسية والجسدية والعاطفية والروحية — لأن التغيير الدائم يتطلب الإنسان في كماله",
              )}
            </p>
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            {services.pillars.map((p, i) => (
              <Reveal
                key={p.en}
                delay={i * 0.08}
                style={{
                  direction: isAr ? "rtl" : "ltr",
                }}
              >
                <div
                  style={{
                    padding: "2rem 1.75rem",
                    background: "var(--brand-forest-overlay-card)",
                    borderTop: "2px solid var(--brand-gold)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: fontHead,
                      fontSize: "1.4rem",
                      color: "var(--brand-cream)",
                      fontWeight: 400,
                      fontStyle: isAr ? "normal" : "italic",
                    }}
                  >
                    {t(p.en, p.ar)}
                  </h3>
                  <div
                    style={{
                      width: 32,
                      height: 1,
                      background: "var(--brand-gold-border)",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: fontBody,
                      fontSize: isAr ? "0.92rem" : "0.85rem",
                      color: "var(--brand-sage-pale)",
                      lineHeight: isAr ? 1.95 : 1.8,
                      fontWeight: isAr ? 500 : 400,
                    }}
                  >
                    {t(p.descEn, p.descAr)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section
        style={{
          background: "var(--brand-cream-warm)",
          padding: "clamp(5rem, 10vw, 8rem) 0",
          direction: isAr ? "rtl" : "ltr",
        }}
      >
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            padding: "0 clamp(1.5rem, 5vw, 3rem)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Reveal
            style={{
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            <div
              style={{
                width: 48,
                height: 1,
                background: "var(--brand-gold)",
                marginBottom: "2.5rem",
              }}
            />
          </Reveal>
          <Reveal
            delay={0.1}
            style={{
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            <h2
              style={{
                fontFamily: fontHead,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 400,
                color: "var(--brand-forest)",
                lineHeight: isAr ? 1.45 : 1.1,
                marginBottom: "1.5rem",
                fontStyle: isAr ? "normal" : "italic",
              }}
            >
              {t("Ready to begin?", "هل أنت مستعد للبدء؟")}
            </h2>
          </Reveal>
          <Reveal
            delay={0.2}
            style={{
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            <p
              style={{
                fontFamily: fontBody,
                fontSize: isAr ? "1rem" : "0.95rem",
                color: "var(--brand-forest-mid)",
                lineHeight: isAr ? 2 : 1.85,
                maxWidth: 480,
                marginBottom: "2.5rem",
                fontWeight: isAr ? 500 : 400,
              }}
            >
              {t(
                "All consultations begin with a private, no-obligation conversation. Reach out and we will find the right path forward together.",
                "تبدأ جميع الاستشارات بمحادثة خاصة وغير ملزمة. تواصل معنا وسنجد معاً المسار الأنسب للمضي قدماً",
              )}
            </p>
          </Reveal>
          <Reveal
            delay={0.25}
            style={{
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            <button
              onClick={() => navigate("/contact#top")}
              style={{
                fontFamily: fontBody,
                fontSize: isAr ? "0.85rem" : "0.65rem",
                letterSpacing: isAr ? "0.02em" : "0.22em",
                textTransform: isAr ? "none" : "uppercase",
                fontWeight: isAr ? 600 : 400,
                background: "var(--brand-forest)",
                color: "var(--brand-cream)",
                border: "none",
                padding: "14px 44px",
                cursor: "pointer",
                transition: "opacity 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.85";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(26,43,28,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {t("Get in Touch", "تواصل معنا")}
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
