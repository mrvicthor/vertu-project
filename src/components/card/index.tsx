import { Car } from "../../model";
import { convertCurrency } from "../../helpers/toPounds";

interface CardProps {
  car: Car;
}

const Card = ({ car }: CardProps) => {
  const { id, image, name, price, features } = car;
  return (
    <div key={id} className="rounded-[20px] border card px-6 pb-8 lg:h-[24rem]">
      <img
        src={image}
        alt={name}
        className="lg:h-[10rem] w-full object-cover"
      />
      <article className="">
        <h3 className="font-bold text-3xl lg:text-xl">{name}</h3>
        <p className="text-lg mt-4 font-normal capitalize lg:text-sm lg:mt-2">
          from {convertCurrency(price)}
        </p>
        <ul className="mt-4 list-disc px-6 font-normal flex flex-col gap-2 lg:mt-2 lg:gap-1 lg:px-4">
          {features.map((feature, index) => (
            <li key={index} className="lg:text-xs">
              {feature}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Card;
