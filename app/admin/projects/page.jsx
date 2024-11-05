import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { CategoryTable } from "./_components/CategoryTable";
import prisma from "@/prismaClient";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectTable from "./_components/ProjectTable";
const ProjectsPage = async () => {
  const categories = await prisma.projectCategory.findMany({
    orderBy: { createdAt: "desc" },
  });
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
    include: { projectCategory: true },
  });
  return (
    <div>
      <div className="flex justify-between ">
        <h2>Projects Page</h2>
        <div className="space-x-2">
          <Button asChild>
            <Link href="/admin/projects/add-category">Add new Category</Link>
          </Button>
          <Button asChild>
            <Link href="/admin/projects/add-project">Add new project</Link>
          </Button>
        </div>
      </div>
      <Tabs defaultValue="account" className="">
        <TabsList>
          <TabsTrigger value="account">Projects</TabsTrigger>
          <TabsTrigger value="password">Categories</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <ProjectTable projects={projects} />
        </TabsContent>
        <TabsContent value="password">
          <CategoryTable categories={categories} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProjectsPage;
