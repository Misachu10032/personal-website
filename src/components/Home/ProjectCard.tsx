import {useTranslations} from 'next-intl';
import React from 'react';

// Define the prop types
interface ProjectCardProps {
  img: string;
  name: string;
  description: string;
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  description,
  img,
  name,
  url
}) => {
  const t = useTranslations('HomePage.ProjectCard');

  const handleClick = () => {
    const isExternal = /^https?:\/\//.test(url); // Check if the URL is external
    if (isExternal) {
      window.open(url); // Open external URL in a new tab
    } else {
      const hostUrl = new URL(window.location.href);
      console.log(hostUrl);
      window.open(`${hostUrl.origin}/${url}`);
    }
  };

  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4"
      onClick={handleClick}
    >
      <div className="relative h-96 overflow-hidden rounded-lg transition-all duration-300 ease-out">
        <img
          alt={name}
          className="h-full w-full object-cover transition-all duration-300 ease-out hover:scale-110"
          src={img}
        />
      </div>

      <button
        className="mt-5 text-xl font-medium  laptop:text-3xl"
        onClick={handleClick}
        type="button"
      >
        {name && t(name)}
      </button>

      <h2 className="text-lg opacity-50  laptop:text-xl">
        {description && t(description)}
      </h2>
    </div>
  );
};

export default ProjectCard;
