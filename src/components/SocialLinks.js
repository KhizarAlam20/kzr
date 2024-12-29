// src/components/SocialLinks.js
import React from "react";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import { useAppContext } from "../Context/Context";
import { applyGlobalStyles } from "../globalScript";

const SocialLinks = ({ hoveredDiv, handleMouseEnter, handleMouseLeave, getBackgroundColor, getTextColor }) => {
  const { isLightTheme } = useAppContext();
  applyGlobalStyles();

  return (
    <div
      className={`social-links col-span-3  hover:bg-white p-4 hover:scale-105 transition-all  duration-1000 ease-in-out  rounded-[10px] h-[9vh] hover:shadow-lg
        ${isLightTheme ? 'bg-backGray' : 'bg-jet'} ${isLightTheme ? 'text-f11' : 'text-highGray'}
        `}
      style={{
        backgroundColor: getBackgroundColor(6),
        color: getTextColor(6),
      }}
      onMouseEnter={() => handleMouseEnter(6)}
      onMouseLeave={handleMouseLeave}
    >

      
      <div className="flex gap-x-7 justify-center items-center h-full">
        <img src={linkedin} alt="LinkedIn" className="w-[35px] h-[35px] rounded-[10px]" />
        <img src={github} alt="GitHub" className="w-[35px] h-[35px] rounded-[10px]" />
        <img src={insta} alt="Instagram" className="w-[35px] h-[35px] rounded-[10px]" />
      </div>
    </div>
  );
};

export default SocialLinks;
