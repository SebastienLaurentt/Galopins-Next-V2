interface SectionProps {
  classname?: string;
  marginBottom?: string;
  marginTop?: string;
  children: React.ReactNode;
}

const Section = ({
  classname,
  marginBottom,
  marginTop,
  children,
}: SectionProps) => {
  const isMarginBottom = marginBottom ? "mb-8" : "";
  const isMarginTop = marginTop ? "mt-20" : "";

  return (
    <section className={`${classname} ${isMarginBottom} ${isMarginTop} px-6`}>
      {children}
    </section>
  );
};

export default Section;
