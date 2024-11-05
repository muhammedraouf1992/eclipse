"use client";

import CustomBtn from "@/components/layout/CustomBtn";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const astrRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      gsap.utils.toArray(".stagger-card"),
      {
        opacity: 0,
        x: -90,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: astrRef.current,
          start: "top 70%",
          end: "top 30%",
        },
      }
    );
  }, []);
  return (
    <div ref={astrRef}>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-[1fr,1fr,0.5fr] py-5 px-0 lg:py-16 lg:px-14 border-t border-t-white/20 group customBackground stagger-card">
        <h4 className="text-xl lg:text-3xl font-bold">
          Search Engine <br />
          <span className="font-normal">Optimization</span>
        </h4>
        <div>
          <p className="lg:max-w-[300px] text-gray-400 text-lg group-hover:text-white">
            we approach each project with meticulous attention to detail and
            best quality.
          </p>
        </div>
        <div>
          <CustomBtn variant={"outline"} text={"Explore service"} />
        </div>
      </div>
      {/* 2 */}
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-[1fr,1fr,0.5fr] py-5 px-0 lg:py-16 lg:px-14 border-t border-t-white/20 group customBackground stagger-card">
        <h4 className="text-xl lg:text-3xl font-bold">
          Search Engine <br />
          <span className="font-normal">Optimization</span>
        </h4>
        <div>
          <p className="lg:max-w-[300px] text-gray-400 text-lg group-hover:text-white">
            we approach each project with meticulous attention to detail and
            best quality.
          </p>
        </div>
        <div>
          <CustomBtn variant={"outline"} text={"Explore service"} />
        </div>
      </div>
      {/* 3 */}
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-[1fr,1fr,0.5fr] py-5 px-0 lg:py-16 lg:px-14 border-t border-t-white/20 group customBackground stagger-card">
        <h4 className="text-xl lg:text-3xl font-bold">
          Search Engine <br />
          <span className="font-normal">Optimization</span>
        </h4>
        <div>
          <p className="lg:max-w-[300px] text-gray-400 text-lg group-hover:text-white">
            we approach each project with meticulous attention to detail and
            best quality.
          </p>
        </div>
        <div>
          <CustomBtn variant={"outline"} text={"Explore service"} />
        </div>
      </div>

      {/* 4 */}
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-[1fr,1fr,0.5fr] py-5 px-0 lg:py-16 lg:px-14 border-t border-t-white/20 group customBackground stagger-card">
        <h4 className="text-xl lg:text-3xl font-bold">
          Search Engine <br />
          <span className="font-normal">Optimization</span>
        </h4>
        <div>
          <p className="lg:max-w-[300px] text-gray-400 text-lg group-hover:text-white">
            we approach each project with meticulous attention to detail and
            best quality.
          </p>
        </div>
        <div>
          <CustomBtn variant={"outline"} text={"Explore service"} />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
