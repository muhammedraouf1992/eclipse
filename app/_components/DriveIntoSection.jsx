import Image from "next/image";
import React from "react";
import customImg from "@/public/customImg.jpg";
const DriveIntoSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] items-center my-20">
      <h5 className="text-3xl lg:text-6xl">
        <span className="font-bold">
          We drive into your business dream in order
        </span>{" "}
        to bring to the surface of underlying value that your brand creates for
        its customers.
      </h5>
      <div className="relative w-full h-[400px] my-10 lg:my-0 lg:h-[500px]">
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
