import CustomBtn from "@/components/layout/CustomBtn";
import React from "react";

const ServicesSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-[1fr,1fr,0.5fr] py-5 px-0 lg:py-16 lg:px-14 border-t border-t-white/20 group customBackground">
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
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-[1fr,1fr,0.5fr] py-5 px-0 lg:py-16 lg:px-14 border-t border-t-white/20 group customBackground">
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
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-[1fr,1fr,0.5fr] py-5 px-0 lg:py-16 lg:px-14 border-t border-t-white/20 group customBackground">
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
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-[1fr,1fr,0.5fr] py-5 px-0 lg:py-16 lg:px-14 border-t border-t-white/20 group customBackground">
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
