"use client";

import { Player } from "@lottiefiles/react-lottie-player";

export default function ImgAnimation({ animation }: { animation: string }) {
  return (
    <Player
      autoplay
      loop
      src={animation}
      className="h-[250px] md:h-[350px]  w-[250px] md:w-[350px]"
    ></Player>
  );
}
