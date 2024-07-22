"use client";

import { useAuth } from "@/components/AccountComponent/Auth/Auth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import Cookies from "js-cookie";
import { redirect, useRouter } from "next/navigation";

import { useState } from "react";

const AccountNewsAdd = () => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

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

      router.push("/account");
    } catch (error) {
      console.error("Erreur lors de l'ajout d'informations :", error);
    }
  };

  return (
    <div className="p-4">
      <main className="text-white">
        <h3 className="m-8 mx-auto text-center text-black md:w-[400px] lg:w-[500px]">
          Formulaire d&apos;ajout d&apos;une nouvelle information
        </h3>
        <div className="mt-16 flex flex-col items-center justify-center p-4">
          <form
            onSubmit={handleSubmit}
            className="flex w-[300px] flex-col gap-y-4 rounded-md bg-slate-900 p-8 text-center md:w-[400px] lg:w-[500px]"
          >
            <div className="space-y-1 text-left">
              <Label>Date</Label>
              <Input
                value={date}
                placeholder="JJ/MM/AAAA"
                onChange={(e) => setDate(e.target.value)}
                isDate
              />
            </div>
            <div className="space-y-1 text-left">
              <Label>Titre</Label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Titre de l'information..."
              />
            </div>
            <div className="space-y-1 text-left">
              <Label>Description</Label>
              <Textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="Description de l'information..."
                rows={5}
              />
            </div>
            <Button className="w-full">Ajouter Information</Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AccountNewsAdd;
