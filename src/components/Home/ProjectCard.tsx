import React from 'react';
import { useTranslations } from "next-intl";

// Define the prop types
interface ProjectCardProps {
  img: string;
  name: string;
  description: string;
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ img, name, description, url }) => {
  const t = useTranslations('HomePage.ProjectCard');
  
  const handleClick = () => {
    const isExternal = /^https?:\/\//.test(url); // Check if the URL is external
    if (isExternal) {
      window.open(url); // Open external URL in a new tab
    } else {

      const hostUrl = new URL(window.location.href);
      console.log(hostUrl)
      window.open(`${hostUrl}/${url}`)

    }
  };

  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={handleClick}
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

      <button
        type="button"
        onClick={handleClick}
        className="mt-5 text-3xl font-medium"
      >
        {name && t(name)}
      </button>

      <h2 className="text-xl opacity-50">
        {description && t(description)}
      </h2>
    </div>
  );
};

export default ProjectCard;
