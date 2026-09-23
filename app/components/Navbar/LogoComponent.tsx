"use client";

import Link from "next/link";

const LogoComponent = () => {
  return (
    <div className="flex shrink-0 items-center text-center">
      <Link
        href="/"
        className="font-display text-2xl font-medium tracking-tight text-ink transition-[letter-spacing] duration-300 hover:tracking-[0.04em] md:text-[1.7rem]"
      >
        Hair by Hanna
      </Link>
    </div>
  );
};

export default LogoComponent;
