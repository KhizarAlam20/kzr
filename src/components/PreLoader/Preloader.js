import React from 'react';
import Lottie from 'react-lottie-player';
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import { useAppContext } from '../../Context/Context';


const Preloader = () => {
    const { isLightTheme } = useAppContext();

  return (
    <>
      <CustomCursor
        targets={[".link", ".main-lottie"]}
        customClass="custom-cursor"
        dimensions={30}
        fill={`${isLightTheme ? "#FFA500" : "#FFF"}`}
        smoothness={{
          movement: 0.08,
          scale: 0.3,
          opacity: 0.9,
        }}
        targetOpacity={0.4}
        targetScale={3.5}

      />
    <div className='flex justify-center items-center h-screen bg-black transition-all duration-1000 ease-in-out'>
        
      <Lottie
      className='main-lottie '
        loop
        animationData={require('../../assets/loading.json')}
        play
        style={{ width: '350px', height: '350px' }}
      />
    </div>
    </>
  );
}

export default Preloader;
