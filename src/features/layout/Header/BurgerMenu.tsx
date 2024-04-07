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
        Menu
      </button>

      <nav
        className={`fixed left-0 top-0 flex h-screen w-full flex-col justify-between  bg-white pb-28 pt-3 text-center transition-all duration-500 ease-out md:px-10  ${
          isOpen ? "translate-y-0" : "translate-y-full opacity-0"
        }`}
      >
        <div
          className={`flex items-center justify-between px-6 font-bold transition-opacity delay-500 duration-1000 ease-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={logo} alt="Logo Galopins" className="w-24" />
          {/* Close BurgerMenu */}
          <button
            className=" "
            onClick={() => setIsOpen(false)}
            aria-label="Fermer le menu mobile"
          >
            Fermer
          </button>
        </div>

        <div className="">
          {/* Page link lists */}
          <ul
            className={` mb-8 flex  flex-col px-6 text-right text-3xl font-medium leading-[52px] delay-500 duration-700 ease-out ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            {navData.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={
                    pathname === link.href ? "border-b-4 border-black" : ""
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.burgerMenuName}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className={`flex flex-col items-end bg-secondary py-3 text-lg italic leading-7 text-white delay-500 duration-500 ease-out ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="px-6">Club de randonnée</span>
            <span className="px-6">Montélimar</span>
          </div>
        </div>
      </nav>
    </>
  );
}
