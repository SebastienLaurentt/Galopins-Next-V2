"use client";

import Loader from "@/components/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useParams } from "next/navigation";
import NewsFormUpdate from "./NewsFormUpdate";

interface NewsData {
  date: string;
  title: string;
  description: string;
}

const fetchNews = async (id: string, token: string): Promise<NewsData> => {
  try {
    const response = await fetch(
      `https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/infos/${id}`,
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
    return data.data;
  } catch (error) {
    console.error("Fetch news error:", error);
    throw error;
  }
};

const AccountNewsFetch = () => {
  const { id } = useParams<{ id: string }>();
  const token = Cookies.get("token") || "";

  const {
    data: newsData,
    isLoading,
    isError,
  } = useQuery<NewsData, Error>({
    queryKey: ["news", id],
    queryFn: () => fetchNews(id, token),
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
    return renderContent("Chargement des données de l'information", true);
  }

  if (isError) {
    return renderContent(
      "Erreur lors de la récupération des données de l'information",
      false
    );
  }

  if (!newsData) {
    return null;
  }

  return <NewsFormUpdate newsData={newsData} id={id} />;
};

export default AccountNewsFetch;
