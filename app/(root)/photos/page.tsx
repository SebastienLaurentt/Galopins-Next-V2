import PageTitle from "@/components/PageTitle/PageTitle";
import PhotosDisplay from "@/components/PhotosDisplay/PhotosDisplay";
import Section from "@/components/Section/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Les Galopins de Montélimar",
  description: "Pour découvrir les paysages de nos dernières randonnées !",
};

function Photos() {
  return (
    <main className="mainMb">
      <PageTitle
        title="Nos Photos"
        titleDescription="Les paysages de nos dernières randonnées !"
      />
      <Section marginBottom={true} marginTop={false} classname="">
        <PhotosDisplay />
      </Section>
    </main>
  );
}

export default Photos;
