"use server";

import prisma from "./prismaClient";

import bcrypt from "bcryptjs";

export const registerUser = async () => {
  const password = await bcrypt.hash("admin", 10);
  await prisma.user.create({
    data: {
      name: "eclipse admin",
      email: "admin@eclipse.com",
      emailVerified: new Date(),
      password: password,
    },
  });
};
