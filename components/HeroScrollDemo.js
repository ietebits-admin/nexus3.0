"use client";
import React from "react";
import { ContainerScroll } from "./container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    (<div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-2xl sm:text-4xl font-semibold text-white mb-10 sm:mb-20 max-w-3xl mx-auto">
              Celebrate this Christmas and New Year, with your developement skills and creativity.
              <br />
              <span className="text-5xl md:text-[7rem] font-bold mt-4 bg-gradient-to-r from-gray-200 via-gray-600 to-gray-200 text-transparent bg-clip-text">
                NEXUS 3.0
              </span>
            </h1>
          </>
        }>
        <Image
          src="/img/iete-logo.jpg"
          alt="hero"
          height={720}
          width={1400}
          className=" mx-auto rounded-2xl object-cover h-full object-left-top w-full"
          draggable={false} />
      </ContainerScroll>
    </div>)
  );
}
