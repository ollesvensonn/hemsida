import { Project, ProjectCard } from "@/components/ProjectCard";
import image1 from "@/images/image-1.png";
import image2 from "@/images/image-2.png";
import image3 from "@/images/image-3.png";

const projects: Project[] = [
  {
    name: "Project 1",
    image: image1,
    description: "This is a description of project 1",
    link: "/projects/project-1",
  },
  {
    name: "Project 2",
    image: image2,
    description: "This is a description of project 2",
    link: "/projects/project-2",
  },
  {
    name: "Project 3",
    image: image3,
    description: "This is a description of project 3",
    link: "/projects/project-3",
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
