import { useState, useEffect, useCallback } from "react";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { LanguageSelectorProps } from "@/app/types/types";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const locales = ["en", "pl", "ua"] as const;
const { useRouter, usePathname } = createSharedPathnamesNavigation({ locales });

const LanguageSelector = ({ id }: LanguageSelectorProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [selectedLocale, setSelectedLocale] = useState<string>("pl");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

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
    (newLocale: string) => {
      router.push(pathname, { locale: newLocale });
      setSelectedLocale(newLocale);
      localStorage.setItem("selectedLocale", newLocale);
      setIsDropdownOpen(false);
    },
    [pathname, router]
  );

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) =>
    e.stopPropagation();

  return (
    <div className="relative inline-block" onClick={stopPropagation}>
      <div
        id={id}
        aria-label="Select language"
        className="flex items-center px-4 py-3 font-medium bg-white border rounded-full cursor-pointer text-darkgreen border-darkgreen hover:bg-softgray"
        onClick={toggleDropdown}
      >
        <span className="mr-2">{selectedLocale.toUpperCase()}</span>
        {isDropdownOpen ? (
          <ChevronUpIcon className="w-5 h-5" />
        ) : (
          <ChevronDownIcon className="w-5 h-5" />
        )}
      </div>
      {isDropdownOpen && (
        <div className="absolute mt-1 bg-white rounded-md shadow-lg">
          {locales.map((locale) => (
            <div
              key={locale}
              className="px-4 py-2 cursor-pointer hover:bg-softgray text-darkgreen"
              onClick={() => handleLanguageChange(locale)}
            >
              {locale.toUpperCase()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
