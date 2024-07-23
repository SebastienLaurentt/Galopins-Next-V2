import axios from "axios";
import { useEffect, useState } from "react";

import Cookies from "js-cookie";
import Link from "next/link";
import Loader from "../Loader/Loader";
import { Button } from "../ui/button";

interface InfoDataProps {
  id: number;
  date: string;
  title: string;
}

function AccountNews() {
  const [infosData, setInfosData] = useState<InfoDataProps[]>([]); // State with all Infos Data
  const [loading, setLoading] = useState(true);

  const handleDelete = async (id: number) => {
    try {
      // Get token cookie for Authorization
      const token = Cookies.get("token");

      console.log(token);

      // Error gestion if token not available
      if (!token) {
        console.error("Le token n'est pas disponible.");
        return;
      }

      // Delete request
      await axios.delete(
        `https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/infos/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Mettez à jour l'état pour refléter la suppression
      setInfosData((prevData) => prevData.filter((info) => info.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  // Fetch all Info Data
  useEffect(() => {
    axios
      .get("https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/infos/")
      .then((response) => {
        setInfosData(response.data.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="">
      <h4 className="text-center md:text-left">Dernières infos</h4>
      <div className="mb-2 flex items-start justify-start">
        <Button asChild>
          <Link
            href="/account/addnews"
            aria-label="Ajouter une nouvelle informations"
          >
            Ajouter Info
          </Link>
        </Button>
      </div>
      {loading ? (
        <span className="flex justify-center">
          <Loader />
        </span>
      ) : (
        <table className="mb-2 w-full">
          <thead>
            <tr className="border-b-2 ">
              <th className="p-2 md:px-4 md:text-left">Date </th>
              <th className="p-2 md:px-4 md:text-left">Titre </th>
              <th className="p-2 md:px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {infosData.map((info) => (
              <tr key={info.id} className="border-b">
                <td className="p-2 md:px-4">{info.date}</td>
                <td className="p-2 text-center md:px-4 md:text-left">
                  {info.title}
                </td>
                <td className="flex flex-col justify-center p-2 text-center md:flex-row md:px-4">
                  <div className="px-2">
                    <button
                      onClick={() => handleDelete(info.id)}
                      className="text-red-500 md:hover:font-bold"
                    >
                      Supprimer
                    </button>
                  </div>
                  <div className="px-2">
                    <Link
                      href={`/account/updatenews/${info.id}`}
                      className="text-cyan-500 md:hover:font-bold"
                    >
                      Modifier
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AccountNews;
