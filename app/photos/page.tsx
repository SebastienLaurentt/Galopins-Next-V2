import PageTitle from '@/components/PageTitle/PageTitle'
import Section from '@/components/Section/Section'
import SectionHeader from '@/components/Section/SectionHeader/SectionHeader'
import React from 'react'

function Photos() {
  return (
    <main className="mb-20 md:mb-24 lg:mb-32">
    <PageTitle
      title="Nos Photos"
    />
    <Section marginBottom={true} marginTop={false} classname="">
      <SectionHeader
        title="Les paysages de nos dernières "
        titleHighlight="randonnées"
      />
    </Section>
  </main>
  )
}

export default Photos