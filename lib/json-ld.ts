import type { FAQItem } from "@/app/types/types";
import { siteConfig } from "@/lib/site-config";
import { getSiteUrl } from "@/lib/site-url";

export function getProfileImageUrl() {
  return `${getSiteUrl()}${siteConfig.profileImagePath}`;
}

export function getLocalBusinessJsonLd(description: string) {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: siteConfig.name,
    url,
    image: getProfileImageUrl(),
    description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Świętokrzyska 37",
      addressLocality: "Wrocław",
      addressCountry: "PL",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
    ],
    founder: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.author.instagramUrl,
    },
  };
}

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    url: getSiteUrl(),
    image: getProfileImageUrl(),
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    sameAs: [siteConfig.author.instagramUrl],
  };
}

export function getFaqJsonLd(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbJsonLd(
  homeName: string,
  currentName: string,
  currentPath: string,
) {
  const origin = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: homeName,
        item: `${origin}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: currentName,
        item: `${origin}${currentPath}`,
      },
    ],
  };
}
