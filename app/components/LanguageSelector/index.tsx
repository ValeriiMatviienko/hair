"use client";
import { useState, useEffect } from "react";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

const locales = ["en", "pl", "ua"] as const;
/** Create the shared navigation instance */
const { useRouter, usePathname } = createSharedPathnamesNavigation({ locales });

const LanguageSelector = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [selectedLocale, setSelectedLocale] = useState<string>("pl");

  /** On component mount, get saved locale from localStorage */
  useEffect(() => {
    const savedLocale = localStorage.getItem("selectedLocale");
    if (savedLocale) {
      setSelectedLocale(savedLocale);
    }
  }, []);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLocale = event.target.value;
    router.push(pathname, { locale: newLocale });
    setSelectedLocale(newLocale); /** Update local state */
    localStorage.setItem("selectedLocale", newLocale);
  };
  
  return (
    <div
      className="relative inline-block text-left"
      onClick={(e) => e.stopPropagation()}
    >
      <select
        id="languageSelector"
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