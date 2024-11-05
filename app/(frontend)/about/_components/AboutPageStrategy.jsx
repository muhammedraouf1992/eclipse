import Image from "next/image";
import React from "react";
import about1 from "@/public/about/aboutT.webp";
import about2 from "@/public/about/aboutA.webp";
const AboutPageStrategy = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-[0.6fr,1fr] container mx-auto">
        <div className="flex items-center gap-10 lg:gap-32 mb-10 lg:mb-0">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="75"
              viewBox="0 0 80 75"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M58 52V0H57V52H0V53H57V75H58V53H80V52H58Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <p className="font-bold uppercase">02. Who we are</p>
        </div>

        <div>
          <h2 className="text-3xl lg:text-6xl lead-[1.8em]">
            We make storable strategy growth your company with arolax agency!
          </h2>
          <p className="text-white/50 max-w-2xl font-semibold my-10">
            We deploy world-class creative design, team on demand. that can
            design surest measures of success is when a client partner with more
            than once build, ship scale your vision most efficient.
          </p>
          <div className="flex lg:w-[450px] flex-col gap-5 lg:gap-0 lg:flex-row">
            <div className="flex gap-5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="19"
                    height="19"
                    fill="#121212"
                    stroke="white"
                    strokeDasharray="2 2"
                  ></rect>
                  <rect
                    x="10.5"
                    y="10.5"
                    width="19"
                    height="19"
                    fill="#121212"
                    stroke="white"
                    strokeDasharray="2 2"
                  ></rect>
                </svg>
              </div>
              <div>
                <h6 className="text-4xl">50+</h6>
                <p className="text-white/50 font-semibold text-[18px]">
                  projects success rate 99%
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="28"
                  viewBox="0 0 32 28"
                  fill="none"
                >
                  <path
                    d="M8.38462 1L23.6154 27M8.38462 1L1 14L8.84615 27M8.38462 1H23.6154M23.6154 27H8.84615M23.6154 27L31 14L23.6154 1M8.84615 27L23.6154 1"
                    stroke="white"
                    strokeDasharray="2 2"
                  ></path>
                </svg>
              </div>
              <div>
                <h6 className="text-4xl">12+</h6>
                <p className="text-white/50 font-semibold text-[18px]">
                  award for digital innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center lg:items-start gap-20 mt-10 lg:mt-20 flex-col lg:flex-row">
        <Image src={about2} width={"100%"} height={"100%"} alt="about image" />
        <Image src={about1} width={"100%"} height={"100%"} alt="about image" />
      </div>
    </section>
  );
};

export default AboutPageStrategy;
