import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useAnimation, useInView, motion } from "framer-motion";
import Button from "components/Button";

interface Project {
  name: string;
  skills: string[];
  image: any;
  transition_delay: number;
}

interface Props {
  project: Project;
}

const Project: React.FC<Props> = ({ project }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const buttons = (
    <>
      <Button text="View Project" classes="block" />
      <Button text="View Code" />
    </>
  );

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      transition={{ delay: project.transition_delay, duration: 0.5 }}
    >
      <div className="mb-5 w-full relative">
        <Image
          className="w-full"
          src={project.image}
          placeholder="blur"
          alt="Project1 Image"
        />
        <div className="hidden cursor-pointer absolute top-0 left-0 bottom-0 right-0 w-full h-full hover:bg-[#000000b8] transition-all hover:transition-all lg:flex justify-center items-center opacity-0 hover:opacity-100">
          <div className="flex flex-col justify-center items-center w-full gap-y-12">
            {buttons}
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-[24px] font-bold mb-[7px]">{project.name}</h2>
        <ul className="flex items-center text-lg gap-[18px]">
          {project.skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
        <div className="flex justify-start items-center gap-x-[30px] lg:hidden">
          {buttons}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
