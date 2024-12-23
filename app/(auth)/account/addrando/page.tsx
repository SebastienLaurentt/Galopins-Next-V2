"use client";

import AccountSectionHeader from "@/components/AccountComponent/AccountSectionHeader";
import FileUploader from "@/components/AccountComponent/FileUploader";
import Loader from "@/components/Loader/Loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

// Define types for your form state and responses
interface RandoData {
  date: string;
  destination: string;
  memberNumber: string;
  elevation: string;
  distance: string;
  images: string[];
}

interface ImageUploadResponse {
  imageUrls: string[];
}

const uploadImages = async (images: File[]): Promise<ImageUploadResponse> => {
  // Upload séquentiel pour les images PowerPoint
  if (images[0]?.name.match(/^Image\d+\.jpg$/)) {
    console.log("Détection d'images PowerPoint, utilisation de l'upload séquentiel");
    const uploadedUrls = [];
    
    for (const image of images) {
      const formData = new FormData();
      formData.append("images", image);
      
      const response = await fetch(
        "https://galopinsbackv2.onrender.com/api/upload-images",
        {
          method: "POST",
          body: formData,
        }
      );
      
      if (!response.ok) {
        throw new Error("Erreur lors de l'upload");
      }
      
      const result = await response.json();
      uploadedUrls.push(...result.imageUrls);
      
      // Petit délai entre chaque upload
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    return { imageUrls: uploadedUrls };
  }
  
  // Upload normal pour les autres images
  const formData = new FormData();
  images.forEach((image) => {
    formData.append("images", image);
  });
  
  const response = await fetch(
    "https://galopinsbackv2.onrender.com/api/upload-images",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Une erreur est survenue");
  }

  const result = await response.json();
  console.log("URLs reçues du serveur:", result.imageUrls);
  console.log("Nombre d'URLs uniques:", new Set(result.imageUrls).size);
  return result;
};

const uploadRando = async (randoData: RandoData): Promise<RandoData> => {
  const token = Cookies.get("token");

  if (!token) {
    throw new Error("Token is not available");
  }

  const response = await fetch(
    "https://galopinsbackv2.onrender.com/api/randos/",
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

const AccountRandoAdd: React.FC = () => {
  const [date, setDate] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [memberNumber, setMemberNumber] = useState<string>("");
  const [elevation, setElevation] = useState<string>("");
  const [distance, setDistance] = useState<string>("");
  const [images, setImages] = useState<File[]>([]);
  const [loadingImages, setLoadingImages] = useState<boolean>(false);
  const router = useRouter();

  const { mutate: uploadRandoMutation, isPending: isPendingRando } =
    useMutation<RandoData, Error, RandoData>({
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
        setImages([]);
        router.push("/account");
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Erreur lors de l'ajout de la randonnée",
          description: error.message,
        });
      },
    });

  const { mutate: uploadImagesMutation, isPending: isPendingImages } =
    useMutation<ImageUploadResponse, Error, File[]>({
      mutationFn: uploadImages,
      onSuccess: (data) => {
        const imageUrls = data.imageUrls;
        uploadRandoMutation({
          date,
          destination,
          memberNumber,
          elevation,
          distance,
          images: imageUrls,
        });
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Erreur lors de l'upload des images",
          description: error.message,
        });
      },
    });

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    
    // Log détaillé pour comprendre la source des images
    selectedFiles.forEach((file, index) => {
      console.log(`Image ${index + 1}:`, {
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
        // Ajoutons quelques propriétés supplémentaires
        webkitRelativePath: file.webkitRelativePath,
        path: (file as any).path, // Peut être undefined
      });
    });

    setImages(selectedFiles);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Images avant upload détaillées:", images.map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified
    })));
    setLoadingImages(true);
    uploadImagesMutation(images);
  };

  return (
    <main className="text-white">
      <AccountSectionHeader title="Ajout d'une nouvelle randonnée" />
      <div className="mx-2 md:mx-6 xl:mx-auto xl:max-w-screen-xl xl:px-16">
        <div className="mt-2 flex flex-col items-center justify-center rounded-md bg-slate-900 p-4">
          <form
            onSubmit={handleSubmit}
            className="flex w-[300px] flex-col gap-y-4 px-2 py-4 text-center md:w-[400px] md:px-4 lg:w-[500px]"
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
              <FileUploader
                onChange={handleImageChange}
                content={
                  <>
                    <span className="font-bold">Cliquer</span> pour{" "}
                    <span className="font-bold">ajouter</span> les photos
                    sélectionnées
                  </>
                }
              />
            </div>
            <div className="mt-2 text-center">
              {loadingImages || isPendingImages ? (
                <div className="flex justify-center">
                  <Loader />
                </div>
              ) : (
                <span
                  className={
                    images.length === 0 ? "text-destructive" : "text-green-500"
                  }
                >
                  {images.length === 0
                    ? "Aucune image sélectionnée"
                    : `${images.length} images sélectionnées`}
                </span>
              )}
            </div>
            <Button
              type="submit"
              className="mt-2 w-full md:w-auto"
              disabled={isPendingRando || isPendingImages}
            >
              {isPendingRando || isPendingImages
                ? "Ajout en cours..."
                : "Ajouter la randonnée"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AccountRandoAdd;
