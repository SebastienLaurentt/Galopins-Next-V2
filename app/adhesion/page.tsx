import PageTitle from '@/components/PageTitle/PageTitle'
import Section from '@/components/Section/Section'
import SectionHeader from '@/components/Section/SectionHeader/SectionHeader'
import React from 'react'

function Adhesion() {
  return (
    <main className="mb-20 md:mb-24 lg:mb-32">
      <PageTitle
        title="Adhésion"
        titleDescription="Nos conseils et recommandations si vous souhaitez nous rejoindre !"
      />
      <Section marginBottom={true} marginTop={false} classname="">
        <SectionHeader
          title="Comment se préparer à "
          titleHighlight="randonner"
        />
      </Section>
      
      <Section marginBottom={true} marginTop={false} classname="">
        <SectionHeader
          title=" Des questions ?"
          titleHighlight="Contactez-nous ! "
      />

      </Section>
    </main>
  )
}

export default Adhesion