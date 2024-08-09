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
    <div id="home" className="">
      <div className="relative min-h-[100dvh] h-[105vh] ">
        <Hero />

        <div className="z-[1] absolute -bottom-4 left-0 w-full h-[5rem] bg-gradient-to-b from-transparent to-black"></div>
      </div>

      <div id="features" className="mx-auto w-full max-w-[1300px] mt-[4rem]">
        <Features />
      </div>

      <div id="items" className="mx-auto w-full max-w-[1300px] mt-[4rem]">
        <Items />
      </div>

      <div className="mx-auto w-full max-w-[1300px]">
        <Boost />

      </div>

      <div id="faq" className="mx-auto w-full max-w-[1300px] mt-[4rem]">
        <Faq />
      </div>
    </div>
  );
};

export default Home;