import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import logo from "../../../../public/Logo-Black.svg";

interface IBurgerMenu {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface IMenuItem {
  name: string;
  slug: string;
}

const menuItems = [
  {
    name: "Accueil",
    slug: "/",
  },
  {
    name: "Le club",
    slug: "/club",
  },
  {
    name: "Les parcours",
    slug: "/parcours",
  },
  {
    name: "Nos Photos",
    slug: "/photos",
  },
  {
    name: "Nous rejoindre",
    slug: "/rejoindre",
  },
];

export default function BurgerMenu({ isOpen, setIsOpen }: IBurgerMenu) {
  return (
    <>
      {/* Button Burger Menu */}
      <button
        className=""
        onClick={() => setIsOpen(true)}
        aria-label="Ouvrir le menu mobile"
      >
        <Menu color="#fff" className="h-8 md:h-10 w-8 md:w-10" />
      </button>

      <nav
        className={`flex-col min-h-screen top-0 w-full fixed bg-slate-950 text-center transition-all duration-500 ease-in-out  ${
          isOpen ? "left-0" : "left-full"
        }`}
      >
        {/* Close button */}
        <div className=" px-6 md:px-10 py-4 mb-12">
          <X
            className="ml-auto  mt-4 h-8 md:h-10 w-8 md:w-10"
            onClick={() => setIsOpen(false)}
            aria-label="Fermer le menu mobile"
          />
        </div>

        {/* Menu */}
        <ul className="flex flex-col gap-4 p-4 font-bold text-md md:text-lg">
          {menuItems.map((item: IMenuItem, key) => (
            <li key={key}>
              <Link
                href={item.slug}
                className=""
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <Image
          src={logo}
          alt="Logo Galopins"
          className="w-40 md:w-60 mx-auto"
        />
      </nav>
    </>
  );
}
