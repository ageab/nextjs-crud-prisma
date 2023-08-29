"use client";

const DeleteButton = ({ id }: any) => {
  const onDelete = async () => {
    try {
      const deletePost = await fetch(`http://localhost:3000/api/posts/${id}`, {
        method: "DELETE",
      });
      console.log(deletePost);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button type="button" onClick={onDelete}>
      Delete Post
    </button>
  );
};

export default DeleteButton;
