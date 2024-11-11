"use client";
import React, { useRef } from "react";
import aboutImg from "@/public/about.png";
import Image from "next/image";
import ServicesSection from "./ServicesSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Aboutsection = () => {
  const astrRef = useRef(null);
  useGSAP(() => {
    if (astrRef.current) {
      gsap.fromTo(
        astrRef.current,
        {
          opacity: 0,
          duration: 1,
          translateX: -50,
          translateY: -10,
          rotation: -2,
          ease: "linear",
        },
        {
          opacity: 1,
          duration: 1,
          translateX: -0,
          translateY: -0,
          rotation: 0,
          ease: "linear",
          scrollTrigger: {
            trigger: astrRef.current,
            start: "top 60%",
            end: "top 30%",
          },
        }
      );
    }
    gsap.fromTo(
      gsap.utils.toArray(".stagger-text"),
      {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: astrRef.current,
          start: "top 40%",
          end: "top 30%",
        },
      }
    );
  }, []);
  return (
    <section className="pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-10 lg:mb-0">
        <div
          className="flex justify-center items-center opacity-0"
          ref={astrRef}
        >
          <Image
            src={aboutImg}
            width={"450"}
            height={"916"}
            sizes="(min-width: 520px) 450px, calc(95vw - 25px)"
            alt="about image"
          />
        </div>

        <div className="flex flex-col justify-center gap-10">
          <h3 className="text-4xl lg:text-7xl stagger-text">
            Shape The Digital Universe
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <p className="text-xl stagger-text">
              <span className="font-bold">We don&apos;t just </span>
              <br />
              create solutions
            </p>
            <p className="text-gray-400 text-lg stagger-text">
              we craft experiences. Our passion lies in transforming bold ideas
              into groundbreaking digital realities. With a focus on innovation
              and strategic vision, we deliver tailored strategies that connect,
              engage, and inspire. Let&apos;s redefine what&apos;s possible and
              position your brand at the forefront of the digital age.
            </p>
          </div>
        </div>
      </div>
      <ServicesSection />
    </section>
  );
};

export default Aboutsection;
