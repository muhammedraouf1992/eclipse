import Image from "next/image";
import React from "react";
import img from "@/public/about/feature-1.webp";
const AboutPagepro = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,0.7fr]">
        <div>
          <Image
            src={img}
            width={"100%"}
            height={"100%"}
            alt="about image"
            className="w-full h-full"
          />
        </div>
        <div className="aboutPagefeatureBg py-20 px-5 lg:p-[100px]">
          <div className="flex flex-col justify-between w-full h-full gap-5 lg:gap-0">
            <h4 className="text-3xl lg:text-6xl w-[300px]">
              Were simple but pro-level agency
            </h4>
            <p className="text-white/60 text-2xl lg:w-[400px]">
              Theme Builder, you have complete control over the static elements
              of your website
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPagepro;
