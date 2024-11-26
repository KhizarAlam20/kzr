// src/components/SocialLinks.js
import React from "react";
import HeroSection from "./HeroSection";

const Intro = ({ hoveredDiv, handleMouseEnter, handleMouseLeave, getBackgroundColor, getTextColor }) => {
  return (
    <div
      className="col-span-8 bg-darkMode hover:bg-white p-4 transition-colors duration-1000 ease-in-out rounded-[50px] h-[80vh] hover:shadow-lg"
      style={{
        backgroundColor: getBackgroundColor(6),
        color: getTextColor(6),
      }}
      onMouseEnter={() => handleMouseEnter(6)}
      onMouseLeave={handleMouseLeave}
    >
    <div className="flex flex-col items-center justify-center gap-x-10 text-center p-8 h-full">
  <p className="font-extralight mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
    <span className=" text-7xl text-white font-medium">A </span>
    <span className=" text-7xl text-white font-medium">Software Engineer.</span>
    <br />
    <br/>
    <span className="italic font-thin text-4xl text-white">with a passion for</span>
    <br />
    <br/>
    <span className="font-thin text-7xl text-block">2D Animations</span>
    <br />
    <span className="font-thin text-7xl text-block">Logo Design</span>
  </p>
</div>

    </div>
  );
};

export default Intro;
