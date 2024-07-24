"use client";

import Loader from "@/components/Loader/Loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import imageCompression from "browser-image-compression";
import Cookies from "js-cookie";
import { ImagePlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const uploadRando = async (randoData: {
  date: string;
  destination: string;
  memberNumber: string;
  elevation: string;
  distance: string;
  pictures: string[];
}) => {
  const token = Cookies.get("token");

  if (!token) {
    throw new Error("Token is not available");
  }

  const response = await fetch(
    "https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/randos",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(randoData),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Une erreur est survenue");
  }

  return response.json();
};

const AccountRandoAdd = () => {
  const [date, setDate] = useState("");
  const [destination, setDestination] = useState("");
  const [memberNumber, setMemberNumber] = useState("");
  const [elevation, setElevation] = useState("");
  const [distance, setDistance] = useState("");
  const [pictures, setPictures] = useState<string[]>([]);
  const [loadingImages, setLoadingImages] = useState(false);
  const router = useRouter();

  const { mutate: uploadRandoMutation, isPending } = useMutation({
    mutationFn: uploadRando,
    onSuccess: () => {
      toast({
        title: "Randonnée ajoutée avec succès !",
      });
      setDate("");
      setDestination("");
      setMemberNumber("");
      setElevation("");
      setDistance("");
      setPictures([]);
      router.push("/account");
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Erreur lors de l'ajout de la randonnée",
        description: error.message,
      });
    },
  });

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
    if (!isPending && pictures.length === 0) {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    uploadRandoMutation({
      date,
      destination,
      memberNumber,
      elevation,
      distance,
      pictures,
    });
  };

  return (
    <div className="p-4">
      <main className="text-white">
        <h3 className="m-1 mx-auto w-[500px] text-center text-black">
          Ajout d&apos;une nouvelle randonnée
        </h3>

        <div className="mt-2 flex flex-col items-center justify-center p-4">
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
                isDate
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
                  <div className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-white">
                    <ImagePlus size={48} />
                    <span className="mx-auto mt-2 w-[260px] text-center text-sm font-medium leading-4">
                      <span className="font-bold">Cliquer</span> pour{" "}
                      <span className="font-bold">ajouter</span> les photos
                      sélectionnées
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
                  <Loader />
                </span>
              )}
              {/* Display number of images selected */}
              {renderSelectedImageCount()}
            </div>
            {/* Conditionally render the Loader based on the loading state */}
            {isPending ? (
              <span className="flex justify-center">
                <Loader />
              </span>
            ) : (
              <Button className="w-full" type="submit">
                Ajouter Photos
              </Button>
            )}
          </form>
        </div>
      </main>
    </div>
  );
};

export default AccountRandoAdd;
