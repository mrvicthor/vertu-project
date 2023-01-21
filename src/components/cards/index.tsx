import m50Image from "../../assets/Trim-01.jpg";
import mSportImage from "../../assets/Trim-02.jpg";
import sportImage from "../../assets/Trim-03.jpg";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Card } from "../";

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
  return (
    <section className="">
      <div className="px-6 py-12 lg:max-w-[69rem] lg:mx-auto lg:px-0">
        <h2 className="font-bold text-3xl">BMW i4 trims</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3 lg:h-[24rem] lg:gap-4 lg:items-stretch">
          {cars.map((car) => (
            <Card car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
