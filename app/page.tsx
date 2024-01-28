import Image from "next/image";

import img from "../public/photos.webp"

export default function Home() {
  return (
    <main className="py-4">
      <h1> Les Galopins </h1>
      <h2> Club de randonnée à Montélimar </h2>
      <Image src={img} alt="Les Galopins" width={500} height={500} className="w-full" />
    </main>
  );
}
