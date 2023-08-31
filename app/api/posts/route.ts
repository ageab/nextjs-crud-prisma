import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

type PostData = {
  title: string;
  content: string;
};

export async function GET(res: Response) {
  const data = await prisma.post.findMany();
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { title, content }: PostData = body;
  const create = await prisma.post.create({
    data: {
      title: title,
      content: content,
    },
  });

  return NextResponse.json(create);
}
