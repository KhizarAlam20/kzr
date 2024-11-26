import React, { useContext, useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import ProjectLinks from "./components/ProjectLinks";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";
import MyServicesList from "./components/MyServicesList";
import { AppContext } from "./Context/Context";
import Preloader from "./components/PreLoader/Preloader";
import { applyGlobalStyles } from "./globalScript";
import Coffee from "./components/Coffee";
import GridComponent from "./components/GridComponent";
import CONTACTMEPAGE from "./components/CONTACTMEPAGE";

const App = () => {
  const { isLightTheme } = useContext(AppContext);
  const [hoveredDiv, setHoveredDiv] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

 
  //apply script
  applyGlobalStyles();
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 11000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  const handleMouseEnter = (divNumber) => {
    setHoveredDiv(divNumber);
  };

  const handleMouseLeave = () => {
    setHoveredDiv(null);
  };

  const getBackgroundColor = (divNumber) => {
    return hoveredDiv === null
      ? ""
      : hoveredDiv === divNumber
      ? ""
      : "#302F3310";
  };

  const getTextColor = (divNumber) => {
    return hoveredDiv === null
      ? ""
      : hoveredDiv === divNumber
      ? isLightTheme
        ? ""
        : "#fff"
      : "#7c7c7c";
  };

  //EBE9E9
  return (
    <div
      className={`App transition-colors duration-1000 ease-in-out h-screen`}
      style={{
        backgroundColor: isLightTheme ? "#fff" : "#0A0A0A",
      }}
    >
    
      <style>
        {`
          .main-content {
            opacity: 0; /* Initial opacity */
            animation: fadeIn 1s forwards; /* Apply the fade-in animation */
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .loaded {
            opacity: 1; /* Final opacity after loading */
          }

          .footer {
            text-align: center;
            padding: 16px 0;
          }
        `}
      </style>

      {!isLoaded ? (
        <Preloader />
      ) : (
        <>
          <div className="xl:hidden text-white text-2xl flex flex-col justify-between gap-y-[30px] items-center font-syne font-bold p-12 "
          >
            <NavBar />

            <HeroSection
              height={"10vh"}
              hoveredDiv={hoveredDiv}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              getBackgroundColor={getBackgroundColor}
              getTextColor={getTextColor}
            />

            <Services
              hoveredDiv={hoveredDiv}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              getBackgroundColor={getBackgroundColor}
              getTextColor={getTextColor}
            />

            {/* <Contact
              hoveredDiv={hoveredDiv}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              getBackgroundColor={getBackgroundColor}
              getTextColor={getTextColor}
            /> */}

            


            <div className="footer  ">
              <p className="text-sm text-gray-600 pt-1">
                © {new Date().getFullYear()} Khizar. All rights reserved |
                Developed by Khizar Alam
              </p>
            </div>
          </div>
          
          <main
            className={`main-content ${
              isLoaded ? "loaded" : ""
            } px-[195px] pt-[45px] text-black  xl:block hidden`}
          >
            <NavBar />
            {/* <Coffee/> */}
            <div className="pt-[40px]">
              <div className="">
                <div className="grid grid-cols-12 grid-row-12 gap-x-[14px] gap-y-[14px]">

                  <CONTACTMEPAGE/>


                  <HeroSection
                    height={"40vh"}
                    hoveredDiv={hoveredDiv}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    getBackgroundColor={getBackgroundColor}
                    getTextColor={getTextColor}
                  />
                  <Services
                    hoveredDiv={hoveredDiv}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    getBackgroundColor={getBackgroundColor}
                    getTextColor={getTextColor}
                  />
                  <ProjectLinks
                    hoveredDiv={hoveredDiv}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    getBackgroundColor={getBackgroundColor}
                    getTextColor={getTextColor}
                  />
                  <MyServicesList
                    hoveredDiv={hoveredDiv}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    getBackgroundColor={getBackgroundColor}
                    getTextColor={getTextColor}
                  />
                  <Contact
                    hoveredDiv={hoveredDiv}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    getBackgroundColor={getBackgroundColor}
                    getTextColor={getTextColor}
                  />
                  <SocialLinks
                    hoveredDiv={hoveredDiv}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    getBackgroundColor={getBackgroundColor}
                    getTextColor={getTextColor}
                  />
                </div>
              </div>
            </div>
          </main>
          <footer className="footer xl:block hidden ">
            <p className="text-sm text-gray-600 pt-4">
              © {new Date().getFullYear()} Khizar. All rights reserved |
              Developed by Khizar Alam
            </p>
          </footer>
          {/* <GridComponent/> */}
        </>
      )}
    </div>
  );
};

export default App;
