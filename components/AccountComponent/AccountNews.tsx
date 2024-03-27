import { useEffect, useState } from 'react';
import axios from 'axios';
import { RiAddCircleLine } from "react-icons/ri";

import Cookies from 'js-cookie';
import AccountLinkButton from "./Button/AccountLinkButton";
import  Link  from "next/link";

interface InfoDataProps {
  id: number;
  date: string;
  title: string;
}

function AccountNews() {
  const [infosData, setInfosData] = useState<InfoDataProps[]>([]); // State with all Rando Data
  
  const handleDelete = async (id: number) => {
    try {
      // Get token cookie for Authorization
      const token = Cookies.get('token');

      console.log(token)

      // Error gestion if token not available
      if (!token) {
        console.error('Le token n\'est pas disponible.');
        return;
      }

      // Delete request
      await axios.delete(`https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/infos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Mettez à jour l'état pour refléter la suppression
      setInfosData((prevData) => prevData.filter((info) => info.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  // Fetch all Randos Data
  useEffect(() => {
    axios.get('https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/infos/')
    .then(response => {
      setInfosData(response.data.data);
    })

  }, []); 

  return (
    <div className=''>
        <h5 className='mb-4 text-center'> Tableau de gestion des dernières infos </h5>
        <div className='flex items-start justify-start mb-2'>
          <AccountLinkButton
                  bgColor='bg-green-800'
                  href="/account/addnews"
                  linkName="Créer une nouvelle information"
                  logo={<RiAddCircleLine/>}
                  classname='md:hover:bg-green-600'
          />
        </div>
        <table className="mb-2">
          <thead>
            <tr className='border-b-2'>
              <th className="px-4 py-2">Date de l&apos;info</th>
              <th className="px-4 py-2">Titre de l&apos;info</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {infosData.map((info) => (
              <tr key={info.id} className="border-b">
                <td className="px-4 py-2">{info.date}</td>
                <td className="px-4 py-2">{info.title}</td>
                <td className="px-4 py-2 text center flex ">
                  <div className="px-2">
                    <button onClick={() => handleDelete(info.id)} className="text-red-500 md:hover:font-bold">Supprimer</button>
                  </div>
                  <div className="px-2">
                      <Link href={`/account/updatenews/${info.id}`} className="text-cyan-500 md:hover:font-bold">Modifier</Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>

  );
}

export default AccountNews;



