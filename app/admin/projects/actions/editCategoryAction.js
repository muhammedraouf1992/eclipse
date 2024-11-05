"use server";
import fs from "fs/promises";
import { editCategorySchema } from "@/lib/validationSchema";

import path from "path";
import { revalidatePath } from "next/cache";
import { convertToKebabCase } from "@/lib/utils";
import prisma from "@/prismaClient";

export const editCategoryAction = async (formData, category) => {
  const newData = Object.fromEntries(formData.entries());

  const results = editCategorySchema.safeParse(newData);
  if (results.success === false) {
    return results.error.formErrors.fieldErrors;
  }
  const data = results.data;

  let filePath = category.imgUrl;

  if (data.imgUrl) {
    filePath = `/category/${crypto.randomUUID()}-${data.imgUrl.name}`;

    await fs.writeFile(
      `public/${filePath}`,
      Buffer.from(await data.imgUrl.arrayBuffer())
    );

    const deleteImgPath = path.join(process.cwd(), "public", category.imgUrl);

    await fs.unlink(deleteImgPath);
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
      imgUrl: filePath,
    },
  });
  revalidatePath("/admin/blogs", "page");
};
