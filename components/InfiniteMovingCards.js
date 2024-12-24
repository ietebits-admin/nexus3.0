import React from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className="mb-8 h-[20rem] sm:h-[25rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
    >
        <h1 className=" ml-15 sm:ml-30 mb-30 font-bold  text-3xl md:text-6xl my-4  justify-center items-center flex  bg-gradient-to-r from-blue-300 via-gray-700 to-gray-400    text-transparent bg-clip-text pb-5  w-fit mx-3">
        Previous Sponsors
      </h1>
      <InfiniteMovingCards items={testimonials} direction="right" speed="fast" />
    </div>
  );
}

const testimonials = [
  {
    id: 1,
    image: "/img/sponser-11.png",
  },
  {
    id: 2,
    image: "/img/sponser-22.png",
  },
  {
    id: 3,
    image: "/img/sponser-33.png",
  },
  {
    id: 4,
    image: "/img/sponser-44.png",
  },
];
