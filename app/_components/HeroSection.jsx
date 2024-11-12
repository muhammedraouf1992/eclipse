import React from "react";

import MoonComponent from "./MoonComponent";

const HeroSection = () => {
  return (
    <section className="mb-[20rem] lg:container lg:mx-auto">
      <div className="px-5 lg:px-5 h-[65vh] lg:h-[70vh] mb-10 relative flex">
        <MoonComponent />

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
            <p className="text-xl uppercase">ECLIPSE AGENCY</p>
          </div>
          <div className="my-10">
            <h2 className="text-5xl lg:text-7xl xl:text-8xl  font-extrabold ">
              Empowering <br />
              <span className="font-normal">
                business <br /> Solution
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
