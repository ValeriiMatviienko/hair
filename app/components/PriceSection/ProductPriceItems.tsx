import {
  AdditionalService,
  TranslationFunction,
} from "@/app/types/types";
import { siteConfig } from "@/lib/site-config";

export const getAdditionalServices = (
  t: TranslationFunction
): AdditionalService[] => [
  {
    name: t("bio_ampoule"),
    price: siteConfig.additionalServicePrices.bio_ampoule,
  },
  {
    name: t("hair_trimming"),
    price: siteConfig.additionalServicePrices.hair_trimming,
  },
  {
    name: t("hair_polishing"),
    price: siteConfig.additionalServicePrices.hair_polishing,
  },
  {
    name: t("scalp_peeling"),
    price: siteConfig.additionalServicePrices.scalp_peeling,
  },
];
