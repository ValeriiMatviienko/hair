import { useState, useCallback } from "react";
import { NavigationItemType } from "../types/types";

const useNavigation = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleNavLinkClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, item: NavigationItemType) => {
      event.preventDefault();
      setActiveLink(item.name);
      smoothScroll(item.href);
    },
    []
  );

  function smoothScroll(targetId: string) {
    setTimeout(() => {
      const targetElement = document.querySelector(targetId) as HTMLElement;

      if (targetElement) {
        const headerElement = document.querySelector(
          ".navbar"
        ) as HTMLElement | null;
        const headerHeight = headerElement ? headerElement.offsetHeight : 0;

        const targetPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = targetPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition + window.pageYOffset,
          behavior: "smooth",
        });
      }
    }, 150);
  }

  return { activeLink, setActiveLink, handleNavLinkClick };
};

export default useNavigation;
