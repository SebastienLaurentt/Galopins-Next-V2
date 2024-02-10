import SeeMoreButton from "@/components/Button/SeeMoreButton/SeeMoreButton";
import PageTitle from "@/components/PageTitle/PageTitle";
import Section from "@/components/Section/Section";
import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import Image from "next/image";

import imgEquipe from "../../public/PhotosEquipe.jpg";
import imgRustrel from "../../public/Rustrel.jpg";
import imgRustrel2 from "../../public/Rustrel2.jpg";

function Club() {
  return (
    <main className="mb-20 md:mb-24 lg:mb-32">
      <PageTitle
        title="Le Club"
        titleDescription="Pour en apprendre davantage sur les status de notre club mais aussi les activités en dehors des randonnées !"
      />
      <Section marginBottom={true} marginTop={false} classname="">
        <SectionHeader
          title="Un esprit convivial durant et à côté des "
          titleHighlight="randonnées"
        />
        <div className="mb-12 md:mb-20 md:gap-x-8 lg:gap-x-12 xl:gap-x-28 md:flex w-full">
          <div className="flex flex-col justify-center md:w-2/5">
            <h3> Des sorties plus calmes </h3>
            <p className="mb-2 md:mb-8">
              Chaque année, une sortie en bus est organisée et reste ouverte aux
              non-adhérents.
            </p>
            <p className="mb-4 md:mb-0">
              Des lieux tels que St Guilhem le Désert, Les sentiers de Pagnol,
              mais aussi les carrières d&apos;ocre de Rustrel, Le pont du Gard
              ou L&apos;étang du Vaccarès ont déjà été visités.
            </p>
          </div>
          <div className="md:w-3/5 xl:w-4/5">
            <Image
              src={imgRustrel}
              alt="Carrières d'Ocre de Rustrel"
              className="lg:hidden"
            />
            <Image
              src={imgRustrel2}
              alt="Carrières d'Ocre de Rustrel"
              className="hidden lg:block"
            />
          </div>
        </div>
        <div>
          <h3> Des événements conviviaux </h3>
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
            className="mt-4 md:mt-8"
          />
        </div>
      </Section>

      <Section marginBottom={true} marginTop={false} classname="">
        <SectionHeader
          title="Une association à but "
          titleHighlight="non lucratif"
        />
        <p>
          Notre club est une association à but non lucratif régie par la loi de
          1901.
        </p>
        <SeeMoreButton href="/mentions" linkName="Voir les mentions" />
      </Section>
    </main>
  );
}

export default Club;
