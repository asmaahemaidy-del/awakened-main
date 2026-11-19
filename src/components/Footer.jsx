import { Link } from "react-router";
import { useLanguage } from "../i18n/LanguageContext";

// Social media URLs
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/awakenedconsultations",
  tiktok:    "https://www.tiktok.com/@gotawakened",
  snapchat:  "https://www.snapchat.com/@gotawakened",
  facebook:  "https://www.facebook.com/p/Awakened-Consultations-61591527042471/",
  threads:   "https://www.threads.com/@awakenedconsultations",
  linkedin:  "https://www.linkedin.com/company/awakened-for-consultations/",
  whatsapp:  "https://wa.me/97477106177",
};

// ─────────────────────────────────────────────────────────────────────────────
// Shared icon button styles
// ─────────────────────────────────────────────────────────────────────────────
const iconBtn = {
  base: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    backgroundColor: "transparent",
    border: "1px solid var(--brand-gold)",
    color: "var(--brand-gold)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.22s, border-color 0.22s, transform 0.22s",
    textDecoration: "none",
  },
  hover: {
    backgroundColor: "rgba(201,168,76,0.15)",
    transform: "translateY(-2px)",
    borderColor: "var(--brand-gold-light)",
  },
  leave: {
    backgroundColor: "transparent",
    transform: "translateY(0)",
    borderColor: "var(--brand-gold)",
  },
};

function SocialIcon({ href, label, children, hoverOverrides }) {
  const isLink = href !== "#";
  return (
    <a
      href={href}
      target={isLink ? "_blank" : undefined}
      rel={isLink ? "noopener noreferrer" : undefined}
      onClick={(e) => { if (!isLink) e.preventDefault(); }}
      aria-label={label}
      style={{ ...iconBtn.base, cursor: isLink ? "pointer" : "default", ...hoverOverrides?.base }}
      onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverOverrides?.hover ?? iconBtn.hover)}
      onMouseLeave={(e) => Object.assign(e.currentTarget.style, hoverOverrides?.leave ?? { ...iconBtn.leave, ...(hoverOverrides?.base ?? {}) })}
    >
      {children}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SVG icons
