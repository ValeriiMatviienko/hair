import { TranslationFunction } from "@/app/types/types";

export type serviceDataType = {
  serviceTitle: string;
  serviceFeatures: string[];
};

const splitFeatures = (value: string) =>
  value
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

export const getServiceData = (t: TranslationFunction): serviceDataType[] => [
  {
    serviceTitle: t("service_title_1"),
    serviceFeatures: splitFeatures(t("service_description_1")),
  },
  {
    serviceTitle: t("service_title_2"),
    serviceFeatures: splitFeatures(t("service_description_2")),
  },
  {
    serviceTitle: t("service_title_3"),
    serviceFeatures: splitFeatures(t("service_description_3")),
  },
];
