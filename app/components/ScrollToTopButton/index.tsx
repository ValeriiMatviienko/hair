"use client";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect, FC } from "react";

const ScrollToTopButton: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return isVisible ? (
    <div
      className="fixed p-2 rounded-full cursor-pointer bg-opacity-20 bg-gray-100/25 bottom-4 right-4"
      onClick={scrollToTop}
    >
      <FaArrowUp className="w-6 h-6 sm:w-10 sm:h-10 text-darkgreen" />
    </div>
  ) : null;
};

export default ScrollToTopButton;
