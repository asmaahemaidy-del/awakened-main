import { Link, useSearchParams } from "react-router";
import { Seo } from "../components/Seo";
import { useLanguage } from "../i18n/LanguageContext";

export function CheckoutSuccessPage() {
  const [params] = useSearchParams();
  const orderId = params.get("orderId") || params.get("order_id");
  const { t, lang } = useLanguage();
  const fontBody = lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = lang === "ar" ? "var(--font-arabic)" : "var(--font-heading)";
  return (
    <>
      <Seo path="/checkout/success" noindex title={t("Payment Confirmed — Awakened", "تم تأكيد الدفع — أوايكند")} />
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
              background: "rgba(107,153,112,0.15)",
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6B9970"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p
            className="text-xs tracking-[0.25em] uppercase mb-4"
            style={{
              fontFamily: fontBody,
              color: "#6B9970",
            }}
          >
            {t("Confirmed", "تم التأكيد")}
          </p>
          <h1
            className="text-4xl md:text-5xl mb-6"
            style={{
              fontFamily: fontHead,
              color: "#1A2B1C",
              lineHeight: 1.15,
            }}
          >
            {t("Your Place is Secured", "مكانك محجوز")}
          </h1>
          <p
            className="text-sm leading-relaxed"
            style={{
              fontFamily: fontBody,
              color: "#3D5C42",
            }}
          >
            {t(
              "Thank you for choosing Awakened. A confirmation has been sent, and a member of our team will be in touch within 24 hours to begin your journey",
              "شكراً لاختيارك أوايكند. تم إرسال تأكيد، وسيتواصل معك أحد أعضاء فريقنا خلال ٢٤ ساعة لبدء رحلتك.",
            )}
          </p>
          {orderId && (
            <div
              className="mt-6 inline-block px-4 py-2 rounded-lg"
              style={{
                background: "#F0EBE3",
              }}
            >
              <p
                className="text-xs"
                style={{
                  fontFamily: fontBody,
                  color: "#9B8E7E",
                }}
              >
                {t("Order reference", "رقم الطلب")}
                {": "}
                <span
                  style={{
                    color: "#1A2B1C",
                  }}
                >
                  {orderId}
                </span>
              </p>
            </div>
          )}
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="px-8 py-3 rounded-xl text-sm tracking-[0.1em] transition-all duration-300"
              style={{
                fontFamily: fontBody,
                background: "#1A2B1C",
                color: "#FAF7F2",
              }}
            >
              {t("Return Home", "العودة للرئيسية")}
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
              {t("Get in Touch", "تواصل معنا")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
