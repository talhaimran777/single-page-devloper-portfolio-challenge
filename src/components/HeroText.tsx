import { useScreenSize } from "utils/useWindowDimensions";

const HeroText = () => {
  const [isMobile, isTab, isDesktop] = useScreenSize();

  return (
    <div className="text-center md:text-left mb-20 mt-[310px] md:mt-[50px] lg:mt-[90px] relative px-4 md:px-[30px] min-[1139px]:px-0">
      <h1 className="text-[40px] md:text-[72px] lg:text-[88px] leading-[40px] md:leading-[72px] lg:leading-[88px] md:tracking-[-2.5px] font-bold z-50">
        Nice to {isTab ? <br /> : null} meet you!{" "}
        {isMobile || isDesktop ? <br /> : null} I&apos;m
        <span
          style={{
            borderBottomColor: "#4EE1A0",
            borderBottomWidth: "6px",
          }}
        >
          {isTab ? <br /> : null} Adam Keyes.
        </span>
      </h1>
      <p className="text-base md:text-lg mt-9 md:mt-[60px] md:w-[445px]">
        Based in the UK, I&apos;m a front-end developer passionate about
        building accessible web apps that users love.
      </p>
      <button
        className="uppercase font-bold text-base tracking-wide py-2 mt-6 md:mt-[34px]"
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
