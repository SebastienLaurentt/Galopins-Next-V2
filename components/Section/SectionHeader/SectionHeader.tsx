import React from "react";

interface SectionHeaderProps {
  title: string;
  titleHighlight: string;
  titleDescription?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  titleHighlight,
  titleDescription,
}) => {
  return (
    <div className="mb-12 md:mb-16 md:max-w-[500px]">
      <h2>
        {title} <span className="text-accent">{titleHighlight}</span>
      </h2>
      <p className="sectionHeaderDescription">
        {titleDescription}
      </p>
    </div>
  );
};

export default SectionHeader;
