import { PrismaClient } from "@prisma/client";
import DeleteButton from "./delete/page";

async function getPosts() {
  const response = await fetch(`http://localhost:3000/api/posts`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 10 },
  });
  if (!response.ok) return new Error("Internal Error");
  return response.json();
}

const Posts = async () => {
  const data = await getPosts();
  console.log(data);

  return (
    <>
      <h1>Posts</h1>
      <div className="grid grid-cols-1 gap-y-4">
        {data.map((item: any) => {
          return (
            <div key={item.id}>
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <DeleteButton id={item.id} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Posts;
