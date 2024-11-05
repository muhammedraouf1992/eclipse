"use server";

import prisma from "@/prismaClient";
import fs from "fs/promises";
import { revalidatePath } from "next/cache";
import path from "path";

export const deleteProject = async (project) => {
  const filePath = path.join(process.cwd(), "public", project.imgUrl);

  await fs.unlink(filePath);

  await Promise.all(
    project.gridImgs.split(",").map(async (img) => {
      const filePath = path.join(process.cwd(), "public", img);
      await fs.unlink(filePath);
    })
  );

  await prisma.project.delete({ where: { id: project.id } });
  revalidatePath("admin/projects", "page");
};
