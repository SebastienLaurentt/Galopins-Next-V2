import LinkButton from "@/components/Button/LinkButton/LinkButton";
import AreaCard from "@/components/Card/AreaCard/AreaCard";
import ParcoursCard from "@/components/Card/ParcoursCard/ParcoursCard";
import ClubIcon from "@/components/ClubIcon/ClubIcon";
import Section from "@/components/Section/Section";
import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Mountain, Users } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import logoArdeche from "../public/images/Ardeche.webp";
import logoDrome from "../public/images/Drome.webp";
import img from "../public/images/Home.webp";
import logoVaucluse from "../public/images/Vaucluse.webp";

export const metadata: Metadata = {
  title: "Les Galopins de Montélimar",
  description:
    "Bienvenue sur le site de notre club de randonnée pédestre situé à Montélimar !",
};

export default function Home() {
  return (
    <main className="mb-20 md:mb-24 lg:mb-32">
      {/* Hero Section */}

      <Section>
        <div className="mx-auto mt-16 flex max-w-[340px] flex-col items-center space-y-2 text-center md:max-w-[570px] lg:mb-4 lg:mt-32 lg:max-w-[680px] lg:space-y-4 xl:hidden">
          <h1> Les Galopins de Montélimar </h1>
          <p className="text-sm leading-5 md:text-md md:leading-6">
            Bienvenue sur le site de notre club.
            <br />
            Découvrez notre histoire, nos parcours ou nos dernières photos !
          </p>
        </div>
      </Section>

      <section className="parallax-container mx-auto mt-4 flex lg:mt-5 xl:hidden">
        <div
          className="parallax relative mx-auto h-[300px] w-full overflow-hidden md:h-[400px] lg:h-[500px]"
          style={{ backgroundImage: `url(${img.src})` }}
        >
          <div className="parallax-overlay absolute inset-0 z-0 bg-black opacity-50"></div>
        </div>
      </section>

      <section className="parallax-container mx-auto mt-8 hidden xl:flex xl:px-4">
        <div
          className="parallax relative mx-auto w-full overflow-hidden rounded-3xl lg:h-[600px] 2xl:h-[800px]"
          style={{ backgroundImage: `url(${img.src})` }}
        >
          <div className="parallax-overlay absolute bg-black opacity-50"></div>
          <div className="relative mx-auto text-center text-white lg:mt-40 2xl:mt-56 lg:max-w-[680px] lg:space-y-4 ">
            <h1>Les Galopins de Montélimar</h1>
            <p className="text-md leading-6">
              Bienvenue sur le site de notre club.
              <br />
              Découvrez notre histoire, nos parcours ou nos dernières photos !
            </p>
          </div>
        </div>
      </section>

      {/* Area Section */}
      <Section marginBottom={true} marginTop={true} classname="">
        <SectionHeader
          title="Un club qui vadrouille dans la "
          titleHighlight="région"
          titleDescription="Les Galopins sortent en groupe pour randonner principalement dans
          les départements de la Drôme, de l'Ardèche et du Gard.
          Cependant, le Vaucluse et la Lozère peuvent également être choisis
          pour des randonnées plus lointaines."
        />
        <div>
          <ul>
            <li>
              <AreaCard
                src={logoDrome}
                alt="Lavande de la Drome"
                areaTitle="Drôme"
                tag1="Montélimar"
                tag2="Puygiron"
                tagsBgColor="bg-indigo-800"
              />
            </li>
            <li>
              <AreaCard
                src={logoArdeche}
                alt="Valon Pont d'Arc en Ardèche"
                areaTitle="Ardèche"
                tag1="Chomerac"
                tag2="Vallon"
                tagsBgColor="bg-green-700"
              />
            </li>
            <li>
              <AreaCard
                src={logoVaucluse}
                alt="Gordes"
                areaTitle="Vaucluse"
                tag1="Gordes"
                tag2="Gigondas"
                tagsBgColor="bg-cyan-700"
              />
            </li>
          </ul>
        </div>
      </Section>

      {/* Parcours Section */}
      <Section marginBottom={true} marginTop={true} classname="">
        <SectionHeader
          title="Plusieurs randonnées chaque "
          titleHighlight="semaine"
          titleDescription="Chaque semaine, plusieurs types de randonnées sont organisés le
          Lundi après-midi et le Vendredi pour la journée entière."
        />
        <div>
          <ul className="flex flex-col gap-y-10 lg:flex-row lg:justify-center lg:gap-x-16 xl:gap-y-0">
            <li>
              <ParcoursCard
                parcoursTitle="Lundi | Après-Midi"
                area="Drôme ou Ardèche"
                frequency="2 types de randonnées"
                case1={
                  <>
                    <strong>&#x2022; Cool :</strong> 5 - 9 km
                  </>
                }
                case2={
                  <>
                    <strong>&#x2022; Classique :</strong> 10 - 14 km
                  </>
                }
              />
            </li>
            <li>
              <ParcoursCard
                parcoursTitle="Vendredi | Journée"
                area="Vaucluse ou Gard"
                frequency="En alternance"
                case1={
                  <>
                    <strong>&#x2022; Semaine A :</strong> Jusqu&apos;à 15 km
                  </>
                }
                case2={
                  <>
                    <strong>&#x2022; Semaine B : </strong> De 15 à 20 km
                  </>
                }
              />
            </li>
          </ul>
        </div>
        <LinkButton
          seeMoreButton={true}
          href="/parcours"
          linkName="Plus d'infos"
        />
      </Section>

      {/* Club Section */}
      <Section marginBottom={false} marginTop={false} classname="">
        <SectionHeader
          title="Quelques chiffres sur notre "
          titleHighlight="club"
        />
        <div>
          <div></div>
          <div>
            <ul className="flex flex-col gap-y-8 lg:flex-row lg:justify-center lg:gap-x-16 lg:gap-y-0">
              <li className="">
                <ClubIcon iconDescription="Créé en Septembre 2004">
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
        <LinkButton seeMoreButton={true} href="/club" linkName="Plus d'infos" />
      </Section>
    </main>
  );
}
