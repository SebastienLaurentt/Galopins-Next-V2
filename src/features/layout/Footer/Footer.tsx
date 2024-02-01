import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="flex items-center px-6 py-4 justify-between">
        <span className="text-xs">@2024 - Les Galopins</span>
        <span className="text-xs">
          <Link href="/mentions"> Mentions légales </Link>
        </span>
      </div>
    </footer>
  );
};
