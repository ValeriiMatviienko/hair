import { useTranslations } from "next-intl";
import { FC } from "react";

const OpenHours: FC = () => {
  const t = useTranslations("Index");

  return (
    <div className="mt-4 text-lg text-center">
      <h2 className="mb-2 text-lg font-semibold text-center uppercase">
        {t("open_hours")}:
      </h2>
      <p>
        {t("monday_friday").split(":")[0]}:{" "}
        <strong>{t("monday_friday").split(":")[1]}</strong>
      </p>
      <p>
        {t("saturday_sunday").split(":")[0]}:{" "}
        <strong>{t("saturday_sunday").split(":")[1]}</strong>
      </p>
    </div>
  );
};

export default OpenHours;
