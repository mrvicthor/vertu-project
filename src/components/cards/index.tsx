import m50Image from "../../assets/Trim-01.jpg";
import mSportImage from "../../assets/Trim-02.jpg";
import sportImage from "../../assets/Trim-03.jpg";
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
    <section>
      <div className="px-6 py-12">
        <h2 className="font-bold text-3xl">BMW i4 trims</h2>
        <div className="mt-8 grid gap-8">
          {cars.map((car) => (
            <Card car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
