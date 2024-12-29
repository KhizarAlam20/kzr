import React from 'react';
import Lottie from 'react-lottie-player';
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import { useAppContext } from '../../Context/Context';


const Preloader = () => {
    const { isLightTheme } = useAppContext();

  return (
    <>
     {/* <CustomCursor
            targets={[".link", ".main-lottie"]}
            customClass="custom-cursor"
            dimensions={45}
            fill={`${isLightTheme ? "#FFA500" : "#FF381A"}`}
            smoothness={{
              movement: 0.08,
              scale: 0.17,
              opacity: 1.0,
            }}
            opacity={1.0}
            targetOpacity={1.0}
            targetScale={15}
            
          /> */}
    <div className='flex justify-center items-center h-screen bg-black transition-all duration-1000 ease-in-out '>
        
      <Lottie
      className='main-lottie '
        loop
        animationData={require('../../assets/loading.json')}
        play
        style={{ width: '290px', height: '290px' }}
      />
    </div>
    </>
  );
}

export default Preloader;
