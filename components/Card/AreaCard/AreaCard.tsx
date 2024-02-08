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
    <div className='mb-16'>
      <div className='mb-4'>
        <Image src={src} alt={alt} />
      </div>
      <div>
        <div className='flex items-center gap-x-4'>
          <div>
            <h3 className=''>
              {areaTitle}
            </h3>
          </div>
          <div className='flex gap-x-2'>
            <span className='areaTags'>
              Montélimar
            </span>
            <span className='areaTags'>
              Puygiron
            </span>
          </div>
        </div>

        <p className='text-sm md:text-sm'>
          {areaDescription}
        </p>
      </div>
    </div>
  )
}

export default AreaCard