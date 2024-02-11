import { Button } from "@/components/ui/button";
import Link from "next/link";

interface LinkButtonProps {
  seeMoreButton?: boolean;
  href: string;
  linkName: string;
  classname?: string;
}

const LinkButton = ({
  seeMoreButton,
  href,
  linkName,
  classname,
}: LinkButtonProps) => {
  const isSeeMoreButton = seeMoreButton
    ? "flex justify-center mt-12 md:mt-16"
    : "";

  return (
    <div className={`${isSeeMoreButton} ${classname}`}>
      <Button asChild variant="link">
        <Link href={href} target="_blank">
          {" "}
          {linkName}{" "}
        </Link>
      </Button>
    </div>
  );
};

export default LinkButton;
