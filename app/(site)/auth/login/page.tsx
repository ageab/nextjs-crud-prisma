import AuthForm from "@/app/components/AuthForm";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Site Logo"
          height={120}
          width={120}
          className="mx-auto w-auto"
          src={"/images/logo.svg"}
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign In to your account
        </h2>
        <AuthForm />

        <Link
          href={"/auth/register"}
          className="text-sky-500 text-center mx-auto block"
        >
          Belum punya akun?
        </Link>
      </div>
    </div>
  );
}
