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
    <div className="mx-auto flex max-w-[360px] flex-col text-center md:max-w-[480px] lg:w-[420px] xl:max-w-screen-xl">
      <div className="bg-green-800 py-4">
        <h3 className="mb-1 text-white">{parcoursTitle}</h3>
        <span className="mb-2 text-white md:text-md">{area}</span>
      </div>
      <div className="border-x-2 border-b-2  border-green-800 py-4 md:text-md">
        <span>{frequency}</span>
        <ul>
          <li>{case1}</li>
          <li>{case2}</li>
        </ul>
      </div>
    </div>
  );
};

export default ParcoursCard;
