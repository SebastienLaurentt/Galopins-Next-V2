import SeeMoreButton from '@/components/Button/SeeMoreButton/SeeMoreButton'
import PageTitle from '@/components/PageTitle/PageTitle'
import Section from '@/components/Section/Section'
import SectionHeader from '@/components/Section/SectionHeader/SectionHeader'
import Image from 'next/image'
import React from 'react'

import imgRustrel from "../../public/Rustrel.jpg";
import imgEquipe from "../../public/PhotosEquipe.jpg";

function Club() {
  return (
    <main className="mb-20 md:mb-16 lg:mb-32">
      <PageTitle
        title="Le Club"
        titleDescription="Pour en apprendre davantage sur les status de notre club mais aussi les activités en dehors des randonnées !"
      />
      <Section marginBottom={true} marginTop={false} classname="">
        <SectionHeader
          title="Un esprit convivial durant et à côté des "
          titleHighlight="randonnées"
        />
        <div className='mb-16 md:mb-32 md: gap-x-16 lg:gap-x-32 md:flex w-full'>
          <div className='flex flex-col justify-center md:w-2/5'>
            <p className='mb-2 md:mb-8'>
            Chaque année, une sortie en bus est organisée et reste ouverte aux non-adhérents. 
            </p>

            <p className='mb-4 md:mb-0'>
            Des lieux tels que St Guilhem le Désert, La St Baume, Les sentiers de Pagnol, mais aussi les
            carrières d&apos;ocre de Rustrel, Le pont du Gard ou L&apos;étang du Vaccarès ont déjà été visités.
            </p>
          </div>
          <div className='md:w-3/5'>
            <Image src={imgRustrel} alt="Carrières d'Ocre de Rustrel" className='' />
          </div>
        </div>
        <div>
          <div className='mb-4 md:mb-8'>
            <p>
            Afin de garder un côté convivial, tous les 2 mois un restaurant est organisé
            (vendredi soir ou samedi midi). En début d'année, la galette des rois est aussi l'occasion de
            se retrouver pour partager un moment festif. C'est également le cas fin Juin où un repas en
            plein air clôture la fin de saison. Le club participe financièrement à ces événements.
            </p>
          </div>
          <div>
            <Image src={imgEquipe} alt="Carrières d'Ocre de Rustrel" className='' />
          </div>
        </div>
      </Section>
      
      <Section marginBottom={true} marginTop={false} classname="">
        <SectionHeader
          title="Une association à but "
          titleHighlight="non lucratif"
        />
        <SeeMoreButton href="/mentions" linkName="Voir les mentions" />
      </Section>

    </main>
  )
}

export default Club