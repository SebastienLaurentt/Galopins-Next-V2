'use client'

import { useEffect, useState } from 'react';
import AccountRando from '../../components/AccountComponent/AccountRando';
import AccountNews from '../../components/AccountComponent/AccountNews';
import AccountHeader from '../../components/AccountComponent/AccountHeader';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/Auth';

function Account() {
  const [activeButton, setActiveButton] = useState('Dernières Infos'); 

  const { isLogged } = useAuth();
  const router = useRouter();

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  useEffect(() => {
    if (!isLogged) {
      // Redirigez l'utilisateur vers la page de connexion s'il n'est pas connecté
      router.push('/login');
      return;
    }

  }, [isLogged, router]);

  return (
    <>
      <AccountHeader />
      <main className="bg-stone-300 min-h-screen">
        <div className=" flex flex-col items-center justify-center bg-stone-300   ">
          <h3 className="text-black  text-center mt-12">
            Bienvenue sur l&apos;espace administrateur des Galopins ! 
          </h3>
          <div className='bg-stone-200 p-8 mb-4 rounded-xl text-center'>
            <p className='italic text-black'> Depuis cet espace, il est possible de gérer les informations du site des Galopins. </p>
            <ol className='text-center text-black '>
              <li>
                <p > <span className='font-bold'>Premierement</span>, vous pouvez choisir le type d&apos;informations avez lequel vous souhaitez interagir en cliquant sur les boutons ci-dessous. </p>
              </li>
              <li>
                <p className='mb-0'> <span className='font-bold'>Deuxiemement</span>, vous pourez choisir d&apos;ajouter, supprimer ou modifier ces informations.  </p>
              </li>
            </ol>
          </div>

          <div className='flex flex-row gap-x-2 text-black mb-2'>
            <button
              className={`p-2 border-solid border-2 border-zinc-600 rounded-md md:hover:bg-zinc-600 md:hover:text-white ${
                activeButton === 'Dernières Infos' ? 'bg-zinc-600 text-white' : ''
              }`}
              onClick={() => handleButtonClick('Dernières Infos')}
            >
              Dernières Infos
            </button>
            <button
              className={`p-2 border-solid border-2 border-zinc-600 rounded-md md:hover:bg-zinc-600 md:hover:text-white ${
                activeButton === 'Photos Randos' ? 'bg-zinc-600 text-white' : ''
              }`}
              onClick={() => handleButtonClick('Photos Randos')}
            >
              Photos Randos
            </button>
          </div>

          <div className="text-white bg-slate-900 p-4 rounded-md mb-4">
            {activeButton === 'Dernières Infos' && <AccountNews />}
            {activeButton === 'Photos Randos' && <AccountRando />}

          </div>
        </div>
      </main>
    </>
  );
}

export default Account;



