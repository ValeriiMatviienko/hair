"use client";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import Image from "next/image";

const HeroAtmosphere = dynamic(() => import("./HeroAtmosphere"), {
  ssr: false,
  loading: () => null,
});

const HeroSection = () => {
  const t = useTranslations("Index");

  return (
    <section className="relative isolate scroll-mt-[5.5rem]" id="home-section">
      <HeroAtmosphere />
      <div className="section-shell relative z-10 pt-10 md:pt-16">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-0">
          <div className="lg:col-span-5 lg:flex lg:min-h-full lg:flex-col lg:justify-center">
            <p className="section-label">{t("section_about")}</p>
            <h1 className="mt-5 max-w-[12ch] font-display text-[2.55rem] font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
              {t("hero_title")}
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/75 sm:text-lg">
              {t("hero_lead")}
            </p>
            <p className="mt-5 hidden max-w-md text-base leading-relaxed text-ink/70 whitespace-pre-line lg:block">
              {t("hero_description")}
            </p>
            <a href="#price-section" className="editorial-cta mt-8 self-start">
              {t("hero_cta")}
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[2/3] w-full overflow-hidden lg:aspect-[4/5]">
              <Image
                src="/images/profilePicture.webp"
                alt={t("profile_image_alt")}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="hero-photo object-cover object-top"
              />
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-2xl text-base leading-relaxed text-ink/70 whitespace-pre-line sm:text-lg lg:hidden">
          {t("hero_description")}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
