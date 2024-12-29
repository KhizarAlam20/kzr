import React, { useContext } from "react";
import moon from "../assets/moon.png";
import moony from "../assets/moony.png";
import sunny from "../assets/sunny.png";
import { AppContext } from "../Context/Context";
import SvgIcon from "../assets/icons/SvgIcon";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";

const Navbar = () => {
  const { isLightTheme, toggle } = useContext(AppContext);

  return (
    <nav
   
      className="flex justify-center cursor-none mt-[-10px] "
      style={{ cursor: "none" }}
    >
      <ul
        className="flex items-center justify-center align-center py-6 h-[15px] w-[320px] rounded-[15px] shadow-lg"
        style={{
          backgroundColor: isLightTheme ? "#f2f2f2" : "#1D1D1D",
          boxShadow: isLightTheme
            ? "0 0 0px rgba(0, 0, 0, 0.1)"
            : "0 0 100px rgba(255, 255, 255, 0.1)",
        }}
      >
        <li className="flex-none ml-5 mt-1">
          <button
            onClick={toggle}
            className="focus:outline-none transition-transform duration-1000 ease-in-out transform cursor-none"
            style={{ color: isLightTheme ? "#1D1D1D" : "#fff" }}
          >
            <img
              src={isLightTheme ? moony : sunny}
              alt="Sun or Moon Icon"
              className={`w-4 h-4 object-contain 
                ${isLightTheme ? "scale-90" : "scale-110"} 
                transition-transform duration-1000 ease-in-out`
              
            
              }
              style={
                {
                  boxShadow: isLightTheme
                  ? "0 0 100px rgba(0, 0, 0, 1.0)"
                  : "0 0 100px rgba(255, 255, 30,1.0)",
                }
              }
            />
          </button>
        </li>

        <li className=" flex-grow text-center ml-3">
          <a
            className="text-white text-lg py-2 rounded font-poppins cursor-none"
            href="#home"
            style={{ color: isLightTheme ? "#1D1D1D" : "#fff" }}
          >
            <span className="font-medium font-poppins">Khizar</span>{" "}
            <span className="font-thin font-poppins">Alam</span>
          </a>
        </li>

        <li className="flex-none mr-6 ">
          <a
            className={`text-md px-3 transition-colors duration-300 ease-in-out rounded-[10px] font-poppins font-thin cursor-none
            ${isLightTheme ? "text-[#1D1D1D]" : "text-white"} 
            hover:text-yellow-200`}
            href="#projects"
            style={
              {
                boxShadow: isLightTheme
                ? "0 0 100px rgba(0, 0, 0, 0.4)"
                : "0 0 100px rgba(255, 255, 255, 0.1)",
              }
            }
          >
        {/* add icon here */}
         <SvgIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
