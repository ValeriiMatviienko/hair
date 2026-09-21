"use client";

import { PropsWithChildren } from "react";
import { FaTimes } from "react-icons/fa";
import { useTranslations } from "next-intl";
import LogoComponent from "../Navbar/LogoComponent";
import { useNavigationContext } from "@/app/context/NavigationContext";

const Drawer = ({ children }: PropsWithChildren) => {
  const t = useTranslations("Index");
  const { isOpen, setIsOpen } = useNavigationContext();

  const closeDrawer = () => setIsOpen(false);

  return (
    <div
      className={`fixed inset-0 z-10 overflow-hidden bg-secondary-foreground/75 transition-opacity ease-in-out ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label={t("close_menu_overlay")}
        onClick={closeDrawer}
        className="absolute inset-0 h-full w-full cursor-pointer"
      />

      <aside
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label={t("mobile_navigation")}
        className={`absolute z-10 h-full w-full max-w-xs bg-white shadow-xl transition-transform md:max-w-sm ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between px-4 py-4">
          <LogoComponent />

          <button
            type="button"
            onClick={closeDrawer}
            aria-label={t("close_menu")}
            className="block"
          >
            <FaTimes className="h-6 w-6" aria-hidden="true" />
          </button>
        </header>

        <div
          onClick={(event) => {
            const target = event.target;

            if (
              target instanceof Element &&
              target.closest('a[href^="#"]')
            ) {
              closeDrawer();
            }
          }}
        >
          {children}
        </div>
      </aside>
    </div>
  );
};

export default Drawer;
