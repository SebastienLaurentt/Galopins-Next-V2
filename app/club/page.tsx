import PageTitle from '@/components/PageTitle/PageTitle'
import Section from '@/components/Section/Section'
import SectionHeader from '@/components/Section/SectionHeader/SectionHeader'
import React from 'react'

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
      </Section>
      
      <Section marginBottom={true} marginTop={false} classname="">
        <SectionHeader
          title="Une association à but "
          titleHighlight="non lucratif"
      />

      </Section>

    </main>
  )
}

export default Club