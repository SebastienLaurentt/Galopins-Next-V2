import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface AreaCardProps {
  src: StaticImageData;
  alt: string;
  areaTitle: string;
  areaDescription: string;
}

const AreaCard = ({src, alt, areaTitle, areaDescription}: AreaCardProps) => {
  return (
    <div>
      <div>
        <Image src={src} alt={alt} />
      </div>
      <div>
        <h3>
          {areaTitle}
        </h3>
        <p>
          {areaDescription}
        </p>
      </div>
    </div>
  )
}

export default AreaCard