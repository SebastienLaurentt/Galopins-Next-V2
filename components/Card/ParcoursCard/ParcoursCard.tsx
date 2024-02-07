import React from 'react'

interface ParcoursCardProps {
  parcoursTitle: string;
  area: string;
  frequency: string;
  case1: string;
  case2: string;
}

const ParcoursCard = ({parcoursTitle, area, frequency, case1, case2 }: ParcoursCardProps) => {
  return (
    <div>
      <h3>
        {parcoursTitle}
      </h3>
      <span>
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