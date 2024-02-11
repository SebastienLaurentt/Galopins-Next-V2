import DownloadButton from "../Button/DownloadButton/DownloadButton";
import { Select } from "../ui/select";

const TRIMESTRE1_2024 = `/pdf/TRIMESTRE1_2024.pdf`;
const TRIMESTRE3_2023 = `/pdf/TRIMESTRE3_2023.pdf`;

const ProgDownload = () => {
  return (
    <div>
      <Select />
      <DownloadButton
        href={TRIMESTRE1_2024}
        fileName="TRIMESTRE1_2024.pdf"
        linkName="Télécharger le programme"
        classname="mt-8"
      />
    </div>
  );
};

export default ProgDownload;
