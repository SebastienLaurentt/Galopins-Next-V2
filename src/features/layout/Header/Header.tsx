"use client";

import { useState } from "react";
import BurgerMenu from "./BurgerMenu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-950 text-white">
      <div className="flex items-center px-6 py-4 justify-between">
        <span className="font-bold"> Les Galopins </span>
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};
