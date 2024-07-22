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
      <div className="flex flex-col items-center">
        <h3 className="w-[300px] text-center md:w-[500px]">
          Bienvenue sur l&apos;espace administrateur des Galopins !
        </h3>
      </div>

      <div className="flex flex-col items-center justify-center gap-x-4">
        <span className="mb-2 w-[220px] text-center md:w-[300px] md:text-md">
          {" "}
          Sur quel élément du site souhaitez vous agir ?{" "}
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

        <div className=" mx-2 mb-8 rounded-md bg-slate-900 p-4 text-white md:mb-0 md:w-[700px] lg:w-[800px]">
          {activeButton === "Infos" && <AccountNews />}
          {activeButton === "Randos" && <AccountRando />}
        </div>
      </div>
    </main>
  );
}

export default Account;
