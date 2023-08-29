async function getPostByID(id: any) {
  const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) return new Error("Internal Error");

  return {
    props: { response },
  };
}

const PostById = async ({params}: any) => {

  const data = await getPostByID(params.postId);
  console.log(data);

  return (
    <>
      <h1>Post By ID</h1>
      {/* {data.title} */}
    </>
  );
};

export default PostById;
