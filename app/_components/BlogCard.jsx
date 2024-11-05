import Link from "next/link";
import React from "react";
import parse from "html-react-parser";
import CustomBtn from "@/components/layout/CustomBtn";
import Image from "next/image";

const BlogCard = ({ blog }) => {
  const getFirst100Words = (htmlContent) => {
    const plainTextContent = htmlContent.replace(/<[^>]+>/g, ""); // Strip HTML tags
    const words = plainTextContent.split(" ").slice(0, 60).join(" "); // Get first 100 words
    return words;
  };

  const content = getFirst100Words(blog.content);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] pb-10 border-b border-white/20 gap-20 singleBlog">
      <div>
        <Image
          src={blog.imgUrl}
          width={400}
          height={400}
          alt="blog image"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-start">
          <p className="text-[12px] uppercase bg-white/20 py-1 px-4 rounded-full ">
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div>
          <Link href={`/blog/${blog.slug}`}>
            <h4 className="text-3xl">{blog.title}</h4>
          </Link>
        </div>
        <div className="text-white/70">{parse(content)}</div>
        <CustomBtn
          variant={"outline"}
          text={"Read more"}
          href={`/blogs/${blog.slug}`}
        />
      </div>
    </div>
  );
};

export default BlogCard;
