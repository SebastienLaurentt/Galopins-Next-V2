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
  pictures?: string[];
}

const PhotosDisplay = () => {
  // State with all Rando Data
  const [randosData, setRandosData] = useState<RandoData[]>([]);

  // Selected Rando's Name State
  const [selectedRandoDestination, setSelectedRandoDestination] = useState("");
  const [loadingFetch, setLoadingFetch] = useState(true);

  const animation =
    "https://lottie.host/5b46926b-3fb0-4a93-b3a6-a96ffb7c537b/ZaidZSakBt.json";

  // Fetch all Randos Data
  useEffect(() => {
    axios
      .get("https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/randos/")
      .then((response) => {
        setRandosData(response.data.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      })
      .finally(() => {
        setLoadingFetch(false);
      });
  }, []);

  const handleRandoChange = (newValue: string) => {
    setSelectedRandoDestination(newValue);
  };

  const selectedRandoData = randosData.find(
    (rando) => rando.destination === selectedRandoDestination
  );

  return (
    <div className="flex flex-col items-center gap-y-4">
      {/* Loading if fetch not done */}
      {/* Rando selection */}
      {loadingFetch ? (
        <div>
          <div className="mb-4">
            <p className="text-center">
              Les photos sont en cours de chargement ! Veuillez patienter ...{" "}
            </p>
          </div>
          <ImgAnimation animation={animation} />
        </div>
      ) : (
        <div>
          <div className="flex justify-center">
            <Select onValueChange={handleRandoChange}>
              <SelectTrigger
                className="w-[233px]"
                aria-label="Choisir une randonnée"
              >
                <SelectValue placeholder="Choisir une randonnée">
                  {" "}
                  Choisir une randonnée{" "}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Randonnées</SelectLabel>
                  {randosData.map((rando) => (
                    <SelectItem
                      value={rando.destination}
                      key={rando.destination}
                    >
                      {rando.date} - {rando.destination}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Selected Rando data infos */}
          {selectedRandoData && selectedRandoData.pictures && (
            <div>
              <div className="my-8 md:mt-16 md:mb-12">
                <h3 className="text-center">
                  {" "}
                  {selectedRandoData.destination}{" "}
                </h3>
                <ul className="flex md:gap-x-4 justify-center text-secondary ">
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

              {/* Selected Rando photos */}
              <div className="flex flex-col gap-4">
                {selectedRandoData.pictures.map((picture, index) => (
                  <div key={index} className="mx-auto">
                    <Image
                      src={picture}
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
      )}
    </div>
  );
};

export default PhotosDisplay;
