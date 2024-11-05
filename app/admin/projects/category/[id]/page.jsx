import prisma from "@/prismaClient";
import React from "react";
import { EditCategoryForm } from "../../_components/EditProjectCategoryForm";

const EditCategoryPage = async ({ params }) => {
  const category = await prisma.projectCategory.findUnique({
    where: { id: params.id },
  });
  return <EditCategoryForm category={category} />;
};

export default EditCategoryPage;
