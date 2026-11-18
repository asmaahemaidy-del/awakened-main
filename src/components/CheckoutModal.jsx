import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useLanguage } from "../i18n/LanguageContext";

export function CheckoutModal({
  isOpen,
  onClose,
  item,
  onProceed,
  loading = false,
  error = "",
}) {
  const { t, isAr, lang } = useLanguage();
  const fontBody = isAr ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = isAr ? "var(--font-arabic)" : "var(--font-heading)";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
  });

  const [consents, setConsents] = useState({
    terms: false,
    nonMedical: false,
    privacy: false,
    corporateAuth: false,
    research: false,
    marketing: false,
  });

  const [errors, setErrors] = useState({});

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
    if (!consents.terms) {
      errs.terms = t(
        "You must accept the Terms of Service & Refund Policy",
        "يجب الموافقة على شروط الخدمة وسياسة الاسترداد",
      );
    }
    if (!consents.nonMedical) {
      errs.nonMedical = t(
        "You must acknowledge the non-medical disclaimer",
        "يجب الإقرار بإخلاء المسؤولية غير الطبي",
      );
    }
    if (!consents.privacy) {
      errs.privacy = t(
        "You must consent to Privacy Policy data processing",
        "يجب الموافقة على معالجة البيانات وفق سياسة الخصوصية",
      );
    }
    if (item.isCorporate && !consents.corporateAuth) {
      errs.corporateAuth = t(
        "You must confirm corporate authorization",
        "يجب تأكيد تفويض المؤسسة",
      );
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onProceed({
        customer: form,
        consents,
        item,
      });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{
        background: "rgba(20, 31, 21, 0.78)",
        backdropFilter: "blur(6px)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-xl max-h-[92vh] flex flex-col overflow-hidden shadow-2xl"
        style={{
          background: "#FAF7F2",
          border: "1px solid #D6CFC4",
          direction: isAr ? "rtl" : "ltr",
        }}
      >
        {/* Header */}
        <div
          className="px-6 py-5 flex items-center justify-between text-white"
          style={{
            background: "#141F15",
            borderBottom: "1px solid rgba(201, 168, 76, 0.3)",
          }}
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#C9A84C" }}
              />
              <p
                className="text-[10px] tracking-[0.25em] uppercase font-semibold"
                style={{
                  fontFamily: fontBody,
                  color: "#F0D58A",
                }}
              >
                {t("Secure Checkout", "إتمام الحجز الآمن")}
              </p>
            </div>
            <h2
              id="checkout-modal-title"
              className="text-lg sm:text-xl font-normal"
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
            className="w-9 h-9 flex items-center justify-center rounded-full text-xl transition-colors hover:bg-white/10"
            style={{
              color: "#E2ECE0",
            }}
          >
            ✕
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto px-6 py-5 flex-1">
          {/* Order Summary Box */}
          <div
            className="p-4 mb-6"
            style={{
              background: "#F2ECE1",
              border: "1px solid #DFD7C9",
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: fontBody,
                    color: "#141F15",
                  }}
                >
                  {t(item.titleEn, item.titleAr)}
                </p>
                {item.subtitleEn && (
                  <p
                    className="text-xs mt-0.5"
                    style={{
                      fontFamily: fontBody,
                      color: "#2E4A32",
                    }}
                  >
                    {t(item.subtitleEn, item.subtitleAr)}
                  </p>
                )}
                {item.mealPlan && (
                  <p
                    className="text-xs mt-1 font-medium"
                    style={{
                      fontFamily: fontBody,
                      color: "#18381D",
                    }}
                  >
                    + {t(item.mealPlan.labelEn, item.mealPlan.labelAr)} (
                    {t(item.mealPlan.priceEn, item.mealPlan.priceAr)})
                  </p>
                )}
              </div>
              <div className="text-start sm:text-end shrink-0">
                <p
                  className="text-lg font-bold"
                  style={{
                    fontFamily: fontHead,
                    color: "#141F15",
                  }}
                >
                  {item.priceQAR}
                </p>
                <p
                  className="text-xs font-semibold"
                  style={{
                    fontFamily: fontBody,
                    color: "#2E4A32",
                  }}
                >
                  {item.priceUSD}
                </p>
              </div>
            </div>
            <div
              className="mt-3 pt-3 flex items-center gap-2 text-[11px]"
              style={{
                borderTop: "1px dashed #D6CFC4",
                color: "#284D2D",
                fontFamily: fontBody,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>
                {t(
                  "Processed via SkipCash · Qatar National Payment Gateway",
                  "الدفع آمن عبر سكيب كاش (SkipCash) · بوابة الدفع الوطنية في قطر",
                )}
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Customer Inputs */}
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
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                placeholder={t("e.g. Sara Al-Thani", "مثال: سارة آل ثاني")}
                className="w-full px-3.5 py-2.5 text-sm outline-none transition-colors"
                style={{
                  fontFamily: fontBody,
                  background: "#FFFFFF",
                  border: errors.name ? "1.5px solid #C0392B" : "1px solid #C8C0B4",
                  color: "#141F15",
                }}
              />
              {errors.name && (
                <p className="text-xs text-[#C0392B] mt-1 font-medium">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 text-sm outline-none transition-colors"
                  style={{
                    fontFamily: fontBody,
                    background: "#FFFFFF",
                    border: errors.email ? "1.5px solid #C0392B" : "1px solid #C8C0B4",
                    color: "#141F15",
                  }}
                />
                {errors.email && (
                  <p className="text-xs text-[#C0392B] mt-1 font-medium">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="checkout-phone"
                  className="block text-xs font-semibold mb-1"
                  style={{ fontFamily: fontBody, color: "#141F15" }}
                >
                  {t("Phone / WhatsApp *", "رقم الهاتف / واتساب *")}
                </label>
                <input
                  id="checkout-phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                  placeholder="+974 5555 1234"
                  className="w-full px-3.5 py-2.5 text-sm outline-none transition-colors"
                  style={{
                    fontFamily: fontBody,
                    background: "#FFFFFF",
                    border: errors.phone ? "1.5px solid #C0392B" : "1px solid #C8C0B4",
                    color: "#141F15",
                    direction: "ltr",
                    textAlign: isAr ? "right" : "left",
                  }}
                />
                {errors.phone && (
                  <p className="text-xs text-[#C0392B] mt-1 font-medium">
                    {errors.phone}
                  </p>
                )}
              </div>
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
                  onChange={(e) =>
                    setForm((f) => ({ ...f, organization: e.target.value }))
                  }
                  placeholder={t(
                    "Company name or Department",
                    "اسم المؤسسة أو الإدارة",
                  )}
                  className="w-full px-3.5 py-2.5 text-sm outline-none transition-colors"
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
                  <p className="text-xs text-[#C0392B] mt-1 font-medium">
                    {errors.organization}
                  </p>
                )}
              </div>
            )}

            {/* Consents Section */}
            <div
              className="pt-4 border-t border-[#DFD7C9] space-y-3"
              style={{ fontFamily: fontBody }}
            >
              <p
                className="text-xs font-bold uppercase tracking-wider mb-2"
                style={{ color: "#2E4A32" }}
              >
                {t("Consent & Acknowledgements", "الموافقات والإقرارات")}
              </p>

              {/* Required 1: Terms & Refund Policy */}
              <div className="flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="modal-consent-terms"
                  checked={consents.terms}
                  onChange={(e) =>
                    setConsents((c) => ({ ...c, terms: e.target.checked }))
                  }
                  className="mt-1 cursor-pointer accent-[#2E4A32] shrink-0"
                />
                <label
                  htmlFor="modal-consent-terms"
                  className="text-xs cursor-pointer select-none leading-relaxed"
                  style={{ color: "#141F15" }}
                >
                  <span className="font-semibold text-[#C0392B]">* </span>
                  {isAr ? (
                    <>
                      أوافق على{" "}
                      <Link
                        to="/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-bold text-[#18381D]"
                      >
                        شروط الخدمة
                      </Link>{" "}
                      و{" "}
                      <Link
                        to="/refund-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-bold text-[#18381D]"
                      >
                        سياسة الاسترداد والإلغاء
                      </Link>
                    </>
                  ) : (
                    <>
                      I agree to the{" "}
                      <Link
                        to="/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-bold text-[#18381D]"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/refund-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-bold text-[#18381D]"
                      >
                        Refund Policy
                      </Link>
                    </>
                  )}
                </label>
              </div>
              {errors.terms && (
                <p className="text-xs text-[#C0392B] ms-6 font-medium">
                  {errors.terms}
                </p>
              )}

              {/* Required 2: Non-Medical Disclaimer */}
              <div className="flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="modal-consent-medical"
                  checked={consents.nonMedical}
                  onChange={(e) =>
                    setConsents((c) => ({ ...c, nonMedical: e.target.checked }))
                  }
                  className="mt-1 cursor-pointer accent-[#2E4A32] shrink-0"
                />
                <label
                  htmlFor="modal-consent-medical"
                  className="text-xs cursor-pointer select-none leading-relaxed"
                  style={{ color: "#141F15" }}
                >
                  <span className="font-semibold text-[#C0392B]">* </span>
                  {t(
                    "I acknowledge that Awakened services provide coaching and personal development, and are strictly non-medical and not a medical or clinical diagnosis or treatment.",
                    "أقر بأن خدمات أوايكند مخصصة للتطوير الشخصي والتدريب على العافية، وليست تشخيصًا أو علاجًا طبيًا أو نفسيًا أو سريريًا.",
                  )}
                </label>
              </div>
              {errors.nonMedical && (
                <p className="text-xs text-[#C0392B] ms-6 font-medium">
                  {errors.nonMedical}
                </p>
              )}

              {/* Required 3: Privacy & Data Protection */}
              <div className="flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="modal-consent-privacy"
                  checked={consents.privacy}
                  onChange={(e) =>
                    setConsents((c) => ({ ...c, privacy: e.target.checked }))
                  }
                  className="mt-1 cursor-pointer accent-[#2E4A32] shrink-0"
                />
                <label
                  htmlFor="modal-consent-privacy"
                  className="text-xs cursor-pointer select-none leading-relaxed"
                  style={{ color: "#141F15" }}
                >
                  <span className="font-semibold text-[#C0392B]">* </span>
                  {isAr ? (
                    <>
                      أوافق على معالجة بيانات الحجز والتواصل وفقًا لقانون حماية البيانات القطري رقم 13 لسنة 2016 و
                      <Link
                        to="/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-bold text-[#18381D]"
                      >
                        سياسة الخصوصية
                      </Link>
                    </>
                  ) : (
                    <>
                      I consent to the processing of my booking details under Qatar Data Protection Law No. 13 of 2016 and the{" "}
                      <Link
                        to="/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-bold text-[#18381D]"
                      >
                        Privacy Policy
                      </Link>
                    </>
                  )}
                </label>
              </div>
              {errors.privacy && (
                <p className="text-xs text-[#C0392B] ms-6 font-medium">
                  {errors.privacy}
                </p>
              )}

              {/* Required Conditional: Corporate Authorization */}
              {item.isCorporate && (
                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="modal-consent-corp"
                    checked={consents.corporateAuth}
                    onChange={(e) =>
                      setConsents((c) => ({
                        ...c,
                        corporateAuth: e.target.checked,
                      }))
                    }
                    className="mt-1 cursor-pointer accent-[#2E4A32] shrink-0"
                  />
                  <label
                    htmlFor="modal-consent-corp"
                    className="text-xs cursor-pointer select-none leading-relaxed"
                    style={{ color: "#141F15" }}
                  >
                    <span className="font-semibold text-[#C0392B]">* </span>
                    {t(
                      "I confirm that I am authorized to book on behalf of my organization and agree to the Corporate Statement of Work (SOW) terms and planning deposit provisions.",
                      "أؤكد أنني مفوض بالحجز نيابة عن مؤسستي وأوافق على شروط وثيقة نطاق العمل (SOW) وأحكام وديعة التخطيط المؤسسية.",
                    )}
                  </label>
                </div>
              )}
              {errors.corporateAuth && (
                <p className="text-xs text-[#C0392B] ms-6 font-medium">
                  {errors.corporateAuth}
                </p>
              )}

              {/* Optional 1: Research Purpose (User Requested) */}
              <div
                className="flex items-start gap-2.5 p-2.5 rounded"
                style={{ background: "#F5F0E8" }}
              >
                <input
                  type="checkbox"
                  id="modal-consent-research"
                  checked={consents.research}
                  onChange={(e) =>
                    setConsents((c) => ({ ...c, research: e.target.checked }))
                  }
                  className="mt-1 cursor-pointer accent-[#2E4A32] shrink-0"
                />
                <label
                  htmlFor="modal-consent-research"
                  className="text-xs cursor-pointer select-none leading-relaxed"
                  style={{ color: "#1E3B24" }}
                >
                  <span className="font-semibold">
                    {t(
                      "Optional — Wellbeing Research & Methodology: ",
                      "اختياري — أبحاث العافية وتطوير المنهجيات: ",
                    )}
                  </span>
                  {t(
                    "I consent to the use of anonymized insights from my sessions for wellbeing research and practice development (declining does not affect your access to services).",
                    "أوافق على استخدام بيانات ورؤى مجهولة الهوية من جلساتي لأغراض أبحاث العافية وتطوير الممارسات (عدم الموافقة لا يؤثر مطلقاً على حصولكم على الخدمة).",
                  )}
                </label>
              </div>

              {/* Optional 2: Community & Marketing Updates */}
              <div className="flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="modal-consent-marketing"
                  checked={consents.marketing}
                  onChange={(e) =>
                    setConsents((c) => ({ ...c, marketing: e.target.checked }))
                  }
                  className="mt-1 cursor-pointer accent-[#2E4A32] shrink-0"
                />
                <label
                  htmlFor="modal-consent-marketing"
                  className="text-xs cursor-pointer select-none leading-relaxed"
                  style={{ color: "#3D5C42" }}
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
                className="p-3 text-xs text-[#C0392B] font-medium"
                style={{ background: "#FDEAE8", border: "1px solid #F5C6CB" }}
              >
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 text-xs tracking-[0.18em] uppercase font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{
                  fontFamily: fontBody,
                  background: "#141F15",
                  color: "#FFFFFF",
                  border: "none",
                  cursor: "pointer",
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
          </form>
        </div>
      </div>
    </div>
  );
}
