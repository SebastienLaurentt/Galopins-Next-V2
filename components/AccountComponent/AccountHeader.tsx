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
    <header className=" flex w-full flex-row items-center  justify-between gap-x-2 px-2 py-4 md:justify-center md:px-10 lg:py-6 xl:mx-auto xl:max-w-screen-xl xl:px-16 ">
      <Button variant="secondary" asChild className="md:mr-auto">
        <Link href="/account" aria-label="Allez sur l'espace administrateur">
          Tableau de Bord
        </Link>
      </Button>
      <span className="absolute hidden font-semibold md:flex md:text-md lg:text-lg">
        Espace Administrateur Galopins
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
