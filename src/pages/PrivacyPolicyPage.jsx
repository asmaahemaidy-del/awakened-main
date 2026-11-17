import { useLanguage } from "../i18n/LanguageContext";
import { Seo } from "../components/Seo";

export function PrivacyPolicyPage() {
  const { t, isAr } = useLanguage();

  const fontBody = isAr ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = isAr ? "var(--font-arabic)" : "var(--font-heading)";

  const h2Style = {
    fontFamily: fontHead,
    fontStyle: isAr ? "normal" : "italic",
    fontSize: "1.35rem",
    color: "var(--brand-forest)",
    marginTop: 40,
    marginBottom: 14,
  };

  const pStyle = {
    fontFamily: fontBody,
    fontSize: isAr ? "0.92rem" : "0.9rem",
    color: "#2E4A32",
    lineHeight: isAr ? 2 : 1.75,
    marginBottom: 16,
  };

  const tableHeaderStyle = {
    background: "rgba(35, 62, 49, 0.08)",
    color: "var(--brand-forest)",
    fontFamily: fontHead,
    fontWeight: "bold",
    padding: "10px 14px",
    borderBottom: "1px solid rgba(35, 62, 49, 0.15)",
    textAlign: isAr ? "right" : "left",
    fontSize: isAr ? "0.9rem" : "0.85rem",
  };

  const tableCellStyle = {
    padding: "10px 14px",
    borderBottom: "1px solid rgba(35, 62, 49, 0.08)",
    fontFamily: fontBody,
    fontSize: isAr ? "0.88rem" : "0.85rem",
    color: "#2E4A32",
    verticalAlign: "top",
    lineHeight: 1.6,
  };

  const TODO = ({ en, ar }) => (
    <mark
      style={{
        background: "rgba(201,168,76,0.3)",
        color: "#5C4108",
        padding: "2px 6px",
        borderRadius: 3,
        fontSize: "0.82rem",
        fontWeight: "bold",
      }}
    >
      [{isAr ? (ar || en) : en}]
    </mark>
  );

  return (
    <>
      <Seo
        title="Privacy & Data Protection Policy"
        titleAr="سياسة الخصوصية وحماية البيانات"
        description="How Awakened for Consultations collects, uses, and protects your personal data in accordance with Qatar Law No. 13 of 2016."
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
          {/* DRAFT BANNER */}
          <div
            style={{
              border: "2px solid var(--brand-gold)",
              background: "rgba(201,168,76,0.12)",
              padding: 16,
              marginBottom: 32,
              borderRadius: 6,
              fontSize: "0.88rem",
              color: "#7A5C1E",
              fontFamily: fontBody,
              lineHeight: 1.7,
            }}
          >
            {t(
              "⚠️ WORKING DRAFT v1.0 — This policy is prepared for legal review under Qatar Personal Data Privacy Protection Law (Law No. 13 of 2016). Items highlighted in brackets are pending owner/legal confirmation before final publication.",
              "⚠️ مسودة أولية الإصدار 1.0 — هذه ترجمة ومسودة أولية وليست استشارة قانونية. يجب أن يراجعها محامٍ مؤهل في دولة قطر ومتحدث أصلي للغة العربية. البنود المظللة بين أقواس تنتظر تأكيد المالك/المحامي قبل الاعتماد النهائي."
            )}
          </div>

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
            {t("Privacy and Data Protection Policy", "سياسة الخصوصية وحماية البيانات")}
          </h1>
          <p style={{ ...pStyle, fontSize: "0.82rem", color: "#7A5C1E", marginBottom: 32 }}>
            {t(
              "Effective date: 18 November 2026 · Version: 1.0 · Last updated: 18 November 2026",
              "تاريخ السريان: 18 نوفمبر 2026 · الإصدار: 1.0 · آخر تحديث: 18 نوفمبر 2026"
            )}
          </p>

          {/* A1 */}
          <h2 style={h2Style}>{t("A1. Who We Are", "أ1. من نحن")}</h2>
          <p style={pStyle}>
            {t(
              "Awakened for Consultation W.L.L., trading as Awakened for Consultations (“Awakened”, “we”, “us”), Commercial Registration No. 241070, Zone 53, Street 627, Building 23, 2nd Floor, Office 1, Doha, State of Qatar, is the controller of your personal data.",
              "شركة أوايكند للاستشارات ذ.م.م، وتعمل تحت الاسم التجاري أوايكند للاستشارات («أوايكند»، «نحن»)، سجل تجاري رقم 241070، المنطقة 53، الشارع 627، المبنى 23، الطابق الثاني، المكتب 1، الدوحة، دولة قطر، هي المتحكّم في بياناتكم الشخصية."
            )}
          </p>
          <p style={pStyle}>
            {t(
              <>
                Contact: <a href="mailto:info@gotawakened.com" style={{ color: "var(--brand-forest)", fontWeight: "bold" }}>info@gotawakened.com</a> ·{" "}
                <a href="tel:+97477106177" style={{ color: "var(--brand-forest)", fontWeight: "bold" }}>+974 7710 6177</a> ·{" "}
                Privacy contact: <TODO en="privacy email and name of the person responsible" ar="البريد الإلكتروني للخصوصية واسم الشخص المسؤول" />.
              </>,
              <>
                للتواصل: <a href="mailto:info@gotawakened.com" style={{ color: "var(--brand-forest)", fontWeight: "bold" }}>info@gotawakened.com</a> ·{" "}
                <a href="tel:+97477106177" style={{ color: "var(--brand-forest)", fontWeight: "bold" }}>+974 7710 6177</a> ·{" "}
                مسؤول الخصوصية: <TODO en="privacy email and name of the person responsible" ar="البريد الإلكتروني للخصوصية واسم الشخص المسؤول" />.
              </>
            )}
          </p>
          <p style={pStyle}>
            {t(
              "This policy applies to our website gotawakened.com, our booking and assessment forms, our sessions, retreats and events, and our social media accounts. It follows Qatar’s Personal Data Privacy Protection Law (Law No. 13 of 2016). If you are not in Qatar, local rules that apply to you may add to your rights.",
              "تسري هذه السياسة على موقعنا gotawakened.com ونماذج الحجز والتقييم والجلسات الاستشارية ورحلات العافية والرفاهية والفعاليات وحساباتنا على وسائل التواصل الاجتماعي. وهي تتبع قانون حماية خصوصية البيانات الشخصية القطري (القانون رقم 13 لسنة 2016). وإذا كنتم خارج قطر، فقد تمنحكم القواعد المحلية المطبقة عليكم حقوقًا إضافية."
            )}
          </p>

          {/* A2 */}
          <h2 style={h2Style}>{t("A2. What We Collect", "أ2. ما الذي نجمعه")}</h2>
          <div style={{ overflowX: "auto", marginBottom: 20 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid rgba(35, 62, 49, 0.12)", borderRadius: 4 }}>
              <thead>
                <tr>
                  <th style={tableHeaderStyle}>{t("Category", "الفئة")}</th>
                  <th style={tableHeaderStyle}>{t("Examples", "أمثلة")}</th>
                  <th style={tableHeaderStyle}>{t("When We Collect It", "متى نجمعها")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tableCellStyle}><strong>{t("Contact details", "بيانات الاتصال")}</strong></td>
                  <td style={tableCellStyle}>{t("Name, preferred name, email, phone, language", "الاسم، الاسم المفضل، البريد الإلكتروني، الهاتف، اللغة")}</td>
                  <td style={tableCellStyle}>{t("Enquiries, bookings, forms", "الاستفسارات والحجوزات والنماذج")}</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}><strong>{t("Booking and account data", "بيانات الحجز والحساب")}</strong></td>
                  <td style={tableCellStyle}>{t("Call and session times, package, advisor", "مواعيد المكالمات والجلسات، الباقة، المستشار")}</td>
                  <td style={tableCellStyle}>{t("Booking", "عند الحجز")}</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}><strong>{t("Assessment answers", "إجابات التقييم")}</strong></td>
                  <td style={tableCellStyle}>{t("Priorities, goals, preferences, wellbeing scales", "الأولويات، الأهداف، التفضيلات، مقاييس العافية")}</td>
                  <td style={tableCellStyle}>{t("Needs assessment", "جلسة تقييم الاحتياجات")}</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}><strong>{t("Health information (special nature)", "المعلومات الصحية (بيانات ذات طبيعة خاصة)")}</strong></td>
                  <td style={tableCellStyle}>{t("Health conditions, treatments, medications you choose to share", "الحالات الصحية والعلاجات والأدوية التي تختارون مشاركتها")}</td>
                  <td style={tableCellStyle}>{t("Assessment and sessions, only with your explicit consent", "التقييم والجلسات، وبموافقتكم الصريحة فقط")}</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}><strong>{t("Session records", "سجلات الجلسات")}</strong></td>
                  <td style={tableCellStyle}>{t("Recordings and advisor notes", "التسجيلات وملاحظات المستشار")}</td>
                  <td style={tableCellStyle}>{t("Sessions, under your consent", "الجلسات، بموجب موافقتكم")}</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}><strong>{t("Payment records", "سجلات الدفع")}</strong></td>
                  <td style={tableCellStyle}>{t("Amount, date, reference, payment status. We never see or store your card number. Card payments are handled by our payment provider, SkipCash.", "المبلغ والتاريخ والمرجع وحالة الدفع. لا نرى رقم بطاقتكم ولا نخزّنه. تتم معالجة مدفوعات البطاقات عبر مزوّد الدفع لدينا، سكيب كاش (SkipCash).")}</td>
                  <td style={tableCellStyle}>{t("Payment", "عند الدفع")}</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}><strong>{t("Website data", "بيانات الموقع")}</strong></td>
                  <td style={tableCellStyle}>
                    {t(
                      "Device, pages visited, cookies (with Google Analytics and Meta Pixel only if you accept analytics and marketing cookies)",
                      "الجهاز، الصفحات التي تمت زيارتها، ملفات تعريف الارتباط (عبر أدوات التحليلات فقط في حال قبول ملفات الارتباط غير الأساسية)"
                    )}
                  </td>
                  <td style={tableCellStyle}>{t("During browsing", "أثناء التصفح")}</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}><strong>{t("Messages", "المراسلات")}</strong></td>
                  <td style={tableCellStyle}>{t("Emails, WhatsApp and social media messages", "رسائل البريد الإلكتروني ورسائل واتساب ووسائل التواصل الاجتماعي")}</td>
                  <td style={tableCellStyle}>{t("When you contact us", "عند تواصلكم معنا")}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ ...pStyle, background: "rgba(35, 62, 49, 0.05)", padding: 12, borderRadius: 4, borderLeft: isAr ? "none" : "3px solid var(--brand-forest)", borderRight: isAr ? "3px solid var(--brand-forest)" : "none" }}>
            {t(
              "⚠️ Please do not send health details in emails, social media messages, or comments. Share them only in the secure assessment form, after you have read and accepted the consent.",
              "⚠️ يرجى عدم إرسال تفاصيل صحية عبر البريد الإلكتروني أو رسائل وسائل التواصل أو التعليقات. شاركوها فقط في نموذج التقييم الآمن، بعد قراءة الموافقة وقبولها."
            )}
          </p>

          {/* A3 */}
          <h2 style={h2Style}>{t("A3. Why We Use Your Data", "أ3. لماذا نستخدم بياناتكم")}</h2>
          <div style={{ overflowX: "auto", marginBottom: 20 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid rgba(35, 62, 49, 0.12)", borderRadius: 4 }}>
              <thead>
                <tr>
                  <th style={tableHeaderStyle}>{t("Purpose", "الغرض")}</th>
                  <th style={tableHeaderStyle}>{t("Data", "البيانات")}</th>
                  <th style={tableHeaderStyle}>{t("Legal Basis", "الأساس")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>{t("Answer enquiries and run the free 15-minute call", "الرد على الاستفسارات وإجراء المكالمة التعريفية المجانية (15 دقيقة)")}</td>
                  <td style={tableCellStyle}>{t("Contact, messages", "بيانات الاتصال والرسائل")}</td>
                  <td style={tableCellStyle}>{t("Your request; our legitimate interest", "طلبكم؛ ومصلحتنا المشروعة")}</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>{t("Deliver the needs assessment, match you with advisors and provide sessions", "تقديم جلسة تقييم الاحتياجات ومطابقتكم مع المستشارين وتقديم الجلسات")}</td>
                  <td style={tableCellStyle}>{t("Contact, assessment, session records", "بيانات الاتصال والتقييم وسجلات الجلسات")}</td>
                  <td style={tableCellStyle}>{t("Contract; your consent", "العقد؛ وموافقتكم")}</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>{t("Process payments and keep accounting records", "معالجة المدفوعات والاحتفاظ بالسجلات المحاسبية")}</td>
                  <td style={tableCellStyle}>{t("Payment records", "سجلات الدفع")}</td>
                  <td style={tableCellStyle}>{t("Contract; legal obligations", "العقد؛ والالتزامات القانونية")}</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>{t("Record sessions for legal records, safety and quality", "تسجيل الجلسات للسجلات القانونية والسلامة والجودة")}</td>
                  <td style={tableCellStyle}>{t("Recordings", "التسجيلات")}</td>
                  <td style={tableCellStyle}>{t("Your explicit consent (required for sessions)", "موافقتكم الصريحة (مطلوبة لإجراء الجلسات)")}</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>{t("Process health information so your advisor can coach you safely", "معالجة المعلومات الصحية ليتمكن مستشاركم من تدريبكم بأمان")}</td>
                  <td style={tableCellStyle}>{t("Health information", "المعلومات الصحية")}</td>
                  <td style={tableCellStyle}>
                    {t(
                      <>Your explicit consent, and the permit required by law <TODO en="confirm permit status" ar="تأكيد وضع التصريح" /></>,
                      <>موافقتكم الصريحة، والتصريح الذي يشترطه القانون <TODO en="confirm permit status" ar="تأكيد وضع التصريح" /></>
                    )}
                  </td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>{t("Research and service improvement, without identifiers", "البحث وتحسين الخدمة، دون أي معرّفات")}</td>
                  <td style={tableCellStyle}>{t("De-identified assessment answers and notes or transcripts", "إجابات التقييم والملاحظات أو النصوص المفرّغة بعد إزالة هوية أصحابها")}</td>
                  <td style={tableCellStyle}>{t("Your optional, separate consent", "موافقتكم الاختيارية المنفصلة")}</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>{t("Marketing messages", "الرسائل التسويقية")}</td>
                  <td style={tableCellStyle}>{t("Contact", "بيانات الاتصال")}</td>
                  <td style={tableCellStyle}>{t("Your optional, separate consent", "موافقتكم الاختيارية المنفصلة")}</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>{t("Security, preventing fraud, legal claims and obligations", "الأمن ومنع الاحتيال والمطالبات القانونية والالتزامات")}</td>
                  <td style={tableCellStyle}>{t("Various", "متنوعة")}</td>
                  <td style={tableCellStyle}>{t("Legal obligations; legitimate interests", "الالتزامات القانونية؛ والمصالح المشروعة")}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={pStyle}>
            {t(
              "We do not sell your data, and we do not use recordings for marketing or social media. Analytics tools run only if you accept non-essential cookies, and never on assessment, consent, or booking-confirmation pages.",
              "لا نبيع بياناتكم، ولا نستخدم التسجيلات في التسويق أو على وسائل التواصل الاجتماعي. ولا تعمل أدوات التحليلات إلا إذا قبلتم ملفات تعريف الارتباط غير الأساسية، ولا تعمل أبدًا في صفحات التقييم أو الموافقة أو تأكيد الحجز."
            )}
          </p>

          {/* A4 */}
          <h2 style={h2Style}>{t("A4. Recordings", "أ4. التسجيلات")}</h2>
          <p style={pStyle}>
            {t(
              <>
                Sessions are held on Microsoft Teams and recorded as [audio / video] so that both you and Awakened have a reliable record for legal protection, dispute handling, safety, and quality. Access is limited to Awakened’s authorised administrators and is logged. Recordings are encrypted and stored in Awakened’s own database, hosted in <TODO en="country" ar="الدولة" />, and in our Microsoft 365 account (data location: <TODO en="region" ar="المنطقة" />). We keep them for 5 years, then delete them unless the law requires longer or a legal matter is open. We share them only with our legal advisers, courts, or authorities where the law requires it, or to protect our legal rights. Your advisor tells you at the start of each session that recording is on.
              </>,
              <>
                تُعقد الجلسات عبر Microsoft Teams وتُسجَّل [صوتيًا / بالصوت والصورة] ليكون لديكم ولدى أوايكند سجل موثوق للحماية القانونية ومعالجة النزاعات والسلامة والجودة. يقتصر الوصول إليها على مسؤولي النظام المصرَّح لهم في أوايكند، ويُسجَّل كل وصول. تُشفَّر التسجيلات وتُخزَّن في قاعدة بيانات أوايكند الآمنة المستضافة في <TODO en="country" ar="الدولة" />، وفي حساب Microsoft 365 لدينا (موقع البيانات: <TODO en="region" ar="المنطقة" />). نحتفظ بها 5 سنوات ثم نحذفها، ما لم يوجب القانون مدة أطول أو كانت هناك مسألة قانونية قائمة. ولا نشاركها إلا مع مستشارينا القانونيين أو المحاكم أو الجهات المختصة حيث يقتضي القانون ذلك، أو لحماية حقوقنا القانونية. ويخبركم مستشاركم في بداية كل جلسة بأن التسجيل قيد التشغيل.
              </>
            )}
          </p>

          {/* A5 */}
          <h2 style={h2Style}>{t("A5. Health Information and Research", "أ5. المعلومات الصحية والبحث")}</h2>
          <p style={pStyle}>
            {t(
              "Health information is highly sensitive. You decide what to share, and you may skip any question. We use it only to coach you safely and to match you with an appropriate advisor. We do not share it with employers, family members, or insurers, and we contact your healthcare providers only if you ask us in writing.",
              "المعلومات الصحية شديدة الحساسية. أنتم من يقرر ما تشاركونه، ويمكنكم تخطي أي سؤال. لا نستخدمها إلا لتدريبكم بأمان ولمطابقتكم مع المستشار المناسب. ولا نشاركها مع أصحاب العمل أو أفراد الأسرة أو شركات التأمين، ولا نتواصل مع مقدمي الرعاية الصحية لديكم إلا إذا طلبتم ذلك كتابةً."
            )}
          </p>
          <p style={pStyle}>
            {t(
              "Research is optional. If you agree, we may use information from your assessment and from session notes or transcripts, including health conditions and treatments you shared, only after removing identifiers: name, contact details, coded email, voice and image (audio and video are never used), exact dates, places, employers, and any unique detail. Results are grouped so no one can be singled out, we will not try to re-identify anyone, and publications contain summaries or statistics only. Saying no has no effect on your service. You can withdraw any time; we stop using your data from then on, but data already de-identified and combined into results cannot be traced back and so cannot be removed from them.",
              "البحث اختياري. إذا وافقتم، فقد نستخدم معلومات من تقييمكم ومن ملاحظات الجلسات أو نصوصها المفرّغة، بما في ذلك الحالات الصحية والعلاجات التي شاركتموها، وذلك فقط بعد إزالة المعرّفات: الاسم وبيانات الاتصال والبريد الإلكتروني المرمّز والصوت والصورة (لا يُستخدم الصوت ولا الفيديو أبدًا) والتواريخ الدقيقة والأماكن وجهات العمل وأي تفصيل فريد. تُجمَّع النتائج بحيث لا يمكن تمييز أي شخص، ولن نحاول إعادة تحديد هوية أحد، ولا تتضمن المنشورات إلا ملخصات أو إحصاءات. رفضكم لا يؤثر في خدمتكم. ويمكنكم سحب موافقتكم في أي وقت؛ فنتوقف عن استخدام بياناتكم من ذلك الحين، غير أن البيانات التي أُزيلت هويتها وجُمعت في نتائج لا يمكن تتبعها إليكم، ولذلك لا يمكن إزالتها منها."
            )}
          </p>

          {/* A6 */}
          <h2 style={h2Style}>{t("A6. Your Personal Coded Email", "أ6. بريدكم الإلكتروني الشخصي المرمّز")}</h2>
          <p style={pStyle}>
            {t(
              <>
                Every client receives a personal coded email address, created at your first payment and hosted on Microsoft 365. We use it for all communication about your programme, with neutral subject lines and no health details. Your own email is kept only for account recovery, in a restricted system. A mapping between your code and your identity is held securely, with access limited to <TODO en="named roles" ar="الأدوار المحددة" /> and logged.
              </>,
              <>
                يحصل كل عميل على عنوان بريد إلكتروني شخصي مرمّز، يُنشأ عند أول دفعة ويُستضاف على Microsoft 365. نستخدمه لكل المراسلات المتعلقة ببرنامجكم، مع عناوين محايدة ودون أي تفاصيل صحية. ويُحتفظ ببريدكم الخاص لأغراض استعادة الحساب فقط، في نظام مقيَّد الوصول. وتُحفظ العلاقة بين الرمز وهويتكم بشكل آمن، ويقتصر الوصول إليها على <TODO en="named roles" ar="الأدوار المحددة" /> ويُسجَّل.
              </>
            )}
          </p>

          {/* A7 */}
          <h2 style={h2Style}>{t("A7. Who We Share Data With", "أ7. مع من نشارك البيانات")}</h2>
          <ul style={{ ...pStyle, paddingLeft: isAr ? 0 : 20, paddingRight: isAr ? 20 : 0 }}>
            <li style={{ marginBottom: 10 }}>
              <strong>{t("Within Awakened: ", "داخل أوايكند: ")}</strong>
              {t("Your matched advisor, the matching lead, and team members who need it.", "مستشاركم المطابَق، ومسؤول المطابقة، وأعضاء الفريق الذين يحتاجون إلى البيانات.")}
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>{t("Service providers (processors): ", "مزوّدو الخدمات (معالجو البيانات): ")}</strong>
              {t(
                "SkipCash (card payments; we never receive your card number); Microsoft (Microsoft Teams for sessions, Microsoft 365 for email and files); and Google (Google Analytics) and Meta (Meta Pixel) only if you accept non-essential cookies. Providers process data on our instructions under written agreements.",
                "سكيب كاش (SkipCash لمعالجة مدفوعات البطاقات دون استلام رقم بطاقتكم)؛ ومايكروسوفت (Microsoft Teams للجلسات وMicrosoft 365 للبريد والملفات)؛ وأدوات التحليلات فقط في حال موافقتكم على ملفات تعريف الارتباط. يعالج المزوّدون البيانات بتعليماتنا وبموجب اتفاقيات مكتوبة."
              )}
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>{t("Legal and regulatory: ", "الجهات القانونية والرقابية: ")}</strong>
              {t("Lawyers, courts, and authorities where required by law.", "المحامون والمحاكم والجهات المختصة، حيث يقتضي القانون.")}
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>{t("Emergencies: ", "حالات الطوارئ: ")}</strong>
              {t("Where there is a serious risk to your life or someone else’s safety, including a child.", "عند وجود خطر جسيم على حياتكم أو على سلامة شخص آخر، بما في ذلك الأطفال.")}
            </li>
          </ul>

          {/* A8 */}
          <h2 style={h2Style}>{t("A8. Transfers Outside Qatar", "أ8. النقل خارج قطر")}</h2>
          <p style={pStyle}>
            {t(
              <>
                Microsoft, Google, and Meta may store or process data outside Qatar. We transfer data only where there is a documented basis and safeguards that protect it to a comparable standard. We keep personal data away from analytics and advertising tools: they are not loaded on assessment, consent, or booking-confirmation pages, and run only after you accept cookies. <TODO en="Counsel to confirm the legal basis for each transfer and list countries" ar="يؤكد المحامي الأساس القانوني لكل نقل ويُدرج الدول" />.
              </>,
              <>
                قد تخزّن مايكروسوفت وجوجل وميتا البيانات أو تعالجها خارج قطر. ولا ننقل البيانات إلا حيث يوجد أساس موثّق وضمانات تحميها بمستوى مماثل. ونُبقي البيانات الشخصية بعيدًا عن أدوات التحليلات والإعلانات: فلا تُحمَّل في صفحات التقييم أو الموافقة أو تأكيد الحجز، ولا تعمل إلا بعد قبولكم ملفات تعريف الارتباط. <TODO en="Counsel to confirm the legal basis for each transfer and list countries" ar="يؤكد المحامي الأساس القانوني لكل نقل ويُدرج الدول" />.
              </>
            )}
          </p>

          {/* A9 */}
          <h2 style={h2Style}>{t("A9. How Long We Keep Data", "أ9. مدة الاحتفاظ بالبيانات")}</h2>
          <div style={{ overflowX: "auto", marginBottom: 20 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid rgba(35, 62, 49, 0.12)", borderRadius: 4 }}>
              <thead>
                <tr>
                  <th style={tableHeaderStyle}>{t("Data", "البيانات")}</th>
                  <th style={tableHeaderStyle}>{t("Retention", "مدة الاحتفاظ")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>{t("Enquiries that don’t become clients", "الاستفسارات التي لا تتحول إلى عملاء")}</td>
                  <td style={tableCellStyle}><TODO en="12 months" ar="12 شهرًا" /></td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>{t("Assessment answers and advisor notes", "إجابات التقييم وملاحظات المستشار")}</td>
                  <td style={tableCellStyle}>{t("5 years after your last session", "5 سنوات بعد آخر جلسة لكم")}</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>{t("Recordings", "التسجيلات")}</td>
                  <td style={tableCellStyle}>{t("5 years, then deleted", "5 سنوات ثم تُحذف")}</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>{t("Payment and accounting records", "سجلات الدفع والمحاسبة")}</td>
                  <td style={tableCellStyle}>{t("As required by law", "وفق ما يقتضيه القانون")}</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>{t("Marketing contact", "بيانات الاتصال التسويقية")}</td>
                  <td style={tableCellStyle}>{t("Until you unsubscribe", "حتى إلغاء اشتراككم")}</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>{t("De-identified research data", "بيانات البحث بعد إزالة الهوية")}</td>
                  <td style={tableCellStyle}>{t("Kept, as it cannot identify you", "تُحفظ، إذ لا يمكنها تحديد هويتكم")}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* A10 */}
          <h2 style={h2Style}>{t("A10. Security", "أ10. الأمن")}</h2>
          <p style={pStyle}>
            {t(
              "We use encryption, access controls with multi-factor login, activity logging, staff confidentiality undertakings, and regular reviews. We carry out data protection impact assessments for high-risk processing. If a breach is likely to cause serious damage, we will notify the authority and the people affected as the law requires.",
              "نستخدم التشفير وضوابط الوصول مع تسجيل الدخول متعدد العوامل وتسجيل الأنشطة وتعهدات السرية للموظفين ومراجعات دورية. ونجري تقييمات لأثر حماية البيانات للمعالجة عالية المخاطر. وإذا كان من المرجح أن يتسبب اختراق في ضرر جسيم، فسنُخطر الجهة المختصة والأشخاص المتضررين وفق ما يقتضيه القانون."
            )}
          </p>

          {/* A11 */}
          <h2 style={h2Style}>{t("A11. Your Rights", "أ11. حقوقكم")}</h2>
          <p style={pStyle}>
            {t(
              <>
                You may ask to see your data, correct it, delete it, restrict or object to some uses, and withdraw any consent at any time. We reply within <TODO en="30" ar="30" /> days. If you withdraw the recording or health consent, we may not be able to continue your sessions, and recordings already made are kept for the period in A9. Contact: <TODO en="privacy email" ar="البريد الإلكتروني للخصوصية" />. You may also complain to the National Cyber Governance and Assurance Affairs (NCGAA) / data protection authority in Qatar (<TODO en="Name and official link, to be confirmed by counsel" ar="الاسم والرابط الرسمي بعد تأكيد المحامي" />).
              </>,
              <>
                يحق لكم طلب الاطلاع على بياناتكم وتصحيحها وحذفها، وتقييد بعض الاستخدامات أو الاعتراض عليها، وسحب أي موافقة في أي وقت. نرد خلال <TODO en="30" ar="30" /> يومًا. وإذا سحبتم موافقة التسجيل أو الموافقة على معالجة المعلومات الصحية، فقد لا نتمكن من مواصلة جلساتكم، وتُحفظ التسجيلات التي أُجريت بالفعل للمدة المذكورة في أ9. للتواصل: <TODO en="privacy email" ar="البريد الإلكتروني للخصوصية" />. ويمكنكم أيضًا تقديم شكوى إلى جهة حماية البيانات في قطر (<TODO en="الاسم والرابط بعد تأكيد المحامي" ar="الاسم والرابط بعد تأكيد المحامي" />).
              </>
            )}
          </p>

          {/* A12 */}
          <h2 style={h2Style}>{t("A12. Cookies, Children, and Changes", "أ12. ملفات تعريف الارتباط والأطفال والتعديلات")}</h2>
          <p style={pStyle}>
            {t(
              "Our website uses cookies for essential functions and, only if you accept them, analytics and advertising measurement. You can accept or refuse non-essential cookies in the cookie banner. Our services are for people aged 18 and over; we do not knowingly collect data from children. We will publish changes here and, if they are significant, ask for your consent again.",
              "يستخدم موقعنا ملفات تعريف الارتباط للوظائف الأساسية، ولأدوات التحليلات وقياس الإعلانات فقط إذا قبلتموها. يمكنكم قبول ملفات تعريف الارتباط غير الأساسية أو رفضها في شريط الموافقة. خدماتنا مخصصة لمن بلغ 18 عامًا فأكثر، ولا نجمع عن قصد بيانات من الأطفال. سننشر أي تعديلات هنا، وإذا كانت جوهرية فسنطلب موافقتكم من جديد."
            )}
          </p>
        </div>
      </section>
    </>
  );
}
