"use client";

import Link from "next/link";

const LogoComponent = () => {
  return (
    <div className="flex items-center shrink-0 text-center">
      <Link href="/" className="text-3xl font-semibold text-black ">
        Hair by Hanna
      </Link>
    </div>
  );
};

export default LogoComponent;
