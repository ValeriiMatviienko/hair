"use client";

import { FC } from "react";
import { Fade } from "react-awesome-reveal";
import { useTranslations } from "next-intl";
import { getServiceData } from "./ServiceData";
import { PackageCheck, Layers, Crown, CircleCheck } from "lucide-react";

const icons = [PackageCheck, Layers, Crown];

const ServiceSection: FC = () => {
  const t = useTranslations("Index");
  const serviceData = getServiceData(t);

  const isPlus = (s: string) => s.trim().startsWith("➕");
  const isTime = (s: string) =>
    /^((Duration|Czas trwania|Тривалість)\s*:)/i.test(s.trim());

  return (
    <section
      className="px-4 py-12 mx-auto md:py-18 lg:px-8 max-w-7xl"
      id="service-section"
    >
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

      <Fade direction="up" delay={40} cascade damping={0.1} triggerOnce>
        <div className="mt-4 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {serviceData.map((item, index) => {
            const Icon = icons[index] ?? PackageCheck;

            return (
              <div
                key={item.serviceTitle}
                className="flex flex-col items-start border rounded-xl py-6 px-5 bg-background"
              >
                <div className="mb-4 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                  <Icon className="size-5" />
                </div>

                <span className="text-lg font-semibold text-black">
                  {item.serviceTitle}
                </span>

                <ul className="mt-3 space-y-2 w-full">
                  {item.serviceFeatures.map((feature) => {
                    const noCheck = isPlus(feature) || isTime(feature);

                    return (
                      <li
                        key={feature}
                        className={[
                          "text-md items-center text-foreground/80",
                          noCheck ? "pl-0" : "grid grid-cols-[16px_1fr] gap-2",
                        ].join(" ")}
                      >
                        {noCheck ? (
                          <span className="leading-6">{feature}</span>
                        ) : (
                          <>
                            <div className="h-4 w-4 flex items-center justify-center">
                              <CircleCheck className="h-4 w-4 text-darkgreen" />
                            </div>
                            <span className="leading-6">{feature}</span>
                          </>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </Fade>

      <Fade direction="up" delay={40} damping={0.1} triggerOnce>
        <p className="mt-16 text-lg text-center text-black sm:text-xl">
          {t("benefits_conclusion")}
        </p>
      </Fade>
    </section>
  );
};

export default ServiceSection;
