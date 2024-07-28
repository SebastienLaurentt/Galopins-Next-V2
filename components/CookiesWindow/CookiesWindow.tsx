"use client";

import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { Button } from "../ui/button";

export default function CookiesWindow() {
  const [isClose, setIsClose] = useState(true);

  const displayClass = !isClose
    ? " md:left-10 xl:left-16 2xl:left-10"
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
      className={` fixed mx-16 border-2 border-accent bg-background md:mx-0 ${displayClass} bottom-14 flex flex-col  rounded-xl p-4 text-xs shadow-lg duration-700 md:bottom-16 md:max-w-[280px]`}
    >
      <div className="mb-4">
        <p className=" mb-0 text-xs leading-normal">
          Des cookies sont récoltés pour optimiser le fonctionnement du site.
          Aucune donnée personnelle n&apos;est collectée.
        </p>
      </div>

      <Button onClick={handleClick}>Ok !</Button>
    </div>
  );
}
