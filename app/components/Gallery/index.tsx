"use client";
import { Fade } from "react-awesome-reveal";
import { GalleryImage } from "./GalleryImage";
import Slider from "./Slider";
import { useTranslations } from "next-intl";

const Gallery: React.FC = () => {
  const t = useTranslations("Index");
  return (
    <div id="gallery-section">
      <div className="max-w-2xl mx-auto mt-20 lg:max-w-7xl sm:py-4 lg:px-8 md:pt-24">
        <div className="text-center">
          <Fade
            direction={"up"}
            delay={100}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h2 className="mb-3 text-2xl tracking-widest text-black uppercase ls-51">
              {t("gallery_title")}
            </h2>
          </Fade>
          <Fade
            direction={"up"}
            delay={100}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h3 className="text-3xl font-semibold text-black lg:text-5xl">
              {t("gallery_subtitle")}
            </h3>
          </Fade>
        </div>

        <div className="my-16">
          <Slider images={GalleryImage} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
