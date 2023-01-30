import { Banner, Cards, Suggestion, Footer, FilteredCars } from "../index";
import { useAppSelector } from "../../redux/hooks";

const Home = () => {
  const searchQuery = useAppSelector((state) => state.cars.search);
  const cars = useAppSelector((state) => state.cars.cars);
  let filteredCars;
  filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <Banner />
      {searchQuery == "" ? null : (
        <FilteredCars results={filteredCars} searchQuery={searchQuery} />
      )}
      <Cards />
      <Suggestion />
      <Footer />
    </>
  );
};
export default Home;
