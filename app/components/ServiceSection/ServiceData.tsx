import { TranslationFunction, serviceDataType } from "@/app/types/types";

export const getServiceData = (t: TranslationFunction): serviceDataType[] => [
  {
    serviceTitle: t("service_title_1"),
    serviceDescription: t("service_description_1"),
  },
  {
    serviceTitle: t("service_title_2"),
    serviceDescription: t("service_description_2"),
  },
  {
    serviceTitle: t("service_title_3"),
    serviceDescription: t("service_description_3"),
  },
  {
    serviceTitle: t("service_title_4"),
    serviceDescription: t("service_description_4"),
  },
];
