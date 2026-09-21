import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { cookies } from "next/headers";
import { getTranslations } from "next-intl/server";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { NavigationProvider } from "./context/NavigationContext";
import { LocaleProvider } from "./context/localesProvider";
import { localeLanguageTags } from "@/i18n/config";
import { getMessages, getRequestLocale } from "@/i18n/server";
import { siteConfig } from "@/lib/site-config";
import { getSiteUrl } from "@/lib/site-url";
import { AnalyticsConsentProvider } from "./context/AnalyticsConsentContext";
import {
  analyticsConsentCookie,
  normalizeAnalyticsConsent,
} from "@/lib/analytics-consent";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Index");
  const baseUrl = getSiteUrl();
  const profileImage = `${baseUrl}${siteConfig.profileImagePath}`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: `${t("title")} – ${t("seoTitleSuffix")}`,
      template: `%s | ${t("title")}`,
    },
    description: t("description"),
    keywords: t("keywords").split(","),
    applicationName: siteConfig.name,
    appleWebApp: {
      capable: true,
      title: siteConfig.name,
      statusBarStyle: "default",
    },
    alternates: {
      canonical: "/",
    },
    creator: "Valerii Matviienko",
    authors: [
      {
        name: siteConfig.author.name,
        url: siteConfig.author.instagramUrl,
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
      title: `${t("title")} – ${t("seoTitleSuffix")}`,
      description: t("description"),
      images: [
        {
          url: profileImage,
          alt: t("profile_image_alt"),
        },
      ],
    },
    openGraph: {
      type: "website",
      url: baseUrl,
      siteName: siteConfig.name,
      title: `${t("title")} – ${t("seoTitleSuffix")}`,
      description: t("description"),
      images: [
        {
          url: profileImage,
          width: 1200,
          height: 630,
          alt: t("profile_image_alt"),
        },
      ],
    },
    other: {
      copyright: siteConfig.name,
    },
  };
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getRequestLocale();
  const messages = await getMessages(locale);
  const cookieStore = await cookies();
  const analyticsConsent = normalizeAnalyticsConsent(
    cookieStore.get(analyticsConsentCookie)?.value,
  );

  return (
    <html lang={localeLanguageTags[locale]} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NavigationProvider>
          <LocaleProvider initialLocale={locale} initialMessages={messages}>
            <AnalyticsConsentProvider initialConsent={analyticsConsent}>
              <GoogleAnalytics />
              {children}
            </AnalyticsConsentProvider>
          </LocaleProvider>
        </NavigationProvider>
      </body>
    </html>
  );
}
