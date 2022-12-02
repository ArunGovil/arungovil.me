import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  icon: any;
}
export default function ProjectCard({
  title,
  description,
  url,
  icon,
}: ProjectCardProps) {
  return (
    <a href={url}>
      <div className="rounded-md h-24 flex p-2 items-center hover:bg-gray-900 hover:bg-opacity-40">
        <Image src={icon} alt={title} className="w-10 ml-4 mr-4" />
        <div>
          <p>{title} </p>
          <p className="font-thin text-slate-200">{description} </p>
        </div>
      </div>
    </a>
  );
}
