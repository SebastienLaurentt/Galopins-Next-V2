"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../../public/Logo-Black.svg";
import BurgerMenu from "./BurgerMenu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute text-white w-full cursor-pointer z-10 ">
      <div className="flex items-center px-6 py-4 justify-between  ">
        <Link href="/">
          <Image src={logo} alt="Logo Galopins" className="w-16" />
        </Link>
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};
