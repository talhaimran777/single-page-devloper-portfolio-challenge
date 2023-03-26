import React from "react";
import Image from "next/image";

interface Project {
  name: string;
  skills: string[];
  image: any;
}

interface Props {
  project: Project;
}

const Project: React.FC<Props> = ({ project }) => {
  return (
    <div>
      <Image
        className="mb-5 w-full"
        src={project.image}
        placeholder="blur"
        alt="Project1 Image"
      />
      <div>
        <h2 className="text-[24px] font-bold mb-[7px]">{project.name}</h2>
        <ul className="flex items-center text-lg gap-[18px]">
          {project.skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
