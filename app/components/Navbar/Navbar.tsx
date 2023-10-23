import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
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

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="p-2 mx-auto sm:p-3 max-w-7xl md:p-6 lg:px-8">
          <div className="relative flex items-center h-12 sm:h-16 md:h-20">
            <div className="flex flex-col items-center justify-between flex-1 sm:flex-row">
              <div className="flex items-center flex-shrink-0 mb-2 text-center">
                <Image
                  src="/images/5908.jpg"
                  alt="logo"
                  width={36}
                  height={36}
                />
                <Link
                  href="/"
                  className="mt-2 ml-4 text-xl font-semibold text-black sm:text-2xl"
                >
                  Hair by Hanna
                </Link>
              </div>
              <div className="items-center hidden lg:flex border-right ">
                <div className="flex justify-end space-x-4">
                  {NavigationItem.map((item) => (
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
