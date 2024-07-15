import { Outlet } from "react-router-dom";

import { Topbar } from "@/components/";

const RootLayout = () => {
  
  return (
    <>
      <div className="w-full">
        <Topbar />
        <Outlet />
        
        <footer className="mt-[4rem] p-[1rem] md:p-[4rem]">
          
        </footer>
      </div>
    </>
  );
};

export default RootLayout;