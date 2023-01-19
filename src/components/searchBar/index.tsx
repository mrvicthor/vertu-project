import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";

type IProps = {
  style?: string;
  icon?: number;
};

const SearchBar = ({ style, icon }: IProps) => {
  return (
    <div
      className={`bg-[#ebebeb] flex w-full ${
        style ? style : "py-3"
      } items-center justify-between px-3 rounded-full`}
    >
      <CiSearch size={icon ? icon : 20} />
      <input
        type="search"
        placeholder="search..."
        className="bg-transparent mr-auto px-2 outline-none"
      />
      <FaMicrophone size={icon ? icon : 20} />
    </div>
  );
};

export default SearchBar;
