import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Seo } from "../components/Seo";
import { LeafSilhouette } from "../components/LeafSilhouette";

export function LibraryPage() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";

  const [selectedDoc, setSelectedDoc] = useState("parent-guide");

  const documents = {
    "parent-guide": {
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
    "company-profile": {
      id: "company-profile",
      title: t(
        "Awakened for Consultations — Official Company Profile",
        "شركة أوايكند للاستشارات — الملف التعريفي الشامل"
      ),
      subtitle: t(
        "Corporate Overview, Advisory Pillars & Executive Frameworks",
        "الرؤية المؤسسية، الركائز الاستشارية، ومسارات التوجيه التنفيذي"
      ),
      badge: t("Official Corporate Publication", "الإصدار التعريفي الرسمي"),
      description: t(
        "Our strategic vision, advisory methodology, executive coaching pillars, and institutional wellness frameworks for individuals, families, and organizations in the State of Qatar.",
        "رؤيتنا الاستراتيجية ومنهجيتنا الاستشارية، ركائز التوجيه التنفيذي، وأطر العافية المؤسسية للأفراد والأسر والمنظمات في دولة قطر."
      ),
      format: t(
        "Official 9-Page Corporate Document • High-Resolution PDF",
        "ملف تعريفي شامل من ٩ صفحات • صيغة PDF عالية الدقة"
      ),
      url: "/documents/Awakened_Company_Profile.pdf",
      fileName: "Awakened_Company_Profile.pdf",
      size: "550 KB",
    },
  };

  const current = documents[selectedDoc];

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
            padding: "160px 24px 80px",
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
                margin: "0 auto 28px",
                lineHeight: 1.7,
              }}
            >
              {t(
                "Official publication documents and parent guides published by Awakened for Consultations for direct view and public download.",
                "الوثائق والمطبوعات والأدلة الرسمية الصادرة عن شركة أوايكند للاستشارات للمعاينة الفورية والتحميل المباشر."
              )}
            </p>

            {/* Document Switcher Tabs in Hero */}
            <div
              style={{
                display: "inline-flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "10px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(201, 168, 76, 0.35)",
                padding: "6px",
                borderRadius: "32px",
              }}
            >
              <button
                type="button"
                onClick={() => setSelectedDoc("parent-guide")}
                style={{
                  background: selectedDoc === "parent-guide" ? "#C9A84C" : "transparent",
                  color: selectedDoc === "parent-guide" ? "#141F15" : "#FAF7F2",
                  border: "none",
                  padding: "10px 22px",
                  borderRadius: "26px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontFamily: isAr ? "var(--font-arabic)" : "var(--font-sans)",
                }}
              >
                📄 {t("Parent Digital Safety Guide", "دليل السلامة الرقمية للوالدين")}
              </button>

              <button
                type="button"
                onClick={() => setSelectedDoc("company-profile")}
                style={{
                  background: selectedDoc === "company-profile" ? "#C9A84C" : "transparent",
                  color: selectedDoc === "company-profile" ? "#141F15" : "#FAF7F2",
                  border: "none",
                  padding: "10px 22px",
                  borderRadius: "26px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontFamily: isAr ? "var(--font-arabic)" : "var(--font-sans)",
                }}
              >
                📄 {t("Awakened Company Profile", "الملف التعريفي للشركة")}
              </button>
            </div>
          </div>
        </section>

        {/* ── ACTIVE DOCUMENT CARD ── */}
        <section style={{ maxWidth: "1140px", margin: "-36px auto 50px", padding: "0 24px", position: "relative", zIndex: 10 }}>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              border: "1px solid #D9CBBA",
              boxShadow: "0 20px 50px rgba(20, 31, 21, 0.08)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "linear-gradient(90deg, #9E7E2E 0%, #C9A84C 50%, #DFC07A 100%)",
                height: "6px",
              }}
            />

            <div style={{ padding: "36px 36px 32px" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "32px",
                  alignItems: "center",
                }}
              >
                <div>
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
                      marginBottom: "14px",
                    }}
                  >
                    {current.badge}
                  </div>

                  <h2
                    style={{
                      fontFamily: isAr ? "var(--font-arabic)" : "'Georgia', serif",
                      fontSize: "clamp(1.6rem, 2.6vw, 2.1rem)",
                      color: "#141F15",
                      margin: "0 0 10px",
                      lineHeight: 1.3,
                      fontWeight: 600,
                    }}
                  >
                    {current.title}
                  </h2>

                  <p style={{ fontSize: "0.85rem", color: "#8B958D", margin: "0 0 16px", fontWeight: 500 }}>
                    {current.subtitle}
                  </p>

                  <p style={{ fontSize: "0.95rem", color: "#555E57", lineHeight: "1.7", margin: "0 0 24px" }}>
                    {current.description}
                  </p>

                  {/* Action Buttons */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                    <a
                      href={current.url}
                      download={current.fileName}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        background: "#141F15",
                        color: "#FAF7F2",
                        padding: "13px 26px",
                        borderRadius: "8px",
                        fontSize: "0.92rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        border: "1px solid #C9A84C",
                        boxShadow: "0 6px 18px rgba(20, 31, 21, 0.12)",
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      {t(`Download PDF (${current.size})`, `تحميل المستند (${current.size})`)}
                    </a>

                    <a
                      href={current.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "#FAF7F2",
                        color: "#141F15",
                        padding: "13px 22px",
                        borderRadius: "8px",
                        fontSize: "0.92rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        border: "1px solid #D9CBBA",
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      {t("Open in New Tab", "فتح في نافذة جديدة")}
                    </a>
                  </div>
                </div>

                {/* Right / Quick Specs Box */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #FAF7F2 0%, #F3ECE1 100%)",
                    borderRadius: "12px",
                    border: "1px solid #D9CBBA",
                    padding: "28px 24px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      border: "2px solid #C9A84C",
                      borderRadius: "8px",
                      padding: "24px 20px",
                      background: "#FFFFFF",
                      boxShadow: "0 8px 20px rgba(20, 31, 21, 0.05)",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "14px" }}>
                      <img
                        src="/images/awakened-gold-logo.png"
                        alt="Awakened for Consultations"
                        style={{ height: "44px", width: "auto" }}
                      />
                    </div>

                    <div
                      style={{
                        fontSize: "0.72rem",
                        color: "#9E7E2E",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        marginBottom: "6px",
                      }}
                    >
                      {current.badge}
                    </div>

                    <h3
                      style={{
                        fontFamily: isAr ? "var(--font-arabic)" : "'Georgia', serif",
                        fontSize: "1.15rem",
                        color: "#141F15",
                        margin: "0 0 12px",
                        fontWeight: 600,
                      }}
                    >
                      {current.title}
                    </h3>

                    <div style={{ fontSize: "0.8rem", color: "#5C8A62", marginBottom: "12px" }}>
                      {current.format}
                    </div>

                    <div style={{ fontSize: "0.78rem", color: "#8B958D", borderTop: "1px solid #EAE3D6", paddingTop: "10px" }}>
                      {t("File Size:", "حجم الملف:")} <strong>{current.size}</strong> • {t("Format: Adobe PDF", "الصيغة: Adobe PDF")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EMBEDDED DOCUMENT VIEWER ── */}
        <section style={{ maxWidth: "1140px", margin: "0 auto 80px", padding: "0 24px" }}>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "14px",
              border: "1px solid #D9CBBA",
              boxShadow: "0 8px 30px rgba(20, 31, 21, 0.05)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "18px 24px",
                backgroundColor: "#FAF7F2",
                borderBottom: "1px solid #EAE3D6",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "#9E7E2E",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  {t("VIEWING:", "معاينة:")}
                </span>
                <span
                  style={{
                    fontFamily: isAr ? "var(--font-arabic)" : "'Georgia', serif",
                    fontSize: "1.05rem",
                    color: "#141F15",
                    fontWeight: 600,
                  }}
                >
                  {current.title}
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <a
                  href={current.url}
                  download={current.fileName}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "#141F15",
                    color: "#FAF7F2",
                    padding: "9px 18px",
                    borderRadius: "6px",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  {t(`Download (${current.size})`, `تحميل (${current.size})`)}
                </a>

                <a
                  href={current.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "#FFFFFF",
                    color: "#141F15",
                    border: "1px solid #D9CBBA",
                    padding: "9px 16px",
                    borderRadius: "6px",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  {t("Fullscreen", "ملء الشاشة")} &rarr;
                </a>
              </div>
            </div>

            {/* Responsive PDF Viewer */}
            <div style={{ width: "100%", height: "820px", backgroundColor: "#525659" }}>
              <iframe
                key={current.url}
                src={`${current.url}#toolbar=1&navpanes=0`}
                title={current.title}
                width="100%"
                height="100%"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
