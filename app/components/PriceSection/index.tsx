"use client";

import { Fade } from "react-awesome-reveal";
import { getAdditionalServices, getProductPrices } from "./ProductPriceItems";
import { useTranslations } from "next-intl";
import { FC, useMemo } from "react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

const PriceSection: FC = () => {
  const t = useTranslations("Index");

  const productList = getProductPrices(t);
  const additionalServices = getAdditionalServices(t);

  const plans = useMemo(
    () => [
      {
        name: t("price_nanoplastia"),
        price: productList[0]?.shortHairPrice ?? 0,
        description: t("product_type"),
        features: [
          {
            title: `${t("short_hair")}: ${productList[0]?.shortHairPrice ?? 0}`,
          },
          { title: `${t("mid_hair")}: ${productList[0]?.midHairPrice ?? 0}` },
          { title: `${t("long_hair")}: ${productList[0]?.longHairPrice ?? 0}` },
        ],
      },
      {
        name: t("price_keratine"),
        price: productList[1]?.shortHairPrice ?? 0,
        description: t("product_type"),
        features: [
          {
            title: `${t("short_hair")}: ${productList[1]?.shortHairPrice ?? 0}`,
          },
          { title: `${t("mid_hair")}: ${productList[1]?.midHairPrice ?? 0}` },
          { title: `${t("long_hair")}: ${productList[1]?.longHairPrice ?? 0}` },
        ],
        isPopular: true,
      },
      {
        name: t("price_botox"),
        price: productList[2]?.shortHairPrice ?? 0,
        description: t("product_type"),
        features: [
          {
            title: `${t("short_hair")}: ${productList[2]?.shortHairPrice ?? 0}`,
          },
          { title: `${t("mid_hair")}: ${productList[2]?.midHairPrice ?? 0}` },
          { title: `${t("long_hair")}: ${productList[2]?.longHairPrice ?? 0}` },
        ],
      },
    ],
    [t, productList]
  );

  return (
    <section
      className="px-4 py-12 mx-auto md:py-18 lg:px-8 max-w-7xl"
      id="price-section"
    >
      <Fade direction="up" delay={40} cascade damping={0.1} triggerOnce>
        <div className="text-center">
          <h2 className="mb-4 text-2xl text-center text-black uppercase sm:mb-10 ls-51">
            {t("price_section_title")}
          </h2>
        </div>
      </Fade>

      <div className="mt-12 sm:mt-16 max-w-(--breakpoint-lg) mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-0">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn("relative p-6 bg-background border px-8 rounded-lg", {
              "shadow-[0px_2px_12px_0px_rgba(0,0,0,0.07)] py-14 z-1 px-10 lg:-mx-2 overflow-hidden":
                plan.isPopular,
            })}
          >
            {plan.isPopular && (
              <Badge className="absolute top-0 right-0 rounded-none px-5 py-1 uppercase rounded-bl-lg">
                {t("price_section_title")}
              </Badge>
            )}

            <h3 className="text-lg font-medium uppercase">{plan.name}</h3>

            <p className="mt-2 text-4xl font-semibold text-black">
              {plan.price}
              <span className="ml-1.5 text-sm text-muted-foreground font-normal">
                {t("short_hair")}
              </span>
            </p>

            <p className="mt-4 text-sm text-muted-foreground">
              {plan.description}
            </p>

            <Separator className="my-8" />

            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-1.5">
                  <CircleCheck className="h-4 w-4 mt-1 text-green-600" />
                  <span className="text-black">{feature.title}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

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
    </section>
  );
};

export default PriceSection;
