"use client";

import AccountNews from "@/components/AccountComponent/AccountNews";
import AccountRando from "@/components/AccountComponent/AccountRando";
import { useState } from "react";

function Account() {
  const [activeButton, setActiveButton] = useState("Infos");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <main className="mt-12">
      <div className="flex flex-col items-center justify-center gap-x-4">
        <span className="mb-2 text-center text-xl font-bold lg:text-2xl">
          Bonjour !
        </span>
        <span className="mb-6 w-[220px] text-center text-md md:w-[300px] lg:text-lg">
          Que voulez vous faire ?
        </span>
        <div className="mb-4 flex flex-row gap-x-2">
          <button
            className={`rounded-md border-2 border-solid border-zinc-600 p-2 md:hover:bg-zinc-600 md:hover:text-white ${
              activeButton === "Infos" ? "bg-zinc-600 text-white" : ""
            }`}
            onClick={() => handleButtonClick("Infos")}
          >
            Dernières Infos
          </button>
          <button
            className={`rounded-md border-2 border-solid border-zinc-600 p-2 md:hover:bg-zinc-600 md:hover:text-white ${
              activeButton === "Randos" ? "bg-zinc-600 text-white" : ""
            }`}
            onClick={() => handleButtonClick("Randos")}
          >
            Photos Randos
          </button>
        </div>
      </div>

      <div className="mx-2 px-2 py-4 md:mx-6  lg:py-6 xl:mx-auto xl:max-w-screen-xl xl:px-16">
        <div className="min-h-[500px] rounded-lg bg-slate-900">
          <div className="mb-8 rounded-md  px-4 py-8 text-white md:mx-auto md:mb-0 md:w-[700px] lg:w-[800px]">
            {activeButton === "Infos" && <AccountNews />}
            {activeButton === "Randos" && <AccountRando />}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Account;

{
}
