import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/site-config";

const Address = () => {
  const t = useTranslations("Index");

  return (
    <address className="text-lg not-italic text-paper">
      <a
        href={siteConfig.address.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-paper underline-offset-4 hover:underline"
      >
        {siteConfig.address.label}
        <span className="sr-only"> {t("opens_new_tab")}</span>
      </a>
    </address>
  );
};

export default Address;
