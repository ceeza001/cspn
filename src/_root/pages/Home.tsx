import { useEffect } from "react"

import { Hero, Features, Items, Boost, Faq } from "@/components/";
import { useLocation } from 'react-router-dom';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  
  return (
    <div id="home" className="bg-[#0B1630] bg-gradient-to-b from-[#0B1630] to-[#1C3C72]">
      <div className="relative min-h-[100dvh] h-[105vh] ">
        <Hero />

        <div className="z-[1] absolute -bottom-4 left-0 w-full h-[5rem] bg-gradient-to-b from-transparent to-[#0B1630]"></div>
      </div>

      <div id="features" className="mx-auto w-full max-w-[1300px] pt-[4rem] bg-gradient-to-b from-[#0B1630] via-[#1C3C71] to-[#0B1630]">
        <Features />
      </div>

      <div id="items" className="mx-auto w-full max-w-[1300px] pt-[4rem] bg-gradient-to-b from-[#0B1630] via-[#1C3C71] to-[#0B1630]">
        <Items />
      </div>

      <div className="mx-auto w-full max-w-[1300px] bg-gradient-to-b from-[#0B1630] via-[#1C3C71] to-[#0B1630]">
        <Boost />

      </div>

      <div id="faq" className="mx-auto w-full max-w-[1300px] pt-[4rem] bg-gradient-to-b from-[#0B1630] via-[#1C3C71] to-[#0B1630]">
        <Faq />
      </div>
    </div>
  );
};

export default Home;