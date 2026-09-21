"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

const HeroSection = () => {
  const t = useTranslations("Index");

  return (
    <section
      className="px-4 py-12 mx-auto md:py-18 lg:px-8 max-w-7xl"
      id="home-section"
    >
      <div className="grid grid-cols-1 space-x-0 sm:space-x-1 lg:grid-cols-12">
        <div className="flex flex-col justify-center col-span-12 pb-8 sm:pb-0 lg:col-span-6">
          <h1 className="mb-4 text-4xl font-semibold tracking-tighter text-center md:leading-[1.2] text-black md:text-5xl sm:mb-5 lg:text-7xl lg:text-start">
            {t("hero_title")}
          </h1>
          <p className="mb-6 text-lg text-center text-black whitespace-pre-line sm:text-xl sm:mb-10 lg:text-start">
            {t("hero_description")}
          </p>
        </div>

        <div className="flex justify-center col-span-12 lg:col-span-6">
          <div className="relative w-full max-w-xl overflow-hidden rounded-lg shadow-lg aspect-square">
            <Image
              src="/images/profilePicture.webp"
              alt={t("profile_image_alt")}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
