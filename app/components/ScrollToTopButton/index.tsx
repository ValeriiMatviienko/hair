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
      className="fixed right-4 bottom-24 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-darkgreen text-paper shadow-sm transition-transform duration-300 hover:-translate-y-0.5 md:bottom-6"
    >
      <FaArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  ) : null;
};

export default ScrollToTopButton;
