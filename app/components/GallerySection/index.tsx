"use client";
import Slider from "./Slider";
import { useTranslations } from "next-intl";

const GallerySection = () => {
  const t = useTranslations("Index");

  return (
    <section className="section-shell" id="gallery-section">
      <div className="mb-10 max-w-xl">
        <p className="section-label">{t("section_gallery")}</p>
        <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
          {t("gallery_title")}
        </h2>
        <p className="mt-3 text-base text-ink/65 sm:text-lg">
          {t("gallery_subtitle")}
        </p>
      </div>
      <Slider />
    </section>
  );
};

export default GallerySection;
