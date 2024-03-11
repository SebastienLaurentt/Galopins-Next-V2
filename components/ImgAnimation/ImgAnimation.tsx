"use client";

import { Player } from "@lottiefiles/react-lottie-player";

export default function ImgAnimation({ animation }: { animation: string }) {
  return (
    <Player
      autoplay
      loop
      src={animation}
      className="size-[250px] md:size-[350px]"
    ></Player>
  );
}
