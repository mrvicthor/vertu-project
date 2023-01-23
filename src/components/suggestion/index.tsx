import featureImage from "../../assets/Feature-01.jpg";
import { Button } from "../";
import { useWindowSize } from "../../hooks/use-Window-Size";
const Suggestion = () => {
  const { width } = useWindowSize();
  return (
    <section className="bg-[#F4F4F4]">
      <div className="lg:grid lg:grid-cols-2 pb-8 lg:gap-16 lg:container lg:justify-items-center lg:items-center lg:py-12 ">
        <div className="lg:order-last lg:rounded-[12px] ">
          <img
            src={featureImage}
            alt="car features"
            className="object-cover lg:rounded-[12px]"
          />
        </div>
        <article className="px-8 pt-12 lg:pt-8 pb-4 lg:pb-0 space-y-4 lg:place-self-start lg:px-0">
          <h4 className="font-bold text-3xl text-ellipsis">
            Explore the new BMW
            <br /> interior
          </h4>
          <p className="text-left text-base lg:text-xs suggestion-text text-ellipsis">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit sed,
            officiis saepe sapiente aliquid hic recusandae veritatis dignissimos
            adipisci tempore harum repellendus? Molestiae recusandae quas. Lorem
            ipsum dolor sit amet.
          </p>
          {width !== undefined && (
            <Button
              href="/book-test"
              title={
                width <= 768
                  ? "Book a test drive"
                  : "Request a Personalised Video"
              }
              style="bg-[#15f4ee] text-center py-4 block rounded-md cursor-pointer text-[#040C0C] text-ellipsis font-semibold text-lg lg:w-[14rem] lg:text-sm lg:py-3 hover:text-[#15f4ee] hover:bg-[#040C0C]"
            />
          )}
        </article>
      </div>
    </section>
  );
};

export default Suggestion;
