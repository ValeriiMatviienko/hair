"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";
import { Fade } from "react-awesome-reveal";

const HeroSection: FC = () => {
  const t = useTranslations("Index");

  return (
    <section
      className="px-4 py-12 mx-auto md:py-18 lg:px-8 max-w-7xl"
      id="home-section"
    >
      <div className="grid grid-cols-1 space-x-0 sm:space-x-1 lg:grid-cols-12">
        <div className="flex flex-col justify-center col-span-12 pb-8 sm:pb-0 lg:col-span-6">
          <Fade
            direction={"up"}
            delay={40}
            cascade
            damping={0.1}
            triggerOnce={true}
          >
            <h1 className="mb-4 text-4xl font-semibold tracking-tighter text-center md:leading-[1.2] text-black md:text-5xl sm:mb-5 lg:text-7xl lg:text-start">
              {t("hero_title")}
            </h1>
          </Fade>
          <Fade
            direction={"up"}
            delay={40}
            cascade
            damping={0.1}
            triggerOnce={true}
          >
            <p className="mb-6 text-lg text-center text-black whitespace-pre-line sm:text-xl sm:mb-10 lg:text-start">
              {t("hero_description")}
            </p>
          </Fade>
        </div>

        <div className="flex justify-center col-span-12 lg:col-span-6">
          <Image
            src="/images/profilePicture.webp"
            alt="Profile picture"
            width={1000}
            height={805}
            className="object-cover w-full h-auto rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
