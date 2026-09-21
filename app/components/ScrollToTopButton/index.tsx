"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useTranslations } from "next-intl";

const SCROLL_THRESHOLD = 300;

const ScrollToTopButton = () => {
  const t = useTranslations("Index");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <button
      type="button"
      aria-label={t("scroll_to_top")}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-4 right-4 cursor-pointer rounded-full bg-gray-100/25 p-2"
    >
      <FaArrowUp
        className="h-6 w-6 text-darkgreen sm:h-10 sm:w-10"
        aria-hidden="true"
      />
    </button>
  ) : null;
};

export default ScrollToTopButton;
