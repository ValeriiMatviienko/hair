"use client";

import { FC } from "react";
import { Fade } from "react-awesome-reveal";
import { useTranslations } from "next-intl";
import { getServiceData } from "./ServiceData";

import { PackageCheck, Layers, Crown } from "lucide-react";

const icons = [PackageCheck, Layers, Crown]; // Starter / All-Inclusive / Full Complete

const ServiceSection: FC = () => {
  const t = useTranslations("Index");
  const serviceData = getServiceData(t);

  return (
    <section
      className="px-4 py-12 mx-auto md:py-18 lg:px-8 max-w-7xl"
      id="service-section"
    >
      {/* Titles */}
      <div className="mb-10 text-center sm:mb-14">
        <Fade direction="up" delay={40} cascade damping={0.1} triggerOnce>
          <h1 className="mb-3 text-2xl text-black uppercase ls-51">
            {t("service_section_title")}
          </h1>
        </Fade>

        <Fade direction="up" delay={40} cascade damping={0.1} triggerOnce>
          <p className="text-3xl font-semibold text-black lg:text-5xl">
            {t("service_section_subtitle")}
          </p>
        </Fade>
      </div>

      {/* Cards */}
      <Fade direction="up" delay={40} cascade damping={0.1} triggerOnce>
        <div className="mt-4 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {serviceData.map((item, index) => {
            const Icon = icons[index] ?? PackageCheck;

            return (
              <div
                key={item.serviceTitle}
                className="flex flex-col border rounded-xl py-6 px-5 bg-background"
              >
                <div className="mb-4 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                  <Icon className="size-5" />
                </div>

                <span className="text-lg font-semibold text-black">
                  {item.serviceTitle}
                </span>

                <p className="mt-1 text-[15px] text-foreground/80 whitespace-pre-line">
                  {item.serviceDescription}
                </p>
              </div>
            );
          })}
        </div>
      </Fade>

      {/* Conclusion */}
      <Fade direction="up" delay={40} damping={0.1} triggerOnce>
        <p className="mt-16 text-lg text-center text-black sm:text-xl">
          {t("benefits_conclusion")}
        </p>
      </Fade>
    </section>
  );
};

export default ServiceSection;
