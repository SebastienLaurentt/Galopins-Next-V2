interface SubSectionProps {
  classname?: string;
  marginBottom?: boolean;
  marginTop?: boolean;
  title?:string;
  children: React.ReactNode;
}

const SubSection = ({
  classname,
  marginBottom,
  marginTop,
  title,
  children,
}: SubSectionProps) => {
  const isMarginBottom = marginBottom ? "mb-12 md:mb-20" : "";
  const isMarginTop = marginTop ? "" : "";

  return (
    <section className={`${classname} ${isMarginBottom} ${isMarginTop}    `}>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

export default SubSection;
