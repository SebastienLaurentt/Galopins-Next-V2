import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import Loader from "../Loader/Loader";
import { Button } from "../ui/button";

interface InfoDataProps {
  id: number;
  date: string;
  destination: string;
}

const fetchRandos = async (): Promise<InfoDataProps[]> => {
  const response = await axios.get(
    "https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/randos/"
  );
  if (response.status !== 200) {
    throw new Error("Erreur lors de la récupération des données.");
  }
  return response.data.data;
};

const deleteRando = async (id: number): Promise<void> => {
  const token = Cookies.get("token");
  if (!token) {
    throw new Error("Le token n'est pas disponible.");
  }

  const response = await axios.delete(
    `https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/randos/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.status !== 200) {
    throw new Error("Erreur lors de la suppression.");
  }
};

function AccountRando() {
  const queryClient = useQueryClient();

  // Fetch Randos Data
  const {
    data: randosData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["randos"],
    queryFn: fetchRandos,
  });

  // Delete Rando
  const mutation = useMutation({
    mutationFn: deleteRando,
    onSuccess: () => {
      // Invalidate the 'randos' query to refetch data
      queryClient.invalidateQueries({ queryKey: ["randos"] });
    },
  });

  const handleDelete = (id: number) => {
    mutation.mutate(id);
  };

  if (isError) {
    return <span>Erreur lors de la récupération des données.</span>;
  }

  return (
    <div className="flex flex-col">
      <h4 className="text-center md:text-left">Photos randonnées</h4>
      <div className="mb-2 flex items-start justify-start">
        <Button asChild>
          <Link href="/account/addrando" aria-label="Ajouter des photos">
            Ajouter Photos
          </Link>
        </Button>
      </div>
      {isLoading ? (
        <span className="flex justify-center">
          <Loader />
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
            {randosData?.map((rando) => (
              <tr key={rando.id} className="border-b">
                <td className="p-2 md:px-4">{rando.date}</td>
                <td className="p-2 text-left md:px-4">{rando.destination}</td>
                <td className="flex flex-col justify-center p-2 text-center md:flex-row md:px-4">
                  <div className="px-2">
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
