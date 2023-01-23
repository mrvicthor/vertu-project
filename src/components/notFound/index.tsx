import { useRef, useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Header } from "../index";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const toPreviousPage = () => navigate(-1);
  const player = useRef<Player>(null);
  const [count, setCount] = useState<number>(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        return prevCount - 1;
      });
      console.log(count);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      toPreviousPage();
    }, 10000);
  }, []);
  return (
    <>
      <Header />
      <section className="px-6 lg:max-w-[69.364rem] lg:mx-auto">
        <Player
          ref={player}
          src="https://assets4.lottiefiles.com/temp/lf20_dzWAyu.json"
          autoplay={true}
          loop={false}
          speed={0.5}
          style={{ width: "100%", height: "300px" }}
        ></Player>
        <p className="text-center">
          You will be returned back to the previous page in {count}
        </p>
      </section>
    </>
  );
};

export default NotFound;
