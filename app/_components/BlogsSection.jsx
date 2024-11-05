import CustomBtn from "@/components/layout/CustomBtn";
import prisma from "@/prismaClient";
import React from "react";
import BlogCard from "./BlogCard";

const BlogsSection = async ({ variant }) => {
  const blogNumber = variant == "page" ? 10 : 2;
  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
    take: blogNumber,
  });

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr,2.5fr] gap-20">
      <div className="px-10">
        <h2 className="text-6xl mb-5">
          <span className="font-bold">Journals</span> from the axtra
        </h2>
        {variant != "page" && (
          <CustomBtn variant={"primary"} text={"View more blogs"} />
        )}
      </div>
      <div className="flex flex-col gap-20">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;
