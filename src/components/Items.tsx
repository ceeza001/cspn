import { BackgroundGradient } from "@/components/ui/card-gradient";
import { IconAppWindow } from "@tabler/icons-react";

import { items } from "@/constants"

const Items = () => {
  return (
    <div className="mx-auto w-full max-w-7xl flex-between flex-wrap gap-4 justify-between p-[1rem] md:p-[6rem]">
      <div className=" mb-4 flex flex-col items-start space-y-4">
        <span className="w-fit font-thin text-[13px] rounded-lg p-[0.5rem] glassmorphism text-primary">
          ITEMS
        </span>
        <h1 className="text-white text-4xl md:text-[40px] font-bold mt-1 leading-none">
          Kit Options
        </h1>
        <p>
          Your KIT has a number of powerful tools that can be purchased to enhance your potential or provide special privledges like Sending Points to other players, restoring FOMO, Entering into Airdrops or even voting on the next game improvements to be made.
        </p>
      </div>
      
      {items.map((item) => (
        <BackgroundGradient
          key={item.name}
          className="rounded-[22px] flex-1 w-full md:max-w-[15rem] md:h-[20rem] p-4 bg-zinc-900">
            <IconAppWindow/>

            <div className="my-2 w-full flex items-center justify-center">
              <img
                src={`/assets/images/${item.imgUrl}`}
                alt={item.name}
                className="w-[6rem]"
              />
            </div>
            <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
              {item.name}
            </p>

            <p className="text-sm text-neutral-400">
              {item.description}
            </p>
      </BackgroundGradient>
      

      ))}
    </div>
  );
}

export default Items