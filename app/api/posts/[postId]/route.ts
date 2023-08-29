import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: any }) {
  //    console.log(params.postId, 'GET ID')
  const data = await prisma.post.findUnique({
    where: {
      id: Number(params.postId),
    },
  });
  return NextResponse.json(data);
}

export async function DELETE(req: Request, { params }: { params: any }) {
  // console.log(paramsId);
  const deletePost = await prisma.post.delete({
    where: {
      id: Number(params.postId),
    },
  });

  return NextResponse.json(deletePost);
}
