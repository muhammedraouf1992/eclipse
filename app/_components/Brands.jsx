import Image from "next/image";
import React from "react";
import brand from "@/public/brand-1.png";
const Brands = () => {
  return (
    <section>
      <div className="mb-20">
        <h2 className="text-3xl lg:text-6xl">
          <span className="font-bold">We are happy</span> to work with <br />{" "}
          global largest brands
        </h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5">
        <div className="p-[50px] border border-white/10 flex justify-center items-center">
          <Image
            src={brand}
            width={100}
            height={100}
            alt="brand image"
            sizes="(min-width: 520px) 450px, calc(95vw - 25px)"
          />
        </div>
        <div className="p-[50px] border border-white/10 flex justify-center items-center">
          <Image
            src={brand}
            width={100}
            height={100}
            alt="brand image"
            sizes="(min-width: 520px) 450px, calc(95vw - 25px)"
          />
        </div>
        <div className="p-[50px] border border-white/10 flex justify-center items-center">
          <Image
            src={brand}
            width={100}
            height={100}
            alt="brand image"
            sizes="(min-width: 520px) 450px, calc(95vw - 25px)"
          />
        </div>
        <div className="p-[50px] border border-white/10 flex justify-center items-center">
          <Image
            src={brand}
            width={100}
            height={100}
            alt="brand image"
            sizes="(min-width: 520px) 450px, calc(95vw - 25px)"
          />
        </div>
        <div className="p-[50px] border border-white/10 flex justify-center items-center col-span-2 lg:col-span-1">
          <Image
            src={brand}
            width={100}
            height={100}
            alt="brand image"
            sizes="(min-width: 520px) 450px, calc(95vw - 25px)"
          />
        </div>
        <div className="p-[50px] border border-white/10 flex justify-center items-center">
          <Image
            src={brand}
            width={100}
            height={100}
            alt="brand image"
            sizes="(min-width: 520px) 450px, calc(95vw - 25px)"
          />
        </div>
        <div className="p-[50px] border border-white/10 flex justify-center items-center">
          <Image
            src={brand}
            width={100}
            height={100}
            alt="brand image"
            sizes="(min-width: 520px) 450px, calc(95vw - 25px)"
          />
        </div>
        <div className="p-[50px] border border-white/10 flex justify-center items-center">
          <Image
            src={brand}
            width={100}
            height={100}
            alt="brand image"
            sizes="(min-width: 520px) 450px, calc(95vw - 25px)"
          />
        </div>
        <div className="p-[50px] border border-white/10 flex justify-center items-center">
          <Image
            src={brand}
            width={100}
            height={100}
            alt="brand image"
            sizes="(min-width: 520px) 450px, calc(95vw - 25px)"
          />
        </div>
        <div className="p-[50px] border border-white/10 flex justify-center items-center col-span-2 lg:col-span-1">
          <Image
            src={brand}
            width={100}
            height={100}
            alt="brand image"
            sizes="(min-width: 520px) 450px, calc(95vw - 25px)"
          />
        </div>
      </div>
    </section>
  );
};

export default Brands;
