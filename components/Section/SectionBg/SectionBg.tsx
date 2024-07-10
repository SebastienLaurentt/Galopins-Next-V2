import { StaticImageData } from "next/image";

interface SectionProps {
  id?: string;
  className?: string;
  bg?: StaticImageData;

}

function SectionBg({
  id,
  className,
  bg,

}: SectionProps) {


  return (
    <section
      id={`${id}`}
      className={` ${className}  relative w-full bg-cover bg-center px-6 md:rounded-xl md:px-10 xl:px-16`}
      style={{
        backgroundImage: bg
          ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg.src})`
          : "none",
      }}
    />
  );
}

export default SectionBg;
