'use client'

import { DropdownMenu } from "@radix-ui/react-dropdown-menu"
import BurgerMenu from "./BurgerMenu"
import { useState } from "react";

export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='border-b border-b-accent '>
      <div className="flex items-center px-6 py-4 justify-between bg-green-600">
        <h2 className="text-2xl font-bold"> Les Galopins </h2>
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  )
}
