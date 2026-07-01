import { PlanHero } from "@web/app/_components/plan/plan-hero";
import { getSession } from "@web/auth/server";
import { redirect } from "next/navigation";

export default async function PlanPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Main content layout area. 
        pt-20 gives space at the top so the floating 'Menu' button doesn't block your UI.
      */}
      <div className="container mx-auto px-4 pt-24 pb-8 flex flex-col items-center justify-center">
        <PlanHero user={session.user} />
      </div>
    </main>
  );
}