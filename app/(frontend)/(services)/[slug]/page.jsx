import prisma from "@/prismaClient";

import Image from "next/image";
import Link from "next/link";

import React from "react";

const ServicesPage = async ({ params }) => {
  const service = await prisma.projectCategory.findFirst({
    where: { slug: params.slug },
    include: { Project: true },
  });
  console.log(service);
  return (
    <div className="pt-40 lg:pt-40">
      <div>
        <Image
          src={service.imgUrl}
          width={"1920"}
          height={"1080"}
          alt="service image"
          className="w-full object-fit"
        />
      </div>
      <div className="mt-5 lg:-mt-28 mb-20">
        <h1 className="text-6xl text-center lg:text-[140px] uppercase">
          {service.title}
        </h1>
        <p className="text-md text-center uppercase font-bold">
          Eclipse agency
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 relative">
        {service.Project.length > 0 ? (
          service.Project.map((project) => (
            <div
              key={project.id}
              className="border p-10 border-white/20 relative cursor-pointer group overflow-hidden "
            >
              <Link href={`/project/${project.slug}`}>
                <Image
                  src={project.gridImgs.split(",")[0]}
                  width={600}
                  height={600}
                  alt="project image"
                  className="w-full h-full"
                />
              </Link>
              <div className="bg-black/90 absolute top-[50%]  py-6 px-6 -right-[400%] duration-500 group-hover:right-0">
                <p className="uppercase text-2xl font-bold">{project.title}</p>
              </div>
            </div>
          ))
        ) : (
          <p>There are no projects for this branding</p>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;
