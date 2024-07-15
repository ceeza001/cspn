import { roadmaps } from "@/constants"

const Roadmap = () => {
  return (
    <div className="w-full p-[1rem] md:px-[4rem] pointer-events-none">
      <div className="text-center w-full">
        <h1 className="text-white font-bold text-[30px] md:text-[50px]">
          ROADMAP
        </h1>
        <h2 className="font-bold text-[15px] md:text-[25px] gradient-text">
          WHAT THE FUTURE HOLDS
        </h2>  
      </div>
      <div className="mt-8 flex gap-4 flex-wrap justify-between items-start">
        {roadmaps.map((roadmap, i) => (
          <div 
            key={i} 
            className="text-center w-full md:max-w-[18rem] h-[20rem] bg-dark-2 border border-[#1F1F22] rounded-lg p-4">
            <h2 className="text-[20px] font-bold gradient-text">{roadmap.title}</h2>

            <div className="mt-4 space-y-4">
              {roadmap.objectives.map((step, i) => (
                <div key={i} className="text-left flex flex-col space-y-4 gap-8">
                  <div className="flex gap-3 items-start">
                    <p className="text-[14px]"><span className="text-[15px] font-bold text-white">{step}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
