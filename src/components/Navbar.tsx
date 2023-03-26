import Image from "next/image";

import GithubIcon from "images/icon-github.svg";
import FrontendMentorIcon from "images/icon-frontend-mentor.svg";
import LinkedinIcon from "images/icon-linkedin.svg";
import TwitterIcon from "images/icon-twitter.svg";

const Navbar = () => {
  return (
    <nav className="py-5 flex flex-col items-center mb-28 relative">
      <p className="text-2xl font-bold mb-5">adamkeyes</p>
      <ul className="flex justify-between items-center gap-[25px]">
        <li>
          <Image className="h-5 w-5" src={GithubIcon} alt="Icon" />
        </li>
        <li>
          <Image className="h-5 w-5" src={FrontendMentorIcon} alt="Icon" />
        </li>
        <li>
          <Image className="h-5 w-5" src={LinkedinIcon} alt="Icon" />
        </li>
        <li>
          <Image className="h-5 w-5" src={TwitterIcon} alt="Icon" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
