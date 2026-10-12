"use client";

import { PropsWithChildren, useRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";
import LogoComponent from "../Navbar/LogoComponent";
import { useNavigationContext } from "@/app/context/NavigationContext";

const Drawer = ({ children }: PropsWithChildren) => {
  const t = useTranslations("Index");
  const { isOpen, setIsOpen } = useNavigationContext();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeDrawer = () => setIsOpen(false);

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="glass-overlay fixed inset-0 z-40" />
        <DialogPrimitive.Content
          id="mobile-navigation"
          aria-describedby={undefined}
          onOpenAutoFocus={(event) => {
            event.preventDefault();
            closeButtonRef.current?.focus();
          }}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            document
              .getElementById("mobile-menu-button")
              ?.focus({ preventScroll: true });
          }}
          className="fixed inset-y-0 left-0 z-40 w-full max-w-xs overflow-y-auto overscroll-contain bg-paper pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] shadow-xl outline-none md:max-w-sm"
        >
          <DialogPrimitive.Title className="sr-only">
            {t("mobile_navigation")}
          </DialogPrimitive.Title>

          <header className="flex items-center justify-between border-b border-ink/10 px-4 py-4">
            <LogoComponent />

            <button
              ref={closeButtonRef}
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
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default Drawer;
