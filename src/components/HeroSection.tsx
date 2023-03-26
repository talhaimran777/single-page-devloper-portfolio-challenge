import Image from "next/image";

import ProfileImageMob from "images/profile-image-mob.png";
import Navbar from "components/Navbar";
import HeroText from "components/HeroText";

const HeroSection = () => {
  return (
    <div
      className="max-w-5xl mx-auto relative"
      style={{
        borderBottomColor: "#979797",
        borderBottomWidth: "2px",
      }}
    >
      <Image
        src={ProfileImageMob}
        className="absolute top-0 right-2/4 translate-x-2/4 w-[174px]"
        alt="Profile Image"
        placeholder="blur"
      />
      <Navbar />
      <HeroText />
    </div>
  );
};

export default HeroSection;
