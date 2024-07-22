"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import imageCompression from "browser-image-compression";
import Cookies from "js-cookie";
import { ImagePlus } from "lucide-react";
import { redirect, useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

const AccountRandoUpdate = () => {
  const { id } = useParams(); // Récupère l'ID de la randonnée depuis l'URL
  const [date, setDate] = useState("");
  const [destination, setDestination] = useState("");
  const [memberNumber, setMemberNumber] = useState("");
  const [elevation, setElevation] = useState("");
  const [distance, setDistance] = useState("");
  const [pictures, setPictures] = useState<string[]>([]);
  const [loadingData, setLoadingData] = useState(true); // Ajout d'un état de chargement pour les données
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [loadingImages, setLoadingImages] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");

        if (!token) {
          console.error("Le token n'est pas disponible.");
          return;
        }

        const response = await axios.get(
          `https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/randos/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const randoData = response.data.data; // Remplacez par la structure de données réelle de votre API

        setDate(randoData.date || "");
        setDestination(randoData.destination || "");
        setMemberNumber(randoData.memberNumber || "");
        setElevation(randoData.elevation || "");
        setDistance(randoData.distance || "");

        // Chargez également les images existantes
        setPictures(randoData.pictures || []);

        setLoadingData(false);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de la randonnée :",
          error
        );
      }
    };

    fetchData();
  }, [id]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoadingImages(true);
    const files = e.target.files;

    if (files) {
      const imageArray = await Promise.all(
        Array.from(files).map(async (file) => {
          try {
            const compressedImage = await imageCompression(file, {
              maxSizeMB: 0.1,
            });
            const base64Image = await convertToBase64(compressedImage);
            return base64Image;
          } catch (error) {
            console.error("Erreur lors de la compression de l'image :", error);
            return null;
          }
        })
      );

      const filteredImages = imageArray.filter(
        (image) => image !== null
      ) as string[];

      setPictures(filteredImages);
      setLoadingImages(false);
    }
  };

  const convertToBase64 = (file: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const renderSelectedImageCount = () => {
    if (!loadingSubmit && !showSuccessMessage && pictures.length === 0) {
      return (
        <span className="mt-2 flex flex-row justify-center text-sm text-red-500">
          Aucune image sélectionnée
        </span>
      );
    } else if (pictures.length > 0) {
      return (
        <span className="mt-2 flex flex-row justify-center text-sm text-green-600">
          {pictures.length}{" "}
          {pictures.length === 1
            ? "image sélectionnée"
            : "images sélectionnées"}
        </span>
      );
    } else {
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoadingSubmit(true);
      const token = Cookies.get("token");

      if (!token) {
        console.error("Le token n'est pas disponible.");
        return;
      }

      const response = await axios.put(
        `https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/randos/${id}`,
        {
          date,
          destination,
          memberNumber,
          elevation,
          distance,
          pictures,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

      // Show success message
      setShowSuccessMessage(true);

      // Hide success message after 2 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
        router.push("/account");
      }, 3000);
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour des informations de la randonnée :",
        error
      );
    } finally {
      setLoadingSubmit(false);
    }
  };

  return (
    <div className="p-4">
      <main className="text-white">
        <h3 className="m-1 mx-auto w-[500px] text-center text-black">
          Formulaire de mise à jour de la randonnée
        </h3>

        {loadingData ? (
          <div className="flex flex-col items-center gap-y-4">
            <RotatingLines
              strokeColor="green"
              strokeWidth="5"
              animationDuration="0.5"
              width="64"
              visible={true}
            />
            <p className="text-black">
              Chargement des informations de la randonnée...
            </p>
          </div>
        ) : (
          <div className="mt-3 flex flex-col items-center justify-center p-4">
            <form
              onSubmit={handleSubmit}
              className="flex w-[300px] flex-col gap-y-4 rounded-md bg-slate-900 px-8 py-4 text-center md:w-[400px] lg:w-[500px]"
            >
              <div className="space-y-1 text-left">
                <Label>Date</Label>
                <Input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="JJ/MM/AAAA"
                  isDate={true}
                />
              </div>
              <div className="space-y-1 text-left">
                <Label>Destination</Label>
                <Input
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Destination de la randonnée..."
                />
              </div>
              <div className="space-y-1 text-left">
                <Label>Nombre de Galopins</Label>
                <Input
                  value={memberNumber}
                  onChange={(e) => setMemberNumber(e.target.value)}
                  placeholder="Nombre de Galopins..."
                  isNumber
                />
              </div>
              <div className="space-y-1 text-left">
                <Label>Dénivelé (en m)</Label>
                <Input
                  value={elevation}
                  onChange={(e) => setElevation(e.target.value)}
                  placeholder="Dénivelé de la randonnée..."
                  isNumber
                />
              </div>
              <div className="space-y-1 text-left">
                <Label>Distance (en km)</Label>
                <Input
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  placeholder="Distance de la randonnée..."
                  isNumber
                />
              </div>

              <div>
                <div className="space-y-1 text-left">
                  <Label>
                    Photos
                    <div className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-white ">
                      <ImagePlus size={48} />
                      <span className="mx-auto mt-2 w-[260px] text-center text-sm font-medium leading-4">
                        <span className="font-bold">Cliquer</span> pour{" "}
                        <span className="font-bold">modifier</span> les photos
                        séléctionnées
                      </span>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                      multiple
                    />
                  </Label>
                </div>

                {/* Conditionally render the Loader based on the loading state */}
                {loadingImages && (
                  <span className="flex justify-center">
                    <RotatingLines
                      strokeColor="green"
                      strokeWidth="5"
                      animationDuration="0.5"
                      width="32"
                      visible={true}
                    />
                  </span>
                )}
                {/* Display number of images selected */}
                {renderSelectedImageCount()}
              </div>

              {/* Conditionally render the Loader based on the loading state */}
              {
                loadingSubmit ? (
                  <div className="flex justify-center">
                    <RotatingLines
                      strokeColor="green"
                      strokeWidth="5"
                      animationDuration="0.5"
                      width="32"
                      visible={true}
                    />
                  </div>
                ) : null /* Don't render the button if loadingSubmit is true */
              }
              {/* Conditionally render the success message */}
              {showSuccessMessage && (
                <span className="mt-2 text-sm text-green-600">
                  Randonnée mise à jour ! Vous allez être redirigé.
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

export default AccountRandoUpdate;
