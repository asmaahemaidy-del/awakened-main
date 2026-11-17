import { useLanguage } from "../i18n/LanguageContext";
import { Seo } from "../components/Seo";

export function PrivacyPolicyPage() {
  const { t, isAr } = useLanguage();

  const fontBody = isAr ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = isAr ? "var(--font-arabic)" : "var(--font-heading)";

  const h2Style = {
    fontFamily: fontHead,
    fontStyle: isAr ? "normal" : "italic",
    fontSize: "1.4rem",
    color: "var(--brand-forest)",
    marginTop: 40,
    marginBottom: 12,
  };

  const pStyle = {
    fontFamily: fontBody,
    fontSize: isAr ? "0.9rem" : "0.88rem",
    color: "#2E4A32",
    lineHeight: isAr ? 2 : 1.75,
    marginBottom: 16,
  };

  const TODO = ({ en }) => (
    <mark
      style={{
        background: "rgba(201,168,76,0.25)",
        padding: "2px 6px",
        borderRadius: 2,
        fontSize: "0.82rem",
      }}
    >
      TODO: OWNER TO CONFIRM — {en}
    </mark>
  );

  return (
    <>
      <Seo
        title="Privacy Policy"
        titleAr="سياسة الخصوصية"
        description="How Awakened collects, uses, and protects your personal data."
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
            maxWidth: 820,
            margin: "0 auto",
            padding: "0 24px",
            direction: isAr ? "rtl" : "ltr",
          }}
        >
          {/* DRAFT BANNER */}
          <div
            style={{
              border: "2px solid var(--brand-gold)",
              background: "rgba(201,168,76,0.1)",
              padding: 16,
              marginBottom: 32,
              borderRadius: 4,
              fontSize: "0.85rem",
              color: "#7A5C1E",
              fontFamily: fontBody,
            }}
          >
            {t(
              "⚠ DRAFT — This policy is not yet in effect. Certain details are pending owner confirmation and are marked below.",
              "⚠ مسودة — هذه السياسة لم تدخل حيز التنفيذ بعد. بعض التفاصيل تنتظر تأكيد المالك وهي موضحة أدناه."
            )}
          </div>

          {/* PAGE TITLE */}
          <h1
            style={{
              fontFamily: fontHead,
              fontStyle: isAr ? "normal" : "italic",
              fontSize: "2rem",
              color: "var(--brand-forest)",
              marginBottom: 8,
            }}
          >
            {t("Privacy Policy", "سياسة الخصوصية")}
          </h1>
          <p style={{ ...pStyle, fontSize: "0.8rem", color: "#7A5C1E", marginBottom: 32 }}>
            {t(
              <>Effective Date: <TODO en="insert effective date" /></>,
              <>تاريخ السريان: <TODO en="أدخل تاريخ السريان" /></>
            )}
          </p>

          {/* 1. INTRODUCTION */}
          <h2 style={h2Style}>{t("1. Introduction", "١. المقدمة")}</h2>
          <p style={pStyle}>
            {t(
              <>
                <TODO en="exact legal name on CR 241070" /> (&ldquo;Awakened&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;), a company registered in Qatar under Commercial Registration No. 241070, operates the website https://www.gotawakened.com and provides coaching and wellness services. This Privacy Policy explains how we collect, use, disclose, and protect personal information you provide when using our services.
              </>,
              <>
                <TODO en="exact legal name on CR 241070" /> (&ldquo;أوايكند&rdquo;)، شركة مسجلة في قطر بموجب السجل التجاري رقم 241070، تُشغّل الموقع الإلكتروني https://www.gotawakened.com وتقدم خدمات التدريب والعافية. توضح سياسة الخصوصية هذه كيفية جمعنا للمعلومات الشخصية واستخدامها والإفصاح عنها وحمايتها عند استخدام خدماتنا.
              </>
            )}
          </p>
          <p style={pStyle}>
            {t(
              "By using our website or services you accept the practices described in this policy.",
              "باستخدامك موقعنا الإلكتروني أو خدماتنا، فإنك توافق على الممارسات الموضحة في هذه السياسة."
            )}
          </p>

          {/* 2. DATA COLLECTED */}
          <h2 style={h2Style}>{t("2. Data We Collect", "٢. البيانات التي نجمعها")}</h2>
          <p style={pStyle}>
            {t(
              "We may collect the following categories of personal data:",
              "قد نجمع الفئات التالية من البيانات الشخصية:"
            )}
          </p>
          <ul style={{ ...pStyle, paddingInlineStart: 20, marginBottom: 0 }}>
            <li style={{ marginBottom: 10 }}>
              <strong>{t("Contact form data:", "بيانات نموذج التواصل:")}</strong>{" "}
              {t(
                "name, email address, phone number, message content, and inquiry type.",
                "الاسم، البريد الإلكتروني، رقم الهاتف، محتوى الرسالة، ونوع الاستفسار."
              )}
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>{t("Booking and payment data:", "بيانات الحجز والدفع:")}</strong>{" "}
              {t(
                "when our payment integration is live, we will collect booking details and payment confirmation data. Card data is processed directly by our payment provider and is not stored by us.",
                "عند تفعيل بوابة الدفع، سنجمع تفاصيل الحجز وبيانات تأكيد الدفع. تُعالَج بيانات البطاقة مباشرةً من قِبل مزود الدفع ولا نحتفظ بها."
              )}
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>{t("Analytics and device data:", "بيانات التحليلات والجهاز:")}</strong>{" "}
              {t(
                "IP address, browser type, device type, pages visited, and session duration, collected automatically via analytics tools.",
                "عنوان IP، نوع المتصفح، نوع الجهاز، الصفحات المُزارة، ومدة الجلسة، يتم جمعها تلقائياً عبر أدوات التحليل."
              )}
            </li>
          </ul>

          {/* 3. PURPOSE */}
          <h2 style={h2Style}>{t("3. How We Use Your Data", "٣. كيف نستخدم بياناتك")}</h2>
          <ul style={{ ...pStyle, paddingInlineStart: 20 }}>
            <li style={{ marginBottom: 10 }}>
              {t("To respond to enquiries and service requests.", "للرد على الاستفسارات وطلبات الخدمة.")}
            </li>
            <li style={{ marginBottom: 10 }}>
              {t("To process bookings and payments.", "لمعالجة الحجوزات والمدفوعات.")}
            </li>
            <li style={{ marginBottom: 10 }}>
              {t("To deliver and improve our coaching and wellness services.", "لتقديم خدمات التدريب والعافية وتحسينها.")}
            </li>
            <li style={{ marginBottom: 10 }}>
              {t(
                "To send administrative communications (booking confirmations, reminders).",
                "لإرسال المراسلات الإدارية (تأكيدات الحجز، التذكيرات)."
              )}
            </li>
            <li style={{ marginBottom: 10 }}>
              {t("To analyse website usage and improve user experience.", "لتحليل استخدام الموقع وتحسين تجربة المستخدم.")}
            </li>
            <li style={{ marginBottom: 10 }}>
              {t("To comply with applicable Qatar law and regulations.", "للامتثال لقوانين وأنظمة قطر المعمول بها.")}
            </li>
          </ul>

          {/* 4. WHO WE SHARE WITH */}
          <h2 style={h2Style}>{t("4. Who We Share Data With", "٤. مع من نشارك البيانات")}</h2>
          <p style={pStyle}>
            {t(
              "We do not sell your personal data. We share it only with trusted service providers as necessary:",
              "لا نبيع بياناتك الشخصية. نشاركها فقط مع مزودي الخدمات الموثوقين عند الضرورة:"
            )}
          </p>
          <ul style={{ ...pStyle, paddingInlineStart: 20 }}>
            <li style={{ marginBottom: 10 }}>
              <strong>Vercel</strong> —{" "}
              {t(
                "our hosting provider, which serves website content and may process request metadata.",
                "مزود الاستضافة لدينا، يُقدّم محتوى الموقع وقد يعالج بيانات الطلبات الوصفية."
              )}
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>SkipCash</strong> —{" "}
              {t(
                <>
                  payment processor (integration pending — <TODO en="confirm SkipCash as payment provider" />).
                </>,
                <>
                  معالج الدفع (التكامل قيد التنفيذ — <TODO en="تأكيد SkipCash كمزود للدفع" />).
                </>
              )}
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>{t("Email service providers", "مزودو خدمة البريد الإلكتروني")}</strong> —{" "}
              {t(
                "used to deliver transactional and administrative emails.",
                "يُستخدمون لإرسال رسائل البريد الإلكتروني الإدارية."
              )}
            </li>
          </ul>
          <p style={pStyle}>
            {t(
              "All third-party providers are contractually required to protect your data and use it only for the services they provide to us.",
              "يُلزَم جميع مزودو الخدمات الخارجيين تعاقدياً بحماية بياناتك واستخدامها فقط للخدمات التي يقدمونها لنا."
            )}
          </p>

          {/* 5. RETENTION */}
          <h2 style={h2Style}>{t("5. Data Retention", "٥. الاحتفاظ بالبيانات")}</h2>
          <p style={pStyle}>
            <TODO en="specify retention periods — e.g. contact form data retained for X months; booking records retained for X years per Qatar accounting requirements" />
          </p>

          {/* 6. USER RIGHTS */}
          <h2 style={h2Style}>
            {t("6. Your Rights Under Qatar Law No. 13 of 2016", "٦. حقوقك بموجب القانون القطري رقم 13 لسنة 2016")}
          </h2>
          <p style={pStyle}>
            {t(
              "Qatar's Personal Data Privacy Protection Law (Law No. 13 of 2016) grants you the following rights with respect to your personal data:",
              "يمنحك قانون حماية خصوصية البيانات الشخصية القطري (القانون رقم 13 لسنة 2016) الحقوق التالية فيما يتعلق ببياناتك الشخصية:"
            )}
          </p>
          <ul style={{ ...pStyle, paddingInlineStart: 20 }}>
            <li style={{ marginBottom: 10 }}>
              {t("The right to access the personal data we hold about you.", "الحق في الوصول إلى البيانات الشخصية التي نحتفظ بها عنك.")}
            </li>
            <li style={{ marginBottom: 10 }}>
              {t("The right to correct inaccurate or incomplete data.", "الحق في تصحيح البيانات غير الدقيقة أو غير المكتملة.")}
            </li>
            <li style={{ marginBottom: 10 }}>
              {t(
                "The right to request deletion of your personal data, subject to legal retention requirements.",
                "الحق في طلب حذف بياناتك الشخصية، مع مراعاة متطلبات الاحتفاظ القانونية."
              )}
            </li>
            <li style={{ marginBottom: 10 }}>
              {t(
                "The right to object to or restrict certain processing activities.",
                "الحق في الاعتراض على أنشطة معالجة معينة أو تقييدها."
              )}
            </li>
          </ul>
          <p style={pStyle}>
            {t(
              "To exercise any of these rights, please contact us at info@gotawakened.com.",
              "لممارسة أي من هذه الحقوق، يرجى التواصل معنا على info@gotawakened.com."
            )}
          </p>

          {/* 7. SENSITIVE DATA */}
          <h2 style={h2Style}>{t("7. Sensitive Data — Health & Wellness", "٧. البيانات الحساسة — الصحة والعافية")}</h2>
          <p style={pStyle}>
            {t(
              "In the course of coaching and wellness services, you may share health-related or personal wellbeing information with us. We treat all such information with strict confidentiality. It is used solely to tailor and deliver your programme, shared only with the practitioners directly involved in your care, and never disclosed to third parties without your explicit consent except where required by law.",
              "في سياق خدمات التدريب والعافية، قد تشاركنا معلومات تتعلق بصحتك أو عافيتك الشخصية. نتعامل مع جميع هذه المعلومات بسرية تامة. تُستخدم فقط لتخصيص برنامجك وتقديمه، وتُشارك فقط مع المختصين المعنيين برعايتك مباشرةً، ولا تُكشف لأطراف ثالثة دون موافقتك الصريحة إلا عند الاقتضاء القانوني."
            )}
          </p>

          {/* 8. CONTACT */}
          <h2 style={h2Style}>{t("8. Privacy Contact", "٨. جهة اتصال الخصوصية")}</h2>
          <p style={pStyle}>
            {t(
              "For any privacy-related questions, requests, or complaints, please contact us:",
              "لأي أسئلة أو طلبات أو شكاوى تتعلق بالخصوصية، يرجى التواصل معنا:"
            )}
          </p>
          <p style={pStyle}>
            <strong>{t("Awakened", "أوايكند")}</strong>
            <br />
            {t(
              "Zone 53, Street 627, Building 23, 2nd Floor, Office 1, Doha, Qatar",
              "المنطقة 53، شارع 627، مبنى 23، الطابق الثاني، مكتب 1، الدوحة، قطر"
            )}
            <br />
            <a href="mailto:info@gotawakened.com" style={{ color: "var(--brand-forest)" }}>
              info@gotawakened.com
            </a>
            <br />
            <a href="tel:+97477106177" style={{ color: "var(--brand-forest)" }}>
              +974 7710 6177
            </a>
          </p>

          <p style={{ ...pStyle, marginTop: 40, fontSize: "0.78rem", color: "#7A5C1E" }}>
            {t(
              <>Effective Date: <TODO en="insert effective date" /></>,
              <>تاريخ السريان: <TODO en="أدخل تاريخ السريان" /></>
            )}
          </p>
        </div>
      </section>
    </>
  );
}
