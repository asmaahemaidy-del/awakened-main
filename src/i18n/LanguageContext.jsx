import { createContext, useCallback, useContext, useEffect, useState } from "react";

const LanguageContext = createContext({
  lang: "en",
  isAr: false,
  setLang: () => {},
  t: (en) => en,
});

const STORAGE_KEY = "awakened_lang";

function detectBrowserLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "ar") return stored;
    const nav = navigator.language || "";
    return nav.startsWith("ar") ? "ar" : "en";
  } catch {
    return "en";
  }
}

function applyLang(lang) {
  const dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lang;
  document.documentElement.dir = dir;
  document.documentElement.setAttribute("data-lang", lang);
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {}
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("en");
  useEffect(() => {
    const detected = detectBrowserLang();
    setLangState(detected);
    applyLang(detected);
  }, []);
  const setLang = useCallback((l) => {
    setLangState(l);
    applyLang(l);
  }, []);
  const t = useCallback((en, ar) => (lang === "ar" ? ar : en), [lang]);
  return (
    <LanguageContext.Provider
      value={{
        lang,
        isAr: lang === "ar",
        setLang,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
