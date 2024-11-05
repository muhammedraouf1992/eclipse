"use server";

import { convertToKebabCase } from "@/lib/utils";
import { addProjectSchema } from "@/lib/validationSchema";
import prisma from "@/prismaClient";

import { randomUUID } from "crypto";
import fs from "fs/promises";
import { revalidatePath } from "next/cache";
export const addProjectAction = async (formData) => {
  const newData = Object.fromEntries(formData.entries());

  if (newData.gridImgs) {
    newData.gridImgs = formData.getAll("gridImgs");
  }

  const parsedData = addProjectSchema.safeParse(newData);
  const { data } = parsedData;

  await fs.mkdir("public/projects", { recursive: true });

  const filePath = `/projects/${randomUUID()}-banner-${data.imgUrl.name}`;

  fs.writeFile(
    `public${filePath}`,
    Buffer.from(await data.imgUrl.arrayBuffer())
  );

  let imgArray = [];

  await Promise.all(
    data.gridImgs.map(async (img) => {
      const filePath = `/projects/${randomUUID()}-grid-${img.name}`;
      await fs.writeFile(
        `public${filePath}`,
        Buffer.from(await img.arrayBuffer())
      );
      imgArray.push(filePath);
    })
  );

  const projectSlug = convertToKebabCase(data.slug);

  await prisma.project.create({
    data: {
      title: data.title,
      slug: projectSlug,
      description: data.description,
      imgUrl: filePath,
      gridImgs: imgArray.join(","),
      categoryId: data.categoryId,
    },
  });

  revalidatePath("/admin/projects", "page");
};
