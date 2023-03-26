import React from "react";

import Image from "next/image";

import GithubIcon from "images/icon-github.svg";
import FrontendMentorIcon from "images/icon-frontend-mentor.svg";
import LinkedinIcon from "images/icon-linkedin.svg";
import TwitterIcon from "images/icon-twitter.svg";

const Footer = () => {
  return (
    <nav className="pt-10 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0 border-t-2 border-t-[#979797] ">
      <p className="text-2xl md:text-3xl font-bold">adamkeyes</p>
      <ul className="flex justify-between items-center gap-8">
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

export default Footer;
