import React from 'react';

function Coffee() {
  return (
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 ">
      <a 
        className="flex rounded-xl justify-center items-center h-10 text-xl font-cursive text-white bg-yellow-400 shadow-sm hover:shadow-md hover:opacity-85 transition-all duration-300"
        target="_blank" 
        rel="noopener noreferrer" 
        href="https://www.buymeacoffee.com/agney"
        style={{ transform: 'rotate(-90deg)' }} // Apply rotation here
      >
        <img 
          className="h-5 w-5 ml-4 align-middle"
          src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" 
          alt="Buy me a coffee"
        />
        <span className="mr-5 ml-2 text-sm text-black">Buy me a coffee</span>
      </a>
    </div>
  );
}

export default Coffee;
