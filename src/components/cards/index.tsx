import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Card, CarNotFound } from "../";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { useAppSelector } from "../../redux/hooks";

const Cards = () => {
  const cars = useAppSelector((state) => state.cars.cars);
  const searchQuery = useAppSelector((state) => state.cars.search);
  let filteredCars;
  filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const cardRef = useRef<HTMLDivElement>(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const [isMoved, setIsMoved] = useState<boolean>(false);

  useEffect(() => {
    console.log(cars);
  }, []);

  if (searchQuery !== "" && filteredCars.length == 0) {
    return (
      <>
        <CarNotFound />
      </>
    );
  }

  return (
    <section className="" id="cars">
      <div className="py-12 container">
        <h2 className="font-bold text-3xl text-ellipsis">BMW i4 trims</h2>
        <div className="hidden lg:block lg:relative">
          <Swiper
            spaceBetween={15}
            slidesPerView={3}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            modules={[Autoplay, Navigation, Pagination]}
            onInit={(swiper: any) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
          >
            {filteredCars.map((car) => (
              <SwiperSlide key={car.id} className="py-4 px-1">
                <Card car={car} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center lg:container absolute top-[50%] z-10 pb-2">
            <div
              ref={navigationPrevRef}
              className={`${isMoved ? "block" : "hidden"}`}
            >
              <button className="absolute -left-2 flex items-center justify-center h-6 w-6 rounded-full bg-[#ffffff] shadow-md">
                <FiChevronLeft />
              </button>
            </div>
            <div ref={navigationNextRef} onClick={() => setIsMoved(true)}>
              <button className="absolute -right-2 flex items-center justify-center h-6 w-6 rounded-full bg-[#ffffff] shadow-md">
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>

        <div className="lg:relative group lg:hidden">
          <div ref={cardRef} className="mt-8 flex flex-col space-y-6">
            {cars.map((car) => (
              <Card car={car} key={car.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
