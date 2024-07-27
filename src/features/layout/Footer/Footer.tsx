'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Footer = () => {

  const pathname = usePathname();

  const footerVisibility = /^\/(login|account)/.test(pathname) ? "hidden" : "";

  return (
    <footer className={` ${footerVisibility} bg-primary text-white`}>
      <div className="flex items-center justify-between px-6 py-4 text-xs md:px-10 md:text-sm xl:mx-auto xl:max-w-screen-xl xl:px-16 ">
        <span className="">@2024 - Les Galopins</span>
        <span className="">
          <Link href="/mentions"> Mentions légales </Link>
        </span>
      </div>
    </footer>
  );
};
