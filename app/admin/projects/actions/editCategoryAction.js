"use server";

import { editCategorySchema } from "@/lib/validationSchema";

import { revalidatePath } from "next/cache";
import { convertToKebabCase } from "@/lib/utils";
import prisma from "@/prismaClient";
import { deleteImage, uploadSingleImage } from "@/lib/imageActions";

export const editCategoryAction = async (formData, category) => {
  const newData = Object.fromEntries(formData.entries());

  const results = editCategorySchema.safeParse(newData);
  if (results.success === false) {
    return results.error.formErrors.fieldErrors;
  }
  const data = results.data;

  let imgUrl = category.imgUrl;

  if (data.imgUrl) {
    imgUrl = await uploadSingleImage(data.imgUrl);
    if (category.imgUrl) {
      const publicId = category.imgUrl.split("/").pop().split(".")[0];
      await deleteImage(publicId);
    }
  }

  let coverImg = category.coverImg;

  if (data.coverImg) {
    coverImg = await uploadSingleImage(data.coverImg);
    if (category.coverImg) {
      const publicId = category.coverImg.split("/").pop().split(".")[0];
      await deleteImage(publicId);
    }
  }

  const dataSlug = convertToKebabCase(data.slug);

  await prisma.projectCategory.update({
    where: {
      id: category.id,
    },
    data: {
      title: data.title,
      slug: dataSlug,
      description: data.description,
      imgUrl: imgUrl,
      coverImg: coverImg,
    },
  });
  revalidatePath("/admin/blogs", "page");
};
