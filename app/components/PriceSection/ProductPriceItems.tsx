import { ProductPrice, TranslationFunction } from "@/app/types/types";

export const getProductPrices = (t: TranslationFunction): ProductPrice[] => [
  {
    name: t("price_nanoplastia"),
    shortHairPrice: 350,
    midHairPrice: 470,
    longHairPrice: 550,
  },
  {
    name: t("price_keratine"),
    shortHairPrice: 280,
    midHairPrice: 370,
    longHairPrice: 460,
  },

  {
    name: t("price_botox"),
    shortHairPrice: 250,
    midHairPrice: 330,
    longHairPrice: 420,
  },
  {
    name: t("price_haircut"),
    shortHairPrice: 70,
    midHairPrice: 100,
    longHairPrice: 130,
  },
];
