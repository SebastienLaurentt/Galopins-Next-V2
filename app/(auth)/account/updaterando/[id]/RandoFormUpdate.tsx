import AccountSectionHeader from "@/components/AccountComponent/AccountSectionHeader";
import FileUploader from "@/components/AccountComponent/FileUploader";
import Loader from "@/components/Loader/Loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

interface RandoFormUpdateProps {
  randoData: RandoData;
  id: string;
}

const uploadImages = async (images: File[]): Promise<ImageUploadResponse> => {
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
      
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    return { imageUrls: uploadedUrls };
  }
  
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

const updateRando = async ({
  id,
  data,
}: {
  id: string;
  data: RandoData;
}): Promise<void> => {
  const token = Cookies.get("token");

  if (!token) {
    throw new Error("Token is not available");
  }

  const response = await fetch(
    `https://galopinsbackv2.onrender.com/api/randos/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    const result = await response.json();
    throw new Error(result.message || "Update failed");
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
  const [newImages, setNewImages] = useState<File[]>([]); // Only File[] for new images
  const [loadingImages, setLoadingImages] = useState(false);
  const [imageCountFeedback, setImageCountFeedback] = useState<string>(
    `${randoData.images.length} image(s) actuelle(s)`
  );

  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: updateRandoMutation, isPending: isPendingRando } =
    useMutation({
      mutationFn: (newData: RandoData) => updateRando({ id, data: newData }),
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

  const { mutate: uploadImagesMutation, isPending: isPendingImages } =
    useMutation({
      mutationFn: uploadImages,
      onSuccess: (data: ImageUploadResponse) => {
        updateRandoMutation({
          date,
          destination,
          memberNumber,
          elevation,
          distance,
          images: data.imageUrls, // Replace old images with new ones
        });
      },
      onError: (error: any) => {
        toast({
          variant: "destructive",
          title: "Erreur lors de l'upload des images",
          description: error.message,
        });
      },
    });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newImages.length > 0) {
      setLoadingImages(true);
      uploadImagesMutation(newImages);
    } else {
      // No new images, keep the existing ones
      updateRandoMutation({
        date,
        destination,
        memberNumber,
        elevation,
        distance,
        images: randoData.images,
      });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    
    selectedFiles.forEach((file, index) => {
      console.log(`Image ${index}:`, {
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
        webkitRelativePath: file.webkitRelativePath,
        path: (file as any).path,
      });
    });

    setNewImages(selectedFiles);
    setImageCountFeedback(`${selectedFiles.length} image(s) sélectionnée(s)`);
  };

  return (
    <main className="text-white">
      <AccountSectionHeader title="Mise à jour de la randonnée" />
      <div className="mx-2 md:mx-6 xl:mx-auto xl:max-w-screen-xl xl:px-16">
        <div className="mt-2 flex flex-col items-center justify-center rounded-lg bg-slate-900 p-4">
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
                    sélectionnées
                  </>
                }
              />
            </div>
            <div className="text-center">
              {loadingImages || isPendingImages ? (
                <span className="flex justify-center">
                  <Loader />
                </span>
              ) : (
                <span className="text-green-500">
                  {newImages.length === 0
                    ? imageCountFeedback
                    : `${newImages.length} ${
                        newImages.length === 1
                          ? "image sélectionnée"
                          : "images sélectionnées"
                      }`}
                </span>
              )}
            </div>
            <Button type="submit" disabled={isPendingRando || isPendingImages}>
              {isPendingRando || isPendingImages
                ? "Chargement..."
                : "Mettre à jour"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default RandoFormUpdate;
