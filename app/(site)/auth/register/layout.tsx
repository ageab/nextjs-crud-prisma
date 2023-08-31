import { PropsWithChildren } from "react";

export default function AuthRegisterLayout({ children }: PropsWithChildren) {
  return <main className="container mx-auto p-4">{children}</main>;
}
