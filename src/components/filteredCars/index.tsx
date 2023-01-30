import { Car } from "../../model";
import { convertCurrency } from "../../helpers/toPounds";

type FilteredProps = {
  results: Car[];
  searchQuery: string;
};

const FilteredCars = ({ results, searchQuery }: FilteredProps) => {
  if (searchQuery !== "" && results.length == 0) {
    return (
      <section className="absolute left-0 right-0 top-[6rem] shadow-md z-50  bg-[#ffffff] mx-auto w-[92%] rounded-lg px-8 py-4 lg:w-[25rem] lg:-right-[42rem]">
        <p className="text-base font-bold text-ellipsis">
          Oops! Sorry, search does not exist
        </p>
        <p className="text-base font-normal text-ellipsis ">
          Please check spelling and try again
        </p>
      </section>
    );
  }

  return (
    <section className="absolute left-0 right-0 top-[6rem] shadow-md z-50  bg-[#ffffff] mx-auto w-[92%] rounded-lg lg:w-[25rem] lg:-right-[42rem]">
      <div className="px-8 py-4 ">
        <ul className="divide-y">
          {results.map((result) => (
            <li
              key={result.id}
              className="grid grid-cols-4 space-x-4 py-2 hover:shadow-md  rounded-md cursor-pointer px-2"
            >
              <div>
                <img src={result.image} alt={result.name} />
              </div>
              <article className="col-start-2 col-end-5 space-y-2 lg:space-y-1">
                <h6 className="font-bold text-base text-ellipsis lg:text-xl">
                  {result.name}
                </h6>
                <p className="text-sm font-normal text-ellipsis capitalize ">
                  {convertCurrency(result.price)}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FilteredCars;
