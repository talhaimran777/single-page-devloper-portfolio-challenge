import React from "react";

import Project1Image from "images/project-1.png";
import Project2Image from "images/project-2.png";
import Project3Image from "images/project-3.png";
import Project4Image from "images/project-4.png";
import Project5Image from "images/project-5.png";
import Project6Image from "images/project-6.png";
import Project from "components/Project";

const ProjectsSection = () => {
  interface Project {
    name: string;
    skills: string[];
    image: any;
  }

  const projects: Project[] = [
    {
      name: "DESIGN PORTFOLIO",
      skills: ["HTML", "CSS"],
      image: Project1Image,
    },
    {
      name: "E-LEARNING LANDING PAGE",
      skills: ["HTML", "CSS"],
      image: Project2Image,
    },
    {
      name: "TODO WEB APP",
      skills: ["HTML", "CSS", "JAVASCRIPT"],
      image: Project3Image,
    },
    {
      name: "ENTERTAINMENT WEB APP",
      skills: ["HTML", "CSS", "JAVASCRIPT"],
      image: Project4Image,
    },
    {
      name: "MEMORY GAME",
      skills: ["HTML", "CSS", "JAVASCRIPT"],
      image: Project5Image,
    },
    {
      name: "ART GALLERY SHOWCASE",
      skills: ["HTML", "CSS", "JAVASCRIPT"],
      image: Project6Image,
    },
  ];

  return (
    <div className="py-[70px] lg:py-[110px] px-4 md:px-[30px] min-[1139px]:px-0 lg:max-w-[1110px] lg:mx-auto">
      <div className="flex justify-between items-center mb-10 md:mb-[80px]">
        <h1 className="text-[40px] md:text-7xl lg:text-[88px] font-bold">
          Projects
        </h1>
        <button
          className="uppercase font-bold text-base tracking-wide py-2"
          style={{
            borderBottomColor: "#4EE1A0",
            borderBottomWidth: "2px",
          }}
        >
          contact me
        </button>
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
