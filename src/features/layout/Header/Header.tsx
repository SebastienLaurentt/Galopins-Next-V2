'use client'

import { DropdownMenu } from "@radix-ui/react-dropdown-menu"
import BurgerMenu from "./BurgerMenu"
import { useState } from "react";

export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='border-b border-b-accent '>
      <div className="flex items-center px-6 py-4 justify-between bg-green-600">
        <span className="font-bold"> Les Galopins </span>
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  )
}
