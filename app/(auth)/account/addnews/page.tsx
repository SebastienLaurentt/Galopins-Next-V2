"use client";

import { useAuth } from "@/components/AccountComponent/Auth/Auth";
import Input from "@/components/AccountComponent/Form/Input";
import Textarea from "@/components/AccountComponent/Form/Textarea";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AccountNewsAdd = () => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { isLogged } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLogged) {
      // Redirigez l'utilisateur vers la page de connexion s'il n'est pas connecté
      router.push("/login");
      return;
    }
  }, [isLogged, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Get token cookie for Authorization
      const token = Cookies.get("token");
      console.log(token);

      // Error gestion if token not available
      if (!token) {
        console.error("Le token n'est pas disponible.");
        return;
      }

      // POST request to add new Info
      const response = await axios.post(
        "https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/infos",
        {
          date,
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Reset form after submit success
      setDate("");
      setTitle("");
      setDescription("");

      console.log(response);

      router.push("/account");
    } catch (error) {
      console.error("Erreur lors de l'ajout d'informations :", error);
    }
  };

  return (
    <div className=" p-4 ">
      <main className="text-white">
        <h3 className="m-8  text-center text-black">
          Formulaire d&apos;ajout d&apos;une nouvelle information
        </h3>
        <div className=" mt-16 flex flex-col items-center justify-center  p-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-4 rounded-md bg-slate-900 p-8 text-center"
          >
            <Input
              inputName="Date"
              value={date}
              setter={setDate}
              placeholder="JJ/MM/AAAA"
              isDate={true}
            />
            <Input
              inputName="Titre"
              value={title}
              setter={setTitle}
              placeholder="Titre de l'information..."
            />
            <Textarea
              textareaName="Description"
              value={description}
              onChange={setDescription}
              placeholder="Description de l'information..."
            />
            <Button className="w-full">Ajouter Information</Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AccountNewsAdd;
