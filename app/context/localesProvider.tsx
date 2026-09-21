"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { NextIntlClientProvider } from "next-intl";
import { useLocale } from "../hooks/useLocale";
import type { Locale } from "@/i18n/config";
import { siteConfig } from "@/lib/site-config";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

type LocaleProviderProps = PropsWithChildren<{
  initialLocale: Locale;
  initialMessages: Record<string, unknown>;
}>;

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  children,
  initialLocale,
  initialMessages,
}: LocaleProviderProps) {
  const [locale, setLocale] = useLocale(initialLocale);
  const [loadedMessages, setLoadedMessages] = useState<{
    locale: Locale;
    messages: Record<string, unknown>;
  } | null>(null);
  const messages =
    locale === initialLocale
      ? initialMessages
      : loadedMessages?.locale === locale
        ? loadedMessages.messages
        : initialMessages;

  useEffect(() => {
    if (locale === initialLocale) return;

    let isMounted = true;

    import(`@/messages/${locale}.json`)
      .then(({ default: messages }) => {
        if (isMounted) setLoadedMessages({ locale, messages });
      })
      .catch((error) => {
        console.error(`Error loading messages for "${locale}":`, error);
        if (isMounted) setLoadedMessages({ locale, messages: {} });
      });

    return () => {
      isMounted = false;
    };
  }, [initialLocale, initialMessages, locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider
        locale={locale}
        messages={messages}
        timeZone={siteConfig.timeZone}
      >
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
