import Image, { StaticImageData } from "next/image";
import React from "react";

interface SectionHeaderProps {
  title: string;
  isTitleCentered?: boolean;
  titleHighlight: string;
  titleDescription?: string;
  imgSrc?: StaticImageData;
  imgClassname?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  isTitleCentered,
  titleHighlight,
  titleDescription,
  imgSrc,
  imgClassname,
}) => {

  const titleClassname = isTitleCentered ? "mx-auto text-center" : "";

  return (
    <div className="relative mb-12 w-full md:mb-24">
      <h2 className={`${titleClassname}`}>
        {title}
        <span className="text-accent">{titleHighlight}</span>
      </h2>
      <p className="md:w-[400px] lg:w-[560px] xl:w-[700px]">
        {titleDescription}
      </p>

      {imgSrc && (
        <Image
          src={imgSrc}
          alt="line"
          className={`hidden md:absolute md:flex ${imgClassname}`}
        />
      )}
    </div>
  );
};

export default SectionHeader;
