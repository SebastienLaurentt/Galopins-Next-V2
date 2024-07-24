"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";

const addNews = async (newsData: { date: string; title: string; description: string }) => {
  const token = Cookies.get("token");

  if (!token) {
    throw new Error("Token is not available");
  }

  const response = await fetch("https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/infos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newsData),
  });

  if (!response.ok) {
    throw new Error("Failed to add news");
  }

  return response.json();
};

const AccountNewsAdd = () => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const { mutate: addNewsMutation, isPending } = useMutation({
    mutationFn: addNews,
    onSuccess: () => {
      toast({
        title: "Information ajoutée avec succès !",
      });
      setDate("");
      setTitle("");
      setDescription("");
      router.push("/account");
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Erreur lors de l'ajout de l'information",
        description: error.message,
      });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewsMutation({ date, title, description });
  };

  return (
    <div className="p-4">
      <main className="text-white">
        <h3 className="m-8 mx-auto text-center text-black md:w-[400px] lg:w-[500px]">
          Ajout d&apos;une nouvelle information
        </h3>
        <div className="mt-12 flex flex-col items-center justify-center p-4">
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
            <Button className="w-full" type="submit" disabled={isPending}>
              {isPending ? "Chargement..." : "Ajouter Information"}
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AccountNewsAdd;
