"use server";
import path from "path";
import prisma from "@/prismaClient";
import { revalidatePath } from "next/cache";
import fs from "fs/promises";

export const deleteBlogAction = async (blog) => {
  const filePath = path.join(process.cwd(), "public", blog.imgUrl);

  await fs.unlink(filePath);
  await prisma.blog.delete({
    where: {
      id: blog.id,
    },
  });
  revalidatePath("admin/blog", "page");
};
