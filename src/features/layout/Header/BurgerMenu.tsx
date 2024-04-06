import { X } from "lucide-react";
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
        className=""
        onClick={() => setIsOpen(true)}
        aria-label="Ouvrir le menu mobile"
      >
        Menu
      </button>

      <nav
        className={`fixed top-0 min-h-screen w-full flex-col bg-white  text-center transition-all duration-500 ease-in-out  ${
          isOpen ? "left-0" : "left-full"
        }`}
      >
        {/* Close BurgerMenu */}
        <button
          className="flex w-full justify-end px-6 py-4 md:px-10"
          onClick={() => setIsOpen(false)}
          aria-label="Fermer le menu mobile"
        >
          Fermer
        </button>

        {/* Logo */}
        <Image src={logo} alt="Logo Galopins" className="mx-auto mt-16 w-40" />

        {/* Page link lists */}
        <ul className="mt-8 flex flex-col gap-4 p-4 text-md font-semibold md:text-lg">
          {navData.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={
                  pathname === link.href
                    ? "border-b-2 border-black font-extrabold"
                    : ""
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
