import React from "react";
import { EditBlogForm } from "./_components/EditBlogForm";
import prisma from "@/prismaClient";

const EditBlogPage = async ({ params }) => {
  const blog = await prisma.blog.findUnique({
    where: { id: params.id },
  });
  return (
    <div className="my-10">
      <h1 className="text-3xl">Add New Blog</h1>
      <EditBlogForm blog={blog} />
    </div>
  );
};

export default EditBlogPage;
