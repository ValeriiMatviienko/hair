"use client";

import { useTranslations } from "next-intl";
import { getServiceData } from "./ServiceData";
import { getAdditionalServices } from "./ProductPriceItems";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const ServiceSection = () => {
  const t = useTranslations("Index");
  const serviceData = getServiceData(t);
  const additionalServices = getAdditionalServices(t);

  const isPlus = (s: string) => s.trim().startsWith("➕");
  const isTime = (s: string) =>
    /^((Duration|Czas trwania|Тривалість)\s*:)/i.test(s.trim());
  const isTrichoscopy = (s: string) =>
    /^(Trichoscopy diagnostics|Diagnostyka trychoskopem|Діагностика трихоскопом)$/i.test(
      s.trim(),
    );
  const popularIndex = 1;

  return (
    <section className="section-shell pt-6 md:pt-10" id="price-section">
      <div className="mb-10 max-w-xl sm:mb-14">
        <p className="section-label">{t("section_price")}</p>
        <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
          {t("price_section_title")}
        </h2>
      </div>

      <div className="mx-auto max-w-4xl">
        {serviceData.map((item, index) => (
          <article
            key={item.serviceTitle}
            className={cn(
              "border-t border-ink/10 py-8 transition-colors duration-300 last:border-b md:py-10",
              index === popularIndex && "border-l-2 border-l-darkgreen pl-4 md:pl-6",
            )}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="section-label">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  {index === popularIndex && (
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-darkgreen">
                      {t("most_popular")}
                    </p>
                  )}
                </div>
                <h3 className="mt-2 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
                  {item.serviceTitle}
                </h3>
              </div>
              <p className="font-display text-3xl tracking-tight text-ink tabular-nums md:text-4xl">
                {siteConfig.servicePrices[index]} zł
              </p>
            </div>

            <ul className="mt-5 max-w-xl space-y-1.5">
              {item.serviceFeatures.map((feature) => {
                const muted = isPlus(feature) || isTime(feature);

                return (
                  <li
                    key={feature}
                    className={cn(
                      "text-[0.95rem] leading-6 text-ink/70",
                      isTrichoscopy(feature) && "font-medium text-ink",
                      muted && "text-ink/50",
                    )}
                  >
                    {feature}
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-4xl border-t border-ink/10 pt-10">
        <h3 className="font-display text-2xl font-medium tracking-tight text-ink">
          {t("dodatki_title")}
        </h3>

        <ul className="mt-6 space-y-0">
          {additionalServices.map((service) => (
            <li
              key={service.name}
              className="flex items-baseline justify-between gap-4 border-b border-ink/10 py-4 last:border-b-0"
            >
              <span className="text-sm uppercase tracking-[0.12em] text-ink">
                {service.name}
              </span>
              <span className="shrink-0 font-display text-xl text-ink tabular-nums md:text-2xl">
                {service.price} zł
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mx-auto mt-12 max-w-3xl text-sm leading-relaxed text-ink/55 sm:text-base">
        {t("benefits_conclusion")}
      </p>
    </section>
  );
};

export default ServiceSection;
