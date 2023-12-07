import React, { useCallback, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { DrawerProps } from "@/app/types/types";

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (isOpen) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "";
      }
    }
  }, [isOpen]);

  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-black bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-100 opacity-0 -translate-x-full  ")
      }
    >
      <section
        className={
          "w-340px max-w-lg left-0 absolute bg-white h-full shadow-xl delay-100 duration-500 ease-in-out transition-all transform " +
          (isOpen ? "translate-x-0" : "-translate-x-full")
        }
      >
        <article className="relative flex flex-col h-full max-w-lg pb-10 space-y-6 w-340px">
          <header className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center flex-shrink-0">
              <Link href="/" className="text-2xl font-semibold text-black ">
                Hair by Hanna
              </Link>
            </div>

            <XMarkIcon className="block w-6 h-6" onClick={handleClose} />
          </header>
          <div onClick={handleClose}>{children}</div>
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer "
        onClick={handleClose}
      ></section>
    </main>
  );
};

export default Drawer;
