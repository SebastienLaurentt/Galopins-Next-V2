import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SeeMoreButtonProps {
  href: string;
  linkName: string;
}

const SeeMoreButton = ({href, linkName }: SeeMoreButtonProps) => {
  return (
    <Button>
      <Link href={href}> {linkName} </Link>
    </Button>
  );
};

export default SeeMoreButton;
