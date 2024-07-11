import React from "react";

interface HomeIconProps {
  children: React.ReactNode;
  iconDescription: string;
}

const ClubIcon = ({ children, iconDescription }: HomeIconProps) => {
  return (
    <div className="flex flex-col items-center gap-y-2">
      {children}
      <span className="max-w-[170px] text-balance text-center text-md font-medium lg:max-w-[210px] lg:text-lg">
        {iconDescription}
      </span>
    </div>
  );
};

export default ClubIcon;
