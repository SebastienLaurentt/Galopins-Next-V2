interface SectionProps {
  classname?: string;
  marginBottom?: boolean;
  marginTop?: boolean;
  children: React.ReactNode;
}

const Section = ({
  classname,
  marginBottom,
  marginTop,
  children,
}: SectionProps) => {
  const isMarginBottom = marginBottom ? "mb-32" : "";
  const isMarginTop = marginTop ? "mt-20" : "";

  return (
    <section className={`${classname} ${isMarginBottom} ${isMarginTop} px-6`}>
      {children}
    </section>
  );
};

export default Section;
