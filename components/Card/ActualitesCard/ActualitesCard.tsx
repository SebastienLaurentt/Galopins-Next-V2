interface ActualitesCardProps {
  title: string;
  date: string;
  description: string;
}

const ActualitesCard = ({ title, date, description }: ActualitesCardProps) => {
  return (
    <div className="rounded-lg border p-4 text-left shadow-lg">
      <h4 className="mb-2 text-md font-bold xl:text-xl">{title}</h4>
      <p className="mb-2 text-pretty">{description}</p>
      <p className="italic">le {date}</p>
    </div>
  );
};

export default ActualitesCard;
