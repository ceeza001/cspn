import { useEffect, useRef } from "react";
import clash from "@/assets/clash.mp4";

const Features = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (videoRef.current) {
            videoRef.current.play(); // Play the video when it's in the viewport
          }
        } else {
          if (videoRef.current) {
            videoRef.current.pause(); // Pause the video when it's out of the viewport
          }
        }
      },
      { threshold: 0.5 } // Adjust the threshold to control when the video starts/stops
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="p-[1rem] md:p-[6rem]">
      <div className="flex flex-wrap md:flex-nowrap items-start gap-10 justify-between">
        <div className="max-w-[140rem] md:w-[140%] mb-4 flex flex-col items-start space-y-4">
          <span className="w-fit font-thin text-[13px] rounded-lg p-[0.5rem] glassmorphism text-primary">
            MARKET CLASH
          </span>
          <h1 className="text-white text-4xl md:text-[40px] font-bold mt-1 leading-none">
            What's Market-Clash?
          </h1>
          <p>
            Market-Clash CSPN Tap Game is a simple yet addictive tapping experience where you collect points with just a click, redeem them for crypto rewards, invite friends to earn more, and fill up your BAG powers to dominate opponents - introducing the world to crypto earning through a fun and easy-to-play game.
          </p>
        </div>

        <div className="w-full md:max-w-[50rem] aspect-square">
          <video ref={videoRef} src={clash} autoPlay loop muted className="rounded-lg" />
        </div>
      </div>
      
      <div className="mt-[4rem] flex flex-wrap justify-between items-center gap-4">
        <div className="w-full flex flex-col md:flex-row gap-4 p-4 md:flex-1 rounded-lg bg-dark-2 md:bg-transparent border-2 md:border-0 border-dark-4">
          <div className="w-full">
            <div className="mx-auto relative mt-2 w-full md:max-w-[15rem]">
              <img 
                src="/assets/images/points.png" alt="Points" 
                className="w-full h-full rotate-[-5deg] max-w-[10rem] shadow-4xl shadow-primary" 
              />
              <img 
                src="/assets/images/referral.png" alt="Referrals" 
                className="w-full absolute rotate-[5deg] max-w-[10rem] top-4 right-0 h-full shadow-4xl shadow-primary" 
              />
            </div>
          </div>

          <div className="mt-8">
            <h1 className="mb-2 text-xl text-white font-bold ">
              The Game That Puts Your Points to Work
            </h1>
            <p>
              Turn your in-game points into CSPN and TON coins, or gift them to friends - the power is in your hands!
            </p>

            <ul className="inset relative mt-4 bg-dark-4 p-2 pl-4 rounded-lg">
              <span className="absolute top-0 left-0 rounded-l-lg h-full w-2 bg-primary"></span>
              <li>Earn points for inviting friends to join the game</li>
              <li>Get 10% of the points your friends earn</li>
              <li>Receive a 10% commission on their in-game purchases</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;