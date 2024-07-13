import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/moving-border";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Hero = () => {
  return (
    <AuroraBackground>
      <div className="overflow-hidden h-full w-full pt-[4rem] absolute z-50 flex flex-wrap-reverse md:flex-nowrap justify-around items-center gap-4 md:gap-8 p-[1rem] md:px-[6rem]">
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut"}}
          viewport={{ once: true }}
          className="w-full space-y-8 md:space-y-10"
        >
          <h1 
            className="font-bold text-[30px] md:text-[40px] leading-[101%] text-[#B24EFF] drop-shadow-2xl">
              Will you be part of the movement?
          </h1>
          <p>
            Let's shake up the crypto world with ButTon: Celebrating Confidence, Diversity, and Big Ideas!
          </p>

          <div className="z-[900] flex items-center gap-2">
            <Button
              borderRadius="15px"
              className="pointer-event-none bg-transparent text-white border-primary-500/50 p-4 font-bold"
            >
              <Link to="https://t.me/gasPump_bot/app?startapp=eyJyZWZfdXNlcl9pZCI6NjgyMjU3MjA3MCwidG9rZW5fYWRkcmVzcyI6IkVRQjc0eGluYVJ0NHB5YmszaTJtSWdOV2x6R3BzQlNYZVFIeGpoNmt3VFh5RVZLbyJ9" 
                className=""
              >
              Coming Soon
              </Link>
            </Button>
            
            <Link to="https://t.me/BUTTonTON1">
              <img 
                src="/assets/icons/telegram.svg"
                alt="telegram"
                width={50}
                height={50}
              />
            </Link>
            
            <Link to="https://x.com/Butt_on_TON?t=ZcQ-QoKtFgTzWJm6r2h9LQ&s=09" className="relative">
              <span className="bg-white top-2 left-2 absolute z-[-1] h-[2rem] w-[2rem]" />
              <img 
                src="/assets/icons/x.svg"
                alt="X-twitter"
                width={50}
                height={50}
              />
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut"}}
          viewport={{ once: true }}
          className="w-full flex items-center justify-center">
          <img 
            src="/assets/hero.png" 
            alt="Button_On_Ton" 
            className="w-[15rem] md:w-full aspect-square"
          />
        </motion.div>
      </div>
    </AuroraBackground>
  );
};

export default Hero;
