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
      {/*  Branding */}
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-[1fr,1fr,0.5fr] py-5 px-0 lg:py-16 lg:px-14 border-t border-t-white/20 group customBackground stagger-card">
        <h4 className="text-xl lg:text-3xl font-bold">Branding</h4>
        <div>
          <p className="lg:max-w-[300px] text-gray-400 text-lg group-hover:text-white">
            We build unique brand identities that capture your essence, resonate
            with your audience, and set you apart in a competitive market.
          </p>
        </div>
        <div>
          <CustomBtn variant={"outline"} text={"Explore service"} />
        </div>
      </div>
      {/*   Social Media */}
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-[1fr,1fr,0.5fr] py-5 px-0 lg:py-16 lg:px-14 border-t border-t-white/20 group customBackground stagger-card">
        <h4 className="text-xl lg:text-3xl font-bold">
          Social Media <br />
          <span className="font-normal">Management</span>
        </h4>
        <div>
          <p className="lg:max-w-[300px] text-gray-400 text-lg group-hover:text-white">
            From strategy to execution, we create and manage impactful social
            media campaigns that drive engagement and growth.
          </p>
        </div>
        <div>
          <CustomBtn variant={"outline"} text={"Explore service"} />
        </div>
      </div>
      {/* Search Engine */}
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-[1fr,1fr,0.5fr] py-5 px-0 lg:py-16 lg:px-14 border-t border-t-white/20 group customBackground stagger-card">
        <h4 className="text-xl lg:text-3xl font-bold">
          Search Engine <br />
          <span className="font-normal"> Optimization (SEO)</span>
        </h4>
        <div>
          <p className="lg:max-w-[300px] text-gray-400 text-lg group-hover:text-white">
            Boost your online visibility with our tailored SEO strategies that
            improve rankings, attract organic traffic, and grow your business.
          </p>
        </div>
        <div>
          <CustomBtn variant={"outline"} text={"Explore service"} />
        </div>
      </div>

      {/* Web & App */}
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-[1fr,1fr,0.5fr] py-5 px-0 lg:py-16 lg:px-14 border-t border-t-white/20 group customBackground stagger-card">
        <h4 className="text-xl lg:text-3xl font-bold">
          Web & App <br />
          <span className="font-normal">Development</span>
        </h4>
        <div>
          <p className="lg:max-w-[300px] text-gray-400 text-lg group-hover:text-white">
            Crafting seamless websites and apps that combine functionality,
            aesthetics, and user experience to elevate your digital presence.
          </p>
        </div>
        <div>
          <CustomBtn variant={"outline"} text={"Explore service"} />
        </div>
      </div>

      {/* Production & Animation */}
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-[1fr,1fr,0.5fr] py-5 px-0 lg:py-16 lg:px-14 border-t border-t-white/20 group customBackground stagger-card">
        <h4 className="text-xl lg:text-3xl font-bold">
          Production & <br /> Animation
        </h4>
        <div>
          <p className="lg:max-w-[300px] text-gray-400 text-lg group-hover:text-white">
            Bring your ideas to life with captivating visual storytelling
            through high-quality video production and dynamic animations.
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
