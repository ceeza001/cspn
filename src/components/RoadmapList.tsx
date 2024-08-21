import { roadmap } from "@/constants"

const RoadmapList = () => {
  
  return (
    <div className="p-[1rem] md:p-[6rem]">
      <h1 className="mt-8 text-white text-center h1 font-bold">Roadmap</h1>

      <div className="">
        {roadmap.map((item, i) => (
          <div key={i} className="inset relative mt-4 black-glassmorphism p-5 rounded-lg">
            <span className="absolute top-0 left-0 rounded-l-lg h-full w-2 bg-primary"></span>
            <h1 className="ml-2 mb-2 font-bold text-white text-3xl">{item.title}</h1>
            <div className="flex flex-col gap-2">
              {item.content.map((content, i) => (
                <div key={i} className="flex font-semibold text-white/70 text-[16px] gap-2 items-start">
                  <img
                    src="/assets/icons/bullet.svg"
                    className="w-[1.5rem] h-[1.5rem]"
                  />
                  <p>
                    <span className="">{content.name} - </span>
                    {content.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
}

export default RoadmapList;