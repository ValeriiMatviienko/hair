import { ContactButtonProps } from "@/app/types/types";
import { useTranslations } from "next-intl";

const ContactButton = ({ onClick, className = "" }: ContactButtonProps) => {
  const t = useTranslations("Index");
  const buttonBaseClass =
    "px-4 py-4 text-xl font-semibold text-white border rounded-full bg-darkgreen hover:text-darkgreen hover:bg-white border-darkgreen";
  const buttonClass = `${buttonBaseClass} ${className}`;

  return (
    <button type="button" className={buttonClass} onClick={onClick}>
      {t("nav_contact")}
    </button>
  );
};

export default ContactButton;
