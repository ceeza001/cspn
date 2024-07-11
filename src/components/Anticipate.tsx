import { motion } from "framer-motion"

import { Button } from "@/components/ui/moving-border";

const Anticipate = () => {
  return (
    <div className="p-[1rem] md:p-[4rem] w-full">
      <div className="text-white w-full text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut"}}
          viewport={{ once: true }}
          className="font-bold text-[50px] md:text-[6rem]">Butt On Ton
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut"}}
          viewport={{ once: true }}
          className="font-semibold text-[25px] md:text-[4rem] gradient-text">MORE THAN A MEME
        </motion.h2>
      </div>
      
      <div className="mt-8 w-full flex md:flex-nowrap flex-wrap-reverse  gap-4 md:gap-10 justify-center items-start pointer-events-none">
        <div className="w-full flex flex-col gap-2">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeInOut"}}
            viewport={{ once: true }}
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
          </motion.div>
          <div className="flex gap-2 w-full">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 1.2, ease: "easeInOut"}}
              viewport={{ once: true }}
            >
              <Button
                borderRadius="15px"
                className="w-full bg-dark-2 flex items-center justify-center w-full p-4 border-primary-500/50">
                <img 
                  src="/assets/butt3.png"
                  className=" "
                />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut"}}
              viewport={{ once: true }}
            >
              <Button
                borderRadius="15px"
                className="bg-dark-2 flex items-center justify-center w-full p-4 border-primary-500/50">
                <img 
                  src="/assets/butt2.png"
                  className=""
                />
              </Button>
            </motion.div>
          </div>
        </div>
        
        <div className="w-full font-medium text-[15px]">
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut"}}
            viewport={{ once: true }}
          >
            ButTon has just launched on the TON blockchain and aims to celebrate body positivity and diversity. What started as a playful idea is quickly gaining traction. The ButTon community is growing fast, sharing memes, creating viral content, and spreading a message of confidence and empowerment.
          </motion.p>
          <br />
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeInOut"}}
            viewport={{ once: true }}
          >
            ButTon isn't just about fun; it embraces and empowers individuals, highlighting the beauty of confidence and self-expression. By merging playful internet culture with cutting-edge blockchain technology, we seek to create a supportive and inclusive community that uplifts and celebrates everyone’s unique assets.
          </motion.p>
        </div>
        
      </div>
    </div>
  );
};

export default Anticipate;