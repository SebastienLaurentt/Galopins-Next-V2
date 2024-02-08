import Image, { StaticImageData } from "next/image";

interface AreaCardProps {
  src: StaticImageData;
  alt: string;
  areaTitle: string;
  areaDescription: string;
  tag1?: string;
  tag2?: string;
  tag3?: string;
}

const AreaCard = ({
  src,
  alt,
  areaTitle,
  areaDescription,
  tag1,
  tag2,
  tag3,
}: AreaCardProps) => {
  return (
    <div className="mb-16">
      <div className="mb-4">
        <Image src={src} alt={alt} />
      </div>
      <div>
        <div className="flex items-center gap-x-4">
          <div>
            <h3 className="">{areaTitle}</h3>
          </div>
          <div className="flex gap-x-2">
            {tag1 && <span className="areaTags">{tag1}</span>}
            {tag2 && <span className="areaTags">{tag2}</span>}
            {tag3 && <span className="areaTags">{tag3}</span>}
          </div>
        </div>

        <p className="text-sm md:text-sm">{areaDescription}</p>
      </div>
    </div>
  );
};

export default AreaCard;
