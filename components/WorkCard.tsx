import { useState } from "react";
import Image from "next/image";

interface WorkCardProps {
  title: string;
  role: string;
  url: string;
  logo: string;
  year: string;
  experience: array;
}
export default function WorkCard({
  title,
  role,
  url,
  logo,
  year,
  experience,
}: WorkCardProps) {
  const [isExpanded, setExpanded] = useState(false);
  const image = require(`../public/work/${logo}.jpeg`);

  const handleExpand = (event: any) => {
    setExpanded(!isExpanded);
  };

  const handleNavigation = (event: any) => {
    event.stopPropagation();
  };
  return (
    <div onClick={handleExpand} className="cursor-pointer">
      <div className="flex flex-col hover:bg-slate-800 hover:bg-opacity-40">
        <div className="relative rounded-md h-24 flex p-2 items-center">
          <Image
            alt="icon"
            src={image}
            width="42"
            className="ml-2 rounded-md"
          />
          <div className="pl-4 w-full">
            <div className="flex justify-between items-center gap-4 w-full pr-2">
              <p className="text-md max-w-[60vw] sm:max-w-[70vw] truncate">
                {role}
              </p>
              <a
                href={url}
                target="blank"
                onClick={handleNavigation}
                className="bg-grey-400 w-12 bg-slate-800 flex items-center justify-center rounded-xl text-blue-500 hover:text-blue-400 text-xs"
              >
                Link
              </a>
            </div>
            <div className="flex justify-between items-center gap-4 w-full pr-2">
              <p className="text-gray-400 max-w-[40vw] sm:max-w-[50vw] truncate">
                {title}
              </p>
              <p className="text-gray-400 truncate text-sm">{year}</p>
            </div>
          </div>
        </div>

        {isExpanded && (
          <div className="relative rounded-md h-auto flex items-center px-4 mb-4 text-sm text-slate-400">
            <ul>
              {experience.map((item) => (
                <li key={item} className={experience.length > 1 && "pb-1"}>
                  {experience.length > 1 ? "-" : ""} <span> </span> {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
