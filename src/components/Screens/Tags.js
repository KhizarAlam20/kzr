import React, { useState } from "react";

export default function Tags() {
  // State to track hover on main div
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="main-div pr-1 pl-1 mb-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-row gap-x-3 items-center justify-between w-full">
        <div className="group">
          <p
            className={`text-xs text-f11 font-poppins font-light mr-2 transition-all duration-1000 ease-in-out ${
              isHovered ? "text-white scale-110" : "" // Change text to red on hover
            }`}
          >
            Jujutsu Kaisen
          </p>
        </div>

        <div
          className={`iconclass hover:bg-white hover:border-white transition-all duration-1000 ease-in-out flex justify-center items-center w-7 h-7 border border-2 border-f11 rounded-full group ${
            isHovered
              ? "bg-white border-white transition-all duration-1000 ease-in-out"
              : "" // Add conditional class for hover
          }`}
        >
          <a
            href="#"
            className={`relative text-blue-600 hover:text-blue-800 underline cursor-none group-hover:scale-105 group-hover:text-blue-800 transition-all duration-300 ease-in-out ${
              isHovered ? "" : "" // Change text color to red when hovered
            }`}
          >
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-600"></span>
            {/* Underline effect */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="w-full h-[1px] mt-1 bg-gray-800 "></div>
      
    </div>
  );
}
