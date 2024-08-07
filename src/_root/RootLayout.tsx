import { Outlet } from "react-router-dom";

import { Topbar } from "@/components/";

const RootLayout = () => {
  
  return (
    <>
      <div className="w-full">
        <Topbar />
        <Outlet />
        
        <footer className="relative bg-dark-4 mt-[4rem] pt-[4rem] flex flex-col items-center text-center p-[1rem] md:p-[4rem]">
          <div className="absolute -top-2 left-0 w-full h-[5rem] bg-gradient-to-b from-black to-transparent"/>
          <img
            src="/assets/images/logo.png"
            alt="Logo"
            className="w-[7rem] h-[5rem] md:w-[8rem] md:h-[8rem]"
          />
          <p>
            © 2023 Crypto Sports Network. All Rights Reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default RootLayout;