// ─────────────────────────────────────────────────────────────────────────────
const IgIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
const TkIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .591.045.87.132V9.38a6.33 6.33 0 0 0-.87-.06A6.34 6.34 0 0 0 3.14 15.66a6.34 6.34 0 0 0 10.82 4.48c.038-.038.074-.078.11-.118a6.29 6.29 0 0 0 1.76-4.36V8.69a8.18 8.18 0 0 0 4.76 1.52v-3.45a4.85 4.85 0 0 1-1-.07z"/>
  </svg>
);
const ScIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/>
  </svg>
);
const FbIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
);
const ThIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.263 11.097c-.03-3.486-1.92-5.586-5.111-5.586-2.13 0-3.922.963-4.863 2.499l2.062 1.438c.535-.843 1.272-1.543 2.628-1.543 1.528 0 2.318.85 2.544 2.431a15 15 0 0 0-2.236-.173c-4.125 0-6.068 1.867-6.068 4.336s1.943 3.99 4.804 3.99c3.139 0 5.013-2.115 5.781-4.735.798.361 1.348 1.204 1.348 2.47 0 3.387-3.907 5.232-7.22 5.232-4.885 0-8.077-3.207-8.077-8.424 0-6.392 4.223-10.487 9.9-10.487 3.808 0 5.69 1.671 6.97 3.914l2.108-1.475C21.44 2.078 18.331 0 13.663 0 6.227 0 1.168 5.277 1.168 12.934c0 7 4.953 11.066 10.856 11.066 4.878 0 9.809-2.846 9.809-7.716 0-2.545-1.46-4.231-3.569-5.187m-6.33 4.855c-1.077 0-2.026-.512-2.026-1.453 0-1.483 1.822-1.934 3.606-1.934.678 0 1.34.045 1.927.173-.422 1.927-1.671 3.215-3.508 3.214Z"/>
  </svg>
);
const LiIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);
const WaIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.072-.496-1.763-.73-2.887-2.518-2.975-2.635-.088-.117-.714-.949-.714-1.808 0-.859.45-1.282.61-1.458.161-.177.351-.221.468-.221.117 0 .234.001.336.006.107.005.251-.041.393.298.144.347.491 1.2.535 1.287.043.088.072.19.014.307-.058.118-.088.19-.175.293-.088.102-.185.228-.264.306-.088.087-.179.182-.077.357.102.175.454.748.974 1.211.671.597 1.236.782 1.411.869.175.088.278.073.38-.044.103-.117.438-.511.555-.686.118-.175.234-.146.395-.088.16.059 1.017.479 1.192.566.175.088.292.132.336.205.044.074.044.428-.1.833z"/>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.528 3.66 1.447 5.176L2 22l4.981-1.408A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.062c-1.637 0-3.153-.483-4.432-1.314l-.318-.206-2.96.837.844-2.885-.224-.326A8.04 8.04 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8.062-8 8.062z"/>
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────────────────────
export function Footer() {
  const year = new Date().getFullYear();
  const { lang, t } = useLanguage();
  const ar = lang === "ar";
  const fBody = ar ? "var(--font-arabic)" : "var(--font-sans)";
  const fHead = ar ? "var(--font-arabic)" : "var(--font-heading)";

  const dividerStyle = {
    border: "none",
    borderTop: "1px solid rgba(201,168,76,0.18)",
    margin: "0",
  };

  const colLabel = {
    fontFamily: fBody,
    fontSize: ar ? "0.8rem" : "0.6rem",
    letterSpacing: ar ? "0.02em" : "0.22em",
    textTransform: ar ? "none" : "uppercase",
    color: "var(--brand-gold)",
    fontWeight: 600,
    marginBottom: 14,
    display: "block",
  };

  const linkStyle = {
    fontFamily: fBody,
    fontSize: ar ? "0.8rem" : "0.73rem",
    color: "var(--brand-sage-pale)",
    textDecoration: "none",
    display: "block",
    marginBottom: 8,
    lineHeight: 1.6,
    transition: "color 0.2s",
  };

  const navLinks = [
    { to: "/about",          en: "About",              ar: "من نحن" },
    { to: "/services",       en: "Services",           ar: "الخدمات" },
    { to: "/individuals",    en: "Coaching",           ar: "التوجيه الفردي" },
    { to: "/organizations",  en: "Corporate Wellness", ar: "العافية المؤسسية" },
    { to: "/retreats",       en: "Retreats",           ar: "رحلات العافية والرفاهية" },
    { to: "/events",         en: "Events",             ar: "الفعاليات" },
    { to: "/community",      en: "Community",          ar: "المجتمع" },
    { to: "/contact",        en: "Contact",            ar: "تواصل معنا" },
  ];

  return (
    <footer
      style={{
        position: "relative",
        marginTop: "auto",
        background: "var(--brand-forest)",
        borderTop: "1px solid rgba(201,168,76,0.3)",
      }}
    >
      {/* ── Top section ─────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "56px 32px 40px",
          direction: ar ? "rtl" : "ltr",
        }}
      >
        {/* Three-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px 48px",
            alignItems: "start",
          }}
        >
          {/* Col 1 — Brand */}
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link to="/" aria-label="Awakened — Home" style={{ display: "inline-block", marginBottom: 16 }}>
              <img
                src="/images/logo-320.webp"
                srcSet="/images/logo-160.webp 160w, /images/logo-320.webp 320w"
                sizes="120px"
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                alt="Awakened"
                style={{
                  height: 72,
                  width: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 10px rgba(201,168,76,0.25))",
                }}
              />
            </Link>
            <p
              style={{
                fontFamily: fHead,
                fontSize: ar ? "0.92rem" : "0.88rem",
                fontStyle: ar ? "normal" : "italic",
                color: "var(--brand-gold-light)",
                lineHeight: 1.75,
                marginBottom: 10,
                textAlign: "center",
                maxWidth: 320,
              }}
            >
              {t(
                "Come back to yourself.\u00A0 Move forward with intention.",
                "عُد إلى ذاتك.\u00A0 وامضِ قدمًا بوعي وهدف.",
              )}
            </p>
            <p
              style={{
                fontFamily: fBody,
                fontSize: ar ? "0.76rem" : "0.6rem",
                letterSpacing: ar ? "0.01em" : "0.2em",
                textTransform: ar ? "none" : "uppercase",
                color: "var(--brand-gold)",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              {t("Founded in Qatar · Worldwide", "تأسست في قطر · نخدم العالم")}
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ ...colLabel, textAlign: "center" }}>{t("Explore", "تصفّح")}</span>
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                style={{ ...linkStyle, textAlign: "center" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-gold-light)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--brand-sage-pale)")}
              >
                {t(l.en, l.ar)}
              </Link>
            ))}
            <Link
              to="/partners"
              style={{
                display: "inline-block",
                marginTop: 10,
                padding: "7px 16px",
                border: "1px solid var(--brand-gold)",
                borderRadius: 4,
                fontFamily: fBody,
                fontSize: ar ? "0.78rem" : "0.68rem",
                letterSpacing: ar ? "0.02em" : "0.14em",
                textTransform: ar ? "none" : "uppercase",
                color: "var(--brand-gold)",
                textDecoration: "none",
                fontWeight: 600,
                textAlign: "center",
                transition: "all 0.25s ease",
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
              {t("Partner With Us", "شراكة معنا")}
            </Link>
          </div>

          {/* Col 3 — Contact + Socials */}
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ ...colLabel, textAlign: "center" }}>{t("Connect", "تواصل")}</span>
            <a
              href="mailto:info@gotawakened.com"
              style={{ ...linkStyle, letterSpacing: "0.03em", textAlign: "center" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-gold-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--brand-sage-pale)")}
            >
              info@gotawakened.com
            </a>
            <a
              href="tel:+97477106177"
              dir="ltr"
              style={{ ...linkStyle, direction: "ltr", unicodeBidi: "isolate", display: "inline-block", marginBottom: 20, textAlign: "center" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-gold-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--brand-sage-pale)")}
            >
              <bdi dir="ltr">+974 7710 6177</bdi>
            </a>

            {/* Social icons — only platforms with confirmed profiles */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
              <SocialIcon href={SOCIAL_LINKS.instagram} label="Awakened on Instagram"><IgIcon /></SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.tiktok}    label="Awakened on TikTok"><TkIcon /></SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.snapchat}  label="Awakened on Snapchat"><ScIcon /></SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.facebook}  label="Awakened on Facebook"><FbIcon /></SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.threads}   label="Awakened on Threads"><ThIcon /></SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.linkedin}  label="Awakened on LinkedIn"><LiIcon /></SocialIcon>
              <SocialIcon
                href={SOCIAL_LINKS.whatsapp}
                label="Awakened on WhatsApp"
                hoverOverrides={{
                  base: { color: "#25D366" },
                  hover: { backgroundColor: "rgba(37,211,102,0.15)", transform: "translateY(-2px)", borderColor: "#25D366" },
                  leave: { backgroundColor: "transparent", transform: "translateY(0)", borderColor: "var(--brand-gold)", color: "#25D366" },
                }}
              >
                <WaIcon />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>

      <hr style={dividerStyle} />

      {/* ── Disclaimer ──────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "20px 32px",
          direction: ar ? "rtl" : "ltr",
        }}
      >
        <p
          style={{
            fontFamily: fBody,
            fontSize: ar ? "0.75rem" : "0.68rem",
            color: "rgba(184,208,188,0.5)",
            lineHeight: ar ? 2 : 1.75,
            textAlign: "center",
          }}
        >
          {t(
            "Awakened coaching and wellbeing services are designed to support personal development, wellbeing and lifestyle goals. They are not a substitute for medical, psychiatric or emergency care. Please consult an appropriately qualified healthcare professional for medical diagnosis, treatment or urgent health concerns.",
            "صُممت خدمات التوجيه والرفاهية في أوايكند لدعم التطور الشخصي والرفاهية وأهداف نمط الحياة، ولا تُعد بديلًا عن الرعاية الطبية أو النفسية أو خدمات الطوارئ. يرجى استشارة مختص صحي مؤهل للحصول على التشخيص أو العلاج الطبي أو الرعاية العاجلة عند الحاجة.",
          )}
        </p>
      </div>

      {/* ── Policy links ──────────────────────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          padding: "14px 32px",
          textAlign: "center",
        }}
      >
        <Link
          to="/privacy"
          style={{ fontFamily: fBody, fontSize: "0.72rem", color: "rgba(184,208,188,0.6)", textDecoration: "none" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(184,208,188,0.9)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(184,208,188,0.6)")}
        >
          {t("Privacy Policy", "سياسة الخصوصية")}
        </Link>
        <span style={{ color: "rgba(184,208,188,0.3)" }}>·</span>
        <Link
          to="/terms"
          style={{ fontFamily: fBody, fontSize: "0.72rem", color: "rgba(184,208,188,0.6)", textDecoration: "none" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(184,208,188,0.9)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(184,208,188,0.6)")}
        >
          {t("Terms of Service", "شروط الخدمة")}
        </Link>
        <span style={{ color: "rgba(184,208,188,0.3)" }}>·</span>
        <Link
          to="/refund-policy"
          style={{ fontFamily: fBody, fontSize: "0.72rem", color: "rgba(184,208,188,0.6)", textDecoration: "none" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(184,208,188,0.9)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(184,208,188,0.6)")}
        >
          {t("Refund Policy", "سياسة الاسترداد")}
        </Link>
      </div>

      <hr style={dividerStyle} />

      {/* ── Bottom bar ──────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "16px 32px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
          direction: ar ? "rtl" : "ltr",
        }}
      >
        <p style={{ fontFamily: fBody, fontSize: ar ? "0.75rem" : "0.68rem", color: "rgba(184,208,188,0.5)", margin: 0 }}>
          {"© "}{year}{" Awakened · أوايكند — "}{t("All rights reserved", "جميع الحقوق محفوظة")}
        </p>
        <span
          dir="ltr"
          style={{ fontFamily: fBody, fontSize: "0.68rem", letterSpacing: "0.06em", color: "rgba(184,208,188,0.4)", direction: "ltr" }}
        >
          CR 241070 · Doha, Qatar
        </span>
      </div>
    </footer>
  );
}
