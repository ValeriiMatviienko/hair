import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import DrawerContainer from "./components/DrawerComponent";
import EditorialMark from "./components/EditorialMark";
import { getFAQs } from "./components/FAQSection/FAQItem";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import { InstagramSection } from "./components/InstagramSection";
import JsonLd from "./components/JsonLd";
import Navbar from "./components/Navbar";
import PriceSection from "./components/PriceSection";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { getRequestLocale } from "@/i18n/server";
import {
  getFaqJsonLd,
  getLocalBusinessJsonLd,
  getPersonJsonLd,
} from "@/lib/json-ld";
import { buildPageMetadata } from "@/lib/page-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Index");
  const locale = await getRequestLocale();

  return buildPageMetadata({
    title: `${t("title")} - ${t("seoTitleSuffix")}`,
    description: t("description"),
    path: "/",
    locale,
    imageAlt: t("profile_image_alt"),
  });
}

export default async function Home() {
  const t = await getTranslations("Index");
  const faqs = getFAQs(t);

  return (
    <main>
      <JsonLd data={getLocalBusinessJsonLd(t("description"))} />
      <JsonLd data={getPersonJsonLd()} />
      <JsonLd data={getFaqJsonLd(faqs)} />
      <Navbar />
      <DrawerContainer />
      <HeroSection />
      <EditorialMark />
      <PriceSection />
      <GallerySection />
      <FAQSection />
      <InstagramSection />
      <FooterSection />
      <ScrollToTopButton />
    </main>
  );
}
