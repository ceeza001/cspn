import { Link } from "react-router-dom";

const Topbar: React.FC = () => {
  
  return (
    <div className="topbar z-[5000] h-fit relative p-4 flex justify-between items-center">
      <div className="w-full h-[4rem] md:h-[5rem] absolute top-0 left-0 right-0 text-center">
        <div className="bg-dark-2 w-fit mx-auto border-2 flex-center border-t-0 border-dark-4 h-full p-2 md:p-4 rounded-b-[25px]">
          <h1 className="font-black text-[1.8rem] md:text-[2.2rem] text-white">MARKET CLASH</h1>
        </div>
      </div>
      
      <div className="mt-[3.5rem] md:mt-0 w-full flex-between">
        <div className="rounded-full flex-center gap-2 text-white font-semibold md:text-[24px] p-2 black-glassmorphism border-2 border-dark-4">
          <Link to="/" className="cursor-pointer rounded-full p-2 bg-dark-2">
            <img 
              src="/assets/icons/x.svg"
              alt="x"
              className="invert-white w-4 h-4 md:w-6 md:h-6"
            />
          </Link>
          <Link to="/" className="cursor-pointer rounded-full p-2 bg-dark-2">
            <img 
              src="/assets/icons/telegram.svg"
              alt="telegram"
              className="invert-white w-4 h-4 md:w-6 md:h-6"
            />
          </Link>
          <p>Join us!</p>
        </div>

        <Link to="https://cspn.io/whitepaper/" className="cursor-pointer rounded-full flex gap-2 items-center p-2 black-glassmorphism text-white font-semibold md:text-[24px] border-2 border-dark-4">
          Whitepaper
          <div className="rounded-full p-[4px] border-[1.5px]">
            <img 
              src="/assets/icons/link.svg"
              alt="whitepaper"
              className="invert-white w-4 h-4 md:w-6 md:h-6"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
