import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { NavigationProvider } from "./context/NavigationContext";
import ToastProvider from "./context/ToastProvider";
import { montserrat } from "./helpers/FontSetup";
import { LocaleProvider } from "./context/localesProvider";

export async function generateMetadata() {
  const t = await getTranslations("Index");
  const baseUrl = process.env.BASE_URL || "http://localhost:3000";

  return {
    metadataBase: new URL(baseUrl),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${baseUrl}`,
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
    referrer: "origin",
    category: "Beauty",
    openGraph: {
      type: "website",
      url: `${baseUrl}`,
      title: "Keratyna Wrocław",
      description: t("description"),
    },
  };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning className={montserrat.className}>
      <GoogleAnalytics />
      <body suppressHydrationWarning>
        <NavigationProvider>
          <LocaleProvider>
            <ToastProvider>{children}</ToastProvider>
          </LocaleProvider>
        </NavigationProvider>
      </body>
    </html>
  );
}
