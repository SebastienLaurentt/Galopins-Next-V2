import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SeeMoreButtonProps {
  href: string;
  linkName: string;
}

const SeeMoreButton = ({href, linkName }: SeeMoreButtonProps) => {
  return (
    <div className="flex justify-center mt-12 md:mt-16">
      <Button asChild >
        <Link href={href}> {linkName} </Link>
      </Button>
    </div>

  );
};

export default SeeMoreButton;
