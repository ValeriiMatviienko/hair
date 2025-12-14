import {
  AdditionalService,
  ProductPrice,
  TranslationFunction,
} from "@/app/types/types";

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
  { name: t("bio_ampoule"), price: 170 },
  { name: t("hair_trimming"), price: 130 },
  { name: t("hair_polishing"), price: 150 },
  { name: t("scalp_peeling"), price: 210 },
];
