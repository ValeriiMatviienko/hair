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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState<boolean>(false);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="p-2 mx-auto sm:p-3 max-w-7xl md:p-6 lg:px-8">
          <div className="relative flex items-center h-12 sm:h-16 md:h-20">
            <div className="flex flex-col items-center justify-between flex-1 sm:flex-row">
              <div className="flex flex-col items-center flex-shrink-0 mb-2 sm:flex-row sm:mb-0 border-right sm:mr-4">
                <Image
                  src="/images/5908.jpg"
                  alt="logo"
                  width={36}
                  height={36}
                />
                <Link
                  href="/"
                  className="mt-2 ml-0 text-xl font-semibold text-black sm:mt-0 sm:ml-4 sm:text-2xl"
                >
                  Hair by Hanna.
                </Link>
              </div>
              <div className="items-center hidden lg:flex border-right ">
                <div className="flex justify-end space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="px-4 py-4 text-lg font-normal text-black rounded-md hover:text-darkgreen space-links"
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden gap-6 lg:flex">
                <div className="flex items-center gap-2 mr-3">
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
                className="block w-6 h-6"
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
