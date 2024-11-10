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
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

const Slider = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 20,
          stretch: 10,
          depth: 100,
          modifier: 1,

          slideShadows: true,
        }}
        loop={true}
        initialSlide={3}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper !py-10"
      >
        <SwiperSlide className="relative">
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
        </SwiperSlide>

        <SwiperSlide className="relative">
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
        </SwiperSlide>

        <SwiperSlide className="relative">
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
        </SwiperSlide>

        <SwiperSlide className="relative">
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
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
