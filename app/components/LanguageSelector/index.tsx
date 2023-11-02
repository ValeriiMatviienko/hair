"use client";
import { usePathname, useRouter } from "next-intl/client";
import { useState, useEffect } from "react";

const LanguageSelector = () => {
  const pathname = usePathname();
  const router = useRouter();

  /** Local state to manage selected language */
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
    <div className="relative inline-block text-left ">
      <select
        value={selectedLocale}
        onChange={handleLanguageChange}
        className="block w-full px-2 py-2 mt-1 border rounded-md cursor-pointer focus:outline-none focus:ring hover:border-darkgreen sm:text-sm"
      >
        <option value="en">English</option>
        <option value="pl">Polski</option>
        <option value="ua">Українська</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
