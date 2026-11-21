import { useState } from "react";
import { Link } from "react-router";
import { useLanguage } from "../i18n/LanguageContext";
import { Seo } from "../components/Seo";
import { LeafSilhouette } from "../components/LeafSilhouette";

export function LibraryPage() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <Seo
        path="/library"
        title={t(
          "Online Library & Publications — Awakened",
          "المكتبة الرقمية والإصدارات التوعوية — أوايكند"
        )}
        description={t(
          "Official parent guides, family digital safety agreements, and wellbeing publications from Awakened for Consultations in Qatar.",
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
            padding: "160px 24px 90px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle ambient botanical glow */}
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
                margin: "0 0 20px",
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
                margin: "0 auto 32px",
                lineHeight: 1.7,
              }}
            >
              {t(
                "Practical toolkits, parent guides, and evidence-informed publications crafted by Awakened for Consultations to empower individuals, families, and organizations across Qatar.",
                "أدلة عملية ومطبوعات توعوية مُعدّة بعناية من أوايكند للاستشارات لتمكين الأسر والآباء والمؤسسات في دولة قطر نحو حياة رقمية ونفسية آمنة ومتوازنة."
              )}
            </p>

            {/* Quick stats or badges */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "14px",
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
                {t("Free Public Access", "وصول مجاني ومتاح للجميع")}
              </span>
            </div>
          </div>
        </section>

        {/* ── FEATURED PUBLICATION SHOWCASE ── */}
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
                {/* Left / Info */}
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
                      "The complete 3-part leaflet folder published by Awakened for Consultations. Designed to give parents and educators clear, reassuring, and actionable guidance for navigating digital parenting in Qatar.",
                      "السلسلة التوعوية الشاملة المكونة من ثلاثة كتيبات متكاملة أصدرتها شركة أوايكند للاستشارات، لتمكين الوالدين والمربين من أدوات عملية مطمئنة تعزز السلامة والأمان النفسي للأبناء."
                    )}
                  </p>

                  {/* Included leaflets summary list */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "0.9rem" }}>
                      <span style={{ color: "#C9A84C", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1 }}>•</span>
                      <span>
                        <strong>{t("Leaflet 1 — Parent Guide:", "الكتيب ١ — دليل الوالدين:")}</strong>{" "}
                        {t(
                          "5 core digital habits, healthy screen time check-ins, and conversation starters.",
                          "القواعد الخمس لحماية الأبناء، وقت الشاشة الصحي، وأسئلة لبدء الحوار بفضول لا باتهام."
                        )}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "0.9rem" }}>
                      <span style={{ color: "#C9A84C", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1 }}>•</span>
                      <span>
                        <strong>{t("Leaflet 2 — Checklist & Agreement:", "الكتيب ٢ — قائمة التحقق واتفاق الأسرة:")}</strong>{" "}
                        {t(
                          "10 simple safety checks and a living family agreement template for screen-free boundaries.",
                          "١٠ مراجعات أمان بسيطة ونموذج ميثاق الأسرة للرفاه الرقمي وأوقات خالية من الشاشات."
                        )}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "0.9rem" }}>
                      <span style={{ color: "#C9A84C", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1 }}>•</span>
                      <span>
                        <strong>{t("Leaflet 3 — Recognise, Respond & Support:", "الكتيب ٣ — التعرّف والاستجابة والدعم:")}</strong>{" "}
                        {t(
                          "Cyberbullying, grooming detection, 5 steps to respond calmly, and official Qatar helplines.",
                          "مؤشرات التنمر والاستدراج الإلكتروني، ٥ خطوات للاستجابة الهادئة، وأرقام الطوارئ الرسمية في قطر."
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                    <a
                      href="/documents/Awakened_Parent_Digital_Safety_Guide_Qatar.pdf"
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
                        transition: "transform 0.2s, background 0.2s",
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      {t("Download Folder (PDF 3.9 MB)", "تحميل المجلد التوعوي بالكامل (PDF ٣.٩ ميجابايت)")}
                    </a>

                    <a
                      href="/documents/Awakened_Parent_Digital_Safety_Guide_Qatar.pdf"
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
                      {t("Open / Print Brochure", "استعراض وطباعة المطبوعة")}
                    </a>
                  </div>
                </div>

                {/* Right / Visual Preview Card */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #FAF7F2 0%, #F3ECE1 100%)",
                    borderRadius: "12px",
                    border: "1px solid #D9CBBA",
                    padding: "28px",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      border: "2px solid #C9A84C",
                      borderRadius: "8px",
                      padding: "24px 20px",
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

        {/* ── INTERACTIVE LEAFLET EXPLORER (READ ONLINE) ── */}
        <section style={{ maxWidth: "1140px", margin: "0 auto 80px", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
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
              {t("ONLINE READING & INTERACTIVE TOOLKIT", "القراءة التفاعلية واستعراض المحتوى")}
            </span>
            <h2
              style={{
                fontFamily: isAr ? "var(--font-arabic)" : "'Georgia', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "#141F15",
                margin: 0,
                fontWeight: 600,
              }}
            >
              {t("Explore the 3 Guides", "استكشف محاور الكتيبات الثلاثة")}
            </h2>
          </div>

          {/* Navigation Tabs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              flexWrap: "wrap",
              marginBottom: "32px",
            }}
          >
            {[
              {
                id: 1,
                titleEn: "Leaflet 1: Parent Guide",
                titleAr: "الكتيب ١: دليل الوالدين",
              },
              {
                id: 2,
                titleEn: "Leaflet 2: Checklist & Agreement",
                titleAr: "الكتيب ٢: قائمة التحقق والاتفاق",
              },
              {
                id: 3,
                titleEn: "Leaflet 3: Recognise & Support",
                titleAr: "الكتيب ٣: التعرّف والاستجابة",
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: activeTab === tab.id ? "#141F15" : "#FFFFFF",
                  color: activeTab === tab.id ? "#FAF7F2" : "#141F15",
                  border: activeTab === tab.id ? "1px solid #C9A84C" : "1px solid #D9CBBA",
                  borderRadius: "8px",
                  padding: "12px 24px",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.25s",
                  boxShadow: activeTab === tab.id ? "0 4px 14px rgba(20, 31, 21, 0.12)" : "none",
                }}
              >
                {t(tab.titleEn, tab.titleAr)}
              </button>
            ))}
          </div>

          {/* TAB 1 CONTENT: PARENT GUIDE */}
          {activeTab === 1 && (
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "14px",
                border: "1px solid #D9CBBA",
                padding: "36px",
                boxShadow: "0 8px 30px rgba(20, 31, 21, 0.05)",
              }}
            >
              <div style={{ maxWidth: "840px", margin: "0 auto" }}>
                {/* Quote Box */}
                <div
                  style={{
                    background: "#FAF7F2",
                    borderLeft: isAr ? "none" : "4px solid #C9A84C",
                    borderRight: isAr ? "4px solid #C9A84C" : "none",
                    padding: "20px 24px",
                    borderRadius: "6px",
                    marginBottom: "32px",
                  }}
                >
                  <h4 style={{ margin: "0 0 6px", fontSize: "0.85rem", textTransform: "uppercase", color: "#9E7E2E", letterSpacing: "0.1em" }}>
                    {t("Why This Matters", "لماذا هذا مهم")}
                  </h4>
                  <p style={{ margin: 0, fontSize: "1.05rem", color: "#141F15", fontStyle: "italic", lineHeight: "1.7" }}>
                    {t(
                      "“Digital parenting is not about watching every click. It is about helping children build the knowledge, confidence and judgement to use technology safely—and making sure they know they can come to you when something feels wrong.”",
                      "«التربية الرقمية لا تعني مراقبة كل نقرة، بل مساعدة الأطفال على اكتساب المعرفة والثقة وحسن التقدير لاستخدام التقنية بأمان، والتأكد من أنهم يعرفون أنهم يستطيعون اللجوء إليكم عندما يشعرون بأن شيئاً ما ليس على ما يرام.»"
                    )}
                  </p>
                </div>

                {/* 5 Core Principles Grid */}
                <h3
                  style={{
                    fontFamily: isAr ? "var(--font-arabic)" : "'Georgia', serif",
                    fontSize: "1.45rem",
                    color: "#141F15",
                    margin: "0 0 20px",
                  }}
                >
                  {t("5 Core Principles for Families", "القواعد الخمس الأساسية لحماية الأبناء")}
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "36px" }}>
                  <div style={{ background: "#FAF7F2", padding: "20px", borderRadius: "8px", border: "1px solid #EAE3D6" }}>
                    <div style={{ fontWeight: 700, color: "#141F15", marginBottom: "8px", fontSize: "1rem" }}>
                      1. {t("Protect personal information", "احموا المعلومات الشخصية")}
                    </div>
                    <p style={{ fontSize: "0.88rem", color: "#555E57", lineHeight: "1.6", margin: 0 }}>
                      {t(
                        "Help children keep private: full name, home address, school and uniform details, phone number, passwords, live location, ID documents and private photos. Anything shared can be copied or forwarded.",
                        "علّموا الأطفال الحفاظ على سرية: الاسم الكامل، عنوان المنزل، تفاصيل المدرسة والزي المدرسي، رقم الهاتف، كلمات المرور، الموقع المباشر، وثائق الهوية، والصور الخاصة."
                      )}
                    </p>
                  </div>

                  <div style={{ background: "#FAF7F2", padding: "20px", borderRadius: "8px", border: "1px solid #EAE3D6" }}>
                    <div style={{ fontWeight: 700, color: "#141F15", marginBottom: "8px", fontSize: "1rem" }}>
                      2. {t("Make accounts safer", "عززوا أمان الحسابات")}
                    </div>
                    <p style={{ fontSize: "0.88rem", color: "#555E57", lineHeight: "1.6", margin: 0 }}>
                      {t(
                        "Use strong, unique passwords and two-step verification (2FA). Set accounts to private, review who can message or tag your child, limit location sharing. Parental controls support conversation—they do not replace it.",
                        "استخدموا كلمات مرور قوية ومختلفة وفعّلوا التحقق بخطوتين. اجعلوا الحسابات خاصة، وراجعوا من يستطيع مراسلة طفلكم، وقّللوا مشاركة الموقع. الرقابة الأبوية تدعم الحوار ولا تحل محله."
                      )}
                    </p>
                  </div>

                  <div style={{ background: "#FAF7F2", padding: "20px", borderRadius: "8px", border: "1px solid #EAE3D6" }}>
                    <div style={{ fontWeight: 700, color: "#141F15", marginBottom: "8px", fontSize: "1rem" }}>
                      3. {t("Pause before clicking or sharing", "توقفوا قبل الضغط أو المشاركة")}
                    </div>
                    <p style={{ fontSize: "0.88rem", color: "#555E57", lineHeight: "1.6", margin: 0 }}>
                      {t(
                        "Teach children not to open unexpected links, files or giveaways, or answer messages asking for passwords, codes, money or personal details. Check with a trusted adult before downloading unfamiliar apps.",
                        "علّموا الأطفال عدم فتح الروابط أو الملفات أو الهدايا المجانية غير المتوقعة، وعدم الرد على طلبات كلمات المرور أو الرموز أو المال، والرجوع لشخص بالغ موثوق قبل تنزيل تطبيق غير معروف."
                      )}
                    </p>
                  </div>

                  <div style={{ background: "#FAF7F2", padding: "20px", borderRadius: "8px", border: "1px solid #EAE3D6" }}>
                    <div style={{ fontWeight: 700, color: "#141F15", marginBottom: "8px", fontSize: "1rem" }}>
                      4. {t("Keep communication open", "حافظوا على الحوار مفتوحاً")}
                    </div>
                    <p style={{ fontSize: "0.88rem", color: "#555E57", lineHeight: "1.6", margin: 0 }}>
                      {t(
                        "Talk regularly about online experiences without shaming or blaming. A child who feels safe telling you about small worries is far more likely to tell you about big ones.",
                        "تحدثوا بانتظام عن التجارب الرقمية دون إحراج أو لوم. فالطفل الذي يشعر بالأمان عند إخباركم بالمخاوف الصغيرة يزداد احتمال أن يخبركم بالمخاوف الكبيرة."
                      )}
                    </p>
                  </div>
                </div>

                {/* Healthy Screen Time & 3-Question check-in */}
                <div style={{ background: "#F4EDE2", border: "1px solid #D9CBBA", borderRadius: "10px", padding: "24px" }}>
                  <h4 style={{ margin: "0 0 12px", fontFamily: "'Georgia', serif", fontSize: "1.2rem", color: "#141F15" }}>
                    {t("3-Question Check-in for Screen Time", "مراجعة سريعة بثلاثة أسئلة لوقت الشاشة")}
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.92rem", color: "#333" }}>
                    <div>
                      <strong>1.</strong> {t("What is the screen replacing—sleep, movement, study, play or conversation?", "ما الذي تحل الشاشة محله: النوم أم الحركة أم الدراسة أم اللعب أم الحوار؟")}
                    </div>
                    <div>
                      <strong>2.</strong> {t("How does my child seem during and after this activity?", "كيف يبدو طفلي أثناء هذا النشاط وبعده؟")}
                    </div>
                    <div>
                      <strong>3.</strong> {t("Is the content age-appropriate, safe, useful or enjoyable?", "هل المحتوى مناسب لعمر الطفل وآمن ومفيد أو ممتع؟")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2 CONTENT: CHECKLIST & AGREEMENT */}
          {activeTab === 2 && (
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "14px",
                border: "1px solid #D9CBBA",
                padding: "36px",
                boxShadow: "0 8px 30px rgba(20, 31, 21, 0.05)",
              }}
            >
              <div style={{ maxWidth: "840px", margin: "0 auto" }}>
                <h3
                  style={{
                    fontFamily: isAr ? "var(--font-arabic)" : "'Georgia', serif",
                    fontSize: "1.45rem",
                    color: "#141F15",
                    margin: "0 0 12px",
                  }}
                >
                  {t("10 Simple Digital Safety Checks", "١٠ مراجعات بسيطة للسلامة الرقمية")}
                </h3>
                <p style={{ fontSize: "0.92rem", color: "#667068", margin: "0 0 24px" }}>
                  {t(
                    "Review together as a family and choose one or two actions to complete this week:",
                    "راجعوا القائمة معاً واختاروا خطوة أو خطوتين لإنجازها هذا الأسبوع:"
                  )}
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "12px", marginBottom: "36px" }}>
                  {[
                    {
                      en: "We know which apps, games and platforms our child uses, and their age guidance.",
                      ar: "نعرف التطبيقات والألعاب والمنصات التي يستخدمها طفلنا وإرشاداتها العمرية.",
                    },
                    {
                      en: "Privacy settings are reviewed; profiles are set to private where appropriate.",
                      ar: "راجعنا إعدادات الخصوصية، والملفات الشخصية خاصة حيثما كان ذلك مناسباً.",
                    },
                    {
                      en: "We have limited who can contact, tag or add our child to groups.",
                      ar: "حددنا من يمكنه التواصل مع طفلنا أو الإشارة إليه أو إضافته إلى المجموعات.",
                    },
                    {
                      en: "Location sharing is off unless there is a clear, agreed reason.",
                      ar: "مشاركة الموقع متوقفة ما لم يوجد سبب واضح ومتفق عليه.",
                    },
                    {
                      en: "Passwords are strong and unique; two-step verification is turned on.",
                      ar: "كلمات المرور قوية ومختلفة، والتحقق بخطوتين مفعّل.",
                    },
                    {
                      en: "Our child never shares passwords, codes or private images.",
                      ar: "لا يشارك طفلنا أبداً كلمات المرور أو الرموز أو الصور الخاصة.",
                    },
                    {
                      en: "Devices and apps are updated; downloads and purchases require parent approval.",
                      ar: "الأجهزة والتطبيقات محدثة، وتتطلب التنزيلات والمشتريات موافقة الوالدين.",
                    },
                    {
                      en: "We have agreed screen-free times and where devices are kept at night.",
                      ar: "اتفقنا على أوقات خالية من الشاشات وعلى مكان حفظ الأجهزة ليلاً.",
                    },
                    {
                      en: "Our child knows how to block and report an account and tell a trusted adult.",
                      ar: "يعرف طفلنا كيف يحظر الحساب ويبلغ عنه ويخبر شخصاً بالغاً موثوقاً.",
                    },
                    {
                      en: "We talk regularly about online experiences without shaming or blaming.",
                      ar: "نتحدث بانتظام عن التجارب الرقمية دون إحراج أو لوم.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        background: "#FAF7F2",
                        padding: "14px 16px",
                        borderRadius: "8px",
                        border: "1px solid #EAE3D6",
                        fontSize: "0.88rem",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          width: "22px",
                          height: "22px",
                          borderRadius: "4px",
                          border: "1.5px solid #C9A84C",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          fontSize: "12px",
                          color: "#1F4225",
                          fontWeight: 700,
                        }}
                      >
                        &#10003;
                      </span>
                      <span>{t(item.en, item.ar)}</span>
                    </div>
                  ))}
                </div>

                {/* Practical Plan Box */}
                <div
                  style={{
                    background: "#FAF7F2",
                    border: "1px solid #C9A84C",
                    borderRadius: "10px",
                    padding: "26px",
                  }}
                >
                  <h4 style={{ margin: "0 0 10px", fontFamily: "'Georgia', serif", fontSize: "1.2rem", color: "#141F15" }}>
                    {t("Our Practical Family Plan", "خطتنا العملية وميثاق الأسرة")}
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "#667068", margin: "0 0 18px", lineHeight: "1.6" }}>
                    {t(
                      "This is a living agreement. Families can revisit it without shame whenever needs, technology, or circumstances change.",
                      "هذا اتفاق حي قابل للمراجعة. يمكن للأسرة العودة إليه دون حرج عندما تتغير الاحتياجات أو التقنية أو ظروف الأسرة."
                    )}
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px" }}>
                    <div style={{ background: "#FFFFFF", padding: "14px", borderRadius: "6px", border: "1px solid #EAE3D6" }}>
                      <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "#9E7E2E", fontWeight: 700 }}>
                        {t("Screen-Free Times & Places", "أوقاتنا وأماكننا الخالية من الشاشات")}
                      </span>
                      <p style={{ margin: "6px 0 0", fontSize: "0.85rem", color: "#333" }}>
                        {t("Meals, family gatherings, and bedrooms at night.", "وجبات الطعام، اللحظات العائلية، وغرف النوم ليلاً.")}
                      </p>
                    </div>

                    <div style={{ background: "#FFFFFF", padding: "14px", borderRadius: "6px", border: "1px solid #EAE3D6" }}>
                      <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "#9E7E2E", fontWeight: 700 }}>
                        {t("Night Charging Station", "مكان شحن الأجهزة ليلاً")}
                      </span>
                      <p style={{ margin: "6px 0 0", fontSize: "0.85rem", color: "#333" }}>
                        {t("Central family charging basket outside bedrooms.", "محطة شحن مركزية مشتركة خارج غرف النوم.")}
                      </p>
                    </div>

                    <div style={{ background: "#FFFFFF", padding: "14px", borderRadius: "6px", border: "1px solid #EAE3D6" }}>
                      <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "#9E7E2E", fontWeight: 700 }}>
                        {t("Trusted Adults List", "البالغون الموثوقون")}
                      </span>
                      <p style={{ margin: "6px 0 0", fontSize: "0.85rem", color: "#333" }}>
                        {t("Parents, family counselor, school safeguarding lead.", "الوالدان، المستشار الأسري، مسؤول الحماية في المدرسة.")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3 CONTENT: RECOGNISE & SUPPORT */}
          {activeTab === 3 && (
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "14px",
                border: "1px solid #D9CBBA",
                padding: "36px",
                boxShadow: "0 8px 30px rgba(20, 31, 21, 0.05)",
              }}
            >
              <div style={{ maxWidth: "840px", margin: "0 auto" }}>
                <h3
                  style={{
                    fontFamily: isAr ? "var(--font-arabic)" : "'Georgia', serif",
                    fontSize: "1.45rem",
                    color: "#141F15",
                    margin: "0 0 12px",
                  }}
                >
                  {t(
                    "Recognise the Signs: Cyberbullying, Grooming & Suspicious Contact",
                    "التعرّف على المؤشرات: التنمّر الإلكتروني، الاستدراج، والتواصل المريب"
                  )}
                </h3>
                <p style={{ fontSize: "0.92rem", color: "#667068", margin: "0 0 24px", lineHeight: "1.6" }}>
                  {t(
                    "One sign alone does not prove harm. Always respond with care, curiosity, and calm support.",
                    "مؤشر واحد وحده لا يثبت بالضرورة وقوع أذى؛ استجيبوا دائماً باهتمام وهدوء وفضول دون استباق الأحكام."
                  )}
                </p>

                {/* Warning Signs List */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px", marginBottom: "36px" }}>
                  {[
                    {
                      en: "Secrecy or distress when using or leaving a device",
                      ar: "السرية الزائدة أو الانزعاج عند استخدام الجهاز أو تركه",
                    },
                    {
                      en: "Sudden fear of incoming messages, calls or alerts",
                      ar: "خوف مفاجئ أو قلق عند استقبال الرسائل أو الإشعارات",
                    },
                    {
                      en: "Pressure to keep an online relationship secret from family",
                      ar: "ضغط خارجي لإبقاء علاقة عبر الإنترنت سراً عن الأسرة",
                    },
                    {
                      en: "Requests for private photos or threats to expose details",
                      ar: "طلب صور خاصة أو إرسال تهديدات بالتشهير أو الابتزاز",
                    },
                    {
                      en: "Unexplained gifts, game credits, or money from online contacts",
                      ar: "هدايا أو أموال أو رصيد ألعاب من شخص عبر الإنترنت",
                    },
                    {
                      en: "An account attempting to move your child to an unmonitored private chat",
                      ar: "حساب يحاول نقل طفلكم إلى تطبيق محادثة خاصة غير مراقبة",
                    },
                  ].map((sign, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "#FFF9F9",
                        border: "1px solid #FED7D7",
                        borderRadius: "8px",
                        padding: "14px",
                        fontSize: "0.88rem",
                        color: "#742A2A",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span style={{ color: "#E53E3E", fontSize: "1.1rem" }}>⚠️</span>
                      <span>{t(sign.en, sign.ar)}</span>
                    </div>
                  ))}
                </div>

                {/* 5 Steps to Respond */}
                <h3
                  style={{
                    fontFamily: isAr ? "var(--font-arabic)" : "'Georgia', serif",
                    fontSize: "1.35rem",
                    color: "#141F15",
                    margin: "0 0 16px",
                  }}
                >
                  {t(
                    "If Your Child Tells You Something Worrying (5 Steps)",
                    "إذا أخبركم طفلكم بأمر مقلق (خطوات الاستجابة الخمس)"
                  )}
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "36px" }}>
                  <div style={{ background: "#FAF7F2", padding: "16px 20px", borderRadius: "8px", border: "1px solid #EAE3D6" }}>
                    <strong>1. {t("Stay Calm & Thank Your Child:", "حافظوا على هدوئكم واشكروا طفلكم:")}</strong>{" "}
                    {t(
                      "Say: “You did the right thing by telling me. I am here to help you.”",
                      "قولوا: «أحسنت حين أخبرتني، وأنا فخور بصراحتك وأنا هنا لمساعدتك دائماً»."
                    )}
                  </div>
                  <div style={{ background: "#FAF7F2", padding: "16px 20px", borderRadius: "8px", border: "1px solid #EAE3D6" }}>
                    <strong>2. {t("Listen Without Blame:", "استمعوا دون لوم أو تحقيق:")}</strong>{" "}
                    {t(
                      "Don’t interrogate, shame, or threaten to confiscate every device at once.",
                      "لا تستجوبوا الطفل ولا تحرجوه ولا تهددوه بحرمانه الفوري من جميع الأجهزة."
                    )}
                  </div>
                  <div style={{ background: "#FAF7F2", padding: "16px 20px", borderRadius: "8px", border: "1px solid #EAE3D6" }}>
                    <strong>3. {t("Preserve Evidence Safely:", "احفظوا الأدلة بأمان:")}</strong>{" "}
                    {t(
                      "Capture screenshots, messages, usernames, links, and dates. Never edit, forward, or repost harmful material.",
                      "احفظوا لقطات الشاشة والرسائل وأسماء المستخدمين والتواريخ، وتجنبوا تداول أو إعادة إرسال المحتوى المؤذي."
                    )}
                  </div>
                  <div style={{ background: "#FAF7F2", padding: "16px 20px", borderRadius: "8px", border: "1px solid #EAE3D6" }}>
                    <strong>4. {t("Stop Contact & Secure Accounts:", "أوقفوا التواصل فوراً وحصّنوا الحسابات:")}</strong>{" "}
                    {t(
                      "Block and report the account. Review privacy settings and change passwords from a secure, clean device.",
                      "احظروا الحساب وأبلغوا عنه، وراجعوا إعدادات الخصوصية وغيّروا كلمات المرور من جهاز آمن."
                    )}
                  </div>
                  <div style={{ background: "#FAF7F2", padding: "16px 20px", borderRadius: "8px", border: "1px solid #EAE3D6" }}>
                    <strong>5. {t("Engage Official Support:", "اطلبوا الدعم من الجهات المختصة:")}</strong>{" "}
                    {t(
                      "Inform the school safeguarding lead if peers are involved; reach out to Qatar child protection and cybercrime authorities.",
                      "أبلغوا مسؤول الحماية في المدرسة إذا كان زملاء الدراسة معنيين، وتواصلوا مع الجهات الرسمية في قطر."
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
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
                  {t("MOI Cybercrime Combating Centre", "مركز مكافحة الجرائم الإلكترونية — وزارة الداخلية")}
                </div>
                <p style={{ fontSize: "0.85rem", color: "#A8B5AA", lineHeight: "1.6", margin: "0 0 10px" }}>
                  {t(
                    "Tel: 2347444 • Email: cccc@moi.gov.qa. Official reporting for online blackmail, threats, and cyber offences.",
                    "هاتف: ٢٣٤٧٤٤٤ • البريد الإلكتروني: cccc@moi.gov.qa. لبلاغات الجرائم الإلكترونية ومنها الابتزاز والتهديد."
                  )}
                </p>
              </div>
            </div>

            {/* Disclaimer note */}
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
                href="/documents/Awakened_Company_Profile.pdf"
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
