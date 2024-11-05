import prisma from "@/prismaClient";
import React from "react";
import EditProjectForm from "../../_components/EditProjectForm";

const EditProjectPage = async ({ params }) => {
  const categories = await prisma.projectCategory.findMany({});
  const project = await prisma.project.findUnique({ where: { id: params.id } });

  return (
    <div>
      <EditProjectForm project={project} categories={categories} />
    </div>
  );
};

export default EditProjectPage;
