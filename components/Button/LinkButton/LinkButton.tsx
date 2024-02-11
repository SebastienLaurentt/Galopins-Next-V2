import { Button } from "@/components/ui/button";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  linkName: string;
  classname?: string;
}

const LinkButton = ({href, linkName, classname }: LinkButtonProps) => {
  return (
    <div className={`${classname}`}>
      <Button asChild variant="link">
        <Link href={href} target="_blank"> {linkName} </Link>
      </Button>
    </div>

  );
};

export default LinkButton;
