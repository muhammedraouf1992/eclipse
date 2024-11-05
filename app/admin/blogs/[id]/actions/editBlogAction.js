"use server";
import fs from "fs/promises";
import { editBlogSchema } from "@/lib/validationSchema";

import path from "path";
import { revalidatePath } from "next/cache";
import { convertToKebabCase } from "@/lib/utils";
import prisma from "@/prismaClient";

export const editBlogAction = async (formData, blog) => {
  const newData = Object.fromEntries(formData.entries());

  const results = editBlogSchema.safeParse(newData);
  if (results.success === false) {
    return results.error.formErrors.fieldErrors;
  }
  const data = results.data;

  let filePath = blog.imgUrl;

  if (data.image) {
    filePath = `/blogs/${crypto.randomUUID()}-${data.image.name}`;

    await fs.writeFile(
      `public/${filePath}`,
      Buffer.from(await data.image.arrayBuffer())
    );

    const deleteImgPath = path.join(process.cwd(), "public", blog.imgUrl);

    await fs.unlink(deleteImgPath);
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
      imgUrl: filePath,
    },
  });
  revalidatePath("/admin/blogs", "page");
};
