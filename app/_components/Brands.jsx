import Image from "next/image";
import React from "react";

import brandImg1 from "@/public/brands/669f629d013a9a65acf29377_Untitled design (1) (1).png";
import brandImg2 from "@/public/brands/394794778_1296871344309598_3486781947294340961_n.png";
import brandImg3 from "@/public/brands/alajlan-1.png";
import brandImg4 from "@/public/brands/alphagraphics-09.png";
import brandImg5 from "@/public/brands/AL-WATANIA-LOGO-1.png";
import brandImg6 from "@/public/brands/aramco  saudi (1).png";
import brandImg7 from "@/public/brands/Asset-3-1.png";
import brandImg8 from "@/public/brands/Celia-Logo-wight.png";
import brandImg9 from "@/public/brands/client1-1.png";
import brandImg10 from "@/public/brands/client2-1.png";
import brandImg11 from "@/public/brands/client3-1.png";
import brandImg12 from "@/public/brands/client4-1.png";
import brandImg13 from "@/public/brands/cropped-Unimark-2-1.png";
import brandImg14 from "@/public/brands/Discovery-Desert-Logo-1.png";
import brandImg15 from "@/public/brands/dr mhammed.png";
import brandImg16 from "@/public/brands/DRYVE-1.png";
import brandImg17 from "@/public/brands/dual-sports.png";
import brandImg18 from "@/public/brands/elbaddar-1.png";
import brandImg19 from "@/public/brands/enter 10-02.png";
import brandImg20 from "@/public/brands/Faris-Group-Logo-light.png";
import brandImg21 from "@/public/brands/hmm-10.png";
import brandImg22 from "@/public/brands/IQ-108-1.png";
import brandImg23 from "@/public/brands/Logo-ar-copy-2.png";
import brandImg24 from "@/public/brands/LOGO-INSTANT.png";
import brandImg25 from "@/public/brands/owl (1).png";
import brandImg26 from "@/public/brands/ptd-WHITE.png";
import brandImg27 from "@/public/brands/saudi kenz-45.png";
import brandImg28 from "@/public/brands/uniboard-1.png";
import brandImg29 from "@/public/brands/unik-white-logo.png";

const Brands = () => {
  const brandsList = [
    brandImg1,
    brandImg2,
    brandImg3,
    brandImg4,
    brandImg5,
    brandImg6,
    brandImg7,
    brandImg8,
    brandImg9,
    brandImg10,
    brandImg11,
    brandImg12,
    brandImg13,
    brandImg14,
    brandImg15,
    brandImg16,
    brandImg17,
    brandImg18,
    brandImg19,
    brandImg20,
    brandImg21,
    brandImg22,
    brandImg23,
    brandImg24,
    brandImg25,
    brandImg26,
    brandImg27,
    brandImg28,
    brandImg29,
  ];
  return (
    <section>
      <div className="mb-20">
        <h2 className="text-3xl lg:text-6xl">
          <span className="font-bold">We are happy</span> to work with <br />{" "}
          global largest brands
        </h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5">
        {brandsList.map((img, i) => (
          <div
            className="p-[50px] border border-white/10 flex justify-center items-center"
            key={i}
          >
            <Image
              src={img}
              width={100}
              height={100}
              alt="brand image"
              sizes="(min-width: 520px) 450px, calc(95vw - 25px)"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
