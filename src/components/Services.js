// src/components/Services.js
import React from "react";
import { useAppContext } from "../Context/Context";
import { applyGlobalStyles } from "../globalScript";

const Services = ({ hoveredDiv, handleMouseEnter, handleMouseLeave, getBackgroundColor, getTextColor }) => {
  const {isLightTheme} = useAppContext();

  applyGlobalStyles();

  return (
    <div className="style-links flex  sm:flex xl:flex-col sm:justify-between justify-between col-span-3 text-white rounded-[10px] sm:w-[95%] md:w-[60%] xl:w-full  sm:h-[30vh] lg:h-[37vh]  transition duration-1000 ease-in-out  ">
      <div
        className={`style-links xl:h-[50%] sm:h-[100%] sm:w-[48%] xl:w-full rounded-[10px] hover:scale-95 hover:mr-3 transition-all  duration-1000 ease-in-out flex justify-center items-center text-sm font-poppins font-extralight ${isLightTheme ? 'bg-backGray' : 'bg-jet'} ${isLightTheme ? 'text-f11' : 'text-highGray'}`}


        style={{
          backgroundColor: getBackgroundColor(2),
          color: getTextColor(2),
          marginBottom:"6.5%"
        }}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      >
        <p>My Tech Projects</p>
      </div>

      <div
        className={`style-links xl:h-[50%] sm:h-[100%] sm:w-[48%] xl:w-full rounded-[10px] hover:scale-95 hover:mr-3 transition-all  duration-1000 ease-in-out flex justify-center items-center text-sm font-poppins font-extralight text-center

          ${isLightTheme ? 'bg-backGray' : 'bg-jet'} ${isLightTheme ? 'text-f11' : 'text-highGray'}`
        }

        style={{
          backgroundColor: getBackgroundColor(7),
          color: getTextColor(7),
        }}
        onMouseEnter={() => handleMouseEnter(7)}
        onMouseLeave={handleMouseLeave}
      >
        <p>My Design & <br/> Animation Projects</p>
      </div>
    </div>
  );
};

export default Services;
