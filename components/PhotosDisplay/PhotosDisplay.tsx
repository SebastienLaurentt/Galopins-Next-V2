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
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsPeopleFill } from "react-icons/bs";
import { GiHiking, GiPathDistance } from "react-icons/gi";
import ImgAnimation from "../ImgAnimation/ImgAnimation";
import PhotoIcon from "../PhotoIcon/PhotoIcon";

interface RandoData {
  date: string;
  destination: string;
  memberNumber: string;
  elevation: string;
  distance: string;
  images?: string[];
}

const fetchRandos = async (): Promise<RandoData[]> => {
  const response = await fetch(
    "https://galopinsbackv2.onrender.com/api/randos"
  );
  const data = await response.json();
  return data;
};

const PhotosDisplay = () => {
  const [selectedRandoDestination, setSelectedRandoDestination] =
    useState<string>("");
  const animation =
    "https://lottie.host/5b46926b-3fb0-4a93-b3a6-a96ffb7c537b/ZaidZSakBt.json";

  const {
    data: randosData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["randos"],
    queryFn: fetchRandos,
  });

  // Effect to set the last rando as selected by default
  useEffect(() => {
    if (randosData && randosData.length > 0) {
      setSelectedRandoDestination(randosData[0].destination);
    }
  }, [randosData]);

  const handleRandoChange = (newValue: string) => {
    setSelectedRandoDestination(newValue);
  };

  const selectedRandoData = randosData?.find(
    (rando) => rando.destination === selectedRandoDestination
  );

  if (isLoading) {
    return (
      <div>
        <div className="mb-4">
          <p className="mx-auto text-center leading-7">
            Les photos sont en cours de chargement ! <br /> Veuillez patienter
            ...
          </p>
        </div>
        <ImgAnimation animation={animation} />
      </div>
    );
  }

  if (isError) {
    return <div>Quelque chose s&apos;est mal passé</div>;
  }

  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="flex justify-center">
        <Select
          onValueChange={handleRandoChange}
          value={selectedRandoDestination}
        >
          <SelectTrigger
            className="w-[233px]"
            aria-label="Choisir une randonnée"
          >
            <SelectValue placeholder="Choisir une randonnée">
              Choisir une randonnée
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Randonnées</SelectLabel>
              {randosData?.map((rando) => (
                <SelectItem value={rando.destination} key={rando.destination}>
                  {rando.date} - {rando.destination}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {selectedRandoData && selectedRandoData.images && (
        <div>
          <div className="my-8">
            <h3 className="text-center text-xl md:text-3xl">
              {selectedRandoData.destination}
            </h3>
            <ul className="flex justify-center gap-x-4 text-foreground md:gap-x-8">
              <li>
                <PhotoIcon
                  number={selectedRandoData.distance + " km"}
                  description="de distance"
                >
                  <GiPathDistance className="iconPhoto" />
                </PhotoIcon>
              </li>
              <li>
                <PhotoIcon
                  number={selectedRandoData.memberNumber}
                  description="Galopins"
                >
                  <BsPeopleFill className="iconPhoto" />
                </PhotoIcon>
              </li>
              <li>
                <PhotoIcon
                  number={selectedRandoData.elevation + " m"}
                  description="de dénivelé"
                >
                  <GiHiking className="iconPhoto" />
                </PhotoIcon>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            {selectedRandoData.images.map((picture, index) => (
              <div key={index} className="mx-auto">
                <Image
                  src={`https://galopinsbackv2.onrender.com${picture}`}
                  alt={`Randonnée image ${index + 1}`}
                  width={1000}
                  height={200}
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotosDisplay;
