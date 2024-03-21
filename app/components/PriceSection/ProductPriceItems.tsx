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
];

export const getAdditionalServices = (
  t: TranslationFunction
): AdditionalService[] => [
  { name: t("bio_ampoule"), price: 50 },
  { name: t("scalp_peeling"), price: 50 },
  { name: t("hair_trimming"), price: 90 },
  { name: t("sos_treatment"), price: 50 },
  { name: t("hair_polishing"), price: 110 },
];
