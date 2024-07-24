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
    <header className=" flex w-full flex-row items-center justify-center gap-x-2 px-6 py-3 md:px-10 xl:mx-auto xl:max-w-screen-xl xl:px-16 ">
      <ul className="mr-auto flex gap-x-2">
        <li>
          <Button variant="secondary" asChild>
            <Link href="/" aria-label="Retourner sur le site des Galopins">
              Retour Site
            </Link>
          </Button>
        </li>
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
      </ul>
      <span className="absolute hidden text-lg font-semibold lg:flex">
        Espace Administrateur
      </span>
      <Button asChild onClick={handleLogout} variant="destructive">
        <Link href="/" aria-label="Se déconnecter de l'espace administrateur">
          Déconnexion
        </Link>
      </Button>
    </header>
  );
}

export default AccountHeader;
