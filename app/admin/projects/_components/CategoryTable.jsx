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
import DeleteCategoryButton from "./DeleteCategoryBtn";

export function CategoryTable({ categories }) {
  if (categories.length == 0) {
    return <p className="uppercase">there are no categories to show</p>;
  }
  return (
    <Table>
      <TableCaption>A list of your recent project categories.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Title</TableHead>
          <TableHead>slug</TableHead>
          <TableHead>Banner image</TableHead>
          <TableHead>actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category) => (
          <TableRow key={category.id}>
            <TableCell className="font-medium">{category.title}</TableCell>
            <TableCell>{category.slug}</TableCell>
            <TableCell>
              <Image
                src={`${category.imgUrl}`}
                width={100}
                height={100}
                alt="blog image"
                className="rounded-3xl"
              />
            </TableCell>
            <TableCell className="flex items-center gap-2">
              <Link href={`/admin/projects/category/${category.id}`}>
                <Pen className=" cursor-pointer" />
              </Link>
              <DeleteCategoryButton category={category} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
