import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DeleteBlogButton from "./DeleteBlogButton";

export function BlogTable({ blogs }) {
  if (blogs.length == 0) {
    return <p className="uppercase">there are no blogs to show</p>;
  }
  return (
    <Table>
      <TableCaption>A list of your recent blogs.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Title</TableHead>
          <TableHead>slug</TableHead>
          <TableHead>Featured image</TableHead>
          <TableHead>actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {blogs.map((blog) => (
          <TableRow key={blog.id}>
            <TableCell className="font-medium">{blog.title}</TableCell>
            <TableCell>{blog.slug}</TableCell>
            <TableCell>
              <Image
                src={`${blog.imgUrl}`}
                width={100}
                height={100}
                alt="blog image"
                className="rounded-3xl"
              />
            </TableCell>
            <TableCell className="flex items-center gap-2">
              <Link href={`/admin/blogs/${blog.id}`}>
                <Pen className=" cursor-pointer" />
              </Link>

              <DeleteBlogButton blog={blog} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
