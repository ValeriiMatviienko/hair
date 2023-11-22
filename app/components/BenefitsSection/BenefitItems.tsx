import { BenefitData, TranslationFunction } from "@/app/types/types";

export const getBenefitItems = (t: TranslationFunction): BenefitData[] => [
  {
    title: t("benefit_keratin_title"),
    benefits: [
      {
        subtitle: t("benefit_keratin_subtitle1"),
        description: t("benefit_keratin_description1"),
      },
      {
        subtitle: t("benefit_keratin_subtitle2"),
        description: t("benefit_keratin_description2"),
      },
      {
        subtitle: t("benefit_keratin_subtitle3"),
        description: t("benefit_keratin_description3"),
      },
    ],
  },
  {
    title: t("benefit_nanoplastia_title"),
    benefits: [
      {
        subtitle: t("benefit_nanoplastia_subtitle1"),
        description: t("benefit_nanoplastia_description1"),
      },
      {
        subtitle: t("benefit_nanoplastia_subtitle2"),
        description: t("benefit_nanoplastia_description2"),
      },
      {
        subtitle: t("benefit_nanoplastia_subtitle3"),
        description: t("benefit_nanoplastia_description3"),
      },
    ],
  },
  {
    title: t("benefit_botox_title"),
    benefits: [
      {
        subtitle: t("benefit_botox_subtitle1"),
        description: t("benefit_botox_description1"),
      },
      {
        subtitle: t("benefit_botox_subtitle2"),
        description: t("benefit_botox_description2"),
      },
      {
        subtitle: t("benefit_botox_subtitle3"),
        description: t("benefit_botox_description3"),
      },
    ],
  },
];
