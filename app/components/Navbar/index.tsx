"use client";
import { FaBars } from "react-icons/fa";
import { useCallback } from "react";
import LanguageSelector from "../LanguageSelector";
import { useTranslations } from "next-intl";
import { getNavigationItems } from "./NavigationItem";
import useNavigation from "@/app/hooks/useNavigation";
import NavigationItemComponent from "./NavigationItemComponent";
import LogoComponent from "./LogoComponent";
import { useNavigationContext } from "@/app/context/NavigationContext";

const Navbar = () => {
  const t = useTranslations("Index");
  const navigationItems = getNavigationItems(t);
  const { isOpen, setIsOpen } = useNavigationContext();
  const { activeLink, handleNavLinkClick } = useNavigation();

  const handleIconClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  return (
    <nav className="sticky top-0 z-10 bg-white navbar">
      <div className="p-4 mx-auto max-w-screen-2xl md:p-8">
        <div className="flex items-center">
          <div className="flex items-center justify-between flex-1">
            <LogoComponent />
            <div className="items-center hidden xl:flex">
              <div className="flex space-x-4">
                <NavigationItemComponent
                  navigationItems={navigationItems}
                  activeLink={activeLink}
                  handleNavLinkClick={handleNavLinkClick}
                  className="px-2 py-4 text-lg nav-link sm:text-xl"
                />
              </div>
            </div>
            <div className="hidden gap-6 xl:flex">
              <div className="flex items-center gap-4">
                <LanguageSelector />
              </div>
            </div>
          </div>
          <div className="block xl:hidden">
            <button
              type="button"
              onClick={handleIconClick}
              aria-label={t("open_menu")}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="block rounded-sm p-1 focus-visible:ring-2 focus-visible:ring-darkgreen"
            >
              <FaBars
                className={`block w-9 h-9 md:w-12 md:h-12 ${
                  isOpen ? "click-scale-animation" : ""
                }`}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
