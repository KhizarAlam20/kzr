// src/components/ProjectLinks.js
import React from "react";
import { useAppContext } from "../Context/Context";
import { applyGlobalStyles } from "../globalScript";

const ProjectLinks = ({ hoveredDiv, handleMouseEnter, handleMouseLeave, getBackgroundColor, getTextColor }) => {
  const { isLightTheme } = useAppContext();

  applyGlobalStyles();

  return (
    <div
      className={`style-links col-span-3 p-4 rounded-[10px] h-[60vh] hover:scale-95 transition-all  duration-1000 ease-in-out  hover:shadow-lg flex flex-col justify-between
        ${isLightTheme ? 'bg-backGray' : 'bg-jet'} ${isLightTheme ? 'text-f11' : 'text-highGray'}
        `}

      style={{
        backgroundColor: getBackgroundColor(3),
        color: getTextColor(3),
      }}
      onMouseEnter={() => handleMouseEnter(3)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-sm font-poppins font-extralight flex justify-center items-center">
        <p>Recent Projects + Tags</p>
      </div>
      <div className="grid grid-cols-5 gap-x-2 gap-y-2 text-sm">
      <div className={`col-span-2 bg-bgBlack select-none h-6 rounded-[8px] flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-blue hover:text-white
        ${isLightTheme ? 'bg-lightMode' : 'bg-cosBlack'} ${isLightTheme ? 'text-cosGray' : 'text-white'}
        `}>
                    {/* React Native */}
                  </div>


                  <div className={`col-span-1 select-none bg-bgBlack h-6 rounded-[8px] flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-red-500 hover:text-white1
                    
                     ${isLightTheme ? 'bg-lightMode' : 'bg-cosBlack'} ${isLightTheme ? 'text-cosGray' : 'text-white'}
                    `}>
                    {/* Kotlin */}
                  </div>


                  <div className={`col-span-2 select-none bg-bgBlack h-6 rounded-[8px] flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-green-500 hover:text-white
                     ${isLightTheme ? 'bg-lightMode' : 'bg-cosBlack'} ${isLightTheme ? 'text-cosGray' : 'text-white'}
                    `}>
                    {/* MongoDB */}
                  </div>
                  <div className={`col-span-1 select-none bg-bgBlack h-6 rounded-[8px] flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-white hover:text-black
                     ${isLightTheme ? 'bg-lightMode' : 'bg-cosBlack'} ${isLightTheme ? 'text-cosGray' : 'text-white'}
                    `}>
                    {/* MySQL */}
                  </div>
                  <div className={`col-span-3 select-none bg-bgBlack h-6 rounded-[8px] flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-indigo-800 hover:text-white
                     ${isLightTheme ? 'bg-lightMode' : 'bg-cosBlack'} ${isLightTheme ? 'text-cosGray' : 'text-white'}
                    `}>
                    {/* Typescript&nbsp;|&nbsp;Javascript */}
                  </div>
                  <div className={`col-span-1 select-none bg-bgBlack h-6 rounded-[8px] flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-yellow-500 hover:text-black
                     ${isLightTheme ? 'bg-lightMode' : 'bg-cosBlack'} ${isLightTheme ? 'text-cosGray' : 'text-white'}
                    `}>
                    {/* Java */}
                  </div>
                  <div className={`col-span-2 select-none bg-bgBlack h-6 rounded-[8px] flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-green-300 hover:text-black
                     ${isLightTheme ? 'bg-lightMode' : 'bg-cosBlack'} ${isLightTheme ? 'text-cosGray' : 'text-white'}
                    `}>
                    {/* SpringBoot */}
                  </div>
                  <div className={`col-span-1 select-none bg-bgBlack h-6 rounded-[8px] flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-green-300 hover:text-black
                     ${isLightTheme ? 'bg-lightMode' : 'bg-cosBlack'} ${isLightTheme ? 'text-cosGray' : 'text-white'}
                    `}>
                    {/* DevOps */}
                  </div>
                  <div className={`col-span-1 select-none bg-bgBlack h-6 rounded-[8px] flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-green-300 hover:text-black
                     ${isLightTheme ? 'bg-lightMode' : 'bg-cosBlack'} ${isLightTheme ? 'text-cosGray' : 'text-white'}
                    `}>
                    {/* illustrator */}
                  </div>
                  <div className={`col-span-1 select-none bg-bgBlack h-6 rounded-[8px] flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-green-300 hover:text-black
                     ${isLightTheme ? 'bg-lightMode' : 'bg-cosBlack'} ${isLightTheme ? 'text-cosGray' : 'text-white'}
                    `}>
                    {/* Blender */}
                  </div>
      </div>
    </div>
  );
};

export default ProjectLinks;
