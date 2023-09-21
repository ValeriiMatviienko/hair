import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signindialog from "./Signindialog";
import Image from "next/image";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "About", href: "#home-section", current: false },
  { name: "Services", href: "#service-section", current: false },
  { name: "Gallery", href: "#gallery-section", current: false },
  { name: "Price", href: "#price-section", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="p-3 mx-auto max-w-7xl md:p-6 lg:px-8">
          <div className="relative flex items-center h-12 sm:h-20">
            <div className="flex items-center flex-1 sm:justify-between">
              {/* LOGO */}

              <div className="flex items-center flex-shrink-0 sm:hidden border-right">
                <Image
                  src="/images/5908.jpg"
                  alt="logo"
                  width={36}
                  height={36}
                />
                <Link
                  href="/"
                  className="ml-4 text-2xl font-semibold text-black"
                >
                  Hair by Hanna.
                </Link>
              </div>
              <div className="items-center flex-shrink-0 hidden sm:flex border-right">
                <Image
                  src="/images/5908.jpg"
                  alt="logo"
                  width={56}
                  height={56}
                />
                <Link
                  href="/"
                  className="ml-4 text-2xl font-semibold text-black"
                >
                  Hair by Hanna.
                </Link>
              </div>

              {/* LINKS */}

              <div className="items-center hidden lg:flex border-right ">
                <div className="flex justify-end space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-black"
                          : "navlinks hover:opacity-100",
                        "px-3 py-4 rounded-md text-lg font-normal opacity-50 hover:text-gold space-links"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden gap-6 lg:flex">
                <div className="flex items-center gap-2">
                  <a className="text-lg font-medium" href="tel:+48780509295">
                    +48780509295
                  </a>
                </div>
                <Signindialog />
              </div>
            </div>
            <div className="block lg:hidden">
              <Bars3Icon
                className="block w-6 h-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
