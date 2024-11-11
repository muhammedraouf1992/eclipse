"use server";
import fs from "fs/promises";

import { addProjectCategorySchema } from "@/lib/validationSchema";

import { revalidatePath } from "next/cache";
import { convertToKebabCase } from "@/lib/utils";
import prisma from "@/prismaClient";
import { uploadSingleImage } from "@/lib/imageActions";

export const addProjectCategory = async (formData) => {
  const newData = Object.fromEntries(formData.entries());

  const parsedData = addProjectCategorySchema.safeParse(newData);

  if (!parsedData.success) {
    console.log(parsedData.error.message);
    return parsedData.error.message;
  }
  const { data } = parsedData;

  const url = await uploadSingleImage(data.imgUrl);
  const coverImg = await uploadSingleImage(data.coverImg);

  const dataSlug = convertToKebabCase(data.slug);

  await prisma.projectCategory.create({
    data: {
      title: data.title,
      slug: dataSlug,
      imgUrl: url,
      coverImg: coverImg,
      description: data.description,
    },
  });
  revalidatePath("/admin/projects", "page");
};
