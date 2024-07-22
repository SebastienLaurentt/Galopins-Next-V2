import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Button } from "../ui/button";

interface InfoDataProps {
  id: number;
  date: string;
  destination: string;
}

function AccountRando() {
  const [randosData, setRandosData] = useState<InfoDataProps[]>([]); // State with all Rando Data
  const [loading, setLoading] = useState(true);

  const handleDelete = async (id: number) => {
    try {
      // Get token cookie for Authorization
      const token = Cookies.get("token");

      // Error gestion if token not available
      if (!token) {
        console.error("Le token n'est pas disponible.");
        return;
      }

      // Delete request
      await axios.delete(
        `https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/randos/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Mettez à jour l'état pour refléter la suppression
      setRandosData((prevData) => prevData.filter((rando) => rando.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  // Fetch all Randos Data
  useEffect(() => {
    axios
      .get("https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/randos/")
      .then((response) => {
        setRandosData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col ">
      <h4 className="text-center md:text-left"> Photos randonnées </h4>
      <div className="mb-2 flex items-start justify-start">
        <Button asChild>
          <Link href="/account/addrando" aria-label="Ajouter des photos">
            Ajouter Photos
          </Link>
        </Button>
      </div>
      {loading ? (
        <span className="flex justify-center">
          <RotatingLines
            strokeColor="green"
            strokeWidth="5"
            animationDuration="0.5"
            width="32"
            visible={true}
          />
        </span>
      ) : (
        <table>
          <thead>
            <tr className="border-b-2">
              <th className="p-2 text-left md:px-4">Date</th>
              <th className="p-2 text-left md:px-4">Destination</th>
              <th className="mx-auto p-2 md:px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {randosData.map((rando) => (
              <tr key={rando.id} className="border-b">
                <td className="p-2 md:px-4">{rando.date}</td>
                <td className="p-2 text-left md:px-4">{rando.destination}</td>
                <td className="flex flex-col justify-center p-2 text-center md:flex-row md:px-4 ">
                  <div className="px-2 ">
                    <button
                      onClick={() => handleDelete(rando.id)}
                      className="text-red-500 md:hover:font-bold"
                    >
                      Supprimer
                    </button>
                  </div>
                  <div className="px-2">
                    <Link
                      href={`/account/updaterando/${rando.id}`}
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

export default AccountRando;
