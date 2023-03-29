import Image from "next/image";

import ProfileImageMob from "images/profile-image-mob.png";
import ProfileImageTablet from "images/profile-image-tablet.png";
import ProfileImageDesktop from "images/profile-image.png";
import Rings from "images/rings-pattern.png";
import Circle from "images/circle.png";

import Navbar from "components/Navbar";
import HeroText from "components/HeroText";
import { useScreenSize } from "utils/useWindowDimensions";

const HeroSection = () => {
  const [isMobile, isTab] = useScreenSize();

  return (
    <div className="max-w-[1110px] mx-auto relative md:h-[600px] lg:h-[720px] overflow-x-hidden lg:overflow-x-visible">
      <Image
        className="w-[530px] h-[129px] absolute top-[124px] -left-2/4 md:-left-[270px] md:top-[90px]"
        placeholder="blur"
        src={Rings}
        alt="Rings"
      />

      <Image
        className="w-[129px] h-[129px] absolute top-[254px] -right-[64.5px] z-10 md:bottom-0 md:top-auto lg:top-[529px] lg:bottom-auto lg:right-[380px]"
        placeholder="blur"
        src={Circle}
        alt="Circle"
      />

      <Image
        src={
          isMobile
            ? ProfileImageMob
            : isTab
            ? ProfileImageTablet
            : ProfileImageDesktop
        }
        className="absolute top-0 right-2/4 md:right-0 translate-x-2/4 md:translate-x-0 w-[174px] md:w-[322px] lg:w-[445px] md:h-full"
        alt="Profile Image"
        placeholder="blur"
      />
      <Navbar />
      <HeroText />
    </div>
  );
};

export default HeroSection;
