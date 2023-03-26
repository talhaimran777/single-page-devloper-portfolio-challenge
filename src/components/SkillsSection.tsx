const SkillsSection = () => {
  const skills = [
    {
      name: "HTML",
      experience: "4 Years Experience",
    },
    {
      name: "CSS",
      experience: "4 Years Experience",
    },
    {
      name: "JavaScript",
      experience: "4 Years Experience",
    },
    {
      name: "Accessibility",
      experience: "4 Years Experience",
    },
    {
      name: "React",
      experience: "3 Years Experience",
    },
    {
      name: "Sass",
      experience: "3 Years Experience",
    },
  ];

  return (
    <div className="px-4 md:px-[30px] min-[1139px]:px-0 md:mt-[60px] lg:mt-[104px] lg:max-w-[1110px] lg:mx-auto">
      <hr />
      <div className="my-[40px] grid md:grid-cols-2 xl:grid-cols-3 gap-y-6 md:gap-y-[52px]">
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
      <hr />
    </div>
  );
};

export default SkillsSection;
