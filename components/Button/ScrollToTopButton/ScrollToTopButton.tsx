"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // If scroll > Show Button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // Listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  return (
    <button
      className={`fixed bottom-14 right-6 rounded-xl bg-white p-1 shadow outline-none transition-opacity duration-200 md:bottom-16 md:right-10 xl:right-16 2xl:right-60  ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
      aria-label="Retourner en haut de la page"
    >
      <ChevronUp />
    </button>
  );
};

export default ScrollToTopButton;
