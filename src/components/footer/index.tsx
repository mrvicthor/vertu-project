import { Button } from "../";
import footerImage from "../../assets/Feature-02.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#242424]">
      <div className="lg:grid lg:grid-cols-2 pb-8 lg:gap-16 lg:max-w-[69rem] lg:mx-auto lg:justify-items-center lg:items-center lg:py-12">
        <div className="lg:rounded-[12px] ">
          <img
            src={footerImage}
            alt="car gas features"
            className="object-cover lg:rounded-[12px]"
          />
        </div>
        <article className="px-6 pt-8 space-y-4 text-[#ffffff] lg:pt-4">
          <h5 className="font-bold text-3xl">
            Electrifying performance <br /> with the BMW i4
          </h5>
          <p className="text-left text-base lg:text-xs opacity-90">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit sed,
            officiis saepe sapiente aliquid hic recusandae veritatis dignissimos
          </p>
          <div className="flex gap-4">
            <div>
              <span className="block font-bold text-3xl">02:05 hr</span>
              <span className="block text-base opacity-90">
                Charging at home for a <br />
                Range of 62 miles
              </span>
            </div>
            <div>
              <span className="block text-3xl font-bold">365</span>
              <span className="block text-base opacity-90">
                Electric range in miles
              </span>
            </div>
          </div>

          <Button
            href="/book-test"
            title="Book a test drive"
            style="bg-[#15f4ee] text-center py-4 block rounded-md cursor-pointer text-[#040C0C] font-semibold text-lg lg:w-[9rem] lg:text-sm lg:py-3 hover:text-[#15f4ee] hover:bg-[#040C0C]"
          />
        </article>
      </div>
    </footer>
  );
};

export default Footer;
