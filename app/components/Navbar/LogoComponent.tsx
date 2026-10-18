"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNavigationContext } from "@/app/context/NavigationContext";
import { getScrollBehavior } from "@/lib/utils";

const LogoComponent = () => {
  const pathname = usePathname();
  const { setIsOpen } = useNavigationContext();

  return (
    <div className="flex shrink-0 items-center text-center">
      <Link
        href="/"
        onNavigate={(event) => {
          setIsOpen(false);

          if (pathname !== "/") return;

          event.preventDefault();
          requestAnimationFrame(() => {
            window.scrollTo({ top: 0, behavior: getScrollBehavior() });
          });
        }}
        className="font-display text-2xl font-medium tracking-tight text-ink transition-[letter-spacing] duration-300 hover:tracking-[0.04em] md:text-[1.7rem]"
      >
        Hair by Hanna
      </Link>
    </div>
  );
};

export default LogoComponent;
