import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "react-hook-theme";
import { AppProvider, useAppContext } from "./Context/Context";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";

import { applyGlobalStyles } from "./globalScript";
// GrainOverlay component to create a grainy effect

const GrainOverlay = () => {
  
  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    background: "rgba(255, 255, 255, 0.1)", // Adjust for base color
    mixBlendMode: "multiply", // Optional for blending effect
    opacity: 0.9, // Adjust for intensity
    zIndex: 999,
    // Create a grainy effect using CSS
    filter: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1\" height=\"1\"><filter id=\"grain\" color-interpolation-filters=\"sRGB\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\" result=\"turbulence\"/><feColorMatrix in=\"turbulence\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" result=\"grain\"/><feBlend in=\"SourceGraphic\" in2=\"grain\" mode=\"multiply\"/></filter></svg>#grain')",
  };

  return <div style={overlayStyle}></div>;
};

const Root = () => {
  const { isLightTheme } = useAppContext();

// mov 0.08, scale 0.17

  return (
   
    <div
    style={{ cursor: "none" }}
    >
      <App />
      <CustomCursor
        targets={[".main-lottie"]}
        customClass="custom-cursor"
        dimensions={40}
        fill={`${isLightTheme ? "#FFA500" : "#FF381A"}`}
        smoothness={{
          movement: 0.08,
          scale: 0.17,
          opacity: 1.0,
        }}
        opacity={1.0}
        targetOpacity={1.0}
        targetScale={15}
        
      />
      <GrainOverlay /> {/* Add the GrainOverlay component here */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider
    options={{
      theme: "dark",
      save: true,
    }}
  >
    <React.StrictMode>
      <AppProvider>
        <Root />
      </AppProvider>
    </React.StrictMode>
  </ThemeProvider>
);

reportWebVitals();
