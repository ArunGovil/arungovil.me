interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
}
export default function ProjectCard({
  title,
  description,
  url,
}: ProjectCardProps) {
  return (
    <a href={url}>
      <div className="rounded-md h-24 flex p-2 items-center hover:bg-gray-900 hover:bg-opacity-40">
        <div className="pl-4">
          <p className="text-lg">{title}</p>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </a>
  );
}
