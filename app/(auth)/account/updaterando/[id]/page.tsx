"use client";

import Loader from "@/components/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useParams } from "next/navigation";
import RandoFormUpdate from "./RandoFormUpdate";

interface RandoData {
  date: string;
  destination: string;
  memberNumber: string;
  elevation: string;
  distance: string;
  pictures: string[];
}

const fetchHiking = async (id: string, token: string): Promise<RandoData> => {
  try {
    const response = await fetch(
      `https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/randos/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Fetched data:", data);
    return data.data;
  } catch (error) {
    console.error("Fetch hiking error:", error);
    throw error;
  }
};

const HikingFetch = () => {
  const { id } = useParams<{ id: string }>();
  const token = Cookies.get("token") || "";

  console.log("ID:", id);
  console.log("Token:", token);

  const {
    data: randoData,
    isLoading,
    isError,
  } = useQuery<RandoData, Error>({
    queryKey: ["randos", id],
    queryFn: () => fetchHiking(id, token),
    enabled: !!token && !!id,
  });

  const renderContent = (message: string, showLoader: boolean) => (
    <div className="mt-48 flex flex-col items-center gap-y-6">
      <p className="mx-auto w-[300px] text-center text-md font-semibold leading-6">
        {message}
      </p>
      {showLoader && <Loader />}
    </div>
  );

  if (isLoading) {
    return renderContent("Chargement des données de la randonnée", true);
  }

  if (isError) {
    return renderContent(
      "Erreur lors de la récupération des données de la randonnée",
      false
    );
  }

  if (!randoData) {
    return null;
  }

  return <RandoFormUpdate randoData={randoData} id={id} />;
};

export default HikingFetch;
