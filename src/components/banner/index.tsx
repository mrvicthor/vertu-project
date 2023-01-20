import bannerDesktop from "../../assets/Hero-banner-desktop.jpg";
import bannerMobile from "../../assets/Hero-banner-mobile.jpg";
import { useWindowSize } from "../../hooks/use-Window-Size";
import { Button } from "../";
const Banner = () => {
  const { width } = useWindowSize();
  return (
    <section>
      <div className="relative">
        {width !== undefined && (
          <img
            src={width <= 768 ? bannerMobile : bannerDesktop}
            alt="car"
            className="w-full"
          />
        )}
        <article className="bg-[#242424] text-[#ffffff] py-8 space-y-4 px-6 lg:absolute lg:top-[50%] lg:-translate-y-[50%] lg:left-[8rem] lg:w-[20rem] lg:bg-transparent lg:px-0">
          <h1 className="text-4xl text-center font-semibold lg:text-left">
            Explore the new <br /> BMW i4 range
          </h1>
          <p className="text-center text-[1rem] font-medium opacity-90 lg:text-left">
            From the cool Trend and SUV-inspired Active to the sporty ST-Line,
            the eight generation Fiesta impresses across the range.
          </p>

          <Button
            href="book-test"
            title="Book a test drive"
            style="bg-[#15f4ee] text-center py-4 block rounded-md cursor-pointer text-[#040C0C] font-semibold text-lg lg:w-[9rem] lg:text-sm lg:py-3 hover:text-[#15f4ee] hover:bg-[#040C0C]"
          />
        </article>
      </div>
    </section>
  );
};
export default Banner;
