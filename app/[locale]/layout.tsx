import "./globals.css";
import { notFound } from "next/navigation";
import { GenerateMetadataParams, RootLayoutProps } from "../types/types";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: GenerateMetadataParams) {
  const t = await getTranslations({ locale, namespace: "Index" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(","),
  };
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
        <body>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
