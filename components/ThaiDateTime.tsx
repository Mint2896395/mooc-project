import React from "react";

interface NewsProps {
  publishedAt: any;
}

const ThaiDateTime: React.FC<NewsProps> = ({ publishedAt }) => {
  const date = new Date(publishedAt);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = date.toLocaleDateString("th-TH", options);

  return <div>{formattedDate}</div>;
};

export default ThaiDateTime;
