import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { community } from "../content/pages";
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

function CommunityJoinSection({ fontBody, fontHead, isAr, t }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    willingness: "",
    notify: false,
  });
  const [status, setStatus] = useState("idle");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          interest: "Community Membership",
          message: `Willingness to join: ${form.willingness}${form.notify ? "\n\nRequested: Notify me first for upcoming events and activities." : ""}`,
        }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  };
  return (
    <section
      style={{
        background: "var(--brand-forest)",
        padding: "80px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 600,
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
            {t(community.join.eyebrow.en, community.join.eyebrow.ar)}
          </p>
          <h2
            style={{
              fontFamily: fontHead,
              fontSize: isAr ? "clamp(1.5rem,3.5vw,2.2rem)" : "clamp(1.7rem,3.5vw,2.4rem)",
              fontWeight: 400,
              color: "var(--brand-cream)",
              textAlign: "center",
              lineHeight: isAr ? 1.5 : 1.2,
              marginBottom: 16,
            }}
          >
            {t(community.join.heading.en, community.join.heading.ar)}
          </h2>
          <p
            style={{
              fontFamily: fontBody,
              fontSize: isAr ? "0.95rem" : "0.9rem",
              color: "var(--brand-sage-pale)",
              lineHeight: isAr ? 2 : 1.75,
              textAlign: "center",
              marginBottom: 48,
            }}
          >
            {t(community.join.body.en, community.join.body.ar)}
          </p>
        </Reveal>
        {status === "done" ? (
          <Reveal>
            <div
              style={{
                textAlign: "center",
                padding: "48px 24px",
                border: "1px solid var(--brand-gold-border)",
              }}
            >
              <p
                style={{
                  fontFamily: fontHead,
                  fontSize: isAr ? "1.4rem" : "1.5rem",
                  color: "var(--brand-gold)",
                  marginBottom: 16,
                  fontWeight: 400,
                }}
              >
                {t(community.join.successHeading.en, community.join.successHeading.ar)}
              </p>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: isAr ? "0.95rem" : "0.9rem",
                  color: "var(--brand-sage-pale)",
                  lineHeight: isAr ? 2 : 1.75,
                }}
              >
                {t(community.join.successBody.en, community.join.successBody.ar)}
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: fontBody,
                    fontSize: isAr ? "0.78rem" : "0.65rem",
                    letterSpacing: isAr ? 0 : "0.16em",
                    textTransform: isAr ? "none" : "uppercase",
                    color: "var(--brand-gold)",
                    marginBottom: 8,
                  }}
                >
                  {t(community.join.labelName.en, community.join.labelName.ar)}
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      name: e.target.value,
                    }))
                  }
                  placeholder={t(
                    community.join.placeholderName.en,
                    community.join.placeholderName.ar,
                  )}
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    background: "var(--brand-forest-input)",
                    border: "1px solid var(--brand-gold-border)",
                    padding: "13px 16px",
                    fontFamily: fontBody,
                    fontSize: isAr ? "0.95rem" : "0.88rem",
                    color: "var(--brand-cream)",
                    outline: "none",
                    transition: "border-color 0.3s",
                    direction: isAr ? "rtl" : "ltr",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--brand-gold)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--brand-gold-border)")}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: fontBody,
                    fontSize: isAr ? "0.78rem" : "0.65rem",
                    letterSpacing: isAr ? 0 : "0.16em",
                    textTransform: isAr ? "none" : "uppercase",
                    color: "var(--brand-gold)",
                    marginBottom: 8,
                  }}
                >
                  {t(community.join.labelEmail.en, community.join.labelEmail.ar)}
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      email: e.target.value,
                    }))
                  }
                  placeholder="your@email.com"
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    background: "var(--brand-forest-input)",
                    border: "1px solid var(--brand-gold-border)",
                    padding: "13px 16px",
                    fontFamily: fontBody,
                    fontSize: isAr ? "0.95rem" : "0.88rem",
                    color: "var(--brand-cream)",
                    outline: "none",
                    transition: "border-color 0.3s",
                    direction: isAr ? "rtl" : "ltr",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--brand-gold)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--brand-gold-border)")}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: fontBody,
                    fontSize: isAr ? "0.78rem" : "0.65rem",
                    letterSpacing: isAr ? 0 : "0.16em",
                    textTransform: isAr ? "none" : "uppercase",
                    color: "var(--brand-gold)",
                    marginBottom: 8,
                  }}
                >
                  {t(community.join.labelQuestion.en, community.join.labelQuestion.ar)}
                </label>
                <textarea
                  required
                  value={form.willingness}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      willingness: e.target.value,
                    }))
                  }
                  placeholder={t(
                    community.join.placeholderQuestion.en,
                    community.join.placeholderQuestion.ar,
                  )}
                  rows={4}
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    background: "var(--brand-forest-input)",
                    border: "1px solid var(--brand-gold-border)",
                    padding: "13px 16px",
                    fontFamily: fontBody,
                    fontSize: isAr ? "0.95rem" : "0.88rem",
                    color: "var(--brand-cream)",
                    outline: "none",
                    transition: "border-color 0.3s",
                    direction: isAr ? "rtl" : "ltr",
                    resize: "vertical",
                    lineHeight: isAr ? 2 : 1.7,
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--brand-gold)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--brand-gold-border)")}
                />
              </div>
              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  cursor: "pointer",
                  direction: isAr ? "rtl" : "ltr",
                }}
              >
                <div
                  onClick={() =>
                    setForm((f) => ({
                      ...f,
                      notify: !f.notify,
                    }))
                  }
                  style={{
                    flexShrink: 0,
                    width: 18,
                    height: 18,
                    marginTop: 2,
                    border: `1px solid ${form.notify ? "var(--brand-gold)" : "var(--brand-gold-border)"}`,
                    background: form.notify ? "var(--brand-gold)" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.25s",
                    cursor: "pointer",
                  }}
                >
                  {form.notify && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="var(--brand-forest)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <span
                  style={{
                    fontFamily: fontBody,
                    fontSize: isAr ? "0.9rem" : "0.82rem",
                    color: "var(--brand-sage-pale)",
                    lineHeight: isAr ? 2 : 1.6,
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    setForm((f) => ({
                      ...f,
                      notify: !f.notify,
                    }))
                  }
                >
                  {t(community.join.notifyLabel.en, community.join.notifyLabel.ar)}
                </span>
              </label>
              {status === "error" && (
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: "0.82rem",
                    color: "var(--brand-error)",
                    textAlign: "center",
                  }}
                >
                  {t(community.join.errorMsg.en, community.join.errorMsg.ar)}
                </p>
              )}
              <button
                type="submit"
                disabled={status === "submitting"}
                style={{
                  alignSelf: "center",
                  background: "transparent",
                  border: "1px solid var(--brand-gold)",
                  padding: "14px 48px",
                  fontFamily: fontBody,
                  fontSize: isAr ? "0.9rem" : "0.7rem",
                  letterSpacing: isAr ? 0 : "0.18em",
                  textTransform: isAr ? "none" : "uppercase",
                  color: "var(--brand-gold)",
                  cursor: status === "submitting" ? "wait" : "pointer",
                  transition: "background 0.4s, color 0.4s",
                  opacity: status === "submitting" ? 0.6 : 1,
                }}
                onMouseEnter={(e) => {
                  if (status !== "submitting") {
                    e.currentTarget.style.background = "var(--brand-gold)";
                    e.currentTarget.style.color = "var(--brand-forest)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--brand-gold)";
                }}
              >
                {status === "submitting"
                  ? t(community.join.submittingLabel.en, community.join.submittingLabel.ar)
                  : t(community.join.submitLabel.en, community.join.submitLabel.ar)}
              </button>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function CommunityPage() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";
  const fontBody = isAr ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = isAr ? "var(--font-arabic)" : "var(--font-heading)";
  return (
    <>
      <Seo
        path="/community"
        title={t("Community — Awakened", "المجتمع — أوايكند")}
        description={t(
          "Join the Awakened community — events, workshops, and a space for people committed to living with more intention.",
          "انضم إلى مجتمع أوايكند — فعاليات وورش عمل وفضاء للأشخاص الملتزمين بالعيش بوعي أكبر.",
        )}
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
              maxWidth: 700,
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
                {t(community.hero.eyebrow.en, community.hero.eyebrow.ar)}
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
                {t(community.hero.heading.en, community.hero.heading.ar)}
              </h1>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: isAr ? "1.05rem" : "1rem",
                  color: "var(--brand-sage-pale)",
                  lineHeight: isAr ? 2 : 1.75,
                  maxWidth: 520,
                  margin: "0 auto",
                }}
              >
                {t(community.hero.body.en, community.hero.body.ar)}
              </p>
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
              maxWidth: 860,
              margin: "0 auto",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 32,
                direction: isAr ? "rtl" : "ltr",
              }}
            >
              {community.offerings.map((item, i) => (
                <Reveal key={item.id} delay={i * 0.1}>
                  <div
                    style={{
                      padding: "32px 28px",
                      background: "var(--brand-cream-mid)",
                      border: "1px solid var(--brand-border-subtle)",
                      height: "100%",
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
                      {item.icon}
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
                      {t(item.title.en, item.title.ar)}
                    </h3>
                    <p
                      style={{
                        fontFamily: fontBody,
                        fontSize: isAr ? "0.9rem" : "0.85rem",
                        color: "var(--brand-forest-mid)",
                        lineHeight: isAr ? 2 : 1.7,
                        marginBottom: 20,
                      }}
                    >
                      {t(item.desc.en, item.desc.ar)}
                    </p>
                    <a
                      href={item.link}
                      style={{
                        fontFamily: fontBody,
                        fontSize: isAr ? "0.82rem" : "0.68rem",
                        letterSpacing: isAr ? 0 : "0.15em",
                        textTransform: isAr ? "none" : "uppercase",
                        color: "var(--brand-sage)",
                        textDecoration: "none",
                        borderBottom: "1px solid var(--brand-sage)",
                        paddingBottom: 2,
                      }}
                    >
                      {t("Learn more", "اعرف المزيد")}
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section
          id="membership"
          style={{
            background: "var(--brand-forest)",
            padding: "80px 24px",
            scrollMarginTop: "80px",
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
                  fontSize: isAr ? "0.82rem" : "0.65rem",
                  letterSpacing: isAr ? 0 : "0.22em",
                  textTransform: isAr ? "none" : "uppercase",
                  color: "var(--brand-gold)",
                  textAlign: "center",
                  marginBottom: 16,
                }}
              >
                {t(community.membership.eyebrow.en, community.membership.eyebrow.ar)}
              </p>
              <h2
                style={{
                  fontFamily: fontHead,
                  fontSize: isAr ? "clamp(1.6rem,3.5vw,2.4rem)" : "clamp(1.8rem,3.5vw,2.8rem)",
                  fontWeight: 400,
                  color: "var(--brand-cream)",
                  textAlign: "center",
                  lineHeight: isAr ? 1.5 : 1.15,
                  marginBottom: 16,
                }}
              >
                {t(community.membership.heading.en, community.membership.heading.ar)}
              </h2>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: isAr ? "0.95rem" : "0.9rem",
                  color: "var(--brand-sage-pale)",
                  lineHeight: isAr ? 2 : 1.75,
                  textAlign: "center",
                  maxWidth: 560,
                  margin: "0 auto 56px",
                }}
              >
                {t(community.membership.body.en, community.membership.body.ar)}
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
              {community.membership.tiers.map((tier, ti) => {
                const badge = tier.badge;
                const priceLabel = tier.priceLabel;
                return (
                  <Reveal key={tier.id} delay={ti * 0.1}>
                    <div
                      style={{
                        border: tier.highlight
                          ? "1px solid var(--brand-gold)"
                          : "1px solid var(--brand-border-mid)",
                        background: tier.highlight
                          ? "var(--brand-gold-bg)"
                          : "var(--brand-overlay-card)",
                        padding: "36px 28px",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
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
                            padding: "3px 18px",
                            fontFamily: fontBody,
                            fontSize: isAr ? "0.7rem" : "0.56rem",
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
                          fontSize: isAr ? "0.75rem" : "0.6rem",
                          letterSpacing: isAr ? 0 : "0.22em",
                          textTransform: isAr ? "none" : "uppercase",
                          color: tier.highlight ? "var(--brand-gold)" : "var(--brand-sage-light)",
                          marginBottom: 10,
                        }}
                      >
                        {t(tier.tier.en, tier.tier.ar)}
                      </p>
                      <p
                        style={{
                          fontFamily: fontHead,
                          fontSize: isAr ? "1.3rem" : "1.4rem",
                          fontWeight: 400,
                          color: "var(--brand-cream)",
                          marginBottom: 12,
                          lineHeight: 1.2,
                        }}
                      >
                        {t(tier.name.en, tier.name.ar)}
                      </p>
                      <p
                        style={{
                          fontFamily: fontBody,
                          fontSize: isAr ? "0.88rem" : "0.82rem",
                          color: "var(--brand-sage-pale)",
                          lineHeight: isAr ? 2 : 1.7,
                          marginBottom: 24,
                          flexGrow: 1,
                        }}
                      >
                        {t(tier.desc.en, tier.desc.ar)}
                      </p>
                      {priceLabel && (
                        <p
                          style={{
                            fontFamily: fontBody,
                            fontSize: isAr ? "0.72rem" : "0.6rem",
                            letterSpacing: isAr ? 0 : "0.18em",
                            textTransform: isAr ? "none" : "uppercase",
                            color: "var(--brand-sage-pale)",
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
                          fontSize: "clamp(1.5rem,2.5vw,2rem)",
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
                          fontSize: "0.82rem",
                          color: "var(--brand-sage-pale)",
                          marginBottom: 24,
                        }}
                      >
                        {tier.priceUSD}
                      </p>
                      <a
                        href="/book#membership"
                        style={{
                          display: "block",
                          textAlign: "center",
                          padding: "12px 20px",
                          background: tier.highlight ? "var(--brand-gold)" : "transparent",
                          border: tier.highlight ? "none" : "1px solid var(--brand-gold)",
                          fontFamily: fontBody,
                          fontSize: isAr ? "0.85rem" : "0.65rem",
                          letterSpacing: isAr ? 0 : "0.18em",
                          textTransform: isAr ? "none" : "uppercase",
                          color: tier.highlight ? "var(--brand-forest)" : "var(--brand-gold)",
                          textDecoration: "none",
                          transition: tier.highlight
                            ? "opacity 0.3s"
                            : "background 0.3s, color 0.3s",
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
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
        <CommunityJoinSection fontBody={fontBody} fontHead={fontHead} isAr={isAr} t={t} />
      </div>
    </>
  );
}
