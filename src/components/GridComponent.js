import React, { useState } from 'react';

const GridComponent = () => {
  // State to track the clicked div
  const [activeDiv, setActiveDiv] = useState(null);

  const handleClick = (divId) => {
    // Toggle the active div. If it's already active, set it to null.
    setActiveDiv(activeDiv === divId ? null : divId);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Div 1 */}
      <div
        className="block p-4 text-white bg-pink-500 transition-opacity duration-300"
        onClick={() => handleClick('div1')}
        style={{
          opacity: activeDiv === 'div1' || activeDiv === null ? 1 : 0, // Full opacity if active, 0.3 if not
        }}
      >
        Div 1
      </div>

      {/* Div 2 */}
      <div
        className="block p-4 text-white bg-red-500 transition-opacity duration-300"
        onClick={() => handleClick('div2')}
        style={{
          opacity: activeDiv === 'div2' || activeDiv === null ? 1 : 0,
        }}
      >
        Div 2
      </div>

      {/* Div 3 */}
      <div
        className="block p-4 text-white bg-green-500 transition-opacity duration-300"
        onClick={() => handleClick('div3')}
        style={{
          opacity: activeDiv === 'div3' || activeDiv === null ? 1 : 0,
        }}
      >
        Div 3
      </div>

      {/* Div 4 */}
      <div
        className="block p-4 text-white bg-yellow-500 transition-opacity duration-300"
        onClick={() => handleClick('div4')}
        style={{
          opacity: activeDiv === 'div4' || activeDiv === null ? 1 : 0,
        }}
      >
        Div 4
      </div>
    </div>
  );
};

export default GridComponent;
