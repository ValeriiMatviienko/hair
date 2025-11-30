"use client";
import Link from "next/link";
import { NavigationItemComponentProps } from "@/app/types/types";

const NavigationItemComponent = ({
  navigationItems,
  activeLink,
  handleNavLinkClick,
  className,
}: NavigationItemComponentProps) => {
  return (
    <>
      {navigationItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={(e) => handleNavLinkClick(e, item)}
          className={`${className} ${
            activeLink === item.name ? "active-class" : ""
          }`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default NavigationItemComponent;
