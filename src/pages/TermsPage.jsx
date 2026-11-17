import { useLanguage } from "../i18n/LanguageContext";
import { Seo } from "../components/Seo";

export function TermsPage() {
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
        title="Terms & Conditions"
        titleAr="الشروط والأحكام"
        description="Terms and conditions governing the use of Awakened's website and services."
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
              "⚠ DRAFT — These terms are not yet in effect. Certain details are pending owner confirmation and are marked below.",
              "⚠ مسودة — هذه الشروط لم تدخل حيز التنفيذ بعد. بعض التفاصيل تنتظر تأكيد المالك وهي موضحة أدناه."
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
            {t("Terms & Conditions", "الشروط والأحكام")}
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
                These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the website https://www.gotawakened.com and all coaching and wellness services offered by <TODO en="exact legal name on CR 241070" /> (&ldquo;Awakened&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;), a company registered in Qatar under Commercial Registration No. 241070.
              </>,
              <>
                تحكم هذه الشروط والأحكام (&ldquo;الشروط&rdquo;) وصولك إلى الموقع الإلكتروني https://www.gotawakened.com واستخدامه، وجميع خدمات التدريب والعافية التي تقدمها <TODO en="exact legal name on CR 241070" /> (&ldquo;أوايكند&rdquo;)، شركة مسجلة في قطر بموجب السجل التجاري رقم 241070.
              </>
            )}
          </p>
          <p style={pStyle}>
            {t(
              "By accessing our website or booking any service, you agree to be bound by these Terms. If you do not agree, please do not use our website or services.",
              "بوصولك إلى موقعنا أو حجز أي خدمة، فإنك توافق على الالتزام بهذه الشروط. إذا كنت لا توافق، يرجى عدم استخدام موقعنا أو خدماتنا."
            )}
          </p>

          {/* 2. SERVICES */}
          <h2 style={h2Style}>{t("2. Our Services", "٢. خدماتنا")}</h2>
          <p style={pStyle}>
            {t(
              "Awakened provides coaching and wellness programmes including, but not limited to, group retreats, private sessions, advisory sessions, session packages, corporate programmes, community memberships, events, and meal plan add-ons.",
              "يقدم أوايكند برامج تدريب وعافية تشمل، على سبيل المثال لا الحصر، الخلوات الجماعية، الجلسات الخاصة، الجلسات الاستشارية، الحزم، البرامج المؤسسية، عضويات المجتمع، الفعاليات، وخيارات وجبات إضافية."
            )}
          </p>
          <p style={pStyle}>
            {t(
              "Our services are intended for personal growth, wellness, and development purposes only. Nothing provided through our programmes, website, or any communication from Awakened constitutes medical advice, diagnosis, or treatment. Coaching and wellness services are not a substitute for professional medical, psychological, or psychiatric care.",
              "خدماتنا مخصصة لأغراض النمو الشخصي والعافية والتطوير فقط. لا يُشكّل أي شيء مقدَّم عبر برامجنا أو موقعنا الإلكتروني أو أي تواصل من أوايكند نصيحةً طبية أو تشخيصاً أو علاجاً. خدمات التدريب والعافية ليست بديلاً عن الرعاية الطبية أو النفسية أو النفسية التخصصية."
            )}
          </p>

          {/* 3. ELIGIBILITY */}
          <h2 style={h2Style}>{t("3. Eligibility", "٣. الأهلية")}</h2>
          <p style={pStyle}>
            {t(
              "Our services are available to individuals who are 18 years of age or older. By booking or participating in any programme, you confirm that you meet this age requirement. Participation by minors requires the written consent of a parent or legal guardian and is subject to our sole discretion.",
              "خدماتنا متاحة للأفراد الذين يبلغون من العمر 18 عاماً أو أكثر. بحجزك أو مشاركتك في أي برنامج، فإنك تؤكد استيفاءك لهذا الشرط. تشترط مشاركة القاصرين الحصول على موافقة خطية من ولي الأمر وتخضع لتقديرنا المطلق."
            )}
          </p>

          {/* 4. BOOKINGS & PAYMENTS */}
          <h2 style={h2Style}>{t("4. Bookings & Payments", "٤. الحجوزات والمدفوعات")}</h2>
          <p style={pStyle}>
            {t(
              "A booking is confirmed only upon receipt of full payment unless otherwise agreed in writing. Prices are quoted in Qatari Riyals (QAR) and are inclusive of applicable taxes unless stated otherwise.",
              "لا يُعدّ الحجز مؤكداً إلا عند استلام الدفع الكامل ما لم يُتفق على خلاف ذلك كتابيًا. الأسعار مقومة بالريال القطري (QAR) وتشمل الضرائب المعمول بها ما لم يُذكر غير ذلك."
            )}
          </p>
          <p style={pStyle}>
            {t(
              <>
                Full payment details, accepted methods, and the payment gateway will be communicated once our payment integration is live.{" "}
                <TODO en="confirm accepted payment methods and payment gateway provider" />
              </>,
              <>
                ستُوضَّح تفاصيل الدفع الكاملة والطرق المقبولة وبوابة الدفع بمجرد تفعيل التكامل.{" "}
                <TODO en="تأكيد طرق الدفع المقبولة ومزود بوابة الدفع" />
              </>
            )}
          </p>
          <p style={pStyle}>
            {t(
              "For refund and cancellation terms, please refer to our Refund Policy.",
              "للاطلاع على شروط الاسترداد والإلغاء، يرجى الرجوع إلى سياسة الاسترداد الخاصة بنا."
            )}
          </p>

          {/* 5. DISCLAIMER */}
          <h2 style={h2Style}>{t("5. Disclaimer", "٥. إخلاء المسؤولية")}</h2>
          <p style={pStyle}>
            {t(
              "Awakened's coaching and wellness programmes are designed to support your personal development and wellbeing. They are not a substitute for professional medical, psychiatric, or therapeutic services. If you have or suspect you have any medical or mental health condition, please consult a qualified healthcare provider before participating in our programmes. By participating, you acknowledge and accept that results may vary and that Awakened makes no guarantee of specific outcomes.",
              "برامج أوايكند للتدريب والعافية مصممة لدعم تطورك الشخصي ورفاهيتك. وهي ليست بديلاً عن الخدمات الطبية أو النفسية أو العلاجية المتخصصة. إذا كنت تعاني أو تشك في وجود حالة طبية أو نفسية، يرجى استشارة مقدم رعاية صحية مؤهل قبل المشاركة في برامجنا. بالمشاركة، فإنك تُقرّ بأن النتائج قد تتفاوت وأن أوايكند لا تضمن نتائج محددة."
            )}
          </p>

          {/* 6. LIMITATION OF LIABILITY */}
          <h2 style={h2Style}>{t("6. Limitation of Liability", "٦. تحديد المسؤولية")}</h2>
          <p style={pStyle}>
            <TODO en="specify limitation of liability cap (e.g. total fees paid for the relevant service) and any exclusions — confirm with legal counsel" />
          </p>
          <p style={pStyle}>
            {t(
              "To the maximum extent permitted by applicable Qatar law, Awakened shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use our services.",
              "إلى الحد الأقصى المسموح به بموجب القانون القطري المعمول به، لن يكون أوايكند مسؤولاً عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية تنشأ عن استخدامك لخدماتنا أو عدم قدرتك على استخدامها."
            )}
          </p>

          {/* 7. INTELLECTUAL PROPERTY */}
          <h2 style={h2Style}>{t("7. Intellectual Property", "٧. الملكية الفكرية")}</h2>
          <p style={pStyle}>
            {t(
              "All content on the Awakened website and in our programmes — including text, images, videos, graphics, logos, programme materials, and methodologies — is the exclusive property of Awakened or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.",
              "جميع محتويات موقع أوايكند وبرامجنا — بما في ذلك النصوص والصور ومقاطع الفيديو والرسومات والشعارات والمواد البرامجية والمنهجيات — هي الملكية الحصرية لأوايكند أو جهة الترخيص المعنية، وهي محمية بموجب قوانين الملكية الفكرية المعمول بها. لا يجوز لك إعادة إنتاجها أو توزيعها أو تعديلها أو إنشاء أعمال مشتقة منها دون موافقتنا الخطية المسبقة."
            )}
          </p>

          {/* 8. GOVERNING LAW */}
          <h2 style={h2Style}>{t("8. Governing Law", "٨. القانون الحاكم")}</h2>
          <p style={pStyle}>
            {t(
              "These Terms are governed by and construed in accordance with the laws of the State of Qatar. Any dispute arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Qatar.",
              "تخضع هذه الشروط وتُفسَّر وفقاً لقوانين دولة قطر. أي نزاع ينشأ بموجب هذه الشروط أو فيما يتعلق بها يخضع للاختصاص القضائي الحصري لمحاكم قطر."
            )}
          </p>

          {/* 9. DISPUTE RESOLUTION */}
          <h2 style={h2Style}>{t("9. Dispute Resolution", "٩. تسوية النزاعات")}</h2>
          <p style={pStyle}>
            {t(
              <>
                We encourage you to contact us first at info@gotawakened.com to resolve any concern informally. Formal dispute resolution procedures:{" "}
                <TODO en="confirm dispute resolution mechanism — e.g. mediation through Qatar Chamber of Commerce, or litigation in Qatar courts" />
              </>,
              <>
                نشجعك على التواصل معنا أولاً على info@gotawakened.com لحل أي مخاوف بشكل ودي. إجراءات تسوية النزاعات الرسمية:{" "}
                <TODO en="تأكيد آلية تسوية النزاعات — مثلاً الوساطة عبر غرفة تجارة قطر، أو التقاضي أمام محاكم قطر" />
              </>
            )}
          </p>

          {/* 10. CONTACT */}
          <h2 style={h2Style}>{t("10. Contact Us", "١٠. تواصل معنا")}</h2>
          <p style={pStyle}>
            {t(
              "If you have any questions about these Terms, please contact us:",
              "إذا كانت لديك أي أسئلة حول هذه الشروط، يرجى التواصل معنا:"
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
