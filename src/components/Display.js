// src/components/Services.js
import React from "react";
import arrow from "../assets/arrow.png";

const Display = ({ hoveredDiv, handleMouseEnter, handleMouseLeave, getBackgroundColor, getTextColor }) => {
  return (
    <div className="flex flex-col justify-between col-span-4 rounded-[30px] h-[80vh] transition duration-1000 ease-in-out">
      <div
        className="h-[50%] rounded-[50px] bg-lightGry transition duration-300 ease-in-out flex justify-center items-center text-xl font-poppins font-extralight"
        style={{
          backgroundColor: getBackgroundColor(2),
          color: getTextColor(2),
          marginBottom:"3.5%"
        }}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      >
        <p>My Tech Projects</p>
      </div>

      <div
        className="h-[50%] flex flex-col p-6 text-darkMode justify-between rounded-[50px] bg-lemonYellow transition duration-1000 ease-in-out  text-xl font-poppins font-extralight"
        style={{
          backgroundColor: getBackgroundColor(7),
          color: getTextColor(7),
        }}
        onMouseEnter={() => handleMouseEnter(7)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-between items-center">
        <p className="text-2xl px-4 py-2 font-poppins font-extralight">Have queries?</p>
        <img src={arrow} alt="col2 image" className="w-[50px] h-[50px] rounded-[10px]" />
      </div>
      <p className="text-5xl px-4 py-2 text-left font-poppins font-medium">Contact me</p>
      </div>
    </div>
  );
};

export default Display;
