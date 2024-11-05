"use server";

import prisma from "@/prismaClient";
import fs from "fs/promises";
import path from "path";

export const deleteProjectImg = async (gridImgsStr, project, img) => {
  console.log("gridImgsStr");
  console.log(gridImgsStr);

  const filePath = path.join(process.cwd(), "public", img);
  await fs.unlink(filePath);

  await prisma.project.update({
    where: { id: project.id },
    data: {
      gridImgs: gridImgsStr,
    },
  });
};
