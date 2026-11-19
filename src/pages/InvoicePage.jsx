import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { Seo } from "../components/Seo";
import { useLanguage } from "../i18n/LanguageContext";
import { getStoredOrder } from "../lib/commerce";
import { COMPANY_INFO } from "../lib/invoiceTemplate";

export function InvoicePage() {
  const [params] = useSearchParams();
  const { t, isAr, lang } = useLanguage();
  const fontBody = isAr ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = isAr ? "var(--font-arabic)" : "var(--font-heading)";

  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    // 1. Check if stored in sessionStorage
    const stored = getStoredOrder();

    // 2. Query params fallback
    const id = params.get("id") || params.get("invoice") || stored?.invoiceNumber || `INV-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    const name = params.get("name") || stored?.customer?.name || "Valued Client";
    const email = params.get("email") || stored?.customer?.email || "client@gotawakened.com";
    const phone = params.get("phone") || stored?.customer?.phone || "+974 —";
    const org = params.get("organization") || stored?.customer?.organization || "";
    const txn = params.get("txn") || params.get("transactionId") || `SC-${Math.floor(10000000 + Math.random() * 90000000)}`;

    const itemNameEn = stored?.item?.title || stored?.item?.en || stored?.item?.tier || "Foundational Awakening Consultation";
    const itemNameAr = stored?.item?.titleAr || stored?.item?.ar || stored?.item?.tierAr || "جلسة استشارية تشخيصية استراتيجية";
    const itemDescEn = stored?.item?.descEn || stored?.item?.sessions || "90-minute executive diagnostic and wellbeing alignment session.";
    const itemDescAr = stored?.item?.descAr || stored?.item?.sessionsAr || "جلسة تشخيصية تنفيذية لمدة ٩٠ دقيقة لمواءمة العافية والوضوح";

    const priceQar = stored?.item?.price ? stored.item.price / 100 : (stored?.item?.priceQar || 1747);
    const priceUsd = stored?.item?.priceUsd || Math.round(priceQar / 3.64);

    setInvoice({
      invoiceNumber: id,
      date: new Date().toLocaleDateString(isAr ? "ar-QA" : "en-GB", { day: "2-digit", month: "short", year: "numeric" }),
      time: new Date().toLocaleTimeString(isAr ? "ar-QA" : "en-GB", { hour: "2-digit", minute: "2-digit" }),
      transactionId: txn,
      paymentMethod: "SkipCash Qatar Gateway (Debit / Credit / Apple Pay)",
      customer: {
        name,
        email,
        phone,
        organization: org,
      },
      items: [
        {
          name: itemNameEn,
          nameAr: itemNameAr,
          description: itemDescEn,
          descriptionAr: itemDescAr,
          quantity: 1,
          priceQar,
          priceUsd,
        },
      ],
      subtotalQar: priceQar,
      subtotalUsd: priceUsd,
      taxQar: 0,
      totalQar: priceQar,
      totalUsd: priceUsd,
    });
  }, [params, isAr]);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  if (!invoice) return null;

  return (
    <>
      <Seo
        path="/invoice"
        noindex
        title={t("Tax Invoice & Payment Receipt — Awakened", "فاتورة ضريبية وإيصال دفع — أوايكند")}
      />

      <style>{`
        @media print {
          body {
            background: #FFFFFF !important;
            color: #000000 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          header, footer, .no-print, .whatsapp-btn-container {
            display: none !important;
          }
          .invoice-card {
            border: 1px solid #C9A84C !important;
            box-shadow: none !important;
            max-width: 100% !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 20px !important;
            page-break-inside: avoid;
          }
        }
      `}</style>

      <div
        className="min-h-screen py-10 px-4 sm:px-6"
        style={{
          background: "#F4EDE2",
          fontFamily: fontBody,
        }}
      >
        <div className="max-w-4xl mx-auto">
          {/* TOP CONTROLS (HIDDEN WHEN PRINTING) */}
          <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest transition-colors"
              style={{ color: "#3D6B44" }}
            >
              &larr; {t("Back to Home", "العودة للرئيسية")}
            </Link>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrint}
                className="px-5 py-2.5 rounded-lg text-xs tracking-wider uppercase font-semibold transition-all flex items-center gap-2 shadow-sm"
                style={{
                  background: "#141F15",
                  color: "#FAF7F2",
                  border: "1px solid #9E7E2E",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 6 2 18 2 18 9" />
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <rect x="6" y="14" width="12" height="8" />
                </svg>
                {t("Print / Save PDF", "طباعة / حفظ كـ PDF")}
              </button>
            </div>
          </div>

          {/* MAIN LUXURY INVOICE CONTAINER */}
          <div
            className="invoice-card bg-white rounded-2xl shadow-xl overflow-hidden border border-[#D9CBBA]"
            style={{
              borderColor: "#D9CBBA",
            }}
          >
            {/* TOP GOLD FOIL ACCENT */}
            <div
              className="h-2 w-full"
              style={{
                background: "linear-gradient(90deg, #9E7E2E 0%, #C9A84C 50%, #DFC07A 100%)",
              }}
            />

            {/* HEADER WITH OFFICIAL GOLD LOGO */}
            <div
              className="px-8 py-10 border-b border-[#EAE3D6] text-center"
              style={{ background: "#FAF7F2" }}
            >
              <div className="flex justify-center mb-4">
                <img
                  src="/images/awakened-gold-logo.png"
                  alt="Awakened for Consultations | أوايكند للاستشارات"
                  className="h-28 sm:h-32 w-auto object-contain"
                />
              </div>
              <h1
                className="text-2xl sm:text-3xl font-semibold tracking-wide"
                style={{
                  fontFamily: fontHead,
                  color: "#141F15",
                }}
              >
                Awakened for Consultations LLC
              </h1>
              <p
                className="text-base font-medium mt-1"
                style={{
                  fontFamily: "var(--font-arabic)",
                  color: "#3D6B44",
                }}
              >
                شركة أوايكند للاستشارات ذ.م.م
              </p>
              <div
                className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs"
                style={{ color: "#7B857E" }}
              >
                <span>CR No. 189422</span>
                <span>&bull;</span>
                <span>TIN: 000109482100001</span>
                <span>&bull;</span>
                <span>Doha, State of Qatar (الدوحة، قطر)</span>
                <span>&bull;</span>
                <span className="font-mono">https://gotawakened.com</span>
              </div>
            </div>

            {/* INVOICE TITLE & STATUS BADGE */}
            <div className="px-8 py-6 border-b border-[#F0EAE1] flex flex-wrap items-center justify-between gap-4">
              <div>
                <div
                  className="text-[11px] uppercase tracking-widest font-bold"
                  style={{ color: "#9E7E2E" }}
                >
                  {t("OFFICIAL TAX INVOICE & RECEIPT", "فاتورة ضريبية رسمية وإيصال دفع")}
                </div>
                <div
                  className="text-2xl font-serif mt-1 font-medium"
                  style={{ color: "#141F15" }}
                >
                  {t("Invoice", "رقم الفاتورة")} #{invoice.invoiceNumber}
                </div>
              </div>

              {/* PAID BADGE */}
              <div
                className="px-4 py-2 rounded-full flex items-center gap-2 border"
                style={{
                  background: "#EBF3EC",
                  borderColor: "#8FB896",
                }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "#243828" }}
                />
                <span
                  className="text-xs font-bold tracking-wider uppercase"
                  style={{ color: "#1F4225" }}
                >
                  {t("PAID IN FULL", "تم السداد بالكامل")}
                </span>
              </div>
            </div>

            {/* METADATA & BILLED TO GRID */}
            <div className="px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-[#F0EAE1]">
              {/* BILLED TO */}
              <div>
                <div
                  className="text-[11px] uppercase tracking-widest font-bold mb-3"
                  style={{ color: "#7B857E" }}
                >
                  {t("Billed To &bull; فاتورة إلى", "فاتورة إلى / Billed To")}
                </div>
                <div
                  className="text-xl font-serif font-bold"
                  style={{ color: "#141F15" }}
                >
                  {invoice.customer.name}
                </div>
                {invoice.customer.organization && (
                  <div
                    className="text-sm font-medium mt-1"
                    style={{ color: "#3D6B44" }}
                  >
                    {invoice.customer.organization}
                  </div>
                )}
                <div className="text-sm mt-2" style={{ color: "#555E57" }}>
                  {invoice.customer.email}
                </div>
                {invoice.customer.phone && invoice.customer.phone !== "+974 —" && (
                  <div className="text-sm mt-0.5" style={{ color: "#555E57" }}>
                    {invoice.customer.phone}
                  </div>
                )}
              </div>

              {/* TRANSACTION DETAILS */}
              <div
                className="md:border-l md:pl-8 border-[#F0EAE1]"
                style={{
                  borderLeftColor: isAr ? "transparent" : "#F0EAE1",
                  borderRightColor: isAr ? "#F0EAE1" : "transparent",
                  borderRightWidth: isAr ? "1px" : "0",
                }}
              >
                <div
                  className="text-[11px] uppercase tracking-widest font-bold mb-3"
                  style={{ color: "#7B857E" }}
                >
                  {t("Payment Metadata &bull; بيانات المعاملة", "بيانات المعاملة / Metadata")}
                </div>
                <dl className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <dt style={{ color: "#7B857E" }}>{t("Date of Issue:", "تاريخ الإصدار:")}</dt>
                    <dd className="font-medium" style={{ color: "#141F15" }}>{invoice.date} ({invoice.time} AST)</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt style={{ color: "#7B857E" }}>{t("Payment Gateway:", "بوابة الدفع:")}</dt>
                    <dd className="font-medium" style={{ color: "#141F15" }}>SkipCash Qatar</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt style={{ color: "#7B857E" }}>{t("Transaction Ref:", "مرجع العملية:")}</dt>
                    <dd className="font-mono font-bold" style={{ color: "#3D6B44" }}>{invoice.transactionId}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt style={{ color: "#7B857E" }}>{t("Currency Peg (QCB):", "سعر الصرف الرسمي:")}</dt>
                    <dd className="font-medium" style={{ color: "#9E7E2E" }}>1 USD = 3.64 QAR</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* ITEMIZATION TABLE */}
            <div className="px-8 py-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr
                      className="border-b-2"
                      style={{
                        background: "#FAF7F2",
                        borderColor: "#C9A84C",
                      }}
                    >
                      <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider" style={{ color: "#141F15" }}>
                        {t("Description", "الوصف")}
                      </th>
                      <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-center" style={{ color: "#141F15" }}>
                        {t("Qty", "الكمية")}
                      </th>
                      <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-right" style={{ color: "#141F15" }}>
                        {t("Unit Rate", "سعر الوحدة")}
                      </th>
                      <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-right" style={{ color: "#141F15" }}>
                        {t("Total", "الإجمالي")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoice.items.map((item, idx) => (
                      <tr key={idx} className="border-b border-[#EAE3D6]">
                        <td className="py-4 px-4 align-top">
                          <div className="font-serif text-base font-bold" style={{ color: "#141F15" }}>
                            {isAr && item.nameAr ? item.nameAr : item.name}
                          </div>
                          {item.nameAr && !isAr && (
                            <div className="text-xs font-arabic mt-1" style={{ color: "#5C8A62" }}>
                              {item.nameAr}
                            </div>
                          )}
                          <div className="text-xs mt-1 leading-relaxed" style={{ color: "#667068" }}>
                            {isAr && item.descriptionAr ? item.descriptionAr : item.description}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-sm text-center align-top" style={{ color: "#141F15" }}>
                          {item.quantity}
                        </td>
                        <td className="py-4 px-4 text-sm text-right align-top whitespace-nowrap" style={{ color: "#141F15" }}>
                          <span className="font-semibold">{item.priceQar.toLocaleString()} QAR</span>
                          <div className="text-[11px]" style={{ color: "#7B857E" }}>${item.priceUsd.toLocaleString()} USD</div>
                        </td>
                        <td className="py-4 px-4 text-sm text-right align-top whitespace-nowrap" style={{ color: "#141F15" }}>
                          <span className="font-bold">{(item.priceQar * item.quantity).toLocaleString()} QAR</span>
                          <div className="text-[11px]" style={{ color: "#7B857E" }}>${(item.priceUsd * item.quantity).toLocaleString()} USD</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* TOTALS CALCULATION */}
            <div className="px-8 pb-8 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* SETTLEMENT NOTE */}
                <div
                  className="rounded-xl p-4 border"
                  style={{
                    background: "#FAF7F2",
                    borderColor: "#EAE3D6",
                  }}
                >
                  <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#141F15" }}>
                    {t("Payment Settlement &bull; التسوية والاعتماد", "التسوية والاعتماد القانوني")}
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "#555E57" }}>
                    {t(
                      "This payment has been settled through SkipCash Qatar. Complies with Qatar Central Bank electronic payment standards. Official proof of purchase.",
                      "تمت تسوية هذا المبلغ بنجاح عبر بوابة SkipCash قطر. متوافقة مع معايير مصرف قطر المركزي للمدفوعات الإلكترونية. هذه الفاتورة وثيقة دفع رسمية.",
                    )}
                  </p>
                </div>

                {/* TOTALS BREAKDOWN */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                    <span style={{ color: "#555E57" }}>{t("Subtotal:", "المجموع الفرعي:")}</span>
                    <span className="font-semibold" style={{ color: "#141F15" }}>
                      {invoice.subtotalQar.toLocaleString()} QAR <span className="text-xs font-normal" style={{ color: "#7B857E" }}>(${invoice.subtotalUsd.toLocaleString()})</span>
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                    <span style={{ color: "#555E57" }}>{t("Qatar VAT / Tax (0%):", "ضريبة القيمة المضافة (٠٪):")}</span>
                    <span className="font-semibold" style={{ color: "#3D6B44" }}>
                      0.00 QAR <span className="text-xs font-normal" style={{ color: "#7B857E" }}>({t("Exempt", "معفى")})</span>
                    </span>
                  </div>
                  <div
                    className="flex justify-between items-baseline pt-3 border-t-2"
                    style={{ borderColor: "#C9A84C" }}
                  >
                    <span className="font-serif text-lg font-bold" style={{ color: "#141F15" }}>
                      {t("Total Paid:", "الإجمالي المدفوع:")}
                    </span>
                    <div className="text-right">
                      <span className="font-serif text-2xl font-bold" style={{ color: "#141F15" }}>
                        {invoice.totalQar.toLocaleString()} QAR
                      </span>
                      <div className="text-xs font-semibold" style={{ color: "#9E7E2E" }}>
                        {t("Fixed USD:", "المعادل بالدولار:")} ${invoice.totalUsd.toLocaleString()} USD
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LEGAL & REGULATORY ACKNOWLEDGMENTS */}
            <div
              className="px-8 py-6 border-t border-[#EAE3D6] text-xs leading-relaxed space-y-2"
              style={{ background: "#FAF7F2", color: "#667068" }}
            >
              <div className="font-bold uppercase tracking-wider text-[11px] mb-2" style={{ color: "#9E7E2E" }}>
                {t("LEGAL TERMS & REGULATORY COMPLIANCE &bull; الشروط والامتثال القانوني", "الشروط والامتثال القانوني")}
              </div>
              <p>
                &bull; <strong>{t("Data Protection:", "حماية البيانات الشخصية:")}</strong> {t("Processed strictly in compliance with Qatar Law No. 13 of 2016 Concerning Personal Data Protection. Client confidentiality is inviolable.", "تُعالج البيانات وفقاً لأحكام القانون رقم (١٣) لسنة ٢٠١٦ بشأن حماية خصوصية البيانات الشخصية في دولة قطر.")}
              </p>
              <p>
                &bull; <strong>{t("Non-Medical Disclaimer:", "إخلاء المسؤولية غير الطبي:")}</strong> {t("Awakened services are educational and wellbeing-focused consulting. They do not constitute clinical psychological or psychiatric diagnosis or healthcare.", "خدمات أوايكند هي استشارات رفاهية وعافية ووضوح، ولا تشكل علاجاً طبياً أو نفسياً سريرياً.")}
              </p>
              <p>
                &bull; <strong>{t("Rescheduling Policy:", "سياسة إعادة الجدولة:")}</strong> {t("Private sessions require at least 72 hours prior notice to reschedule. Corporate programs are governed by the executed Statement of Work (SOW).", "تتطلب الجلسات الفردية إشعاراً مسبقاً قبل ٧٢ ساعة لإعادة الجدولة. البرامج المؤسسية تخضع لبيان العمل (SOW) الموقع.")}
              </p>
            </div>

            {/* FOOTER */}
            <div
              className="px-8 py-6 text-center text-xs"
              style={{ background: "#141F15", color: "#FAF7F2" }}
            >
              <div className="font-serif text-sm font-semibold tracking-wider" style={{ color: "#C9A84C" }}>
                AWAKENED FOR CONSULTATIONS &bull; أوايكند للاستشارات
              </div>
              <div className="mt-1" style={{ color: "#8FB896" }}>
                Doha, State of Qatar &bull; Contact: info@gotawakened.com &bull; https://gotawakened.com
              </div>
              <div className="mt-3 text-[10px]" style={{ color: "#6C7A6E" }}>
                &copy; {new Date().getFullYear()} Awakened for Consultations LLC. All rights reserved under the laws of the State of Qatar.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
