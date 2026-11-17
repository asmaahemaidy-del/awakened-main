import { useLanguage } from "../i18n/LanguageContext";
import { Seo } from "../components/Seo";

export function RefundPolicyPage() {
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
        title="Refund Policy"
        titleAr="سياسة الاسترداد"
        description="Cancellation and refund policies for Awakened retreats, sessions, and programmes."
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
              "⚠ DRAFT — This refund policy is not yet final. Certain service-specific policies are pending owner confirmation and are marked below. Confirmed terms are marked accordingly.",
              "⚠ مسودة — سياسة الاسترداد هذه ليست نهائية بعد. بعض السياسات الخاصة بالخدمات تنتظر تأكيد المالك وهي موضحة أدناه. البنود المؤكدة محددة وفقاً لذلك."
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
            {t("Refund & Cancellation Policy", "سياسة الاسترداد والإلغاء")}
          </h1>
          <p style={{ ...pStyle, fontSize: "0.8rem", color: "#7A5C1E", marginBottom: 32 }}>
            {t(
              <>Effective Date: <TODO en="insert effective date" /></>,
              <>تاريخ السريان: <TODO en="أدخل تاريخ السريان" /></>
            )}
          </p>

          {/* 1. HOW TO REQUEST */}
          <h2 style={h2Style}>{t("1. How to Request a Refund or Cancellation", "١. كيفية طلب استرداد أو إلغاء")}</h2>
          <p style={pStyle}>
            {t(
              "All refund and cancellation requests must be submitted in writing via email to info@gotawakened.com. Your request must include your full name, booking reference number, contact details, and the reason for your cancellation. Requests sent through other channels (social media, direct messages, phone calls) are not considered formal requests until confirmed via email.",
              "يجب تقديم جميع طلبات الاسترداد والإلغاء خطياً عبر البريد الإلكتروني إلى info@gotawakened.com. يجب أن يتضمن طلبك اسمك الكامل، ورقم مرجع الحجز، وتفاصيل الاتصال، وسبب الإلغاء. لا تُعتبر الطلبات المرسلة عبر قنوات أخرى (وسائل التواصل الاجتماعي، الرسائل المباشرة، المكالمات الهاتفية) طلبات رسمية حتى يتم تأكيدها عبر البريد الإلكتروني."
            )}
          </p>
          <p style={pStyle}>
            {t(
              "Refund processing times are typically 7 to 14 business days from the date of written approval, credited back to the original method of payment.",
              "تستغرق معالجة المبالغ المستردة عادةً من 7 إلى 14 يوم عمل من تاريخ الموافقة الخطية، وتُعاد إلى طريقة الدفع الأصلية."
            )}
          </p>

          {/* 2. GROUP RETREATS */}
          <h2 style={h2Style}>
            {t("2. Group Retreats (Confirmed Policy)", "٢. الخلوات الجماعية (سياسة مؤكدة)")}
          </h2>
          <div
            style={{
              borderLeft: isAr ? "none" : "3px solid var(--brand-forest)",
              borderRight: isAr ? "3px solid var(--brand-forest)" : "none",
              paddingInlineStart: 16,
              background: "rgba(20,31,21,0.03)",
              paddingTop: 12,
              paddingBottom: 12,
              marginBottom: 20,
            }}
          >
            <p style={{ ...pStyle, marginBottom: 8, fontWeight: "bold" }}>
              {t(
                "✓ CONFIRMED CANCELLATION SCHEDULE FOR GROUP RETREATS:",
                "✓ جدول الإلغاء المؤكد للخلوات الجماعية:"
              )}
            </p>
            <ul style={{ ...pStyle, paddingInlineStart: 20, marginBottom: 0 }}>
              <li style={{ marginBottom: 8 }}>
                <strong>{t("40 or more days before retreat start date:", "قبل 40 يوماً أو أكثر من تاريخ بدء الخلوة:")}</strong>{" "}
                {t(
                  "Fully refundable (100% refund of fees paid, less any non-recoverable third-party banking/transaction fees).",
                  "قابل للاسترداد بالكامل (استرداد 100% من الرسوم المدفوعة، مخصوماً منها أي رسوم معاملات بنكية خارجية غير قابلة للاسترداد)."
                )}
              </li>
              <li style={{ marginBottom: 0 }}>
                <strong>{t("Fewer than 40 days before retreat start date:", "أقل من 40 يوماً قبل تاريخ بدء الخلوة:")}</strong>{" "}
                {t(
                  "Non-refundable. Because venue, accommodation, catering, and facilitator commitments are finalized well in advance, cancellations within 40 days of the start date cannot be refunded.",
                  "غير قابل للاسترداد. نظراً لأن التزامات المكان والإقامة والإعاشة والمدربين يتم تأكيدها مسبقاً، لا يمكن استرداد المبالغ عند الإلغاء خلال 40 يوماً من تاريخ البدء."
                )}
              </li>
            </ul>
          </div>

          {/* 3. SINGLE ADVISORY SESSIONS */}
          <h2 style={h2Style}>{t("3. Single Advisory Sessions", "٣. الجلسات الاستشارية الفردية")}</h2>
          <p style={pStyle}>
            <TODO en="confirm cancellation policy for single advisory sessions — e.g. 24h or 48h notice required for reschedule/refund; late cancellations forfeit session fee" />
          </p>

          {/* 4. SESSION PACKAGES */}
          <h2 style={h2Style}>{t("4. Session Packages & Bundles", "٤. باقات وحزم الجلسات")}</h2>
          <p style={pStyle}>
            <TODO en="confirm policy for multi-session packages — e.g. validity period (e.g. 6 months), non-refundable once first session has commenced, or pro-rated refunds under special circumstances" />
          </p>

          {/* 5. CORPORATE DEPOSITS */}
          <h2 style={h2Style}>{t("5. Corporate Deposits", "٥. الودائع المؤسسية")}</h2>
          <p style={pStyle}>
            <TODO en="confirm corporate deposit terms — e.g. non-refundable deposit percentage, milestone-based cancellation schedule" />
          </p>

          {/* 6. PRIVATE RETREATS */}
          <h2 style={h2Style}>{t("6. Private Retreats", "٦. الخلوات الخاصة")}</h2>
          <p style={pStyle}>
            <TODO en="confirm cancellation schedule for bespoke / private retreats — e.g. deposit terms and cutoff notice period" />
          </p>

          {/* 7. CORPORATE RETREATS */}
          <h2 style={h2Style}>{t("7. Corporate Retreats & Workshops", "٧. الخلوات والورش المؤسسية")}</h2>
          <p style={pStyle}>
            <TODO en="confirm corporate retreat terms — e.g. written notice requirements, deposit retention, rescheduling options" />
          </p>

          {/* 8. EVENTS */}
          <h2 style={h2Style}>{t("8. Events & Masterclasses", "٨. الفعاليات وورش العمل العامة")}</h2>
          <p style={pStyle}>
            <TODO en="confirm policy for ticketed events and masterclasses — e.g. transferable ticket, cancellation deadline (e.g. 7 days prior)" />
          </p>

          {/* 9. COMMUNITY MEMBERSHIPS */}
          <h2 style={h2Style}>{t("9. Community Memberships", "٩. عضويات المجتمع")}</h2>
          <p style={pStyle}>
            <TODO en="confirm membership billing cycles, cancellation notice (e.g. cancel before next billing cycle), and whether partial months are refunded" />
          </p>

          {/* 10. MEAL PLAN ADD-ONS */}
          <h2 style={h2Style}>{t("10. Meal Plan Add-ons", "١٠. باقات الوجبات الإضافية")}</h2>
          <p style={pStyle}>
            <TODO en="confirm refund policy on meal planning / nutrition add-ons — e.g. non-refundable once prep has begun or tied to retreat cancellation terms" />
          </p>

          {/* 11. AWAKENED-INITIATED CANCELLATIONS */}
          <h2 style={h2Style}>
            {t("11. Cancellations Initiated by Awakened", "١١. الإلغاءات بمبادرة من أوايكند")}
          </h2>
          <p style={pStyle}>
            {t(
              "In the rare event that Awakened must cancel or reschedule a retreat, session, or event due to unforeseen circumstances, illness, facilitator unavailability, insufficient registrations, or force majeure (including extreme weather, acts of authorities, or public health emergencies):",
              "في الحالة النادرة التي تضطر فيها أوايكند إلى إلغاء أو إعادة جدولة خلوة أو جلسة أو فعالية لأسباب طارئة، أو مرض، أو عدم توفر الميسر، أو عدم اكتمال الحد الأدنى للمشاركين، أو القوة القاهرة (بما في ذلك الظروف الجوية القاسية، أو قرارات السلطات، أو طوارئ الصحة العامة):"
            )}
          </p>
          <ul style={{ ...pStyle, paddingInlineStart: 20 }}>
            <li style={{ marginBottom: 10 }}>
              <strong>{t("Full Refund:", "استرداد كامل:")}</strong>{" "}
              {t(
                "You will be offered a 100% full refund of all amounts paid directly to Awakened for the cancelled service.",
                "سيُعرض عليك استرداد كامل بنسبة 100% لجميع المبالغ المدفوعة مباشرة إلى أوايكند مقابل الخدمة الملغاة."
              )}
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>{t("Credit / Rescheduling Alternative:", "بديل الرصيد / إعادة الجدولة:")}</strong>{" "}
              {t(
                "Alternatively, you may choose to apply the full credit toward a rescheduled date or a future Awakened programme of equal value.",
                "كبديل، يمكنك اختيار تحويل كامل المبلغ كرصيد لتاريخ بديل أو لبرنامج مستقبلي من أوايكند بالقيمة نفسها."
              )}
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>{t("Exclusion of Ancillary Expenses:", "استبعاد النفقات الإضافية:")}</strong>{" "}
              {t(
                "Awakened is not liable for any secondary or personal expenses incurred by participants, including but not limited to flights, travel insurance, visa fees, or outside accommodation. We strongly recommend comprehensive travel insurance for retreat attendees.",
                "أوايكند ليست مسؤولة عن أي نفقات ثانوية أو شخصية يتكبدها المشاركون، بما في ذلك على سبيل المثال لا الحصر رحلات الطيران، أو تأمين السفر، أو رسوم التأشيرة، أو الإقامة الخارجية. نوصي بشدة بالحصول على تأمين سفر شامل للمشاركين في الخلوات."
              )}
            </li>
          </ul>

          {/* CONTACT INFO */}
          <h2 style={h2Style}>{t("12. Contact for Inquiries", "١٢. التواصل للاستفسارات")}</h2>
          <p style={pStyle}>
            {t(
              "For questions regarding this policy or to submit a cancellation request:",
              "للأسئلة المتعلقة بهذه السياسة أو لتقديم طلب إلغاء:"
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
