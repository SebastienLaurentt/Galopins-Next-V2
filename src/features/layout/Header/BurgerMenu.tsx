import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useEffect } from "react";
import navData from "../../../../data/navData";
import logo from "../../../../public/images/logoGalopins.png";
interface IBurgerMenu {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function BurgerMenu({ isOpen, setIsOpen }: IBurgerMenu) {
  const pathname = usePathname();

  useEffect(() => {
    // Désactiver le défilement de la page principale lorsque le menu est ouvert
    if (isOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }

    // Nettoyage de l'effet
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <button
        className=""
        onClick={() => setIsOpen(true)}
        aria-label="Ouvrir le menu mobile"
      >
        Menu
      </button>

      <nav
        className={`flex-col min-h-screen top-0 w-full fixed bg-white text-center transition-all duration-500 ease-in-out  ${
          isOpen ? "left-0" : "left-full"
        }`}
      >
        <div className=" px-6 md:px-10 py-4 mb-12">
          <X
            className="ml-auto  h-8 md:h-10 w-8 md:w-10"
            onClick={() => setIsOpen(false)}
            aria-label="Fermer le menu mobile"
          />
        </div>

        <Image
          src={logo}
          alt="Logo Galopins"
          className="mt-16 w-40 h-20 md:w-48 mx-auto"
        />

        <ul className="flex flex-col gap-4 p-4 font-medium text-md md:text-lg mt-16">
          {navData.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={
                  pathname === link.href
                    ? "border-b-2 border-black font-bold"
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
