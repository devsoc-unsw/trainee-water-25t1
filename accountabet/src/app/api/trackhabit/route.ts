import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("userId");
  if (!userId)
    return NextResponse.json({ error: "Missing userId" }, { status: 400 });

  const user = await prisma.user.findFirst({
    where: { userId },
  });

  return NextResponse.json({ trackList: user?.trackList || [] });
}

export async function POST(req: Request) {
  const { userId, date } = await req.json();

  if (!userId || !date) {
    return NextResponse.json({ error: "Missing data" }, { status: 400 });
  }

  // Add today's date to trackList
  const updated = await prisma.user.updateMany({
    where: { userId },
    data: {
      trackList: {
        push: new Date(date),
      },
    },
  });

  return NextResponse.json({ message: "Date tracked", updated });
}
