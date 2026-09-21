"use client";

import { useCallback, useEffect, useState } from "react";
import {
  localeCookieName,
  localeLanguageTags,
  normalizeLocale,
  type Locale,
} from "@/i18n/config";

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

function persistLocale(locale: Locale) {
  window.localStorage.setItem(localeCookieName, locale);
  document.cookie = `${localeCookieName}=${locale}; path=/; max-age=${ONE_YEAR_IN_SECONDS}; samesite=lax`;
  document.documentElement.lang = localeLanguageTags[locale];
}

export function useLocale(
  initialLocale: Locale,
): [Locale, (locale: Locale) => void] {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    persistLocale(nextLocale);
  }, []);

  useEffect(() => {
    const hasLocaleCookie = document.cookie
      .split("; ")
      .some((entry) => entry.startsWith(`${localeCookieName}=`));
    const storedLocale = normalizeLocale(
      window.localStorage.getItem(localeCookieName),
    );

    if (!hasLocaleCookie && storedLocale && storedLocale !== initialLocale) {
      queueMicrotask(() => setLocale(storedLocale));
      return;
    }

    persistLocale(initialLocale);
  }, [initialLocale, setLocale]);

  return [locale, setLocale] as const;
}
