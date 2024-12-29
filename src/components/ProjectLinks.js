// src/components/ProjectLinks.js
import React from "react";
import { useAppContext } from "../Context/Context";
import { applyGlobalStyles } from "../globalScript";
import Tags from "./Screens/Tags";

const ProjectLinks = ({
  hoveredDiv,
  handleMouseEnter,
  handleMouseLeave,
  getBackgroundColor,
  getTextColor,
}) => {
  const { isLightTheme } = useAppContext();

  applyGlobalStyles();

  return (
    <div
      className={`style-links col-span-3 pr-3 pl-3 pt-4 pb-4 rounded-[10px] h-[60vh] hover:scale-95 transition-all  duration-1000 ease-in-out  hover:shadow-lg flex flex-col justify-between
        ${isLightTheme ? "bg-backGray" : "bg-jet"} ${
        isLightTheme ? "text-f11" : "text-highGray"
      }
        `}
      style={{
        backgroundColor: getBackgroundColor(3),
        color: getTextColor(3),
      }}
      onMouseEnter={() => handleMouseEnter(3)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-sm font-poppins font-extralight pr-3 pl-3 flex justify-center items-center">
        <p>Recent Projects + Skills</p>
      </div>

      <div className="w-full h-[1px] bg-gray-700 "></div>

      {/* tags */}

      <div>
        <Tags />
        <Tags />
        <Tags />
        <Tags />
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className="grid grid-cols-5 gap-x-1 gap-y-2 text-sm">
        <div
          className={`col-span-3 bg-bgBlack select-none text-[9px] h-6 rounded-[8px] flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-blue hover:text-white
            
        ${isLightTheme ? "bg-lightMode" : "bg-cosBlack"} ${
          isLightTheme ? "text-cosGray" : "text-white"
          }
        `}
        >
          <p className="transition-all duration-1000 ease-in-out flex justify-center items-center text-f11 hover:text-white w-full h-full">React Native</p>
        </div>

        <div
          className={`col-span-1 select-none text-[9px] bg-bgBlack h-6 rounded-[8px] flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-blue hover:text-white1
                    
                     ${isLightTheme ? "bg-lightMode" : "bg-cosBlack"} ${
                       isLightTheme ? "text-cosGray" : "text-white"
          }
                    `}
        >
           <p className="transition-all duration-1000 ease-in-out flex justify-center items-center text-f11 hover:text-white w-full h-full">Java</p>
        </div>

        <div
          className={`col-span-1 select-none text-[9px] bg-bgBlack h-6 rounded-[8px] flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-blue hover:text-white
                     ${isLightTheme ? "bg-lightMode" : "bg-cosBlack"} ${
                       isLightTheme ? "text-cosGray" : "text-white"
          }
                    `}
        >
             <p className="transition-all duration-1000 ease-in-out flex justify-center items-center text-f11 hover:text-white w-full h-full">Expo</p>
        </div>
        <div
          className={`col-span-1 select-none text-[9px] bg-bgBlack h-6 rounded-[8px] flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-blue hover:text-black
                     ${isLightTheme ? "bg-lightMode" : "bg-cosBlack"} ${
                       isLightTheme ? "text-cosGray" : "text-white"
          }
                    `}
        >
              <p className="transition-all duration-1000 ease-in-out flex justify-center items-center text-f11 hover:text-white w-full h-full">Sql</p>
        </div>
        <div
          className={`col-span-3 select-none text-[9px] bg-bgBlack h-6 rounded-[8px] flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-blue hover:text-white
                     ${isLightTheme ? "bg-lightMode" : "bg-cosBlack"} ${
                       isLightTheme ? "text-cosGray" : "text-white"
          }
                    `}
        >
             <p className="transition-all duration-1000 ease-in-out flex justify-center items-center text-f11 hover:text-white w-full h-full">Typscript/Javascript</p>
        </div>
        <div
          className={`col-span-1 select-none text-[9px] bg-bgBlack h-6 rounded-[8px] flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-blue hover:text-black
                     ${isLightTheme ? "bg-lightMode" : "bg-cosBlack"} ${
                       isLightTheme ? "text-cosGray" : "text-white"
          }
                    `}
        >
              <p className="transition-all duration-1000 ease-in-out flex justify-center items-center text-f11 hover:text-white w-full h-full">Blender</p>
        </div>
        <div
          className={`col-span-2 select-none text-[9px] bg-bgBlack h-6 rounded-[8px] flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-blue hover:text-black
                     ${isLightTheme ? "bg-lightMode" : "bg-cosBlack"} ${
                       isLightTheme ? "text-cosGray" : "text-white"
          }
                    `}
        >
              <p className="transition-all duration-1000 ease-in-out flex justify-center items-center text-f11 hover:text-white w-full h-full">Spring Boot</p>
        </div>
        <div
          className={`col-span-2 select-none text-[9px] bg-bgBlack h-6 rounded-[8px] flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-blue hover:text-black
                     ${isLightTheme ? "bg-lightMode" : "bg-cosBlack"} ${
            isLightTheme ? "text-cosGray" : "text-white"
          }
                    `}
        >
              <p className="transition-all duration-1000 ease-in-out flex justify-center items-center text-f11 hover:text-white w-full h-full">Illustrator</p>
        </div>
        <div
          className={`col-span-1 select-none text-[9px] bg-bgBlack h-6 rounded-[8px] flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-blue hover:text-black
                     ${isLightTheme ? "bg-lightMode" : "bg-cosBlack"} ${
            isLightTheme ? "text-cosGray" : "text-white"
          }
                    `}
        >
             <p className="transition-all duration-1000 ease-in-out flex justify-center items-center text-f11 hover:text-white w-full h-full">Figma</p>
        </div>
        <div
          className={`col-span-2 select-none text-[9px] bg-bgBlack h-6 rounded-[8px] flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-blue hover:text-black
                     ${isLightTheme ? "bg-lightMode" : "bg-cosBlack"} ${
            isLightTheme ? "text-cosGray" : "text-white"
          }
                    `}
        >
            <p className="transition-all duration-1000 ease-in-out flex justify-center items-center text-f11 hover:text-white w-full h-full">Devops</p>
        </div>

        <div
          className={`col-span-3 select-none text-[9px] bg-bgBlack h-6 rounded-[8px] flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-blue hover:text-black
                     ${isLightTheme ? "bg-lightMode" : "bg-cosBlack"} ${
            isLightTheme ? "text-cosGray" : "text-white"
          }
                    `}
        >
              <p className="transition-all duration-1000 ease-in-out flex justify-center items-center text-f11 hover:text-white w-full h-full">MongoDB</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectLinks;
