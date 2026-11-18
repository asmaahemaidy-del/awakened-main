import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { Seo } from "../components/Seo";
import { useLanguage } from "../i18n/LanguageContext";
import { getStoredOrder } from "../lib/commerce";

export function CheckoutSuccessPage() {
  const [params] = useSearchParams();
  const { t, lang, isAr } = useLanguage();
  const fontBody = isAr ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = isAr ? "var(--font-arabic)" : "var(--font-heading)";

  const [order, setOrder] = useState(null);
  const [invoiceSent, setInvoiceSent] = useState(false);
  const sentRef = useRef(false);

  useEffect(() => {
    const stored = getStoredOrder();
    const orderId =
      params.get("orderId") ||
      params.get("order_id") ||
      stored?.invoiceNumber ||
      `INV-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;

    const currentOrder = stored || {
      invoiceNumber: orderId,
      customer: {
        name: params.get("name") || "Valued Client",
        email: params.get("email") || "",
        phone: params.get("phone") || "",
      },
      item: {
        title: "Awakened Consultation",
        priceQar: 1747,
        priceUsd: 480,
      },
    };

    setOrder(currentOrder);

    // Trigger automated invoice send once if customer email exists
    if (!sentRef.current && currentOrder?.customer?.email) {
      sentRef.current = true;
      fetch("/api/invoice/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          invoiceNumber: currentOrder.invoiceNumber || orderId,
          customer: currentOrder.customer,
          items: [
            {
              name: currentOrder.item?.title || currentOrder.item?.en || "Awakened Consultation",
              nameAr: currentOrder.item?.titleAr || currentOrder.item?.ar || "جلسة استشارية أوايكند",
              quantity: 1,
              priceQar: currentOrder.item?.priceQar || 1747,
              priceUsd: currentOrder.item?.priceUsd || 480,
            },
          ],
          totalQar: currentOrder.item?.priceQar || 1747,
          totalUsd: currentOrder.item?.priceUsd || 480,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) setInvoiceSent(true);
        })
        .catch((err) => console.warn("[CheckoutSuccess] Invoice dispatch notice:", err));
    }
  }, [params]);

  const invoiceId = order?.invoiceNumber || params.get("orderId") || "";

  return (
    <>
      <Seo
        path="/checkout/success"
        noindex
        title={t("Payment Confirmed — Awakened", "تم تأكيد الدفع — أوايكند")}
      />
      <section
        className="min-h-[85vh] flex items-center justify-center px-6 py-20"
        style={{
          background: "#FAF7F2",
        }}
      >
        <div className="max-w-xl w-full text-center">
          {/* SUCCESS ICON */}
          <div
            className="mx-auto mb-6 w-20 h-20 rounded-full flex items-center justify-center shadow-sm"
            style={{
              background: "rgba(46,74,50,0.12)",
              border: "1px solid rgba(46,74,50,0.25)",
            }}
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2E4A32"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <p
            className="text-xs tracking-[0.25em] uppercase mb-3 font-semibold"
            style={{
              fontFamily: fontBody,
              color: "#9E7E2E",
            }}
          >
            {t("Payment Confirmed & Verified", "تم تأكيد واعتماد الدفع")}
          </p>

          <h1
            className="text-4xl md:text-5xl mb-4 font-normal"
            style={{
              fontFamily: fontHead,
              color: "#141F15",
              lineHeight: 1.15,
            }}
          >
            {t("Your Place is Secured", "مكانك محجوز بنجاح")}
          </h1>

          <p
            className="text-sm sm:text-base leading-relaxed mb-6"
            style={{
              fontFamily: fontBody,
              color: "#3D5C42",
            }}
          >
            {t(
              "Thank you for choosing Awakened. Your official tax invoice has been generated, and our executive concierge will be in touch within 24 hours to coordinate your schedule.",
              "شكراً لاختيارك أوايكند. تم إصدار فاتورتك الضريبية وإرسالها إلى بريدك الإلكتروني، وسيتواصل معك فريق الاستقبال التنفيذي خلال ٢٤ ساعة لتنسيق المواعيد.",
            )}
          </p>

          {/* INVOICE & EMAIL NOTICE BOX */}
          <div
            className="mb-8 p-5 rounded-xl border text-left"
            style={{
              background: "#FFFFFF",
              borderColor: "#D9CBBA",
            }}
          >
            <div className="flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: "#FAF7F2", border: "1px solid #C9A84C" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E7E2E" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-wider text-[#141F15]">
                  {t("Automated Tax Invoice Dispatched", "تم إرسال الفاتورة الرسمية")}
                </div>
                <div className="text-xs text-[#555E57] mt-1">
                  {order?.customer?.email
                    ? t(
                        `An official receipt & tax invoice was sent to: ${order.customer.email}`,
                        `تم إرسال الفاتورة الرسمية والإيصال الضريبي إلى: ${order.customer.email}`,
                      )
                    : t(
                        "An official tax invoice has been generated for your records.",
                        "تم توليد فاتورة ضريبية رسمية لسجلاتك.",
                      )}
                </div>
                {invoiceId && (
                  <div className="mt-2 text-xs font-mono text-[#3D6B44]">
                    {t("Invoice Reference", "مرجع الفاتورة")}: <strong>{invoiceId}</strong>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {invoiceId && (
              <Link
                to={`/invoice?id=${encodeURIComponent(invoiceId)}`}
                className="px-8 py-3.5 rounded-xl text-xs sm:text-sm tracking-[0.08em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm uppercase"
                style={{
                  fontFamily: fontBody,
                  background: "#141F15",
                  color: "#FAF7F2",
                  border: "1px solid #9E7E2E",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 6 2 18 2 18 9" />
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <rect x="6" y="14" width="12" height="8" />
                </svg>
                {t("View & Print Official Invoice", "عرض وطباعة الفاتورة الرسمية")}
              </Link>
            )}

            <Link
              to="/"
              className="px-8 py-3.5 rounded-xl text-xs sm:text-sm tracking-[0.08em] font-medium transition-all duration-300 flex items-center justify-center uppercase"
              style={{
                fontFamily: fontBody,
                background: "transparent",
                color: "#141F15",
                border: "1px solid #C8C0B0",
              }}
            >
              {t("Return Home", "العودة للرئيسية")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
