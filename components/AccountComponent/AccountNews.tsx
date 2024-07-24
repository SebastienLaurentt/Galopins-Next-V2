import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { Newspaper } from "lucide-react";
import Link from "next/link";
import Loader from "../Loader/Loader";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

interface InfoDataProps {
  id: number;
  date: string;
  title: string;
}

const fetchInfos = async (): Promise<InfoDataProps[]> => {
  const response = await fetch(
    "https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/infos/"
  );
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des informations.");
  }
  const data = await response.json();
  return data.data;
};

const deleteInfo = async (id: number): Promise<void> => {
  const token = Cookies.get("token");
  if (!token) {
    throw new Error("Le token n'est pas disponible.");
  }

  const response = await fetch(
    `https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/infos/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Erreur lors de la suppression.");
  }
};

function AccountNews() {
  const queryClient = useQueryClient();

  const {
    data: infosData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["infos"],
    queryFn: fetchInfos,
  });

  const mutation = useMutation({
    mutationFn: deleteInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["infos"] });
      toast({ title: "Information supprimée avec succès !" });
    },
  });

  const handleDelete = (id: number) => {
    mutation.mutate(id);
  };

  if (isError) {
    return <span>Erreur lors de la récupération des informations.</span>;
  }

  return (
    <div>
      <h4 className="mb-8 flex flex-row items-center justify-center gap-x-2 text-center md:justify-start md:text-left">
        <Newspaper /> <span> Dernières infos</span>
      </h4>
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
      {isLoading ? (
        <span className="flex justify-center">
          <Loader />
        </span>
      ) : (
        <table className="mb-2 w-full">
          <thead>
            <tr className="border-b-2">
              <th className="p-2 md:px-4 md:text-left">Date</th>
              <th className="p-2 md:px-4 md:text-left">Titre</th>
              <th className="p-2 md:px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {infosData?.map((info) => (
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
