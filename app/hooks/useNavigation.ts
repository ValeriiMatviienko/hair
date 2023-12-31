import { useState, useCallback } from "react";
import { NavigationItemType } from "../types/types";

const useNavigation = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const smoothScroll = useCallback((targetId: string) => {
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
  }, []);

  const handleNavLinkClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, item: NavigationItemType) => {
      event.preventDefault();
      setActiveLink(item.name);
      smoothScroll(item.href);
    },
    [smoothScroll]
  );

  return { activeLink, handleNavLinkClick };
};

export default useNavigation;
