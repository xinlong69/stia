import { getSession } from "@web/auth/server";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <>
      <main className="w-full dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 overflow-x-hidden">
        {children}
      </main>
    </>
  );
}