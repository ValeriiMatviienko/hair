"use client";

import { FC } from "react";
import { Fade } from "react-awesome-reveal";
import { useTranslations } from "next-intl";
import { getServiceData } from "./ServiceData";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PackageCheck, Layers, Crown, CircleCheck } from "lucide-react";
import { getAdditionalServices } from "../PriceSection/ProductPriceItems";

const icons = [PackageCheck, Layers, Crown];

const ServiceSection: FC = () => {
  const t = useTranslations("Index");
  const serviceData = getServiceData(t);
  const additionalServices = getAdditionalServices(t);

  const isPlus = (s: string) => s.trim().startsWith("➕");
  const isTime = (s: string) =>
    /^((Duration|Czas trwania|Тривалість)\s*:)/i.test(s.trim());
  const isTrichoscopy = (s: string) =>
    /^(Trichoscopy diagnostics|Diagnostyka trychoskopem|Діагностика трихоскопом)$/i.test(
      s.trim()
    );
  const prices = [150, 290, 390];
  const popularIndex = 1;
  return (
    <section
      className="px-4 py-12 mx-auto md:py-18 lg:px-8 max-w-7xl"
      id="service-section"
    >
      <div className="mb-10 text-center sm:mb-14">
        <Fade direction="up" delay={40} cascade damping={0.1} triggerOnce>
          <h1 className="mb-3 text-2xl text-black uppercase ls-51">
            {t("price_section_title")}
          </h1>
        </Fade>

        {/* <Fade direction="up" delay={40} cascade damping={0.1} triggerOnce>
          <p className="text-3xl font-semibold text-black lg:text-5xl">
            {t("service_section_subtitle")}
          </p>
        </Fade> */}
      </div>

      <Fade direction="up" delay={40} cascade damping={0.1} triggerOnce>
        <div className="mt-4 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {serviceData.map((item, index) => {
            const Icon = icons[index] ?? PackageCheck;

            return (
              <div
                key={item.serviceTitle}
                className={[
                  "relative flex flex-col items-start border rounded-xl py-6 px-5 bg-background",
                  index === popularIndex ? "border-2 border-primary" : "",
                ].join(" ")}
              >
                {index === popularIndex && (
                  <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                    Most popular
                  </Badge>
                )}

                <div className="mb-4 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                  <Icon className="size-5" />
                </div>

                <span className="text-lg font-semibold text-black">
                  {item.serviceTitle}
                </span>

                <p className="mt-1 text-3xl font-semibold text-black">
                  {prices[index]} zł
                </p>

                <Separator className="my-4" />

                <ul className="space-y-2 w-full">
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
                          <span
                            className={[
                              "leading-6",
                              isTrichoscopy(feature)
                                ? "font-semibold text-black"
                                : "",
                            ].join(" ")}
                          >
                            {feature}
                          </span>
                        ) : (
                          <>
                            <div className="h-4 w-4 flex items-center justify-center">
                              <CircleCheck className="h-4 w-4 text-green-600" />
                            </div>
                            <span
                              className={[
                                "leading-6",
                                isTrichoscopy(feature)
                                  ? "font-semibold text-black"
                                  : "",
                              ].join(" ")}
                            >
                              {feature}
                            </span>
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
      <div className="mt-12 sm:mt-16 max-w-(--breakpoint-lg) mx-auto">
        <div className="relative p-6 bg-background border px-8 rounded-lg shadow-[0px_2px_12px_0px_rgba(0,0,0,0.07)]">
          <h3 className="text-lg font-medium uppercase text-black">
            {t("dodatki_title")}
          </h3>

          <Separator className="my-8" />

          <ul className="space-y-3">
            {additionalServices.map((service) => (
              <li
                key={service.name}
                className="flex items-start justify-between gap-3 border-b last:border-b-0 pb-3 last:pb-0"
              >
                <div className="flex items-start gap-1.5">
                  <span className="text-black uppercase">{service.name}</span>
                </div>

                <span className="text-lg md:text-2xl text-black tabular-nums">
                  {service.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Fade direction="up" delay={40} damping={0.1} triggerOnce>
        <p className="mt-16 text-lg text-center text-black sm:text-xl">
          {t("benefits_conclusion")}
        </p>
      </Fade>
    </section>
  );
};

export default ServiceSection;
