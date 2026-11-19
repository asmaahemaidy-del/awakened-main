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

  const liStyle = {
    fontFamily: fontBody,
    fontSize: isAr ? "0.92rem" : "0.9rem",
    color: "#2E4A32",
    lineHeight: isAr ? 2 : 1.75,
    marginBottom: 10,
  };

  return (
    <>
      <Seo
        title="Terms of Service"
        titleAr="شروط الخدمة"
        description="Terms of service governing individual coaching, wellbeing advisory, retreats, corporate services, fixed QAR & USD pricing, and payments for Awakened for Consultations."
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
              "Effective date: 18 November 2026 · Version 1.0 (First Published Version)",
              "تاريخ السريان: 18 نوفمبر 2026 · الإصدار 1.0 (النسخة الأولى المنشورة)"
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
              "Coaching, wellbeing advisory, individual and group retreats, and corporate programmes aimed at personal development, leadership resilience, and lifestyle goals. We are not a medical, psychological, or psychiatric service and do not diagnose or treat conditions. Please keep seeing your doctor and do not stop or change medical treatment because of a session. In an emergency, please call 999.",
              "التدريب والإرشاد في مجال العافية، ورحلات العافية والرفاهية الفردية والجماعية، والبرامج المؤسسية، بهدف التطوير الشخصي وتعزيز مرونة القيادة وتحقيق أهداف نمط الحياة. لسنا جهة تقدّم خدمات طبية أو علاجًا نفسيًا أو طبًّا نفسيًا، ولا نشخّص الحالات ولا نعالجها. يرجى مواصلة استشارة طبيبكم وعدم إيقاف العلاج الطبي أو تغييره بسبب أي جلسة. وفي حالات الطوارئ اتصلوا على 999."
            )}
          </p>

          {/* 3 */}
          <h2 style={h2Style}>{t("3. Eligibility", "٣. الأهلية")}</h2>
          <p style={pStyle}>
            {t(
              "You must be 18 years of age or older to purchase or use our individual services. Corporate services may be contracted by authorized legal representatives on behalf of incorporated entities, government bodies, or institutions.",
              "يجب أن يبلغ عمركم 18 عامًا أو أكثر للاستفادة من خدماتنا الفردية أو شرائها. ويجوز التعاقد على الخدمات المؤسسية من قبل المفوضين قانوناً نيابة عن الشركات المسجلة أو الهيئات الحكومية أو المؤسسات."
            )}
          </p>

          {/* 4 */}
          <h2 style={h2Style}>{t("4. How It Works (Individual Clients)", "٤. كيف تعمل الخدمة (العملاء الأفراد)")}</h2>
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
              "Before the assessment or programme begins, you must accept our consent terms, including session recording as outlined in our Privacy Policy. Optional consents (research and marketing) do not affect your access to services.",
              "قبل بدء التقييم أو البرنامج التدريبي، يجب أن تقبلوا موافقتنا، بما في ذلك تسجيل الجلسات الموضح في سياسة الخصوصية. ولا تؤثر الموافقات الاختيارية (البحث والتسويق) في خدمتكم الأساسية."
            )}
          </p>

          {/* 6 */}
          <h2 style={h2Style}>
            {t(
              "6. Prices, Fixed Currencies (QAR & USD) & Payment",
              "٦. الأسعار وتثبيت العملات (الريال القطري والدولار الأمريكي) والدفع"
            )}
          </h2>
          <p style={pStyle}>
            {t(
              "All service fees, consultations, coaching sessions, needs assessments, advisory packages, community memberships, retreat deposits, and corporate engagements are established and fixed in Qatari Riyals (QR / QAR) and United States Dollars (USD). Where prices or invoices are presented in both currencies, they reflect our fixed pricing schedule pegged to the official Qatar Central Bank exchange parity (1 USD = 3.64 QAR). Payment is required in advance via our authorized secure payment gateway SkipCash, major debit or credit cards, or approved corporate bank wire transfer. All cancellations and refund requests strictly follow our Refund Policy.",
              "تُحدد وتثبَّت رسوم جميع الخدمات والاستشارات وجلسات التدريب وتقييم الاحتياجات وباقات الإرشاد وعضويات المجتمع وودائع رحلات العافية والتعاقدات المؤسسية بالريال القطري (ر.ق / QAR) وبالدولار الأمريكي (USD). وحيثما تُعرض الأسعار أو تُفوتر بكلتا العملتين، فإنها تعتمد جدول أسعارنا الثابت والمرتبط بسعر الصرف الرسمي المعتمد لمصرف قطر المركزي (1 دولار أمريكي = 3.64 ريال قطري). يُسدد الدفع مسبقًا وبشكل آمن عبر بوابة الدفع المعتمدة سكيب كاش (SkipCash)، أو بطاقات الخصم والائتمان الرئيسية، أو التحويلات البنكية المؤسسية المعتمدة. وتخضع جميع المدفوعات وسياسات الإلغاء والاسترداد لأحكام سياسة الاسترداد الخاصة بنا."
            )}
          </p>

          {/* 7 */}
          <h2 style={h2Style}>
            {t("7. Corporate & Institutional Services", "٧. خدمات الشركات والمؤسسات")}
          </h2>
          <p style={pStyle}>
            {t(
              "Awakened delivers tailored corporate wellbeing advisory, executive coaching, leadership resilience programmes, workplace wellness workshops, and off-site corporate retreats for businesses, government entities, and institutions. All corporate engagements are governed by the following provisions:",
              "تقدم أوايكند برامج استشارية مؤسسية مخصصة في مجال العافية، والتدريب التنفيذي، وبرامج تعزيز مرونة القيادة، وورش عمل رفاهية بيئة العمل، ورحلات العافية والرفاهية المؤسسية خارج مقرات العمل للشركات والجهات الحكومية والمؤسسات. وتخضع جميع التعاقدات المؤسسية للأحكام الآتية:"
            )}
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
            <li style={liStyle}>
              <strong>{t("a. Scope & Statements of Work (SOW): ", "أ. نطاق العمل وعقود الخدمات (SOW): ")}</strong>
              {t(
                "Every corporate engagement is governed by a dedicated Proposal or Statement of Work specifying the objectives, curriculum modules, participant headcount, venue specifications, schedule, and deliverables. Any modifications to scope require mutual written agreement.",
                "يخضع كل تعاقد مؤسسي لمقترح عمل رسمي أو وثيقة نطاق عمل (SOW) تحدد الأهداف، ومحاور المنهج التدريبي، والحد الأقصى لعدد المشاركين، ومواصفات موقع الفعالية، والجدول الزمني، والمخرجات المعتمدة. ويتطلب أي تعديل في النطاق موافقة كتابية صريحة بين الطرفين."
              )}
            </li>
            <li style={liStyle}>
              <strong>{t("b. Fixed Corporate Pricing & Invoicing: ", "ب. الأسعار المؤسسية الثابتة والفوترة: ")}</strong>
              {t(
                "Corporate fees, retainer rates, and planning deposits are fixed in QAR and USD as set out in the applicable SOW. Invoices are issued in accordance with agreed milestone terms (typically an initial planning deposit upon signing and the balance prior to delivery). Invoices are payable within the terms specified on the invoice.",
                "تُحدد أتعاب البرامج المؤسسية وودائع التخطيط وتثبَّت بالريال القطري (QAR) والدولار الأمريكي (USD) وفق ما هو محدد في وثيقة نطاق العمل. وتُصدر الفواتير وفق جداول سداد مرحلية متفق عليها (عادةً وديعة تخطيط عند التوقيع والرصيد المتبقي قبل موعد التنفيذ). وتستحق الفواتير السداد وفق الآجال المحددة فيها."
              )}
            </li>
            <li style={liStyle}>
              <strong>{t("c. Corporate Planning Deposits: ", "ج. ودائع التخطيط المؤسسية: ")}</strong>
              {t(
                "Corporate bookings require an initial planning deposit to reserve facilitator dates, initiate custom curriculum design, and secure logistical arrangements. Because planning deposits cover committed practitioner time and venue commitments, they are non-refundable once preliminary preparation or external reservations have commenced, but are fully credited toward the final engagement fee upon completion.",
                "تتطلب الحجوزات المؤسسية سداد وديعة تخطيط أولية لتثبيت مواعيد الخبراء والميسرين، والبدء في تصميم المناهج التدريبية المخصصة، وتأمين الترتيبات اللوجستية. ولأن ودائع التخطيط تغطي وقتًا استشاريًا محجوزًا والتزامات تجاه المواقع، فإنها غير قابلة للاسترداد فور بدء أعمال التجهيز أو الحجوزات الخارجية، وتُحتسب بالكامل كرصيد مخصوم من القيمة الإجمالية للبرنامج عند تنفيذه."
              )}
            </li>
            <li style={liStyle}>
              <strong>{t("d. Dual Confidentiality & Employee Coaching Privacy: ", "د. السرية المزدوجة وخصوصية تدريب الموظفين: ")}</strong>
              {t(
                "Awakened maintains absolute institutional confidentiality regarding client corporate strategy, operations, and proprietary culture. Concurrently, individual coaching sessions conducted with corporate employees, managers, or executives remain strictly confidential between the coach and the participant. Awakened does not disclose personal coaching notes, individual assessments, or private disclosures to corporate management without the participant's explicit prior written consent. Corporate sponsors receive only aggregate, anonymized attendance reports and organizational wellbeing insights.",
                "تلتزم أوايكند بسرية مؤسسية تامة ومطلقة تجاه استراتيجية المؤسسة العميل وعملياتها وثقافتها الداخلية. وفي الوقت ذاته، تظل جلسات التدريب والإرشاد الفردية للموظفين والمديرين التنفيذيين سرية تمامًا ومحمية بين المشارك ومستشاره. ولن تفصح أوايكند عن أي ملاحظات تدريب شخصية أو تقييمات فردية أو إفصاحات خاصة لإدارة المؤسسة دون موافقة كتابية صريحة ومسبقة من المشارك نفسه. وتقتصر التقارير المقدمة للجهة الراعية على ملخصات الحضور المجمعة والرؤى التنظيمية العامة مجهولة الهوية."
              )}
            </li>
            <li style={liStyle}>
              <strong>{t("e. Participant Attendance & Substitution: ", "هـ. حضور المشاركين واستبدالهم: ")}</strong>
              {t(
                "The client organization is responsible for ensuring registered participants are released to attend scheduled sessions. Substitutions of participants for group workshops or retreats may be requested in writing at least seven (7) days in advance and are subject to operational feasibility and matching requirements.",
                "تتحمل المؤسسة المتعاقدة مسؤولية تفرغ الموظفين المسجلين وتمكينهم من حضور الجلسات المقررة في مواعيدها. ويجوز طلب استبدال المشاركين في ورش العمل الجماعية أو رحلات العافية كتابيًا قبل موعد الفعالية بسبعة (7) أيام على الأقل، ويكون ذلك خاضعًا للإمكانية التشغيلية ومتطلبات المواءمة."
              )}
            </li>
            <li style={liStyle}>
              <strong>{t("f. Corporate Rescheduling & Cancellation: ", "و. إعادة الجدولة والإلغاء المؤسسي: ")}</strong>
              {t(
                "Written notice of at least thirty (30) calendar days is required to reschedule a corporate workshop or retreat. Rescheduling requests received fewer than 30 days prior to the start date, or any corporate cancellations, may incur administrative rebooking fees and pass-through costs for non-recoverable third-party commitments (such as luxury venue hire, specialized catering, or accommodation). Full cancellation details are set out in the applicable SOW and our Refund Policy.",
                "يلزم تقديم إشعار كتابي قبل ثلاثين (30) يومًا تقويميًا على الأقل لإعادة جدولة أي ورشة عمل أو رحلة عافية مؤسسية. والطلبات المقدمة خلال مدة تقل عن 30 يومًا من تاريخ البدء، أو حالات الإلغاء المؤسسي، قد تترتب عليها رسوم إعادة جدولة إدارية وتحميل التكاليف الفعلية غير القابلة للاسترداد للأطراف الخارجية (مثل حجز المواقع الفاخرة، أو خدمات الضيافة المتخصصة، أو الإقامة). وتُفصَّل أحكام الإلغاء في وثيقة نطاق العمل وسياسة الاسترداد الخاصة بنا."
              )}
            </li>
            <li style={liStyle}>
              <strong>{t("g. Non-Solicitation of Advisors: ", "ز. حظر الاستقطاب المباشر للمستشارين: ")}</strong>
              {t(
                "During the term of any corporate engagement and for twelve (12) months following its completion, the client organization agrees not to directly or indirectly solicit, contract, or hire any Awakened advisor, coach, or practitioner outside of arrangements facilitated through Awakened, without our express prior written consent.",
                "تتعهد المؤسسة العميل خلال فترة سريان أي تعاقد مؤسسي ولمدة اثني عشر (12) شهرًا من انتهائه بعدم التعاقد أو استقطاب أو توظيف أي مستشار أو مدرب أو ممارس تابع لأوايكند بشكل مباشر أو غير مباشر خارج نطاق التعاقدات المنظمة عبر أوايكند، دون موافقة كتابية مسبقة وصريحة منا."
              )}
            </li>
          </ul>

          {/* 8 */}
          <h2 style={h2Style}>{t("8. Your Responsibilities", "٨. مسؤولياتكم")}</h2>
          <p style={pStyle}>
            {t(
              "You agree to provide accurate information, attend scheduled sessions on time, treat advisors respectfully, and refrain from recording, copying, or sharing sessions or materials without our explicit prior written permission.",
              "تقديم معلومات دقيقة، والحضور في الموعد المحدد، ومعاملة المستشارين باحترام، وعدم تسجيل الجلسات أو نسخ المواد أو مشاركتها دون إذن كتابي مسبق منا."
            )}
          </p>

          {/* 9 */}
          <h2 style={h2Style}>{t("9. Confidentiality", "٩. السرية")}</h2>
          <p style={pStyle}>
            {t(
              "We keep what you share confidential, except as described in the Privacy Policy and where disclosure is required by law or where there is a serious, imminent risk to life or safety.",
              "نحافظ على سرية ما تشاركونه، إلا بالقدر المبيَّن في سياسة الخصوصية وحيث يقتضي القانون الإفصاح أو يوجد خطر جسيم وداهم على الحياة أو السلامة."
            )}
          </p>

          {/* 10 */}
          <h2 style={h2Style}>{t("10. Intellectual Property", "١٠. الملكية الفكرية")}</h2>
          <p style={pStyle}>
            {t(
              "Awakened’s methodology, assessments, materials, guides, and brand belong exclusively to us. Individual clients receive a personal, non-transferable right to use materials solely for their own personal development. Corporate clients receive an internal, non-exclusive license for participating employees only, with no right of commercial redistribution or public broadcast.",
              "منهجية أوايكند وتقييمها ومواردها وعلامتها التجارية ملك حصري لنا. ويحصل العملاء الأفراد على حق شخصي غير قابل للتحويل في استخدام المواد لتطويرهم الذاتي فقط. ويحصل العملاء من الشركات على ترخيص داخلي غير حصري للموظفين المشاركين فقط، دون أي حق في إعادة التوزيع التجاري أو النشر العام."
            )}
          </p>

          {/* 11 */}
          <h2 style={h2Style}>{t("11. Limitation of Liability", "١١. تحديد المسؤولية")}</h2>
          <p style={pStyle}>
            {t(
              <>
                To the fullest extent permitted by Qatari law, Awakened is not liable for indirect or consequential loss, loss of profit, or for outcomes that depend on your own choices and actions. Our total liability for any claim relating to a service is limited to the amount paid for that specific service. Nothing here excludes or limits liability that cannot lawfully be excluded under Qatar law, including liability for fraud, gross negligence, or wilful misconduct.
              </>,
              <>
                إلى أقصى حد يسمح به القانون القطري، لا تتحمل أوايكند المسؤولية عن الخسائر غير المباشرة أو التبعية أو خسارة الأرباح، ولا عن النتائج التي تتوقف على اختياراتكم وأفعالكم، وتقتصر مسؤوليتنا الإجمالية عن أي مطالبة تتعلق بخدمة ما على المبلغ المدفوع مقابل تلك الخدمة تحديداً. ولا يستثني أي شيء هنا ولا يحدّ من المسؤولية التي لا يجوز قانونًا استثناؤها، بما في ذلك المسؤولية عن الاحتيال أو الإهمال الجسيم أو سوء السلوك المتعمد.
              </>
            )}
          </p>

          {/* 12 */}
          <h2 style={h2Style}>{t("12. Changes to Services or Terms", "١٢. تعديل الخدمات أو الشروط")}</h2>
          <p style={pStyle}>
            {t(
              "We may update these terms from time to time. The version in force at the time of purchase or contract execution applies to that engagement.",
              "يجوز لنا تحديث هذه الشروط من حين لآخر. وتسري على كل عملية شراء أو تعاقد النسخة السارية وقت الشراء أو إبرام العقد."
            )}
          </p>

          {/* 13 */}
          <h2 style={h2Style}>{t("13. Force Majeure", "١٣. القوة القاهرة")}</h2>
          <p style={pStyle}>
            {t(
              "Neither party is liable for delays or failure to perform caused by events beyond reasonable control (such as extreme weather, natural disasters, epidemics, or government restrictions), and we will reschedule or refund according to our Refund Policy and corporate SOW.",
              "لا يتحمل أي من الطرفين المسؤولية عن التأخير أو عدم التنفيذ الناتج عن أحداث خارجة عن السيطرة المعقولة (كالظروف الجوية القاهرة أو الكوارث الطبيعية أو الأوبئة أو القيود الحكومية)، وسنعيد الجدولة أو نسترد وفق سياسة الاسترداد وعقد نطاق العمل."
            )}
          </p>

          {/* 14 */}
          <h2 style={h2Style}>{t("14. Governing Law & Dispute Resolution", "١٤. القانون الواجب التطبيق وتسوية النزاعات")}</h2>
          <p style={pStyle}>
            {t(
              <>
                The laws of the State of Qatar apply to these terms and the competent courts of Doha have exclusive jurisdiction.
              </>,
              <>
                تسري قوانين دولة قطر على هذه الشروط، وتختص المحاكم المختصة في الدوحة حصريًا بنظر أي نزاع ناشئ عنها.
              </>
            )}
          </p>

          {/* 15 */}
          <h2 style={h2Style}>{t("15. Contact", "١٥. للتواصل")}</h2>
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
            <a
              href="tel:+97477106177"
              dir="ltr"
              style={{
                color: "var(--brand-forest)",
                fontWeight: "bold",
                direction: "ltr",
                unicodeBidi: "bidi-override",
                display: "inline-block",
              }}
            >
              {"\u202A+974 7710 6177\u202C"}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
