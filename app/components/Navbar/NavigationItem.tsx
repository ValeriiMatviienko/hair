import { NavigationItemType, TranslationFunction } from "@/app/types/types";

export const getNavigationItems = (
  t: TranslationFunction
): NavigationItemType[] => [
  { name: t("nav_about"), href: "#home-section" },
  { name: t("nav_service"), href: "#service-section" },
  { name: t("nav_benefit"), href: "#benefits-section" },
  { name: t("nav_galery"), href: "#gallery-section" },
  { name: t("nav_price"), href: "#price-section" },
  { name: t("nav_faq"), href: "#faq-section" },
];
