import { Button } from "@/components/ui/button";

interface DownloadButtonProps {
  href: string;
  fileName: string;
  linkName: string;
  classname?: string;
}

const DownloadButton = ({
  href,
  fileName,
  linkName,
  classname,
}: DownloadButtonProps) => {
  return (
    <div className={`${classname}`}>
      <Button>
        <a href={href} download={fileName}>
          {linkName}
        </a>
      </Button>
    </div>
  );
};

export default DownloadButton;
