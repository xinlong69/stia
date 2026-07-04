import { getSession } from "@web/auth/server";
import { redirect } from "next/navigation";

export default async function FeedPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
    </div>
  );
}