import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Seo } from "../components/Seo";
import { startOneTimeCommerceCheckout } from "../lib/commerce";

const events = [
  {
    skuId: "019dce11-2788-749a-ac80-a3d248c38fa7",
    month: "May",
    monthAr: "مايو",
    year: "2026",
    type: "Masterclass",
    typeAr: "درس رئيسي",
    en: "The Art of Rest",
    ar: "فن الراحة",
    price: 67500,
    location: "Doha, Qatar",
    locationAr: "الدوحة، قطر",
    capacity: "Limited capacity",
    capacityAr: "أماكن محدودة",
    descEn:
      "A masterclass exploring the science and practice of restorative rest, sleep optimisation, and deep recovery. Practical tools you can apply from day one.",
    descAr:
      "درس رئيسي يستكشف علم الراحة التصالحية وتحسين النوم والتعافي العميق. أدوات عملية تبدأ بتطبيقها من اليوم الأول",
  },
  {
    skuId: "019dce11-33ea-74f8-938f-5c60c3ac7dee",
    month: "June",
    monthAr: "يونيو",
    year: "2026",
    type: "Weekend Retreat",
    typeAr: "خلوة نهاية الأسبوع",
    en: "Stillness in Motion",
    ar: "السكون في الحركة",
    price: 162e3,
    location: "Qatar",
    locationAr: "قطر",
    capacity: "Max 8 participants",
    capacityAr: "حد أقصى ٨ مشاركين",
    descEn:
      "A two-day private experience exploring movement, breathwork, and mindful presence. Held at a curated luxury venue. Spaces are extremely limited.",
    descAr:
      "تجربة خاصة لمدة يومين تستكشف الحركة والتنفس الواعي والحضور الحقيقي. تُعقد في مكان راقٍ مختار بعناية. الأماكن محدودة للغاية",
  },
  {
    skuId: "019dce11-4118-74ac-ab8d-120ae0d02f1b",
    month: "July",
    monthAr: "يوليو",
    year: "2026",
    type: "Workshop",
    typeAr: "ورشة عمل",
    en: "Leadership & Longevity",
    ar: "القيادة وطول العمر",
    price: 85500,
    location: "Doha, Qatar",
    locationAr: "الدوحة، قطر",
    capacity: "Senior leaders only",
    capacityAr: "للقادة الكبار حصراً",
    descEn:
      "An exclusive half-day workshop for senior leaders on sustainable performance, energy management, and long-term vitality. Intimate setting, direct application.",
    descAr:
      "ورشة عمل حصرية لنصف يوم للقادة الكبار حول الأداء المستدام وإدارة الطاقة والحيوية طويلة الأمد. بيئة حميمة وتطبيق مباشر",
  },
  {
    skuId: "019dce5f-300a-73da-9b2f-50ac3c32c546",
    month: "August",
    monthAr: "أغسطس",
    year: "2026",
    type: "Book Club",
    typeAr: "نادي الكتاب",
    en: "High-Value Book Club",
    ar: "نادي الكتاب الراقي",
    price: 45e3,
    location: "Doha, Qatar",
    locationAr: "الدوحة، قطر",
    capacity: "Max 12 members",
    capacityAr: "حد أقصى ١٢ عضواً",
    descEn:
      "A monthly gathering of like-minded individuals exploring books that create subtle, lasting transformation. Each session is curated around a single title — deep discussion, shared reflection, and genuine connection in a private, high-value setting.",
    descAr:
      "تجمع شهري لعقول متقاربة تستكشف كتباً تُحدث تحولاً خفياً ودائماً. تُبنى كل جلسة حول عنوان واحد — نقاش عميق وتأمل مشترك وتواصل حقيقي في بيئة خاصة وراقية",
  },
];

