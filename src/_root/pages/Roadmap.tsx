import { Hero, RoadmapList } from "@/components/";

const Roadmap = () => {
  return (
    <div className="flex-center flex-col">
      <div className="relative min-h-[100dvh] h-[105vh] ">
        <Hero />

        <div className="z-[1] absolute -bottom-4 left-0 w-full h-[5rem] bg-gradient-to-b from-transparent to-[#0B1630]"></div>
      </div>
      
      <div id="features" className="mx-auto w-full max-w-[1300px] pt-[4rem] bg-gradient-to-b from-[#0B1630] via-[#1C3C71] to-[#0B1630]">
        <RoadmapList />
      </div>
    </div>
  )
}

export default Roadmap;