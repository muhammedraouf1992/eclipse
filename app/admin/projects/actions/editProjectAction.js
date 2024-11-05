"use server";

import { editProjectSchema } from "@/lib/validationSchema";
import prisma from "@/prismaClient";
import { randomUUID } from "crypto";
import fs from "fs/promises";
import { revalidatePath } from "next/cache";
import path from "path";

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
    const filePath = path.join(process.cwd(), "public", project.imgUrl);

    await fs.unlink(filePath);

    newFilePath = `/projects/${randomUUID()}-banner-${data.imgUrl.name}`;

    fs.writeFile(
      `public${newFilePath}`,
      Buffer.from(await data.imgUrl.arrayBuffer())
    );
  }

  let imgArray = [];

  if (data.gridImgs) {
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
      gridImgs: project.gridImgs + "," + imgArray.join(","),
    },
  });
  revalidatePath("/admin/projects", "page");
};
