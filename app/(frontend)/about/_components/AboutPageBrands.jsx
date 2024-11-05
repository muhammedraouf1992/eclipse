import React from "react";
import img from "@/public/about/brand-01-dark.png";
import Image from "next/image";
const AboutPageBrands = () => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-6 lg:grid-row-4">
        {/* brand1 */}
        <div className="border border-white/20 flex items-center justify-center py-20  lg:col-start-2">
          <Image
            src={img}
            width={"100%"}
            height={"100%"}
            alt="brands image"
            className="brandsImage"
          />
        </div>
        {/* title */}
        <div className="lg:col-span-3 hidden lg:flex justify-center items-center">
          <h5 className="font-semibold text-3xl w-[400px]">
            We worked with largest global brands
          </h5>
        </div>
        {/*2ndrow brand1 */}
        <div className="border border-white/20 flex items-center justify-center py-20  lg:col-start-1">
          <Image
            src={img}
            width={"100%"}
            height={"100%"}
            alt="brands image"
            className="brandsImage"
          />
        </div>
        {/*2ndrow brand2 */}
        <div className="border border-white/20 flex items-center justify-center py-20 ">
          <Image
            src={img}
            width={"100%"}
            height={"100%"}
            alt="brands image"
            className="brandsImage"
          />
        </div>
        {/*2ndrow brand3 */}
        <div className="border border-white/20 flex items-center justify-center py-20 ">
          <Image
            src={img}
            width={"100%"}
            height={"100%"}
            alt="brands image"
            className="brandsImage"
          />
        </div>
        {/*2ndrow brand4 */}
        <div className="border border-white/20 flex items-center justify-center py-20 ">
          <Image
            src={img}
            width={"100%"}
            height={"100%"}
            alt="brands image"
            className="brandsImage"
          />
        </div>
        {/*2ndrow brand5 */}
        <div className="border border-white/20 flex items-center justify-center py-20 ">
          <Image
            src={img}
            width={"100%"}
            height={"100%"}
            alt="brands image"
            className="brandsImage"
          />
        </div>

        {/*3rd brand5 */}
        <div className="border border-white/20 flex items-center justify-center py-20  lg:col-start-2">
          <Image
            src={img}
            width={"100%"}
            height={"100%"}
            alt="brands image"
            className="brandsImage"
          />
        </div>
        {/*3rd brand5 */}
        <div className="border border-white/20 flex items-center justify-center py-20 ">
          <Image
            src={img}
            width={"100%"}
            height={"100%"}
            alt="brands image"
            className="brandsImage"
          />
        </div>
        {/*3rd brand5 */}
        <div className="border border-white/20 flex items-center justify-center py-20 ">
          <Image
            src={img}
            width={"100%"}
            height={"100%"}
            alt="brands image"
            className="brandsImage"
          />
        </div>
        {/*3rd brand5 */}
        <div className="border border-white/20 flex items-center justify-center py-20 ">
          <Image
            src={img}
            width={"100%"}
            height={"100%"}
            alt="brands image"
            className="brandsImage"
          />
        </div>
        {/*3rd brand5 */}
        <div className="border border-white/20 flex items-center justify-center py-20 ">
          <Image
            src={img}
            width={"100%"}
            height={"100%"}
            alt="brands image"
            className="brandsImage"
          />
        </div>
        {/*4th brand5 */}
        <div className="border border-white/20 flex items-center justify-center py-20  lg:col-start-5">
          <Image
            src={img}
            width={"100%"}
            height={"100%"}
            alt="brands image"
            className="brandsImage"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPageBrands;
