import SectionHeader from "../SectionHeader/SectionHeader";

interface SectionProps {
  classname?: string;
  marginBottom?: string;
  marginTop?: string;
  children: React.ReactNode;
}

const Section = ({classname, marginBottom, marginTop, children  }:SectionProps) => {

  const isMarginBottom = marginBottom ? "mb-8" : "";
  const isMarginTop = marginTop ? "mt-8" : "";

  return (
    <section className={`${classname} ${isMarginBottom} ${isMarginTop} px-6`}>
      <SectionHeader
        title="Un club qui vadrouille dans la "
        titleHighlight="région"
      />
      {children}
    </section>
  );
};

export default Section;
