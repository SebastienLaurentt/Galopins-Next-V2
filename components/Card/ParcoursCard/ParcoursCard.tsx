import React, { ReactNode } from 'react'

interface ParcoursCardProps {
  parcoursTitle: string;
  area: string;
  frequency: string;
  case1: ReactNode;
  case2: ReactNode;
}

const ParcoursCard = ({parcoursTitle, area, frequency, case1, case2 }: ParcoursCardProps) => {
  return (
    <div className='flex flex-col max-w-[360px] md:max-w-[480px] mx-auto mb-10 text-center'>
      <div className='bg-green-800 py-4'>
        <h3 className='text-white'>
          {parcoursTitle}
        </h3>
        <span className='mb-2 text-white md:text-md'>
          {area}
        </span>
      </div>
      <div className='py-4 md:text-md  border-b-2 border-r-2 border-l-2  border-green-800'>
        <span>
          {frequency}
        </span>
        <ul>
          <li>
            {case1}
          </li>
          <li>
            {case2}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ParcoursCard