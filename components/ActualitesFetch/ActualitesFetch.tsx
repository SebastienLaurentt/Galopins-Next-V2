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
    <ul className="">
      {actualitesData.map((actu) => (
        <li key={actu.title} className="mx-4 mb-10 text-center xl:mx-6">
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
