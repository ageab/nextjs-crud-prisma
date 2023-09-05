"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface UserData {
  name: string;
  email: string;
  password: string;
}

const AuthLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      signIn("credentials", { ...data, redirect: false }).then((callback) => {
        if (callback?.error) {
          toast.error("Invalid credentials");
        }

        if (callback?.ok && !callback?.error) {
          toast.success("Login Successfully!");
        }
      });
    } catch (error) {
      toast.error("Login Failed!");
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

export default AuthLogin;
