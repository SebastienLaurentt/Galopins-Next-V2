"use client";

import { anton } from "@/lib/font";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();

  const footerVisibility = /^\/(login|account)/.test(pathname) ? "hidden" : "";

  return (
    <footer
      className={` ${footerVisibility}  bg-accent pb-6 pt-8 text-white xl:pb-10 xl:pt-12  `}
    >
      <div className="flex flex-col gap-y-5 px-6 md:px-10 xl:mx-auto xl:max-w-screen-xl  xl:px-16 ">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between ">
          <div className="mb-5 flex flex-col items-center md:mb-0 md:w-1/2 md:items-start">
            <span
              className={`${anton} w-[280px] text-center text-xl font-semibold leading-9 md:mb-1 md:w-fit md:text-left md:text-2xl xl:mb-2 xl:text-3xl xl:leading-10`}
            >
              LES GALOPINS DE MONTELIMAR
            </span>
            <span className="text-center md:w-[250px] md:text-left xl:text-md xl:leading-6">
              Club de randonnée pédestre en Rhônes Alpes{" "}
            </span>
          </div>
          <ul className="mx-auto flex w-[240px] flex-wrap justify-center gap-x-4 gap-y-1 md:mx-0 md:w-[180px] md:justify-end xl:w-[250px] xl:text-md ">
            <li className="md:w-[75px] xl:w-[100px]">
              <Link href="/" className=" xl:hover:font-bold">
                Accueil
              </Link>
            </li>
            <li className="md:w-[75px] xl:w-[100px]">
              <Link href="/club" className="xl:hover:font-bold">
                Club
              </Link>
            </li>
            <li className="md:w-[75px] xl:w-[100px]">
              <Link href="/parcours" className="xl:hover:font-bold">
                Parcours
              </Link>
            </li>
            <li className="md:w-[75px] xl:w-[100px]">
              <Link href="/photos" className="xl:hover:font-bold">
                Photos
              </Link>
            </li>
            <li className="md:w-[75px] xl:w-[100px]">
              <Link href="/actualites" className="xl:hover:font-bold">
                Actualités
              </Link>
            </li>
            <li className="md:w-[75px] xl:w-[100px]">
              <Link href="/adhesion" className="xl:hover:font-bold">
                Adhésion
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between text-[14px]  md:text-sm  ">
          <span>&copy; {new Date().getFullYear()} - Les Galopins</span>
          <span>
            <Link href="/mentions"> Mentions légales </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};
