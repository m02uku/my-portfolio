import React from "react";

type LinkItem = {
  title: string;
  link: string;
};

type LinkListProps = {
  items: LinkItem[];
};

const LinkList: React.FC<LinkListProps> = ({ items }) => (
  <>
    {items.map((item) => (
      <a href={item.link} key={item.title} className="text-blue-600 underline hover:text-blue-800">
        {item.title}
      </a>
    ))}
  </>
);

export default LinkList;
