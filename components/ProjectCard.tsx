import Image, { StaticImageData } from "next/image";

export interface Project {
  name: string;
  image: StaticImageData;
  description: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="overflow-hidden shadow-md hover:shadow-lg transition duration-300"
    >
      <Image src={project.image} alt={project.name} className="" width={500} />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
        <p className="text-gray-700">{project.description}</p>
      </div>
    </a>
  );
};
