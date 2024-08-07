import AreaCard from "@/components/Card/AreaCard/AreaCard";
import ParcoursCard from "@/components/Card/ParcoursCard/ParcoursCard";
import ClubIcon from "@/components/ClubIcon/ClubIcon";
import Section from "@/components/Section/Section";
import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import { Button } from "@/components/ui/button";
import { anton } from "@/lib/font";
import { CalendarCheck, Check, Mountain, Users } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import logoArdeche from "/public/images/Ardeche.webp";
import logoDrome from "/public/images/Drome.webp";
import imgRandos from "/public/images/Ecosystem-bro.svg";
import imgVadrouille from "/public/images/Hiking-bro.svg";
import img from "/public/images/Home.webp";
import logoVaucluse from "/public/images/Vaucluse.webp";

export const metadata: Metadata = {
  title: "Les Galopins de Montélimar",
  description:
    "Bienvenue sur le site de notre club de randonnée pédestre situé à Montélimar !",
};

export default function Home() {
  return (
    <main className="mainMb">
      {/* Hero Section */}

      <Section>
        <div className="mx-auto mt-20 flex max-w-[340px] flex-col items-center space-y-2 text-center md:max-w-[570px] lg:mb-4 lg:mt-32 lg:max-w-[680px] lg:space-y-4 xl:hidden">
          <h1 className={`${anton}`}> LES GALOPINS DE MONTELIMAR </h1>
          <p className="text-sm leading-5 md:text-md md:leading-6">
            Club de randonnée pédestre en Rhône-Alpes.
          </p>
          <Button asChild className="flex md:hidden">
            <Link href="/photos">Nos Photos</Link>
          </Button>
        </div>
      </Section>

      <section className="mt-4 md:mt-6 lg:mt-8 xl:hidden">
        <div>
          <div className="relative mx-auto h-[300px] w-full overflow-hidden md:h-[450px] lg:h-[550px]">
            <Image
              src={img}
              alt="yyy"
              className="size-full scale-125 object-cover object-center"
              priority
              placeholder="blur"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </div>
      </section>

      <section className="parallax-container mx-auto mt-8 hidden xl:flex xl:px-4">
        <div
          className="parallax relative mx-auto w-full overflow-hidden rounded-md xl:h-[780px]"
          style={{ backgroundImage: `url(${img.src})` }}
        >
          <div className="parallax-overlay absolute bg-black opacity-50"></div>
          <div className="relative mx-auto text-center text-white lg:space-y-4 xl:mt-72 xl:max-w-[800px] ">
            <h1 className={`${anton}`}>LES GALOPINS DE MONTELIMAR</h1>
            <p className="text-lg leading-6">
              Club de randonnée pédestre en Rhône-Alpes
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
          Le Vaucluse et la Lozère peuvent également être choisis
          pour des randonnées plus lointaines."
          imgSrc={imgVadrouille}
          imgClassname="md:-right-6 md:-top-12 md:w-[300px] lg:w-[350px] xl:w-[400px] lg:-top-16 xl:-top-28"
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
                tagsBgColor="bg-primary"
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
      <Section marginBottom={true} marginTop={false} classname="">
        <SectionHeader
          title="Plusieurs randonnées chaque "
          titleHighlight="semaine"
          titleDescription="Chaque semaine, plusieurs types de randonnées sont organisés le
          Lundi après-midi et le Vendredi pour la journée entière."
          imgSrc={imgRandos}
          imgClassname="md:right-0 md:-top-4 md:w-[300px] lg:w-[350px] xl:w-[400px] xl:right-8 lg:-top-10 xl:-top-16 "
        />
        <ul className="flex flex-col gap-y-10 lg:flex-row lg:justify-center lg:gap-x-16 xl:gap-y-0">
          <li>
            <ParcoursCard
              parcoursTitle="Lundi | Après-Midi"
              area="Drôme ou Ardèche"
              frequency="Au choix"
              case1={
                <>
                  <span className="flex flex-row items-center gap-x-1">
                    <Check strokeWidth={3} color="#1A3636" />
                    <strong> Rando Cool :</strong> 5 - 9 km
                  </span>
                </>
              }
              case2={
                <>
                  <span className="flex flex-row items-center gap-x-1">
                    <Check strokeWidth={3} color="#1A3636" />
                    <strong> Rando Classique :</strong> 10 - 14 km
                  </span>
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
                  <span className="flex flex-row items-center gap-x-1">
                    <Check strokeWidth={3} color="#1A3636" />
                    <strong> Semaine A :</strong> Jusqu&apos;à 15 km
                  </span>
                </>
              }
              case2={
                <>
                  <span className="flex flex-row items-center gap-x-1">
                    <Check strokeWidth={3} color="#1A3636" />
                    <strong> Semaine B : </strong> De 15 à 20 km
                  </span>
                </>
              }
            />
          </li>
        </ul>
        <div className="mt-8 flex flex-row justify-center">
          <Button asChild>
            <Link href="/parcours">Plus d&apos;infos</Link>
          </Button>
        </div>
      </Section>

      {/* Club Section */}
      <Section marginBottom={false} marginTop={false} classname="">
        <SectionHeader
          title="Quelques chiffres sur notre "
          titleHighlight="club"
          isTitleCentered
        />

        <ul className="flex flex-wrap justify-center gap-y-8 md:flex-row md:gap-x-8 lg:gap-x-16 lg:gap-y-0">
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
        <div className="mt-8 flex flex-row justify-center">
          <Button asChild>
            <Link href="/club">Plus d&apos;infos</Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}
