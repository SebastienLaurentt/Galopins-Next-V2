'use client'

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DownloadButton from "../Button/DownloadButton/DownloadButton";

const TRIMESTRE1_2024 = `/pdf/TRIMESTRE1_2024.pdf`;
const TRIMESTRE3_2023 = `/pdf/TRIMESTRE3_2023.pdf`;

const ProgDownload = () => {
  // État pour stocker le fichier PDF sélectionné
  const [selectedPDF, setSelectedPDF] = useState('');

  // Mise à jour de l'état en fonction de la sélection de l'utilisateur
  const handleSelection = (value: string) => {
    switch (value) {
      case '1T2024':
        setSelectedPDF(TRIMESTRE1_2024);
        break;
      case '3T2023':
        setSelectedPDF(TRIMESTRE3_2023);
        break;
      default:
        setSelectedPDF('');
    }
  };

  return (
    <div className="flex flex-col md:flex-row  md:items-center gap-y-2 gap-x-2 mt-4">
      <Select onValueChange={handleSelection} aria-label="Choisir un programme">
        <SelectTrigger className="w-[233px]">
          <SelectValue placeholder="Choisir un programme" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Programmes</SelectLabel>
            <SelectItem value="1T2024">1<sup>er</sup> Trimestre 2024</SelectItem>
            <SelectItem value="3T2023">3<sup>ème</sup> Trimestre 2023</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {selectedPDF && (
        <DownloadButton
          href={selectedPDF}
          fileName={selectedPDF.split('/').pop() ?? ''}
          linkName="Télécharger le programme"
          classname=""
        />
      )}
    </div>
  );
};

export default ProgDownload;
