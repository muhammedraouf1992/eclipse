"use server";
import prisma from "@/prismaClient";
import fs from "fs/promises";

import { revalidatePath } from "next/cache";
import path from "path";
export const deleteCategoryAction = async (category) => {
  const filePath = path.join(process.cwd(), "public", category.imgUrl);

  fs.unlink(filePath);

  await prisma.projectCategory.delete({ where: { id: category.id } });

  revalidatePath("/admin/projects", "page");
};
