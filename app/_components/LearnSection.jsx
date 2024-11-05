import Image from "next/image";
import React from "react";
import img from "@/public/customImg.jpg";
const LearnSection = () => {
  return (
    <section className="grid grid-cols-1 gap-5 lg:grid-cols-[1.5fr,0.8fr] lg:gap-20 items-center">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-10">
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
          <h2 className="text-4xl lg:text-[110px] leading-[1em]">
            Learn.
            <br /> Make <br />
            &Build
          </h2>
        </div>
      </div>

      <div className="lg:p-20">
        <p className="text-gray-300 capitalize text-lg">
          We employ a flexible marketing approach that upgrade your productivity
        </p>
      </div>
    </section>
  );
};

export default LearnSection;
