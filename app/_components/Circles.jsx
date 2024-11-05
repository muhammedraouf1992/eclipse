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
      <div className="border rounded-lg lg:rounded-full lg:-ml-20 border-white/20 ">
        <div className="py-10 lg:py-0 lg:w-[400px] lg:h-[400px] flex flex-col items-center justify-center astraRef">
          <p className="mb-3 lg:mb-0 text-5xl lg:text-8xl">25K</p>
          <p className="text-lg lg:text-xl text-center">
            <span className="font-bold"> Project</span> <br /> completed
          </p>
        </div>
      </div>

      <div className="border rounded-lg lg:rounded-full lg:-ml-20 border-white/20 ">
        <div className="py-10 lg:py-0 lg:w-[400px] lg:h-[400px] flex flex-col items-center justify-center astraRef">
          <p className="mb-3 lg:mb-0 text-5xl lg:text-8xl">25K</p>
          <p className="text-lg lg:text-xl text-center">
            <span className="font-bold"> Project</span> <br /> completed
          </p>
        </div>
      </div>

      <div className="border rounded-lg lg:rounded-full lg:-ml-20 border-white/20 ">
        <div className="py-10 lg:py-0 lg:w-[400px] lg:h-[400px] flex flex-col items-center justify-center astraRef">
          <p className="mb-3 lg:mb-0 text-5xl lg:text-8xl">25K</p>
          <p className="text-lg lg:text-xl text-center">
            <span className="font-bold"> Project</span> <br /> completed
          </p>
        </div>
      </div>

      <div className="border rounded-lg lg:rounded-full lg:-ml-20 border-white/20 ">
        <div className="py-10 lg:py-0 lg:w-[400px] lg:h-[400px] flex flex-col items-center justify-center astraRef">
          <p className="mb-3 lg:mb-0 text-5xl lg:text-8xl">25K</p>
          <p className="text-lg lg:text-xl text-center">
            <span className="font-bold"> Project</span> <br /> completed
          </p>
        </div>
      </div>
    </section>
  );
};

export default Circles;
