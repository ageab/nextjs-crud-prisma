"use client";

import { useForm } from "react-hook-form";

type FormData = {
  title: string;
};

const Add = () => {
  // const addPosts = await fetch(`localhost:3000/posts`, { method: "POST" });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: "",
    },
  });
  const onSubmit = async (data: any) => {
    await fetch(`http://localhost:3000/api/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(data);
  };

  return (
    <>
      <h1>Add Posts</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Title</label>
          <input
            {...register("title")}
            type="text"
            className="border"
            name="title"
            id="title"
          />
        </div>
        <button type="submit" className="border button">
          Submit
        </button>
      </form>
    </>
  );
};

export default Add;
