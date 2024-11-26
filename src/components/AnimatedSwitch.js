import React, { useState } from "react";
import Lottie from "react-lottie-player";
import animationData from "../assets/mode.json"; // Path to your JSON file

const AnimatedSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button
        onClick={toggleSwitch}
        style={{
          padding: "10px 20px",
          background: isDarkMode ? "#333" : "#fff",
          color: isDarkMode ? "#fff" : "#000",
          border: "none",
          cursor: "pointer",
          borderRadius: "20px",
          outline: "none",
        }}
      >
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      {/* Lottie Animation */}
      <Lottie
        loop
        animationData={animationData}
        play
        speed={1}
        style={{ width: 150, height: 150 }}
      />
    </div>
  );
};

export default AnimatedSwitch;
