import React from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className="mb-16 rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
    >
      <h1 className="mb-30 font-bold  text-3xl md:text-6xl my-4  justify-center items-center flex  bg-gradient-to-r from-gray-200 via-gray-600 to-gray-200 text-transparent bg-clip-text pb-5  w-fit">
        PREVIOUS SPONSERS
      </h1>
      <InfiniteMovingCards items={testimonials} direction="right" speed="fast" />
    </div>
  );
}

const testimonials = [
  {
    id: 1,
    image: "/img/2.png",
  },
  {
    id: 2,
    image: "/img/3.png",
  },
  {
    id: 3,
    image: "/img/sponser-33.png",
  },
  {
    id: 4,
    image: "/img/4.png",
  },
];
