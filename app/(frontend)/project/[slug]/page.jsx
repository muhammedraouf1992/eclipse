import prisma from "@/prismaClient";
import Image from "next/image";
import React from "react";

const ProjectPage = async ({ params }) => {
  const project = await prisma.project.findFirst({
    where: { slug: params.slug },
  });
  return (
    <div className="pt-40 lg:pt-48">
      <div className="container mx-auto mb-20">
        <h1 className="text-4xl lg:text-6xl">{project.title}</h1>
      </div>
      <div className="mb-20">
        <div className="mb-20 lg:mb-40">
          <Image
            src={project.imgUrl}
            width={1920}
            height={1080}
            alt="project image"
            className="w-full"
          />
        </div>

        <div className="container mx-auto mb-40">
          <div className="grid gap-5 lg:gap-0 grid-cols-1 lg:grid-cols-[0.7fr,1.3fr]">
            <p className="max-w-[20rem] text-2xl">
              Build, streamline and evolve together with solution
            </p>
            <p className="text-white/70 capitalize font-semibold">
              {project.description}
            </p>
          </div>
        </div>
        <div className="container mx-auto my-10">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
            {project.gridImgs.split(",").map((img, i) => (
              <div key={i}>
                <Image src={img} width={600} height={600} alt="project image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
