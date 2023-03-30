import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useAnimation, useInView, motion } from "framer-motion";

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
      <Image
        className="mb-5 w-full"
        src={project.image}
        placeholder="blur"
        alt="Project1 Image"
      />
      <div>
        <h2 className="text-[24px] font-bold mb-[7px]">{project.name}</h2>
        <ul className="flex items-center text-lg gap-[18px]">
          {project.skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Project;
