import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

interface IProps {
  closeSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

const Sidebar = ({ closeSidebar, open }: IProps) => {
  return (
    <section
      className={`${
        open ? "active" : ""
      } fixed h-screen sidebar bg-[#ffffff] z-[10000]`}
    >
      <div className="px-6 py-3 grid grid-cols-1 divide-y">
        <div className="flex items-center justify-between py-4">
          <div />
          <p className="font-semibold text-ellipsis">Menu</p>
          <div>
            <AiOutlineClose size={24} onClick={() => closeSidebar(false)} />
          </div>
        </div>
        <NavLink
          to="/newcars"
          className="flex justify-between items-center py-3"
        >
          <p className="font-semibold text-ellipsis">New Cars</p>
          <MdOutlineKeyboardArrowDown />
        </NavLink>
        <NavLink
          to="/usedcars"
          className="flex justify-between items-center py-3"
        >
          <p className="font-semibold text-ellipsis">Used Cars</p>
          <MdOutlineKeyboardArrowDown />
        </NavLink>
        <NavLink
          to="/servicing"
          className="flex justify-between items-center py-3"
        >
          <p className="font-semibold text-ellipsis">Servicing</p>
          <MdOutlineKeyboardArrowDown />
        </NavLink>
        <NavLink to="/vans" className="flex justify-between items-center py-3">
          <p className="font-semibold text-ellipsis">Vans</p>
          <MdOutlineKeyboardArrowDown />
        </NavLink>
        <NavLink
          to="/electriccars"
          className="flex justify-between items-center py-3"
        >
          <p className="font-semibold text-ellipsis">Electric Cars</p>
          <MdOutlineKeyboardArrowDown />
        </NavLink>
        <NavLink
          to="/motability"
          className="flex justify-between items-center py-3"
        >
          <p className="font-semibold text-ellipsis">Motability</p>
          <MdOutlineKeyboardArrowDown />
        </NavLink>
        <NavLink
          to="/motorcycles"
          className="flex items-center py-3 font-semibold"
        >
          Motorcycles
        </NavLink>
        <NavLink
          to="/buyonline"
          className="flex items-center py-3 font-semibold"
        >
          Buy Online
        </NavLink>
        <NavLink to="/sellCar" className="flex items-center py-3 font-semibold">
          Sell My Car
        </NavLink>
        <NavLink to="/news" className="flex items-center py-3 font-semibold">
          News
        </NavLink>
        <NavLink to="/contact" className="flex items-center py-3 font-semibold">
          contact us
        </NavLink>
        <NavLink
          to="/investor"
          className="flex items-center py-3 font-semibold"
        >
          investor
        </NavLink>
        <NavLink to="/careers" className="flex items-center py-3 font-semibold">
          careers
        </NavLink>
      </div>
    </section>
  );
};
export default Sidebar;
