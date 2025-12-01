"use client";
import { Fade } from "react-awesome-reveal";
import { GalleryImage } from "./GalleryImage";
import Slider from "./Slider";
import { useTranslations } from "next-intl";
import { FC } from "react";

const GallerySection: FC = () => {
  const t = useTranslations("Index");

  return (
    <section
      className="px-4 py-12 mx-auto md:py-18 lg:px-8 max-w-7xl"
      id="gallery-section"
    >
      <div className="text-center">
        <Fade
          direction={"up"}
          delay={40}
          cascade
          damping={0.1}
          triggerOnce={true}
        >
          <h2 className="mb-3 text-2xl tracking-widest text-black uppercase  ls-51">
            {t("gallery_title")}
          </h2>
        </Fade>
        <Fade
          direction={"up"}
          delay={40}
          cascade
          damping={0.1}
          triggerOnce={true}
        >
          <h3 className="text-3xl font-semibold text-black lg:text-5xl">
            {t("gallery_subtitle")}
          </h3>
        </Fade>
      </div>
      <div className="my-16">
        <Slider />
      </div>
    </section>
  );
};

export default GallerySection;
