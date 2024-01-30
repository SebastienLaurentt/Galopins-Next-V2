import Image from "next/image";

import img from "../public/home.webp";

export default function Home() {
  return (
    <main>
      <div className="relative bg-black bg-opacity-60 bg-top">
        <div className="min-h-[calc(100vh/1.3)] px-6 text-white ">
          <div className="pt-40 text-center">
            <h1 className="mb-2 leading-10"> LES GALOPINS </h1>
            <p className="font-medium text-lg w-4/5 mx-auto">
              {" "}
              Club de randonnée pédestre à Montélimar{" "}
            </p>
          </div>
        </div>
        <Image
          src={img}
          alt="Les Galopins"
          fill={true}
          className="object-cover absolute inset-y-10 -z-10"
        />
      </div>
      <div>Yoooo</div>
    </main>
  );
}
