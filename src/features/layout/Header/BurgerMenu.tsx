import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useEffect } from "react";
import navData from "../../../../data/navData";
import logo from "../../../../public/images/logoGalopins.png";

interface BurgerMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function BurgerMenu({ isOpen, setIsOpen }: BurgerMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Disable scroll is BurgerMenu is open
    if (isOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }

    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      {/* Open BurgerMenu */}
      <button
        className="font-bold"
        onClick={() => setIsOpen(true)}
        aria-label="Ouvrir le menu mobile"
      >
        MENU
      </button>

      <nav
        className={`fixed top-0 min-h-screen w-full flex-col bg-white  text-center transition-all duration-500 ease-in-out  ${
          isOpen ? "left-0" : "left-full"
        }`}
      >
        {/* Close BurgerMenu */}
        <button
          className="flex w-full justify-end p-6 text-sm font-bold md:px-10"
          onClick={() => setIsOpen(false)}
          aria-label="Fermer le menu mobile"
        >
          FERMER
        </button>

        {/* Logo */}
        <Image src={logo} alt="Logo Galopins" className="mx-auto mt-32 w-60" />

        {/* Page link lists */}
        <ul className="mt-8 flex flex-col gap-3 p-4 text-lg font-medium">
          {navData.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={
                  pathname === link.href ? "border-b-2 border-black" : ""
                }
                onClick={() => setIsOpen(false)}
              >
                {link.burgerMenuName}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
