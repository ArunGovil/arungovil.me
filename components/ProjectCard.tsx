import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  icon: string;
}
export default function ProjectCard({
  title,
  description,
  url,
  icon,
}: ProjectCardProps) {
  const image = require(`../public/icons/${icon}.svg`);
  return (
    <a href={url}>
      <div className="relative rounded-md h-24 flex p-2 items-center hover:bg-gray-900 hover:bg-opacity-40">
        <Image alt="icon" src={image} width="42" className="ml-2" />
        <div className="pl-4">
          <p className="text-md max-w-[60vw] sm:max-w-[70vw] truncate">
            {title}
          </p>
          <p className="text-gray-400 max-w-[60vw] sm:max-w-[70vw] truncate">
            {description}
          </p>
        </div>
        <div className="absolute right-12 text-gray-800 hover:text-gray-500">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            ></path>
          </svg>
        </div>
      </div>
    </a>
  );
}
