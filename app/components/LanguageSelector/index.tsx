"use client";
import { useState, useEffect, useCallback } from "react";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { LanguageSelectorProps } from "@/app/types/types";

const locales = ["en", "pl", "ua"] as const;
/** Create the shared navigation instance */
const { useRouter, usePathname } = createSharedPathnamesNavigation({ locales });

const LanguageSelector = ({ id }: LanguageSelectorProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [selectedLocale, setSelectedLocale] = useState<string>("pl");

  /** On component mount, get saved locale from localStorage */
  useEffect(() => {
    const savedLocale = localStorage.getItem("selectedLocale");
    if (savedLocale) {
      setSelectedLocale(savedLocale);
      router.push(pathname, { locale: savedLocale });
    } else {
      localStorage.setItem("selectedLocale", "pl");
    }
  }, [pathname, router]);

  const handleLanguageChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      event.preventDefault();
      const newLocale = event.target.value;
      router.push(pathname, { locale: newLocale });
      setSelectedLocale(newLocale);
      localStorage.setItem("selectedLocale", newLocale);
    },
    [pathname, router]
  );

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) =>
    e.stopPropagation();

  return (
    <div className="inline-block" onClick={stopPropagation}>
      <select
        id={id}
        aria-label="Select language"
        value={selectedLocale}
        onChange={handleLanguageChange}
        className="w-full px-4 py-3 font-medium bg-white border rounded-full cursor-pointer text-darkgreen border-darkgreen hover:bg-softgray"
      >
        <option value="en" className="bg-white text-darkgreen">
          EN
        </option>
        <option value="pl" className="bg-white text-darkgreen">
          PL
        </option>
        <option value="ua" className="bg-white text-darkgreen">
          UA
        </option>
      </select>
    </div>
  );
};

export default LanguageSelector;