export function EventsPage() {
  const [loadingSkuId, setLoadingSkuId] = useState(null);
  const [error, setError] = useState(null);
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";
  const fontBody = lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)";
  const fontHead = lang === "ar" ? "var(--font-arabic)" : "var(--font-heading)";
  const handleCheckout = async (skuId) => {
    setLoadingSkuId(skuId);
    setError(null);
    const result = await startOneTimeCommerceCheckout({
      skuId,
      quantity: 1,
    });
    if (result.success && result.checkoutUrl) {
      window.location.href = result.checkoutUrl;
      return;
    }
    setError(result.error || "Unable to start checkout. Please try again.");
    setLoadingSkuId(null);
  };
  return (
    <div
      style={{
        direction: lang === "ar" ? "rtl" : "ltr",
      }}
    >
      <Seo
        path="/events"
        title={t("Events & Experiences — Awakened", "الفعاليات والتجارب — أوايكند")}
        description={t(
          "Workshops, masterclasses, and curated gatherings in Doha, Qatar. All spaces are strictly limited",
          "ورش عمل ودروس رئيسية وتجمعات مختارة في الدوحة، قطر. جميع الأماكن محدودة للغاية",
        )}
      />
      <section
        id="top"
        className="relative overflow-hidden"
        style={{
          background: "#F5F1EA",
          scrollMarginTop: "80px",
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(107,153,112,0.06) 0px, rgba(107,153,112,0.06) 1px, transparent 1px, transparent 80px)",
            }}
          />
          <div
            className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(168,197,160,0.18) 0%, transparent 65%)",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-8 pt-40 pb-20">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <div
                className="w-10 h-px"
                style={{
                  background: "#4A7A50",
                }}
              />
              <p
                className="text-[10px] tracking-[0.4em] uppercase"
                style={{
                  fontFamily: fontBody,
                  color: "#4A7A50",
                }}
              >
                {t("Awakened Presents", "تقدّم أوايكند")}
              </p>
            </div>
            <p
              className="text-[10px] tracking-[0.3em] uppercase hidden sm:block"
              style={{
                fontFamily: fontBody,
                color: "#A8C5A0",
              }}
            >
              {t("Doha, Qatar — 2026", "الدوحة، قطر — ٢٠٢٦")}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div>
              <h1
                style={{
                  fontFamily: fontHead,
                  fontSize: "clamp(3.2rem, 7vw, 6.5rem)",
                  color: "#1A2B1C",
                  fontWeight: 400,
                  lineHeight: 0.95,
                  letterSpacing: isAr ? 0 : "-0.025em",
                }}
              >
                {t(
                  <>
                    <span
                      style={{
                        display: "block",
                      }}
                    >
                      Events
                    </span>
                    <span
                      style={{
                        display: "block",
                        color: "#4A7A50",
                        fontStyle: "italic",
                        paddingLeft: "2rem",
                      }}
                    >
                      {"& Experiences"}
                    </span>
                  </>,
                  <>
                    <span
                      style={{
                        display: "block",
                      }}
                    >
                      الفعاليات
                    </span>
                    <span
                      style={{
                        display: "block",
                        color: "#4A7A50",
                      }}
                    >
                      والتجارب
                    </span>
                  </>,
                )}
              </h1>
            </div>
            <div className="lg:w-72 flex-shrink-0 pb-2">
              <div
                className="h-px mb-5"
                style={{
                  background: "rgba(74,122,80,0.25)",
                }}
              />
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: "0.9rem",
                  color: "#3D5C42",
                  lineHeight: 1.9,
                }}
              >
                {t(
                  "Workshops, masterclasses, and curated gatherings for those ready to invest in genuine transformation",
                  "ورش عمل ودروس رئيسية وتجمعات مختارة لمن هم مستعدون للاستثمار في تحول حقيقي",
                )}
              </p>
              <p
                className="mt-3 text-xs tracking-[0.15em] uppercase"
                style={{
                  fontFamily: fontBody,
                  color: "#A8C5A0",
                }}
              >
                {t("All spaces strictly limited", "جميع الأماكن محدودة للغاية")}
              </p>
            </div>
          </div>
          <div
            className="mt-14 pt-8 flex flex-wrap gap-10"
            style={{
              borderTop: "1px solid rgba(74,122,80,0.18)",
            }}
          >
            {[
              {
                num: "3",
                label: t("Event formats", "أشكال الفعاليات"),
              },
              {
                num: "8–12",
                label: t("Max per event", "الحد الأقصى لكل فعالية"),
              },
              {
                num: "QAR",
                label: t("Priced in Qatari Riyal", "بالريال القطري"),
              },
            ].map((stat, i) => (
              <div key={i} className="flex items-baseline gap-3">
                <span
                  style={{
                    fontFamily: fontHead,
                    fontSize: "1.6rem",
                    color: "#1A2B1C",
                    fontWeight: 400,
                  }}
                >
                  {stat.num}
                </span>
                <span
                  className="text-xs tracking-[0.12em] uppercase"
                  style={{
                    fontFamily: fontBody,
                    color: "#6B9970",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="events-list"
        className="py-20 px-6"
        style={{
          background: "#F0EBE3",
          scrollMarginTop: "80px",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 flex flex-col items-center text-center">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{
                fontFamily: fontBody,
                color: "#6B9970",
              }}
            >
              {t("Upcoming Events", "الفعاليات القادمة")}
            </p>
            <div
              className="w-12 h-px"
              style={{
                background: "#6B9970",
              }}
            />
          </div>
          <div className="space-y-6">
            {events.map((event, idx) => {
              const dark = idx % 2 === 1;
              return (
                <div
                  key={event.skuId}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: dark ? "#1A2B1C" : "#FFFFFF",
                    border: dark ? "none" : "1px solid #E0D9CE",
                    boxShadow: dark
                      ? "0 8px 40px rgba(26,43,28,0.18)"
                      : "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                    <div
                      className="flex flex-col items-center justify-center text-center py-4 rounded-xl"
                      style={{
                        background: dark ? "rgba(107,153,112,0.15)" : "#F0EBE3",
                      }}
                    >
                      <span
                        className="text-3xl font-light"
                        style={{
                          fontFamily: fontHead,
                          color: dark ? "#A8C5A0" : "#1A2B1C",
                        }}
                      >
                        {t(event.month, event.monthAr)}
                      </span>
                      <span
                        className="text-lg"
                        style={{
                          fontFamily: fontHead,
                          color: "#6B9970",
                        }}
                      >
                        {event.year}
                      </span>
                    </div>
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="text-xs tracking-[0.15em] uppercase px-3 py-1 rounded-full"
                          style={{
                            fontFamily: fontBody,
                            background: dark ? "rgba(107,153,112,0.2)" : "#F0EBE3",
                            color: dark ? "#A8C5A0" : "#6B9970",
                          }}
                        >
                          {t(event.type, event.typeAr)}
                        </span>
                        <span
                          className="text-xs"
                          style={{
                            fontFamily: fontBody,
                            color: dark ? "#4A6B4E" : "#A8C5A0",
                          }}
                        >
                          {"· "}
                          {t(event.location, event.locationAr)}
                        </span>
                      </div>
                      <h2
                        className="text-2xl mb-1"
                        style={{
                          fontFamily: fontHead,
                          color: dark ? "#F7F4EE" : "#1A2B1C",
                        }}
                      >
                        {t(event.en, event.ar)}
                      </h2>
                      <p
                        className="text-sm leading-relaxed mb-2"
                        style={{
                          fontFamily: fontBody,
                          color: dark ? "#C8D8C4" : "#3D5C42",
                        }}
                      >
                        {t(event.descEn, event.descAr)}
                      </p>
                      <p
                        className="text-xs mt-3 italic"
                        style={{
                          fontFamily: fontBody,
                          color: dark ? "#6B9970" : "#A8C5A0",
                        }}
                      >
                        {t(event.capacity, event.capacityAr)}
                      </p>
                    </div>
                    <div className="flex flex-col justify-between h-full">
                      <div className="mb-4">
                        <p
                          className="text-xs mb-1"
                          style={{
                            fontFamily: fontBody,
                            color: dark ? "#A8C5A0" : "#9B8E7E",
                          }}
                        >
                          {t("Per person", "للشخص")}
                        </p>
                        <p
                          className="text-2xl font-light"
                          style={{
                            fontFamily: fontHead,
                            color: dark ? "#F7F4EE" : "#1A2B1C",
                          }}
                        >
                          {"QAR "}
                          {(event.price / 100).toLocaleString()}
                        </p>
                      </div>
                      <button
                        onClick={() => handleCheckout(event.skuId)}
                        disabled={loadingSkuId === event.skuId}
                        className="w-full py-3 rounded-xl text-sm tracking-[0.1em] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{
                          fontFamily: fontBody,
                          background: dark ? "#6B9970" : "#1A2B1C",
                          color: "#FAF7F2",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        {loadingSkuId === event.skuId
                          ? t("Preparing…", "جارٍ التحضير…")
                          : t("Reserve Your Place", "احجز مكانك")}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {error && (
            <p
              className="text-center mt-6 text-sm"
              style={{
                color: "#C0392B",
                fontFamily: fontBody,
              }}
            >
              {error}
            </p>
          )}
          <div className="max-w-xl mx-auto mt-10 text-center">
            <p
              className="text-xs leading-relaxed"
              style={{
                fontFamily: fontBody,
                color: "#9B8E7E",
              }}
            >
              {t(
                "Registration confirms your place. All events are conducted under Awakened's confidentiality standards",
                "يؤكد التسجيل مكانك. تُعقد جميع الفعاليات وفق معايير السرية في أوايكند",
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
