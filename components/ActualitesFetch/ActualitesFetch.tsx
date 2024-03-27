"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import ActualitesCard from "../Card/ActualitesCard/ActualitesCard";

interface ActualitesFetchProps {
  title: string;
  date: string;
  description: string;
}

function ActualitesFetch() {
  const [actualitesData, setActualitesData] = useState<ActualitesFetchProps[]>(
    []
  );

  // Fetch all Randos Data
  useEffect(() => {
    axios
      .get("https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/lastinfos")
      .then((response) => {
        setActualitesData(response.data.data);
      });
  }, []);

  return (
    <ul className=" grid w-full grid-cols-1 gap-y-4 px-4 md:grid-cols-2 md:gap-4 lg:gap-8 lg:px-8 ">
      {actualitesData.map((actu) => (
        <li key={actu.title} className="">
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
