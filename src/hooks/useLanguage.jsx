import { createContext, useContext, useState, useEffect } from "react";
import { STR, WA_PHONE, waLink } from "../data/translations.js";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ar");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const toggle = () => setLang((l) => (l === "ar" ? "en" : "ar"));
  const t = STR[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t, waLink, WA_PHONE }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}