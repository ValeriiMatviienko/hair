"use client";

import { PropsWithChildren } from "react";
import { useTranslations } from "next-intl";
import LogoComponent from "../Navbar/LogoComponent";
import { useNavigationContext } from "@/app/context/NavigationContext";

const Drawer = ({ children }: PropsWithChildren) => {
  const t = useTranslations("Index");
  const { isOpen, setIsOpen } = useNavigationContext();

  const closeDrawer = () => setIsOpen(false);

  return (
    <div
      className={`fixed inset-0 z-40 overflow-hidden bg-ink/50 transition-opacity ease-in-out ${
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
        className={`absolute z-10 h-full w-full max-w-xs overflow-y-auto overscroll-contain bg-paper pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] shadow-xl transition-transform md:max-w-sm ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-ink/10 px-4 py-4">
          <LogoComponent />

          <button
            type="button"
            onClick={closeDrawer}
            aria-label={t("close_menu")}
            className="flex h-11 w-11 items-center justify-center"
          >
            <span className="relative block h-3.5 w-6" aria-hidden="true">
              <span className="absolute top-1.5 left-0 h-0.5 w-full rotate-45 bg-ink" />
              <span className="absolute top-1.5 left-0 h-0.5 w-full -rotate-45 bg-ink" />
            </span>
          </button>
        </header>

        <div
          onClick={(event) => {
            const target = event.target;

            if (target instanceof Element && target.closest("a[href]")) {
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
