"use server";
import { deleteImage } from "@/lib/imageActions";
// import path from "path";
import prisma from "@/prismaClient";
import { revalidatePath } from "next/cache";
// import fs from "fs/promises";

export const deleteBlogAction = async (blog) => {
  // const filePath = path.join(process.cwd(), "public", blog.imgUrl);
  // await fs.unlink(filePath);

  // Delete the image from Cloudinary
  if (blog.imgUrl) {
    const publicId = blog.imgUrl.split("/").pop().split(".")[0];
    await deleteImage(publicId);
  }
  await prisma.blog.delete({
    where: {
      id: blog.id,
    },
  });
  revalidatePath("admin/blog", "page");
};
