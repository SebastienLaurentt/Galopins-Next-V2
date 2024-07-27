"use client";

import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { Button } from "../ui/button";

export default function CookiesWindow() {
  const [isClose, setIsClose] = useState(true);

  const displayClass = !isClose
    ? "left-4 md:left-10 xl:left-16 2xl:left-10"
    : "-left-full";

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
      className={`fixed bg-primary text-white ${displayClass} bottom-14 max-w-[280px] rounded-xl p-4 text-xs shadow-lg duration-700 md:bottom-16`}
    >
      <div className="mb-4">
        <p className=" mb-0 text-xs leading-normal">
          Des cookies sont récoltés pour optimiser le fonctionnement du site.
          Aucune donnée personnelle n&apos;est collectée.
        </p>
      </div>

      <div className="flex ">
        <Button
          onClick={handleClick}
          className="bg-accent text-xs text-white hover:bg-accent/90"
        >
          Ok !
        </Button>
      </div>
    </div>
  );
}
