"use server";

import { deleteImage } from "@/lib/imageActions";
import prisma from "@/prismaClient";

import { revalidatePath } from "next/cache";

export const deleteProject = async (project) => {
  if (project.imgUrl) {
    const publicId = project.imgUrl.split("/").pop().split(".")[0];
    await deleteImage(publicId);
  }
  if (project.gridImgs) {
    await Promise.all(
      project.gridImgs.split(",").map(async (img) => {
        await deleteImage(img);
      })
    );
  }

  await prisma.project.delete({ where: { id: project.id } });
  revalidatePath("admin/projects", "page");
};
