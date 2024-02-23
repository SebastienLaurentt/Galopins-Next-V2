"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
    }
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility)

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
  }

  return (
    <button
      className={`fixed bottom-14 md:bottom-16 right-6 md:right-10 xl:right-16 2xl:right-60 rounded-xl p-1 outline-none shadow transition-opacity duration-200 bg-white 2xl:bg-secondary 2xl:text-white ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
      aria-label="Retourner en haut de la page"
    >
      <ChevronUp />
    </button>
  )
}

export default ScrollToTopButton