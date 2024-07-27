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
      <div className="bg-secondary py-4">
        <h3 className="mb-1 ">{parcoursTitle}</h3>
        <span className="mb-2 md:text-md">{area}</span>
      </div>
      <div className="flex flex-col  items-center border-x-2 border-b-2 border-secondary py-4 md:text-md">
        <span>{frequency}</span>
        <ul className="flex flex-col items-start">
          <li>{case1}</li>
          <li>{case2}</li>
        </ul>
      </div>
    </div>
  );
};

export default ParcoursCard;
