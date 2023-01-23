import { useParams, useNavigate } from "react-router-dom";
import { cars } from "../../cars";
import { convertCurrency } from "../../helpers/toPounds";

const DetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const car = cars.find((car) => car.id === parseInt(id as string, 10));
  console.log(car);

  return (
    <section className="h-screen bg-[#F4F4F4] mt-[4.1rem]">
      <div className="px-6 pt-12 lg:max-w-[69rem] lg:mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-semibold bg-[#ffffff] px-4 py-2"
        >
          Go Back
        </button>

        <div className="rounded-[20px] bg-[#ffffff] mt-4 border card px-6 pb-8 lg:h-[25rem] lg:w-[21.6rem] cursor-pointer group/car lg:pt-4">
          <img
            src={car?.image}
            alt={car?.name}
            className="lg:h-[10rem] w-full object-cover group-hover/car:scale-110 duration-700"
          />
          <article className="pt-4 lg:pt-0">
            <h3 className="font-bold text-3xl text-ellipsis lg:text-xl">
              {car?.name}
            </h3>
            <p className="text-lg mt-4 font-normal text-ellipsis capitalize lg:text-sm lg:mt-2">
              from {convertCurrency(car?.price as number)}
            </p>
            <ul className="mt-4 list-disc px-6 font-normal flex flex-col gap-2 lg:mt-2 lg:gap-1 lg:px-4">
              {car?.features.map((feature, index) => (
                <li key={index} className="lg:text-xs">
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;
