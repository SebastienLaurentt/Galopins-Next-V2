import AccountSectionHeader from "@/components/AccountComponent/AccountSectionHeader";
import FileUploader from "@/components/AccountComponent/FileUploader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import imageCompression from "browser-image-compression";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface RandoData {
  date: string;
  destination: string;
  memberNumber: string;
  elevation: string;
  distance: string;
  pictures: string[];
}

interface RandoFormUpdateProps {
  randoData: RandoData;
  id: string;
}

const updateRando = async ({
  id,
  token,
  data,
}: {
  id: string;
  token: string;
  data: RandoData;
}): Promise<void> => {
  try {
    const response = await fetch(
      `https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/randos/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Update failed");
    }
  } catch (error) {
    console.error("Rando news error:", error);
  }
};

const RandoFormUpdate: React.FC<RandoFormUpdateProps> = ({ randoData, id }) => {
  const [date, setDate] = useState<string>(randoData.date);
  const [destination, setDestination] = useState<string>(randoData.destination);
  const [memberNumber, setMemberNumber] = useState<string>(
    randoData.memberNumber
  );
  const [elevation, setElevation] = useState<string>(randoData.elevation);
  const [distance, setDistance] = useState<string>(randoData.distance);
  const [pictures, setPictures] = useState<string[]>(randoData.pictures);
  const [loadingImages, setLoadingImages] = useState(false);

  const router = useRouter();
  const token = Cookies.get("token") || "";

  const queryClient = useQueryClient();

  const { mutate: updateRandoMutation, isPending } = useMutation({
    mutationFn: (newData: RandoData) =>
      updateRando({ id, token, data: newData }),
    onSuccess: () => {
      toast({ title: "Randonnée mise à jour avec succès !" });
      queryClient.invalidateQueries({ queryKey: ["randos", id] });
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
    updateRandoMutation({
      date,
      destination,
      memberNumber,
      elevation,
      distance,
      pictures,
    });
  };

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
    if (pictures && pictures.length > 0) {
      return (
        <span className="mt-2 flex flex-row justify-center text-sm text-green-600">
          {pictures.length}{" "}
          {pictures.length === 1
            ? "image sélectionnée"
            : "images sélectionnées"}
        </span>
      );
    }
    return null;
  };

  return (
    <div className="p-4">
      <main className="text-white">
        <AccountSectionHeader title="Mise à jour de la randonnée" />
        <div className="mx-2 px-2 md:mx-6 xl:mx-auto xl:max-w-screen-xl xl:px-16">
          <div className="mt-2 flex flex-col items-center justify-center rounded-lg bg-slate-900 p-4">
            <form
              onSubmit={handleSubmit}
              className="flex w-[300px] flex-col gap-y-4  p-8 text-center md:w-[400px] lg:w-[500px]"
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
                />
              </div>
              <div className="space-y-1 text-left">
                <Label>Dénivelé (en m)</Label>
                <Input
                  value={elevation}
                  onChange={(e) => setElevation(e.target.value)}
                  placeholder="Dénivelé de la randonnée..."
                />
              </div>
              <div className="space-y-1 text-left">
                <Label>Distance (en km)</Label>
                <Input
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  placeholder="Distance de la randonnée..."
                />
              </div>
              <div>
                <FileUploader
                  onChange={handleImageChange}
                  content={
                    <>
                      <span className="font-bold">Cliquer</span> pour{" "}
                      <span className="font-bold">modifier</span> les photos
                      séléctionnées
                    </>
                  }
                />

                {/* Display number of images selected */}
                {renderSelectedImageCount()}
              </div>
              <Button type="submit" disabled={isPending || loadingImages}>
                {isPending || loadingImages ? "Chargement..." : "Mettre à jour"}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RandoFormUpdate;
