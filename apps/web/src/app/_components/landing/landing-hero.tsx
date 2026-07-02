import { Button } from "@packages/ui/components";
import Link from "next/link";

export function LandingHero() {
  return (
    <section className="container mx-auto px-6 pt-24 pb-12 text-center max-w-4xl space-y-6">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-zinc-900 dark:text-zinc-100 leading-[1.1]">
        One app for all your <br />
        <span className="bg-clip-text text-transparent bg-linear-to-tr from-zinc-900 via-zinc-700 to-zinc-500 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-400">
          travel planning needs
        </span>
      </h1>

      <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
        Create detailed itineraries, explore user-shared guides, and manage your 
        bookings seamlessly &mdash; all in one place.
      </p>

      {/* Call to Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Link href="/register">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full px-8 h-12 shadow-lg shadow-orange-600/20 transition-all hover:scale-[1.02] border-none">
            Start planning
          </Button>
        </Link>
        <Link href="#app-preview">
          <Button size="lg" variant="ghost" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full px-6 h-12 font-medium group">
            Get the app 
            <span className="inline-block transform translate-x-1 group-hover:translate-x-2 transition-transform ml-1">
              &rarr;
            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
}