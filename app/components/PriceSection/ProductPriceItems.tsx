import {
  AdditionalService,
  ProductPrice,
  TranslationFunction,
} from "@/app/types/types";
import { useRouter } from "next/router";

export const getProductPrices = (t: TranslationFunction): ProductPrice[] => [
  {
    name: t("price_nanoplastia"),
    shortHairPrice: 350,
    midHairPrice: 470,
    longHairPrice: 570,
  },
  {
    name: t("price_keratine"),
    shortHairPrice: 330,
    midHairPrice: 380,
    longHairPrice: 480,
  },

  {
    name: t("price_botox"),
    shortHairPrice: 300,
    midHairPrice: 350,
    longHairPrice: 450,
  },
];

export const getAdditionalServices = (
  t: TranslationFunction
): AdditionalService[] => [
  { name: t("trichological_consultation"), price: 250 },
  { name: t("bio_ampoule"), price: 150 },
  { name: t("scalp_peeling"), price: 250 },
  { name: t("hair_trimming"), price: 120 },
  { name: t("sos_treatment"), price: 50 },
  { name: t("hair_polishing"), price: 150 },
];
