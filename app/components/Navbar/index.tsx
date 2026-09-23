"use client";
import { useCallback } from "react";
import LanguageSelector from "../LanguageSelector";
import { useTranslations } from "next-intl";
import { getNavigationItems } from "./NavigationItem";
import useNavigation from "@/app/hooks/useNavigation";
import NavigationItemComponent from "./NavigationItemComponent";
import LogoComponent from "./LogoComponent";
import { useNavigationContext } from "@/app/context/NavigationContext";
import useIsScrolled from "@/app/hooks/useIsScrolled";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const t = useTranslations("Index");
  const navigationItems = getNavigationItems(t);
  const { isOpen, setIsOpen } = useNavigationContext();
  const { activeLink, handleNavLinkClick } = useNavigation();
  const isScrolled = useIsScrolled();

  const handleIconClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  return (
    <nav
      data-scrolled={isScrolled}
      className="navbar glass-surface sticky top-0 z-30"
    >
      <div className="mx-auto max-w-screen-2xl px-4 py-3 md:px-8 md:py-4">
        <div className="flex items-center">
          <div className="flex flex-1 items-center justify-between">
            <LogoComponent />
            <div className="hidden items-center xl:flex">
              <div className="flex space-x-6">
                <NavigationItemComponent
                  navigationItems={navigationItems}
                  activeLink={activeLink}
                  handleNavLinkClick={handleNavLinkClick}
                  className="nav-link px-1 py-3 text-[0.75rem] uppercase tracking-[0.14em]"
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
              className="flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-ink/10 bg-paper/95 text-darkgreen shadow-sm focus-visible:ring-2 focus-visible:ring-darkgreen"
            >
              <span className="relative block h-3.5 w-5" aria-hidden="true">
                <span
                  className={cn(
                    "menu-line absolute left-0 h-0.5 w-full bg-current transition-transform duration-300",
                    isOpen ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "menu-line absolute left-0 h-0.5 w-full bg-current transition-transform duration-300",
                    isOpen ? "top-1.5 -rotate-45" : "top-3",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
