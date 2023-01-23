import { Car } from "../../model";
import { convertCurrency } from "../../helpers/toPounds";
import { useNavigate } from "react-router-dom";

interface CardProps {
  car: Car;
}

const Card = ({ car }: CardProps) => {
  const navigate = useNavigate();
  const { id, image, name, price, features } = car;
  return (
    <div
      onClick={() => navigate(`/cars/${id}`)}
      className="rounded-[20px] border card px-6 pb-8 h-full cursor-pointer group/car lg:pt-4"
    >
      <img
        src={image}
        alt={name}
        className="lg:h-[10rem] w-full object-cover group-hover/car:scale-110 duration-700"
      />
      <article className="pt-4 lg:pt-0">
        <h3 className="font-bold text-3xl text-ellipsis lg:text-xl">{name}</h3>
        <p className="text-lg mt-4 font-normal text-ellipsis capitalize lg:text-sm lg:mt-2">
          from {convertCurrency(price)}
        </p>
        <ul className="mt-4 list-disc px-6 font-normal flex flex-col lg:mt-2 lg:gap-1 lg:px-4">
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
