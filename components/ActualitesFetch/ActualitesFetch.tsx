"use client";

import { useQuery } from "@tanstack/react-query";
import ActualitesCard from "../Card/ActualitesCard/ActualitesCard";
import Loader from "../Loader/Loader";

interface ActualitesFetchProps {
  title: string;
  date: string;
  description: string;
}

const fetchActualites = async (): Promise<ActualitesFetchProps[]> => {
  const response = await fetch(
    "https://galopinsbackv2.onrender.com/api/infos"
  );
  const data = await response.json();
  return data;
};

function ActualitesFetch() {
  const {
    data: actualitesData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["actualites"],
    queryFn: fetchActualites,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <ul className="grid w-full grid-cols-1 gap-y-4 px-4 md:grid-cols-2 md:gap-4 lg:gap-8 lg:px-8">
      {actualitesData?.map((actu) => (
        <li key={actu.title}>
          <ActualitesCard
            title={actu.title}
            date={actu.date}
            description={actu.description}
          />
        </li>
      ))}
    </ul>
  );
}

export default ActualitesFetch;
