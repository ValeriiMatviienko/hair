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
    <div className="mx-auto w-full max-w-sm">
      <div className="px-5 pt-4 pb-8">
        <NavigationItemComponent
          navigationItems={navigationItems}
          activeLink={activeLink}
          handleNavLinkClick={handleNavLinkClick}
          className="block border-b border-ink/10 py-4 font-display text-2xl text-ink hover:text-darkgreen"
        />
        <div className="mt-8">
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

export default DrawerData;
