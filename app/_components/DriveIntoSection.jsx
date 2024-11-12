import Image from "next/image";
import React from "react";
import customImg from "@/public/customImg.jpg";
const DriveIntoSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] items-center my-20 gap-2 lg:gap-5">
      <h5 className="text-2xl  lg:text-3xl xl:text-4xl leading-[1.4em] order-2 lg:order-1">
        <span className="font-bold">
          We dive into your business goals to unlock growth, boost revenue,
        </span>{" "}
        and enhance your brand&apos;s visibility. By focusing on innovative
        marketing strategies, customer-centric solutions, and delivering
        excellence, we help you stand out in a competitive digital landscape and
        achieve measurable results.
      </h5>
      <div className="relative w-full h-[400px] my-10 lg:my-0 lg:h-[500px] order-1 lg:order-2">
        <Image
          src={customImg}
          fill
          alt="image"
          className="rounded-xl shadow-yellow"
        />
      </div>
    </section>
  );
};

export default DriveIntoSection;
