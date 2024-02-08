import React from "react";

interface PageTitleProps {
  title: string;
  titleDescription?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({
  title,
  titleDescription,
}) => {
  return (
    <div className="mb-12 md:mb-16">
      <h1>
        {title}
      </h1>
      <p className="">
        {titleDescription}
      </p>
    </div>
  );
};

export default PageTitle;
