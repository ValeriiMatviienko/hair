import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { cookies } from "next/headers";
import { Cormorant_Garamond } from "next/font/google";
import { getTranslations } from "next-intl/server";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { NavigationProvider } from "./context/NavigationContext";
import { LocaleProvider } from "./context/localesProvider";
import { localeLanguageTags, localeOpenGraphTags, locales } from "@/i18n/config";
import { getMessages, getRequestLocale } from "@/i18n/server";
import { siteConfig } from "@/lib/site-config";
import { getSiteUrl } from "@/lib/site-url";
import { ogImageSize } from "@/lib/page-metadata";
import { AnalyticsConsentProvider } from "./context/AnalyticsConsentContext";
import {
  analyticsConsentCookie,
  normalizeAnalyticsConsent,
} from "@/lib/analytics-consent";

const displaySerif = Cormorant_Garamond({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-cormorant",
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Index");
  const locale = await getRequestLocale();
  const baseUrl = getSiteUrl();
  const defaultTitle = `${t("title")} - ${t("seoTitleSuffix")}`;
  const profileImage = {
    url: `${baseUrl}${siteConfig.profileImagePath}`,
    width: ogImageSize.width,
    height: ogImageSize.height,
    alt: t("profile_image_alt"),
  };

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: defaultTitle,
      template: `%s | ${t("title")}`,
    },
    description: t("description"),
    applicationName: siteConfig.name,
    appleWebApp: {
      capable: true,
      title: siteConfig.name,
      statusBarStyle: "default",
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
    referrer: "strict-origin-when-cross-origin",
    category: "Beauty",
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: t("description"),
      images: [
        {
          url: profileImage.url,
          alt: profileImage.alt,
        },
      ],
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: localeOpenGraphTags[locale],
      alternateLocale: locales
        .filter((item) => item !== locale)
        .map((item) => localeOpenGraphTags[item]),
      title: defaultTitle,
      description: t("description"),
      images: [profileImage],
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
    <html
      lang={localeLanguageTags[locale]}
      className={displaySerif.variable}
      suppressHydrationWarning
    >
      <body className="bg-paper text-ink" suppressHydrationWarning>
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
