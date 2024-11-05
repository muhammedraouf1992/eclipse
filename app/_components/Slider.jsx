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
        <SwiperSlide>
          <Image
            src={slider1}
            width={400}
            height={400}
            alt="slider image"
            sizes="400px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider2}
            width={400}
            height={400}
            alt="slider image"
            sizes="400px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider3}
            width={400}
            height={400}
            alt="slider image"
            sizes="400px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider4}
            width={400}
            height={400}
            alt="slider image"
            sizes="400px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider4}
            width={400}
            height={400}
            alt="slider image"
            sizes="400px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider1}
            width={400}
            height={400}
            alt="slider image"
            sizes="400px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider4}
            width={400}
            height={400}
            alt="slider image"
            sizes="400px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider2}
            width={400}
            height={400}
            alt="slider image"
            sizes="400px"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
