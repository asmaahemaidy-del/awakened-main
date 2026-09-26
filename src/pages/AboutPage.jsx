import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";
import { about } from "../content/pages";
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
        className="h-px"
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
          background: "var(--brand-sage)",
        }}
      />
    </div>
  );
}

export function AboutPage() {
  const { t, lang } = useLanguage();
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
        path="/about"
        title={t(about.meta.title, about.meta.titleAr)}
        description={t(about.meta.description, about.meta.descriptionAr)}
      />
      <section
        id="top"
        className="relative pt-44 pb-28 overflow-hidden"
        style={{
          background: "var(--brand-cream-warm)",
          scrollMarginTop: "80px",
        }}
      >
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 640,
            height: 640,
            top: -160,
            right: -160,
            background:
              "radial-gradient(circle at 40% 40%, var(--brand-sage-light) 0%, var(--brand-sage) 50%, transparent 70%)",
            filter: "blur(90px)",
            opacity: 0.16,
          }}
          animate={{
            y: [0, -22, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-8 flex flex-col items-center text-center">
          <Reveal>
            <p
              className="text-xs tracking-[0.32em] uppercase mb-1"
              style={{
                fontFamily: fontBody,
                color: "var(--brand-gold-dark)",
              }}
            >
              {t(about.hero.eyebrow.en, about.hero.eyebrow.ar)}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className="mt-5 mb-8"
              style={{
                fontFamily: fontHead,
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                color: "var(--brand-forest)",
                fontWeight: 400,
                letterSpacing: isAr ? 0 : "-0.01em",
                lineHeight: 1.05,
                fontStyle: isAr ? "normal" : "italic",
              }}
            >
              {isAr ? (
                <span
                  style={{
                    whiteSpace: "pre-line",
                  }}
                >
                  {about.hero.headingLine1.ar}
                </span>
              ) : (
                <>
                  {about.hero.headingLine1.en}
                  <br />
                  <span
                    style={{
                      whiteSpace: "pre-line",
                      color: "var(--brand-sage-mid)",
                    }}
                  >
                    {about.hero.headingLine2.en}
                  </span>
                </>
              )}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="mb-12 max-w-2xl"
              style={{
                fontFamily: fontBody,
                fontSize: "1rem",
                color: "var(--brand-forest-mid)",
                lineHeight: 1.8,
              }}
            >
              {t(about.hero.body.en, about.hero.body.ar)}
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/experts"
                className="inline-flex items-center justify-center text-center px-10 py-4 transition-all duration-500"
                style={{
                  fontFamily: fontBody,
                  color: "var(--brand-cream)",
                  background: "var(--brand-sage-mid)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--brand-forest)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(74,122,80,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--brand-sage-mid)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span className="text-xs tracking-[0.2em] uppercase">
                  {t(about.hero.ctaPrimary.en, about.hero.ctaPrimary.ar)}
                </span>
              </Link>
              <Link
                to="/contact#top"
                className="inline-flex items-center justify-center text-center px-10 py-4 transition-all duration-500"
                style={{
                  fontFamily: fontBody,
                  color: "var(--brand-sage-mid)",
                  background: "transparent",
                  border: "1px solid var(--brand-sage-mid)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--brand-sage-mid)";
                  e.currentTarget.style.color = "var(--brand-cream)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--brand-sage-mid)";
                }}
              >
                <span className="text-xs tracking-[0.2em] uppercase">
                  {t(about.hero.ctaSecondary.en, about.hero.ctaSecondary.ar)}
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <section
        style={{
          background: "var(--brand-cream)",
          padding: "72px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            textAlign: "center",
            direction: isAr ? "rtl" : "ltr",
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
              {t(about.positioning.eyebrow.en, about.positioning.eyebrow.ar)}
            </p>
            <h2
              style={{
                fontFamily: fontHead,
                fontSize: isAr ? "clamp(1.6rem,4vw,2.4rem)" : "clamp(1.8rem,4vw,2.6rem)",
                fontWeight: 400,
                color: "var(--brand-forest)",
                lineHeight: isAr ? 1.5 : 1.2,
                marginBottom: 20,
                fontStyle: isAr ? "normal" : "italic",
              }}
            >
              {t(about.positioning.heading.en, about.positioning.heading.ar)}
            </h2>
            <p
              style={{
                fontFamily: fontBody,
                fontSize: isAr ? "1rem" : "0.95rem",
                color: "var(--brand-forest-mid)",
                lineHeight: isAr ? 2.1 : 1.8,
                marginBottom: 16,
              }}
            >
              {t(about.positioning.body1.en, about.positioning.body1.ar)}
            </p>
            <p
              style={{
                fontFamily: fontBody,
                fontSize: isAr ? "1rem" : "0.95rem",
                color: "var(--brand-forest-mid)",
                lineHeight: isAr ? 2.1 : 1.8,
              }}
            >
              {t(about.positioning.body2.en, about.positioning.body2.ar)}
            </p>
          </Reveal>
        </div>
      </section>
      <section
        className="relative py-28 overflow-hidden"
        style={{
          background: "var(--brand-forest)",
        }}
      >
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 500,
            height: 500,
            top: "50%",
            left: "10%",
            transform: "translateY(-50%)",
            background: "radial-gradient(circle, var(--brand-sage-mid) 0%, transparent 70%)",
            filter: "blur(100px)",
            opacity: 0.12,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <Reveal>
                <p
                  className="text-xs tracking-[0.3em] uppercase mb-6"
                  style={{
                    fontFamily: fontBody,
                    color: "var(--brand-sage)",
                  }}
                >
                  {t(about.problem.eyebrow.en, about.problem.eyebrow.ar)}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2
                  style={{
                    fontFamily: fontHead,
                    fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                    color: "var(--brand-cream)",
                    fontWeight: 600,
                    lineHeight: 1.15,
                  }}
                >
                  {isAr ? (
                    <span
                      style={{
                        whiteSpace: "pre-line",
                      }}
                    >
                      {about.problem.headingLine1.ar}
                    </span>
                  ) : (
                    <>
                      {about.problem.headingLine1.en}
                      <br />
                      <span
                        style={{
                          whiteSpace: "pre-line",
                          color: "var(--brand-sage-light)",
                          fontStyle: "italic",
                        }}
                      >
                        {about.problem.headingLine2.en}
                      </span>
                    </>
                  )}
                </h2>
              </Reveal>
            </div>
            <div className="flex flex-col gap-6 pt-2">
              {about.problem.paragraphs.map((para, i) => (
                <Reveal key={para.id} delay={0.1 + i * 0.07}>
                  <p
                    style={{
                      fontFamily: fontBody,
                      fontSize: "0.95rem",
                      color: "var(--brand-sage-pale)",
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
        className="relative py-28"
        style={{
          background: "var(--brand-cream-warm)",
        }}
      >
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <Reveal>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-1"
                style={{
                  fontFamily: fontBody,
                  color: "var(--brand-sage-mid)",
                }}
              >
                {t(about.solution.eyebrow.en, about.solution.eyebrow.ar)}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="mt-5"
                style={{
                  fontFamily: fontHead,
                  fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                  color: "var(--brand-forest)",
                  fontWeight: 600,
                  lineHeight: 1.15,
                }}
              >
                {isAr ? (
                  <span
                    style={{
                      whiteSpace: "pre-line",
                    }}
                  >
                    {about.solution.headingLine1.ar}
                  </span>
                ) : (
                  <>
                    {about.solution.headingLine1.en}
                    <br />
                    <span
                      style={{
                        whiteSpace: "pre-line",
                        color: "var(--brand-sage-mid)",
                      }}
                    >
                      {about.solution.headingLine2.en}
                    </span>
                  </>
                )}
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {about.solution.cards.map((card, i) => (
              <Reveal key={card.id} delay={i * 0.08}>
                <div
                  className="flex flex-col h-full p-8"
                  style={{
                    background: "var(--brand-cream)",
                    border: "1px solid var(--brand-border-subtle)",
                  }}
                >
                  <p
                    className="text-xs tracking-[0.2em] uppercase mb-4"
                    style={{
                      fontFamily: fontBody,
                      color: "var(--brand-sage)",
                    }}
                  >
                    {t(card.label.en, card.label.ar)}
                  </p>
                  <p
                    style={{
                      fontFamily: fontBody,
                      fontSize: "0.9rem",
                      color: "var(--brand-forest-mid)",
                      lineHeight: 1.85,
                    }}
                  >
                    {t(card.body.en, card.body.ar)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section
        className="relative py-28 overflow-hidden"
        style={{
          background: "var(--brand-forest)",
        }}
      >
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 600,
            height: 600,
            top: "50%",
            right: "-10%",
            transform: "translateY(-50%)",
            background: "radial-gradient(circle, var(--brand-sage-mid) 0%, transparent 70%)",
            filter: "blur(110px)",
            opacity: 0.12,
          }}
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <Reveal>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-1"
                style={{
                  fontFamily: fontBody,
                  color: "var(--brand-sage)",
                }}
              >
                {t(about.dimensions.eyebrow.en, about.dimensions.eyebrow.ar)}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="mt-5 mb-6"
                style={{
                  fontFamily: fontHead,
                  fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                  color: "var(--brand-cream)",
                  fontWeight: 600,
                  lineHeight: 1.15,
                }}
              >
                {isAr ? (
                  <span
                    style={{
                      whiteSpace: "pre-line",
                    }}
                  >
                    {about.dimensions.headingLine1.ar}
                  </span>
                ) : (
                  <>
                    {about.dimensions.headingLine1.en}
                    <br />
                    <span
                      style={{
                        whiteSpace: "pre-line",
                        color: "var(--brand-sage-light)",
                        fontStyle: "italic",
                      }}
                    >
                      {about.dimensions.headingLine2.en}
                    </span>
                  </>
                )}
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p
                className="max-w-2xl"
                style={{
                  fontFamily: fontBody,
                  fontSize: "0.95rem",
                  color: "var(--brand-sage-pale)",
                  lineHeight: 1.85,
                }}
              >
                {t(about.dimensions.body.en, about.dimensions.body.ar)}
              </p>
            </Reveal>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-px"
            style={{
              border: "1px solid var(--brand-border-mid)",
              background: "var(--brand-border-mid)",
            }}
          >
            {about.dimensions.items.map((dim, i) => (
              <Reveal key={dim.id} delay={i * 0.08}>
                <div
                  className="flex flex-col p-10"
                  style={{
                    background: "var(--brand-forest)",
                  }}
                >
                  <div className="flex items-baseline gap-4 mb-5">
                    <span
                      className="text-xs tracking-[0.2em]"
                      style={{
                        whiteSpace: "pre-line",
                        fontFamily: fontBody,
                        color: "var(--brand-sage-mid)",
                      }}
                    >
                      {dim.number}
                    </span>
                    <h3
                      style={{
                        fontFamily: fontHead,
                        fontSize: "1.5rem",
                        color: "var(--brand-cream)",
                        fontWeight: 600,
                        fontStyle: isAr ? "normal" : "italic",
                      }}
                    >
                      {t(dim.en, dim.ar)}
                    </h3>
                    {!isAr && (
                      <span
                        className="text-xs"
                        style={{
                          whiteSpace: "pre-line",
                          fontFamily: "var(--font-arabic)",
                          color: "var(--brand-sage-mid)",
                          fontWeight: 600,
                        }}
                      >
                        {dim.ar}
                      </span>
                    )}
                  </div>
                  <div
                    className="w-8 h-px mb-5"
                    style={{
                      background: "var(--brand-border-mid)",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: fontBody,
                      fontSize: "0.9rem",
                      color: "var(--brand-sage-pale)",
                      lineHeight: 1.85,
                    }}
                  >
                    {t(dim.descEn, dim.descAr)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.35}>
            <p
              className="mt-10 text-center text-sm"
              style={{
                fontFamily: fontBody,
                color: "var(--brand-sage)",
                lineHeight: 1.8,
              }}
            >
              {t(about.dimensions.footer.en, about.dimensions.footer.ar)}
            </p>
          </Reveal>
        </div>
      </section>
      <section
        className="relative py-28 overflow-hidden"
        style={{
          background: "var(--brand-cream-warm)",
        }}
      >
        <div className="max-w-3xl mx-auto px-8 flex flex-col items-center text-center">
          <Reveal>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-1"
              style={{
                fontFamily: fontBody,
                color: "var(--brand-sage-mid)",
              }}
            >
              {t(about.standards.eyebrow.en, about.standards.eyebrow.ar)}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="mt-5 mb-10"
              style={{
                fontFamily: fontHead,
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                color: "var(--brand-forest)",
                fontWeight: 600,
                lineHeight: 1.15,
              }}
            >
              {isAr ? (
                <span
                  style={{
                    whiteSpace: "pre-line",
                  }}
                >
                  {about.standards.headingLine1.ar}
                </span>
              ) : (
                <>
                  {about.standards.headingLine1.en}
                  <br />
                  <span
                    style={{
                      whiteSpace: "pre-line",
                      color: "var(--brand-sage-mid)",
                    }}
                  >
                    {about.standards.headingLine2.en}
                  </span>
                </>
              )}
            </h2>
          </Reveal>
          <div className="flex flex-col gap-6">
            {about.standards.paragraphs.map((para, i) => (
              <Reveal key={para.id} delay={0.1 + i * 0.06}>
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: "0.95rem",
                    color: "var(--brand-forest-mid)",
                    lineHeight: 1.85,
                  }}
                >
                  {t(para.en, para.ar)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section
        className="relative py-28"
        style={{
          background: "var(--brand-cream)",
        }}
      >
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <Reveal>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-1"
                style={{
                  fontFamily: fontBody,
                  color: "var(--brand-sage-mid)",
                }}
              >
                {t(about.beliefs.eyebrow.en, about.beliefs.eyebrow.ar)}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="mt-5"
                style={{
                  fontFamily: fontHead,
                  fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                  color: "var(--brand-forest)",
                  fontWeight: 600,
                  lineHeight: 1.15,
                }}
              >
                {isAr ? (
                  <span
                    style={{
                      whiteSpace: "pre-line",
                    }}
                  >
                    {about.beliefs.headingLine1.ar}
                  </span>
                ) : (
                  <>
                    {about.beliefs.headingLine1.en}
                    <br />
                    <span
                      style={{
                        whiteSpace: "pre-line",
                        color: "var(--brand-sage-mid)",
                      }}
                    >
                      {about.beliefs.headingLine2.en}
                    </span>
                  </>
                )}
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {about.beliefs.items.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.07}>
                <div className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-5 h-px"
                    style={{
                      background: "var(--brand-sage)",
                      marginTop: "0.65rem",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: fontBody,
                      fontSize: "0.95rem",
                      color: "var(--brand-forest-mid)",
                      lineHeight: 1.85,
                    }}
                  >
                    {t(item.en, item.ar)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section
        className="relative py-28"
        style={{
          background: "var(--brand-cream-warm)",
        }}
      >
        <div className="max-w-4xl mx-auto px-8 flex flex-col items-center text-center">
          <Reveal>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-1"
              style={{
                fontFamily: fontBody,
                color: "var(--brand-sage-mid)",
              }}
            >
              {t(about.values.eyebrow.en, about.values.eyebrow.ar)}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="mt-5 mb-16"
              style={{
                fontFamily: fontHead,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "var(--brand-forest)",
                fontWeight: 600,
                lineHeight: 1.1,
              }}
            >
              {t(about.values.heading.en, about.values.heading.ar)}
            </h2>
          </Reveal>
          <div className="flex flex-col w-full">
            {about.values.items.map((v, i) => (
              <Reveal key={v.id} delay={i * 0.06}>
                <div>
                  <SageLine />
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12">
                    <div className="lg:col-span-5 flex flex-col items-center text-center">
                      <h3
                        style={{
                          fontFamily: fontHead,
                          fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                          color: "var(--brand-forest)",
                          fontWeight: 600,
                          lineHeight: 1.2,
                        }}
                      >
                        {t(v.en, v.ar)}
                      </h3>
                    </div>
                    <div className="lg:col-span-7 flex flex-col items-center text-center">
                      <p
                        style={{
                          fontFamily: fontBody,
                          fontSize: "0.95rem",
                          color: "var(--brand-forest-mid)",
                          lineHeight: 1.85,
                        }}
                      >
                        {t(v.descEn, v.descAr)}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
            <SageLine />
          </div>
        </div>
      </section>
      <section
        className="relative py-36 overflow-hidden"
        style={{
          background: "var(--brand-cream)",
        }}
      >
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 500,
            height: 500,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, var(--brand-sage-light) 0%, transparent 70%)",
            filter: "blur(80px)",
            opacity: 0.18,
          }}
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-8 flex flex-col items-center text-center">
          <Reveal>
            <div
              className="w-16 h-px mb-12"
              style={{
                background: "var(--brand-sage)",
              }}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-8"
              style={{
                fontFamily: fontBody,
                color: "var(--brand-sage-mid)",
              }}
            >
              {t(about.philosophy.eyebrow.en, about.philosophy.eyebrow.ar)}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <blockquote
              className="mb-12"
              style={{
                fontFamily: fontHead,
                fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                color: "var(--brand-forest)",
                fontWeight: 400,
                fontStyle: isAr ? "normal" : "italic",
                lineHeight: 1.45,
              }}
            >
              {t(about.philosophy.quote.en, about.philosophy.quote.ar)}
            </blockquote>
          </Reveal>
          <Reveal delay={0.4}>
            <div
              className="w-16 h-px"
              style={{
                background: "var(--brand-sage)",
              }}
            />
          </Reveal>
        </div>
      </section>
      <section
        className="relative py-28"
        style={{
          background: "var(--brand-cream-warm)",
        }}
      >
        <div className="max-w-3xl mx-auto px-8 flex flex-col items-center text-center">
          <Reveal>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-1"
              style={{
                fontFamily: fontBody,
                color: "var(--brand-sage-mid)",
              }}
            >
              {t(about.privacy.eyebrow.en, about.privacy.eyebrow.ar)}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="mt-5 mb-8"
              style={{
                fontFamily: fontHead,
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                color: "var(--brand-forest)",
                fontWeight: 600,
                lineHeight: 1.15,
              }}
            >
              {isAr ? (
                <span
                  style={{
                    whiteSpace: "pre-line",
                  }}
                >
                  {about.privacy.headingLine1.ar}
                </span>
              ) : (
                <>
                  {about.privacy.headingLine1.en}{" "}
                  <span
                    style={{
                      whiteSpace: "pre-line",
                      color: "var(--brand-sage-mid)",
                    }}
                  >
                    {about.privacy.headingLine2.en}
                  </span>
                </>
              )}
            </h2>
          </Reveal>
          <div className="flex flex-col gap-5">
            {about.privacy.paragraphs.map((para, i) => (
              <Reveal key={para.id} delay={0.1 + i * 0.05}>
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: "0.95rem",
                    color: "var(--brand-forest-mid)",
                    lineHeight: 1.85,
                  }}
                >
                  {t(para.en, para.ar)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section
        className="relative py-28 overflow-hidden"
        style={{
          background: "var(--brand-forest)",
        }}
      >
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 600,
            height: 600,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, var(--brand-sage-mid) 0%, transparent 70%)",
            filter: "blur(100px)",
            opacity: 0.14,
          }}
          animate={{
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-8 flex flex-col items-center text-center">
          <Reveal>
            <div
              className="w-12 h-px mb-10"
              style={{
                background: "var(--brand-sage)",
              }}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="mb-6"
              style={{
                fontFamily: fontHead,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "var(--brand-cream)",
                fontWeight: 600,
                fontStyle: isAr ? "normal" : "italic",
                lineHeight: 1.1,
              }}
            >
              {isAr ? (
                <span
                  style={{
                    whiteSpace: "pre-line",
                  }}
                >
                  {about.cta.headingLine1.ar}
                </span>
              ) : (
                <>
                  {about.cta.headingLine1.en}
                  <br />
                  {about.cta.headingLine2.en}
                </>
              )}
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p
              className="mb-10 max-w-lg"
              style={{
                fontFamily: fontBody,
                fontSize: "0.95rem",
                color: "var(--brand-sage-pale)",
                lineHeight: 1.85,
              }}
            >
              {t(about.cta.body.en, about.cta.body.ar)}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact#top"
                className="inline-flex items-center justify-center text-center px-12 py-4 transition-all duration-500"
                style={{
                  fontFamily: fontBody,
                  color: "var(--brand-cream)",
                  background: "var(--brand-sage-mid)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--brand-forest-mid)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(74,122,80,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--brand-sage-mid)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span className="text-xs tracking-[0.2em] uppercase">
                  {t(about.cta.ctaPrimary.en, about.cta.ctaPrimary.ar)}
                </span>
              </Link>
              <Link
                to="/experts"
                className="inline-flex items-center justify-center text-center px-12 py-4 transition-all duration-500"
                style={{
                  fontFamily: fontBody,
                  color: "var(--brand-sage-light)",
                  background: "transparent",
                  border: "1px solid var(--brand-sage-mid)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--brand-sage-light)";
                  e.currentTarget.style.color = "var(--brand-cream)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--brand-sage-mid)";
                  e.currentTarget.style.color = "var(--brand-sage-light)";
                }}
              >
                <span className="text-xs tracking-[0.2em] uppercase">
                  {t(about.cta.ctaSecondary.en, about.cta.ctaSecondary.ar)}
                </span>
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.38}>
            <p
              className="mt-10 text-xs"
              style={{
                whiteSpace: "pre-line",
                fontFamily: fontBody,
                color: "var(--brand-sage)",
                letterSpacing: "0.05em",
              }}
            >
              {about.cta.email}
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
