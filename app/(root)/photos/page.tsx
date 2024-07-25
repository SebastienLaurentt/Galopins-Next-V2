import PageTitle from "@/components/PageTitle/PageTitle";
import PhotosDisplay from "@/components/PhotosDisplay/PhotosDisplay";
import Section from "@/components/Section/Section";
import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Les Galopins de Montélimar",
  description: "Pour découvrir les paysages de nos dernières randonnées !",
};

function Photos() {
  return (
    <main className="mainMb">
      <PageTitle title="Nos Photos" />
      <Section marginBottom={true} marginTop={false} classname="">
        <SectionHeader
          title="Les paysages de nos dernières "
          titleHighlight="randonnées"
        />
        <PhotosDisplay />
      </Section>
    </main>
  );
}

export default Photos;
