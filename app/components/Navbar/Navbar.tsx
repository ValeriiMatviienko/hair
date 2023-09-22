import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import DrawerData from "./DrawerData";
import ContactForm from "./ContactForm";
import Image from "next/image";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { NavigationItem } from "@/app/types/types";

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
  const [isOpen, setIsOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="p-3 mx-auto max-w-7xl md:p-6 lg:px-8">
          <div className="relative flex items-center h-12 sm:h-20">
            <div className="flex items-center flex-1 sm:justify-between">
              {/* LOGO */}

              <div className="flex items-center flex-shrink-0 border-right">
                <Image
                  src="/images/5908.jpg"
                  alt="logo"
                  width={36}
                  height={36}
                />
                <Link
                  href="/"
                  className="ml-4 text-2xl font-semibold text-black sm:text-3xl"
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
                <div className="flex items-center gap-2 mr-3">
                  <a className="text-lg font-medium" href="tel:+48780509295">
                    +48780509295
                  </a>
                </div>
                <ContactForm
                  isOpen={isContactFormOpen}
                  setIsOpen={setIsContactFormOpen}
                />
              </div>
            </div>
            <div className="block lg:hidden">
              <Bars3Icon
                className="block w-6 h-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>
            <Drawer
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              setIsContactFormOpen={setIsContactFormOpen}
            >
              <DrawerData setIsContactFormOpen={setIsContactFormOpen} />
            </Drawer>
          </div>
        </div>
        <ToastContainer className="z-100" />
      </>
    </Disclosure>
  );
};

export default Navbar;
