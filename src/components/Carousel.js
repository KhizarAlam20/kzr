import React, { useState } from 'react';

const Carousel = () => {
  const items = [
    { id: 1, content: 'Service 1' },
    { id: 2, content: 'Service 2' },
    { id: 3, content: 'Service 3' },
    { id: 4, content: 'Service 4' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item) => (
          <div key={item.id} className="w-full flex-shrink-0 p-4">
            <div className="bg-bgBlackHighlight p-4 rounded-[10px] h-[37vh] flex items-center justify-center">
              <p className="text-white">{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" onClick={prevSlide}>
        Prev
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" onClick={nextSlide}>
        Next
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-600'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
