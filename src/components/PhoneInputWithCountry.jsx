import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export const COUNTRY_CODES = [
  // GCC & Middle East first
  { code: "+974", country: "Qatar", countryAr: "قطر", flag: "🇶🇦", iso: "QA" },
  { code: "+971", country: "United Arab Emirates", countryAr: "الإمارات", flag: "🇦🇪", iso: "AE" },
  { code: "+966", country: "Saudi Arabia", countryAr: "السعودية", flag: "🇸🇦", iso: "SA" },
  { code: "+965", country: "Kuwait", countryAr: "الكويت", flag: "🇰🇼", iso: "KW" },
  { code: "+973", country: "Bahrain", countryAr: "البحرين", flag: "🇧🇭", iso: "BH" },
  { code: "+968", country: "Oman", countryAr: "عُمان", flag: "🇴🇲", iso: "OM" },
  // Key Regional
  { code: "+962", country: "Jordan", countryAr: "الأردن", flag: "🇯🇴", iso: "JO" },
  { code: "+961", country: "Lebanon", countryAr: "لبنان", flag: "🇱🇧", iso: "LB" },
  { code: "+20", country: "Egypt", countryAr: "مصر", flag: "🇪🇬", iso: "EG" },
  // International Hubs & Common Client Countries
  { code: "+44", country: "United Kingdom", countryAr: "المملكة المتحدة", flag: "🇬🇧", iso: "GB" },
  { code: "+1", country: "United States / Canada", countryAr: "الولايات المتحدة / كندا", flag: "🇺🇸", iso: "US" },
  { code: "+33", country: "France", countryAr: "فرنسا", flag: "🇫🇷", iso: "FR" },
  { code: "+41", country: "Switzerland", countryAr: "سويسرا", flag: "🇨🇭", iso: "CH" },
  { code: "+49", country: "Germany", countryAr: "ألمانيا", flag: "🇩🇪", iso: "DE" },
  { code: "+39", country: "Italy", countryAr: "إيطاليا", flag: "🇮🇹", iso: "IT" },
  { code: "+34", country: "Spain", countryAr: "إسبانيا", flag: "🇪🇸", iso: "ES" },
  { code: "+90", country: "Turkey", countryAr: "تركيا", flag: "🇹🇷", iso: "TR" },
  { code: "+91", country: "India", countryAr: "الهند", flag: "🇮🇳", iso: "IN" },
  { code: "+92", country: "Pakistan", countryAr: "باكستان", flag: "🇵🇰", iso: "PK" },
  { code: "+65", country: "Singapore", countryAr: "سنغافورة", flag: "🇸🇬", iso: "SG" },
  { code: "+61", country: "Australia", countryAr: "أستراليا", flag: "🇦🇺", iso: "AU" },
  { code: "+81", country: "Japan", countryAr: "اليابان", flag: "🇯🇵", iso: "JP" },
  { code: "+86", country: "China", countryAr: "الصين", flag: "🇨🇳", iso: "CN" },
  { code: "+60", country: "Malaysia", countryAr: "ماليزيا", flag: "🇲🇾", iso: "MY" },
];

/**
 * PhoneInputWithCountry
 * Elegant, luxury-styled phone input with searchable or dropdown country code picker.
 *
 * Props:
 * - value: string (e.g. "+974 7710 6177")
 * - onChange: (fullPhoneValue: string) => void
 * - required?: boolean
 * - id?: string
 * - placeholder?: string
 * - variant?: "light" | "cream" | "dark" (default "light")
 * - error?: string
 */
