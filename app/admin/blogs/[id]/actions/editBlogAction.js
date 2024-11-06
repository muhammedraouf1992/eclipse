"use server";

import { editBlogSchema } from "@/lib/validationSchema";

import { revalidatePath } from "next/cache";
import { convertToKebabCase } from "@/lib/utils";
import prisma from "@/prismaClient";
import { deleteImage, uploadSingleImage } from "@/lib/imageActions";

export const editBlogAction = async (formData, blog) => {
  const newData = Object.fromEntries(formData.entries());

  const results = editBlogSchema.safeParse(newData);
  if (results.success === false) {
    return results.error.formErrors.fieldErrors;
  }
  const data = results.data;

  let imageUrl = blog.imgUrl;

  if (data.image) {
    imageUrl = await uploadSingleImage(data.image);

    const publicId = blog?.imgUrl?.split("/").pop().split(".")[0];
    if (publicId) {
      await deleteImage(publicId);
    }
  }

  const dataSlug = convertToKebabCase(data.slug);

  await prisma.blog.update({
    where: {
      id: blog.id,
    },
    data: {
      title: data.title,
      slug: dataSlug,
      content: data.content,
      imgUrl: imageUrl,
    },
  });
  revalidatePath("/admin/blogs", "page");
};
