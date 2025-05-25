import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Incoming data:", body); // ✅ LOG THIS

    const { userId, habit } = body;

    if (!userId || !habit) {
      console.error("Missing data", { userId, habit }); // ✅ LOG THIS
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    const result = await prisma.user.create({
      data: {
        userId,
        habit,
        trackList: [],
      },
    });

    console.log("Inserted habit:", result); // ✅ LOG SUCCESS

    return NextResponse.json({ message: "Habit created" });
  } catch (error) {
    console.error("API error:", error); // ✅ LOG ERRORS
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
