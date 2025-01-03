"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import navData from "../../../../data/navData";
import logo from "../../../../public/images/logoGalopins.png";
import BurgerMenu from "./BurgerMenu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const headerVisibility = /^\/(login|account)/.test(pathname) ? "hidden" : "";

  return (
    <header className={`${headerVisibility} z-10 w-full`}>
      {/* New Year Banner */}
      <div className="bg-primary py-3 text-center text-white">
        <p>
          🎉 🎊 Le club des Galopins vous souhaite une bonne et heureuse année
          2025 🎊 🎉
        </p>
      </div>

      {/* Logo */}
      <div className="flex items-center justify-between px-6 py-4 md:px-10 md:py-6 xl:mx-auto xl:max-w-screen-xl xl:px-16 xl:py-4 ">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo Galopins"
            className="w-24 text-white lg:w-28"
          />
        </Link>

        {/* Nav */}
        <nav className="hidden md:absolute md:left-0 md:flex md:w-full md:justify-center">
          <ul className="flex gap-1">
            {navData.map((link) => (
              <li
                key={link.name}
                className={link.name === "Photos" ? "md:hidden" : ""}
              >
                <Link
                  href={link.href}
                  className={`rounded-full px-3 py-1.5 font-semibold hover:bg-primary hover:text-white lg:px-6 lg:py-2 ${
                    pathname === link.href ? "bg-primary text-white" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button asChild className="z-30 hidden md:flex">
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
