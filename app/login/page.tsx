"use client";

import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import AccountLinkButton from "../../components/AccountComponent/Button/AccountLinkButton";
import ValidationButton from "../../components/AccountComponent/Button/ValidationButton";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<null | string>(null);

  const { isLogged, login } = useAuth();
  console.log(`Is Logged = ${isLogged}`);

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
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-4 bg-stone-300">
      <div className="rounded-md bg-slate-900 p-8">
        <h3 className="text-center">Les Galopins</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
          <div className="flex flex-col items-center gap-y-1">
            <label htmlFor="username">Nom d&apos;utilisateur</label>
            <input
              type="username"
              id="username"
              className="rounded-md p-1 text-black"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError(null);
              }}
              required
            />
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              className="rounded-md p-1 text-black"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(null);
              }}
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <ValidationButton buttonName="Se connecter" />
        </form>
      </div>

      <AccountLinkButton
        bgColor="bg-sky-800"
        href="/"
        linkName="Retourner sur les Galopins"
        logo={<BiArrowBack />}
        classname="md:hover:bg-sky-600"
      />
    </main>
  );
}
