import React from 'react';

interface SectionHeaderProps {
  title: string;
  titleHighlight: string;
} 

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, titleHighlight }) => {
  return (
    <div className='max-w-[320px]'>
      <h2>{title} <span className='text-accent'>{titleHighlight}</span></h2>
      <p className='sectionHeaderDescription'> Les Galopins sortent en groupe pour randonner dans les départements de la Drôme, l&apos;Ardèche et le Vaucluse. </p>
    </div>
  );
};

export default SectionHeader;
