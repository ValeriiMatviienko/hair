"use client";
import { Fade } from "react-awesome-reveal";
import { getServiceData } from "./ServiceData";
import { useTranslations } from "next-intl";

const ServiceSection = () => {
  const t = useTranslations("Index");
  const serviceData = getServiceData(t);

  return (
    <div>
      <div
        className="px-4 py-20 mx-auto sm:px-6 sm:py-40 max-w-7xl"
        id="service-section"
      >
        <div className="mb-10 text-center sm:mb-14">
          <Fade
            direction={"up"}
            delay={100}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h1 className="mb-3 text-2xl text-black uppercase ls-51">
              {t("service_section_title")}
            </h1>
          </Fade>
          <Fade
            direction={"up"}
            delay={100}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <p className="text-3xl font-semibold text-black lg:text-5xl">
              {t("service_section_subtitle")}
            </p>
          </Fade>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-20 gap-x-3 sm:gap-x-5">
          <Fade
            direction={"up"}
            delay={100}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            {serviceData.map((items, i) => (
              <div className="p-5" key={i}>
                <h2 className="text-2xl font-semibold text-center text-black">
                  {items.serviceTitle}
                </h2>
                <p className="mt-2 text-lg text-center text-black md:text-xl text-opacity-80">
                  {items.serviceDescription}
                </p>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
