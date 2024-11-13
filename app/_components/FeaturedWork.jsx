"use client";
import Image from "next/image";
import React, { useRef } from "react";
import work1 from "@/public/Shot.jpg";
import work2 from "@/public/Shot-1.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeaturedWork = () => {
  const astraRef = useRef(null);
  const astraRef1 = useRef(null);
  const astraRef2 = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      astraRef1.current,
      {
        x: -30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: astraRef1.current,
          start: "top 70%",
          end: "top 30%",
        },
      }
    );
    gsap.fromTo(
      astraRef2.current,
      {
        x: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: astraRef2.current,
          start: "top 70%",
          end: "top 30%",
        },
      }
    );
  }, []);
  return (
    <section
      className="flex flex-col my-20 lg:flex-row lg:justify-between lg:px-28 gap-5 lg:gap-0 overflow-hidden"
      ref={astraRef}
    >
      <div className="astraref" ref={astraRef1}>
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

      <div className="astraref" ref={astraRef2}>
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
