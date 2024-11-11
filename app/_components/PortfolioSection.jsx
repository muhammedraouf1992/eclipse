import React from "react";

import CustomBtn from "@/components/layout/CustomBtn";
import FeaturedWork from "./FeaturedWork";
import dynamic from "next/dynamic";
const SwiperComponent = dynamic(() => import("./Slider"), { ssr: false });

const PortfolioSection = () => {
  return (
    <section>
      <div className="flex justify-center items-center mb-10 lg:mb-20">
        <div className="flex flex-col ">
          <div className="flex gap-2 items-center">
            <p className="text-2xl">Featured</p>
            <div className="w-40 lg:w-full h-0.5 bg-white lg:mr-10" />
          </div>
          <h2 className="text-3xl leading-[1em] lg:text-[270px] lg:leading-[0.7em]">
            work
          </h2>
        </div>
      </div>
      <SwiperComponent />

      <FeaturedWork />
      <div className="flex justify-center items-center">
        <CustomBtn variant={"primary"} text={"View more work"} />
      </div>
    </section>
  );
};

export default PortfolioSection;
