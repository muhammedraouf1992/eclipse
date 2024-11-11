"use server";

import { uploadImages, uploadSingleImage } from "@/lib/imageActions";
import { convertToKebabCase } from "@/lib/utils";
import { addProjectSchema } from "@/lib/validationSchema";
import prisma from "@/prismaClient";

import { revalidatePath } from "next/cache";

export const addProjectAction = async (formData) => {
  const newData = Object.fromEntries(formData.entries());

  if (newData.gridImgs) {
    newData.gridImgs = formData.getAll("gridImgs");
  }

  const parsedData = addProjectSchema.safeParse(newData);
  const { data } = parsedData;

  const url = await uploadSingleImage(data.imgUrl);
  const coverUrl = await uploadSingleImage(data.coverImg);

  const urls = await uploadImages(data.gridImgs);

  const projectSlug = convertToKebabCase(data.slug);

  await prisma.project.create({
    data: {
      title: data.title,
      slug: projectSlug,
      description: data.description,
      imgUrl: url,
      coverImg: coverUrl,
      gridImgs: urls.join(","),
      categoryId: data.categoryId,
    },
  });

  revalidatePath("/admin/projects", "page");
};
