import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Topbar } from "@/components/";

const Hero = () => {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute top-0 h-full z-50 inset-0 select-none">
        <Topbar />
        
        <div className="p-[1rem] h-full max-h-[80vh] md:p-[6rem] flex flex-col flex-center gap-4">
          <div className="text-center mt-10 w-full">
            <div className="space-y-4 md:space-y-8">
              <div className="text-[36px] md:text-[46px] font-black text-white">
                <img 
                  src="/assets/images/logo.png"
                  alt="logo"
                  className="font-[900] h-[1.3rem] md:h-[4rem] w-full"
                />
              </div>
              <h2 className="text-[23px] mt-2 leading-[120%] md:text-[46px] font-medium text-white">
                Tap Into Your Wild Side:
Become the Ultimate Crypto Mogul
              </h2>
            </div>

            <p className="md:mt-4 md:leading-[120%] rounded-lg text-[15px] md:text-[30px] p-[0.5rem] text-white">
              Bulls charge ahead, Bears swipe down, and Whales feast in every market move. Tap to earn points, power up with boosts and upgrades, and rally your friends for the fiercest battle on the trading floor.
            </p>
          </div>
          
          <div className="w-full mt-20">
            <button className="mx-auto gradient rounded-full font-black text-white text-[20px] md:text-[30px] h-[5rem] flex-center gap-2 p-2 px-4 w-full max-w-[25rem]">
              <img 
                src="/assets/icons/gamepad.webp"
                alt="gamepad"
                width={25}
                height={25}
              />
              <p>Play Now</p>
            </button>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}

export default Hero;