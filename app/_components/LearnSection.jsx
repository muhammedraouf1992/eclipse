import Image from "next/image";
import React from "react";
import img from "@/public/customImg.jpg";
const LearnSection = () => {
  return (
    <section className="grid grid-cols-1 gap-5 lg:grid-cols-[1.5fr,0.8fr] lg:gap-20 items-center">
      <div className="flex flex-col lg:flex-row lg:items-center gap-10">
        <div>
          <Image
            src={img}
            width={600}
            height={600}
            alt="image"
            className="rounded-xl shadow-yellow"
          />
        </div>
        <div className="">
          <h2 className="text-2xl lg:text-[60px] leading-[1.2em]">
            EMPOWERING
            <br /> BUSINESS <br />
            SOLUTION
          </h2>
        </div>
      </div>

      <div className="lg:p-20">
        <p className="text-gray-300 capitalize text-lg">
          Driving growth and innovation with tailored strategies, empowering
          businesses to achieve success and thrive in today&apos;s competitive
          landscape.
        </p>
      </div>
    </section>
  );
};

export default LearnSection;
