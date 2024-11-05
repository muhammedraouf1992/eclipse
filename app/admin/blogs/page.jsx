import { Button } from "@/components/ui/button";
import prisma from "@/prismaClient";
import Link from "next/link";
import React from "react";
import { BlogTable } from "./_components/BlogTable";

const BlogsPage = async () => {
  const blogs = await prisma.blog.findMany({});

  return (
    <div>
      <div className="flex justify-between">
        <h2>Blogs Page</h2>
        <Button asChild>
          <Link href="/admin/blogs/add-blog">Add new blog</Link>
        </Button>
      </div>
      <BlogTable blogs={blogs} />
    </div>
  );
};

export default BlogsPage;
