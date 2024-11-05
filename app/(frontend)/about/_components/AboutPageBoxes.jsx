import Image from "next/image";
import React from "react";
import box1 from "@/public/about/aboutpage-box.webp";
import box2 from "@/public/about/aboutpage-box2.webp";
import box3 from "@/public/about/aboutpage-box3.webp";
const AboutPageBoxes = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr,0.8fr] gap-3">
      <div className="">
        <Image
          src={box1}
          width={"100%"}
          height={"100%"}
          alt="about page image"
          className="w-full h-full"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="">
          <Image
            src={box2}
            width={"100%"}
            height={"100%"}
            alt="about page image"
            className="w-full h-full"
          />
        </div>
        <div className="bg-white aboutPageBox1">
          <div className="flex flex-col justify-between w-full h-full p-6 lg:p-12">
            <p className="text-xl lg:text-3xl text-black w-[250px]">
              We have 100+ satisfied clients
            </p>
            <p className="text-6xl lg:text-8xl text-black">100 K</p>
          </div>
        </div>

        <div className="aboutPageBox2">
          <div className="flex flex-col justify-between w-full h-full p-6 lg:p-12">
            <p className="text-xl lg:text-3xl  w-[250px]">
              We helped to get companies with $25M+ funding
            </p>
            <p className="text-6xl lg:text-8xl ">25 M+</p>
          </div>
        </div>

        <div>
          <Image
            src={box3}
            width={"100%"}
            height={"100%"}
            alt="about page image"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPageBoxes;
