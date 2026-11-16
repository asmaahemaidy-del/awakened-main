import { Link } from "react-router";
import { useLanguage } from "../i18n/LanguageContext";

// Social media URLs — easily updated once official profiles are provided
export const SOCIAL_LINKS = {
  instagram: "#",
  linkedin: "#",
  twitter: "#",
  tiktok: "#",
  whatsapp: "https://wa.me/97477106177",
  youtube: "#",
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";
  const fontBody = isAr ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = isAr ? "var(--font-arabic)" : "var(--font-heading)";
  return (
    <footer
      style={{
        position: "relative",
        marginTop: "auto",
        background: "var(--brand-forest)",
        borderTop: "2px solid var(--brand-gold)",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "64px 24px 44px",
          direction: isAr ? "rtl" : "ltr",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
            marginBottom: 36,
          }}
        >
          <Link to="/" aria-label="Awakened — Home">
            <img
              src="/images/logo-320.webp"
              srcSet="/images/logo-160.webp 160w, /images/logo-320.webp 320w"
              sizes="144px"
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
              alt="Awakened for Consultations"
              style={{
                height: 96,
                width: "auto",
                objectFit: "contain",
                objectPosition: "center",
                filter: "drop-shadow(0 0 12px rgba(201,168,76,0.3))",
                display: "block",
              }}
            />
          </Link>
          <p
            style={{
              fontFamily: fontBody,
              fontSize: isAr ? "0.78rem" : "0.62rem",
              letterSpacing: isAr ? "0.02em" : "0.28em",
              textTransform: isAr ? "none" : "uppercase",
              color: "var(--brand-gold)",
              fontWeight: isAr ? 500 : 400,
              lineHeight: 1.6,
              textAlign: "center",
            }}
          >
            {t("Awakened for Consultations", "أوايكند للإستشارات")}
          </p>
          <p
            style={{
              fontFamily: fontBody,
              fontSize: isAr ? "0.8rem" : "0.62rem",
              letterSpacing: isAr ? "0.02em" : "0.22em",
              textTransform: isAr ? "none" : "uppercase",
              color: "var(--brand-gold)",
              fontWeight: isAr ? 500 : 400,
              textAlign: "center",
            }}
          >
            {t("A private space for meaningful transformation", "فضاء خاص للتحول الحقيقي")}
          </p>
          <p
            style={{
              fontFamily: fontHead,
              fontSize: isAr ? "0.95rem" : "0.9rem",
              fontStyle: isAr ? "normal" : "italic",
              color: "var(--brand-gold-light)",
              fontWeight: isAr ? 500 : 400,
              lineHeight: 2,
              textAlign: "center",
              marginTop: 4,
            }}
          >
            {t(
              "Come back to yourself.  Move forward with intention.",
              "عُد إلى ذاتك.  وامضِ قدمًا بوعي وهدف.",
            )}
          </p>
          <p
            style={{
              fontFamily: fontBody,
              fontSize: isAr ? "0.82rem" : "0.74rem",
              color: "var(--brand-sage-pale)",
              textAlign: "center",
              fontStyle: isAr ? "normal" : "italic",
              lineHeight: isAr ? 1.9 : 1.6,
            }}
          >
            {t(
              "Because your life doesn't happen in separate pieces.",
              "لأن حياتك لا تسير في أجزاء منفصلة.",
            )}
          </p>
          <p
            style={{
              fontFamily: fontBody,
              fontSize: isAr ? "0.78rem" : "0.62rem",
              letterSpacing: isAr ? "0.02em" : "0.22em",
              textTransform: isAr ? "none" : "uppercase",
              color: "var(--brand-gold)",
              fontWeight: isAr ? 500 : 400,
              textAlign: "center",
            }}
          >
            {t(
              "Founded in Qatar · Serving Clients Worldwide",
              "تأسست في قطر · نخدم عملاء حول العالم",
            )}
          </p>
        </div>
        <div
          style={{
            marginBottom: 32,
            padding: 16,
            background: "var(--brand-overlay-card)",
            borderLeft: isAr ? "none" : "2px solid var(--brand-sage)",
            borderRight: isAr ? "2px solid var(--brand-sage)" : "none",
          }}
        >
          <p
            style={{
              fontFamily: fontBody,
              fontSize: isAr ? "0.82rem" : "0.72rem",
              color: "var(--brand-sage-pale)",
              lineHeight: isAr ? 1.95 : 1.75,
            }}
          >
            {t(
              "Awakened coaching and wellbeing services are designed to support personal development, wellbeing and lifestyle goals. They are not a substitute for medical, psychiatric or emergency care. Please consult an appropriately qualified healthcare professional for medical diagnosis, treatment or urgent health concerns.",
              "صُممت خدمات التوجيه والرفاهية في أوايكند لدعم التطور الشخصي والرفاهية وأهداف نمط الحياة، ولا تُعد بديلًا عن الرعاية الطبية أو النفسية أو خدمات الطوارئ. يرجى استشارة مختص صحي مؤهل للحصول على التشخيص أو العلاج الطبي أو الرعاية العاجلة عند الحاجة.",
            )}
          </p>
        </div>
        <address
          style={{
            fontStyle: "normal",
            marginBottom: 28,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            textAlign: "center",
          }}
        >
          <a
            href="mailto:info@gotawakened.com"
            style={{
              fontFamily: fontBody,
              fontSize: isAr ? "0.82rem" : "0.74rem",
              letterSpacing: "0.04em",
              color: "var(--brand-gold)",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-gold-light)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--brand-gold)")}
          >
            info@gotawakened.com
          </a>
          <a
            href="tel:+97477106177"
            dir="ltr"
            style={{
              fontFamily: fontBody,
              fontSize: isAr ? "0.82rem" : "0.74rem",
              letterSpacing: "0.04em",
              color: "var(--brand-gold)",
              textDecoration: "none",
              transition: "color 0.3s",
              direction: "ltr",
              unicodeBidi: "isolate",
              display: "inline-block",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-gold-light)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--brand-gold)")}
          >
            <bdi dir="ltr">+974 7710 6177</bdi>
          </a>
          <span
            style={{
              fontFamily: fontBody,
              fontSize: isAr ? "0.82rem" : "0.72rem",
              letterSpacing: isAr ? "0.01em" : "0.1em",
              textTransform: isAr ? "none" : "uppercase",
              color: "var(--brand-sage-pale)",
              lineHeight: isAr ? 1.9 : 1.7,
              textAlign: "center",
            }}
          >
            {t(
              "Zone 53, Street 627, Building 23, 2nd Floor, Office 1 · Doha, Qatar",
              "المنطقة 53، شارع 627، مبنى 23، الطابق الثاني، مكتب 1 · الدوحة، قطر",
            )}
          </span>
        </address>

        {/* Social Media & Follow Section */}
        <div
          style={{
            marginBottom: 32,
            padding: "20px 16px",
            background: "rgba(36, 56, 40, 0.45)",
            border: "1px solid rgba(201, 168, 76, 0.25)",
            borderRadius: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: fontBody,
              fontSize: isAr ? "0.86rem" : "0.72rem",
              letterSpacing: isAr ? "0.02em" : "0.2em",
              textTransform: isAr ? "none" : "uppercase",
              color: "var(--brand-gold)",
              fontWeight: 600,
              margin: 0,
            }}
          >
            {t("Connect & Follow Awakened", "تواصل وتابع أوايكند")}
          </p>
          <p
            style={{
              fontFamily: fontBody,
              fontSize: isAr ? "0.82rem" : "0.74rem",
              color: "var(--brand-sage-pale)",
              margin: 0,
              maxWidth: 520,
              lineHeight: isAr ? 1.9 : 1.6,
            }}
          >
            {t(
              "Follow Awakened for transformative insights, reflections, private sessions, private events, and wellness retreats.",
              "تابعوا أوايكند للاطلاع على الرؤى التحولية، وإعلانات الجلسات الخاصة والفعاليات الحصرية، ومواعيد رحلات العافية والرفاهية.",
            )}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              flexWrap: "wrap",
              marginTop: 4,
            }}
          >
            {/* Instagram */}
            <a
              href={SOCIAL_LINKS.instagram}
              target={SOCIAL_LINKS.instagram !== "#" ? "_blank" : undefined}
              rel={SOCIAL_LINKS.instagram !== "#" ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                if (SOCIAL_LINKS.instagram === "#") e.preventDefault();
              }}
              aria-label="Awakened on Instagram"
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                backgroundColor: "var(--brand-forest)",
                border: "1px solid var(--brand-gold)",
                color: "var(--brand-gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.25s ease",
                textDecoration: "none",
                cursor: SOCIAL_LINKS.instagram !== "#" ? "pointer" : "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(201, 168, 76, 0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "var(--brand-gold-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--brand-forest)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--brand-gold)";
              }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={SOCIAL_LINKS.linkedin}
              target={SOCIAL_LINKS.linkedin !== "#" ? "_blank" : undefined}
              rel={SOCIAL_LINKS.linkedin !== "#" ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                if (SOCIAL_LINKS.linkedin === "#") e.preventDefault();
              }}
              aria-label="Awakened on LinkedIn"
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                backgroundColor: "var(--brand-forest)",
                border: "1px solid var(--brand-gold)",
                color: "var(--brand-gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.25s ease",
                textDecoration: "none",
                cursor: SOCIAL_LINKS.linkedin !== "#" ? "pointer" : "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(201, 168, 76, 0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "var(--brand-gold-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--brand-forest)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--brand-gold)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href={SOCIAL_LINKS.twitter}
              target={SOCIAL_LINKS.twitter !== "#" ? "_blank" : undefined}
              rel={SOCIAL_LINKS.twitter !== "#" ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                if (SOCIAL_LINKS.twitter === "#") e.preventDefault();
              }}
              aria-label="Awakened on X"
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                backgroundColor: "var(--brand-forest)",
                border: "1px solid var(--brand-gold)",
                color: "var(--brand-gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.25s ease",
                textDecoration: "none",
                cursor: SOCIAL_LINKS.twitter !== "#" ? "pointer" : "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(201, 168, 76, 0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "var(--brand-gold-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--brand-forest)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--brand-gold)";
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* TikTok */}
            <a
              href={SOCIAL_LINKS.tiktok}
              target={SOCIAL_LINKS.tiktok !== "#" ? "_blank" : undefined}
              rel={SOCIAL_LINKS.tiktok !== "#" ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                if (SOCIAL_LINKS.tiktok === "#") e.preventDefault();
              }}
              aria-label="Awakened on TikTok"
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                backgroundColor: "var(--brand-forest)",
                border: "1px solid var(--brand-gold)",
                color: "var(--brand-gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.25s ease",
                textDecoration: "none",
                cursor: SOCIAL_LINKS.tiktok !== "#" ? "pointer" : "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(201, 168, 76, 0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "var(--brand-gold-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--brand-forest)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--brand-gold)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .591.045.87.132V9.38a6.33 6.33 0 0 0-.87-.06A6.34 6.34 0 0 0 3.14 15.66a6.34 6.34 0 0 0 10.82 4.48c.038-.038.074-.078.11-.118a6.29 6.29 0 0 0 1.76-4.36V8.69a8.18 8.18 0 0 0 4.76 1.52v-3.45a4.85 4.85 0 0 1-1-.07z"/>
              </svg>
            </a>

            {/* WhatsApp Business */}
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Awakened on WhatsApp Business"
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                backgroundColor: "var(--brand-forest)",
                border: "1px solid var(--brand-gold)",
                color: "#25D366",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.25s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(37, 211, 102, 0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "#25D366";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--brand-forest)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--brand-gold)";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.072-.496-1.763-.73-2.887-2.518-2.975-2.635-.088-.117-.714-.949-.714-1.808 0-.859.45-1.282.61-1.458.161-.177.351-.221.468-.221.117 0 .234.001.336.006.107.005.251-.041.393.298.144.347.491 1.2.535 1.287.043.088.072.19.014.307-.058.118-.088.19-.175.293-.088.102-.185.228-.264.306-.088.087-.179.182-.077.357.102.175.454.748.974 1.211.671.597 1.236.782 1.411.869.175.088.278.073.38-.044.103-.117.438-.511.555-.686.118-.175.234-.146.395-.088.16.059 1.017.479 1.192.566.175.088.292.132.336.205.044.074.044.428-.1.833z"/>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.528 3.66 1.447 5.176L2 22l4.981-1.408A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.062c-1.637 0-3.153-.483-4.432-1.314l-.318-.206-2.96.837.844-2.885-.224-.326A8.04 8.04 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8.062-8 8.062z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href={SOCIAL_LINKS.youtube}
              target={SOCIAL_LINKS.youtube !== "#" ? "_blank" : undefined}
              rel={SOCIAL_LINKS.youtube !== "#" ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                if (SOCIAL_LINKS.youtube === "#") e.preventDefault();
              }}
              aria-label="Awakened on YouTube"
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                backgroundColor: "var(--brand-forest)",
                border: "1px solid var(--brand-gold)",
                color: "var(--brand-gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.25s ease",
                textDecoration: "none",
                cursor: SOCIAL_LINKS.youtube !== "#" ? "pointer" : "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(201, 168, 76, 0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "var(--brand-gold-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--brand-forest)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--brand-gold)";
              }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid var(--brand-forest-mid)",
            paddingTop: 24,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: fontBody,
              fontSize: isAr ? "0.8rem" : "0.72rem",
              letterSpacing: isAr ? "0.01em" : "0.06em",
              color: "var(--brand-sage-pale)",
            }}
          >
            {"© "}
            {currentYear}
            {" Awakened · أوايكند."} {t("All rights reserved", "جميع الحقوق محفوظة")}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "4px 24px",
              alignItems: "center",
            }}
          >
            <span
              dir="ltr"
              style={{
                fontFamily: fontBody,
                fontSize: isAr ? "0.8rem" : "0.72rem",
                letterSpacing: "0.04em",
                color: "var(--brand-sage-pale)",
                direction: "ltr",
                display: "inline-block",
              }}
            >
              CR: 241070
            </span>
            <span
              style={{
                fontFamily: fontBody,
                fontSize: isAr ? "0.8rem" : "0.72rem",
                letterSpacing: isAr ? "0.01em" : "0.06em",
                color: "var(--brand-sage-pale)",
              }}
            >
              {t(
                "Whole-Person Coaching · Lifestyle Transformation · Qatar & Worldwide",
                "التوجيه المتكامل للإنسان · تحول نمط الحياة · قطر والعالم",
              )}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
