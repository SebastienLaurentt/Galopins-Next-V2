import PageTitle from "@/components/PageTitle/PageTitle";
import Section from "@/components/Section/Section";
import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Les Galopins de Montélimar",
  description:
    "Pour en savoir plus sur les types de randonnées que nous proposons mais aussi sur le programme de la saison à venir !",
};

function Actualites() {
  return (
    <main className="mb-20 md:mb-24 lg:mb-32">
      <PageTitle
        title="Les Dernières Actualités"
        titleDescription="Pour en savoir plus sur les dernières actualités du club !"
      />
      <Section marginBottom={true} marginTop={false} classname="">
        <SectionHeader
          title="Quoi de nouveau chez les"
          titleHighlight="Galopins ?"
        />
      </Section>
    </main>
  );
}

export default Actualites;
