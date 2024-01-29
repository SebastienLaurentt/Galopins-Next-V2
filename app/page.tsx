import Image from "next/image";

import img from "../public/home.webp";

export default function Home() {
  return (
    // <main className="">
    //   <div className="">
    //     <Image
    //       src={img}
    //       alt="Les Galopins"
    //       className="w-full -z-10"
    //     />
    //     <div className="absolute">

    //     </div>

    //   </div>
    // </main>
    <div className="relative bg-black bg-opacity-50 ">
      <div className="py-72 text-white">
        <h1> Les Galopins </h1>
        <h2> Club de randonnée à Montélimar </h2>
      </div>
      <Image
        src={img}
        alt="Les Galopins"
        fill={true}
        className="object-cover -z-10"
      />
    </div>
  );
}
