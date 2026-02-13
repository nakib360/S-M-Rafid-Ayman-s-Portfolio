import { NavLink, useLocation } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
// eslint-disable-next-line
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  const nav = [
    { name: "Home", path: "/" },
    { name: "All Client Reviews", path: "/reviews" },
    { name: "What I Can Help You With?", path: "/help" },
    { name: "My Design Philosophy", path: "/philosophy" },
    { name: "Contact", path: "/contact" },
    { name: "About Me", path: "/About" }
  ];

  const homeSubpagePaths = [
    "/CoverDesign",
    "/LogoDesign",
    "/ManipulationDesign",
    "/PrintDesign",
    "/SocialMediaDesign",
    "/ThumbnailDesign"
  ];

  const isNavItemActive = (path, isActive) => {
    if (path !== "/") return isActive;
    return location.pathname === "/" || homeSubpagePaths.includes(location.pathname);
  };

  return (
    <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} style={{ originX: 0.5 }} transition={{ ease: "easeInOut" }} className="p-5 md:px-10 bg-[#28518A] rounded-2xl flex-row-reverse md:flex-row flex justify-between transition-all shadow-xl ">
      <div className="w-1/12">
        <motion.div initial={{ y: 2, opacity: 0 }} animate={{ y: -2, opacity: 1 }} transition={{ delay: 1 }} className="inline text-white bg-gray-500 rounded-full p-1 text-sm">
          SM
        </motion.div>
      </div>
      <div className="hidden md:flex justify-between items-center text-sm w-9/12">
        {
          nav.map((navItem, id) => (
            <motion.div initial={{ y: 2, opacity: 0 }} animate={{ y: -2, opacity: 1 }} transition={{ delay: 1 }} key={id}>
              <NavLink className={({ isActive }) => {
                const active = isNavItemActive(navItem.path, isActive);
                return [
                  "relative pb-0.5",
                  "before:content-[''] before:absolute before:left-0 before:-bottom-0.5",
                  "before:h-0.5 before:w-full before:bg-yellow-400",
                  "before:scale-x-0 before:origin-left before:transition-transform before:duration-300",
                  "hover:before:scale-x-100",
                  active ? "before:scale-x-100 text-yellow-400 transition-all" : "text-white transition-all",
                ].join(" ");
              }} to={navItem.path} >{navItem.name}</NavLink>
            </motion.div>
          ))
        }
      </div>

      <div className="block md:hidden">
        <div>
          {
            openMenu ? <FiX className="text-2xl cursor-pointer text-white" onClick={() => setOpenMenu(false)} /> : < FiMenu className="text-2xl cursor-pointer text-white" onClick={() => setOpenMenu(true)} />
          }
          <AnimatePresence>
            {openMenu && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute z-1000 top-24 left-5 bg-[#28518A] rounded-2xl p-5 flex flex-col gap-2"
              >
                {nav.map((navItem, id) => (
                  <div key={id}>
                    <NavLink
                      to={navItem.path}
                      onClick={() => setOpenMenu(false)}
                      className={({ isActive }) => {
                        const active = isNavItemActive(navItem.path, isActive);
                        return active
                          ? "block text-yellow-400 bg-white/20 w-full p-1 rounded-sm transition-all"
                          : "block text-white w-full p-1 transition-all";
                      }}
                    >
                      {navItem.name}
                    </NavLink>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div >
  );
};

export default Header;
