"use client";

import dynamic from "next/dynamic";

// Chargement dynamique du Player pour éviter les problèmes SSR
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
    loading: () => (
      <div className="size-[250px] md:size-[350px] bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
        <span className="text-gray-500">Chargement...</span>
      </div>
    ),
  }
);

export default function ImgAnimation({ animation }: { animation: string }) {
  return (
    <Player
      autoplay
      loop
      src={animation}
      className="size-[250px] md:size-[350px]"
    />
  );
}
