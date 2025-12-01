"use client";

import { useEffect, useState } from "react";

export type Locale = "en" | "pl" | "ua";
export const defaultLocale: Locale = "pl";

const allowedLocales: Locale[] = ["en", "pl", "ua"];

export function useLocale(): [Locale, (locale: Locale) => void, boolean] {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [ready, setReady] = useState(false);

  // Load locale AFTER mount
  useEffect(() => {
    const stored = window.localStorage.getItem("locale") as Locale | null;

    if (stored && allowedLocales.includes(stored)) {
      setLocale(stored);
    }

    setReady(true);
  }, []);

  // Persist + update <html lang>
  useEffect(() => {
    if (!ready) return;

    window.localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
  }, [locale, ready]);

  return [locale, setLocale, ready] as const;
}
