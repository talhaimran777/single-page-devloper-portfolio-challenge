const HeroText = () => {
  return (
    <div className="text-center mb-20 mt-[310px] relative px-4">
      <h1 className="text-[40px] leading-[40px] font-bold z-50">
        Nice to meet you!
      </h1>
      <h1 className="text-[40px] leading-[40px] font-bold">
        I&apos;m{" "}
        <span
          style={{
            borderBottomColor: "#4EE1A0",
            borderBottomWidth: "6px",
          }}
        >
          Adam Keyes.
        </span>
      </h1>
      <p className="text-base mt-9">
        Based in the UK, I&apos;m a front-end developer passionate about
        building accessible web apps that users love.
      </p>
      <button
        className="uppercase font-bold text-base tracking-wide py-2 mt-6"
        style={{
          borderBottomColor: "#4EE1A0",
          borderBottomWidth: "2px",
        }}
      >
        contact me
      </button>
    </div>
  );
};

export default HeroText;
