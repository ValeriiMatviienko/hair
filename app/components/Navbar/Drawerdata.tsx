import React, { useCallback } from "react";
import Link from "next/link";
import { DrowerDataProps } from "@/app/types/types";
import LanguageSelector from "../LanguageSelector";
import { getNavigationItems } from "./NavigationItem";
import { useTranslations } from "next-intl";
import useNavigation from "@/app/hooks/useNavigation";
import NavigationItemComponent from "./NavigationItemComponent";

const DrawerData = ({ setIsContactFormOpen }: DrowerDataProps) => {
  const t = useTranslations("Index");
  const navigationItems = getNavigationItems(t);
  const { activeLink, handleNavLinkClick } = useNavigation();

  const handleContactClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsContactFormOpen(true);
    },
    [setIsContactFormOpen]
  );

  return (
    <div className="w-full max-w-sm mx-auto rounded-md">
      <div className="flex-1 py-1 ">
        <div className="sm:block">
          <div className="px-5 pt-2 pb-3">
            <NavigationItemComponent
              navigationItems={navigationItems}
              activeLink={activeLink}
              handleNavLinkClick={handleNavLinkClick}
              className="block px-4 py-4 mb-4 text-lg hover:text-darkgreen space-links"
            />
            <button
              onClick={handleContactClick}
              className="flex justify-center w-full px-4 py-3 mb-10 font-medium text-white border rounded-full bg-darkgreen hover:text-darkgreen hover:bg-white border-darkgreen lg:px-8 navbutton"
            >
              {t("nav_contact")}
            </button>
            <LanguageSelector id="drawerLanguageSelector" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerData;
