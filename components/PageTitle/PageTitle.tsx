import React from "react";

interface PageTitleProps {
  title: string;
  titleDescription?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, titleDescription }) => {
  return (
    <section className="text-center mb-12 md:mb-16 mt-20 xl:mt-24 px-6 md:px-10 xl:px-16 2xl:max-w-[1280px] 2xl:mx-auto ">
      <h1 className="mb-4 lg:mb-6">{title}</h1>
      <p className="max-w-[320px] md:max-w-[500px] lg:max-w-[700px] mx-auto">
        {titleDescription}
      </p>
    </section>
  );
};

export default PageTitle;
