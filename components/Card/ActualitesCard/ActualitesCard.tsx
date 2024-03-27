interface ActualitesCardProps {
  title: string;
  date: string;
  description: string;
}

const ActualitesCard = ({ title, date, description }: ActualitesCardProps) => {
  return (
    <div className="w-[320px] rounded-xl border p-4 text-left shadow-lg lg:w-[440px] xl:w-[500px]">
      <h4 className="mb-2 text-md font-bold md:mb-4 md:text-xl md:leading-8">
        {title}
      </h4>
      <p className="mb-2 text-pretty md:mb-4">{description}</p>
      <p className="italic">le {date}</p>
    </div>
  );
};

export default ActualitesCard;
