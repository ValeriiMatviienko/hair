"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationItemComponentProps } from "@/app/types/types";

const NavigationItemComponent = ({
  navigationItems,
  activeLink,
  handleNavLinkClick,
  className,
}: NavigationItemComponentProps) => {
  const pathname = usePathname();

  return (
    <>
      {navigationItems.map((item) => {
        const isCurrentPage =
          item.href === pathname ||
          (item.href === "/certificates" && pathname === "/certificates");
        const isCurrentLocation = !isCurrentPage && activeLink === item.name;

        return (
          <Link
            key={item.name}
            href={item.href}
            onClick={(e) => handleNavLinkClick(e, item)}
            aria-current={
              isCurrentPage ? "page" : isCurrentLocation ? "location" : undefined
            }
            className={`${className} ${
              isCurrentPage || isCurrentLocation ? "active-class" : ""
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </>
  );
};

export default NavigationItemComponent;
