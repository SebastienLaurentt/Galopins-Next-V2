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
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

const TRIMESTRE1_2025 = `/pdf/TRIMESTRE1_2025.pdf`;
const TRIMESTRE2_2025 = `/pdf/TRIMESTRE2_2025.pdf`;

const ProgDownload = () => {
  const [selectedPDF, setSelectedPDF] = useState("");

  const handleSelection = (value: string) => {
    switch (value) {
      case "1T2025":
        setSelectedPDF(TRIMESTRE1_2025);
        break;
      case "2T2025":
        setSelectedPDF(TRIMESTRE2_2025);
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
            <SelectItem value="2T2025">
              2<sup>ème</sup> Trimestre 2025
            </SelectItem>
            <SelectItem value="1T2025">
              1<sup>er</sup> Trimestre 2025
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {selectedPDF && (
        <Button asChild>
          <Link href={selectedPDF} target="_blank">
            Télécharger le programme
          </Link>
        </Button>
      )}
    </div>
  );
};

export default ProgDownload;
