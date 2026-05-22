"use client";

import { PropsWithChildren } from "react";
import { FaTimes } from "react-icons/fa";
import LogoComponent from "../Navbar/LogoComponent";
import useDocumentHeight from "@/app/hooks/useDocumentHeight";
import { useNavigationContext } from "@/app/context/NavigationContext";

const Drawer = ({ children }: PropsWithChildren) => {
  const { isOpen, setIsOpen } = useNavigationContext();

  useDocumentHeight();

  const closeDrawer = () => setIsOpen(false);

  return (
    <main
      className={`fixed inset-0 z-10 overflow-hidden bg-secondary-foreground/75 transition-opacity ease-in-out ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <section
        className={`absolute h-full w-full max-w-xs bg-white shadow-xl transition-transform md:max-w-sm ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between px-4 py-4">
          <LogoComponent />

          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close drawer"
            className="block"
          >
            <FaTimes className="h-6 w-6" />
          </button>
        </header>

        <div onClick={closeDrawer}>{children}</div>
      </section>

      <button
        type="button"
        aria-label="Close drawer overlay"
        onClick={closeDrawer}
        className="h-full w-screen cursor-pointer"
      />
    </main>
  );
};

export default Drawer;
