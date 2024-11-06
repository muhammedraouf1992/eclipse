"use server";

import {
  deleteImage,
  uploadImages,
  uploadSingleImage,
} from "@/lib/imageActions";
import { editProjectSchema } from "@/lib/validationSchema";
import prisma from "@/prismaClient";
import { revalidatePath } from "next/cache";

export const editProjectAction = async (formData, project) => {
  const newData = Object.fromEntries(formData.entries());
  if (newData.gridImgs) {
    newData.gridImgs = formData.getAll("gridImgs");
  }
  const results = editProjectSchema.safeParse(newData);
  if (!results.success) {
    console.log(results.error.formErrors.fieldErrors);
    return results.error.formErrors.fieldErrors;
  }
  const { data } = results;

  let newFilePath = project.imgUrl;

  if (data.imgUrl) {
    newFilePath = await uploadSingleImage(data.imgUrl);

    const publicId = project.imgUrl.split("/").pop().split(".")[0];
    await deleteImage(publicId);
  }

  let urls = [];

  if (data.gridImgs) {
    urls = await uploadImages(data.gridImgs);
  }

  await prisma.project.update({
    where: {
      id: project.id,
    },
    data: {
      title: data.title,
      slug: data.slug,
      description: data.description,
      categoryId: data.categoryId,
      imgUrl: newFilePath,
      gridImgs: project.gridImgs + "," + urls.join(","),
    },
  });
  revalidatePath("/admin/projects", "page");
};
