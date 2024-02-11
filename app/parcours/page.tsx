import LinkButton from "@/components/Button/LinkButton/LinkButton";
import ParcoursCard from "@/components/Card/ParcoursCard/ParcoursCard";
import PageTitle from "@/components/PageTitle/PageTitle";
import ParcoursTags from "@/components/ParcoursTags/ParcoursTags";
import ProgDownload from "@/components/ProgDownload/ProgDownload";
import Section from "@/components/Section/Section";
import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import SubSection from "@/components/SubSection/SubSection";

import Image from "next/image";
import parcoursImg from "../../public/images/parcours.webp";

function Parcours() {
  return (
    <main className="mb-20 md:mb-24 lg:mb-32">
      <PageTitle
        title="Les Parcours"
        titleDescription="Pour en savoir plus sur les types de randonnées que nous proposons mais aussi sur le programme de la saison à venir !"
      />
      <Section marginBottom={true} marginTop={false} classname="">
        <SectionHeader
          title="Plusieurs randonnées chaque "
          titleHighlight="semaine"
        />
        <SubSection
          marginBottom={true}
          marginTop={false}
          classname=""
          title="Les possibilités"
        >
          <p className="mb-4 md:mb-6">
            Des randonnées sont proposées le Lundi après-midi et le Vendredi à
            la journée :
          </p>
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
        </SubSection>
        <SubSection
          marginBottom={false}
          marginTop={false}
          childrenClassname="xl:flex xl:flex-row-reverse xl:gap-x-8 w-full"
          titleClassname="xl: hidden"
          title="Les lieux de rendez-vous"
        >
          <div className="xl:w-3/5">
            <Image
              src={parcoursImg}
              alt="Randonneurs dans les bois"
              className="mb-4 md:mb-8 xl:mb-0"
            />
          </div>
          <div className="flex flex-col justify-center xl:w-2/5">
            <h3 className="hidden xl:block"> Les lieux de rendez-vous </h3>
            <p className="mb-2 md:mb-8">
              Les Galopins se déplacent toujours en covoiturage afin de limiter
              le nombre de voitures. Le tarif est laissé à l&apos;appréciation
              du conducteur.
            </p>
            <p className="mb-2">
              Le lundi, le lieu de rendez-vous avant chaque départ est situé sur
              le parking en face du 95 Route de Valence (Bar le Provence) avec
              une heure de départ fixée à 13h30.
            </p>
            <LinkButton
              href="https://www.google.fr/maps/@44.5748529,4.7550546,3a,75y,247.31h,73.37t/data=!3m6!1e1!3m4!1s2s3LYTC7lpNn_U2tl5-w3A!2e0!7i16384!8i8192?entry=tts"
              targetBlank="_blank"
              linkName="Voir sur Google Maps"
              classname="mb-6 md:mb-8"
            />
            <p>
              Le vendredi, les lieux de rendez-vous et de départ seront précisés
              par mail ou sur le site par l&apos;accompagnateur.
            </p>
          </div>
        </SubSection>
      </Section>
      <Section marginBottom={true} marginTop={false} classname="">
        <SectionHeader
          title="Programme de la saison "
          titleHighlight="2023/2024"
        />
        <SubSection marginBottom={true} marginTop={false} classname="">
          <p>
            Les programmes des randonnées sont établis pour une période de 4
            mois. Vous pouvez choisir puis télécharger le programme que vous
            souhaitez ci-dessous.
          </p>
          <ProgDownload />
        </SubSection>
        <SubSection
          marginBottom={false}
          marginTop={false}
          classname=""
          title="Détails des programmes"
        >
          <ul className="flex flex-wrap gap-6 justify-around">
            <li>
              <ParcoursTags
                tagColor="bg-white border"
                tagDescription="Cool du Lundi en Drôme ou Ardèche"
              />
            </li>
            <li>
              <ParcoursTags
                tagColor="bg-cyan-700 text-white"
                tagDescription="Classiques du Lundi en Drôme "
              />
            </li>
            <li>
              {" "}
              <ParcoursTags
                tagColor="bg-yellow-500 text-white"
                tagDescription="Classiques du Lundi en Ardèche"
              />{" "}
            </li>
            <li>
              {" "}
              <ParcoursTags
                tagColor="bg-green-700 text-white"
                tagDescription="Randos du Vendredi"
              />{" "}
            </li>
          </ul>
        </SubSection>
      </Section>
    </main>
  );
}

export default Parcours;
