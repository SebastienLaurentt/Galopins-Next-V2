import Image from "next/image";

import img from "../public/home.webp";

export default function Home() {
  return (
    <main>
      <div className="relative bg-black bg-opacity-20 bg-top">
        <div className="min-h-[calc(100vh/1.3)] px-6 text-white ">
          <div className="pt-40">
            <h1> Les Galopins </h1>
            <h2> Club de randonnée à Montélimar </h2>
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
