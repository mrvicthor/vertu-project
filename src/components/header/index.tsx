import VertuLogo from "../../assets/vertu-logo.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { SlPhone } from "react-icons/sl";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useRef } from "react";
import { SearchBar, Sidebar } from "../index";
import { useInView } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useWindowSize } from "../../hooks/use-Window-Size";

const Header = () => {
  const { width } = useWindowSize();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  return (
    <header className="py-4 bg-[#ffffff] shadow-md relative">
      {sidebarOpen && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 overlay z-10 opacity-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar closeSidebar={setSidebarOpen} open={sidebarOpen} />

      <nav
        ref={ref}
        className="px-6 lg:max-w-[69rem] lg:mx-auto lg:flex lg:px-0"
      >
        {showSearchBar ? (
          <div
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className={` flex gap-4 items-center `}
          >
            <div onClick={() => setShowSearchBar(false)}>
              <AiOutlineClose size={24} />
            </div>
            <SearchBar />
          </div>
        ) : (
          <div className="flex justify-between items-center lg:gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hamburger block relative cursor-pointer md:hidden"
            >
              <span className="sr-only" aria-expanded="false">
                Menu
              </span>
              <span className="bars"></span>
              <span className="bars"></span>
              <span className="bars"></span>
            </button>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return isActive ? { color: "#06C4CC" } : {};
              }}
              className="mr-auto w-[6rem] flex items-center overflow-hidden"
            >
              <img
                src={VertuLogo}
                alt="vertu-motors-logo"
                className="object-cover"
              />
            </NavLink>
            <div className="">
              <ul className="hidden lg:flex lg:gap-4">
                <li className="nav-link">
                  <NavLink
                    style={({ isActive }) => {
                      return isActive ? { color: "#06C4CC" } : {};
                    }}
                    to="/newcars"
                    className="flex items-center gap-2 font-semibold text-xs hover:rounded-full hover:bg-[#ECF3FC] py-2 px-3"
                  >
                    New cars
                    <span className="icon">
                      <MdOutlineKeyboardArrowDown />
                    </span>
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink
                    style={({ isActive }) => {
                      return isActive ? { color: "#06C4CC" } : {};
                    }}
                    to="/usedcars"
                    className="flex items-center gap-2 font-semibold text-xs hover:rounded-full hover:bg-[#ECF3FC] py-2 px-3"
                  >
                    Used cars
                    <span className="icon">
                      <MdOutlineKeyboardArrowDown />
                    </span>
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink
                    style={({ isActive }) => {
                      return isActive ? { color: "#06C4CC" } : {};
                    }}
                    to="/servicing"
                    className="flex items-center gap-2 font-semibold text-xs hover:rounded-full hover:bg-[#ECF3FC] py-2 px-3"
                  >
                    Servicing
                    <span className="icon">
                      <MdOutlineKeyboardArrowDown />
                    </span>
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink
                    style={({ isActive }) => {
                      return isActive ? { color: "#06C4CC" } : {};
                    }}
                    to="/commercials"
                    className="flex items-center gap-2 font-semibold text-xs hover:rounded-full hover:bg-[#ECF3FC] py-2 px-3"
                  >
                    Commercials
                    <span className="icon">
                      <MdOutlineKeyboardArrowDown />
                    </span>
                  </NavLink>
                </li>
                <NavLink
                  style={({ isActive }) => {
                    return isActive ? { color: "#06C4CC" } : {};
                  }}
                  to="/motability"
                  className="flex  items-center font-semibold text-xs hover:rounded-full hover:bg-[#ECF3FC] py-2 px-3"
                >
                  Motability
                </NavLink>
              </ul>
            </div>
            <div className="hidden lg:flex ml-4">
              <SearchBar style="py-1" icon={10} />
            </div>
            <div className="flex gap-3 items-center overflow-hidden ">
              <div onClick={() => setShowSearchBar(true)} className="lg:hidden">
                <span className="block">
                  <CiSearch size={30} />
                </span>
              </div>
              <div className="cursor-pointer flex flex-col items-center hover:text-[#06C4CC]">
                <span className="hidden  lg:block ">
                  {width !== undefined && (
                    <HiOutlineLocationMarker size={width <= 768 ? 24 : 16} />
                  )}
                </span>
                <p className="hidden lg:block text-xs">find us</p>
              </div>
              <div
                onClick={() => setSaved(!saved)}
                className="cursor-pointer flex flex-col items-center hover:text-[#06C4CC]"
              >
                <span className="block">
                  {width !== undefined &&
                    (saved ? (
                      <FaHeart size={width <= 768 ? 24 : 16} />
                    ) : (
                      <FaRegHeart size={width <= 768 ? 24 : 16} />
                    ))}
                </span>
                <p className="hidden lg:block text-xs">save</p>
              </div>
              <div className="cursor-pointer flex flex-col items-center hover:text-[#06C4CC]">
                <span className="block">
                  {width !== undefined && (
                    <BiUser size={width <= 768 ? 24 : 16} />
                  )}
                </span>
                <p className="hidden lg:block text-xs">login</p>
              </div>
              <div className="cursor-pointer">
                <span className="block md:hidden">
                  <SlPhone size={24} />
                </span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
