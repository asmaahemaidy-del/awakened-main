import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Seo } from "../components/Seo";
import { LeafSilhouette } from "../components/LeafSilhouette";
import { CheckoutModal } from "../components/CheckoutModal";
import { startOneTimeCommerceCheckout } from "../lib/commerce";

export function LibraryPage() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";

  const [checkoutItem, setCheckoutItem] = useState(null);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");

  const handleProceed = async (checkoutData) => {
    setCheckoutLoading(true);
    setCheckoutError("");
    try {
      const result = await startOneTimeCommerceCheckout({
        skuId: checkoutData.item.skuId,
        quantity: 1,
        customer: checkoutData.customer,
        consents: checkoutData.consents,
        item: checkoutData.item,
      });

      if (result.success && result.checkoutUrl) {
        window.location.href = result.checkoutUrl;
        return;
      }

      setCheckoutError(
        result.error ||
          (isAr
            ? "تعذر إنشاء جلسة الدفع عبر سكيب كاش. يرجى المحاولة مجدداً."
            : "Unable to create payment session. Please try again.")
      );
    } catch (err) {
      setCheckoutError(
        err?.message ||
          (isAr
            ? "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى."
            : "An unexpected error occurred. Please try again.")
      );
    } finally {
      setCheckoutLoading(false);
    }
  };

  const documents = [
    {
      id: "parent-guide",
      title: t(
        "Raising Safe, Aware and Resilient Children in a Digital World",
        "تنشئة أطفال آمنين وواعين وقادرين على التكيف في عالم رقمي"
      ),
      subtitle: t(
        "National Parent Conference on Digital Safety • Doha, Qatar",
        "المؤتمر الوطني للوالدين حول السلامة الرقمية • الدوحة، قطر"
      ),
      badge: t("Parent Guide & Leaflets Series", "سلسلة مطويات ودليل الوالدين"),
      isPaid: true,
      price: t("1 QAR", "١ ريال"),
      priceFull: t("1 QAR", "١ ريال قطري"),
      description: t(
        "The official 3-leaflet publication folder published by Awakened for Consultations. Features the complete Parent Guide, Family Digital-Safety Checklist & Wellness Agreement, and Cyberbullying & Grooming Response Guide.",
        "المجلد التوعوي الرسمي الصادر عن شركة أوايكند للاستشارات؛ يشمل دليل الوالدين، وقائمة التحقق من السلامة الرقمية وميثاق الأسرة، ودليل التعرّف على التنمّر والاستدراج وخطوات الاستجابة."
      ),
      format: t(
        "Printable A4 Tri-Fold Brochure • Bilingual Arabic & English • High-Resolution Vector",
        "مطوية A4 ثلاثية الطي جاهزة للطباعة • ثنائية اللغة عربي وإنجليزي • ملف متجهي فائق الدقة"
      ),
      url: "/documents/Awakened_Parent_Digital_Safety_Guide_Qatar.pdf",
      fileName: "Awakened_Parent_Digital_Safety_Guide_Qatar.pdf",
      size: "3.9 MB",
    },
    {
      id: "company-profile",
      title: t(
        "Awakened — Whole-Person Coaching & Transformation",
        "أوايكند — التوجيه الشامل والتحول الشخصي"
      ),
      subtitle: t(
        "Official Company Profile 2026 • Qatar & Worldwide (CR: 241070)",
        "الملف التعريفي الرسمي ٢٠٢٦ • قطر وحول العالم (س.ت: 241070)"
      ),
      badge: t("Official Corporate Profile", "الملف التعريفي الرسمي"),
      isPaid: false,
      price: t("Free Publication", "مطبوع مجاني"),
      priceFull: t("Free Download", "تحميل مجاني"),
      description: t(
        "The comprehensive 2026 company profile detailing Awakened's whole-person coaching practice, individual wellbeing, private advisory, corporate & organizational programmes, retreats, our Four-Pillar Approach, and vetting standards.",
        "الملف التعريفي الشامل لعام ٢٠٢٦؛ يوضح منهجية أوايكند للتوجيه المتكامل، ومسارات العافية الفردية، والاستشارات الخاصة، وبرامج العافية المؤسسية والتنفيذية، والملاذات، ونهج الركائز الأربع ومعايير الجودة والسرية."
      ),
      format: t(
        "Official 9-Page Publication • High-Resolution Vector PDF",
        "إصدار رسمي شامل من ٩ صفحات • صيغة PDF متجهية فائقة الدقة"
      ),
      url: "/documents/Awakened_Company_Profile.pdf",
      fileName: "Awakened_Company_Profile.pdf",
      size: "550 KB",
    },
  ];

  return (
    <>
      <Seo
        path="/library"
        title={t(
          "Online Library & Publications — Awakened",
          "المكتبة الرقمية والإصدارات — أوايكند"
        )}
        description={t(
          "Official documents, parent guides, and corporate publications published by Awakened for Consultations in Qatar.",
          "الوثائق الرسمية والأدلة التوعوية وإصدارات شركة أوايكند للاستشارات في دولة قطر."
        )}
      />

      <div
        style={{
          backgroundColor: "#FAF7F2",
          color: "#141F15",
          minHeight: "100vh",
          direction: isAr ? "rtl" : "ltr",
          fontFamily: isAr ? "var(--font-arabic)" : "var(--font-sans)",
        }}
      >
        {/* ── HERO SECTION ── */}
        <section
          style={{
            background: "linear-gradient(180deg, #141F15 0%, #1E2E20 100%)",
            color: "#FAF7F2",
            padding: "160px 24px 85px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-20%",
              right: "10%",
              opacity: 0.12,
              pointerEvents: "none",
            }}
          >
            <LeafSilhouette size={380} color="#C9A84C" withRings />
          </div>

          <div style={{ maxWidth: "880px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#C9A84C",
                fontWeight: 600,
                display: "block",
                marginBottom: "14px",
              }}
            >
              {t("PUBLICATIONS & OFFICIAL DOCUMENTS", "الإصدارات والوثائق الرسمية")}
            </span>

            <h1
              style={{
                fontFamily: isAr ? "var(--font-arabic)" : "'Georgia', serif",
                fontSize: "clamp(2.1rem, 4.2vw, 3.4rem)",
                fontWeight: isAr ? 700 : 500,
                lineHeight: 1.25,
                margin: "0 0 16px",
                color: "#FAF7F2",
              }}
            >
              {t(
                "The Awakened Library",
                "مكتبة وثائق أوايكند"
              )}
            </h1>

            <p
              style={{
                fontSize: "clamp(0.98rem, 1.8vw, 1.15rem)",
                color: "#D0DCD1",
                maxWidth: "640px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              {t(
                "Official publication documents and parent guides published by Awakened for Consultations for direct purchase and download.",
                "الوثائق والمطبوعات والأدلة الرسمية الصادرة عن شركة أوايكند للاستشارات للشراء والتحميل المباشر."
              )}
            </p>
          </div>
        </section>

        {/* ── DOCUMENTS GRID ── */}
        <section
          style={{
            maxWidth: "1140px",
            margin: "-40px auto 100px",
            padding: "0 24px",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
            }}
          >
            {documents.map((doc) => (
              <div
                key={doc.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  border: "1px solid #D9CBBA",
                  boxShadow: "0 15px 45px rgba(20, 31, 21, 0.08)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {/* Top gold banner */}
                  <div
                    style={{
                      background: "linear-gradient(90deg, #9E7E2E 0%, #C9A84C 50%, #DFC07A 100%)",
                      height: "5px",
                    }}
                  />

                  <div style={{ padding: "32px 30px 24px" }}>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "16px",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          background: "#FAF7F2",
                          border: "1px solid #C9A84C",
                          color: "#9E7E2E",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          padding: "4px 12px",
                          borderRadius: "4px",
                        }}
                      >
                        {doc.badge}
                      </div>

                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          background: "#FAF7F2",
                          border: doc.isPaid ? "1px solid #C9A84C" : "1px solid #D9CBBA",
                          padding: "4px 12px",
                          borderRadius: "16px",
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          color: doc.isPaid ? "#9E7E2E" : "#5C8A62",
                        }}
                      >
                        {doc.price}
                      </div>
                    </div>

                    <h2
                      style={{
                        fontFamily: isAr ? "var(--font-arabic)" : "'Georgia', serif",
                        fontSize: "clamp(1.4rem, 2.2vw, 1.75rem)",
                        color: "#141F15",
                        margin: "0 0 10px",
                        lineHeight: 1.35,
                        fontWeight: 600,
                      }}
                    >
                      {doc.title}
                    </h2>

                    <p style={{ fontSize: "0.85rem", color: "#8B958D", margin: "0 0 16px", fontWeight: 500 }}>
                      {doc.subtitle}
                    </p>

                    <p style={{ fontSize: "0.92rem", color: "#555E57", lineHeight: "1.7", margin: "0 0 22px" }}>
                      {doc.description}
                    </p>

                    {doc.isPaid && (
                      <div
                        style={{
                          background: "#FAF7F2",
                          border: "1px solid #C9A84C",
                          borderRadius: "8px",
                          padding: "12px 16px",
                          marginBottom: "16px",
                          fontSize: "0.85rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          color: "#141F15",
                        }}
                      >
                        <span style={{ fontWeight: 600 }}>{t("Price:", "السعر:")}</span>
                        <strong style={{ fontSize: "1.08rem", color: "#9E7E2E", fontFamily: isAr ? "var(--font-arabic)" : "var(--font-sans)" }}>
                          {doc.priceFull}
                        </strong>
                      </div>
                    )}

                    <div
                      style={{
                        background: "linear-gradient(135deg, #FAF7F2 0%, #F5ECE0 100%)",
                        borderRadius: "8px",
                        border: "1px solid #EAE3D6",
                        padding: "14px 16px",
                        fontSize: "0.82rem",
                        color: "#3D6B44",
                        lineHeight: "1.5",
                        marginBottom: "10px",
                      }}
                    >
                      <strong>{t("Format:", "الصيغة:")}</strong> {doc.format}
                    </div>

                    <div style={{ fontSize: "0.78rem", color: "#8B958D" }}>
                      {t("File Size:", "حجم الملف:")} <strong>{doc.size}</strong> • {t("Format: Adobe PDF", "الصيغة: Adobe PDF")}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div
                  style={{
                    padding: "20px 30px 28px",
                    borderTop: "1px solid #F0EAE1",
                    backgroundColor: "#FAF7F2",
                  }}
                >
                  {doc.isPaid ? (
                    /* Sold Booklet: Purchase only, no read preview */
                    <button
                      type="button"
                      onClick={() =>
                        setCheckoutItem({
                          skuId: "doc-parent-digital-safety-1qar",
                          titleEn: doc.title,
                          titleAr: doc.title,
                          subtitleEn: "Official Publication Booklet • 1 QAR",
                          subtitleAr: "الكتيب التوعوي الرسمي • ١ ريال قطري",
                          priceQAR: "1.00 QAR",
                          priceUSD: "$0.27 USD",
                          priceQar: 1.0,
                          amountQar: 1.0,
                          price: 100, // 100 cents = 1.00 QAR
                        })
                      }
                      style={{
                        width: "100%",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        background: "#141F15",
                        color: "#FAF7F2",
                        padding: "14px 24px",
                        borderRadius: "8px",
                        fontSize: "0.92rem",
                        fontWeight: 600,
                        border: "1px solid #C9A84C",
                        boxShadow: "0 4px 14px rgba(20, 31, 21, 0.12)",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                        <line x1="1" y1="10" x2="23" y2="10" />
                      </svg>
                      {t("Purchase Booklet — 1 QAR", "شراء الكتيب — ١ ريال")}
                    </button>
                  ) : (
                    /* Free Publication: Direct download & view */
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                      <a
                        href={doc.url}
                        download={doc.fileName}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: "1 1 180px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",
                          background: "#141F15",
                          color: "#FAF7F2",
                          padding: "12px 20px",
                          borderRadius: "8px",
                          fontSize: "0.88rem",
                          fontWeight: 600,
                          textDecoration: "none",
                          border: "1px solid #C9A84C",
                          boxShadow: "0 4px 12px rgba(20, 31, 21, 0.12)",
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        {t(`Download PDF (${doc.size})`, `تحميل المستند (${doc.size})`)}
                      </a>

                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: "1 1 130px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                          background: "#FFFFFF",
                          color: "#141F15",
                          padding: "12px 16px",
                          borderRadius: "8px",
                          fontSize: "0.88rem",
                          fontWeight: 600,
                          textDecoration: "none",
                          border: "1px solid #D9CBBA",
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                        {t("Open / View", "فتح وعرض")}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CHECKOUT MODAL ── */}
        <CheckoutModal
          isOpen={!!checkoutItem}
          onClose={() => {
            setCheckoutItem(null);
            setCheckoutError("");
          }}
          item={checkoutItem}
          onProceed={handleProceed}
          loading={checkoutLoading}
          error={checkoutError}
        />
      </div>
    </>
  );
}
