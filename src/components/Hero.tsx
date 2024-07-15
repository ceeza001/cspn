import { Link } from "react-router-dom"

import { Vortex } from "@/components/ui/vortex";

const Hero = () => {
  return (
    <Vortex
      backgroundColor="black"
      rangeY={800}
      particleCount={500}
      baseHue={120}
      className="flex items-center flex-col justify-center p-[1rem] md:p-[4rem] w-screen h-screen"
    >
      <div className="drop-shadow-2xl font-bold text-[40px] leading-[101%] text-center">
        <h1 className="mb-4 text-primary">
          TR¥B£
        </h1>
        <h1 className="text-white text-[20px]">
          You've found your trybe, where collective strength fuels individual greatness.
        </h1>
      </div>

      <div className="mt-[4rem] flex flex-col md:flex-row items-center gap-2">
        <Link to="https://t.me/+sqFgLAS6cX9lMDBk" className="rounded-full p-2 px-8 text-white bg-primary flex gap-2 items-center">
          <img 
            src="/assets/icons/telegram.svg"
            alt="telegram"
            className="w-[2rem] h-[2rem] invert-white"
          />
          <>Go To Telegram</>
        </Link>

      </div>
    </Vortex>
  );
};

export default Hero;
