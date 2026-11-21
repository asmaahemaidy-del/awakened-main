import { Link } from "react-router";
import { useLanguage } from "../i18n/LanguageContext";
import { Seo } from "../components/Seo";
import { LeafSilhouette } from "../components/LeafSilhouette";

export function LibraryPage() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";

  const pdfUrl = "/documents/Awakened_Parent_Digital_Safety_Guide_Qatar.pdf";
  const companyProfileUrl = "/documents/Awakened_Company_Profile.pdf";

  return (
    <>
      <Seo
        path="/library"
        title={t(
          "Online Library & Publications — Awakened",
          "المكتبة الرقمية والإصدارات التوعوية — أوايكند"
        )}
        description={t(
          "Official parent guides, family digital safety agreements, and publications from Awakened for Consultations in Qatar.",
          "أدلة توعوية رسمية للوالدين، اتفاقيات السلامة الرقمية للأسرة، وإصدارات استشارية من أوايكند للاستشارات في دولة قطر."
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
              {t("KNOWLEDGE, RESEARCH & COMMUNITY GUIDANCE", "المعرفة والأبحاث والتوجيه المجتمعي")}
            </span>

            <h1
              style={{
                fontFamily: isAr ? "var(--font-arabic)" : "'Georgia', serif",
                fontSize: "clamp(2.1rem, 4.2vw, 3.4rem)",
                fontWeight: isAr ? 700 : 500,
                lineHeight: 1.25,
                margin: "0 0 18px",
                color: "#FAF7F2",
              }}
            >
              {t(
                "The Awakened Online Library",
                "المكتبة الرقمية والإصدارات التوعوية"
              )}
            </h1>

            <p
              style={{
                fontSize: "clamp(0.98rem, 1.8vw, 1.15rem)",
                color: "#D0DCD1",
                maxWidth: "680px",
                margin: "0 auto 30px",
                lineHeight: 1.7,
              }}
            >
              {t(
                "Official educational documents, parent guides, and publication series published by Awakened for Consultations for families, educators, and institutions in Qatar.",
                "أدلة توعوية رسمية وإصدارات ومطبوعات أعدتها أوايكند للاستشارات لتمكين الأسر والمدارس والمؤسسات في دولة قطر نحو تنشئة آمنة وواعية."
              )}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "12px",
                fontSize: "0.82rem",
                color: "#C9A84C",
              }}
            >
              <span
                style={{
                  background: "rgba(201, 168, 76, 0.12)",
                  border: "1px solid rgba(201, 168, 76, 0.35)",
                  padding: "6px 16px",
                  borderRadius: "20px",
                }}
              >
                {t("National Conference Series", "سلسلة المؤتمر الوطني")}
              </span>
              <span
                style={{
                  background: "rgba(201, 168, 76, 0.12)",
                  border: "1px solid rgba(201, 168, 76, 0.35)",
                  padding: "6px 16px",
                  borderRadius: "20px",
                }}
              >
                {t("Bilingual Arabic & English", "محتوى ثنائي اللغة عربي وإنجليزي")}
              </span>
              <span
                style={{
                  background: "rgba(201, 168, 76, 0.12)",
                  border: "1px solid rgba(201, 168, 76, 0.35)",
                  padding: "6px 16px",
                  borderRadius: "20px",
                }}
              >
                {t("Free Public Download", "تحميل متاح ومجاني للجميع")}
              </span>
            </div>
          </div>
        </section>

        {/* ── FEATURED DOCUMENT SHOWCASE ── */}
        <section style={{ maxWidth: "1140px", margin: "-40px auto 60px", padding: "0 24px", position: "relative", zIndex: 10 }}>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              border: "1px solid #D9CBBA",
              boxShadow: "0 20px 50px rgba(20, 31, 21, 0.1)",
              overflow: "hidden",
            }}
          >
            {/* Top gold banner */}
            <div
              style={{
                background: "linear-gradient(90deg, #9E7E2E 0%, #C9A84C 50%, #DFC07A 100%)",
                height: "6px",
              }}
            />

            <div style={{ padding: "40px 36px 36px" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "36px",
                  alignItems: "center",
                }}
              >
                {/* Document Information & Download */}
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
                      marginBottom: "16px",
                    }}
                  >
                    {t(
                      "National Parent Conference on Digital Safety • 23 Nov 2026 | Qatar",
                      "المؤتمر الوطني للوالدين حول السلامة الرقمية • ٢٣ نوفمبر ٢٠٢٦ | قطر"
                    )}
                  </div>

                  <h2
                    style={{
                      fontFamily: isAr ? "var(--font-arabic)" : "'Georgia', serif",
                      fontSize: "clamp(1.7rem, 2.8vw, 2.2rem)",
                      color: "#141F15",
                      margin: "0 0 12px",
                      lineHeight: 1.3,
                      fontWeight: 600,
                    }}
                  >
                    {t(
                      "Raising Safe, Aware and Resilient Children in a Digital World",
                      "تنشئة أطفال آمنين وواعين وقادرين على التكيف في عالم رقمي"
                    )}
                  </h2>

                  <p style={{ fontSize: "0.95rem", color: "#555E57", lineHeight: "1.7", margin: "0 0 20px" }}>
                    {t(
                      "The complete official 3-leaflet publication folder published by Awakened for Consultations. Features the full Parent Guide, Family Digital-Safety Checklist & Wellness Agreement, and the Cyberbullying & Grooming Response Guide.",
                      "المجلد التوعوي الرسمي الكامل المكوّن من ثلاثة كتيبات متكاملة أصدرتها شركة أوايكند للاستشارات؛ يشمل دليل الوالدين، وقائمة التحقق من السلامة الرقمية واتفاق الأسرة، ودليل التعرّف على التنمّر والاستدراج وخطوات الاستجابة."
                    )}
                  </p>

                  {/* Leaflets Summary */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "0.9rem" }}>
                      <span style={{ color: "#C9A84C", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1 }}>•</span>
                      <span>
                        <strong>{t("Leaflet 1:", "الكتيب ١:")}</strong>{" "}
                        {t(
                          "Parent Guide — 5 Core Principles & Healthy Screen Time Habits",
                          "دليل الوالدين — القواعد الخمس الأساسية وعادات الشاشة الصحية"
                        )}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "0.9rem" }}>
                      <span style={{ color: "#C9A84C", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1 }}>•</span>
                      <span>
                        <strong>{t("Leaflet 2:", "الكتيب ٢:")}</strong>{" "}
                        {t(
                          "Family Digital-Safety Checklist & Wellness Agreement Template",
                          "قائمة التحقق من السلامة الرقمية وميثاق الأسرة للرفاه الرقمي"
                        )}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "0.9rem" }}>
                      <span style={{ color: "#C9A84C", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1 }}>•</span>
                      <span>
                        <strong>{t("Leaflet 3:", "الكتيب ٣:")}</strong>{" "}
                        {t(
                          "Recognise, Respond & Support — Cyberbullying, Grooming & Qatar Emergency Hotlines",
                          "التعرّف والاستجابة والدعم — التنمّر والاستدراج وأرقام الطوارئ في قطر"
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                    <a
                      href={pdfUrl}
                      download="Awakened_Parent_Digital_Safety_Guide_Qatar.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        background: "#141F15",
                        color: "#FAF7F2",
                        padding: "14px 28px",
                        borderRadius: "8px",
                        fontSize: "0.92rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        border: "1px solid #C9A84C",
                        boxShadow: "0 6px 18px rgba(20, 31, 21, 0.15)",
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      {t("Download Folder (PDF 3.9 MB)", "تحميل المجلد كاملاً (PDF ٣.٩ ميجابايت)")}
                    </a>

                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "#FAF7F2",
                        color: "#141F15",
                        padding: "14px 24px",
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
                      {t("Open / View Document in Browser", "استعراض المستند في المتصفح")}
                    </a>
                  </div>
                </div>

                {/* Right / Document Card Badge */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #FAF7F2 0%, #F3ECE1 100%)",
                    borderRadius: "12px",
                    border: "1px solid #D9CBBA",
                    padding: "32px 28px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      border: "2px solid #C9A84C",
                      borderRadius: "8px",
                      padding: "26px 20px",
                      background: "#FFFFFF",
                      boxShadow: "0 10px 25px rgba(20, 31, 21, 0.06)",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
                      <img
                        src="/images/awakened-gold-logo.png"
                        alt="Awakened for Consultations"
                        style={{ height: "46px", width: "auto" }}
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
                      {t("Complete 3-Leaflet Tri-Fold Series", "سلسلة مطويات ثلاثية الأجزاء")}
                    </div>

                    <h3
                      style={{
                        fontFamily: isAr ? "var(--font-arabic)" : "'Georgia', serif",
                        fontSize: "1.25rem",
                        color: "#141F15",
                        margin: "0 0 12px",
                        fontWeight: 600,
                      }}
                    >
                      {t("Digital Parenting in Qatar", "التربية الرقمية والأمان الأسري")}
                    </h3>

                    <div
                      style={{
                        background: "#FAF7F2",
                        border: "1px solid #EAE3D6",
                        borderRadius: "6px",
                        padding: "12px",
                        fontSize: "0.82rem",
                        color: "#5C8A62",
                        marginBottom: "16px",
                        lineHeight: 1.5,
                      }}
                    >
                      {t(
                        "Officially presented at the National Parent Conference on Digital Safety in Doha, State of Qatar.",
                        "قُدمت رسمياً خلال المؤتمر الوطني للوالدين حول السلامة الرقمية بالدوحة، دولة قطر."
                      )}
                    </div>

                    <div style={{ fontSize: "0.78rem", color: "#7B857E" }}>
                      {t(
                        "Format: Printable A4 Tri-Fold Brochure • High-Resolution Vector",
                        "صيغة الطباعة: مطوية A4 ثلاثية الطي فائقة الدقة جاهزة للطباعة والتوزيع"
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EMBEDDED DOCUMENT VIEWER ── */}
        <section style={{ maxWidth: "1140px", margin: "0 auto 70px", padding: "0 24px" }}>
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
                padding: "20px 28px",
                backgroundColor: "#FAF7F2",
                borderBottom: "1px solid #EAE3D6",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "#9E7E2E",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    display: "block",
                  }}
                >
                  {t("DOCUMENT PREVIEW", "معاينة المستند")}
                </span>
                <h3
                  style={{
                    margin: "4px 0 0",
                    fontFamily: isAr ? "var(--font-arabic)" : "'Georgia', serif",
                    fontSize: "1.15rem",
                    color: "#141F15",
                    fontWeight: 600,
                  }}
                >
                  {t("Awakened Parent Digital Safety Guide", "دليل أوايكند للوالدين حول السلامة الرقمية")}
                </h3>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <a
                  href={pdfUrl}
                  download="Awakened_Parent_Digital_Safety_Guide_Qatar.pdf"
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
                  {t("Download PDF", "تحميل PDF")}
                </a>
                <a
                  href={pdfUrl}
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
                  {t("Open Fullscreen", "فتح بملء الشاشة")} &rarr;
                </a>
              </div>
            </div>

            {/* Responsive PDF Viewer */}
            <div style={{ width: "100%", height: "780px", backgroundColor: "#525659" }}>
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=0`}
                title="Awakened Parent Digital Safety Guide"
                width="100%"
                height="100%"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </section>

        {/* ── OFFICIAL QATAR HELPLINES & LEGAL NOTICE ── */}
        <section
          style={{
            background: "#141F15",
            color: "#FAF7F2",
            padding: "70px 24px",
          }}
        >
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#C9A84C",
                  fontWeight: 700,
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                {t("OFFICIAL HOTLINES & REPORTING IN QATAR", "جهات الدعم والإبلاغ الرسمية في دولة قطر")}
              </span>
              <h2
                style={{
                  fontFamily: isAr ? "var(--font-arabic)" : "'Georgia', serif",
                  fontSize: "clamp(1.7rem, 2.8vw, 2.3rem)",
                  color: "#FAF7F2",
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                {t("Immediate & Confidential Support", "الدعم الفوري والاستشارات المتخصصة")}
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
                marginBottom: "40px",
              }}
            >
              {/* 999 */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(201, 168, 76, 0.3)",
                  borderRadius: "12px",
                  padding: "28px 24px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2.4rem", fontFamily: "'Georgia', serif", fontWeight: 700, color: "#E53E3E", marginBottom: "8px" }}>
                  999
                </div>
                <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "#FAF7F2", marginBottom: "8px" }}>
                  {t("Immediate Danger & Emergencies", "الخطر الفوري وحالات الطوارئ")}
                </div>
                <p style={{ fontSize: "0.85rem", color: "#A8B5AA", lineHeight: "1.6", margin: 0 }}>
                  {t(
                    "Police, ambulance, or civil defence. Do not delay the call to collect evidence if someone is in immediate danger.",
                    "الشرطة، الإسعاف، أو الدفاع المدني. لا تؤخروا الاتصال لجمع الأدلة إذا كان هناك خطر فوري."
                  )}
                </p>
              </div>

              {/* 919 AMAN */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(201, 168, 76, 0.3)",
                  borderRadius: "12px",
                  padding: "28px 24px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2.4rem", fontFamily: "'Georgia', serif", fontWeight: 700, color: "#C9A84C", marginBottom: "8px" }}>
                  919
                </div>
                <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "#FAF7F2", marginBottom: "8px" }}>
                  {t("AMAN Child & Family Hotline", "الخط الساخن لمركز أمان")}
                </div>
                <p style={{ fontSize: "0.85rem", color: "#A8B5AA", lineHeight: "1.6", margin: 0 }}>
                  {t(
                    "Child protection and family support; 24/7 service in multiple languages for psychological, social, and legal consultations.",
                    "حماية الطفل ودعم الأسرة؛ على مدار الساعة وبعدة لغات، استشارات اجتماعية ونفسية وقانونية متخصصة."
                  )}
                </p>
              </div>

              {/* MOI Cybercrime */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(201, 168, 76, 0.3)",
                  borderRadius: "12px",
                  padding: "28px 24px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "1.6rem", fontFamily: "monospace", fontWeight: 700, color: "#8DAF8A", marginBottom: "8px" }}>
                  66815757
                </div>
                <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "#FAF7F2", marginBottom: "8px" }}>
                  {t("MOI Cybercrime Combating Centre", "مركز مكافحة الجرائب الإلكترونية — وزارة الداخلية")}
                </div>
                <p style={{ fontSize: "0.85rem", color: "#A8B5AA", lineHeight: "1.6", margin: "0 0 10px" }}>
                  {t(
                    "Tel: 2347444 • Email: cccc@moi.gov.qa. Official reporting for online blackmail, threats, and cyber offences.",
                    "هاتف: ٢٣٤٧٤٤٤ • البريد الإلكتروني: cccc@moi.gov.qa. لبلاغات الجرائم الإلكترونية ومنها الابتزاز والتهديد."
                  )}
                </p>
              </div>
            </div>

            <div
              style={{
                textAlign: "center",
                fontSize: "0.82rem",
                color: "#7E8E80",
                maxWidth: "760px",
                margin: "0 auto",
                lineHeight: "1.6",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                paddingTop: "24px",
              }}
            >
              {t(
                "This content is educational and public awareness material published by Awakened for Consultations LLC and does not replace professional, legal, or emergency support services.",
                "هذا المحتوى توعوي وإرشادي صادر عن شركة أوايكند للاستشارات ذ.م.م، ولا يحل بأي حال محل الدعم المهني الطبي أو القانوني أو خدمات الطوارئ الرسمية."
              )}
            </div>
          </div>
        </section>

        {/* ── ADDITIONAL LIBRARY PUBLICATIONS ── */}
        <section style={{ maxWidth: "1140px", margin: "70px auto 90px", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#9E7E2E",
                fontWeight: 700,
                display: "block",
                marginBottom: "8px",
              }}
            >
              {t("MORE PUBLICATIONS & BRIEFS", "المزيد من إصدارات أوايكند")}
            </span>
            <h2
              style={{
                fontFamily: isAr ? "var(--font-arabic)" : "'Georgia', serif",
                fontSize: "clamp(1.7rem, 2.8vw, 2.2rem)",
                color: "#141F15",
                margin: 0,
                fontWeight: 600,
              }}
            >
              {t("Corporate & Clinical Advisory Documents", "وثائق وملفات استشارية متاحة للتحميل")}
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {/* Awakened Company Profile */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "12px",
                border: "1px solid #D9CBBA",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 6px 20px rgba(20, 31, 21, 0.04)",
              }}
            >
              <div>
                <span style={{ fontSize: "0.72rem", color: "#9E7E2E", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  {t("Corporate Profile", "الملف التعريفي للشركة")}
                </span>
                <h3 style={{ margin: "8px 0 10px", fontFamily: isAr ? "var(--font-arabic)" : "'Georgia', serif", fontSize: "1.25rem", color: "#141F15" }}>
                  {t("Awakened for Consultations — Company Profile", "شركة أوايكند للاستشارات — الملف التعريفي الشامل")}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#555E57", lineHeight: "1.6", margin: "0 0 20px" }}>
                  {t(
                    "Our vision, advisory methodology, executive coaching pillars, and corporate wellness frameworks in the State of Qatar.",
                    "رؤيتنا ومنهجيتنا الاستشارية، ركائز التوجيه التنفيذي، وأطر العافية المؤسسية في دولة قطر."
                  )}
                </p>
              </div>

              <a
                href={companyProfileUrl}
                download="Awakened_Company_Profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  background: "#FAF7F2",
                  color: "#141F15",
                  border: "1px solid #C9A84C",
                  borderRadius: "6px",
                  padding: "11px 20px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {t("Download Company Profile (PDF)", "تحميل الملف التعريفي (PDF)")}
              </a>
            </div>

            {/* Inquiries & Custom Research Request */}
            <div
              style={{
                background: "linear-gradient(135deg, #FAF7F2 0%, #F5ECE0 100%)",
                borderRadius: "12px",
                border: "1px dashed #C9A84C",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span style={{ fontSize: "0.72rem", color: "#3D6B44", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  {t("Bespoke Research & Workshops", "أبحاث وورش عمل مخصصة")}
                </span>
                <h3 style={{ margin: "8px 0 10px", fontFamily: isAr ? "var(--font-arabic)" : "'Georgia', serif", fontSize: "1.25rem", color: "#141F15" }}>
                  {t("Request Tailored Family & Institutional Material", "طلب إصدارات وورش عمل خاصة للمؤسسات والمدارس")}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#555E57", lineHeight: "1.6", margin: "0 0 20px" }}>
                  {t(
                    "We design specialized wellness manuals, parent guides, and interactive workshops for schools, ministries, and corporate entities in Qatar.",
                    "نقدم حقائب تدريبية وأدلة توعوية متخصصة ومصممة وفق احتياجات المدارس والوزارات والجهات المؤسسية في قطر."
                  )}
                </p>
              </div>

              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  background: "#141F15",
                  color: "#FAF7F2",
                  borderRadius: "6px",
                  padding: "11px 20px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {t("Contact Our Advisory Team", "تواصل مع فريقنا الاستشاري")} &rarr;
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
