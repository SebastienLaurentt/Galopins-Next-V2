"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useAuth } from "./Auth/Auth";

function AccountHeader() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    logout();
  };

  return (
    <header className=" flex w-full flex-row items-center  justify-between gap-x-2 px-2 py-4  md:px-10 lg:py-6 xl:mx-auto xl:max-w-screen-xl xl:px-16 ">
      <span className="hidden font-bold md:flex  md:text-md">
        Espace Administrateur
      </span>
      <ul className="flex w-full flex-row justify-between gap-x-2 md:w-fit md:justify-end">
        <li>
          <Button variant="secondary" asChild>
            <Link
              href="/account"
              aria-label="Allez sur l'espace administrateur"
            >
              Tableau de Bord
            </Link>
          </Button>
        </li>
        <li>
          <Button asChild onClick={handleLogout} variant="destructive">
            <Link
              href="/"
              aria-label="Se déconnecter de l'espace administrateur"
            >
              Déconnexion
            </Link>
          </Button>
        </li>
      </ul>
    </header>
  );
}

export default AccountHeader;
