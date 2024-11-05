import React from "react";

const AboutPagetitle = () => {
  return (
    <section className="container mx-auto">
      <div className="pt-40 lg:pt-48 ">
        <h1 className="text-3xl lg:text-[100px] leading-[1em] text-left lg:text-center ">
          We are ”Eclipse” - product and branding and creative agency based in
          Egypt
        </h1>
      </div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 lg:grid-cols-[0.5fr,0.5fr,2fr] gap-1 lg:gap-5 items-start mt-12 mb-40">
        <div>
          <p className="uppercase font-bold">01. about us</p>
        </div>
        <div className="h-[1px] w-[80px] bg-white my-2" />
        <div>
          <p className="text-white/50 font-semibold">
            Unlocking creative horizons: the story behind “Arolax” a global
            digital agency crafting experiences, building dreams, and shaping
            success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPagetitle;
