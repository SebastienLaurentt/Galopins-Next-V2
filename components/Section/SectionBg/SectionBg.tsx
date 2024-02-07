import { StaticImageData } from "next/image";

interface SectionProps {
  id?: string;
  className?: string;
  minHeightScreen: boolean;
  bg?: StaticImageData;
  children: React.ReactNode;
}

function SectionBg({
  id,
  className,
  minHeightScreen,
  bg,
  children,
}: SectionProps) {
  const isMinHeightScreen = minHeightScreen
    ? "min-h-screen"
    : "min-h-[calc(100vh/1.3)]";

  return (
    <section
      id={`${id}`}
      className={` ${className} ${isMinHeightScreen} relative p-4 md:p-8 bg-center bg-cover w-full`}
      style={{
        backgroundImage: bg
          ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg.src})`
          : "none",
      }}
    >
      {children}
    </section>
  );
}

export default SectionBg;
