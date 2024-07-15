import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Tokenomics = () => {
  return (
    <div className="w-full p-[1rem] md:px-[4rem]">
      <div className="w-full text-center">
        <h1 
          className="font-bold text-[30px] md:text-[50px]">
          MEET THE FOUNDERS
        </h1>
        <h2 
          className="font-bold text-[20px] md:text-[25px] gradient-text2">
          Giga chads
        </h2>
        
      </div>
      <div className="mt-8 flex gap-4 flex-wrap justify-between items-center">
        {items.map((item, i) => (
          <div 
            key={i} 
            className="w-full md:max-w-[18rem] bg-dark-2 border border-[#1F1F22] rounded-lg p-2">
            {item.header}
            <div className="mt-8">
              <h2 className="text-[20px] font-bold gradient-text">{item.title}</h2>
              <p className="text-[12px] font-semibold">{item.content}</p>

              <Link to={item.link} className="cursor-pointer mt-8 bg-primary w-full h-[3rem] rounded-lg flex flex-col items-center justify-center">
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkeletonOne = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-lg flex-col space-y-2"
    >
      <motion.div className="overflow-hidden h-full w-full rounded-lg">
        <img
          src="/assets/images/venom_bg.jpg"
        />
      </motion.div>
      <div className="absolute bottom-[-1rem] left-2 rounded-lg overflow-hidden h-[3.5rem] w-[3.5rem] border-2 border-dark-2">
        <img
          src="/assets/images/venom.jpg"
        />
      </div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-lg flex-col space-y-2"
    >
      <motion.div className="overflow-hidden h-full w-full rounded-lg">
        <img
          src="/assets/images/reiko_bg.jpg"
        />
      </motion.div>
      <div className="absolute bottom-[-1rem] left-2 rounded-lg overflow-hidden h-[3.5rem] w-[3.5rem] border-2 border-dark-2">
        <img
          src="/assets/images/reiko.jpg"
        />
      </div>
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-lg flex-col space-y-2"
    >
      <motion.div className="overflow-hidden h-full w-full rounded-lg">
        <img
          src="/assets/images/icebam_bg.jpg"
        />
      </motion.div>
      <div className="absolute bottom-[-1rem] left-2 rounded-lg overflow-hidden h-[3.5rem] w-[3.5rem] border-2 border-dark-2">
        <img
          src="/assets/images/icebam.jpg"
        />
      </div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
      className="relative flex flex-1 w-full h-[6rem] rounded-lg flex-col space-y-2"
    >
      <motion.div className="overflow-hidden h-full w-full flex flex-col items-center justify-center rounded-lg">
        <p>TR¥B£</p>
      </motion.div>
      <div className="absolute bottom-[-1rem] left-2 rounded-lg overflow-hidden h-[3.5rem] w-[3.5rem] border-2 border-dark-2">
        <img
          src="/assets/images/archie.jpg"
        />
      </div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-lg flex-col space-y-2"
    >
      <motion.div className="overflow-hidden h-full w-full rounded-lg">
        <img
          src="/assets/images/eniola_bg.jpg"
        />
      </motion.div>
      <div className="absolute bottom-[-1rem] left-2 rounded-lg overflow-hidden h-[3.5rem] w-[3.5rem] border-2 border-dark-2">
        <img
          src="/assets/images/eniola.jpg"
        />
      </div>
    </motion.div>
  );
};
const SkeletonSix = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-lg flex-col space-y-2"
    >
      <motion.div className="overflow-hidden h-full w-full rounded-lg">
        <img
          src="/assets/images/bob_bg.jpg"
        />
      </motion.div>
      <div className="absolute bottom-[-1rem] left-2 rounded-lg overflow-hidden h-[3.5rem] w-[3.5rem] border-2 border-dark-2">
        <img
          src="/assets/images/bob.jpg"
        />
      </div>
    </motion.div>
  );
};
const SkeletonSeven = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-lg flex-col space-y-2"
    >
      <motion.div className="overflow-hidden h-full w-full rounded-lg">
        <img
          src="/assets/images/ceeza_bg.jpg"
        />
      </motion.div>
      <div className="absolute bottom-[-1rem] left-2 rounded-lg overflow-hidden h-[3.5rem] w-[3.5rem] border-2 border-dark-2">
        <img
          src="/assets/images/ceeza.jpg"
        />
      </div>
    </motion.div>
  );
};

const items = [
  {
    header: <SkeletonOne />,
    title: "Venom",
    content: "Web3 Content writer and storyteller || DeFi analyst || Orange",
    link: "https://x.com/mc__venom?t=LUNIljl11FAlQ10_dfN_Fw&s=09"
  },
  {
    header: <SkeletonTwo />,
    title: "Reiko",
    content: "Web3 Marketer || Co-Founder @heychads & @tadaverse ||$TON MAXI || NFT Collector || DM for Collab Amb @LogX_trade @LolliOnTon @TONGlitch @Ton_Baks",
    link: "https://x.com/ReikoMigi?t=LUNIljl11FAlQ10_dfN_Fw&s=09"
  },
  {
    header: <SkeletonThree />,
    title: "Icebam",
    content: "NFTS DEFI WEB 3",
    link: "https://x.com/IsaacOlatunji15?t=LUNIljl11FAlQ10_dfN_Fw&s=09"
  },
  {
    header: <SkeletonFour />,
    title: "Archie Billion$",
    content: "Building with @movementlabsxyz and @SuperteamNG ||Buildoor Medic Imago Dei",
    link: "https://x.com/Archie_Bankz?t=LUNIljl11FAlQ10_dfN_Fw&s=09"
  },
  {
    header: <SkeletonFive />,
    title: "Eniola♠️",
    content: "DeFi Content Specialist | Transforming ideas into actionable content that drives organic growth and engagement Break down & Build up",
    link: "https://x.com/_drNeyo?t=LUNIljl11FAlQ10_dfN_Fw&s=09"
  },
  {
    header: <SkeletonSix />,
    title: "DeFi Bob",
    content: "Web 3 | DeFi | Writer.",
    link: "https://x.com/nftbob_?t=H2sQGwazY97_e_0aD6cMyg&s=09"
  },
  {
    header: <SkeletonSeven />,
    title: "Ceeza",
    content: "Web3 dev crafting cool stuff on the blockchain Poet coding ninja | Making digital magic happen! #Web3Dev #poet",
    link: "https://x.com/Ceeza__007?t=H2sQGwazY97_e_0aD6cMyg&s=09"
  },
];

export default Tokenomics;