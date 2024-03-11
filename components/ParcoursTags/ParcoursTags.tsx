import { Mountain } from "lucide-react";

interface ParcoursTagsProps {
  tagDescription: string;
  tagColor?: string;
}

function ParcoursTags({ tagDescription, tagColor }: ParcoursTagsProps) {
  return (
    <div className="flex flex-col items-center gap-y-2 ">
      <Mountain className={`size-16 rounded-xl p-4 ${tagColor}`} />
      <p className="max-w-[120px] text-center md:max-w-[140px]">
        {tagDescription}
      </p>
    </div>
  );
}

export default ParcoursTags;
