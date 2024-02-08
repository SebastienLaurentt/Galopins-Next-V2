"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../../public/Logo-Black.svg";
import BurgerMenu from "./BurgerMenu";
import { usePathname } from 'next/navigation'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()

  const headerBgColor = pathname === "/" ? "" : "bg-slate-950";
  const headerPosition = pathname === "/" ? "absolute" : "";

  return (
    <header className={`${headerPosition} text-white w-full z-10 ${headerBgColor}`}>
      <div className="flex items-center px-6 md:px-10 xl:px-16 2xl:max-w-[1280px] 2xl:mx-auto py-4 justify-between">
        <Link href="/">
          <Image src={logo} alt="Logo Galopins" className="w-16 md:w-20 lg:w-24" />
        </Link>

        <nav className="hidden lg:block lg:text-md font-medium">
          <ul className="flex gap-4">
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/club">Le Club</Link>
            </li>
            <li>
              <Link href="/parcours">Les Parcours</Link>
            </li>
            <li>
              <Link href="/photos">Nos Photos</Link>
            </li>
            <li>
              <Link href="/rejoindre">Nous Rejoindre</Link>
            </li>
          </ul>
        </nav>

        <div className="lg:hidden">
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        
      </div>
    </header>
  );
};
