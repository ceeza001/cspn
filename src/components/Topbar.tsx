import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { navbarLinks } from "@/constants"; // Ensure navbarLinks is properly imported

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};

const Topbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useOutsideClick(menuRef, () => setOpen(false));

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling
    };
  }, [open]);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="topbar z-[5000] relative black-glassmorphism p-4 flex justify-between items-center">
      <div>
        <h2 className="text-white font-bold text-[20px]">CSPN</h2>
      </div>

      <div className="hidden md:flex gap-2">
        {navbarLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.route}
            className={({ isActive }) =>
              (isActive ? "text-primary font-bold nav_links" : "text-white nav_links")
            }
            onClick={() => setOpen(false)} // Close the menu on link click
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      <div ref={menuRef} className="md:hidden relative">
        <button
          onClick={toggleMenu}
          className="z-[200] flex flex-col justify-between space-y-2 w-[1.5rem] aspect-square"
        >
          <motion.div
            className="bg-white w-[50%] h-[2px]"
            animate={{ y: open ? 6 : 0, x: open ? 2.5 : 0, rotate: open ? 45 : 0, opacity: open ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
          <motion.div
            className="bg-white flex w-full h-[2px]"
            animate={{ rotate: open ? -45 : 0 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
          <motion.div
            className="bg-white w-[40%] h-[2px]"
            animate={{ width: open ? '1.5rem' : '0.9rem', y: open ? -11 : 0, x: open ? 1 : 0, rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </button>

        <motion.div
          animate={{ opacity: !open ? 0 : 1, x: !open ? 100 : 0 }}
          className="absolute top-[2.5rem] -right-2 bg-dark-2 w-[15rem] p-4 linear duration-200 rounded-lg shadow-dark-4 shadow-md"
        >
          {navbarLinks.map((link, i) => (
            <Link
              key={i}
              to={link.route}
              className="block text-white py-2 hover:bg-primary-500 rounded"
              onClick={() => setOpen(false)} // Close the menu on link click
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Topbar;