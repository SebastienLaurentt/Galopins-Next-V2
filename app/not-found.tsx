import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function NotFound() {

  return (
    <div className="text-center lg:py-4">
      <h1 className="text-3xl">
        Page non existante
      </h1>
      <Button>
        <Link href="/"> Retourner à l&apos;accueil </Link>
      </Button>
    </div>
  );
}