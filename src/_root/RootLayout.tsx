import { Outlet, Link } from "react-router-dom";

import { Topbar } from "@/components/";

const RootLayout = () => {
  
  return (
    <>
      <div className="w-full">
        <Topbar />
        <Outlet />
        
        <footer className="mt-[4rem] border-[#B24EFF] p-4 flex flex-col gap-2 items-center text-center">
          <h2 className="font-bold text-[40px] text-white">Butt On Ton</h2>

          <div>
            <h3 className="mb-4 font-bold text-white text-[20px]">Risk Warning and Disclaimer</h3>
            <p>
              Please be aware that trading cryptocurrency is highly speculative and involves significant risks. $BUTTON is a meme coin with no intrinsic value, and like other meme coins, it can be extremely volatile.
            </p>
            <br />
            <p>
              By choosing to trade or purchase $BUTTON, you acknowledge and accept these risks. You understand that the value of $BUTTON can fluctuate wildly and that you could lose all of your invested capital.
            </p>
            <br />
            <p>
              Always do your own research and consider your risk tolerance before making any investment decisions.
            </p>
          </div>
          
        </footer>
      </div>
    </>
  );
};

export default RootLayout;