import { Car } from "../../model";
import { convertCurrency } from "../../helpers/toPounds";

interface CardProps {
  car: Car;
}

const Card = ({ car }: CardProps) => {
  const { id, image, name, price, features } = car;
  return (
    <div key={id} className="rounded-[20px] border card px-6 pb-8">
      <img src={image} alt={name} />
      <article className="">
        <h3 className="font-bold text-3xl">{name}</h3>
        <p className="text-lg mt-4 font-normal capitalize">
          from {convertCurrency(price)}
        </p>
        <ul className="mt-4 list-disc px-6 font-normal flex flex-col gap-2">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Card;
