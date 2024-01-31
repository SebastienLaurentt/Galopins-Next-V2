import React from 'react';

interface SectionHeaderProps {
  title: string;
  titleHighlight: string;
} 

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, titleHighlight }) => {
  return (
    <div className='max-w-[272px]'>
      <h2>{title} <span className='text-green-600'>{titleHighlight}</span></h2>
    </div>
  );
};

export default SectionHeader;
