import Image from "next/image";

import GithubIcon from "images/icon-github.svg";
import FrontendMentorIcon from "images/icon-frontend-mentor.svg";
import LinkedinIcon from "images/icon-linkedin.svg";
import TwitterIcon from "images/icon-twitter.svg";

const Navbar = () => {
  return (
    <nav className="py-5 md:py-[30px] flex flex-col md:flex-row md:justify-between md:px-[30px] min-[1139px]:px-0 min-[1139px]:pr-[30px] items-center mb-28 md:mb-0 relative">
      <p className="text-2xl md:text-[32px] font-bold mb-5">adamkeyes</p>
      <ul className="flex justify-between items-center gap-[25px]">
        <li>
          <Image
            className="h-5 w-5 md:h-auto md:w-auto"
            src={GithubIcon}
            alt="Icon"
          />
        </li>
        <li>
          <Image
            className="h-5 w-5 md:h-auto md:w-auto"
            src={FrontendMentorIcon}
            alt="Icon"
          />
        </li>
        <li>
          <Image
            className="h-5 w-5 md:h-auto md:w-auto"
            src={LinkedinIcon}
            alt="Icon"
          />
        </li>
        <li>
          <Image
            className="h-5 w-5 md:h-auto md:w-auto"
            src={TwitterIcon}
            alt="Icon"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
