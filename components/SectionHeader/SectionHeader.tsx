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
    <div className="max-w-[320px] mb-20">
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
