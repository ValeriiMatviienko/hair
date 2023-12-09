import React, { useCallback, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { DrawerProps } from "@/app/types/types";
import LogoComponent from "../Navbar/LogoComponent";

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
  const handleClose = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      setIsOpen(false);
    },
    [setIsOpen]
  );

  const mainClassName = `fixed overflow-hidden z-10 bg-black bg-opacity-25 inset-0 transform ease-in-out ${
    isOpen
      ? "transition-opacity opacity-100 duration-500 translate-x-0"
      : "transition-all delay-100 opacity-0 -translate-x-full"
  }`;

  const sectionClassName = `w-340px left-0 absolute bg-white h-full shadow-xl delay-100 duration-500 ease-in-out transition-all transform ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  }`;

  return (
    <main className={mainClassName}>
      <section className={sectionClassName}>
        <header className="flex items-center justify-between px-4 py-4">
          <LogoComponent />
          <XMarkIcon className="block w-6 h-6" onClick={handleClose} />
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
