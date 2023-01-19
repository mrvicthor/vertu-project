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

const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  return (
    <header className="py-4 bg-[#ffffff] shadow-md">
      {sidebarOpen && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 overlay z-10 opacity-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar closeSidebar={setSidebarOpen} open={sidebarOpen} />

      <nav className="px-6 lg:max-w-[69rem] lg:mx-auto lg:flex lg:px-0">
        <div
          className={`${
            showSearchBar ? "iSactive" : ""
          } flex gap-4 items-center fixed py-3 mobile-searchbar`}
        >
          <div onClick={() => setShowSearchBar(false)}>
            <AiOutlineClose size={24} />
          </div>
          <SearchBar />
        </div>
        {showSearchBar ? null : (
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
            <a
              href="/"
              className="mr-auto w-[6rem] flex items-center overflow-hidden"
            >
              <img
                src={VertuLogo}
                alt="vertu-motors-logo"
                className="object-cover"
              />
            </a>
            <div className="">
              <ul className="hidden lg:flex lg:gap-4">
                <li className="nav-link">
                  <NavLink
                    to="/newcars"
                    className="flex items-center gap-2 font-semibold text-xs hover:rounded-full hover:bg-[#ECF3FC] py-2 px-3"
                  >
                    New cars
                    <span>
                      <MdOutlineKeyboardArrowDown className="icon" />
                    </span>
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink
                    to="/usedcars"
                    className="flex items-center gap-2 font-semibold text-xs hover:rounded-full hover:bg-[#ECF3FC] py-2 px-3"
                  >
                    Used cars
                    <span>
                      <MdOutlineKeyboardArrowDown className="icon" />
                    </span>
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink
                    to="/servicing"
                    className="flex items-center gap-2 font-semibold text-xs hover:rounded-full hover:bg-[#ECF3FC] py-2 px-3"
                  >
                    Servicing
                    <span>
                      <MdOutlineKeyboardArrowDown className="icon" />
                    </span>
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink
                    to="/commercials"
                    className="flex items-center gap-2 font-semibold text-xs hover:rounded-full hover:bg-[#ECF3FC] py-2 px-3"
                  >
                    Commercials
                    <span>
                      <MdOutlineKeyboardArrowDown className="icon" />
                    </span>
                  </NavLink>
                </li>
                <NavLink
                  to="/motability"
                  className="flex  items-center font-semibold text-xs hover:rounded-full hover:bg-[#ECF3FC] py-2 px-3"
                >
                  Motability
                </NavLink>
              </ul>
            </div>
            <div className="hidden lg:flex">
              <SearchBar />
            </div>
            <div className="flex gap-2 items-center overflow-hidden ">
              <div onClick={() => setShowSearchBar(true)} className="lg:hidden">
                <span className="block">
                  <CiSearch size={34} />
                </span>
              </div>
              <div>
                <span className="hidden">
                  <HiOutlineLocationMarker size={34} />
                </span>
                <p className="hidden">find us</p>
              </div>
              <div onClick={() => setSaved(!saved)}>
                <span className="block">
                  {saved ? <FaHeart size={34} /> : <FaRegHeart size={34} />}
                </span>
                <p className="hidden">save</p>
              </div>
              <div>
                <span className="block">
                  <BiUser size={34} />
                </span>
                <p className="hidden">login</p>
              </div>
              <div>
                <span className="block md:hidden">
                  <SlPhone size={34} />
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
