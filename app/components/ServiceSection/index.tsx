"use client";
import { Fade } from "react-awesome-reveal";
import { getServiceData } from "./ServiceData";
import { useTranslations } from "next-intl";
import { FC } from "react";

const ServiceSection: FC = () => {
  const t = useTranslations("Index");
  const serviceData = getServiceData(t);

  return (
    <section
      className="px-4 py-12 mx-auto md:py-18 lg:px-8 max-w-7xl"
      id="service-section"
    >
      <div className="mb-10 text-center sm:mb-14">
        <Fade
          direction={"up"}
          delay={40}
          cascade
          damping={0.1}
          triggerOnce={true}
        >
          <h1 className="mb-3 text-2xl text-black uppercase title-line ls-51">
            {t("service_section_title")}
          </h1>
        </Fade>
        <Fade
          direction={"up"}
          delay={40}
          cascade
          damping={0.1}
          triggerOnce={true}
        >
          <p className="text-3xl font-semibold text-black lg:text-5xl">
            {/* {t("service_section_subtitle")} */}
          </p>
        </Fade>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-20 gap-x-3 sm:gap-x-5">
        <Fade
          direction={"up"}
          delay={40}
          cascade
          damping={0.1}
          triggerOnce={true}
        >
          {serviceData.map((items, i) => (
            <div className="p-3" key={i}>
              <h2 className="text-2xl font-semibold text-center text-black lg:text-start">
                {items.serviceTitle}
              </h2>
              <p className="mt-2 text-lg text-center text-black whitespace-pre-line md:text-start md:text-xl text-opacity-80">
                {items.serviceDescription}
              </p>
            </div>
          ))}
        </Fade>
      </div>
      <Fade direction="up" delay={40} damping={0.1} triggerOnce={true}>
        <p className="mt-20 text-lg text-center text-black sm:text-xl">
          {t("benefits_conclusion")}
        </p>
      </Fade>
    </section>
  );
};

export default ServiceSection;
