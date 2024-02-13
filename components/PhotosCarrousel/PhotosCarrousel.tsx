"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

interface RandoData {
  date: string;
  destination: string;
  memberNumber: string;
  elevation: string;
  distance: string;
  pictures?: string[];
}

const PhotosCarrousel = () => {
  const [randosData, setRandosData] = useState<RandoData[]>([]); // State with all Rando Data
  const [selectedRandoDestination, setSelectedRandoDestination] =
    useState("Test"); // State with name about the selected Rando
  const [loadingFetch, setLoadingFetch] = useState(true);

  // Fetch all Randos Data
  useEffect(() => {
    axios
      .get("https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/randos/")
      .then((response) => {
        setRandosData(response.data.data);

        if (response.data.data.length > 0) {
          setSelectedRandoDestination(
            response.data.data[response.data.data.length - 1].destination
          );
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      })
      .finally(() => {
        // Marquez le chargement comme terminé, que ce soit réussi ou échoué
        setLoadingFetch(false);
      });
  }, []);

  // Set the state of the
  const handleRandoChange = (newValue: string) => {
    setSelectedRandoDestination(newValue);
  };

  // Collect datas of the selectedRando with find method to allow a match with his name
  // between the states selectedRandoName and randosData
  const selectedRandoData = randosData.find(
    (rando) => rando.destination === selectedRandoDestination
  );

  return (
    <div className="flex flex-col items-center gap-y-4">
      <Select onValueChange={handleRandoChange}>
        <SelectTrigger className="w-[233px]">
          <SelectValue placeholder="Choisir une randonnée" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Randonnées</SelectLabel>
            {randosData.map((rando) => (
              <SelectItem value={rando.destination} key={rando.destination}>
                {rando.date} - {rando.destination}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {selectedRandoData && selectedRandoData.pictures && (
  <div className="flex flex-col gap-4"> {/* Modifier selon le nombre de colonnes souhaité */}
    {selectedRandoData.pictures.map((picture, index) => (
      <div key={index} className="mx-auto">
        <Image
          src={picture}
          alt={`Randonnée image ${index + 1}`}
          width={500}
          height={500}
          objectFit="cover" // Adapter l'image au conteneur sans déformer l'image
        />
      </div>
    ))}
  </div>
)}

    </div>
  );
};

export default PhotosCarrousel;
