import Image from "next/image";

import GithubIcon from "images/icon-github.svg";
import FrontendMentorIcon from "images/icon-frontend-mentor.svg";
import LinkedinIcon from "images/icon-linkedin.svg";
import TwitterIcon from "images/icon-twitter.svg";

import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="py-5 md:py-[30px] flex flex-col md:flex-row md:justify-between md:px-[30px] min-[1139px]:px-0 min-[1139px]:pr-[30px] items-center mb-28 md:mb-0 relative"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.9,
      }}
    >
      <p className="text-2xl md:text-[32px] font-bold mb-5">adamkeyes</p>
      <ul className="flex justify-between items-center gap-[25px]">
        <motion.li
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1,
          }}
        >
          <Image
            className="h-5 w-5 md:h-auto md:w-auto"
            src={GithubIcon}
            alt="Icon"
          />
        </motion.li>
        <motion.li
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1.4,
          }}
        >
          <Image
            className="h-5 w-5 md:h-auto md:w-auto"
            src={FrontendMentorIcon}
            alt="Icon"
          />
        </motion.li>
        <motion.li
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1.8,
          }}
        >
          <Image
            className="h-5 w-5 md:h-auto md:w-auto"
            src={LinkedinIcon}
            alt="Icon"
          />
        </motion.li>
        <motion.li
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 2.2,
          }}
        >
          <Image
            className="h-5 w-5 md:h-auto md:w-auto"
            src={TwitterIcon}
            alt="Icon"
          />
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
