import { Hero, Features, Items, Boost, Faq } from "@/components/";

const Home = () => {

  return (
    <div className="">
      <div className="relative h-[700px]">
        <Hero />

        <div className="z-[100] absolute -bottom-4 left-0 w-full h-[5rem] bg-gradient-to-b from-transparent to-black"></div>
      </div>

      <div className="mt-[4rem]">
        <Features />
      </div>

      <div className="mt-[4rem]">
        <Items />
      </div>

      <div className="">
        <Boost />

      </div>

      <div className="mt-[4rem]">
        <Faq />
      </div>
    </div>
  );
};

export default Home;