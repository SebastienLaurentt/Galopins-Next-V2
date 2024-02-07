import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="flex text-xs md:text-sm items-center px-6 md:px-10 py-4 justify-between ">
        <span className="">@2024 - Les Galopins</span>
        <span className="">
          <Link href="/mentions"> Mentions légales </Link>
        </span>
      </div>
    </footer>
  );
};
