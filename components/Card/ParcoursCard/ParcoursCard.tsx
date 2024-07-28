import { Footprints } from "lucide-react";
import { ReactNode } from "react";

interface ParcoursCardProps {
  parcoursTitle: string;
  area: string;
  frequency: string;
  case1: ReactNode;
  case2: ReactNode;
}

const ParcoursCard = ({
  parcoursTitle,
  area,
  frequency,
  case1,
  case2,
}: ParcoursCardProps) => {
  return (
    <div className="mx-auto flex  flex-col rounded-xl border-4 border-accent text-center md:max-w-[480px] lg:w-[420px] xl:max-w-screen-xl">
      <div className="m-1.5 flex flex-col items-center rounded-lg bg-accent py-4 text-white">
        <Footprints className="mb-2 size-12" />
        <h3 className="mb-1 text-white">{parcoursTitle}</h3>
        <span className=" md:text-md">{area}</span>
      </div>
      <div className="flex flex-col  items-center  py-4 md:text-md">
        <span className="mb-1 text-md font-semibold">{frequency}</span>
        <ul className="flex flex-col items-start">
          <li>{case1}</li>
          <li>{case2}</li>
        </ul>
      </div>
    </div>
  );
};

export default ParcoursCard;
