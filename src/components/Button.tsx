import React from "react";

interface Props {
  text: string;
  classes?: string;
}

const Button: React.FC<Props> = ({ text, classes }) => {
  return (
    <button
      className={`focus:outline-none uppercase font-bold text-base tracking-wide py-2 border-b-2 border-b-[#4EE1A0] ${classes}`}
    >
      {text}
    </button>
  );
};

export default Button;
