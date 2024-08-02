"use client";

import AccountSectionHeader from "@/components/AccountComponent/AccountSectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";

interface NewsData {
  date: string;
  title: string;
  description: string;
}

const updateNews = async ({
  id,
  data,
}: {
  id: string;
  data: NewsData;
}): Promise<boolean> => {
  const token = Cookies.get("token");

  if (!token) {
    throw new Error("Token is not available");
  }

  try {
    const response = await fetch(`https://galopinsbackv2.onrender.com/api/infos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error("Update news error:", error);
    throw error;
  }
};

interface NewsFormUpdateProps {
  newsData: NewsData;
  id: string;
}

const NewsFormUpdate: React.FC<NewsFormUpdateProps> = ({ newsData, id }) => {
  const [date, setDate] = useState<string>(newsData.date);
  const [title, setTitle] = useState<string>(newsData.title);
  const [description, setDescription] = useState<string>(newsData.description);

  const router = useRouter();

  const queryClient = useQueryClient();

  const { mutate: updateNewsMutation, isPending } = useMutation({
    mutationFn: (newData: NewsData) => updateNews({ id, data: newData }),
    onSuccess: () => {
      toast({
        title: "Information mise à jour avec succès !",
      });
      queryClient.invalidateQueries({ queryKey: ["news", id] });
      router.push("/account");
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Erreur lors de la mise à jour",
        description: error.message,
      });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateNewsMutation({ date, title, description });
  };

  return (
    <main className="text-white">
      <AccountSectionHeader title="Mise à jour de l'information" />
      <div className="mx-2 md:mx-6 xl:mx-auto xl:max-w-screen-xl xl:px-16">
        <div className="mt-2 flex flex-col items-center justify-center rounded-lg bg-slate-900 p-4">
          <form
            onSubmit={handleSubmit}
            className="flex w-[300px] flex-col gap-y-4  px-2 py-4 text-center md:w-[400px] md:px-4 lg:w-[500px]"
          >
            <div className="space-y-1 text-left">
              <Label>Date</Label>
              <Input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="JJ/MM/AAAA"
              />
            </div>
            <div className="space-y-1 text-left">
              <Label>Titre</Label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Titre de la nouvelle"
              />
            </div>
            <div className="space-y-1 text-left">
              <Label>Description</Label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description de la nouvelle"
                rows={5}
              />
            </div>
            <Button className="w-full" type="submit" disabled={isPending}>
              {isPending ? "Chargement..." : "Mettre à jour"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default NewsFormUpdate;
