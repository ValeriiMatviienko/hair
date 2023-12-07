/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { notFound } from "next/navigation";
import { GenerateMetadataParams, RootLayoutProps } from "../types/types";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: GenerateMetadataParams) {
  const t = await getTranslations({ locale, namespace: "Index" });

  return {
    metadataBase: new URL("https://hairbyhanna.pl"),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/",
      languages: {
        "pl-PL": "/pl-PL",
        "uk-UA": "/uk-UA",
        "en-US": "/en-US",
      },
    },
    keywords: t("keywords").split(","),
    author: "Valerii Matviienko",
    copyright: "Hair by Hanna",
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
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
