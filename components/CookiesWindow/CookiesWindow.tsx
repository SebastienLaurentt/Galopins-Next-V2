"use client";

import { useState, useEffect } from "react";
import Cookies from "universal-cookie";

export default function CookiesWindow() {
  const [isClose, setIsClose] = useState(true);

  const displayClass = !isClose ? "left-6 md:left-10 " : "-left-full";

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
      className={`bg-secondary text-white  fixed  ${displayClass} bottom-14 mr-16 md:mr-20 xl:ml-10 xl:max-w-[300px]  p-4  shadow-lg rounded-xl  transition-position duration-700`}
    >
      <span className="font-bold">Collecte de cookies</span>
      <div className="mb-2">
        <p className="text-xs leading-normal mb-0">
          Des données sont récoltés pour optimiser le fonctionnement du site. Aucune donnée personnelle vous concernant n&apos;est collectée. 
          <span className="ml-2 font-semibold">
            <a href="/mentions">En savoir plus</a>
          </span>
        </p>
      </div>
      <button
        className="bg-danube-950 text-white font-semibold py-1  rounded-lg"
        onClick={handleClick}
      >
        C&apos;est compris
      </button>
    </div>
  );
}