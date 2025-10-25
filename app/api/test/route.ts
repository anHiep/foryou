import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

async function verifyApiKey(req: Request) {
  const key = req.headers.get("x-api-key");
  return key === process.env.API_SECRET_KEY;
}

export async function GET(req: Request) {
  if (!(await verifyApiKey(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const notes = await prisma.test.findMany();
  return NextResponse.json(notes);
}

export async function POST(req: Request) {
  if (!(await verifyApiKey(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await req.json();
  const note = await prisma.test.create({ data });
  return NextResponse.json(note);
}
