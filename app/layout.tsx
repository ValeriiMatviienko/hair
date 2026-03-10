import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { NavigationProvider } from "./context/NavigationContext";
import ToastProvider from "./context/ToastProvider";
import { montserrat } from "./helpers/FontSetup";
import { LocaleProvider } from "./context/localesProvider";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Index");
  const baseUrl = process.env.BASE_URL || "http://localhost:3000";
  const profileImage = `${baseUrl}/images/profilePicture.webp`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t("title"),
      template: `%s | Hair by Hanna`,
    },
    description: t("description"),
    keywords: t("keywords").split(","),
    applicationName: "Hair by Hanna",
    appleWebApp: {
      capable: true,
      title: "Hair by Hanna",
      statusBarStyle: "default",
    },
    alternates: {
      canonical: baseUrl,
      languages: {
        "pl-PL": `${baseUrl}/pl-PL`,
        "uk-UA": `${baseUrl}/uk-UA`,
        "en-US": `${baseUrl}/en-US`,
      },
    },
    creator: "Valerii Matviienko",
    authors: [
      {
        name: "Hanna Matviienko",
        url: "https://www.instagram.com/hair.by.hanna.warszawa/",
      },
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    referrer: "origin",
    category: "Beauty",
    twitter: {
      card: "summary_large_image",
      title: "Trycholog Warszawa",
      description: t("description"),
      images: [
        {
          url: profileImage,
          alt: "Profile Picture",
        },
      ],
    },
    openGraph: {
      type: "website",
      url: baseUrl,
      title: "Trycholog Warszawa",
      description: t("description"),
      images: [
        {
          url: profileImage,
          width: 1200,
          height: 630,
          alt: "Profile Picture",
        },
      ],
    },
    other: {
      copyright: "Hair by Hanna",
    },
  };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning className={montserrat.className}>
      <body suppressHydrationWarning>
        <GoogleAnalytics />
        <NavigationProvider>
          <LocaleProvider>
            <ToastProvider>{children}</ToastProvider>
          </LocaleProvider>
        </NavigationProvider>
      </body>
    </html>
  );
}
