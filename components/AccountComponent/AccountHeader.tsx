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
    <header className="p-4">
      <ul className="flex flex-wrap justify-center gap-4">
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
              Espace Administrateur
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
