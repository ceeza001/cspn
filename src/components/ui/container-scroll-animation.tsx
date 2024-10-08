"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = () => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[50rem] flex flex-col md:flex-row items-center justify-end relative"
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Card rotate={rotate} translate={translate} scale={scale} />
      </div>

      <div className="flex flex-col items-start space-y-4">
        <span className="w-fit font-thin text-[13px] rounded-lg p-[0.5rem] glassmorphism text-primary">
          MORE POSSIBILITIES
        </span>
        <h1 className="text-white text-4xl md:text-[40px] font-bold mt-1 leading-none">
          Boosts
        </h1>
        <p>
          Boosts are essential to any trader, allowing Bulls to Charge Forward, Bears to Claw Back and Whales to Eat Them All.
        </p>

        <p>
          Everything from Multiple Taps per Tap, to increasing the FOMO limit, every Boost has a purpose.
        </p>
        
        <p className="font-bold text-white/80">
          Stragetically manage which order to get Boosts to maximize your gains.
        </p>
      </div>
    </div>
  );
};

export const Card = ({
  rotate,
  scale,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className="relative w-[300px] mt-[-2rem] mx-auto full"
    >
      <img
        src={`/assets/images/Boost.png`}
        alt="hero"
        className="mx-auto h-[30rem] md:h-full"
        draggable={false}
      />
      <div className="absolute z-[-1] top-0 -left-[4rem]  blur-2xl rounded-full w-[30rem] h-[30rem] bg-gradient-to-b from-[#0B1630] to-primary" />
    </motion.div>
  );
};
