import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { useLanguage } from "../i18n/LanguageContext";
import { PhoneInputWithCountry } from "./PhoneInputWithCountry";

export function CheckoutModal({
  isOpen,
  onClose,
  item,
  onProceed,
  loading = false,
  error = "",
}) {
  const { t, isAr } = useLanguage();
  const fontBody = isAr ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = isAr ? "var(--font-arabic)" : "var(--font-heading)";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
  });

  const [consents, setConsents] = useState({
    allRequired: false,
    research: false,
    marketing: false,
  });

  const [errors, setErrors] = useState({});
  const consentBoxRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) {
      errs.name = t("Full name is required", "الاسم الكامل مطلوب");
    }
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = t("Valid email is required", "يرجى إدخال بريد إلكتروني صحيح");
    }
    if (!form.phone.trim()) {
      errs.phone = t("Phone number is required", "رقم الهاتف مطلوب");
    }
    if (item.isCorporate && !form.organization.trim()) {
      errs.organization = t(
        "Organization / Company name is required",
        "اسم الشركة / المؤسسة مطلوب",
      );
    }
    if (!consents.allRequired) {
      errs.allRequired = t(
        "Please accept the terms, non-medical disclaimer, and privacy policy to continue",
        "يرجى الموافقة على الشروط وسياسة الخصوصية وإخلاء المسؤولية للمتابعة",
      );
      // Auto-scroll directly to the consent box so it is 100% visible
      setTimeout(() => {
        consentBoxRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onProceed({
        customer: form,
        consents: {
          terms: consents.allRequired,
          nonMedical: consents.allRequired,
          privacy: consents.allRequired,
          corporateAuth: item.isCorporate ? consents.allRequired : false,
          research: consents.research,
          marketing: consents.marketing,
        },
        item,
      });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
      className="fixed inset-0 flex items-center justify-center p-3 sm:p-6"
      style={{
        zIndex: 99999,
        background: "rgba(14, 25, 16, 0.85)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-xl max-h-[96dvh] sm:max-h-[92vh] flex flex-col overflow-hidden shadow-2xl rounded-2xl"
        style={{
          background: "#FAF7F2",
          border: "1px solid #D6CFC4",
          direction: isAr ? "rtl" : "ltr",
        }}
      >
        {/* Sticky Header */}
        <div
          className="shrink-0 px-5 sm:px-6 py-4 flex items-center justify-between text-white"
          style={{
            background: "#141F15",
            borderBottom: "1px solid rgba(201, 168, 76, 0.35)",
          }}
        >
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#C9A84C" }}
              />
              <p
                className="text-[10px] sm:text-xs tracking-[0.2em] uppercase font-semibold"
                style={{
                  fontFamily: fontBody,
                  color: "#F0D58A",
                }}
              >
                {t("Secure Checkout · SkipCash Qatar", "إتمام الحجز والدفع الآمن · سكيب كاش")}
              </p>
            </div>
            <h2
              id="checkout-modal-title"
              className="text-base sm:text-lg font-normal line-clamp-1"
              style={{
                fontFamily: fontHead,
                color: "#FFFFFF",
              }}
            >
              {t(item.titleEn, item.titleAr)}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label={t("Close modal", "إغلاق")}
            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full text-lg transition-colors hover:bg-white/10 shrink-0 ms-2"
            style={{
              color: "#E2ECE0",
            }}
          >
            ✕
          </button>
        </div>

        {/* Scrollable Body (Accommodates Laptop & Mobile perfectly) */}
        <div className="overflow-y-auto px-4 sm:px-6 py-4 sm:py-5 flex-1 min-h-0 space-y-4">
          
          {/* Order Summary Pill/Card */}
          <div
            className="p-3.5 sm:p-4 rounded-xl border"
            style={{
              background: "#F2ECE1",
              borderColor: "#DFD7C9",
            }}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p
                  className="text-xs sm:text-sm font-bold truncate"
                  style={{
                    fontFamily: fontBody,
                    color: "#141F15",
                  }}
                >
                  {t(item.titleEn, item.titleAr)}
                </p>
                {item.subtitleEn && (
                  <p
                    className="text-[11px] sm:text-xs mt-0.5 truncate"
                    style={{
                      fontFamily: fontBody,
                      color: "#2E4A32",
                    }}
                  >
                    {t(item.subtitleEn, item.subtitleAr)}
                  </p>
                )}
              </div>
              <div className="text-end shrink-0">
                <p
                  className="text-base sm:text-lg font-bold"
                  style={{
                    fontFamily: fontHead,
                    color: "#141F15",
                  }}
                >
                  {item.priceQAR}
                </p>
                <p
                  className="text-[11px] font-semibold"
                  style={{
                    fontFamily: fontBody,
                    color: "#9E7E2E",
                  }}
                >
                  {item.priceUSD}
                </p>
              </div>
            </div>

            <div
              className="mt-2.5 pt-2 flex items-center gap-1.5 text-[10px] sm:text-[11px]"
              style={{
                borderTop: "1px dashed #D6CFC4",
                color: "#284D2D",
                fontFamily: fontBody,
              }}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>
                {t(
                  "Official Qatar Gateway (Debit, Credit & Apple Pay)",
                  "بوابة الدفع الوطنية الرسمية في قطر (بطاقات الائتمان ومدى وApple Pay)",
                )}
              </span>
            </div>
          </div>

          <form id="checkout-form" onSubmit={handleSubmit} className="space-y-3.5">
            {/* Customer Inputs (2 columns on Laptop, 1 column on Mobile) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="checkout-name"
                  className="block text-xs font-semibold mb-1"
                  style={{ fontFamily: fontBody, color: "#141F15" }}
                >
                  {t("Full Name *", "الاسم الكامل *")}
                </label>
                <input
                  id="checkout-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, name: e.target.value }));
                    if (errors.name) setErrors((errs) => ({ ...errs, name: undefined }));
                  }}
                  placeholder={t("e.g. Sara Al-Thani", "مثال: سارة آل ثاني")}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg outline-none transition-colors"
                  style={{
                    fontFamily: fontBody,
                    background: "#FFFFFF",
                    border: errors.name ? "1.5px solid #C0392B" : "1px solid #C8C0B4",
                    color: "#141F15",
                  }}
                />
                {errors.name && (
                  <p className="text-[11px] text-[#C0392B] mt-0.5 font-medium">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="checkout-email"
                  className="block text-xs font-semibold mb-1"
                  style={{ fontFamily: fontBody, color: "#141F15" }}
                >
                  {t("Email Address *", "البريد الإلكتروني *")}
                </label>
                <input
                  id="checkout-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, email: e.target.value }));
                    if (errors.email) setErrors((errs) => ({ ...errs, email: undefined }));
                  }}
                  placeholder="name@example.com"
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg outline-none transition-colors"
                  style={{
                    fontFamily: fontBody,
                    background: "#FFFFFF",
                    border: errors.email ? "1.5px solid #C0392B" : "1px solid #C8C0B4",
                    color: "#141F15",
                    direction: "ltr",
                    textAlign: isAr ? "right" : "left",
                  }}
                />
                {errors.email && (
                  <p className="text-[11px] text-[#C0392B] mt-0.5 font-medium">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className={`grid grid-cols-1 ${item.isCorporate ? "sm:grid-cols-2" : ""} gap-3`}>
              <div>
                <label
                  htmlFor="checkout-phone"
                  className="block text-xs font-semibold mb-1"
                  style={{ fontFamily: fontBody, color: "#141F15" }}
                >
                  {t("Phone / WhatsApp *", "رقم الهاتف / واتساب *")}
                </label>
                <PhoneInputWithCountry
                  id="checkout-phone"
                  required
                  value={form.phone}
                  onChange={(val) => {
                    setForm((f) => ({ ...f, phone: val }));
                    if (errors.phone) setErrors((errs) => ({ ...errs, phone: undefined }));
                  }}
                  placeholder={isAr ? "٥٥٥٥ ١٢٣٤" : "5555 1234"}
                  variant="light"
                  error={errors.phone}
                />
              </div>

              {item.isCorporate && (
                <div>
                  <label
                    htmlFor="checkout-org"
                    className="block text-xs font-semibold mb-1"
                    style={{ fontFamily: fontBody, color: "#141F15" }}
                  >
                    {t("Company / Organization *", "اسم الشركة أو المؤسسة *")}
                  </label>
                  <input
                    id="checkout-org"
                    type="text"
                    required
                    value={form.organization}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, organization: e.target.value }));
                      if (errors.organization) setErrors((errs) => ({ ...errs, organization: undefined }));
                    }}
                    placeholder={t(
                      "Company name or Department",
                      "اسم المؤسسة أو الإدارة",
                    )}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg outline-none transition-colors"
                    style={{
                      fontFamily: fontBody,
                      background: "#FFFFFF",
                      border: errors.organization
                        ? "1.5px solid #C0392B"
                        : "1px solid #C8C0B4",
                      color: "#141F15",
                    }}
                  />
                  {errors.organization && (
                    <p className="text-[11px] text-[#C0392B] mt-0.5 font-medium">
                      {errors.organization}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* CONSENT SECTION (PROMINENT, VISIBLE ON LAPTOP & MOBILE) */}
            <div
              ref={consentBoxRef}
              className="pt-2 space-y-3"
              style={{ fontFamily: fontBody }}
            >
              <div className="flex items-center justify-between">
                <p
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: "#141F15" }}
                >
                  {t("Mandatory Agreement & Consents", "الموافقات والإقرارات الإلزامية")}
                </p>
                <span className="text-[10px] text-[#9E7E2E] font-semibold">
                  {t("Step 1 of 1 · One Click", "خطوة واحدة · نقرة واحدة")}
                </span>
              </div>

              {/* Single Unified Mandatory Consent Card */}
              <div
                className="p-3.5 sm:p-4 rounded-xl border transition-all shadow-sm"
                style={{
                  background: errors.allRequired ? "rgba(192, 57, 43, 0.06)" : "#FFFFFF",
                  borderColor: errors.allRequired ? "#C0392B" : "#C9A84C",
                  borderWidth: errors.allRequired ? "2px" : "1.5px",
                }}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="modal-consent-all-required"
                    checked={consents.allRequired}
                    onChange={(e) => {
                      setConsents((c) => ({ ...c, allRequired: e.target.checked }));
                      if (errors.allRequired) setErrors((errs) => ({ ...errs, allRequired: undefined }));
                    }}
                    className="mt-1 w-5 h-5 cursor-pointer accent-[#18381D] shrink-0 rounded"
                  />
                  <label
                    htmlFor="modal-consent-all-required"
                    className="text-xs cursor-pointer select-none leading-relaxed flex-1"
                    style={{ color: "#141F15" }}
                  >
                    <div className="font-bold text-xs sm:text-sm text-[#141F15] flex items-center gap-1.5 mb-1">
                      <span className="text-[#C0392B]">*</span>
                      <span>
                        {item.isBooklet || item.itemType === "publication"
                          ? t(
                              "I agree to the terms, privacy policy & publication purchase:",
                              "أوافق على الشروط وسياسة الخصوصية وشراء الإصدار:",
                            )
                          : t(
                              "I agree to all required booking terms & policies:",
                              "أوافق على جميع شروط وسياسات الحجز الإلزامية:",
                            )}
                      </span>
                    </div>

                    <div className="space-y-1 text-[11px] sm:text-xs text-[#2E4A32] leading-normal ps-1">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[#C9A84C] font-bold shrink-0">✓</span>
                        <span>
                          {isAr ? "الموافقة الكاملة على " : "Agreement to "}
                          <Link to="/terms" target="_blank" rel="noopener noreferrer" className="underline font-bold text-[#141F15] hover:text-[#9E7E2E]">
                            {isAr ? "شروط الخدمة" : "Terms of Service"}
                          </Link>{" "}
                          {isAr ? "و" : "& "}{" "}
                          <Link to="/refund-policy" target="_blank" rel="noopener noreferrer" className="underline font-bold text-[#141F15] hover:text-[#9E7E2E]">
                            {isAr ? "سياسة الاسترداد" : "Refund Policy"}
                          </Link>
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[#C9A84C] font-bold shrink-0">✓</span>
                        <span>
                          {item.isBooklet || item.itemType === "publication"
                            ? (isAr
                                ? "تحميل فوري للمطبوع الرقمي بصيغة PDF وحقوق النشر محفوظة لشركة أوايكند للاستشارات"
                                : "Instant digital PDF download access & copyright reserved by Awakened")
                            : (isAr
                                ? "الإقرار بالطبيعة غير الطبية للخدمات (استشارات عافية وتطوير استراتيجي وليست علاجاً سريرياً)"
                                : "Non-medical disclaimer (wellness consulting & personal advisory only)")}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[#C9A84C] font-bold shrink-0">✓</span>
                        <span>
                          {isAr ? "الموافقة على معالجة البيانات وفق القانون القطري رقم 13 لسنة 2016 و" : "Data processing under Qatar Law No. 13 of 2016 & "}
                          <Link to="/privacy" target="_blank" rel="noopener noreferrer" className="underline font-bold text-[#141F15] hover:text-[#9E7E2E]">
                            {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
                          </Link>
                        </span>
                      </div>
                      {item.isCorporate && (
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-[#C9A84C] font-bold shrink-0">✓</span>
                          <span>
                            {isAr
                              ? "تأكيد تفويض المؤسسة والموافقة على شروط وثيقة نطاق العمل (SOW) وأحكام وديعة التخطيط"
                              : "Corporate authorization & SOW planning deposit provisions"}
                          </span>
                        </div>
                      )}
                    </div>
                  </label>
                </div>

                {errors.allRequired && (
                  <div
                    className="mt-2.5 p-2 rounded flex items-center gap-2 text-xs font-semibold"
                    style={{ background: "#FDEAE8", color: "#C0392B" }}
                  >
                    <span>⚠️</span>
                    <span>{errors.allRequired}</span>
                  </div>
                )}
              </div>

              {/* Optional 1: Research Purpose (Clearly marked Optional) */}
              <div
                className="flex items-start gap-2.5 p-3 rounded-lg border border-[#E8E0D2]"
                style={{ background: "#F5F0E8" }}
              >
                <input
                  type="checkbox"
                  id="modal-consent-research"
                  checked={consents.research}
                  onChange={(e) =>
                    setConsents((c) => ({ ...c, research: e.target.checked }))
                  }
                  className="mt-0.5 w-4 h-4 cursor-pointer accent-[#18381D] shrink-0 rounded"
                />
                <label
                  htmlFor="modal-consent-research"
                  className="text-xs cursor-pointer select-none leading-relaxed"
                  style={{ color: "#1E3B24" }}
                >
                  <span className="font-semibold text-[#141F15]">
                    {t(
                      "Optional — Wellbeing Research & Methodology: ",
                      "اختياري — أبحاث العافية وتطوير المنهجيات: ",
                    )}
                  </span>
                  {t(
                    "I consent to the use of anonymized insights from my sessions for wellbeing research and practice development (declining does not affect your booking).",
                    "أوافق على استخدام بيانات ورؤى مجهولة الهوية من جلساتي لأغراض أبحاث العافية وتطوير الممارسات (عدم الموافقة لا يؤثر مطلقاً على حصولكم على الخدمة).",
                  )}
                </label>
              </div>

              {/* Optional 2: Community & Marketing Updates */}
              <div className="flex items-start gap-2.5 px-1">
                <input
                  type="checkbox"
                  id="modal-consent-marketing"
                  checked={consents.marketing}
                  onChange={(e) =>
                    setConsents((c) => ({ ...c, marketing: e.target.checked }))
                  }
                  className="mt-0.5 w-4 h-4 cursor-pointer accent-[#18381D] shrink-0 rounded"
                />
                <label
                  htmlFor="modal-consent-marketing"
                  className="text-xs cursor-pointer select-none leading-relaxed text-[#555E57]"
                >
                  {t(
                    "Keep me updated on upcoming Awakened retreats, workshops, and exclusive community events (Optional).",
                    "أرغب في استلام تحديثات حول رحلات العافية القادمة وورش العمل وتجمعات المجتمع الحصرية (اختياري).",
                  )}
                </label>
              </div>
            </div>

            {error && (
              <div
                className="p-3 text-xs text-[#C0392B] font-medium rounded-lg"
                style={{ background: "#FDEAE8", border: "1px solid #F5C6CB" }}
              >
                {error}
              </div>
            )}
          </form>
        </div>

        {/* Sticky Action Footer (Always 100% visible on Laptop & Mobile) */}
        <div
          className="shrink-0 px-4 sm:px-6 py-3.5 sm:py-4 border-t border-[#DFD7C9]"
          style={{
            background: "#FAF7F2",
          }}
        >
          <button
            type="submit"
            form="checkout-form"
            disabled={loading}
            className="w-full py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm tracking-[0.14em] uppercase font-bold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md cursor-pointer"
            style={{
              fontFamily: fontBody,
              background: "#141F15",
              color: "#FAF7F2",
              border: "1px solid #9E7E2E",
            }}
            onMouseEnter={(e) => {
              if (!loading) e.currentTarget.style.background = "#243828";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#141F15";
            }}
          >
            {loading ? (
              <span>{t("Redirecting to SkipCash…", "جارٍ التوجيه إلى سكيب كاش…")}</span>
            ) : (
              <>
                <span>
                  {t(
                    `Proceed to Secure Payment · ${item.priceQAR}`,
                    `المتابعة للدفع الآمن · ${item.priceQAR}`,
                  )}
                </span>
                <span style={{ color: "#F0D58A" }}>→</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
