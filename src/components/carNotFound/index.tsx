import { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const CarNotFound = () => {
  const player = useRef<Player>(null);

  return (
    <section className="container">
      <Player
        ref={player}
        src="https://assets5.lottiefiles.com/packages/lf20_4owMZE.json"
        autoplay={true}
        loop={false}
        speed={0.5}
        style={{ width: "100%", height: "300px" }}
      ></Player>
    </section>
  );
};

export default CarNotFound;
