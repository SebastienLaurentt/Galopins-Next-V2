import Image from "next/image";

import ClubIcon from "@/components/ClubIcon/ClubIcon";
import Section from "@/components/Section/Section";
import SectionBg from "@/components/SectionBg/SectionBg";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Mountain, Users } from "lucide-react";
import logoDrome from "../public/Drome.webp";
import img from "../public/Home.jpg";

export default function Home() {
  return (
    <main>
      <SectionBg
        bg={img}
        minHeightScreen={false}
        className="flex flex-col justify-center"
      >
        <div className="pb-4 text-center max-w-[280px] mx-auto text-white">
          <h1 className="mb-2"> LES GALOPINS </h1>
          <p className="font-medium text-lg w-4/5 mx-auto mb-2 leading-6">
            Club de randonnée pédestre à Montélimar
          </p>
          <Button
            href="/"
            className="border border-green-600 bg-transparent hover:bg-green-600"
          >
            Nous contacter
          </Button>
        </div>
      </SectionBg>
      <Section marginBottom="true" marginTop="true" classname="">
        <SectionHeader
          title="Un club qui vadrouille dans la "
          titleHighlight="région"
        />
        <div>
          <p>Les Galopins sortent en groupe pour randonner dans les départements de la Drôme, l'Ardèche et le Vaucluse.</p>
        </div>
        <div>
          <ul>
            <li>
              <div>
                <Image src={logoDrome} alt="Logo Drôme" />
                <h3></h3>
              </div>
            </li>
          </ul>
        </div>
      </Section>
      <Section marginBottom="true" marginTop="true" classname="">
        <SectionHeader
          title="Quelques chiffres sur notre "
          titleHighlight="club"
        />
        <div>
          <div></div>
          <div>
            <ul className="flex flex-col gap-y-8">
              <li className="">
                <ClubIcon iconDescription="Créé en 1954">
                  <CalendarCheck className="clubIcon" />
                </ClubIcon>
              </li>
              <li className="">
                <ClubIcon iconDescription="83 adhérents en 2024">
                  <Users className="clubIcon" />
                </ClubIcon>
              </li>
              <li className="">
                <ClubIcon iconDescription="+200 randonnées en 2023">
                  <Mountain className="clubIcon" />
                </ClubIcon>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );
}
