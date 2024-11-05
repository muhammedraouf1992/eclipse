"use client";
import Image from "next/image";
import React from "react";

import moon from "@/public/heromoon.png";

const HeroSection = () => {
  return (
    <section className="mb-[20rem] lg:container lg:mx-auto">
      <div className="px-5 lg:px-0 h-[65vh] lg:h-[70vh] mb-10 relative flex">
        <Image
          src={moon}
          width={800}
          height={800}
          alt="moon picture"
          className="absolute z-10 right-0 -bottom-52 lg:right-[50%] lg:translate-x-[50%] lg:-bottom-[100%] lg:scale-[1.8]"
        />

        <div className="max-w-2xl mt-24">
          <div className="flex items-center gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="15"
              viewBox="0 0 60 15"
              fill="none"
            >
              <path d="M0 0H60V1.42857H0V0Z" fill="white"></path>
              <path
                d="M60 13.4286H33.871V14.8571H60V13.4286Z"
                fill="white"
              ></path>
            </svg>
            <p className="text-xl uppercase">Marketing Agency</p>
          </div>
          <div className="my-10">
            <h2 className="text-5xl lg:text-8xl font-extrabold">
              We help <br />
              to <span className="font-normal">grow your startup</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