export function PhoneInputWithCountry({
  value = "",
  onChange,
  required = false,
  id,
  placeholder,
  variant = "light",
  error,
}) {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";
  const fontBody = isAr ? "var(--font-arabic)" : "var(--font-sans)";

  // Parse existing value or default to +974
  const extractCodeAndNumber = (fullVal) => {
    if (!fullVal) return { code: "+974", number: "" };
    const cleaned = fullVal.trim();
    // Try to match longest known country code
    const sorted = [...COUNTRY_CODES].sort((a, b) => b.code.length - a.code.length);
    for (const c of sorted) {
      if (cleaned.startsWith(c.code)) {
        return {
          code: c.code,
          number: cleaned.slice(c.code.length).replace(/^[\s-]+/, ""),
        };
      }
    }
    // If it has a + but unknown code
    const plusMatch = cleaned.match(/^(\+\d{1,4})\s*(.*)$/);
    if (plusMatch) {
      return { code: plusMatch[1], number: plusMatch[2] };
    }
    return { code: "+974", number: cleaned };
  };

  const initial = extractCodeAndNumber(value);
  const [selectedCode, setSelectedCode] = useState(initial.code);
  const [localNumber, setLocalNumber] = useState(initial.number);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);

  // Sync state if external value changes significantly
  useEffect(() => {
    const parsed = extractCodeAndNumber(value);
    setSelectedCode(parsed.code);
    setLocalNumber(parsed.number);
  }, [value]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const handleCodeChange = (newCode) => {
    setSelectedCode(newCode);
    setIsOpen(false);
    setSearchQuery("");
    const combined = localNumber.trim() ? `${newCode} ${localNumber.trim()}` : newCode;
    onChange?.(combined);
  };

  const handleNumberChange = (e) => {
    const inputVal = e.target.value;
    setLocalNumber(inputVal);
    const combined = inputVal.trim() ? `${selectedCode} ${inputVal.trim()}` : "";
    onChange?.(combined);
  };

  const currentCountry =
    COUNTRY_CODES.find((c) => c.code === selectedCode) || {
      code: selectedCode,
      country: "International",
      countryAr: "دولي",
      flag: "🌐",
    };

  const filteredCodes = COUNTRY_CODES.filter((c) => {
    const q = searchQuery.toLowerCase();
    return (
      c.country.toLowerCase().includes(q) ||
      c.countryAr.includes(q) ||
      c.code.includes(q)
    );
  });

  // Variant themes
  const themes = {
    light: {
      bg: "#FFFFFF",
      border: error ? "#C0392B" : "#C8C0B4",
      focusBorder: "#C9A84C",
      text: "#141F15",
      dropdownBg: "#FFFFFF",
      hoverBg: "#F5F2EB",
      codeBg: "#FAF8F5",
      placeholder: "#8E887E",
    },
    cream: {
      bg: "var(--brand-cream, #FAF7F2)",
      border: error ? "#C0392B" : "var(--brand-cream-warm, #E8E2D8)",
      focusBorder: "var(--brand-gold, #C9A84C)",
      text: "var(--brand-forest, #141F15)",
      dropdownBg: "#FAF7F2",
      hoverBg: "#EDE7DC",
      codeBg: "#F0EAE1",
      placeholder: "#8E887E",
    },
    dark: {
      bg: "var(--brand-forest-input, #1C2B1E)",
      border: error ? "#C0392B" : "var(--brand-gold-border, rgba(201,168,76,0.3))",
      focusBorder: "var(--brand-gold, #C9A84C)",
      text: "var(--brand-cream, #FAF7F2)",
      dropdownBg: "#141F15",
      hoverBg: "#223525",
      codeBg: "#172519",
      placeholder: "#7D8C80",
    },
  };

  const theme = themes[variant] || themes.light;

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className="flex items-center w-full transition-colors rounded-none"
        style={{
          background: theme.bg,
          border: `1px solid ${theme.border}`,
          direction: "ltr", // Country codes and phone numbers are standardized LTR
        }}
      >
        {/* Country Code Selector Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-3 py-2.5 sm:py-3 transition-colors shrink-0 text-xs sm:text-sm font-medium border-r"
          style={{
            fontFamily: fontBody,
            background: theme.codeBg,
            borderColor: theme.border,
            color: theme.text,
            cursor: "pointer",
          }}
          aria-expanded={isOpen}
          aria-label="Select Country Code"
        >
          <span className="text-base leading-none">{currentCountry.flag}</span>
          <span className="font-semibold tracking-wide">{currentCountry.code}</span>
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 text-stone-500 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Local Number Input */}
        <input
          id={id}
          type="tel"
          required={required}
          value={localNumber}
          onChange={handleNumberChange}
          placeholder={placeholder || (isAr ? "رقم الهاتف" : "Phone number")}
          className="w-full px-3 py-2.5 sm:py-3 text-xs sm:text-sm outline-none bg-transparent"
          style={{
            fontFamily: fontBody,
            color: theme.text,
            direction: "ltr",
          }}
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute z-50 left-0 top-full mt-1.5 w-72 max-w-[90vw] shadow-2xl overflow-hidden border"
          style={{
            background: theme.dropdownBg,
            borderColor: theme.border,
            borderRadius: "4px",
          }}
        >
          {/* Search box inside dropdown */}
          <div className="p-2 border-b" style={{ borderColor: theme.border }}>
            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("Search country or code...", "ابحث عن الدولة أو الرمز...")}
              className="w-full px-2.5 py-1.5 text-xs outline-none rounded border"
              style={{
                fontFamily: fontBody,
                background: theme.bg,
                borderColor: theme.border,
                color: theme.text,
                direction: isAr ? "rtl" : "ltr",
              }}
            />
          </div>

          {/* List of Countries */}
          <div className="max-h-56 overflow-y-auto">
            {filteredCodes.length === 0 ? (
              <div className="p-3 text-xs text-center text-stone-400 font-sans">
                {t("No countries found", "لم يتم العثور على نتائج")}
              </div>
            ) : (
              filteredCodes.map((item) => {
                const isSelected = item.code === selectedCode;
                return (
                  <button
                    key={`${item.iso}-${item.code}`}
                    type="button"
                    onClick={() => handleCodeChange(item.code)}
                    className="w-full flex items-center justify-between px-3 py-2 text-left text-xs transition-colors"
                    style={{
                      fontFamily: fontBody,
                      background: isSelected ? theme.hoverBg : "transparent",
                      color: theme.text,
                      cursor: "pointer",
                      borderBottom: "1px solid rgba(0,0,0,0.03)",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-base">{item.flag}</span>
                      <span className="font-medium">
                        {isAr ? item.countryAr : item.country}
                      </span>
                    </div>
                    <span
                      className="font-mono text-xs font-semibold px-1.5 py-0.5 rounded"
                      style={{
                        background: isSelected ? "var(--brand-gold, #C9A84C)" : "transparent",
                        color: isSelected ? "#FFFFFF" : theme.placeholder,
                      }}
                    >
                      {item.code}
                    </span>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}

      {error && (
        <p className="text-[11px] text-[#C0392B] mt-1 font-medium">
          {error}
        </p>
      )}
    </div>
  );
}
