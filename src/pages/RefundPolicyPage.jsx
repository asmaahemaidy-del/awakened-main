import { useLanguage } from "../i18n/LanguageContext";
import { Seo } from "../components/Seo";

export function RefundPolicyPage() {
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
        title="Refund & Cancellation Policy"
        titleAr="سياسة الاسترداد والإلغاء"
        description="Refund and cancellation policies for Awakened retreats, sessions, and packages under Qatar Consumer Protection Law No. 8 of 2008."
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
              "⚠️ WORKING DRAFT v1.0 — This refund policy is prepared for legal and payment gateway approval. Highlighted brackets mark owner business terms subject to confirmation before final publication.",
              "⚠️ مسودة أولية الإصدار 1.0 — هذه مسودة أولية لسياسة الاسترداد والإلغاء وليست استشارة قانونية. يجب أن يراجعها محامٍ مؤهل في دولة قطر. البنود المظللة بين أقواس تتطلب تحديداً وتأكيداً نهائياً من إدارة أوايكند."
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
            {t("Refund and Cancellation Policy", "سياسة الاسترداد والإلغاء")}
          </h1>
          <p style={{ ...pStyle, fontSize: "0.82rem", color: "#7A5C1E", marginBottom: 24 }}>
            {t(
              "Effective date: 18 November 2026 · Version: 1.0",
              "تاريخ السريان: 18 نوفمبر 2026 · الإصدار: 1.0"
            )}
          </p>

          <p style={pStyle}>
            {t(
              "Prices are in Qatari riyals (QAR) and shown before you pay. Payments are processed by SkipCash. Refunds go back to the original payment method. Decisions in brackets are for the business owner to confirm. Nothing here limits your rights under Qatar’s Consumer Protection Law (Law No. 8 of 2008) and its executive regulations.",
              "الأسعار بالريال القطري (QAR) وتُعرض قبل الدفع. تُعالَج المدفوعات عبر سكيب كاش (SkipCash)، وتُعاد المبالغ المستردة إلى وسيلة الدفع الأصلية. القرارات الواردة بين أقواس مربعة متروكة لتأكيد المالك. ولا يقيّد أي شيء هنا حقوقكم بموجب قانون حماية المستهلك القطري (القانون رقم 8 لسنة 2008) ولائحته التنفيذية."
            )}
          </p>

          {/* B1 */}
          <h2 style={h2Style}>{t("B1. Free Discovery Call", "ب1. المكالمة التعريفية المجانية")}</h2>
          <p style={pStyle}>
            {t(
              "The 15-minute discovery call is free of charge. There is nothing to refund.",
              "المكالمة التعريفية (15 دقيقة) مجانية بالكامل. ولا يوجد ما يُسترد."
            )}
          </p>

          {/* B2 */}
          <h2 style={h2Style}>{t("B2. Needs Assessment (Paid First Session)", "ب2. جلسة تقييم الاحتياجات (الجلسة الأولى المدفوعة)")}</h2>
          <ul style={{ ...pStyle, paddingLeft: isAr ? 0 : 20, paddingRight: isAr ? 20 : 0 }}>
            <li style={{ marginBottom: 10 }}>
              {t(
                <><strong>Reschedule or cancel at least <TODO en="24" ar="24" /> hours before:</strong> free rescheduling, or a full refund.</>,
                <><strong>إعادة الجدولة أو الإلغاء قبل <TODO en="24" ar="24" /> ساعة على الأقل:</strong> إعادة جدولة مجانية، أو استرداد كامل للمبلغ.</>
              )}
            </li>
            <li style={{ marginBottom: 10 }}>
              {t(
                <><strong>Less than <TODO en="24" ar="24" /> hours, or no-show:</strong> 50% refunded if you cancel more than 4 hours before the session. If you cancel less than 4 hours before, or do not attend, the fee is not refunded.</>,
                <><strong>أقل من <TODO en="24" ar="24" /> ساعة، أو عدم الحضور:</strong> يُسترد 50% إذا ألغيتم قبل موعد الجلسة بأكثر من 4 ساعات. وإذا ألغيتم قبل الموعد بأقل من 4 ساعات، أو لم تحضروا، فلا يُسترد الرسم.</>
              )}
            </li>
            <li style={{ marginBottom: 10 }}>
              {t(
                "If Awakened cancels or reschedules: you choose a new time or a full refund.",
                "إذا ألغت أوايكند الجلسة أو أعادت جدولتها: تختارون موعدًا جديدًا أو استردادًا كاملًا."
              )}
            </li>
            <li style={{ marginBottom: 10 }}>
              {t(
                "After the assessment has taken place: the fee is not refundable, because the assessment and matching work has been delivered. If you are not satisfied with your matches, we will re-match you once at no charge.",
                "بعد إجراء التقييم: لا يُسترد الرسم، لأن عمل التقييم والمطابقة قد قُدِّم بالفعل. وإذا لم ترضوا عن المطابقات المقترحة، فسنعيد مطابقتكم مرة واحدة دون رسوم إضافية."
              )}
            </li>
          </ul>

          {/* B3 */}
          <h2 style={h2Style}>{t("B3. Single Sessions", "ب3. الجلسات الفردية")}</h2>
          <p style={pStyle}>
            {t(
              <>
                The same rules as B2 apply: notice of at least <TODO en="24" ar="24" /> hours is required to reschedule or cancel; late cancellations and no-shows are charged as described above; and sessions cancelled by Awakened are rescheduled or refunded in full.
              </>,
              <>
                تسري القواعد نفسها الواردة في ب2: إشعار قبل <TODO en="24" ar="24" /> ساعة على الأقل لإعادة الجدولة أو الإلغاء؛ وتُحتسب الرسوم عند الإلغاء المتأخر أو عدم الحضور؛ والجلسات التي تلغيها أوايكند تُعاد جدولتها أو يُسترد ثمنها بالكامل.
              </>
            )}
          </p>

          {/* B4 */}
          <h2 style={h2Style}>{t("B4. Packages", "ب4. الباقات")}</h2>
          <ul style={{ ...pStyle, paddingLeft: isAr ? 0 : 20, paddingRight: isAr ? 20 : 0 }}>
            <li style={{ marginBottom: 10 }}>
              {t("Packages are valid for 4 months from purchase.", "الباقات صالحة لمدة 4 أشهر من تاريخ الشراء.")}
            </li>
            <li style={{ marginBottom: 10 }}>
              {t(
                <>Within <TODO en="14" ar="14" /> days of purchase, if no session has been used: full refund.</>,
                <>خلال <TODO en="14" ar="14" /> يومًا من الشراء، إذا لم تُستخدم أي جلسة: استرداد كامل.</>
              )}
            </li>
            <li style={{ marginBottom: 10 }}>
              {t(
                "After your first session: you may ask for a refund of unused sessions. We calculate it as the price paid minus the used sessions at the standard single-session price, so the package discount applies only to sessions you actually received.",
                "بعد جلستكم الأولى: يمكنكم طلب استرداد الجلسات غير المستخدمة. نحسبه بخصم الجلسات المستخدمة بسعر الجلسة الفردية المعتاد من المبلغ المدفوع، بحيث يسري خصم الباقة على الجلسات التي حصلتم عليها فقط."
              )}
            </li>
            <li style={{ marginBottom: 10 }}>
              {t(
                "Expired sessions are not refundable. If we cancel a session and cannot reschedule before expiry, the package is extended or refunded.",
                "الجلسات المنتهية الصلاحية غير قابلة للاسترداد. وإذا ألغينا جلسة ولم نتمكن من إعادة جدولتها قبل انتهاء الصلاحية، تُمدَّد الباقة أو يُسترد ثمنها."
              )}
            </li>
            <li style={{ marginBottom: 10 }}>
              {t(
                "You may switch advisor once at no charge, and keep your remaining sessions.",
                "يمكنكم تغيير المستشار مرة واحدة دون رسوم، مع الاحتفاظ بجلساتكم المتبقية."
              )}
            </li>
          </ul>

          {/* B5 */}
          <h2 style={h2Style}>{t("B5. Retreats and Events", "ب5. الخلوات والفعاليات")}</h2>
          <div style={{ overflowX: "auto", marginBottom: 20 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid rgba(35, 62, 49, 0.12)", borderRadius: 4 }}>
              <thead>
                <tr>
                  <th style={tableHeaderStyle}>{t("When You Cancel", "عند الإلغاء")}</th>
                  <th style={tableHeaderStyle}>{t("Refund Amount", "الاسترداد")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>
                    {t(
                      <>More than <TODO en="60" ar="60" /> days before the start</>,
                      <>قبل بدء الخلوة بأكثر من <TODO en="60" ar="60" /> يومًا</>
                    )}
                  </td>
                  <td style={tableCellStyle}>
                    {t(
                      <>Full refund, minus a <TODO en="deposit%" ar="العربون%" /> non-refundable deposit</>,
                      <>استرداد كامل، بعد خصم عربون غير قابل للاسترداد بنسبة <TODO en="deposit%" ar="العربون%" /></>
                    )}
                  </td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>
                    {t(
                      <>Between <TODO en="30–60" ar="30–60" /> days before start</>,
                      <>قبل موعد الخلوة بـ <TODO en="30–60" ar="30–60" /> يومًا</>
                    )}
                  </td>
                  <td style={tableCellStyle}>
                    {t(
                      <><TODO en="50%" ar="50%" /> refund</>,
                      <><TODO en="50%" ar="50%" /> استرداد</>
                    )}
                  </td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>
                    {t(
                      <>Fewer than <TODO en="30" ar="30" /> days before start, or no-show</>,
                      <>قبل أقل من <TODO en="30" ar="30" /> يومًا، أو عدم الحضور</>
                    )}
                  </td>
                  <td style={tableCellStyle}>
                    {t(
                      <>No refund; you may transfer your place to another person with <TODO en="7" ar="7" /> days’ notice</>,
                      <>لا استرداد؛ ويمكنكم نقل مقعدكم إلى شخص آخر بإشعار قبل <TODO en="7" ar="7" /> أيام</>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={pStyle}>
            {t(
              <>
                If Awakened cancels or changes the date, you may transfer to the new date or receive a full refund. If an event cannot go ahead for reasons outside our control (for example weather or authority restrictions), we offer a transfer or credit, or a refund of what you paid less costs already paid to third parties (<TODO en="counsel to confirm" ar="يؤكد المحامي" />). Leaving a retreat early does not entitle you to a refund.
              </>,
              <>
                إذا ألغت أوايكند الفعالية أو غيّرت موعدها، يمكنكم الانتقال إلى الموعد الجديد أو استرداد كامل المبلغ. وإذا تعذّرت إقامة فعالية لأسباب خارجة عن إرادتنا (مثل الطقس أو قيود الجهات المختصة)، فنعرض نقل الحجز أو رصيدًا، أو استرداد ما دفعتموه بعد خصم التكاليف التي دُفعت بالفعل لأطراف ثالثة (<TODO en="counsel to confirm" ar="يؤكد المحامي" />). ومغادرة الخلوة مبكرًا لا تمنح الحق في الاسترداد.
              </>
            )}
          </p>

          {/* B6 */}
          <h2 style={h2Style}>{t("B6. Memberships and Recurring Payments [If Offered]", "ب6. العضويات والمدفوعات المتكررة [إن وُجدت فقط]")}</h2>
          <p style={pStyle}>
            {t(
              <>
                Membership payments recur through SkipCash on the date shown at checkout. You may cancel any time, effective from the next billing date, with <TODO en="number" ar="عدد" /> days’ notice. We do not refund a billing period already started. If a payment fails, we will contact you and may pause access.
              </>,
              <>
                تتكرر مدفوعات العضوية عبر سكيب كاش في التاريخ المعروض عند الدفع. يمكنكم الإلغاء في أي وقت، ويسري الإلغاء من تاريخ الفوترة التالي، بإشعار قبل <TODO en="number" ar="عدد" /> أيام. ولا نسترد فترة فوترة بدأت بالفعل. وإذا فشلت عملية دفع، فسنتواصل معكم وقد نوقف الوصول مؤقتًا.
              </>
            )}
          </p>

          {/* B7 */}
          <h2 style={h2Style}>{t("B7. Corporate Programmes", "ب7. البرامج المؤسسية")}</h2>
          <p style={pStyle}>
            {t(
              "Corporate programmes follow the written agreement with the organisation. If it is silent, B5 applies to retreats and B3 to sessions.",
              "تخضع البرامج المؤسسية للاتفاقية المكتوبة مع المؤسسة. وإذا خلت الاتفاقية من حكم خاص، تسري أحكام ب5 على الخلوات وأحكام ب3 على الجلسات."
            )}
          </p>

          {/* B8 */}
          <h2 style={h2Style}>{t("B8. Mistakes and Duplicate Charges", "ب8. الأخطاء والرسوم المكررة")}</h2>
          <p style={pStyle}>
            {t(
              <>
                If you are charged twice, charged the wrong amount, or we fail to deliver what you paid for, we will refund the difference in full within <TODO en="5" ar="5" /> business days of confirming it.
              </>,
              <>
                إذا خُصم منكم مبلغ مرتين، أو خُصم مبلغ خاطئ، أو أخفقنا في تقديم ما دفعتم ثمنه، فسنرد الفرق كاملًا خلال <TODO en="5" ar="5" /> أيام عمل من تأكيد ذلك.
              </>
            )}
          </p>

          {/* B9 */}
          <h2 style={h2Style}>{t("B9. How to Request a Refund", "ب9. كيفية طلب الاسترداد")}</h2>
          <p style={pStyle}>
            {t(
              <>
                Email <a href="mailto:info@gotawakened.com" style={{ color: "var(--brand-forest)", fontWeight: "bold" }}>info@gotawakened.com</a> with your name (or your client code), the date of payment, and the details of your request. We reply within <TODO en="5" ar="5" /> business days. Approved refunds are issued through SkipCash and appear within <TODO en="number" ar="عدد" /> business days, depending on your bank. Partial refunds are possible.
              </>,
              <>
                راسلونا على <a href="mailto:info@gotawakened.com" style={{ color: "var(--brand-forest)", fontWeight: "bold" }}>info@gotawakened.com</a> مع ذكر اسمكم (أو رمز العميل الخاص بكم) وتاريخ الدفع وتفاصيل طلبكم. نرد خلال <TODO en="5" ar="5" /> أيام عمل. تُصرف المبالغ المستردة المعتمدة عبر سكيب كاش وتظهر خلال <TODO en="number" ar="عدد" /> أيام عمل، حسب البنك الخاص بكم. والاسترداد الجزئي ممكن.
              </>
            )}
          </p>

          {/* B10 */}
          <h2 style={h2Style}>{t("B10. Dispute Resolution", "ب10. في حال الخلاف")}</h2>
          <p style={pStyle}>
            {t(
              <>
                Please contact us first so we can resolve any issue amicably. If we cannot reach an agreement, you may contact the Ministry of Commerce and Industry’s Consumer Protection Department or the competent courts (<TODO en="counsel to confirm the route" ar="يؤكد المحامي" />).
              </>,
              <>
                يرجى التواصل معنا أولًا لنحل الأمر وديًا. وإذا تعذّر ذلك، يمكنكم التواصل مع إدارة حماية المستهلك في وزارة التجارة والصناعة أو مع المحاكم المختصة (<TODO en="يؤكد المحامي" ar="يؤكد المحامي" />).
              </>
            )}
          </p>
        </div>
      </section>
    </>
  );
}
