"use server";

import { deleteImage } from "@/lib/imageActions";
import prisma from "@/prismaClient";

export const deleteProjectImg = async (gridImgsStr, project, img) => {
  const publicId = img.split("/").pop().split(".")[0];
  await deleteImage(publicId);

  await prisma.project.update({
    where: { id: project.id },
    data: {
      gridImgs: gridImgsStr,
    },
  });
};
