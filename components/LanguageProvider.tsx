"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_LANGUAGE,
  getDictionary,
  isLanguage,
  type Dictionary,
  type Language,
} from "@/lib/i18n";

const STORAGE_KEY = "acs-language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  /* Restore a previously chosen language. German stays the default otherwise:
     the browser locale is not a reliable signal for a German company site.
     Runs after hydration so server and client markup agree. */
  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      /* Storage can be unavailable (private mode, blocked cookies). */
    }

    if (isLanguage(stored)) {
      setLanguageState(stored);
    }
  }, []);

  /* Keep the document language in sync for screen readers and search engines. */
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* Persisting is a convenience, never a requirement. */
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === "de" ? "en" : "de"),
      t: getDictionary(language),
    }),
    [language, setLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside a LanguageProvider");
  }
  return ctx;
}

/** Shorthand for components that only need the copy. */
export function useT(): Dictionary {
  return useLanguage().t;
}
