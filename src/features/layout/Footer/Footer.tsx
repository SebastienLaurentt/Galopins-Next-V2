import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="flex text-xs md:text-sm items-center px-6 md:px-10 xl:px-16 xl:max-w-[1280px] xl:mx-auto py-4 justify-between items-center ">
        <span className="">@2024 - Les Galopins</span>
        <span className="">
          <Link href="/mentions"> Mentions légales </Link>
        </span>
      </div>
    </footer>
  );
};
