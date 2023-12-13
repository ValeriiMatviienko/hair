import React, { useCallback } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { DrawerProps } from "@/app/types/types";
import LogoComponent from "../Navbar/LogoComponent";
import useDocumentHeight from "@/app/hooks/useDocumentHeight";
import useOnScreenKeyboardScrollFix from "@/app/hooks/useOnScreenKeyboardScrollFix";

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
  const handleClose = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      setIsOpen(false);
    },
    [setIsOpen]
  );
  useOnScreenKeyboardScrollFix();
  useDocumentHeight();

  const mainClassName = `fixed overflow-hidden z-10 bg-black bg-opacity-25 inset-0 transform ease-in-out ${
    isOpen ? "opacity-100" : "opacity-0"
  }`;

  const sectionClassName = `absolute bg-white h-full shadow-xl transform ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  } w-full max-w-xs md:max-w-sm`;
  return (
    <main className={mainClassName}>
      <section className={sectionClassName}>
        <header className="flex items-center justify-between px-4 py-4">
          <LogoComponent />
          <XMarkIcon
            className="block w-6 h-6"
            onClick={handleClose}
            aria-label="Close drawer"
          />
        </header>
        <div onClick={handleClose}>{children}</div>
      </section>
      <section
        className="w-screen h-full cursor-pointer "
        onClick={handleClose}
      ></section>
    </main>
  );
};

export default Drawer;
