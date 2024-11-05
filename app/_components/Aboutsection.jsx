import React from "react";
import aboutImg from "@/public/about.png";
import Image from "next/image";
import ServicesSection from "./ServicesSection";
const Aboutsection = () => {
  return (
    <section className="pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-10 lg:mb-0">
        <div className="flex justify-center items-center">
          <Image
            src={aboutImg}
            width={"450"}
            height={"916"}
            alt="about image"
          />
        </div>
        <div className="flex flex-col justify-center gap-10">
          <h3 className="text-4xl lg:text-7xl">
            Marketing by professional team.
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <p className="text-xl">
              <span className="font-bold">Strategical</span> marketing
              <br />
              excellency
            </p>
            <p className="text-gray-400 text-lg">
              Consumers today rely heavily on digital means to research
              products. We research a brand of bldend engaging with it,
              according to the meanwhile, 51% of consumers
            </p>
          </div>
        </div>
      </div>
      <ServicesSection />
    </section>
  );
};

export default Aboutsection;
