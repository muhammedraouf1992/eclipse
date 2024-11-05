import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { signInSchema } from "./lib/validationSchema";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prismaClient";
import bcrypt from "bcryptjs";
import { ZodError } from "zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const parsedCreds = signInSchema.safeParse(credentials);
        if (!parsedCreds.success) {
          console.log("Invalid zod.");
        }

        const { email, password } = parsedCreds.data;

        const user = await prisma.user.findFirst({ where: { email } });

        if (!user) {
          console.log("invalid Creds.");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          console.log("Invalid Password.");
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Add user info to the token if available
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Add user id to session if available
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt", // Use JWT strategy for session handling
  },
});
