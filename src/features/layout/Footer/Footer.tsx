"use client";

import { anton } from "@/lib/font";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();

  const footerVisibility = /^\/(login|account)/.test(pathname) ? "hidden" : "";

  return (
    <footer
      className={` ${footerVisibility}  bg-accent pb-6 pt-8 text-white  `}
    >
      <div className="flex flex-col gap-y-5 md:px-10 xl:mx-auto xl:max-w-screen-xl  xl:px-16 ">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between ">
          <div className="mb-5 flex flex-col items-center md:mb-0 md:w-1/2 md:items-start">
            <span
              className={`${anton} w-[280px] text-center text-xl font-semibold leading-9 md:mb-1 md:w-fit md:text-left md:text-2xl xl:text-3xl xl:leading-10`}
            >
              LES GALOPINS DE MONTELIMAR
            </span>
            <span className="md:w-[250px] xl:text-md xl:leading-6">
              Club de randonnée pédestre en Rhônes Alpes{" "}
            </span>
          </div>
          <ul className="mx-auto flex w-[240px] flex-wrap justify-center gap-x-4 gap-y-1 md:mx-0 md:w-[160px] md:justify-end xl:w-[200px] xl:text-md ">
            <li>
              <Link href="/" className="xl:hover:font-bold">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/club" className="xl:hover:font-bold">
                Club
              </Link>
            </li>
            <li>
              <Link href="/parcours" className="xl:hover:font-bold">
                Parcours
              </Link>
            </li>
            <li>
              <Link href="/photos" className="xl:hover:font-bold">
                Photos
              </Link>
            </li>
            <li>
              <Link href="/actualites" className="xl:hover:font-bold">
                Actualites
              </Link>
            </li>
            <li>
              <Link href="/adhesion" className="xl:hover:font-bold">
                Adhésion
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between text-[14px]  md:text-sm  ">
          <span className="">@2024 - Les Galopins</span>
          <span className="">
            <Link href="/mentions"> Mentions légales </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};
