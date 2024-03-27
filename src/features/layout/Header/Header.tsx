"use client";

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

  const headerBgColor = pathname === "/" ? "" : "bg-white";
  const headerPosition = pathname === "/" ? "absolute bg-white" : "";

  return (
    <header
      className={`${headerPosition} z-10 w-full font-medium ${headerBgColor}`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-6 py-2 md:px-10 xl:mx-auto xl:max-w-screen-xl xl:px-16 ">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo Galopins"
            className="w-20 text-white md:w-24 lg:w-28"
          />
        </Link>

        {/* Nav */}
        <nav className="hidden lg:block lg:text-md">
          <ul className="flex gap-4">
            {navData.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={
                    pathname === link.href
                      ? "border-b-2 border-black font-bold"
                      : ""
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* BurgerMenu Component */}
        <div className="flex h-8 items-center font-bold md:h-10 lg:hidden ">
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
};
