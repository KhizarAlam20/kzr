import React, { useState } from "react";

function Skill() {
  // State to toggle the side tab visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the side tab visibility when the button is clicked
  const toggleSideTab = () => {
    // Log to the console when the button is clicked
    console.log("Button clicked! Toggling side tab visibility...");
    
    // Toggle the side tab visibility state
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to trigger the side tab */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-50">
        <a
          className="flex items-center justify-center h-10 px-4 text-sm font-cursive text-white bg-yellow-400 shadow-sm hover:shadow-md hover:opacity-85 transition-all duration-300 rounded-xl"
          onClick={toggleSideTab} // Toggle side tab visibility on click
          href="#"
          style={{ transform: "rotate(-90deg)" }} // Apply rotation here
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#000"
            className="h-4 w-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
          <span className="text-xs text-black ml-2 mr-2">Open my Skills Stack</span>
        </a>
      </div>

      {/* Side tab */}
      <div
        className={`fixed top-0 right-0 h-full bg-jet text-white p-4 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ width: "25%", zIndex: 40 }} // Add z-index here
      >
        <h2 className="text-xl font-bold mb-4">Skills Stack</h2>
        {/* Content of the side tab */}
        <p>Here are my skills...</p>
        {/* You can add more content or links related to your skills */}
      </div>
    </div>
  );
}

export default Skill;
