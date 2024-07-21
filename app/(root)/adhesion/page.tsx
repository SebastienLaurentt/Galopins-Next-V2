import PageTitle from "@/components/PageTitle/PageTitle";
import Section from "@/components/Section/Section";
import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";

import DownloadButton from "@/components/Button/DownloadButton/DownloadButton";
import Contact from "@/components/Contact/Contact";
import { Mail, Phone } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import imgAdhesion from "/public/images/Adhesion.webp";

const admissionPdf = `/pdf/Admission_Galopins.pdf`;

export const metadata: Metadata = {
  title: "Les Galopins de Montélimar",
  description:
    "Nos conseils et recommandations si vous souhaitez rejoindre Les Galopins !",
};

function Adhesion() {
  return (
    <main className="mb-20 md:mb-24 lg:mb-32">
      <PageTitle
        title="Adhésion"
        titleDescription="Nos conseils et recommandations si vous souhaitez nous rejoindre !"
      />

      {/* First Section : Adhesion */}
      <Section marginBottom={true} marginTop={false} classname="">
        <SectionHeader
          title="Comment se préparer à "
          titleHighlight="randonner ? "
        />
        <div className="w-full xl:flex xl:flex-row-reverse xl:gap-x-8">
          <div className="xl:w-3/5">
            <Image
              src={imgAdhesion}
              alt=""
              className="mb-4 rounded-lg md:mb-8 xl:mb-0"
              priority
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col justify-center xl:w-2/5 ">
            <p className="mb-4">
              Pour rejoindre le club il est nécessaire de fournir un certificat
              médical validant l&apos;aptitude à la randonnée ainsi qu&apos;une
              copie d&apos;attestation de responsabilité civile ou carte FFRP.
            </p>
            <p className="mb-4">
              Les chaussures de randonnées sont obligatoires (baskets non
              autorisées). Une polaire et un coupe vent sont conseillés selon la
              saison. Les accompagnateurs se réservent le droit de refuser les
              personnes mal équipées.
            </p>
            <p>
              Un montant de 15€ ainsi que le formulaire d&apos;inscription
              ci-dessous seront demandés afin de valider l&apos;adhésion.
            </p>
            <DownloadButton
              href={admissionPdf}
              fileName="Admission_Galopins.pdf"
              linkName="Télécharger le formulaire"
              classname="mt-4"
            />
          </div>
        </div>
      </Section>

      {/* Second Section : Contact */}
      <Section marginBottom={true} marginTop={false} classname="">
        <SectionHeader
          title=" Des questions ?"
          titleHighlight="Contactez-nous ! "
        />
        <div className="flex flex-col gap-y-16 md:flex-row md:justify-between md:gap-x-12">
          <div className="md:w-1/2">
            <h3>Par téléphone ou email</h3>
            <p className="mb-8 md:mb-24 ">
              Mr Alain Bourseau <br /> Président des Galopins
            </p>
            <ul className="flex flex-col gap-y-4 md:gap-y-12">
              <li>
                <div className="flex flex-row gap-x-8  md:gap-y-2 ">
                  <Phone size={48} />
                  <div className="flex flex-col">
                    <span>Téléphone</span>
                    <span>06 24 01 60 30</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-row  gap-x-8 md:gap-y-2">
                  <Mail size={48} />
                  <div className="flex flex-col">
                    <span>Email</span>
                    <span>alain.bourseau@wanadoo.fr</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h3>Par formulaire de contact</h3>
            <Contact />
          </div>
        </div>
      </Section>
    </main>
  );
}

export default Adhesion;
