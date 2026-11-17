import { Link } from "react-router";
import { useLanguage } from "../i18n/LanguageContext";

// Social media URLs — update when official profiles are live
export const SOCIAL_LINKS = {
  instagram: "#",
  linkedin: "#",
  twitter: "#",
  tiktok: "#",
  whatsapp: "https://wa.me/97477106177",
  youtube: "#",
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
const LiIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const TkIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .591.045.87.132V9.38a6.33 6.33 0 0 0-.87-.06A6.34 6.34 0 0 0 3.14 15.66a6.34 6.34 0 0 0 10.82 4.48c.038-.038.074-.078.11-.118a6.29 6.29 0 0 0 1.76-4.36V8.69a8.18 8.18 0 0 0 4.76 1.52v-3.45a4.85 4.85 0 0 1-1-.07z"/>
  </svg>
);
const WaIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.072-.496-1.763-.73-2.887-2.518-2.975-2.635-.088-.117-.714-.949-.714-1.808 0-.859.45-1.282.61-1.458.161-.177.351-.221.468-.221.117 0 .234.001.336.006.107.005.251-.041.393.298.144.347.491 1.2.535 1.287.043.088.072.19.014.307-.058.118-.088.19-.175.293-.088.102-.185.228-.264.306-.088.087-.179.182-.077.357.102.175.454.748.974 1.211.671.597 1.236.782 1.411.869.175.088.278.073.38-.044.103-.117.438-.511.555-.686.118-.175.234-.146.395-.088.16.059 1.017.479 1.192.566.175.088.292.132.336.205.044.074.044.428-.1.833z"/>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.528 3.66 1.447 5.176L2 22l4.981-1.408A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.062c-1.637 0-3.153-.483-4.432-1.314l-.318-.206-2.96.837.844-2.885-.224-.326A8.04 8.04 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8.062-8 8.062z"/>
  </svg>
);
const YtIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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
    { to: "/about",        en: "About",           ar: "من نحن" },
    { to: "/services",     en: "Services",        ar: "الخدمات" },
    { to: "/individuals",  en: "Coaching",        ar: "التوجيه الفردي" },
    { to: "/retreats",     en: "Retreats",        ar: "الخلوات" },
    { to: "/events",       en: "Events",          ar: "الفعاليات" },
    { to: "/community",    en: "Community",       ar: "المجتمع" },
    { to: "/contact",      en: "Contact",         ar: "تواصل معنا" },
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
          <div>
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
              }}
            >
              {t("Founded in Qatar · Worldwide", "تأسست في قطر · نخدم العالم")}
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <span style={colLabel}>{t("Explore", "تصفّح")}</span>
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-gold-light)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--brand-sage-pale)")}
              >
                {t(l.en, l.ar)}
              </Link>
            ))}
          </div>

          {/* Col 3 — Contact + Socials */}
          <div>
            <span style={colLabel}>{t("Connect", "تواصل")}</span>
            <a
              href="mailto:info@gotawakened.com"
              style={{ ...linkStyle, letterSpacing: "0.03em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-gold-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--brand-sage-pale)")}
            >
              info@gotawakened.com
            </a>
            <a
              href="tel:+97477106177"
              dir="ltr"
              style={{ ...linkStyle, direction: "ltr", unicodeBidi: "isolate", display: "inline-block", marginBottom: 20 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-gold-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--brand-sage-pale)")}
            >
              <bdi dir="ltr">+974 7710 6177</bdi>
            </a>

            {/* Social icons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <SocialIcon href={SOCIAL_LINKS.instagram} label="Awakened on Instagram"><IgIcon /></SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.linkedin}  label="Awakened on LinkedIn"><LiIcon /></SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.twitter}   label="Awakened on X"><XIcon /></SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.tiktok}    label="Awakened on TikTok"><TkIcon /></SocialIcon>
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
              <SocialIcon href={SOCIAL_LINKS.youtube}   label="Awakened on YouTube"><YtIcon /></SocialIcon>
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
