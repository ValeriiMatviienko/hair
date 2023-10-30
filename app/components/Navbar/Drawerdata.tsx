import React, { useState } from "react";
import Link from "next/link";
import { DrowerDataProps } from "@/app/types/types";
import { NavigationItem } from "./NavigationItem";
import { PhoneIcon } from "@heroicons/react/24/outline";

const DrawerData = ({ setIsContactFormOpen }: DrowerDataProps) => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  return (
    <div className="w-full max-w-sm mx-auto rounded-md">
      <div className="flex-1 py-1 ">
        <div className="sm:block">
          <div className="px-5 pt-2 pb-3">
            {NavigationItem.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveLink(item.name)}
                className={`block px-4 py-4 text-lg mb-4 hover:text-darkgreen space-links ${
                  activeLink === item.name ? "active-class" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center mb-10 space-x-2">
              <PhoneIcon className="w-6 h-6 text-black" aria-hidden="true" />
              <a
                className="text-xl font-medium align-middle"
                href="tel:+48780509295"
              >
                +48780509295
              </a>
            </div>
            <button
              onClick={() => setIsContactFormOpen(true)}
              className="flex justify-center w-full px-4 py-3 font-medium text-white border rounded-full bg-darkgreen hover:text-darkgreen hover:bg-white border-darkgreen lg:px-8 navbutton"
            >
              Contact me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerData;
