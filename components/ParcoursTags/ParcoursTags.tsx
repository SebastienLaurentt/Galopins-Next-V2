import { Mountain } from "lucide-react";

interface ParcoursTagsProps {
  tagDescription: string;
  tagColor?: string;
}

function ParcoursTags({ tagDescription, tagColor }: ParcoursTagsProps) {
  return (
    <div className="flex flex-col gap-y-2 items-center ">
      <Mountain className={`h-16 w-16 p-4 rounded-xl ${tagColor}`} />
      <p className="max-w-[120px] md:max-w-[140px] text-center">
        {tagDescription}
      </p>
    </div>
  );
}

export default ParcoursTags;
