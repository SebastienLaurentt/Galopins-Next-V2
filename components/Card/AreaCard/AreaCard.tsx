import Image, { StaticImageData } from "next/image";

interface AreaCardProps {
  src: StaticImageData;
  alt: string;
  areaTitle: string;
  areaDescription?: string;
  tag1?: string;
  tag2?: string;
  tag3?: string;
  tagsBgColor?: string;
}

const AreaCard = ({
  src,
  alt,
  areaTitle,
  areaDescription,
  tag1,
  tag2,
  tag3,
  tagsBgColor,
}: AreaCardProps) => {
  return (
    <div className="mb-16">
      <div>
        <div className="flex items-center gap-x-4 mb-2">
          <div>
            <h3 className="mb-1">{areaTitle}</h3>
          </div>
          <div className="flex gap-x-2">
            {tag1 && <span className={`areaTags ${tagsBgColor}`}>{tag1}</span>}
            {tag2 && <span className={`areaTags ${tagsBgColor}`}>{tag2}</span>}
            {tag3 && <span className={`areaTags ${tagsBgColor}`}>{tag3}</span>}
          </div>
        </div>
        <div className="">
        <Image src={src} alt={alt} />
        </div>

        <p className="text-sm md:text-sm">{areaDescription}</p>
      </div>
    </div>
  );
};

export default AreaCard;
