"use client";
import React, { useRef } from "react";
import moon from "@/public/heromoon.webp";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const MoonComponent = () => {
  const moonRef = useRef(null);
  const bgRef = useRef(null);
  const blackRef = useRef(null);
  useGSAP(() => {
    if (moonRef.current) {
      gsap.to(moonRef.current, {
        rotation: 360,
        duration: 500,
        repeat: -1,
        ease: "linear",
      });
    }
    gsap.to(bgRef.current, {
      opacity: 0.3, // Glow visibility (0 to 1 range)
      scale: 1.05, // Slight scaling for pulsing effect
      duration: 3, // Duration for each glow pulse
      repeat: -1, // Infinite repeat
      yoyo: true, // Back and forth for pulsing effect
      ease: "power1.inOut", // Smooth easing
    });
    gsap.to(blackRef.current, {
      opacity: 0, // Glow visibility (0 to 1 range)
      display: "none",
      duration: 3, // Duration for each glow pulse
      ease: "power1.inOut", // Smooth easing
    });
  }, []);
  return (
    <>
      <Image
        ref={moonRef}
        src={moon}
        width={700}
        height={700}
        sizes="(min-width: 860px) 800px, calc(92.59vw + 22px)"
        alt="moon picture"
        className="absolute z-10 right-0 -bottom-52 lg:right-[50%] lg:translate-x-[50%] lg:-bottom-[100%] lg:w-[1000px] lg:h-[1000px]"
        priority
      />
      <div
        ref={bgRef}
        className="absolute lg:right-[50%] hidden lg:block lg:translate-x-[50%] lg:-bottom-[100%] rounded-full lg:w-[820px] lg:h-[820px] bg-white/50 blur-2xl"
      />
      <div />
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-black z-[100]"
        ref={blackRef}
      />
    </>
  );
};

export default MoonComponent;
