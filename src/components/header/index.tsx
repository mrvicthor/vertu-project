import VertuLogo from "../../assets/vertu-motors.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { SlPhone } from "react-icons/sl";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useRef } from "react";
import { SearchBar, Sidebar } from "../index";
import { useInView } from "framer-motion";

const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  return (
    <header className="h-[5.625rem]">
      {sidebarOpen && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 overlay z-10 opacity-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {sidebarOpen && (
        <Sidebar closeSidebar={setSidebarOpen} open={sidebarOpen} />
      )}
      <div ref={ref} className="px-6">
        {showSearchBar ? (
          <div
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className={`flex gap-4 items-center py-3`}
          >
            <div onClick={() => setShowSearchBar(false)}>
              <AiOutlineClose size={24} />
            </div>
            <SearchBar />
          </div>
        ) : (
          <nav className="flex justify-between items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="w-[2rem] h-[1.0625rem] cursor-pointer border-[0] outline-0 md:hidden"
              aria-controls="primary__nav"
            >
              <span className="sr-only" aria-expanded="false">
                Menu
              </span>
              {sidebarOpen ? (
                <AiOutlineClose size={26} width={24} />
              ) : (
                <FiMenu size={26} width={24} />
              )}
            </button>
            <a
              href="/"
              className="mr-auto w-[12rem]  flex items-center overflow-hidden"
            >
              <img
                src={VertuLogo}
                alt="vertu-motors-logo"
                className="object-cover"
              />
            </a>
            <ul className="hidden">
              <li>
                New cars
                <span>
                  <MdOutlineKeyboardArrowDown />
                </span>
              </li>
              <li>
                Used cars
                <span>
                  <MdOutlineKeyboardArrowDown />
                </span>
              </li>
              <li>
                Servicing
                <span>
                  <MdOutlineKeyboardArrowDown />
                </span>
              </li>
              <li>
                Commercials
                <span>
                  <MdOutlineKeyboardArrowDown />
                </span>
              </li>
              <li>Motability</li>
            </ul>
            <div className="hidden">
              <SearchBar />
            </div>
            <div className="flex gap-2 items-center">
              <div onClick={() => setShowSearchBar(true)}>
                <span className="block">
                  <CiSearch size={24} />
                </span>
              </div>
              <div>
                <span className="block">
                  <HiOutlineLocationMarker size={24} />
                </span>
                <p className="hidden">find us</p>
              </div>
              <div onClick={() => setSaved(!saved)}>
                <span className="block">
                  {saved ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
                </span>
                <p className="hidden">save</p>
              </div>
              <div>
                <span className="block">
                  <BiUser size={24} />
                </span>
                <p className="hidden">login</p>
              </div>
              <div>
                <span className="block md:hidden">
                  <SlPhone size={24} />
                </span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
