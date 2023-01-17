import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

interface IProps {
  closeSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

const Sidebar = ({ closeSidebar, open }: IProps) => {
  return (
    <section
      className={`${open ? "active" : ""} fixed h-screen sidebar bg-green-300`}
    >
      <div className="px-6">
        <div className="flex items-center justify-between">
          <div />
          <p>Menu</p>
          <div>
            <AiOutlineClose size={24} onClick={() => closeSidebar(false)} />
          </div>
        </div>
        <a>
          <p>New Cars</p>
          <MdOutlineKeyboardArrowDown />
        </a>
        <a>
          <p>Used Cars</p>
          <MdOutlineKeyboardArrowDown />
        </a>
        <a>
          <p>Servicing</p>
          <MdOutlineKeyboardArrowDown />
        </a>
        <a>
          <p>Vans</p>
          <MdOutlineKeyboardArrowDown />
        </a>
        <a>
          <p>Electric Cars</p>
          <MdOutlineKeyboardArrowDown />
        </a>
        <a>
          <p>Motability</p>
          <MdOutlineKeyboardArrowDown />
        </a>
        <a>Motorcycles</a>
        <a>Buy Online</a>
        <a>Sell My Car</a>
        <a>News</a>
        <a>contact us</a>
        <a>investor</a>
        <a>careers</a>
      </div>
    </section>
  );
};
export default Sidebar;
