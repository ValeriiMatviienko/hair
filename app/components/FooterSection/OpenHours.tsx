import { useTranslations } from "next-intl";

const OpenHours = () => {
  const t = useTranslations("Index");

  return (
    <div className="mt-8 text-paper">
      <h2 className="footer-label">{t("open_hours")}</h2>
      <div className="mt-3 space-y-1 text-lg text-paper">
        <p>
          {t("monday_friday").split(":")[0]}:{" "}
          <strong className="text-paper">{t("monday_friday").split(":")[1]}</strong>
        </p>
        <p>
          {t("saturday_sunday").split(":")[0]}:{" "}
          <strong className="text-paper">{t("saturday_sunday").split(":")[1]}</strong>
        </p>
      </div>
    </div>
  );
};

export default OpenHours;
