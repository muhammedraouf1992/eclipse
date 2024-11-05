"use server";
import fs from "fs/promises";

import { addProjectCategorySchema } from "@/lib/validationSchema";
import prisma from "@/prismaClient";
import { revalidatePath } from "next/cache";
import { convertToKebabCase } from "@/lib/utils";

export const addProjectCategory = async (formData) => {
  const newData = Object.fromEntries(formData.entries());

  const parsedData = addProjectCategorySchema.safeParse(newData);

  if (!parsedData.success) {
    console.log(parsedData.error.message);
    return parsedData.error.message;
  }
  const { data } = parsedData;

  await fs.mkdir("public/category", { recursive: true });

  const filePath = `/category/${crypto.randomUUID()}-${data.imgUrl.name}`;

  fs.writeFile(
    `public${filePath}`,
    Buffer.from(await data.imgUrl.arrayBuffer())
  );

  const dataSlug = convertToKebabCase(data.slug);

  await prisma.projectCategory.create({
    data: {
      title: data.title,
      slug: dataSlug,
      imgUrl: filePath,
      description: data.description,
    },
  });
  revalidatePath("/admin/projects", "page");
};
