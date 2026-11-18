import { Link } from "react-router";
import { Seo } from "../components/Seo";
import { useLanguage } from "../i18n/LanguageContext";

function NotFoundPage() {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";
  const fontBody = isAr ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = isAr ? "var(--font-arabic)" : "var(--font-heading)";

  return (
    <div
      className="min-h-[85vh] flex items-center justify-center px-6 py-24 relative overflow-hidden"
      style={{
        background: "var(--brand-cream)",
        direction: isAr ? "rtl" : "ltr",
      }}
    >
      <Seo path="/404" noindex title={t("Page Not Found — Awakened", "الصفحة غير موجودة — أوايكند")} />

      <div className="max-w-xl w-full text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-10 h-px" style={{ background: "var(--brand-gold)" }} />
          <span
            className="text-xs uppercase tracking-[0.25em]"
            style={{
              fontFamily: fontBody,
              color: "var(--brand-gold-dark)",
              fontWeight: 600,
            }}
          >
            {t("404 · Not Found", "٤٠٤ · غير موجودة")}
          </span>
          <div className="w-10 h-px" style={{ background: "var(--brand-gold)" }} />
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl mb-6 font-light"
          style={{
            fontFamily: fontHead,
            color: "var(--brand-forest)",
            lineHeight: 1.15,
            fontStyle: isAr ? "normal" : "italic",
          }}
        >
          {t("The Path Has Shifted", "المسار غير متوفر")}
        </h1>

        <p
          className="text-sm sm:text-base leading-relaxed mb-10 max-w-md mx-auto"
          style={{
            fontFamily: fontBody,
            color: "var(--brand-forest-mid)",
            lineHeight: isAr ? 2 : 1.7,
          }}
        >
          {t(
            "The page you are seeking is no longer here, or the address may have changed. Let us guide you back to clarity.",
            "الصفحة التي تبحث عنها لم تعد متوفرة هنا، أو ربما تغير الرابط. دعنا نرشدك مجدداً إلى رحلتك."
          )}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-8 py-3.5 transition-all duration-300 text-xs uppercase tracking-[0.15em] font-semibold"
            style={{
              fontFamily: fontBody,
              background: "var(--brand-forest)",
              color: "var(--brand-cream)",
              border: "1px solid var(--brand-forest)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--brand-forest-mid)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--brand-forest)";
            }}
          >
            {t("Return Home", "العودة للرئيسية")}
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-3.5 transition-all duration-300 text-xs uppercase tracking-[0.15em]"
            style={{
              fontFamily: fontBody,
              background: "transparent",
              color: "var(--brand-forest)",
              border: "1px solid rgba(46,74,50,0.3)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--brand-forest)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(46,74,50,0.3)";
            }}
          >
            {t("Get in Touch", "تواصل معنا")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export { NotFoundPage as default };
