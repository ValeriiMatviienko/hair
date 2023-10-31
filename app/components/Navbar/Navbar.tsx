import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { Bars3Icon, PhoneIcon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import ContactForm from "./ContactForm";
import Image from "next/image";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { NavigationItem } from "./NavigationItem";
import DrawerData from "./DrawerData";

const Navbar = () => {
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
                <Image
                  src="/images/5908.jpg"
                  alt="logo"
                  width={36}
                  height={36}
                />
                <a
                  href="/"
                  className="mt-2 ml-4 text-2xl font-semibold text-black md:text-3xl sm:text-2xl"
                >
                  Hair by Hanna
                </a>
              </div>
              <div className="items-center hidden lg:flex">
                <div className="flex justify-end space-x-4">
                  {NavigationItem.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setActiveLink(item.name)}
                      className={`px-4 py-4 text-lg  hover:text-darkgreen space-links ${
                        activeLink === item.name ? "active-class" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden gap-6 lg:flex">
                <div className="flex items-center gap-2 mr-3">
                  <PhoneIcon
                    className="w-6 h-6 text-black"
                    aria-hidden="true"
                  />
                  <a className="text-xl font-medium" href="tel:+48780509295">
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
