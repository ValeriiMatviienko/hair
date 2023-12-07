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
    <div className="relative inline-block text-left" onClick={stopPropagation}>
      <select
        id={id}
        aria-label="Select language"
        value={selectedLocale}
        onChange={handleLanguageChange}
        className="block w-full px-2 py-2 mt-1 border rounded-md cursor-pointer bg-softgray hover:border-darkgreen sm:text-sm hover:bg-softgray"
      >
        <option value="en">EN</option>
        <option value="pl">PL</option>
        <option value="ua">UA</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
