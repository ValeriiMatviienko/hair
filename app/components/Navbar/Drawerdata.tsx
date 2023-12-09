import React, { useCallback } from "react";
import { DrowerDataProps } from "@/app/types/types";
import LanguageSelector from "../LanguageSelector";
import { getNavigationItems } from "./NavigationItem";
import { useTranslations } from "next-intl";
import useNavigation from "@/app/hooks/useNavigation";
import NavigationItemComponent from "./NavigationItemComponent";
import ContactButton from "../ContactForm/ContactButton";

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
            <ContactButton
              onClick={handleContactClick}
              className="justify-center w-full mb-10 lg:px-8 navbutton"
            />
            <LanguageSelector id="drawerLanguageSelector" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerData;
