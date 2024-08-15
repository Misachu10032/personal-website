import React from 'react';
import { useTranslations } from "next-intl";
// Define the prop types
interface WorkCardProps {
  img: string;
  name: string;
  description: string;
  onClick: () => void;
}

const WorkCard: React.FC<WorkCardProps> = ({ img, name, description, onClick }) => {
    const t= useTranslations('HomePage.workCard')
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: '600px' }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        />
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name&&t(name)}
      </h1>
      <h2 className="text-xl opacity-50">
        {description&&t(description)}
      </h2>
    </div>
  );
};

export default WorkCard;
