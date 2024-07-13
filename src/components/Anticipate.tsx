import { Button } from "@/components/ui/moving-border";

const Anticipate = () => {
  return (
    <div className="p-[1rem] md:p-[4rem] w-full">
      <div className="text-white w-full text-center">
        <h1 className="font-bold text-[50px] md:text-[6rem]">Butt On Ton
        </h1>
        <h2 className="font-semibold text-[25px] md:text-[4rem] gradient-text">MORE THAN A MEME
        </h2>
      </div>
      
      <div className="mt-8 w-full flex md:flex-nowrap flex-wrap-reverse  gap-4 md:gap-10 justify-center items-start pointer-events-none">
        <div className="w-full flex flex-col gap-2">
          <div
            className="w-full flex flex-col "
          >
            <Button
              borderRadius="15px"
              className="bg-dark-2 flex items-center justify-center w-full p-4 border-primary-500/50">
              <img 
                src="/assets/butt4.png"
                className="h-[8rem]"
              />
            </Button>
          </div>
          <div className="flex gap-2 w-full">
            <Button
              borderRadius="15px"
              className="w-full bg-dark-2 flex items-center justify-center w-full p-4 border-primary-500/50">
              <img 
                src="/assets/butt3.png"
                className=" "
              />
            </Button>
            <Button
              borderRadius="15px"
              className="bg-dark-2 flex items-center justify-center w-full p-4 border-primary-500/50">
              <img 
                src="/assets/butt2.png"
                className=""
              />
            </Button>
          </div>
        </div>
        
        <div className="w-full font-medium text-[15px]">
          <p>
            ButTon has just launched on the TON blockchain and aims to celebrate body positivity and diversity. What started as a playful idea is quickly gaining traction. The ButTon community is growing fast, sharing memes, creating viral content, and spreading a message of confidence and empowerment.
          </p>
          <br />
          <p>
            ButTon isn't just about fun; it embraces and empowers individuals, highlighting the beauty of confidence and self-expression. By merging playful internet culture with cutting-edge blockchain technology, we seek to create a supportive and inclusive community that uplifts and celebrates everyone’s unique assets.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Anticipate;