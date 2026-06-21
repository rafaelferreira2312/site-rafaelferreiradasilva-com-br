"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  translations,
  rtlLocales,
  type Locale,
  type Translation,
} from "@/data/i18n";

interface LanguageContextValue {
  locale: Locale;
  t: Translation;
  setLocale: (locale: Locale) => void;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-locale";

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "pt";
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored && translations[stored]) return stored;
  const browserLang = navigator.language.slice(0, 2) as Locale;
  if (translations[browserLang]) return browserLang;
  return "pt";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(getInitialLocale());
    setMounted(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale === "he" ? "he" : locale;
    document.documentElement.dir = rtlLocales.includes(locale) ? "rtl" : "ltr";
  }, [locale, mounted]);

  const value = useMemo(
    () => ({
      locale,
      t: translations[locale],
      setLocale,
      isRtl: rtlLocales.includes(locale),
    }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
