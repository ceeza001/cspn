import React from "react";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const Hero = () => {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute top-0 h-full p-[1rem] md:p-[6rem] pt-[6rem] z-50 inset-0 flex flex-wrap-reverse md:flex-nowrap items-end md:items-center md:gap-10 md:justify-between pointer-events-none">
        <div className="w-full flex flex-col gap-4">
          <span className="w-fit font-thin text-[13px] rounded-lg p-[0.5rem] black-glassmorphism text-primary">
            CSPN TAP GAME V1.0
          </span>

          <div>
            <div className="leading-[220%]">
              <h1 className="text-[30px] font-bold gradient-text">
                Points That Pay: 
              </h1>
              <h2 className="text-[36px] font-bold text-white">
                The Crypto Way
              </h2>
            </div>

            <div className="mt-4 max-w-md rounded-lg glassmorphism p-[0.5rem]">
              Click, collect, and cash in! Accumulate points with ease and use them to tap into the potential of crypto markets.
            </div>
          </div>

          <div>
            <button className="gradient rounded-full font-bold text-white text-[20px] flex gap-2 items-center p-2 px-4">
              <img 
                src="/assets/icons/gamepad.webp"
                alt="gamepad"
                width={25}
                height={25}
              />
              <p>Play Now</p>
            </button>
          </div>
        </div>
        
        <div className="w-full h-[12rem] black-glassmorphism">
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}

export default Hero;