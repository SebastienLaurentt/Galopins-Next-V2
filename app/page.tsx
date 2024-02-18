import LinkButton from "@/components/Button/LinkButton/LinkButton";
import AreaCard from "@/components/Card/AreaCard/AreaCard";
import ParcoursCard from "@/components/Card/ParcoursCard/ParcoursCard";
import ClubIcon from "@/components/ClubIcon/ClubIcon";
import Section from "@/components/Section/Section";
import SectionBg from "@/components/Section/SectionBg/SectionBg";
import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Mountain, Users } from "lucide-react";
import Link from "next/link";
import logoArdeche from "../public/images/Ardeche.jpg";
import logoDrome from "../public/images/Drome.jpg";
import logoGard from "../public/images/Gard.jpg";
import img from "../public/images/Home2.webp";



export default function Home() {
  return (
    <main className="mb-20 md:mb-24 lg:mb-32">
      {/* Hero Section */}
      <SectionBg
        bg={img}
        minHeightScreen={false}
        className="flex flex-col justify-center"
      >
        <div className="pb-4 lg:pb-16 xl:pb-0 xl:pt-24 text-center  max-w-[280px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[1280px] mx-auto  text-white">
          <h1 className="mb-2 md:mb-4"> LES GALOPINS </h1>
          <p className="font-medium text-md  lg:text-2xl w-4/5 lg:w-4/5 mx-auto  mb-2 md:mb-4 leading-6 md:leading-8 lg:leading-9">
            Club de randonnée pédestre à Montélimar
          </p>
          <Button asChild variant="hero">
            <Link href="/adhesion">Nous contacter</Link>
          </Button>
        </div>
      </SectionBg>

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
                tagsBgColor="bg-accent"
              />
            </li>
            <li>
              <AreaCard
                src={logoGard}
                alt="Pont du Gard"
                areaTitle="Gard"
                tag1="Aiguèze"
                tag2="Goudargues"
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
          <ul className="flex flex-col lg:flex-row lg:justify-center gap-y-10 xl:gap-y-0 lg:gap-x-16">
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
                area="Vaucluse, Gard ou Lozère"
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
            <ul className="flex flex-col lg:flex-row lg:justify-center gap-y-8 lg:gap-y-0 lg:gap-x-16">
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
