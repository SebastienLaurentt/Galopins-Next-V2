interface SubSectionProps {
  classname?: string;
  marginBottom?: boolean;
  marginTop?: boolean;
  titleClassname?: string;
  title?:string;
  childrenClassname?: string;
  children: React.ReactNode;
}

const SubSection = ({
  classname,
  marginBottom,
  marginTop,
  titleClassname,
  title,
  childrenClassname,
  children,
}: SubSectionProps) => {
  const isMarginBottom = marginBottom ? "mb-12 md:mb-20" : "";
  const isMarginTop = marginTop ? "mt-8" : "";

  return (
    <div className={`${classname} ${isMarginBottom} ${isMarginTop}    `}>
      <h3 className={titleClassname}>{title}</h3>
      <div className={childrenClassname}>
      {children}
      </div>
    </div>
  );
};

export default SubSection;
