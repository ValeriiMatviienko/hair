import "./globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RootLayoutProps } from "../types/types";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "Hair by Hanna",
  description: "Professional trichologist and hair treatments.",
  keywords: [
    "hair",
    "keratin",
    "botox",
    "professional",
    "nanoplastia",
    "волосся",
    "кератин",
    "ботокс",
    "професійний",
    "нанопластика",
    "włosy",
    "keratyna",
    "botoks",
    "profesjonalny",
    "nanoplastia",
  ],
};

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
        <body>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
