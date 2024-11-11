"use server";
import { deleteImage } from "@/lib/imageActions";
import prisma from "@/prismaClient";

import { revalidatePath } from "next/cache";

export const deleteCategoryAction = async (category) => {
  if (category.imgUrl) {
    const publicId = category.imgUrl.split("/").pop().split(".")[0];
    await deleteImage(publicId);
  }

  if (category.coverImg) {
    const publicId = category.coverImg.split("/").pop().split(".")[0];
    await deleteImage(publicId);
  }

  await prisma.projectCategory.delete({ where: { id: category.id } });

  revalidatePath("/admin/projects", "page");
};
