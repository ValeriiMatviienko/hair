import React from "react";
import Link from "next/link";
import { DrowerDataProps } from "@/app/types/types";
import { NavigationItem } from "./NavigationItem";
import { PhoneIcon } from "@heroicons/react/24/outline";

const DrawerData = ({ setIsContactFormOpen }: DrowerDataProps) => {
  return (
    <div className="w-full max-w-sm mx-auto rounded-md">
      <div className="flex-1 py-1 space-y-4">
        <div className="sm:block">
          <div className="px-5 pt-2 pb-3 space-y-1">
            {NavigationItem.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium rounded-md"
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-2">
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
              className="flex justify-center w-full px-4 py-3 text-base font-medium text-white border rounded-full bg-darkgreen hover:text-darkgreen hover:bg-white border-darkgreen lg:px-8 navbutton"
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
