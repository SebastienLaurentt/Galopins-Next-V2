"use client";

import { useAuth } from "@/components/AccountComponent/Auth/Auth";
import Input from "@/components/AccountComponent/Form/Input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import imageCompression from "browser-image-compression";
import Cookies from "js-cookie";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
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

  const { isLogged } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLogged) {
      // Redirigez l'utilisateur vers la page de connexion s'il n'est pas connecté
      router.push("/login");
      return;
    }

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
  }, [id, isLogged, router]);

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
        <span className="mt-2 text-md text-red-500">
          Aucune image sélectionnée
        </span>
      );
    } else if (pictures.length > 0) {
      return (
        <span className="mt-2 text-md text-green-600">
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
    <div className="p-4 ">
      <main className="text-white">
        <h3 className="m-4 mx-auto w-[500px] text-center text-black">
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
          <div className="mt-8 flex flex-col items-center justify-center p-4">
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
                inputName="Destination"
                value={destination}
                setter={setDestination}
                placeholder="Destination de la randonnée..."
              />
              <Input
                inputName="Nombre de Galopins"
                value={memberNumber}
                setter={setMemberNumber}
                placeholder="Nombre de Galopins..."
                isNumber={true}
              />
              <Input
                inputName="Dénivelé (en m)"
                value={elevation}
                setter={setElevation}
                placeholder="Dénivelé de la randonnée..."
                isNumber={true}
              />
              <Input
                inputName="Distance (en km)"
                value={distance}
                setter={setDistance}
                placeholder="Distance de la randonnée..."
                isNumber={true}
              />

              <div className="flex flex-col gap-y-1 text-md">
                <label>
                  Images
                  <div className="flex cursor-pointer flex-col items-center   justify-center">
                    <AiOutlinePicture size={64} />
                    <p className="mb-0">
                      <span className="text-md">
                        Cliquer pour modifier les images séléctionnées
                      </span>
                    </p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    multiple
                  />
                </label>
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
                <span className="mt-2 text-md text-green-600">
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
