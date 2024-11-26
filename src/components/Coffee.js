import React from 'react';

function Coffee() {
  return (
    <a 
      className="absolute rotate-90 inline-flex items-center justify-center h-20  text-2xl font-cursive text-white bg-orange-500 border border-transparent rounded-md shadow-sm hover:shadow-md hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
      target="_blank" 
      rel="noopener noreferrer" 
      href="https://www.buymeacoffee.com/agney"
    >
      <img 
        className="h-8 w-8 mb-1 align-middle"
        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" 
        alt="Buy me a coffee"
      />
      <span className="ml-4">Buy me a coffee</span>
    </a>
  );
}

export default Coffee;
