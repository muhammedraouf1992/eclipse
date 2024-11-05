import Image from "next/image";
import React from "react";
import work1 from "@/public/Shot.jpg";
import work2 from "@/public/Shot-1.jpg";
const FeaturedWork = () => {
  return (
    <section className="flex flex-col my-20 lg:flex-row lg:justify-between lg:px-28 gap-5 lg:gap-0">
      <div>
        <div>
          <Image
            src={work1}
            width={600}
            height={600}
            alt="my work image"
            className="rounded-xl shadow-yellow"
          />
        </div>
        <div className="mt-8">
          <p className="text-xl">
            <span className="font-bold">Busynet</span> Traffic Grow
          </p>
          <p className="uppercase">marketing</p>
        </div>
      </div>

      <div>
        <div>
          <Image
            src={work2}
            width={600}
            height={600}
            alt="my work image"
            className="rounded-xl shadow-yellow"
          />
        </div>
        <div className="mt-8">
          <p className="text-xl">
            <span className="font-bold">Busynet</span> Traffic Grow
          </p>
          <p className="uppercase">marketing</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
