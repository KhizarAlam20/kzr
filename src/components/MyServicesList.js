import React, { useState } from "react";
import { useAppContext } from "../Context/Context";
import { applyGlobalStyles } from "../globalScript";

const MyServicesList = ({
  getBackgroundColor,
  getTextColor,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const items = [
    { id: 1, content: "Services I Provide" },
    { id: 2, content: "FULL STACK WEB/APP DEV" },
    { id: 3, content: "LOGO DESIGN" },
    { id: 4, content: "CHARACTER DESIGN/ANIMATIONS" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };
  
  applyGlobalStyles();

  const { isLightTheme } = useAppContext();
  return (
    <div
      className=" style-links col-span-5 relative w-full overflow-hidden rounded-[10px] h-[32vh] hover:scale-95 hover:mr-3 transition-all  duration-1000 ease-in-out  hover:shadow-lg"
      style={{
        backgroundColor: getBackgroundColor(4),
        color: getTextColor(4),
        marginTop: "-23vh",
      }}
      onMouseEnter={() => handleMouseEnter(4)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item) => (
          <div key={item.id} className="w-full  flex-shrink-0 ">
            <div
              className={` rounded-[10px] text-white transition-transform duration-1000 ease-in-out  h-[37vh] flex items-center justify-center
              ${isLightTheme ? "bg-backGray" : "bg-jet"} ${
                isLightTheme ? "text-f11" : "text-block"
              }
            `}
              style={{
                backgroundColor: getBackgroundColor(4),
                color: getTextColor(4),
                // marginTop: "-28vh",
              }}
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
            >
              {item.id === 1 ? (
                <div
                  className={`text-xl mt-[-40px] font-syne font-bold text-center flex justify-center items-center
                          
        `}
                >
                  <span>My</span>
                  <br />
                  <span> Services</span>
                </div>
              ) : (
                <p className="font-thin text-2sm">{item.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute left-0 top-1/2 px-4 transform -translate-y-1/2  text-white rounded-full p-2 transition-transform duration-1000 ease-in-out"
        onClick={prevSlide}
        style={{
          // backgroundColor: getBackgroundColor(4),
          color: getTextColor(4),
          // marginTop: "-28vh",
        }}
        onMouseEnter={() => handleMouseEnter(4)}
        onMouseLeave={handleMouseLeave}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        className="absolute right-0 top-1/2 px-4 transform -translate-y-1/2  text-white rounded-full p-2"
        onClick={nextSlide}
        style={{
          // backgroundColor: getBackgroundColor(4),
          color: getTextColor(4),
          // marginTop: "-28vh",
        }}
        onMouseEnter={() => handleMouseEnter(4)}
        onMouseLeave={handleMouseLeave}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
        style={{
          backgroundColor: getBackgroundColor(4),
          color: getTextColor(4),
          // marginTop: "-28vh",
        }}
        onMouseEnter={() => handleMouseEnter(4)}
        onMouseLeave={handleMouseLeave}
      >
        {items.map((_, index) => (
          <div
            key={index}
            className={`w-6 h-[2px] ${
              currentIndex === index ? "bg-red-500" : "bg-gray-400"
            } `}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MyServicesList;
