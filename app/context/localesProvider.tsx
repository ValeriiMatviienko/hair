"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { NextIntlClientProvider } from "next-intl";
import { Locale, useLocale } from "../hooks/useLocale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  ready: boolean;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: PropsWithChildren) {
  const [locale, setLocale, ready] = useLocale();
  const [messages, setMessages] = useState<Record<string, unknown>>();

  useEffect(() => {
    let isMounted = true;

    import(`@/messages/${locale}.json`)
      .then(({ default: messages }) => {
        if (isMounted) setMessages(messages);
      })
      .catch((error) => {
        console.error(`Error loading messages for "${locale}":`, error);
        if (isMounted) setMessages({});
      });

    return () => {
      isMounted = false;
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
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocaleContext must be used within a LocaleProvider");
  }

  return context;
}
