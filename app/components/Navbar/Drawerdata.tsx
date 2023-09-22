import React from "react";
import Link from "next/link";
import { DrowerDataProps, NavigationItem } from "@/app/types/types";

const navigation: NavigationItem[] = [
  { name: "About", href: "#home-section", current: false },
  { name: "Services", href: "#service-section", current: false },
  { name: "Gallery", href: "#price-section", current: false },
  { name: "Price", href: "#gallery-section", current: false },
];

const DrawerData = ({ setIsContactFormOpen }: DrowerDataProps) => {
  return (
    <div className="w-full max-w-sm mx-auto rounded-md">
      <div className="flex-1 py-1 space-y-4">
        <div className="sm:block">
          <div className="px-5 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block  py-2 rounded-md text-base font-medium"
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center">
              <a className="text-xl font-medium" href="tel:+48780509295">
                +48780509295
              </a>
            </div>
            <button
              onClick={() => setIsContactFormOpen(true)}
              className="flex justify-center w-full px-4 py-3 text-base font-medium border rounded-full bg-darkgreen text-white hover:text-darkgreen hover:bg-white border-darkgreen lg:px-8 navbutton"
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
