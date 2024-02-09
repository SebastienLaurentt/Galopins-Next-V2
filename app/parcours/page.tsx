import ParcoursCard from "@/components/Card/ParcoursCard/ParcoursCard";
import PageTitle from "@/components/PageTitle/PageTitle";
import Section from "@/components/Section/Section";
import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";

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
        <div>
          <ul className="flex flex-col xl:flex-row xl:justify-center gap-y-10 xl:gap-y-0 xl:gap-x-16">
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
      </Section>
      <Section marginBottom={true} marginTop={false} classname="">
        <SectionHeader
          title="Un programme pour la saison "
          titleHighlight="2023/2024"
        />
      </Section>
    </main>
  );
}

export default Parcours;
