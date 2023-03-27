import Image from "next/image";

import ProfileImageMob from "images/profile-image-mob.png";
import ProfileImageTablet from "images/profile-image-tablet.png";
import ProfileImageDesktop from "images/profile-image.png";

import Navbar from "components/Navbar";
import HeroText from "components/HeroText";
import { useScreenSize } from "utils/useWindowDimensions";

const HeroSection = () => {
  const [isMobile, isTab, isDesktop] = useScreenSize();

  return (
    <div className="max-w-[1110px] mx-auto relative md:h-[600px] lg:h-[720px]">
      {isMobile && (
        <Image
          src={ProfileImageMob}
          className="absolute top-0 right-2/4 translate-x-2/4 w-[174px]"
          alt="Profile Image"
          placeholder="blur"
        />
      )}

      {isTab && (
        <Image
          src={ProfileImageTablet}
          className="absolute top-0 right-0 w-[322px] h-full"
          alt="Profile Image"
          placeholder="blur"
        />
      )}

      {isDesktop && (<Image
        src={ProfileImageDesktop}
        className="absolute top-0 right-0 w-[445px] h-full"
        alt="Profile Image"
        placeholder="blur"
      />)}
      <Navbar />
      <HeroText />
    </div>
  );
};

export default HeroSection;
