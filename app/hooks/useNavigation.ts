import { useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { NavigationItemType } from "../types/types";
import { getScrollBehavior } from "@/lib/utils";

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
        behavior: getScrollBehavior(),
      });
    }
  }, []);

  const handleNavLinkClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, item: NavigationItemType) => {
      const hashIndex = item.href.indexOf("#");

      if (hashIndex !== -1 && pathname === "/") {
        event.preventDefault();
        setActiveLink(item.name);
        const targetId = item.href.slice(hashIndex);
        // Runs after the mobile drawer has released its scroll lock.
        requestAnimationFrame(() => smoothScroll(targetId));
        return;
      }

      setActiveLink(item.name);
    },
    [pathname, smoothScroll],
  );

  return { activeLink, handleNavLinkClick, pathname };
};

export default useNavigation;
