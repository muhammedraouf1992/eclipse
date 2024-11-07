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

import DeleteProjectButton from "./DeleteProjectBtn";

export default function ProjectTable({ projects }) {
  if (projects.length == 0) {
    return <p className="uppercase">there are no projects to show</p>;
  }

  return (
    <Table>
      <TableCaption>A list of your recent projects</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Title</TableHead>
          <TableHead>slug</TableHead>
          <TableHead>project name</TableHead>
          <TableHead>Banner image</TableHead>
          <TableHead>actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.id}>
            <TableCell className="font-medium">{project.title}</TableCell>
            <TableCell>{project.slug}</TableCell>
            <TableCell>{project.projectCategory.title}</TableCell>
            <TableCell>
              <Image
                src={`${project.imgUrl}`}
                width={100}
                height={100}
                alt="blog image"
                className="rounded-3xl"
              />
            </TableCell>
            <TableCell className="flex items-center gap-2">
              <Link href={`/admin/projects/project/${project.id}`}>
                <Pen className=" cursor-pointer" />
              </Link>
              <DeleteProjectButton project={project} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
