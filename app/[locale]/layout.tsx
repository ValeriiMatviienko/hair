import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { notFound } from "next/navigation";
import { GenerateMetadataParams, RootLayoutProps } from "../types/types";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { NavigationProvider } from "../context/NavigationContext";
import ToastProvider from "../context/ToastProvider";
import { montserrat } from "../helpers/FontSetup";
import GoogleAnalytics from "../components/GoogleAnalytics";

export async function generateMetadata({
  params: { locale },
}: GenerateMetadataParams) {
  const t = await getTranslations({ locale, namespace: "Index" });
  const baseUrl = process.env.BASE_URL || "http://localhost:3000";

  return {
    metadataBase: new URL(baseUrl),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        "pl-PL": `${baseUrl}/pl-PL`,
        "uk-UA": `${baseUrl}/uk-UA`,
        "en-US": `${baseUrl}/en-US`,
      },
    },
    keywords: t("keywords").split(","),
    creator: "Valerii Matviienko",
    authors: [
      {
        name: "Hanna Matviienko",
        url: "https://www.instagram.com/hair.by.hanna.wroclaw/",
      },
    ],
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
    viewport: "width=device-width, initial-scale=1",
    referrer: "origin",
    category: "Beauty",
    openGraph: {
      type: "website",
      url: `${baseUrl}/${locale}`,
      title: "Keratyna Wrocław",
      description: t("description"),
      locale: `${locale}`,
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
    <html lang={locale} className={montserrat.className}>
      <NavigationProvider>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <body>
            <GoogleAnalytics />
            <ToastProvider>{children}</ToastProvider>
          </body>
        </NextIntlClientProvider>
      </NavigationProvider>
    </html>
  );
}
