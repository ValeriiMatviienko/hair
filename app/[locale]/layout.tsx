import "./globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RootLayoutProps } from "../types/types";
import { NextIntlClientProvider } from "next-intl";
import LanguageSelector from "../components/LanguageSelector";

export const metadata: Metadata = {
  title: "Hair by Hanna",
  description: "Professional trichologist and hair treatments.",
  keywords: ["hair", "keratin", "botox", "professional", "nanoplastia"],
};

const locales = ["en", "pl", "ua"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body>
          <header>
            <LanguageSelector />
          </header>
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
