import React from "react";

import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import prisma from "@/prismaClient";
const Navbar = async () => {
  const categories = await prisma.projectCategory.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="absolute top-0 left-0 right-0">
      <DesktopNavbar categories={categories} />
      <MobileNavbar categories={categories} />
    </div>
  );
};

export default Navbar;
