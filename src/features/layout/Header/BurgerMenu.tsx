import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

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
        <Menu  />
      </button>

      <nav
        className={`flex-col top-0 w-full fixed bg-slate-950 text-center transition-all duration-500 ease-in-out  ${
          isOpen ? "left-0" : "left-full"
        }`}
      >
        {/* Close button */}
        <X
          className="ml-auto mr-6 mt-4"
          onClick={() => setIsOpen(false)}
          aria-label="Fermer le menu mobile"
        />

        <div className="">
          {/* Headline */}

          {/* Menu */}
          <ul className="flex flex-col gap-4 p-4 min-h-screen font-bold ">
            {menuItems.map((item: IMenuItem, key) => (
              <li key={key} >
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
        </div>
      </nav>
    </>
  );
}
