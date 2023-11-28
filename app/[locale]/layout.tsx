/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { notFound } from "next/navigation";
import { GenerateMetadataParams, RootLayoutProps } from "../types/types";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import Head from "next/head";

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
      <Head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
          as="style"
        />
      </Head>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
