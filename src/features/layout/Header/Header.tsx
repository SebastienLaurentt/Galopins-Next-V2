"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import navData from "../../../../data/navData";
import logo from "../../../../public/images/logoGalopins.svg";
import BurgerMenu from "./BurgerMenu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const headerBgColor = pathname === "/" ? "" : "bg-secondary";
  const headerPosition = pathname === "/" ? "absolute " : "";

  return (
    <header
      className={`${headerPosition} text-white font-bold w-full z-10 ${headerBgColor}`}
    >
      <div className="flex items-center px-6 md:px-10 xl:px-16 xl:max-w-[1280px] xl:mx-auto py-4 justify-between ">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo Galopins"
            className="w-20 md:w-24 lg:w-28 text-white"
          />
        </Link>

        <nav className="hidden lg:block lg:text-md font-medium">
          <ul className="flex gap-4">
            {navData.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={
                    pathname === link.href
                      ? "border-b-2 border-white "
                      : ""
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="h-8 md:h-10 flex items-center lg:hidden ">
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
};
