import { NextResponse } from "next/server";
import { PrismaClient } from "@accountabet/generated/prisma";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      email,
      name: "",
      emailVerified: false,
      accounts: {
        create: {
          providerId: "credentials",
          accountId: email,
          password: hashedPassword,
        },
      },
    },
  });

  return NextResponse.json({ message: "User created", userId: newUser.id });
}
