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
    <section className={`${classname} ${isMarginBottom} ${isMarginTop} px-6 md:px-10 xl:px-16 2xl:max-w-[1280px] 2xl:mx-auto`}>
      {title}
      {children}
    </section>
  );
};

export default SubSection;
