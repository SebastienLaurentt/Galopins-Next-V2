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
  const [randosData, setRandosData] = useState<RandoData[]>([]); // State with all Rando Data
  const [selectedRandoDestination, setSelectedRandoDestination] = useState(""); // State with name about the selected Rando
  const [loadingFetch, setLoadingFetch] = useState(true);

  // Fetch all Randos Data
  useEffect(() => {
    axios
      .get("https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/randos/")
      .then((response) => {
        setRandosData(response.data.data);

        if (response.data.data.length > 0) {
          setSelectedRandoDestination(
            response.data.data[0].destination
          );
        }
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
      <Select onValueChange={handleRandoChange}>
        <SelectTrigger className="w-[233px]">
          <SelectValue placeholder="Choisir une randonnée"> Choisir une randonnée </SelectValue>
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
        <div >
          <div className="my-8 md:mt-16 md:mb-12">
            <h3 className="text-center"> {selectedRandoData.destination} </h3>
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
  );
};

export default PhotosDisplay;
