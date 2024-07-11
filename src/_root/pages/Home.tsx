import { Hero, Roadmap, Anticipate,  Impact, Tokenomics } from "@/components/";

const Home = () => {

  return (
    <div className="">
      <div className="text-white">
        <Hero />
      </div>

      <div className="my-10 md:my-0">
        <Anticipate />
      </div>

      <div className="my-[4rem]">
        <Roadmap />
      </div>

      <div className="my-[4rem]">
        <Impact />
      </div>

      <div className="my-[4rem] text-white">
        <Tokenomics />
      </div>
    </div>
  );
};

export default Home;