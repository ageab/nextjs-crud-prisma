"use client";

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface UserData {
  name: string;
  email: string;
  password: string;
}

const AuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api/register`, {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (!response.ok) return toast.error("Something went wrong");
      toast.success("Registered successfully!");
    } catch (error) {
      toast.error("Register Failed!");
    }
  };

  return (
    <>
      <div className="flex items-center my-4 w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-y-2 w-full"
        >
          <input
            type="text"
            id="name"
            placeholder="Name ..."
            className="p-2 w-full block"
            {...register("name", { required: true })}
          />
          <input
            type="email"
            id="email"
            placeholder="Email ..."
            className="p-2 w-full block"
            {...register("email", { required: true })}
          />
          <input
            type="password"
            id="password"
            placeholder="Password ..."
            className="p-2 w-full block"
            {...register("password", { required: true })}
          />
          <button className="bg-sky-500 text-white w-full block py-2">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default AuthForm;
