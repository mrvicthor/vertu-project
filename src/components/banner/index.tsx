import bannerDesktop from "../../assets/Hero-banner-desktop.jpg";
import bannerMobile from "../../assets/Hero-banner-mobile.jpg";
import { useWindowSize } from "../../hooks/use-Window-Size";
import { Button } from "../";
const Banner = () => {
  const { width } = useWindowSize();
  return (
    <section className="mt-[4.49rem]">
      <div className="relative overflow-hidden">
        {width !== undefined && (
          <img
            src={width <= 768 ? bannerMobile : bannerDesktop}
            alt="car"
            className="w-full lg:absolute lg:inset-0 lg:z-10 object-cover lg:h-full"
          />
        )}
        <article className="bg-[#242424] text-[#ffffff] py-16  relative lg:py-20 lg:bg-transparent z-20 ">
          <div className="container">
            <div className="lg:max-w-[20rem] space-y-4">
              <h1 className="text-4xl text-center font-semibold lg:text-left text-ellipsis">
                Explore the new <br /> BMW i4 range
              </h1>
              <p className="text-center text-[1rem] font-medium opacity-90 lg:text-left text-ellipsis">
                From the cool Trend and SUV-inspired Active to the sporty
                ST-Line, the eight generation Fiesta impresses across the range.
              </p>

              <Button
                href="/book-test"
                title="Book a test drive"
                style="bg-[#15f4ee] text-center py-4 block rounded-md cursor-pointer text-[#040C0C] text-ellipsis font-semibold text-lg lg:w-[9rem] lg:text-sm lg:py-3 hover:text-[#15f4ee] hover:bg-[#040C0C]"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Banner;
