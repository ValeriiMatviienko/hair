"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import { useLocale, Locale } from "../hooks/useLocale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  ready: boolean;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale, ready] = useLocale();
  const [messages, setMessages] = useState<Record<string, unknown> | null>(
    null
  );

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        const mod = await import(`@/messages/${locale}.json`);
        if (alive) setMessages(mod.default);
      } catch (err) {
        console.error(`Error loading messages for "${locale}":`, err);
        if (alive) setMessages({});
      }
    })();

    return () => {
      alive = false;
    };
  }, [locale]);

  if (!ready || !messages) return null;

  return (
    <LocaleContext.Provider value={{ locale, setLocale, ready }}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}

export function useLocaleContext() {
  const ctx = useContext(LocaleContext);
  if (!ctx)
    throw new Error("useLocaleContext must be used within a LocaleProvider");
  return ctx;
}
