import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { Camera } from "lucide-react";
import Link from "next/link";
import Loader from "../Loader/Loader";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

interface InfoDataProps {
  _id: number;
  date: string;
  destination: string;
}

const fetchRandos = async (): Promise<InfoDataProps[]> => {
  try {
    const response = await fetch(
      "https://galopinsbackv2.onrender.com/api/randos"
    );

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch randos error:", error);
    throw error;
  }
};

const deleteRando = async (_id: number): Promise<void> => {


  try {
    const response = await fetch(
      `https://galopinsbackv2.onrender.com/api/randos/${_id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Erreur lors de la suppression.");
    }
  } catch (error) {
    console.error("Fetch delete rando error:", error);
    throw error;
  }
};

function AccountRando() {
  const queryClient = useQueryClient();

  const {
    data: randosData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["randos"],
    queryFn: fetchRandos,
  });

  const mutation = useMutation({
    mutationFn: deleteRando,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["randos"] });
      toast({ title: "Randonnée supprimée avec succès !" });
    },
  });

  const handleDelete = (_id: number) => {
    mutation.mutate(_id);
  };

  if (isError) {
    return <span>Erreur lors de la récupération des données.</span>;
  }

  return (
    <div className="flex flex-col">
      <h4 className="mb-8 flex flex-row items-center justify-center gap-x-2 text-center md:justify-start md:text-left">
        <Camera />
        <span>Photos randonnées</span>
      </h4>
      <div className="mb-2 flex items-start justify-start">
        <Button asChild>
          <Link href="/account/addrando" aria-label="Ajouter des photos">
            Ajouter Photos
          </Link>
        </Button>
      </div>
      {isLoading ? (
        <span className="mt-24 flex justify-center">
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
              <tr key={rando._id} className="border-b">
                <td className="p-2 md:px-4">{rando.date}</td>
                <td className="p-2 text-left md:px-4">{rando.destination}</td>
                <td className="flex flex-col justify-center p-2 text-center md:flex-row md:px-4">
                  <div className="px-2">
                    <button
                      onClick={() => handleDelete(rando._id)}
                      className="text-red-500 md:hover:font-bold"
                    >
                      Supprimer
                    </button>
                  </div>
                  <div className="px-2">
                    <Link
                      href={`/account/updaterando/${rando._id}`}
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
