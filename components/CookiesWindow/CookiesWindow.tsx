"use client";

import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { Button } from "../ui/button";

export default function CookiesWindow() {
  const [isClose, setIsClose] = useState(true);

  const displayClass = !isClose ? "left-6 md:left-10 xl:left-16 2xl:left-10" : "-left-full";

  function handleClick() {
    setIsClose(true);

    // Save "close" state info in cookies
    const cookie = new Cookies();
    cookie.set("lesgalopins-cookiesinfo", "closed");
  }

  useEffect(() => {
    // Get the popup status from cookies
    const cookie = new Cookies();
    const popupStatus = cookie.get("lesgalopins-cookiesinfo");

    // Check the value of the cookie
    if (popupStatus === "closed") {
      // If the value is equal to "closed", hide the cookie popup
      setIsClose(true);
    } else {
      // If not, display the cookie banner
      setIsClose(false);
    }
  }, []);

  return (
    <div
      className={`bg-secondary text-white fixed ${displayClass} bottom-14 md:bottom-16 max-w-[280px]  p-4 text-xs shadow-lg rounded-xl  transition-position duration-700`}
    >
      <div className="mb-4">
        <p className=" leading-normal text-xs mb-0">
          Des cookies sont récoltés pour optimiser le fonctionnement du site.
          Aucune donnée personnelle n&apos;est collectée.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <span className="font-semibold">
          <a href="/mentions">En savoir plus</a>
        </span>
        <Button onClick={handleClick} className="bg-accent text-white text-xs px-6">
          {" "}
          Ok !{" "}
        </Button>
      </div>
    </div>
  );
}
