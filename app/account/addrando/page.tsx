"use client";

import { useAuth } from "@/components/AccountComponent/Auth/Auth";
import axios from "axios";
import imageCompression from "browser-image-compression";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { RotatingLines } from "react-loader-spinner";
import AccountHeader from "../../../components/AccountComponent/AccountHeader";
import ValidationButton from "../../../components/AccountComponent/Button/ValidationButton";
import Input from "../../../components/AccountComponent/Form/Input";

const AccountRandoAdd = () => {
  const [date, setDate] = useState("");
  const [destination, setDestination] = useState("");
  const [memberNumber, setMemberNumber] = useState("");
  const [elevation, setElevation] = useState("");
  const [distance, setDistance] = useState("");
  const [pictures, setPictures] = useState<string[]>([]);
  const [loadingImages, setLoadingImages] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const { isLogged } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLogged) {
      // Redirigez l'utilisateur vers la page de connexion s'il n'est pas connecté
      router.push("/login");
      return;
    }
  }, [isLogged, router]);

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

      const response = await axios.post(
        "https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/randos",
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

      setDate("");
      setDestination("");
      setMemberNumber(""), setElevation(""), setDistance(""), setPictures([]);

      console.log(response.data);

      // Show success message
      setShowSuccessMessage(true);

      // Hide success message after 2 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
        router.push("/account");
      }, 3000);
    } catch (error) {
      console.error("Erreur lors de l'ajout d'informations :", error);
    } finally {
      setLoadingSubmit(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-300 p-4 ">
      <AccountHeader />
      <main className="text-white">
        <h3 className="m-4 text-center text-black">
          Formulaire d&apos;ajout d&apos;une nouvelle randonnée
        </h3>

        <div className="mt-8 flex flex-col items-center justify-center bg-stone-300 p-4">
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
                      Cliquer pour sélectionner les images
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
                <span className="flex justify-center">
                  <RotatingLines
                    strokeColor="green"
                    strokeWidth="5"
                    animationDuration="0.5"
                    width="32"
                    visible={true}
                  />
                </span>
              ) : null /* Don't render the button if loadingSubmit is true */
            }
            {/* Conditionally render the success message */}
            {showSuccessMessage && (
              <span className="mt-2 text-md text-green-600">
                Rando créée ! Vous allez être redirigé.
              </span>
            )}
            {/* Render the button outside the form to prevent it from re-rendering */}
            {!loadingSubmit && !showSuccessMessage && (
              <ValidationButton buttonName="Créer la nouvelle information" />
            )}
          </form>
        </div>
      </main>
    </div>
  );
};

export default AccountRandoAdd;
