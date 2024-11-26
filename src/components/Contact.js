// src/components/Contact.js
import React, { useEffect } from "react";
import arrow from "../assets/arrow.png";
import { applyGlobalStyles } from "../globalScript";
import SvgIcon from "../assets/icons/SvgIcon";

const Contact = ({
  hoveredDiv,
  handleMouseEnter,
  handleMouseLeave,
  getBackgroundColor,
  getTextColor,
}) => {

  applyGlobalStyles();
  // You can hide the div by conditionally applying the 'hidden' class
  return (
    <div
      className={"style-links  col-span-4 cursor-pointer bg-highOrange p-4 text-white rounded-[10px] h-[32vh] hover:scale-95 transition-all  duration-1000 ease-in-out hover:shadow-lg flex flex-col justify-between mt-[-23vh] "}
      style={{
        backgroundColor: getBackgroundColor(5),
        color: getTextColor(5),
      }}
      onMouseEnter={() => handleMouseEnter(5)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex  justify-between items-center">
        <p className="text-2sm px-4 py-2 font-poppins font-extralight">
          Have queries?
        </p>
        {/* <SvgIcon/> */}
        <img
          src={arrow}
          alt="col2 image"
          className="w-[35px] h-[35px] rounded-[10px]"
        />
      </div>
      <p className="text-3xl px-4 py-2 text-left font-syne font-semibold">
        Contact me
      </p>
    </div>
  );
};

export default Contact;
