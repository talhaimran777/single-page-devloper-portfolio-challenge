import React from "react";

import Project1Image from "images/project-1.png";
import Project2Image from "images/project-2.png";
import Project3Image from "images/project-3.png";
import Project4Image from "images/project-4.png";
import Project5Image from "images/project-5.png";
import Project6Image from "images/project-6.png";
import Project from "components/Project";
import Button from "components/Button";
import { StaticImageData } from "next/image";

const ProjectsSection = () => {
  interface Project {
    name: string;
    skills: string[];
    image: StaticImageData;
    transition_delay: number;
  }

  const projects: Project[] = [
    {
      name: "DESIGN PORTFOLIO",
      skills: ["HTML", "CSS"],
      image: Project1Image,
      transition_delay: 0.1,
    },
    {
      name: "E-LEARNING LANDING PAGE",
      skills: ["HTML", "CSS"],
      image: Project2Image,
      transition_delay: 0.2,
    },
    {
      name: "TODO WEB APP",
      skills: ["HTML", "CSS", "JAVASCRIPT"],
      image: Project3Image,
      transition_delay: 0.3,
    },
    {
      name: "ENTERTAINMENT WEB APP",
      skills: ["HTML", "CSS", "JAVASCRIPT"],
      image: Project4Image,
      transition_delay: 0.4,
    },
    {
      name: "MEMORY GAME",
      skills: ["HTML", "CSS", "JAVASCRIPT"],
      image: Project5Image,
      transition_delay: 0.5,
    },
    {
      name: "ART GALLERY SHOWCASE",
      skills: ["HTML", "CSS", "JAVASCRIPT"],
      image: Project6Image,
      transition_delay: 0.6,
    },
  ];

  return (
    <div className="py-[70px] lg:py-[110px] px-4 md:px-[30px] min-[1139px]:px-0 lg:max-w-[1110px] lg:mx-auto">
      <div className="flex justify-between items-center mb-10 md:mb-[80px]">
        <h1 className="text-[40px] md:text-7xl lg:text-[88px] font-bold">
          Projects
        </h1>
        <Button text="contact me" />
      </div>

      <div className="grid md:grid-cols-2 gap-y-[40px] md:gap-y-[60px] md:gap-x-6 lg:gap-x-[30px]">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
