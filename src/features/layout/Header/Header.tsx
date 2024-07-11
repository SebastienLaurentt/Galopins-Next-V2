"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import navData from "../../../../data/navData";
import logo from "../../../../public/images/logoGalopins.png";
import BurgerMenu from "./BurgerMenu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const pathname = usePathname();

  const headerVisibility = /^\/(login|account)/.test(pathname) ? "hidden" : "";

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // Supposons que le point de rupture 'md' soit 768px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Vérification initiale

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filteredNavData = isLargeScreen
    ? navData.filter((link) => link.name !== "Photos")
    : navData;

  return (
    <header className={`${headerVisibility} z-10 w-full`}>
      {/* Logo */}
      <div className="flex items-center justify-between px-6 py-3 md:px-10 xl:mx-auto xl:max-w-screen-xl xl:px-16 ">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo Galopins"
            className="w-24 text-white lg:w-28"
          />
        </Link>

        {/* Nav */}
        <nav className="hidden md:absolute md:left-0 md:flex md:w-full md:justify-center lg:text-md">
          <ul className="flex gap-3">
            {filteredNavData.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={
                    "relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left font-medium" +
                    (pathname === link.href
                      ? " border-b-[2px] border-black"
                      : "")
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button asChild className="hidden bg-green-700 text-white md:flex">
          <Link href="/photos">Nos Photos</Link>
        </Button>

        {/* BurgerMenu Component */}
        <div className="flex h-8 items-center md:hidden md:h-10 ">
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
};
