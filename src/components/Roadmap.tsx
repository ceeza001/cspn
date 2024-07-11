import { roadmaps } from "@/constants"
import { motion } from "framer-motion"

const Roadmap = () => {
  return (
    <div className="w-full p-[1rem] md:px-[4rem] pointer-events-none">
      <div className="text-white w-full md:w-2/5">
        <motion.h1 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0}}
          transition={{ delay: 0, duration: 1.2, ease: "easeInOut"}}
          viewport={{ once: true }}
          className="font-bold text-[50px]">
          Roadmap
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0, duration: 1.2, ease: "easeInOut"}}
          viewport={{ once: true }}
          className="font-bold text-[25px] gradient-text2">
          The journey
        </motion.h2>  
      </div>
      <div className="mt-8 flex gap-4 flex-wrap md:flex-nowrap justify-between items-start">
        {roadmaps.map((roadmap, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -100, y: -100 }}
            whileInView={{ opacity: 1, x: 0, y: 0}}
            transition={{ delay: i * 0.3, duration: 1.5, ease: "easeInOut"}}
            viewport={{ once: true }}
            className="text-center w-full bg-dark-2 border border-[#1F1F22] rounded-lg p-4">
            <h2 className="text-[20px] font-bold gradient-text">{roadmap.title}</h2>

            <div className="mt-4 space-y-4">
              {roadmap.steps.map((step) => (
                <motion.div key={step.id} className="text-left flex flex-col space-y-4 gap-8">
                  <div className="flex gap-3 items-start">
                    <img
                      src="/assets/icons/checked-box.svg"
                      className={`${!step.checked && "invert-white"} w-[1.5rem]`}
                  />
                    <p className="text-[14px]"><span className="text-[15px] font-bold text-white">{step.name}:</span> {step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
