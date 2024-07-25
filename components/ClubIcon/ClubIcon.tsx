import React from "react";

interface HomeIconProps {
  children: React.ReactNode;
  iconDescription: string;
}

const ClubIcon = ({ children, iconDescription }: HomeIconProps) => {
  return (
    <div className="flex flex-col items-center gap-y-2">
      {children}
      <span className="max-w-[150px] text-balance text-center font-medium leading-5 md:max-w-[170px] md:text-md md:leading-6">
        {iconDescription}
      </span>
    </div>
  );
};

export default ClubIcon;
