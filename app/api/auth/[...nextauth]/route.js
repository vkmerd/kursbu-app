import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const authLoginOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
          include: {
            student: true, 
            teacher: true,  
          },
        });

        if (!user) {
          throw new Error("E-mail bilgileriniz yanlış, tekrardan deneyiniz.");
        }

        const passwordValid = await bcrypt.compare(credentials.password, user.password);
        if (!passwordValid) {
          throw new Error("Şifre yanlış");
        }
        return {
          id: user.id,
          name: user.name,
          surname: user.surname,
          email: user.email,
          role: user.role,
          photo: user.photo, 
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.surname = user.surname; 
        token.role = user.role;
        token.photo = user.photo; 
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.surname = token.surname;
      session.user.role = token.role;
      session.user.photo = token.photo; 
      return session;
    },

  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const GET = NextAuth(authLoginOptions);
export const POST = NextAuth(authLoginOptions);
