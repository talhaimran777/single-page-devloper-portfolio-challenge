import Rings from "images/rings-pattern.png";
import Image from "next/image";

const SkillsSection = () => {
  const skills = [
    {
      name: "HTML",
      experience: "4 Years Experience",
      transition_delay: 0.1,
    },
    {
      name: "CSS",
      experience: "4 Years Experience",
      transition_delay: 0.2,
    },
    {
      name: "JavaScript",
      experience: "4 Years Experience",
      transition_delay: 0.3,
    },
    {
      name: "Accessibility",
      experience: "4 Years Experience",
      transition_delay: 0.4,
    },
    {
      name: "React",
      experience: "3 Years Experience",
      transition_delay: 0.5,
    },
    {
      name: "Sass",
      experience: "3 Years Experience",
      transition_delay: 0.6,
    },
  ];

  return (
    <div className="px-4 md:px-[30px] min-[1139px]:px-0 lg:mt-[209px] lg:max-w-[1110px] lg:mx-auto relative overflow-x-clip 2xl:overflow-visible">
      <Image
        className="w-[265px] md:w-[530px] h-[129px] absolute -bottom-[64.5px] -right-[75px] md:-right-[265px] min-[1139px]:-right-0 min-[1680px]:-right-[265px]"
        placeholder="blur"
        src={Rings}
        alt="Rings"
      />
      <hr />
      <div className="my-[40px] md:my-[52px] lg:my-[72px] grid md:grid-cols-2 xl:grid-cols-3 gap-y-6 md:gap-y-[52px]">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="justify-self-center md:justify-self-start text-center md:text-left"
          >
            <h1 className="text-[32px] md:text-5xl font-bold md:mb-[14px]">
              {skill.name}
            </h1>
            <p className="text-md">{skill.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
