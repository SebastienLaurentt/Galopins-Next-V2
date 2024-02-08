import React from 'react'

interface HomeIconProps {
  children:React.ReactNode;
  iconDescription:string;
}

const ClubIcon = ({children, iconDescription}: HomeIconProps) => {
  return (
    <div className='flex flex-col items-center gap-y-2'>
        {children}
        <span className='font-medium text-md lg:text-lg lg:max-w-[210px] text-center'>{iconDescription}</span>
    </div>
)
}

export default ClubIcon