import Image from "next/image";
import Link from "next/link";

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
    <Link href={`/posts/${url}`}>
      <div className="rounded-md h-24 flex p-2 items-center hover:bg-gray-900 hover:bg-opacity-40">
        <Image alt="icon" src={image} width="42" className="ml-2" />
        <div className="pl-4">
          <p className="text-md">{title}</p>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </Link>
  );
}
