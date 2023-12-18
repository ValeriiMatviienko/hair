import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useCallback } from "react";
import { ToastContainer } from "react-toastify";
import LanguageSelector from "../LanguageSelector";
import { useTranslations } from "next-intl";
import { getNavigationItems } from "./NavigationItem";
import useNavigation from "@/app/hooks/useNavigation";
import NavigationItemComponent from "./NavigationItemComponent";
import ContactForm from "../ContactForm/ContactForm";
import LogoComponent from "./LogoComponent";
import DrawerContainer from "../DrawerComponent/DrawerContainer";
import { useNavigationContext } from "@/app/context/NavigationContext";

const Navbar = () => {
  const t = useTranslations("Index");
  const navigationItems = getNavigationItems(t);
  const { isOpen, setIsOpen } = useNavigationContext();
  const { activeLink, handleNavLinkClick } = useNavigation();

  const handleIconClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="p-4 mx-auto max-w-screen-2xl md:p-8">
          <div className="flex items-center">
            <div className="flex items-center justify-between flex-1">
              <LogoComponent />
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
                  <ContactForm />
                  <LanguageSelector id="navbarLanguageSelector" />
                </div>
              </div>
            </div>
            <div className="block xl:hidden">
              <Bars3Icon
                className={`block w-9 h-9 md:w-12 md:h-12 ${
                  isOpen ? "click-scale-animation" : ""
                }`}
                aria-hidden="true"
                onClick={handleIconClick}
              />
            </div>
            <DrawerContainer />
          </div>
          <ToastContainer className="z-100" />
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
