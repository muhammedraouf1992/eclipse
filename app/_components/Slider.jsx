"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import slider1 from "@/public/slider1.jpg";
import slider2 from "@/public/slider2.jpg";
import slider3 from "@/public/slider3.jpg";
import slider4 from "@/public/slider4.jpg";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const slidesData = [
  { href: "/branding", imgSrc: slider1, title: "branding" },
  { href: "/production", imgSrc: slider2, title: "production" },
  { href: "/development", imgSrc: slider3, title: "webs & apps development" },
  { href: "/digital-marketing", imgSrc: slider4, title: "digital marketing" },
  { href: "/digital-marketing", imgSrc: slider4, title: "Search Engine" },
];

const Slider = React.memo(() => (
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
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <Link className="relative" href={slide.href}>
            <Image
              src={slide.imgSrc}
              width={500}
              height={500}
              alt={`${slide.title} image`}
              loading="lazy"
              sizes="500px"
            />
            <h4 className="absolute bottom-10 left-5 text-3xl capitalize">
              {slide.title}
            </h4>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
));
Slider.displayName = "Slider";
export default Slider;
