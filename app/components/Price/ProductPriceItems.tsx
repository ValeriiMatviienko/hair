import { ProductPrice, TranslationFunction } from "@/app/types/types";

export const getProductPrices = (t: TranslationFunction): ProductPrice[] => [
  { name: t("price_keratine"), price: 400 },
  { name: t("price_nanoplastia"), price: 600 },
  { name: t("price_botox"), price: 350 },
  { name: t("price_mixadance"), price: 500 },
  { name: t("price_haircut"), price: 100 },
];
