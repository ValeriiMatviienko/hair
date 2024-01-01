import React, { FC, useCallback } from "react";
import LanguageSelector from "../LanguageSelector";
import { useTranslations } from "next-intl";
import useNavigation from "@/app/hooks/useNavigation";
import ContactButton from "../ContactForm/ContactButton";
import NavigationItemComponent from "../Navbar/NavigationItemComponent";
import { getNavigationItems } from "../Navbar/NavigationItem";
import { useNavigationContext } from "@/app/context/NavigationContext";

const DrawerData: FC = () => {
  const { setIsContactFormOpen } = useNavigationContext();
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
        <div className="px-5 pt-2 pb-3">
          <NavigationItemComponent
            navigationItems={navigationItems}
            activeLink={activeLink}
            handleNavLinkClick={handleNavLinkClick}
            className="block px-4 py-4 mb-4 text-lg hover:text-darkgreen"
          />
          <ContactButton
            onClick={handleContactClick}
            className="justify-center w-full mb-10 lg:px-8 navbutton"
          />
          <LanguageSelector id="drawerLanguageSelector" />
        </div>
      </div>
    </div>
  );
};

export default DrawerData;
