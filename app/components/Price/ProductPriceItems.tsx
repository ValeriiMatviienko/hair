import { ProductPrice, TranslationFunction } from "@/app/types/types";

export const getProductPrices = (t: TranslationFunction): ProductPrice[] => [
  {
    name: t("price_keratine"),
    shortHairPrice: 300,
    midHairPrice: 400,
    longHairPrice: 500,
  },
  {
    name: t("price_nanoplastia"),
    shortHairPrice: 500,
    midHairPrice: 600,
    longHairPrice: 700,
  },
  {
    name: t("price_botox"),
    shortHairPrice: 250,
    midHairPrice: 350,
    longHairPrice: 450,
  },
  {
    name: t("price_mixadance"),
    shortHairPrice: 400,
    midHairPrice: 500,
    longHairPrice: 600,
  },
  {
    name: t("price_haircut"),
    shortHairPrice: 70,
    midHairPrice: 100,
    longHairPrice: 130,
  },
];
