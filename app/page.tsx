import SeeMoreButton from "@/components/Button/SeeMoreButton/SeeMoreButton";
import AreaCard from "@/components/Card/AreaCard/AreaCard";
import ParcoursCard from "@/components/Card/ParcoursCard/ParcoursCard";
import ClubIcon from "@/components/ClubIcon/ClubIcon";
import Section from "@/components/Section/Section";
import SectionBg from "@/components/Section/SectionBg/SectionBg";
import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Mountain, Users } from "lucide-react";
import logoArdeche from "../public/Ardeche.jpg";
import logoDrome from "../public/Drome.jpg";
import logoGard from "../public/Gard.jpg";
import img from "../public/Home.jpg";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <SectionBg
        bg={img}
        minHeightScreen={false}
        className="flex flex-col justify-center"
      >
        <div className="pb-4 text-center max-w-[280px] mx-auto text-white">
          <h1 className="mb-2"> LES GALOPINS </h1>
          <p className="font-medium text-md w-4/5 mx-auto mb-2 leading-6">
            Club de randonnée pédestre à Montélimar
          </p>
          <Button
            variant="hero"
            href="/"
          >
            Nous contacter
          </Button>
        </div>
      </SectionBg>

      {/* Area Section */}
      <Section marginBottom={true} marginTop={true} classname="">
        <SectionHeader
          title="Un club qui vadrouille dans la "
          titleHighlight="région"
        />
        <div className="mb-12">
          <p>
            Les Galopins sortent en groupe pour randonner principalement dans
            les départements de la Drôme, de l&apos;Ardèche et du Gard.
            Cependant, le Vaucluse et la Lozère peuvent également être choisis
            pour des randonnées plus lointaines.
          </p>
        </div>
        <div>
          <ul>
            <li>
              <AreaCard
                src={logoDrome}
                alt="Lavande de la Drome"
                areaTitle="Drôme"
                areaDescription="Le département de la Drôme est un lieu de randonnée idéal pour les Galopins."
              />
            </li>
            <li>
              <AreaCard
                src={logoArdeche}
                alt="Valon Pont d'Arc en Ardèche"
                areaTitle="Ardèche"
                areaDescription="Le département de la Drôme est un lieu de randonnée idéal pour les Galopins."
              />
            </li>
            <li>
              <AreaCard
                src={logoGard}
                alt="Pont du Gard"
                areaTitle="Gard"
                areaDescription="Le département de la Drôme est un lieu de randonnée idéal pour les Galopins."
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
        />
        <div className="mb-12 flex flex-col gap-y-2">
          <p>
            Chaque semaine, plusieurs types de randonnées sont organisés le
            Lundi après-midi et le Vendredi pour la journée entière.
          </p>
        </div>
        <div>
          <ul>
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
                parcoursTitle="Vendredi | Journée entière"
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
        <SeeMoreButton
          href="/parcours"
          linkName="Plus d'infos"
        />
      </Section>

      {/* Club Section */}
      <Section marginBottom={true} marginTop={false} classname="">
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
