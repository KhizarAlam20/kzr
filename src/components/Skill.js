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
    <div className="font-poppins"> {/* Applied font-poppins here for global font */}
      {/* Backdrop (will dim the background when the side tab is open) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-[1000ms] ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      ></div>

      {/* Button to trigger the side tab */}
      <div
        className={`absolute top-1/2 right-0 transform -translate-y-1/2 z-50 transition-all duration-[1000ms] ease-in-out ${isOpen ? "translate-x-[-100%]" : ""}`}
        style={{ right: isOpen ? "12%" : "0" }} // Move button when tab opens
      >
        <a
          className="flex items-center justify-center h-10 px-4 text-sm font-poppins text-white bg-yellow-400 shadow-sm hover:shadow-md hover:opacity-85 transition-all duration-300 rounded-xl"
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
        className={`fixed top-0 right-0 h-full bg-jet text-white p-4 transform transition-transform duration-[1000ms] ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ width: "30%", zIndex: 40 }} // Add z-index here
      >
        <h2 className="flex justify-center text-2xl font-bold mb-4 text-white font-poppins">Skills Stack</h2>

        {/* Categories */}
        <div className="">
        <h2 className="text-lg font-semibold mb-3 bg-yellow-400 text-black p-2 rounded-md font-poppins">
  Tech Skills
</h2>

          <div className="w-full h-[1px] bg-gray-700 mb-3 "></div>


          <h3 className="text-sm font-medium mb-3 font-poppins">Programming Languages</h3>
         
          <div className="flex flex-wrap gap-2 mb-6">
            <div className="flex items-center gap-2 bg-gray-800 text-white p-1 px-2 rounded-md">
              <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="Java" className="w-5 h-5" />
              <span className="text-sm">Java</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 text-white p-1 px-2 rounded-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript" className="w-5 h-5" />
              <span className="text-sm">JavaScript</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 text-white p-1 px-2 rounded-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Python_logo_2020.svg" alt="Python" className="w-5 h-5" />
              <span className="text-sm">Kotlin</span>
            </div>

            <div className="flex items-center gap-2 bg-gray-800 text-white p-1 px-2 rounded-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Python_logo_2020.svg" alt="Python" className="w-5 h-5" />
              <span className="text-sm">C/C++</span>
            </div>
          </div>

          <h3 className="text-sm font-medium mb-3 font-poppins">Front-end Tech</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            <div className="flex items-center gap-2 bg-gray-800 text-white p-1 px-2 rounded-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="w-5 h-5" />
              <span className="text-sm">React Native</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 text-white p-1 px-2 rounded-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Angular_logo.svg" alt="Angular" className="w-5 h-5" />
              <span className="text-sm">Expo</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 text-white p-1 px-2 rounded-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/HTML5_logo_and_wordmark.svg" alt="HTML5" className="w-5 h-5" />
              <span className="text-sm">Kotlin XML</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 text-white p-1 px-2 rounded-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/HTML5_logo_and_wordmark.svg" alt="HTML5" className="w-5 h-5" />
              <span className="text-sm">Tailwind</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 text-white p-1 px-2 rounded-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/HTML5_logo_and_wordmark.svg" alt="HTML5" className="w-5 h-5" />
              <span className="text-sm">Html Css</span>
            </div>
          </div>

          <h3 className="text-sm font-medium mb-3 font-poppins">Back-end Tech</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            <div className="flex items-center gap-2 bg-gray-800 text-white p-1 px-2 rounded-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Node.js_logo_2015.svg" alt="Node.js" className="w-5 h-5" />
              <span className="text-sm">Node.js</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 text-white p-1 px-2 rounded-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/Expressjs.png" alt="Express.js" className="w-5 h-5" />
              <span className="text-sm">Express.js</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 text-white p-1 px-2 rounded-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Go_Logo.png" alt="Go" className="w-5 h-5" />
              <span className="text-sm">Spring Boot</span>
            </div>
          </div>

          <h3 className="text-sm font-medium mb-3 font-poppins">DevOps Tools</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            <div className="flex items-center gap-2 bg-gray-800 text-white p-1 px-2 rounded-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Docker_%28container_engine%29_logo.svg" alt="Docker" className="w-5 h-5" />
              <span className="text-sm">Docker</span>
            </div>
            
            <div className="flex items-center gap-2 bg-gray-800 text-white p-1 px-2 rounded-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Terraform_Logo.svg" alt="Terraform" className="w-5 h-5" />
              <span className="text-sm">Git/Github</span>
            </div>

            <div className="flex items-center gap-2 bg-gray-800 text-white p-1 px-2 rounded-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Terraform_Logo.svg" alt="Terraform" className="w-5 h-5" />
              <span className="text-sm">AWS</span>
            </div>
          </div>

          <h2 className="text-lg font-semibold mb-3 bg-yellow-400 text-black p-2 rounded-md font-poppins">
  Designing Skills
</h2>

          <div className="w-full h-[1px] bg-gray-700 mb-3 "></div>
          <div className="flex flex-wrap gap-2">
         

            <div className="flex items-center gap-2 bg-gray-800 text-white p-1 px-2 rounded-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Adobe_Illustrator_CC_icon.png" alt="Illustrator" className="w-5 h-5" />
              <span className="text-sm">Illustrator</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 text-white p-1 px-2 rounded-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Figma-logo.svg" alt="Figma" className="w-5 h-5" />
              <span className="text-sm">Figma</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 text-white p-1 px-2 rounded-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Blender_logo.svg" alt="Blender" className="w-5 h-5" />
              <span className="text-sm">Blender</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 text-white p-1 px-2 rounded-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/2D_Animation_logo.svg" alt="2D Animation" className="w-5 h-5" />
              <span className="text-sm">2D Animation</span>
            </div>
           
            <div className="flex items-center gap-2 bg-gray-800 text-white p-1 px-2 rounded-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Graphic_Design_icon.svg" alt="Graphic Design" className="w-5 h-5" />
              <span className="text-sm">Clip Studio Paint</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
