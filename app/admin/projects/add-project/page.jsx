import React from "react";
import AddProjectForm from "../_components/AddProjectForm";
import prisma from "@/prismaClient";

const AddProjectPage = async () => {
  const categories = await prisma.projectCategory.findMany({});
  return (
    <div className="my-10">
      <h1 className="text-3xl">Add New Project</h1>
      <AddProjectForm categories={categories} />
    </div>
  );
};

export default AddProjectPage;
