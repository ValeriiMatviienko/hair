import React, { useCallback, useState } from "react";
import Link from "next/link";
import { DrowerDataProps, NavigationItemType } from "@/app/types/types";
import LanguageSelector from "../LanguageSelector";
import { getNavigationItems } from "./NavigationItem";
import { useTranslations } from "next-intl";

const DrawerData = ({ setIsContactFormOpen }: DrowerDataProps) => {
  const t = useTranslations("Index");
  const navigationItems = getNavigationItems(t);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleContactClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsContactFormOpen(true);
    },
    [setIsContactFormOpen]
  );

  const handleNavLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: NavigationItemType
  ) => {
    event.preventDefault();
    setActiveLink(item.name);
    smoothScroll(item.href);
  };

  function smoothScroll(targetId: string) {
    const targetElement = document.querySelector(targetId) as HTMLElement;

    if (targetElement) {
      const headerElement = document.querySelector(
        ".navbar"
      ) as HTMLElement | null;
      const headerHeight = headerElement ? headerElement.offsetHeight : 0;

      const targetPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = targetPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition + window.pageYOffset,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="w-full max-w-sm mx-auto rounded-md">
      <div className="flex-1 py-1 ">
        <div className="sm:block">
          <div className="px-5 pt-2 pb-3">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavLinkClick(e, item)}
                className={`block px-4 py-4 text-lg mb-4 hover:text-darkgreen space-links ${
                  activeLink === item.name ? "active-class" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
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
