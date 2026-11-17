import { Link } from "react-router";
import { useLanguage } from "../i18n/LanguageContext";

// Social media URLs
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/awakenedconsultations",
  tiktok:    "https://www.tiktok.com/@gotawakened",
  snapchat:  "https://www.snapchat.com/@gotawakened",
  facebook:  "https://www.facebook.com/p/Awakened-Consultations-61591527042471/",
  threads:   "https://www.threads.com/@awakenedconsultations",
  whatsapp:  "https://wa.me/97477106177",
  // linkedin, twitter, youtube — add URLs when profiles are created
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
    <path d="M12 2C6.48 2 2 6.37 2 11.67c0 2.85 1.3 5.4 3.35 7.17l-.35 2.16 2.1-1.1A10.1 10.1 0 0 0 12 21.33c5.52 0 10-4.37 10-9.66C22 6.37 17.52 2 12 2zm0 17.33c-.9 0-1.77-.13-2.6-.38l-.18-.06-1.84.97.3-1.9-.16-.14A7.63 7.63 0 0 1 4.4 11.67C4.4 7.6 7.77 4.3 12 4.3s7.6 3.3 7.6 7.37c0 4.07-3.37 7.66-7.6 7.66zm3.5-5.8c-.19-.1-1.13-.56-1.3-.62-.18-.06-.3-.1-.43.1-.13.19-.5.62-.61.75-.11.13-.23.14-.42.05-.19-.1-.8-.3-1.52-.95a5.7 5.7 0 0 1-1.05-1.32c-.11-.19-.01-.29.08-.38.08-.08.19-.22.28-.32.1-.11.13-.19.19-.32.06-.13.03-.24-.02-.34-.05-.1-.43-1.04-.59-1.42-.16-.37-.32-.32-.43-.33h-.37c-.13 0-.34.05-.52.24-.18.19-.68.67-.68 1.63s.7 1.89.8 2.02c.1.13 1.37 2.1 3.32 2.95.46.2.82.32 1.1.41.46.14.88.12 1.21.07.37-.05 1.14-.47 1.3-.92.16-.45.16-.84.11-.92-.05-.09-.18-.14-.37-.23z"/>
  </svg>
);
const FbIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
);
const ThIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.028-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-.505-1.858-1.396-3.308-2.65-4.312-1.351-1.044-3.19-1.598-5.4-1.614-2.935.02-5.166.826-6.627 2.395-1.498 1.61-2.254 4.012-2.277 7.141.023 3.13.78 5.532 2.277 7.141 1.46 1.569 3.692 2.376 6.627 2.395 1.498-.012 2.78-.25 3.814-.707 1.11-.49 1.956-1.233 2.516-2.207.682-1.192 1.028-2.747 1.028-4.618v-.29H12.18v-2.26H23.6v2.065c0 2.512-.459 4.629-1.363 6.293-.895 1.645-2.19 2.906-3.85 3.748-1.59.81-3.46 1.228-5.56 1.258l-.64.003z"/>
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

            {/* Social icons — only platforms with confirmed profiles */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <SocialIcon href={SOCIAL_LINKS.instagram} label="Awakened on Instagram"><IgIcon /></SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.tiktok}    label="Awakened on TikTok"><TkIcon /></SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.snapchat}  label="Awakened on Snapchat"><ScIcon /></SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.facebook}  label="Awakened on Facebook"><FbIcon /></SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.threads}   label="Awakened on Threads"><ThIcon /></SocialIcon>
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
          {t("Terms & Conditions", "الشروط والأحكام")}
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
