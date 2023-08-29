import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(res: Response) {
  const data = await prisma.post.findMany();
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { title } = body;
  const create = await prisma.post.create({
    data: {
      title,
    },
  });

  return NextResponse.json(create);
}
