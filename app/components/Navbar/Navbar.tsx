import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import ContactForm from "./ContactForm";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import DrawerData from "./DrawerData";
import LanguageSelector from "../LanguageSelector";
import { useTranslations } from "next-intl";
import { getNavigationItems } from "./NavigationItem";

const Navbar = () => {
  const t = useTranslations("Index");
  const navigationItems = getNavigationItems(t);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="p-2 mx-auto max-w-screen-2xl sm:p-3 md:p-6 lg:px-8">
          <div className="relative flex items-center h-12 sm:h-16 md:h-20">
            <div className="flex items-center justify-between flex-1 sm:flex-row">
              <div className="flex items-center flex-shrink-0 mb-2 mr-8 text-center">
                <a
                  href="/"
                  className="mt-2 ml-4 text-2xl font-semibold text-black md:text-3xl sm:text-2xl"
                >
                  Hair by Hanna
                </a>
              </div>
              <div className="items-center hidden xl:flex">
                <div className="flex justify-end space-x-4">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setActiveLink(item.name)}
                      className={`px-4 py-4 text-lg sm:text-xl hover:text-darkgreen space-links ${
                        activeLink === item.name ? "active-class" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden gap-6 xl:flex">
                <div className="flex items-center gap-2 mr-3">
                  <a className="text-xl font-medium" href="tel:+48780509295">
                    +48780509295
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <ContactForm
                    isOpen={isContactFormOpen}
                    setIsOpen={setIsContactFormOpen}
                  />
                  <LanguageSelector />
                </div>
              </div>
            </div>
            <div className="block xl:hidden">
              <Bars3Icon
                className="block w-8 h-8 md:w-12 md:h-12"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
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
