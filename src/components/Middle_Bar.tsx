import React from "react";
import { Link, useLocation } from "react-router-dom";
const activeColor = "#00A6FF";

type MiddleBarProps = {
  path: string; // Define image_url as a string
  text: String;
  link: string;
  className?: string; // Additional class names
};

const Middle_Bar: React.FC<MiddleBarProps> = (props) => {
  const { path, text, className, link, ...rest } = props;
  const urls = useLocation().pathname;
  return (
    <Link
      to={link}
      {...rest}
      className={`flex flex-col justify-center items-center px-1 ${
        className || ""
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25px"
        height="25px"
        viewBox={`0 0 ${link=="/new"?"100 100":"25 25"}`}
      >
        <path d={path} fill={link == urls ? activeColor : "#AAAAAA"}></path>
      </svg>
      <h1
        className={`text-[14px] text-[${
          link == urls ? activeColor : "#AAAAAA"
        }] ${link == urls ? "underline" : ""}`}
      >
        {text}
      </h1>
    </Link>
  );
};

export default Middle_Bar;
