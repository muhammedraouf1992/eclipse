"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import slider1 from "@/public/slider1.jpg";
import slider2 from "@/public/slider2.jpg";
import slider3 from "@/public/slider3.jpg";
import slider4 from "@/public/slider4.jpg";
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const Slider = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 20,
          stretch: 10,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        loop={true}
        initialSlide={0}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper !py-10"
      >
        <SwiperSlide>
          <Link className="relative" href={"/branding"}>
            <Image
              src={slider1}
              width={500}
              height={500}
              alt="slider image"
              sizes="
            500px"
            />
            <h4 className="absolute bottom-10 left-5 text-3xl capitalize">
              branding
            </h4>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link className="relative" href={"/production"}>
            <Image
              src={slider2}
              width={500}
              height={500}
              alt="slider image"
              sizes="
            500px"
            />
            <h4 className="absolute bottom-10 left-5 text-3xl capitalize">
              production
            </h4>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link className="relative" href={"/development"}>
            <Image
              src={slider3}
              width={500}
              height={500}
              alt="slider image"
              sizes="
            500px"
            />
            <h4 className="absolute bottom-10 left-5 text-2xl capitalize">
              webs & apps development
            </h4>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link className="relative" href={"/digital-marketing"}>
            <Image
              src={slider4}
              width={500}
              height={500}
              alt="slider image"
              sizes="
            500px"
            />
            <h4 className="absolute bottom-10 left-5 text-3xl capitalize">
              digital marketing
            </h4>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link className="relative" href={"/digital-marketing"}>
            <Image
              src={slider4}
              width={500}
              height={500}
              alt="slider image"
              sizes="
            500px"
            />
            <h4 className="absolute bottom-10 left-5 text-3xl capitalize">
              Search Engine
            </h4>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
