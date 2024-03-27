interface ActualitesCardProps {
  title: string;
  date: string;
  description: string;
}

const ActualitesCard = ({ title, date, description }: ActualitesCardProps) => {
  return (
    <div className="flex flex-col justify-between border-2 p-4 shadow-lg md:min-h-56 md:p-8 ">
      <h4 className="mb-2 text-md  font-bold md:mb-4 md:text-xl md:leading-8 xl:text-2xl">
        {title}
      </h4>
      <p className="mb-2 text-pretty md:mb-4">{description}</p>
      <p className="italic">le {date}</p>
    </div>
  );
};

export default ActualitesCard;
