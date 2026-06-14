"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language } from "./translations";

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({
  children,
  initialLang = "en",
}: {
  children: React.ReactNode;
  initialLang?: Language;
}) {
  // The URL (/ vs /es) is the source of truth so each language is its own
  // indexable page. setLang is kept for any in-page needs but switching
  // languages is done by navigating between routes (see Navbar).
  const [lang, setLang] = useState<Language>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
