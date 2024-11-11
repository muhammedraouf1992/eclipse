"use server";

import { deleteImage } from "@/lib/imageActions";
import prisma from "@/prismaClient";

import { revalidatePath } from "next/cache";

export const deleteProject = async (project) => {
  if (project.imgUrl) {
    const publicId = project.imgUrl.split("/").pop().split(".")[0];
    await deleteImage(publicId);
  }
  if (project.coverImg) {
    const publicId = project.coverImg.split("/").pop().split(".")[0];
    await deleteImage(publicId);
  }
  if (project.gridImgs) {
    await Promise.all(
      project.gridImgs.split(",").map(async (img) => {
        const publicId = img.split("/").pop().split(".")[0];
        await deleteImage(publicId);
      })
    );
  }

  await prisma.project.delete({ where: { id: project.id } });
  revalidatePath("admin/projects", "page");
};
