"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import ActualitesCard from "../Card/ActualitesCard/ActualitesCard";

interface InfoData {
  title: string;
  date: string;
  description: string;
}

function News() {
  const [infosData, setInfosData] = useState<InfoData[]>([]);

  // Fetch all Randos Data
  useEffect(() => {
    axios
      .get("https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/lastinfos")
      .then((response) => {
        setInfosData(response.data.data);
      });
  }, []);

  return (
    <ul className="">
      {infosData.map((info) => (
        <li className="mx-4 mb-10 text-center xl:mx-6">
          <ActualitesCard
            title={info.title}
            date={info.date}
            description={info.description}
          />
        </li>
      ))}
    </ul>
  );
}

export default News;
