"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "../../../../public/Logo-Black.svg";
import BurgerMenu from "./BurgerMenu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute text-white w-screen z-10 ">
      <div className="flex items-center px-6 py-4 justify-between ">
        <Image src={logo} alt="Logo Galopins" className="w-16" />
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};
