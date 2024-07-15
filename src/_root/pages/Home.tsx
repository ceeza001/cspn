import { Hero, Roadmap, Anticipate, Tokenomics } from "@/components/";

const Home = () => {

  return (
    <div className="">
      <div className="h-screen">
        <Hero />
      </div>

      <div className="my-10 md:my-0 max-w-[70rem] mx-auto">
        <Anticipate />
      </div>

      <div className="my-[4rem] max-w-[70rem] mx-auto">
        <Roadmap />
      </div>

      <div className="my-[4rem] text-white max-w-[70rem] mx-auto">
        <Tokenomics />
      </div>
    </div>
  );
};

export default Home;