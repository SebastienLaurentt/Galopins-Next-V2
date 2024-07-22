"use client";

import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { redirect, useParams } from "next/navigation";

const AccountNewsUpdate = () => {
  const { id } = useParams(); // Obtenir l'ID de la nouvelle depuis l'URL
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loadingData, setLoadingData] = useState(true); // Ajouter un état de chargement pour les données
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");

        if (!token) {
          console.error("Le jeton n'est pas disponible.");
          return;
        }

        const response = await axios.get(
          `https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/infos/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const dataNouvelle = response.data.data;

        setDate(dataNouvelle.date || "");
        setTitle(dataNouvelle.title || "");
        setDescription(dataNouvelle.description || "");

        setLoadingData(false);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de la nouvelle :",
          error
        );
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoadingSubmit(true);
      const token = Cookies.get("token");

      if (!token) {
        console.error("Le jeton n'est pas disponible.");
        return;
      }

      const response = await axios.put(
        `https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/infos/${id}`,
        {
          date,
          title,
          description,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

      // Afficher le message de succès
      setShowSuccessMessage(true);

      // Masquer le message de succès après 2 secondes et rediriger
      setTimeout(() => {
        setShowSuccessMessage(false);
        redirect("/account");
      }, 2000);
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la nouvelle :", error);
    } finally {
      setLoadingSubmit(false);
    }
  };

  return (
    <div className="p-4">
      <main className="text-white">
        <h3 className="m-8 mx-auto text-center text-black md:w-[400px] lg:w-[500px]">
          Formulaire de mise à jour de l&apos;information
        </h3>

        {loadingData ? (
          <div className="flex flex-col items-center gap-y-4">
            <p className="text-black">
              Chargement des données de l&apos;information
            </p>
          </div>
        ) : (
          <div className="mt-8 flex flex-col items-center justify-center p-4">
            <form
              onSubmit={handleSubmit}
              className="flex w-[300px] flex-col gap-y-4 rounded-md bg-slate-900 p-8 text-center md:w-[400px] lg:w-[500px]"
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
                  placeholder="Titre de la nouvelle"
                  onChange={(e) => setTitle(e.target.value)}
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
              {/* Conditionally render the Loader based on the loading state */}
              {
                loadingSubmit ? (
                  <div className="flex justify-center">
                    <span>Chargement...</span>
                  </div>
                ) : null /* Ne pas rendre le bouton si loadingSubmit est vrai */
              }
              {/* Conditionally render the success message */}
              {showSuccessMessage && (
                <span className="mt-2 text-md text-green-600">
                  Info mise à jour ! Redirection...
                </span>
              )}
              {/* Render the button outside the form to prevent it from re-rendering */}
              {!loadingSubmit && !showSuccessMessage && (
                <Button className="w-full">Mettre à jour</Button>
              )}
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default AccountNewsUpdate;
