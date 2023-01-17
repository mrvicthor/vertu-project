import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="bg-[#ebebeb] flex w-full h-[2.5rem] items-center justify-between px-3 rounded-full">
      <CiSearch size={20} />
      <input
        type="search"
        placeholder="search..."
        className="bg-transparent mr-auto px-2 outline-none"
      />
      <FaMicrophone size={20} />
    </div>
  );
};

export default SearchBar;
