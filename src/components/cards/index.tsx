import m50Image from "../../assets/Trim-01.jpg";
import mSportImage from "../../assets/Trim-02.jpg";
import sportImage from "../../assets/Trim-03.jpg";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { Card } from "../";
import { useRef, useState } from "react";

const cars = [
  {
    id: 1,
    name: "M 50",
    image: m50Image,
    price: 65795,
    features: [
      "Velor floor mats",
      "Sun protection glass",
      "Automatic Stability Control (ASC)",
      "Adaptive M suspension",
      "Storage for wireless charging",
      "Cruise control with brake assist",
      "Automatic tailgate operation",
    ],
  },
  {
    id: 2,
    name: "M Sport",
    image: mSportImage,
    price: 54980,
    features: [
      "Velor floor mats",
      "Rain sensor including auto headlights activation",
      "Automatic Stability Control (ASC)",
      "Standard suspension",
      "Electric Power Steering (EPS) with Servotronic",
      "Automatic tailgate operation",
    ],
  },
  {
    id: 3,
    name: "Sport",
    image: sportImage,
    price: 53480,
    features: [
      "Velor floor mats",
      "Rain sensor including auto headlights activation",
      "Automatic Stability Control (ASC)",
      "Standard suspension",
      "Electric Power Steering (EPS) with Servotronic",
      "Automatic tailgate operation",
    ],
  },
];

const Cards = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState<boolean>(false);
  const handleClick = (direction: string) => {
    setIsMoved(true);
    if (cardRef.current) {
      const { scrollLeft, clientWidth } = cardRef.current;

      const scrollTO =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      cardRef.current.scrollTo({ left: scrollTO, behavior: "smooth" });
    }
  };

  return (
    <section className="">
      <div className="px-6 py-12 lg:max-w-[69rem] lg:mx-auto lg:px-0 lg:pr-6">
        <h2 className="font-bold text-3xl">BMW i4 trims</h2>
        <div className="lg:relative group">
          {!isMoved ? null : (
            <div
              onClick={() => handleClick("left")}
              className={`hidden lg:absolute top-[48%] bg-[#ffffff] h-[2rem] w-[2rem] rounded-full border buttons lg:flex lg:items-center -left-[.7rem] lg:justify-center cursor-pointer lg:opacity-0 group-hover:opacity-100 hover:text-[#15f4ee]`}
            >
              <MdOutlineArrowBackIosNew />
            </div>
          )}
          <div
            ref={cardRef}
            className="mt-8 flex flex-col gap-6 lg:flex-row lg:h-[25rem] lg:flex-nowrap lg:gap-4 lg:overflow-x-auto lg:scrollbar-hide lg:px-2"
          >
            {cars.map((car) => (
              <Card car={car} key={car.id} />
            ))}
          </div>
          <div
            onClick={() => handleClick("right")}
            className="hidden lg:absolute top-[48%] bg-[#ffffff] h-[2rem] w-[2rem] rounded-full buttons lg:flex lg:items-center -right-[.9rem] lg:justify-center cursor-pointer lg:opacity-0 group-hover:opacity-100 hover:text-[#15f4ee]"
          >
            <MdOutlineArrowForwardIos />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
