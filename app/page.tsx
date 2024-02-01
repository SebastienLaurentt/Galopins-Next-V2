import Image from "next/image";

import Section from "@/components/Section/Section";
import { Button } from "@/components/ui/button";
import logoDrome from "../public/Drome.webp";
import img from "../public/Home.jpg";
import SectionBg from "@/components/SectionBg/SectionBg";

export default function Home() {
  return (
    <main>
      <SectionBg bg={img} minHeightScreen={false} className="flex flex-col justify-center">
        <div className="pb-4 text-center max-w-[280px] mx-auto text-white">
              <h1 className="mb-2"> LES GALOPINS </h1>
              <p className="font-medium text-lg w-4/5 mx-auto mb-2 leading-6">
                Club de randonnée pédestre à Montélimar
              </p>
              <Button href="/" className="border border-green-600 bg-transparent hover:bg-green-600">
                Nous contacter
              </Button>
        </div> 
      </SectionBg>
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
