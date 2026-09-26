import { Link } from "react-router";
import { useLanguage } from "../i18n/LanguageContext";

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
            +974 7710 6177
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
              style={{
                fontFamily: fontBody,
                fontSize: isAr ? "0.8rem" : "0.72rem",
                letterSpacing: "0.04em",
                color: "var(--brand-sage-pale)",
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
