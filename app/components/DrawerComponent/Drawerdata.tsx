"use client";

import LanguageSelector from "../LanguageSelector";
import { useTranslations } from "next-intl";
import useNavigation from "@/app/hooks/useNavigation";
import NavigationItemComponent from "../Navbar/NavigationItemComponent";
import { getNavigationItems } from "../Navbar/NavigationItem";

const DrawerData = () => {
  const t = useTranslations("Index");
  const navigationItems = getNavigationItems(t);
  const { activeLink, handleNavLinkClick } = useNavigation();

  return (
    <div className="w-full max-w-sm mx-auto rounded-md">
      <div className="flex-1 py-1 ">
        <div className="px-5 pt-2 pb-3">
          <NavigationItemComponent
            navigationItems={navigationItems}
            activeLink={activeLink}
            handleNavLinkClick={handleNavLinkClick}
            className="block px-4 py-4 mb-4 text-lg hover:text-darkgreen"
          />
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

export default DrawerData;
