import prisma from "@/prismaClient";
import React from "react";

const AdminPage = async () => {
  const services = await prisma.projectCategory.findFirst({
    where: {
      slug: "branding",
    },
  });
  console.log(services);

  return <div>AdminPage</div>;
};

export default AdminPage;
