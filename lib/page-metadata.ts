import type { Metadata } from "next";
import {
  localeOpenGraphTags,
  locales,
  type Locale,
} from "@/i18n/config";
import { siteConfig } from "@/lib/site-config";
import { getSiteUrl } from "@/lib/site-url";

export const ogImageSize = {
  width: 1600,
  height: 2400,
} as const;

function getAlternateLocales(locale: Locale) {
  return locales
    .filter((item) => item !== locale)
    .map((item) => localeOpenGraphTags[item]);
}

export function getPageTitle(pageTitle: string, siteName: string) {
  return `${pageTitle} | ${siteName}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  locale,
  imageAlt,
  useTitleTemplate = false,
}: {
  title: string;
  description: string;
  path: "/" | "/certificates";
  locale: Locale;
  imageAlt: string;
  useTitleTemplate?: boolean;
}): Metadata {
  const baseUrl = getSiteUrl();
  const canonical = path === "/" ? "/" : path;
  const url = path === "/" ? `${baseUrl}/` : `${baseUrl}${path}`;
  const image = {
    url: `${baseUrl}${siteConfig.profileImagePath}`,
    width: ogImageSize.width,
    height: ogImageSize.height,
    alt: imageAlt,
  };

  return {
    title: useTitleTemplate ? title : { absolute: title },
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      locale: localeOpenGraphTags[locale],
      alternateLocale: getAlternateLocales(locale),
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: image.url,
          alt: imageAlt,
        },
      ],
    },
  };
}
