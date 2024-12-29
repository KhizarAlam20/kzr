/**
 * The `HeroSection` function is a React component that displays a hero section with dynamic background
 * and text colors based on mouse hover events.
 * @returns The HeroSection component is being returned. It is a functional component that renders a
 * div with text content styled for a hero section of a website. The component takes props such as
 * hoveredDiv, handleMouseEnter, handleMouseLeave, getBackgroundColor, and getTextColor to handle mouse
 * events and styling.
 */
// src/components/HeroSection.js


import React, { useState } from "react";
import { useAppContext } from "../Context/Context";
import { applyGlobalStyles } from "../globalScript";
import Coffee from "./Coffee";

const HeroSection = ({height, hoveredDiv, handleMouseEnter, handleMouseLeave, getBackgroundColor, getTextColor }) => {

  const rounded = "10px";
  const {isLightTheme} = useAppContext();
  applyGlobalStyles();

  return (
    <div
    className={`hero col-span-6  select-none px-10 sm:pt-12 xl:pt-0 xl:py-4  flex flex-col justify-end  md:text-left rounded-[${rounded}] h-[37vh] hover:scale-95  transition-all  duration-1000 ease-in-out  hover:shadow-lg ${isLightTheme ? 'bg-backGray' : 'bg-jet'} ${isLightTheme ? 'text-f11' : 'text-white'}` }
      style={{
        backgroundColor: getBackgroundColor(1),
        color: getTextColor(1),
        // color: isLightTheme ? "#19191B" : "#fff"
      }}
      onMouseEnter={() => handleMouseEnter(1)}
      onMouseLeave={handleMouseLeave}
    >
    
      <p className="hero font-extralight mb-8 sm:text-left sm:mb-8 xl:mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
        <span className="italic text-5xl lg:text-5xl font-medium text-block "> A  </span>
        <strong className="color-underline text-5xl lg:text-5xl font-medium">Developer </strong>
        {/* <br/> */}
        <span className="italic text-5xl lg:text-5xl font-medium text-block "> &  </span>
        <br/>
        <span className=" text-5xl lg:text-5xl font-medium"> Designer</span>
       
       
       
       
        <span className="ml-4 italic  text-xl lg:text-[16px] text-block font-poppins font-extralight">with a passion for{" "}</span>
      
      </p>



    </div>
  );
};

export default HeroSection;
