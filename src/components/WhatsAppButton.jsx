import { useState, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("Executive Consultation");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";

  const fontBody = isAr ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = isAr ? "var(--font-arabic)" : "var(--font-heading)";

  // Synchronize topic default when language changes
  useEffect(() => {
    setTopic(isAr ? "استشارة تنفيذية" : "Executive Consultation");
  }, [isAr]);

  const topics = [
    { en: "Executive Consultation", ar: "استشارة تنفيذية" },
    { en: "Sanctuary Retreat", ar: "ملاذ أوايكند" },
    { en: "Discovery Session", ar: "جلسة اكتشاف" },
    { en: "General Inquiry", ar: "استفسار عام" },
  ];

  const handleStartChat = async (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);

    const clientName = name.trim() || (isAr ? "زائر واتساب" : "WhatsApp Visitor");
    const selectedTopic = topic;
    const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";
    const adminApiBase =
      (typeof import.meta !== "undefined" && import.meta.env?.VITE_ADMIN_API_URL) ||
      "https://awakened-admin.vercel.app";

    // 1. Log inquiry to Awakened Admin Console so they show up in inquiries immediately
    try {
      await fetch(`${adminApiBase}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: clientName,
          email: "whatsapp-chat@gotawakened.com",
          phone: "+974 7710 6177",
          inquiry_type: "consultation",
          subject: `WhatsApp Business Inquiry: ${selectedTopic}`,
          message: `Visitor initiated WhatsApp Business chat from page: ${currentPath} | Topic: ${selectedTopic} | Name: ${clientName}`,
          source_page: currentPath,
          preferred_contact: "whatsapp",
          referrer: typeof document !== "undefined" ? document.referrer || undefined : undefined,
        }),
      });
    } catch (err) {
      console.warn("[Awakened WhatsApp] Inquiry log notice:", err);
    }

    // 2. Open official WhatsApp Business chat (+974 7710 6177)
    const greeting = isAr
      ? `مرحباً أوايكند للاستشارات، أود الاستفسار بخصوص: ${selectedTopic}${name.trim() ? ` (الاسم: ${name.trim()})` : ""}`
      : `Hello Awakened for Consultations, I would like to inquire regarding: ${selectedTopic}${name.trim() ? ` (Name: ${name.trim()})` : ""}`;

    const whatsappUrl = `https://wa.me/97477106177?text=${encodeURIComponent(greeting)}`;

    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }

    setIsSubmitting(false);
    setIsOpen(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        [isAr ? "left" : "right"]: 24,
        zIndex: 1000,
        fontFamily: fontBody,
        direction: isAr ? "rtl" : "ltr",
      }}
    >
      {/* Floating Popup Card */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="WhatsApp Advisory Chat"
          style={{
            position: "absolute",
            bottom: 64,
            [isAr ? "left" : "right"]: 0,
            width: 320,
            maxWidth: "calc(100vw - 48px)",
            backgroundColor: "#141F15",
            border: "1.5px solid #C9A84C",
            borderRadius: 16,
            boxShadow: "0 16px 40px rgba(0, 0, 0, 0.45), 0 0 20px rgba(201, 168, 76, 0.15)",
            overflow: "hidden",
            animation: "fadeInUp 0.25s ease-out",
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#243828",
              padding: "16px 18px",
              borderBottom: "1px solid rgba(201, 168, 76, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    backgroundColor: "#141F15",
                    border: "1px solid #C9A84C",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/images/logo-160.webp"
                    alt="Awakened"
                    style={{ width: 28, height: 28, objectFit: "contain" }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                {/* Online pulse dot */}
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    [isAr ? "left" : "right"]: 0,
                    width: 10,
                    height: 10,
                    backgroundColor: "#25D366",
                    borderRadius: "50%",
                    border: "2px solid #243828",
                  }}
                />
              </div>
              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: isAr ? "0.9rem" : "0.85rem",
                    fontWeight: 600,
                    color: "#FAF7F2",
                    lineHeight: 1.2,
                  }}
                >
                  {t("Awakened for Consultations", "أوايكند للاستشارات")}
                </p>
                <p
                  style={{
                    margin: "2px 0 0 0",
                    fontSize: "0.72rem",
                    color: "#C9A84C",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: 6,
                      height: 6,
                      backgroundColor: "#25D366",
                      borderRadius: "50%",
                    }}
                  />
                  {t("WhatsApp Business · Online", "واتساب الأعمال · متاح الآن")}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              style={{
                background: "transparent",
                border: "none",
                color: "#FAF7F2",
                opacity: 0.7,
                fontSize: 20,
                cursor: "pointer",
                padding: "2px 6px",
                lineHeight: 1,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
            >
              ×
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: "16px 18px" }}>
            <div
              style={{
                backgroundColor: "#243828",
                borderRadius: 12,
                padding: "12px 14px",
                marginBottom: 14,
                border: "1px solid rgba(61, 107, 68, 0.4)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: isAr ? "0.85rem" : "0.78rem",
                  color: "#FAF7F2",
                  lineHeight: 1.6,
                }}
              >
                {t(
                  "Welcome to Awakened. Connect directly with our private advisory circle in Doha via WhatsApp for discreet executive guidance and retreat reservations.",
                  "مرحباً بكم في أوايكند. تواصلوا مباشرة مع دائرتنا الاستشارية في الدوحة عبر واتساب لطلب الاستشارات التنفيذية وحجز الملاذات بكل خصوصية.",
                )}
              </p>
            </div>

            {/* Topic pills */}
            <label
              style={{
                display: "block",
                fontSize: "0.72rem",
                color: "#C9A84C",
                marginBottom: 6,
                fontWeight: 500,
                textTransform: isAr ? "none" : "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {t("Select Topic:", "اختر الموضوع:")}
            </label>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
                marginBottom: 14,
              }}
            >
              {topics.map((tItem) => {
                const label = isAr ? tItem.ar : tItem.en;
                const isSelected = topic === label;
                return (
                  <button
                    key={tItem.en}
                    type="button"
                    onClick={() => setTopic(label)}
                    style={{
                      fontSize: "0.72rem",
                      padding: "4px 10px",
                      borderRadius: 14,
                      border: isSelected ? "1px solid #C9A84C" : "1px solid #3D6B44",
                      backgroundColor: isSelected ? "rgba(201, 168, 76, 0.2)" : "transparent",
                      color: isSelected ? "#C9A84C" : "#FAF7F2",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Optional name */}
            <div style={{ marginBottom: 14 }}>
              <input
                type="text"
                placeholder={t("Your Name (Optional)", "اسمكم الكريم (اختياري)")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  backgroundColor: "#243828",
                  border: "1px solid #3D6B44",
                  borderRadius: 8,
                  padding: "8px 12px",
                  fontSize: "0.8rem",
                  color: "#FAF7F2",
                  outline: "none",
                }}
              />
            </div>

            {/* Action button */}
            <button
              onClick={handleStartChat}
              disabled={isSubmitting}
              style={{
                width: "100%",
                backgroundColor: "#25D366",
                border: "none",
                borderRadius: 10,
                padding: "10px 14px",
                color: "#141F15",
                fontWeight: 700,
                fontSize: isAr ? "0.88rem" : "0.82rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                cursor: isSubmitting ? "wait" : "pointer",
                boxShadow: "0 4px 14px rgba(37, 211, 102, 0.35)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#20BA56")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#25D366")}
            >
              {/* WhatsApp icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ flexShrink: 0 }}
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.072-.496-1.763-.73-2.887-2.518-2.975-2.635-.088-.117-.714-.949-.714-1.808 0-.859.45-1.282.61-1.458.161-.177.351-.221.468-.221.117 0 .234.001.336.006.107.005.251-.041.393.298.144.347.491 1.2.535 1.287.043.088.072.19.014.307-.058.118-.088.19-.175.293-.088.102-.185.228-.264.306-.088.087-.179.182-.077.357.102.175.454.748.974 1.211.671.597 1.236.782 1.411.869.175.088.278.073.38-.044.103-.117.438-.511.555-.686.118-.175.234-.146.395-.088.16.059 1.017.479 1.192.566.175.088.292.132.336.205.044.074.044.428-.1.833z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.528 3.66 1.447 5.176L2 22l4.981-1.408A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.062c-1.637 0-3.153-.483-4.432-1.314l-.318-.206-2.96.837.844-2.885-.224-.326A8.04 8.04 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8.062-8 8.062z" />
              </svg>
              <span>{t("Start Chat on WhatsApp", "بدء المحادثة على واتساب")}</span>
            </button>

            <p
              style={{
                margin: "10px 0 0 0",
                fontSize: "0.68rem",
                color: "#5A6B5C",
                textAlign: "center",
              }}
            >
              {t("Direct line: +974 7710 6177 · Doha, Qatar", "الخط المباشر: 6177 7710 974+ · الدوحة، قطر")}
            </p>
          </div>
        </div>
      )}

      {/* Floating Small Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp Business Chat"
        style={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          backgroundColor: "#141F15",
          border: "2px solid #C9A84C",
          color: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4), 0 0 14px rgba(201, 168, 76, 0.25)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          position: "relative",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.boxShadow =
            "0 8px 24px rgba(0, 0, 0, 0.5), 0 0 18px rgba(201, 168, 76, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow =
            "0 6px 20px rgba(0, 0, 0, 0.4), 0 0 14px rgba(201, 168, 76, 0.25)";
        }}
      >
        {/* WhatsApp Icon */}
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.072-.496-1.763-.73-2.887-2.518-2.975-2.635-.088-.117-.714-.949-.714-1.808 0-.859.45-1.282.61-1.458.161-.177.351-.221.468-.221.117 0 .234.001.336.006.107.005.251-.041.393.298.144.347.491 1.2.535 1.287.043.088.072.19.014.307-.058.118-.088.19-.175.293-.088.102-.185.228-.264.306-.088.087-.179.182-.077.357.102.175.454.748.974 1.211.671.597 1.236.782 1.411.869.175.088.278.073.38-.044.103-.117.438-.511.555-.686.118-.175.234-.146.395-.088.16.059 1.017.479 1.192.566.175.088.292.132.336.205.044.074.044.428-.1.833z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.528 3.66 1.447 5.176L2 22l4.981-1.408A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.062c-1.637 0-3.153-.483-4.432-1.314l-.318-.206-2.96.837.844-2.885-.224-.326A8.04 8.04 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8.062-8 8.062z" />
        </svg>

        {/* Small gold indicator pulse dot */}
        <span
          style={{
            position: "absolute",
            top: 0,
            [isAr ? "left" : "right"]: 0,
            width: 12,
            height: 12,
            backgroundColor: "#25D366",
            borderRadius: "50%",
            border: "2px solid #141F15",
          }}
        />
      </button>
    </div>
  );
}
