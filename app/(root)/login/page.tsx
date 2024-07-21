"use client";

import { useAuth } from "@/components/AccountComponent/Auth/Auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import Cookies from "js-cookie";
import { ArrowLeftToLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import imgEquipe from "/public/images/PhotoEquipe.png";
import logo from "/public/images/logoGalopins.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<null | string>(null);
  const [showPassword, setShowPassword] = useState(false); // État pour gérer l'affichage du mot de passe

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { isLogged, login } = useAuth();

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/login",
        {
          username: username,
          password: password,
        }
      );

      // Récupérez le token depuis la réponse de l'API
      const token = response.data.token;
      console.log(token);

      // Enregistrez le token dans un cookie avec une expiration d'une heure
      Cookies.set("token", token, { expires: 1 / 24 }); // 1/24 représente 1 heure

      // User data
      console.log("Réponse de la connexion:", response.data);

      // Redirection
      login();
      router.push("/account");

      // Si une erreur se produit
    } catch (error) {
      console.error("Erreur de connexion:", error);
      setError("Nom d'utilisateur ou mot de passe incorrect.");
    }

    // Réinitialisez le nom d'utilisateur et le mot de passe après la soumission
    setUsername("");
    setPassword("");
  };

  return (
    <main className="flex flex-col-reverse items-center  text-white md:flex-col xl:mx-40 xl:flex-row">
      <div className="mt-4 flex w-full flex-col items-center text-foreground md:mb-4 md:mt-0 xl:mb-0 xl:w-1/2 xl:items-start xl:p-8">
        <div className=" w-[300px] md:w-[400px]">
          <Image
            src={logo}
            alt="Logo Galopins"
            className="mb-4 hidden w-24 text-white lg:w-28 xl:flex"
          />
          <div className="mb-6 flex flex-col gap-y-2 text-center xl:text-left">
            <span className=" text-2xl font-bold leading-[40px]  md:text-3xl md:leading-[44px] xl:text-4xl xl:leading-[48px]">
              Les Galopins de Montélimar
            </span>
            <span className="text-md font-medium xl:text-lg">
              Espace Administrateur{" "}
            </span>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-y-3 xl:items-start "
          >
            <div className="flex w-full flex-col items-center space-y-1 xl:items-start">
              <Label htmlFor="username">Nom d&apos;utilisateur</Label>
              <Input
                type="username"
                id="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError(null);
                }}
                required
              />
            </div>

            <div className="flex w-full flex-col items-center space-y-1 xl:items-start">
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative w-full">
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(null);
                  }}
                  required
                />
                {/* Icône pour afficher/masquer le mot de passe */}
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center p-2 text-black"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <BiHide /> : <BiShow />}
                </button>
              </div>
            </div>

            {error && <p className="text-red-500">{error}</p>}
            <Button className="w-full">Se connecter</Button>
            <Link
              href="/"
              className="flex flex-row items-center gap-x-1 hover:font-bold"
            >
              <ArrowLeftToLine size={20} /> Retour site
            </Link>
          </form>
        </div>
      </div>

      <div className="w-full xl:w-3/4 xl:p-4">
        <Image
          src={imgEquipe}
          alt="Carrières d'Ocre de Rustrel"
          className="lg:rounded-lg"
          priority
          placeholder="blur"
        />
      </div>
    </main>
  );
}
