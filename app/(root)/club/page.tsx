import PageTitle from "@/components/PageTitle/PageTitle";
import Section from "@/components/Section/Section";
import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import Image from "next/image";

import SubSection from "@/components/SubSection/SubSection";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import imgAbbaye from "/public/images/AbbayeSenanque.png";
import imgDigue from "/public/images/Digue.webp";
import imgEquipe from "/public/images/PhotoEquipe.png";

export const metadata: Metadata = {
  title: "Les Galopins de Montélimar",
  description:
    "Pour en apprendre davantage sur les status de notre club mais aussi les activités en dehors des randonnées !",
};

function Club() {
  return (
    <main className="mainMb">
      <PageTitle
        title="Le Club"
        titleDescription="Pour en apprendre davantage sur les status de notre club mais aussi les activités en dehors des randonnées !"
      />
      <Section marginBottom={true} marginTop={false} classname="">
        <SectionHeader
          title="Un esprit convivial durant et à côté des "
          titleHighlight="randonnées"
        />

        <SubSection
          marginBottom={true}
          marginTop={false}
          childrenClassname="md:gap-x-8 lg:gap-x-12 xl:gap-x-28 md:flex w-full"
        >
          <div className="flex flex-col justify-center md:w-2/5">
            <h3> Des sorties plus calmes </h3>
            <p className="mb-2 md:mb-8">
              Chaque année, une sortie en bus est organisée et reste ouverte aux
              non-adhérents.
            </p>
            <p>
              Des lieux tels que St Guilhem le Désert, les sentiers de Pagnol,
              mais aussi la Fontaine de Vaucluse, l&apos;Abbaye de Senanque ou
              le pont du Gard ont déjà été visités.
            </p>
          </div>
          <div className="mt-4 md:mb-0 md:w-3/5 xl:w-4/5">
            <Image
              src={imgDigue}
              alt="Carrières d'Ocre de Rustrel"
              className="rounded-lg lg:hidden"
              priority
              placeholder="blur"
            />
            <Image
              src={imgAbbaye}
              alt="Carrières d'Ocre de Rustrel"
              className="hidden rounded-lg lg:block"
              priority
              placeholder="blur"
            />
          </div>
        </SubSection>

        <SubSection
          marginBottom={true}
          marginTop={false}
          classname=""
          title="Des événements conviviaux"
        >
          <p>
            Tous les 2 mois, un restaurant est organisé le vendredi soir ou
            samedi midi. En début d&apos;année, la galette des rois est aussi
            l&apos;occasion de se retrouver pour partager un moment festif.
            C&apos;est également le cas fin Juin où un repas en plein air
            clôture la fin de saison. Le club participe financièrement à ces
            événements.
          </p>
          <Image
            src={imgEquipe}
            alt="Carrières d'Ocre de Rustrel"
            className="mt-4 rounded-lg md:mt-8"
            placeholder="blur"
          />
        </SubSection>
      </Section>

      {/* <Section marginBottom={true} marginTop={false} classname="">
        <SectionHeader
          title="Une association à but "
          titleHighlight="non lucratif"
        />
        <p className="mb-2 md:mb-8">
          Notre club est une association à but non lucratif régie par la loi du
          1er juillet 1901 et au décret du 16 août 1901.
        </p>
        <p>
          Les Galopins ont pour but d’organiser des activités pédestres simples,
          accessibles à tous, destinées à la découverte de la nature dans la
          bonne humeur et la convivialité.
        </p>
        <div className="mt-8 flex flex-row justify-center">
          <Button asChild>
            <Link href="/mentions">Voir les mentions</Link>
          </Button>
        </div>
      </Section> */}
    </main>
  );
}

export default Club;
