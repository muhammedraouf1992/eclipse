"use client";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const Circles = () => {
  const astraRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      gsap.utils.toArray(".astraRef"),
      {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.inOut",
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.3,
        scrollTrigger: {
          trigger: astraRef.current,
          start: "top 70%",
          end: "top 30%",
        },
      }
    );
  }, []);
  return (
    <section
      className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-0"
      ref={astraRef}
    >
      <div className="border rounded-lg lg:rounded-full lg:-ml-10 border-white/20 ">
        <div className="py-10 lg:py-0 lg:w-[250px] lg:h-[250px] xl:w-[400px] xl:h-[400px] flex flex-col items-center justify-center astraRef gap-4">
          <p className="mb-3 lg:mb-0 text-5xl lg:text-6xl xl:text-8xl">15+ </p>
          <p className="text-lg lg:text-xl text-center">
            <span className="font-bold"> Years </span> <br /> of Expertise
          </p>
        </div>
      </div>

      <div className="border rounded-lg lg:rounded-full lg:-ml-10 border-white/20 ">
        <div className="py-10 lg:py-0 lg:w-[250px] lg:h-[250px] xl:w-[400px] xl:h-[400px] flex flex-col items-center justify-center astraRef gap-4">
          <p className="mb-3 lg:mb-0 text-5xl lg:text-6xl xl:text-8xl">100+</p>
          <p className="text-lg lg:text-xl text-center">
            <span className="font-bold"> Happy </span> <br /> Clients
          </p>
        </div>
      </div>

      <div className="border rounded-lg lg:rounded-full lg:-ml-10 border-white/20 ">
        <div className="py-10 lg:py-0 lg:w-[250px] lg:h-[250px] xl:w-[400px] xl:h-[400px] flex flex-col items-center justify-center astraRef gap-4">
          <p className="mb-3 lg:mb-0 text-5xl lg:text-6xl xl:text-8xl">500+</p>
          <p className="text-lg lg:text-xl text-center">
            <span className="font-bold"> Successful </span> <br /> Campaigns
          </p>
        </div>
      </div>

      <div className="border rounded-lg lg:rounded-full lg:-ml-10 border-white/20 ">
        <div className="py-10 lg:py-0 lg:w-[250px] lg:h-[250px] xl:w-[400px] xl:h-[400px] flex flex-col items-center justify-center astraRef gap-4">
          <p className="mb-3 lg:mb-0 text-5xl lg:text-6xl xl:text-8xl">50+</p>
          <p className="text-lg xl:text-xl text-center">
            <span className="font-bold"> Industries </span> <br /> Served
          </p>
        </div>
      </div>
    </section>
  );
};

export default Circles;
