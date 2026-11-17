import { useLanguage } from "../i18n/LanguageContext";
import { Seo } from "../components/Seo";

export function TermsPage() {
  const { t, isAr } = useLanguage();

  const fontBody = isAr ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = isAr ? "var(--font-arabic)" : "var(--font-heading)";

  const h2Style = {
    fontFamily: fontHead,
    fontStyle: isAr ? "normal" : "italic",
    fontSize: "1.35rem",
    color: "var(--brand-forest)",
    marginTop: 36,
    marginBottom: 12,
  };

  const pStyle = {
    fontFamily: fontBody,
    fontSize: isAr ? "0.92rem" : "0.9rem",
    color: "#2E4A32",
    lineHeight: isAr ? 2 : 1.75,
    marginBottom: 16,
  };

  return (
    <>
      <Seo
        title="Terms of Service"
        titleAr="شروط الخدمة"
        description="Terms of service governing coaching, wellbeing advisory, retreats, and payments for Awakened for Consultations."
      />
      <section
        style={{
          background: "var(--brand-cream)",
          minHeight: "100vh",
          paddingTop: 100,
          paddingBottom: 80,
        }}
      >
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            padding: "0 24px",
            direction: isAr ? "rtl" : "ltr",
          }}
        >
          {/* PAGE TITLE & META */}
          <h1
            style={{
              fontFamily: fontHead,
              fontStyle: isAr ? "normal" : "italic",
              fontSize: "2.1rem",
              color: "var(--brand-forest)",
              marginBottom: 8,
            }}
          >
            {t("Terms of Service", "شروط الخدمة")}
          </h1>
          <p style={{ ...pStyle, fontSize: "0.82rem", color: "#7A5C1E", marginBottom: 32 }}>
            {t(
              "Effective date: 18 November 2026 · Version: 1.0",
              "تاريخ السريان: 18 نوفمبر 2026 · الإصدار: 1.0"
            )}
          </p>

          {/* 1 */}
          <h2 style={h2Style}>{t("1. Who Provides the Services", "١. الجهة المقدِّمة للخدمات")}</h2>
          <p style={pStyle}>
            {t(
              "Awakened for Consultation W.L.L., trading as Awakened for Consultations, CR 241070, Doha, Qatar.",
              "شركة أوايكند للاستشارات ذ.م.م، وتعمل تحت الاسم التجاري أوايكند للاستشارات، سجل تجاري 241070، الدوحة، قطر."
            )}
          </p>

          {/* 2 */}
          <h2 style={h2Style}>{t("2. What We Provide — Non-Medical Disclaimer", "٢. ما نقدّمه — إخلاء مسؤولية غير طبي")}</h2>
          <p style={pStyle}>
            {t(
              "Coaching, wellbeing advisory, retreats, and corporate programmes aimed at personal development and lifestyle goals. We are not a medical, psychological, or psychiatric service and do not diagnose or treat conditions. Please keep seeing your doctor and do not stop or change medical treatment because of a session. In an emergency, please call 999.",
              "التدريب والإرشاد في مجال العافية، ورحلات العافية والرفاهية، والبرامج المؤسسية، بهدف التطوير الشخصي وتحقيق أهداف نمط الحياة. لسنا جهة تقدّم خدمات طبية أو علاجًا نفسيًا أو طبًّا نفسيًا، ولا نشخّص الحالات ولا نعالجها. يرجى مواصلة استشارة طبيبكم وعدم إيقاف العلاج الطبي أو تغييره بسبب أي جلسة. وفي حالات الطوارئ اتصلوا على 999."
            )}
          </p>

          {/* 3 */}
          <h2 style={h2Style}>{t("3. Eligibility", "٣. الأهلية")}</h2>
          <p style={pStyle}>
            {t(
              "You must be 18 years of age or older to purchase or use our services.",
              "يجب أن يبلغ عمركم 18 عامًا أو أكثر للاستفادة من خدماتنا أو شرائها."
            )}
          </p>

          {/* 4 */}
          <h2 style={h2Style}>{t("4. How It Works", "٤. كيف تعمل الخدمة")}</h2>
          <p style={pStyle}>
            {t(
              "A free 15-minute call, then a paid needs assessment, then matching with advisors, followed by individual sessions or packages. Advisors are matched on your stated priorities and preferences. We cannot guarantee a particular advisor or any specific individual outcome.",
              "مكالمة مجانية مدتها 15 دقيقة، ثم جلسة تقييم احتياجات مدفوعة، ثم المطابقة مع المستشارين، ثم الجلسات أو الباقات. تتم مطابقة المستشارين وفق أولوياتكم وتفضيلاتكم المعلنة. ولا يمكننا ضمان مستشار بعينه أو نتيجة بعينها."
            )}
          </p>

          {/* 5 */}
          <h2 style={h2Style}>{t("5. Consent & Session Recordings", "٥. الموافقة وتسجيل الجلسات")}</h2>
          <p style={pStyle}>
            {t(
              "Before the assessment, you must accept our consent terms, including session recording as outlined in our Privacy Policy. Optional consents (research and marketing) do not affect your access to services.",
              "قبل التقييم يجب أن تقبلوا موافقتنا، بما في ذلك تسجيل الجلسات الموضح في سياسة الخصوصية. ولا تؤثر الموافقات الاختيارية (البحث والتسويق) في خدمتكم الأساسية."
            )}
          </p>

          {/* 6 */}
          <h2 style={h2Style}>{t("6. Prices & Payment", "٦. الأسعار والدفع")}</h2>
          <p style={pStyle}>
            {t(
              "Prices are shown in Qatari Riyals (QAR) before payment. Payment is required in advance via our secure payment provider SkipCash. Cancellations and refunds strictly follow our Refund Policy (Part B).",
              "تُعرض الأسعار بالريال القطري (QAR) قبل الدفع. الدفع مطلوب مقدمًا عبر مزود الدفع الآمن سكيب كاش (SkipCash). وتسري على الإلغاء والاسترداد أحكام سياسة الاسترداد (الجزء ب)."
            )}
          </p>

          {/* 7 */}
          <h2 style={h2Style}>{t("7. Your Responsibilities", "٧. مسؤولياتكم")}</h2>
          <p style={pStyle}>
            {t(
              "You agree to provide accurate information, attend scheduled sessions on time, treat advisors respectfully, and refrain from recording, copying, or sharing sessions or materials without our explicit prior written permission.",
              "تقديم معلومات دقيقة، والحضور في الموعد المحدد، ومعاملة المستشارين باحترام، وعدم تسجيل الجلسات أو نسخ المواد أو مشاركتها دون إذن كتابي مسبق منا."
            )}
          </p>

          {/* 8 */}
          <h2 style={h2Style}>{t("8. Confidentiality", "٨. السرية")}</h2>
          <p style={pStyle}>
            {t(
              "We keep what you share confidential, except as described in the Privacy Policy and where disclosure is required by law or where there is a serious, imminent risk to life or safety.",
              "نحافظ على سرية ما تشاركونه، إلا بالقدر المبيَّن في سياسة الخصوصية وحيث يقتضي القانون الإفصاح أو يوجد خطر جسيم وداهم على الحياة أو السلامة."
            )}
          </p>

          {/* 9 */}
          <h2 style={h2Style}>{t("9. Intellectual Property", "٩. الملكية الفكرية")}</h2>
          <p style={pStyle}>
            {t(
              "Awakened’s methodology, assessments, materials, guides, and brand belong exclusively to us. You receive a personal, non-transferable right to use materials solely for your own personal development.",
              "منهجية أوايكند وتقييمها ومواردها وعلامتها التجارية ملك حصري لنا. وتحصلون على حق شخصي غير قابل للتحويل في استخدام المواد لتطويركم الذاتي فقط."
            )}
          </p>

          {/* 10 */}
          <h2 style={h2Style}>{t("10. Limitation of Liability", "١٠. تحديد المسؤولية")}</h2>
          <p style={pStyle}>
            {t(
              <>
                To the fullest extent permitted by Qatari law, Awakened is not liable for indirect or consequential loss, loss of profit, or for outcomes that depend on your own choices and actions. Our total liability for any claim relating to a service is limited to the amount you paid for that specific service. Nothing here excludes or limits liability that cannot lawfully be excluded under Qatar law, including liability for fraud, gross negligence, or wilful misconduct.
              </>,
              <>
                إلى أقصى حد يسمح به القانون، لا تتحمل أوايكند المسؤولية عن الخسائر غير المباشرة أو التبعية أو خسارة الأرباح، ولا عن النتائج التي تتوقف على اختياراتكم وأفعالكم، وتقتصر مسؤوليتنا الإجمالية عن أي مطالبة تتعلق بخدمة ما على المبلغ الذي دفعتموه مقابل تلك الخدمة تحديداً. ولا يستثني أي شيء هنا ولا يحدّ من المسؤولية التي لا يجوز قانونًا استثناؤها، بما في ذلك المسؤولية عن الاحتيال أو الإهمال الجسيم أو سوء السلوك المتعمد.
              </>
            )}
          </p>

          {/* 11 */}
          <h2 style={h2Style}>{t("11. Changes to Services or Terms", "١١. تعديل الخدمات أو الشروط")}</h2>
          <p style={pStyle}>
            {t(
              "We may update these terms from time to time. The version in force at the time of purchase applies to that purchase.",
              "يجوز لنا تحديث هذه الشروط. وتسري على كل عملية شراء النسخة السارية وقت الشراء."
            )}
          </p>

          {/* 12 */}
          <h2 style={h2Style}>{t("12. Force Majeure", "١٢. القوة القاهرة")}</h2>
          <p style={pStyle}>
            {t(
              "Neither party is liable for delays or failure to perform caused by events beyond reasonable control (such as extreme weather, natural disasters, or government restrictions), and we will reschedule or refund according to our Refund Policy.",
              "لا يتحمل أي من الطرفين المسؤولية عن التأخير أو عدم التنفيذ الناتج عن أحداث خارجة عن السيطرة المعقولة (كالظروف الجوية القاهرة أو القيود الحكومية)، وسنعيد الجدولة أو نسترد وفق سياسة الاسترداد."
            )}
          </p>

          {/* 13 */}
          <h2 style={h2Style}>{t("13. Governing Law & Dispute Resolution", "١٣. القانون الواجب التطبيق وتسوية النزاعات")}</h2>
          <p style={pStyle}>
            {t(
              <>
                The laws of the State of Qatar apply to these terms and the competent courts of Doha have exclusive jurisdiction.
              </>,
              <>
                تسري قوانين دولة قطر، وتختص المحاكم المختصة في الدوحة بنظر أي نزاع ناشئ عنها.
              </>
            )}
          </p>

          {/* 14 */}
          <h2 style={h2Style}>{t("14. Contact", "١٤. للتواصل")}</h2>
          <p style={pStyle}>
            <strong>{t("Awakened for Consultations", "شركة أوايكند للاستشارات ذ.م.م")}</strong>
            <br />
            {t(
              "Commercial Registration No. 241070",
              "سجل تجاري رقم 241070"
            )}
            <br />
            {t(
              "Zone 53, Street 627, Building 23, 2nd Floor, Office 1, Doha, Qatar",
              "المنطقة 53، الشارع 627، المبنى 23، الطابق الثاني، المكتب 1، الدوحة، قطر"
            )}
            <br />
            <a href="mailto:info@gotawakened.com" style={{ color: "var(--brand-forest)", fontWeight: "bold" }}>
              info@gotawakened.com
            </a>
            <br />
            <a href="tel:+97477106177" style={{ color: "var(--brand-forest)", fontWeight: "bold" }}>
              +974 7710 6177
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
