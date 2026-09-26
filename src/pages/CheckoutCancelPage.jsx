import { Link } from "react-router";
import { Seo } from "../components/Seo";
import { useLanguage } from "../i18n/LanguageContext";

export function CheckoutCancelPage() {
  const { t, lang } = useLanguage();
  const fontBody = lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = lang === "ar" ? "var(--font-arabic)" : "var(--font-heading)";
  return (
    <>
      <Seo path="/checkout/cancel" noindex title={t("Checkout Cancelled — Awakened", "تم إلغاء الدفع — أوايكند")} />
      <section
        className="min-h-[80vh] flex items-center justify-center px-6 py-24"
        style={{
          background: "#FAF7F2",
        }}
      >
        <div className="max-w-lg w-full text-center">
          <div
            className="mx-auto mb-8 w-16 h-16 rounded-full flex items-center justify-center"
            style={{
              background: "#F0EBE3",
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3D5C42"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <p
            className="text-xs tracking-[0.25em] uppercase mb-4"
            style={{
              fontFamily: fontBody,
              color: "#3D5C42",
            }}
          >
            {t("Checkout Cancelled", "تم إلغاء الدفع")}
          </p>
          <h1
            className="text-4xl md:text-5xl mb-6"
            style={{
              fontFamily: fontHead,
              color: "#1A2B1C",
              lineHeight: 1.15,
            }}
          >
            {t("No Charge Was Made", "لم يتم إجراء أي خصم")}
          </h1>
          <p
            className="text-sm leading-relaxed"
            style={{
              fontFamily: fontBody,
              color: "#3D5C42",
            }}
          >
            {t(
              "Your checkout was cancelled and no payment was taken. If you have any questions or would like to speak with our team, we are here",
              "تم إلغاء عملية الدفع ولم يتم خصم أي مبلغ. إذا كان لديك أي أسئلة أو تريد التحدث مع فريقنا، نحن هنا.",
            )}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/book"
              className="px-8 py-3 rounded-xl text-sm tracking-[0.1em] transition-all duration-300"
              style={{
                fontFamily: fontBody,
                background: "#1A2B1C",
                color: "#FAF7F2",
              }}
            >
              {t("View Packages", "عرض الباقات")}
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-xl text-sm tracking-[0.1em] transition-all duration-300"
              style={{
                fontFamily: fontBody,
                background: "transparent",
                color: "#3D5C42",
                border: "1px solid #C8C0B0",
              }}
            >
              {t("Contact Us", "تواصل معنا")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
