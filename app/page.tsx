import Image from "next/image";

import Section from "@/components/Section/Section";
import { Button } from "@/components/ui/button";
import logoDrome from "../public/Drome.webp";
import img from "../public/home.webp";

export default function Home() {
  return (
    <main>
      <div className="relative bg-black bg-opacity-60 bg-top">
        <div className="min-h-[calc(100vh/1.3)] px-6 text-white ">
          <div className="pt-40 text-center max-w-[268px] mx-auto">
            <h1 className="mb-2 leading-[3rem]"> LES GALOPINS </h1>
            <p className="font-medium text-lg w-4/5 mx-auto mb-2 leading-[1.5rem]">
              Club de randonnée pédestre à Montélimar
            </p>
            <Button href="/" className="bg-green-800 hover:bg-green-600">
              Nous contacter
            </Button>
          </div>
        </div>
        <Image
          src={img}
          alt="Les Galopins"
          fill={true}
          className="object-cover absolute inset-y-10 -z-10"
        />
      </div>
      <Section marginBottom="true" marginTop="true" classname="">
        <ul>
          <li>
            <Image src={logoDrome} alt="Les Galopins" />
          </li>
          <li>
            <Image src={logoDrome} alt="Les Galopins" />
          </li>
          <li>
            <Image src={logoDrome} alt="Les Galopins" />
          </li>
        </ul>
      </Section>
    </main>
  );
}
