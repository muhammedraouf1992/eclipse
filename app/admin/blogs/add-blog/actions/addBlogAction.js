"use server";

import { uploadSingleImage } from "@/lib/imageActions";
import { convertToKebabCase } from "@/lib/utils";
import { formSchema } from "@/lib/validationSchema";
import prisma from "@/prismaClient";
// import fs from "fs/promises";
import { revalidatePath } from "next/cache";

export const addBlogAction = async (formData) => {
  const newData = Object.fromEntries(formData.entries());
  const results = formSchema.safeParse(newData);

  if (results.success === false) {
    return results.error.formErrors.fieldErrors;
  }
  const data = results.data;

  // await fs.mkdir("public/blogs", { recursive: true });

  // const filePath = `/blogs/${crypto.randomUUID()}-${data.image.name}`;

  // await fs.writeFile(
  //   `public/${filePath}`,
  //   Buffer.from(await data.image.arrayBuffer())
  // );

  const url = await uploadSingleImage(data.image);

  const dataSlug = convertToKebabCase(data.slug);

  await prisma.blog.create({
    data: {
      title: data.title,
      slug: dataSlug,
      content: data.content,
      imgUrl: url,
    },
  });
  revalidatePath("/admin/blog", "page");
};
