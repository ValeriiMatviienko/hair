import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import ContactForm from "./ContactForm";
import { useCallback, useState } from "react";
import { ToastContainer } from "react-toastify";
import LanguageSelector from "../LanguageSelector";
import { useTranslations } from "next-intl";
import { getNavigationItems } from "./NavigationItem";
import DrawerData from "./Drawerdata";
import useContactForm from "@/app/hooks/useContactForm";
import useNavigation from "@/app/hooks/useNavigation";
import NavigationItemComponent from "./NavigationItemComponent";

const Navbar = () => {
  const t = useTranslations("Index");
  const navigationItems = getNavigationItems(t);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { showToastContainer } = useContactForm();
  const { activeLink, handleNavLinkClick } = useNavigation();

  const handleIconClick = useCallback(() => {
    setIsOpen(true);
    setMenuOpen(!menuOpen);
    setMenuOpen(true);
    setTimeout(() => {
      setMenuOpen(false);
    }, 300);
  }, [menuOpen, setIsOpen, setMenuOpen]);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="p-2 mx-auto max-w-screen-2xl md:p-5">
          <div className="relative flex items-center">
            <div className="flex items-center justify-between flex-1">
              <div className="flex items-center flex-shrink-0 mb-2 text-center">
                <a
                  href="/"
                  className="mt-2 ml-4 text-2xl font-semibold text-black md:mt-0 md:text-3xl sm:text-2xl"
                >
                  Hair by Hanna
                </a>
              </div>
              <div className="items-center hidden xl:flex">
                <div className="flex space-x-4">
                  <NavigationItemComponent
                    navigationItems={navigationItems}
                    activeLink={activeLink}
                    handleNavLinkClick={handleNavLinkClick}
                    className="px-2 py-4 text-lg nav-link sm:text-xl"
                  />
                </div>
              </div>
              <div className="hidden gap-6 xl:flex">
                <div className="flex items-center gap-4">
                  <ContactForm
                    isOpen={isContactFormOpen}
                    setIsOpen={setIsContactFormOpen}
                  />
                  <LanguageSelector id="navbarLanguageSelector" />
                </div>
              </div>
            </div>
            <div className="block xl:hidden">
              <Bars3Icon
                className={`block w-9 h-9 md:w-12 md:h-12 ${
                  menuOpen ? "click-scale-animation" : ""
                }`}
                aria-hidden="true"
                onClick={handleIconClick}
              />
            </div>
            {isOpen ? (
              <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <DrawerData setIsContactFormOpen={setIsContactFormOpen} />
              </Drawer>
            ) : null}
          </div>
        </div>
        {showToastContainer ? <ToastContainer className="z-100" /> : null}
      </>
    </Disclosure>
  );
};

export default Navbar;
