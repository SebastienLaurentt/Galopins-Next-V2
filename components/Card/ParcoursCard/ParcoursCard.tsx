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
    <div className='flex flex-col mb-10 text-center bg-green-800 text-white py-4 rounded-lg'>
      <h3 className='text-white'>
        {parcoursTitle}
      </h3>
      <span className='mb-2'>
        {area}
      </span>
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
  )
}

export default ParcoursCard