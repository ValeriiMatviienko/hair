import { useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { NavigationItemType } from "../types/types";

const useNavigation = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const smoothScroll = useCallback((targetId: string) => {
    const targetElement = document.querySelector(targetId) as HTMLElement;

    if (targetElement) {
      const headerElement = document.querySelector(
        ".navbar",
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
      const hashIndex = item.href.indexOf("#");

      if (hashIndex !== -1 && pathname === "/") {
        event.preventDefault();
        setActiveLink(item.name);
        smoothScroll(item.href.slice(hashIndex));
        return;
      }

      setActiveLink(item.name);
    },
    [pathname, smoothScroll],
  );

  return { activeLink, handleNavLinkClick, pathname };
};

export default useNavigation;
