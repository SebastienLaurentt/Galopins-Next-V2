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
import { useState } from "react";
import DownloadButton from "../Button/DownloadButton/DownloadButton";

const TRIMESTRE1_2024 = `/pdf/TRIMESTRE1_2024.pdf`;
const TRIMESTRE3_2023 = `/pdf/TRIMESTRE3_2023.pdf`;

const ProgDownload = () => {
  // Selected pdf state
  const [selectedPDF, setSelectedPDF] = useState("");

  // Set pdf selected state
  const handleSelection = (value: string) => {
    switch (value) {
      case "1T2024":
        setSelectedPDF(TRIMESTRE1_2024);
        break;
      case "3T2023":
        setSelectedPDF(TRIMESTRE3_2023);
        break;
      default:
        setSelectedPDF("");
    }
  };

  return (
    <div className="mt-4 flex flex-col  gap-2 md:flex-row md:items-center">
      <Select onValueChange={handleSelection}>
        <SelectTrigger className="w-[233px]" aria-label="Choisir un programme">
          <SelectValue placeholder="Choisir un programme" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Programmes</SelectLabel>
            <SelectItem value="1T2024">
              1<sup>er</sup> Trimestre 2024
            </SelectItem>
            <SelectItem value="3T2023">
              3<sup>ème</sup> Trimestre 2023
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {selectedPDF && (
        <DownloadButton
          href={selectedPDF}
          fileName={selectedPDF.split("/").pop() ?? ""}
          linkName="Télécharger le programme"
          classname=""
        />
      )}
    </div>
  );
};

export default ProgDownload;
