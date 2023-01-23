import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { setSearch } from "../../features/car/carSlice";
import {
  Element,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

type IProps = {
  style?: string;
  icon?: number;
};

const SearchBar = ({ style, icon }: IProps) => {
  const scrollToCars = () => {
    const element = document.getElementById("cars");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const searchQuery = useAppSelector((state) => state.cars.search);
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => scrollToCars()}
      className={`bg-[#ebebeb] flex w-full ${
        style ? style : "py-3"
      } items-center justify-between px-3 rounded-full`}
    >
      <CiSearch size={icon ? icon : 20} />
      <input
        type="search"
        placeholder="search..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="bg-transparent mr-auto px-2 outline-none"
      />
      <FaMicrophone size={icon ? icon : 20} />
    </div>
  );
};

export default SearchBar;
