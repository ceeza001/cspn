import { Outlet } from "react-router-dom";

const RootLayout = () => {
  
  return (
    <>
      <div className="w-full">
        <Outlet />
        
        <footer className="relative mt-[4rem] pt-[4rem] flex flex-col items-center text-center p-[1rem] md:p-[4rem] bg-gradient-to-b from-[#0B1630] to-[#000000]">
          <img
            src="/assets/images/logo.png"
            alt="Logo"
            className="h-[4rem] md:w-[8rem] md:h-[8rem]"
          />
          <p>
            © 2023 Market Clash. All Rights Reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default RootLayout;