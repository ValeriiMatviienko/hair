"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
  const t = useTranslations("Index");
  return (
    <div id="home-section">
      <div className="px-4 pt-10 mx-auto sm:px-6 sm:pt-20 max-w-7xl sm:pb-24">
        <div className="grid grid-cols-1 space-x-0 sm:space-x-1 lg:grid-cols-12">
          <div className="flex flex-col justify-center col-span-12 pb-8 sm:pb-0 lg:col-span-6">
            <Fade
              direction={"up"}
              delay={100}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h1 className="mb-4 text-4xl font-semibold text-center text-black md:text-5xl sm:mb-5 lg:text-7xl lg:text-start">
                {t("hero_title")}
              </h1>
            </Fade>
            <Fade
              direction={"up"}
              delay={100}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="mb-6 text-center text-black whitespace-pre-line sm:text-xl sm:mb-10 lg:text-start">
                {t("hero_description")}
              </p>
            </Fade>
          </div>

          <div className="flex justify-center col-span-12 lg:col-span-6">
            <div className="flex items-center gap-5 bottom-10 left-10 rounded-xl"></div>
            <Image
              src="/images/profilePicture.jpg"
              alt="Profile picture"
              width={1000}
              height={805}
              className="object-cover w-full h-auto rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
