// FileUploader.tsx
import { ChangeEvent } from "react";// Assurez-vous d'importer l'icône appropriée
import { Label } from "../ui/label";
import { ImagePlus } from "lucide-react";

interface FileUploaderProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  content: React.ReactNode;
}

const FileUploader = ({ onChange, content }: FileUploaderProps) => {
  return (
    <div className="space-y-1 text-left">
      <Label>
        Photos
        <div className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-white">
          <ImagePlus size={48} />
          <span className="mx-auto mt-2 w-[260px] text-center text-sm font-medium leading-4">
            {content}
          </span>
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={onChange}
          className="hidden"
          multiple
        />
      </Label>
    </div>
  );
};

export default FileUploader;
