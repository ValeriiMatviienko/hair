import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

import Gallery from "@/components/shadcn-studio/blocks/gallery-component-01/gallery-component-01";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getCertificateSections } from "@/lib/certificates";
import { getBreadcrumbJsonLd } from "@/lib/json-ld";
import { buildPageMetadata, getPageTitle } from "@/lib/page-metadata";
import { getRequestLocale } from "@/i18n/server";
import DrawerContainer from "../components/DrawerComponent";
import FooterSection from "../components/FooterSection";
import JsonLd from "../components/JsonLd";
import Navbar from "../components/Navbar";
import ScrollToTopButton from "../components/ScrollToTopButton";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Index");
  const locale = await getRequestLocale();
  const title = getPageTitle(t("certificates_seo_title"), t("title"));

  return buildPageMetadata({
    title,
    description: t("certificates_seo_description"),
    path: "/certificates",
    locale,
    imageAlt: t("profile_image_alt"),
  });
}

export default async function CertificatesPage() {
  const t = await getTranslations("Index");
  const sections = getCertificateSections(t);

  return (
    <main>
      <JsonLd
        data={getBreadcrumbJsonLd(
          t("breadcrumb_home"),
          t("nav_certificates"),
          "/certificates",
        )}
      />
      <Navbar />
      <DrawerContainer />
      <div className="section-shell pb-0">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="text-ink/60 hover:text-darkgreen">
                  {t("breadcrumb_home")}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-ink">
                {t("nav_certificates")}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Gallery
        title={t("certificates_title")}
        description={t("certificates_subtitle")}
        sections={sections}
      />
      <FooterSection />
      <ScrollToTopButton />
    </main>
  );
}
