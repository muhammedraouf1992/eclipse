import Image from "next/image";
import React from "react";
import img from "@/public/about/about_FaQbg.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const AboutPageServices = () => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Image
            src={img}
            width={"900%"}
            height={"900%"}
            alt="about page image"
            className="w-full h-full"
          />
        </div>
        <div className="bg-[#171717] p-[40px] lg:p-[70px]">
          <div>
            <h4 className="text-2xl lg:text-6xl w-full lg:w-[600px] mb-10">
              Working in the fields of UI/UX design and art direction.
            </h4>
            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger
                    className={"text-lg lg:text-2xl font-semibold"}
                  >
                    Website & mobile design
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 text-md lg:text-lg font-bold">
                    We deploy world-class creative design, team on demand. that
                    can design surest measures of success is when a client
                    partner with more than once build ship scale.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger
                    className={"text-lg lg:text-2xl font-semibold"}
                  >
                    Motion graphic & animation
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 text-md lg:text-lg font-bold">
                    We deploy world-class creative design, team on demand. that
                    can design surest measure&apos;s of success is when a client
                    partner with more than once build ship scale.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger
                    className={"text-lg lg:text-2xl font-semibold"}
                  >
                    User experience
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 text-md lg:text-lg font-bold">
                    We deploy world-class creative design, team on demand. that
                    can design surest measure&apos;s of success is when a client
                    partner with more than once build ship scale.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageServices;
